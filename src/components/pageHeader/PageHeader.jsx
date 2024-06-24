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
        <div style={styles.headerStyle} className="flex-col text-6xl text-center lg:text-8xl p-8">
            <p className="p-6 font-bold">{header}</p>
            <p className="text-2xl w-[80%] text-center leading-loose text-wrap lg:text-4xl lg:leading-normal xl:w-[60%] p-4">
                {subheader1}
            </p>
            <p className="text-2xl w-[80%] leading-loose text-center text-wrap lg:text-4xl lg:leading-normal xl:w-[60%] p-4">
                {subheader2}
            </p>
        </div>
    );
}

export default PageHeader;
