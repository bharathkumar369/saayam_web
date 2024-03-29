import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/components/Navbar/Navbar";
import MainLoader from "../common/components/Loader/MainLoader";

const Layout = () => {
	return (
		// <div>
		// 	<Navbar />
		// 	<main>
		// 		<Suspense fallback={<MainLoader />}>
		// 			<Outlet />
		// 		</Suspense>
		// 	</main>
		// </div>
		<div>
			<div className='flex flex-col'>
				<div className='flex h-screen'>
					<aside className='left-ads-panel flex-1 border border-blue-500'>
						Left Ads
					</aside>
					<main className='border border-green-500 flex-[5]'>
						<Navbar />
						<div className='border border-black'>
							<Suspense fallback={<MainLoader />}>
								<Outlet />
							</Suspense>
						</div>
					</main>
					<aside className='right-ads-panel flex-1 border border-blue-500'>
						Right Ads
					</aside>
				</div>

				{/* <footer className='border border-yellow-500 p-5'>
					Bottom Ads
				</footer> */}
			</div>
		</div>
	);
};

export default Layout;
