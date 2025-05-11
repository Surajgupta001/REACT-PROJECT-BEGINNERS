import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


const SidebarData = [
    {
        title: 'Home',
        icon: <IoHome style={{ marginRight: '8px', fontSize: '1.5em' }} />, // Increased size and added margin
        path: "#home"
    },
    {
        title: 'About',
        icon: <FcAbout style={{ marginRight: '8px', fontSize: '1.5em' }} />, // Increased size and added margin
        path: "#about"
    },
    {
        title: 'Services',
        icon: <MdOutlineMiscellaneousServices style={{ marginRight: '8px', fontSize: '1.5em' }} />, // Increased size and added margin
        path: "#services"
    },
    {
        title: 'Contact',
        icon: <IoMdContact style={{ marginRight: '8px', fontSize: '1.5em' }} />, // Increased size and added margin
        path: "#contact"
    }
]

export default SidebarData
