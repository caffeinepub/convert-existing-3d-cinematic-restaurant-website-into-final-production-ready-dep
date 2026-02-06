import { useState } from 'react';
import { galleryImages } from '../data/gallery';
import GalleryLightbox from '../components/gallery/GalleryLightbox';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-gradient-to-b from-zinc-950 to-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-amber-400 md:text-5xl lg:text-6xl">
            Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-amber-100/80 md:text-xl">
            A glimpse into our culinary world
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-semibold text-amber-400">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <GalleryLightbox
          images={galleryImages}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}
    </section>
  );
}
