import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setDescription, setTitle } from '../utils/Utils'
import { data } from '../Tools/Resolutions'
import svgIcon from '../svg/feature-icons.svg'
import "../../css/about.css"

export const About = () => {
    useEffect(() => {
        setTitle("About")
        setDescription(`${process.env.REACT_APP_APP_NAME} YouTube Downloader is a leading downloader that focuses on free HD video services. You can find massive amount of video &amp; music, and also download content from various websites, including but not limited to Youtube, Facebook, Instagram. Easy, fast, and small, ${process.env.REACT_APP_APP_NAME} YouTube Downloader is your best choice for video download!`)
    }, [])
    return (
        <div className="container marketing mt-5 no-link">
            <h2><strong>About US</strong></h2>
            <p className='py-3'>
                {process.env.REACT_APP_APP_NAME} YouTube Downloader is a leading downloader that focuses on free HD video services. You can find massive amount of video &amp; music, and also download content from various websites, including but not limited to Youtube, Facebook, Instagram. Easy, fast, and small, {process.env.REACT_APP_APP_NAME} YouTube Downloader is your best choice for video download!
            </p>
            <h3><strong>Features</strong></h3>
            <div className="row">
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <use xlinkHref={`${svgIcon}#download`} ></use>
                    </svg>

                    <h2 className='text-primary'>Easy Download</h2>
                    <p>Fully compatible with all browsers. Also very easy to use for all.</p>
                </div>
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <use xlinkHref={`${svgIcon}#video`} ></use>
                    </svg>

                    <h2 className='text-primary'>Video &amp; Audio</h2>
                    <p>Directly Download Video &amp; Music Files Separately or Combined .</p>
                </div>
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <use xlinkHref={`${svgIcon}#easy-download`} ></use>
                    </svg>

                    <h2 className='text-primary'>Free Download</h2>
                    <p>Unlimited conversion and free download. Donot worry about payment.</p>
                </div>
            </div>
            <h3><strong>Supported Formats</strong></h3>
            <br />
            <div className="table-responsive">
                <table className="table table-striped table-hover roboto table-borderless ">
                    <thead className='text-light bg-success'>
                        <tr>
                            <th scope="col">Format</th>
                            <th scope="col">Type</th>
                            <th scope="col">Resolution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map(key =>
                            <tr key={key}>
                                <td>{data[key].container}</td>
                                <td>{data[key].content}</td>
                                <td>{data[key].resolution}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <br />
            <h3><strong>Warning</strong></h3>
            <p>
                All contents downloaded from our portal are subject to copyright.Please use at your own risk.
                &nbsp;{process.env.REACT_APP_APP_NAME} is not responsible for any kind of monetary or
                physical damages caused by them. See our <Link to={'terms-and-condition'}>Terms and
                    Conditions</Link> for details. You can use our content for Education, Hobby or Non-commercial
                purposes only.
            </p>
            <br />
            <h3><strong>About Author</strong></h3>
            <p>
                <strong>
                    <a href="http://github.com/Soumodip-Paul" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                        Soumodip Paul
                    </a>
                </strong>
                <br />
                This project is a hobby project. I am learning <a href="https://reactjs.org/">React Js</a>
                &nbsp;so planned to make some interesting projects for my Resume. One day I was exploring
                some websites  for my inspiration and landed into a Youtube video downloading platform . Then
                I decided to make an YouTube video downloading tool. So I have created this project.
                This project is hosted using <a href="https://azure.microsoft.com/en-in/"> Microsoft Azure </a>
                free service. So I can not gurantee the uptime of our website. Some time the video conversion
                process maybe very time consuming.
                Please support me on:</p>
            <ul className="icon-list mt-2">
                <li><a href="https://www.youtube.com/channel/UCOFwfN-LJ7wGvAOovAwpjxg?sub_confirmation=1">Youtube</a></li>
                <li><a href="https://twitter.com/soumodippaul6">Twitter</a></li>
                <li><a href="https://instagram.com/soumodippaul64">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/soumodip-paul-10032002/">LinkedIn</a></li>
                <li><a href="https://github.com/Soumodip-paul">Github</a></li>
            </ul>
            <p>
                So that I can improve this project and Make more awesome projects like this.
            </p>
            <p className=''>
                Some websites by me:
            </p>
            <ul className="icon-list">
                <li><a href="https://soumodip-paul.github.io/CoMitra">CoMitra - vaccine traker and finder</a></li>
            </ul>
        </div>
    )
}
