import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact SPay"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/public/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-red p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@spay.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 01234567891
          </p>
          <p className="mt-3">
            <BiSupport /> : +8800-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact