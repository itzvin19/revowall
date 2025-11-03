import ProyectoSeparator from "../../icons/ProyectoSeparator";

interface FlipCardBackProps {
	title?: string;
	description?: string;
}

function FlipCardBack({ title, description }: FlipCardBackProps) {
	return (
		<div className="w-full h-full bg-blue-revowall flex flex-col p-8 justify-between relative">
			<div className="w-12 absolute top-1 -right-1 text-white rotate-270">
				<ProyectoSeparator />
			</div>
			<div className="w-1/3">
				<img
					src="/icons/logo-white.svg"
					alt="Logo RevoWall white"
					className="w-full h-full"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<span className="font-bold text-green-revowall text-xl 2xl:text-2xl">
					{title || "Nombre de Proyecto"}
				</span>
				<p className="text-white text-balance leading-relaxed text-[16px] 2xl:text-xl">
					{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
				</p>
			</div>
		</div>
	);
}

export default FlipCardBack;
