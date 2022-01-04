import * as React from "react";
import { Helmet } from "react-helmet";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const boxCard = {
  margin: "0rem 25rem",
  padding: "4rem",
  border: "1px solid lightgray",
  backgroundColor: "lightgray",
  width: "30%",
};

const thankYouPage = () => {
  return (
    // <main style={pageStyles}>
    //   <div style={boxCard}>
    //     <h3>
    //       Thank You ! We will get back to you shortly.<br></br>
    //       Godamwale your Supply Chain Partner
    //     </h3>

    //   </div>
    // </main>
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
              <div className="right-btn">
                <a
                  href={"/pdf/godamwale_company-profile.pdf"}
                  target="_blank"
                  className="btn down-btn"
                >
                  Download Brochure
                </a>{" "}
              </div>
            </div>
            <div className="clear" />
          </nav>
          <div className="responsive-bar">
            <div className="container">
              <div className="logo">
                {" "}
                <a href="#">
                  <img src={"/images/logo.png"} alt="logo" />
                </a>{" "}
              </div>
              <div className="right-btn">
                <a
                  href="pdf/godamwale_company-profile.pdf"
                  target="_blank"
                  className="btn down-btn"
                >
                  Download Brochure
                </a>{" "}
              </div>
            </div>
            <div className="clear" />
          </div>
        </header>
      </div>
      <section className="top-banner">
        <div className="container">
          <div className="top-text">
            <a href="https://3pl.godamwale.com/" target="_blank">
              <img src={"/images/logo2.png"} alt />
            </a>
            <h1>
              India’s Largest Warehousing
              <br />
              &amp; Fulfilment Network
            </h1>
            <p>
              A flexible, scalable &amp; affordable logistic solution for
              businesses of all size
            </p>
          </div>
        </div>
      </section>
      <section className="ware-sect">
        <div className="container">
          <div className="ware-row">
            <h2>
              Thank You ! We will get back to you shortly.<br></br>
              Godamwale your Supply Chain Partner
            </h2>
          </div>
        </div>
      </section>
      <section className="warehouse"></section>

      <div className="footer">
        <div className="container">
          <div className="copyright">
            <p className="title">
              For all your warehousing needs, anywhere in India{" "}
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

export default thankYouPage;
