import Hero from "./components/Home/Hero";
import HowWeWork from "./about/howwework/page";
import Specialize from "./components/Home/Specialize";
import Care from "./about/CARE";
import OurValues from "./about/ourvalues/page";
import AreasWeCover from "./about/areawecover";
import Certificate from "./components/Home/Certificate";
import ServiceCard from "./services/ServiceCard";
import ChartiableCause from "./about/charitable/page";
import WhatsAppButton from "./components/Whatsapp";
import Feedback from "./about/feedback";

export default function Home() {
  return (
    <main>
      <Hero />
      <Certificate />
      <OurValues />
      <Specialize />
      <Care />
      <AreasWeCover />
      <HowWeWork />
      <Feedback/>
      <ChartiableCause />
      <ServiceCard />
      <WhatsAppButton />
    </main>
  );
}
