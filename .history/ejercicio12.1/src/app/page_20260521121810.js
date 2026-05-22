
"use client";

import { useEffect, useState } from "react";

import "./globals.css";

export default function Home() {

  const [file, setFile] = useState(null);

  const [images, setImages] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {

    const res =
      await fetch("/api/search");

    const data =
      await res.json();

    setImages(data);
  }

  async function handleUpload(e) {

    e.preventDefault();

    if (!file) return;

    const formData =
      new FormData();

    formData.append(
      "image",
      file
    );

    const res =
      await fetch("/api/upload", {
        method: "POST",

        body: formData,
      });

    const data =
      await res.json();

    if (!res.ok) {

      console.log(data.error);

      return;
    }

    setImages([
      data,
      ...images,
    ]);
  }

  async function handleSearch(e) {

    const value =
      e.target.value;

    setSearch(value);

    const res =
      await fetch(
        `/api/search?q=${value}`
      );

    const data =
      await res.json();

    setImages(data);
  }

  return (
    <main className="container">

      <h1>
        Gestor de imágenes IA
      </h1>

      <form
        onSubmit={handleUpload}
      >

        <input
          type="file"

          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
        />

        <button type="submit">
          Subir imagen
        </button>

      </form>

      <input
        type="text"

        placeholder="Buscar: perro,coche,persona"

        value={search}

        onChange={
          handleSearch
        }
      />

      <div className="gallery">

        {Array.isArray(images) &&
          images.map((img) => (

            <div
              className="card"

              key={img._id}
            >

              <p>{img.url}</p>

               <img
                  src={img.url}
                  alt=""
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                    background: "red"
                  }}
                />

              <h3>
                Objetos detectados
              </h3>

              <ul>

                {img.objects?.map(
                  (obj, index) => (

                    <li key={index}>
                      {obj}
                    </li>
                  )
                )}

              </ul>

            </div>
          ))}

      </div>

    </main>
  );
}