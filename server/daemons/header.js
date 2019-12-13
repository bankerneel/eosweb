/*
	Header require for daemons
*/
const asyncjs		= require('async');
const request		= require('request-promise');
const req			= require('request');
const path 			= require("path");
const fs 			= require("fs");

const configName    = (process.env.CONFIG) ? process.env.CONFIG : 'config';
const config        = require(`../../${configName}`);

const mongoose      = require("mongoose");
mongoose.Promise  	= global.Promise;

const ALA     		= require('alaiojs');
config.alaConfig.httpEndpoint = (config.CRON) ? config.CRON_API : config.alaConfig.httpEndpoint;
const ala     		= ALA(config.alaConfig);

module.exports = (loggerFileName) => {
	const { logWrapper } = require('../utils/main.utils');
	const log            = new logWrapper(loggerFileName);
	
	const customSlack = require('../modules/slack.module');
	const logSlack    = customSlack.configure(config.loggerSlack.alerts);

	process.on('uncaughtException', (err) => {
    	logSlack(`======= UncaughtException ${loggerFileName} saemon : ${err}`);
    	process.exit(1);
	});
	
	const mongoMain = mongoose.createConnection(config.MONGO_URI, config.MONGO_OPTIONS,
	 (err) => {
	    if (err){
	      log.error(err);
	      process.exit(1);
	    }
	    log.info(`[Connected to Mongo ALA in (${loggerFileName}) Daemon]`);
	});
	
	const SETTINGS_DB 		= require('../models/api.stats.model')(mongoMain);
	const STATS_ACCOUNT_DB 	= require('../models/api.accounts.model')(mongoMain);
	const TABLE_DB 			= require('../models/producers.model')(mongoMain);

	return {ala, SETTINGS_DB, STATS_ACCOUNT_DB, TABLE_DB, log, logSlack, asyncjs, config, request, req, path, fs};
};