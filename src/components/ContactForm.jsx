import { useState } from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    const postFormData = async () => {
      try {
        const res = await fetch("/api/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        if (res.ok) {
          const data = await res.json();
          console.log("Form submitted successfully: ", data);
        } else {
          console.log("Form Submission Failed: ", res.statusText);
        }
      } catch (error) {
        console.log("Something went wrong. Form didn't work.", error);
      }
    };

    postFormData();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
                //  onChange={(e) => setName(e.target.value)}
                onChange={handleChange}
              />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="message"
                name="message"
                style={{ height: "150px" }}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
