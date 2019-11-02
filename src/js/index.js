window.onload = function() {
    const textarea = '<div class="textarea"><textarea name="name" rows="6" cols="60"></textarea></div>';
    const keyboard = '<div id="keyboard"></div>';
    const body = document.querySelector('body');

    body.insertAdjacentHTML('afterbegin', keyboard);
    body.insertAdjacentHTML('afterbegin', textarea);

    const enKeyboard = [];

}