import React, { Children } from "react";
import Layout from "../components/Layout";
import PhotoGrid from "../components/PhotoGrid";
import Link from "next/link";
export default function AboutPage() {
  return (
    <Layout title="About Blood Donation">
      <h1>About</h1>
      <p>Blood Quests</p>
      <p>Version 1.0.0</p>
      <p><Link href="https://nedevelopers.in/" passHref={true}>
          <a>Ne developers</a>
        </Link></p>
        <br/>
        <h1>Support Partners</h1>
        <p>
        On our journey to make the society lively & healthy, <br/>we would also
        like to thank our support partners for the great assistance.
      </p>
      <div>
        <PhotoGrid evt="https://scontent-ccu1-1.xx.fbcdn.net/v/t1.6435-9/62076709_344982056209099_4737898021876924416_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=B-h2UYMkj0UAX8EIW2k&_nc_ht=scontent-ccu1-1.xx&oh=00_AT9gErUkbWQsC--tUZteUAdWsrZNJLjClAX80_C1ZcL9eA&oe=629351BB" link="https://www.facebook.com"/>  
        <PhotoGrid evt="/images/SupportPartners/runners.jpg" link="https://www.facebook.com"/> 
        <PhotoGrid evt="/images/SupportPartners/Aakraman.jpg" link="https://www.facebook.com"/>
        <PhotoGrid evt="/images/SupportPartners/Friends.jpg" link="https://www.facebook.com"/>
        <PhotoGrid evt="/images/SupportPartners/Taas.jpg" link="https://www.facebook.com"/>
        <PhotoGrid evt="/images/SupportPartners/vbdas.jpg" link="https://www.facebook.com"/>
        <PhotoGrid evt="/images/SupportPartners/sai.jpg" link="https://www.facebook.com"/>
        <PhotoGrid evt="/images/SupportPartners/Comp.png" link="https://www.facebook.com"/>
        
      </div>
    </Layout>
  );
}
