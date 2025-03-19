import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import MapIcon from "../icons/MapIcon";
import TrapecioImagen from "../icons/TrapecioImagen";
import UbicacionIcon from "../icons/UbicacionIcon";
import Flecha from "../icons/Flecha";
import MotivoCard from "../components/index/MotivoCard";
import ProcesoCard from "../components/index/ProcesoCard";
import FlechaLeft from "../icons/FlechaLeft";
import FlechaRight from "../icons/FlechaRight";
import Testimonio from "../components/index/Testimonio";
import { constants } from "../data/constant";
import { proyectos } from "../data/proyectos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { testimonios } from "../data/testimonios";
import AtencionPersonalizada from "../icons/AtencionPersonalizada";
import Compromiso from "../icons/Compromiso";
import Experiencia from "../icons/Experiencia";
import Garantias from "../icons/Garantias";

function IndexView() {
	return (
		<>
			<HeroSection
				backgroundImg="/img/index/IndexCover.webp"
				showLinks={true}
				imgOver="/img/index/IndexCoverMan.webp"
			/>
			<section className="px-4 md:px-[8.33%] text-black-revowall py-12 xl:py-16 2xl:py-20 xl:text-lg">
				<div className="w-full flex flex-col-reverse gap-12 xl:gap-0 xl:flex-row items-center justify-between">
					<div className="w-full xl:w-1/2 relative h-[350px]">
						<div className="absolute h-[350px] text-[#424154] z-20 right-0 opacity-25">
							<MapIcon />
						</div>
						<div className="h-[300px] relative">
							<div className="w-1/2 text-blue-revowall h-full">
								<TrapecioImagen />
							</div>
							<div className="w-11/12 xl:w-5/6 h-11/12 top-2 left-3 absolute">
								<img
									src="/img/index/IndexSection2.webp"
									alt="Trabajo de RevoWall"
									className="w-full h-full object-cover object-center"
								/>
							</div>
							<div className="absolute bottom-0 right-2 xl:right-[10.6%] flex flex-col items-end gap-3 z-30">
								<div className="bg-blue-revowall rounded-t-2xl p-3 flex items-center gap-2">
									<div className="h-6 w-6 text-green-revowall">
										<UbicacionIcon />
									</div>
									<span className="text-white">Lima</span>
								</div>
								<div className="bg-blue-revowall rounded-b-2xl p-3 flex items-center gap-2">
									<div className="h-6 w-6 text-green-revowall">
										<UbicacionIcon />
									</div>
									<span className="text-white">Todo el Perú</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-2/5 flex flex-col gap-5 md:gap-8 2xl:gap-9 xl:gap-5">
						<h2 className="text-[25px] md:text-[40px] 2xl:text-[45px] font-bold text-balance leading-8 xl:leading-12">
							Tu proyecto{" "}
							<span className="text-green-revowall">merece lo mejor</span>
						</h2>
						<p className="md:text-lg 2xl:text-xl text-balance">
							Con nuestra experiencia en drywall, garantizamos
							<b> acabados impecables</b> y una atención cercana en cada
							detalle. Trabajamos en
							<b> Lima y en todo el Perú</b>, llevando soluciones de calidad
							hasta donde las necesites.
						</p>
						<Link to={constants.contactoLink} className="w-fit flex">
							<div className="duration-150 hover:bg-blue-revowall bg-green-revowall text-white px-3 2xl:px-4 py-2 2xl:py-3 md:text-xl 2xl:text-2xl">
								<span>Contáctanos</span>
							</div>
						</Link>
					</div>
				</div>
			</section>
			<section className="bg-blue-revowall flex justify-between items-center relative text-lg px-4 md:px-[8.33%] xl:px-0 py-4 md:py-8 xl:py-0">
				<div className="absolute w-full xl:w-5/12 opacity-10 right-0 h-full">
					<img
						src="/img/index/CotizacionBg.svg"
						alt="Fondo de seccion de cotizacion"
						className="w-full h-full object-cover object-center"
					/>
				</div>
				<div className="w-1/3 relative hidden xl:flex justify-between h-[120px]">
					<div className="w-1/5 text-green-revowall z-20">
						<TrapecioImagen />
					</div>
					<div className="w-full h-full absolute">
						<img
							src="/img/index/Cotizacion.webp"
							alt="Solicitar cotización de Drywall"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="w-1/8 scale-x-[-1] -scale-y-100 text-blue-revowall">
						<TrapecioImagen />
					</div>
				</div>
				<div className="w-full xl:w-2/3 flex items-center relative justify-between xl:justify-start">
					<div className="text-white font-bold text-[19px] md:text-[25px] 2xl:text-[30px] text-balance justify-center w-1/2 xl:w-5/8 flex pl-3">
						<span className="text-center">
							<span className="text-green-revowall">Solicita una </span>
							cotización gratis
						</span>
					</div>
					<div className="w-5/12 xl:w-3/8">
						<Link
							to={constants.contactoLink}
							className="duration-150 hover:scale-105 group flex w-full xl:w-2/3"
						>
							<div className="text-black bg-white  py-1 md:py-3 px-2 md:px-8 w-full flex justify-between md:max-xl:justify-center 2xl:justify-center md:max-xl:gap-6 2xl:gap-6 items-center">
								<span className="text-[16px] group-hover:text-blue-revowall transition-colors text-xl 2xl:text-2xl duration-150">
									Contáctanos
								</span>
								<div className="h-5 w-5 rotate-[39deg] group-hover:text-blue-revowall">
									<Flecha />
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>
			<section className="px-4 md:px-[8.3%] py-12 xl:py-16 2xl:py-20 text-black-revowall flex w-full items-center flex-col gap-12">
				<h2 className="text-[28px] md:text-[40px] 2xl:text-[45px] font-bold">
					¿Por qué <span className="text-green-revowall">elegirnos?</span>
				</h2>
				<div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-4 xl:gap-8">
					<MotivoCard
						img={<Experiencia />}
						resaltedText="Experiencia y especialización"
						secondaryText="en drywall americano."
					/>
					<MotivoCard
						img={<Compromiso />}
						resaltedText="Compromiso con la calidad"
						secondaryText="y cumplimiento de tiempos."
					/>
					<MotivoCard
						img={<AtencionPersonalizada />}
						resaltedText="Atención personalizada"
						secondaryText="asesoramiento en cada etapa."
					/>
					<MotivoCard
						img={<Garantias />}
						resaltedText="Garantías en nuestros trabajos"
						secondaryText="para tu tranquilidad."
					/>
				</div>
			</section>
			<section className="bg-blue-revowall text-white items-center justify-center xl:text-lg">
				<h2 className="text-[25px] md:text-[40px] 2xl:text-[45px] font-bold text-center px-4 xl:px-0 py-12 xl:pt-12 xl:pb-8">
					Nuestro
					<span className="text-green-revowall"> proceso de trabajo</span>
				</h2>
				<div className="grid grid-cols-2 xl:grid-cols-4">
					<ProcesoCard
						img="/img/index/1169.webp"
						index="01"
						title="Consulta inicial"
						subtitle="Hablamos sobre tus necesidades y expectativas."
					/>
					<ProcesoCard
						img="/img/index/27071072.webp"
						index="02"
						title="Propuesta y cotización"
						subtitle="Te damos opciones claras y detalladas."
					/>
					<ProcesoCard
						img="/img/index/2149366644.webp"
						index="03"
						title="Ejecución del proyecto"
						subtitle="Trabajamos con precisión y compromiso."
					/>
					<ProcesoCard
						img="/img/index/2149366662.webp"
						index="04"
						title="Entrega y garantía"
						subtitle="Te entregamos un trabajo de calidad asegurada."
					/>
				</div>
			</section>
			<section className="px-4 md:px-[8.3%] py-12 xl:py-16 2xl:py-20 text-black-revowall flex w-full items-center flex-col gap-10 xl:gap-12">
				<h2 className="font-bold text-[28px] md:text-[40px] 2xl:text-[45px]">
					Nuestros <span className="text-green-revowall">Proyectos</span>
				</h2>
				<div className="flex gap-3 xl:gap-5 w-full justify-center">
					<div className="w-2/3 md:w-3/5 xl:w-1/2 group aspect-square bg-green-revowall">
						<div className="size-full relative text-blue-revowall">
							<div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 -z-10 h-3/4 w-1/3">
								<TrapecioImagen />
							</div>
							<div className="w-full h-full overflow-hidden relative">
								<img
									src={proyectos[0].img}
									alt={proyectos[0].img}
									className="w-full h-full object-cover absolute top-0 left-0 duration-150 group-hover:scale-110"
								/>
							</div>
							<Link to={constants.proyectosLink}>
								<div className="bg-white absolute right-0 bottom-0 z-10 size-16 md:size-20 xl:size-24 pt-2 xl:pt-3 pl-2 xl:pl-3">
									<div className="bg-blue-revowall group-hover:bg-green-revowall duration-150 h-full text-white flex items-center justify-center p-3 md:p-4 xl:p-6">
										<Flecha />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="w-5/16 xl:w-1/2 flex flex-col gap-3 xl:gap-5">
						<div className="flex flex-col xl:flex-row gap-3 xl:gap-5">
							<div className="w-full xl:w-1/2 aspect-square relative group">
								<div className="w-full h-full overflow-hidden relative">
									<img
										src={proyectos[1].img}
										alt={proyectos[1].img}
										className="w-full h-full object-cover absolute top-0 left-0 duration-150 group-hover:scale-110"
									/>
								</div>
								<Link to={constants.proyectosLink}>
									<div className="bg-white absolute right-0 bottom-0 z-10 size-8 md:size-12 xl:size-16 2xl:size-18 pt-1 xl:pt-3 pl-1 xl:pl-3">
										<div className="bg-blue-revowall duration-150 group-hover:bg-green-revowall h-full text-white flex items-center justify-center p-1.5 md:p-2 xl:p-3">
											<Flecha />
										</div>
									</div>
								</Link>
							</div>
							<div className="w-full xl:w-1/2 aspect-square relative group">
								<div className="w-full h-full overflow-hidden relative">
									<img
										src={proyectos[2].img}
										alt={proyectos[2].img}
										className="w-full h-full object-cover absolute top-0 left-0 duration-150 group-hover:scale-110"
									/>
								</div>
								<Link to={"/proyectos"}>
									<div className="bg-white absolute right-0 bottom-0 z-10 size-8 md:size-12 xl:size-16 2xl:size-18 pt-1 xl:pt-3 pl-1 xl:pl-3">
										<div className="bg-blue-revowall duration-150 group-hover:bg-green-revowall h-full text-white flex items-center justify-center p-1.5 md:p-2 xl:p-3">
											<Flecha />
										</div>
									</div>
								</Link>
							</div>
						</div>
						<div className="hidden xl:block bg-green-600 aspect-[2/1] relative overflow-hidden group">
							<div className="w-full h-full overflow-hidden relative">
								<img
									src={proyectos[3].img}
									alt={proyectos[3].img}
									className="w-full h-full object-cover absolute top-0 left-0 duration-150 group-hover:scale-110"
								/>
							</div>
							<Link to={constants.proyectosLink}>
								<div className="bg-white absolute right-0 bottom-0 z-10 size-16 2xl:size-18 pt-3 pl-3">
									<div className="bg-blue-revowall duration-150 group-hover:bg-green-revowall h-full text-white flex items-center justify-center p-3">
										<Flecha />
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 md:max-xl:px-[8.3%] xl:py-16 text-black-revowall flex w-full">
				<div className="flex w-full flex-col xl:flex-row gap-5 xl:gap-0 items-center">
					<div className="flex flex-col w-full xl:w-5/12 gap-6 px-4 xl:pl-[8.3%]">
						<h2 className="text-[28px] md:text-[40px] 2xl:text-[45px] font-bold text-center xl:text-left leading-8 md:leading-10 xl:leading-12 text-balance">
							Lo que opinan
							<span className="text-green-revowall"> nuestros clientes</span>
						</h2>
						<div className="flex w-full xl:w-1/4 justify-center gap-5 xl:gap-0 xl:justify-between">
							<div className="xl:w-3/7 cursor-pointer flex items-center">
								<button
									type="button"
									className="size-12 2xl:size-20 testimony-prev-button cursor-pointer hover:scale-110 duration-150"
								>
									<FlechaLeft />
								</button>
							</div>
							<div className="xl:w-3/7 cursor-pointer flex items-center">
								<button
									type="button"
									className="size-12 2xl:size-20 testimony-next-button cursor-pointer hover:scale-110 duration-150"
								>
									<FlechaRight />
								</button>
							</div>
						</div>
					</div>
					<div className="w-full px-4 xl:px-0 xl:w-1/2 flex gap-5">
						<Swiper
							slidesPerView={1}
							spaceBetween={20}
							loop={true}
							breakpoints={{
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
								1536: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
							}}
							modules={[Navigation]}
							navigation={{
								nextEl: ".testimony-next-button",
								prevEl: ".testimony-prev-button",
							}}
							className="relative w-full"
						>
							{testimonios.map((tes, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<SwiperSlide className="pt-3" key={index}>
									<Testimonio
										testimonio={tes}
										alternateColor={index % 2 === 0}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
}

export default IndexView;
