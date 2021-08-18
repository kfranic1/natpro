"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9103],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return c}});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var m=n.createContext({}),o=function(a){var e=n.useContext(m),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(m.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,m=a.parentName,l=s(a,["components","mdxType","originalType","parentName"]),u=o(t),c=r,j=u["".concat(m,".").concat(c)]||u[c]||k[c]||i;return t?n.createElement(j,p(p({ref:e},l),{},{components:t})):n.createElement(j,p({ref:e},l))}));function c(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,p=new Array(i);p[0]=u;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=a,s.mdxType="string"==typeof a?a:r,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7312:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),p=["components"],s={title:"Pruning"},m=void 0,o={unversionedId:"potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",id:"potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",isDocsHomePage:!1,title:"Pruning",description:"Pruning je tehnika ranijeg odbacivanja poku\u0161aja koji sigurno ne\u0107e",source:"@site/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning.md",sourceDirName:"potpuno-pretrazivanje-i-pohlepni-pristupi",slug:"/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",editUrl:"https://github.com/x-fer/natpro/tree/main/website/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning.md",version:"current",lastUpdatedBy:"Franic",lastUpdatedAt:1629304343,formattedLastUpdatedAt:"8/18/2021",frontMatter:{title:"Pruning"},sidebar:"materijaliSidebar",previous:{title:"Meet in the middle",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/meet-in-the-middle"},next:{title:"Zadatci - potpuno pretra\u017eivanje",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/zadatci-potpuno"}},l=[{value:"Problem 2: Broj puteva koji pokrivaju polje",id:"problem-2-broj-puteva-koji-pokrivaju-polje",children:[]}],k={toc:l};function u(a){var e=a.components,t=(0,r.Z)(a,p);return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pruning")," je tehnika ranijeg odbacivanja poku\u0161aja koji sigurno ne\u0107e\nrezultirati rje\u0161enjem, a termin se koristi primarno kod rekurzivnih istra\u017eivanja."),(0,i.kt)("p",null,"U sljede\u0107em problemu demonstrirat \u0107emo kori\u0161tenje pruninga, a uz to\npokazati tehniku pametne predaje stanja iz jednog rekurzivnog poziva u drugi."),(0,i.kt)("h3",{id:"problem-2-broj-puteva-koji-pokrivaju-polje"},"Problem 2: Broj puteva koji pokrivaju polje"),(0,i.kt)("p",null,"U prvom retku zadana su dva broja, ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," i ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"m")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),", za koje vrijedi ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"2"),(0,i.kt)("mo",{parentName:"mrow"},"\u2264"),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,i.kt)("mi",{parentName:"mrow"},"m"),(0,i.kt)("mo",{parentName:"mrow"},"\u2264"),(0,i.kt)("mn",{parentName:"mrow"},"6")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 \\leq n,m \\leq 6")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.78041em",verticalAlign:"-0.13597em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304100000000001em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mpunct"},","),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"6"))))),".\nTa dva broja definiraju dimenzije \u0161ahovskog polja, \u0161irinu i du\u017einu."),(0,i.kt)("p",null,"Odredi koliko puteva postoji koji kre\u0107u s jednog kuta i zavr\u0161avaju u dijagonalnom,\na svakim poljem prolaze ",(0,i.kt)("strong",{parentName:"p"},"to\u010dno jednom"),"."),(0,i.kt)("h4",{id:"pruning"},"Pruning"),(0,i.kt)("p",null,"Razmislite li je li mogu\u0107e zavr\u0161iti put koji nije posjetio sva polja,\na stao je na krajnje? Naravno, nije.\nDakle, svi rekurzivni pozivi koji nalete na takvu situaciju trebaju biti\nprekinuti bez daljnjeg razmotavanja."),(0,i.kt)("p",null,"Jo\u0161 jedan primjeru pruninga je taj da u razvoju rekurzije nikad ne stanemo na polje\nna koje smo ve\u0107 stali; iako je ovo nu\u017eno za dobar algoritam i vjerojatno o\u010dito,\ntako\u0111er spada u tehniku pruninga."),(0,i.kt)("h4",{id:"kako-provjeriti-gdje-smo-pro\u0161li"},"Kako provjeriti gdje smo pro\u0161li?"),(0,i.kt)("p",null,"Svaki rekurzivni poziv mora biti svjestan svoje pro\u0161losti,\nto jest simulaciji kojeg puta on odgovara (koja su polja ve\u0107 posje\u0107ena, poredak nije bitan).\nOvo moramo posti\u0107i nekom varijantom dvodimenzijskog polja u kojem su ozna\u010dena polja koja smo pro\u0161li.\nNaravno, kopiranje tog polja minimalno promijenjenog iz jednog poziva u drugi je jako vremenski zahtijevno."),(0,i.kt)("p",null,"Umjesto kopiranja, mo\u017eemo samo promijeniti jedan element i poslati referencu,\na kad se rekurzija izmota iz tog poziva, taj element vratiti na staru vrijednost.\nU sljede\u0107em rekurzivnom pozivu \u0107e se promijeniti neki drugi element,\na nakon njega \u0107e se i taj drugi element vratiti na staro.\nKad se cijeli rekurzivni poziv zavr\u0161i, rekurzija \u0107e se izmotati natrag,\ngdje \u0107e roditelj poziva napraviti istu stvar."),(0,i.kt)("p",null,"Postizanje ovakvog efekta zahtijeva da struktura (polje posje\u0107enih polja)\nbude reverzibilna, tj. da na njoj mo\u017eemo napraviti promijene i onda ih poni\u0161titi."),(0,i.kt)("h4",{id:"kako-provjeriti-jesmo-li-pro\u0161li-sva-polja"},"Kako provjeriti jesmo li pro\u0161li sva polja?"),(0,i.kt)("p",null,"Ve\u0107 smo napomenuli da stajanje na zadnje polje bez da smo posjetili sva ostala\nnu\u017eno rezultira granom rekurzije koju treba podrezati (nema rje\u0161enja u toj grani)."),(0,i.kt)("p",null,"Kako provjeriti da smo pro\u0161li sva polja bez iteracije po dvodimenzijskom polju?\nJednostavno, pozivi rekurzije pratit \u0107e koliko su polja posjetili,\nto \u0107e biti jo\u0161 jedan argument rekurzije."),(0,i.kt)("h4",{id:"implementacija"},"Implementacija"),(0,i.kt)("p",null,"Povratna vrijednost rekurzije ozna\u010davat \u0107e broj tra\u017eenih puteva na\u0111enih u toj rekurzivnoj grani."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <bits/stdc++.h>\nusing namespace std;\n\nint rek(int i, int j, vector<vector<bool>>& I, int visited_cnt, int n, int m){\n    // na krajnjem smo polju\n    if (i == n-1 && j==m-1){\n        // pruning, ovakve grane nemaju rjesenja\n        if (visited_cnt != n*m){\n            return 0;\n        }\n        // rjesenje!\n        else{\n            return 1;\n        }\n    }\n\n\n    int paths = 0;\n    // zgodan trik za situacije s kretanjima po polju\n    vector<vector<int>> dirs = {{-1,0},{1,0},{0,-1},{0,1}};\n\n    for (auto dir : dirs){\n        int ti = i+dir[0];\n        int tj = j+dir[1];\n\n        // unutar polja i nije posje\u0107en\n        if (ti>=0 && tj>=0 && ti<n && tj<m && I[ti][tj]==false){\n            I[ti][tj] = true;\n            paths+=rek(ti, tj, I, visited_cnt+1, n, m);\n            I[ti][tj] = false;\n        }\n    }\n\n    return paths;\n}\n\nint main(){\n    int n,m; cin>>n>>m;\n    \n    // polje posje\u0107enih polja\n    vector<vector<bool>> I(n,vector<bool>(m));\n\n    // vidi opis\n    I[0][0] = true;\n    cout << rek(0,0,I,1,n,m) << endl;\n    return 0;\n}\n")),(0,i.kt)("p",null,"Primjetite da smo se u ovoj implementaciji dr\u017eali sljede\u0107e ",(0,i.kt)("em",{parentName:"p"},"filozofije"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"svaki rekurzivni poziv na svom po\u010detku ima dobre vrijednosti polja ",(0,i.kt)("span",{parentName:"em",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mtext",{parentName:"mrow",mathvariant:"monospace"},"I")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\texttt{I}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.61111em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord texttt"},"I"))))))," i broja ",(0,i.kt)("span",{parentName:"em",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mtext",{parentName:"mrow",mathvariant:"monospace"},"visited_cnt")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\texttt{visited\\_cnt}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.70625em",verticalAlign:"-0.09514em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord texttt"},"visited_cnt"))))))))),(0,i.kt)("p",null,"Iako to nije moralo biti tako (sam poziv je to mogao a\u017eurirati),\ntreba unaprijed odlu\u010diti i dr\u017eati se toga u cijelom programu.\nImplikacija na\u0161eg izbora ujedno je i postavljanje vrijednosti polja u mainu."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"savjet")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Prethodno spomenute ",(0,i.kt)("em",{parentName:"p"},"filozofije")," u \u017eargonu ra\u010dunalne znanosti zovemo\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Invariant_(mathematics)#Invariants_in_computer_science"},"invarijantama")))),(0,i.kt)("h4",{id:"simetrija"},"Simetrija"),(0,i.kt)("p",null,"Ograni\u010dimo problem na takav da su ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," i ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"m")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," jednaki."),(0,i.kt)("p",null,"Primijetite da se u rje\u0161enjima mo\u017ee na\u0107i simetrija:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"za svako rje\u0161enje koje kre\u0107e u u jednom od dva dostupna smjera,\npostoji drugo rje\u0161enje koje kre\u0107e u onom drugom smjeru, a ta rje\u0161enja\nse mogu dobiti jedno od drugoga zrcaljenjem")),(0,i.kt)("p",null,"Dakle, umjesto da istra\u017eujemo oba puta, mi \u0107emo ru\u010dno krenuti jednim,\na zatim rezultat pomno\u017eiti s ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"2")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"))))),"."),(0,i.kt)("p",null,"Implementacija se razlikuje samo u dijelu funkcije ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mtext",{parentName:"mrow",mathvariant:"monospace"},"main")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\texttt{main}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.61111em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord texttt"},"main")))))),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"    I[0][0] = true;\n    I[0][1] = true;\n    cout << rek(0,1,I,2,n,m)*2 << endl;\n    return 0;\n")),(0,i.kt)("p",null,"Ova jednostavna optimizacije u\u0161tedjet \u0107e nam pola vremena!\nU drugim postavkama i zadatcima postoje i slo\u017eenije simetrije koje ne\u0107emo istra\u017eivati."))}u.isMDXComponent=!0}}]);