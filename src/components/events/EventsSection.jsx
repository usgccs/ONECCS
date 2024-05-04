
import { useState, useEffect } from 'react';
import EventItem from './EventItem';

function EventsSection() {
    const [eventsArr, setEventsArr] = useState([]);

    // TODO: Change `null` to whatever Contentful can return
    useEffect(() => {
        setEventsArr([
            {
                name: "My Event 1",
                date: "Soon™",
                body: `As the strongest CATCH2T27 committee Student Services plows through all the enlistment questions and concerns, it opens its domain 『Professional Yapper』 "Stand proud CCS, you are strong." As CATCH2T27's Batch President Miguel stood back in awe, he asked: "Are you the best committee because you are SS or are you SS because you are the best committee?" SS stood back and said "Nah, I'd Win."`,
                img: "https://i.kym-cdn.com/photos/images/original/002/697/326/d54.png",
                extSite: {
                    url: "https://www.youtube.com/watch?v=84EVHT8Hg20",
                    dispText: "Visit Page", // default would be "Learn More"
                }
            }, {
                name: "My Event 2",
                date: "Soon™",
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”`,
                img: null,
                extSite: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    dispText: "Visit Page",
                }
            }, {
                name: "My Event 3",
                date: "Soon™",
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”`,
                img: "https://i.kym-cdn.com/photos/images/original/002/697/326/d54.png"
            }, {
                name: "My Event 4",
                date: "Soon™",
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”`,
                img: "https://i.kym-cdn.com/photos/images/original/002/697/326/d54.png",
                extSite: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    dispText: "Visit Page",
                }
            }
        ])
    }, []);


    let imageCtr = 0, // This counts the number of rows that has an image for purposes of alternating left and right
        keyCtr = 0; // React requires a key when mapped and created by iteration

    return eventsArr.map((event) => {
        if (event.img != null)
            imageCtr++;
        keyCtr++

        return <EventItem key={keyCtr}
            name={event.name}
            date={event.date}
            body={event.body}
            img={event.img}
            extSite={event.extSite}
            isReversed={imageCtr % 2 == 0} />
    })
}

export default EventsSection;