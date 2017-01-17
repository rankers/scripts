var apn = require('apn');

var options = {
  cert: "",
  key: "",
  production: false,
};

let deviceTokens = [""];

var apnProvider = new apn.Provider(options);

let notification = new apn.Notification();
notification.alert = "Hello, world!";
notification.badge = 1;
notification.topic = "";

apnProvider.send(notification, deviceTokens).then( (response) => {
  if (response.failed) {
    console.log(response.failed);
    process.exit(1)
  } else {
    console.log(response.sent);
    process.exit(0)
  }
});
