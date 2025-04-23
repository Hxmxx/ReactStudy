// components/Home.tsx

import Rooms from "../Rooms";
import "../style.css";

const Home = () => {
  return (
    <>
      <div id="wrapper">
        {Rooms.map((room) => (
          <div key={room.key}>
            <img src={room.image} />
            <p>{room.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;