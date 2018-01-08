module.exports = {
  awsRegion: 'us-east-1',
  awsS3Appname: 'nodered2018',
  storageModule: require('node-red-contrib-storage-s3'),

  httpAdminRoot: '/',
  httpNodeRoot: '/api/',
  uiPort: 3000,
  functionGlobalContext: {
    // os:require('os'),
  },
  adminAuth: {
    type: 'credentials',
    users: [{
      username: process.env.NODE_RED_USERNAME,
      password: process.env.NODE_RED_PASSWORD,
      permissions: '*'
    }]
  },
  debugMaxLength: 1000,
  debugUseColors: true,
  flowFile: 'flows.json',
  userDir: process.env.HOME,
  ui: { path: 'ui' },
  logging: {
    console: {
      level: 'trace'
    }
  }
}