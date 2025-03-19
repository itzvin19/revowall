import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";
import LandingLayout from "./layouts/LandingLayout";
import { constants } from "./data/constant";
import ChangeView from "./utils/ChangeView";
const IndexView = lazy(() => import("./views/IndexView"));
const NosotrosView = lazy(() => import("./views/NosotrosView"));
const ServiciosView = lazy(() => import("./views/ServiciosView"));
const ProyectosView = lazy(() => import("./views/ProyectosView"));
const ContactoView = lazy(() => import("./views/ContactoView"));

function Router() {
	return (
		<BrowserRouter>
			<ChangeView />
			<Routes>
				<Route element={<LandingLayout />}>
					<Route path={"/"} element={<IndexView />} />
					<Route path={constants.nosotrosLink} element={<NosotrosView />} />
					<Route path={constants.serviciosLink} element={<ServiciosView />} />
					<Route path={constants.proyectosLink} element={<ProyectosView />} />
					<Route path={constants.contactoLink} element={<ContactoView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
