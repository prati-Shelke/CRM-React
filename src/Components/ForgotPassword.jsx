import react from 'react'
import '../Styles/ForgotPassword.css'
import Logo from '../Images/Logo.jpeg'


function ForgotPassword()
{
    return (
        <div className="container h-100">
    		<div className="row h-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 mt-5">
						<div className="card" >
								<div className="m-sm-4">
									<form>
                                        <img className="img-fluid mt-2" style={{height:"90px",marginTop:"20px"}}  src={Logo} />   
                                        <div className='row'>
                                            <span className='col-2'></span>
                                            <div className="col-8">
                                                <input className="form-control mt-4 email" type="email" name="email" placeholder="Enter your email"/>
                                            </div>

                                            <div className="text-center mt-4">
                                                <button type="submit" className="btn btn-primary col-4">Reset password</button>
                                            </div>
                                        </div>
									</form>
								</div>
						</div>
				</div>
			</div>
		</div>
    );
}
  
  export default ForgotPassword;



 {/* <center><img src="assets/images/logo.jpeg" width="300"/>
                </center>
                <div class="row">
                    <form div="" class="col-sm-8 col-sm-offset-2 p-t-20 ng-pristine ng-valid-email ng-invalid ng-invalid-required ng-invalid-recaptcha" name="forgotPasswordForm" novalidate="" ng-submit="sendForgotLink(forgotPasswordForm)">
                        <div class="form-group">
                            <input type="email" class="form-control height-42 ng-pristine ng-untouched ng-valid-email ng-invalid ng-invalid-required" id="emailaddress" placeholder="Email" ng-model="email" required=""/>
                        </div>

                        
                        <div class="form-group">
                            <div vc-recaptcha="" ng-model="gRecaptchaResponse" key="reCaptcha_Key" class="ng-pristine ng-untouched ng-valid ng-isolate-scope"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdH_DMeAAAAAFWRLmZIDHUdBrhUjyN2s5CzHbrx&amp;co=aHR0cDovL2Rldi5jcm0ubmdtaW5kcy5jb206ODA.&amp;hl=en-GB&amp;v=1B_yv3CBEV10KtI2HJ6eEXhJ&amp;size=normal&amp;cb=tivf8tqeh4j3" width="304" height="78" role="presentation" name="a-vbocuhqnfgxk" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                        </div>
                        <div class="g-recaptcha" data-sitekey="6Lf2wzAUAAAAALmXhFsEd7GH70OBDcCxqhEanHAv"></div> 
                        <div class="g-recaptcha" data-sitekey="6Lf2wzAUAAAAALmXhFsEd7GH70OBDcCxqhEanHAv"></div> 
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Reset Password</button>
                        
                        
                    </form>
                </div> */}