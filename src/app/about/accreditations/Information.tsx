"use client";
import { useEffect, useCallback, ReactNode } from "react";

interface InformationProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Information({
  isOpen,
  onClose,
  children,
}: InformationProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleEsc]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative z-10 w-full max-w-xl mx-4 rounded-2xl 
        bg-white/90 dark:bg-primary/90 backdrop-blur-xl 
        shadow-2xl p-8 border border-gray-200 dark:border-white/10
        transition-all duration-300 ease-out 
        scale-100 opacity-100`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}