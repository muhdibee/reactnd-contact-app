import React, { Component } from 'react';

class ListContacts extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const contacts = this.props.contacts;
        console.log('props', contacts);
        return(
            <ol className='contact-list'><strong>Contact List</strong>
                {contacts.map((contact) => <li key={contact.id}>{contact.name}</li>)}
            </ol>
        )
    }
}

export default ListContacts;