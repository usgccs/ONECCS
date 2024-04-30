import useContentful from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./HomePage.css";

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
        <div className="flex flex-col text-center px-20 lg:px-40">
            <h1 className="mb-10">Home Page</h1>
            <div>
                {
                    entry && (
                        <div>
                            <h1 className="mb-6 text-3xl">{entry.fields.orgName}</h1>
                            <p>{entry.fields.orgDescription}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomePage;