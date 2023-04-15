let options = {};

export const sendEvent = (data) => {
  data.appid = options.APP_ID;

  fetch("http://localhost:3000/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, ...options.senderData }),
  });
};

const eventListeners = {};
export default {
  install(Vue, _options) {
    options.senderData = {
      appid: options.APP_ID,
    };
    options.idleTimeout = _options.idleTimeout || 15 * 60 * 1000;
    Vue.directive("tracker", {
      mounted(el, binding) {
        console.log(binding);
        eventListeners[binding.value] = () => {
          sendEvent({
            tag: binding.value,
            event_type: "click",
          });
        };
        el.addEventListener("click", eventListeners[binding.value]);
      },
      unmounted(el, binding) {
        el.removeEventListener("click", eventListeners[binding.value]);
        delete eventListeners[binding.value];
      },
    });
  },
};
