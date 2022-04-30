import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import styles from "../../styles/Event.module.css";
import styles2 from "../../styles/CampForm.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
export default function CampPage({ evt }) {
  const router = useRouter();
 
  //converting time (substring)
  let time=evt.Time.toString();
  time=time.substring(0,5);

  const[Form,showForm]=useState(false);

  const handleRegister=()=>
  {
    showForm(true);


  }
  return (
    <Layout title={router.query.slug}>
      <div className={styles.event}>
        

        <span>
          {new Date(evt.Date).toLocaleDateString("en-UK")} 
        </span>

        <h1>{evt.Name}</h1>
        <ToastContainer />
        {
          <div className="image">
            { evt.image!==null?<Image src={evt.image.url} width={660} height={300} />:<Image src={"/images/Blood-Donation-Transparent-Background.png"} width={660} height={300} />}
           
          </div>
        }
        
        <p>{evt.units}</p>
        <h3>Description:</h3>
        <p>{evt.Description}</p>
        <h3>Address:{evt.Address}</h3>
        <p>{evt.address}</p>
        <h3>Contact Details:</h3>
        <p>{evt.ContactNumber}</p>

        <button className="btn-edit" onClick={handleRegister}>Register</button>
        {Form===true?<><br></br><br></br><br></br>
          <form className={styles2.form} >
            <fieldset className>
            <legend className>
          Your Details:
            </legend>
        <div className={styles2.grid}>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              
              
            ></input>
            
          </div>
          <div>
            <label htmlFor="name">Contact Number</label>
            <input
              type="tel"
              id="name"
              name="name"
              placeholder="Phone Number"

              
            ></input>
            
          </div>
        </div>

        <input type="submit" value="Register for the Camp" className="btn"></input>&nbsp;
        
       
        </fieldset>
      </form>
     
        </>
        
        :
        <></>}

        

        
       



        <Link href="/camps">
          <a className={styles.back}>{" <"}Go Back </a>
        </Link>
      </div>
    </Layout>
  );
}
/*
export async function getServerSideProps({query:{slug}})
{
  
  const res= await fetch(`${API_URL}/api/events/${slug}`);

  const events= await res.json()
  return{

    props:{
      evt:events[0],

    },

  }
}*/
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/blood-donation-camps`);
  const events = await res.json();
  const paths = events.map((evt) => ({
    params: {
      slug: evt.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/blood-donation-camps?slug=${slug}`);

  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
