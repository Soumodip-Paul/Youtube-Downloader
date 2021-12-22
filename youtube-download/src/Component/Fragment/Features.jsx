import React from 'react'
import SVGitem from '../svg/feature-icons.svg'
import '../../css/feature.css'

export const Features = () => {
    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 text-md-center"><strong>Youtube Video Downloader</strong></h2>
            <p className="pb-2 px-md-5 text-md-center">
                {process.env.REACT_APP_APP_NAME} allows you to convert &amp; download video from YouTube to Mp3, Mp4 in HD quality. Y2mate supports downloading all video formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily download for free thousands of videos from YouTube for absolutely free.
            </p>
            <hr />
            <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
                <div className="feature col text-md-center">
                    <div className="feature-icon bi">
                        <svg width="1.5em" height="1.5em"><use xlinkHref={`${SVGitem}#download`} /></svg>
                    </div>
                    <h2 className='text-primary'>Easy Download</h2>
                    <p>Fully compatible with all browsers. Also very easy to use for all.</p>
                </div>
                <div className="feature col text-md-center">
                    <div className="feature-icon bi">
                        <svg width="1.5em" height="1.5em"><use xlinkHref={`${SVGitem}#video`} /></svg>
                    </div>
                    <h2 className='text-primary'>Video &amp; Audio</h2>
                    <p>Directly Download Video &amp; Music Files Separately or Combined .</p>
                </div>
                <div className="feature col text-md-center">
                    <div className="feature-icon bi">
                        <svg width="1.5em" height="1.5em"><use xlinkHref={`${SVGitem}#easy-download`} /></svg>
                    </div>
                    <h2 className='text-primary'>Free Download</h2>
                    <p>Unlimited conversion and free download. Donot worry about payment.</p>
                </div>
            </div>
            <hr />
            <div className="row pt-3 g-5">
                <div className="col-md-6">
                    <h2>Instructions</h2>
                    <p>How to download videos using {process.env.REACT_APP_APP_NAME}</p>
                    <ul className="icon-list">
                        <li>Search by Youtube Video Id or directly paste the link of video you want to convert</li>
                        <li>Click "Start" button to begin converting process</li>
                        <li>Select available formats and then click <strong className='px-1'> Download</strong> button</li>
                        <li>After conversion the video will be downloaded automatically</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h2>Features</h2>
                    <p>Our Awesome features are here</p>
                    <ul className="icon-list">
                        <li>Unlimited downloads and always free</li>
                        <li>High-speed video converter</li>
                        <li>No registration required</li>
                        <li>Support downloading with all formats</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
