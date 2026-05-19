"use client";

export default function UploadForm({
  reloadImages,
}) {

  async function handleSubmit(e) {

    e.preventDefault();

    const formData =
      new FormData();

    formData.append(
      "image",
      e.target.image.files[0]
    );

    await fetch("/api/upload", {

      method: "POST",

      body: formData,

    });

    reloadImages();

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="d-flex gap-3"
    >

      <input
        type="file"
        name="image"
        className="form-control"
      />

      <button
        className="btn btn-primary"
        type="submit"
      >

        Subir

      </button>

    </form>

  );

}