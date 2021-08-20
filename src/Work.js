import React, { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./Work.css";
import Card from "./MyWorkCard";
// import WorkContents from "./workcontents/WorkContents.json";

function Work() {
	const workType = useRef(null);
	const [Works, setWorks] = useState([
		{
			id: 1,
			coverImage: "/images/ourbooks.png", // public에서만 상대경로 적용가능, src에 저장한 이미지는 import 해야함
			year: 2021,
			title: "OURBOOKS - 당신의 독서도우미",
			summary:
				"도서 정보검색, 도서 카테고리별 종합등수, 사용자별 도서 추천 등의 기능을 제공하는 도서 이용지원 서비스 입니다.",
			usedTechStack: ["React"],
			link: "https://ourbooks-it.herokuapp.com/",
		},
		{
			id: 2,
			coverImage: "/images/irfy.jpg",
			year: 2021,
			title: "IRFY : I'm Ready For You",
			summary:
				"직장인을 위한 멘탈케어 솔루션입니다. 커뮤니티, 위로글귀, 공감컨텐츠 등을 제공하며 직장인들의 스트레스 해소를 돕습니다.",
			usedTechStack: ["Flutter ", "Firebase"],
			link: "https://github.com/minsung521/IRFY",
		},
		{
			id: 3,
			coverImage: "/images/noimg.png",
			year: 2021,
			title: "It's soccer time",
			summary:
				"해외축구를 보면서 생기는 불편한 점들을 해소하기 위한 서비스 입니다.",
			usedTechStack: ["Flutter ", "Firebase ", "Flask"],
			link: "https://github.com/minsung521/It-s_soccer_time",
		},
	]);

	useEffect(() => {
		const typed = new Typed(workType.current, {
			strings: ["Introducing my works!"], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
			loop: false,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="Work">
			<Menu />
			<div className="Work-contents">
				<div>
					<span className="enter-text">❯ </span>
					<span ref={workType} className="title"></span>
				</div>
				<div className="Work-cards">
					{Works.map(
						(work) => (
							<Card
								key={work.id}
								id={work.id}
								coverImage={work.coverImage}
								year={work.year}
								title={work.title}
								summary={work.summary}
								usedTechStack={work.usedTechStack}
								link={work.link}
							/>
						)
						// console.log(work)
					)}
				</div>
			</div>
		</div>
	);
}

export default Work;
