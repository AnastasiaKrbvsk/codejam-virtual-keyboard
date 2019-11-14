import Keyboard from './keyboard';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const textArea = document.createElement('textarea');
document.body.append(wrapper);
wrapper.prepend(textArea);
textArea.focus();

const board = new Keyboard(wrapper);
board.render();
