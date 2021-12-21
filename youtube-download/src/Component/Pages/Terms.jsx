import { useEffect } from 'react'
import { setTitle } from '../utils/Utils'

export const Terms = () => {
    useEffect(() => {
        setTitle("Terms and Conditions")
    }, [])
    return (
        <div className='container py-4'>
            Terms
        </div>
    )
}
