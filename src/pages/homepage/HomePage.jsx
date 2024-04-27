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
        <div className="header_main">
        <h1>Home Page</h1>

        <div>
            {// Conditional rendering of data
                entry && (
                    <div>
                        <h1>{entry.fields.orgName}</h1>
                        <p>{entry.fields.orgDescription}</p>
                    </div>
                )
            }
        </div>

        </div>

    

        

    );


};

export default HomePage;