import React, { useEffect, useState } from "react";
import "./FileComplaint.css";

const FileComplaint = () => {

    return (
        <div className="fc__main_description p-8 lg:p-24">
            <div className="fc__description">
                <br></br>
                <br></br>
                <p>The Student Discipline Formation Office (SDFO) accepts, investigates, and processes complaints filed against students through online platforms. You may access the guidelines through this link:</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <button className="w-fit bg-[#24453E] text-white font-light m-4">
                    <a href="http://bit.ly/SDFOOnlineComplaint" className="white-link">Guidelines on Online Filing of Discipline Complaint</a>
                </button>
            </div>
            <br></br>
        </div >
    );
};

export default FileComplaint;