'use strict';
function nandValid() {
    checkAndUpdate()
    modifyOutput()
    circuitValid()
    showTruthTable()
    document.getElementById('error-container').style = 'display:none;';
}

function checkNand() {
    const permutatorMap = permutator([0, 1])
    let nandCircuitValid = 0
    for (let i = 0; i < permutatorMap.length; i++) {
        for (let j = 0; j < permutatorMap.length; j++) {
            for (let k = 0; k < permutatorMap.length; k++) {
                if (connectionMap.has("input" + permutatorMap[i][0] + "$pmos" + permutatorMap[j][0]) && connectionMap.has("input" + permutatorMap[i][1] + "$pmos" + permutatorMap[j][1]) && connectionMap.has("input" + permutatorMap[i][0] + "$nmos" + permutatorMap[k][0]) && connectionMap.has("input" + permutatorMap[i][1] + "$nmos" + permutatorMap[k][1]) && connectionMap.has("vdd0$pmos" + permutatorMap[j][0]) && connectionMap.has("vdd0$pmos" + permutatorMap[j][1]) && connectionMap.has("ground0$nmos" + permutatorMap[k][1]) && connectionMap.has("pmos" + permutatorMap[j][0] + "$output0") && connectionMap.has("pmos" + permutatorMap[j][1] + "$output0") && connectionMap.has("nmos" + permutatorMap[k][0] + "$output0") && connectionMap.has("nmos" + permutatorMap[k][1] + "$nmos" + permutatorMap[k][0]) && (connectionMap.size === 11)) {
                    nandCircuitValid = 1
                    break;
                }
            }
            if (nandCircuitValid === 1) {
                break
            }
        }
        if (nandCircuitValid === 1) {
            break
        }
    }
    return nandCircuitValid

}

function checkNor() {
    const permutatorMap = permutator([0, 1])
    let norCircuitValid = 0
    for (let i = 0; i < permutatorMap.length; i++) {
        for (let j = 0; j < permutatorMap.length; j++) {
            for (let k = 0; k < permutatorMap.length; k++) {
                if (connectionMap.has("input" + permutatorMap[i][0] + "$pmos" + permutatorMap[j][0]) && connectionMap.has("input" + permutatorMap[i][1] + "$pmos" + permutatorMap[j][1]) && connectionMap.has("input" + permutatorMap[i][0] + "$nmos" + permutatorMap[k][0]) && connectionMap.has("input" + permutatorMap[i][1] + "$nmos" + permutatorMap[k][1]) && connectionMap.has("vdd0$pmos" + permutatorMap[j][0]) && connectionMap.has("ground0$nmos" + permutatorMap[k][0]) && connectionMap.has("ground0$nmos" + permutatorMap[k][1]) && connectionMap.has("pmos" + permutatorMap[j][1] + "$output0") && connectionMap.has("nmos" + permutatorMap[k][1] + "$output0") && connectionMap.has("nmos" + permutatorMap[k][0] + "$output0") && connectionMap.has("pmos" + permutatorMap[j][0] + "$pmos" + permutatorMap[j][1]) && (connectionMap.size === 11)) {
                    norCircuitValid = 1
                    break;
                }
            }
            if (norCircuitValid === 1) {
                break
            }
        }
        if (norCircuitValid === 1) {
            break
        }
    }
    return norCircuitValid
}

function modifyOutput() {
    const divOutput0 = document.getElementById("output0")
    divOutput0.innerHTML = 'Output<br>' + getTruthValue()
}

function permutator(inputArr) {
    const results = [];

    function permute(arr, memo) {
        let cur

        memo = memo || [];

        for (let i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}

function checkPseudoNmos() {
    const permutatorMap = permutator([0, 1])
    let psNmosCircuitValid = 0
    for (let i = 0; i < permutatorMap.length; i++) {
        if (connectionMap.has("vdd0$pmos0") && connectionMap.has("ground" + permutatorMap[i][0] + "$pmos0") && connectionMap.has("pmos0$output0") && connectionMap.has("input0$nmos0") && connectionMap.has("nmos0$output0") && connectionMap.has("ground" + permutatorMap[i][1] + "$nmos0")) {
            psNmosCircuitValid = 1
            break
        }
    }
    return psNmosCircuitValid
}

function circuitValid() {
    const nandCircuitValid = checkNand()
    const norCircuitValid = checkNor()
    // check if correct nand gate is made using correct components
    if (selectedTab === currentTab.NAND && nandCircuitValid) {
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
    }
    else if (selectedTab === currentTab.NOR && norCircuitValid) {
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
    }
    else {
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger')
    }
}

function changeObservation(htmlText, removedClass, addedClass) {
    const observationBoxElem = document.getElementById("output-box");
    observationBoxElem.innerHTML = htmlText;
    observationBoxElem.classList.remove(removedClass);
    observationBoxElem.classList.add(addedClass);
}

function showTruthTable() {
    const output = [0, 0, 0, 0];
    const tableBody = document.getElementById("table-body")
    const divInput0 = document.getElementById("input0")
    const divInput1 = document.getElementById("input1")
    let initialInput0 = 0
    let initialInput1 = 0
    if (divInput0.classList.contains("high")) {
        initialInput0 = 1
    }
    if (divInput1.classList.contains("high")) {
        initialInput1 = 1
    }
    listInput[0].input = 0;
    listInput[1].input = 0;
    checkAndUpdate()
    output[0] = getTruthValue()
    listInput[0].input = 0;
    listInput[1].input = 1;
    checkAndUpdate()
    output[1] = getTruthValue()
    listInput[0].input = 1;
    listInput[1].input = 0;
    checkAndUpdate()
    output[2] = getTruthValue()
    listInput[0].input = 1;
    listInput[1].input = 1;
    checkAndUpdate()
    output[3] = getTruthValue()
    if (selectedTab === 0) {
        tableBody.innerHTML = "<tr><td>0</td><td>0</td><td>1</td><td>" + output[0] + "</td></tr>" + "<tr><td>0</td><td>1</td><td>1</td><td>" + output[1] + "</td></tr>" + "<tr><td>1</td><td>0</td><td>1</td><td>" + output[2] + "</td></tr>" + "<tr><td>1</td><td>1</td><td>0</td><td>" + output[3] + "</td></tr>"
    }
    else {
        tableBody.innerHTML = "<tr><td>0</td><td>0</td><td>1</td><td>" + output[0] + "</td></tr>" + "<tr><td>0</td><td>1</td><td>0</td><td>" + output[1] + "</td></tr>" + "<tr><td>1</td><td>0</td><td>0</td><td>" + output[2] + "</td></tr>" + "<tr><td>1</td><td>1</td><td>0</td><td>" + output[3] + "</td></tr>"
    }
    listInput[0].input = initialInput0;
    listInput[1].input = initialInput1;
    checkAndUpdate()
}
