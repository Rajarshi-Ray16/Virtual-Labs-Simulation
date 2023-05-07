# Schematic Design of D-Latch : Positive Level

---

## Components Required - 

* 2:1 MUX
* 2 inverters

## Circuit Connections - 

* Drag the inverters and multiplexer to the workspace
* The D and Clk inputs are connected to the upper node of MUX 
* Right node of MUX is connected to inverter 1's input node and inverter 1's output node is connected to the inverter 2's input node
* Left node of MUX is connected to inverter 2's output 
* Output node of inverter 1 is connected to Q bar 

## Observations - 

* On clicking "validate" option after completing the circuit (assuming all connections are done correctly) you should see a graph under the observations tab
* Observe the fluctuations occurring 
* By default, the input has been set to 1 and the corresponding output observed is 0. To check otherwise, double-click the input.

# Schematic Design of Flip-Flop

---

## Components Required - 

* 1 Clk
* 1 Clk_bar
* 2 Latches

## Circuit Connections - 

* Drag the Clk, Clk_bar and Latches to the workspace
* Connect the top node of both latch 1 and latch 2 to Clk and Clk_bar respctively
* Connect the input terminal to left node of Latch 1 and right node of Latch 1 is subsequently connected to Latch 2
* Connect the output terminal to the right node of Latch 2 

## Observations - 

* On clicking "validate" option after completing the circuit (assuming all connections are done correctly) you should see a graph under the observations tab
* Observe the fluctuations occurring 
* By default, the input has been set to 1 and the corresponding output observed is 0. To check otherwise, double-click the input.

