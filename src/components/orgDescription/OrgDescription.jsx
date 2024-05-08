import React, { useEffect, useState } from "react";
import "./OrgDescription.css";

const OrgDescription = ({ orgName, orgDescription }) => {

    return (
        <div className="header_main_description">
                    <div>
                    <h1>{orgName}</h1>
                    </div>
                    <br></br>
                    <div className="description">
                    <p>{orgDescription}</p>
                    </div>
                    

        </div>
    );
};

export default OrgDescription;
