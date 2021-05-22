import React, { useEffect, useState } from 'react';

const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('Fetching Data');
    async function fetchData() {
      const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const json = await res.json();
      if (res.status !== 404) {
        setPosts(json.data.children.map((c) => c.data));
      } else {
        setPosts([]);
      }
    }
    fetchData();
  }, [subreddit, setPosts]);

  return (
    <>
      <h4> Reddit Data</h4>
      <ul>
        {posts.length > 1 ? (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <h1> No Data Found</h1>
        )}
      </ul>
    </>
  );
};

export default Reddit;
