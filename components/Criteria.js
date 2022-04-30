import React from 'react'
import styles from "../styles/Eligibility.module.css"
import {MdOutlinePregnantWoman} from "react-icons/Md"
import {GiChestnutLeaf,GiWeightScale, GiMedicalPackAlt, GiSyringe,GiFly,GiMedicines,GiChocolateBar} from "react-icons/Gi"
import {RiHospitalLine,RiPulseLine} from "react-icons/Ri"
import {BsSuitHeart} from "react-icons/Bs"

function Criteria() {
  return (
    <div className={styles.gridcontainer}>
        <div className={styles.griditem} datahover=" One should be between the age of 18 and 65 in order to donate blood">18+</div>
        <div className={styles.griditem} datahover=" Donor shouldn't weigh less than 45 kgs"><GiWeightScale/></div>  
        <div className={styles.griditem} datahover=" Temperature and Pulse of the donor should be normal"><RiPulseLine/></div>
        <div className={styles.griditem} datahover=" Immunized and Vaccinated people should not be prohibited"><GiSyringe/></div>
        <div className={styles.griditem} datahover=" Shouldn't be treated for malaria before 3 weeks or 3 years"><GiFly/></div>
        <div className={styles.griditem} datahover=" The systolic and diastolic blood pressures are within normal limits"><GiMedicalPackAlt/></div>
        <div className={styles.griditem} datahover=" Should not have any heart diseases"><BsSuitHeart/></div>  
        <div className={styles.griditem} datahover=" Should not have delivered 1 year ago and stopped lactation"><MdOutlinePregnantWoman/></div>
        <div className={styles.griditem} datahover=" Shouldn't have asthama, epilepsy, bleeding disorders or on steroids"><RiHospitalLine/></div>
        <div className={styles.griditem} datahover=" Say No to Drugs if you're a donor"><GiChestnutLeaf/></div>
        <div className={styles.griditem} datahover=" Under medication not allowed"><GiMedicines/></div>
        <div className={styles.griditem} datahover=" Prohibited if Diabetes patiant is treated with insulin injections."><GiChocolateBar/></div>
        </div>
  )
}

export default Criteria