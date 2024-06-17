import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import "./Dropdown.css";

const Dropdown3 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-10">
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <p className="text-xl">(3) Enrollment and Payment</p>
          {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <hr className="my-4" />
        {showDropdown && (
          <div className="dropdown-info space-y-4">
            <p className="text-center">
              <b>Payment Deadlines for for A.Y. 2022-2023 Term 2</b>
            </p>

            <ul className="listdropdown">
              <li>
                Payment without Surcharge
                <br />
                Until January 28, 2023 (Saturday)
              </li>
              <li>
                Payment with Surcharge
                <br />
                From January 29, 2023 - February 11, 2023
              </li>
              <li>
                Last day of Payment
                <br />
                February 11, 2023
              </li>
              <li>
                Payment of 2nd Half (Installment)
                <br />
                February 11, 2023
              </li>
              <li>
                <b>Auto-Dropping of Enrolled Course/s Without Payment</b>
                <br />
                February 11, 2023, 5:00 PM
              </li>
              <li>
                For 2/3 Installment Payments
                <br />
                March 3, 2023
              </li>
              <li>
                For 3/3 Installment Payments
                <br />
                April 22, 2023 (Saturday)
              </li>
            </ul>

            <p className="text-center italic">
              <i>For Installment payments:</i>
            </p>

            <ul className="listing">
              <li>
                For two (2) installment payments, the second payment is due on
                the Midterm week.
              </li>
              <li>
                For three (3) installment payments, the third payment is due on
                the Finals week.
              </li>
            </ul>

            <p className="text-center">
              <b>Modes of Payment</b>
            </p>

            <div className="list-decimal list-inside pl-4 space-y-4">
              <li className="mt-2">Online (MyLaSalle Account)</li>
              <ul className="listdropdown">
                <li>
                  Log into your MLS account under "View Assessment (with online
                  payment)".
                </li>
                <li>
                  VISA and MASTERCARD credit cards and debit cards are accepted
                </li>
                <li>Dragonpay</li>
                <li>
                  Tutorial Links:
                  <br />
                  <u><a
                    className="break-words"
                    href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/online-payment-thru-mls.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Online Payment through MLS
                  </a></u>
                  <br />
                  <u><a
                    className="break-words"
                    href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/dragonpay-payment-gateway-steps.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dragonpay Payment Gateway-Steps
                  </a></u>
                  <br />
                </li>
              </ul>
              <li className="mt-2">Online (Mobile/Internet Banking)</li>
                <ul className="listdropdown">
                    <li>Account-holders of UNION BANK, METROBANK, UCPB, BDO, and BPI.</li>
                    <li>
                    Tutorial Links:
                    <br />
                    <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/bdo-online-banking-bills-payment-manila.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BDO Online Banking Bills Payment
                    </a></u>
                    <br />
                    <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/how-to-enroll-a-biller-bpi.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BPI-How to enroll a Biller
                    </a></u>
                    <br />
                    <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/how-to-pay-bills-using-bpi-online.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        How to Pay Bills Using BPI Online or the New BPI Mobile App
                    </a></u>
                    <br />
                    <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/dlsu-bcpa-payment-guidelines.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        DLSU-BPCA Payment Guidelines (METROBANK)
                    </a></u>
                    <br />
                    <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/ucpb-connect-step-by-step-guide.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        UCPB Connect Step by Step Guide
                    </a></u>
                    <br />
                    <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/unionbank-payors-guide-online-app.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        UnionBank Payor’s Guide Online Application
                    </a></u>
                    <br />
                    </li>
                </ul>
                <li className="mt-2">Over the Counter (OTC) Bank Payment</li>
                <ul className="listdropdown">
                    <li>Banco De Oro (BDO)<br/>
                    Sample: <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/bdo-cash-transaction-slip.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BDO Cash Transaction Slip
                    </a></u>
                    </li>
                    <li>Metrobank<br/>
                    Sample: <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/metrobank-sample-bills-payment-dlsu-manila.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Metrobank Payment Slip
                    </a></u>
                    </li>
                    <li>Rizal Commercial Banking Corporation (RCBC)<br/>
                    Biller's Name: De La Salle University - Manila
                    </li>
                    <li><u><b>Selected</b></u> United Coconut Planters Bank (UCPB) Branches<br/>
                    Biller's Name: De La Salle University - Manila
                    </li>
                    <li> Land Bank of the Philippines (LBP) <br/>
                    Branch: P. Ocampo Branch <u><b>only</b></u><br/>
                    Biller's Name: De La Salle University, Inc.
                    </li>
                    <li>UnionBank<br/>
                    Sample: <u><a
                        className="break-words"
                        href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/accounting/guidelines/unionbank-payors-guide-otc.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        UnionBank Payment Slip
                    </a></u>
                    </li>

                    
                </ul>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown3;
