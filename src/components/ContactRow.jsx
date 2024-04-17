import React from 'react'
import "../App.css"

export default function ContactRow({ setSelectedContactId, contact}) {
    
    return (
        <>
            <tr 
                onClick={() => {
                    setSelectedContactId(contact.id);
                }}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
        </>
    )
}