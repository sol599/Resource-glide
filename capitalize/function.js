var ge=Object.create;var g=Object.defineProperty,xe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,ye=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(r,t,e[t]);if(v)for(var t of v(e))Ce.call(e,t)&&S(r,t,e[t]);return r},x=(r,e)=>xe(r,he(e)),we=r=>g(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ve=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Te(e))!R.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=be(e,i))||t.enumerable});return r},P=r=>ve(we(g(r!=null?ge(ye(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var q=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},c=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var O=n((Ji,A)=>{function Re(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}A.exports=Re});var j=n((Bi,L)=>{function Se(r){return function(e){return r==null?void 0:r[e]}}L.exports=Se});var N=n((Yi,M)=>{var Pe=j(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=Pe(qe);M.exports=Ae});var D=n(($i,U)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Oe});var E=n((Ki,_)=>{var Le=D(),je=typeof self=="object"&&self&&self.Object===Object&&self,Me=Le||je||Function("return this")();_.exports=Me});var b=n((Qi,k)=>{var Ne=E(),Ue=Ne.Symbol;k.exports=Ue});var Z=n((Xi,I)=>{function De(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}I.exports=De});var W=n((rn,z)=>{var _e=Array.isArray;z.exports=_e});var V=n((en,F)=>{var G=b(),H=Object.prototype,Ee=H.hasOwnProperty,ke=H.toString,m=G?G.toStringTag:void 0;function Ie(r){var e=Ee.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var u=ke.call(r);return i&&(e?r[m]=t:delete r[m]),u}F.exports=Ie});var B=n((tn,J)=>{var Ze=Object.prototype,ze=Ze.toString;function We(r){return ze.call(r)}J.exports=We});var Q=n((nn,K)=>{var Y=b(),Ge=V(),He=B(),Fe="[object Null]",Ve="[object Undefined]",$=Y?Y.toStringTag:void 0;function Je(r){return r==null?r===void 0?Ve:Fe:$&&$ in Object(r)?Ge(r):He(r)}K.exports=Je});var rr=n((un,X)=>{function Be(r){return r!=null&&typeof r=="object"}X.exports=Be});var tr=n((an,er)=>{var Ye=Q(),$e=rr(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}er.exports=Qe});var sr=n((on,or)=>{var ir=b(),Xe=Z(),rt=W(),et=tr(),tt=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ar)+"";if(et(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}or.exports=ar});var p=n((sn,fr)=>{var it=sr();function nt(r){return r==null?"":it(r)}fr.exports=nt});var lr=n((fn,dr)=>{var ut=N(),at=p(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ft+dt,ct="["+lt+"]",mt=RegExp(ct,"g");function pt(r){return r=at(r),r&&r.replace(ot,ut).replace(mt,"")}dr.exports=pt});var mr=n((dn,cr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(gt)||[]}cr.exports=xt});var gr=n((ln,pr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return bt.test(r)}pr.exports=ht});var Ur=n((cn,Nr)=>{var xr="\\ud800-\\udfff",Tt="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",wt=Tt+yt+Ct,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",Pt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",yr=vt+Rt+St+Pt,Cr="['\u2019]",wr="["+yr+"]",At="["+wt+"]",vr="\\d+",Ot="["+br+"]",Rr="["+hr+"]",Sr="[^"+xr+yr+vr+br+hr+Tr+"]",Lt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+At+"|"+Lt+")",Mt="[^"+xr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+Tr+"]",Nt="\\u200d",Ar="(?:"+Rr+"|"+Sr+")",Ut="(?:"+l+"|"+Sr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=jt+"?",Mr="["+qt+"]?",Dt="(?:"+Nt+"(?:"+[Mt,Pr,qr].join("|")+")"+Mr+jr+")*",_t="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Et="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Mr+jr+Dt,It="(?:"+[Ot,Pr,qr].join("|")+")"+kt,Zt=RegExp([l+"?"+Rr+"+"+Or+"(?="+[wr,l,"$"].join("|")+")",Ut+"+"+Lr+"(?="+[wr,l+Ar,"$"].join("|")+")",l+"?"+Ar+"+"+Or,l+"+"+Lr,Et,_t,vr,It].join("|"),"g");function zt(r){return r.match(Zt)||[]}Nr.exports=zt});var _r=n((mn,Dr)=>{var Wt=mr(),Gt=gr(),Ht=p(),Ft=Ur();function Vt(r,e,t){return r=Ht(r),e=t?void 0:e,e===void 0?Gt(r)?Ft(r):Wt(r):r.match(e)||[]}Dr.exports=Vt});var kr=n((pn,Er)=>{var Jt=O(),Bt=lr(),Yt=_r(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Jt(Yt(Bt(e).replace(Kt,"")),r,"")}}Er.exports=Qt});var Zr=n((gn,Ir)=>{function Xt(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}Ir.exports=Xt});var Wr=n((xn,zr)=>{var ri=Zr();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ri(r,e,t)}zr.exports=ei});var T=n((bn,Gr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",ai=ii+ni+ui,oi="\\ufe0e\\ufe0f",si="\\u200d",fi=RegExp("["+si+ti+ai+oi+"]");function di(r){return fi.test(r)}Gr.exports=di});var Fr=n((hn,Hr)=>{function li(r){return r.split("")}Hr.exports=li});var Xr=n((Tn,Qr)=>{var Vr="\\ud800-\\udfff",ci="\\u0300-\\u036f",mi="\\ufe20-\\ufe2f",pi="\\u20d0-\\u20ff",gi=ci+mi+pi,xi="\\ufe0e\\ufe0f",bi="["+Vr+"]",y="["+gi+"]",C="\\ud83c[\\udffb-\\udfff]",hi="(?:"+y+"|"+C+")",Jr="[^"+Vr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="\\u200d",$r=hi+"?",Kr="["+xi+"]?",yi="(?:"+Ti+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",Ci=Kr+$r+yi,wi="(?:"+[Jr+y+"?",y,Br,Yr,bi].join("|")+")",vi=RegExp(C+"(?="+C+")|"+wi+Ci,"g");function Ri(r){return r.match(vi)||[]}Qr.exports=Ri});var ee=n((yn,re)=>{var Si=Fr(),Pi=T(),qi=Xr();function Ai(r){return Pi(r)?qi(r):Si(r)}re.exports=Ai});var ie=n((Cn,te)=>{var Oi=Wr(),Li=T(),ji=ee(),Mi=p();function Ni(r){return function(e){e=Mi(e);var t=Li(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),u=t?Oi(t,1).join(""):e.slice(1);return i[r]()+u}}te.exports=Ni});var w=n((wn,ne)=>{var Ui=ie(),Di=Ui("toUpperCase");ne.exports=Di});var ae=n((vn,ue)=>{var _i=kr(),Ei=w(),ki=_i(function(r,e,t){return r+(t?" ":"")+Ei(e)});ue.exports=ki});var le=n((Sn,de)=>{var Gi=p(),Hi=w();function Fi(r){return Hi(Gi(r).toLowerCase())}de.exports=Fi});var oe=P(ae());function Ii(r){return x(d({},r),{json:JSON.stringify(zi(r),null,2)})}var Zi=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,se=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function zi(r){let{name:e,category:t,description:i,author:u,result:o,params:c,about:s,video:a}=r,{icon:f=se}=r;return f==="glide"&&(f=Zi),{name:e,category:t,description:i,author:u,result:o,about:s,icon:f,video:a,params:Object.entries(c).map(([me,pe])=>d({name:me},pe))}}var Wi={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,tests:[],run(){return q(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:x(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},f)=>{s[u[f]]=a}),!i.some(a=>s[a]===void 0))return e(s)}return Ii(x(d({},this.definition),{run:o}))}};function fe(r){return new h({name:r})}var ce=P(le()),qn=fe("Capitalize Text").withCategory("Text").withDescription("Converts the first character of string to upper case and the remaining to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withRequiredStringParam("text").withTest({text:"HELLO"},"Hello").run(({text:r})=>(0,ce.default)(r));export{qn as default};
//# sourceMappingURL=function.js.map
