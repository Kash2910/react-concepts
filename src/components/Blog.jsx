import React from 'react'

const Blog = (props) => {

 let content =  props.posts.map((postMessage) => {

    return <Post key={postMessage.id} post = {postMessage}/>
    // return <>
    //     <li>{postMessage.id}</li>
    //     <li>{postMessage.title}</li>
    //     <li>{postMessage.name}</li>
    // </>
 });
  return (
    <>
    <div>{content}</div>
    </>
  )
}

function Post (props) {
    const { id, title, name } = props.post;

    return(
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{name}</div>
        </div>
    );
}

export default Blog