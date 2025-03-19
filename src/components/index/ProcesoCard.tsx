type ProcesoCardProps = {
	index: string;
	img: string;
	title: string;
	subtitle: string;
};

function ProcesoCard({ index, img, title, subtitle }: ProcesoCardProps) {
	return (
		<div className="relative z-10">
			<div
				className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
				style={{
					backgroundImage: `url(${img})`,
				}}
			/>
			<div className="px-4 md:px-[10.6%] xl:px-[16.6%] py-16 md:py-20 bg-gradient-to-b from-[#022161] to-[#02216199] z-20 relative h-full duration-200 hover:bg-blue-revowall/75">
				<div className="flex flex-col gap-8">
					<span className="font-bold text-green-revowall text-[50px] 2xl:text-[58px]">
						{index}
					</span>
					<div className="flex flex-col gap-2 md:max-xl:text-xl 2xl:text-xl">
						<span className="font-bold">{title}</span>
						<p className="text-balance leading-6">{subtitle}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProcesoCard;
