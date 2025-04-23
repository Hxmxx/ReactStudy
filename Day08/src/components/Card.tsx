import { Room } from "../Rooms";
import "../style.css";

interface CardProps {
    room: Room;
  }
  
  const Card: React.FC<CardProps> = ({ room }) => {
    return (
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
    );
  };

export default Card;