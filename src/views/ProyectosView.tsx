import { Swiper, SwiperSlide } from "swiper/react";
import HeroSection from "../components/HeroSection";
import ProyectoCard from "../components/proyecto/ProyectoCard";
import { proyectos } from "../data/proyectos";
import "swiper/swiper-bundle.css";
import FlechaLeft from "../icons/FlechaLeft";
import FlechaRight from "../icons/FlechaRight";
import { Navigation, Pagination } from "swiper/modules";
import FlipCardFront from "../components/proyecto/FlipCardFront";
import TrapecioImagen from "../icons/TrapecioImagen";
import { constants } from "../data/constant";
import Flecha from "../icons/Flecha";
import { Link } from "react-router";
import useWindowSize from "../hooks/useWindowSize";
import FlipCard from "../components/proyecto/FlipCard";
import FlipCardBack from "../components/proyecto/FlipCardBack";

function ProyectosView() {
	const { width } = useWindowSize();

	const cardsPerView = width < 768 ? 1 : 2;

	const groupedProyectos = [];
	const groupedCasosExitos = [];
	for (let i = 0; i < proyectos.length; i += cardsPerView) {
		groupedProyectos.push(proyectos.slice(i, i + cardsPerView));
	}

	return (
		<>
			<HeroSection
				showLinks={true}
				backgroundImg="/img/proyectos/ProyectosRevowall.webp"
			/>
			<section className="px-4 md:px-[8.33%] flex flex-col gap-8 xl:gap-0 text-black-revowall py-12 xl:py-16 xl:text-lg 2xl:text-xl">
				<h2 className="font-bold text-[28px] xl:text-[40px] 2xl:text-[45px] text-center">
					Nuestros <span className="text-green-revowall">trabajos</span>
				</h2>
				<div className="flex flex-col-reverse xl:flex-col xl:gap-5">
					<div className="flex gap-5 justify-center xl:justify-end">
						<button
							type="button"
							aria-label="Navegar a la izquierda"
							className="size-16 xl:size-14 2xl:size-18 cursor-pointer proyecto-prev hover:scale-110 duration-150"
						>
							<FlechaLeft />
						</button>
						<button
							type="button"
							aria-label="Navegar a la derecha"
							className="size-16 xl:size-14 2xl:size-18 cursor-pointer proyecto-next hover:scale-110 duration-150"
						>
							<FlechaRight />
						</button>
					</div>
					<Swiper
						spaceBetween={20}
						slidesPerView={1}
						loop={true}
						speed={700}
						modules={[Navigation]}
						navigation={{
							nextEl: ".proyecto-next",
							prevEl: ".proyecto-prev",
						}}
						draggable={false}
						className="w-full"
					>
						{groupedProyectos.map((grupo, index) => (
							<SwiperSlide
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="flex! flex-col gap-6 justify-center"
							>
								{grupo.map((proyecto, i) => (
									<ProyectoCard
										key={proyecto.img}
										proyecto={proyecto}
										alternate={(index * 2 + i) % 2 === 1}
									/>
								))}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			<section className="px-4 md:px-[8.33%] xl:px-[16%] text-white py-7 md:max-xl:py-10 xl:text-lg bg-green-revowall">
				<p className="text-[19.5px] md:text-[21.5px] xl:text-[25px] 2xl:text-[30px] text-center leading-relaxed">
					Cada espacio que transformamos es un testimonio <br />
					de nuestro{" "}
					<span className="bg-blue-revowall font-bold p-1">
						compromiso con la calidad y el buen servicio
					</span>
				</p>
			</section>
			<section className="px-4 md:px-[8.33%] text-black-revowall py-12 xl:py-16 2xl:py-20 text-lg flex flex-col gap-8 xl:gap-16">
				<h2 className="font-bold text-[28px] md:text-[40px] 2xl:text-[45px] text-center">
					Casos de <span className="text-green-revowall">éxito</span>
				</h2>
				{width > 1280 ? (
					<div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
						<FlipCard
							frontContent={<FlipCardFront />}
							backContent={<FlipCardBack />}
						/>
						<FlipCard
							frontContent={<FlipCardFront />}
							backContent={<FlipCardBack />}
						/>
						<FlipCard
							frontContent={<FlipCardFront />}
							backContent={<FlipCardBack />}
						/>
						<FlipCard
							frontContent={<FlipCardFront />}
							backContent={<FlipCardBack />}
						/>
						<FlipCard
							frontContent={<FlipCardFront />}
							backContent={<FlipCardBack />}
						/>
						<FlipCard
							frontContent={<FlipCardFront />}
							backContent={<FlipCardBack />}
						/>
					</div>
				) : (
					<Swiper
						spaceBetween={20}
						slidesPerView={1}
						loop={true}
						speed={700}
						modules={[Pagination]}
						pagination={{ clickable: true, el: ".pagination" }}
						className="w-full"
					>
						{groupedProyectos.map((grupo, index) => (
							<SwiperSlide
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="flex! gap-6 justify-center"
							>
								{grupo.map((_, i) => (
									<FlipCard
										frontContent={<FlipCardFront />}
										backContent={<FlipCardBack />}
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={i}
									/>
								))}
							</SwiperSlide>
						))}
						<div className="pagination flex gap-2 mt-6 justify-center" />
					</Swiper>
				)}
			</section>
			<section className="bg-blue-revowall flex justify-between items-center relative text-lg px-4 md:max-xl:px-[8.33%] py-3 md:py-8 xl:p-0">
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
							src="/img/proyectos/Cotizacion2.webp"
							alt="Solicitar cotización de Drywall"
							className="object-cover w-full h-full object-[50%_20%]"
						/>
					</div>
					<div className="w-1/8 scale-x-[-1] -scale-y-100 text-blue-revowall">
						<TrapecioImagen />
					</div>
				</div>
				<div className="w-full xl:w-2/3 flex items-center relative gap-4 xl:gap-0">
					<div className="text-white font-bold text-[18px] 2xl:text-[31px] text-balance justify-center md:text-[25px] w-1/2 xl:w-5/8 flex pl-3">
						<span className="text-center">
							<span className="text-green-revowall">Solicita una </span>
							 cotización gratis
						</span>
					</div>
					<div className="w-5/12 xl:w-3/8">
						<Link to={constants.contactoLink} className="flex w-full xl:w-2/3 group">
							<div className="text-blue-revowall group-hover:scale-110 duration-150 xl:text-black bg-white text-xl py-1 md:py-3 px-2 xl:px-8 w-full flex justify-between items-center md:max-xl:justify-center xl:justify-center md:max-xl:gap-6 xl:gap-6">
								<span className="text-[16px] 2xl:text-2xl duration-150 group-hover:text-blue-revowall">Contáctanos</span>
								<div className="h-5 w-5 rotate-[39deg] duration-150 group-hover:text-blue-revowall">
									<Flecha />
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default ProyectosView;
