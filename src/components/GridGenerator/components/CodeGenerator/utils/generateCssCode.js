const generateColorSelector = (gridList, colorList) => {
    console.log(gridList);
    let code = '';
    colorList.forEach((color) => {
        for (let box of gridList) {
            if (box && box.colorId === color.id) {
                code += `
.grid__box.grid__box--${color.name}{
    background-color: ${color.hexColor}
}`;
                break;
            }
        }
    });
    return code;
};

export default function (gridColumns, boxSize, boxBorderRadius, spaceBetweenBox, mainBoxesColor, backgroundColor, gridList, colorList) {
    return `:root {
    --grid-columns: ${gridColumns};
    --box-size: ${boxSize}px;${boxBorderRadius === 0 ? '' : `\n--box-border-radius: ${boxBorderRadius / 2}%;`}
    --space-between-box: ${spaceBetweenBox}px;
    --main-boxes-color: ${mainBoxesColor};
    --background-color: ${backgroundColor};
}
.grid-wrapper{
    background-color: ${backgroundColor};
}
.grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), var(--box-size));
    gap: var(--space-between-box);
}
.grid__box {
    width: var(--box-size);
    height: var(--box-size);${boxBorderRadius === 0 ? '' : `\nborder-radius: var(--box-border-radius);`}
    background-color: var(--main-boxes-color);
}${generateColorSelector(gridList, colorList)}`;
}
