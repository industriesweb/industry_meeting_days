"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CalendarCard from "./CalendarCard";
import { Autoplay, EffectCards } from "swiper/modules";
import CalendarList from "@/data/calendarList.json";
import "swiper/css";
import "swiper/css/effect-cards";

export default function CalendarSlides() {
  return (
    <div className="w-full text-text-inverted">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        speed={800}
        loop
        className="w-full p-2 md:w-2xl drop-shadow-[0px_5px_5px_var(--color-text)] "
        draggable
      >
        {CalendarList.map((cdr, index) => (
          <SwiperSlide key={index}>
            <CalendarCard key={cdr.eventTitle} calendar={cdr} />
          </SwiperSlide>
        ))}
        {CalendarList.map((cdr, index) => (
          <SwiperSlide key={index}>
            <CalendarCard key={cdr.eventTitle} calendar={cdr} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
