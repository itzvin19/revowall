type ServicioCardProps = {
	coverImg: string;
	altImg: string;
	icon: string;
	servicios: string[];
	servicioTitle: string;
	alternate?: boolean;
};

function ServicioCard({
	coverImg,
	icon,
	altImg,
	servicios,
	servicioTitle,
	alternate,
}: ServicioCardProps) {
	return (
		<div
			className={`w-full flex  ${alternate ? "bg-blue-revowall text-white" : "bg-white"} group`}
		>
			<div className={`w-full flex flex-col-reverse  relative ${alternate?"md:flex-row-reverse":"md:flex-row"}`}>
				<div
					className={`w-full md:w-1/2 xl:w-3/5 px-6 xl:px-14 py-8 2xl:px-20 xl:py-10 flex flex-col gap-6 2xl:gap-8 border-t-8 border-green-revowall md:border-t-0 ${alternate ? "border-l-0 md:border-l-8" : "border-r-0 md:border-r-8"}`}
				>
					<img
						src={icon}
						alt={`${servicioTitle} Icon`}
						className="size-18 hidden xl:block"
					/>
					<div className="flex flex-col gap-4 2xl:gap-5">
						<span
							className={`font-bold 2xl:text-xl ${alternate ? "text-green-revowall" : "text-blue-revowall"}`}
						>
							{servicioTitle}
						</span>
						<ul className="flex flex-col gap-3 2xl:text-xl">
							{servicios.map((x, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={index} className="flex items-center gap-4">
									<img
										src="/icons/Check.svg"
										alt="Check icon"
										className="size-4"
									/>
									<span className="text-balance leading-relaxed">{x}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="w-full md:w-1/2 xl:w-2/5 h-[150px] md:h-auto overflow-hidden">
					<img
						src={coverImg}
						alt={altImg}
						className="object-cover h-full w-full object-top group-hover:scale-110 duration-150"
					/>
				</div>
			</div>
		</div>
	);
}

export default ServicioCard;
