import { useEffect, useState } from 'react'

export default function People()
{

    const [ people, setPeople ] = useState([])

    const getPeople = async () =>
    {
        //     const request = window.fetch('https://jsonplaceholder.typicode.com/users')
        //     request.then((response) => {
        //         const parse = response.json()
                
        //         parse.then((result) => {
        //             console.log(result)
        //         })
        //    })

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => 
        //     {
        //         return response.json()
        //     }) 
        //     .then((result) =>
        //     {
        //         console.log(result)
        //     })  
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        setPeople(result)
            //.then(response => response.json())
            //.then(result => console.log(result))
    }

    useEffect(() => 
    {
        getPeople()
    }, [])

    return <div>
        <h2>People</h2>
        <ul>
            {people.map((person) => 
                <li key={ person.id }>{person.name} </li>
            )}
        </ul>
            
    </div>
}