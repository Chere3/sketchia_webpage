(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return d.ImageLoaderProps}}),t.default=function(e){let t,r;var i,{src:n,sizes:g,unoptimized:x=!1,priority:b=!1,loading:v,className:j,quality:w,width:y,height:E,fill:N,style:S,onLoad:C,onLoadingComplete:z,placeholder:k="empty",blurDataURL:H,layout:P,objectFit:O,objectPosition:I,lazyBoundary:A,lazyRoot:L}=e,R=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=s.useContext(_.ImageConfigContext),M=s.useMemo(()=>{let e=h||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:r})},[T]),B=R,D=B.loader||u.default;if(delete B.loader,"__next_img_default"in D){if("custom"===M.loader)throw Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=D;D=e=>{let{config:t}=e,r=o(e,["config"]);return Z(r)}}if(P){"fill"===P&&(N=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];W&&(S=a({},S,W));let F={responsive:"100vw",fill:"100vw"}[P];F&&!g&&(g=F)}let G="",U=m(y),q=m(E);if("object"==typeof(i=n)&&(f(i)||void 0!==i.src)){let V=f(n)?n.default:n;if(!V.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(!V.height||!V.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)));if(t=V.blurWidth,r=V.blurHeight,H=H||V.blurDataURL,G=V.src,!N){if(U||q){if(U&&!q){let J=U/V.width;q=Math.round(V.height*J)}else if(!U&&q){let K=q/V.height;U=Math.round(V.width*K)}}else U=V.width,q=V.height}}let Q=!b&&("lazy"===v||void 0===v);((n="string"==typeof n?n:G).startsWith("data:")||n.startsWith("blob:"))&&(x=!0,Q=!1),M.unoptimized&&(x=!0);let[X,Y]=s.useState(!1),[$,ee]=s.useState(!1),et=m(w),er=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:I}:{},$?{}:{color:"transparent"},S),ea="blur"===k&&H&&!X?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:U,heightInt:q,blurWidth:t,blurHeight:r,blurDataURL:H}),'")')}:{},ei=function(e){let{config:t,src:r,unoptimized:a,width:i,quality:n,sizes:o,loader:s}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,r){let{deviceSizes:a,allSizes:i}=e;if(r){let n=/(^|\s)(1?\d?\d)vw/g,o=[];for(let s;s=n.exec(r);s)o.push(parseInt(s[2]));if(o.length){let c=.01*Math.min(...o);return{widths:i.filter(e=>e>=a[0]*c),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let l=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:l,kind:"x"}}(t,i,o),d=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((e,a)=>"".concat(s({config:t,src:r,quality:n,width:e})," ").concat("w"===l?e:a+1).concat(l)).join(", "),src:s({config:t,src:r,quality:n,width:c[d]})}}({config:M,src:n,unoptimized:x,width:U,quality:et,sizes:g,loader:D}),en=n,eo={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:B.crossOrigin},es=s.useRef(C);s.useEffect(()=>{es.current=C},[C]);let ec=s.useRef(z);s.useEffect(()=>{ec.current=z},[z]);let el=a({isLazy:Q,imgAttributes:ei,heightInt:q,widthInt:U,qualityInt:et,className:j,imgStyle:er,blurStyle:ea,loading:v,config:M,fill:N,unoptimized:x,placeholder:k,loader:D,srcString:en,onLoadRef:es,onLoadingCompleteRef:ec,setBlurComplete:Y,setShowAltText:ee},B);return s.default.createElement(s.default.Fragment,null,s.default.createElement(p,Object.assign({},el)),b?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},eo))):null)};var a=r(6495).Z,i=r(2648).Z,n=r(1598).Z,o=r(7273).Z,s=n(r(7294)),c=i(r(3121)),l=r(2675),d=r(139),_=r(8730);r(7238);var u=i(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,i,n,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,c=!1;i.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>c,persist(){},preventDefault(){s=!0,t.preventDefault()},stopPropagation(){c=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let p=e=>{var{imgAttributes:t,heightInt:r,widthInt:i,qualityInt:n,className:c,imgStyle:l,blurStyle:d,isLazy:_,fill:u,placeholder:h,loading:f,srcString:m,config:p,unoptimized:x,loader:b,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:y,onLoad:E,onError:N}=e,S=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=_?"lazy":f,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,{width:i,height:r,decoding:"async","data-nimg":u?"fill":"1",className:c,loading:f,style:a({},l,d),ref:s.useCallback(e=>{e&&(N&&(e.src=e.src),e.complete&&g(e,m,h,v,j,w,x))},[m,h,v,j,w,N,x]),onLoad(e){let t=e.currentTarget;g(t,m,h,v,j,w,x)},onError(e){y(!0),"blur"===h&&w(!0),N&&N(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:i,blurDataURL:n}=e,o=a||t,s=i||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(a,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(5893),i=r(9008),n=r.n(i),o=r(5675),s=r.n(o),c=r(7160),l=r.n(c);function d(){return(0,a.jsxs)("div",{className:l().container,children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Sketchia"}),(0,a.jsx)("meta",{name:"description",content:"Empieza a aprender e instruir con sketchia."}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("script",{src:"https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/gradient.js?t=2022-11-04T17%3A54%3A05.903Z"}),(0,a.jsx)("script",{src:"https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/main.js?t=2022-11-04T17%3A32%3A01.643Z"})]}),(0,a.jsxs)("main",{className:l().header,children:[(0,a.jsx)("canvas",{className:l().gradient_canvas}),(0,a.jsxs)("div",{className:l().header__container,children:[(0,a.jsxs)("div",{className:l().header__container__text,children:[(0,a.jsx)(s(),{src:"/sketchia.svg",alt:"Sketchia logo",className:l().logo,width:180,height:100}),(0,a.jsxs)("div",{className:l().header__container__text__pages,children:[(0,a.jsx)("a",{href:"/",className:l().header__container__text__description,children:"P\xe1gina principal"}),(0,a.jsx)("a",{href:"/courses",className:l().header__container__text__description,children:"Cursos"}),(0,a.jsx)("a",{href:"/blog",className:l().header__container__text__description,children:"Blog"}),(0,a.jsx)("a",{href:"/about",className:l().header__container__text__description,children:"Acerca de nosotros"}),(0,a.jsx)("a",{href:"/source",className:l().header__container__text__description,children:"C\xf3digo fuente"})]}),(0,a.jsx)("a",{href:"/login",className:l().header__container__text__button,children:"Iniciar sesi\xf3n"})]}),(0,a.jsx)("div",{className:"header__container__image"})]})]}),(0,a.jsxs)("main",{className:l().main,children:[(0,a.jsxs)("h1",{className:l().title,children:["Aprende a ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:l().italic}),(0,a.jsx)("br",{})," con Sketchia."]}),(0,a.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/typed.js@2.0.11"}),(0,a.jsx)("p",{className:l().description,children:"M\xe1s de 3000 personas estan aprendiendo actualmente con Sketchia."}),(0,a.jsx)("div",{className:l().grid})]}),(0,a.jsx)("footer",{className:l().footer,children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," Sketchia ",(0,a.jsx)("span",{className:l().logo,children:(0,a.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(e){e.exports={header__container__text:"Home_header__container__text___JZCu",header__container:"Home_header__container__LU3Ha",header__container__text__pages:"Home_header__container__text__pages__sEzHl",header__container__text__description:"Home_header__container__text__description__NWaOK",header__container__text__button:"Home_header__container__text__button__rkwav",consts:"Home_consts__n_wzI","typed-cursor":"Home_typed-cursor__2Y5cb",gradient_canvas:"Home_gradient_canvas__cZzsk",container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",italic:"Home_italic___ByUC",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);