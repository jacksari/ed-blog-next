import React from 'react';
import Link from 'next/link'

const Post = ({post}) => (
    <div className="casa">
        <h3>{post.id}</h3>
        <p>{post.title}</p>
        <span>{`Escrito por el usuario: ${post.userId}`}</span>
        <Link href={`/blog/${post.id}`}>Ver más del post</Link>
    </div>
)

export default Post;
