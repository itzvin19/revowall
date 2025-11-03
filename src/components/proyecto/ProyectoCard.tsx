import ProyectoSeparator from "../../icons/ProyectoSeparator";
import type { Proyecto } from "../../types";

type ProyectoCardProps = {
	proyecto: Proyecto;
	alternate: boolean;
};

function ProyectoCard({ proyecto, alternate }: ProyectoCardProps) {
	return (
		<div
			className={`flex w-full flex-col ${alternate ? "xl:flex-row-reverse" : "xl:flex-row"}`}
		>
			<div
				className={`w-full h-[240px] xl:h-auto shadow-[0_1px_10px_2px_rgba(0,0,0,0.7)] ${alternate ? "xl:ml-5" : "xl:mr-5"} relative flex items-center`}
			>
				<img
					src={proyecto.img}
					alt={`${proyecto.title} Revowall`}
					className="object-cover inset-0 w-full h-full absolute"
				/>
				<div className="w-12 absolute xl:hidden top-0 -right-2 text-green-revowall rotate-270">
					<ProyectoSeparator />
				</div>
			</div>
			<div className="w-7/8 xl:w-2/5 2xl:w-[45%] m-auto -top-12 xl:top-0 flex flex-col gap-5 bg-gray-revowall p-5 xl:p-10 2xl:px-14 relative">
				<div className="w-12 hidden xl:absolute bottom-0 right-0 text-green-revowall">
					<ProyectoSeparator />
				</div>
				<p className="font-bold text-blue-revowall text-balance">{proyecto.title}</p>
				<ul className="flex flex-col gap-3">
					{proyecto.caracteristicas.map((x) => (
						<li key={x} className="flex items-center gap-4">
							<img src="/icons/Check.svg" alt="Check Icon" className="size-5" />
							<p className="text-balance leading-relaxed">{x}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ProyectoCard;
