import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const styles = {
  headerStyle: {
    backgroundColor: "#ecf0f1",
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "ReadexPro",
    color: "#24453E",
    fontWeight: "bold",
  },
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

const Example = () => {
  return (
    <>
      <div
        style={styles.headerStyle}
        className="text-5xl flex-col text-center lg:text-6xl p-16"
      >
        <p className="p-4">Communication Channels</p>
      </div>
      <SwapColumnFeatures />
      <div className="flex h-48 items-center justify-center bg-indigo-600">
        <span className="font-semibold uppercase text-white">Scroll up</span>
      </div>
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto my-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return (
    <div className="relative h-96 z-20 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {featureInView.mode == "Discord" && (
        <iframe
          src={featureInView.iframeSrc}
          style={{ width: "100%", height: "100%" }}
          allowTransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      )}

      {featureInView.mode == "Facebook" && <ElfsightWidget />}
    </div>
  );
};

export default Example;

const features = [
  {
    id: 1,
    mode: "Discord",
    callout: "Find people",
    title: "CCS Network",
    description:
      "If you wish to study together, or just chit-chat, feel free to join a room in the server! To join the CCS Network, message one of your batch representatives for the invite link or visit your Facebook Batch Groups for the invite link!",
    contentPosition: "r",
    Icon: FiEye,
    iframeSrc: "https://discordapp.com/widget?id=816155091799113750&theme=dark",
  },
  {
    id: 2,
    callout: "Find people",
    mode: "Facebook",
    title: "They're all here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    contentPosition: "l",
    Icon: FiSearch,
  },
  {
    id: 3,
    callout: "Have fun",
    title: "Let's party",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    contentPosition: "r",
    Icon: FiPlay,
  },
  {
    id: 4,
    callout: "Get paid",
    title: "Cha-ching!",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    contentPosition: "l",
    Icon: FiDollarSign,
  },
];
