import Link from "next/link"
import {FaPencilAlt,FaTimes} from "react-icons/fa"
import styles from "../styles/ProfileRequest.module.css";

import React from 'react'

export default function ProfileRequest({evt,handleDelete}) {
  return (
    <div className={styles.event}>
        <h4>
            <Link href={`/events/${evt.slug}`}>

                <a><span>Requester's Name:&nbsp;</span>{evt.name}</a>
            </Link>
        </h4>
        
        <a href="#" className={styles.delete} onClick={()=>handleDelete(evt.id)}>
        <FaTimes/><span>Delete Request</span>
        </a>











        
    </div>
  )
}
