//<AxiosTest.jsx 파일을 완성하여 제출하시오.

import { useState } from "react";
import axios from "axios";
//npm install axios

interface Comment {
  id: number;
  email: string;
}

interface Todo {
  id: number;
  title: string;
}

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export default function AxiosTest() {
  const [data, setData] = useState<Comment | null>(null);
  const [data2, setData2] = useState<Todo | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const getPromise = () => {
    axios.get<Comment>('https://jsonplaceholder.typicode.com/comments/1')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getAsync = async () => {
    try {
      const response = await axios.get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
      setData2(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getPhotos = async () => {
    try {
      const response = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      setPhotos(response.data.slice(0, 10))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={getPromise}>Promise로 불러오기</button>
        <p />
        <button onClick={getAsync}>async/await로 불러오기</button>
        <p />
        <button onClick={getPhotos}>async/await로 사진 불러오기</button>
      </div>
      {data && 
        <>
          <p>번호: {JSON.stringify(data.id)}</p>
          <p>email: {JSON.stringify(data.email)}</p>
        </>
      }
      {data2 && 
        <>
          <p>번호: {JSON.stringify(data2.id)}</p>
          <p>title: {JSON.stringify(data2.title)}</p>
        </>
      }
      {photos.length > 0 && 
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {photos.map((photo) => (
            <div key={photo.id}>
              <p>번호: {photo.id}</p>
              <p>제목: {photo.title}</p>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
          ))}
        </div>
      }
    </main>
  );
}

