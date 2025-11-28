import React from "react";

export const Footer = () => {
	return (
		<footer className="w-full bg-[#200e32] flex justify-center px-6 py-4  text-violet-400">
			<div className="w-full flex flex-wrap px-6 pt-8 pb-4 md:pt-10 md:pb-6 lg:pt-16 lg:pb-10">
				<div className="w-full lg:w-[50%]">
					<h2 className="text-[min(10vw,36px)] text-violet-400 font-bold">
						Open CV
					</h2>
					<p className="max-w-md 2xl:max-w-lg text-base  md:text-lg md:leading-7 mt-8 md:mt-10 text-violet-200">
						I am sole developer based in peshawar. My mission: Empower job
						seekers worldwide. I am here to make your journey smoother, more
						enjoyable and ultimately more successful.
					</p>
				</div>

				<nav className="w-full flex gap-10 text-sm md:text-[15px] lg:text-base 2xl:text-lg mt-8 lg:w-[45%] lg:mt-0 md:mt-10">
					<div>
						<h2 className="text-white font-bold uppercase tracking-[0.5px]">
							Product
						</h2>
						<div className="flex flex-col gap-2 lg:gap-2.5 mt-3 lg:mt-5 w-40 xs:w-[180px] sm:w-[200px] lg:w-60 2xl:w-[300px] text-white">
							<a href="#">Resume Templates</a>
							<a href="#">Cover Letter</a>
							<a href="#">Cover Letter Templates</a>
							<a href="#">Job Tracker</a>
						</div>
					</div>
					<div>
						<h2 className="text-white font-bold uppercase tracking-[0.5px]">
							Developer
						</h2>
						<div className="flex flex-col gap-2 lg:gap-2.5 mt-3 lg:mt-5 w-40 xs:w-[180px] sm:w-[200px] lg:w-60 2xl:w-[300px] text-white">
							<a href="#">About</a>
							<a href="#">Contact</a>
							<a href="#">Terms And Condition</a>
							<a href="#">Privacy Policy</a>
						</div>
					</div>
				</nav>

				<div className="w-full flex flex-col justify-start items-start">
					<div className="flex flex-col sm:flex-row py-8 items-center justify-center">
						<h2 className=" text-violet-100 text-[min(6vw,24px)] sm:mr-8 font-bold">
							How To Find Me
						</h2>
						<div className="flex justify-center items-center -ml-6">
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 21 20"
									className="w-11 p-3"
								>
									<g fill="currentColor" clipPath="url(#clip0_2175_4717_217)">
										<path d="M18 17.813c1.38 0 2.5-1.167 2.5-2.605V8.535l-9.536 3.976a.982.982 0 01-.464.093c-.227 0-.383-.032-.46-.096L.5 8.535v6.673c0 1.438 1.12 2.604 2.5 2.604h15z"></path>
										<path d="M10.5 9.902l10-4.166v-.944c0-1.438-1.12-2.604-2.5-2.604H3C1.62 2.188.5 3.353.5 4.792v.944l10 4.166z"></path>
									</g>
									<defs>
										<clipPath id="clip0_2175_4717_217">
											<path
												fill="currentColor"
												d="M0 0H20V20H0z"
												transform="translate(.5)"
											></path>
										</clipPath>
									</defs>
								</svg>
							</a>
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-11 p-3 "
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
								</svg>
							</a>
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="w-11 p-3 "
									fill="currentColor"
								>
									<path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z"></path>
								</svg>
							</a>
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 21"
									className="w-11 p-3"
								>
									<path
										fill="currentColor"
										d="M10 .375c-5.522 0-10 4.478-10 10C0 12.251.527 14 1.426 15.5L.09 20.375l4.978-1.307A9.946 9.946 0 0010 20.375c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zM6.577 5.71c.163 0 .33 0 .474.007.178.004.372.017.558.428.22.488.702 1.713.763 1.837.062.125.106.27.02.433-.082.167-.124.268-.244.415-.124.144-.26.322-.373.43-.124.124-.252.26-.109.508.143.247.641 1.059 1.377 1.714.946.845 1.744 1.104 1.992 1.229.248.124.392.104.536-.062.147-.163.62-.72.786-.969.162-.248.328-.205.553-.123.229.081 1.446.681 1.694.805.249.124.412.186.474.287.064.104.064.6-.141 1.178-.206.578-1.217 1.136-1.67 1.175-.458.043-.885.206-2.974-.617-2.52-.992-4.11-3.573-4.233-3.74-.125-.162-1.01-1.342-1.01-2.558 0-1.221.64-1.82.865-2.067a.91.91 0 01.662-.31z"
									></path>
								</svg>
							</a>
						</div>
					</div>
					<p className="sm:self-center">© 2025 All right reserved</p>
				</div>
			</div>
		</footer>
	);
};
