import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";

const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <>
      <div className="box">
        <div className="coverImage  ">
          <img src={cover} alt="" />
        </div>
        <div className="content">
          <h1> {name} </h1>
          <div className="flex items-center">
          <div>
          <div className="rating ro my-2">
            <div className="flex items-center">
            <div className="flex text-red-700 gap-1">
            <BsStarFill className="mr-5" />
            <BsStarFill className="mr-5" />
            <BsStarFill className="mr-5" />
            <BsStarFill className="mr-5" />
            <BsStarHalf className="mr-5" />
            </div>
            <div  className="flex gap-1 items-center">
            <label > {rating} </label>
          <span>GP: </span>
          <label> {time} </label>
            </div>
            </div>
         
          <p className="leading-none mt-4">{desc}</p>
          </div>
          
        <div className="cast">
          <h4>
            <span>Starring: </span>
            {starring}
          </h4>
          <h4>
            <span>Genres: </span>
            {genres}
          </h4>
          <h4>
            <span>Tags: </span>
            {tags}
          </h4>
        </div>
        <button className="flex gap-2 items-center text-white primary-btn bg-red-500 rounded-md px-4 py-2">
            <FaPlay /> PLAY NOW
        </button>
          </div>
        <div className="playButton flex justify-center items-center row">
  <Link to={`/singlepage/${id}`} className="flex flex-col items-center">
    <button className="flex items-center gap-2 bg-red-700 px-4 py-2 rounded-md ">
      <div className="img">
        <FaRegCirclePlay size={52} className="text-white hover:text-red-600 transition-all duration-300" />
      </div>
      <span className="text-white text-lg font-medium">WATCH TRAILER</span>
    </button>
  </Link>
        </div>
          </div>

        </div>
      
      </div>
    </>
  );
};

export default HomeCard;
