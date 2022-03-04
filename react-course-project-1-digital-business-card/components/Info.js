import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
    return (
        <div className="container">
            <img src="../images/profile.jpeg" className="profile-pic" />
            <div className="info">
                <h2>Liwen Su</h2>
                <p>Full-Stack Developer</p>
                <a href="mailto: liwenxsu@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
            </div>
        </div>
    )
}