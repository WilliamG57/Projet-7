import './collapse.css'
import arrow from '../../assets/arrow.png'
import { useState } from 'react'

export default function Collapse({title, content}) {
    const [open, isOpen] = useState(false);
    return (
        <div className='collapse'>
            <h3 className='collapse_title' onClick={() => isOpen(!open)}>
                {title}
                <img className={open ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="" />
            </h3>
            <div className={open ? 'collapse_content' : 'collapse_content_hidden'}>
                <p aria-hidden={open ? "true" : "false"}>{content}</p>
            </div>
        </div>
    )
}