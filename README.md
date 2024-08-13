


# LinkedIn Post Generator Chrome Extension

This Chrome extension allows users to generate LinkedIn posts based on selected text using the OpenAI API. By simply selecting text on any webpage, users can create a LinkedIn post draft with the help of AI.

## Features

- **Context Menu Integration:** Right-click on any selected text and choose "Generate LinkedIn Post" to create a LinkedIn post based on the selected content.
- **OpenAI Integration:** Utilizes the OpenAI API to generate coherent and professional LinkedIn post content.
- **API Key Management:** Users can easily store and manage their OpenAI API key through the extension's popup interface.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ReignDeve/linkedin-post-generator.git
   ```
2. **Load the extension in Chrome:**
   - Open `chrome://extensions/` in your Chrome browser.
   - Enable "Developer mode" by toggling the switch in the upper-right corner.
   - Click on "Load unpacked" and select the directory where you cloned this repository.

## Usage

1. **Set up your OpenAI API Key:**
   - Click on the extension icon in the Chrome toolbar to open the popup.
   - Enter your OpenAI API key and click "Save API Key".
   
2. **Generate a LinkedIn Post:**
   - Select any text on a webpage.
   - Right-click and choose "Generate LinkedIn Post" from the context menu.
   - A LinkedIn post draft based on the selected text will be generated using the OpenAI API and displayed in an alert.

## Prerequisites

- **OpenAI API Key:** You will need an API key from OpenAI. You can obtain one by signing up at [OpenAI's website](https://platform.openai.com/account/api-keys).
- **Chrome Browser:** This extension is designed to work specifically with Google Chrome.

## Project Structure

- **manifest.json:** The configuration file that defines the extension's properties and permissions.
- **background.js:** Handles background processes, including context menu actions and API requests.
- **popup.html:** The HTML file for the extension's popup interface.
- **popup.js:** Handles the logic for saving and managing the OpenAI API key.

## Error Handling

- **API Key Errors:** If the API key is not provided or is invalid, the extension will prompt the user to enter a valid key.
- **Rate Limiting:** If the OpenAI API rate limit is exceeded (HTTP 429), the extension will notify the user and suggest trying again later.
- **General Errors:** General errors (e.g., network issues, API errors) are logged to the console and displayed to the user via alerts.

## Known Issues

- **Rate Limiting:** Users may encounter rate limiting from the OpenAI API if too many requests are made in a short period.
- **404 Errors:** Ensure that the correct API endpoints are used and that the API key is valid.

## Contribution

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request. Ensure that your code follows the existing style and includes appropriate error handling.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on this repository or contact the repository owner.

---

**Note:** This project is for educational purposes and is not affiliated with LinkedIn or OpenAI. Use it responsibly and ensure compliance with all relevant terms of service.


