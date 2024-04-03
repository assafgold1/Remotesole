import io from "https://cdn.jsdelivr.net/npm/socket.io-client@4.7.5/+esm";

if (typeof browser === "undefined") {
    var browser = chrome;
}

(async () => {
    const src = chrome.runtime.getURL("https://cdn.jsdelivr.net/npm/socket.io-client@4.7.5/+esm");
    const contentMain = await import(src);
    contentMain.main();
  })();

browser.runtime.onMessage.addListener((message) => {
    if (message.event === "begin") connect();
});

function connect() {
    console.log("connect triggered")

    console.log(io)

    const socket = io("http://localhost:9999");

    socket.on("connect", () => {
        socket.on("command", (data) => {
            // eval(data.command);
            // Your JavaScript code stored as a string
            var userCode = data.command;

            runCommand(userCode);
        })
    })
}

const runCommand = (command) => {
    command === "clear()" && console.clear();
    command === "reload()" && location.reload();
    command === "back()" && history.back();
    command === "forward()" && history.forward();
    command === "scrollToTop()" && window.scrollTo(0, 0);
    command === "scrollToBottom()" && window.scrollTo(0, document.body.scrollHeight);
    command === "scrollToMiddle()" && window.scrollTo(0, document.body.scrollHeight / 2);
    command === "scrollToTop()" && window.scrollTo(0, 0);
    command === "scrollToBottom()" && window.scrollTo(0, document.body.scrollHeight);
    command === "scrollToMiddle()" && window.scrollTo(0, document.body.scrollHeight / 2);
    // console log command that logs whatever is passed in the string
    if (command.includes("console.log(")) {
        const log = command.replace("console.log(", "").replace(")", "");
        console.log(log);
    }
    // alert command that alerts whatever is passed in the string
    if (command.includes("alert(")) {
        const alert = command.replace("alert(", "").replace(")", "");
        window.alert(alert);
    }
    // prompt command that prompts whatever is passed in the string
    if (command.includes("prompt(")) {
        const prompt = command.replace("prompt(", "").replace(")", "");
        window.prompt(prompt);
    }
    // confirm command that confirms whatever is passed in the string
    if (command.includes("confirm(")) {
        const confirm = command.replace("confirm(", "").replace(")", "");
        window.confirm(confirm);
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openDevTools") {
      chrome.tabs.create({ url: "chrome://inspect/#devices" });
    }
  });