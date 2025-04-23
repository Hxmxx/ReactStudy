import Rooms from "./Rooms";
import Card from "./components/Card";
import "./style.css";

const CardList = () => {
  return (
    <div className="card-list-container">
      <h1>모든 숙소 목록</h1>
      <div className="card-grid">
        {Rooms.map((room) => (
          <Card key={room.key} room={room} />
        ))}
      </div>
    </div>
  );
};

export default CardList;