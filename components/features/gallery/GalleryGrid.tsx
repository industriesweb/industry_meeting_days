"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import galleryList from "@/data/galleryList.json";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="w-full grid grid-cols-6 lg:grid-cols-8 lg:grid-rows-9 mt-8 items-center gap-2">
        {galleryList.map((item, index) => (
          <GalleryGridCard
            key={index}
            image={item.image}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <SelectedImageModal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const GalleryGridCard = ({
  image,
  setSelectedImage,
}: {
  image: string;
  setSelectedImage: (image: string | null) => void; // Fixed type
}) => {
  const RandDelay = Math.random() / 2;

  return (
    <motion.div
      key={image}
      layoutId={image}
      onClick={() => setSelectedImage(image)}
      className="w-full h-44 md:h-72 2xl:h-96 gallery-grid-card relative cursor-pointer rounded-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: RandDelay }}
        className="w-full h-full relative"
      >
        <Image
          fill
          priority={true}
          src={image}
          className="w-full h-full object-cover rounded select-none"
          alt="gallery-image"
          sizes="100%"
        />
      </motion.div>
    </motion.div>
  );
};

const SelectedImageModal = ({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: (image: string | null) => void;
}) => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.img
        src={selectedImage}
        alt="Enlarged"
        layoutId={selectedImage}
        className="w-5/6 md:w-[60%] shadow-lg rounded-sm select-none"
      />
    </motion.div>
  );
};
