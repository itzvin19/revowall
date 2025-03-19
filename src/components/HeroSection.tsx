import { Link } from "react-router";
import { constants } from "../data/constant";
import NavLinkHover from "./NavLinkHover";

type HeroSectionProps = {
	showLinks: boolean;
	backgroundImg: string;
	imgOver?: string;
	extraHeight?: boolean;
};

function HeroSection({
	showLinks,
	backgroundImg,
	imgOver,
	extraHeight,
}: HeroSectionProps) {
	return (
		<section
			className="hero w-full px-4 md:px-[8.33%]"
			style={{
				backgroundImage: `var(--gradient-bg-hero), url(${backgroundImg})`,
				backgroundSize: "cover",
			}}
		>
			<div
				className={`w-full relative ${imgOver && "pt-20"} ${extraHeight ? "xl:min-h-[550px]" : "min-h-[400px] xl:min-h-[480px] 2xl:min-h-[530px]"} ${showLinks ? "xl:pt-10" : ""} xl:py-8 flex flex-col gap-8 xl:gap-0`}
			>
				<ul className="hidden xl:flex text-white w-3/5 justify-between">
					<li>
						<NavLinkHover to={"/"}>Inicio</NavLinkHover>
					</li>
					<li>
						<NavLinkHover to={constants.nosotrosLink}>Nosotros</NavLinkHover>
					</li>
					<li>
						<NavLinkHover to={constants.serviciosLink}>Servicios</NavLinkHover>
					</li>
					<li>
						<NavLinkHover to={constants.proyectosLink}>Proyectos</NavLinkHover>
					</li>
					<li>
						<NavLinkHover to={constants.contactoLink}>Contáctanos</NavLinkHover>
					</li>
				</ul>
				<div
					className={`w-full xl:w-5/8 flex flex-col gap-10 2xl:gap-12 h-full ${extraHeight ? "pt-30" : "justify-center"} flex-grow`}
				>
					<div className="flex flex-col gap-3 2xl:gap-4 w-full ">
						<h2 className="text-[28px] md:text-[40px] 2xl:text-[45px] font-bold text-center xl:text-left md:text-balance text-white leading-8 md:leading-12">
							Transformamos tus espacios
							<br /> con
							<span className="text-green-revowall"> calidad y precisión</span>
						</h2>
						<h1 className="text-[22px] md:text-3xl 2xl:text-[35px] italic font-semibold text-white text-center xl:text-left">
							Expertos en Drywall Americano
						</h1>
					</div>
					{showLinks && (
						<div className="text-white w-full xl:w-3/5 flex gap-5">
							<Link
								to={constants.contactoLink}
								className="md:text-xl 2xl:text-2xl duration-150 hover:bg-green-hover-light bg-green-revowall flex w-1/2 py-2 xl:py-1 2xl:py-2 font-bold md:font-normal justify-center items-center"
							>
								Contáctanos
							</Link>
							<Link
								className="md:text-xl  2xl:text-2xl border-2 flex py-2 xl:py-1 2xl:py-2 duration-150 hover:bg-green-hover-light border-green-revowall font-bold md:font-normal w-1/2 justify-center items-center"
								to={constants.nosotrosLink}
							>
								Nosotros
							</Link>
						</div>
					)}
				</div>
				{imgOver ? (
					<div className="w-full xl:w-2/5 h-full relative xl:absolute right-0 bottom-0 pt-4 flex justify-center xl:justify-end">
						<img
							src={imgOver}
							alt="Revowall"
							className="h-full w-full md:w-2/3 xl:w-full object-contain object-right"
						/>
					</div>
				) : null}
			</div>
		</section>
	);
}

export default HeroSection;
