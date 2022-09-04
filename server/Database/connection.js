import cassandra from "cassandra-driver";

const options = {
  contactPoints: ["127.0.0.1"], // The hostname of the database you are connecting to.
  protocolOptions: {
    port: 9042, // The port number to connect to. (Default: 9042)
  },
  localDataCenter: "datacenter1",
  keyspace: "lnm_daily",
};

export default options;

// client.execute(query).then((result) => {
//   console.log(`Here is the Resulted Column -> \n ${result.rows[1].name}`);
// });
