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
            <p className="pointer-events-auto max-w-xl text-xl text-slate-300 md:text-3xl">
              De La Salle University
            </p>
            <p className="pointer-events-auto max-w-xl text-xl text-slate-300 md:text-3xl">
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
            <button className="pointer-events-auto mt-4 rounded-full border border-white text-md md:text-lg bg-transparent px-4 py-2 font-medium hover:color-[#535bf2] text-white transition-all active:scale-95 md:mt-6"
            onClick={() => document.getElementById('table-of-contents').scrollIntoView({ behavior: 'smooth' })}>
            Get Started
            </button>
          </Reveal>
        </div>
      </div>
      <Reveal>
      <div className="flex overflow-hidden mt-20">
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

/*

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

  */

  const LogoItem = ({ Icon, url, route, isImage = false }) => {
    
    

    return (
      <a
        href={`/about-us/${route}`}
        rel="nofollow"
        target="_blank"
        className={`w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-500 text-gray-400 transition-colors ${
          isImage ? "group" : ""
        }`}
      >
        {isImage ? (
          <img
            src={url}
            className="text-6xl md:text-7xl group-hover:filter group-hover:grayscale"
            alt=""
          />
        ) : (
          <Icon className="text-6xl md:text-7xl" />
        )}
      </a>
    );
  };


  const LogoItemsTop = () => {
    
    const PTS = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721850149/PTS_wrqym4.png";
    const C24 = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721848507/C24_io8vjf.png";
    const GDSC = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847872/GDSC_ptr6rv.png";
    const C25 = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847873/C25_mjznqx.png";
    const ACM = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847873/ACM_2_rpq2ug.png";
    const C26 = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847874/C26_ix1vdu.png";
    const LSCS = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847872/LSCS_zowcld.png";
    
    return (
      <>
        <LogoItem url={LSCS} route={"LSCS"} isImage={true} />
        <LogoItem url={PTS} route={"PTS"} isImage={true} />
        <LogoItem url={C24} route={"CATCH2T24"}isImage={true} />
        <LogoItem url={GDSC} route={"GDSC"} isImage={true} />
        <LogoItem url={C25} route={"CATCH2T25"} isImage={true} />
        <LogoItem url={ACM} route={"ACM"} isImage={true} />
        <LogoItem url={C26} route={"CATCH2T26"} isImage={true} />
        <LogoItem url={LSCS} route={"LSCS"} isImage={true} />
        <LogoItem url={PTS} route={"PTS"} isImage={true} />
        <LogoItem url={C24} route={"CATCH2T24"} isImage={true} />
      </>
    );
  };
  
  const LogoItemsBottom = () => {
    const CSG = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721848507/CSG_gn6sfh.png";
    const INDIE = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847872/INDIE_v9zivm.png";
    const C27 = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721849773/C27_yavdbj.png";
    const MSC = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847872/MSC_pd355z.png";
    const LCCSG = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847872/LCCSG_xvcqru.png";
    const SPRINT = "https://res.cloudinary.com/dnlrbmzns/image/upload/v1721847871/edited_sprint_image_t4yxlj.png";
    
    return (
      <>
        <LogoItem url={INDIE} route={"INDIE"} isImage={true} />
      <LogoItem url={C27} route={"CATCH2T27"} isImage={true} />
      <LogoItem url={MSC} route={"MSC"} isImage={true} />
      <LogoItem url={CSG} route={"CSG"} isImage={true} />
      <LogoItem url={LCCSG} route={"LCCSG"} isImage={true} />
      <LogoItem url={SPRINT} route={""} isImage={true} />
      <LogoItem url={INDIE} route={"INDIE"} isImage={true} />
      <LogoItem url={C27} route={"CATCH2T27"} isImage={true} />
      <LogoItem url={MSC} route={"MSC"} isImage={true} />
      <LogoItem url={CSG} route={"CSG"} isImage={true} />
      </>
    );
  };


export default HeroSection;