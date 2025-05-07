import { Link } from "react-router-dom";
import Rooms from "./Rooms";
import "./style.css";

const CardList = () => {
  return (
    <div className="card-list">
      {Rooms.map((room) => (
        <Link to={`/card/${room.key}`} key={room.key}>
          <div className="card">
            <img src={room.image} alt={room.name} className="card-image" />
            <div className="card-content">
              <p className="location">{room.location}에 위치</p>
              <h2 className="title">{room.name}</h2>
              <div className="divider"></div>
              <p className="guests">최대인원 {room.totalGuest}명</p>
              <p className="rating">
                평점: {room.rating} ({room.numberOfRating})
              </p>
              <h3 className="price">{room.price}원/month</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardList;