import { useState, useEffect } from "react";
import { Card, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

export default function HomePost() {
  const [pagenum, setpagenum] = useState(1);
  const { currentUser } = useSelector((state) => state.user);
  const [post, setpost] = useState([]);
  const [likestate, setlikestate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts
        const postResponse = await fetch(`/api/post/getpost?page=${pagenum}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!postResponse.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postData = await postResponse.json();
        setpost(postData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [currentUser, likestate, pagenum]);

  const like = async (postId) => {
    try {
      const response = await fetch("/api/post/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, userId: currentUser._id }),
      });
      const data = await response.json();
      setlikestate(!likestate);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="  flex flex-col justify-center items-center">
      {post.map((post) => {
        return (
          <Card key={post._id} className="my-3  sm:my-4  w-4/5 sm:w-3/5  ">
            <div className="flex items-center gap-2">
              <img
                src={post.userdata.profilePicture}
                alt="user"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="font-semibold">{post.userdata.username}</h1>

                <p className="text-xs">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div
              className="p-3 max-w-2xl mx-auto w-full post-content"
              dangerouslySetInnerHTML={{ __html: post && post.content }}
            ></div>

            <button onClick={() => like(post.postId)}>
              {post.likes.includes(currentUser._id) ? (
                <FaHeart color="red" />
              ) : (
                <FaHeart color="gray" />
              )}
            </button>
            <p>{post.likes.length} likes</p>
          </Card>
        );
      })}
      <div className="flex  ">
        <Button className="  my-2 mx-4" onClick={() => setpagenum(pagenum + 1)}>
          Load More
        </Button>

        {pagenum > 1 && (
          <Button
            className="  my-2 mx-4"
            onClick={() => setpagenum(pagenum - 1)}
          >
            Load Less
          </Button>
        )}
      </div>
    </div>
  );
}
