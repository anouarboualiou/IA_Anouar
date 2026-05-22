// ===============================
// src/app/api/upload/route.js
// ===============================

import { v4 as uuidv4 } from "uuid";

import { PutObjectCommand } from "@aws-sdk/client-s3";

import dbConnect from "@/lib/mongodb";

import Image from "@/models/Image";

import s3 from "@/lib/s3";

import groq from "@/lib/groq";

export async function POST(req) {

  try {

    await dbConnect();

    const formData = await req.formData();

    const file = formData.get("image");

    if (!file) {
      return Response.json(
        { error: "No hay imagen" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const extension = file.name.split(".").pop();

    const filename = `${uuidv4()}.${extension}`;

    // ==========================
    // SUBIR A S3
    // ==========================

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: filename,
        Body: buffer,
        ContentType: file.type,
      })
    );

    const imageUrl =
      `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${filename}`;

    // ==========================
    // IA GROQ
    // ==========================

    const base64 = buffer.toString("base64");

    const completion =
      await groq.chat.completions.create({

        model:
          "meta-llama/llama-4-scout-17b-16e-instruct",

        messages: [
          {
            role: "user",

            content: [
              {
                type: "text",

                text:
                  "Devuelve únicamente una lista separada por comas con los objetos que aparecen en la imagen",
              },

              {
                type: "image_url",

                image_url: {
                  url:
                    `data:${file.type};base64,${base64}`,
                },
              },
            ],
          },
        ],
      });

    const text =
      completion.choices[0].message.content;

    const objects = text
      .split(",")
      .map((obj) =>
        obj.trim().toLowerCase()
      );

    const newImage = await Image.create({
      filename,

      url: imageUrl,

      objects,
    });

    return Response.json(newImage);

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}