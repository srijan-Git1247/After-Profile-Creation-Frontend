import React from 'react'
import styles from "../styles/PhotoGrid.module.css"
function Table() {
  return (
    <div>
        <div className={styles.imagegrid}>
        <img className={styles.imagegridrow2}src="https://www.credr.com/blog/wp-content/uploads/2021/06/image-1024x576.png"></img>
        {/*<img className="image-grid-row-2" src="https://www.veritasint.com/blog/wp-content/uploads/2021/06/10.-How-blood-groups-are-inherited-and-why-its-important-that-you-know-yours_Cuadro_blog1_ENG-768x388.jpg"></img>*/}
         <img className={styles.imagegridrow2} src="https://s3-us-west-1.amazonaws.com/mf-blog-staticfiles/d-compressed/ghost-prod/2018/12/Screen-Shot-2018-12-11-at-9.09.25-AM.png"></img> 
        </div>
    </div>
  )
}

export default Table