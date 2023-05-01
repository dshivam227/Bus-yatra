import React from 'react'
import './homepage.css'
// import '../Why/Services'
// import Services from '../Why/Services'
export default function Homepage({ history }) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/login')
    }

    return (
        <div className='container maint-cnt'>
            <div className="header-nav">
                <span className="mytext1"> Bus Yatra </span>
            </div>

            <div className="">
            </div>

            <div className="container">
                <div className="slogan">
                    <h1>
                        <span> Travel with Us</span>
                        <div className="message">
                            <div className="word1">Fast</div>
                            <div className="word2">Safe</div>
                            <div className="word3">with a smile</div>
                        </div>
                    </h1>
                </div>

                <a href="/#" onClick={e => enterSite(e)} className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>

                    
                    <span >Book Now!</span>
                </a>
            </div>
           
        </div>
        
    )
}


