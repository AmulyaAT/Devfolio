import React from "react";
import { useState } from "react";
import "./_Timeline.scss";
import "./_Mediatimeline.scss";

const Timeline = () => {
  // State to handle the selected radio button
  const [selectedWork, setSelectedWork] = useState("work5");

  // Handler function to update the selected work
  const handleWorkChange = (event) => {
    setSelectedWork(event.target.id);
  };

  const timelineData = [
    {
      id: "work5",
      date: "12 May 2013",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      id: "work4",
      date: "11 May 2013",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      id: "work3",
      date: "10 May 2013",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      id: "work2",
      date: "09 May 2013",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      id: "work1",
      date: "08 May 2013",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  ];

  return (
    <div className="timelinecontainer">
      <h2 className="timelinetitle">CSS3 Timeline</h2>
      <p>
        Please set the $vertical variable to false to see the horizontal
        version.
      </p>
      <ul id="timeline">
        {timelineData.map((item) => (
          <li className="work" key={item.id}>
            <input
              className="radio"
              id={item.id}
              name="works"
              type="radio"
              checked={selectedWork === item.id}
              onChange={handleWorkChange}
            />
            <div className="relative">
              <label htmlFor={item.id}>{item.content}</label>
              <span className="date">{item.date}</span>
              <span className="circle"></span>
            </div>
            <div className="content">
              <p>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
