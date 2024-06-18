import './EnlistmentItem.css';


const EnlistmentItem1 = () => {
    return (
        <div className='flex flex-col items-center justify-center p-5 gap-4'>
        <p className='text-wrap text-xl font-bold'>PRE-ENLISTMENT</p>
        <ul className='list'>
            <li>is when you <strong>declare the courses you will take in the next term.</strong> This is to help the faculty offer the needed courses and estimate the number of expected enrollees in those courses.</li>
        </ul>
        </div>
    );
    }

export default EnlistmentItem1;