import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Layout } from "../components";

export default function Index() {
	return (
		<Layout>
			<div className="container mx-auto max-w-screen-md pt-20">
				<section className="mb-10">
					<h1 className="text-4xl md:text-6xl lg:text-7xl mb-8">Your friendly neighbourhood web developer</h1>
					<a
						className="inline-flex font-semibold items-center no-underline rounded-md px-4 py-2 bg-gray-100 dark:bg-gray-800 mb-8 text-current hover:bg-gray-50 dark:hover:bg-gray-500 transition duration-200"
						href="mailto:mark@janiczak.me"
					>
						<span className="block w-3 h-3 rounded-xl bg-green-400 mr-4 animate-pulse" /> Available for work
					</a>
					<ul className="flex items-center list-none mb-8">
						<li className="mr-4">
							<a
								href="https://github.com/markjaniczak"
								target="blank"
								rel="noopener"
								title="Github Profile"
							>
								<FontAwesomeIcon className="text-gray-900" size="2x" icon={faGithub} />
							</a>
						</li>
						<li>
							<a
								href="https://linkedin.com/in/markjaniczak"
								target="blank"
								rel="noopener"
								title="Linkedin Profile"
							>
								<FontAwesomeIcon className="text-gray-900" size="2x" icon={faLinkedinIn} />
							</a>
						</li>
					</ul>
					<div>
						<p className="mb-2">
							Hey, I'm Mark. I've spent the last 5 years in the eCommerce space as both the merchant and a
							developer. I'm currently a front-end developer at{" "}
							<a className="link" href="https://www.culturekings.com.au" target="_blank" rel="noopener">
								Culture Kings
							</a>{" "}
							creating innovative shopping experiences.
						</p>
						<p className="mb-2">
							Previously, I worked as a Developer Advocate at{" "}
							<a className="link" href="https://www.netohq.com" target="_blank" rel="noopener">
								Neto eCommerce
							</a>{" "}
							helping other SaaS companies integrate their products into the Neto ecosystem.
						</p>
					</div>
				</section>
			</div>
		</Layout>
	);
}
