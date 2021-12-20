import { useState } from 'react'
import { data as video_data } from './Resolutions'

export const VideoDownloader = ({ videos, setLoading, setTextData, setProgress }) => {
    /**
     * Values for contentType are 
     * dual: audio/video
     * audio: audio
     * video: video
     */
    const [contentType, setContentType] = useState('audio/video')

    const filterData = (key) => {
        return video_data[key].content === contentType
    }

    const download = async (key) => {
        window.scrollTo({ top: '0px', behavior: 'smooth' })
        const item = videos.link[key]
        setTextData('Please Wait Download is in progress')
        setLoading(true)
        const api = `${process.env.REACT_APP_API_HOST}/download`
        try {
            const response = await fetch(api, {
                method: 'POST',
                body: JSON.stringify({ 'url': item[0] }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if ( !response.ok) { 
                let object = await response.text()
                console.log(object)
                setTextData("Some error during download")
                return
            }
                const reader = response.clone().body.getReader();

                const contentLength = response.headers.get('Content-Length');

                let receivedLength = 0;
                while (true) {
                    const { done, value } = await reader.read();

                    if (done) {
                        setLoading(false)
                        setProgress(0)
                        break;
                    }
                    receivedLength += value.length;
                    setProgress(receivedLength * 100 /contentLength)
                }

                const blob = await response.blob()
                const objUrl = URL.createObjectURL(blob)
                let filename = (videos.cleantitle || "file") + "." + video_data[key].container
                let elem = document.createElement('a')
                elem.href = objUrl
                elem.download = filename
                document.body.appendChild(elem)
                elem.click()
                elem.remove()
                setTextData(`${filename} Downloaded successfully`)
        } catch (e) {
            console.error(e)
            setTextData("Some error occured")
        }
        setTimeout(() => setTextData(null), 2000)
        setLoading(false)
    }

    const NavTabs = ({ data, children }) => {
        return (
            <li className="nav-item">
                <button disabled={contentType === data} className={`nav-link px-4 py-2 ${(contentType === data) && 'active'}`} onClick={() => {
                    setContentType(data)
                }}>{children}</button>
            </li>
        )
    }
    return (
        videos ?
            <div className=" container-md">
                <div className="row px-2 py-3 px-md-0">
                    <div className="col-12 col-md-4">
                        <img width={'auto'} height={'auto'} className='m-auto w-100' src={videos.thumb} alt="VideoThumbnail" />
                        <p className='py-3'><b>{videos.title}</b></p>
                    </div>
                    <div className="col-12 col-md-8">
                        <ul className="nav nav-tabs ">
                            <NavTabs data={'audio/video'}>Video (Media)</NavTabs>
                            <NavTabs data={'video'}>Video only</NavTabs>
                            <NavTabs data={'audio'}>Audio only</NavTabs>
                        </ul>
                        <table className="table table-striped table-hover roboto table-borderless ">
                            <thead className="">
                                <tr>
                                    <th scope="col">{contentType !== "audio" ? "Resolution" : "Speed"}</th>
                                    <th scope="col" className='text-center'>File Size</th>
                                    <th scope="col" className='text-end'>Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(videos.link).filter(filterData).map(key => {
                                    let item = videos.link[key]
                                    let meta = video_data[key]
                                    return <tr key={key}>
                                        <td>{meta.resolution} ( .{meta.container} )</td>
                                        <td className='text-center'>{item[1]}</td>
                                        <td className='text-end'><button className='btn btn-success btn-sm' onClick={e => download(key)}>Download</button></td>
                                    </tr>
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            :
            <></>
    )
}

VideoDownloader.defaultProps = {
    videos: null
}

