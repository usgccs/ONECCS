

const USGItem = ({ organization }) => {
    return (
        <div className="flex flex-col items-center justify-center">
        <img
            src={organization.fields.orgLogoCDN}
            className="object-cover rounded-2xl drop-shadow-md"
        />
        <a href={`/about-us/${organization.fields.orgKey}`} className="text-center text-xl text-white p-2">
                <u>{organization.fields.orgKey}</u>
            </a>
        </div>
    );
    };

export default USGItem;