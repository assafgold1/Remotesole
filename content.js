// const div = document.createElement("div");
// div.innerHTML = `
//   <div style="position: fixed; bottom: 10px; right: 10px; z-index: 9999;">
//     <input type="text" id="messageInput" placeholder="Type message...">
//     <button id="sendButton">Send</button>
//   </div>
// `;

// document.body.appendChild(div);

// // const port = chrome.runtime.connect({ name: "websocket" });

// const socket = io("http://localhost:9999");

// document.getElementById("sendButton").addEventListener("click", () => {
//   const message = document.getElementById("messageInput").value;
//   port.postMessage({ type: "send", data: message });
// });

// port.postMessage({ type: "connect" });

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.code) {
//       // Execute the user-provided code within the context of the webpage
//       try {
//           // Use eval() or Function() to execute the code
//           var result = eval(message.code);
//           sendResponse({ result: result });
//       } catch (error) {
//           sendResponse({ error: error.message });
//       }
//   }
// });
