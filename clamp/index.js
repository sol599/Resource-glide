(()=>{var ce=Object.create;var p=Object.defineProperty,me=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,xe=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))v.call(e,t)&&P(r,t,e[t]);if(R)for(var t of R(e))he.call(e,t)&&P(r,t,e[t]);return r},g=(r,e)=>me(r,ge(e)),Te=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of be(e))!v.call(r,u)&&u!=="default"&&p(r,u,{get:()=>e[u],enumerable:!(t=pe(e,u))||t.enumerable});return r},Ce=r=>ye(Te(p(r!=null?ce(xe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var T=(r,e,t)=>new Promise((u,i)=>{var a=o=>{try{s(t.next(o))}catch(d){i(d)}},f=o=>{try{s(t.throw(o))}catch(d){i(d)}},s=o=>o.done?u(o.value):Promise.resolve(o.value).then(a,f);s((t=t.apply(r,e)).next())});var q=n((zu,S)=>{function we(r,e,t,u){var i=-1,a=r==null?0:r.length;for(u&&a&&(t=r[++i]);++i<a;)t=e(t,r[i],i,r);return t}S.exports=we});var O=n((Vu,A)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}A.exports=Re});var M=n((Hu,L)=>{var ve=O(),Pe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Se=ve(Pe);L.exports=Se});var N=n((Fu,j)=>{var qe=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=qe});var D=n((Ju,U)=>{var Ae=N(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=Ae||Oe||Function("return this")();U.exports=Le});var b=n((Bu,_)=>{var Me=D(),je=Me.Symbol;_.exports=je});var k=n((Yu,E)=>{function Ne(r,e){for(var t=-1,u=r==null?0:r.length,i=Array(u);++t<u;)i[t]=e(r[t],t,r);return i}E.exports=Ne});var Z=n(($u,I)=>{var Ue=Array.isArray;I.exports=Ue});var V=n((Ku,z)=>{var W=b(),G=Object.prototype,De=G.hasOwnProperty,_e=G.toString,m=W?W.toStringTag:void 0;function Ee(r){var e=De.call(r,m),t=r[m];try{r[m]=void 0;var u=!0}catch(a){}var i=_e.call(r);return u&&(e?r[m]=t:delete r[m]),i}z.exports=Ee});var F=n((Qu,H)=>{var ke=Object.prototype,Ie=ke.toString;function Ze(r){return Ie.call(r)}H.exports=Ze});var $=n((Xu,Y)=>{var J=b(),We=V(),Ge=F(),ze="[object Null]",Ve="[object Undefined]",B=J?J.toStringTag:void 0;function He(r){return r==null?r===void 0?Ve:ze:B&&B in Object(r)?We(r):Ge(r)}Y.exports=He});var Q=n((ri,K)=>{function Fe(r){return r!=null&&typeof r=="object"}K.exports=Fe});var rr=n((ei,X)=>{var Je=$(),Be=Q(),Ye="[object Symbol]";function $e(r){return typeof r=="symbol"||Be(r)&&Je(r)==Ye}X.exports=$e});var ar=n((ti,nr)=>{var er=b(),Ke=k(),Qe=Z(),Xe=rr(),rt=1/0,tr=er?er.prototype:void 0,ur=tr?tr.toString:void 0;function ir(r){if(typeof r=="string")return r;if(Qe(r))return Ke(r,ir)+"";if(Xe(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}nr.exports=ir});var x=n((ui,or)=>{var et=ar();function tt(r){return r==null?"":et(r)}or.exports=tt});var dr=n((ii,sr)=>{var ut=M(),it=x(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",dt=at+ot+st,ft="["+dt+"]",lt=RegExp(ft,"g");function ct(r){return r=it(r),r&&r.replace(nt,ut).replace(lt,"")}sr.exports=ct});var lr=n((ni,fr)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(mt)||[]}fr.exports=pt});var mr=n((ai,cr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return gt.test(r)}cr.exports=bt});var jr=n((oi,Mr)=>{var pr="\\ud800-\\udfff",xt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=xt+ht+Tt,gr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",Pt="\\ufe0e\\ufe0f",hr=Ct+wt+Rt+vt,Tr="['\u2019]",yr="["+hr+"]",St="["+yt+"]",Cr="\\d+",qt="["+gr+"]",wr="["+br+"]",Rr="[^"+pr+hr+Cr+gr+br+xr+"]",At="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+St+"|"+At+")",Lt="[^"+pr+"]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xr+"]",Mt="\\u200d",Sr="(?:"+wr+"|"+Rr+")",jt="(?:"+c+"|"+Rr+")",qr="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Or=Ot+"?",Lr="["+Pt+"]?",Nt="(?:"+Mt+"(?:"+[Lt,vr,Pr].join("|")+")"+Lr+Or+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Lr+Or+Nt,Et="(?:"+[qt,vr,Pr].join("|")+")"+_t,kt=RegExp([c+"?"+wr+"+"+qr+"(?="+[yr,c,"$"].join("|")+")",jt+"+"+Ar+"(?="+[yr,c+Sr,"$"].join("|")+")",c+"?"+Sr+"+"+qr,c+"+"+Ar,Dt,Ut,Cr,Et].join("|"),"g");function It(r){return r.match(kt)||[]}Mr.exports=It});var Ur=n((si,Nr)=>{var Zt=lr(),Wt=mr(),Gt=x(),zt=jr();function Vt(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Wt(r)?zt(r):Zt(r):r.match(e)||[]}Nr.exports=Vt});var _r=n((di,Dr)=>{var Ht=q(),Ft=dr(),Jt=Ur(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return Ht(Jt(Ft(e).replace(Yt,"")),r,"")}}Dr.exports=$t});var kr=n((fi,Er)=>{function Kt(r,e,t){var u=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(i);++u<i;)a[u]=r[u+e];return a}Er.exports=Kt});var Zr=n((li,Ir)=>{var Qt=kr();function Xt(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:Qt(r,e,t)}Ir.exports=Xt});var y=n((ci,Wr)=>{var ru="\\ud800-\\udfff",eu="\\u0300-\\u036f",tu="\\ufe20-\\ufe2f",uu="\\u20d0-\\u20ff",iu=eu+tu+uu,nu="\\ufe0e\\ufe0f",au="\\u200d",ou=RegExp("["+au+ru+iu+nu+"]");function su(r){return ou.test(r)}Wr.exports=su});var zr=n((mi,Gr)=>{function du(r){return r.split("")}Gr.exports=du});var Kr=n((pi,$r)=>{var Vr="\\ud800-\\udfff",fu="\\u0300-\\u036f",lu="\\ufe20-\\ufe2f",cu="\\u20d0-\\u20ff",mu=fu+lu+cu,pu="\\ufe0e\\ufe0f",gu="["+Vr+"]",C="["+mu+"]",w="\\ud83c[\\udffb-\\udfff]",bu="(?:"+C+"|"+w+")",Hr="[^"+Vr+"]",Fr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",xu="\\u200d",Br=bu+"?",Yr="["+pu+"]?",hu="(?:"+xu+"(?:"+[Hr,Fr,Jr].join("|")+")"+Yr+Br+")*",Tu=Yr+Br+hu,yu="(?:"+[Hr+C+"?",C,Fr,Jr,gu].join("|")+")",Cu=RegExp(w+"(?="+w+")|"+yu+Tu,"g");function wu(r){return r.match(Cu)||[]}$r.exports=wu});var Xr=n((gi,Qr)=>{var Ru=zr(),vu=y(),Pu=Kr();function Su(r){return vu(r)?Pu(r):Ru(r)}Qr.exports=Su});var ee=n((bi,re)=>{var qu=Zr(),Au=y(),Ou=Xr(),Lu=x();function Mu(r){return function(e){e=Lu(e);var t=Au(e)?Ou(e):void 0,u=t?t[0]:e.charAt(0),i=t?qu(t,1).join(""):e.slice(1);return u[r]()+i}}re.exports=Mu});var ue=n((xi,te)=>{var ju=ee(),Nu=ju("toUpperCase");te.exports=Nu});var ne=n((hi,ie)=>{var Uu=_r(),Du=ue(),_u=Uu(function(r,e,t){return r+(t?" ":"")+Du(e)});ie.exports=_u});var ae=Ce(ne());function oe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(oe):r}function Eu(r,e){return T(this,null,function*(){var s;let{data:{key:t,params:u}}=r,i,a;try{i=yield e(...u)}catch(o){i=void 0;try{a=o.toString()}catch(d){a="Exception can't be stringified."}}let f={key:t};i!==void 0&&(i=oe(i),f.result={type:"string",value:i}),a!==void 0&&(f.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,f,"*")})}function ku(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Eu(e,r.run)),g(l({},r),{json:JSON.stringify(Zu(r),null,2)})}var Iu=`
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
</svg>`;function Zu(r){let{name:e,category:t,description:u,author:i,result:a,params:f,about:s,video:o}=r,{icon:d=se}=r;return d==="glide"&&(d=Iu),{name:e,category:t,description:u,author:i,result:a,about:s,icon:d,video:o,params:Object.entries(f).map(([fe,le])=>l({name:fe},le))}}var Wu={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,tests:[],run(){return T(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=l(l({},Wu),e),this.requiredParams=[...t]}with(e,t=[]){return new h(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:u=[]}=this.definition;return this.with({tests:[...u,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,u){return u===void 0&&(u=(0,ae.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:u}})})}withRequiredParam(e,t,u){return this.withParam(e,t,u).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,u=this.requiredParams,i=Object.keys(t);function a(...f){let s={};if(f.forEach(({value:o},d)=>{s[i[d]]=o}),!u.some(o=>s[o]===void 0))return e(s)}return ku(g(l({},this.definition),{run:a}))}};function de(r){return new h({name:r})}var Ci=de("Clamp").withCategory("Number").withDescription("Clamps a number within inclusive lower and upper bounds.").withNumberResult().withRequiredNumberParam("number").withRequiredNumberParam("lower","Lower Bound").withRequiredNumberParam("upper","Upper Bound").withTest({number:-10,lower:-5,upper:5},-5).withTest({number:10,lower:-5,upper:5},5).run(({number:r,lower:e,upper:t})=>Math.max(e,Math.min(r,t)));})();
//# sourceMappingURL=index.js.map
