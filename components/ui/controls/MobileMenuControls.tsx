import React from "react";
import { Button } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { setMenuClose, setMenuOpen } from "@/context/slices/mobileMenu";

export const MenuOpenBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex md:hidden items-center justify-end">
      <Button
        onClick={() => {
          dispatch(setMenuOpen());
        }}
        className="!bg-transparent"
      >
        <Menu className="size-6 text-text-inverted" />
      </Button>
    </div>
  );
};
export const MenuCloseBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-fit flex items-center justify-end">
      <button
        onClick={() => {
          dispatch(setMenuClose());
        }}
        className="w-fit p-0 outline:none"
      >
        <X className="size-6 text-text-inverted rounded-md" />
      </button>
    </div>
  );
};
