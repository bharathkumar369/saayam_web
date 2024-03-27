import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/components/Navbar/Navbar";
import MainLoader from "../common/components/Loader/MainLoader";

const Layout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Suspense fallback={<MainLoader />}>
					<Outlet />
				</Suspense>
			</main>
		</div>
	);
};

export default Layout;
