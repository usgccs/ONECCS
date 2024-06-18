import { useState } from 'react';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  //to-do: put data in contentful
  const accordionData = [
    {
      title: 'How many students are needed to petition for a class?',
      content: '15 students'
    },
    {
      title: 'All the sections of the course I intend to enroll in are closed, what should I do?',
      content: 'You can choose other courses with available sections as long as you have satisfied the pre-requisite courses. If you really need the course to be offered as indicated in your flowchart, you could petition the opening of another section through the on-line facility during enrollment and before advanced adjustment.'
    },
    {
      title: 'Where can I see updates on special classes, electives, slots, and other enrollment specific announcements?',
      content: 'The CSG Enlistment team posts announcements regularly on the official DLSU CSG FB Page.'
    },
    {
      title: 'A class I would like to enroll in is a Freshman Block. Can I enroll in this class?',
      content: 'Upperclassmen will be able to enroll in Freshman Block sections during Inter-College Enrollment.'
    },
    {
      title: 'Why does MLS tag me as uncleared under the accounting office even though I have already paid my balance in full?',
      content: 'Test.'
    },
    {
      title: 'I cannot log into my ANIMO.sys but CAN log in to my MLS account',
      content: 'Change your password in MLS. Wait for 30 minutes and log in again to your MLS and then to your ANIMO.sys account using your new password.'
    },
    {
      title: 'What do we do in case of technical problems with My.LaSalle and Animo.sys accounts, which office will I contact?',
      content: 'Test.'
    },
    {
      title: 'Can I still get Latin Honors/DL if I have W on my grades?',
      content: 'Students with a W are disqualified from Latin Honors and Dean\'s list regardless of their GPA/CGPA.'
    },
    {
      title: 'I have a WP on my report. Am I still eligible for latin honors/deans list?',
      content: 'Students who file a withdrawal from the registrar which will appear as WP on their reports are still qualified for latin honors.'
    },
    {
      title: 'What is the current policy on soft prerequisites?',
      content: 'As announced through the OVCA helpdesk announcement dated 22 April 2021 on No Fail Policy during Covid-19 health crisis, the policy of converting all prerequisites to soft prerequisites has expired at the end of Term 2 AY20-21. As such, the implementation of the regular prerequisite rules shall resume starting Term 3 AY20-21 (Semester 2 AY 2020-2021 for the College of Law).'
    },
    {
      title: 'Can I take electives other than the ones specified/offered to my course?',
      content: 'Yes, you may however please do take note that electives of other courses (not specific to the course of the student) can be taken by a student, with the risk of not being credited for their elective or being dropped to give way to the students of the course.'
    }
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-200">
          <input 
            type="radio" 
            name="my-accordion-2" 
            checked={openIndex === index} 
            onChange={() => handleToggle(index)} 
          />
          <div className="collapse-title text-xl font-medium">
            {item.title}
          </div>
          <div className="collapse-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
