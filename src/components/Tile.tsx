import React from "react";
import { Link } from "react-router";

const Tile = ({
  image,
  title,
  description,
  show = "show0"
}: {
  image: any;
  title: any;
  description: any;
  show: string
}) => {
  return (
    <div className="border  w-full px-2 sm:px-8 py-8 drop-shadow-md my-8">
      <div className="flex flex-col sm:flex-row">
        <img alt="showcase" src={image} className="w-full sm:w-6/12"></img>
        <div className="px-4 sm:px-8 w-full sm:w-6/12">
          <p className="text-2xl font-semibold py-4">{title}</p>
          <p className="text-md text-slate-500">{description}</p>
          <button className="bg-black text-white border px-4 py-2 mt-8 font-semibold">
            <Link to={show}>View Project</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tile;
