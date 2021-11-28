import * as React from "react";
import { Helmet } from "react-helmet";

// styles
const pageStyles = {
  color: "#232129",
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
                <a href="#">
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
            <img src={"/images/logo2.png"} alt />
            <h1>
              India’s Largest Warehousing 
              <br />
              &amp; Fulfilment Network
            </h1>
            <p>
              A flexible, scalable &amp; affordable logistic solution for
              businesses of all sizes
            </p>
          </div>
        </div>
      </section>
      <section className="ware-sect">
        <div className="container">
          <div className="ware-row">
            <div className="flex-sect">
              <div className="lt-sect">
                <h2>
                  Reduce warehousing &amp; distribution cost with on-demand
                  scalability &amp; tech enabled supply chain platform.
                </h2>
                <ul className="detail-list">
                  <li>Warehouse</li>
                  <li>B2B &amp; Ecommerce Fulfilment</li>
                  <li>Retail &amp; Distribution</li>
                </ul>
                <a
                  href={"/pdf/godamwale_company-profile.pdf"}
                  target="_blank"
                  className="btn ware-btn"
                >
                  Download Brochure
                </a>
              </div>
              <div className="rt-sect">
                <p>
                  Choose your business type to get
                  <br />
                  the most efficient quote.
                </p>
                <form
                  action="https://crm.zoho.com/crm/WebToLeadForm"
                  name="WebToLeads2855312000025657001"
                  method="POST"
                  accept-charset="UTF-8"
                >
                  <input
                    type="text"
                    className="hidden"
                    name="xnQsjsdp"
                    value="86c458fd54bc9ff59099fd96f3d0d80d76f53e5ab0413a76d788866f59950bc9"
                  />
                  <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                  <input
                    type="text"
                    className="hidden"
                    name="xmIwtLD"
                    value="72a7b4244d8d53cdeed624335c5d48b7c3b72af51e52d378190efc43e5668d38"
                  />
                  <input
                    type="text"
                    className="hidden"
                    name="actionType"
                    value="TGVhZHM="
                  />
                  <input
                    type="text"
                    className="hidden"
                    name="returnURL"
                    value="http&#x3a;&#x2f;&#x2f;godamwale.com&#x2f;"
                  />
                  <div className="cont-row">
                    <input
                      id="Last_Name"
                      type="text"
                      placeholder="Name *"
                      name="Last Name"
                      className="flex-box"
                      required
                    />
                  </div>
                  <div className="cont-row">
                    <input
                      id="Email"
                      type="email"
                      placeholder="Email Address *"
                      name="Email"
                      className="flex-box"
                      required
                    />
                  </div>
                  <div className="cont-row">
                    <div className="lt0">
                      <input
                        id="Phone"
                        type="text"
                        placeholder="Phone Number *"
                        name="Phone"
                        className="flex-box"
                        required
                      />
                    </div>
                    <div className="lt0">
                      <select
                        name="LEADCF8"
                        id="LEADCF8"
                        className="extension"
                        required
                      >
                        <option value>Business Type *</option>
                        <option value="E-Commerce">E-commerce</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="B2B">B2B</option>
                      </select>
                    </div>
                    <div className="clear" />
                  </div>
                  <button
                    name="submit"
                    type="submit"
                    id
                    className="btn get-btn"
                  >
                    <span className="sub">Get Quote</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="warehouse">
        <div className="container">
          <h2>Flexible Warehousing</h2>
          <span>
            Expand your business, reduce cost &amp; optimize your logistics
            operation.
          </span>
          <div className="cart-row dsk">
            <div className="cart">
              <div className="cart-img">
                <img src={"/images/warehouse1.png"} />
              </div>
              <div className="cart-text">
                <p className="title1">Flexible Space</p>
                <p>
                  No Minimum commitment on space, add or Reduce Space as per
                  business demands
                </p>
              </div>
            </div>
            <div className="cart">
              <div className="cart-img">
                <img src={"/images/warehouse2.png"} alt />
              </div>
              <div className="cart-text">
                <p className="title1">No Minimum Duration</p>
                <p>
                  Flexible storage. Pay only for tenure as utilised for storage
                </p>
              </div>
            </div>
            <div className="cart">
              <div className="cart-img">
                <img src={"/images/warehouse3.png"} alt />
              </div>
              <div className="cart-text">
                <p className="title1">Tech Enabled</p>
                <p>One software to view &amp; control entire supply chain</p>
              </div>
            </div>
            <div className="clear" />
          </div>
          <div className="cart-row mb">
            <div className="owl-carousel owl-theme" id="top-slider">
              <div className="item">
                <div className="cart">
                  <div className="cart-img">
                    <img src={"/images/warehouse1.png"} alt />
                  </div>
                  <div className="cart-text">
                    <p className="title1">Flexible Space</p>
                    <p>
                      No Minimum commitment on space, add or Reduce Space as per
                      business demands
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cart">
                  <div className="cart-img">
                    <img src={"/images/warehouse2.png"} alt />
                  </div>
                  <div className="cart-text">
                    <p className="title1">No Minimum Duration</p>
                    <p>
                      Flexible storage. Pay only for tenure as utilised for
                      storage
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cart">
                  <div className="cart-img">
                    <img src={"/images/warehouse3.png"} alt />
                  </div>
                  <div className="cart-text">
                    <p className="title1">Tech Enabled</p>
                    <p>
                      One software to view &amp; control entire supply chain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="difference">
        <div className="container">
          <div className="our-row">
            <div className="our-sect">
              <h2>Challenges</h2>
              <ul className="detail-list2">
                <li>Paying for Unutilized Space</li>
                <li>
                  Scalability At Different City -Huge Capex, Time
                  <br /> Commitment and Business Risk.
                </li>
                <li>Higher Delivery Time</li>
                <li>Inventory tracking -Low Visibility</li>
                <li>Multiple Service provider and SLA’s</li>
              </ul>
            </div>
            <div className="our-sect">
              <h2>Benefits</h2>
              <ul className="detail-list3">
                <li>Pay per use model</li>
                <li>
                  Scale Up-Scale Down based on business
                  <br /> requirement
                </li>
                <li>Distributed Inventory Less Delivery Time</li>
                <li>Real Time inventory tracking.</li>
                <li>Single service provider and 1 SLA for all location.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="container">
          <h2>The Godamwale benefits to your business</h2>
          <div className="benefits-row">
            <div className="col">
              <div className="journey-step step-1">
                <img src={"/images/icon1.png"} alt="image" />
                <h3>
                  Retailers
                  <br />
                  &amp; Enterprises{" "}
                </h3>
              </div>
              <ul className="detail-list4">
                <li>
                  Develop an agile distribution network
                  <br />
                  with flexible space &amp; freight
                </li>
                <li>
                  Manage your inventory overflow, reduce distribution cost
                </li>
                <li>
                  A-grade facilities with all compliances, integrated <br />
                  tech to manage vendors &amp; distributors
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="journey-step step-1">
                <img src={"/images/icon2.png"} alt="image" />
                <h3>
                  Small &amp; Medium size
                  <br />
                  Companies
                </h3>
              </div>
              <ul className="detail-list4">
                <li>
                  Access to world class infrastructure at lowest price; no
                  minimum space constraint
                </li>
                <li>
                  Reduce warehousing cost. Use space only when required &amp; as
                  much needed
                </li>
                <li>Move your business to new cities without any investment</li>
              </ul>
            </div>
            <div className="col">
              <div className="journey-step step-1">
                <img src={"/images/icon3.png"} alt="image" />
                <h3>
                  E-commerce
                  <br />
                  Players
                </h3>
              </div>
              <ul className="detail-list4">
                <li>
                  Network of smart &amp; scalable fulfilment centres integrated
                  with marketplaces &amp; last mile
                </li>
                <li>Pan-India delivery within 1-2 days</li>
                <li>
                  Own branding on packaging, lower fulfilment cost, lower TAT
                  &amp; lesser returns.
                </li>
              </ul>
            </div>
            <div className="clear" />
          </div>
          <div className="find-sect">
            <a
              href="https://3pl.godamwale.com/"
              target="_blank"
              className="btn find-btn"
            >
              Find Flexible Warehousing
            </a>
          </div>
        </div>
      </section>
      <section className="advantage-section">
        <h2 className="title">The Godamwale Advantage</h2>
        <p className="subtitle">
          Warehousing &amp; Fulfilment from small businesses to enterprises 100
          to 10,00,000 sq. ft.
        </p>
        <div className="features-flex container">
          <div className="item">
            <img className="item-img" src={"/images/network.png"} alt />
            <h3 className="item-title">Largest Network</h3>
            <p className="item-subtitle">
              {" "}
              India’s largest flexible warehousing &amp; fulfilment{" "}
              <br className="d-big" />
              network with presence in 140 cities and 25 states
            </p>
          </div>
          <div className="item">
            <img className="item-img" src={"/images/circuit.png"} alt />
            <h3 className="item-title">INCIFLO Technology</h3>
            <p className="item-subtitle">
              Centralized tech platform to track and manage
              <br className="d-big" /> end to end supply chain
            </p>
          </div>
          <div className="item">
            <img className="item-img" src={"/images/user.png"} alt />
            <h3 className="item-title">Operational Expertise</h3>
            <p className="item-subtitle">
              A team of logistics experts to optimise your supply
              <br className="d-big" />
              chain and help you grow
            </p>
          </div>
        </div>
        <a
          href="https://3pl.godamwale.com/"
          target="_blank"
          className="callback-btn"
        >
          Request a call back
        </a>
      </section>
      <section className="move-store">
        <div className="container">
          <div className="features-flex">
            <div className="item">
              <img className="item-img" src={"/images/truck.png"} alt />
              <h2 className="title">
                Store <br />
                and move
              </h2>
              <p className="subtitle">as you like</p>
              <a
                href="https://3pl.godamwale.com/"
                target="_blank"
                className="callback-btn"
              >
                Request a call back
              </a>
            </div>
            <div className="item back-white-round">
              <h2 className="b-title">B2B</h2>
              <ul className="details">
                <li>Short/Long term Shared space</li>
                <li>Inventory Management</li>
                <li>Bulk Break</li>
                <li>Wholesale Carton Pick</li>
                <li>Labelling &amp; Barcoding</li>
                <li>Packaging &amp; Repackaging</li>
                <li>Container Handling</li>
                <li>Transportation &amp; Distribution Services</li>
                <li>
                  Technology (Sales/purchase order, inventory, and transport
                  management tools)
                </li>
                <li>Dedicated Account Managers</li>
              </ul>
            </div>
            <div className="item back-white-round">
              <h2 className="b-title">B2C</h2>
              <ul className="details">
                <li>Flexible Fulfilment Centres</li>
                <li>Order Management</li>
                <li>Pick, Pack and Ship</li>
                <li>Labelling &amp; Barcoding</li>
                <li>Kitting Projects</li>
                <li>Last Mile delivery</li>
                <li>Courier services &amp; Reverse Logistics</li>
                <li>
                  Integrations with ecommerce platforms and courier partners
                </li>
                <li>Dedicated Account Managers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
              <a href="tel:+919867731208">+91 9867731208</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
