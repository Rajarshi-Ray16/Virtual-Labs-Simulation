'use strict';

function latchValidate() {
    const permutatorMap = permutator([0, 1]);
    let circuitValid = 0;
    for (let i = 0; i < permutatorMap.length; i++) {
        if (connectionMap.has("input0$mux0") && connectionMap.has("clock0$mux0") && connectionMap.has("inverter" + permutatorMap[i][1] + "$mux0") && connectionMap.has("mux0$inverter" + permutatorMap[i][0]) && connectionMap.has("inverter0$inverter" + permutatorMap[i][1]) && connectionMap.has("inverter" + permutatorMap[i][0] + "$output0") && (connectionMap.size === 6)) {
            circuitValid = 1
            break
        }
    }
    if (circuitValid) {
        document.getElementById("graph-image").src = "./images/latch.png"
        document.getElementById("graph-image").style.display = "block";
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
    } else {
        document.getElementById("graph-image").style.display = "none";
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger')
    }
}

function circuitValidate() {
    if (selectedTab === currentTab.LATCH) {
        latchValidate()
    } else {
        flipflopValidate()
    }
    document.getElementById('error-container').style = 'display:none;';
}

function permutator(inputArr) {
    const results = [];

    function permute(arr, memo) {
        let currentCase;

        memo = memo || [];

        for (let i = 0; i < arr.length; i++) {
            currentCase = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(currentCase));
            }
            permute(arr.slice(), memo.concat(currentCase));
            arr.splice(i, 0, currentCase[0]);
        }

        return results;
    }

    return permute(inputArr);
}

function flipflopValidate() {
    const permutatorMap = permutator([0, 1]);
    let circuitValid = 0;
    for (let i = 0; i < permutatorMap.length; i++) {
        if (connectionMap.has("input0$latch" + permutatorMap[i][0]) && connectionMap.has("clock0$latch" + permutatorMap[i][0]) && connectionMap.has("latch" + permutatorMap[i][0] + "$latch" + permutatorMap[i][1]) && connectionMap.has("latch" + permutatorMap[i][1] + "$output0") && connectionMap.has("clockbar0$latch" + permutatorMap[i][1]) && (connectionMap.size === 5)) {
            circuitValid = 1;
            break;
        }
    }
    if (circuitValid) {
        document.getElementById("graph-image").src = "./images/flipflop.png";
        document.getElementById("graph-image").style.display = "block";
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success');
    } else {
        document.getElementById("graph-image").style.display = "none";
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger');
    }
}

function changeObservation(htmlText, removedClass, addedClass) {
    const observationBoxElem = document.getElementById("output-text");
    observationBoxElem.innerHTML = htmlText;
    observationBoxElem.classList.remove(removedClass);
    observationBoxElem.classList.add(addedClass);
};
