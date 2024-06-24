const OrganizationItem = ({ organization }) => {
  return (
    <div className="w-full lg:w-[80%] h-full p-10 lg:p-24 flex flex-col xl:flex-row gap-10 lg:gap-24">
      <div className="w-full md:w-[80%] lg:w-[25%] px-24 lg:p-0 mx-auto">
        <img
          src={
            organization.fields.orgLogo.fields.file.url
        }
          className="object-cover rounded-2xl drop-shadow-md"
        />
      </div>

      <div className="w-full flex flex-col gap-1 text-md">
        <h1 className="text-left font-bold text-3xl mb-8">{organization.fields.orgName}</h1>
        <p className="text-left text-xl text-black">
          {organization.fields.orgDescription}
        </p>
      </div>
    </div>
  );
};


export default OrganizationItem;