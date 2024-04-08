import React from "react";
import "./carouselStyle.css";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Carousel() {
  
  const [recommendData, SetRecommendData] = useState([]);
  const [upComingpData, SetUpComingData] = useState([]);
  const recommendedImages = [
    "/assets/recommonded/Rectangle 2.svg",
    "/assets/recommonded/Rectangle 4-1.svg",
    "/assets/recommonded/Rectangle 4.svg",
    "/assets/recommonded/Rectangle 5-1.svg",
    "/assets/recommonded/Rectangle 5-2.svg",
    "/assets/recommonded/Rectangle 4.svg",
    "/assets/recommonded/Rectangle 5.svg",
    "/assets/recommonded/Rectangle 34.svg",
    "/assets/recommonded/Rectangle 2.svg",
    "/assets/recommonded/Rectangle 4-1.svg",
  ];
  const upComingImages = [
    "/assets/upcoming/Rectangle 7.svg",
    "/assets/upcoming/Rectangle 9.svg",
    "/assets/upcoming/Rectangle 11.svg",
    "/assets/upcoming/Rectangle 15.svg",
    "/assets/upcoming/Rectangle 16.svg",
    "/assets/upcoming/Rectangle 17.svg",
    "/assets/upcoming/Rectangle 21.svg",
    "/assets/upcoming/Rectangle 22.svg",
    "/assets/upcoming/Rectangle 23.svg",
    "/assets/upcoming/Rectangle 37.svg",
  ];

  useEffect(() => {
    const recoUrl = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const upcomingUrl = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming";
    fetch(recoUrl)
      .then((response) => response.json())
      .then((data) => SetUpComingData(data));
    fetch(upcomingUrl)
      .then((response) => response.json())
      .then((data) => SetRecommendData(data));
  }, []);
  return (
    <>
      <div className="cards-container">
        <div className="flex-heading">
          <h2 className="cards-heading">
            Recommended&nbsp;shows&nbsp;
            <FaArrowRightLong />
          </h2>
          <a href="" style={{fontSize:'16px'}}>See&nbsp;all</a>
        </div>
        <div className="carousel-cards" >
          {recommendData && recommendData.events ? (
            recommendData.events.map((elements, index) => (
              <figure key={elements.eventName} className="card-elements" >
                <img
                  className="rec-image"
                  src={recommendedImages[index]}
                  alt="recommended elements"
                />
                <figcaption className="caption-container">
                  <p className="caption cap-name">
                    {elements.eventName.slice(0, 21)}
                  </p>
                  <p className="caption cap-date">
                    {elements.date.slice(0, 10)}
                  </p>
                  <p className="caption cap-location">
                    <FaLocationDot /> {elements.cityName}
                  </p>
                  <p className="caption cap-other">
                    {`${elements.weather} | ${Math.floor(
                      Number(elements.distanceKm) / 100
                    )}`}
                    Km
                  </p>
                </figcaption>
              </figure>
            ))
          ) : (
            <div className="loading-container">
            <h1 className="lazy-loading" >Loading...</h1>
            </div>
          )}
        </div>
        <h2 className="cards-heading">
          Upcoming&nbsp;events&nbsp;
          <FaArrowRightLong />
        </h2>

        <div className="event-container">
          {upComingpData && upComingpData.events ? (
            upComingpData.events.map((element, index) => (
              <figure className="card-events" key={index}>
                <div className="img-container">
                  <img className="eve-image"
                    src={upComingImages && upComingImages[index]}
                    alt="upcoming events"
                  />
                  <p className="image-date">{element.date.slice(0, 10)}</p>
                </div>
                <figcaption className="event-caption-container">
                  <p className="event-name">{element.eventName.slice(0, 21)}</p>
                  <div className="other-container">
                    <p className="subtitle event-location">
                      <FaLocationDot /> {element.cityName}
                    </p>
                    <p className="subtitle event-other">{`${
                      element.weather
                    } | ${Math.floor(Number(element.distanceKm) / 100)} Km`}</p>
                  </div>
                </figcaption>
              </figure>
            ))
          ) : (
            <div className="loading-container">
            <h1 className="lazy-loading" >Loading...</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
