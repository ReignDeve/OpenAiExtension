chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "generateLinkedInPost",
      title: "Generate LinkedIn Post",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "generateLinkedInPost") {
      chrome.storage.sync.get(['openaiKey'], (result) => {
        const apiKey = result.openaiKey;
        if (apiKey) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: generateLinkedInPost,
            args: [info.selectionText, apiKey]
          });
        } else {
          alert('Please set your OpenAI API key in the extension popup.');
        }
      });
    }
  });
  
  function generateLinkedInPost(selectedText, apiKey) {
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: `Create a LinkedIn post based on the following text: "${selectedText}"` }],
        max_tokens: 150
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.choices && data.choices.length > 0) {
        const generatedText = data.choices[0].message.content;
        alert(generatedText);
      } else {
        console.error('No choices returned from the API');
        alert('Error: No response from OpenAI.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred: ' + error.message);
    });
  }
  