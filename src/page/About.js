import React from "react";
import Welcome from "../component/Welcome";
import Header from "../component/Header";

function About() {
  return (
    <div>
      <Header title=""/>
      <Welcome title='INFO CENTRE'/>
      <div className="about-bg">
        <div className="container py-5">
          <p className="about text-center pb-5">About Us</p>

          <div className="about-box p-5">
            <p>Tomkru World (MCW) is a leading online gaming website, offering sports betting, online casino, and online games. We have been serving the Asia Pacific market since 2015. We are fully licensed and regulated in various jurisdictions as stated in the Terms and Conditions and MCW operates strictly within these regulations.
The safe and private environment and the integrity of our products are the fundamental drivers of the MCW online gaming experience. We have the most advanced security measures available and are continually auditing our games and processes to ensure a totally safe and fair internet gambling experience. We keep all your information confidential, and we will never share it or sell it to third parties, except in accordance with our Privacy Policy.
We strive to offer the best prices whilst covering a wide variety of sporting markets and other worldwide sporting events. We provide a wide variety of live games and slot games in our casino. At MCW we promise you will enjoy the highest class of online gaming entertainment of the world.
With 24 hour live customer support available 7 days per week, our highly trained and friendly staff will ensure that any queries are dealt with and resolved quickly, politely, and efficiently.
Our mission is to provide the best online gambling experience for responsible players, please feel free to contact us by phone or email with your comments or suggestions.
We offer a variety of secure and easy payment methods for your convenience. We adhere to “know your customer (KYC)” and anti-money laundering (AML) policies and cooperate with the third party financial and regulatory authorities to ensure the highest standards of compliance.</p>
          </div>

          <div className="border-top border-bottom py-4 my-5 text-center">
            <p className="about-copyright">Tomkru World © 2023 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
