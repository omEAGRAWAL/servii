import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  const postid = req.body.userId + Math.random().toString(9);
  const newPost = new Post({
    content: req.body.content,
    userId: req.body.userId,
    postId: postid,
  });
  try {
    console.log("creating post");
    const post = await newPost.save();
    console.log("post created");
    res.status(200).json(post);
    console.log(post);
  } catch (err) {
    next(err);
  }
};

export const getpost = async (req, res, next) => {
  try {
    // Fetch posts with details
    const { page } = req.query;
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(10 * page);

    if (posts.length === 0) {
      res.status(200).json({ message: "No posts found" });
      return;
    }

    // Fetch user details for each post
    const postsWithUserDetails = await Promise.all(
      posts.map(async (post) => {
        const user = await User.findById(post.userId);

        return {
          ...post.toObject(), // Convert Mongoose document to plain JavaScript object
          userdata: {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            // Add other user details as needed
          },
        };
      })
    );
    console.log(postsWithUserDetails);
    res.status(200).json(postsWithUserDetails);
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  const { postId, userId } = req.body;
  try {
    const post = await Post.findOne({ postId });
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      next(errorHandler(400, "The post has been liked"));
      console.log("liked");
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      next(errorHandler(400, "The post has been disliked"));
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    next(err);
  }
};

export const doComment = async (req, res, next) => {
  const { postId, userId, content } = req.body;
  const comments = {
    userId,
    content,
  };
  console.log(comments);
  try {
    const post = await Post.findOne({ postId });
    if (!post) {
      next(errorHandler(404, "Post not found"));
    }
    post.comments.push(comments);
    const updatedPost = await post.save();
    console.log(updatedPost);
    res.status(201).json(updatedPost.comments);
  } catch (err) {
    next(err);
  }
};
