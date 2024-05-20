import React, { useEffect, useState } from "react";
import PastEventItem from "./PastEventItem";

function PastEventsSection({ data }) {

    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        setPastEvents(
            /*[
            {
                name: "Event 1",
                date: "2022-10-01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                logoUrl: "/Frontier.jpg"
            },
            {
                name: "Event 2",
                date: "2022-11-15",
                description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                logoUrl: "/Frontier.jpg"
            },
            {
                name: "Event 3",
                date: "2022-12-05",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                logoUrl: "/Frontier.jpg"
            },{
                name: "Event 1",
                date: "2022-10-01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                logoUrl: "/Frontier.jpg"
            },
            {
                name: "Event 2",
                date: "2022-11-15",
                description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                logoUrl: "/Frontier.jpg"
            },
            {
                name: "Event 3",
                date: "2022-12-05",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                logoUrl: "/Frontier.jpg"
            }
            
        ]*/
            data
        );
    }, [])
    console.log(pastEvents)

  return (
    <section id="past-events" className="flex w-full xl:p-20 xl:px-60 lg:p-14 lg:px-20 sm:p-10 p-8 sm:px-20 bg-[#24453E] ">
        
        <div className="w-full flex flex-wrap gap-12 items-start justify-center">
            {pastEvents && pastEvents.map(event => 
                <PastEventItem key={event.fields.projectTitle} event={event} />
            )}
        </div>

    </section>
  );
}

export default PastEventsSection;
