async function fetchAiApiKey() {
    try {
        const response = await axios.get("/.netlify/functions/fetchAiApiKey");
        return response.data.key;
    } catch (error) {
        console.error("An error occurred while fetching the API key:", error);
        return null;
    }
}

function handleRequestDelay(poemTopic) {
    new Typewriter("#poem", {
        strings: [`⏳ ${poemTopic} Poem Generating...`],
        autoStart: true,
        cursor: "",
        delay: 35,
    });
}

async function craftPromptUrl(poemTopic) {
    const API_KEY = await fetchAiApiKey();
    let context = `You are a funny poem expert and love to write short poems. Your mission is to generate a 6-10 line poem written in basic HTML with each line seperated by a <br />. You MUST follow the user prompt. Include a title for the poem based on ${poemTopic} in an <h3> element. Do NOT include a <br /> after the last line.`;
    let prompt = `User Prompt: Please write a poem about ${poemTopic}.`;
    let promptUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${API_KEY}`;
    generatePoem(promptUrl);
}

async function generatePoem(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        let poemValue = response.data.answer;
        typePoem(poemValue);
    } catch (error) {
        console.error("An error occurred while generating the poem:", error);
    }
}

function typePoem(poemValue) {
    new Typewriter("#poem", {
        strings: poemValue,
        autoStart: true,
        cursor: null,
        delay: 50,
    });
}

async function handleSubmit(e) {
    e.preventDefault();
    let inputElement = document.getElementById("form-input");
    handleRequestDelay(inputElement.value);
    await craftPromptUrl(inputElement.value);
    inputElement.value = "";
}

let poemForm = document.getElementById("poem-gen-form");
poemForm.addEventListener("submit", handleSubmit);
