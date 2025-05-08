import { React, useState } from 'react'
import './Contact.css'

function Contact({ addContact }) {

    const [contactData, setContactData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setContactData({ ...contactData, name: e.target.value });
        }
        else {
            setContactData({ ...contactData, email: e.target.value });
        }
    }

    const handleAdd = () => {
        if (contactData.name === '' || contactData.email === '') {
            alert('Please fill all the details');
        }
        else {
            addContact(contactData);
            setContactData({ name: '', email: '' });
        }
    }

    return (
        <div className='contact'>
            <div className='add-contact'>Add Contacts</div>
            <form className='add-contact-form'>
                <label className='nameLabel'>Name</label>
                <input type="text" placeholder='Enter your Name' name='name' value={contactData.name} onChange={handleChange} />
                <label className='emailLabel'>Email</label>
                <input type="email" placeholder='Enter your Email' name='Email' value={contactData.email} onChange={handleChange} />
            </form>
            <button className='btn' onClick={handleAdd}>Add Contact</button>
        </div>
    )
}

export default Contact
