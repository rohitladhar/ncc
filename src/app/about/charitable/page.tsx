"use client";
import {
  BookOpen,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Quote,
  Sparkles,
  UsersRound,
} from "lucide-react";
const Service = () => {
  return (
    <section className="mt-16 md:mt-12">
      
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Responsive Schoolreaders Image */}
        <div className="mb-10 flex justify-center">
          
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-darklight md:rounded-3xl">
            
            <picture className="block w-full">
              
              {/* Mobile Image */}
              <source
                media="(max-width: 767px)"
                srcSet="/images/school_reader_mobile.png"
              />
              {/* Desktop Image */}
              <img
                src="/images/school_reader.png"
                alt="NCC Cleaning Services partnership with Schoolreaders"
                className="block h-auto max-h-[500px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </picture>
          </div>
        </div>
        {/* Heading */}
        <div className="mb-10">
          
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3cb6c6]/20 bg-[#3cb6c6]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#329eac]">
            
            <HeartHandshake className="h-4 w-4" /> Community Partnership
          </div>
          <h2 className="w-full max-w-none text-xl font-extrabold leading-tight tracking-tight text-primary dark:text-white sm:text-4xl md:text-4xl lg:text-4xl">
            
            NCC Cleaning Services Partners with
            <span className="text-[#3cb6c6]">Schoolreaders</span> to Support
            Children's Reading
          </h2>
          <p className="mt-5 text-lg font-medium text-slate-500 dark:text-slate-300">
            
            Local Bedford business funds 2,625 one-to-one reading sessions.
          </p>
        </div>
        {/* Statistics */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          
          <div className="rounded-2xl border border-[#3cb6c6]/15 bg-[#e3ffe7] p-5">
            
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#3cb6c6] text-white">
              
              <UsersRound className="h-5 w-5" />
            </div>
            <p className="text-3xl font-extrabold text-primary">75</p>
            <p className="mt-1 text-sm text-slate-600">
              
              Children supported
            </p>
          </div>
          <div className="rounded-2xl border border-[#3cb6c6]/15 bg-[#d9f7e8] p-5">
            
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#3cb6c6] text-white">
              
              <BookOpen className="h-5 w-5" />
            </div>
            <p className="text-3xl font-extrabold text-primary">2,625</p>
            <p className="mt-1 text-sm text-slate-600">
              
              Reading sessions funded
            </p>
          </div>
          <div className="rounded-2xl border border-[#3cb6c6]/15 bg-[#d9e7ff] p-5">
            
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#3cb6c6] text-white">
              
              <Building2 className="h-5 w-5" />
            </div>
            <p className="text-3xl font-extrabold text-primary">Local</p>
            <p className="mt-1 text-sm text-slate-600">
              
              Bedford community partnership
            </p>
          </div>
        </div>
        {/* Main Quote */}
        <blockquote className="relative mb-10 overflow-hidden rounded-3xl border border-[#3cb6c6]/15 bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] p-7 shadow-sm md:p-10">
          
          <Quote
            aria-hidden="true"
            className="absolute right-6 top-6 h-20 w-20 text-[#3cb6c6]/10"
          />
          <div className="relative">
            
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3cb6c6] text-white shadow-lg shadow-[#3cb6c6]/20">
              
              <HeartHandshake className="h-6 w-6" />
            </div>
            <p className="text-lg font-medium leading-8 text-slate-700 dark:text-slate-200 md:text-xl">
              
              “At NCC Cleaning Services, we’re proud to be part of our local
              community. Seeing the Schoolreaders team working in the same
              building, making a real difference to children’s lives, inspired
              us to get involved. Their dedication to helping young readers is
              something we wanted to support.”
            </p>
            <footer className="mt-6 flex items-center gap-3">
              
              <div className="h-8 w-1 rounded-full bg-[#3cb6c6]" />
              <div>
                
                <p className="font-bold text-primary dark:text-white">
                  
                  Mandeep Summan
                </p>
                <p className="text-sm text-slate-500">
                  
                  Managing Director
                </p>
              </div>
            </footer>
          </div>
        </blockquote>
        {/* Content */}
        <div className="space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
          
          <p>
            
            We are excited to share that we have formed an official partnership
            with <strong className="text-primary"> Schoolreaders </strong>
            .
          </p>
          <p>
            
            With our support, they will be able to provide weekly reading
            sessions for 75 children throughout the school year, totalling an
            incredible 2,625 sessions. Each session gives young learners
            valuable time and encouragement, helping them build both confidence
            and a love of reading.
          </p>
          <p>
            
            For us, this partnership means more than just funding. It’s about
            investing in the future by supporting the children who will shape
            our community. We are proud to work alongside a team that shows
            passion and dedication every single day.
          </p>
          {/* Schoolreaders Quote */}
          <div className="relative rounded-2xl border-l-4 border-[#3cb6c6] bg-slate-50 p-6 dark:bg-darklight">
            
            <Quote className="mb-3 h-6 w-6 text-[#3cb6c6]" />
            <p className="italic">
              
              “We are delighted with the support provided by NCC Cleaning
              Services. It’s fantastic to connect with businesses working
              alongside us in Bedford Heights, and we hope more companies will
              be inspired to join us in making an impact.”
            </p>
            <p className="mt-4 text-sm font-bold text-primary dark:text-white">
              
              — CEO, Schoolreaders
            </p>
          </div>
        </div>
        {/* About Schoolreaders */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-[#3cb6c6]/20 bg-gradient-to-br from-[#e3ffe7] via-white to-[#d9e7ff] p-7 shadow-lg md:p-10">
          
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#3cb6c6]/10 blur-3xl"
          />
          <div className="relative">
            
            <div className="mb-6 flex items-start gap-4">
              
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#3cb6c6] text-white shadow-lg shadow-[#3cb6c6]/20">
                
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#329eac]">
                  
                  About the organisation
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
                  
                  About Schoolreaders
                </h2>
              </div>
            </div>
            <p className="max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              
              Schoolreaders is a charity that recruits, trains and places
              volunteers to provide free, one-to-one reading support to primary
              school children, helping ensure they leave school with the
              literacy skills they need for life.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              
              <div className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 backdrop-blur-sm">
                
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3cb6c6]" />
                <div>
                  
                  <p className="font-bold text-primary">
                    
                    One-to-one support
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    
                    Personalised reading support for primary school
                    children.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 backdrop-blur-sm">
                
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3cb6c6]" />
                <div>
                  
                  <p className="font-bold text-primary">
                    
                    Trained volunteers
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    
                    Volunteers are recruited and trained to support young
                    readers.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-7 flex items-center gap-3 border-t border-[#3cb6c6]/15 pt-6">
              
              <Sparkles className="h-5 w-5 text-[#3cb6c6]" />
              <p className="text-sm font-semibold text-slate-600">
                
                Supporting literacy and helping young readers build
                confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
