import React, { useEffect, useState } from "react";
import PastEventItem from "./PastEventItem";

function PastEventsSection({ data }) {

    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        setPastEvents(
            data
        );
    }, [])

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
