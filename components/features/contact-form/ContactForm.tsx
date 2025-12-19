"use client";
import FormInput from "@/components/ui/forms/FormInput";
import FormTextarea from "@/components/ui/forms/FormTextarea";
import { errorToast, successToast } from "@/components/ui/toasts/StatusToasts";
import { ContactFieldsTypes, ContactSchema } from "@/schema/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  return (
    <div className="container mx-auto px-8 h-full grid lg:grid-cols-[8fr_5fr] items-stretch rounded-md overflow-hidden">
      <ContactFormBody />
      <MapItem />
    </div>
  );
}

const ContactFormBody = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactFieldsTypes) => {
    try {
      const formData = new FormData();
      formData.append("entry.1752827248", data.firstName);
      formData.append("entry.662126692", data.lastName);
      formData.append("entry.1861213978", data.email);
      formData.append("entry.65135443", data.phone);
      formData.append("entry.508890030", data.contactMessage);

      const response = await fetch(
        `https://docs.google.com/forms/d/${process.env.NEXT_PUBLIC_CONTACT_FORM_ID}/formResponse`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      successToast("Soumission réussie !");

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      errorToast("Échec de la soumission");
    }
  };

  return (
    <>
      <div className="h-full backdrop-blur-3xl bg-gradient-to-br from-black to-accent px-2 py-24 sm:py-32 lg:px-8">
        <div className="w-full mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tight mb-6 text-balance text-surface sm:text-5xl">
            Contact
          </h2>
          <div className="mt-2 w-full grid grid-cols-1 items-center px-4 *:w-full gap-2 text-md *:bg-surface text-text/80">
            <div className="p-1 flex items-center justify-center rounded-md gap-x-2">
              <i className="ri-mail-line"></i> <p>contact@industries.ma</p>
            </div>
            <div className="p-1 flex items-center justify-center rounded-md gap-x-2">
              <i className="ri-phone-line"></i> <p>+212 5 22 26 04 51</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 px-4 sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-text-inverted">
            <FormInput
              label="Prénom"
              {...register("firstName")}
              err={errors.firstName}
              boxClassName="max-sm:col-span-2"
            />
            <FormInput
              label="Nom"
              {...register("lastName")}
              err={errors.lastName}
              boxClassName="max-sm:col-span-2"
            />
            <FormInput
              label="Email"
              {...register("email")}
              err={errors.email}
              boxClassName="max-sm:col-span-2"
            />
            <FormInput
              label="Téléphone"
              {...register("phone")}
              err={errors.phone}
              boxClassName="max-sm:col-span-2"
            />
            <FormTextarea
              label="Message"
              boxClassName="col-span-2"
              {...register("contactMessage")}
              err={errors.contactMessage}
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-surface hover:bg-text hover:text-surface active:bg-text active:text-surface px-3.5 py-2.5 text-center text-sm font-semibold text-text shadow-xs"
            >
              {isSubmitting ? "En cours de soumission..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export const MapItem = () => {
  return (
    <>
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        className="w-full h-full border-0 overflow-hidden aspect-video lg:aspect-[4/4]"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4117.477749071878!2d-7.635895!3d33.5493351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d39d2ce1283%3A0x857adc4e928e93fe!2sLe%20Carr%C3%A9%20d&#39;Or!5e1!3m2!1sen!2sma!4v1764942210247!5m2!1sen!2sma"
      ></iframe>
    </>
  );
};
