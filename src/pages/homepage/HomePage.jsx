import useContentful from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import ImageCarousel from "../../components/ImageCarousel";

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
        {/* <h1>Home Page</h1> */}

        {/* <div>
            {// Conditional rendering of data
                entry && (
                    <div>
                        <h1>{entry.fields.orgName}</h1>
                        <p>{entry.fields.orgDescription}</p>
                    </div>
                )
            }
        </div> */}

        <h2>
            <ImageCarousel images = {['https://preview.redd.it/mr-fresh-the-cat-meme-v0-545c7nzqiyhc1.jpg?width=1080&crop=smart&auto=webp&s=5a7c2e0595c347e239740418ccdd1eada4960fde', 'https://yt3.googleusercontent.com/ZhGtIjcZJm0FNcO3TnAXwJJ_EnC9v_PIS_U4CyvRVG0WITvo-zq5UZXvSri-K2QyiEecuftCBpI=s900-c-k-c0x00ffffff-no-rj', 'https://kpopping.com/documents/27/4/4294/230716-NewJeans-Hanni-New-Jeans-at-Inkigayo-documents-4.jpeg?v=4b576', 'https://preview.redd.it/can-someone-photoshop-my-face-onto-this-meme-but-keep-the-v0-1kg7g9ub12fa1.jpg?width=905&format=pjpg&auto=webp&s=c9ea963d1ef07e9f925e2bcc5ed4e364ae031c12']} />
        </h2>

        </div>

    

        

    );


};

export default HomePage;