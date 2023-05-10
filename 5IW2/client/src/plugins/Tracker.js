export function sendEvent({ tag, type }) {
  fetch("http://localhost:3000/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "App-ID": "fqsdghnh",
    },
    body: JSON.stringify({
      tag,
      type,
    }),
  });
}
export const trackElement = (el, tag, type) => {
  const handleEvent = () => {
    sendEvent({
      tag,
      type,
    });
  };
  el.addEventListener(type, handleEvent);
  return () => {
    el.removeEventListener(type, handleEvent);
  };
};

const eventListeners = {};

/**
 *
 * const ref = useTrack("my-tag", "click");
 *
 */

export default {
  install(app, options) {
    const { AppId } = options;
    app.directive("track", {
      mounted(el, binding) {
        trackElement(el, tag, type);
        const handleEvent = () => {
          sendEvent({
            tag: binding.value,
            type: "click",
          });
        };
        eventListeners[binding.value] = handleEvent;
        el.addEventListener("click", eventListeners[binding.value]);
      },
      unmounted(el, binding) {
        el.removeEventListener("click", eventListeners[binding.value]);
      },
    });
  },
};
