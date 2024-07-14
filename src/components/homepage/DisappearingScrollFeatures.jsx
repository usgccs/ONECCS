import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { twMerge } from "tailwind-merge";




export const DisappearingScrollFeatures = () => {
  return (
    <>
      <div className="relative h-fit bg-indigo-50">
        <Features />
      </div>

      <div className="h-[50vh] bg-white" />
    </>
  );
};

const Block = ({ className, ...rest }) => {
    return (
      <motion.div
        variants={{
          initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className={twMerge(
          "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
          className
        )}
        {...rest}
      />
    );
  };

  const SocialsBlock = () => (
    <>
<div className="mx-auto my-auto grid max-w-4xl grid-flow-dense grid-cols-7 gap-4">
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-1 row-span-1 bg-red-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiYoutube />
        </a>
      </Block>


      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-1 row-span-1 bg-green-600 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-1 row-span-1 bg-zinc-50 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-black"
        >
          <SiTiktok />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-1 row-span-1 bg-blue-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiTwitter />
        </a>
      </Block>
        </div>
    </>
  );


const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
        <SocialsBlock />
        
      
    </div>
  );
};

const ElfsightWidget = () => {
    useEffect(() => {
      // Dynamically load the Elfsight script
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.setAttribute("data-use-service-core", "");
      script.defer = true;
      document.body.appendChild(script);
  
      return () => {
        // Cleanup the script when the component unmounts
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div
        className="elfsight-app-d040d224-ad20-4b4c-a853-9e19d9a6b921"
        data-elfsight-app-lazy
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  };

const carouselContents = [
    {
      id: 1,
      content: (
        <iframe
          src="https://discordapp.com/widget?id=816155091799113750&theme=dark"
          style={{ width: "100%", height: "100%" }}
          allowTransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      ),
    },
    {
      id: 2,
      name: "Elfsight",
      content: (
        <ElfsightWidget/>
      ),
    },
    // Add more items as needed
  ];

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-indigo-500 px-4 py-2 text-sm uppercase text-indigo-100">
        Communication Channels
      </span>
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        Connect with other students
      </h2>
      <p className="text-lg text-indigo-950">
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci
        tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec
        vel vel nulla nunc vel in molestie proin convallis. Leo et vulputate
        tincidunt justo a varius et elementum.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
      {carouselContents.map((item, index) => (
          <CarouselItem
            key={item.id}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={carouselContents.length}
            content={item.content}
          />
        ))}
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems, content }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  useEffect(() => {
    if (content.name === "ElfsightWidget") {
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [content]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid aspect-video w-full shrink-0 rounded-2xl bg-neutral-900"
    >
      {typeof content === 'function' ? content() : content}
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;

export default DisappearingScrollFeatures;