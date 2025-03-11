"use client"; // Mark this as a Client Component
import { useModalStore } from "../store/store";
import WaitlistModal from "../components/ui/Modal";

export default function ModalProvider() {
  const { isModalOpen, closeModal } = useModalStore();

  return <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />;
}