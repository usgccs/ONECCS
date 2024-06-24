import { useState, useEffect } from "react";
import React from 'react';

function SectionHeader({ header }) {

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
        <div style={styles.headerStyle} className="text-4xl text-center lg:text-5xl p-7">
            {header}
        </div>
    );
}

export default SectionHeader;
