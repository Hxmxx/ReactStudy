import { useRef, useState } from "react";
import "./UserAdd.css";

interface UserProps {
    user: { id: number; name: string; email: string };
    onRemove: (id: number) => void;
}

const User: React.FC<UserProps> = ({ user, onRemove }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <button className="delete-btn" onClick={() => onRemove(user.id)}>삭제</button>
            </td>
        </tr>
    );
};

export default function UseRefAdd() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
    });

    const { name, email } = inputs;

    const [users, setUsers] = useState([
        { id: 1, name: '강민지', email: 'strongminji@gmail.com' },
        { id: 2, name: '정소울', email: 'soulright@bssm.hs.kr' },
        { id: 3, name: '이승현', email: 'victorynow@example.com' },
    ]);

    const nextId = useRef(4);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const onAddUser = () => {
        if (!name.trim() || !email.trim()) return alert("이름과 이메일을 입력하세요.");

        const newUser = {
            id: nextId.current,
            name,
            email,
        };

        setUsers([...users, newUser]);
        setInputs({ name: '', email: '' });
        nextId.current += 1;

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const onRemove = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="container">
            <div className="wrapper">
                <input
                    name="name"
                    onChange={onChange}
                    value={name}
                    ref={inputRef}
                    placeholder="이름을 입력하세요"
                />
                <input
                    name="email"
                    onChange={onChange}
                    value={email}
                    placeholder="이메일을 입력하세요"
                />
                <button onClick={onAddUser}>추가</button>
            </div>

            <hr />

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <User key={user.id} user={user} onRemove={onRemove} />
                ))}
                </tbody>
            </table>
        </div>
    );
}