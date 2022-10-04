/*
*
*
*
*/
function positionConversion(origXPos, origYPos){
    // origin (TopLeft), TopRight, BottomLeft, BottomRight

    let originCorner = { lat : 4.696451, lon : -74.141394} // { lat : 4.696451, lon : -74.140944} //{ lat : 4.691746460628777, lon : -74.14087057113649};
    let trCorner = { lat : 4.6895389, lon : -74.1314638888888};
    let blCorner = { lat : 4.6924722, lon : -74.14475};
    let brCorner = { lat : 4.6854, lon : -74.1346888888889};
    let rotationDeg = 31.26 // 52.390409;

    // let point = { x : origXPos, y : origYPos};
    let echoCorners = {
        '15-14-inf':{ x : -74.13573145866395, y: 4.6892443209014045},
        '15-14-sup':{ x : -74.13531303405763, y: 4.689805699184382},
        '14-13-inf':{ x : -74.13626790046693, y: 4.6896586715824515},
        '14-13-sup':{ x : -74.1358467936516, y: 4.690225395986895},
        // '13-12-inf':{ x : -74.13676142692567, y: 4.690043616511041},
        // '13-12-sup':{ x : -74.13625717163087, y: 4.690714596400146},
        // '12-11-inf':{ x : -74.13728713989259, y: 4.690439254133196},
        // '12-11-sup':{ x : -74.13679361343385, y: 4.691118253313656},
        'linea-roja-11-10':{x:-74.13780212402345,y:4.69083221830631},
        'linea-roja-15-14':{x:-74.1357207298279,y:4.689255013825293},
        // 'esquina-extrema-inf':{x:-74.13452982902528,y:4.685881388218541},
        // 'esquina-extrema-izq':{x:-74.14269447326662,y:4.693879688058168},
        // 'esquina-extrema-inf-2':{x:-74.13561880588533,y:4.6866940538791635},
        // 'esquina-calle-cuadros':{x:-74.13502871990205,y:4.687463946791265}
    }

    // let point = { x : origXPos, y : origYPos}; // este es el propio, CommentToTest

    // prueba de esquinas echos
    let cornersArray = Object.keys(echoCorners);
    let chooseNum = Math.floor(Math.random() * cornersArray.length)
    let point = echoCorners[cornersArray[chooseNum]]  // este es dummy, CommentToGo

    // traslación al origen
    point.x = point.x - originCorner.lon;
    point.y = point.y - originCorner.lat;

    // transformación de rotación positiva
    let rotationRad = rotationDeg * Math.PI / 180
    point.x = point.x * Math.cos(rotationRad) - point.y * Math.sin(rotationRad)
    point.y = point.x * Math.sin(rotationRad) + point.y * Math.cos(rotationRad)

    // referencia negativa de las imágenes
    point.y = -point.y

    // transformaciones de escala
    point.x = point.x * 84;
    point.y = point.y * 285;

    return point;
    // return {x : Math.random(), y: Math.random()};
    // return {x : 1, y: 1};
}

function markerImage(data, images){
    console.log("~~ data", data)

    let pos = 3
    if (data.entityName.includes("TT")) pos = 0; // tractor
    if (data.entityName.includes("TC")) pos = 1; // paymover
    if (data.entityName.includes("PS")) pos = 2;
    if (data.entityName.includes("prueba")) pos = 3;
    if (data.entityName.includes("Nevera")) pos = 4;
    if (data.entityName.includes("HYUNDAI")) pos = 5;
    if (data.entityName.includes("GP")) pos = 6; // planta electrica
    if (data.entityName.includes("FL")) pos = 7; //montacarga
    if (data.entityName.includes("CL")) pos = 8;
    if (data.entityName.includes("Camioneta")) pos = 9;
    if (data.entityName.includes("AT")) pos = 10;
    if (data.entityName.includes("Aerosan")) pos = 11;


    pos=0; // borarToGo

    return {
        url: images[pos],
        size: 25 // aumentar
    }
}