'use strict';

function validateSpice() {

    const codeValue = document.getElementById("spice-code").value;
    const notGateSpiceCode = `*inverter*
.include PTM_45nm.txt

.PARAM supply=1.1
.PARAM Lmin=45nm
.PARAM Wmin=45nm
.PARAM Wp={2*Wmin}

vvdd vdd 0 supply
.global vdd gnd


.subckt inv  in out 
MP1 out in vdd vdd pmos w={Wmin} L={Lmin}
Mn1 out in 0 0 NMOS W={Wmin} L={Lmin}
.ends inv

Xinv a out inv

**USE '*' for commenting

.PARAM trfin=10p
.PARAM t1 = 10n
.PARAM t2 = 20n
.PARAM t3 = 30n
.PARAM t4 = 40n
.PARAM t5 = 1*8000p+1200p
.PARAM t6 = 1*8000p+1210p
.PARAM t7 = 1*8000p+5200p
.PARAM t8 = 1*8000p+5210p
.tran 6p 50n

*Use below two lines for input 
V1 a 0 PWL (0 0 't1' 0 't1+trfin' 'supply' 't2' 'supply' 't3' 'supply' 't3+trfin' 0 't4' 0)

* Use below lines if you wish to change the input waveform, comment the above two V1 and V2 values when using below lines
*V1 a 0 PULSE (0 supply 0 0.1n 0.1n 4n 8n)

.control
run
*sets background color of plot, comment below line for black background
set color0=white 
*plots input
plot v(a) 
*plots output
plot v(out) 

.endc
.end
    `;
    const nandGateSpiceCode = `*NAND_gate*
.include PTM_45nm.txt

.PARAM supply=1.1
.PARAM Lmin=45nm
.PARAM Wmin=45nm
.PARAM Wp={2*Wmin}

vvdd vdd 0 supply
.global vdd gnd

.subckt nand a b y
MN1 y a p 0 NMOS W={Wmin} L={Lmin}
MN2 p b 0 0 NMOS W={Wmin} L={Lmin}

MP1 y b vdd vdd pmos w={Wp} L={Lmin}
MP2 y a vdd vdd pmos w={Wp} L={Lmin}
.ends

Xn a b y nand

**USE '*' for commenting

.PARAM trfin=10p
.PARAM t1 = 10n
.PARAM t2 = 20n
.PARAM t3 = 30n
.PARAM t4 = 40n
.PARAM t5 = 1*8000p+1200p
.PARAM t6 = 1*8000p+1210p
.PARAM t7 = 1*8000p+5200p
.PARAM t8 = 1*8000p+5210p
.tran 6p 50n

*Use below two lines for input 
V1 a 0 PWL (0 0 't1' 0 't2' 0 't2+trfin' 'supply' 't3' 'supply' 't4' 'supply')
V2 b 0 PWL (0 0 't1' 0 't1+trfin' 'supply' 't2' 'supply' 't3' 'supply' 't3+trfin' 0 't4' 0)

* Use below lines if you wish to change the input waveform, comment the above two V1 and V2 values when using below lines
*V1 a 0 PULSE (0 supply 0 0.1n 0.1n 4n 8n)
*V2 b 0 PULSE (0 supply 2n 0.1n 0.1n 4n 8n)

.control
run
*sets background color of plot, comment below line for black background
set color0=white 
*plots input
plot v(a) v(b)
*plots output
plot v(y) 

.endc
.end
    `;
    const norGateSpiceCode = `*NOR_gate*
.include PTM_45nm.txt

.PARAM supply=1.1
.PARAM Lmin=45nm
.PARAM Wmin=45nm
.PARAM Wp={2*Wmin}

vvdd vdd 0 supply
.global vdd gnd


.subckt nor a b y
MN1 y a 0 0 NMOS W={Wmin} L={Lmin}
MN2 y b 0 0 NMOS W={Wmin} L={Lmin}


MP1 y b p vdd pmos w={Wp} L={Lmin}
MP2 p a vdd vdd pmos w={Wp} L={Lmin}
.ends

Xn a b y nor

**USE '*' for commenting

.PARAM trfin=10p
.PARAM t1 = 10n
.PARAM t2 = 20n
.PARAM t3 = 30n
.PARAM t4 = 40n
.PARAM t5 = 1*8000p+1200p
.PARAM t6 = 1*8000p+1210p
.PARAM t7 = 1*8000p+5200p
.PARAM t8 = 1*8000p+5210p
.tran 6p 50n

*Use below two lines for input 
V1 a 0 PWL (0 0 't1' 0 't2' 0 't2+trfin' 'supply' 't3' 'supply' 't4' 'supply')
V2 b 0 PWL (0 0 't1' 0 't1+trfin' 'supply' 't2' 'supply' 't3' 'supply' 't3+trfin' 0 't4' 0)

* Use below lines if you wish to change the input waveform, comment the above two V1 and V2 values when using below lines
*V1 a 0 PULSE (0 supply 0 0.1n 0.1n 4n 8n)
*V2 b 0 PULSE (0 supply 2n 0.1n 0.1n 4n 8n)



.control
run
*sets background color of plot, comment below line for black background
set color0=white 
*plots input
plot v(a) v(b)
*plots output
plot v(y) 

.endc
.end
    `;
    if (codeValue === notGateSpiceCode) {
        document.getElementById("obs-table").innerHTML = `
        <div>
            <div class="is-size-4">Report</div>
            <pre>
Circuit: *inverter*

Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

Warning: v1: no DC value, transient time 0 value used

Initial Transient Solution
--------------------------

Node                                   Voltage
----                                   -------
vdd                                        1.1
out                                        1.1
a                                            0
v1#branch                          1.10888e-12
vvdd#branch                       -3.15131e-12


No. of Data Rows : 8361
            </pre>
            <div class="is-size-4">Input graph</div>
            <img src = 'images/not-input.png' alt = 'image of not input graph'>
            <div class="is-size-4">Output graph</div>
            <img src = 'images/not-output.png' alt = 'image of not output graph'>
        </div>
        `;
    } else if (codeValue === nandGateSpiceCode) {
        document.getElementById("obs-table").innerHTML = `
        <div>
            <div class="is-size-4">Report</div>
            <pre>
Circuit: *nand_gate*

Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

Warning: v2: no DC value, transient time 0 value used
Warning: v1: no DC value, transient time 0 value used

Initial Transient Solution
--------------------------

Node                                   Voltage
----                                   -------
vdd                                        1.1
y                                          1.1
a                                            0
xn.p                                 0.0415738
b                                            0
v2#branch                          2.53458e-12
v1#branch                          2.53458e-12
vvdd#branch                        -6.3861e-12


No. of Data Rows : 8364
            </pre>
            <div class="is-size-4">Input graph</div>
            <img src = 'images/nand-input.png' alt = 'image of not input graph'>
            <div class="is-size-4">Output graph</div>
            <img src = 'images/nand-output.png' alt = 'image of not output graph'>
        </div>
        `;
    } else if (codeValue === norGateSpiceCode) {
        document.getElementById("obs-table").innerHTML = `
        <div>
            <div class="is-size-4">Report</div>
            <pre>
Circuit: *nor_gate*

Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

Warning: v2: no DC value, transient time 0 value used
Warning: v1: no DC value, transient time 0 value used

Initial Transient Solution
--------------------------

Node                                   Voltage
----                                   -------
vdd                                        1.1
y                                          1.1
a                                            0
b                                            0
xn.p                                       1.1
v2#branch                          2.53457e-12
v1#branch                          2.53458e-12
vvdd#branch                       -9.15398e-12


No. of Data Rows : 8364
            </pre>
            <div class="is-size-4">Input graph</div>
            <img src = 'images/nor-input.png' alt = 'image of not input graph'>
            <div class="is-size-4">Output graph</div>
            <img src = 'images/nor-output.png' alt = 'image of not output graph'>
        </div>
        `;
    } else {
        document.getElementById("obs-table").innerHTML = "The code provided is incorrect.";
        document.getElementById("obs-table").classList.add("text-danger");
    }

}

function makeCodeAppear(whichCode) {
    const notGateSpiceCode = `*inverter*
.include PTM_45nm.txt

.PARAM supply=1.1
.PARAM Lmin=45nm
.PARAM Wmin=45nm
.PARAM Wp={2*Wmin}

vvdd vdd 0 supply
.global vdd gnd


.subckt inv  in out 
MP1 out in vdd vdd pmos w={Wmin} L={Lmin}
Mn1 out in 0 0 NMOS W={Wmin} L={Lmin}
.ends inv

Xinv a out inv

**USE '*' for commenting

.PARAM trfin=10p
.PARAM t1 = 10n
.PARAM t2 = 20n
.PARAM t3 = 30n
.PARAM t4 = 40n
.PARAM t5 = 1*8000p+1200p
.PARAM t6 = 1*8000p+1210p
.PARAM t7 = 1*8000p+5200p
.PARAM t8 = 1*8000p+5210p
.tran 6p 50n

*Use below two lines for input 
V1 a 0 PWL (0 0 't1' 0 't1+trfin' 'supply' 't2' 'supply' 't3' 'supply' 't3+trfin' 0 't4' 0)

* Use below lines if you wish to change the input waveform, comment the above two V1 and V2 values when using below lines
*V1 a 0 PULSE (0 supply 0 0.1n 0.1n 4n 8n)

.control
run
*sets background color of plot, comment below line for black background
set color0=white 
*plots input
plot v(a) 
*plots output
plot v(out) 

.endc
.end
    `;
    const nandGateSpiceCode = `*NAND_gate*
.include PTM_45nm.txt

.PARAM supply=1.1
.PARAM Lmin=45nm
.PARAM Wmin=45nm
.PARAM Wp={2*Wmin}

vvdd vdd 0 supply
.global vdd gnd

.subckt nand a b y
MN1 y a p 0 NMOS W={Wmin} L={Lmin}
MN2 p b 0 0 NMOS W={Wmin} L={Lmin}

MP1 y b vdd vdd pmos w={Wp} L={Lmin}
MP2 y a vdd vdd pmos w={Wp} L={Lmin}
.ends

Xn a b y nand

**USE '*' for commenting

.PARAM trfin=10p
.PARAM t1 = 10n
.PARAM t2 = 20n
.PARAM t3 = 30n
.PARAM t4 = 40n
.PARAM t5 = 1*8000p+1200p
.PARAM t6 = 1*8000p+1210p
.PARAM t7 = 1*8000p+5200p
.PARAM t8 = 1*8000p+5210p
.tran 6p 50n

*Use below two lines for input 
V1 a 0 PWL (0 0 't1' 0 't2' 0 't2+trfin' 'supply' 't3' 'supply' 't4' 'supply')
V2 b 0 PWL (0 0 't1' 0 't1+trfin' 'supply' 't2' 'supply' 't3' 'supply' 't3+trfin' 0 't4' 0)

* Use below lines if you wish to change the input waveform, comment the above two V1 and V2 values when using below lines
*V1 a 0 PULSE (0 supply 0 0.1n 0.1n 4n 8n)
*V2 b 0 PULSE (0 supply 2n 0.1n 0.1n 4n 8n)

.control
run
*sets background color of plot, comment below line for black background
set color0=white 
*plots input
plot v(a) v(b)
*plots output
plot v(y) 

.endc
.end
    `;
    const norGateSpiceCode = `*NOR_gate*
.include PTM_45nm.txt

.PARAM supply=1.1
.PARAM Lmin=45nm
.PARAM Wmin=45nm
.PARAM Wp={2*Wmin}

vvdd vdd 0 supply
.global vdd gnd


.subckt nor a b y
MN1 y a 0 0 NMOS W={Wmin} L={Lmin}
MN2 y b 0 0 NMOS W={Wmin} L={Lmin}


MP1 y b p vdd pmos w={Wp} L={Lmin}
MP2 p a vdd vdd pmos w={Wp} L={Lmin}
.ends

Xn a b y nor

**USE '*' for commenting

.PARAM trfin=10p
.PARAM t1 = 10n
.PARAM t2 = 20n
.PARAM t3 = 30n
.PARAM t4 = 40n
.PARAM t5 = 1*8000p+1200p
.PARAM t6 = 1*8000p+1210p
.PARAM t7 = 1*8000p+5200p
.PARAM t8 = 1*8000p+5210p
.tran 6p 50n

*Use below two lines for input 
V1 a 0 PWL (0 0 't1' 0 't2' 0 't2+trfin' 'supply' 't3' 'supply' 't4' 'supply')
V2 b 0 PWL (0 0 't1' 0 't1+trfin' 'supply' 't2' 'supply' 't3' 'supply' 't3+trfin' 0 't4' 0)

* Use below lines if you wish to change the input waveform, comment the above two V1 and V2 values when using below lines
*V1 a 0 PULSE (0 supply 0 0.1n 0.1n 4n 8n)
*V2 b 0 PULSE (0 supply 2n 0.1n 0.1n 4n 8n)



.control
run
*sets background color of plot, comment below line for black background
set color0=white 
*plots input
plot v(a) v(b)
*plots output
plot v(y) 

.endc
.end
    `;
    const PTM_45nm = `* PTM Low Power 45nm Metal Gate / High-K / Strained-Si
* nominal Vdd = 1.1V

.model  nmos  nmos  level = 54


+version = 4.0             binunit = 1               paramchk= 1               mobmod  = 0             
+capmod  = 2               igcmod  = 1               igbmod  = 1               geomod  = 1             
+diomod  = 1               rdsmod  = 0               rbodymod= 1               rgatemod= 1             
+permod  = 1               acnqsmod= 0               trnqsmod= 0             

+tnom    = 27              toxe    = 1.8e-009        toxp    = 1.5e-009        toxm    = 1.8e-009      
+dtox    = 3e-010          epsrox  = 3.9             wint    = 5e-009          lint    = 0             
+ll      = 0               wl      = 0               lln     = 1               wln     = 1             
+lw      = 0               ww      = 0               lwn     = 1               wwn     = 1             
+lwl     = 0               wwl     = 0               xpart   = 0               toxref  = 1.8e-009      

+vth0    = 0.62261         k1      = 0.4             k2      = 0               k3      = 0             
+k3b     = 0               w0      = 2.5e-006        dvt0    = 1               dvt1    = 2             
+dvt2    = 0               dvt0w   = 0               dvt1w   = 0               dvt2w   = 0             
+dsub    = 0.1             minv    = 0.05            voffl   = 0               dvtp0   = 1e-010        
+dvtp1   = 0.1             lpe0    = 0               lpeb    = 0               xj      = 1.4e-008      
+ngate   = 1e+023          ndep    = 3.24e+018       nsd     = 2e+020          phin    = 0             
+cdsc    = 0               cdscb   = 0               cdscd   = 0               cit     = 0             
+voff    = -0.13           nfactor = 1.6             eta0    = 0.0125          etab    = 0             
+vfb     = -0.55           u0      = 0.049           ua      = 6e-010          ub      = 1.2e-018      
+uc      = 0               vsat    = 130000          a0      = 1               ags     = 0             
+a1      = 0               a2      = 1               b0      = 0               b1      = 0             
+keta    = 0.04            dwg     = 0               dwb     = 0               pclm    = 0.02          
+pdiblc1 = 0.001           pdiblc2 = 0.001           pdiblcb = -0.005          drout   = 0.5           
+pvag    = 1e-020          delta   = 0.01            pscbe1  = 8.14e+008       pscbe2  = 1e-007        
+fprout  = 0.2             pdits   = 0.08            pditsd  = 0.23            pditsl  = 2300000       
+rsh     = 5               rdsw    = 210             rsw     = 80              rdw     = 80            
+rdswmin = 0               rdwmin  = 0               rswmin  = 0               prwg    = 0             
+prwb    = 0               wr      = 1               alpha0  = 0.074           alpha1  = 0.005         
+beta0   = 30              agidl   = 0.0002          bgidl   = 2.1e+009        cgidl   = 0.0002        
+egidl   = 0.8             aigbacc = 0.012           bigbacc = 0.0028          cigbacc = 0.002         
+nigbacc = 1               aigbinv = 0.014           bigbinv = 0.004           cigbinv = 0.004         
+eigbinv = 1.1             nigbinv = 3               aigc    = 0.015211        bigc    = 0.0027432     
+cigc    = 0.002           aigsd   = 0.015211        bigsd   = 0.0027432       cigsd   = 0.002         
+nigc    = 1               poxedge = 1               pigcd   = 1               ntox    = 1             
+xrcrg1  = 12              xrcrg2  = 5             

+cgso    = 1.1e-010        cgdo    = 1.1e-010        cgbo    = 2.56e-011       cgdl    = 2.653e-010    
+cgsl    = 2.653e-010      ckappas = 0.03            ckappad = 0.03            acde    = 1             
+moin    = 15              noff    = 0.9             voffcv  = 0.02          

+kt1     = -0.11           kt1l    = 0               kt2     = 0.022           ute     = -1.5          
+ua1     = 4.31e-009       ub1     = 7.61e-018       uc1     = -5.6e-011       prt     = 0             
+at      = 33000         

+fnoimod = 1               tnoimod = 0             

+jss     = 0.0001          jsws    = 1e-011          jswgs   = 1e-010          njs     = 1             
+ijthsfwd= 0.01            ijthsrev= 0.001           bvs     = 10              xjbvs   = 1             
+jsd     = 0.0001          jswd    = 1e-011          jswgd   = 1e-010          njd     = 1             
+ijthdfwd= 0.01            ijthdrev= 0.001           bvd     = 10              xjbvd   = 1             
+pbs     = 1               cjs     = 0.0005          mjs     = 0.5             pbsws   = 1             
+cjsws   = 5e-010          mjsws   = 0.33            pbswgs  = 1               cjswgs  = 3e-010        
+mjswgs  = 0.33            pbd     = 1               cjd     = 0.0005          mjd     = 0.5           
+pbswd   = 1               cjswd   = 5e-010          mjswd   = 0.33            pbswgd  = 1             
+cjswgd  = 5e-010          mjswgd  = 0.33            tpb     = 0.005           tcj     = 0.001         
+tpbsw   = 0.005           tcjsw   = 0.001           tpbswg  = 0.005           tcjswg  = 0.001         
+xtis    = 3               xtid    = 3             

+dmcg    = 0               dmci    = 0               dmdg    = 0               dmcgt   = 0             
+dwj     = 0               xgw     = 0               xgl     = 0             

+rshg    = 0.4             gbmin   = 1e-010          rbpb    = 5               rbpd    = 15            
+rbps    = 15              rbdb    = 15              rbsb    = 15              ngcon   = 1             


.model  pmos  pmos  level = 54


+version = 4.0             binunit = 1               paramchk= 1               mobmod  = 0             
+capmod  = 2               igcmod  = 1               igbmod  = 1               geomod  = 1             
+diomod  = 1               rdsmod  = 0               rbodymod= 1               rgatemod= 1             
+permod  = 1               acnqsmod= 0               trnqsmod= 0             

+tnom    = 27              toxe    = 1.82e-009       toxp    = 1.5e-009        toxm    = 1.82e-009     
+dtox    = 3.2e-010        epsrox  = 3.9             wint    = 5e-009          lint    = 0             
+ll      = 0               wl      = 0               lln     = 1               wln     = 1             
+lw      = 0               ww      = 0               lwn     = 1               wwn     = 1             
+lwl     = 0               wwl     = 0               xpart   = 0               toxref  = 1.82e-009     

+vth0    = -0.587          k1      = 0.4             k2      = -0.01           k3      = 0             
+k3b     = 0               w0      = 2.5e-006        dvt0    = 1               dvt1    = 2             
+dvt2    = -0.032          dvt0w   = 0               dvt1w   = 0               dvt2w   = 0             
+dsub    = 0.1             minv    = 0.05            voffl   = 0               dvtp0   = 1e-011        
+dvtp1   = 0.05            lpe0    = 0               lpeb    = 0               xj      = 1.4e-008      
+ngate   = 1e+023          ndep    = 2.44e+018       nsd     = 2e+020          phin    = 0             
+cdsc    = 0               cdscb   = 0               cdscd   = 0               cit     = 0             
+voff    = -0.126          nfactor = 1.8             eta0    = 0.0125          etab    = 0             
+vfb     = 0.55            u0      = 0.021           ua      = 2e-009          ub      = 5e-019        
+uc      = 0               vsat    = 90000           a0      = 1               ags     = 1e-020        
+a1      = 0               a2      = 1               b0      = 0               b1      = 0             
+keta    = -0.047          dwg     = 0               dwb     = 0               pclm    = 0.12          
+pdiblc1 = 0.001           pdiblc2 = 0.001           pdiblcb = 3.4e-008        drout   = 0.56          
+pvag    = 1e-020          delta   = 0.01            pscbe1  = 8.14e+008       pscbe2  = 9.58e-007     
+fprout  = 0.2             pdits   = 0.08            pditsd  = 0.23            pditsl  = 2300000       
+rsh     = 5               rdsw    = 250             rsw     = 75              rdw     = 75            
+rdswmin = 0               rdwmin  = 0               rswmin  = 0               prwg    = 0             
+prwb    = 0               wr      = 1               alpha0  = 0.074           alpha1  = 0.005         
+beta0   = 30              agidl   = 0.0002          bgidl   = 2.1e+009        cgidl   = 0.0002        
+egidl   = 0.8             aigbacc = 0.012           bigbacc = 0.0028          cigbacc = 0.002         
+nigbacc = 1               aigbinv = 0.014           bigbinv = 0.004           cigbinv = 0.004         
+eigbinv = 1.1             nigbinv = 3               aigc    = 0.0097          bigc    = 0.00125       
+cigc    = 0.0008          aigsd   = 0.0097          bigsd   = 0.00125         cigsd   = 0.0008        
+nigc    = 1               poxedge = 1               pigcd   = 1               ntox    = 1             
+xrcrg1  = 12              xrcrg2  = 5             

+cgso    = 1.1e-010        cgdo    = 1.1e-010        cgbo    = 2.56e-011       cgdl    = 2.653e-010    
+cgsl    = 2.653e-010      ckappas = 0.03            ckappad = 0.03            acde    = 1             
+moin    = 15              noff    = 0.9             voffcv  = 0.02          

+kt1     = -0.11           kt1l    = 0               kt2     = 0.022           ute     = -1.5          
+ua1     = 4.31e-009       ub1     = 7.61e-018       uc1     = -5.6e-011       prt     = 0             
+at      = 33000         

+fnoimod = 1               tnoimod = 0             

+jss     = 0.0001          jsws    = 1e-011          jswgs   = 1e-010          njs     = 1             
+ijthsfwd= 0.01            ijthsrev= 0.001           bvs     = 10              xjbvs   = 1             
+jsd     = 0.0001          jswd    = 1e-011          jswgd   = 1e-010          njd     = 1             
+ijthdfwd= 0.01            ijthdrev= 0.001           bvd     = 10              xjbvd   = 1             
+pbs     = 1               cjs     = 0.0005          mjs     = 0.5             pbsws   = 1             
+cjsws   = 5e-010          mjsws   = 0.33            pbswgs  = 1               cjswgs  = 3e-010        
+mjswgs  = 0.33            pbd     = 1               cjd     = 0.0005          mjd     = 0.5           
+pbswd   = 1               cjswd   = 5e-010          mjswd   = 0.33            pbswgd  = 1             
+cjswgd  = 5e-010          mjswgd  = 0.33            tpb     = 0.005           tcj     = 0.001         
+tpbsw   = 0.005           tcjsw   = 0.001           tpbswg  = 0.005           tcjswg  = 0.001         
+xtis    = 3               xtid    = 3             

+dmcg    = 0               dmci    = 0               dmdg    = 0               dmcgt   = 0             
+dwj     = 0               xgw     = 0               xgl     = 0             

+rshg    = 0.4             gbmin   = 1e-010          rbpb    = 5               rbpd    = 15            
+rbps    = 15              rbdb    = 15              rbsb    = 15              ngcon   = 1
`;
    const codeValue = document.getElementById("spice-code");
    if (whichCode === "inverter") {
        codeValue.innerHTML = notGateSpiceCode;
    } else if (whichCode === "nand") {
        codeValue.innerHTML = nandGateSpiceCode;
    } else if (whichCode === "nor") {
        codeValue.innerHTML = norGateSpiceCode;
    } else if (whichCode === "PTM_45nm") {
        codeValue.innerHTML = PTM_45nm;
    }
}

function refreshSpice() {

    const codeValue = document.getElementById("spice-code");
    const observationTableValue = document.getElementById("obs-table");

    if (codeValue.value !== "") {
        codeValue.innerHTML = "";
    }
    if (observationTableValue.value !== "") {
        observationTableValue.innerHTML = "";
    }

}