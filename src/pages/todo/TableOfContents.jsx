import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const TableOfContents = () => {
  const listStyle = {
    fontSize: '18px',
    textAlign: 'left',
    padding: '30px 30px 30px 75px',
    fontFamily: 'ReadexPro',
    listStyleType: 'none', 
  };

  const listItemStyle = {
    paddingBottom: '10px',
  };

  const linkStyle = {
    color: '#24453E',
    textDecoration: 'underline',
    fontWeight: 'normal',
  };

  return (
    <div>
      <SectionHeader header="Table of Contents" />
      <ul style={listStyle}>
        <li style={listItemStyle}><a href="#table-of-contents" style={linkStyle}>Table Of Contents</a></li>
        <li style={listItemStyle}><a href="#excused-absence" style={linkStyle}>Excused Absence</a></li>
        <li style={listItemStyle}><a href="#application-procedure" style={linkStyle}>Application Procedure</a></li>
        <li style={listItemStyle}><a href="#supporting-documents" style={linkStyle}>Supporting Documents</a></li>
        <li style={listItemStyle}><a href="#special-cases" style={linkStyle}>Special Cases</a></li>
        <li style={listItemStyle}><a href="#important-notes" style={linkStyle}>Important Notes</a></li>
        <li style={listItemStyle}><a href="#leave-of-absence" style={linkStyle}>Leave of Absence</a></li>
        <li style={listItemStyle}><a href="#shifting-processes" style={linkStyle}>Shifting Processes</a></li>
        <li style={listItemStyle}><a href="#request-for-documents" style={linkStyle}>Request for Documents</a></li>
        <li style={listItemStyle}><a href="#application-to-graduate" style={linkStyle}>Application to Graduate</a></li>
        <li style={listItemStyle}><a href="#online-submission-of-sdfo-documents" style={linkStyle}>Online Submission of SDFO Documents</a></li>
        <li style={listItemStyle}><a href="#filing-and-processing-of-complaints" style={linkStyle}>Filing and Processing of Complaints</a></li>
        <li style={listItemStyle}><a href="#application-course-crediting" style={linkStyle}>Application Course Crediting</a></li>
        <li style={listItemStyle}><a href="#downloadable-forms" style={linkStyle}>Downloadable Forms</a></li>
      </ul>
    </div>
  );
};

export default TableOfContents;
