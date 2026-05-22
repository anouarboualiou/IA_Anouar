"use client";

import { useEffect, useState }
from "react";

import UploadForm
from "./components/UploadForm";

import SearchBar
from "./components/SearchBar";

import ImageGallery
from "./components/ImageGallery";

export default function Home() {

  const [images, setImages] =
    useState([]);

  const [search, setSearch] =
    useState("");

  async function loadImages() {

    const res =
      await fetch("/api/images");

    const data =
      await res.json();

    setImages(data);

  }

  useEffect(() => {

    loadImages();

  }, []);

  const filteredImages =
    images.filter((img) => {

      const terms =
        search
          .toLowerCase()
          .split(" ")
          .filter(Boolean);

      return terms.every((term) =>

        img.objects.some((obj) =>

          obj.toLowerCase()
            .includes(term)

        )

      );

    });

  return (

    <main className="container py-5">

      <h1 className="text-center mb-5">

        Gestor IA de imágenes

      </h1>

      <div className="card p-4 shadow mb-4">

        <UploadForm
          reloadImages={loadImages}
        />

      </div>

      <div className="mb-4">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      </div>

      <ImageGallery
        images={filteredImages}
      />

    </main>

  );

}