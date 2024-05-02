import useContentful from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./OrgDescription.css";

const OrgDescription = ({ orgName, orgDescription }) => {

    return (
        <div className="header_main">

            <div>
                <div className="header">
                    <h1>{orgName}</h1>
                    <br></br>
                    <p>{orgDescription}</p>
                </div>
            </div>

        </div>
    );
};

export default OrgDescription;
