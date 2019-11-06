import keyboard from "./keyboard";

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

let textArea = document.createElement('textarea');
document.body.append(wrapper);
wrapper.prepend(textArea);
textArea.focus();

let board = new keyboard(wrapper);
board.render();

