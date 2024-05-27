import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const ApplicationCourseCrediting = () => {
  const containerStyle = {
    fontFamily: "ReadexPro",
    width: "70%",  
    margin: "0 auto",  
  };

  const centeredTextStyle = {
    paddingTop: "40px",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "ReadexPro",
  };

  const listStyle = {
    fontSize: "20px",
    fontFamily: "ReadexPro",
    color: "#1c1c1c",
    listStyleType: "square",  
    paddingLeft: "60px", 
  };

  const listItemStyle = {
    paddingBottom: "10px",
  };

  const linkStyle = {
    color: "#9bc1bc",
    textDecoration: "underline",
  };

  const boldTextStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#9bc1bc",
    textDecoration: "none",
  };

  const footerTextStyle = {
    fontSize: "20px",
    fontFamily: "ReadexPro",
    color: "#24453E",
    marginTop: "10px",
  };

  const buttonContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0", 
  };

  const buttonTextStyle = {
    fontFamily: "ReadexPro",
    fontSize: "23px", 
  };

  const handleButtonClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdJ11ZZHV4WOR6r4p8Muy5LYOLr95J7EqDpvFfKe7uxh6-PSQ/viewform", "_blank");
  };

  return (
    <div>
      <SectionHeader header="Application Course Crediting" />

      <div style={containerStyle}>
        

        <p style={centeredTextStyle}>
          Submit an application through the Google form of your respective college/school:
        </p>

        <div style={buttonContainerStyle}>
          <button className="w-full bg-[#24453E] text-white font-light py-2 rounded-md" onClick={handleButtonClick} style={buttonTextStyle}>
            Course Crediting for CCS
          </button>
        </div>

        <h2>
          <span style={boldTextStyle}>Reminders</span>
        </h2>
        
        <ul style={listStyle}>
          <li style={listItemStyle}>
            For courses taken outside of DLSU, the student must upload an official copy of grades/Transcript of Records.
          </li>
          <li style={listItemStyle}>
            The student’s application will be shared with the Department (if applicable) and with the Associate Dean of the student for their endorsement/approval.
          </li>
          <li style={listItemStyle}>
            OUR will evaluate the application only when it has been approved by Department/College/School.
          </li>
          <li style={listItemStyle}>
            Student will receive an email on the status of the application not later than 2 weeks after submission.
          </li>
        </ul>

        <p style={footerTextStyle}>
          For any clarifications or concerns, please send an email to <a href="mailto:registrar@dlsu.edu.ph" style={linkStyle}>registrar@dlsu.edu.ph</a>.
        </p>
      </div>
    </div>
  );
};

export default ApplicationCourseCrediting;
