import React, { useEffect } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import EventCard from "../../Components/Event Card/EventCard";
import Nahargadh from "../../Assets/Nahargadh.jpg"
import CarbonEvent from "../../Assets/CarbonEvent.jpeg"
import BusinessMeet from "../../Assets/BusinessMeet.png"
import Superheroes from "../../Assets/Superheroes.jpg"
import "./FeedPage.css";
import { getPost } from "../../Service/api";

const FeedPage = () => {
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    getPost().then((res) => console.log(res.data.rows));
  };

  const images = [
    {
      label: "Trip to Nahargadh",
      imgPath: Nahargadh,
    },
    {
      label: "Amazon Carbon Event",
      imgPath: CarbonEvent,
    },
    {
      label: "International Conference on Web3",
      imgPath: BusinessMeet,
    },
    {
      label: "Superhero Cosplay",
      imgPath: Superheroes,
    },
  ];

  return (
    <div className="parent_feedpage">
      <div className="carousel_n_clubs">
        <div className="carousel">
          <Carousel imageList={images} customWidth={800} />
        </div>
        {/*<div className="temp"></div>*/}
      </div>

      <div className="inline_events">
        <EventCard
          imagePath={
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7"
          }
          briefDetail={
            "This is just brief detail of the event and what is it about and when it will happend"
          }
          fullDetails={
            "This is just brief detail of the event and what is it about and when it will happend. This is now full detail of the event and hence it can also be registered into. Please click on the Register button below to register for the event"
          }
          eventName={"Event Name"}
        />
        <EventCard
          imagePath={
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
          }
          briefDetail={
            "This is just brief detail of the event and what is it about and when it will happend"
          }
          fullDetails={
            "This is just brief detail of the event and what is it about and when it will happend. This is now full detail of the event and hence it can also be registered into. Please click on the Register button below to register for the event"
          }
          eventName={"Event Name"}
        />
        <EventCard
          imagePath={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          briefDetail={
            "This is just brief detail of the event and what is it about and when it will happend"
          }
          fullDetails={
            "This is just brief detail of the event and what is it about and when it will happend. This is now full detail of the event and hence it can also be registered into. Please click on the Register button below to register for the event"
          }
          eventName={"Event Name"}
        />
      </div>

      <div className="inline_events">
        <EventCard
          imagePath={
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598"
          }
          briefDetail={
            "This is just brief detail of the event and what is it about and when it will happend"
          }
          fullDetails={
            "This is just brief detail of the event and what is it about and when it will happend. This is now full detail of the event and hence it can also be registered into. Please click on the Register button below to register for the event"
          }
          eventName={"Event Name"}
        />
        <EventCard
          imagePath={
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
          }
          briefDetail={
            "This is just brief detail of the event and what is it about and when it will happend"
          }
          fullDetails={
            "This is just brief detail of the event and what is it about and when it will happend. This is now full detail of the event and hence it can also be registered into. Please click on the Register button below to register for the event"
          }
          eventName={"Event Name"}
        />
        <EventCard
          imagePath={
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7"
          }
          briefDetail={
            "This is just brief detail of the event and what is it about and when it will happend"
          }
          fullDetails={
            "This is just brief detail of the event and what is it about and when it will happend. This is now full detail of the event and hence it can also be registered into. Please click on the Register button below to register for the event"
          }
          eventName={"Event Name"}
        />
      </div>
    </div>
  );
};

export default FeedPage;
