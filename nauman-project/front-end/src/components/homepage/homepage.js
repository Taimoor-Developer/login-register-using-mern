import React from "react";
import "./homepage.css";
import { useState } from "react";
import axios from "axios";

const Homepage = ({ setLoginUser }) => {
  const [image, setImage] = useState('')

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const handleApi = () => {
    //call the api
    const url = "http://localhost:9002/api/image"

    const formData = new FormData()
    formData.append('image', image)
    
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  return (
    <div className="homepage">
      {/* <h1>Hello Homepage</h1> */}
      <div class="container">
        <div class="title">CREATE CERTIFICATE</div>
        <div class="user__details">
          <div class="input__box">
            <span class="details">First Name*</span>
            <input type="text" placeholder="E.g: Nauman" required />
          </div>
          <div class="input__box">
            <span class="details">Last Name*</span>
            <input type="text" placeholder="Ahmed" required />
          </div>
          <div class="input__box">
            <span class="details">Batch ID*</span>
            <input type="email" placeholder="nauman@gmail.com" required />
          </div>
          <div class="input__box">
            <span class="details">University*</span>
            <input type="text" placeholder="Hamdard University" required />
          </div>
          <div class="input__box">
            <span class="details">Date</span>
            <input type="date" required />
          </div>
          <div class="input__box">
            <span class="details">Certificate For *</span>
            <input type="text" placeholder="taimoor" required />
          </div>
        </div>
      </div>
      <div>Degree Upload</div>
      <div>IMAGE UPLOAD <br />
      <img src={image ? URL.createObjectURL(image) : null} width={150} height={70} />
      <input type="file" onChange={handleChange} /> <br />
      <button onClick={handleApi} >SUBMIT</button>
    </div>
      <div className="button">Create</div>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
