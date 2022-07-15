import React, { useEffect, useState } from "react";

export function Posts(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((posts) => {
        return posts.json();
      })
      .then((response) => {
        setPost(response);
      });
  });
  return (
    <table className="table" hidden={true} id="postTable">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <React.Fragment>
          {post.slice(0, 50).map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </React.Fragment>
      </tbody>
    </table>
  );
}
