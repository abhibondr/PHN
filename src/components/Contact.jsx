import React, { useState } from "react";
import("./Contact.css");

const ContactPage = () => {
  const [query, setQuery] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  return (
    <div className="row bg">
      <div
        className="col col-md-6 "
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <img
          className="img-fluid"
          src="https://t3.ftcdn.net/jpg/05/45/33/44/240_F_545334434_V5nMdvwRB4jnBuThvHC15hW65wyiFEEc.jpg"
          alt=""
        />
      </div>
      <div className="col-6 col-md-6">
        <form>
          <h1 className="apply">Apply</h1>
          <br />
          <div className="col-12 col-md-6 col-lg-6">
            <input
              type="text"
              name="name.first"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="name.last"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
          </div>

          <input
            type="number"
            name="mobile"
            placeholder="Enter your mobile number"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          <div>
            <h5>Captcha</h5>
            <input type="number" />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
