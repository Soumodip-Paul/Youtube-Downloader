import { useEffect } from 'react'


export const BannerAds = () => {
    useEffect (() => {
        const script = document.createElement('script')
        script.src = '//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=1143d349-4746-478a-bc97-b6c5c2f1f6b6'
        script.async = true
        document.getElementById('__banner_add').appendChild(script)
        return(
            document.getElementById('__banner_add').removeChild(script)
        )

    })
    return (
        <div id="__banner_add" style={{minHeight: '150px'}}>
            <div id="amzn-assoc-ad-1143d349-4746-478a-bc97-b6c5c2f1f6b6" className='container'></div>
        </div>
    )
}
