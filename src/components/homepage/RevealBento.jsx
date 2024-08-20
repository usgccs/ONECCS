import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube, SiFacebook, SiInstagram, SiTelegram } from "react-icons/si";

export const RevealBento = () => {
  return (
    <div className="bg-[#398364] w-full text-white px-12 py-8 pb-20">
      <div className="w-full p-4 mb-4 md:p-10">
        <p className="text-3xl font-bold text-center justify-center items-center md:text-5xl lg:text-6xl">
        Communication Channels
        </p>
        
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
      >
        <FacebookBlock />
        <InstagramBlock />
        <TelegramBlock />
        
      </motion.div>
    </div>
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
        "col-span-4 rounded-lg border-2 border-zinc-500 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const FacebookBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6 ">
        <div className="flex flex-row gap-4 mb-6">
        <a href="https://www.facebook.com/DLSU.CSG" target="_blank" rel="noopener noreferrer">
        <SiFacebook className="size-12 rounded-xl transition duration-300 ease-in-out transform hover:scale-110 hover:text-blue-600" />
      </a>
      <h1 className="text-3xl md:text-4xl font-bold text-left align-middle leading-tight">
        Facebook
      </h1>
        </div>
      <p className="text-zinc-400">
        The official Facebook page of the Computer Studies Government (CSG) serves as the official platform for all college-wide announcements. Visit the page to remain updated on CCS-related projects, announcements, and events. 
        </p>
        <a href="https://www.facebook.com/DLSU.CSG" target="_blank" rel="noopener noreferrer">
      <button className="pointer-events-auto mt-4 rounded-full border border-white bg-transparent px-4 py-2 font-medium text-white transition-all active:scale-95 md:mt-6">
        Like
      </button>
    </a>
    </Block>
  );

  const InstagramBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div className="flex flex-row mb-6 gap-4">
      <a href="https://www.instagram.com/dlsu_csg/" target="_blank" rel="noopener noreferrer">
        <SiInstagram className="size-12 rounded-xl hover:text-pink-600 transition-colors duration-300" />
      </a>
      <h1 className="text-3xl md:text-4xl font-bold text-center align-middle leading-tight">
        Instagram
      </h1>
        </div>
      <p className="text-zinc-400">
      Welcome to the official Instagram of the Computer Studies Government (CSG)! Stay connected and updated with all the latest on CCS-related projects, announcements, and events right here. Follow us to be in the know! 
        </p>
        <a href="https://www.instagram.com/dlsu_csg/" target="_blank" rel="noopener noreferrer">
      <button className="pointer-events-auto mt-4 rounded-full border border-white bg-transparent px-4 py-2 font-medium text-white transition-all active:scale-95 md:mt-6">
        Follow
      </button>
    </a>
    </Block>
  );
  
const TelegramBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-12">
        <div className="flex flex-row mb-6 gap-4">
        <a href="https://t.me/DLSU_CSG" target="_blank" rel="noopener noreferrer">
        <SiTelegram className="size-12 rounded-xl hover:text-blue-400 transition-colors duration-300" />
      </a>
        <h1 className="text-3xl md:text-4xl font-bold text-center align-middle leading-tight">
        Telegram
        </h1>
        </div>
        <p className="text-zinc-400">
        The CSG Telegram Announcement Channel would serve as a platform between the Computer Student Government and the students of CCS to provide them with the proper assistance regarding different university and college processes, alongside spreading awareness of CSG's projects and announcements. 
        </p>
        <a href="https://t.me/DLSU_CSG" target="_blank" rel="noopener noreferrer">
      <button className="pointer-events-auto mt-4 rounded-full border border-white bg-transparent px-4 py-2 font-medium text-white transition-all active:scale-95 md:mt-6">
        Join Channel
      </button>
    </a>
    </Block>
    );



export default RevealBento;