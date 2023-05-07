'use strict';

const jsplumbInstance = jsPlumb.getInstance({
    container: diagram,
    maxConnections: -1,
    endpoint: {
        type: "Dot",
        options: { radius: 7 },
    },
    dragOptions: {
        containment: "parentEnclosed",
        containmentPadding: 5,
    },
    connector: "Flowchart",
    paintStyle: { strokeWidth: 3, stroke: "#456" },
    connectionsDetachable: true,
});

jsplumbInstance.bind("ready", function() {
    jsplumbInstance.registerConnectionTypes({
        "red-connection": {
            paintStyle: { stroke: "red", strokeWidth: 3 },
            hoverPaintStyle: { stroke: "red", strokeWidth: 8 },
            connector: "Flowchart"
        }
    });
});

jsplumbInstance.bind("connection", () => {
    const connection = jsplumbInstance.getAllConnections();
    connectionMap.clear();
    for (let i = 0; i < connection.length; i++) {
        const sourceID = connection[i].sourceId;
        const targetID = connection[i].targetId;
        const concatenatedID = sourceID.concat("$", targetID);
        connectionMap.set(concatenatedID, targetID);
    }
});

jsplumbInstance.bind("dblclick", function(ci) {
    jsplumbInstance.deleteConnection(ci);
    const connection = jsplumbInstance.getAllConnections();
    connectionMap.clear();
    for (let i = 0; i < connection.length; i++) {
        const sourceID = connection[i].sourceId;
        const targetID = connection[i].targetId;
        const concatenatedID = sourceID.concat("$", targetID);
        connectionMap.set(concatenatedID, targetID);
    }
});

const count = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };
const maxCount = { PMOS: 1, NMOS: 1, VDD: 1, Ground: 2, Inverter: 0, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };

function addInstancePmos(id) {
    addInstance(id, { uuid: "pmosBottom" }, [0.72, 1, 0, 1], -1, true);
    addInstance(id, { uuid: "pmosLeft" }, [0, 0.5, -1, 0], -1, false);
    addInstance(id, { uuid: "pmosTop" }, [0.72, 0, 0, -1], -1, false);
}

function addInstanceNmos(id) {
    addInstance(id, { uuid: "nmosBottom" }, [0.72, 1, 0, 1], -1, false);
    addInstance(id, { uuid: "nmosLeft" }, [0, 0.5, -1, 0], -1, false);
    addInstance(id, { uuid: "nmosTop" }, [0.72, 0, 0, -1], -1, true);
}

function addInstanceVdd(id) {
    addInstance(id, { uuid: "vdd" }, [0.5, 1, 0, 1], -1, true);
}

function addInstanceGround(id) {
    addInstance(id, { uuid: "ground" }, [0.5, 0, 0, -1], -1, true);
}

function addInstanceInput(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
}

function addInstanceInverter(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
    addInstance(id, [0, 0.5, -1, 0], -1, false);
}

function addInstanceOutput(id) {
    addInstance(id, { uuid: "output" }, [0, 0.5, -1, 0], -1, false);
}

function addInstanceMux(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
    addInstance(id, [0.5, 0, 0, -1], -1, false);
    addInstance(id, [0, 0.315, -1, 0], -1, false);
    addInstance(id, [0, 0.615, -1, 0], -1, false);
}

function addInstanceLatch(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
    addInstance(id, [0.5, 0, 0, -1], -1, false);
    addInstance(id, [0, 0.5, -1, 0], -1, false);
}

function addInstanceTransistor(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
    addInstance(id, [0.5, 0, 0, -1], -1, false);
    addInstance(id, [0, 0.5, -1, 0], -1, false);
    addInstance(id, [0.5, 1, 0, 1], -1, false);
}

function addInstanceClock(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
}

function addInstanceClockbar(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
}

function addInstanceFinalInput(id) {
    addInstance(id, { uuid: "input" }, [1, 0.5, 1, 0], -1, true);
}

function addInstanceFinalOutput(id) {
    addInstance(id, { uuid: "output" }, [0, 0.5, -1, 0], -1, false);
}

function addInstance(id, uuid, position, num, src) {
    jsplumbInstance.addEndpoint(id, uuid, {
        endpoint: ["Dot", { radius: 5 }],
        anchor: position,
        isTarget: !src,
        isSource: src,
        maxConnections: num,
        connectionType: "red-connection"
    });
}

// top -> [0.5, 0, 0, -1]
// bottom -> [ 0.5, 1, 0, 1 ]
// right -> [1, 0.5, 1, 0]
// left -> [0, 0.5, -1, 0]