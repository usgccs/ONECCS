import useContentful from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import OrgDescription from "../../components/orgDescription/OrgDescription"

const HomePage = () => {
    const [entry, setEntry] = useState(null);
    const fetchEntry = useContentful("1LtDDIwATLHp9ecde36Bej");

    useEffect(() => {
        fetchEntry()
            .then((entry) => {
                console.log(entry.fields)
                setEntry(entry)
            })
            .catch(console.error);
    }, []);

    return (
        <div className="header_main">

            <div>
                {// Conditional rendering of data
                    entry && (
                        <div>
                            <OrgDescription orgName={entry.fields.orgName} orgDescription={entry.fields.orgDescription} />
                        </div>
                    )
                }
            </div>

        </div>





    );


};

export default HomePage;