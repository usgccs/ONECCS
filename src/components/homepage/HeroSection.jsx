import { useEffect, useRef } from "react";
import anime from "animejs";
import { useAnimation, useInView, motion } from "framer-motion";
import {
    SiNike,
    Si3M,
    SiAbstract,
    SiAdobe,
    SiAirtable,
    SiAmazon,
    SiBox,
    SiBytedance,
    SiChase,
    SiCloudbees,
    SiBurton,
    SiBmw,
    SiHeroku,
    SiBuildkite,
    SiCouchbase,
    SiDailymotion,
    SiDeliveroo,
    SiEpicgames,
    SiGenius,
    SiGodaddy,
  } from "react-icons/si";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#24453E]">
    <section className="text-slat-100 overflow-hidden bg-[url('/heroo.png')] bg-left bg-no-repeat min-h-screen px-8 py-24 md:px-12 md:py-32 2xl:bg-top">
      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none relative z-10">
        <Reveal>
            <p className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-3xl">
              De La Salle University
            </p>
            <p className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-3xl">
              College of Computer Studies
            </p>
          </Reveal>
          <Reveal>
            <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-9xl py-5">
              Welcome,
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-4xl text-slate-100 md:my-4 md:text-8xl">
            &lt;CCS Student&gt;<span className="text-indigo-500">.</span>
            </h2>
          </Reveal>
          
          <Reveal>
            <button className="pointer-events-auto mt-4 rounded-full border border-white bg-transparent px-4 py-2 font-medium text-white transition-all active:scale-95 md:mt-6">
            Get Started
            </button>
          </Reveal>
        </div>
      </div>
      <Reveal>
      <div className="flex  overflow-hidden mt-20">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
        
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
      </Reveal>
    </section>
    </div>
  );
};



export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-white"
      />
    </div>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
    return (
      <motion.div
        initial={{ translateX: reverse ? "-100%" : "0%" }}
        animate={{ translateX: reverse ? "0%" : "-100%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 px-2"
      >
        {children}
      </motion.div>
    );
  };

  const LogoItem = ({ Icon }) => {
    return (
      <a
        href="/"
        rel="nofollow"
        target="_blank"
        className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-gray-400 transition-colors"
      >
        <Icon className="text-6xl md:text-7xl" />
      </a>
    );
  };


  const LogoItemsTop = () => (
    <>
      <LogoItem Icon={SiNike} />
      <LogoItem Icon={Si3M} />
      <LogoItem Icon={SiAbstract} />
      <LogoItem Icon={SiAdobe} />
      <LogoItem Icon={SiAirtable} />
      <LogoItem Icon={SiAmazon} />
      <LogoItem Icon={SiBox} />
      <LogoItem Icon={SiBytedance} />
      <LogoItem Icon={SiChase} />
      <LogoItem Icon={SiCloudbees} />
    </>
  );

  const LogoItemsBottom = () => (
    <>
      <LogoItem Icon={SiBmw} />
      <LogoItem Icon={SiBurton} />
      <LogoItem Icon={SiBuildkite} />
      <LogoItem Icon={SiCouchbase} />
      <LogoItem Icon={SiDailymotion} />
      <LogoItem Icon={SiDeliveroo} />
      <LogoItem Icon={SiEpicgames} />
      <LogoItem Icon={SiGenius} />
      <LogoItem Icon={SiGodaddy} />
      <LogoItem Icon={SiHeroku} />
    </>
  );


export default HeroSection;