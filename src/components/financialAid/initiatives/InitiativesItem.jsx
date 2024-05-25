import React from 'react';

const InitiativeItem = ({ item }) => {

    return (
        <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-96 sm:w-[340px] w-72">
            <img src={item.photoUrl} alt="Event Logo" className="md:w-[22rem] sm:w-80 w-64 md:h-[22rem] sm:h-80 h-64 aspect-square object-cover" />
            <span className='font-semibold text-2xl text-white text-center'>{item.name}</span>
            <p className='text-white font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor commodo ullamcorper a lacus. Sagittis eu volutpat odio facilisis. Dui faucibus in ornare quam viverra. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Auctor augue mauris augue neque gravida in fermentum. In vitae turpis massa sed elementum. Scelerisque viverra mauris in aliquam sem. Eget velit aliquet sagittis id. Tincidunt dui ut ornare lectus sit. Molestie a iaculis at erat pellentesque.

Id nibh tortor id aliquet lectus proin nibh nisl condimentum. A lacus vestibulum sed arcu non. Venenatis cras sed felis eget velit. Ut tortor pretium viverra suspendisse. Varius quam quisque id diam vel quam elementum. Sapien pellentesque habitant morbi tristique senectus et. Tempor nec feugiat nisl pretium fusce. Elementum pulvinar etiam non quam. At auctor urna nunc id cursus metus. Turpis in eu mi bibendum. Urna porttitor rhoncus dolor purus. Elit eget gravida cum sociis. A scelerisque purus semper eget duis at tellus at urna. Vel turpis nunc eget lorem dolor sed. Aliquet risus feugiat in ante metus dictum. Nunc id cursus metus aliquam eleifend mi. Suspendisse sed nisi lacus sed viverra. Non arcu risus quis varius quam quisque id diam. Integer vitae justo eget magna fermentum. Adipiscing at in tellus integer feugiat scelerisque varius.
            </p>
        </div>
    );
};

export default InitiativeItem;
