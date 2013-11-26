var exec = require("shellreactions-exec")

module.exports = function(remotePropName, commandPatterns) {
  if(typeof commandPatterns == "function")
    commandPatterns = commandPatterns()
  if(typeof commandPatterns == "string")
    commandPatterns = [commandPatterns]
  return function(c, next) {
    exec("ssh "+c[remotePropName]+" '"+commandPatterns.join(" && ")+"'")(c, next)
  }
}