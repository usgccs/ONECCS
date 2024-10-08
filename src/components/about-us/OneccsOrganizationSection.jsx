import React, { useEffect, useState } from 'react';
import OrganizationItem from './OrganizationItem';





const OneccsOrganizationSection = ({organizations}) => {

    useEffect(() => {

    }, [organizations]);
    return (
        <div className="flex flex-col justify-center items-center py-10">
        {organizations && organizations.map((organization) => {
            return (
                <>
                    <OrganizationItem key={organization.sys.id} organization={organization} />
                    <div className="w-[90%] lg:w-[70%] border-2 bg-gray-300"></div>
                </>
            )
        })}
        </div>
    )
}

export default OneccsOrganizationSection;