import type { Testimonio as TestimonioT } from "../../types";

type TestimonioProps = {
	testimonio: TestimonioT;
	alternateColor: boolean;
};

function Testimonio({ testimonio, alternateColor }: TestimonioProps) {
	return (
		<div className="bg-gray-revowall shadow-md xl:shadow-none w-full overflow-y-visible rounded-xl flex px-8 py-10 xl:py-20 relative flex-col gap-3 xl:gap-6">
			<div className="absolute -top-3 left-8 size-12 xl:size-16">
				<img
					src={
						alternateColor
							? "/icons/IconTestimonio2.svg"
							: "/icons/IconTestimonio1.svg"
					}
					alt=""
					className="h-full w-full"
				/>
			</div>
			<div className="flex flex-col">
				<span className="font-bold text-lg">{testimonio.nombre}</span>
				<span className="text-lg">{testimonio.trabajo}</span>
			</div>
			<p className="text-sm xl:text-[16px] leading-relaxed text-balance max-w-prose">
				{testimonio.testimonio}
			</p>
		</div>
	);
}

export default Testimonio;
