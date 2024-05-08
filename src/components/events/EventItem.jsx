const EventItem = (evntProp) => {
    const name = evntProp.name,
        date = evntProp.date,
        body = evntProp.body,
        img = evntProp.img,
        extSite = evntProp.extSite;

    return (
        <div className={`p-8 w-full sm:py-8 sm:px-24 hero-content flex-col sm:${evntProp.isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`space-y-3 sm:px-2 w-full ${(img != null) ? 'sm:w-8/12' : ''}`}>
                <h1 className='py-2 px-8 w-max rounded-full bg-[#23453d] text-white'>{name}</h1>
                <p className='px-8'><strong>Release Date: </strong> {date}</p>
                {
                    img != null &&
                    <div className='mx-8 sm:py-0 flex sm:hidden items-center justify-center'>
                        <img className='object-contain max-h-48' src={img} alt={`Pubmat for ${name}`} />
                    </div>
                }
                <p className='px-8 sm:!mt-8 sm:pr-0 text-balance'>{body}</p>
                {(extSite != null) &&
                    <a className='px-8 sm:!mt-8 sm:pr-2 w-full flex items-center justify-end text-pretty !text-inherit link-hover' href={extSite.url} target="_blank">
                        {"dispText" in extSite ? extSite.dispText : "Learn More"} →
                    </a>}
            </div>
            {img != null && <img className='object-contain px-2 w-4/12 hidden sm:block' src={img} alt={`Pubmat for ${name}`} />}
        </div >
    );
}

export default EventItem;