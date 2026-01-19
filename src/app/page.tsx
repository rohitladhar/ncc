import ContactForm from "./components/ContactForm";
import Hero from "./components/Home/Hero";
import Pricing from "./components/Home/Pricing";
import Portfolio from "./components/Home/Portfolio";

import Certificate from "./components/Home/Certificate";
import Specialize from "./components/Home/Specialize";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specialize />

      <Certificate />
      <Portfolio />
      <Pricing />

      <ContactForm />
    </main>
  );
}
