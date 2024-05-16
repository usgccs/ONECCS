import "./EventItem.css";

const EventItem = (evntProp) => {
    const name = evntProp.name,
        date = evntProp.date,
        body = evntProp.body,
        img = evntProp.img,
        extSite = evntProp.extSite;

    console.log("THE EXTSITE IS " + extSite);

    return (
        <div className='event-item my-4 p-8 w-full py-8 px-24 lg:px-36'>
            {img != null && <img className='event-image object-contain rounded-xl' src={img} alt={`Pubmat for ${name}`} />}
            < div className='space-y-5 w-full' >
                <p className='text-center py-2 px-8 lg:w-max rounded-full bg-[#23453d] text-white text-xl md:text-2xl'>{name}</p>
                <p className='text-lg'><strong>Release Date: </strong> {date}</p>
                <p className='text-lg'>{body}</p>
                {
                    extSite != null && (
                        <a className='w-full flex items-center justify-end text-pretty !text-inherit link-hover' href={extSite.url} target="_blank">
                            {"dispText" in extSite ? extSite.dispText : "Learn More"} →
                        </a>
                    )
                }
            </div >
        </div >
    );
}

export default EventItem;
