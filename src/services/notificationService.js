const axios = require('axios');

// Gửi thông báo Discord


// Gửi payload đến webhook-test
const sendDiscordNotification = async (trackingId, stateName, eventDateTime) => {
    try {
      const message = `🚚 **Tracking Update**\nTracking ID: ${trackingId}\nState: ${stateName}\nUpdated At: ${eventDateTime}`;
      const response = await axios.post(
        'https://discord.com/api/webhooks/1314965089320702002/5tuV8SijkIYLf_m46db2VhBfyJygiEKHxPLnA6h0bYefIXx_7kIvoNktfKgDCsnthJhm',
        { content: message }
      );
      console.log(`Đã gửi thông báo đến Discord cho trackingId: ${trackingId}, Response: ${response.status}`);
    } catch (error) {
      console.error(`Lỗi khi gửi thông báo đến Discord cho trackingId: ${trackingId}`, error.message);
    }
  };
  
  const sendPayloadToWebhook = async (trackingId, stateName, eventDateTime) => {
    try {
      const payload = {
        trackingId,
        stateName,
        eventDateTime,
        timestamp: new Date().toISOString(),
      };
  
      const response = await axios.post(
        'https://webhook-test.com/64df19766b5ec15a3209253f8e7d6843',
        payload
      );
      console.log(`Đã gửi payload đến webhook-test cho trackingId: ${trackingId}, Response: ${response.status}`);
    } catch (error) {
      console.error(`Lỗi khi gửi payload đến webhook-test cho trackingId: ${trackingId}`, error.message);
    }
  };
  



module.exports = { sendDiscordNotification, sendPayloadToWebhook };
