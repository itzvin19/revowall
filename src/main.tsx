import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";
import { HelmetProvider } from "react-helmet-async";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<Router />
		</HelmetProvider>
	</StrictMode>,
);
