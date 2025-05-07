import { useState, useEffect } from "react";
import axios from "axios";
import { Room } from "../Rooms";
import "../style.css";

interface CardProps {
  roomId?: number;
}

const Card: React.FC<CardProps> = ({ roomId }) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        // 실제 API가 있다면 아래 URL을 실제 API 엔드포인트로 변경하세요
        const response = await axios.get(`/api/rooms/${roomId}`);
        setRoom(response.data);
        setError(null);
      } catch (err) {
        setError("숙소 정보를 불러오는데 실패했습니다.");
        console.error("Error fetching room:", err);
      } finally {
        setLoading(false);
      }
    };

    if (roomId) {
      fetchRoom();
    }
  }, [roomId]);

  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!room) {
    return <div className="error">숙소를 찾을 수 없습니다.</div>;
  }

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