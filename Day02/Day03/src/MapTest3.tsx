import './MapTest3.css'


interface CardProps {
    person: {
        name: string;
        profession: string;
        accomplishment: string;
        imageId: string;
    }
}

const people = [
    {
      id: 0,
      name: '크레올라 캐서린 존슨',
      profession: '수학자',
      accomplishment: '우주비행 계산',
      imageId: 'MK3eW3A',
    },
    {
      id: 1,
      name: '마리오 호세 몰리나-파스켈 헨리케스',
      profession: '화학자',
      accomplishment: '북극 오존 홀 발견',
      imageId: 'mynHUSa',
    },
    {
      id: 2,
      name: '모하메드 압두스 살람',
      profession: '물리학자',
      accomplishment: '전자기학 이론',
      imageId: 'bE7W1ji',
    },
    {
      id: 3,
      name: '퍼시 레이본 줄리언',
      profession: '화학자',
      accomplishment: '코르티손 약물, 스테로이드 및 피임약 개발',
      imageId: 'IOjWm71',
    },
    {
      id: 4,
      name: '수브라흐마니안 찬드라세카르',
      profession: '천체물리학자',
      accomplishment: '백색 왜성의 질량 계산',
      imageId: 'lrWQx8l',
    },
  ];


  function Card({ person }: CardProps) {
    return (
        <li>
            <img
                src={`https://i.imgur.com/${person.imageId}s.jpg`}
                alt={person.name}
            />
            <div className="card">
                <p>
                    <b>{person.name}</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </div>
        </li>
    )
  }

  const MapTest3 = () => {
    return (
        <>
            <h1>Scientists</h1>
            <h2>화학자들</h2>
            <ul>
                <li>
                    <img
                        src={`https://i.imgur.com/mynHUSas.jpg`}
                        alt="마리오 호세 몰리나-파스켈 헨리케스"
                    />
                    <div className="card">
                        <p>
                            <b>마리오 호세 몰리나-파스켈 헨리케스</b>
                            {' 화학자 '}
                            known for 북극 오존 홀 발견
                        </p>
                    </div>
                </li>
                <li>
                    <img
                        src={`https://i.imgur.com/IOjWm71s.jpg`}
                        alt="퍼시 레이본 줄리언"
                    />
                    <div className="card">
                        <p>
                            <b>퍼시 레이본 줄리언</b>
                            {' 화학자 '}
                            known for 코르티손 약물, 스테로이드 및 피임약 개발
                        </p>
                    </div>
                </li>
            </ul>
            <h2>기타</h2>
            <ul>
                <li>
                    <img
                        src={`https://i.imgur.com/MK3eW3As.jpg`}
                        alt="크레올라 캐서린 존슨"
                    />
                    <div className="card">
                        <p>
                            <b>크레올라 캐서린 존슨</b>
                            {' 수학자 '}
                            known for 우주비행 계산
                        </p>
                    </div>
                </li>
                <li>
                    <img
                        src={`https://i.imgur.com/bE7W1jis.jpg`}
                        alt="모하메드 압두스 살람"
                    />
                    <div className="card">
                        <p>
                            <b>모하메드 압두스 살람</b>
                            {' 물리학자 '}
                            known for 전자기학 이론
                        </p>
                    </div>
                </li>
                <li>
                    <img
                        src={`https://i.imgur.com/lrWQx8ls.jpg`}
                        alt="수브라흐마니안 찬드라세카르"
                    />
                    <div className="card">
                        <p>
                            <b>수브라흐마니안 찬드라세카르</b>
                            {' 천체물리학자 '}
                            known for 백색 왜성의 질량 계산
                        </p>
                    </div>
                </li>
            </ul>
        </>
    )
  }

  export default MapTest3