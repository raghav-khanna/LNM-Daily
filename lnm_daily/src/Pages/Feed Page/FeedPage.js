import React, { useEffect, useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import EventCard from "../../Components/Event Card/EventCard";
import Nahargadh from "../../Assets/Nahargadh.jpg";
import DJ from "../../Assets/DJ.jpg";
import BusinessMeet from "../../Assets/BusinessMeet.png";
import Superheroes from "../../Assets/Superheroes.jpg";
import "./FeedPage.css";
import { getPost } from "../../Service/api";
import AlignItemsList from "../../Components/Aligned List/AlignedList";
import Roborace from "../../Assets/Roborace.jpg";
import RoboWars from "../../Assets/RoboWars.jpg";
import DroneRace from "../../Assets/DroneRace.jpg";

const FeedPage = () => {
  useEffect(() => {
    getAllPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    getPost().then((res) => setPosts(res.data.rows));
  };

  const images = [
    {
      label: "Trip to Nahargadh",
      imgPath: Nahargadh,
    },
    {
      label: "DJ Night",
      imgPath: DJ,
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
        <div className="side_list">
          <h4>Upcoming Events</h4>
          <AlignItemsList />
        </div>
      </div>
      <div className="inline_events">
        {posts.map((post, index) => (
          <EventCard
            imagePath={images[index].imgPath}
            briefDetail={post.summary}
            fullDetails={post.details}
            eventName={post.title}
            isRegister={post.formlink === "" ? false : true}
          />
        ))}
      </div>

      {/* <div className="inline_events">
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
      </div> */}

      {/* <div className="inline_events">
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
      </div> */}
    </div>
  );
};

export default FeedPage;
