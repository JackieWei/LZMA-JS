var LZMA=function(){function e(e,t){postMessage({action:go,callback_num:t,result:e})}function t(){}function n(){}function r(){}function o(e,t){return e[Mo]=t,e}function s(){}function i(e){return e}function a(){}function c(e,t){e[e.l$++]=t}function _(e,t){e[e.l$++]=t}function u(e){var t,n;return n=e.join(""),e[ko]=e.l$=0,t=n,e[e.l$++]=t,t}function f(e,t){var n=new Array(t);if(e>0)for(var r=[null,0,!1,[0,0]][e],o=0;t>o;++o)n[o]=r;return n}function m(){return this.pa}function d(e,t,n,r,o){var s;return s=f(o,r),P(),B(s,Zo,Yo),s.pa=e,s.d=t,s.ea=n,s}function p(e,t,n,r){return P(),B(r,Zo,Yo),r.pa=e,r.d=t,r.ea=n,r}function l(e,t,n){if(null!=n){if(e.ea>0&&!g(n.d,e.ea))throw new it;if(e.ea<0&&(n.oa==Po||2==n.d))throw new it}return e[t]=n}function h(){}function P(){P=Po,Zo=[],Yo=[],v(new h,Zo,Yo)}function v(e,t,n){var r,o=0;for(var s in e)(r=e[s])&&(t[o]=s,n[o]=r,++o)}function B(e,t,n){P();for(var r=0,o=t[ko];o>r;++r)e[t[r]]=n[r]}function w(e,t){return e&&!!ts[e][t]}function g(e,t){return e&&ts[e][t]}function S(e,t){if(null!=e&&!g(e.d,t))throw new _t;return e}function y(e,t){return null!=e&&w(e.d,t)}function k(e){return null!=e&&w(e.d,2)?e:i(new a,e)}function C(e,t){var n,r;return n=e[1]+t[1],r=e[0]+t[0],M(r,n)}function b(e,t){return E(~~Do.max(Do.min(e[1]/4294967296,2147483647),-2147483648)&~~Do.max(Do.min(t[1]/4294967296,2147483647),-2147483648),z(e)&z(t))}function R(e,t){var n,r;return e[0]==t[0]&&e[1]==t[1]?0:(n=e[1]<0,r=t[1]<0,n&&!r?-1:!n&&r?1:H(e,t)[1]<0?-1:1)}function M(e,t){var n,r;for(t%=0x10000000000000000,e%=0x10000000000000000,n=t%4294967296,r=4294967296*Do.floor(e/4294967296),t=t-n+r,e=e-r+n;0>e;)e+=4294967296,t-=4294967296;for(;e>4294967295;)e-=4294967296,t+=4294967296;for(t%=0x10000000000000000;t>0x7fffffff00000000;)t-=0x10000000000000000;for(;-0x8000000000000000>t;)t+=0x10000000000000000;return[e,t]}function $(e,t){return e[0]==t[0]&&e[1]==t[1]}function I(e){return isNaN(e)?(W(),es):-0x8000000000000000>e?(W(),Jo):e>=0x8000000000000000?(W(),jo):e>0?M(Do.floor(e),0):M(Do.ceil(e),0)}function D(e){var t,n;return e>-129&&128>e?(t=e+128,n=(G(),qo)[t],null==n&&(n=qo[t]=L(e)),n):L(e)}function L(e){return e>=0?[e,0]:[e+4294967296,-4294967296]}function z(e){return e[0]>=2147483648?~~Do.max(Do.min(e[0]-4294967296,2147483647),-2147483648):~~Do.max(Do.min(e[0],2147483647),-2147483648)}function E(e,t){var n,r;return n=4294967296*e,r=t,0>t&&(r+=4294967296),[r,n]}function F(e){var t,n;return $(e,(W(),Jo))?Jo:(t=-e[1],n=-e[0],n>4294967295&&(n-=4294967296,t+=4294967296),0>n&&(n+=4294967296,t-=4294967296),[n,t])}function x(e){return 30>=e?1<<e:x(30)*x(e-30)}function N(e,t){var n,r,o,s;return t&=63,$(e,(W(),Jo))?0==t?e:es:e[1]<0?F(N(F(e),t)):(s=x(t),r=e[1]*s%0x10000000000000000,o=e[0]*s,n=o-o%4294967296,r+=n,o-=n,r>=0x8000000000000000&&(r-=0x10000000000000000),[o,r])}function O(e,t){var n,r,o;return t&=63,o=x(t),n=e[1]/o,r=Do.floor(e[0]/o),M(r,n)}function A(e,t){var n;return t&=63,n=O(e,t),e[1]<0&&(n=C(n,N((W(),Uo),63-t))),n}function H(e,t){var n,r;return n=e[1]-t[1],r=e[0]-t[0],M(r,n)}function G(){G=Po,qo=d(ss,0,9,256,0)}function W(){W=Po,Vo=Do.log(2),jo=To,Jo=zo,Ko=D(-1),Qo=D(1),Uo=D(2),Xo=Ho,es=D(0)}function T(){}function Z(e,t){return Y(e,t,0,t[ko]),e}function Y(e,t,n,r){return e.qa=t,e.Qa=n,e.g$=n+r,e.g$>t[ko]&&(e.g$=t[ko]),e}function q(e){return e.Qa>=e.g$?-1:255&e.qa[e.Qa++]}function V(e,t,n,r){return e.Qa>=e.g$?-1:(r=ht(r,e.g$-e.Qa),St(e.qa,e.Qa,t,n,r),e.Qa+=r,r)}function j(){}function J(){}function K(e){return e.qa=d(is,0,-1,32,1),e}function Q(e,t){var n;t<=e.qa[ko]||(t=lt(t,2*e.qa[ko]),n=d(is,0,-1,t,1),St(e.qa,0,n,0,e.qa[ko]),e.qa=n)}function U(e){var t;return t=d(is,0,-1,e.g$,1),St(e.qa,0,t,0,e.g$),t}function X(e,t){Q(e,e.g$+1),e.qa[e.g$++]=t<<24>>24}function et(e,t,n,r){Q(e,e.g$+r),St(t,n,e.qa,e.g$,r),e.g$+=r}function tt(){}function nt(e,t){return e[Mo]=t,e}function rt(){}function ot(){}function st(e,t){return e[Mo]=t,e}function it(){}function at(e,t){var n;return n=new ct,n[$o]=e+t,n}function ct(){}function _t(){}function ut(){}function ft(e,t){return e[Mo]=t,e}function mt(){}function dt(){}function pt(){}function lt(e,t){return e>t?e:t}function ht(e,t){return t>e?e:t}function Pt(){}function vt(e,t){return null==t?!1:Lo(e)==t}function Bt(e,t,n,r,o){var s;for(s=t;n>s;++s)r[o++]=e[Ro](s)}function wt(e){var t;return e.E$=(t=[],t.l$=0,t),e}function gt(){}function St(e,t,n,r,o){var s,i,a,c,_,u,f,m;if(null==e||null==n)throw new Pt;if(f=(e.oa==Po||2==e.d?e.b():yo())[$o],a=(n.oa==Po||2==n.d?n.b():yo())[$o],91!=f[Ro](0)||91!=a[Ro](0))throw st(new it,"Must be array types");if(f[Ro](1)!=a[Ro](1))throw st(new it,"Array types must match");if(m=e[ko],c=n[ko],0>t||0>r||0>o||t+o>m||r+o>c)throw new pt;if(76!=f[Ro](1)&&91!=f[Ro](1)||vt(f,a))for(_=0;o>_;++_)n[r+_]=e[t+_];else if(u=S(e,3),s=S(n,3),(null==e?null:e)===(null==n?null:n)&&r>t)for(t+=o,i=r+o;i-->r;)l(s,i,u[--t]);else for(i=r+o;i>r;)l(s,r++,u[t++])}function yt(e,t){if(!rr(t,1<<e.dicSize))throw o(new s,"unexpected failure");if(!ir(t,e.fb))throw o(new s,"unexpected failure");if(!sr(t,e.matchFinder))throw o(new s,"unexpected failure");if(!or(t,e.lc,e.lp,e.pb))throw o(new s,"unexpected failure")}function kt(){}function Ct(e){var t;try{return dn(e.L$)}catch(n){if(t=k(n),y(t,10))return!1;throw t}}function bt(e,t,n,r,o){var s,i;if(!o)throw ft(new mt,"null mode");if(R(r,Eo)<0)throw ft(new mt,"invalid length "+r);for(e.t$=r,s=Zn(new fr),yt(o,s),s.ya=!0,ar(s,n),i=0;64>i;i+=8)X(n,255&z(O(r,i)));e.L$=(s.N=!1,s.ga=t,s.na=!1,Tn(s),s.c.r$=n,Un(s),qn(s),Yn(s),s.d$.k$=s.m+1-2,wr(s.d$,1<<s.K),s.l.k$=s.m+1-2,wr(s.l,1<<s.K),void(s.g=Fo),fn(new hn,s))}function Rt(){}function Mt(e,t,n){var r;e.ca=K(new tt);try{bt(e,Z(new j,t),e.ca,D(t[ko]),n)}catch(i){throw r=k(i),y(r,10)?o(new s,"impossible exception"):r}return e}function $t(){}function It(e){var t,n;try{return dn(e.L$)}catch(r){if(t=k(r),y(t,10))return n=t,e.exception=n,!1;throw t}}function Dt(e,t,n){var r,o,s,i,a,c="";for(s=d(is,0,-1,5,1),o=0;o<s[ko];++o){if(i=q(t),-1==i)throw nt(new rt,"truncated input");s[o]=i<<24>>24}if(r=wn(new Cn),!Sn(r,s))throw nt(new rt,"corrupted input");for(o=0;64>o;o+=8){if(i=q(t),-1==i)throw nt(new rt,"truncated input");i=i.toString(16),1==i[ko]&&(i="0"+i),c=i+""+c}/^0+$|^f+$/i.test(c)?e.t$=Eo:(a=parseInt(c,16),e.t$=a>4294967295?Eo:I(a)),e.L$=vn(r,t,n,e.t$)}function Lt(){}function zt(e,t){return e.ca=K(new tt),Dt(e,Z(new j,t),e.ca),e}function Et(){}function Ft(e,t,n,r){var o;e.ha=t,e.P$=n,o=t+n+r,(null==e.a||e.I$!=o)&&(e.a=null,e.I$=o,e.a=d(is,0,-1,e.I$,1)),e.C=e.I$-n}function xt(e,t){return e.a[e.e+e.p+t]}function Nt(e,t,n,r){var o,s;for(e.M&&e.p+t+r>e.h&&(r=e.h-(e.p+t)),++n,s=e.e+e.p+t,o=0;r>o&&e.a[s+o]==e.a[s+o-n];++o);return o}function Ot(e){return e.h-e.p}function At(e){var t,n,r;for(r=e.e+e.p-e.ha,r>0&&--r,n=e.e+e.h-r,t=0;n>t;++t)e.a[t]=e.a[r+t];e.e-=r}function Ht(e){var t;++e.p,e.p>e.A$&&(t=e.e+e.p,t>e.C&&At(e),Gt(e))}function Gt(e){var t,n,r;if(!e.M)for(;;){if(r=-e.e+e.I$-e.h,0==r)return;if(t=V(e.B$,e.a,e.e+e.h,r),-1==t)return e.A$=e.h,n=e.e+e.A$,n>e.C&&(e.A$=e.C-e.e),void(e.M=!0);e.h+=t,e.h>=e.p+e.P$&&(e.A$=e.h-e.P$)}}function Wt(e,t){e.e+=t,e.A$-=t,e.p-=t,e.h-=t}function Tt(){}function Zt(){Zt=Po;var e,t,n;for(ns=d(cs,0,-1,256,1),e=0;256>e;++e){for(n=e,t=0;8>t;++t)0!=(1&n)?n=n>>>1^-306674912:n>>>=1;ns[e]=n}}function Yt(e,t,n,r,o){var s,i,a;return t>1073741567?!1:(e.Aa=16+(r>>1),a=~~((t+n+r+o)/2)+256,Ft(e,t+n,r+o,a),e.h$=r,s=t+1,e.n!=s&&(e.S=d(cs,0,-1,2*(e.n=s),1)),i=65536,e.n$&&(i=t-1,i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i>>=1,i|=65535,i>16777216&&(i>>=1),e.Ba=i,++i,i+=e.Q),i!=e.D$&&(e.o$=d(cs,0,-1,e.D$=i,1)),!0)}function qt(e,t){var n,r,o,s,i,a,c,_,u,f,m,d,p,l,h,P,v,B,w,g,S;if(e.p+e.h$<=e.h)l=e.h$;else if(l=e.h-e.p,l<e.p$)return jt(e),0;for(v=0,h=e.p>e.n?e.p-e.n:0,r=e.e+e.p,P=1,_=0,u=0,e.n$?(S=ns[255&e.a[r]]^255&e.a[r+1],_=1023&S,S^=(255&e.a[r+2])<<8,u=65535&S,f=(S^ns[255&e.a[r+3]]<<5)&e.Ba):f=255&e.a[r]^(255&e.a[r+1])<<8,o=e.o$[e.Q+f],e.n$&&(s=e.o$[_],i=e.o$[1024+u],e.o$[_]=e.p,e.o$[1024+u]=e.p,s>h&&e.a[e.e+s]==e.a[r]&&(t[v++]=P=2,t[v++]=e.p-s-1),i>h&&e.a[e.e+i]==e.a[r]&&(i==s&&(v-=2),t[v++]=P=3,t[v++]=e.p-i-1,s=i),0!=v&&s==o&&(v-=2,P=1)),e.o$[e.Q+f]=e.p,w=(e.i<<1)+1,g=e.i<<1,d=p=e.v,0!=e.v&&o>h&&e.a[e.e+o+e.v]!=e.a[r+e.v]&&(t[v++]=P=e.v,t[v++]=e.p-o-1),n=e.Aa;;){if(h>=o||0==n--){e.S[w]=e.S[g]=0;break}if(c=e.p-o,a=(c<=e.i?e.i-c:e.i-c+e.n)<<1,B=e.e+o,m=p>d?d:p,e.a[B+m]==e.a[r+m]){for(;++m!=l&&e.a[B+m]==e.a[r+m];);if(m>P&&(t[v++]=P=m,t[v++]=c-1,m==l)){e.S[g]=e.S[a],e.S[w]=e.S[a+1];break}}(255&e.a[B+m])<(255&e.a[r+m])?(e.S[g]=o,g=a+1,o=e.S[g],p=m):(e.S[w]=o,w=a,o=e.S[w],d=m)}return jt(e),v}function Vt(e){var t;for(e.e=0,e.p=0,e.h=0,e.M=!1,Gt(e),t=0;t<e.D$;++t)e.o$[t]=0;e.i=0,Wt(e,-1)}function jt(e){var t;++e.i>=e.n&&(e.i=0),Ht(e),1073741823==e.p&&(t=e.p-e.n,Jt(e.S,2*e.n,t),Jt(e.o$,e.D$,t),Wt(e,t))}function Jt(e,t,n){var r,o;for(r=0;t>r;++r)o=e[r],n>=o?o=0:o-=n,e[r]=o}function Kt(e,t){e.n$=t>2,e.n$?(e.v=0,e.p$=4,e.Q=66560):(e.v=2,e.p$=3,e.Q=0)}function Qt(e,t){var n,r,o,s,i,a,c,_,u,f,m,d,p,l,h,P,v;do{if(e.p+e.h$<=e.h)d=e.h$;else if(d=e.h-e.p,d<e.p$){jt(e);continue}for(p=e.p>e.n?e.p-e.n:0,r=e.e+e.p,e.n$?(v=ns[255&e.a[r]]^255&e.a[r+1],a=1023&v,e.o$[a]=e.p,v^=(255&e.a[r+2])<<8,c=65535&v,e.o$[1024+c]=e.p,_=(v^ns[255&e.a[r+3]]<<5)&e.Ba):_=255&e.a[r]^(255&e.a[r+1])<<8,o=e.o$[e.Q+_],e.o$[e.Q+_]=e.p,h=(e.i<<1)+1,P=e.i<<1,f=m=e.v,n=e.Aa;;){if(p>=o||0==n--){e.S[h]=e.S[P]=0;break}if(i=e.p-o,s=(i<=e.i?e.i-i:e.i-i+e.n)<<1,l=e.e+o,u=m>f?f:m,e.a[l+u]==e.a[r+u]){for(;++u!=d&&e.a[l+u]==e.a[r+u];);if(u==d){e.S[P]=e.S[s],e.S[h]=e.S[s+1];break}}(255&e.a[l+u])<(255&e.a[r+u])?(e.S[P]=o,P=s+1,o=e.S[P],m=u):(e.S[h]=o,h=s,o=e.S[h],f=u)}jt(e)}while(0!=--t)}function Ut(){}function Xt(e,t,n){var r;for(r=e.p-t-1,0>r&&(r+=e.O);0!=n;--n)r>=e.O&&(r=0),e.N$[e.p++]=e.N$[r++],e.p>=e.O&&tn(e)}function en(e,t){(null==e.N$||e.O!=t)&&(e.N$=d(is,0,-1,t,1)),e.O=t,e.p=0,e.h=0}function tn(e){var t;t=e.p-e.h,0!=t&&(et(e.B$,e.N$,e.h,t),e.p>=e.O&&(e.p=0),e.h=e.p)}function nn(e,t){var n;return n=e.p-t-1,0>n&&(n+=e.O),e.N$[n]}function rn(e,t){t||(e.h=0,e.p=0)}function on(e,t){e.N$[e.p++]=t,e.p>=e.O&&tn(e)}function sn(e){tn(e),e.B$=null}function an(e,t){tn(e),e.B$=null,e.B$=t}function cn(){}function _n(e){return e-=2,4>e?e:3}function un(e){return 4>e?0:10>e?e-3:e-6}function fn(e,t){return e.e$=t,e.m$=null,e.ta=!0,e}function mn(e,t){return e.m$=t,e.e$=null,e.ta=!0,e}function dn(e){var t;if(!e.ta)throw new dt;t=!0;try{return e.e$?ln(e):pn(e),t=!1,e.ta}finally{t&&(e.ta=!1)}}function pn(e){var t;if(t=Bn(e.m$),-1==t)throw nt(new rt,"corrupted input");e._a=Eo,e.Ua=e.m$.g,(1==t||R(e.m$.Oa,Fo)>=0&&R(e.m$.g,e.m$.Oa)>=0)&&(Pn(e.m$),e.ta=!1)}function ln(e){Wn(e.e$,e.e$.la,e.e$.Ha,e.e$.Ra),e._a=e.e$.la[0],e.e$.Ra[0]&&(nr(e.e$),e.ta=!1)}function hn(){}function Pn(e){tn(e.I),sn(e.I),e.f.r$=null}function vn(e,t,n,r){return e.f.r$=t,an(e.I,n),gn(e),e.W=0,e.q$=0,e.Pa=0,e.Na=0,e.Ta=0,e.Oa=r,e.g=Fo,e.da=0,mn(new hn,e)}function Bn(e){var t,n,r,o,s,i;if(i=z(e.g)&e.ra,0==Vr(e.f,e.U$,(e.W<<4)+i))t=Ln(e.z$,z(e.g),e.da),e.da=e.W<7?Fn(t,e.f):xn(t,e.f,nn(e.I,e.q$)),on(e.I,e.da),e.W=un(e.W),e.g=C(e.g,xo);else{if(1==Vr(e.f,e.ia,e.W))r=0,0==Vr(e.f,e.T$,e.W)?0==Vr(e.f,e.G$,(e.W<<4)+i)&&(e.W=e.W<7?9:11,r=1):(0==Vr(e.f,e.V$,e.W)?n=e.Pa:(0==Vr(e.f,e.W$,e.W)?n=e.Na:(n=e.Ta,e.Ta=e.Na),e.Na=e.Pa),e.Pa=e.q$,e.q$=n),0==r&&(r=Rn(e.H$,e.f,i)+2,e.W=e.W<7?8:11);else if(e.Ta=e.Na,e.Na=e.Pa,e.Pa=e.q$,r=2+Rn(e.ba,e.f,i),e.W=e.W<7?7:10,s=Fr(e.x$[_n(r)],e.f),s>=4){if(o=(s>>1)-1,e.q$=(2|1&s)<<o,14>s)e.q$+=Nr(e.za,e.q$-s-1,e.f,o);else if(e.q$+=jr(e.f,o-4)<<4,e.q$+=xr(e.R$,e.f),e.q$<0)return-1==e.q$?1:-1}else e.q$=s;if(R(D(e.q$),e.g)>=0||e.q$>=e.Z)return-1;Xt(e.I,e.q$,r),e.g=C(e.g,D(r)),e.da=nn(e.I,0)}return 0}function wn(e){var t;for(e.I=new cn,e.f=new Qr,e.U$=d(_s,0,-1,192,1),e.ia=d(_s,0,-1,12,1),e.T$=d(_s,0,-1,12,1),e.V$=d(_s,0,-1,12,1),e.W$=d(_s,0,-1,12,1),e.G$=d(_s,0,-1,192,1),e.x$=d(us,0,7,4,0),e.za=d(_s,0,-1,114,1),e.R$=Er(new Or,4),e.ba=Mn(new In),e.H$=Mn(new In),e.z$=new En,t=0;4>t;++t)e.x$[t]=Er(new Or,6);return e}function gn(e){var t;for(rn(e.I,!1),Kr(e.U$),Kr(e.G$),Kr(e.ia),Kr(e.T$),Kr(e.V$),Kr(e.W$),Kr(e.za),zn(e.z$),t=0;4>t;++t)Kr(e.x$[t].G);$n(e.ba),$n(e.H$),Kr(e.R$.G),Jr(e.f)}function Sn(e,t){var n,r,o,s,i,a,c;if(t[ko]<5)return!1;for(c=255&t[0],o=c%9,a=~~(c/9),s=a%5,i=~~(a/5),n=0,r=0;4>r;++r)n+=(255&t[1+r])<<8*r;return n>99999999||!kn(e,o,s,i)?!1:yn(e,n)}function yn(e,t){return 0>t?!1:(e.u$!=t&&(e.u$=t,e.Z=lt(e.u$,1),en(e.I,lt(e.Z,4096))),!0)}function kn(e,t,n,r){var o;return t>8||n>4||r>4?!1:(Dn(e.z$,n,t),o=1<<r,bn(e.ba,o),bn(e.H$,o),e.ra=o-1,!0)}function Cn(){}function bn(e,t){for(;e.Y<t;++e.Y)e.va[e.Y]=Er(new Or,3),e.ua[e.Y]=Er(new Or,3)}function Rn(e,t,n){var r;return 0==Vr(t,e.Ia,0)?Fr(e.va[n],t):(r=8,r+=0==Vr(t,e.Ia,1)?Fr(e.ua[n],t):8+Fr(e.Fa,t))}function Mn(e){return e.Ia=d(_s,0,-1,2,1),e.va=d(us,0,7,16,0),e.ua=d(us,0,7,16,0),e.Fa=Er(new Or,8),e}function $n(e){var t;for(Kr(e.Ia),t=0;t<e.Y;++t)Kr(e.va[t].G),Kr(e.ua[t].G);Kr(e.Fa.G)}function In(){}function Dn(e,t,n){var r,o;if(null==e.P||e.t!=n||e.F!=t)for(e.F=t,e.Q$=(1<<t)-1,e.t=n,o=1<<e.t+e.F,e.P=d(fs,0,4,o,0),r=0;o>r;++r)e.P[r]=Nn(new On)}function Ln(e,t,n){return e.P[((t&e.Q$)<<e.t)+((255&n)>>>8-e.t)]}function zn(e){var t,n;for(n=1<<e.t+e.F,t=0;n>t;++t)Kr(e.P[t].X$)}function En(){}function Fn(e,t){var n;n=1;do n=n<<1|Vr(t,e.X$,n);while(256>n);return n<<24>>24}function xn(e,t,n){var r,o,s;s=1;do if(o=n>>7&1,n<<=1,r=Vr(t,e.X$,(1+o<<8)+s),s=s<<1|r,o!=r){for(;256>s;)s=s<<1|Vr(t,e.X$,s);break}while(256>s);return s<<24>>24}function Nn(e){return e.X$=d(_s,0,-1,768,1),e}function On(){}function An(){An=Po;var e,t,n,r;for(rs=d(is,0,-1,2048,1),e=2,rs[0]=0,rs[1]=1,r=2;22>r;++r)for(n=1<<(r>>1)-1,t=0;n>t;++t,++e)rs[e]=r<<24>>24}function Hn(e,t){var n,r,o,s;e.b$=t,o=e._[t].r,r=e._[t].j;do e._[t].u&&(Dr(e._[o]),e._[o].r=o-1,e._[t].Ea&&(e._[o-1].u=!1,e._[o-1].r=e._[t].r2,e._[o-1].j=e._[t].j2)),s=o,n=r,r=e._[s].j,o=e._[s].r,e._[s].j=n,e._[s].r=t,t=s;while(t>0);return e.C$=e._[0].j,e.k=e._[0].r,e.k}function Gn(e){var t;for(e.o=0,e.L=0,t=0;4>t;++t)e.x[t]=0}function Wn(e,t,n,r){var o,s,i,a,c,_,u,f,m,d,p,l,h,P,v;if(t[0]=Fo,n[0]=Fo,r[0]=!0,e.ga&&(e.$.B$=e.ga,Vt(e.$),e.N=!0,e.ga=null),!e.na){if(e.na=!0,P=e.g,$(e.g,Fo)){if(0==Ot(e.$))return void Vn(e,z(e.g));er(e),h=z(e.g)&e.w,Xr(e.c,e.E,(e.o<<4)+h,0),e.o=un(e.o),i=xt(e.$,-e.s),br(yr(e.A,z(e.g),e.L),e.c,i),e.L=i,--e.s,e.g=C(e.g,xo)}if(0==Ot(e.$))return void Vn(e,z(e.g));for(;;){if(u=jn(e,z(e.g)),d=e.C$,h=z(e.g)&e.w,s=(e.o<<4)+h,1==u&&-1==d)Xr(e.c,e.E,s,0),i=xt(e.$,-e.s),v=yr(e.A,z(e.g),e.L),e.o<7?br(v,e.c,i):(m=xt(e.$,-e.x[0]-1-e.s),Rr(v,e.c,m,i)),e.L=i,e.o=un(e.o);else{if(Xr(e.c,e.E,s,1),4>d){if(Xr(e.c,e.i$,e.o,1),0==d?(Xr(e.c,e.w$,e.o,0),1==u?Xr(e.c,e.c$,s,0):Xr(e.c,e.c$,s,1)):(Xr(e.c,e.w$,e.o,1),1==d?Xr(e.c,e.Z$,e.o,0):(Xr(e.c,e.Z$,e.o,1),Xr(e.c,e.Ja,e.o,d-2))),1==u?e.o=e.o<7?9:11:(Pr(e.l,e.c,u-2,h),e.o=e.o<7?8:11),a=e.x[d],0!=d){for(_=d;_>=1;--_)e.x[_]=e.x[_-1];e.x[0]=a}}else{for(Xr(e.c,e.i$,e.o,0),e.o=e.o<7?7:10,Pr(e.d$,e.c,u-2,h),d-=4,l=_r(d),f=_n(u),Hr(e.T[f],e.c,l),l>=4&&(c=(l>>1)-1,o=(2|1&l)<<c,p=d-o,14>l?Zr(e.Y$,o-l-1,e.c,c,p):(eo(e.c,p>>4,c-4),Wr(e.a$,e.c,15&p),++e.y$)),a=d,_=3;_>=1;--_)e.x[_]=e.x[_-1];e.x[0]=a,++e.v$}e.L=xt(e.$,u-1-e.s)}if(e.s-=u,e.g=C(e.g,D(u)),0==e.s){if(e.v$>=128&&qn(e),e.y$>=16&&Yn(e),t[0]=e.g,n[0]=no(e.c),0==Ot(e.$))return void Vn(e,z(e.g));if(R(H(e.g,P),Oo)>=0)return e.na=!1,void(r[0]=!1)}}}}function Tn(e){var t,n;e.$||(Zt(),t=new Ut,n=4,0==e.$$&&(n=2),Kt(t,n),e.$=t),Sr(e.A,e.R,e.V),(e.U!=e.f$||e.S$!=e.m)&&(Yt(e.$,e.U,4096,e.m,274),e.f$=e.U,e.S$=e.m)}function Zn(e){var t;for(An(),e.x=d(cs,0,-1,4,1),e._=d(ms,0,6,4096,0),e.c=(Ur(),new co),e.E=d(_s,0,-1,192,1),e.i$=d(_s,0,-1,12,1),e.w$=d(_s,0,-1,12,1),e.Z$=d(_s,0,-1,12,1),e.Ja=d(_s,0,-1,12,1),e.c$=d(_s,0,-1,192,1),e.T=d(ds,0,8,4,0),e.Y$=d(_s,0,-1,114,1),e.a$=Ar(new qr,4),e.d$=vr(new gr),e.l=vr(new gr),e.A=new Cr,e.q=d(cs,0,-1,548,1),e._$=d(cs,0,-1,256,1),e.s$=d(cs,0,-1,512,1),e.Ca=d(cs,0,-1,16,1),e.z=d(cs,0,-1,4,1),e.X=d(cs,0,-1,4,1),e.la=d(ps,0,-1,1,3),e.Ha=d(ps,0,-1,1,3),e.Ra=d(ls,0,-1,1,2),e.wa=d(is,0,-1,5,1),e.La=d(cs,0,-1,128,1),t=0;4096>t;++t)e._[t]=new zr;for(t=0;4>t;++t)e.T[t]=Ar(new qr,6);return e}function Yn(e){var t;for(t=0;16>t;++t)e.Ca[t]=Tr(e.a$,t);e.y$=0}function qn(e){var t,n,r,o,s,i,a,c;for(o=4;128>o;++o)i=_r(o),r=(i>>1)-1,t=(2|1&i)<<r,e.La[o]=Yr(e.Y$,t-i-1,r,o-t);for(s=0;4>s;++s){for(n=e.T[s],a=s<<6,i=0;i<e.M$;++i)e._$[a+i]=Gr(n,i);for(i=14;i<e.M$;++i)e._$[a+i]+=(i>>1)-1-4<<6;for(c=128*s,o=0;4>o;++o)e.s$[c+o]=e._$[a+o];for(;128>o;++o)e.s$[c+o]=e._$[a+_r(o)]+e.La[o]}e.v$=0}function Vn(e,t){tr(e),cr(e,t&e.w),to(e.c)}function jn(e,t){var n,r,o,s,i,a,c,_,u,f,m,d,p,l,h,P,v,B,w,g,S,y,k,C,b,R,M,$,I,D,L,z,E,F,x,N,O,A,H,G,W,T,Z,Y,q,V,j,J,K,Q;if(e.b$!=e.k)return p=e._[e.k].r-e.k,e.C$=e._[e.k].j,e.k=e._[e.k].r,p;if(e.k=e.b$=0,e.J?(d=e.K$,e.J=!1):d=er(e),M=e.H,b=Ot(e.$)+1,2>b)return e.C$=-1,1;for(b>273&&(b=273),G=0,u=0;4>u;++u)e.z[u]=e.x[u],e.X[u]=Nt(e.$,-1,e.z[u],273),e.X[u]>e.X[G]&&(G=u);if(e.X[G]>=e.m)return e.C$=G,p=e.X[G],Xn(e,p-1),p;if(d>=e.m)return e.C$=e.q[M-1]+4,Xn(e,d-1),d;if(c=xt(e.$,-1),v=xt(e.$,-e.x[0]-1-1),2>d&&c!=v&&e.X[G]<2)return e.C$=-1,1;if(e._[0].Ka=e.o,F=t&e.w,e._[1].y=(Ur(),os[e.E[(e.o<<4)+F]>>>2]+$r(yr(e.A,t,e.L),e.o>=7,v,c)),Dr(e._[1]),B=os[2048-e.E[(e.o<<4)+F]>>>2],H=B+os[2048-e.i$[e.o]>>>2],v==c&&(W=H+Qn(e,e.o,F),W<e._[1].y&&(e._[1].y=W,Lr(e._[1]))),m=d>=e.X[G]?d:e.X[G],2>m)return e.C$=e._[1].j,1;e._[1].r=0,e._[0].$a=e.z[0],e._[0].aa=e.z[1],e._[0].fa=e.z[2],e._[0].sa=e.z[3],f=m;do e._[f--].y=268435455;while(f>=2);for(u=0;4>u;++u)if(A=e.X[u],!(2>A)){N=H+Kn(e,u,e.o,F);do s=N+Br(e.l,A-2,F),L=e._[A],s<L.y&&(L.y=s,L.r=0,L.j=u,L.u=!1);while(--A>=2)}if(C=B+os[e.i$[e.o]>>>2],f=e.X[0]>=2?e.X[0]+1:2,d>=f){for($=0;f>e.q[$];)$+=2;for(;_=e.q[$+1],s=C+Jn(e,_,f,F),L=e._[f],s<L.y&&(L.y=s,L.r=0,L.j=_+4,L.u=!1),f!=e.q[$]||($+=2,$!=M);++f);}for(n=0;;){if(++n,n==m)return Hn(e,n);if(w=er(e),M=e.H,w>=e.m)return e.K$=w,e.J=!0,Hn(e,n);if(++t,E=e._[n].r,e._[n].u?(--E,e._[n].Ea?(Z=e._[e._[n].r2].Ka,Z=e._[n].j2<4?7>Z?8:11:7>Z?7:10):Z=e._[E].Ka,Z=un(Z)):Z=e._[E].Ka,E==n-1?Z=0==e._[n].j?7>Z?9:11:un(Z):(e._[n].u&&e._[n].Ea?(E=e._[n].r2,z=e._[n].j2,Z=7>Z?8:11):(z=e._[n].j,Z=4>z?7>Z?8:11:7>Z?7:10),D=e._[E],4>z?0==z?(e.z[0]=D.$a,e.z[1]=D.aa,e.z[2]=D.fa,e.z[3]=D.sa):1==z?(e.z[0]=D.aa,e.z[1]=D.$a,e.z[2]=D.fa,e.z[3]=D.sa):2==z?(e.z[0]=D.fa,e.z[1]=D.$a,e.z[2]=D.aa,e.z[3]=D.sa):(e.z[0]=D.sa,e.z[1]=D.$a,e.z[2]=D.aa,e.z[3]=D.fa):(e.z[0]=z-4,e.z[1]=D.$a,e.z[2]=D.aa,e.z[3]=D.fa)),e._[n].Ka=Z,e._[n].$a=e.z[0],e._[n].aa=e.z[1],e._[n].fa=e.z[2],e._[n].sa=e.z[3],a=e._[n].y,c=xt(e.$,-1),v=xt(e.$,-e.z[0]-1-1),F=t&e.w,r=a+os[e.E[(Z<<4)+F]>>>2]+$r(yr(e.A,t,xt(e.$,-2)),Z>=7,v,c),y=e._[n+1],g=!1,r<y.y&&(y.y=r,y.r=n,y.j=-1,y.u=!1,g=!0),B=a+os[2048-e.E[(Z<<4)+F]>>>2],H=B+os[2048-e.i$[Z]>>>2],v!=c||y.r<n&&0==y.j||(W=H+(os[e.w$[Z]>>>2]+os[e.c$[(Z<<4)+F]>>>2]),W<=y.y&&(y.y=W,y.r=n,y.j=0,y.u=!1,g=!0)),R=Ot(e.$)+1,R=R>4095-n?4095-n:R,b=R,!(2>b)){if(b>e.m&&(b=e.m),!g&&v!=c&&(q=ht(R-1,e.m),h=Nt(e.$,0,e.z[0],q),h>=2)){for(Y=un(Z),x=t+1&e.w,k=r+os[2048-e.E[(Y<<4)+x]>>>2]+os[2048-e.i$[Y]>>>2],I=n+1+h;I>m;)e._[++m].y=268435455;s=k+(V=Br(e.l,h-2,x),V+Kn(e,0,Y,x)),L=e._[I],s<L.y&&(L.y=s,L.r=n+1,L.j=0,L.u=!0,L.Ea=!1)}for(T=2,O=0;4>O;++O)if(l=Nt(e.$,-1,e.z[O],b),!(2>l)){P=l;do{for(;n+l>m;)e._[++m].y=268435455;s=H+(j=Br(e.l,l-2,F),j+Kn(e,O,Z,F)),L=e._[n+l],s<L.y&&(L.y=s,L.r=n,L.j=O,L.u=!1)}while(--l>=2);if(l=P,0==O&&(T=l+1),R>l&&(q=ht(R-1-l,e.m),h=Nt(e.$,l,e.z[O],q),h>=2)){for(Y=7>Z?8:11,x=t+l&e.w,o=H+(J=Br(e.l,l-2,F),J+Kn(e,O,Z,F))+os[e.E[(Y<<4)+x]>>>2]+$r(yr(e.A,t+l,xt(e.$,l-1-1)),!0,xt(e.$,l-1-(e.z[O]+1)),xt(e.$,l-1)),Y=un(Y),x=t+l+1&e.w,S=o+os[2048-e.E[(Y<<4)+x]>>>2],k=S+os[2048-e.i$[Y]>>>2],I=l+1+h;n+I>m;)e._[++m].y=268435455;s=k+(K=Br(e.l,h-2,x),K+Kn(e,0,Y,x)),L=e._[n+I],s<L.y&&(L.y=s,L.r=n+l+1,L.j=0,L.u=!0,L.Ea=!0,L.r2=n,L.j2=O)}}if(w>b){for(w=b,M=0;w>e.q[M];M+=2);e.q[M]=w,M+=2}if(w>=T){for(C=B+os[e.i$[Z]>>>2];n+w>m;)e._[++m].y=268435455;for($=0;T>e.q[$];)$+=2;for(l=T;;++l)if(i=e.q[$+1],s=C+Jn(e,i,l,F),L=e._[n+l],s<L.y&&(L.y=s,L.r=n,L.j=i+4,L.u=!1),l==e.q[$]){if(R>l&&(q=ht(R-1-l,e.m),h=Nt(e.$,l,i,q),h>=2)){for(Y=7>Z?7:10,x=t+l&e.w,o=s+os[e.E[(Y<<4)+x]>>>2]+$r(yr(e.A,t+l,xt(e.$,l-1-1)),!0,xt(e.$,l-(i+1)-1),xt(e.$,l-1)),Y=un(Y),x=t+l+1&e.w,S=o+os[2048-e.E[(Y<<4)+x]>>>2],k=S+os[2048-e.i$[Y]>>>2],I=l+1+h;n+I>m;)e._[++m].y=268435455;s=k+(Q=Br(e.l,h-2,x),Q+Kn(e,0,Y,x)),L=e._[n+I],s<L.y&&(L.y=s,L.r=n+l+1,L.j=0,L.u=!0,L.Ea=!0,L.r2=n,L.j2=i+4)}if($+=2,$==M)break}}}}}function Jn(e,t,n,r){var o,s;return o=_n(n),s=128>t?e.s$[128*o+t]:e._$[(o<<6)+ur(t)]+e.Ca[15&t],s+Br(e.d$,n-2,r)}function Kn(e,t,n,r){var o;return 0==t?(Ur(),o=os[e.w$[n]>>>2],o+=os[2048-e.c$[(n<<4)+r]>>>2]):(Ur(),o=os[2048-e.w$[n]>>>2],1==t?o+=os[e.Z$[n]>>>2]:(o+=os[2048-e.Z$[n]>>>2],o+=so(e.Ja[n],t-2))),o}function Qn(e,t,n){return Ur(),os[e.w$[t]>>>2]+os[e.c$[(t<<4)+n]>>>2]}function Un(e){var t;for(Gn(e),ro(e.c),io(e.E),io(e.c$),io(e.i$),io(e.w$),io(e.Z$),io(e.Ja),io(e.Y$),kr(e.A),t=0;4>t;++t)Kr(e.T[t].G);pr(e.d$,1<<e.K),pr(e.l,1<<e.K),Kr(e.a$.G),e.J=!1,e.b$=0,e.k=0,e.s=0}function Xn(e,t){t>0&&(Qt(e.$,t),e.s+=t)}function er(e){var t;return t=0,e.H=qt(e.$,e.q),e.H>0&&(t=e.q[e.H-2],t==e.m&&(t+=Nt(e.$,t-1,e.q[e.H-1],273-t))),++e.s,t}function tr(e){e.$&&e.N&&(e.$.B$=null,e.N=!1)}function nr(e){tr(e),e.c.r$=null}function rr(e,t){var n;if(1>t||t>536870912)return!1;for(e.U=t,n=0;t>1<<n;++n);return e.M$=2*n,!0}function or(e,t,n,r){return 0>n||n>4||0>t||t>8||0>r||r>4?!1:(e.R=n,e.V=t,e.K=r,e.w=(1<<e.K)-1,!0)}function sr(e,t){var n;return 0>t||t>2?!1:(n=e.$$,e.$$=t,e.$&&n!=e.$$&&(e.f$=-1,e.$=null),!0)}function ir(e,t){return 5>t||t>273?!1:(e.m=t,!0)}function ar(e,t){var n;for(e.wa[0]=9*(5*e.K+e.R)+e.V<<24>>24,n=0;4>n;++n)e.wa[1+n]=e.U>>8*n<<24>>24;et(t,e.wa,0,5)}function cr(e,t){var n;e.ya&&(Xr(e.c,e.E,(e.o<<4)+t,1),Xr(e.c,e.i$,e.o,0),e.o=e.o<7?7:10,Pr(e.d$,e.c,0,t),n=_n(2),Hr(e.T[n],e.c,63),eo(e.c,67108863,26),Wr(e.a$,e.c,15))
}function _r(e){return 2048>e?rs[e]:2097152>e?rs[e>>10]+20:rs[e>>20]+40}function ur(e){return 131072>e?rs[e>>6]+12:134217728>e?rs[e>>16]+32:rs[e>>26]+52}function fr(){}function mr(e,t,n,r){8>n?(Xr(t,e.j$,0,0),Hr(e.ma[r],t,n)):(n-=8,Xr(t,e.j$,0,1),8>n?(Xr(t,e.j$,1,0),Hr(e.ka[r],t,n)):(Xr(t,e.j$,1,1),Hr(e.xa,t,n-8)))}function dr(e){var t;for(e.j$=d(_s,0,-1,2,1),e.ma=d(ds,0,8,16,0),e.ka=d(ds,0,8,16,0),e.xa=Ar(new qr,8),t=0;16>t;++t)e.ma[t]=Ar(new qr,3),e.ka[t]=Ar(new qr,3);return e}function pr(e,t){var n;for(io(e.j$),n=0;t>n;++n)Kr(e.ma[n].G),Kr(e.ka[n].G);Kr(e.xa.G)}function lr(e,t,n,r,o){var s,i,a,c,_;for(Ur(),s=os[e.j$[0]>>>2],i=os[2048-e.j$[0]>>>2],a=i+os[e.j$[1]>>>2],c=i+os[2048-e.j$[1]>>>2],_=0,_=0;8>_;++_){if(_>=n)return;r[o+_]=s+Gr(e.ma[t],_)}for(;16>_;++_){if(_>=n)return;r[o+_]=a+Gr(e.ka[t],_-8)}for(;n>_;++_)r[o+_]=c+Gr(e.xa,_-8-8)}function hr(){}function Pr(e,t,n,r){mr(e,t,n,r),0==--e.Da[r]&&(lr(e,r,e.k$,e.Ma,272*r),e.Da[r]=e.k$)}function vr(e){return dr(e),e.Ma=d(cs,0,-1,4352,1),e.Da=d(cs,0,-1,16,1),e}function Br(e,t,n){return e.Ma[272*n+t]}function wr(e,t){var n;for(n=0;t>n;++n)lr(e,n,e.k$,e.Ma,272*n),e.Da[n]=e.k$}function gr(){}function Sr(e,t,n){var r,o;if(null==e.P||e.t!=n||e.F!=t)for(e.F=t,e.Q$=(1<<t)-1,e.t=n,o=1<<e.t+e.F,e.P=d(hs,0,5,o,0),r=0;o>r;++r)e.P[r]=Mr(new Ir)}function yr(e,t,n){return e.P[((t&e.Q$)<<e.t)+((255&n)>>>8-e.t)]}function kr(e){var t,n;for(n=1<<e.t+e.F,t=0;n>t;++t)io(e.P[t].F$)}function Cr(){}function br(e,t,n){var r,o,s;for(o=1,s=7;s>=0;--s)r=n>>s&1,Xr(t,e.F$,o,r),o=o<<1|r}function Rr(e,t,n,r){var o,s,i,a,c,_;for(s=1,c=!0,i=7;i>=0;--i)o=r>>i&1,_=s,c&&(a=n>>i&1,_+=1+a<<8,c=a==o),Xr(t,e.F$,_,o),s=s<<1|o}function Mr(e){return e.F$=d(_s,0,-1,768,1),e}function $r(e,t,n,r){var o,s,i,a,c;if(c=0,s=1,i=7,t)for(;i>=0;--i)if(a=n>>i&1,o=r>>i&1,c+=so(e.F$[(1+a<<8)+s],o),s=s<<1|o,a!=o){--i;break}for(;i>=0;--i)o=r>>i&1,c+=so(e.F$[s],o),s=s<<1|o;return c}function Ir(){}function Dr(e){e.j=-1,e.u=!1}function Lr(e){e.j=0,e.u=!1}function zr(){}function Er(e,t){return e.B=t,e.G=d(_s,0,-1,1<<t,1),e}function Fr(e,t){var n,r;for(r=1,n=e.B;0!=n;--n)r=(r<<1)+Vr(t,e.G,r);return r-(1<<e.B)}function xr(e,t){var n,r,o,s;for(o=1,s=0,r=0;r<e.B;++r)n=Vr(t,e.G,o),o<<=1,o+=n,s|=n<<r;return s}function Nr(e,t,n,r){var o,s,i,a;for(i=1,a=0,s=0;r>s;++s)o=Vr(n,e,t+i),i<<=1,i+=o,a|=o<<s;return a}function Or(){}function Ar(e,t){return e.B=t,e.G=d(_s,0,-1,1<<t,1),e}function Hr(e,t,n){var r,o,s;for(s=1,o=e.B;0!=o;)--o,r=n>>>o&1,Xr(t,e.G,s,r),s=s<<1|r}function Gr(e,t){var n,r,o,s;for(s=0,o=1,r=e.B;0!=r;)--r,n=t>>>r&1,s+=so(e.G[o],n),o=(o<<1)+n;return s}function Wr(e,t,n){var r,o,s;for(s=1,o=0;o<e.B;++o)r=1&n,Xr(t,e.G,s,r),s=s<<1|r,n>>=1}function Tr(e,t){var n,r,o,s;for(s=0,o=1,r=e.B;0!=r;--r)n=1&t,t>>>=1,s+=so(e.G[o],n),o=o<<1|n;return s}function Zr(e,t,n,r,o){var s,i,a;for(a=1,i=0;r>i;++i)s=1&o,Xr(n,e,t+a,s),a=a<<1|s,o>>=1}function Yr(e,t,n,r){var o,s,i,a;for(a=0,i=1,s=n;0!=s;--s)o=1&r,r>>>=1,Ur(),a+=os[(2047&(e[t+i]-o^-o))>>>2],i=i<<1|o;return a}function qr(){}function Vr(e,t,n){var r,o;return o=t[n],r=(e.D>>>11)*o,(-2147483648^e.O$)<(-2147483648^r)?(e.D=r,t[n]=o+(2048-o>>>5)<<16>>16,0==(-16777216&e.D)&&(e.O$=e.O$<<8|q(e.r$),e.D<<=8),0):(e.D-=r,e.O$-=r,t[n]=o-(o>>>5)<<16>>16,0==(-16777216&e.D)&&(e.O$=e.O$<<8|q(e.r$),e.D<<=8),1)}function jr(e,t){var n,r,o;for(r=0,n=t;0!=n;--n)e.D>>>=1,o=e.O$-e.D>>>31,e.O$-=e.D&o-1,r=r<<1|1-o,0==(-16777216&e.D)&&(e.O$=e.O$<<8|q(e.r$),e.D<<=8);return r}function Jr(e){var t;for(e.O$=0,e.D=-1,t=0;5>t;++t)e.O$=e.O$<<8|q(e.r$)}function Kr(e){var t;for(t=0;t<e[ko];++t)e[t]=1024}function Qr(){}function Ur(){Ur=Po;var e,t,n,r;for(os=d(cs,0,-1,512,1),t=8;t>=0;--t)for(r=1<<9-t-1,e=1<<9-t,n=r;e>n;++n)os[n]=(t<<6)+(e-n<<6>>>9-t-1)}function Xr(e,t,n,r){var o,s;s=t[n],o=(e.D>>>11)*s,0==r?(e.D=o,t[n]=s+(2048-s>>>5)<<16>>16):(e.Ga=C(e.Ga,b(D(o),Wo)),e.D-=o,t[n]=s-(s>>>5)<<16>>16),0==(-16777216&e.D)&&(e.D<<=8,oo(e))}function eo(e,t,n){var r;for(r=n-1;r>=0;--r)e.D>>>=1,1==(t>>>r&1)&&(e.Ga=C(e.Ga,D(e.D))),0==(-16777216&e.D)&&(e.D<<=8,oo(e))}function to(e){var t;for(t=0;5>t;++t)oo(e)}function no(e){return C(C(D(e.J$),e.ja),No)}function ro(e){e.ja=Fo,e.Ga=Fo,e.D=-1,e.J$=1,e.Sa=0}function oo(e){var t,n;if(t=z(A(e.Ga,32)),0!=t||R(e.Ga,Go)<0){e.ja=C(e.ja,D(e.J$)),n=e.Sa;do X(e.r$,n+t),n=255;while(0!=--e.J$);e.Sa=z(e.Ga)>>>24}++e.J$,e.Ga=N(b(e.Ga,Ao),8)}function so(e,t){return Ur(),os[(2047&(e-t^-t))>>>2]}function io(e){Ur();var t;for(t=0;t<e[ko];++t)e[t]=1024}function ao(e){var t;for(t=e[ko]-1;t>=0;t-=1)e[t]<0&&(e[t]=256+e[t]);return e}function co(){}function _o(e){var t,n,r,o,s;for(t=wt(new gt),n=0;n<e[ko];++n)if(r=255&e[n],0==(128&r)){if(0==r)return ao(e);_(t.E$,Lo[bo](65535&r))}else if(192==(224&r)){if(n+1>=e[ko])return ao(e);if(o=255&e[++n],128!=(192&o))return ao(e);c(t.E$,Lo[bo]((31&r)<<6&65535|63&o))}else{if(224!=(240&r))return ao(e);if(n+2>=e[ko])return ao(e);if(o=255&e[++n],128!=(192&o))return ao(e);if(s=255&e[++n],128!=(192&s))return ao(e);_(t.E$,Lo[bo](65535&((15&r)<<12|(63&o)<<6|63&s)))}return u(t.E$)}function uo(e){var t,n,r,o,s,i,a;for(a=e[ko],i=d(as,0,-1,a,1),Bt(e,0,a,i,0),n=i,o=0,s=0;s<e[ko];++s)t=n[s],t>=1&&127>=t?++o:o+=0==t||t>=128&&2047>=t?2:3;for(r=d(is,0,-1,o,1),o=0,s=0;s<e[ko];++s)t=n[s],t>=1&&127>=t?r[o++]=t<<24>>24:0==t||t>=128&&2047>=t?(r[o++]=(192|t>>6&31)<<24>>24,r[o++]=(128|63&t)<<24>>24):(r[o++]=(224|t>>12&15)<<24>>24,r[o++]=(128|t>>6&63)<<24>>24,r[o++]=(128|63&t)<<24>>24);return r}function fo(e){return e}function mo(e){return e[1]+e[0]}function po(){function t(){var c;for(r=(new Date)[Io]();Ct(a.c);)if(n=mo(a.c.L$._a)/mo(a.c.t$),(new Date)[Io]()-r>200)return i?i(n):"undefined"!=typeof o&&e(n,o),So(t,0),!1;i?i(1):"undefined"!=typeof o&&e(1,o),c=U(a.c.ca).slice(0),s?s(c):"undefined"!=typeof o&&postMessage({action:Bo,callback_num:o,result:c})}var n,r,o,s,i,a=fo(new ho),c=arguments[0],_=arguments[1];"function"==typeof arguments[2]?(s=arguments[2],"function"==typeof arguments[3]&&(i=arguments[3])):o=arguments[2],a.Va=Ps(_),a.c=Mt(new $t,uo(c),a.Va),i?i(0):"undefined"!=typeof o&&e(0,o),So(t,1)}function lo(){function t(){var r;for(o=(new Date)[Io]();It(u.d);)if((new Date)[Io]()-o>200)return _?(n=mo(u.d.L$.m$.g)/mo(u.d.t$),a?a(n):"undefined"!=typeof s&&e(n,s)):c||(e(-1,s),c=!0),So(t,0),!1;a?a(1):"undefined"!=typeof s&&e(1,s),r=_o(U(u.d.ca)),i?i(r):"undefined"!=typeof s&&postMessage({action:wo,callback_num:s,result:"string"!=typeof r?r.slice(0):r})}var n,r,o,s,i,a,c,_,u=fo(new ho),f=arguments[0];"function"==typeof arguments[1]?(i=arguments[1],"function"==typeof arguments[2]&&(a=arguments[2])):s=arguments[1],r=p(is,0,-1,f),u.d=zt(new Et,r),a?a(0):"undefined"!=typeof s&&e(0,s),_=mo(u.d.t$)>-1,So(t,0)}function ho(){}function Po(){}var vo,Bo=1,wo=2,go=3,So="function"==typeof setImmediate?setImmediate:setTimeout,yo=function(){return{typeName:this.d+""}},ko="length",Co="prototype",bo="fromCharCode",Ro="charCodeAt",Mo="detailMessage",$o="typeName",Io="getTime",Do=Math,Lo=String,zo=[0,-0x8000000000000000],Eo=[4294967295,-4294967296],Fo=[0,0],xo=[1,0],No=[4,0],Oo=[4096,0],Ao=[16777215,0],Ho=[16777216,0],Go=[4278190080,0],Wo=[4294967295,0],To=[4294967295,0x7fffffff00000000];vo=t[Co]={},vo.b=yo,vo.oa=Po,vo.d=1,vo=n[Co]=new t,vo.b=yo,vo.d=3,vo[Mo]=null,vo=r[Co]=new n,vo.b=yo,vo.d=4,vo=s[Co]=new r,vo.b=yo,vo.d=5,vo=a[Co]=new s,vo.b=yo,vo.d=6,vo=h[Co]=new t,vo.b=m,vo.d=0,vo.pa=null,vo[ko]=0,vo.ea=0;var Zo,Yo,qo,Vo,jo,Jo,Ko,Qo,Uo,Xo,es,ts=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1,10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1,11:1},{2:1},{2:1},{2:1},{4:1},{5:1},{6:1},{7:1},{8:1},{9:1}];vo=T[Co]=new t,vo.b=yo,vo.d=0,vo=j[Co]=new T,vo.b=yo,vo.d=0,vo.qa=null,vo.g$=0,vo.Qa=0,vo=J[Co]=new t,vo.b=yo,vo.d=0,vo=tt[Co]=new J,vo.b=yo,vo.d=0,vo.qa=null,vo.g$=0,vo=rt[Co]=new r,vo.b=yo,vo.d=7,vo=ot[Co]=new s,vo.b=yo,vo.d=8,vo=it[Co]=new s,vo.b=yo,vo.d=9,vo=ct[Co]=new t,vo.b=yo,vo.d=0,vo[$o]=null,vo=_t[Co]=new s,vo.b=yo,vo.d=12,vo=ut[Co]=new t,vo.b=yo,vo.d=0,vo=mt[Co]=new s,vo.b=yo,vo.d=13,vo=dt[Co]=new s,vo.b=yo,vo.d=14,vo=pt[Co]=new s,vo.b=yo,vo.d=15,vo=Pt[Co]=new s,vo.b=yo,vo.d=16,vo=Lo[Co],vo.b=yo,vo.d=2,vo=gt[Co]=new t,vo.b=yo,vo.d=0,vo=kt[Co]=new ut,vo.b=yo,vo.d=0,vo.dicSize=0,vo.fb=0,vo.lc=0,vo.lp=0,vo.matchFinder=0,vo.pb=0,vo=Rt[Co]=new t,vo.b=yo,vo.d=0,vo.L$=null,vo=$t[Co]=new Rt,vo.b=yo,vo.d=0,vo.ca=null,vo=Lt[Co]=new t,vo.b=yo,vo.d=0,vo.L$=null,vo.exception=null,vo.t$=Fo,vo=Et[Co]=new Lt,vo.b=yo,vo.d=0,vo.ca=null,vo=Tt[Co]=new t,vo.b=yo,vo.d=0,vo.I$=0,vo.a=null,vo.e=0,vo.P$=0,vo.ha=0,vo.C=0,vo.p=0,vo.A$=0,vo.B$=null,vo.M=!1,vo.h=0,vo=Ut[Co]=new Tt,vo.b=yo,vo.d=0,vo.n$=!0,vo.Aa=255,vo.i=0,vo.n=0,vo.o$=null,vo.Ba=0,vo.D$=0,vo.h$=0,vo.S=null,vo.Q=66560,vo.p$=4,vo.v=0;var ns;vo=cn[Co]=new t,vo.b=yo,vo.d=0,vo.N$=null,vo.p=0,vo.B$=null,vo.h=0,vo.O=0,vo=hn[Co]=new t,vo.b=yo,vo.d=0,vo.ta=!1,vo.m$=null,vo.e$=null,vo=Cn[Co]=new t,vo.b=yo,vo.d=0,vo.u$=-1,vo.Z=-1,vo.ra=0,vo.g=Fo,vo.Oa=Fo,vo.da=0,vo.q$=0,vo.Pa=0,vo.Na=0,vo.Ta=0,vo.W=0,vo=In[Co]=new t,vo.b=yo,vo.d=0,vo.Y=0,vo=En[Co]=new t,vo.b=yo,vo.d=0,vo.P=null,vo.F=0,vo.t=0,vo.Q$=0,vo=On[Co]=new t,vo.b=yo,vo.d=17,vo=fr[Co]=new t,vo.b=yo,vo.d=0,vo.s=0,vo.y$=0,vo.U=4194304,vo.f$=-1,vo.M$=44,vo.na=!1,vo.ga=null,vo.K$=0,vo.J=!1,vo.$=null,vo.$$=1,vo.v$=0,vo.N=!1,vo.H=0,vo.m=32,vo.S$=-1,vo.V=3,vo.R=0,vo.k=0,vo.b$=0,vo.K=2,vo.w=3,vo.L=0,vo.o=0,vo.ya=!1,vo.C$=0,vo.g=Fo;var rs;vo=hr[Co]=new t,vo.b=yo,vo.d=0,vo=gr[Co]=new hr,vo.b=yo,vo.d=0,vo.k$=0,vo=Cr[Co]=new t,vo.b=yo,vo.d=0,vo.P=null,vo.F=0,vo.t=0,vo.Q$=0,vo=Ir[Co]=new t,vo.b=yo,vo.d=18,vo=zr[Co]=new t,vo.b=yo,vo.d=19,vo.j=0,vo.j2=0,vo.$a=0,vo.aa=0,vo.fa=0,vo.sa=0,vo.r=0,vo.r2=0,vo.u=!1,vo.Ea=!1,vo.y=0,vo.Ka=0,vo=Or[Co]=new t,vo.b=yo,vo.d=20,vo.G=null,vo.B=0,vo=qr[Co]=new t,vo.b=yo,vo.d=21,vo.G=null,vo.B=0,vo=Qr[Co]=new t,vo.b=yo,vo.d=0,vo.O$=0,vo.D=0,vo.r$=null,vo=co[Co]=new t,vo.b=yo,vo.d=0,vo.Ga=Fo,vo.D=0,vo.r$=null,vo.Sa=0,vo.J$=0,vo.ja=Fo;var os;vo=ho[Co]=new t,vo.b=yo,vo.d=0,vo.c=null,vo.d=null;var ss=at("","[[D"),is=at("","[B"),as=at("","[C"),cs=at("","[I"),_s=at("","[S"),us=at("[Ll","bd"),fs=at("[Ll.","d"),ms=at("[Ll.","o"),ds=at("[Ll","be"),ps=at("","[J"),ls=at("","[Z"),hs=at("[Ll.","e"),Ps=function(){function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}var t=[{dicSize:16,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:19,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:21,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:22,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:23,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:24,fb:255,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:25,fb:255,matchFinder:1,lc:3,lp:0,pb:2}];return function(n){return e(n)?1>n?n=1:n>9&&(n=9):n=1,t[n-1]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&"undefined"!=typeof window.document||!function(){onmessage=function(e){e&&e.E$&&(e.E$.action===Bo?LZMA.compress(e.E$.E$,e.E$.Va,e.E$.callback_num):e.E$.action===wo&&LZMA.decompress(e.E$.E$,e.E$.callback_num))}}(),{compress:po,decompress:lo}}();this.LZMA=LZMA,this.LZMA_WORKER=LZMA;