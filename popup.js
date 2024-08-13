document.getElementById('saveKey').addEventListener('click', () => {
    const apiKey = document.getElementById('apiKey').value;
    chrome.storage.sync.set({ openaiKey: apiKey }, () => {
      alert('API Key saved!');
    });
  });
  