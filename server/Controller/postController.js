// import Connection from "../Database/connection.js";
import cassandra from "cassandra-driver";
import options from "../Database/connection.js";

const client = await new cassandra.Client(options);
let posts;
let obj;

export const addPost = async (request, response) => {
  const post = request.body;
  console.log(post);
  const query =
    "INSERT INTO CLUB_POST(title,summary,details,form_link) VALUES (?,?,?,?)";
  const params = [post.title, post.summary, post.details, post.formlink];
  await client.execute(query, params, { prepare: true });
  console.log("Done Inserting the POST Details");
};

export const getPosts = async (request, response) => {
  try {
    const query = "SELECT * FROM CLUB_POST";
    posts = await client.execute(query);
    // await createObj();
    // console.log(`Here is the POSTS -> ${posts.rows}`);
    const rows = posts.rows;
    response.status(200).send({ rows });
  } catch (error) {
    response.status(404).json(error);
  }
};
