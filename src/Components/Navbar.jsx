import React from 'react';
import { motion } from "framer-motion"

// import { FaHome } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6";
import { TbCheckupList } from "react-icons/tb";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoCall } from "react-icons/io5";


import { NavLink } from 'react-router-dom';
// function clicked (){
//     alert(`You clicked on the button`);
//     document.getElementsByClassName('btn')
// }

const Routes = [
    {
        path: "/",
        Name: "Home",
        icon: <FaUserDoctor />
    },
    {
        path: "/Service",
        Name: "Service",
        icon: <TbCheckupList />
    },
    {
        path: "/AboutUs",
        Name: "About Us",
        icon: <IoIosPeople />
    },
    {
        path: "/path",
        Name : "info.",
        icon : <BsInfoCircleFill/>
    },
    {
        path: "/ContactUs",
        Name: "Contact With Us",
        icon: <IoCall />
    }
]

export default function Navbar({ child }) {
    return (
        <>
            <div className='main-container'>

                <motion.div animate={{ width: "250px" }} className='sidebar'>
                    <div className='pages'>{Routes.map((rt) => (
                        <NavLink to={Route.path} key={Route.Name}>
                            <div className='icons'>{Route.icon}</div>
                            <div className='page_link'>{Route.Name}</div>
                        </NavLink>
                    ))}</div>
                </motion.div>
                <main>
                    {child}
                </main>
            </div>
        </>
    );
}
