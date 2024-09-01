import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/Appwriteconfig";

function EditPost() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    appwriteService
      .getPost({ slug: slug })
      .then((post) => {
        if (post) setPost(post);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
