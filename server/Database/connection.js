import cassandra from "cassandra-driver";

const Connection = async (URL, keyspaceName) => {
  try {
    const client = await new cassandra.Client({
      contactPoints: [URL],
      localDataCenter: "datacenter1",
      keyspace: keyspaceName,
    });
    console.log("Connection Successful");
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

export default Connection;

// client.execute(query).then((result) => {
//   console.log(`Here is the Resulted Column -> \n ${result.rows[1].name}`);
// });
