import './PostList.css'
import { posts } from './post'
import { useState } from 'react';

interface CommentProps {
    id: number;
    name: string;
    comment: string;
    time: string;
    avatar: string;
    onDelete: (id: number) => void;
}

function Comment({ id, name, comment, time, avatar, onDelete }: CommentProps) {
    const [like, setLike] = useState(0);
    return (
        <div className="comment">
            <img src={avatar} alt={name} className="avatar" />
            <div className="comment-details">
                <div className="user-name">{name}</div>
                <div className="comment-text">{comment}</div>
                <div className="comment-time">{time}</div>
            </div>
            <button onClick={() => {setLike(like+1)}}>좋아여</button>
            <button onClick={() => onDelete(id)}>삭제</button>
            <span className="like-count">{like}</span>
        </div>
    )
}

function CommentList() {
    const [comments, setComments] = useState(
        posts.map((post, index) => ({...post, id: index}))
    );

    const handleDelete = (id: number) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div className="comment-list">
            {comments.map((post) => (
                <Comment
                    key={post.id}
                    id={post.id}
                    name={post.name}
                    comment={post.comment}
                    time={post.time}
                    avatar={post.avatar}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}

const PostList = () => {
    return (
        <>
            <CommentList />
        </>
    )
}

export default PostList