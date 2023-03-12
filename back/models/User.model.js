const {connectDataBase} = require("../db");

// Add a new user
module.exports.createUser = async (name, password, email) => {
    const session = await connectDataBase();
    console.log("session : ", session);
    let exec = false;
    try {
      console.log("session :", session);
      const result = await session.run(
        'CREATE (a:Person {name: $name, password: $password, email:$email}) RETURN a',
        { name: name, password : password, email: email }
      );
      console.log("result :", result);
      const singleRecord = result.records[0];
      console.log("signeRecord : ", singleRecord);
      const node = singleRecord.get(0);
      console.log("propertie name :",node.properties.name);
      exec = true;
    } catch(e){
      console.log("error : ", e);
    }
    finally {
      await session.close()
    }
    return exec;
}