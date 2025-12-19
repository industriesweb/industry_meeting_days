"use client";
import React from "react";
import SponsorCard from "./SponsorCard";
import SponsorsList from "@/data/sponsorsList.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SponsorsGrid() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        loop
        modules={[Autoplay]}
        breakpoints={{
          // Mobile: <640px
          0: { slidesPerView: 3, spaceBetween: 15 },

          // sm: ≥640px
          640: { slidesPerView: 3, spaceBetween: 15 },

          // md: ≥768px
          768: { slidesPerView: 3, spaceBetween: 20 },

          // lg: ≥1024px
          1024: { slidesPerView: 4, spaceBetween: 20 },

          // xl: ≥1280px
          1280: { slidesPerView: 5, spaceBetween: 20 },

          // 2xl: ≥1536px
          1536: { slidesPerView: 8, spaceBetween: 20 },
        }}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        style={{
          transitionTimingFunction: "linear",
        }}
        className="mask-x-from-80% mask-x-to-100%"
      >
        {SponsorsList.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <SponsorCard key={sponsor.id} image={sponsor.image} />
          </SwiperSlide>
        ))}
        {SponsorsList.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <SponsorCard key={sponsor.id} image={sponsor.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
