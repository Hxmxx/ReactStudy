import { createContext, useContext, useState, ReactNode } from 'react';
import Rooms from '../Rooms';  // 기존 Rooms 데이터 사용

interface Room {
  key: number;
  name: string;
  location: string;
  totalGuest: string;
  rating: string;
  numberOfRating: string;
  price: string;
  image: string;
}

interface RoomContextType {
  rooms: Room[];
  loading: boolean;
  loadMoreRooms: () => void;
  getRoomById: (id: number) => Room | undefined;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export function RoomProvider({ children }: { children: ReactNode }) {
  const [rooms, setRooms] = useState<Room[]>(Rooms.slice(0, 3));
  const [loading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);

  const loadMoreRooms = () => {
    setLoading(true);
    setTimeout(() => {
      const newCount = displayCount + 3;
      setDisplayCount(newCount);
      setRooms(Rooms.slice(0, newCount));
      setLoading(false);
    }, 500);
  };

  const getRoomById = (id: number) => {
    return Rooms.find(room => room.key === id);
  };

  return (
    <RoomContext.Provider value={{ rooms, loading, loadMoreRooms, getRoomById }}>
      {children}
    </RoomContext.Provider>
  );
}

export function useRooms() {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error('useRooms must be used within a RoomProvider');
  }
  return context;
} 