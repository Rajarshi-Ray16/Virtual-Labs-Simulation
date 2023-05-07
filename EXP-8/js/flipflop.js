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
    }

    return permute(inputArr);
}

function flipflopValidate() {
    const permutatorMap = permutator([0, 1]);
    document.getElementById('error-container').style = 'display:none;';
    let circuitValid = 0;
    for (let i = 0; i < permutatorMap.length; i++) {
        if (connectionMap.has("input0$latch" + permutatorMap[i][0]) && connectionMap.has("clock0$latch" + permutatorMap[i][0]) && connectionMap.has("latch" + permutatorMap[i][0] + "$latch" + permutatorMap[i][1]) && connectionMap.has("latch" + permutatorMap[i][1] + "$output0") && connectionMap.has("clockbar0$latch" + permutatorMap[i][1]) && (connectionMap.size === 5) && selectedTab === currentTab.NEG) {
            circuitValid = 1;
            break;
        }
        if (connectionMap.has("input0$latch" + permutatorMap[i][0]) && connectionMap.has("clockbar0$latch" + permutatorMap[i][0]) && connectionMap.has("latch" + permutatorMap[i][0] + "$latch" + permutatorMap[i][1]) && connectionMap.has("latch" + permutatorMap[i][1] + "$output0") && connectionMap.has("clock0$latch" + permutatorMap[i][1]) && (connectionMap.size === 5) && selectedTab === currentTab.POS) {
            circuitValid = 1;
            break;
        }
    }
    if (circuitValid) {

        const imagePaths = {
            0: {
                1: "./images/inputWave1Neg.png",
                2: "./images/inputWave2Neg.png",
                3: "./images/inputWave3Neg.png",
                4: "./images/inputWave4Neg.png"
            },
            1: {
                1: "./images/inputWave1Pos.png",
                2: "./images/inputWave2Pos.png",
                3: "./images/inputWave3Pos.png",
                4: "./images/inputWave4Pos.png"
            }
        }

        let m = document.getElementById("input-selector").value;
        const divGraphImage = document.getElementById("graphImage")
        divGraphImage.src = imagePaths[selectedTab][m];
        divGraphImage.style.display = 'block';

        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
    } else {
        const divGraphImage = document.getElementById("graphImage")
        divGraphImage.src = "";
        divGraphImage.style.display = 'none';
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger');
    }
}

function changeObservation(htmlText, removedClass, addedClass) {
    const observationBoxElem = document.getElementById("output-text");
    observationBoxElem.innerHTML = htmlText;
    observationBoxElem.classList.remove(removedClass);
    observationBoxElem.classList.add(addedClass);
}
