import React from "react";
// import { Card } from "react-bootstrap";

const Index = (props) => {
	return (
		<div className="IndexPage">
			<div className="height-100 hero-wrap">
				<div className="overlay"></div>
				<div className="container-fluid px-0">
					<div className="row d-md-flex no-gutters slider-text align-items-center height-100 justify-content-end">
						<img
							className="align-self-center order-md-last img-fluid"
							src="/images/undraw_pair_programming_njlp.svg"
							alt=""
						/>
						<div className="one-forth d-flex align-items-center ftco-animate height-100 fadeInUp ftco-animated">
							<div className="text mt-5">
								<span className="subheading">Isometric Hosting</span>
								<h1 className="mb-3">
									<span>Design,</span> <span>Development,</span>{" "}
									<span>Hosting</span>
								</h1>
								<p>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia, there live the blind texts.
								</p>
								<p>
									<a href="/" alt="" className="btn btn-primary px-4 py-3">
										Get in touch
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
