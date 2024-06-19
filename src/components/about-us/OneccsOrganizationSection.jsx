import React, { useEffect, useState } from 'react';
import OrganizationItem from './OrganizationItem';





const OneccsOrganizationSection = ({organizations}) => {

    useEffect(() => {
        console.log("Organizations");
        console.log(organizations);
    }, [organizations]);
    return (
        <div className="flex flex-col justify-center items-center py-10">
           {organizations && organizations.map((organization) => {
                return (
                     <OrganizationItem key={organization.sys.id} organization={organization} />
                )
           })}
        </div>
    )
}

export default OneccsOrganizationSection;