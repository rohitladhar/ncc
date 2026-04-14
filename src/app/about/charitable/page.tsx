import Link from "next/link";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import { getDataPath } from "@/app/utils/paths";

const Service = () => {
  return (
    <section className="mt-16 md:mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mt-16">
          <div className="md:w-1/2 flex justify-between md:justify-between ">
            <img
              src={"/images/cleaning/banner.png"}
              alt="Service Image"
              className="max-h-[500px] rounded-lg shadow-lg object-contain"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 dark:text-white text-primary">
              Partnership with School Readers
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Schoolreaders is a UK-based children’s literacy charity that
              focuses on helping primary school pupils improve their reading
              skills and confidence. The organisation was established in 2013
              with the aim that every child, regardless of their background,
              should leave primary school able to read well and succeed in their
              future education. Schoolreaders works by recruiting volunteers
              from local communities and placing them in primary schools, where
              they provide one-to-one reading support to children who need extra
              help. These volunteers usually visit schools once a week and spend
              time reading with individual pupils, helping them improve their
              fluency, comprehension, and enjoyment of reading. This support is
              especially important because many children do not receive enough
              reading practice at home, and without proper reading skills, they
              may struggle in secondary school and beyond. According to the
              organisation, one in four children in England does not reach the
              expected reading level by the age of eleven, which highlights the
              importance of their work. Schoolreaders currently supports tens of
              thousands of children every week, showing the wide impact of its
              programme across the country. In addition to improving reading
              ability, the volunteers also help build children’s confidence and
              create positive relationships, encouraging a love of reading that
              can last a lifetime. Schools have reported that these volunteers
              play a valuable role in both academic development and the overall
              school community. Overall, Schoolreaders is an important
              initiative that helps children develop essential literacy skills,
              supports their education, and gives them better opportunities for
              the future through the power of reading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
