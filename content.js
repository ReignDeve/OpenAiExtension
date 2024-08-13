chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "insertText") {
      const textArea = document.activeElement;
      if (textArea && textArea.tagName === 'TEXTAREA') {
        textArea.value += request.text;
      }
    }
  });
  