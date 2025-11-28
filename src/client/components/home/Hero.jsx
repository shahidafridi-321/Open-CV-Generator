import React from "react";

export const Hero = () => {
	return (
		<div className="w-full flex flex-col-reverse sm:flex-row justify-between  items-center relative">
			<div>
				<div className="mt-16 xs:mt-20 md:mt-4 2xl:mt-6 w-full xl:mt-8 4xl:mt-5">
					<h3 className="uppercase font-semibold text-[15px] lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 tracking-[-0.1px] lg:tracking-[-0.2px] xl:tracking-[-0.3px] 2xl:tracking-[-0.4px] lg:[word-spacing:0.5px]">
						Resume Builder Free Forever{" "}
					</h3>
					<h2 className="font-black text-4xl tracking-[-1.5px] 500:text-5xl md:text-4xl 500:tracking-[-2px] md:tracking-[-1.5px] mq9:text-5xl mq9:tracking-[-2px] lg:tracking-[-2.5px] lg:text-6xl xl:text-7xl 2xl:text-[80px] xl:tracking-[-3px] 2xl:tracking-[-3.5px] 4xl:text-[92px] 4xl:tracking-[-5px] 4xl:leading-[1.05] text-black mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 4xl:mt-5.5">
						Craft a standout resume, get hired faster
					</h2>
					<p className="mt-4 lg:mt-6 text-lg text-gray-600 leading-[1.6] max-w-[400px] lg:max-w-[500px] lg:text-[20px] xl:text-[22px] lg:leading-[1.8] 2xl:text-[24px] 4xl:text-[28px] 4xl:leading-[1.8] 4xl:max-w-[560px] 4xl:mt-8">
						Your dream resume, 100% free. No strings attached 🚀 Create,
						customize, and download unlimited resumes, absolutely free. No
						hidden fees, no surprises.
					</p>
					<a className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 bg-[#200e32] text-white h-15 lg:mt-10 mt-7 lg:h-20 w-max rounded-xl pl-7.5 pr-7 text-base font-bold tracking-[0px] md:h-18 md:text-lg lg:text-xl 4xl:mt-12">
						<span className="inline-block">Start Now – it's Free ✨</span>
					</a>
				</div>
				<div className="mt-10 flex flex-col 2xl:mt-14 3xl:flex-row 4xl:mt-14">
					<div className="mr-[18px] flex">
						<img
							src="src/assets/flowcv-loved-by-users.webp"
							alt=""
							className="-ml-3 w-[276px] aspect-600/172"
						/>
					</div>
					<p className="text-[#200e32] -mt-1 mr-2 text-base lg:text-lg font-bold lg:mt-2 3xl:mt-4">
						Trusted by 4.3 million users{" "}
					</p>
				</div>
			</div>
			<div className="flex relative max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[460px] xl:max-w-[480px] 2xl:max-w-[520px] 3xl:max-w-[560px]">
				<img
					src="src/assets/main-landing-hero-768w.webp"
					alt=""
					className="justify-end items-center w-full rounded-lg border border-solid border-gray-200 shadow-[0px_34px_68px_-16px_rgba(0,0,0,0.25)] md:rounded-xl xl:shadow-[0px_42px_84px_-20px_rgba(0,0,0,0.25)] 2xl:rounded-xl"
				/>
			</div>
			<div className="flex w-[210px] items-center justify-between bg-amber-50 shadow-2xl rounded-2xl px-4 py-1 absolute top-50 left-2 sm:top-84 sm:left-72 md:top-80 md:left-80 lg:top-90 lg:left-110 xl:top-96 xl:left-200">
				<div className="flex flex-col space-y-2">
					<h3 className="text-shadow-black font-bold text-[16px]">
						Jhone Clerk
					</h3>
					<p className="text-shadow-gray-900 text-[9.6px] leading-none lg:text-xs">
						Product Manager
					</p>
					<img src="src/assets/hero-five-stars.svg" alt="" />
				</div>
				<p className="text-white font-extrabold text-2xl px-4 py-2 rounded-full bg-red-400">
					P
				</p>
			</div>
			<div className="flex w-[360px] items-center justify-between bg-amber-50 shadow-2xl rounded-xl px-6 py-1 absolute top-73 right-10 sm:top-110 sm:left-90  sm:left:80 md:top-140 md:left-120 lg:top-120 lg:left-130 xl:top-120 xl:left-180">
				<div className="flex flex-col space-y-2">
					<h3 className="text-shadow-black text-[11.2px] leading-snug lg:text-[14px]">
						Powerful website i wish i knew ealier:
					</h3>
					<p className="text-shadow-gray-900 text-[11.2px] leading-snug lg:text-[14px]">
						This one is a LIFESAVER
					</p>
					<p className="text-[9.6px] text-shadow-neutral-500 leading-tight lg:text-[12px]">
						@maedeh.davami | 1.8 million views
					</p>
				</div>
				<img
					src="https://assets.flowcvassets.com/landing/tiktok-logo.svg"
					alt="TikTok Logo"
					className="lg:w-13 w-11"
				/>
			</div>
		</div>
	);
};
