import { useRef, useEffect, useState } from 'react'

export default function Clicker({ increment, keyName, color })
{
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    const buttonRef = useRef()
    console.log(buttonRef)

    useEffect(() => 
    {

        buttonRef.current.style.backgroundColor = 'papayawhip'
        buttonRef.current.style.color = 'salmon'

        return () => 
        {
            localStorage.removeItem(keyName)
        }

    }, [])

    useEffect(() => 
    {
        localStorage.setItem(keyName, count)
    }, [ count ])
    
    
    const buttonClick = () => 
    {
        setCount(value => value + 1)
        increment()
    }

    return <div>
        <div style={ {color} }>Click count: { count }</div>
        <button ref= { buttonRef} onClick={ buttonClick }>Click Me</button>
    </div>
}