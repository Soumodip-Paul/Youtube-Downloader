import { useEffect } from 'react'
import { setTitle } from '../utils/Utils'

export const Contact = () => {
    useEffect(() => {
        setTitle("Contact")
    }, [])
    return (
        <div className='container py-4'>
            Contact
        </div>
    )
}
