import React, { useEffect, useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import EventCard from "../../Components/Event Card/EventCard";
import Nahargadh from "../../Assets/Nahargadh.jpg";
import DJ from "../../Assets/DJ.jpg";
import Superheroes from "../../Assets/Superheroes.jpg";
import "./FeedPage.css";
import { getPost } from "../../Service/api";
import AlignItemsList from "../../Components/Aligned List/AlignedList";
import Roborace from "../../Assets/Roborace.jpg";
import DroneRace from "../../Assets/DroneRace.jpg";
import BusinessMeet from "../../Assets/BusinessMeet.jpg";

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
      label: "Superhero Cosplay",
      imgPath: Superheroes,
    },
    {
      label: "Robo-racing Competition",
      imgPath: Roborace,
    },
    {
      label: "Drone Race Competition",
      imgPath: DroneRace,
    },
    {
      label: "Meetings Scheduled by Clubs",
      imgPath: BusinessMeet,
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
    </div>
  );
};

export default FeedPage;
