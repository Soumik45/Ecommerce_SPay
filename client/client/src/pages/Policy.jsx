import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
    return (
      <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/public/images/contactus.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p>Cash on Delivery</p>
            <p>Add Bank account</p>
            <p>Return wthin 7 days</p>
            <p>Advance delivery charge</p>
            
          </div>
        </div>
      </Layout>
    );
  };

export default Policy