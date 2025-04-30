"use client";
import React from "react";
import Container from "react-bootstrap/Container";

export default function TermsOfUse() {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Terms of Use</h1>
      <p><strong>Effective Date:</strong> 01-01-2025</p>

      <h4 className="mt-4">1. Acceptance of Terms</h4>
      <p>
        By accessing or using this website operated by Thoptech Electrical Limited ("we", "us", "our"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our site.
      </p>

      <h4 className="mt-4">2. Use of Website</h4>
      <p>
        You agree to use the site only for lawful purposes. You must not:
        <ul>
          <li>Use the site in any way that violates applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Transmit harmful or malicious code</li>
        </ul>
      </p>

      <h4 className="mt-4">3. Intellectual Property</h4>
      <p>
        All content on this site, including text, graphics, images, and logos, is the property of Thoptech Electrical Limited and protected by applicable copyright and trademark laws. You may not reproduce or distribute any material without our written consent.
      </p>

      <h4 className="mt-4">4. Links to Other Websites</h4>
      <p>
        Our website may contain links to third-party sites. We are not responsible for the content, policies, or practices of those sites and encourage you to review their terms and privacy policies.
      </p>

      <h4 className="mt-4">5. Limitation of Liability</h4>
      <p>
        We do not guarantee the accuracy, completeness, or reliability of the content on this site. To the fullest extent permitted by law, Thoptech Electrical Limited is not liable for any direct, indirect, or consequential damages arising from your use of the site.
      </p>

      <h4 className="mt-4">6. Modifications</h4>
      <p>
        We reserve the right to update or modify these Terms of Use at any time. Continued use of the site after changes means you accept the new terms.
      </p>

      <h4 className="mt-4">7. Contact Us</h4>
      <p>
        If you have any questions about these Terms, please contact us at:
        <br />
        📧 Email: <a href="mailto:thoptech@gmail.com" className="text-decoration-none text-dark"
                  target="blank">thoptech@gmail.com</a><br />
        📍 Address:  13, Omodumi Street, Lawason, Lagos.<br />
        📞 Phone: +2348035682183, +2349094408234
      </p>
    </Container>
  );
}
