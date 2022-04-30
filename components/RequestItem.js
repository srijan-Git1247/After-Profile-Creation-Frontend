import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/RequestItem.module.css";

export default function RequestItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : "/images/Blood-Donation-Transparent-Background.png"
          }
          width={150}
          height={150}
        className={styles.Image}></Image>
      </div>
      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-UK")} <br></br> at {evt.venue},{evt.address}
        </span>
        <h3>{evt.name+"\t"+"("+evt.BloodType+")"}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Check Details</a>
        </Link>
      </div>
    </div>
  );
}
