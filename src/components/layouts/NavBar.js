import React from "react";
import T from "./../utils/T";
// import { Card } from "react-bootstrap";

const NavBar = (props) => {
	return (
		<nav
			class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
			id="ftco-navbar"
		>
			<div class="container">
				<a class="navbar-brand" href="index.html">
					<T t="appName"/>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#ftco-nav"
					aria-controls="ftco-nav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="oi oi-menu"></span> <T t="Menu"/>
				</button>

				<div class="collapse navbar-collapse" id="ftco-nav">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a href="index.html" class="nav-link">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a href="about.html" class="nav-link">
								About
							</a>
						</li>
						<li class="nav-item">
							<a href="domain.html" class="nav-link">
								Project
							</a>
						</li>
						<li class="nav-item">
							<a href="blog.html" class="nav-link">
								Blog
							</a>
						</li>
						<li class="nav-item">
							<a href="contact.html" class="nav-link">
								Contact
							</a>
						</li>
						<li class="nav-item cta">
							<a href="contact.html" class="nav-link">
								<span>Get started</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
