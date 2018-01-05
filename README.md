# node-red-for-now

## Install now-cli

- Run `npm install -g now`

## Usage

- Run `git clone https://github.com/high-u/node-red-for-now.git`
- Run `cd ./node-red-for-now`
- Run `now secrets add node-red-username 'admin'`
  - Change Username.
- Run `now secrets add node-red-password '$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.'`
  - Change Password. [Make Password](https://nodered.org/docs/security#generating-the-password-hash)
- Run `now secrets add aws-access-key-id 'AKXXXXXXXXXXXXXXXX6A'`
  - Your "AWS Access Key Id".
- Run `now secrets add aws-secret-access-key 'YZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCi'`
  - Your "AWS Secret Access Key".
- Edit "now.json"
  - Change "name" key's value.
  - Change "alias" key's value.
- Run `now`
- Run `now alias`

### example user

- username: admin
- password: password
