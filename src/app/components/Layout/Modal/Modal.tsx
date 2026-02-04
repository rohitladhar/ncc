"use client";

import React from "react";
import CareerModal from "./CareerModal";
import QuoteModal from "./QuoteModal";

type BasicModalProps = {
  open: boolean;
  onClose: () => void;
  flag?: boolean;
};

const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, flag }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/80 p-4 transition-colors">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto rounded-xl shadow-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-t-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {flag ? "Career" : "Get a Free Quote"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900">
          {flag ? (
            <CareerModal />
          ) : (
            <QuoteModal />
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
