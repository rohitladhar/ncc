"use client";

export default function WhatsAppButton() {
  const phone = "447361000511";

  const message = encodeURIComponent(
    "Hello, I found your website and I'm interested in your services. I'd like to know more, Please.",
  );

  const openWhatsApp = () => {
    const appUrl = `whatsapp://send?phone=${phone}&text=${message}`;
    const webUrl = `https://wa.me/${phone}?text=${message}`;
    window.location.href = appUrl;
    setTimeout(() => {
      window.location.href = webUrl;
    }, 1500);
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Open WhatsApp"
      className="fixed bottom-20 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449C18.244 1.176 15.219-.073 12-.073 5.372-.073.001 5.298.001 11.926c0 2.102.549 4.154 1.593 5.967L.001 23.927l6.18-1.571a11.88 11.88 0 0 0 5.819 1.479h.005c6.627 0 11.999-5.371 11.999-11.999 0-3.22-1.252-6.245-3.484-8.387zm-8.52 18.35h-.004a9.87 9.87 0 0 1-5.031-1.376l-.361-.214-3.667.933.979-3.575-.235-.367a9.87 9.87 0 0 1-1.516-5.274c0-5.456 4.438-9.894 9.899-9.894 2.645 0 5.132 1.031 7.002 2.902a9.83 9.83 0 0 1 2.896 7.002c0 5.455-4.438 9.893-9.962 9.893z" />
      </svg>
    </button>
  );
}
