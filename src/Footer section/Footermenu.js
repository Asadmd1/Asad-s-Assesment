import React from 'react'
import './Footer.css'

export default function Footermenu() {
    return (
        <div className='footerMenu'>

            <ul>
                <p>NEWS</p>
                <li>Featured News</li>
                <li>Latest News</li>
            </ul>
            

            <ul>
                <p>LIFE</p>
                <li>Latest News</li>
                <li>Fashion</li>
                <li>Dining</li>
                <li>Recipes</li>
                <li>Art & Culture</li>
                <li>Travel</li>
                <li>Motoring</li>
            </ul>


            <ul>
                <p>BUSINESS</p>
                <li>Open House</li>
                <li>What does that even mean?</li>
                <li>Homegrown</li>
                <li>How do I...</li>
                <li>Bag off</li>
                <li>Where to spend it</li>
            </ul>

        </div>
    )
}