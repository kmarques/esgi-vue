const sendEvent = (data, secretData) => {
  const url = `http://localhost:3000/events`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(`${secretData.APP_ID}:${secretData.APP_SECRET}`).toString(
          "base64"
        ),
    },
  });
};

module.exports = function tracker({ APP_ID, APP_SECRET, service = "backend" }) {
  const secretData = {
    APP_ID,
    APP_SECRET,
  };

  return function trackerMiddleware(req, res, next) {
    const userData = {
      ip: req.ip,
      url: req.url,
      method: req.method,
      userAgent: req.headers["user-agent"],
      // ID Visitor,
      // ID Session,
    };

    req.sendTrackerEvent = function (...event) {
      sendEvent(
        {
          ...userData,
          ...event,
        },
        secretData
      );
    };
  };
};
