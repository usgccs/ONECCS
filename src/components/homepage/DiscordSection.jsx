const DiscordSection = () => {
  return (
    <div className="w-full min-h-screen bg-[#151515] text-[#EBEDEC] lg:w-full h-full p-16 lg:p-24 flex flex-col xl:flex-row-reverse gap-10 lg:gap-24">
      <div className="relative z-20 w-full ">
        <div className="w-[70%] h-full items-center justify-center rounded-xl bg-slate-800 shadow-xl">
          <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <iframe
            src="https://discordapp.com/widget?id=816155091799113750&theme=dark"
            style={{ width: "100%", height: "100%" }} // Changed to React style object
            allowTransparency="true"
            frameBorder="0" // React prefers camelCase for attributes
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Widget" // Added title for accessibility
          ></iframe>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 items-center text-md">
        <div className="w-[60%] mt-10 items-center justify-center">
          <h1 className="text-left font-bold text-7xl mb-14">CCS Network</h1>
          <p className="text-left text-2xl">
            If you wish to study together, or just chit-chat, feel free to join
            a room in the server! To join the CCS Network, message one of your
            batch representatives for the invite link or visit your Facebook
            Batch Groups for the invite link!
          </p>
          <button className="pointer-events-auto mt-4 rounded-full border border-white bg-transparent px-4 py-2 font-medium text-white transition-all active:scale-95 md:mt-10">
            Join Server
            </button>
        </div>
      </div>
    </div>
  );
};

export default DiscordSection;
