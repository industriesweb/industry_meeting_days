import toast from "react-hot-toast";

export const successToast = (msg: string) =>
  toast.success(msg, {
    className: "!bg-green-600 !text-white",
    duration: 4000,
  });

export const errorToast = (msg: string) =>
  toast.error(msg, {
    className: "!bg-red-600 !text-white",
    duration: 4000,
  });
