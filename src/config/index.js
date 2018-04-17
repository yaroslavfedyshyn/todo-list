const path = require('path');

const config = {};

config.socialMedia = {
    facebookAppId: process.env.FACEBOOK_APP_ID,
    linkedInAppId: process.env.LINKED_IN_APP_ID,
    facebookUrl: process.env.SOCIAL_MEIDA_FACEBOOK_URL,
    linkedInUrl: process.env.SOCIAL_MEIDA_LINKEDIN_URL,
    youtubeUrl: process.env.SOCIAL_MEIDA_YOUTUBE_URL,
    twitterUrl: process.env.SOCIAL_MEIDA_TWITTER_URL,
    pubNubPublishKey: process.env.PUBNUB_PUBLISH_KEY,
    pubNubSubscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
};

config.webRTCSignalingServer = process.env.WEB_RTC_SIGNALING_SERVER;

config.workingDirectory = path.join(__dirname, '../../').normalize();

config.getImageUrl = '/api/v1/files';

module.exports = config;
