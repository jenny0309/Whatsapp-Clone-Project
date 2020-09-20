import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export const useContacts = () => {
    return useContext(ContactsContext)
}

export function ContactsProvider(props) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    const createContact = (id, name) => {
        setContacts(prevContacts => {
            return [...prevContacts, { id, name }]
        })
    }

    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {props.children}
        </ContactsContext.Provider>
    )
}
