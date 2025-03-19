interface ItemProps {
    name: string;
    isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
    return <li>{name} {isPacked ? '✓' : null}</li>
}

const PackingList = () => {
    return (
        <>
            <h1>Sally's Packing List</h1>
            <ul>
                <Item
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
                />
            </ul>
        </>
    )
}

export default PackingList