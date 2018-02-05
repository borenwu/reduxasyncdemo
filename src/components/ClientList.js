import React from 'react';


const ClientList = (props) => {
    return (
        <ul>
            {props.clients.map((client)=>(
                <li>{client.client_name}</li>
            ))}
        </ul>
    )
};

export default ClientList;