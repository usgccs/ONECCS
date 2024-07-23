const PahiramLocker = () => {
    return (
      <div className="w-full lg:w-[80%] h-full p-8 lg:p-32 flex flex-col xl:flex-row gap-10 lg:gap-24">
        <div className="w-auto md:w-auto lg:w-auto mx-auto">
          <img
            src={
              "https://lh6.googleusercontent.com/1u60T7WzhaO2H7LsF2hQrsJG6J9-FadvgznQg5QvfrcBqUKGCt4rP5bCcy3JCuK2b7Ur5foFvNUxs0EBtm-b3BI=w1280"
            }
            className="object-cover rounded-2xl drop-shadow-md"
          />
        </div>

        <div className="w-full flex flex-col gap-6 text-md text-xl">
          <p className="text-3xl font-bold text-justify text-green">
            [PAHIRAM LOCKER IS BACK]
          </p>
          <p className="text-justify text-black">
            We heard you, Lasallians! We're bringing back our Pahiram Locker Project.
          </p>
          <p className="text-justify text-black">
            Find more information in our Locker Rent Contract and Locker Map.
          </p>
          <p className="text-justify text-black">
            Locker Rent Contract:
          </p>
          <a href="https://drive.google.com/file/d/1O9OkqDqE950CTNBdjs45pAsefawMeRbV/view" target="_blank" rel="noopener noreferrer" className="w-[25%] p-2 bg-[#24453E] rounded-lg text-white block text-center">
              Locker Contract →
          </a>
          <p className="text-justify text-black">
            Locker Mastersheet:
          </p>
          <a href="https://docs.google.com/spreadsheets/d/1MELBkaFL6Tni_ytXkjqhcqqGdiEgDopk6XmnQGrJd2A/edit#gid=0" target="_blank" rel="noopener noreferrer" className="w-[30%] p-2 bg-[#24453E] rounded-lg text-white block text-center">
              Locker Mastersheet →
          </a>
          <p className="text-justify text-black">
            Submission of Contract:
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCNqwyU1Q9rRL9uO0cscf_Ucl_5N5eCH7rsF6QVf4ic2KEQA/viewform" target="_blank" rel="noopener noreferrer" className="w-[40%] p-2 bg-[#24453E] rounded-lg text-white block text-center">
              Submission of Contract →
          </a>
  
          <div className="flex flex-col gap-8">
            <a href="https://www.facebook.com/dlsu.usg/posts/pfbid02Es12pn56vWrKq7V2GbUfJQDvrTsYXeGwZhi9pVq1kGE3pLN3hMDPotmkueooDJMPlmkueooDJMPl" target="_blank" rel="noopener noreferrer" className="w-[70%] p-2 bg-[#24453E] rounded-lg text-white block text-center">
                View Pahiram Locker's FB Announcements →
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default PahiramLocker;
  