import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import './Registration.css'
function Registration() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className='container'>
      <div className='col-sm-6 col-sm-offset-3' style={{ padding: "20px" }}>
        <div className='login-box'>
          <div className='card' style={{ backgroundColor: "#fff" }}>
            <form style={{ padding: "20px" }}>
              <h1>Create account</h1>
              <hr />
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" className='label'>First Name</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="firstname" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4" className='label'>last Name</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="lastname" />
                </div>
                <div class="form-group col-md-12">
                  <label for="inputAddress" className='label'>Company Name</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="company name" />
                </div>

                <div class="form-group col-md-12">
                  <label for="inputState" className='label'>Company Industry</label>
                  <select id="inputState" class="form-control">
                    <option selected>Select Industry</option>
                    <option>...</option>
                  </select>
                </div>

                <div class="form-group col-md-12">
                  <label for="inputAddress" className='label'>Email</label>
                  <input type="email" class="form-control" id="inputAddress" placeholder="email" />
                </div>
              </div>
              <div className='recaptcha'>
                <ReCAPTCHA
                  sitekey="AIzaSyBiOGpAkCpfxSz_rNLFtPyMUxchyVOr81A"
                  onChange={onChange}
                />
              </div>
              <br />

              <button type="submit" class="btn btn-primary" style={{ width: "100%" }}>Sign up</button>
            </form>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Registration