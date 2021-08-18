import React, { Component } from 'react';

class ListContacts extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('props', this.props.contacts);
        return(
            <ol className='contact-list'>
            </ol>
        )
    }
}

export default ListContacts;