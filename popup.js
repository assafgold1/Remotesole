"use strict";

chrome.runtime.sendMessage({ event: "begin" });

// const socket = io("http://localhost:9999");

// const runCommand = (command) => {
//   command === "clear()" && console.clear();
//   command === "reload()" && location.reload();
//   command === "back()" && history.back();
//   command === "forward()" && history.forward();
//   command === "scrollToTop()" && window.scrollTo(0, 0);
//   command === "scrollToBottom()" && window.scrollTo(0, document.body.scrollHeight);
//   command === "scrollToMiddle()" && window.scrollTo(0, document.body.scrollHeight / 2);
//   command === "scrollToTop()" && window.scrollTo(0, 0);
//   command === "scrollToBottom()" && window.scrollTo(0, document.body.scrollHeight);
//   command === "scrollToMiddle()" && window.scrollTo(0, document.body.scrollHeight / 2);
//   // console log command that logs whatever is passed in the string
//   if (command.includes("console.log(")) {
//     const log = command.replace("console.log(", "").replace(")", "");
//     console.log(log);
//   }
//   // alert command that alerts whatever is passed in the string
//   if (command.includes("alert(")) {
//     const alert = command.replace("alert(", "").replace(")", "");
//     window.alert(alert);
//   }
//   // prompt command that prompts whatever is passed in the string
//   if (command.includes("prompt(")) {
//     const prompt = command.replace("prompt(", "").replace(")", "");
//     window.prompt(prompt);
//   }
//   // confirm command that confirms whatever is passed in the string
//   if (command.includes("confirm(")) {
//     const confirm = command.replace("confirm(", "").replace(")", "");
//     window.confirm(confirm);
//   }
// }

// socket.on("connect", () => {
//   socket.on("command", (data) => {
//     // eval(data.command);
//     // Your JavaScript code stored as a string
//     var userCode = data.command;
    
//     runCommand(userCode);

//     // Function to execute JavaScript code from a string
//     // function executeCode(codeString) {
//     //   try {
//     //     // Use the Function constructor to create a function from the code string
//     //     var func = new Function(codeString);

//     //     // Call the function
//     //     return func();
//     //   } catch (error) {
//     //     if (error instanceof SyntaxError) {
//     //       console.error("Syntax error in code:", error.message);
//     //     } else {
//     //       console.error("Error executing code:", error);
//     //     }
//     //     return null; // Or handle the error in an appropriate way for your application
//     //   }
//     // }

//     // // Example usage:
//     // var code = "console.log('Hello, world!');";
//     // executeCode(code); // This will log 'Hello, world!' to the console


//     // Send the user-provided code to the content script
//     // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     //     chrome.tabs.sendMessage(tabs[0].id, { code: userCode });
//     // });

//     // chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     //   chrome.tabs.sendMessage(tabs[0].id, { type: "command", data: data });
//     // });
//   })
// })

const ids = [
  {
    who: "assaf",
    // ip: "104.28.244.18",
    id: "666"
  },
  {
    who: "pizza",
    // ip: "81.199.23.60",
    id: "777"
  }
]

document.getElementById("connectButton").addEventListener("click", () => {
  const friendId = document.getElementById("friendIdInput").value;
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "connect", friendId: friendId });
  });
});

document.getElementById("YourID").innerText = `Your ID: ${ids[Math.floor(Math.random() * ids?.length)]?.id}`;

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

document.getElementById("openDevTools").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "openDevTools" });
});