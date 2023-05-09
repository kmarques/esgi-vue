function sendEvent(data, secret) {
  fetch("http://localhost:3000/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(secret.appId + ":" + secret.appSecret).toString("base64"),
    },
    body: JSON.stringify(data),
  });
}

function tracker(config) {
  const secretData = {
    appId: config.APP_ID,
    appSecret: config.APP_SECRET,
  };

  return (req, res, next) => {
    const userData = {
      userAgent: req.headers["user-agent"],
      ip: req.ip,
      referrer: req.headers.referer || req.headers.referrer,
      //id visitor,
      //id session,
      service: config.service,
    };

    req.sendEvent = (data) => {
      sendEvent(
        {
          ...userData,
          ...data,
        },
        secretData
      );
    };

    next();
  };
}

module.exports = tracker;
