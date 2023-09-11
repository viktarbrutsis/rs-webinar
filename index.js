import Reveal from "./reveal/dist/reveal.esm.js";
import Markdown from "./reveal/plugin/markdown/markdown.esm.js";
import Highlight from "./reveal/plugin/highlight/highlight.esm.js";

window.addEventListener("load", () => {
    Reveal.initialize({
        plugins: [Markdown, Highlight],
    });

    const elementsClear = document.querySelectorAll(".button__clear");
    elementsClear.forEach((element) => element.addEventListener("click", clearAllConsoles));
});

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }
    getFullName() {
        return `My name is ${this.name} and my surname - ${this.surname}`
    }
}

const newOne = new User('Viktar', 'Brutsis');

console.log(newOne);
