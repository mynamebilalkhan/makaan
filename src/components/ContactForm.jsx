import { useState } from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: "" }));
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!inputs.name) {
      valid = false;
      newErrors.name = "Name is required.";
    }

    if (!inputs.email) {
      valid = false;
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      valid = false;
      newErrors.email = "Email is Invalid.";
    }

    if (!inputs.subject) {
      valid = false;
      newErrors.subject = "Subject is required.";
    }

    if (!inputs.message) {
      valid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

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
          setStatus(true);
          setInputs({}); // Reset the form fields
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
                value={inputs.name || ""} // Set the value to the state or an empty string
                onChange={handleChange}
              />
              <label htmlFor="name">Your Name</label>
              {errors.name && (
                <div className="invalid-feedback d-block">{errors.name}</div>
              )}
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
                value={inputs.email || ""} // Set the value to the state or an empty string
                onChange={handleChange}
              />
              <label htmlFor="email">Your Email</label>
              {errors.email && (
                <div className="invalid-feedback d-block">{errors.email}</div>
              )}
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
                value={inputs.subject || ""} // Set the value to the state or an empty string
                onChange={handleChange}
              />
              <label htmlFor="subject">Subject</label>
              {errors.subject && (
                <div className="invalid-feedback d-block">{errors.subject}</div>
              )}
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
                value={inputs.message || ""} // Set the value to the state or an empty string
                onChange={handleChange}
              ></textarea>
              <label htmlFor="message">Message</label>
              {errors.message && (
                <div className="invalid-feedback d-block">{errors.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Send Message
            </button>
            {status && (
              <div className="valid-feedback d-block">
                Form submission success.
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
