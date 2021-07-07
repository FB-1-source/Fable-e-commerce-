import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Newsletter = () => {
  return (
    <div>
      <div className="mainnews">
        <div className="newsletter">
          <h2>Subscribe to our Newsletter for our latest deals!</h2>
          <div className="newsdoub">
            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
