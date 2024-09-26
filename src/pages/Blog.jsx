import React, { useEffect, useState } from "react";

function Blog() {
  const [blog, setBlog] = useState([]);
  const [userId, setUserId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [userId]);

  const handleUserClick = (id) => {
    setUserId(id);
  };
  if (loading) {
    return (
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div>
    );
  }
  return (
    <div>
      {blog.map((p) => {
        return (
          <div key={p.id} className="blog">
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
        );
      })}

      <div className="pagination-buttons">
        <button
          onClick={() => handleUserClick(1)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 1}
        >
          1
        </button>
        <button
          onClick={() => handleUserClick(2)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 2}
        >
          2
        </button>
        <button
          onClick={() => handleUserClick(3)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 3}
        >
          3
        </button>
        <button
          onClick={() => handleUserClick(4)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 4}
        >
          4
        </button>
        <button
          onClick={() => handleUserClick(5)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 5}
        >
          5
        </button>
        <button
          onClick={() => handleUserClick(6)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 6}
        >
          6
        </button>
        <button
          onClick={() => handleUserClick(7)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 7}
        >
          7
        </button>
        <button
          onClick={() => handleUserClick(8)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 8}
        >
          8
        </button>
        <button
          onClick={() => handleUserClick(9)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 9}
        >
          9
        </button>
        <button
          onClick={() => handleUserClick(10)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 10}
        >
          10
        </button>
      </div>
    </div>
  );
}

export default Blog;
