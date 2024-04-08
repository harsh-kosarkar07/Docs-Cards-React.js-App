import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      filesize: ".6mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    
    {
      desc: "Nesciunt dolorem, omnis, nihil praesentium minima pariatur consequuntur.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className=" fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 ">
        {data.map((item, index) => (
          <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;
