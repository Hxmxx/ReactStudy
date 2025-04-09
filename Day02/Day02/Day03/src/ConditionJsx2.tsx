interface ItemProps {
    name: string;
    isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
    return <li>{name} {isPacked ? '✓' : null}</li>
}
const itemList = [
    { name: "Space Suit", isPacked: false },
    { name: "Helmet with a golden leaf", isPacked: true },
    { name: "Photo of tom", isPacked: true }
];

const PackingList = () => {
    return (
        <>
            <h1>Sally's Packing List</h1>
            <ul>
                {/* <Item
                    isPacked={true}
                    name="Space Suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of tom"
                /> */}
                {itemList.map((item) => (
                    <Item
                    key={item.name}
                    name={item.name}
                    isPacked={item.isPacked}
                    />
                ))}
            </ul>
        </>
    )
}

export default PackingList