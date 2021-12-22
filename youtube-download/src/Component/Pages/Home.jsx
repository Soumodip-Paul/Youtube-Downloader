import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { VideoDownloader } from '../Tools/VideoDownloader'
import '../../css/home.css'
import { setTitle } from '../utils/Utils'
import { Features } from '../Fragment/Features'

export const Home = () => {
    const [videos, setVideos] = useState(null)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')

    useEffect(() => {
        setTitle()
    }, [])

    const submit = async e => {
        e.preventDefault()
        if ( id && id === '') return
        let videoId = id
        try {
            setLoading(true)
            try {
                let youtubeUrl = new URL(videoId)
                if (youtubeUrl.hostname === "www.youtube.com" || youtubeUrl.hostname === "m.youtube.com"){
                    if(youtubeUrl.pathname.endsWith('watch')) {
                        videoId = youtubeUrl.searchParams.get('v')
                    }
                }
                else if (youtubeUrl.hostname === 'youtu.be'){
                    videoId = youtubeUrl.pathname.split('/')[1]
                }
            } catch (error) {
                
            }
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/video/${videoId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setLoading(false)
            if (response.ok) {
                let data = await response.json()

                if (data.status.match(/ok/i)) {
                    setTitle( "Search results for " + videoId)
                    return setVideos(data)
                }
                if (data.status.match(/fail/i)){
                    setTitle()
                    setId('')
                    alert("Invalid Link or Id")
                }
                setVideos(null)
            }
            else {
                alert('Not a valid id')
            }
        } catch (error) {

            alert("some error occured")
        }
        setTitle()
        setLoading(false)
    }
    return (
        <div>
            <div className='mb-4 mt-md-2 py-4 container-md bg-dark text-light borderRoundedMd '>
                <div className='container-fluid py-5 '>
                    <img src="/assets/favicon/apple-touch-icon.png" width={'100px'} height={'100px'} alt="LOGO" className="mx-auto d-block" />
                    <h1 className='py-4 text-center mb-4 '>Youtube Video Converter</h1>
                    <form style={{ maxWidth: '800px' }} className='mx-auto' onSubmit={submit}>
                        <div className='input-group input-group mb-3  ' >
                            <input type='text ' className='form-control py-md-3 px-md-3 ' placeholder='Paste url or Video Id ' aria-label='Paste url or Video Id ' value={id} onChange={e => setId(e.target.value)} aria-describedby='submit-button' />
                            <button className='btn btn-primary py-md-3 px-md-5 ' type='submit' id='submit-button' disabled={!id || id === ''}>Search</button>
                        </div>
                        <div className='form-text '>
                            By clicking <span className='text-light px-1'>Search</span> you agree to our <Link className='text-decoration-none' to='/terms-and-condition'>Terms and Condition</Link>
                        </div>
                    </form>

                    <div className='container-fluid d-flex justify-content-center pt-2'>
                            <div className={`spinner-border text-success ${!loading && 'opacity-0'}`} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            {loading && <span className='my-auto mx-3'>Converting</span>}
                    </div>

                </div>
            </div>

            <VideoDownloader videos={videos} />
            <Features />
        </div>
    )
}
