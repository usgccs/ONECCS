import React, { useEffect, useState } from "react";
import "./OrgDescription.css";

const OrgDescription = ({ orgName, orgDescription }) => {

    return (
        <div className="bg-white justify-center w-full items-center flex flex-col py-10 gap-4">
             <h1 className="font-bold text-[#24435e] text-4xl lg:text-5xl mt-4 md:mt-8 text-center">{orgName}</h1>
            <br></br>
            <div className="flex items-center justify-center mx-24 lg:mx-40 mb-8">
                <p className="text-lg lg:text-xl text-center leading-5">{orgDescription}</p>
            </div>
        </div>
    );
};

export default OrgDescription;
