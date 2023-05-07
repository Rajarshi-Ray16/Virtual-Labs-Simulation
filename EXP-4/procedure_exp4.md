# Design of 2-input Multiplexer

---

## Components Required - 

* 2 Pass transistors

## Circuit Connections - 

* Drag the Pass transistors on the workspace
* Connect the left node of pass transistors 1 and 2 to input 1 and input 2 respectively
* Clk is connected to the top node of pass transistor 1 and bottom node of pass transistor 2
* Clk_bar is connected to the bottom node of pass transistor 2 and top node of pass transistor 1
* Right nodes of pass transistors are then connected to the output 

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

