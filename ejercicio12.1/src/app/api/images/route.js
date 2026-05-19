import { connectDB } from "@/lib/mongodb";

export async function GET() {

  const db = await connectDB();

  const images =
    await db
      .collection("imagenes")
      .find({})
      .toArray();

  return Response.json(images);

}