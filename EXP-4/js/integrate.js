'use strict';

function compPmos() {
    maxCount.PMOS -= 1;
    if (maxCount.PMOS < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    //  keep tracking count
    const id = "pmos" + count.PMOS;
    count.PMOS += 1;
    const container = document.getElementById("diagram");
    // render in workspace
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 84 84" ><g><path d="M 31 61 L 31 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 61 L 41 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 31 L 61 31 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 61 81 L 61 51 L 41 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 41 L 17.67 41" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><ellipse cx="23.02" cy="40.11" rx="5.357142857142858" ry="5.357142857142858" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="all"/></g></svg>'
    svgElement.id = id;
    svgElement.className = 'component';
    // Added javasript objects and their properties    
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstancePmos(id);
}

function compNmos() {
    maxCount.NMOS -= 1;
    if (maxCount.NMOS < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "nmos" + count.NMOS;
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 84 84"><g><path d="M 31 61 L 31 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 61 L 41 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 31 L 61 31 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 61 81 L 61 51 L 41 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 41 L 31 41" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/></g></svg>';
    svgElement.id = id;
    svgElement.className = 'component';
    count.NMOS += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceNmos(id);
}

function compVdd() {
    maxCount.VDD -= 1;
    if (maxCount.VDD < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "vdd" + count.VDD;
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -6 44 34" ><g><path d="M 21 31 L 21 1 L 1 1 L 41 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/></g></svg>';
    svgElement.id = id;
    svgElement.className = 'component';
    svgElement.voltage = 1;
    count.VDD += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceVdd(id);
}

function compGround() {
    maxCount.Ground -= 1;
    if (maxCount.Ground < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "ground" + count.Ground;
    const container = document.getElementById("diagram");
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 8 64 44" ><g><path d="M 31 1 L 31 21 L 1 21 L 61 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2.5" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 11 31 L 51 31" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2.5" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 21 41 L 41 41" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2.5" stroke-miterlimit="10" pointer-events="stroke"/></g></svg>';
    svgElement.id = id;
    svgElement.className = 'component';
    svgElement.voltage = 0;
    count.Ground += 1;
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceGround(id);
}

function compTransistor() {
    maxCount.Transistor -= 1;
    if (maxCount.Transistor < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "pt" + count.Transistor;
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -1 124 164" ><g><rect x="21" y="21" width="80" height="120" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="none"/><path d="M 31 51 L 91 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 31 61 L 91 61" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 31 100.88 L 91 100.88" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 31 111 L 91 111" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 41 101 L 41 61" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 81 101 L 81 61" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><ellipse cx="61" cy="46" rx="5" ry="5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="none"/><path d="M 61 41 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 81 81 L 121 81" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 1 81 L 41 81" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/><path d="M 61 161 L 61 111" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="none"/></g></svg>';
    svgElement.id = id;
    svgElement.className = 'component2';
    count.Transistor += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceTransistor(id);
}

function compClock() {
    maxCount.Clock -= 1;
    if (maxCount.Clock < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "clock" + count.Clock;
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 64 34" ><g><path d="M 1 31 L 41 31" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 1 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 31 L 1 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 31 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><rect x="3.02" y="11" width="40" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 21px; margin-left: 23px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 14px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;"><b>Clk</b></div></div></div></foreignObject><text x="23" y="25" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="14px" text-anchor="middle">Clk</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>';
    svgElement.id = id;
    svgElement.className = 'component';
    count.Clock += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceClock(id);
}

function compClockbar() {
    maxCount.Clockbar -= 1;
    if (maxCount.Clockbar < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "clockbar" + count.Clockbar;
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 64 34" ><g><path d="M 1 31 L 41 31" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 1 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 31 L 1 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 31 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><rect x="3.02" y="11" width="40" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 21px; margin-left: 23px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 14px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;"><div style="text-decoration:overline"><b>Clk</b></div></div></div></div></foreignObject><text x="23" y="25" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="14px" text-anchor="middle">Clk</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>';
    svgElement.id = id;
    svgElement.className = 'component';
    count.Clockbar += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceClockbar(id);
}

function comp2Input0() {
    const id = "input0";
    const svgElement = document.createElement('div');
    svgElement.innerHTML = 'Input 1<br><br>';
    svgElement.id = id;
    svgElement.className = 'io-component';
    svgElement.style.top = "1.25rem";
    svgElement.style.left = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalInput(id);
}

function comp2Input1() {
    const id = "input1";
    const svgElement = document.createElement('div');
    svgElement.innerHTML = 'Input 2<br><br>';
    svgElement.id = id;
    svgElement.className = 'io-component';
    svgElement.style.top = "5.25rem";
    svgElement.style.left = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalInput(id);
}

function comp2Output() {
    const id = "output0";
    const svgElement = document.createElement('div');
    svgElement.innerHTML = 'Output<br><br>';
    svgElement.id = id;
    svgElement.className = 'io-component';
    svgElement.style.top = "1.25rem";
    svgElement.style.right = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalOutput(id);
}