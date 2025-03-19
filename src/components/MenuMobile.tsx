import { Link } from "react-router";
import { constants } from "../data/constant";
import { useIndexStore } from "../store";
import NavLinkMobile from "./NavLinkMobile";

function MenuMobile() {
	const { menuMobile, closeMenu } = useIndexStore();
	return (
		<>
			{/* Fondo oscuro (aparece primero, desaparece último) */}
			<div
				className={`h-screen w-full fixed bg-black-revowall/70 z-40 duration-500 md:px-[8.3%] md:py-10 ${
					menuMobile ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={closeMenu}
				onKeyDown={(e) => {
					if (e.key === " " || e.key === "Enter") {
						closeMenu();
					}
				}}
			>
				<div className="flex justify-end p-5 md:p-0">
					<button
						type="button"
						aria-label="Cerrar Menú"
						className="size-8 m-1"
						onClick={(e) => {
							e.stopPropagation();
							closeMenu();
						}}
					>
						<img src="/icons/X.svg" alt="" className="h-full w-full" />
					</button>
				</div>
			</div>

			{/* Contenido del menú (aparece después, desaparece primero) */}
			<div
				className={`h-screen w-3/4 bg-blue-revowall fixed p-4 md:px-[5.3%] md:py-10 z-50 duration-300 ${
					menuMobile ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="w-1/2">
					<img
						src="/favicon.svg"
						alt="Logo de Revowall"
						className="w-full h-full"
					/>
				</div>
				<div className="w-full mt-20">
					<ul className="text-white flex flex-col text-lg gap-10">
						<li>
							<NavLinkMobile to="/" icon="/icons/Inicio.svg" label="Inicio" />
						</li>
						<li>
							<NavLinkMobile
								to={constants.nosotrosLink}
								icon="/icons/Nosotros.svg"
								label="Nosotros"
							/>
						</li>
						<li>
							<NavLinkMobile
								to={constants.serviciosLink}
								icon="/icons/Servicios.svg"
								label="Servicios"
							/>
						</li>
						<li>
							<NavLinkMobile
								to={constants.proyectosLink}
								icon="/icons/Proyectos.svg"
								label="Proyectos"
							/>
						</li>
						<li>
							<NavLinkMobile
								to={constants.contactoLink}
								icon="/icons/Contacto.svg"
								label="Contacto"
							/>
						</li>
						<li>
							<div className="flex gap-4 items-center">
								<img
									src="/icons/Numero.svg"
									alt="Numero Icon"
									className="size-7"
								/>
								<span className="leading-3 md:text-lg">{constants.telefono}</span>
							</div>
						</li>
					</ul>
				</div>
				<Link
					to={constants.whatsappLink}
					className="w-2/3 md:w-1/2 mt-24 flex border-2 border-green-revowall"
				>
					<div className="w-1/3 p-1 shadow-xl flex items-center justify-center bg-green-revowall">
						<img
							src="/icons/Cotizar.svg"
							alt="Cotizar Icon"
							className="size-8"
						/>
					</div>
					<div className="w-full flex items-center justify-center text-white">
						<span>Cotiza aquí</span>
					</div>
				</Link>
			</div>
		</>
	);
}

export default MenuMobile;
