const ProjectItem1 = () => {
  return (



    <div className="w-full lg:w-[80%] h-full p-8 lg:p-32 flex flex-col xl:flex-row gap-10 lg:gap-24">
      <div className="w-auto md:w-auto lg:w-auto mx-auto">
        <img
          src={
            "https://res.cloudinary.com/dnlrbmzns/image/upload/v1718655631/pdkoqsztsfs5y7txpama.png"
          }
          className="object-cover rounded-2xl drop-shadow-md"
        />
      </div>
      <div className="w-full flex flex-col gap-6 text-md">
        <p className="text-justify text-white">
        Hello Lasallians! It is with great pleasure to inform the DLSU community that our tutor requests are now OPEN!
        </p>
        <p className="text-justify text-white">
        Are you having trouble compiling your code? Having difficulties understanding arrays or recursions ? Fret not, as we got your back!
        </p>
        <p className="text-justify text-white">
        To avail our services, just visit the link below -- free of charge!
        </p>
        <p className="text-justify text-white">
        NOTE: Tutor requests are open to all students enrolled at DLSU. However, for CCS, only first or second year students (or shiftees taking first and second year courses) may avail our services.
        </p>

        <div className="flex flex-col gap-8">
          <button className="w-full p-2 bg-white rounded-lg text-black ">
            Request a tutor
          </button>
          <p className="text-justify text-white text-xs">
        Brought to you by <u>PTS</u>
        </p>
        </div>
      </div>
      
    </div>

  );
};

export default ProjectItem1;
