import React, { Suspense, useRef, useEffect } from "react";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./About.css";
// import { Canvas, useFrame, useLoader } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import dimigo from "./dimigo.gltf";

// const Dimigo = () => {
// 	const ref = useRef(null);
// 	useFrame(() => (ref.current.rotation.y += 0.01));
// 	const gltf = useLoader(GLTFLoader, dimigo);
// 	return (
// 		<primitive ref={ref} object={gltf.scene} position={[0, -2, 0]}></primitive>
// 	);
// };

// const Box = () => {
// 	return (
// 		<mesh>
// 			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
// 			<meshStandardMaterial attach="material" transparent opacity={0.5} />
// 		</mesh>
// 	);
// };

const About = () => {
	const iam = useRef(null);
	useEffect(() => {
		const typed = new Typed(iam.current, {
			strings: ["Me,Myself and I"], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 120,
			backSpeed: 120,
			backDelay: 120,
			loop: false,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className="About">
			<Menu />
			<div className="About-contents">
				<header>
					<span className="enter-text">❯ </span>
					<span ref={iam} className="title"></span>
				</header>
				<main className="About-contents-main">
					<p className="About-article">
						<br />
						<br />
						저는 대한민국 안산의{" "}
						<a
							href="https://www.dimigo.hs.kr/"
							target="blank"
							className="dimigo"
						>
							한국디지털미디어고등학교
						</a>
						에 재학중인 고등학생입니다.
						<br />
						<br />
						상상하던 아이디어를 코드로 만들어내는 것을 즐기는 저는, 웹
						프로그래밍부터 인공지능까지 다양한 분야에 관심을 가지고 있습니다!
						<br />
						<br />
						어떤 경험이든 저에게 도움이 된다는 생각을 바탕으로 다양한 분야의
						일들에 도전하고 경험을 쌓아가고 있습니다.
						<br />
						<br />
					</p>
					<div className="About-detail">
						{/* <Canvas camera={{ position: [0, 0, 10] }}>
							<ambientLight intensity={0.5} />
							<spotLight intensity={0.8} position={[300, 300, 400]} />
							<Suspense fallback={<Box />}>{<Dimigo />}</Suspense>
						</Canvas>
						<footer style={{ textAlign: "right" }}>by. Alex</footer> */}
					</div>
				</main>
			</div>
		</div>
	);
};

export default About;
