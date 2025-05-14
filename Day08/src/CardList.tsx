import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rooms from "./Rooms";

export default function CardList() {
  const [displayCount, setDisplayCount] = useState(3);
  const displayedRooms = Rooms.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 3);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">추천 숙소</h2>
      <div className="row">
        {displayedRooms.map((room) => (
          <div className="col-md-4" key={room.key}>
            <Link to={`/detail/${room.key}`} style={{ textDecoration: 'none' }}>
              <Card className="room-card">
                <Card.Img variant="top" src={room.image} className="card-img" />
                <Card.Body>
                  <Card.Title>{room.name}</Card.Title>
                  <Card.Text>
                    <div className="location">{room.location}</div>
                    <div className="guests">최대 {room.totalGuest}명</div>
                    <div className="rating">
                      ★ {room.rating} ({room.numberOfRating})
                    </div>
                    <div className="price">{room.price}원</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      
      {displayCount < Rooms.length && (
        <div className="load-more-container">
          <button 
            className="btn btn-primary"
            onClick={handleLoadMore}
          >
            더보기
          </button>
        </div>
      )}
    </div>
  );
}