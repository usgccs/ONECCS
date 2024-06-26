import React from "react";
import USGItem from "./USGItem";

const UsgSection = ({usgOrgs}) => {
  return (
    <div className="w-full flex items-center justify-center bg-[#24453E]">
      <div className="w-full lg:w-[70%] h-full p-16 lg:p-16 flex flex-col xl:flex-row gap-10 lg:gap-24">
        <div className="w-[100%] flex flex-col gap-8 text-md">
          <p className="text-left font-bold text-4xl lg:text-6xl text-white">
            University Student Government
          </p>
          <p className="text-justify text-xl lg:text-2xl text-white">
            The University Student Government is the democratic and autonomous
            body representing the student body of De La Salle University. Under
            USG are the Computer Studies Government and the different batch
            units of the College of Computer Studies which you can communicate
            with through the links on the side:
          </p>
        </div>

        <div className="w-auto md:w-auto lg:w-auto mx-auto">
          <div className="grid grid-cols-2 grid-rows-3 2xl:grid-cols-3 2xl:grid-rows-2 gap-4">
            {usgOrgs &&
              usgOrgs.map((organization) => {
                return (
                  <USGItem
                    key={organization.sys.id}
                    organization={organization}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsgSection;
