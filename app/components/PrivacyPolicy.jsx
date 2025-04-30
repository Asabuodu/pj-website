"use client";
import React from "react";
import Container from "react-bootstrap/Container";

export default function PrivacyPolicy() {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Privacy Statement</h1>
      <p><strong>Effective Date:</strong> 01-01-2025</p>

      <h4 className="mt-4">1. Information We Collect</h4>
      <p>
        We may collect the following types of information:
        <ul>
          <li><strong>Personal Information:</strong> such as your name, email address, phone number, and any other details you submit via contact forms or service inquiries.</li>
          <li><strong>Usage Data:</strong> including your IP address, browser type, pages visited, and time spent on the website.</li>
        </ul>
      </p>

      <h4 className="mt-4">2. How We Use Your Information</h4>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and manage our services</li>
        <li>Respond to your inquiries and support requests</li>
        <li>Improve our website and services</li>
        <li>Send updates, offers, or marketing (if you opt in)</li>
      </ul>

      <h4 className="mt-4">3. Sharing of Information</h4>
      <p>
        We do <strong>not</strong> sell, rent, or trade your personal information. We may share it with trusted third-party service providers to help us operate our website or deliver services, under strict confidentiality agreements.
      </p>

      <h4 className="mt-4">4. Data Security</h4>
      <p>
        We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h4 className="mt-4">5. Your Rights</h4>
      <p>
        You have the right to:
        <ul>
          <li>Access, correct, or delete your personal information</li>
          <li>Withdraw consent for marketing communications</li>
          <li>Request information on how your data is used</li>
        </ul>
        To exercise these rights, please contact us at: <a href="mailto:thoptech@gmail.com" className="text-decoration-none text-dark"
                  target="blank">thoptech@gmail.com</a>
      </p>

      <h4 className="mt-4">6. Changes to This Statement</h4>
      <p>
        We may update this Privacy Statement from time to time. Changes will be posted on this page with the revised effective date.
      </p>

      <h4 className="mt-4">7. Contact Us</h4>
      <p>
        If you have any questions or concerns about this Privacy Statement, please contact us:
        <br />
        📧 Email: <a href="mailto:thoptech@gmail.com" className="text-decoration-none text-dark"
                  target="blank">thoptech@gmail.com</a><br />
        📍 Address:  13, Omodumi Street, Lawason, Lagos.<br />
        📞 Phone: +2348035682183, +2349094408234
      </p>
    </Container>
  );
}
