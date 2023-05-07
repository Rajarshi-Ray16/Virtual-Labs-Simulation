'use strict';

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
    };

    return permute(inputArr);
};

function muxValidate() {
    const permutatorMap1 = permutator([0, 1])
    const permutatorMap2 = permutator([0, 1])
    let circuitValid = 0
    for (let i = 0; i < permutatorMap1.length; i++) {
        for (let j = 0; j < permutatorMap2.length; j++) {
            if (connectionMap.has("input" + permutatorMap1[i][0] + "$pt" + permutatorMap2[i][0]) && connectionMap.has("clock0$pt" + permutatorMap2[i][0]) && connectionMap.has("clockbar0$pt" + permutatorMap2[i][0]) && connectionMap.has("pt" + permutatorMap2[i][1] + "$output0") && connectionMap.has("input" + permutatorMap1[i][1] + "$pt" + permutatorMap2[i][1]) && connectionMap.has("clock0$pt" + permutatorMap2[i][1]) && connectionMap.has("clockbar0$pt" + permutatorMap2[i][1]) && connectionMap.has("pt" + permutatorMap2[i][0] + "$output0") && connectionMap.size === 8) {
                circuitValid = 1
                break;
            }
        }
        if (circuitValid === 1) {
            break;
        }
    }
    if (circuitValid === 1) {
        document.getElementById("graph-image").src = "./images/mux.png";
        document.getElementById("graph-image").style.display = "block";
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success');
    } else {
        document.getElementById("graph-image").style.display = "none";
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger');
    }
};

function ptValidate() {
    if ((connectionMap.has("input0$pmos0") && connectionMap.has("clock0$pmos0") && connectionMap.has("clockbar0$nmos0") && connectionMap.has("pmos0$output0") && connectionMap.has("input0$nmos0") && connectionMap.has("nmos0$output0") && connectionMap.size === 6 || (connectionMap.has("input1$pmos0") && connectionMap.has("clock0$pmos0") && connectionMap.has("clockbar0$nmos0") && connectionMap.has("pmos0$output0") && connectionMap.has("input1$nmos0") && connectionMap.has("nmos0$output0") && connectionMap.size === 6)) || (connectionMap.has("input0$pmos0") && connectionMap.has("clockbar0$pmos0") && connectionMap.has("clock0$nmos0") && connectionMap.has("pmos0$output0") && connectionMap.has("input0$nmos0") && connectionMap.has("nmos0$output0") && connectionMap.size === 6 || (connectionMap.has("input1$pmos0") && connectionMap.has("clockbar0$pmos0") && connectionMap.has("clock0$nmos0") && connectionMap.has("pmos0$output0") && connectionMap.has("input1$nmos0") && connectionMap.has("nmos0$output0") && connectionMap.size === 6))) {
        document.getElementById("graph-image").src = "./images/pt.png"
        document.getElementById("graph-image").style.display = "block";
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
    } else {
        document.getElementById("graph-image").style.display = "none";
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger')
    }
}

function checkAndValidate() {
    if (selectedTab === currentTab.MUX) {
        muxValidate();
    } else if (selectedTab === currentTab.PT) {
        ptValidate();
    }
    document.getElementById('error-container').style = 'display:none;';
};

function changeObservation(htmlText, removedClass, addedClass) {
    const observationBoxElem = document.getElementById("output-text");
    observationBoxElem.innerHTML = htmlText;
    observationBoxElem.classList.remove(removedClass);
    observationBoxElem.classList.add(addedClass);
};