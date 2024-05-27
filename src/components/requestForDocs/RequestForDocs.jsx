import React, { useEffect, useState } from "react";
import "./RequestForDocs.css";

const RequestForDocs = () => {

    return (
        <div className="rfd__main_description">
            <div className="flex flex-row justify-center items-center w-full">
                <button className="w-fit bg-[#24453E] text-white font-light m-4">
                    <a href="https://ecom.dlsu.edu.ph/apps/ord/document/policies.asp" className="white-link">Online Request for Documents (ORD) Facility</a>
                </button>
                <button className="w-96 bg-[#24453E] text-white font-light m-4">
                    <a href="http://placeholder" className="white-link">Certificate of Good Moral Character</a>
                </button>
            </div>
            <div className="rfd__description">
                <h2>Online Faculty Reminders</h2>
            </div>
            <div className="rfd__description">
                <h4>▪ This facility to request for documents is intended <strong>ONLY</strong> for students/alumni who attended: </h4>
                <h5>▪ De La Salle University – Manila and</h5>
                <h5>▪ De La Salle University – Laguna Campus formerly De La Salle University-Canlubang / Science and Technology Complex.</h5>
                <h4>▪ This facility <strong><u>does not</u></strong> cater to students/alumni from other De La Salle system schools such as College of St. Benilde, Medical and Health Sciences Institute, Dasmariñas, Araneta etc. </h4>
                <h4>▪ This facility is accessible from 08:00 of Monday to 12:00 of Saturday but will close once the daily limit has been reached.</h4>
                <h4>▪ This facility can only cater to the following Request for Documents (RFD):</h4>
                <h5>▪ Transcript of Records</h5>
                <h5>▪ Certifications</h5>
                <h5>▪ Certified True Copy of Diploma</h5>
                <h5>▪ Special Handling (e.g. WES, LSAC)</h5>
            </div>
            <div className="rfd__description">
                <h2>Reminders before requesting for documents</h2>
            </div>
            <div className="rfd__description">
                <h4>▪ Clear any financial or academic hold on your records. Current students may view the clearance via this link <a href="http://animo.sys.dlsu.edu.ph"><u>http://animo.sys.dlsu.edu.ph</u></a>. Clients are expected to check first if they have clearance holds before submission of request. Your request will <strong>NOT BE PROCESSED</strong> if you have any clearance holds.</h4>
                <h4>▪ Check if grades have been posted (for recently-awarded grades only). One week after grade consultation day, only grades posted in <a href=""><u>https://my.dlsu.edu.ph/</u></a> will appear on your Transcript of Records </h4>
                <h4>▪ Check the schedule for requesting Transcript of Records with Date of Graduation (for graduating students only). Please check the schedule via this link</h4>
                <br></br>
                <h4><a href="https://www.dlsu.edu.ph/offices/registrar/schedules/graduation_activities.pdf"><u>https://www.dlsu.edu.ph/offices/registrar/schedules/graduation_activities.pdf</u></a></h4>
            </div>
            <div className="rfd__description">
                <h2>Payment Reminders</h2>
            </div>
            <div className="rfd__description">
                <h4>▪ The online payment facility accepts credit and debit cards with Visa or Mastercard logo only. </h4>
                <h4>▪ A <strong>NO REFUND POLICY</strong> is strictly implemented due to the automated payment feature of this facility. Cancellation, substitution, or refund requests due to (1) requester error, (2) change of mind, or (3) pending clearances will not be accommodated.</h4>
                <h4>▪ Clients are expected to have reviewed the details of the request before submission. Requests are deemed final and valid for processing upon approval of the online payment.</h4>
                <h4>▪ If you encounter issues with your payment, please email <a href="mailto: hub@dlsu.edu.ph"><u>hub@dlsu.edu.ph</u></a> to verify the status of your payment before attempting another request. Please specify <strong>Payment Verification</strong> in the subject heading of your email.</h4>
            </div>
            <div className="rfd__description">
                <h2>Other Reminders</h2>
            </div>
            <div className="rfd__description">
                <h4>▪ Delivery of your documents will be done via courier. Rates for the delivery  couriers may be found here:</h4>
                <h4><a href="https://ecom.dlsu.edu.ph/apps/ord/document/popDelivery.asp"><u>https://ecom.dlsu.edu.ph/apps/ord/document/popDelivery.asp</u></a></h4>
                <h4>▪ Regular processing days will be eight (8) working days (excluding Saturdays, Sundays, and holidays). Days when classes and office work are suspended will not be counted in the number of processing days.</h4>
                <h4>▪ The processing period is separate from the delivery period.  Delivery of documents may take 2 to 5 additional days (or longer) depending on the address specified in the request and on the courier’s standard serviceable areas.</h4>
                <h4>▪ The following documents, which are not available via the online facility, may be requested through the Enrollment Services Hub’s official email address at <a href="mailto: hub@dlsu.edu.ph"><u>hub@dlsu.edu.ph</u></a>:</h4>
                <h5>▪ Certified True Copy of Course Syllabus</h5>
                <h5>▪ Certified True Copy of Flowchart</h5>
                <h5>▪ Change of Parent on Record (PGOR)</h5>
                <h5>▪ Change of Personal Information</h5>
                <h5>▪ Transfer Credentials/Honorable Dismissal</h5>
                <br></br>
                <h4>Please refer to this link for requests for Certification, Authentication, and Verification (CAV):</h4>
                <br></br>
                <h4><a href=""><u>https://www.dlsu.edu.ph/offices/hub/cav-ched-requests/</u></a></h4>
            </div>

        </div >
    );
};

export default RequestForDocs;