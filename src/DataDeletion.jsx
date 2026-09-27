import React from "react";
import { Link } from "react-router-dom";

const EMAIL = "jawalekar108@gmail.com";

function DataDeletion() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">SRIVANI AI</div>
          <h1>Data Deletion</h1>
          <p>Instructions for requesting deletion of your personal data.</p>
        </div>

        <article className="legal">
          <p>
            Srivani AI respects your privacy and provides a way for users to
            request deletion of personal information associated with their use
            of our services.
          </p>

          <h2>How to request data deletion</h2>

          <p>
            To request deletion of your personal data, send an email to:
          </p>

          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>

          <p>
            Please include your name, the business or account associated with
            the request, and any relevant information that can help us identify
            the data you want deleted.
          </p>

          <h2>What happens after your request</h2>

          <p>
            We will review the request and take reasonable steps to verify the
            request before processing it. Where applicable, personal
            information will be deleted or de-identified, subject to legal,
            security, fraud-prevention, accounting, or other legitimate
            retention requirements.
          </p>

          <h2>Third-party platforms</h2>

          <p>
            If you connected Srivani AI with third-party services such as
            Instagram, WhatsApp, or other platforms, those platforms may also
            retain information according to their own policies. You may need to
            submit a separate deletion request to the relevant platform.
          </p>

          <h2>Contact</h2>

          <p>
            For questions about data deletion or privacy, contact us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <p>
            <Link to="/privacy-policy">View our Privacy Policy</Link>
          </p>
        </article>
      </div>
    </section>
  );
}

export default DataDeletion;
