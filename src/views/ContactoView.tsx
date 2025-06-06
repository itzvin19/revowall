import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import { constants } from "../data/constant";
import MapComponent from "../components/MapComponent";
import useWindowSize from "../hooks/useWindowSize";
import { Helmet } from "react-helmet-async";
function ContactoView() {
	const { width } = useWindowSize();

	return (
		<>
			<Helmet>
				<title>Proyectos | Revowall</title>
				<meta
					name="description"
					content="Contacta a RevoWall, expertos en Drywall Americano. Obtén asesoramiento personalizado y solicita presupuestos para tus proyectos. ¡Estamos aquí para ayudarte!"
				/>
			</Helmet>
			<HeroSection
				showLinks={false}
				backgroundImg="/img/contacto/ContactoCover.webp"
				extraHeight={width >= 1280}
			/>
			<section className="px-4 md:px-[8.3%] py-12 xl:py-0 text-black-revowall">
				<div className="w-full flex flex-col-reverse xl:flex-row relative xl:-top-24">
					<div className="w-full xl:w-2/5 flex flex-col px-4 xl:px-12 2xl:px-15 py-10 xl:py-14 2xl:py-16 gap-8 xl:gap-14 xl:bg-gray-revowall xl:border-t-16 border-green-revowall">
						<h2 className="text-[28px] 2xl:text-[31px] text-center xl:text-left font-bold text-green-revowall">
							Contáctanos
						</h2>
						<div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-start xl:flex-col gap-5">
							<div className="flex flex-col xl:flex-row gap-5 items-center 2xl:text-xl">
								<img
									src="/icons/TelefonoFill.svg"
									alt="Telefono Icon"
									className="size-12 2xl:size-14"
								/>
								<div className="flex flex-col">
									<span className="text-blue-revowall text-center xl:text-left">
										Teléfono
									</span>
									<span>{constants.telefono}</span>
								</div>
							</div>
							<div className="flex flex-col xl:flex-row gap-5 items-center 2xl:text-xl">
								<img
									src="/icons/EmailFill.svg"
									alt="Email Icon"
									className="size-12 2xl:size-14"
								/>
								<div className="flex flex-col">
									<span className="text-blue-revowall text-center xl:text-left">
										Email
									</span>
									<span className="text-center xl:text-left">
										{constants.correo}
									</span>
								</div>
							</div>
							<div className="flex flex-col xl:flex-row gap-5 items-center 2xl:text-xl">
								<img
									src="/icons/UbicacionFill.svg"
									alt="Ubicacion Icon"
									className="size-12 2xl:size-14"
								/>
								<div className="flex flex-col">
									<span className="text-blue-revowall text-center xl:text-left">
										Ubicación
									</span>
									<span className="text-center xl:text-left">
										{constants.ubicacion}
									</span>
								</div>
							</div>
						</div>
						<hr className="text-gray-300" />
						<div className="flex flex-col gap-3 items-center xl:items-start">
							<span className="text-blue-revowall 2xl:text-xl">
								Siguenos en nuestras redes sociales
							</span>
							<div className="xl:w-full flex gap-3">
								<Link to={constants.facebookLink} target="_blank">
									<img
										src="/icons/FacebookFill.svg"
										alt="Facebook Icon"
										className="size-8 2xl:size-10"
									/>
								</Link>
								<Link to={constants.instagramLink} target="_blank">
									<img
										src="/icons/InstagramFill.svg"
										alt="Instagram Icon"
										className="size-8 2xl:size-10"
									/>
								</Link>
								<Link to={constants.tiktokLink} target="_blank">
									<img
										src="/icons/TikTokFill.svg"
										alt="TikTok Icon"
										className="size-8 2xl:size-10"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-3/5 flex flex-col xl:px-12 2xl:px-15 xl:py-14 2xl:py-16 bg-white gap-8 xl:border-t-16 border-blue-revowall">
						<span className="text-[28px] 2xl:text-[31px] font-bold text-center">
							<span className="text-green-revowall">Hablemos</span> sobre tu
							proyecto
						</span>
						<form className="w-full flex flex-col px-5 py-8 xl:p-0 gap-5 shadow-lg xl:shadow-none border-t-8 xl:border-t-0 border-blue-revowall  2xl:text-lg">
							<div className="w-full flex flex-col xl:flex-row gap-4">
								<div className="flex flex-col xl:w-1/2">
									<label className="flex flex-col gap-2">
										Nombre
										<input
											type="text"
											className="bg-gray-revowall py-2 px-3"
											placeholder="Juan"
										/>
									</label>
								</div>
								<div className="flex flex-col xl:w-1/2">
									<label className="flex flex-col gap-2">
										Compañía
										<input
											type="text"
											className="bg-gray-revowall py-2 px-3"
											placeholder="Compañia S.A.C."
										/>
									</label>
								</div>
							</div>
							<div className="w-full flex-col xl:flex-row flex gap-4">
								<div className="flex flex-col xl:w-1/2">
									<label className="flex flex-col gap-2">
										Celular
										<input
											type="text"
											className="bg-gray-revowall py-2 px-3"
											placeholder="987654321"
										/>
									</label>
								</div>
								<div className="flex flex-col xl:w-1/2">
									<label className="flex flex-col gap-2">
										Email
										<input
											type="text"
											className="bg-gray-revowall py-2 px-3"
											placeholder="correo@correo.com"
										/>
									</label>
								</div>
							</div>
							<div className="flex flex-col w-full">
								<label className="flex flex-col gap-2">
									Servicio
									<input
										type="text"
										className="bg-gray-revowall py-2 px-3"
										placeholder="Contrucción ligera en DryWall"
									/>
								</label>
							</div>
							<div className="flex flex-col w-full">
								<label className="flex flex-col gap-2">
									Mensaje
									<textarea
										className="bg-gray-revowall py-2 px-3 min-h-[120px]"
										placeholder="Mensaje"
									/>
								</label>
							</div>
							<input
								type="submit"
								value="Enviar"
								className="bg-green-revowall p-2 xl:p-3 text-white font-bold cursor-pointer duration-150 hover:bg-blue-revowall"
							/>
						</form>
					</div>
				</div>
			</section>
			<section>
				<MapComponent />
			</section>
		</>
	);
}

export default ContactoView;
