import React from "react";
import "./contactUs.css";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <>
      <div className="container-fluid  imgbg">
        <div className="container  ">
          <div className="row   ">
            <h1 className="col-md-4 text-white text-center  ">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="container mt-5">
          <div className="row  ">
            <div className="col-md-5  ">
              <h1 className="text-start">Contact Details</h1>
              <p className="text-start">
                Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum,
                facilisis vel mollis vitae, mollis nec ante. Quisque aliquam
                dictumfacilisis vel mollis vitae. Lorem ipsum dolor sit amet,
                ubique admodum euripidis has no, in luptatum nominati.
              </p>
              <h6 className="fw-bold">New York Office</h6>
              <p className="mt-3">1-677-124-44227</p>
              <p> esmarts@qodeinteractive.com</p>
              <p>184 Main Collins Street, West Victoria</p>

              <h6 className="fw-bold">Hamburg Office</h6>
              <p className="mt-3">1-677-124-44227</p>
              <p> esmarts@qodeinteractive.com</p>
              <p>184 Main Collins Street, West Victoria</p>
            </div>

            <div className="col-md-6 p-4 fm">
              <h4 className="fw-bold">Get in Touch</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className="row col-md-12 mt-4">
                    <div className="col mt-3 ">
                      <Form.Control type="text" placeholder="Your Name" />
                    </div>
                    <div className="col mt-3 ">
                      <Form.Control
                        type="email"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>

                  <Form.Control
                    type="address"
                    placeholder="Your website address"
                    className="mt-4 mb-4"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-5"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your message"
                  />
                </Form.Group>

                <button
                  className="btn mt-3  rounded-pill gap-2 text-center text-white"
                  type="button"
                  style={{ width: "100%", height: "70px " }}
                >
                  GET IT NOW
                </button>
              </Form>
            </div>
          </div>
        </div>

        {/* Map */}

        <div className="row">
                  <div className="col-md-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.717946512139!2d71.47414231455393!3d33.999777827941756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911701e1f93d1%3A0x54738ba5261f0cae!2sIslamia%20College%20Peshawar!5e0!3m2!1sen!2s!4v1677046810355!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
                      </div>
        </div>

        {/* Container fluid end */}
      </div>
    </>
  );
};
export default Contact;
