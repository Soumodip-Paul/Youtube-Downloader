import { useEffect } from 'react'
import { setTitle } from '../utils/Utils'

export const About = () => {
    useEffect(() => {
        setTitle("About")
    }, [])
    return (
        <div className='container py-4' style={{minHeight: '73.2vh'}}>
            <h3>About US</h3>

            {process.env.REACT_APP_APP_NAME} YouTube Downloader is a leading downloader that focuses on free HD video services. You can find massive amount of video &amp; music, and also download content from various websites, including but not limited to Youtube, Facebook, Instagram. Easy, fast, and small, {process.env.REACT_APP_APP_NAME} YouTube Downloader is your best choice for video download!
        </div>
    )
}
