import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const setPostApi = async () =>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      if(res.status == 200){
        setPosts(res?.data)
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    setPostApi();
    setLoading(true);
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPosts(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return (
      <div className="home">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="container">
        <h1 className="mb-4">Posts</h1>
        <div className="row">
          {posts.map((post) => (
            <>
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {post.id}. {post.title}
                    </h5>
                    <p className="card-text">{post.body}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
