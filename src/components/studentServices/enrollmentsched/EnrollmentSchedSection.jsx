import React from 'react';

const EnrollmentSchedSection = () => {
  return (
    <div className="w-full lg:w-[80%] h-full p-16 lg:p-24 flex flex-col xl:flex-row gap-10 lg:gap-24">
      <div className="flex-1 flex justify-center">
        <img
          className="w-full h-auto max-h-[80vh] object-contain"
          src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1723687356/1_jlzumt.jpg"
          alt="Enrollmentschedimg1"
        />
      </div>
      <div className="flex-1 flex justify-center">
        <img
          className="w-full h-auto max-h-[80vh] object-contain"
          src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1723687416/2_oneccs_mzy5nf.jpg"
          alt="Enrollmentschedimg2"
        />
      </div>
    </div>
  );
};

export default EnrollmentSchedSection;
