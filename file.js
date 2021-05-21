document.write(
  "<scr" +
    'ipt src="https://www.googletagmanager.com/gtag/js?id=G-4BP6Q9D13V"></scr' +
    "ipt>"
);
try {
  console.log("cdn:v1.0");
  window.dataLayer = window.parent.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
    dataLayer.push({ user_id: window.parent.user_id });
  }
  window.relevancSetUser = function (user) {
    gtag("set", { user_id: user });
  };
  window.relevancCheckout = function (checkout) {
    gtag("event", "checkout", {
	    cart: JSON.stringify(checkout),
      send_to: "G-4BP6Q9D13V",
    });
  };
} catch (e) {
  console.log(e);
}

