import React from 'react';

function Users() {
    const Users = [
        {
          id: '01',
          name: 'John Deo',
          email: 'john@gmail.com',
          phone: '202-555-0163'
        },
        {
          id: '02',
          name: 'Brad Pitt',
          email: 'fightclud@gmail.com',
          phone: '202-555-0106'
        },
      ];
    return ( <>
    <h1>Rendering Lists</h1>
    {
        Users.map((data)=>(
            <ul>
                <li key={data.id}>
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                </li>
            </ul>
        ))
    }
    </> );
}

export default Users;