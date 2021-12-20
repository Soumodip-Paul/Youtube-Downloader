import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VideoDownloader } from '../Tools/VideoDownloader'
export const Home = () => {
    const [loading, setLoading] = useState(false)
    const [videos, setVideos] = useState(null)
    const [textData, setTextData] = useState(null)
    const [progress, setProgress] = useState(0)
    const [id, setId] = useState('')
    const submit = async e => {
        e.preventDefault()
        if (!id || id === '') return
        try {
            const response = await fetch(`${process.env.REACT_APP_API_HOST || "https://imaginary-chipped-mine.glitch.me"}/video/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                let data = await response.json()
                
                if (data.status.trim().toLocaleLowerCase() === 'ok') {
                    return setVideos(data)
                }
            }
            else {
                alert('Not a valid id')
            }
        } catch (error) {
            alert("some error occured")
        }
    }
    return (
        <div>
            <div className='mb-4 mt-md-2 py-4 container-md bg-dark text-light  '>
                <div className='container-fluid py-5 '>
                    <h1 className='py-4 text-center mb-4 '>Youtube Video Converter</h1>
                    <form style={{ maxWidth: '800px' }} className='mx-auto' onSubmit={submit}>
                        <div className='input-group input-group mb-3  ' >
                            <input type='text ' className='form-control py-md-3 px-md-3 ' placeholder='Paste url or Video Id ' aria-label='Paste url or Video Id ' value={id} onChange={e => setId(e.target.value)} aria-describedby='submit-button' />
                            <button className='btn btn-primary py-md-3 px-md-5 ' type='submit' id='submit-button' disabled={!id || id === ''}>Search</button>
                        </div>
                        <div className='form-text '>
                            By clicking <span className='text-light px-1'>Search</span> you agree to our <Link className='text-decoration-none' to='/ '>Terms and Condition</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container-fluid text-center' style={{ minHeight: '64px' }}>
                <p>
                    {textData}
                </p>
                {loading &&
                    <>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </>}
            </div>
            <VideoDownloader videos={videos} setLoading={setLoading} setTextData={setTextData} setProgress={setProgress}/>
        </div>
    )
}
