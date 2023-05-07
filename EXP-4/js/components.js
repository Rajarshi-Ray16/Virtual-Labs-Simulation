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


function editConnectionMap() {
    connectionMap.clear();
    jsplumbInstance.getAllConnections().forEach(connection => {
        const connectionId = `${connection.sourceId}$${connection.targetId}`
        connectionMap.set(connectionId, connection.targetId)
    });
}

jsplumbInstance.bind("connection", () => {
    editConnectionMap()
});

jsplumbInstance.bind("dblclick", function(ci) {

    jsplumbInstance.deleteConnection(ci);
    editConnectionMap()

});

const count = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };
const maxCount = { PMOS: 1, NMOS: 1, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 0, Transistor: 2, Clock: 1, Clockbar: 1 };

function addInstancePmos(id) {
    addInstance(id, [0.72, 1, 0, 1], -1, true)
    addInstance(id, [0, 0.5, -1, 0], -1, false)
    addInstance(id, [0.72, 0, 0, -1], -1, false)
};

function addInstanceNmos(id) {
    addInstance(id, [0.72, 1, 0, 1], -1, false)
    addInstance(id, [0, 0.5, -1, 0], -1, false)
    addInstance(id, [0.72, 0, 0, -1], -1, true)
};

function addInstanceVdd(id) {
    addInstance(id, [0.5, 1, 0, 1], -1, true)
};

function addInstanceGround(id) {
    addInstance(id, [0.5, 0, 0, -1], -1, true)
};

function addInstanceTransistor(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true)
    addInstance(id, [0.5, 0, 0, -1], -1, false)
    addInstance(id, [0, 0.5, -1, 0], -1, false)
    addInstance(id, [0.5, 1, 0, 1], -1, false)
};

function addInstanceClock(id) {
    addInstance(id, [1, 0.25, 1, 0], -1, true)
};

function addInstanceClockbar(id) {
    addInstance(id, [1, 0.25, 1, 0], -1, true)
};

function addInstanceFinalInput(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true)
};

function addInstanceFinalOutput(id) {
    addInstance(id, [0, 0.5, -1, 0], -1, false)
};

function addInstance(id, position, num, src) {
    jsplumbInstance.addEndpoint(id, {
        endpoint: ["Dot", { radius: 5 }],
        anchor: position,
        isTarget: !src,
        isSource: src,
        maxConnections: num,
        connectionType: "red-connection"
    });
};