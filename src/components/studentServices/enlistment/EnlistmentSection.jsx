import React from 'react';
import EnlistmentItem1 from './EnlistmentItem1';
import EnlistmentItem2 from './EnlistmentItem2';
import EnlistmentItem3 from './EnlistmentItem3';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';


const EnlistmentSection = () => {
  return (
    <div className='w-full items-center justify-center px-5 lg:px-40 my-4'>
        <p className='font-bold text-2xl text-center p-5'>What is the difference between Pre-enlistment, Enlistment, and Enrollment?</p>
        <div className='flex flex-col my-5 lg:flex-row'>
        <EnlistmentItem1 />
        <EnlistmentItem2 />
        <EnlistmentItem3 />
        </div>
      
      <div className='flex items-center justify-center'>
      <div className='w-[98%] border-2 px-20'></div>
      </div>
      

      <p className='font-bold text-2xl text-left p-5'>Steps in enlisting your classes:</p>

        <Dropdown1 />
        <Dropdown2 />
        <Dropdown3 />
      
    </div>
  );
};

export default EnlistmentSection;