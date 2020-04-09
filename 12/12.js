class Options {
    constructor(height, width, dg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.dg = dg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
createElem(){

    let elem = document.createElement('div');
    document.body.appendChild(elem);
    elem.innerHTML = prompt('Введите текст', '');
    let param = `height: ${this.height}px; width:${this.width}px; background-color: ${this.dg}; fontSize: ${this.fontSize}px; textAligin: ${this.textAlign}`;
    elem.style.cssText = param;
    }
}
const item = new Options(200, 400, "green", 150, 'center');
item.createElem();
