import { useState, useEffect } from "react";
import appwriteService from "../appwrite/Appwriteconfig";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService
      .getAllPosts()
      .then((postsData) => {
        if (postsData) setPosts(postsData.documents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (posts.length === 0)
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map(({ $id, title, featuredImage }) => (
            <div className="p-2 w-1/4" key={$id}>
              <PostCard $id={$id} title={title} featuredImage={featuredImage} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
