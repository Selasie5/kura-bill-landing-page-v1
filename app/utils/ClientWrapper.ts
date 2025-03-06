"use client";
import { useModalStore } from "../store/store";
import WaitlistModal from "../components/ui/Modal";
import { ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const { isModalOpen, closeModal } = useModalStore();

  return (
    <>
      {children}
      {isModalOpen && <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
}