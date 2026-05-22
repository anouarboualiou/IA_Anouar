import { v4 as uuidv4 } from "uuid";

import fs from "fs";

import path from "path";

import { groq } from "@/lib/groq";

import { connectDB } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(req) {

  try {

    const formData =
      await req.formData();

    const file =
      formData.get("image");

    if (!file) {

      return Response.json({
        error: "No image",
      });

    }

    // BUFFER

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    // UUID

    const fileName =
      `${uuidv4()}-${file.name}`;

    // CARPETA uploads

    const uploadsDir = path.join(
      process.cwd(),
      "public/uploads"
    );

    // crear carpeta si no existe

    if (!fs.existsSync(uploadsDir)) {

      fs.mkdirSync(
        uploadsDir,
        { recursive: true }
      );

    }

    // PATH IMAGEN

    const uploadPath = path.join(
      uploadsDir,
      fileName
    );

    // GUARDAR IMAGEN

    fs.writeFileSync(
      uploadPath,
      buffer
    );

    // URL LOCAL

    const imageUrl =
      `/uploads/${fileName}`;

    // BASE64 PARA GROQ

    const base64 =
      buffer.toString("base64");

    // IA GROQ

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
`
Devuelve SOLO un array JSON.

Ejemplo:
["persona","mesa","ordenador"]
`,
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

    // RESPUESTA IA

    const text =
      completion
        .choices[0]
        .message.content;

    let objects = [];

    try {

      const cleanText =
        text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

      objects =
        JSON.parse(cleanText);

    } catch {

      objects = [text];

    }

    // MONGODB

    const db =
      await connectDB();

    await db
      .collection("imagenes")
      .insertOne({

        image: fileName,

        url: imageUrl,

        objects,

      });

    return Response.json({

      success: true,

      imageUrl,

      objects,

    });

  } catch (error) {

    return Response.json({

      success: false,

      error: error.message,

    });

  }

}