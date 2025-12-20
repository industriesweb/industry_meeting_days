import Image from "next/image";
import event from "@/data/event.json";
import {
  Avatar,
  Box,
  Button,
  DropdownMenu,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { CalendarFold, Circle, MapPinned } from "lucide-react";
import EventCountDown from "../ui/countdowns/EventCountDown";
import Link from "next/link";
import MotionParent from "../ui/motions/MotionParent";

const ParticipateUrls = [
  { title: "Gratuit", path: "/participate/free" },
  { title: "Networking", path: "/participate/networking" },
  { title: "Stand", path: "/participate/stand" },
  { title: "Sponsoring", path: "/participate/sponsoring" },
];

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-dvh" id="Presentation">
      <div className="container relative z-20 flex flex-col justify-center px-4 mx-auto min-h-dvh sm:min-h-[160vh] md:min-h-[200vh] xl:min-h-dvh gap-y-6 lg:gap-y-10 md:px-8 ">
        <span className="hidden md:flex h-12" />
        <EventDatePlace />
        <EventTitle />
        <EventThematic />
        <EventPresentation />
        <MotionParent delay={0.25} className="flex items-center gap-x-2">
          {ParticipateUrls.map((item) => (
            <Link key={item.title} href={item.path}>
              <Button color="blue" variant="surface">{item.title}</Button>
            </Link>
          ))}
        </MotionParent>
        <EventCounter />
      </div>
      <HomeHeroBackgroundImage />
    </section>
  );
}

const HomeHeroBackgroundImage = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={event.hero.backgroundImage}
        alt="BackgroundImage"
        className="object-cover w-full h-full pointer-events-none select-none"
        fill
        sizes="100%"
        priority
        decoding="async"
      />
      <div className="absolute w-full h-1/4 z-10 bottom-0 left-0 bg-gradient-to-b from-transparent to-secondary" />
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-bl from-transparent to-black " />
    </div>
  );
};

const EventDatePlace = () => {
  return (
    <MotionParent>
      <Heading
        as="h3"
        className="!text-text-inverted !text-base md:!text-2xl flex items-center gap-x-4 underline-animated relative w-fit"
      >
        <Text className="flex items-center gap-1">
          <CalendarFold />
          {event.hero.eventDate}
        </Text>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="outline-none group">
            <button className="flex items-center gap-1 cursor-pointer ">
              <MapPinned />
              <span className="text-text-inverted hover:opacity-85 aliased duration-100 relative flex items-center justify-center">
                <Circle
                  className="absolute size-1 outline-2 outline-background group-data-[state=open]:opacity-0 duration-200 animate-pulse top-0 right-0 translate-x-4/5 text-accent rounded-full fill-background drop-shadow-[0_0_2px,0_0_2px,0_0_2px_var(--color-accent)] shadow-accent"
                  style={{ animationDuration: "1s" }}
                />
                {event.hero.eventLocation}
              </span>
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="center"
            className="!bg-gradient-to-br !border-none !shadow-md !shadow-overlay from-accent to-primary"
          >
            <Flex gap="4">
              <Avatar
                size="3"
                fallback="R"
                radius="full"
                src={event.hero.backgroundImage}
              />
              <Box className="w-full">
                <Heading size="3" as="h3" className="!text-text-inverted">
                  {event.hero.eventLocationAddress}
                </Heading>
                <Text
                  as="div"
                  size="2"
                  className="!text-text-inverted/80 !font-medium"
                  mb="2"
                >
                  {event.hero.eventLocation}
                </Text>
                <Link
                  href={event.hero.eventLocationUrl}
                  className="inline-block w-full font-medium text-center rounded-full shadow-md shadow-overlay from-accent to-primary text-text-inverted bg-gradient-to-br hover:to-accent"
                  target="_blank"
                >
                  visiter
                </Link>
              </Box>
            </Flex>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Heading>
    </MotionParent>
  );
};

const EventTitle = () => {
  return (
    <MotionParent>
      <Heading
        as="h2"
        className="!text-transparent title-animated !text-2xl md:!text-5xl  flex items-center gap-x-4 relative w-fit text-stroke-2 whitespace-pre-line!"
      >
        {event.hero.eventTitle}
      </Heading>
    </MotionParent>
  );
};

const EventThematic = () => {
  return (
    <MotionParent delay={0.1}>
      <Heading
        as="h1"
        className="!text-text-inverted !-mt-6 !text-3xl md:!text-6xl flex items-center gap-x-4 relative w-fit whitespace-pre-line"
      >
        {event.hero.eventThematic}
      </Heading>
    </MotionParent>
  );
};

const EventPresentation = () => {
  return (
    <MotionParent delay={0.2}>
      <Heading
        as="h1"
        className="!text-text-inverted !font-normal !text-base md:!text-xl flex items-center gap-x-4 relative w-fit whitespace-pre-line"
      >
        {event.hero.eventPresentation}
      </Heading>
    </MotionParent>
  );
};

const EventCounter = () => {
  return (
    <div className="absolute pointer-events-none bottom-0 left-0 flex items-center justify-end w-full p-2 md:h-44 z-20">
      <div className="w-full xl:w-1/2">
        <EventCountDown date={event.hero.eventDateCountDown} />
      </div>
    </div>
  );
};
