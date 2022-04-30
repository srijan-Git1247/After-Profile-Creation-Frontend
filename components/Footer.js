import React from 'react'
import Link from 'next/link'
import styles from "../styles/Footer.module.css"
export default function Footer() {
  let date = new Date().toLocaleDateString().substring(5)
  return (
    <footer className={styles.footer}>
      
      <p id='foot'>Copyright &copy; Blood Quests {date}</p>  
      <p>
          <Link href="/about">About</Link>
      </p>
      <p id='foot'>
        &copy; Ne Developers , Contact: +91-9894178970<br/>
        Address: Opp. State Bank of Sikkim
        Metro point, Tadong Gangtok, East Sikkim
        737102<br/>
      </p>
    </footer>
  )
}
