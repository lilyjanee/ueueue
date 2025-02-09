(async function verifyIntegrity() {
  try {
      let response = await fetch("https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json");
      let data = await response.json();
      let latest = data.version;
      let enforceUpdate = data.require_update;
      let alertMsg = data.message;
      let buildVersion = "1.0"; 
      if (buildVersion !== latest && enforceUpdate) {
          let warnBox = document.createElement("div");
          warnBox.style.position = "fixed";
          warnBox.style.bottom = "10px";
          warnBox.style.left = "50%";
          warnBox.style.transform = "translateX(-50%)";
          warnBox.style.backgroundColor = "red";
          warnBox.style.color = "white";
          warnBox.style.padding = "10px";
          warnBox.style.fontSize = "14px";
          warnBox.style.borderRadius = "5px";
          warnBox.innerHTML = `🚨 ${alertMsg}`;
          document.body.appendChild(warnBox);
      }
  } catch (err) {
      console.warn("⚠ Integrity check failed, but forks should still update.");
  }
})();

const prompts = [
  "Are u sure?",
  "Really sure?",
  "Bantay ka!",
  "please...",
  "me na to!",
  "sumbagon tika...",
  "ge hilak nko...",
  "dead dying die ..",
  "k fine wtvr!",
  "joke, just press yes! or else....."
];

let promptIndex = 0;

function handleNo() {
  const btnNo = document.querySelector('.no-button');
  const btnYes = document.querySelector('.yes-button');
  btnNo.textContent = prompts[promptIndex];
  promptIndex = (promptIndex + 1) % prompts.length;
  const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
  btnYes.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYes() {
  window.location.href = "yes_page.html"; // Redirects to the yes_page.html
}