"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface NewsletterContextType {
  isVisible: boolean;
  showNewsletter: () => void;
  hideNewsletter: () => void;
}

const NewsletterContext = createContext<
  NewsletterContextType | undefined
>(undefined);

export function NewsletterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);

  const showNewsletter = () => {
    setIsVisible(true);
  };

  const hideNewsletter = () => {
    setIsVisible(false);
  };

  return (
    <NewsletterContext.Provider
      value={{
        isVisible,
        showNewsletter,
        hideNewsletter,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
}

export function useNewsletter() {
  const context = useContext(NewsletterContext);

  if (!context) {
    throw new Error(
      "useNewsletter must be used inside NewsletterProvider"
    );
  }

  return context;
}
