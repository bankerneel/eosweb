/*
  App configuration example created by aladinexplorernetbp1
*/
const path = require('path');
let config = {};

// production mod
config.PROD = false;

// mongo uri and options
config.MONGO_URI = process.env.MONGO_URI || 'mongodb://172.31.21.56:27017/7bpchain';
config.MONGO_OPTIONS = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true
};

// cron processes (aggregation of main stat - actions, transactions, accounts, analytics)
config.CRON = false;
config.CRON_API = 'https://public.alainfra.io';

// anable TPS APS daemon aggregation
config.TPS_ENABLE = true;
config.MAX_TPS_TIME_UPDATE = 5000; // time of break between reload (leave by default)

// enable for private network (daemon for Actions, Accounts)
config.CUSTOM_GLOBA_STATS = false;

// producer json name
config.producerJSON = 'bp.json';

// telegram alert bot (depreceted)
config.telegram = {
  ON: false,
  TOKEN: '',
  TIME_UPDATE: 5000
};

// reserve nodes
config.endpoints = [
      'http://bp.cryptolions.io',
      'https://ala.greymass.com',
      'https://public.alainfra.io', 
      'http://alabp-0.atticlab.net'
];

// alaexplorerjs
config.alaConfig = {
  chainId: "6c74c33ba4a0b34c9bdcbdb9a4ca6a0e35137432bda6ceebb422e3c37ce38c86",
  keyProvider: "",
  httpEndpoint: config.endpoints[0],
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  sign: true,
  logger: {
    error: console.error
  }
};

// api url for producers list
config.customChain = 'https://nodes.get-scatter.com';

// api url for history
config.historyChain = 'https://ala.greymass.com';

// tokens api
config.tokensAPI = 'http://api.light.xala.me/api/account/ala/';

config.apiV = 'v1'; // api version
config.RAM_UPDATE = 5 * 60 * 1000; // time for ram update - /api/api.*.socket
config.HISTORY_UPDATE = 5 * 60 * 1000; // time for stats update - /api/api.*.socket 
config.MAX_BUFFER = 500000; // max buffer size for child processes (kb) - /crons
config.blockUpdateTime = 900; // mainpage upades frequency  - /api/api.*.socket in ml sec
config.offsetElementsOnMainpage = 10; // blocks on mainpage
config.limitAsync = 30; // max threads for async.js module  
config.updateTPS = 1000;

// slack notifications
config.loggerSlack = {
      alerts: {
        type: '',
        token: '',
        channel_id: '',
        username: '',
      }
};

module.exports = config;

