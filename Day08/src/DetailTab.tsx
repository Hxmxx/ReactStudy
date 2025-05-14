import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Rooms from "./Rooms";

export default function DetailTab() {
  const [tab, setTab] = useState(0);
  const { id } = useParams();
  const room = Rooms.find(item => item.key === Number(id));

  if (!room) {
    return <div>방 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container">
      <div className="detail-container">
        <img src={room.image} className="detail-image" alt={room.name} />
        
        <div className="detail-info">
          <h1 className="detail-title">{room.name}</h1>
          <div className="detail-location">{room.location}에 위치</div>
          <div className="detail-rating">
            ★ {room.rating} ({room.numberOfRating}개의 평가)
          </div>
          <div className="detail-price">
            {room.price}원<span className="month">/ 월</span>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0" onSelect={(k) => k && setTab(Number(k.replace('link', '')))}>
          <Nav.Item>
            <Nav.Link eventKey="link0">상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1">리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" disabled>상품Q&A</Nav.Link>
          </Nav.Item>
        </Nav>

        {tab === 0 && (
          <div className="tab-content">
            <p>
              5~9층에 위치한 스탠다드룸은 편안함과 쾌적함이 인상적이 휴식 환경을
              제공합니다.
            </p>
            <p>
              모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급
              어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.
            </p>
            <div className="room-details">
              <p>위치: 5~9층</p>
              <p>룸구성: 침실 1, 욕실 1</p>
              <p>문의전화: 02-2230-0700</p>
            </div>
          </div>
        )}
        {tab === 1 && <div className="tab-content">리뷰 내용</div>}
        {tab === 2 && <div className="tab-content">상품Q&A 내용</div>}
      </div>
    </div>
  );
} 