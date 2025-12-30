"use client";

import { useState } from "react";
import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";
import { RenderImageContext, RenderImageProps } from "react-photo-album";

interface AstroPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
}

interface AstroGalleryProps {
  media: Record<
    string,
    {
      title: string;
      description: string;
      width?: number;
      height?: number;
    }
  >;
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export default function AstroGallery({ media }: AstroGalleryProps) {
  const [index, setIndex] = useState(-1);

  // Transform media object into photos array, filtering out images without dimensions
  const photos: AstroPhoto[] = Object.entries(media)
    .filter(([, data]) => data.width && data.height)
    .map(([filename, data]) => ({
      src: `/astro/${filename}`,
      width: data.width!,
      height: data.height!,
      alt: data.description,
      title: data.title,
      description: data.description,
    }));

  // Transform for lightbox slides with descriptions
  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    title: photo.title,
    description: photo.description,
  }));

  return (
    <div className="w-full mx-auto mx-4 md:mx-0">
      <MasonryPhotoAlbum
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
        render={{ image: renderNextImage }}
        spacing={15}
        columns={(containerWidth) => {
          if (containerWidth < 600) return 1;
          if (containerWidth < 800) return 2;
          return 3;
        }}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        on={{
          view: ({ index: currentIndex }) => {
            if (currentIndex !== index) {
              setIndex(currentIndex);
            }
          },
        }}
        render={{
          slide: (props) => {
            const currentSlide = slides[index];
            return (
              <div className="flex flex-col items-center justify-center h-full w-full p-8">
                <div className="relative w-full h-full max-w-7xl max-h-[80vh]">
                  <Image
                    src={props.slide.src}
                    alt={props.slide.alt || ""}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                {currentSlide?.description && (
                  <div className="mt-4 max-w-3xl text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {currentSlide.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {currentSlide.description}
                    </p>
                  </div>
                )}
              </div>
            );
          },
        }}
      />
    </div>
  );
}
