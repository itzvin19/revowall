import { Link, Outlet } from "react-router";
import CorreoIcon from "../icons/CorreoIcon";
import CelularIcon from "../icons/CelularIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TiktokIcon from "../icons/TiktokIcon";
import { constants } from "../data/constant";
import MenuMobile from "../components/MenuMobile";
import { useIndexStore } from "../store";
import NavLinkHover from "../components/NavLinkHover";

function LandingLayout() {
	const { openMenu } = useIndexStore();
	return (
		<>
			<MenuMobile />
			<Link
				to={constants.whatsappLink}
				className="w-fit z-40 mt-24 hidden xl:flex  hover:scale-105 duration-150 shadow-2xl focus:shadow-none fixed bottom-5 right-5 border-2 border-green-revowall"
			>
				<div className="w-1/3 p-2 2xl:p-3 shadow-xl flex items-center justify-center bg-green-revowall">
					<img
						src="/icons/Cotizar.svg"
						alt="Cotizar Icon"
						className="size-10"
					/>
				</div>
				<div className="w-full flex items-center justify-center text-white bg-blue-revowall px-4 2xl:text-xl">
					<span>Cotiza aquí</span>
				</div>
			</Link>
			<header className="w-full bg-blue-revowall/90 xl:bg-white px-4 md:px-[8.3%] flex justify-between items-center py-6 md:max-xl:py-10">
				<div className="w-1/2 xl:w-1/5">
					<Link
						to={"/"}
						aria-label="Ir al inicio"
						className="w-3/4 hidden xl:block"
					>
						<img
							src="/icons/Logo-RevoWall.svg"
							alt="Logo de Revowall"
							className="w-full h-full"
						/>
					</Link>
					<Link
						to={"/"}
						aria-label="Ir al inicio"
						className="w-3/4 md:w-1/2 block xl:hidden"
					>
						<img
							src="/img/logoWhite.svg"
							alt="Logo de Revowall"
							className="w-full h-full"
						/>
					</Link>
				</div>
				<button
					type="button"
					aria-label="Abrir menú de navegación"
					className="w-1/12 flex xl:hidden items-center justify-center"
					onClick={() => openMenu()}
				>
					<img
						src="/icons/MobileMenu.svg"
						alt="Menú de Navegación"
						className="w-full h-full block xl:hidden"
					/>
				</button>
				<div className="w-1/2 2xl:w-2/5 2xl:text-xl hidden xl:flex items-center text-blue-revowall justify-between">
					<div className="flex justify-between items-center pr-3 gap-5">
						<div className="flex items-center gap-2 w-1/2 justify-center">
							<div className="size-10 flex items-center justify-center">
								<CorreoIcon />
							</div>
							<span>{constants.correo}</span>
						</div>
						<div className="flex items-center gap-2 w-1/2 justify-center">
							<div className="w-6 h-6 flex items-center justify-center">
								<CelularIcon />
							</div>
							<span>{constants.telefono}</span>
						</div>
					</div>
					<div className="h-6 w-[1px] bg-blue-revowall" />
					<div className="pl-3 gap-4 flex items-center justify-between">
						<Link
							target="_blank"
							aria-label="Ir a Facebook de RevoWall"
							to={constants.facebookLink}
							className="size-5 2xl:size-7 flex items-center justify-center"
						>
							<FacebookIcon />
						</Link>
						<Link
							target="_blank"
							aria-label="Ir a Instagram de RevoWall"
							to={constants.instagramLink}
							className="size-5 2xl:size-7 flex items-center justify-center"
						>
							<InstagramIcon />
						</Link>
						<Link
							target="_blank"
							aria-label="Ir a TikTok de RevoWall"
							to={constants.tiktokLink}
							className="size-5 2xl:size-7 flex items-center justify-center"
						>
							<TiktokIcon />
						</Link>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<footer className="py-14 xl:py-16 text-white bg-blue-revowall flex w-full items-center flex-col gap-12 px-4 md:px-[8.3%]">
				<div className="flex flex-col w-full divide-y-2 divide-white">
					<div className="flex w-full justify-between pb-6 gap-2 xl:gap-0">
						<div className="w-2/3 xl:w-1/5 flex flex-col gap-8">
							<div className="flex flex-col gap-4 w-full">
								<img
									src="/img/logoWhite.svg"
									alt="Logo de Revowall"
									className="w-1/2 xl:w-5/6 h-full"
								/>
								<span className="text-sm xl:text-[16px] 2xl:text-xl">
									Edificando tus sueños
								</span>
							</div>
							<div className="flex flex-col gap-2 2xl:gap-4">
								<div className="flex w-full items-center gap-2">
									<div className="text-green-revowall size-5 flex justify-center items-center">
										<CelularIcon />
									</div>
									<span className="leading-4 2xl:text-lg">{constants.telefono}</span>
								</div>
								<div className="flex w-full items-center gap-2">
									<div className="text-green-revowall size-5 flex justify-center items-center">
										<CorreoIcon />
									</div>
									<span className="leading-4 2xl:text-lg">{constants.correo}</span>
								</div>
							</div>
						</div>
						<div className="w-1/3 md:w-3/5 flex flex-col md:flex-row items-center gap-2 md:gap-10 xl:gap-0">
							<div className="w-full md:w-1/4 xl:w-1/3 flex flex-col gap-2 xl:gap-5">
								<NavLinkHover to={"/"}>Inicio</NavLinkHover>
								<NavLinkHover to={constants.nosotrosLink}>
									Nosotros
								</NavLinkHover>
							</div>
							<div className="w-full md:w-1/4 xl:w-1/3 flex flex-col gap-2 xl:gap-5">
								<NavLinkHover to={constants.serviciosLink}>
									Servicios
								</NavLinkHover>
								<NavLinkHover to={constants.proyectosLink}>
									Proyectos
								</NavLinkHover>
							</div>
							<div className="w-full xl:w-1/3 flex flex-col gap-5">
								<div className="w-full flex md:flex-col gap-5 2xl:gap-7 items-center justify-center pt-2 xl:pt-0">
									<Link
										aria-label="Ir a Facebook de RevoWall"
										to={constants.facebookLink}
										className="size-6 2xl:size-8 text-green-revowall duration-150 hover:scale-110"
									>
										<FacebookIcon />
									</Link>
									<Link
										aria-label="Ir a Instagram de RevoWall"
										to={constants.instagramLink}
										className="size-6 2xl:size-8 text-green-revowall duration-150 hover:scale-110"
									>
										<InstagramIcon />
									</Link>
									<Link
										aria-label="Ir a TikTok de RevoWall"
										to={constants.tiktokLink}
										className="size-6 2xl:size-8 text-green-revowall duration-150 hover:scale-110"
									>
										<TiktokIcon />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-6 flex flex-col gap-1 2xl:text-lg">
						<span>Copyright © {new Date().getFullYear()}</span>
						<Link to={"https://www.kevincarrasco.dev"} target="_blank">
							Desarrollado por Kevin Carrasco
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}

export default LandingLayout;
