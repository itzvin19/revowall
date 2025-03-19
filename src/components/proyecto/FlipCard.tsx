import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

type FlipCardProps = {
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
	className?: string;
};

const FlipCard = ({
	frontContent,
	backContent,
	className = "",
}: FlipCardProps) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const { width } = useWindowSize();

	// Breakpoint xl de Tailwind (1280px)
	const isXlScreen = width >= 1280;

	const handleFlip = () => {
		// Solo hacer toggle al hacer clic si NO estamos en pantalla xl
		if (!isXlScreen) {
			setIsFlipped(!isFlipped);
		}
	};

	return (
		<div
			className={`w-full aspect-[2/1.2] md:aspect-[1/0.9] [perspective:1000px] ${className} ${!isXlScreen ? "cursor-pointer" : ""}`}
			onClick={handleFlip}
			onKeyDown={(e) => {
				if (e.key === " " || e.key === "Enter") {
					handleFlip();
				}
			}}
		>
			<div
				className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 
        ${isFlipped && !isXlScreen ? "[transform:rotateY(180deg)]" : ""} 
        ${isXlScreen ? "hover:[transform:rotateY(180deg)]" : ""}`}
			>
				{/* Front face */}
				<div className="absolute w-full h-full [backface-visibility:hidden] shadow-lg flex items-center justify-center overflow-hidden">
					{frontContent}
				</div>

				{/* Back face */}
				<div className="absolute w-full h-full [backface-visibility:hidden] shadow-lg flex items-center justify-center [transform:rotateY(180deg)] overflow-hidden">
					{backContent}
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
