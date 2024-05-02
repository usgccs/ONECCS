import { useState, useEffect } from "react";
import React from 'react';

function SectionHeader(props){

    const styles = {
        headerStyle: {
            backgroundColor: '#ecf0f1',  
            width: '100%',               
            height: '50px',              
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Readex Pro", sans-serif', 
            fontSize: '24px', 
            color: '#2c3e50'   
        }
    };
    
    return(
        <div  style={styles.fullBackground}>
            {props.text}
        </div>
    );
}

export default SectionHeader;
