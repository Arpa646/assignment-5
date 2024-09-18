import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Reg: React.FC = () => {
  return (
    <div className="bg-white pt-6 min-lg:h-[900px] shadow-xl lg:w-[800px] sm:w-[500px] md:w-[700px] mx-auto p-4">
      <div className="divider"></div>
      <div className="space-y-6 w-full flex flex-col items-center">
        <h1 className="text-2xl font-medium" style={{ color: "#4F5C6E" }}>
          Create an Account to Escrow.com
        </h1>
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="w-full lg:w-[500px] flex flex-col items-center">
            <div className="space-y-2 w-full">
              <h1 className="text-sm">
                PLEASE ENTER YOUR EMAIL ADDRESS
                <span style={{ color: "red" }}>* </span>
              </h1>
              <div className="relative w-full">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17px"
                  height="14px"
                  viewBox="0 0 17 14"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="ui-email-alt" fill="currentColor" fillRule="nonzero">
                      <path d="M1.02,0 C0.476,0 0,0.476 0,1.02 L0,12.512 C0,13.124 0.476,13.6 1.02,13.6 L15.64,13.6 C16.184,13.6 16.66,13.124 16.66,12.58 L16.66,1.02 C16.66,0.476 16.184,0 15.64,0 L1.02,0 Z M15.164,1.564 L15.164,1.972 L8.364,7.684 L1.564,1.972 L1.564,1.564 L15.164,1.564 Z M1.564,12.036 L1.564,4.012 L7.684,9.18 C7.888,9.316 8.092,9.452 8.364,9.452 C8.636,9.452 8.84,9.384 9.044,9.18 L15.164,4.012 L15.164,12.036 L1.564,12.036 Z"></path>
                    </g>
                  </g>
                </svg>
                <input
                  style={{ border: "1px solid #A4B0B1", borderRadius: "4px" }}
                  type="email"
                  placeholder="Type here"
                  className="hover:border-sky-700 input-bordered h-9 w-full pl-10"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[500px] flex flex-col items-center">
            <div className="space-y-2 w-full">
              <h1 className="text-sm">
                PLEASE ENTER YOUR PASSWORD
                <span style={{ color: "red" }}>* </span>
              </h1>
              <div className="relative w-full">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17px"
                  height="14px"
                  viewBox="0 0 17 14"
                  version="1.1"
                >
                  <path
                    d="M16.2,9.3V6.2C16.2,2.8,13.4,0,10,0C6.6,0,3.9,2.8,3.9,6.2v3.1H1.5C0.7,9.3,0,10,0,10.8v12.3c0,0.9,0.7,1.5,1.5,1.5h17
                c0.9,0,1.5-0.7,1.5-1.5V10.8c0-0.9-0.7-1.5-1.5-1.5H16.2z M6.2,6.2C6.2,4,7.9,2.3,10,2.3c2.1,0,3.9,1.7,3.9,3.9v3.1H6.2V6.2z
                M17.8,22.4H2.3V11.6h15.4V22.4z"
                    fill="currentColor"
                  ></path>
                </svg>
                <input
                  style={{ border: "1px solid #A4B0B1", borderRadius: "4px" }}
                  type="password"
                  placeholder="Type here"
                  className="  hover:border-sky-500  w-full h-9 pl-10"
                />
              </div>
            </div>
          </div>

          <div
            className="lg:ms-[-100px] md:ms-[-100px]  text-sm "
            style={{ color: "#4F5759" }}
          >
            <p className="text-black">Strong passwords have</p>
            <ul className="ms-5">
              <li>
                <FontAwesomeIcon
                  style={{ color: "#E8EEF2" }}
                  icon={faCheck}
                  className="text-lg "
                />{" "}
                At least 7 characters
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "#E8EEF2" }}
                  className="text-lg "
                  icon={faCheck}
                />{" "}
                At least one UPPER case and one lower case character
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "#E8EEF2" }}
                  className="text-lg "
                  icon={faCheck}
                />{" "}
                At least one number or special character
              </li>
            </ul>
          </div>

          <div
            style={{ border: "1px solid #E0E0E0" }}
            className="relative w-full lg:w-[500px] border rounded h-16 pl-10"
          ></div>

          <div className="w-full lg:w-[500px] flex flex-col items-center">
            <div className="relative w-full">
              <Link to="/login">
                <input
                  style={{ backgroundColor: "#3CB95D", borderRadius: "4px" }}
                  type="button"
                  value="Sign Up"
                  className="input hover:bg-sky-500 h-9 font-semibold text-white  w-full pl-10"
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 style={{ color: "#0088FF", borderRadius: "4px" }}>
              Recover your password
            </h3>
          </div>
          <div>-OR-</div>

          <div className="w-full flex flex-col items-center">
            <div className="relative w-full text-center ">
              <Link
                className="text-xs font-bold underline underline-offset-4"
                to="/login"
                style={{ color: "#3CB95D" }}
              >
                LOGIN TO ESCROW.COM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
