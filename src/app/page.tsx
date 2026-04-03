import Hero from "./components/Home/Hero";
import HowWeWork from "./about/howwework/page";
import Specialize from "./components/Home/Specialize";
import Care from "./about/CARE/page";
import OurValues from "./about/ourvalues/page";
import AreasWeCover from "./about/areawecover/page";
import Certificate from "./components/Home/Certificate";
export default function Home() {
  return (
    <main>
      <Hero />
      <Certificate/>
      <Specialize />
      <HowWeWork />
      <AreasWeCover />
      <Care />
      <OurValues />
    </main>
  );
}
