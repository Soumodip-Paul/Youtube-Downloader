import { useEffect } from 'react'
import { setTitle } from '../utils/Utils'

export const About = () => {
    useEffect(() => {
        setTitle("About")
    }, [])
    return (
        <div className='container py-4'>
            About
        </div>
    )
}
