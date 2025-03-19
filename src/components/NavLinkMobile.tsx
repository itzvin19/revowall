import { Link, useLocation } from "react-router";

type NavLinkMobileProps = {
	to: string;
	icon: string;
	label: string;
};

export default function NavLinkMobile({ to, icon, label }: NavLinkMobileProps) {
	const location = useLocation();
	const isActive = location.pathname === to;

	return isActive ? (
		<span className="flex gap-4 items-center w-fit text-green-revowall">
			<img src={icon} alt={`${label} Icon`} className="size-7" />
			<span className="leading-3 md:text-xl">{label}</span>
		</span>
	) : (
		<Link to={to} className="flex gap-4 items-center w-fit">
			<img src={icon} alt={`${label} Icon`} className="size-7" />
			<span className="leading-3 md:text-xl">{label}</span>
		</Link>
	);
}
