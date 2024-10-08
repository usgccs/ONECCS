const CareerSupport = () => {
    return (
      <div className="w-full bg-[#24453E]">
        <div className="w-full lg:w-[80%] h-full p-8 lg:p-32 flex flex-col xl:flex-row gap-10 lg:gap-24 mx-auto">
          <div className="w-auto md:w-auto lg:w-1/3 mx-auto">
            <img
              src={
                "https://lh3.googleusercontent.com/6iqzkyZLXXX8d9erpkA39g3hWZjC22nspXF8bzoorgsi2Tip_O6DYK-4hOlP7fL9sh3iufi887r6hqpEXT9p39NstZ8olksSUUzNbwrARRRipB6iWLAW0vNcFxl7AC8n3Q=w1280"
              }
              className="object-cover rounded-2xl drop-shadow-md w-full h-auto"
            />
          </div>
  
          <div className="w-full lg:w-2/3 flex flex-col gap-10 text-md text-xl text-white items-center">
            <p className="text-4xl font-bold text-center">OCCS Careers Portal</p>
            <p className="text-center">And we're LIVE!</p>
            <p className="text-center">
              The Office of Counseling and Career Services would like to introduce
              the new and official DLSU Career Portal, LSLinks!
            </p>
            <p className="text-center">
              To access the portal, kindly press the link below, sign in with
              Google, and use your DLSU email.
            </p>
            <a
              href="https://lslinks.dlsu.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2 bg-white rounded-lg text-[#24453E] block text-center"
            >
              Go to LSLINKS
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default CareerSupport;
  