"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "@/components/ui/forms/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SponsorSchema, SponsorType } from "@/schema/SponsorSchema";
import { errorToast, successToast } from "@/components/ui/toasts/StatusToasts";
import PackList from "@/data/packList.json";
import RegistrationEmail from "@/components/ui/emails/RegistrationEmail";

export default function RegistrationForm({ type }: { type: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SponsorSchema),
  });

  const onSubmit = async (data: SponsorType) => {
    try {
      const formData = new FormData();
      formData.append("entry.257309634", data.fullName);
      formData.append("entry.1470451533", data.fonction);
      formData.append("entry.699339683", data.entreprise);
      formData.append("entry.600948748", data.ville);
      formData.append("entry.660759077", data.localisation);
      formData.append("entry.453915203", data.email);
      formData.append("entry.1538250166", data.phone);
      formData.append("entry.866307235", data.interlocuteur);
      formData.append("entry.814941904", type);

      const response = await fetch(
        `https://docs.google.com/forms/u/0/d/${process.env.NEXT_PUBLIC_REGISTRATION_FORM_ID}/formResponse`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: data.email,
          subject: "FORUM MAROCAIN DE L’EMPLOI & DE LA COMPETENCE",
          html: RegistrationEmail({ fullname: data.fullName }),
        }),
      });

      successToast("Inscription réussie");

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      errorToast("Échec de la soumission");
    }
  };

  return (
    <div
      className={`container mx-auto bg-gradient-to-br from-accent to-text p-6 rounded-md h-full backdrop-blur-2xl shadow-lg shadow-overlay relative z-10`}
    >
      <div className="flex items-center justify-between w-full ">
        <h1 className="block py-2 text-xl font-semibold text-text-inverted capitalize">
          {(type != "all" && PackList.find((tl) => tl.slug == type)?.title) ||
            type}
        </h1>
      </div>
      <div className="w-full">
        <form
          className="grid items-center w-full gap-6 md:grid-cols-2 text-text-inverted"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            boxClassName="max-sm:col-span-2"
            label="Nom & prénom"
            type={type}
            {...register("fullName")}
            err={errors.fullName}
          />
          <FormInput
            boxClassName="max-sm:col-span-2"
            label="Fonction"
            type={type}
            {...register("fonction")}
            err={errors.fonction}
          />
          <FormInput
            boxClassName="max-sm:col-span-2"
            label="Entreprise"
            type={type}
            {...register("entreprise")}
            err={errors.entreprise}
          />
          <FormInput
            boxClassName="max-sm:col-span-2"
            label="Ville"
            type={type}
            {...register("ville")}
            err={errors.ville}
          />
          <FormInput
            boxClassName="col-span-2"
            label="Localisation"
            type={type}
            {...register("localisation")}
            err={errors.localisation}
          />
          <FormInput
            boxClassName="max-sm:col-span-2"
            label="Email"
            type={type}
            {...register("email")}
            err={errors.email}
          />
          <FormInput
            boxClassName="max-sm:col-span-2"
            label="Téléphone"
            type={type}
            {...register("phone")}
            err={errors.phone}
          />
          <FormInput
            boxClassName="col-span-2"
            label="Interlocuteur"
            type={type}
            {...register("interlocuteur")}
            err={errors.interlocuteur}
          />
          <TermsOfUse />
          <SponsorSubmit isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
}

const TermsOfUse = () => (
  <div className="flex w-full gap-x-4 mt-5 sm:col-span-2">
    <label
      htmlFor="agree-to-policies"
      className="inline-block w-full text-xs md:text-center text-text-inverted"
    >
      En soumettant ce formulaire, je certifie l’exactitude des informations
      fournies et j’autorise leur traitement par
      <span className="px-1 font-medium text-accent-light text-shadow-2xs text-shadow-accent">
        IndustriCom group
      </span>
      aux seules fins de gestion de l’événement
      <span className="px-1 font-medium text-accent-light">
        FORUM MAROCAIN DE L’EMPLOI & DE LA COMPETENCE
      </span>
      .
    </label>
  </div>
);

const SponsorSubmit = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <div className="w-full col-span-2 mt-10">
      <button
        type="submit"
        className="block w-full rounded-md bg-background hover:bg-text active:bg-text active:text-background cursor-pointer hover:text-background px-3.5 py-2.5 text-center text-sm font-semibold text-text shadow-xs"
      >
        {isSubmitting ? "En cours de soumission..." : "Envoyer"}
      </button>
    </div>
  );
};
