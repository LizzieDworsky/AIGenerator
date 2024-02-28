/**
 * This file contains functions to interact with an API for poem generation based on user input.
 * It utilizes Axios for HTTP requests and the Typewriter effect for dynamic text display.
 *
 * Prerequisites:
 * - Axios library for promise-based HTTP requests (https://github.com/axios/axios)
 * - Typewriter-effect library for displaying text with a typewriter effect (https://github.com/tameemsafi/typewriterjs)
 *
 * Functions in this file:
 * - fetchAiApiKey(): Fetches the API key needed for poem generation.
 * - handleRequestDelay(): Displays a loading message with a typewriter effect.
 * - craftPromptUrl(): Crafts the URL needed for the API request based on user input.
 * - generatePoem(): Makes the API request to generate the poem and handles the response.
 * - typePoem(): Displays the generated poem with a typewriter effect.
 * - handleSubmit(): Handles the form submission for poem generation.
 */

/**
 * Asynchronously fetches the AI API key from a Netlify function endpoint.
 * This function is essential for authenticating requests to the poem generation API.
 *
 * Prerequisites: Axios library must be included for HTTP requests.
 *
 * @returns {Promise<string|null>} A promise that resolves with the AI API key or null if an error occurs.
 */
async function fetchAiApiKey() {
    try {
        const response = await axios.get("/.netlify/functions/fetchAiApiKey");
        return response.data.key;
    } catch (error) {
        console.error("An error occurred while fetching the API key:", error);
        return null;
    }
}

/**
 * Displays a loading message with a typewriter effect while the poem is being generated.
 * This function enhances user experience by providing visual feedback during API operations.
 *
 * Prerequisites: Typewriter-effect library must be included for the typewriter effect.
 */
function handleRequestDelay() {
    new Typewriter("#poem", {
        strings: ["⏳ Poem Generating..."],
        autoStart: true,
        cursor: "",
        delay: 35,
    });
}

/**
 * Crafts the API URL for generating the poem based on the given topic and fetches the API key.
 * Initiates the poem generation process by preparing the request URL with user input and context.
 *
 * Prerequisites: Axios library must be included for HTTP requests.
 *
 * @param {string} poemTopic - The topic for the poem.
 */
async function craftPromptUrl(poemTopic) {
    const API_KEY = await fetchAiApiKey();
    let context = `You are a funny poem expert and love to write short poems. Your mission is to generate a 6-10 line poem written in basic HTML with each line seperated by a <br />. You MUST follow the user prompt. Include a title for the poem based on ${poemTopic} in an <h3> element. Do NOT include a <br /> after the last line.`;
    let prompt = `User Prompt: Please write a poem about ${poemTopic}.`;
    let promptUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${API_KEY}`;
    generatePoem(promptUrl);
}

/**
 * Asynchronously requests poem generation from an API and handles the response.
 * This function is responsible for the core functionality of making the API call to generate poems.
 *
 * Prerequisites: Axios library must be included for HTTP requests.
 *
 * @param {string} apiUrl - The URL to the poem generation API.
 */
async function generatePoem(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        let poemValue = response.data.answer;
        typePoem(poemValue);
    } catch (error) {
        console.error("An error occurred while generating the poem:", error);
    }
}

/**
 * Types out the generated poem with a typewriter effect.
 * This function provides an engaging way to present the generated poem to the user.
 *
 * Prerequisites: Typewriter-effect library must be included for the typewriter effect.
 *
 * @param {string} poemValue - The generated poem to display.
 */
function typePoem(poemValue) {
    new Typewriter("#poem", {
        strings: poemValue,
        autoStart: true,
        cursor: null,
        delay: 50,
    });
}

/**
 * Updates the UI to display the user-selected poem topic.
 * This function adds a personal touch by showing the topic the user has chosen for poem generation.
 *
 * @param {string} poemTopic - The topic for the poem chosen by the user.
 */
function addUserPrompt(poemTopic) {
    let userPromptEl = document.getElementById("user-prompt");
    userPromptEl.innerHTML = `Your Topic: ${poemTopic}`;
}

/**
 * Handles the poem generation form submission.
 * Displays a loading message, crafts the prompt URL, and clears the input field upon submission.
 *
 * This function ties together the user input handling and the initiation of the poem generation process.
 *
 * @param {Event} e - The form submission event.
 */
async function handleSubmit(e) {
    e.preventDefault();
    let inputElement = document.getElementById("form-input");
    handleRequestDelay();
    addUserPrompt(inputElement.value);
    await craftPromptUrl(inputElement.value);
    inputElement.value = "";
}

// Event listener for the poem generation form submission.
let poemForm = document.getElementById("poem-gen-form");
poemForm.addEventListener("submit", handleSubmit);
