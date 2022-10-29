import { useState } from 'react'

export default function People()
{

    const [ people, setPeople ] = useState([
        { id: 1, name: 'Jack'},
        { id: 2, name: 'Jill'},
        { id: 3, name: 'Jacob'},
        { id: 4, name: 'Joe'}
    ])

    console.log(people)

    return <div>
        <h2>People</h2>
        <ul>
            {people.map((person) => 
                <li key={ person.id }>{person.name} </li>
            )}
        </ul>
            
    </div>
}