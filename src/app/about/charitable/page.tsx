const Service = () => {
  return (
    <section className="mt-16 md:mt-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="w-full mb-8">
          <img
            src="/images/school_reader.png"
            alt="Schoolreaders Partnership"
            className="w-full aspect-[16/9] md:aspect-auto md:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary dark:text-white">
            NCC Cleaning Service Partner with Schoolreaders to Help 75
            Children's reading session
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
            Local Bedford business funds 2,625 one-to-one reading sessions
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 dark:text-gray-300 mb-8">
            “At NCC Cleaning Services, we’re proud to be part of our local
            community. Seeing the Schoolreaders team working in the same
            building, making a real difference to children’s lives, inspired us
            to get involved. Their dedication to helping young readers is
            something we wanted to support.”
            <br />
            <span className="block mt-2 font-semibold">
              — Managing Director, Mandeep Summan
            </span>
          </blockquote>

          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              We are excited to share that we have formed an official
              partnership with Schoolreaders.
            </p>

            <p>
              With our support, they will be able to provide weekly reading
              sessions for 75 children throughout the school year, totalling an
              incredible 2,625 sessions. Each session gives young learners
              valuable time and encouragement, helping them build both
              confidence and a love of reading.
            </p>

            <p>
              For us, this partnership means more than just funding. It’s about
              investing in the future by supporting the children who will shape
              our community. We are proud to work alongside a team that shows
              passion and dedication every single day.
            </p>

            <p>
              The CEO of Schoolreaders added: “We are delighted with the support
              provided by NCC Cleaning Services. It’s fantastic to connect with
              businesses working alongside us in Bedford Heights, and we hope
              more companies will be inspired to join us in making an impact.”
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-primary dark:text-white">
                About Schoolreaders
              </h3>
              <p>
                Schoolreaders is a charity that recruits, trains and places
                volunteers to provide free, one-to-one reading support to
                primary school children, ensuring they leave school with the
                literacy skills they need for life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
