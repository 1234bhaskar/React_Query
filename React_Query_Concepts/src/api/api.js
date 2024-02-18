const fetchposts = async () => {
  const res = await fetch(`http://localhost:3000/posts?_sort=-id`);
  const postData = await res.json();
  return postData;
};
const fetchTags = async () => {
  const res = await fetch(`http://localhost:3000/tags`);
  const tagsData = await res.json();
  return tagsData;
};

const addPost = async (post) => {
  const respoonse = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return Response.json();
};
export { fetchposts, addPost, fetchTags };
