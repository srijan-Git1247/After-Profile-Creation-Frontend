import React from 'react'
//import styles from "../styles/PhotoGrid.module.css"
import styles from "../styles/PhotoItem.module.css";
import Image from "next/image";
import Link from "next/link";
//import styles from "../styles/Eligibility.module.css"
function PhotoGrid({evt,link}) {
  /*<div className={styles.imagegrid}>
        <img className={styles.imagegridcol2} src="https://smu.edu.in/content/dam/manipal/smu/CRH/Logo/crhf1.jpg"></img>
        <img className={styles.imagegridrow2} src="https://assets.telegraphindia.com/telegraph/2021/May/1620076381_04nblstnm_5col.jpg"></img>
        <img className={styles.imagegridrow2} src="https://cdn.dribbble.com/users/975367/screenshots/3633260/media/5b6f0a7e46b2dd495f8706aef54f0aae.jpg?compress=1&resize=400x300"></img>
    </div> */
    



    /*  <div>
    <div className={styles2.event}>
      <div className={styles2.img}>
        <Image
          src={evt}
          width={150}
          height={150}
       ></Image>
      </div>
      
    </div>


    </div>*/
  return (
    
      <div className={styles.gridcontainer}>
          <div className={styles.griditem}>
        <Link href={link}>
          <img className={styles.img}
          src={evt}
          width={150}
          height={150}
       ></img>
       </Link>
            
          </div>
        
          </div>
    
   
  )
}

export default PhotoGrid