import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import Carousel from "../components/Carousel";
import RequestItem from "../components/RequestItem";
import Table from "../components/Table";
import styles from "../styles/Font.module.css"
import Criteria from "../components/Criteria";
export default function HomePage({ events }) {
  return (
    <Layout>
      <div>
      <h1>Emergency Requests</h1>
      {events.length === 0 && <h1>No Requests</h1>}

      {events.map((evt) => (
        <RequestItem key={evt.id} evt={evt} />
      ))}
      <div>
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Requests</a>
        </Link>
      )}
      </div>
      <br/>
      <br/>
      <br/>
      <h1>About Blood Donation</h1><br/>
      <Table/><br/>
      <div className={styles.p}>
      <p>
          Blood donation is when a person voluntarily gives blood, which can be later used for blood transfusions or to make certain drugs. Blood banks store this blood. The blood can be used to help the victims of accidents, for
          example. Usually, the blood donor and the donated blood are tested for diseases which spread through the blood. Donating blood can reveal potential health problems and is quite recommended for checkups.
          Blood donation, may lower your risk of suffering a heart attack and reduce your risk of developing cancer. Lending blood can help your liver stay healthy. Giving blood can even help your mental state.
          In conclusion, the health benefits of donating blood are considerable but of course, the most important part of the process is helping to save lives. Donating blood is good for you, and it’s even better for all the people who desperately need the help.
      <br/><br/></p>
      </div>
      <Link href="/events">
          <a className="btn-secondary">Donate Now</a>
        </Link>
      <br/><br/><br/><br/><br/><br/>
      <h1>Eligibility Criteria</h1>
      <br/><br/>
      <Criteria/>
      <br/><br/><br/><br/><br/><br/><br/>
      <h1>How is it done?</h1>
          <img className="donate" src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/04/covidBloodDonor-1213554544-770x553-1.jpg" id="t" width={"55%"}></img> 
          <br/><br/>
          <div className={styles.p}>
          <p>The process is really simple. You'll go into a donor room where you'll lie down on a chair. A phlebotomist (an employee who draws blood) will clean your arm and insert a new, sterile needle into your vein.
          This takes few seconds, and it can feel like a quick pinch. You'll donate about 1 pint (one unit) of blood.The process should take less than 10 minutes. But if you’re
          donating platelets, red cells, or plasma by apheresis, the process can take much longer up to approximately 2 hours. When you’re done, you’ll raise your donation arm and put
          a little bit of pressure on it, which helps your blood clot. Then they’ll put an adhesive strip on your arm.</p>
          <br/><br/><br/>
      <h1>Types of Blood Donation</h1>
      <Carousel/>
      <p>
          <b>Red blood cells</b>, also known as erythrocytes, deliver oxygen to the tissues in your body.
          During a <b>Power Red donation</b>, you give a concentrated dose of red cells,
          the part of your blood used every day for those needing transfusions as part of their care. This type of donation uses an automated process that separates your red blood cells from the other blood components,
          and then safely and comfortably returns your plasma and platelets to you.<br/>
          <br/>
          <b>Platelets</b> are tiny cells in your blood that form clots and stop bleeding. Platelets are most often used by cancer patients and others facing life-threatening illnesses and injuries.
          In a <b>Platelet donation</b>, an apheresis machine collects your platelets along with some plasma, returning your red cells and most of the plasma back to you.
          A single donation of platelets can yield several transfusable units, whereas it takes about five whole blood donations to make up a single transfusable unit of platelets.
          <br/>
          <br/>
          <b>Plasma</b> is the largest part of your blood. It makes up more than half (about 55%) of its overall content. When separated from the rest of the blood, plasma is a light yellow liquid. Plasma carries water,
          salts and enzymes. In an <b>AB Elite donation</b>, you give plasma, a part of your blood used to treat patients in emergency situations. AB plasma can be given to anyone regardless of their blood type.
          Plasma is collected through an automated process that separates plasma from other blood components, then safely and comfortably returns your red blood cells and platelets to you.
          <br/><br/> <b>Whole blood</b> is the most flexible type of donation. 
          It can be transfused in its original form, or used to help multiple people when separated into its specific components of red cells, plasma and platelets.
      </p>
      {/* <img src="https://cdn.pixabay.com/photo/2020/11/08/15/47/heart-5724137__340.png"/> */}
      <br/>
      </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=5`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
