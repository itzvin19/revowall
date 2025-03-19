type MotivoCardProps = {
	img: React.ReactNode;
	resaltedText: string;
	secondaryText: string;
};

function MotivoCard({
	img,
	resaltedText,
	secondaryText,
}: MotivoCardProps) {
	return (
		<div className="w-full flex bg-gray-revowall text-[15px] md:text-lg 2xl:text-xl group">
			<div className={"w-1/48 group-hover:bg-green-revowall bg-blue-revowall duration-150"} />
			<div className="flex items-center gap-6 md:gap-8 xl:gap-12 px-4 xl:px-10 py-5 xl:py-6">
				<div className="size-12 2xl:size-15 text-blue-revowall group-hover:text-green-revowall duration-150">
					{img}
				</div>
				<span className="text-balance">
					<b>{resaltedText}</b> <br />
					{secondaryText}
				</span>
			</div>
		</div>
	);
}

export default MotivoCard;
