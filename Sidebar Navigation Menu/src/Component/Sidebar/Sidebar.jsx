import React from 'react'
import './Sidebar.css'
import SidebarData from '../SidebarData/SidebarData';

function Sidebar() {

    const [isOpen, setIsOpen] = React.useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const openSidebar = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className='sidebar-header'>
                <button className='sidebar-btn' onClick={toggleSidebar}>
                    <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>
                </button>
                <div className='sidebar-title'>
                    <h2>{isOpen ? "My-App" : ""}</h2>
                </div>
            </div>
            <nav className='nav-menu'>
                <ul>
                    {SidebarData?.map((item, index) => (
                        <li key={index}>
                            <a href={item.path} onClick={openSidebar}>
                                {item.icon}
                                {isOpen ? item.title : ""}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
