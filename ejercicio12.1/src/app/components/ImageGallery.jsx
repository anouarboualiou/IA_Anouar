export default function ImageGallery({ images }) {

  return (

    <div className="row g-4">

      {images.map((img) => {

        const src = img.image
          ? `/api/image/${encodeURIComponent(img.image)}`
          : img.url;

        return (

          <div
            className="col-md-4"
            key={img._id}
          >

            <div className="card shadow h-100">

              <img
                src={src}
                alt={img.objects?.join(", ") || "imagen"}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">

                <h5 className="card-title">
                  Objetos detectados
                </h5>

                <div>

                  {img.objects.map((obj, i) => (

                    <span
                      key={i}
                      className="
                        badge
                        bg-primary
                        me-2
                        mb-2
                      "
                    >

                      {obj}

                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}