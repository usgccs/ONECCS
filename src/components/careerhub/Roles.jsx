const Roles = () => {
    return (
      <div className="w-full bg-white">
        <div className="w-full lg:w-[80%] h-full p-8 lg:p-32 flex flex-col xl:flex-row gap-10 lg:gap-24 mx-auto">
          <div className="w-auto md:w-auto lg:w-1/3 mx-auto flex flex-col justify-center hidden lg:flex">
            <img
              src={
                "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719417272/roles_design_hrwjmn.jpg"
              }
              className="object-cover rounded-2xl drop-shadow-md w-full h-auto"
            />
          </div>
  
          <div className="w-full lg:w-2/3 flex flex-col gap-10 text-black items-start">
            <p className="text-5xl font-bold text-left" style={{ color: "#24453E" }}>
              Career Paths in Tech
            </p>
            <p className="text-xl text-left">
              The technology industry offers exciting and endless opportunities, and various career paths for each kind of person. Go through the list below to see which roles could be right for you!
            </p>
            <p className="text-xl text-left">
              <strong>1. Full Stack Developer</strong> — Full stack web developers are those who are capable of developing both the front end and the back end of web development.
              <br /><br />
              <strong>2. UI/UX Designer</strong> — A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products.
              <br /><br />
              <strong>3. Business Analyst</strong> — Business analysts assess how organizations are performing and help them improve their processes and systems.
              <br /><br />
              <strong>4. Systems Analyst</strong> — A systems analyst is a person who uses analysis and design techniques to solve business problems using information technology.
              <br /><br />
              <strong>5. Software Engineer</strong> — A software engineer designs, develops, tests, and maintains software applications and systems.
              <br /><br />
              <strong>6. Web Developer</strong> — Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity.
              <br /><br />
              <strong>7. Database Administrator</strong> — Database administrators and architects create or organize systems to store and secure a variety of data.
              <br /><br />
              <strong>8. Technical Lead</strong> — Responsible for guiding the technical development of a product and overseeing a team of technical developers and designers.
              <br /><br />
              <strong>9. Agile Project Manager</strong> — Manages the design and build of IT products or services using agile management techniques.
              <br /><br />
              <strong>10. QA (Quality Assurance) Specialist</strong> — Helps keep companies’ quality top-notch by evaluating software and applications, developing and running quality tests, and documenting and analyzing test results.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Roles;
  