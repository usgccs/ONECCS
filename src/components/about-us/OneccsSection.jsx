const OneccsSection = () => {
  return (
    <div className="w-full lg:w-[80%] h-full p-8 lg:p-24 flex flex-col xl:flex-row gap-10 lg:gap-24">
      
      <div className="w-auto md:w-auto lg:w-auto mx-auto">
        <img
          src={
            "https://res.cloudinary.com/dnlrbmzns/image/upload/v1718735858/Untitled_3_gtplq9.png"
          }
          className="object-cover rounded-2xl drop-shadow-md"
        />
      </div>
      
      <div className="w-full flex flex-col gap-1 text-md">
        <h1 className="text-left font-bold text-6xl mb-8">ONECCS</h1>
        <p className="text-left text-xl text-black">
          <b>ONECCS</b> is the College of Computer Studies Student Council
          consisting of the University Student Government College and Batch
          Units, and organizations of the Council of Student Organizations and
          the office of the Associate Dean.
        </p>

        <div className="list-disc list-inside text-xl space-y-2 mt-6">
          <p className="text-xl font-bold">
            Through the ONECCS website, we envision:
          </p>
          <li className="mt-2">
            a more connected CCS by giving them a platform to communicate with
            other batches,
          </li>
          <li>
            a more informed CCS by reducing the confusion that is left due to
            unanswered queries,
          </li>
          <li>
            and a more transparent CSG by keeping you up to date with the latest
            projects and plans.
          </li>
        </div>
      </div>
      
    </div>
  );
};

export default OneccsSection;
