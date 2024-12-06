import Tile from "./Tile";
import Thumb1 from "../images/show-thumb/thumb1.png";
import Thumb2 from "../images/show-thumb/thumb2.png";
import Thumb3 from "../images/show-thumb/thumb3.png";
import Thumb4 from "../images/show-thumb/thumb4.avif";
import Thumb5 from "../images/show-thumb/thumb5.png";
import Thumb6 from "../images/show-thumb/thumb6.png";

const Tiles = () => {
  return (
    <div className="mt-10">
      <Tile
        image={Thumb6}
        title={"Paradise Barbershop"}
        show="show5"
        description={
          "Website for barber to schedule client booking to come for a haircut and hair related services."
        }
      />
      <Tile
        image={Thumb1}
        title={"Webmakers Studio"}
        show="show0"
        description={
          "We help ambitious founders turn ideas into working products, fast. Our streamlined design and development process gets your startup from concept to launch in 2 to 4 weeks."
        }
      />
      <Tile
        image={Thumb2}
        title={"Commonstore"}
        show="show1"
        description={
          "An AI-powered tool that transforms simple text descriptions into fully functional e-commerce stores, streamlining online business setup through natural language processing."
        }
      />
      <Tile
        image={Thumb3}
        title={"LogoArena"}
        show="show2"
        description={
          "Designed a crowdsourcing platform connecting businesses with global designers, delivering 50+ unique logo concepts per contest at competitive prices."
        }
      />
      <Tile
        image={Thumb4}
        title={"Superpoll"}
        show="show3"
        description={
          "Crafted a modern polling application that transforms traditional surveys into an intuitive experience, featuring a sleek interface and seamless user interactions."
        }
      />
      <Tile
        image={Thumb5}
        title={"Webmakers Studio - Charts UI Kit"}
        show="show4"
        description={
          "Developed a comprehensive charting library that empowers developers to create stunning, interactive data visualizations with minimal code, streamlining web application development."
        }
      />
    </div>
  );
};

export default Tiles;
