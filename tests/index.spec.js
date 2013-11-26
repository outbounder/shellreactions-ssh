describe("shellreactions-ssh", function(){
  var ssh = require("../index")
  it("executes echo on remote location via options", function(next){
    var cmd = ssh("remote", "echo test")
    cmd({remote: "node@176.58.101.229", waitForExit: true}, function(err, output){
      expect(output.code).toBe(0)
      expect(output.data).toBe("test\n")
      next()
    })
  })
})