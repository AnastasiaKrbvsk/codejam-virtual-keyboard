export default class key {
    constructor(RuLow, RuUp, EnLow, EnUp, keyCode, parent) {
        this.RuLow = RuLow;
        this.RuUp = RuUp;
        this.EnLow = EnLow;
        this.EnUp = EnUp;
        this.parent = parent;
        this.child = null;
        this.button = null;
        this.keyCode = keyCode;
        this.createBtn();
    }

    createBtn() {
        this.child = document.childElement('span');
        this.child.innerText = this.RuLow;
        this.button = document.createElement('div');
        this.parent.append(this.button);
        this.button.append(this.child);
        this.button.classList.add('key-definition');
        this.button.id = this.keyCode;
    }

    render(lang, capsState, shiftState) {
        if (lang = 'ru' && capsState === shiftState) {
            this.child.innerText = this.RuLow;
        }
        if (lang = 'ru' && capsState !== shiftState) {
            this.child.innerText = this.RuUp;
        }
        if (lang = 'en' && capsState === shiftState) {
            this.child.innerText = this.EnLow;
        }
        if (lang = 'en' && capsState !== shiftState) {
            this.child.innerText = this.EnUp;
        }
        if (capsState === true && this.keyCode === 20) {
            this.button.classList.add('active');
        }
        if (capsState === false && this.keyCode === 20) {
            this.button.classList.remove('active');
        }
    }
}