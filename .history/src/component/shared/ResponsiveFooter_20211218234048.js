import React from 'react';
import './ResponsiveFooter.css'
import logo from '../../../src/images/sodexo-logo (1).png'

const ResponsiveFooter = () => {
    return (
        <body>
		<header>
			<h1> Responsive Footer </h1>
			<h2>Have a look</h2>
			<h2><span>On Below Footer</span></h2>
		</header>

		

		<footer class="footer-distributed">

			<div class="footer-left">
                    <img src={logo}/>
				<h3>About<span>Sodexo</span></h3>

				<p class="footer-links">
					<a href="#">Home</a>
					|
					<a href="#">Blog</a>
					|
					<a href="#">About</a>
					|
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">© 2022 Sodexo Catering & Facility Management Company</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					  <p><span>2361 - Madinath Sultan Qaboss,
						opposite mosque</span>
						Muscat, OMAN</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+968 935542</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@eduonix.com">support@sodexo.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
				<div class="footer-icons">
					<a href="#"><i class="fa fa-facebook"></i></a>
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