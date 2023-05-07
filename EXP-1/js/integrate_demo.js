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
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 84 84" ><g><path d="M 31 61 L 31 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 61 L 41 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 31 L 61 31 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 61 81 L 61 51 L 41 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 41 L 17.67 41" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><ellipse cx="23.02" cy="40.11" rx="5.357142857142858" ry="5.357142857142858" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="all"/></g></svg>';
    svgElement.id = id;
    svgElement.className = 'component';
    svgElement.midTerminal = 1;
    svgElement.outTerminal = 1;
    svgElement.voltage = 0;
    svgElement.outVoltage = 0;
    svgElement.style.top = '140px';
    // Added javasript objects and their properties
    const divPushed = new Object();
    divPushed.id = id;
    divPushed.voltage = 0;
    divPushed.midTerminal = 1;
    divPushed.outTerminal = 1;
    divPushed.outVoltage = 0;

    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });

    listPmos.push(divPushed);
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
    svgElement.voltage = 0;
    svgElement.midTerminal = 1;
    svgElement.outTerminal = 1;
    svgElement.outVoltage = 0;
    svgElement.style.top = '280px';
    count.NMOS += 1;
    const container = document.getElementById("diagram");

    const divPushed = new Object();
    divPushed.id = id;
    divPushed.voltage = 0;
    divPushed.midTerminal = 1;
    divPushed.outTerminal = 1;
    divPushed.outVoltage = 0;

    container.insertAdjacentElement("afterbegin", svgElement);

    jsplumbInstance.draggable(id, { "containment": true });
    listNmos.push(divPushed);

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
    svgElement.style.top = '2px';
    count.VDD += 1;

    const divPushed = new Object();
    divPushed.id = id;
    divPushed.voltage = 1;

    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);

    jsplumbInstance.draggable(id, { "containment": true });
    listVdd.push(divPushed);

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
    svgElement.style.top = '400px';
    count.Ground += 1;

    const divPushed = new Object();
    divPushed.id = id;
    divPushed.voltage = 0;

    container.insertAdjacentElement("afterbegin", svgElement);

    jsplumbInstance.draggable(id, { "containment": true });
    listGround.push(divPushed);

    addInstanceGround(id);
}

function compInput0() {
    const id = "input0";
    const svgElement = document.createElement('div');
    svgElement.innerHTML = 'Input 1<br>1'
    svgElement.id = id;
    svgElement.className = 'io-component';
    svgElement.style.top = "1.25rem";
    svgElement.style.left = "0.625rem";
    svgElement.classList.add("high");

    svgElement.addEventListener("dblclick", () => {
        const divInput0 = document.getElementById("input0")
        if (divInput0.classList.contains("high")) {
            divInput0.classList.remove("high")
            divInput0.classList.add("low")
            divInput0.innerHTML = 'Input 1<br>0'
            listInput[0].input = 0;
        } else {
            divInput0.classList.remove("low")
            divInput0.classList.add("high")
            divInput0.innerHTML = 'Input 1<br>1'
            listInput[0].input = 1;
        }
    })
    svgElement.input = 0;
    svgElement.voltage = 5;
    const container = document.getElementById("diagram");

    const divPushed = new Object();
    divPushed.id = id;
    divPushed.input = 1;
    divPushed.voltage = 5;

    container.insertAdjacentElement("afterbegin", svgElement);

    jsplumbInstance.draggable(id, { "containment": true });
    listInput.push(divPushed);

    addInstanceFinalInput(id);

}

function compOutput() {
    const id = "output0";
    const svgElement = document.createElement('div');
    svgElement.innerHTML = 'Output<br>-'
    svgElement.id = id;
    svgElement.className = 'io-component';
    svgElement.style.top = "1.25rem";
    svgElement.style.right = "0.625rem";
    svgElement.outputsign = 1;
    svgElement.voltage = 0;

    const divPushed = new Object();
    divPushed.id = id;
    divPushed.voltage = 0;
    divPushed.outputsign = 1;
    const container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", svgElement);

    jsplumbInstance.draggable(id, { "containment": true });
    listOutput.push(divPushed);

    addInstanceFinalOutput(id);
}