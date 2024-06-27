import { useState, useEffect } from "react";
import React from 'react';

function PageHeader({ header, subheader1, subheader2 }) {

    const styles = {
        headerStyle: {
            backgroundColor: '#ecf0f1',
            width: '100%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'ReadexPro',
            color: '#24453E',
            backgroundImage: 'url(/Greybg.png)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
        }
    };

    return (
        <div style={styles.headerStyle} className="flex-col text-5xl text-center sm:text-6xl md:text-7xl lg:text-8xl md:p-8">
            <p className="p-6 font-bold">{header}</p>
            <p className="text-lg w-[80%] text-center leading-loose text-wrap md:text-2xl lg:text-3xl lg:leading-normal xl:w-[60%] p-2">
                {subheader1}
            </p>
            <p className="text-lg w-[80%] leading-loose text-center text-wrap md:text-2xl lg:text-3xl lg:leading-normal xl:w-[60%] p-2">
                {subheader2}
            </p>
        </div>
    );
}

export default PageHeader;
