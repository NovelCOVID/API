// NODE PACKAGES
const Redis = require('ioredis');

// LOCAL FUNCTIONS
const getWorldometers = require('../funcs/getWorldometers');
const getStates = require('../funcs/getStates');
const jhuLocations = require('../funcs/jhuLocations');
const historical = require('../funcs/historical');

let config;
try {
	config = require('../config.json');
} catch (err) {
	config = require('../config.example.json');
}

const redis = new Redis(config.redis.host, {
	password: config.redis.password,
	port: config.redis.port
});

module.exports = {
	redis,
	config,
	scraper: {
		getWorldometers,
		getStates,
		jhuLocations,
		historical
	}
};
