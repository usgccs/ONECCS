import './OrgHeader.css';

const OrgHeader = ({imgUrl, orgKey, orgName}) => {    

    return (
        <div className='org_header'>
            <div className='logo'>
                <img src={imgUrl} alt="Logo"/>
            </div>
            <div className='org_namespace'>
                <h2>{orgKey}</h2>
                <h3>{orgName}</h3>
            </div>
        </div>
    )
}

export default OrgHeader;