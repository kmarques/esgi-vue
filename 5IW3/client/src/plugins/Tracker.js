// LIBRARY
const sendEvent = (data) => {
  const url = `http://localhost:3000/events`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// END LIBRARY

export default {
  install(Vue, options) {
    if (!options.APP_ID) {
      throw new Error("APP_ID is required");
    }
    const configData = {
      APP_ID: options.APP_ID,
      service: options.service || "frontend",
      // ID VISITOR,
      // ID SESSION/VISIT,
    };
    console.log(configData);

    const eventListeners = {};

    Vue.directive("track", {
      mounted(el, binding) {
        eventListeners[binding.arg] = () => {
          sendEvent({
            ...configData,
            event: click,
            tag: binding.arg,
          });
        };
        el.addEventListener("click", eventListeners[binding.arg]);
      },
      unmounted(el, binding) {
        el.removeEventListener("click", eventListeners[binding.arg]);
        delete eventListeners[binding.arg];
      },
    });
  },
};
