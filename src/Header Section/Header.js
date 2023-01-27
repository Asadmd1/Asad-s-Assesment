import React from 'react'
import HeaderMenu from './HeaderMenu'
import './Header.css'

export default function Header(props) {
    return (
        <>
            <div className='logonbtn'>
                <HeaderMenu isDark={(e)=>props.isDark(e)}/>
                <div className='Hlogo'>
                    <img src='Media/HeaderImages/Logo.png' />
                </div>
            </div>
            <ul className='Headerlist'>
                <li>NEWS</li>
                <li>OPINION</li>
                <li>LIFE</li>
                <li>BUSINESS</li>
                <li>MAGAZINE</li>
                <li>NEWSLETTER</li>
            </ul>
        </>
    )
}
