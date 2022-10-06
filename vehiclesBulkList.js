function tempDatakeyCellstyle(value){
    let style = {};

    let bckColor = "LawnGreen";
    if (value < 30) bckColor = "LightBlue ";
    if (value > 60) bckColor = "OrangeRed";
    style["background-color"] = bckColor

    return style
}