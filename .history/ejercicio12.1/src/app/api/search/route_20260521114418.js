import dbConnect from "@/lib/mongodb";
import Image from "@/models/Image";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");

  if (!query) {
    const images = await Image.find();
    return Response.json(images);
  }

  const terms = query
    .split(",")
    .map((term) => term.trim().toLowerCase());

  const images = await Image.find({
    objects: {
      $all: terms,
    },
  });

  return Response.json(images);
}