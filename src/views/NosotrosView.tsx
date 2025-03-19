import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import { constants } from "../data/constant";
import { Helmet } from "react-helmet-async";

function NosotrosView() {
	return (
		<>
			<Helmet>
				<title>Nosotros | Revowall</title>
				<meta
					name="description"
					content="RevoWall: un equipo de expertos en Drywall Americano. Con años de experiencia, nos dedicamos a ofrecer soluciones personalizadas y resultados impecables. Descubre quiénes somos"
				/>
			</Helmet>
			<HeroSection
				backgroundImg="/img/nosotros/Portada.webp"
				showLinks={false}
			/>
			<section className="md:px-[8.33%] xl:bg-gray-revowall text-black-revowall xl:pb-16 xl:text-lg">
				<div
					className="w-full px-4 md:px-0 xl:pl-[10%] py-16 xl:py-20 flex flex-col gap-5 pb-32 md:max-xl:pb-0 xl:gap-10 bg-white nosotros"
					style={{
						backgroundImage:
							"var(--gradient-bg-nosotros), url(/img/index/Cotizacion.webp)",
					}}
				>
					<h2 className="text-[28px] md:text-[40px] 2xl:text-[45px] font-bold leading-12">
						Sobre{" "}
						<span className="hidden xl:inline">
							<br />
						</span>
						<span className="text-blue-revowall">Revo</span>
						<span className="text-green-revowall">Wall</span>
					</h2>
					<p className="text-sm md:text-lg 2xl:text-xl w-full xl:w-2/5 text-balance leading-relaxed">
						Somos un equipo <b>especializado en drywall americano,</b>{" "}
						comprometidos en ofrecer acabados modernos y funcionales. Creemos en
						la calidad, la confianza y en el acompañamiento cercano para hacer
						realidad tus ideas.
					</p>
					<Link to={constants.contactoLink} className="w-fit">
						<div className="text-white font-bold md:text-xl 2xl:text-2xl bg-green-revowall duration-150 hover:bg-blue-revowall py-2 px-4 2xl:px-5 2xl:py-3">
							Contáctanos
						</div>
					</Link>
				</div>
			</section>
			<section className="px-4 md:px-[8.33%] text-black-revowall py-16 xl:py-24 xl:text-lg relative">
				<div className="flex flex-col xl:flex-row justify-between">
					<div className="hidden xl:block w-[28%] 2xl:w-[20%] absolute bottom-0 left-1/2 -translate-x-1/2">
						<img
							src="/img/nosotros/misionvision.webp"
							alt="RevoWall Identidad"
							className="w-full object-contain"
						/>
					</div>
					<div className="w-full xl:w-1/3 flex flex-col gap-5 xl:gap-20">
						<div className="flex flex-col gap-1 xl:gap-4">
							<span className="text-[28px] 2xl:text-[31px] font-bold">
								Nuestra <span className="text-green-revowall">Visión</span>
							</span>
							<p className="text-balance md:text-xl leading-relaxed">
								Ser referentes en drywall en todo el Perú con un servicio de
								atención personalizada
							</p>
						</div>
						<div className="flex flex-col gap-1 xl:gap-4">
							<span className="text-[28px] 2xl:text-[31px] font-bold">
								Nuestra <span className="text-green-revowall">Misión</span>
							</span>
							<p className="text-balance md:text-xl leading-relaxed">
								Ser referentes en drywall en todo el Perú con un servicio de
								atención personalizada
							</p>
						</div>
					</div>
					<div className="w-full xl:w-1/3 flex items-center mt-5 xl:mt-0 xl:justify-end">
						<div className="flex flex-col gap-4">
							<span className="text-[28px] 2xl:text-[31px] font-bold">
								Nuestros <span className="text-green-revowall">Valores</span>
							</span>
							<ul className="flex gap-x-10 gap-y-4 xl:gap-4 flex-wrap justify-center xl:justify-start xl:flex-nowrap xl:flex-col">
								<li className="flex items-center md:text-lg gap-3">
									<div className="size-4 flex items-center justify-center">
										<img src="/icons/Check.svg" alt="Check icon" />
									</div>
									<span>Profesionalismo</span>
								</li>
								<li className="flex items-center gap-3 md:max-xl:text-lg">
									<div className="size-4 flex items-center justify-center">
										<img src="/icons/Check.svg" alt="Check icon" />
									</div>
									<span>Confianza</span>
								</li>
								<li className="flex items-center gap-3 md:max-xl:text-lg">
									<div className="size-4 flex items-center justify-center">
										<img src="/icons/Check.svg" alt="Check icon" />
									</div>
									<span>Cercanía en cada cliente</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section
				className="px-4 md:px-[8.33%] bg-blue-revowall py-14 pb-62 md:pb-100 xl:py-24 text-white xl:text-lg equipo"
				style={{
					backgroundImage: `var(--gradient-bg-equipo), url('/img/nosotros/NuestroEquipo.webp')`,
				}}
			>
				<div className="flex flex-col w-ful xl:w-2/5 gap-8">
					<h2 className="text-[28px] md:text-[40px] font-bold">
						Nuestro <span className="text-green-revowall">equipo</span>
					</h2>
					<p className="text-balance leading-relaxed md:text-xl">
						Contamos con un equipo de especialistas en drywall y acabados que
						garantizan resultados de alta calidad. Cada uno de nuestros
						profesionales está comprometido con brindarte una
						<b> atención cercana y personalizada.</b>
					</p>
				</div>
			</section>
		</>
	);
}

export default NosotrosView;
