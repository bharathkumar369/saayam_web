import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/components/Navbar/Navbar";
import MainLoader from "../common/components/Loader/MainLoader";
import Footer from "../common/components/Footer/Footer";
import LeftAds from "../common/components/LeftAds/LeftAds";
import RightAds from "../common/components/RightAds/RightAds";

const Layout = () => {
	return (
		<div className='flex flex-col h-screen'>
			<header>
				<Navbar />
			</header>
			<div className='flex flex-1'>
				<aside className='left-ads-panel flex-1 border'>
					<LeftAds />
				</aside>
				<main className='border flex-[5]'>
					<div className='border'>
						<Suspense fallback={<MainLoader />}>
							<Outlet />
						</Suspense>
					</div>
				</main>
				<aside className='right-ads-panel flex-1 border'>
					<RightAds />
				</aside>
			</div>
			<footer className='border'>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
