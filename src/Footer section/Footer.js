import React from 'react'
import Footermenu from './Footermenu'
import Subscription from './Subscription'

export default function Footer(props) {
    return (
        <>
            <div className='footerMain'>
                <Footermenu />
                <Subscription isDark={props.isDark}/>
            </div>
            <ul className='bottomPart'>
                <li>MAGAZINE</li>
                <li>CONTACT</li>
                <li>ABOUT</li>
                <li>PRESS</li>
                <li>SITEMAP</li>
                <li>TS + CS</li>
            </ul>
        </>
    )
}
