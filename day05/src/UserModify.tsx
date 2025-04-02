import { useState, useRef } from "react";
import './UserAdd.css'

// ✅ User Props 타입 정의
interface UserProps {
    user: UserType;
    onToggle: (id: number) => void;
    onModify: (id: number, name: string, email: string) => void;
    onRemove: (id: number) => void;
}

// ✅ UserType 인터페이스 정의
interface UserType {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

// ✅ User 컴포넌트
function User({ user, onToggle, onModify, onRemove }: UserProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>(user.name);
    const [email, setEmail] = useState<string>(user.email);

    const handleModify = () => {
        onModify(user.id, name, email);
        setIsEditing(false);
    };

    return (
        <tr style={{ background: user.active ? "#f0f8ff" : "white" }}>
            <td>{user.id}</td>
            <td>
                {isEditing ? (
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                ) : (
                    <span onClick={() => onToggle(user.id)}>{user.name}</span>
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                ) : (
                    user.email
                )}
            </td>
            <td>
                {isEditing ? (
                    <button onClick={handleModify}>저장</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>수정</button>
                )}
            </td>
            <td>
                <button onClick={() => onRemove(user.id)}>삭제</button>
            </td>
        </tr>
    );
}

// ✅ UserInput Props 타입 정의
interface UserInputProps {
    name: string;
    email: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCreate: () => void;
    onCancel: () => void;
}

// ✅ UserInput 컴포넌트
function UserInput({ name, email, onChange, onCreate, onCancel }: UserInputProps) {
    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="이름" />
            <input type="text" name="email" value={email} onChange={onChange} placeholder="이메일" />
            <button onClick={onCreate}>등록</button>
            <button onClick={onCancel}>취소</button>
        </div>
    );
}

// ✅ UserList Props 타입 정의
interface UserListProps {
    users: UserType[];
    onToggle: (id: number) => void;
    onModify: (id: number, name: string, email: string) => void;
    onRemove: (id: number) => void;
}

// ✅ UserList 컴포넌트
function UserList({ users, onToggle, onModify, onRemove }: UserListProps) {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>이름</th>
                <th>이메일</th>
                <th>수정</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <User key={user.id} user={user} onToggle={onToggle} onModify={onModify} onRemove={onRemove} />
            ))}
            </tbody>
        </table>
    );
}

// ✅ UserModify2 컴포넌트
export default function UserModify2() {
    // 🔹 상태 타입 지정
    const [inputs, setInputs] = useState<{ name: string; email: string }>({ name: "", email: "" });
    const [users, setUsers] = useState<UserType[]>([
        { id: 1, name: "강민지", email: "minji@gmail.com", active: false },
        { id: 2, name: "정소울", email: "soul@gmail.com", active: false },
    ]);

    // 🔹 useRef 타입 명시
    const nextId = useRef<number>(3);

    // 🔹 이벤트 핸들러에 타입 추가
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const onCreate = () => {
        if (!inputs.name.trim() || !inputs.email.trim()) return;
        const newUser: UserType = { id: nextId.current, name: inputs.name, email: inputs.email, active: false };
        setUsers((prev) => [...prev, newUser]);
        setInputs({ name: "", email: "" });
        nextId.current += 1;
    };

    const onCancel = () => {
        setInputs({ name: "", email: "" });
    };

    const onRemove = (id: number) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    const onModify = (id: number, name: string, email: string) => {
        setUsers((prev) =>
            prev.map((user) => (user.id === id ? { ...user, name, email } : user))
        );
    };

    const onToggle = (id: number) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    return (
        <div>
            <UserInput name={inputs.name} email={inputs.email} onChange={onChange} onCreate={onCreate} onCancel={onCancel} />
            <UserList users={users} onToggle={onToggle} onModify={onModify} onRemove={onRemove} />
        </div>
    );
}