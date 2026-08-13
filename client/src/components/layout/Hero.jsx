import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cards, videos } from "../../data/content";

export default function Hero() {
	const navigate = useNavigate();

	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const videoARef = useRef(null);
	const videoBRef = useRef(null);

	const [activeVideo, setActiveVideo] = useState(0);
	const [isVideoAActive, setIsVideoAActive] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			leftRef.current?.classList.add("visible");
			setTimeout(() => rightRef.current?.classList.add("visible"), 200);
		}, 150);

		return () => clearTimeout(timer);
	}, []);

	const handleVideoEnd = () => {
		const nextVideo = (activeVideo + 1) % videos.length;

		if (isVideoAActive) {
			videoBRef.current.src = videos[nextVideo];
			videoBRef.current.play();
		} else {
			videoARef.current.src = videos[nextVideo];
			videoARef.current.play();
		}

		setActiveVideo(nextVideo);
		setIsVideoAActive((prev) => !prev);
	};

	return (
		<section
			id="home"
			className="relative grid min-h-[calc(100vh-5rem)] overflow-hidden bg-green-deep pt-20 md:grid-cols-2"
		>
			{/* VIDEO BACKGROUND */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				<video
					ref={videoARef}
					autoPlay
					muted
					playsInline
					preload="auto"
					onEnded={handleVideoEnd}
					src={videos[0]}
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
						isVideoAActive ? "opacity-100" : "opacity-0"
					}`}
				/>

				<video
					ref={videoBRef}
					autoPlay
					muted
					playsInline
					preload="auto"
					onEnded={handleVideoEnd}
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
						!isVideoAActive ? "opacity-100" : "opacity-0"
					}`}
				/>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 z-[1] bg-black/70" />

			{/* Ambient glow */}
			<div className="pointer-events-none absolute inset-0 z-[2]">
				<div className="absolute top-1/2 right-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
				<div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-green-mid/10 blur-3xl" />
			</div>

			{/* Kente border */}
			<div className="kente-bar absolute bottom-0 left-0 right-0 z-[3] h-1.5" />

			{/* LEFT */}
			<div
				ref={leftRef}
				className="reveal relative z-[5] flex flex-col justify-center px-6 py-10 sm:px-8 md:px-12 md:py-16 lg:px-20 lg:py-20"
			>
				<span className="section-label mb-5">
					African Research Institute
				</span>

				<h1 className="mb-6 font-sans text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
					Victoria Falls Regional Institute
					<br />
					<em className="not-italic font-light text-gold-light text-3xl sm:text-4xl lg:text-5xl">
						for Strategic Studies
					</em>
				</h1>

				<p className="mb-8 max-w-xl text-sm leading-8 text-white/80 md:text-lg">
					Advancing African-led institutions through capacity
					building, research, and dialogue that connects global
					policy making with strategic transformation.
				</p>

				<div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
					<button
						onClick={() => navigate("/service-inquiry")}
						className="btn-primary text-green-deep"
					>
						Request Our Services
					</button>

					<button
						onClick={() => navigate("/programs")}
						className="btn-outline"
					>
						Explore Programs
					</button>
				</div>
			</div>

			{/* RIGHT */}
			<div
				ref={rightRef}
				className="reveal relative z-10 flex items-center justify-center px-6 pb-12 pt-4 sm:px-8 md:justify-end md:px-10 md:py-16 lg:px-16"
			>
				<div className="grid w-full max-w-[380px] gap-4 lg:max-w-[430px] xl:max-w-[500px]">
					{cards.map(({ icon: Icon, title, desc }) => (
						<div
							key={title}
							className="rounded-sm border border-gold/30 bg-white/10 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50 hover:bg-gold/10"
						>
							<div className="mb-2 flex items-center gap-3">
								<Icon className="shrink-0 text-xl text-gold lg:text-2xl" />
								<h4 className="card-title text-[22px] text-white">
									{title}
								</h4>
							</div>

							<p className="text-sm leading-7 text-white/65">
								{desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}