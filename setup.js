var fs = require('fs')

// make dir
var awsdir = process.env.HOME + '/.aws'
if (!fs.existsSync(awsdir)) {
  fs.mkdirSync(awsdir)
}

// make config file
var config = [
  '[default]',
  'output = json',
  'region = us-east-1'
].join('\n')
fs.writeFileSync(awsdir + '/config' , config)

// make credentials file
var credentials = [
  '[default]',
  'aws_access_key_id = ' + process.env.AWS_ACCESS_KEY_ID,
  'aws_secret_access_key = ' + process.env.AWS_SECRET_ACCESS_KEY
].join('\n')
fs.writeFileSync(awsdir + '/credentials' , credentials)
