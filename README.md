# node-red-for-now

## install now-cli

- Run `npm install -g now`

## Usage

1. Run `git clone https://github.com/high-u/node-red-for-now.git`
1. Run `cd ./node-red-for-now`
1. Run `now secrets add node-red-username 'admin'`
1. Run `now secrets add node-red-password '$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.'`
1. Run `now secrets add aws-access-key-id 'AKXXXXXXXXXXXXXXXX6A'`
  - Your AWS "AWS Access Key Id"
1. Run `now secrets add aws-secret-access-key 'YZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCi'`
  - Your AWS "AWS Secret Access Key"
1. Edit "now.json"
  - Change "name"
  - Change "alias"
1. Run `now`
1. Run `now alias`

- example user
  - username: admin
  - password: password
