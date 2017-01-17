const apn = require('apn');

const options = {
  cert: "certs/dev_con_key&cert.pem",
  key: "certs/dev_con_key&cert.pem",
  production: false,
};

const deviceTokens = [""];

const apnProvider = new apn.Provider(options);

const notification = new apn.Notification();
notification.alert = "Hello, world!";
notification.badge = 1;
notification.topic = "";
notification.payload = {"event_type": "customer_survey"};


apnProvider.send(notification, deviceTokens).then( (response) => {
  if (response.failed) {
    console.log(response.failed);
    process.exit(1)
  } else {
    console.log(response.sent);
    process.exit(0)
  }
});
