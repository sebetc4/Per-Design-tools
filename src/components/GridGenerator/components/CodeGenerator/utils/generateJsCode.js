const generateColorList = (gridList, colorList) => {
    let colorListIsEmpty = true;
    let code = 'const colorList = [';
    colorList.forEach((color) => {
        let listIsEmpty = true;
        let list = '[';
        gridList.forEach((box, index) => {
            if (box && color.id === box.colorId) {
                list += `${index}, `;
                listIsEmpty = false;
            }
        });
        if (!listIsEmpty) list = list.slice(0, -2) + ']';
        const colorCode = `
    {
        name: '${color.name}',
        list: ${list}
    },`;
        if (!listIsEmpty) {
            code += colorCode;
            colorListIsEmpty = false;
        }
    });
    code += `${colorListIsEmpty ? '' : '\n'}]`;
    return code;
};

export default function generateJsCode(gridList, colorList) {
    return `${generateColorList(gridList, colorList)}
class Grid {
    constructor(gridLength, colorList) {
        this.gridLength = gridLength;
        this.colorList = colorList;
        this.grid = document.querySelector('#grid');
        this.init();
    }
    init() {
        this.generateGrid();
        this.assignColors();
    }
    generateGrid() {
        for (let i = 0; i < this.gridLength; i++) {
            const box = document.createElement('div');
            box.classList = 'grid__box';
            this.grid.appendChild(box);
        }
    }
    assignColors() {
        this.colorList.forEach((color) => {
            color.list.forEach((index) => this.grid.childNodes[index].classList.add('grid__box--' + color.name));
        });
    }
}
new Grid(${gridList.length}, colorList);`;
}
