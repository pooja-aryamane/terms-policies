import * as React from "react";
import { Helmet } from "react-helmet";

// styles
const pageStyles = {
  color: "#232128",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  return (
    <main style={{}}>
      <Helmet>
        <link href={"/css/style.css"} rel="stylesheet" type="text/css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className="wrapper">
        <header>
          <nav>
            <div className="container">
              <div className="logo">
                {" "}
                <a href="https://3pl.godamwale.com/" target="_blank">
                  <img src={"/images/logo.png"} alt="logo" />
                </a>{" "}
              </div>
            </div>
          </nav>
          <div className="responsive-bar">
            <div className="container">
              <div className="logo">
                {" "}
                <a href="#">
                  <img src={"/images/logo.png"} alt="logo" />
                </a>{" "}
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className="top-banner">
        <div className="container">
          <div className="top-text">
            <h1>
              Terms of Service 
            </h1>
          </div>
        </div>
      </section>
      <section className="termsofservice">
        <div className="container">
          <br />
          <br />
          <p>
            These Terms of Service describe the terms under which Godamwale Private Limited provide a subscriber access to and use of Our Service(s). By accessing and/or using any Our Service(s), a) You agree to be bound by these Terms and acknowledge having read the privacy policy located at (“Privacy Policy”). b) You warrant to us that You are of 18 years or above and are competent to enter into this agreement, if You are an individual c) That, in the event You are entering into these Terms on behalf of any entity/company or its group, You possess the requisite authority to bind such entities, company or its groups to these Terms. If You do not agree to these Terms, You should immediately cease using our Service(s). Please read these Terms carefully as these Terms form a binding agreement between Godamwale and You that governs Your use of: (i) the websites owned and operated by Us including www.godamwale.com(“Website”); (ii) the Service(s) offered thereon; (iii) all features, platforms, widgets, tools, applications, data, software, algorithms application program interface (APIs) in connection with the Website, the Service(s) and any other products provided by Godamwale; and (iv) any other modes of usage of the Service(s) or other products including through electronic devices (mobiles or tablets) / storage devices / transmitting devices. Your access and use the Website over the internet, including the Service(s) shall signify acceptance of these Terms. If You do not accept and agree to any of these Terms set out herein, You shall not be entitled or authorized to, use / access / browse the Website, or avail the Service thereon.
          </p>
          <br />
          <br />
          <h2>1. Service(s)</h2>
          <br />
          <p>
          Godamwale provides: (i) information security and compliance services in the form of a productized and automated consultant; (ii) audit services in relation to system level controls and organization level controls through the auditors registered on the Website (“Service(s)“); and (iii) such other products or services as Godamwale deems fit. Godamwale grants You a limited, non-exclusive, non-transferable and revocable license, without the right to sublicense, to access and use the Website and the Service(s) solely for Your internal business purposes in accordance with these Terms. It being clarified, the auditors who register on the Website to provide the Service(s) are also deemed to be Users of the Website. Such auditors are not and shall not be deemed to be in any manner, the employees, agents, representatives, affiliates or partners of Godamwale. Such auditors always act independently and Godamwale is not responsible and has no control over the manner in which they provide their respective Service(s). Godamwale only facilitates an online platform for automated security, risk and compliance assessment.
          </p>
          <br />
          <br />
          <h2>2. Charges and Payment</h2>
          <br />
          <p>
          Unless otherwise specified in a purchase order, all charges associated with Your use of the Service(s) will be as per the pricing plan (“Subscription Charges”) chosen by You, which is subject to change from time to time. In case of advance payments, the Service(s) will not be made available to You until such advance payments have been made by You to Godamwale. Godamwale may also provide certain Service(s) at free of charge for a limited time, or as a bundle package or any discounts or promotional offers, as it may deem fit. However, Godamwale reserves the right to change the price/ fees or charge such Service(s) that are available for free of charge. Unless otherwise specified in the Purchase Order, Your payment is due within thirty (30) days of our invoice date. Godamwale will notify You in the event that Godamwale does not receive payment towards Subscription Charges within the due date, failing which in addition to the right to other remedies available under law, (i) Godamwale may suspend Your access to and use of the Service(s) until Godamwale receives Your payment towards the Subscription Charges as specified; and/or (ii) terminate Your Account; and/or (iii) charge an interest for late payment @ 1.5% per month on the outstanding balance of the Subscription Charges payable. Unless otherwise stated, the Subscription Charges do not include any taxes, levies, duties or similar governmental assessments, including value-added, sales, use or withholding taxes by any local, state, provincial or foreign jurisdiction (collectively “Taxes”).
          </p>
          <br />
          <br />
          <h2>3. User Account</h2>
          <br />
          <p>
          In order to use certain features of the Website, You must register on the Website by creating an online account (” Account“). In the event that You want to register on the Website and wish to create an Account, You must have the legal capacity to form a binding contract. For a corporate entity, an authorised personnel of such corporate entity (” Account Administrator“), will be required to act as the point of contact for Us, manage Your Account and will also be required to specify and configure the Service(s) required by You. You shall solely be responsible for: (i) the appointment of a suitable Account Administrator for managing Your Account and the Service(s) availed by You; and (ii) ensuring that the Account Administrator acts in compliance with this Agreement, at all times. Godamwale shall not be responsible, in any manner, for the administration of Your Account by the Account Administrator and internal management of the Service(s) provided to You. Each designated user within the Service(s), including an Account Administrator, agents and other designated users (“User”) shall be identified using unique login information such as usernames and passwords (“User Login”) and such User Login shall be used only by one individual. You must not disclose the User Login to any third party. We shall have the right to disable any user identification code or password, whether chosen by You or allocated by Us, at any time, if in Our reasonable opinion, You have failed to comply with any of the provisions of these Terms. We will not be responsible for any activities, including any attempted or actual access or loss of data occurring in Your Account as a result of Your non-compliance of obligations under this Clause 3. Further, You also agree that, at the time of creating Your Account and at any other time, You shall provide true, correct, complete and accurate information and ensure that all such information is up-to-date and accurate at all times. If You provide any information that is untrue, inaccurate, outdated, or incomplete, or if Godamwale has reasonable grounds to suspect that such information is untrue, inaccurate, outdated, or incomplete, Godamwale may suspend / terminate Your Account and refuse current or future provision of any or all Service(s).
          </p>
          <br />
          <br />
          <h2>4. Your Roles and Responsibilities</h2>
          <br />
          <p>
          Your use of the Website and the Service(s) is solely for internal business purposes During Your use of the Website and Service(s), You hereby agree and acknowledge that You shall not:
          </p>
          <li>Adapt, reproduce, store, distribute, transmit, print, display, perform, publish or create derivative works from any part of the Website and / or the Service(s), in any manner whatsoever; </li>
          <li>Commercialize or sell / re-sell in any manner, any information, contents, features, platforms, widgets, tools, applications, data, software, algorithms application program interface (APIs), so on and so forth, in connection with the Website, the Service(s) and any other products and Service(s) offered by Godamwale </li>
          <li>Provide misleading or false personal details, impersonate any person or entity, or indulge in any other fraudulent activity </li>
          <li>Access or use the Website and / or Service(s) through the Account of other Users;</li>
          <li>Defame, harass, abuse or threaten other users of the Website and / or Service(s), any other persons involved in the provision of Services</li>
          <li>Use the Service(s) for any illegal purposes or for transmitting any material that is unlawful, vulgar, pornographic, obscene, or is otherwise objectionable, offends religious sentiments, promotes racism, contains viruses or malicious code, or that which infringes or may infringe intellectual property or other rights of any third party</li>
          <li>Use the Service(s) for transmitting any virus, junk mail, spam, chain letters, phishing or unsolicited mass distribution of email</li>
          <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Website, the Services or any part thereof</li>
          <li>Use the Service(s) in a manner that may damage, disable, overburden, impair or harm the operation of the Website and / or the Service(s) or servers / networks of Godamwale or otherwise interfere with any other User’s or person’s enjoyment of the Website and / or the Service(s)</li>
          <li>Ater or modify any part of the Website and / or the Service(s); and violate any other Terms specified herein, in any form or manner</li>
          <br />
          <br />
          <h2>5. Termination</h2>
          <br />
          <p>
          <h3>Termination by Godamwale</h3>
          <br />
          <br />
          In the event that You breach any of these Terms set forth herein, Godamwale reserves the right to suspend and / or terminate Your access to or use of the Website and the Service(s) with or without notice to You. Any suspected illegal, fraudulent or abusive activity may be grounds for terminating Your Account and access to the Website and the Service(s). Upon suspension or termination, Your right to access, procure or use the Service(s) or use / access / browse the Website shall immediately cease and we reserve the right to remove or delete all electronic data, text, messages, or other materials, including without limitation personal data of Users and end users, submitted to the Service(s) by You through Your Account in connection with Your use of the Service(s) (“Service Data”) that is available with Godamwale, including but not limited to Your login and Account information.
          <br />
          Further, notwithstanding any such termination, suspension, or cancellation, Godamwale may, in its sole discretion and in accordance with its Privacy Policy, retain such information collected from You through the Website and / or the Service(s) provided therein for as long as necessary, depending on the type of information, purposes, means and modes of usage of such information and according to any other rules and / or applicable laws.
          <br />
          <br />
          <h3>Termination by You</h3>
          <br />
          <br />
          In the event that You wish to discontinue using / availing the Service(s), You may do so by giving to Godamwale, a prior written notice of at least 30 (thirty) days.
          <br />
          <br />
          <h3>Consequence of Termination</h3>
          <br />
          <br />
          Any suspension, termination, or cancellation will result in cessation of the Service(s) by Godamwale to You, along with suspension / termination of Your Account. Such suspension, termination, or cancellation will not affect Your obligations to Godamwale under these Terms which by their nature are intended to survive such suspension, termination, or cancellation. Notwithstanding any such suspension or termination, the provisions of Clause 6 (Confidentiality, Data Privacy and Security), 7 (Intellectual Property and Ownership), 9 (Disclaimer of Warranties), 10 (Limitation of Liability), 11 (Indemnification), 12 (Governing Law and Jurisdiction) and 16 (No Waiver) shall survive and remain in full force and effect.
          <br />
          <br />
          <h2>6. Confidentiality, Data Privacy and Security</h2>
          <br />
          “Confidential Information” shall mean and include all information relating to Godamwale or You or any User, disclosed either orally or in any recorded medium, during the provision of Service(s) or otherwise, including but not limited to its: (i) products, Service(s), pricing terms, sales and marketing and promotion plans, business plans, models, prototypes, intellectual property rights, business affairs, operations, strategies, inventions, research, apparatus, methodologies, technologies, algorithms, programs, software, application, source code, processes, employees, contractors, subcontractors, product / service proposals, methods of operations, techniques, schematics, designs and contracts; (ii) officers, directors, affiliates, parent company, subsidiaries, sister concerns, group companies; or (iii) financial information; (iv) information or data relating to any of the foregoing along with any notes, analysis, compilations, studies or other material or documents prepared thereof or being in the possession of Godamwale or You which contain, reflect or are based on the Confidential Information, or any other information which by its nature may be deemed to be confidential. Confidential Information shall include all non-public information furnished, disclosed or transmitted regardless of form or manner in which it may be furnished, disclosed or transmitted.
          <br />
          <br />
          Both Godamwale and You agree, acknowledge, undertake and covenant that they shall maintain and uphold the confidentiality of the Confidential Information, at all times. Godamwale and You shall keep the Confidential Information strictly confidential, and shall not, directly or indirectly, divulge, use, make available, sell, distribute, disclose, share, transfer, publish or otherwise communicate or make accessible to any third party such Confidential Information in any manner whatsoever, except to its employees, agents, representatives or other personnel on a “need to know” basis.
          <br />
          <br />
          Nothing contained herein shall be construed as granting or implying any transfer of rights, title or interests to Godamwale in Your Confidential Information. Further, nothing contained herein shall be construed as granting or implying any transfer of rights, title or interests to You in Godamwale’s Confidential Information or any other Intellectual Property protecting or relating to such Confidential Information.
          <br />
          <br />
          You acknowledge that We shall process personal data forming part of Service Data only to provide, maintain and improve the Service(s), or prevent or address any technical problems, or at Your request in connection with support requests and in accordance with these Terms, Our Privacy Policy. We shall not process Service Data for any purposes other than what is mentioned in these Terms.
          <br />
          <br />
          You acknowledge and agree that We may access or disclose information about You, Your Account, Users, including Service Data in order to (a) comply with the law or respond to lawful requests or legal process; or (b) prevent any infringement of group companies’ or Your proprietary rights. Further, at Our sole discretion, any suspected fraudulent, abusive, or illegal activity by You may be referred to law enforcement authorities.
          <br />
          <br />
          <h2>7. Intellectual Property and Ownership</h2>
          <br />
          Intellectual property means all of the following and all legal rights or interest in, under or in respect of the following arising under Indian and international laws, whether or not filed, perfected, registered or recorded and whether now or later existing, filed, issued or acquired by Godamwale or owned by Godamwale: (i) all copyrights, copyrightable works and all other corresponding rights; (ii) all patents, trademarks, service marks, logos, designs, etc.; (iii) the Website, the Service(s) or any other products or Service(s) made available to the You by Godamwale; (iv) know-how, including technical know-how, technology, software, software development process, algorithm, source code, APIs and other such technologies of the Website, the Service(s) or other products or Service(s); (v) any other technology and processes, technical data, trade secrets, confidential business information, pricing and cost information, business and marketing plans, advertising and promotional materials, vendors, third party supplier lists and information, records, and other proprietary documentation and information; (vi) all databases, data collections and any analytical data / information derived from the Website or Service(s); (vii) all other proprietary rights; and (viii) all copies and tangible embodiments of any of the foregoing (in whatever form or medium) (” Intellectual Property“).
          <br />
          <br />
          You hereby agree and acknowledge that Your use of the Intellectual Property shall in no way mean or be construed as an assignment by Godamwale to You, of any ownership, rights or interests of Godamwale in such Intellectual Property. All Intellectual Property and other related items, products, materials or Service(s) provided or made available to You by Godamwale or its, employees, representatives, affiliates or suppliers is and remains, at all times, the exclusive property of Godamwale.
          <br />
          <br />
          You hereby agree and acknowledge that infringement of any Intellectual Property for any purpose, whether commercial or otherwise, shall be a violation of Godamwale’s intellectual property rights and Godamwale reserves all its rights and remedies in law in relation to such violation. Further, any breach by You of any provision or obligation under this Clause will cause to Godamwale immediate, material and irreparable injury, and there is no adequate remedy at law for such breach. In such event, Godamwale shall be entitled to seek injunctive relief to enforce this Agreement in a court of competent jurisdiction. This provision shall not be a waiver of any other rights which Godamwale may have under this Agreement, including the right to receive monetary damages.
          <br />
          <br />
          You own all rights, title, and interest in and to the Service Data. We shall have a right to process the Service Data solely for the purpose of providing, supporting, operating, maintaining and improving the Service(s).
          <br />
          <br />
          We shall have the right and license to incorporate into the Service(s) or otherwise use any suggestions, enhancement requests, recommendations or other feedback We receive from You.
          <br />
          <br />
          All rights not expressly provided to You herein are reserved.
          <br />
          <br />
          <br />
          <h2>8. Third Party Service(s)</h2>
          <br />
          You acknowledge and agree that Your use of any third-party application(s) or service(s) integrating with the Service(s) (“Third-Party Service(s)”) will be subject to these Terms and privacy policies of such third-party and that Godamwale shall not be liable for Your enablement, access or use of such Third-Party Service(s), including Your data processed by such third party. You should contact that third- party service provider for any issues arising in connection with use of such Third-Party Service(s).
          <br />
          <br />
          <br />
          </p>
        </div>
      </section>
      <div className="footer">
        <div className="container">
          <div className="copyright">
            <p className="title">
              For any queries regarding the Terms or our Service, contact us. {" "}
            </p>
            <p className="link">
              <a
                href="http://www.godamwale.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.godamwale.com
              </a>{" "}
              | <a href="mailto:info@godamwale.com">info@godamwale.com</a>
            </p>
            <p className="link">
              <a
                href="https://api.whatsapp.com/send?phone=918291540681"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={"/images/whatsubb.png"} alt />
              </a>
              <a href="tel:+918291540681">
                <img src={"/images/call.png"} alt />
              </a>
              <a href="tel:+918291540681">+91 8291540681</a> |
              <a href="tel:+919959361943">+91 9959361943</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
