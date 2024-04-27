import React from 'react';

const csg = () => {
    const headerImageUrl = "https://res.cloudinary.com/dpuuajd0k/image/upload/v1714130999/Headers_ctjtph.png";

    return (
        <div className="flex w-full justify-center items-center flex-col">
            <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={headerImageUrl} alt="Header" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            
            <h1>Home Page</h1>
        </div>
    );
};

export default csg;
