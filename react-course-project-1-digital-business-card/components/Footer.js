import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/suulightly/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a> 
            <a href="https://github.com/suulightly"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    )
}