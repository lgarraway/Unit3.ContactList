import { React, useState, useEffect } from 'react'
import "../App.css"
export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)

    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(()=>{
        async function fetchContact() {
        try {
            const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            )
            const result = await response.json();
            setContact(result);
            setIsLoaded(true)
        } catch (error) {
            console.error(error);
        }
    }
    fetchContact()
    },[])

    console.log("Contact: ", contact)

    return (
        <>
            { isLoaded && (
                <>
                    <h2>Name </h2>
                    <p>{contact.name}</p>
                    <h2>Username </h2>
                    <p>{contact.username}</p>
                    <h2>Email</h2>
                    <p> {contact.email}</p>
                    <h2>Address  </h2>
                    <p>{contact.address.street} {contact.address.suite}</p>
                    <p>{contact.address.city}, {contact.address.zipcode}</p>
                    <h2>Phone </h2>
                    <p>{contact.phone}</p>
                    <h2>Website </h2>
                    <p>{contact.website}</p>
                    <button onClick={()=>{ 
                        setSelectedContactId(null)
                        setIsloaded(False)
                    }}> Back </button>
                </>
            )}
        </>    
    )
}