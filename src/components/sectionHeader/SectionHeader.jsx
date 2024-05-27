import { useState, useEffect } from "react";
import React from 'react';

function SectionHeader({ header }) {

    const styles = {
        headerStyle: {
            backgroundColor: '#ecf0f1',
            width: '100%',
            height: 'auto',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'ReadexPro',
            fontSize: '32px',
            color: '#24453E',
            fontWeight: 'bold',
        }
    };

    return (
        <div style={styles.headerStyle}>
            {header}
        </div>
    );
}

export default SectionHeader;
