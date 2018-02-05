import React from 'react';
import ClientList from './components/ClientList'

let clients = [
    {client_name:'client 1'},
    {client_name:'client 2'},
    {client_name:'client 3'},
]

const App = () => {
    return (
        <div>
            <ClientList clients={clients}/>
        </div>
    )
}

export default App;
