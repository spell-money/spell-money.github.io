import{a0 as bt,a1 as Pt}from"./index-fd0a78ec.js";var O={},Rt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},dt={},T={};let it;const Lt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return Lt[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');it=t};T.isKanjiModeEnabled=function(){return typeof it<"u"};T.toSJIS=function(t){return it(t)};var G={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,n){if(e.isValid(o))return o;try{return t(o)}catch{return n}}})(G);function ht(){this.buffer=[],this.length=0}ht.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Ut=ht;function K(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}K.prototype.set=function(e,t,i,o){const n=e*this.size+t;this.data[n]=i,o&&(this.reservedBit[n]=!0)};K.prototype.get=function(e,t){return this.data[e*this.size+t]};K.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};K.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Dt=K,wt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const n=Math.floor(o/7)+2,r=t(o),s=r===145?26:Math.ceil((r-13)/(2*n-2))*2,c=[r-7];for(let u=1;u<n-1;u++)c[u]=c[u-1]-s;return c.push(6),c.reverse()},e.getPositions=function(o){const n=[],r=e.getRowColCoords(o),s=r.length;for(let c=0;c<s;c++)for(let u=0;u<s;u++)c===0&&u===0||c===0&&u===s-1||c===s-1&&u===0||n.push([r[c],r[u]]);return n}})(wt);var mt={};const Ft=T.getSymbolSize,at=7;mt.getPositions=function(t){const i=Ft(t);return[[0,0],[i-at,0],[0,i-at]]};var Et={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const r=n.size;let s=0,c=0,u=0,l=null,a=null;for(let A=0;A<r;A++){c=u=0,l=a=null;for(let w=0;w<r;w++){let g=n.get(A,w);g===l?c++:(c>=5&&(s+=t.N1+(c-5)),l=g,c=1),g=n.get(w,A),g===a?u++:(u>=5&&(s+=t.N1+(u-5)),a=g,u=1)}c>=5&&(s+=t.N1+(c-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(n){const r=n.size;let s=0;for(let c=0;c<r-1;c++)for(let u=0;u<r-1;u++){const l=n.get(c,u)+n.get(c,u+1)+n.get(c+1,u)+n.get(c+1,u+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const r=n.size;let s=0,c=0,u=0;for(let l=0;l<r;l++){c=u=0;for(let a=0;a<r;a++)c=c<<1&2047|n.get(l,a),a>=10&&(c===1488||c===93)&&s++,u=u<<1&2047|n.get(a,l),a>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let r=0;const s=n.data.length;for(let u=0;u<s;u++)r+=n.data[u];return Math.abs(Math.ceil(r*100/s/5)-10)*t.N4};function i(o,n,r){switch(o){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(n,r){const s=r.size;for(let c=0;c<s;c++)for(let u=0;u<s;u++)r.isReserved(u,c)||r.xor(u,c,i(n,u,c))},e.getBestMask=function(n,r){const s=Object.keys(e.Patterns).length;let c=0,u=1/0;for(let l=0;l<s;l++){r(l),e.applyMask(l,n);const a=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(l,n),a<u&&(u=a,c=l)}return c}})(Et);var j={};const R=G,J=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Y=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];j.getBlocksCount=function(t,i){switch(i){case R.L:return J[(t-1)*4+0];case R.M:return J[(t-1)*4+1];case R.Q:return J[(t-1)*4+2];case R.H:return J[(t-1)*4+3];default:return}};j.getTotalCodewordsCount=function(t,i){switch(i){case R.L:return Y[(t-1)*4+0];case R.M:return Y[(t-1)*4+1];case R.Q:return Y[(t-1)*4+2];case R.H:return Y[(t-1)*4+3];default:return}};var Ct={},v={};const V=new Uint8Array(512),$=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)V[i]=t,$[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)V[i]=V[i-255]})();v.log=function(t){if(t<1)throw new Error("log("+t+")");return $[t]};v.exp=function(t){return V[t]};v.mul=function(t,i){return t===0||i===0?0:V[$[t]+$[i]]};(function(e){const t=v;e.mul=function(o,n){const r=new Uint8Array(o.length+n.length-1);for(let s=0;s<o.length;s++)for(let c=0;c<n.length;c++)r[s+c]^=t.mul(o[s],n[c]);return r},e.mod=function(o,n){let r=new Uint8Array(o);for(;r.length-n.length>=0;){const s=r[0];for(let u=0;u<n.length;u++)r[u]^=t.mul(n[u],s);let c=0;for(;c<r.length&&r[c]===0;)c++;r=r.slice(c)}return r},e.generateECPolynomial=function(o){let n=new Uint8Array([1]);for(let r=0;r<o;r++)n=e.mul(n,new Uint8Array([1,t.exp(r)]));return n}})(Ct);const yt=Ct;function st(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}st.prototype.initialize=function(t){this.degree=t,this.genPoly=yt.generateECPolynomial(this.degree)};st.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=yt.mod(i,this.genPoly),n=this.degree-o.length;if(n>0){const r=new Uint8Array(this.degree);return r.set(o,n),r}return o};var kt=st,Bt={},L={},ut={};ut.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var S={};const At="[0-9]+",zt="[A-Z $%*+\\-./:]+";let H="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";H=H.replace(/u/g,"\\u");const Vt="(?:(?![A-Z0-9 $%*+\\-./:]|"+H+`)(?:.|[\r
]))+`;S.KANJI=new RegExp(H,"g");S.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");S.BYTE=new RegExp(Vt,"g");S.NUMERIC=new RegExp(At,"g");S.ALPHANUMERIC=new RegExp(zt,"g");const Ht=new RegExp("^"+H+"$"),Kt=new RegExp("^"+At+"$"),Jt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");S.testKanji=function(t){return Ht.test(t)};S.testNumeric=function(t){return Kt.test(t)};S.testAlphanumeric=function(t){return Jt.test(t)};(function(e){const t=ut,i=S;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return i.testNumeric(r)?e.NUMERIC:i.testAlphanumeric(r)?e.ALPHANUMERIC:i.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function o(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(r,s){if(e.isValid(r))return r;try{return o(r)}catch{return s}}})(L);(function(e){const t=T,i=j,o=G,n=L,r=ut,s=7973,c=t.getBCHDigit(s);function u(w,g,E){for(let C=1;C<=40;C++)if(g<=e.getCapacity(C,E,w))return C}function l(w,g){return n.getCharCountIndicator(w,g)+4}function a(w,g){let E=0;return w.forEach(function(C){const N=l(C.mode,g);E+=N+C.getBitsLength()}),E}function A(w,g){for(let E=1;E<=40;E++)if(a(w,E)<=e.getCapacity(E,g,n.MIXED))return E}e.from=function(g,E){return r.isValid(g)?parseInt(g,10):E},e.getCapacity=function(g,E,C){if(!r.isValid(g))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=n.BYTE);const N=t.getSymbolTotalCodewords(g),h=i.getTotalCodewordsCount(g,E),m=(N-h)*8;if(C===n.MIXED)return m;const d=m-l(C,g);switch(C){case n.NUMERIC:return Math.floor(d/10*3);case n.ALPHANUMERIC:return Math.floor(d/11*2);case n.KANJI:return Math.floor(d/13);case n.BYTE:default:return Math.floor(d/8)}},e.getBestVersionForData=function(g,E){let C;const N=o.from(E,o.M);if(Array.isArray(g)){if(g.length>1)return A(g,N);if(g.length===0)return 1;C=g[0]}else C=g;return u(C.mode,C.getLength(),N)},e.getEncodedBits=function(g){if(!r.isValid(g)||g<7)throw new Error("Invalid QR Code version");let E=g<<12;for(;t.getBCHDigit(E)-c>=0;)E^=s<<t.getBCHDigit(E)-c;return g<<12|E}})(Bt);var It={};const et=T,Nt=1335,Yt=21522,ft=et.getBCHDigit(Nt);It.getEncodedBits=function(t,i){const o=t.bit<<3|i;let n=o<<10;for(;et.getBCHDigit(n)-ft>=0;)n^=Nt<<et.getBCHDigit(n)-ft;return(o<<10|n)^Yt};var Tt={};const $t=L;function U(e){this.mode=$t.NUMERIC,this.data=e.toString()}U.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let i,o,n;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),n=parseInt(o,10),t.put(n,10);const r=this.data.length-i;r>0&&(o=this.data.substr(i),n=parseInt(o,10),t.put(n,r*3+1))};var _t=U;const Ot=L,W=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function D(e){this.mode=Ot.ALPHANUMERIC,this.data=e}D.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=W.indexOf(this.data[i])*45;o+=W.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(W.indexOf(this.data[i]),6)};var Gt=D;const jt=bt,vt=L;function F(e){this.mode=vt.BYTE,typeof e=="string"&&(e=jt(e)),this.data=new Uint8Array(e)}F.getBitsLength=function(t){return t*8};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Qt=F;const qt=L,Wt=T;function k(e){this.mode=qt.KANJI,this.data=e}k.getBitsLength=function(t){return t*13};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Wt.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Zt=k;(function(e){const t=L,i=_t,o=Gt,n=Qt,r=Zt,s=S,c=T,u=Pt;function l(h){return unescape(encodeURIComponent(h)).length}function a(h,m,d){const f=[];let y;for(;(y=h.exec(d))!==null;)f.push({data:y[0],index:y.index,mode:m,length:y[0].length});return f}function A(h){const m=a(s.NUMERIC,t.NUMERIC,h),d=a(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let f,y;return c.isKanjiModeEnabled()?(f=a(s.BYTE,t.BYTE,h),y=a(s.KANJI,t.KANJI,h)):(f=a(s.BYTE_KANJI,t.BYTE,h),y=[]),m.concat(d,f,y).sort(function(I,p){return I.index-p.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function w(h,m){switch(m){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return o.getBitsLength(h);case t.KANJI:return r.getBitsLength(h);case t.BYTE:return n.getBitsLength(h)}}function g(h){return h.reduce(function(m,d){const f=m.length-1>=0?m[m.length-1]:null;return f&&f.mode===d.mode?(m[m.length-1].data+=d.data,m):(m.push(d),m)},[])}function E(h){const m=[];for(let d=0;d<h.length;d++){const f=h[d];switch(f.mode){case t.NUMERIC:m.push([f,{data:f.data,mode:t.ALPHANUMERIC,length:f.length},{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.ALPHANUMERIC:m.push([f,{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.KANJI:m.push([f,{data:f.data,mode:t.BYTE,length:l(f.data)}]);break;case t.BYTE:m.push([{data:f.data,mode:t.BYTE,length:l(f.data)}])}}return m}function C(h,m){const d={},f={start:{}};let y=["start"];for(let B=0;B<h.length;B++){const I=h[B],p=[];for(let P=0;P<I.length;P++){const M=I[P],z=""+B+P;p.push(z),d[z]={node:M,lastCount:0},f[z]={};for(let q=0;q<y.length;q++){const b=y[q];d[b]&&d[b].node.mode===M.mode?(f[b][z]=w(d[b].lastCount+M.length,M.mode)-w(d[b].lastCount,M.mode),d[b].lastCount+=M.length):(d[b]&&(d[b].lastCount=M.length),f[b][z]=w(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,m))}}y=p}for(let B=0;B<y.length;B++)f[y[B]].end=0;return{map:f,table:d}}function N(h,m){let d;const f=t.getBestModeForData(h);if(d=t.from(m,f),d!==t.BYTE&&d.bit<f.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(d)+`.
 Suggested mode is: `+t.toString(f));switch(d===t.KANJI&&!c.isKanjiModeEnabled()&&(d=t.BYTE),d){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new o(h);case t.KANJI:return new r(h);case t.BYTE:return new n(h)}}e.fromArray=function(m){return m.reduce(function(d,f){return typeof f=="string"?d.push(N(f,null)):f.data&&d.push(N(f.data,f.mode)),d},[])},e.fromString=function(m,d){const f=A(m,c.isKanjiModeEnabled()),y=E(f),B=C(y,d),I=u.find_path(B.map,"start","end"),p=[];for(let P=1;P<I.length-1;P++)p.push(B.table[I[P]].node);return e.fromArray(g(p))},e.rawSplit=function(m){return e.fromArray(A(m,c.isKanjiModeEnabled()))}})(Tt);const Q=T,Z=G,Xt=Ut,xt=Dt,te=wt,ee=mt,nt=Et,ot=j,ne=kt,_=Bt,oe=It,re=L,X=Tt;function ie(e,t){const i=e.size,o=ee.getPositions(t);for(let n=0;n<o.length;n++){const r=o[n][0],s=o[n][1];for(let c=-1;c<=7;c++)if(!(r+c<=-1||i<=r+c))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(c>=0&&c<=6&&(u===0||u===6)||u>=0&&u<=6&&(c===0||c===6)||c>=2&&c<=4&&u>=2&&u<=4?e.set(r+c,s+u,!0,!0):e.set(r+c,s+u,!1,!0))}}function se(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function ue(e,t){const i=te.getPositions(t);for(let o=0;o<i.length;o++){const n=i[o][0],r=i[o][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?e.set(n+s,r+c,!0,!0):e.set(n+s,r+c,!1,!0)}}function ce(e,t){const i=e.size,o=_.getEncodedBits(t);let n,r,s;for(let c=0;c<18;c++)n=Math.floor(c/3),r=c%3+i-8-3,s=(o>>c&1)===1,e.set(n,r,s,!0),e.set(r,n,s,!0)}function x(e,t,i){const o=e.size,n=oe.getEncodedBits(t,i);let r,s;for(r=0;r<15;r++)s=(n>>r&1)===1,r<6?e.set(r,8,s,!0):r<8?e.set(r+1,8,s,!0):e.set(o-15+r,8,s,!0),r<8?e.set(8,o-r-1,s,!0):r<9?e.set(8,15-r-1+1,s,!0):e.set(8,15-r-1,s,!0);e.set(o-8,8,1,!0)}function le(e,t){const i=e.size;let o=-1,n=i-1,r=7,s=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let u=0;u<2;u++)if(!e.isReserved(n,c-u)){let l=!1;s<t.length&&(l=(t[s]>>>r&1)===1),e.set(n,c-u,l),r--,r===-1&&(s++,r=7)}if(n+=o,n<0||i<=n){n-=o,o=-o;break}}}function ae(e,t,i){const o=new Xt;i.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),re.getCharCountIndicator(u.mode,e)),u.write(o)});const n=Q.getSymbolTotalCodewords(e),r=ot.getTotalCodewordsCount(e,t),s=(n-r)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const c=(s-o.getLengthInBits())/8;for(let u=0;u<c;u++)o.put(u%2?17:236,8);return fe(o,e,t)}function fe(e,t,i){const o=Q.getSymbolTotalCodewords(t),n=ot.getTotalCodewordsCount(t,i),r=o-n,s=ot.getBlocksCount(t,i),c=o%s,u=s-c,l=Math.floor(o/s),a=Math.floor(r/s),A=a+1,w=l-a,g=new ne(w);let E=0;const C=new Array(s),N=new Array(s);let h=0;const m=new Uint8Array(e.buffer);for(let I=0;I<s;I++){const p=I<u?a:A;C[I]=m.slice(E,E+p),N[I]=g.encode(C[I]),E+=p,h=Math.max(h,p)}const d=new Uint8Array(o);let f=0,y,B;for(y=0;y<h;y++)for(B=0;B<s;B++)y<C[B].length&&(d[f++]=C[B][y]);for(y=0;y<w;y++)for(B=0;B<s;B++)d[f++]=N[B][y];return d}function ge(e,t,i,o){let n;if(Array.isArray(e))n=X.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const a=X.rawSplit(e);l=_.getBestVersionForData(a,i)}n=X.fromString(e,l||40)}else throw new Error("Invalid data");const r=_.getBestVersionForData(n,i);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=ae(t,i,n),c=Q.getSymbolSize(t),u=new xt(c);return ie(u,t),se(u),ue(u,t),x(u,i,0),t>=7&&ce(u,t),le(u,s),isNaN(o)&&(o=nt.getBestMask(u,x.bind(null,u,i))),nt.applyMask(o,u),x(u,i,o),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:o,segments:n}}dt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=Z.M,n,r;return typeof i<"u"&&(o=Z.from(i.errorCorrectionLevel,Z.M),n=_.from(i.version),r=nt.from(i.maskPattern),i.toSJISFunc&&Q.setToSJISFunction(i.toSJISFunc)),ge(t,n,o,r)};var pt={},ct={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(r){return[r,r]}))),o.length===6&&o.push("F","F");const n=parseInt(o.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const n=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,r=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:r,scale:r?4:s,margin:n,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,n){return n.width&&n.width>=o+n.margin*2?n.width/(o+n.margin*2):n.scale},e.getImageWidth=function(o,n){const r=e.getScale(o,n);return Math.floor((o+n.margin*2)*r)},e.qrToImageData=function(o,n,r){const s=n.modules.size,c=n.modules.data,u=e.getScale(s,r),l=Math.floor((s+r.margin*2)*u),a=r.margin*u,A=[r.color.light,r.color.dark];for(let w=0;w<l;w++)for(let g=0;g<l;g++){let E=(w*l+g)*4,C=r.color.light;if(w>=a&&g>=a&&w<l-a&&g<l-a){const N=Math.floor((w-a)/u),h=Math.floor((g-a)/u);C=A[c[N*s+h]?1:0]}o[E++]=C.r,o[E++]=C.g,o[E++]=C.b,o[E]=C.a}}})(ct);(function(e){const t=ct;function i(n,r,s){n.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,s,c){let u=c,l=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(l=o()),u=t.getOptions(u);const a=t.getImageWidth(r.modules.size,u),A=l.getContext("2d"),w=A.createImageData(a,a);return t.qrToImageData(w.data,r,u),i(A,l,a),A.putImageData(w,0,0),l},e.renderToDataURL=function(r,s,c){let u=c;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const l=e.render(r,s,u),a=u.type||"image/png",A=u.rendererOpts||{};return l.toDataURL(a,A.quality)}})(pt);var Mt={};const de=ct;function gt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function tt(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function he(e,t,i){let o="",n=0,r=!1,s=0;for(let c=0;c<e.length;c++){const u=Math.floor(c%t),l=Math.floor(c/t);!u&&!r&&(r=!0),e[c]?(s++,c>0&&u>0&&e[c-1]||(o+=r?tt("M",u+i,.5+l+i):tt("m",n,0),n=0,r=!1),u+1<t&&e[c+1]||(o+=tt("h",s),s=0)):n++}return o}Mt.render=function(t,i,o){const n=de.getOptions(i),r=t.modules.size,s=t.modules.data,c=r+n.margin*2,u=n.color.light.a?"<path "+gt(n.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+gt(n.color.dark,"stroke")+' d="'+he(s,r,n.margin)+'"/>',a='viewBox="0 0 '+c+" "+c+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+a+' shape-rendering="crispEdges">'+u+l+`</svg>
`;return typeof o=="function"&&o(null,w),w};const we=Rt,rt=dt,St=pt,me=Mt;function lt(e,t,i,o,n){const r=[].slice.call(arguments,1),s=r.length,c=typeof r[s-1]=="function";if(!c&&!we())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof n>"u"?(n=o,o=void 0):(n=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(u,l){try{const a=rt.create(i,o);u(e(a,t,o))}catch(a){l(a)}})}try{const u=rt.create(i,o);n(null,e(u,t,o))}catch(u){n(u)}}O.create=rt.create;O.toCanvas=lt.bind(null,St.render);O.toDataURL=lt.bind(null,St.renderToDataURL);O.toString=lt.bind(null,function(e,t,i){return me.render(e,i)});export{O as b};
