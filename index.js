const nodeBloxSDK = require('node-blox-sdk');

nodeBloxSDK.env.init()

const f_test_delete = async (req, res) => {

  console.log("🚀 ~ file: index.js ~ line 8 ~ f_test_delete ~ process.env", process.env)

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello f-test-delete`}))
  res.end()
  
}

export default f_test_delete

