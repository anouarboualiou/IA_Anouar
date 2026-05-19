import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(req, { params }) {

  const { key } = await params;

  if (!key) {

    return new Response(
      "Image key missing",
      {
        status: 400,
      }
    );

  }

  const imagePath = path.join(
    process.cwd(),
    "public/uploads",
    key
  );

  if (!fs.existsSync(imagePath)) {

    return new Response(
      "Image not found",
      {
        status: 404,
      }
    );

  }

  const imageBuffer =
    fs.readFileSync(imagePath);

  return new Response(imageBuffer, {

    status: 200,

    headers: {
      "Content-Type": "image/jpeg",
    },

  });

}