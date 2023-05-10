function sendEvent(event, secret) {
  fetch("http://localhost:3001/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(secret.app_id + ":" + secret.app_secret).toString("base64"),
    },
    body: JSON.stringify(event),
  });
}

module.exports = function tracker({ app_id, service, app_secret }) {
  const secretData = {
    app_id,
    app_secret,
  };
  return (req, res, next) => {
    const userData = {
      ip: req.ip,
      user_agent: req.get("User-Agent"),
      referer: req.get("Referer") || req.get("Referrer"),
      url: req.originalUrl,
      method: req.method,
      // id session,
      // id visitor,
    };

    req.sendTrackingEvent = (event) => {
      sendEvent(
        {
          ...event,
          ...userData,
          service,
        },
        secretData
      );
    };
  };
};
