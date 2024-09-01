import { useEffect, useState } from "react";
import appwriteService from "../appwrite/Appwriteconfig";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    appwriteService
      .getAllPosts()
      .then((posts) => {
        setAllPosts(posts.documents);
      })
      .catch((error) => {
        setError(error);
      });
    //   return () => {
    //     second
    //   }
  }, []);

  return (
    <div className="w-full py-8">
      {" "}
      <Container>
        <div className="flex flex-wrap">
          {allPosts.map(({ $id, title, featuredImage }) => (
            <div className="p-2 w-1/4" key={$id}>
              <PostCard $id={$id} title={title} featuredImage={featuredImage} />
            </div>
          ))}
        </div>
      </Container>{" "}
    </div>
  );
}

export default AllPosts;
