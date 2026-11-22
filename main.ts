import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
import{join}from'node:path';
const T=[1,18,66,5,7,11,12,16,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,6,10,10,10,6,10,10,10,0,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,33,37,37,33,1,0,0,0,0,0,0,0,0,0,0,0,6,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,2,5];
function R(p,q){
 const D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),O=new Uint8Array(65536);
 let s=0,c=0,n=p.length,pc=0,t=0,l=0,j=0;
 for(;;){
  if(t==1e6)return[O.slice(0,l),10];
  if(pc<0||pc>=n)return[O.slice(0,l),9];
  let k=p[pc],v=T[k]-1;
  if(!(v>=0))return[O.slice(0,l),5];
  let m=v>>4,y=(v>>2)&3,z=v&3;
  if(pc+m>=n)return[O.slice(0,l),9];
  t++;
  let x=pc+1+m;
  if(s<y)return[O.slice(0,l),2];
  if(s-y+z>256)return[O.slice(0,l),3];
  pc=x;
  switch(k){
   case 0:return[O.slice(0,l),0];
   case 1:D[s++]=(p[x-1]<<24)>>24;break;
   case 2:D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
   case 3:s--;break;
   case 4:D[s]=D[s-1];s++;break;
   case 5:{let a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break;}
   case 6:D[s]=D[s-2];s++;break;
   case 7:{let a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;}
   case 23:D[s-1]=-D[s-1]|0;break;
   case 27:D[s-1]=~D[s-1];break;
   case 48:pc=x+(((p[x-2]|p[x-1]<<8)<<16)>>16);break;
   case 49:case 50:{let a=D[--s];if((a==0)==(k==49))pc=x+(((p[x-2]|p[x-1]<<8)<<16)>>16);break;}
   case 51:if(c==64)return[O.slice(0,l),7];C[c++]=x;pc=p[x-2]|p[x-1]<<8;break;
   case 52:if(c==0)return[O.slice(0,l),8];pc=C[--c];break;
   case 64:{let a=D[s-1];if(a<0||a>255)return[O.slice(0,l),6];D[s-1]=M[a];break;}
   case 65:{let a=D[s-1],b=D[s-2];if(a<0||a>255)return[O.slice(0,l),6];s-=2;M[a]=b;break;}
   case 80:{let g=String(D[s-1]);if(l+g.length>65536)return[O.slice(0,l),11];s--;for(let i=0;i<g.length;i++)O[l++]=g.charCodeAt(i);break;}
   case 81:if(l+1>65536)return[O.slice(0,l),11];O[l++]=D[--s]&255;break;
   case 82:D[s++]=j<q.length?q[j++]:-1;break;
   case 83:return[O.slice(0,l),D[--s]&255];
   default:{
    let b=D[s-1],a=D[s-2],r;
    if(k==16)r=(a+b)|0;
    else if(k==17)r=(a-b)|0;
    else if(k==18)r=Math.imul(a,b);
    else if(k==19){if(b==0)return[O.slice(0,l),4];r=a==-2147483648&&b==-1?a:(a/b)|0;}
    else if(k==20){if(b==0)return[O.slice(0,l),4];r=b==-1?0:a%b|0;}
    else if(k==21){if(b==0)return[O.slice(0,l),4];r=Math.floor((a>>>0)/(b>>>0))|0;}
    else if(k==22){if(b==0)return[O.slice(0,l),4];r=(a>>>0)%(b>>>0)|0;}
    else if(k==24)r=a&b;
    else if(k==25)r=a|b;
    else if(k==26)r=a^b;
    else if(k==28)r=a<<b;
    else if(k==29)r=a>>b;
    else if(k==30)r=(a>>>b)|0;
    else if(k==32)r=a==b?1:0;
    else if(k==33)r=a<b?1:0;
    else r=(a>>>0)<(b>>>0)?1:0;
    s-=2;D[s++]=r;
   }
  }
 }
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of readdirSync(I).sort()){
 const r=R(readFileSync(join(I,d,'program.bin')),readFileSync(join(I,d,'input.bin')));
 mkdirSync(join(O,d),{recursive:true});
 writeFileSync(join(O,d,'stdout.bin'),r[0]);
 writeFileSync(join(O,d,'exit.txt'),r[1]+'\n');
}
