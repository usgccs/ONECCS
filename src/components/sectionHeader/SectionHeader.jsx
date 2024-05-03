import { useState, useEffect } from "react";
import React from 'react';

function SectionHeader(props){

    

    const styles = {
        headerStyle: {
            backgroundColor: '#ecf0f1',  
            width: '100%',               
            height: 'auto', 
            padding: '30px',             
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Readex Pro", sans-serif', 
            fontSize: '5vw', 
            color: '#24453E',
            fontWeight: 'bold'
         
        }
    };
    
    return(
        <div  style={styles.headerStyle}>
            {props.text}
        </div>
    );
}

export default SectionHeader;
