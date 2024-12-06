import webmakers1 from "../images/webmakers-studio/webmakers1.png";
import webmakers2 from "../images/webmakers-studio/webmakers2.png";
import webmakers3 from "../images/webmakers-studio/webmakers3.png";

import commonStore1 from "../images/commonStore/commonstore-1.png";
import commonStore2 from "../images/commonStore/commonstore-2.png";
import commonStore3 from "../images/commonStore/commonstore-3.png";
import commonStore4 from "../images/commonStore/commonstore-4.png";
import commonStore5 from "../images/commonStore/commonstore-5.png";

import LogoArena1 from "../images/logoArena/logoarena-1.png";
import LogoArena2 from "../images/logoArena/logoarena-2.png";
import LogoArena3 from "../images/logoArena/logoarena-3.png";
import LogoArena4 from "../images/logoArena/logoarena-4.png";
import LogoArena5 from "../images/logoArena/logoarena-5.png";
import LogoArena6 from "../images/logoArena/logoarena-6.png";
import LogoArena7 from "../images/logoArena/logoarena-7.png";
import LogoArena8 from "../images/logoArena/logoarena-8.png";

import SuperPoll1 from "../images/superpoll/superpoll-1.avif";
import SuperPoll2 from "../images/superpoll/superpoll-2.png";
import SuperPoll3 from "../images/superpoll/superpoll-3.png";
import SuperPoll4 from "../images/superpoll/superpoll-4.jpeg";

import chartsUI1 from "../images/chartsUI/webmakers-chart-1.png";
import chartsUI2 from "../images/chartsUI/webmakers-chart-2.png";
import chartsUI3 from "../images/chartsUI/webmakers-chart-3.png";
import chartsUI4 from "../images/chartsUI/webmakers-chart-4.png";
import chartsUI5 from "../images/chartsUI/webmakers-chart-5.png";

import paradiseBarbershopHome from '../images/paradise-barbershop/home.png';
import paradiseBarbershopService from '../images/paradise-barbershop/services.png';

const ShowCase = ({
  itemNumber = 0,
}: {
  itemNumber: 0 | 1 | 2 | 3 | 4 | 5;
}) => {
  const SHOWCASES = [
    {
      title: "Webmakers Studio",
      images: [webmakers1, webmakers2, webmakers3],
      description:
        "We help ambitious founders turn ideas into working products, fast. Our streamlined design and development process gets your startup from concept to launch in 2 to 4 weeks.",
      website: "https://www.webmakers.studio/",
    },

    {
      title: "Commonstore",
      images: [
        commonStore1,
        commonStore2,
        commonStore3,
        commonStore4,
        commonStore5,
      ],
      website: "https://mycommon.store/",
      description:
        "An AI-powered tool that transforms simple text descriptions into fully functional e-commerce stores, streamlining online business setup through natural language processing.",
    },
    {
      title: "LogoArena",
      images: [
        LogoArena1,
        LogoArena2,
        LogoArena3,
        LogoArena4,
        LogoArena5,
        LogoArena6,
        LogoArena7,
        LogoArena8,
      ],
      website: "https://www.logoarena.com/",
      description:
        "Designed a crowdsourcing platform connecting businesses with global designers, delivering 50+ unique logo concepts per contest at competitive prices.",
    },
    {
      title: "Superpoll",
      images: [SuperPoll1, SuperPoll2, SuperPoll3, SuperPoll4],
      website: "https://www.producthunt.com/products/superpoll",
      description:
        "Crafted a modern polling application that transforms traditional surveys into an intuitive experience, featuring a sleek interface and seamless user interactions.",
    },
    {
      title: "Webmakers Studio - Charts UI Kit",
      images: [chartsUI1, chartsUI2, chartsUI3, chartsUI4, chartsUI5],
      website: "https://chart.webmakers.studio/",
      description:
        "Developed a comprehensive charting library that empowers developers to create stunning, interactive data visualizations with minimal code, streamlining web application development.",
    },
    {
      title: "Paradise Barbershop",
      images: [paradiseBarbershopHome, paradiseBarbershopService],
      website: 'https://www.paradisebarbershop.ca/',
      description: 'Website for barber to schedule client booking to come for a haircut and hair related services.'
    }
  ];
  const title = SHOWCASES[itemNumber].title;
  const description = SHOWCASES[itemNumber].description;
  const images = SHOWCASES[itemNumber].images;
  const link = SHOWCASES[itemNumber].website;

  return (
    <div className="mb-16">
      <div className="flex w-full justify-between">
        <h3 className="text-4xl font-bold">{title}</h3>
        <a
          className="bg-black text-white border px-4 py-2 font-semibold"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </div>
      <div className="font-normal w-8/12 py-4">{description}</div>

      <div className=" my-4">
        <p className="font-semibold text-2xl mb-2">Technologies</p>
        <span className="border p-1 mr-2 font-semibold">ReactJS</span>
        <span className="border p-1 font-semibold">TailwindCSS</span>
      </div>
      {/* Screenshots */}
      {images.map((image, i) => {
        return (
          <div key={i} className="border drop-shadow-sm my-4">
            <img src={image} alt="show1" />
          </div>
        );
      })}
    </div>
  );
};

export default ShowCase;
