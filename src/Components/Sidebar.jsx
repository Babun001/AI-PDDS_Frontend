import './Sidebar.css';
// import { motion } from "framer-motion"

import { FaHome } from "react-icons/fa"
import {  NavLink } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

import { IoSettingsSharp } from "react-icons/io5";
import { MdLiveHelp } from "react-icons/md";
// import { IoCall } from "react-icons/io5";




export default function Sidebar({ children }) {

    function help() {
        alert(`Help button is not ready yet!`);
    }
    function setting() {
        alert(`Setting Will enable soon!`);
    }
    const menuItems = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/Service",
            name: "Service",
            icon: <FaUserDoctor />
        },
        {
            path: "/AboutUs",
            name: "AboutUs",
            icon: <IoIosPeople />
        },
        {
            path: "/ContactUs",
            name: "ContactUs",
            icon: <FaSquarePhone />
        },
        {
            path: "/info",
            name: "Information",
            icon: <BsInfoCircleFill />
        },
    ]
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar">

                    {menuItems.map((route) => (
                        <NavLink className="navlink" style={{ textDecoration: "none" }} to={route.path} key={route.name}>
                            <div className="icons" style={{ color: 'black' }}>
                                {route.icon}
                                <span className="Icontext">{route.name}</span>
                            </div>
                        </NavLink>
                    ))}



                    <div className="lowpart">
                        <div className='icons' onClick={help}>{<MdLiveHelp />}
                            <span className="Icontext">Help</span>
                        </div>
                        <div className='icons' onClick={setting}>{<IoSettingsSharp />}
                            <span className="Icontext">Setting</span>

                        </div>
                    </div>


                </div>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}
