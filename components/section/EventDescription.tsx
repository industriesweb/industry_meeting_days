"use client";
import { motion } from "motion/react";
import Image from "next/image";

const EventDescription = () => {
  return (
    <section
      id="event-description"
      className="w-full scroll-mt-24 bg-gradient-to-b from-secondary to-primary-dark"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-text-inverted">
        <ImageTextContent />
      </div>
    </section>
  );
};

const ImageTextContent = () => {
  /* ---------------- Animations ---------------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
        {/* Image — 1/4 */}
        <motion.div
          variants={scaleIn}
          className="w-full aspect-[1.78/1] bg-transparent shadow-2xl lg:col-span-1 relative overflow-hidden rounded-2xl"
        >
          <Image
            src="https://res.cloudinary.com/dzcarbymi/image/upload/v1766138083/IDM_magazine-02_sbt2g6.png"
            alt="Industry Meeting Days"
            className="w-full h-full object-cover"
            fill
            sizes="100%"
          />
        </motion.div>

        {/* Text — 3/4 */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-3 space-y-6 text-base sm:text-lg leading-relaxed text-center lg:text-justify"
        >
          <p className="font-medium">
            <span className="font-semibold ">Industrie du Maroc Magazine</span>{" "}
            organise la 8ᵉ édition de l’événement prestigieux « Industry Meeting
            Days ».
          </p>

          <p>
            Après des éditions couronnées de succès au Maroc ces dernières
            années, cette édition spéciale se tiendra du 6 au 7 mai 2026 à
            Casablanca, avec un focus élargi sur les opportunités et défis de la
            transformation industrielle du continent.
          </p>

          <p>
            Cette édition se déroulera sous le thème « Afrique 4.0 : Façonner
            l’Avenir Industriel du Continent ».
          </p>

          <p>
            Cet événement réunira des parties prenantes marocaines, africaines
            et internationales issues des secteurs public et privé, notamment
            des représentants d’États africains, des universités et institutions
            académiques, des centres de recherche, des fournisseurs de
            technologies ainsi que des experts de l’industrie numérique et de
            l’innovation.
          </p>

          <p>
            Industry Meeting Days 2026 offrira une plateforme d’échanges, de
            dialogues et de collaborations entre les acteurs engagés dans
            l’industrialisation intelligente de l’Afrique. L’événement mettra
            l’accent sur le partage de connaissances, d’expertises et de
            meilleures pratiques afin de bâtir un secteur manufacturier africain
            plus compétitif, inclusif et durable, porté par l’Industrie 4.0.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventDescription;
