const { argv } = require('yargs');
const { config } = require('./wdio.sauce.shared');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'iPhone ([678]|X.*)',
    platformName: 'iOS',
    app: 'storage:filename=iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.4.0.ipa',
    idleTimeout: 180,
    cacheId: new Date().getTime(),
    autoAcceptAlerts: true,
    noReset: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    language: argv.language || 'en',
    build: 'sample-app-mobile',
    name: 'Sample App Test Name',
  },
];

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 5;

exports.config = config;
