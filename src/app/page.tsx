import Hero from "./components/Home/Hero";
import HowWeWork from "./about/howwework/page";
import Specialize from "./components/Home/Specialize";
import Care from "./about/CARE/page";
import OurValues from "./about/ourvalues/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <Specialize />
      <HowWeWork/>
      <OurValues/>
     <Care/>
    </main>
  );
}
