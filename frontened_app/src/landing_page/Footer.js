import React from 'react';
import {Link} from "react-router-dom";
function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className="container border-top mt-5">
            <div className="row mb-5 mt-5 offset-1">
                <div className="col ">
                    <img src="media/images/logo.svg" style={{width:"50%"}} ></img>
                    <p className="text-small text-muted" style={{ fontSize: "0.9rem" }}>&copy; 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.</p>
                    <p style={{ opacity: 0.7  }}> <i class="fa-brands fa-x-twitter"></i> &nbsp; &nbsp;<i class="fa-brands fa-instagram"></i> &nbsp;&nbsp; <i class="fa-brands fa-facebook" ></i>  &nbsp;&nbsp;  <i class="fa-brands fa-linkedin-in"></i> &nbsp;&nbsp;</p>
                    <hr></hr>
                    <p style={{opacity: 0.7 }}><i class="fa-brands fa-youtube"></i> &nbsp; &nbsp; <i class="fa-brands fa-whatsapp"></i> &nbsp;&nbsp; <i class="fa-brands fa-telegram"></i></p>
                </div>
                <div className="col  ">
                    <p>Comapny</p>
                    <div style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}>
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >About</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Philosophy</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Press & media</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Careers</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Zerodha Cares (CSR)</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Zerodha.tech</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Open source</a>
                    </div>
                </div>
                 <div className="col">
                    <p>Support</p>
                    <div style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}>
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Contact Us</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Support Portal</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >How to File a Complaint?</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Status of Your Complaints</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Bulletin</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Circular</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Z-Connect Blog</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="" >Downloads</a>
                    </div>
                </div>
                 <div className="col">
                    <p>Accoount</p>
                    <div >
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Open demat account</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Minor demat account</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">NRI demat account</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Commodity</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Dematerialisation</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Fund transfer</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">MTF</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Referral program</a>
                    </div>   
                </div>
                 <div className="col ">
                    <p>Quick Links</p>
                    <div style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}>
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Upcoming IPOs</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Brokerage charges</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Market holidays</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Economic calendar</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Calculators</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Markets</a><br />
                        <a style={{textDecoration:"none", color:"black", fontSize: "0.9rem" , opacity: 0.7}}href="">Sectors</a>
                    </div>
                 </div>
            </div>
            <div className="text-small text-muted offset-1"  style={{ fontSize: "0.7rem" , opacity: 0.8  }}>
                <p >Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to 
                    <a href="" style={{ textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href="" style={{ textDecoration:"none"}}>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p >Procedure to file a complaint on <a href="" style={{ textDecoration:"none"}}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <a href="" style={{ textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                <p >Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p >Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p >India's largest broker based on networth as per NSE. <a href="" style={{ textDecoration:"none"}}>NSE broker factsheet</a></p>
                <p >"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, 
                    <a href="" style={{ textDecoration:"none"}}>please create a ticket here.</a></p>
            </div>
          <p className="offset-2 text-small text-muted" style={{ fontSize: "0.8rem" , opacity: 0.6  }}><b>&nbsp;&nbsp;&nbsp;NSE &nbsp;&nbsp;&nbsp;BSE &nbsp;&nbsp;&nbsp;MCX &nbsp;&nbsp;&nbsp;Terms & conditions &nbsp;&nbsp;&nbsp;Policies & procedures &nbsp;&nbsp;&nbsp;Privacy policy &nbsp;&nbsp;&nbsp; Disclosure &nbsp;&nbsp;&nbsp;For investor's attention &nbsp;&nbsp; &nbsp;Investor charter</b></p>
        </div>
        </footer>  
     );
}

export default Footer;