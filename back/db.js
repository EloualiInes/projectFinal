const neo4j = require('neo4j-driver');

// .env à faire
const uri = "neo4j+s://7887a3f6.databases.neo4j.io";
const user = "neo4j";
const password = "ig2pew1QgCcnARbv9_7h4b6Q_11vQKM-H-ymeTDzEOY";

// Return a connection db
module.exports.connectDataBase = async() => {
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
  const session = driver.session();
  return session;
}

