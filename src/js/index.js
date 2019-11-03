window.onload = function() {
    const textarea = '<div class="textarea"><textarea name="text" rows="6" cols="60" autofocus></textarea></div>';
    const keyboard = '<div id="keyboard"></div>';
    const body = document.querySelector('body');

    body.insertAdjacentHTML('afterbegin', keyboard);
    body.insertAdjacentHTML('afterbegin', textarea);

    // const RuLower = [
    //     'ё', '1', '2','3','4','5','6','7','8','9','0','-','=', 'Backspace',
    //   'Tab','й', 'ц', 'у', 'к', 'е', 'н','г', 'ш', 'щ', 'з', 'х','ъ','\\', 'DEL',
    //   'CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter',
    //   'Shift','я','ч','с','м','и','т','ь','б','ю','.','▲','Shift',
    //   'Ctrl','Win','Alt','','Alt','Ctrl','◄','▼','►'];

    // const RuUpper = [
    //     'Ё', '1', '2','3','4','5','6','7','8','9','0','-','=', 'Backspace',
    //     'Tab','Й', 'Ц', 'У', 'К', 'Е', 'Н','Г', 'Ш', 'Щ', 'З', 'Х','Ъ','\\', 'DEL',
    //     'CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter',
    //     'Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','▲','Shift',
    //     'Ctrl','Win','Alt','','Alt','Ctrl','◄','▼','►'];

    // const EngUpper = [
    //     '~', '1', '2','3','4','5','6','7','8','9','0','-','=', 'Backspace',
    //     'Tab','Q', 'W', 'E', 'R', 'T', 'Y','U', 'I', 'O', 'P', '[',']','\'',
    //     'CapsLock','A','S','D','F','G','H','J','K','L',';','','Enter',
    //     'Shift','Z','X','C','V','B','N','M',',','.','/','▲','Shift',
    //     'Ctrl','Win','Alt','','Alt','Ctrl','◄','▼','►'
    // ];

    const enKeyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
        9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
        20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 186, 13,
        16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
        17, 91, 18, 32, 18, 17, 37, 40, 39];

    function InitialKeyboard() {
        let out = '';
        enKeyboard.forEach((el) => {
            out += `<div class="key-definition" data=` + el + `>${String.fromCharCode(el)}</div>`;
        });
        document.getElementById('keyboard').innerHTML = out;
    }

    InitialKeyboard();

    document.addEventListener('keypress', function(event) {
        document.querySelectorAll('#keyboard .key-definition').forEach(function(el) {
            el.classList.remove('active');
        });
        document.querySelector('#keyboard .key-definition[data="' +event.keyCode+ '"]').classList.add('active');
        document.addEventListener('keyup', function(event) {
            document.querySelectorAll('#keyboard .key-definition').forEach(function(el) {
                el.classList.remove('active');
            });
        });
    });

    function specialkeys() {
        const specialKeys = [8, 9, 20, 13, 16, 17, 18, 32, 38, 37, 40, 39];
        const specialKeysContent = ['Backspace', 'Tab', 'Caps Lock', 'Enter', 'Shift', 'Shift', 'Ctrl', 'Ctrl', 'Alt', 
        'Alt', 'Space', '▲', '◀', '▼', '▶'];
        const specialKeysWidth = [100, 100, 100, 115, 107.5, 107.5, 75, 75, 75, 75, 198, 50, 50, 50, 50];
    
        let i = 0;
        specialKeys.forEach((el) => {
            const element = document.querySelectorAll('div[data="' + `${el}` + '"]');
            element.forEach((e) => {
            e.classList.add('special-key');
            e.innerText = specialKeysContent[i];
            e.style.width = specialKeysWidth[i] + 'px';
            i++;
            });
        });
    
        document.addEventListener('keydown', function(event) {
            document.querySelectorAll('.special-key').forEach(function(el) {
                el.classList.remove('active');
            });
            document.querySelector('.special-key[data="' +event.keyCode+ '"]').classList.add('active');
            document.addEventListener('keyup', function(event) {
                document.querySelectorAll('.special-key').forEach(function(el) {
                    el.classList.remove('active');
                });
            });
        });
    }

    specialkeys();

    function InputKeys() {
        document.addEventListener('click', function(event) {
            textarea.addEventListener('click'), e => {
                
            }
        });
    }
    


}