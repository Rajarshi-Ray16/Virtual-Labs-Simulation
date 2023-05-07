initDraw();
canvas = document.getElementById('canvas');

let drcCheck = 0;
let currentColour = 'blue';
let a = 0;
let minwidth = 30;
let intersect = "true";
let intersect_map = new Map();
let currentTopPoint = [];
let currentBottomPoint = [];
list_arrx = [];
list_arry = [];
ListTopLeftPoints = [];
ListBottomRightPoints = [];
ListColour = [];
list_intersect = [];

function checkintersection() {
    for (i = 0; i < ListTopLeftPoints.length; i++) {
        for (j = 0; j < ListBottomRightPoints.length; j++) {
            if ((ListTopLeftPoints[i][0] > ListBottomRightPoints[j][0]) && (i != j)) {
                let r = i + '$' + j;
                intersect_map.set(r, 0);
            }
        }
    }
    for (i = 0; i < ListBottomRightPoints.length; i++) {
        for (j = 0; j < ListTopLeftPoints.length; j++) {

            if ((ListBottomRightPoints[i][1] < ListTopLeftPoints[j][1]) && (i != j)) {
                let r = i + '$' + j;
                intersect_map.set(r, 0);
            }
        }
    }

}

function printarrx() {
    document.getElementById('obs-table') += (intersect_map);

}

function printarry() {
    document.getElementById('obs-table') += (ListTopLeftPoints);
    document.getElementById('obs-table') += (ListBottomRightPoints);
}
function checkMinWidth() {
    document.getElementById('obs-table').innerHTML = ""
    for (i = 0; i < ListColour.length; i++) {
        let width = Math.abs(ListTopLeftPoints[i][0] - ListBottomRightPoints[i][0]);
        let height = Math.abs(ListTopLeftPoints[i][1] - ListBottomRightPoints[i][1]);
        if (ListColour[i] === 'green') {
            if (width <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " Active number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " Active number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }

        }
        if (ListColour[i] === 'blue') {
            if (width <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " Metal2 number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " Metal2 number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
        }
        if (ListColour[i] === 'red') {
            if (width <= 20) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " Polysilicon rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 20) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " Polysilicon number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
        }
        if (ListColour[i] === 'black') {
            if (width <= 10) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " Contact rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 10) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " Contact rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }

        }
        if (ListColour[i] === 'grey') {
            if (width <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " Metal rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " Metal  rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
        }
        if (ListColour[i] === '#AAF0D1') {
            if (width <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " Nwell rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " Nwell rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
        }
        if (ListColour[i] === '#BFAFB2') {
            if (width <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " N select rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " N select rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
        }
        if (ListColour[i] === '#B2F302') {
            if (width <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " P well number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " P well number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
        }
        if (ListColour[i] === '#A63A79') {
            if (width <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum width rule failed for the " + " Via rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
            if (height <= 30) {
                drcCheck++;
                document.getElementById('obs-table').innerHTML += "<br> Minimum height rule failed for the " + " Via  rectangle number " + i + "<br>";
                document.getElementById('obs-table').classList.remove('text-success')
                document.getElementById('obs-table').classList.add('text-danger')
            }
        }
    }
}

function checkdrc() {
    document.getElementById('obs-table').innerHTML = ""
    checkMinWidth();
    checkintersection();

    for (i = 0; i < ListColour.length; i++) {
        for (j = 0; j < ListColour.length; j++) {
            let r = i + '$' + j;

            if (intersect_map.has(r)) {

                let dist_x = Math.abs(ListTopLeftPoints[i][0] - ListTopLeftPoints[j][0]);
                let dist_y = Math.abs(ListBottomRightPoints[i][1] - ListBottomRightPoints[j][1]);
                if (ListColour[i] === 'blue') {
                    if (dist_y <= 30 || dist_x <= 30) {
                        drcCheck++;
                        document.getElementById('obs-table').innerHTML += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
                if (ListColour[i] === 'green') {

                    if (dist_y <= 30 || dist_x <= 30) {
                        drcCheck++;
                        document.getElementById('obs-table').innerHTML += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
                if (ListColour[i] === 'black') {
                    if (dist_y <= 10 || dist_x <= 10) {
                        drcCheck++;
                        document.getElementById('obs-table') += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
                if (ListColour[i] === 'red') {
                    if (dist_y <= 20 || dist_x <= 20) {
                        drcCheck++;
                        document.getElementById('obs-table') += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
                if (ListColour[i] === 'grey') {
                    if (dist_y <= 30 || dist_x <= 30) {
                        drcCheck++;
                        document.getElementById('obs-table') += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
                if (ListColour[i] === '#AAF0D1') {
                    if (dist_y <= 30 || dist_x <= 30) {
                        drcCheck++;
                        document.getElementById('obs-table') += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                    }
                }
                if (ListColour[i] === '#BFAFB2') {
                    if (dist_y <= 30 || dist_x <= 30) {
                        drcCheck++;
                        document.getElementById('obs-table') += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
                if (ListColour[i] === '#B2F302') {
                    if (dist_y <= 30 || dist_x <= 30) {
                        drcCheck++;
                        document.getElementById('obs-table') += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
                if (ListColour[i] === '#A63A79') {
                    if (dist_y <= 10 || dist_x <= 10) {
                        drcCheck++;
                        document.getElementById('obs-table') += "<br> Minimun spacing not followed between the rectangles " + i + "and " + j;
                        document.getElementById('obs-table').classList.remove('text-success')
                        document.getElementById('obs-table').classList.add('text-danger')
                    }
                }
            }

        }
    }

    if (drcCheck === 0) {
        document.getElementById('obs-table').innerHTML += "<br> DRC rules satified ";
        document.getElementById('obs-table').classList.add('text-success')
        document.getElementById('obs-table').classList.remove('text-danger')
    }



}
function changeColour(colour) {
    currentColour = colour;

}



function initDraw() {
    let toppointx = 0;
    let toppointy = 0;
    let currentpointx = 0;
    let currentpointy = 0;


    var clicks = 0;
    canvas.onmousemove = function (e) {
        e.pageX += document.body.scrollLeft;
        e.pageY += document.body.scrollTop;
        if (clicks % 2 === 1) {
            rectangle.style.width = Math.abs(e.pageX - toppointx) + 'px';
            rectangle.style.height = Math.abs(e.pageY - toppointy) + 'px';

        }
    }

    canvas.onmousedown = function (e) {


        if (clicks % 2 === 1) {
            clicks++;
            ListBottomRightPoints.push([e.pageX, e.pageY]);
            ListColour.push(currentColour);
            canvas.style.cursor = "default";

        } else {
            clicks++;
            toppointx = e.pageX;
            toppointy = e.pageY;
            ListTopLeftPoints.push([toppointx, toppointy]);
            rectangle = document.createElement('div');
            rectangle.style.border = '1px solid black';
            rectangle.style.position = 'absolute';
            rectangle.style.left = e.pageX + 'px';
            rectangle.style.top = e.pageY + 'px';
            rectangle.style.backgroundColor = currentColour;
            rectangle.style.opacity = 0.5;
            canvas.appendChild(rectangle)
            canvas.style.cursor = "crosshair";
        }
    }

}
function refresh() {
    location.reload();
}