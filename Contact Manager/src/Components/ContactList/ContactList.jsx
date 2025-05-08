import React from 'react'
import { MdDelete } from 'react-icons/md';
import './ContactList.css'

function ContactList(props) {

    const { contacts, deleteContact } = props;

    const contactList = contacts.map((value, index) => {
        return (
            <div className='contact-list-item' key={index}>
                <div className='contact-name'>{value.data.name}</div>
                <div className='contact-email'>{value.data.email}</div>
                <span className='delete-icon' onClick={() => deleteContact(value.id)}><MdDelete/></span>
            </div>
        );
    });

    return (
        <>
            <div className='contact-list'>ContactList</div>
            <div className='contact-list-container'>
                {contactList.length > 0 ? contactList : <div>No contacts available</div>}
            </div>
        </>
    );
}

export default ContactList
