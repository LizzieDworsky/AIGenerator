async function fetchAiApiKey() {
    try {
        const response = await axios.get("/.netlify/functions/fetchAiApiKey");
        return response.data.key;
    } catch (error) {
        console.error("An error occurred while fetching the API key:", error);
        return null;
    }
}

function handleRequestDelay() {
    new Typewriter("#poem", {
        strings: ["Poem Generating...", "Poem Generating..."],
        autoStart: true,
        cursor: null,
        delay: 35,
    });
}

async function generatePoem(poemTopic) {
    console.log(poemTopic);
    try {
        const API_KEY = await fetchAiApiKey();
        const response = await axios.get(
            `https://api.shecodes.io/ai/v1/generate?prompt=sayhello&context=sayhello&key=${API_KEY}`
        );
        console.log(response);
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
    handleRequestDelay();
    await generatePoem(inputElement.value);
    inputElement.value = "";
}

let poemForm = document.getElementById("poem-gen-form");
poemForm.addEventListener("submit", handleSubmit);
