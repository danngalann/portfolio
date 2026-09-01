"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";
import { RenderImageContext, RenderImageProps } from "react-photo-album";

// Static imports for all astro images
import andromedaImg from "@/public/astro/andromeda.jpg";
import bodeImg from "@/public/astro/bode.jpg";
import dumbbellImg from "@/public/astro/dumbbell.jpg";
import heartNebulaImg from "@/public/astro/heart_nebula.jpg";
import horseheadImg from "@/public/astro/horsehead.jpg";
import milkyWayImg from "@/public/astro/milky_way.jpg";
import ngc6914Img from "@/public/astro/ngc6914.jpg";
import pleiadesImg from "@/public/astro/pleiades.jpg";
import silhouetteImg from "@/public/astro/silhouette.jpg";
import veilNebulaImg from "@/public/astro/veil_nebula.jpg";

// Mapping from filename to imported image
const imageMap: Record<string, StaticImageData> = {
  "veil_nebula.jpg": veilNebulaImg,
  "andromeda.jpg": andromedaImg,
  "bode.jpg": bodeImg,
  "dumbbell.jpg": dumbbellImg,
  "heart_nebula.jpg": heartNebulaImg,
  "horsehead.jpg": horseheadImg,
  "milky_way.jpg": milkyWayImg,
  "ngc6914.jpg": ngc6914Img,
  "pleiades.jpg": pleiadesImg,
  "silhouette.jpg": silhouetteImg,
};

interface AstroPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  blurDataURL?: string;
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

const galleryImageSizes =
  "(max-width: 599px) calc(100vw - 32px), (max-width: 799px) calc((100vw - 47px) / 2), calc((100vw - 62px) / 3)";

function renderNextImage(
  { alt = "", title }: RenderImageProps,
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
        sizes={galleryImageSizes}
        placeholder="blur"
        className="object-cover"
      />
    </div>
  );
}

export default function AstroGallery({ media }: AstroGalleryProps) {
  const [index, setIndex] = useState(-1);

  const closeGallery = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("ap");
    window.history.replaceState(window.history.state, "", url);
    setIndex(-1);
  };

  useEffect(() => {
    const requestedPicture = new URLSearchParams(window.location.search).get(
      "ap",
    );
    if (!requestedPicture) return;

    const requestedIndex = Object.keys(media)
      .filter((filename) => filename in imageMap)
      .findIndex(
        (filename) => filename.replace(/\.[^.]+$/, "") === requestedPicture,
      );
    if (requestedIndex < 0) return;

    const frame = requestAnimationFrame(() => {
      document
        .getElementById("astrophotography-section")
        ?.scrollIntoView({ block: "start" });
      setIndex(requestedIndex);
    });

    return () => cancelAnimationFrame(frame);
  }, [media]);

  // Transform media object into photos array, using static imports
  const photos: AstroPhoto[] = Object.entries(media)
    .filter(([filename]) => filename in imageMap)
    .map(([filename, data]) => {
      const img = imageMap[filename];
      return {
        src: img.src,
        width: img.width,
        height: img.height,
        alt: data.description,
        title: data.title,
        description: data.description,
        blurDataURL: img.blurDataURL,
      };
    });

  // Transform for lightbox slides with descriptions
  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    title: photo.title,
    description: photo.description,
    width: photo.width,
    height: photo.height,
    blurDataURL: photo.blurDataURL,
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
        close={closeGallery}
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
                    placeholder="blur"
                    blurDataURL={slides[index]?.blurDataURL}
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 1280px"
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
