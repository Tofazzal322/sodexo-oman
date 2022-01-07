import React from 'react';
import './ResponsiveFooter.css'
import logo from '../../../src/images/sodexo-logo.png'
import {
  faSortAmountUp,
  faAddressCard,
  faFileInvoiceDollar,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveFooter = () => {
    return (
        <body>
		<footer class="footer-distributed">
			<div class="footer-left text-light">
                    <img className='text-light bg-light p-2' alt="logo" src={logo}/>
				<h3>About<span>Sodexo</span></h3>
				<p class="footer-links">
					<a href="#">Home</a>
					<a href="#">Blog</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</p>
				<p class="footer-company-name">© 2022 Sodexo Catering & Facility Management Company</p>
			</div>
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					  <p><span>2361 - Madinath Sultan Qaboss,
					<br />	Opposite Fatema Azhurah Mosque</span>
						Muscat, OMAN</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+968 93554255</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@eduonix.com">support@sodexo.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					Thanks to our 412,000 employees, Sodexo provides catering, facilities management, employee benefits and personal home services to 100 million consumers daily in 56 countries. </p>
				<div class="footer-icons">
					<a href="#"><FontAwesomeIcon
                className="fs-1 mt-3"
                style={{ color: "#eb0f5d" }}
                icon={faAddressCard}
              /></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-youtube"></i></a>
				</div>
			</div>
		</footer>
	</body>
    );
};

export default ResponsiveFooter;