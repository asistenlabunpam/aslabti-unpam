'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	images: Image[];
}

const imageConfigs = [
	{ top: '0', left: '0', width: '25vw', height: '25vh', zIndex: 10 },
	{ top: '-30vh', left: '5vw', width: '35vw', height: '30vh', zIndex: 1 },
	{ top: '-10vh', left: '-25vw', width: '20vw', height: '45vh', zIndex: 2 },
	{ top: '0', left: '27.5vw', width: '25vw', height: '25vh', zIndex: 3 },
	{ top: '27.5vh', left: '5vw', width: '20vw', height: '25vh', zIndex: 4 },
	{ top: '27.5vh', left: '-22.5vw', width: '30vw', height: '25vh', zIndex: 5 },
	{ top: '22.5vh', left: '25vw', width: '15vw', height: '15vh', zIndex: 6 },
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4], { clamp: true });
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5], { clamp: true });
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6], { clamp: true });
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8], { clamp: true });
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9], { clamp: true });

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[300dvh]">
			<div className="sticky top-0 h-dvh w-full overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];
					const config = imageConfigs[index % imageConfigs.length];

					return (
						<motion.div
							key={index}
							style={{
								scale,
								zIndex: config.zIndex,
								willChange: 'transform',
							}}
							className="absolute top-0 left-0 flex size-full items-center justify-center pointer-events-none transform-gpu"
						>
							<div
								style={{
									position: 'relative',
									top: config.top,
									left: config.left,
									width: config.width,
									height: config.height,
								}}
								className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl shadow-black/10 pointer-events-auto"
							>
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="size-full object-cover select-none"
									loading="lazy"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
