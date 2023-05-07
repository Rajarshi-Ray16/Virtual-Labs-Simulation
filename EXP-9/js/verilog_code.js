'use strict';

function vTbValidate() {

    const verilogCodeValue = document.getElementById("verilog-code").value;
    const testbenchCodeValue = document.getElementById("testbench-code").value;

    const orVerilogCode = `
module OR_gate(
    input A,
    input B,
    output Y
    );
assign Y = (A|B) ;

endmodule`;
    const orTestbenchCode = `
module OR_tb;

    // Inputs
    reg A;
    reg B;

    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    OR_gate uut (
        .A(A), 
        .B(B), 
        .Y(Y)
    );
    
    initial begin
    A = 0; B = 0;
    #1 A = 0; B = 1;
    #1 A = 1;B = 0;
    #1 A = 1; B = 1;   
    end
    initial begin
    $monitor ("%t | A = %d| B = %d| Y = %d", $time, A, B, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`;
    const nandVerilogCode = `
module NAND_gate(
    input A,
    input B,
    output Y
    );
assign Y = ~(A & B);

endmodule`;
    const nandTestbenchCode = `
module NAND_tb;

    // Inputs
    reg A;
    reg B;

    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    NAND_gate uut (
        .A(A), 
        .B(B), 
        .Y(Y)
    );
    
    initial begin
    A = 0; B = 0;
    #1 A = 0; B = 1;
    #1 A = 1; B = 0;
    #1 A = 1; B = 1;   
    end
    initial begin
    $monitor ("%t | A = %d| B = %d| Y = %d", $time, A, B, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`;
    const norVerilogCode = `
module NOR_gate(
    input A,
    input B,
    output Y
    );
assign Y = ~(A | B);

endmodule`;
    const norTestbenchCode = `
module NOR_tb;

    // Inputs
    reg A;
    reg B;

    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    NOR_gate uut (
        .A(A), 
        .B(B), 
        .Y(Y)
    );
    
    initial begin
    A = 0; B = 0;
    #1 A = 0; B = 1;
    #1 A = 1; B = 0;
    #1 A = 1; B = 1;   
    end
    initial begin
    $monitor ("%t | A = %d| B = %d| Y = %d", $time, A, B, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`;
    const notVerilogCode = `
module NOT_gate(
    input A,
    //input B,
    output Y
    );
assign Y = ~A ;

endmodule`;
    const notTestbenchCode = `
module NOT_tb;

    // Inputs
    reg A;
    
    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    NOT_gate uut (
        .A(A), 
        .Y(Y)
    );
    
    initial begin
    A = 0; 
    #1 A = 1;   
    end
    initial begin
        $monitor ("%t | A = %d|  Y = %d", $time, A, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`;

    if ((orVerilogCode === verilogCodeValue) && (orTestbenchCode === testbenchCodeValue)) {
        document.getElementById("obs-table").innerHTML = "<img src = 'images/or-output.png' alt = 'image of or output'>";
    }
    else if ((notVerilogCode === verilogCodeValue) && (notTestbenchCode === testbenchCodeValue)) {
        document.getElementById("obs-table").innerHTML = "<img src = 'images/not-output.png' alt = 'image of not output'>";
    }
    else if ((norVerilogCode === verilogCodeValue) && (norTestbenchCode === testbenchCodeValue)) {
        document.getElementById("obs-table").innerHTML = "<img src = 'images/nor-output.png' alt = 'image of nor output'>";
    }
    else if ((nandVerilogCode === verilogCodeValue) && (nandTestbenchCode === testbenchCodeValue)) {
        document.getElementById("obs-table").innerHTML = "<img src = 'images/nand-output.png' alt = 'image of nand output'>";
    }
    else {
        document.getElementById("obs-table").innerHTML = "<div class = 'text-danger'>The codes provided are either incorrect or incompatible.</div>";
    }

}

function onClickShowCode(gateName) {
    if (gateName === 'or') {
        makeCodeAppear('orVerilog');
        makeCodeAppear('orTestbench');
    } else if (gateName === 'nor') {
        makeCodeAppear('norVerilog');
        makeCodeAppear('norTestbench');
    } else if (gateName === 'not') {
        makeCodeAppear('notVerilog');
        makeCodeAppear('notTestbench');
    } else if (gateName === 'nand') {
        makeCodeAppear('nandVerilog');
        makeCodeAppear('nandTestbench');
    }
}

function makeCodeAppear(whichCode) {

    const verilogCodeValue = document.getElementById("verilog-code");
    const testbenchCodeValue = document.getElementById("testbench-code");

    if (whichCode === "nandVerilog") {
        verilogCodeValue.innerHTML = `
module NAND_gate(
    input A,
    input B,
    output Y
    );
assign Y = ~(A & B);

endmodule`;
    } else if (whichCode === "nandTestbench") {
        testbenchCodeValue.innerHTML = `
module NAND_tb;

    // Inputs
    reg A;
    reg B;

    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    NAND_gate uut (
        .A(A), 
        .B(B), 
        .Y(Y)
    );
    
    initial begin
    A = 0; B = 0;
    #1 A = 0; B = 1;
    #1 A = 1; B = 0;
    #1 A = 1; B = 1;   
    end
    initial begin
    $monitor ("%t | A = %d| B = %d| Y = %d", $time, A, B, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`;
    } else if (whichCode === "norVerilog") {
        verilogCodeValue.innerHTML = `
module NOR_gate(
    input A,
    input B,
    output Y
    );
assign Y = ~(A | B);

endmodule`
    } else if (whichCode === "norTestbench") {
        testbenchCodeValue.innerHTML = `
module NOR_tb;

    // Inputs
    reg A;
    reg B;

    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    NOR_gate uut (
        .A(A), 
        .B(B), 
        .Y(Y)
    );
    
    initial begin
    A = 0; B = 0;
    #1 A = 0; B = 1;
    #1 A = 1; B = 0;
    #1 A = 1; B = 1;   
    end
    initial begin
    $monitor ("%t | A = %d| B = %d| Y = %d", $time, A, B, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`
    } else if (whichCode === "notVerilog") {
        verilogCodeValue.innerHTML = `
module NOT_gate(
    input A,
    //input B,
    output Y
    );
assign Y = ~A ;

endmodule`;
    } else if (whichCode === "notTestbench") {
        testbenchCodeValue.innerHTML = `
module NOT_tb;

    // Inputs
    reg A;
    
    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    NOT_gate uut (
        .A(A), 
        .Y(Y)
    );
    
    initial begin
    A = 0; 
    #1 A = 1;   
    end
    initial begin
        $monitor ("%t | A = %d|  Y = %d", $time, A, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`
    } else if (whichCode === "orVerilog") {
        verilogCodeValue.innerHTML = `
module OR_gate(
    input A,
    input B,
    output Y
    );
assign Y = (A|B) ;

endmodule`;
    } else if (whichCode === "orTestbench") {
        testbenchCodeValue.innerHTML = `
module OR_tb;

    // Inputs
    reg A;
    reg B;

    // Outputs
    wire Y;

    // Instantiate the Unit Under Test (UUT)
    OR_gate uut (
        .A(A), 
        .B(B), 
        .Y(Y)
    );
    
    initial begin
    A = 0; B = 0;
    #1 A = 0; B = 1;
    #1 A = 1;B = 0;
    #1 A = 1; B = 1;   
    end
    initial begin
    $monitor ("%t | A = %d| B = %d| Y = %d", $time, A, B, Y);
    $dumpfile("dump.vcd");
    $dumpvars();
    end

        
endmodule`;
    }

}

function vTbRefresh() {

    const verilogCodeValue = document.getElementById("verilog-code");
    const testbenchCodeValue = document.getElementById("testbench-code");
    const observationTableValue = document.getElementById("obs-table");

    if (verilogCodeValue.value !== "") {
        verilogCodeValue.innerHTML = ""
    }
    if (testbenchCodeValue.value !== "") {
        testbenchCodeValue.innerHTML = ""
    }
    if (observationTableValue.value !== "") {
        observationTableValue.innerHTML = ""
    }

}