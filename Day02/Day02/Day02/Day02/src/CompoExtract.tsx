import './App.css'

function getImageUrl(imageId: string, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function Profile({
  name,
  imageId,
  imgSize = 70,
  Profession,
  awards,
  Discovery
}: {
  name: string;
  imageId: string;
  imgSize?: number;
  Profession: string;
  awards: string[];
  Discovery: string;
}) {
    return(
        <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={imgSize}
          height={imgSize}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {Profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            {awards.join(', ')}
          </li>
          <li>
            <b>Discovered: </b>
            {Discovery}
          </li>
        </ul>
      </section>
    )
}

export default function CompoExtract() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        imageId="szV5sdG" 
        name="Maria Skłodowska-Curie"
        Profession="physicist and chemist"
        awards={['(Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal)']}
        Discovery="polonium (chemical element)"
      />
      <Profile 
        imageId="YfeOqp2" 
        name="Katsuko Saruhashi"
        Profession="geochemist"
        awards={['(Miyake Prize for geochemistry', 'Tanaka Prize)']}
        Discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
