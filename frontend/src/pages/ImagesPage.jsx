import React, { useState, useEffect } from "react";
import { getImagesRequest } from "../api/image.api";

function ImagesPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const response = await getImagesRequest();
      setImages(response.data);
    }
    loadImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img
            src={"http://localhost:4000/" + image}
            width="300"
            height="300"
          />
        </div>
      ))}
    </div>
  );
}

export default ImagesPage;