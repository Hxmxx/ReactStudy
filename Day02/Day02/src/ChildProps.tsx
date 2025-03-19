import './ChildProps.css'

function Card({ children, title }: { children: React.ReactNode, title: string }) {
    return(
        <div className="card">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default function ChildProps() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title="About">
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}