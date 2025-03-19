import { useEffect } from "react";
import { useLocation } from "react-router";
import { useIndexStore } from "../store";

export default function ScrollToTop() {
	const { pathname } = useLocation();
	const { closeMenu } = useIndexStore();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.scrollTo(0, 0);
		closeMenu();
	}, [pathname]); // Se ejecuta cuando cambia la ruta

	return null;
}
