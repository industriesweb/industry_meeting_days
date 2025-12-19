import Image from "next/image";
import Link from "next/link";

const TicketCard = ({
  label,
  href,
  image,
  description,
}: {
  label: string;
  href: string;
  image: string;
  description: string;
}) => {
  return (
    <Link
      href={href}
      className="bg-background flex-1/2 w-full lg:flex-1 duration-500 lg:hover:flex-2"
      prefetch={true}
    >
      <div className="w-full group aspect-video lg:aspect-auto lg:min-h-dvh bg-accent rounded-md flex items-center justify-center relative overflow-hidden">
        <h1 className="text-3xl xl:text-5xl flex items-center justify-center gap-x-1 z-10 capitalize">
          <span>{label}</span>
        </h1>
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={image}
          alt={label}
          fill
          priority={true}
          sizes="100%"
        />
        <div className="absolute w-full inset-0 self-center mt-24 flex opacity-75 lg:opacity-0 z-20 group-hover:opacity-85 duration-300 items-center justify-center">
          <h6 className="text-xs w-full whitespace-pre-line text-center px-4 text-background text-shadow-sm text-shadow-black overflow-hidden line-clamp-2">
            {description}
          </h6>
        </div>

        <div className="absolute inset-0 size-full bg-radial from-transparent to-black" />
      </div>
    </Link>
  );
};

export default TicketCard;
