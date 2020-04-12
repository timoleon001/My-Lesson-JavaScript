class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let el = document.createElement('DIV'),     
            elStyle = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}; `;
        
        el.style.cssText = elStyle;
        el.textContent = "Текст внутри блока!";
        document.body.append(el);
    }    
}
const div = new Options(300, 350,'red', 18, 'right');

div.createDiv();
