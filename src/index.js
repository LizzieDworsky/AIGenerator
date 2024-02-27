function handleRequestDelay() {
    new Typewriter("#poem", {
        strings: ["Poem Generating...", "Poem Generating..."],
        autoStart: true,
        cursor: null,
        delay: 35,
    });
}

function generatePoem(poemTopic) {
    console.log(poemTopic);
    let poemValue =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ex fugit accusamus eius quaerat. Eaque neque nihil sunt vero cum, debitis rem natus nobis incidunt voluptatem, aut, sequi est excepturi.";
    typePoem(poemValue);
}

function typePoem(poemValue) {
    new Typewriter("#poem", {
        strings: poemValue,
        autoStart: true,
        cursor: null,
        delay: 50,
    });
}

function handleSubmit(e) {
    e.preventDefault();
    let inputElement = document.getElementById("form-input");
    handleRequestDelay();
    generatePoem(inputElement.value);
    inputElement.value = "";
}

let poemForm = document.getElementById("poem-gen-form");
poemForm.addEventListener("submit", handleSubmit);
