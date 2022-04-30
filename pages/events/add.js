import React from "react";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../../config/index";
import Link from "next/link";
import styles from "../../styles/Form.module.css";
import { Alert } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { parseCookie } from "../../helpers";

export default function add({token}) {
  const { user, logout } = useContext(AuthContext);
  const [values, setValues] = useState({
    name: "",
    units: "",
    venue: "",
    address: "",
    date: "",
   
    BloodType: "",
    Phone: "",
    description: "",
    user: user,
    image:user.ProfilePicture,
    published_at: null,
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Some Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all the fields");
      console.log("Please fill in all the fields");
      return;
    }

    const res = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("You are not authorized");
        return;
      }
      toast.error("Something went wrong");
    } else {
      const evt = await res.json();
      alert(
        "Your Request will be verified by the admin. You may be receiving a call before your request is initiated."
      );
      router.push(`/`);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Layout title="Request Blood">
      <Link href="/events">&lt;Back</Link>
      <h1>Request</h1>
      <ToastContainer />

      <form onSubmit={handleSubmit} className={styles.form} >
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Contact Person's Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              
            ></input>
          </div>
          <div>
            <label htmlFor="units">Units</label>
            <input
              type="number"
              id="units"
              name="units"
              value={values.units}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="venue">Hospital/Clinic/Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={values.venue}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={values.date}
              onChange={handleInputChange}
            ></input>
          </div>
       
          <div>
            <label htmlFor="BloodType">Blood Type</label>
            <select
              className="blood"
              type="Text"
              id="BloodType"
              name="BloodType"
              value={values.BloodType}
              onChange={handleInputChange}
            >
              <option></option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <label htmlFor="Phone">Phone Number</label>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              pattern="[0-9]{10}"
              value={values.Phone}
              required
              onChange={handleInputChange}
               
              
            ></input>
          </div>
        </div>

        <div>
          <label htmlFor="description">Request-Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="Post Request" className="btn"></input>
      </form>
    </Layout>
  );
}
export async function getServerSideProps({req})
{
  const {token}=parseCookie(req);
  return{
    props:{
      token
    }
  }


}