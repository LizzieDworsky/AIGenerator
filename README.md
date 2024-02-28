# AI Poem Generator

# Table of Contents

-   [Live Demo](#live-demo)
-   [Description](#description)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [File Structure](#file-structure)
-   [Future Work](#future-work)
-   [Challenges and Lessons Learned](#challenges-and-lessons-learned)
-   [Contributing](#contributing)

## Live Demo

You can check out the live demo of the application here: [Live Demo Link.](https://helpful-boba-d4f22f.netlify.app/)

## Description

The AI Poem Generator is an interactive web application that leverages a third-party AI to craft unique poems based on user-specified topics. Designed with a focus on user experience, this application offers a novel and engaging way for users to explore poetry through technology.

## Features

-   **Dynamic Poem Generation:** Users can enter a topic to receive a creatively generated poem.
-   **Typewriter Effect:** Enhances the presentation of poems with a visually appealing typewriter animation.
-   **Responsive and Intuitive Design:** Ensures a seamless and enjoyable user experience across various devices.
-   **Secure API Key Management:** Utilizes Netlify functions to securely manage API keys, protecting sensitive information.

## Installation

To set up this project locally with Netlify CLI and Netlify Dev, follow these steps:

1. Clone the repository to your local machine.
    ```
    git clone https://github.com/LizzieDworsky/VanillaJS_AI_PoemGenerator.git
    ```
2. Navigate to the project directory.
    ```
    cd VanillaJS_AI_PoemGenerator
    ```
3. Install Netlify CLI globally (if you haven't already).
    ```
    npm install netlify-cli -g
    ```
4. Create a `.env` file at the root level of your project and add your API keys.
    ```
    AI_API_KEY=your_api_key_here
    ```
5. Start the local development server with Netlify Dev to use serverless functions.
    ```
    netlify dev
    ```
6. Open the local server URL provided by Netlify Dev in your browser to view the application.

## Usage

1. Enter a topic of your choice in the input field (e.g., "Nature", "Sandwiches", "Adventure").
2. Click the "Submit" button.
3. Wait for a few moments as the poem is being generated.
4. Read and enjoy the poem displayed with a captivating typewriter effect.

## File Structure

```
AIGenerator/
│
├── netlify/
│   └── functions/
│       └── fetchAiApiKey.js  # Netlify serverless function to fetch API key
│
├── src/
│   ├── app.js        # JavaScript file containing logic for poem generation
│   └── style.css     # Stylesheet for styling the web application
│
├── .env              # Environment variables for local development
├── index.html        # Main HTML file
└── README.md         # Documentation of the project
```

## Future Work

-   **Enhanced Error Handling:** Improve the way errors are communicated to users, ensuring that any issues encountered during the poem generation process are relayed in a user-friendly manner without exposing technical details. This involves enhancing the current try-catch blocks in `fetchAiApiKey` and `generatePoem` functions to provide more intuitive feedback to the user.
-   **Security Enhancements:** Address potential security risks in user input handling, particularly in the `craftPromptUrl` function. Implement `encodeURIComponent` to encode user inputs, mitigating risks related to URL injection and ensuring special characters do not compromise the request URL's integrity.
-   **Performance Optimization:** Evaluate and optimize the performance of the typewriter effect, especially for lengthy poems or extensive loading messages. This may involve assessing the efficiency of the typewriter-effect library and considering alternatives if necessary to ensure smooth performance across all devices, with a particular focus on responsiveness in mobile environments.

-   **Code Quality and Structure:** Continue to refine the code structure and readability, adhering to best practices such as the single-responsibility principle and consistent naming conventions. This ongoing effort will maintain the codebase's clarity and ease of maintenance.

-   **Social Sharing:** Implement social media sharing features to allow users to share their generated poems on platforms like Facebook, Twitter, and Instagram, enhancing the application's engagement and reach.

These improvements aim to enhance the application's robustness, security, user experience, and engagement ensuring that the AI Poem Generator remains engaging, secure, and efficient for all users.

## Challenges and Lessons Learned

-   **Netlify Functions for Secure API Key Management:** Implementing Netlify functions for secure API key retrieval was instrumental in protecting sensitive information, both during local development and in production.
-   **Local Development with Netlify Dev:** Utilizing Netlify Dev for local development streamlined the process of testing serverless functions and simulating the production environment.
-   **AI API Interaction:** Crafting effective prompts and contexts for the AI to ensure the generated poems meet user expectations required careful experimentation and learning.
-   **User Interface Design:** A significant focus was placed on UI details to enhance the overall user experience, involving iterative testing and feedback from friends and family to identify and refine every aspect that could impact user enjoyment.

## Contributing

Contributions to the AI Poem Generator are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.
