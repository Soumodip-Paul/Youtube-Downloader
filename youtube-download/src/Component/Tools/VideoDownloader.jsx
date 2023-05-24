import { useState } from 'react'
import { data as video_data, data2 } from './test'

export const VideoDownloader = ({ videos }) => {
    /**
     * Values for contentType are 
     * dual: audio/video
     * audio: audio
     * video: video
     */
    const [contentType, setContentType] = useState('audio/video')
    const [loading, setLoading] = useState(false)
    const [textData, setTextData] = useState(null)
    const [progress, setProgress] = useState(0)

    const filterData = (key) => {
        const item = video_data[`${key}`]
        // console.log(key)
        if (item === undefined) return (data2[key] && data2[key].content===contentType)
        switch(contentType){
            case "audio/video":
                return (item.hasAudio===true) && (item.hasVideo===true);
            case "video":
                return (item.hasAudio===false) && (item.hasVideo===true);
            case "audio":
                return (item.hasAudio===true) && (item.hasVideo===false);
        }    
        return ((item.hasAudio===false) && (item.hasVideo===false))
    }

    const download = async (key) => {
        document.getElementById('scrollToProgressBar').scrollIntoView()
        const item = videos.link[key]
        setTextData(`Please Wait Download is in progress `)
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
            if (!response.ok) {
                let object = await response.text()
                // console.log(object)
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
                setProgress(receivedLength * 100 / contentLength)
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
            window.scrollTo({ top: '0px', behavior: 'smooth' })
            setTextData(`${filename} Downloaded successfully`)
        } catch (e) {
            // console.error(e)
            setTextData("Some error occured")
        }
        setTimeout(() => {
            setTextData(null)
            setLoading(false)
        }, 2000)
    }

    const NavTabs = ({ data, children }) => {
        return (
            <li className="nav-item">
                <button disabled={contentType === data} className={`nav-link px-md-4 py-md-2 ${(contentType === data) && 'active'}`} onClick={() => {
                    setContentType(data)
                }}>{children}</button>
            </li>
        )
    }
    return (
        videos ?
            <div className=" container-md">
                <h3>Your Search Results : </h3>
                <div className="row px-2 py-3 px-md-0">
                    <div className="col-12 col-md-4">
                        <div className="position-relative">
                            <img width={'auto'} height={'auto'} className='m-auto w-100' src={videos.thumb} alt="VideoThumbnail" />
                            <span className="position-absolute top-0 start-0 translate-end mx-2 my-2 badge rounded-pill bg-primary">
                                {videos.length}
                                <span className="visually-hidden">Duration</span>
                            </span>
                        </div>
                        <p className='py-3'>
                            <b>{videos.title}</b>
                            <br />
                            <b>Views</b>: {videos.view_count} <br />
                            {videos.description && videos.description.substring(0, 250) + (videos.description.length > 120 && "...")}
                        </p>
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
                                    let meta = video_data[`${key}`] || data2[key]
                                    // console.log(item,meta)
                                    return <tr key={key}>
                                        <td>{meta.qualityLabel|| meta.resolution || `${meta.audioBitrate} kbps` } ( .{meta.container} )</td>
                                        <td className='text-center'>{item[1] || <> &#8212; </>}</td>
                                        <td className='text-end'><button className='btn btn-success btn-sm' onClick={e => download(key)}>Download</button></td>
                                    </tr>
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="visually-hidden" id="scrollToProgressBar">End</div>
                </div>
                <div className='container-fluid d-flex flex-column justify-content-center ' id='DownloadProgressBar' style={{ minHeight: '64px' }}>
                    {loading &&
                        <>
                            <p className='mx-auto mt-auto fw-bold'>
                                {textData} {progress !== 0 && ` ( ${Math.floor(progress)}% ) `}
                            </p>
                            <div className="progress w-100 mt-auto">
                                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </>}
                </div>
            </div>
            :
            <></>
    )
}

VideoDownloader.defaultProps = {
    videos: null
}

