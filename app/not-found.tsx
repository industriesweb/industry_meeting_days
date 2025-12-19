import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-text to-accent-dark">
      <div className="text-center px-6">
        <div className="text-9xl font-extrabold text-secondary">404</div>
        <h1 className="mt-6 text-3xl font-bold text-text-inverted">Page introuvable</h1>
        <p className="mt-4 text-lg text-text-inverted/80">
          Désolé, la page que vous cherchez n’existe pas.
        </p>
        <div className="flex justify-center justify-self-center rounded-full gap-4 mt-8 bg-background font-medium w-fit text-text duration-200 hover:scale-105">
          <Link href="/" className="px-4 py-1">
            Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
