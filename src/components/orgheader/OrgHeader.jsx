import './OrgHeader.css';

const OrgHeader = ({imgUrl, orgKey, orgName}) => {    

    return (
        <div className='w-full h-96 flex justify-center items-center flex-row text-white'>
            <div className=' w-full h-full flex justify-center items-center px-10 bg-[#243E39]'>
                <img className="w-96" src={imgUrl} alt="Logo"/>
            </div>
            <div className={`w-full h-full flex flex-col justify-center items-center gap-5 bg-[url('/header-bg.png')]`}>
                <h2 className='text-6xl lg:text-9xl font-bold text-center'>{orgKey}</h2>
                <h3 className='text-3xl lg:text-5xl text-center'>{orgName}</h3>
            </div>
        </div>
    )
}

export default OrgHeader;