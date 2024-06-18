const ResourceItem1 = () => {
  return (
    <div className="w-full lg:w-[80%] h-full p-8 lg:p-24 flex flex-col-reverse xl:flex-row gap-10 lg:gap-24">
      <div className="w-full flex flex-col gap-1 text-md">
        <h1 className="text-center text-4xl mb-4">
          Library Resources Mobile App
        </h1>
        <p className="text-center text-black">
          Access the library wherever you are? Yes, you can!
        </p>
        <p className="text-center text-black font-bold text-lg">
          The Library Mobile App is finally here!
        </p>
        <p className="text-center text-black break-words mb-4">
          Free and open to download for all DLSU students, faculty, and staff.
        </p>

        <div className="list-decimal list-inside pl-4 space-y-4">
          <p>Here's how:</p>
          <li className="mt-2">Look for "Ex Libris Library Mobile App".</li>
          <li>
          Select "De La Salle University".
          </li>
          <li>
          Select "De La Salle University Library" as profile.
          </li>
          <li>Accept Terms of Use.</li>
          <li>Sign in using MLS/DLSU email credentials. </li>
        </div>



        <div className="flex flex-col gap-8">
            <p className="text-black text-md  text-center">You can also access the DLSU library here:</p>
          <button className="w-full p-2 bg-[#24453E] rounded-lg text-white">
            DLSU LIBRARY
          </button>
        </div>
      </div>
      <div className="w-auto md:w-auto lg:w-auto mx-auto">
        <img
          src={
            "https://res.cloudinary.com/dnlrbmzns/image/upload/v1718656866/xlqaok4opoei3pumt1vw.png"
          }
          className="object-cover rounded-2xl drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default ResourceItem1;
