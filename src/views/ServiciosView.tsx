import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import ServicioCard from "../components/servicios/ServicioCard";
import { constants } from "../data/constant";

function ServiciosView() {
	return (
		<>
			<HeroSection
				backgroundImg="/img/servicios/ServicesCover.webp"
				showLinks={true}
			/>
			<section className="px-4 md:px-[8.33%] bg-gray-revowall flex flex-col text-black-revowall py-16 2xl:py-20 md:text-lg gap-8">
				<h2 className="text-[28px] md:text-[40px] 2xl:text-[45px] font-bold text-center">
					Nuestros <span className="text-green-revowall">servicios</span>
				</h2>

				<div className="flex flex-col gap-6 md:gap-8">
					<ServicioCard
						icon="/icons/Construccion.svg"
						coverImg="/img/servicios/Drywall Americano.webp"
						altImg="Drywall americano RevoWall"
						servicioTitle="Contrucción"
						servicios={[
							"Diseño y ejecución de obras civiles",
							"Instalación de drywall y techos acústicos",
							"Suministro e instalación de materiales de construcción",
							"Gestión legal y permisos",
						]}
					/>
					<ServicioCard
						icon="/icons/Acabados.svg"
						coverImg="/img/servicios/Acabados.webp"
						altImg="Drywall americano RevoWall"
						servicioTitle="Acabados"
						alternate={true}
						servicios={[
							"Pintura interior y exterior",
							"Carpintería y ebanistería",
							"Instalación de vidriería",
							"Mantenimiento de mobiliario",
						]}
					/>
					<ServicioCard
						icon="/icons/Servicios Generales.svg"
						coverImg="/img/servicios/Servicios Generales.webp"
						altImg="Drywall americano RevoWall"
						servicioTitle="Servicios Generales"
						servicios={[
							"Gasfitería",
							"Instalación eléctrica y cableado estructurado",
							"Climatización (instalación y mantenimiento de aire acondicionado)",
							"Redes de gas natural y GLP",
							"Sistemas de seguridad",
						]}
					/>
				</div>
			</section>
			<section className="px-4 md:px-[8.33%] py-12 xl:py-16 text-blue-revowall flex flex-col md:flex-row items-center justify-between gap-7 xl:gap-0">
				<p className="text-[20px] xl:text-[28px] 2xl:text-[31px] w-full md:w-[62%] text-center md:text-left">
					Nos aseguramos de adaptar cada proyecto a tus necesidades, brindando
					<span className="font-bold text-green-revowall">
						{" "}
						soluciones funcionales y de calidad.
					</span>
				</p>
				<Link
					to={constants.contactoLink}
					className="w-fit xl:w-[18%] bg-green-revowall hover:bg-blue-revowall duration-150 flex justify-center text-white text-xl 2xl:text-2xl px-2 md:px-8 py-1 md:py-3 2xl:py-5"
				>
					Contáctanos
				</Link>
			</section>
		</>
	);
}

export default ServiciosView;
