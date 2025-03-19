function FlipCardFront() {
	return (
		<div
			className="w-full h-full bg-blue-revowall flex p-7 justify-center relative items-center"
			style={{
				backgroundImage:
					"linear-gradient(rgba(2, 33, 97, 0.7),rgba(2, 33, 97, 0.7)), url('/img/proyectos/casosExitoImg/2147694739.webp')",
				backgroundSize: "cover",
				objectPosition: "center",
			}}
		>
			<img src="/icons/TouchIcon.svg" alt="" className="size-12 absolute top-3 right-2 block xl:hidden" />
			<div className="w-3/4 flex justify-center">
				<img src="/icons/logo-white.svg" alt="Logo RevoWall white" />
			</div>
		</div>
	);
}

export default FlipCardFront;
