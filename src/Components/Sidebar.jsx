import './Sidebar.css';
// import { motion } from "framer-motion"

import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import { TbCheckupList } from "react-icons/tb";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
// import { IoCall } from "react-icons/io5";




export default function Sidebar({ children }) {

    function red(){
        alert(`Disable the menu!`);
    }
    function green(){
        alert(`Enable the menu!`);
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
            icon: <TbCheckupList />
        },
        {
            path: "/ContactUs",
            name: "ContactUs",
            icon: <IoIosPeople />
        },
        {
            path: "/info",
            name: "information",
            icon: <BsInfoCircleFill />
        },
    ]
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar">
                    
                    {menuItems.map((route) => (
                        <NavLink className="navlink" to={route.path} key={route.name}>
                            <div className="icons">
                                {route.icon}
                            </div>
                            {/* <div className="menu">
                                {route.name}
                            </div> */}

                        </NavLink>
                    ))}

                    <div className="lowpart">
                        <button className='btn btn-danger' onClick={red}>red</button>
                        <button className='btn btn-success' onClick={green}>green</button>
                    </div>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}
