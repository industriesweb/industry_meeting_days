import { Dialog } from "@radix-ui/themes";
import React, { Dispatch, SetStateAction } from "react";
import PackTable from "./PackTable";
// import { X } from "lucide-react";

export default function PackDetails({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Content
        className="!w-4/5 !min-w-4/5 !bg-[#1E1E1E]"
        onInteractOutside={() => setIsOpen(false)}
      >
        <Dialog.Title>
          <div className="w-full flex items-center justify-between">
            <h1>Détails:</h1>
          </div>
        </Dialog.Title>
        <PackTable />
      </Dialog.Content>
    </Dialog.Root>
  );
}
