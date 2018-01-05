# node-red-for-now

## install now-cli

- Run `npm install -g now`

## Usage

- Run `git clone https://github.com/high-u/node-red-for-now.git`
- Run `cd ./node-red-for-now`
- Run `now secrets add node-red-username 'admin'`
- Run `now secrets add node-red-password '$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.'`
- Run `now secrets add aws-access-key-id 'AKXXXXXXXXXXXXXXXX6A'`
  - Your AWS "AWS Access Key Id"
- Run `now secrets add aws-secret-access-key 'YZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCi'`
  - Your AWS "AWS Secret Access Key"
- Edit "now.json"
  - Change "name"
  - Change "alias"
- Run `now`
- Run `now alias`

### example user

- username: admin
- password: password
