import { useState, useEffect } from "react";
import React from 'react';

function SectionHeader({ header, subheader1 }) {

    const styles = {
        headerStyle: {
            backgroundColor: '#ecf0f1',
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'ReadexPro',
            color: '#24453E',
            fontWeight: 'bold',
        }
    };

    return (
        <div style={styles.headerStyle} className="text-4xl flex-col text-center lg:text-5xl p-7">
            <p className="p-4">{header}</p>
            <p className="text-center text-xl lg:text-2xl">{subheader1}</p>
        </div>
    );
}

export default SectionHeader;
