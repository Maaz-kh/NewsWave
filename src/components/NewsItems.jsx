import React from 'react';
import defaultImage from "../assets/defaultnews.png"
export default function NewsItems(props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-visible w-80 relative flex flex-col h-full">
      
      {/* Badge for Source */}
      <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
        {props.source}
      </span>

      {/* News Image */}
      <img
        className="w-full h-44 object-cover"
        src={props.imageUrl ? props.imageUrl : `${defaultImage}`}
        alt="News Logo"
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">

        <h5 className="text-lg font-semibold mb-1">{props.title}...</h5>
        <p className="text-gray-600 text-sm mb-2">
          {props.description ? props.description + "..." : "Click Read More to Explore."}
        </p>

        {/* Author & Date */}
        <p className="text-gray-500 text-sm mb-1">
          <small>{props.author ? "By " + props.author : ""}</small>
        </p>
        <p className="text-gray-500 text-sm">
          <small>{props.date ? "On " + props.date.slice(0, 10) : "NOT KNOWN"}</small>
        </p>

        {/* Read More Button */}
        <div className="mt-auto pt-2 flex justify-end">
          <a
            href={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Read More
          </a>
        </div>

      </div>
    </div>
  );
}
