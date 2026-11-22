import{mkdirSync as m,readdirSync as r,readFileSync as f,writeFileSync as w}from'fs';
const E='+,-,*,/,%,/,%,,&,|,^,,<<,>>,>>>,,==,<,<'.split(',');
function R(p,q){
let s=0,c=0,P=0,t=0,j=0,a,O='',k,u,v,D=[],C=[],M=[],G=e=>{throw e};
const H="G(0)@D[s++]=p[P-1]<<24>>24@D[s++]=p[P-4]|p[P-3]<<8|u<<16@s--@D[s]=#;s++@a=#;#=%;%=a@D[s]=%;s++@a=D[s-3];D[s-3]=%;%=#;#=a@#=-#|0@#=~#@P+=(u<<16)>>16@if((#==0)==(k<50))P+=(u<<16)>>16;s--@if(c==64)G(7);C[c++]=P;P=u@if(!c)G(8);P=C[--c]@if((a=#)>>>0>255)G(6);#=M[a]|0@if((a=#)>>>0>255)G(6);M[a]=%;s-=2@let g=''+#;if(O.length>65536-g.length)G(11);s--;O+=g@if(O.length>65535)G(11);O+=String.fromCharCode(D[--s]&255)@D[s++]=q[j++]??-1@G(#&255)@let b=#;a=%;if(!b&k>18&k<23)G(4);if(k>20&k<23|k==34){a>>>=0;b>>>=0}s-=2;D[s++]=k==18?Math.imul(a,b):eval(`a${E[k-16]}b`)|0".replace(/#/g,"D[s-1]").replace(/%/g,"D[s-2]").split('@');
try{for(;;){
if(++t>1e6)G(10);
k=p[P],v="$5e(*./3########-------)---)---#---#############DHHD$###########),##############((%(".charCodeAt(k)-36;
if(!(v+1))G(5);
let m=v>>4,y=v>>2&3;
if(P<0|P+m>=p.length)G(9);
P+=1+m;
u=p[P-2]|p[P-1]<<8;
if(s<y|s-y+(v&3)>256)G(s<y?2:3);
eval(H["#$%&'()*########7777777+777,777#777#############-../0###########12##############3456".charCodeAt(k)-35]);
}}catch(e){return[O,e]}
}
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
r(I).map(d=>{
const Q=O+'/'+d,J=I+'/'+d,[x,y]=R(f(J+'/program.bin'),f(J+'/input.bin'));
m(Q,{recursive:!0});
w(Q+'/stdout.bin',x,'latin1');
w(Q+'/exit.txt',y+'');
});
