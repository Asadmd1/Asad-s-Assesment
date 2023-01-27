import React from 'react'
import './Footer.css'

export default function Subscription(props) {
    return (
    <div className={props.isDark?'subscriptionBox darkinput':'subscriptionBox'}>
        <p>SUBSCRIBE</p>
        <p>Get fresh updates about the fashion, beauty, trends</p>
        <form onSubmit={(e)=> e.preventDefault()}>
            <input placeholder='Enter your email below'/>
            <button>Submit</button>
        </form>
    </div>
  )
}
