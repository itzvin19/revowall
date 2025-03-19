import type { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router";

type NavLinkHoverProps = PropsWithChildren<{
	to: string;
}>;

function NavLinkHover({ to, children }: NavLinkHoverProps) {
	const location = useLocation();
	const isActive = location.pathname === to;

	if (isActive) {
		// Si estamos en la página actual, renderiza un span con texto verde
		return (
			<span className="inline-block w-fit text-green-revowall 2xl:text-lg cursor-default font-bold">{children}</span>
		);
	}

	// Si no es la página actual, renderiza un Link con la animación de hover
	return (
		<Link
			to={to}
			className="relative inline-block w-fit hover:text-green-revowall 2xl:text-lg transition-colors duration-300
                 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-green-revowall 
                 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 
                 hover:after:w-full"
		>
			{children}
		</Link>
	);
}

export default NavLinkHover;
