"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ProjectImage, ProjectVideo } from "@/lib/projects";

interface ProjectGalleryProps {
  images: ProjectImage[];
  videos?: ProjectVideo[];
}

export function ProjectGallery({ images, videos = [] }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const allMedia = [
    ...images.map((image) => ({ type: "image" as const, data: image })),
    ...videos.map((video) => ({ type: "video" as const, data: video })),
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allMedia.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + allMedia.length) % allMedia.length
    );
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="w-full">
      {/* Main Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {allMedia.map((media, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox(index)}
          >
            {media.type === "image" ? (
              <img
                src={media.data.src || "/placeholder.svg"}
                alt={media.data.alt}
                className="object-cover"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={
                    media.data.poster ||
                    "/placeholder.svg?height=400&width=700&text=Video"
                  }
                  alt="Video thumbnail"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>

            <div
              className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {allMedia[currentIndex].type === "image" ? (
                <div className="relative w-full h-full">
                  <img
                    src={allMedia[currentIndex].data.src || "/placeholder.svg"}
                    alt={allMedia[currentIndex].data.alt}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[80vh] mx-auto"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-video">
                  <video
                    src={allMedia[currentIndex].data.src}
                    poster={allMedia[currentIndex].data.poster}
                    controls
                    className="w-full h-full"
                  >
                    <source
                      src={allMedia[currentIndex].data.src}
                      type={allMedia[currentIndex].data.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentIndex + 1} / {allMedia.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
