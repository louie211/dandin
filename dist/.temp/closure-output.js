let ca = !0, ha = 0, na = 0, oa = 0, a = 0, pa = 0, qa = 0, ra = 0, ya = 0, za = 0, Da = 0, Ea = 0, Ha = 0, Ia = 0, c = .066, Ja, Ka, La, Ma, Na, Oa, Qa, Sa;
const Ta = Math.PI / 180, d = new DOMMatrix(), Ua = (b, e) => e < b ? b : e, Va = b => 0 > b ? -b : b, Wa = b => 0 > b ? 0 : 1 < b ? 1 : b, Xa = (b, e) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > e ? 0 : 1 < e ? 1 : e)), Ya = b => Math.atan2(Math.sin(b *= Ta), Math.cos(b)) / Ta, Za = (b, e, g) => {
  b *= Ta;
  e = (e * Ta - b) % (2 * Math.PI);
  return (b + (2 * e % (2 * Math.PI) - e) * (0 > g ? 0 : 1 < g ? 1 : g)) / Ta;
}, $a = (b, e, g, h) => {
  var m = e - b;
  b += Math.sign(e - b) * Ua(0, (0 > m ? -m : m) ** .9 - g) * h * 2;
  return b + (e - b) * Wa(h / 7);
}, ab = (b, e) => Array.from(Array(b), (g, h) => e(h)), bb = (b, e, g, h,) => [b, 0, 0, 0, 0, e, 0, 0, 0, 0, (h + g) / (g - h), -1, 0, 0, 2 * h * g / (g - h), 0], cb = ({x:b, y:e, z:g}, h) => b * h.x + e * h.y + g * h.z, db = ({x:b, y:e, z:g}) => {
  var h = k;
  return Math.hypot(b - h.x, e - h.y, g - h.z) || 0;
}, eb = b => {
  let e = 0, g = 0, h = 0, m, q = b.at(-1);
  for (m of b) {
    e += (q.y - m.y) * (q.z + m.z), g += (q.z - m.z) * (q.x + m.x), h += (q.x - m.x) * (q.y + m.y), q = m;
  }
  return m = Math.hypot(e, g, h), e /= m, g /= m, h /= m, {x:e, y:g, z:h, w:e * q.x + g * q.y + h * q.z,};
}, ib = (b, e) => {
  var g = fb;
  b *= 16;
  g[b++] = e.m11;
  g[b++] = e.m12;
  g[b++] = e.m13;
  g[b++] = e.m14;
  g[b++] = e.m21;
  g[b++] = e.m22;
  g[b++] = e.m23;
  g[b++] = e.m24;
  g[b++] = e.m31;
  g[b++] = e.m32;
  g[b++] = e.m33;
  g[b++] = e.m34;
  g[b++] = e.m41;
  g[b++] = e.m42;
  g[b++] = e.m43;
  g[b] = e.m44;
};
var jb = -11, kb = 17, lb = -90, mb = 0, qb = 0;
const rb = (b, e, g) => (b.D = g, b.A = e, b), sb = (b, e, g = b.A) => rb(b.map(h => (({x:m, y:q, z}, u) => ({x:m, y:q, z} = u.transformPoint({x:m, y:q, z,}), {x:m, y:q, z,}))(h, e)), g, b.D,), l = (b, e, g) => b.map(h => sb(h, e, g)), tb = (b, e = 0) => ab(b, g => {
  const h = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:.01 > (0 > h ? -h : h) ? h : 0 > h ? h - e : h + e,};
}), ub = (b, e, g) => b.map((h, m, {length:q}) => rb([h, e[q - m - 1], e[q - (m + 1) % q - 1], b[(m + 1) % q]], b.A, g,)), p = (b, e, g = 0, h) => {
  h = b.length ? b : tb(b, h);
  b = sb(h, d.translate(0, 1).scale3d(0 < g ? g : 1));
  g = sb(h, d.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse();
  return [...ub(g, b, e), g, b];
}, vb = (b, e = b, g = (h, m) => (m *= Math.PI / e, {x:Math.cos(h *= 2 * Math.PI / b) * Math.sin(m), y:Math.cos(m), z:Math.sin(h) * Math.sin(m),})) => {
  const h = [];
  for (let m = 0; b > m; m++) {
    for (let q = 0; e > q; q++) {
      const z = rb([], 0, 1);
      h.push(z);
      z.push(g(m, q, z));
      q && z.push(g((m + 1) % b, q, z));
      e - 1 > q && z.push(g((m + 1) % b, q + 1 % e, z));
      z.push(g(m, q + 1 % e, z));
    }
  }
  return h;
}, wb = (b, e, g, h) => {
  let m = 0, q = 0, z = 0, u = 1 / 0, v = -1 / 0, I = 1 / 0, w = -1 / 0, A = 1 / 0, y = -1 / 0;
  const x = 1.1 * (g - e), P = (new DOMMatrix(bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, g))).multiplySelf(b).invertSelf();
  b = ab(8, B => {
    B = P.transformPoint({x:4 & B ? 1 : -1, y:2 & B ? 1 : -1, z:1 & B ? 1 : -1,});
    return m -= B.x = (x * B.x | 0) / x / B.w, q -= B.y = (x * B.y | 0) / x / B.w, z -= B.z = (x * B.z | 0) / x / B.w, B;
  });
  e = d.rotate(298, 139).translateSelf(m / 8, q / 8, z / 8);
  return sb(b, e).map(({x:B, y:f, z:n}) => {
    u = u < B ? u : B;
    v = B < v ? v : B;
    I = I < f ? I : f;
    w = f < w ? w : f;
    A = A < n ? A : n;
    y = n < y ? y : n;
  }), A *= 0 > A ? h : 1 / h, y *= 0 < y ? h : 1 / h, d.scale(2 / (v - u), 2 / (w - I), 2 / (A - y)).translateSelf((v + u) / -2, (w + I) / -2, (A + y) / 2,).multiplySelf(e).toFloat32Array();
}, xb = [], r = (b, e = d, g) => Ja.s.push(...l(b, e, g)), t = (b, e = 1) => {
  const g = Ja;
  e = {l:d, F:xb.length, H:e, s:[],};
  return xb.push(Ja = e), b(e), Ja = g, e;
}, yb = (b, e = 35633) => {
  e = E.c6x(e);
  return E.s3c(e, b), E.c6a(e), e;
}, zb = (b, e) => {
  const g = {}, h = E.c1h();
  return E.abz(h, b), E.abz(h, yb(e, 35632)), E.l8l(h), m => m ? g[m] || (g[m] = E.gan(h, m)) : E.u7y(h);
}, Ab = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 
0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 
55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Bb = b => Math.sin(b * Math.PI * 2), Fb = b => .5 > b % 1 ? 1 : -1, Gb = b => b % 1 * 2 - 1, Hb = b => {
  b = b % 1 * 4;
  return 2 > b ? b - 1 : 3 - b;
}, Kb = [], Nb = () => {
  Ka || !ca ? Lb.disconnect() : Lb.connect(Mb.destination);
  b4.innerHTML = "Music: " + ca;
}, Ob = (b = !1) => {
  if (Ka !== b) {
    Ka = b;
    La = 0;
    try {
      b ? document.exitPointerLock() : Lb.start();
    } catch {
    }
    document.body.className = b ? "l m" : "l";
    Nb();
  }
}, Pb = () => {
  let b = 0, e = 0, g = 0, h, m, q;
  const z = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Kb.length = ha = na = 0;
    h = m = void 0;
    document.hidden && Ob(!0);
  };
  b1.onclick = () => Ob();
  b2.onclick = () => {
    Ob();
    La = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    ca = !ca;
    Nb();
  };
  b5.onclick = () => Ob(!0);
  onclick = () => {
    q = 1;
    Ka || (Kb[5] = !0, La && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = z;
  onkeydown = onkeyup = ({code:u, target:v, type:I, repeat:w}) => {
    w || ((v = !!I[5] && v === document.body) && ("Escape" === u || "Enter" === u && Ka) ? Ka && !q || Ob(!Ka) : (u = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[u], 5 === u ? v && (Kb[u] = 1) : Kb[u] = v));
  };
  onmousemove = ({movementX:u, movementY:v}) => {
    La && (u || v) && (qb += .1 * u, mb += .1 * v);
  };
  hC.ontouchstart = u => {
    if (!Ka) {
      for (const v of u.changedTouches) {
        La && v.pageX > hC.clientWidth / 2 ? h || (h = v, b = qb, e = mb) : m = m || v;
      }
      g = oa;
    }
  };
  hC.ontouchmove = ({changedTouches:u}) => {
    if (!Ka) {
      for (const {pageX:v, pageY:I, identifier:w} of u) {
        h?.identifier === w && (qb = b + (v - h.pageX) / 3, mb = e + (I - h.pageY) / 3), m?.identifier === w && (ha = -(v - m.pageX) / 18, na = -(I - m.pageY) / 18, ha = .35 > (0 > ha ? -ha : ha) ? 0 : .8 * ha, na = .35 > (0 > na ? -na : na) ? 0 : .8 * na);
      }
    }
  };
  hC.ontouchend = u => {
    for (const v of u.changedTouches) {
      v.identifier === h?.identifier && (h = void 0), v.identifier === m?.identifier && (m = void 0, na = ha = 0);
    }
    u.preventDefault();
    u = oa - g;
    (!g || .02 < u && .4 > u) && (Kb[5] = !0);
  };
  oncontextmenu = () => !1;
  z();
  Ob(!0);
}, F = (b, e, g) => b + (e - b) * Wa(1 - Math.exp(-g * c)), Qb = ({j:b}) => b, G = [], Rb = [], Sb = () => {
  var b = Xa(G[12].g, G[13].g);
  a > qa && (h4.innerHTML = "", qa = 0);
  var e = F(Da, 0, 1);
  Da = e + (Ya(Da + 60 * c) - e) * Wa(G[5].g - G[6].i);
  e = F(ya, 0, 5);
  ya = e + (Ya(ya + 56 * c) - e) * (0 > b ? 0 : 1 < b ? 1 : b);
  e = F(za, 0, 4);
  za = e + (Ya(za + 48 * c) - e) * (0 > b ? 0 : 1 < b ? 1 : b);
  b = 2 * G[9].i - 1;
  Ia = F(Ia, G[9].i, .2 + .3 * (0 > b ? -b : b));
  Ha = F(Ha, Ea ? Ha + (-9 - Ha) * Wa(1.5 * c) : Wa(a / 3), 1,);
  1 === G[0].j && .8 < G[0].g && (13 > pa ? (G[0].j = 0, Ea || (h4.innerHTML = "Not leaving now, there are souls to catch!", qa = a + 3)) : Ea || (Ea || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", qa = a + 1 / 0), Ea = 1));
  for (const g of xb) {
    g.h && (g.l = g.h(g));
  }
  for (const g of G) {
    g.h();
  }
  for (const g of Rb) {
    g.h();
  }
}, Tb = () => {
  pa = Rb.reduce((b, e) => b + e.j, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[pa];
}, Ub = () => {
  Tb();
  localStorage.DanteSP22 = JSON.stringify([G.map(Qb), Rb.map(Qb), ra, a, Ia,]);
}, Vb = () => {
  let b = 0, e, g;
  const h = [], m = [], q = [], z = [], u = new Map(), v = new Int32Array(8), I = y => {
    let {x, y:P, z:B} = g[y];
    A[0] = x;
    A[1] = P;
    A[2] = B;
    y = "" + (g.D ? w : v);
    let f = u.get(y);
    return void 0 !== f ? (x = 3 * f, z[x] = (z[x++] + v[5]) / 2, z[x] = (z[x++] + v[6]) / 2, z[x] = (z[x] + v[7]) / 2) : (u.set(y, f = u.size), m.push(x, P, B, A[3]), q.push(v[4]), z.push(v[5], v[6], v[7])), f;
  }, w = new Int32Array(v.buffer, 0, 5), A = new Float32Array(v.buffer);
  for (e of xb) {
    for (g of (A[3] = e.H ? e.F : 0, e.s)) {
      const {x:y, y:x, z:P} = eb(g);
      v[4] = 0 | g.A;
      v[5] = 32767 * y;
      v[6] = 32767 * x;
      v[7] = 32767 * P;
      for (let B = 2, f = I(0), n = I(1); g.length > B; ++B) {
        h.push(f, n, n = I(B));
      }
    }
    e.s = null;
    e.v = b;
    e.G = b = h.length;
  }
  E.b11(34963, E.c1b());
  E.b2v(34963, new Uint16Array(h), 35044);
  E.b11(34962, E.c1b());
  E.b2v(34962, new Float32Array(m), 35044);
  E.v7s(0, 4, 5126, !1, 0, 0);
  E.b11(34962, E.c1b());
  E.b2v(34962, new Int16Array(z), 35044);
  E.v7s(1, 3, 5122, !0, 0, 0);
  E.b11(34962, E.c1b());
  E.b2v(34962, new Uint32Array(q), 35044);
  E.v7s(2, 4, 5121, !0, 0, 0);
  E.e3x(0);
  E.e3x(1);
  E.e3x(2);
}, Wb = (b, e) => {
  var g, h, m, q = e.C;
  for (var z = 0; q.length > z; ++z) {
    if (-0.00008 > (m = cb(b, q[z]) - b.w) ? h = e : 8e-5 < m && (g = e), h && g) {
      h = [];
      m = [];
      q = e.C;
      z = e.B;
      let u = q.at(-1), v = cb(b, u) - b.w;
      for (const I of q) {
        g = cb(b, I) - b.w, 8e-5 > v && m.push(u), -0.00008 < v && h.push(u), (8e-5 < v && -0.00008 > g || -0.00008 > v && 8e-5 < g) && (v /= g - v, u = {x:u.x + (u.x - I.x) * v, y:u.y + (u.y - I.y) * v, z:u.z + (u.z - I.z) * v,}, h.push(u), m.push(u)), u = I, v = g;
      }
      return {o:2 < h.length && {C:rb(h, q.A, q.D), B:z, u:e,}, m:2 < m.length && {C:rb(m, q.A, q.D), B:z, u:e,},};
    }
  }
  return {o:g, m:h,};
}, Xb = (b, e, g = eb(e.C)) => {
  if (b) {
    const {o:h, m} = Wb(b, e);
    h || m || b.s.push(e);
    h && (b.o = Xb(b.o, h, g));
    m && (b.m = Xb(b.m, m, g));
  } else {
    b = {x:g.x, y:g.y, z:g.z, w:g.w, s:[e], o:0, m:0,};
  }
  return b;
}, Yb = (b, e, g) => {
  const h = [], m = (q, z) => {
    let {o:u, m:v} = Wb(q, z);
    u || v || (0 < g * cb(q, e) ? u = z : v = z);
    u && (q.o ? m(q.o, u) : h.push(u));
    v && q.m && m(q.m, v);
  };
  for (const q of e.s) {
    m(b, q);
  }
  return h;
}, Zb = (b, e) => b && (e(b), Zb(b.o, e), Zb(b.m, e)), $b = b => b.length ? b.reduce((e, g) => Xb(e, {C:g, B:0, u:0,}), 0) : b, ac = b => (Zb(b, e => {
  const g = e.m;
  e.m = e.o;
  e.o = g;
  e.x *= -1;
  e.y *= -1;
  e.z *= -1;
  e.w *= -1;
  for (const h of e.s) {
    h.B = !h.B;
  }
}), b), bc = (...b) => b.reduce((e, g) => {
  const h = [];
  if (e = $b(e), g) {
    g = $b(g);
    Zb(e, m => m.s = Yb(g, m, 1));
    Zb(g, m => h.push([m, Yb(e, m, -1)]));
    for (const [m, q] of h) {
      for (const z of q) {
        Xb(e, z, m);
      }
    }
  }
  return e;
}), K = (b, ...e) => ac(bc(ac($b(b)), ...e)), L = b => {
  const e = new Map(), g = new Map(), h = m => {
    if (m.u) {
      const q = e.get(m.u);
      q ? (g.delete(q), m = h(m.u)) : e.set(m.u, m);
    }
    return m;
  };
  return Zb(b, m => {
    for (const q of m.s) {
      g.set(h(q), q.B);
    }
  }), Array.from(g, ([{C:m}, q]) => {
    const z = m.map(({x:u, y:v, z:I}) => ({x:u, y:v, z:I,}));
    return rb(q ? z.reverse() : z, m.A, m.D);
  });
}, k = {x:0, y:0, z:0,}, M = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], cc = b => {
  const e = Ja, g = G.length, h = {j:0, g:0, i:0, u:e, h() {
    const m = h.j, q = h.g, z = h.i, u = e.l.multiply(b);
    h.I = u;
    2.9 > db(u.transformPoint()) && Kb[5] && (.3 > q || .7 < q) && (h.j = m ? 0 : 1, g && (Ea || (h4.innerHTML = "* click *", qa = a + 1)), ra = g, Ub());
    h.g = F(q, m, 4);
    h.i = F(z, m, 1);
    h.l = u.rotate(60 * h.g - 30, 0).translateSelf(0, 1);
  },};
  G.push(h);
  r(p(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), Z(.4, .5, .5));
  r(p(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), Z(.4, .5, .5));
  r(p(M), b.translate(0, -0.4).scale(.5, .1, .5), Z(.5, .5, .4));
}, dc = (b, ...e) => {
  let g = -1, h = 0, m = 0, q = 0, z = 0, u = 0, v = 3, I = 1;
  const w = {j:0, h() {
    if (!w.j) {
      var N = 1, W = 1 / 0;
      for (var X of x) {
        var U = X.w, fa = Math.hypot(B - X.x, f - X.z), aa = fa - U;
        ua ||= fa < U;
        0 < aa && W > aa && (W = aa, P = X);
        U = fa / U;
        N = N < U ? N : U;
      }
      if (!ua) {
        W = P.x;
        X = P.z;
        U = P.w;
        fa = B - W;
        aa = f - X;
        let ia = Math.hypot(fa, aa), Aa = Math.atan2(-aa, fa);
        I && (m = (Math.random() - .5) * Math.PI / 2, v = Ua(1, v / (1 + Math.random())));
        Aa += m;
        g = -Math.cos(Aa);
        h = Math.sin(Aa);
        .1 < ia && (ia = (ia < U ? ia : U) / (ia || 1), B = fa * ia + W, f = aa * ia + X);
      }
      I = ua;
      v = F(v, 3 + 6 * (1 - N), 3 + N);
      n = F(n, B = F(B, B + g, v), v);
      D = F(D, f = F(f, f + h, v), v);
      q = Za(q, Math.atan2(n - z, D - u) / Ta - 180, 3 * c,);
      z = n;
      u = D;
      N = (w.l = b.multiply(A.l.translate(n, 0, D).rotateSelf(0, q).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a)),)).transformPoint();
      if (1.5 > db(N)) {
        w.j = 1;
        N = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][pa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        var ua = pa && 12 > pa ? 5 : 7;
        Ea || (h4.innerHTML = N, qa = a + ua);
        Ub();
      }
    }
    w.j && (N = y % 4 - 2, w.l = xb[2].l.translate(y % 4 * 1.2 - 1.7 + Math.sin(a + y) / 7, -2, 1.7 * (y / 4 | 0) - 5.5 + (0 > N ? -N : N) + Math.cos(a / 1.5 + y) / 6,));
  },}, A = Ja, y = Rb.length, x = e.map(([N, W, X]) => ({x:N, z:W, w:X,}));
  let P = x[0], {x:B, z:f} = P, n = B, D = f;
  Rb.push(w);
}, fb = new Float32Array(656), ec = (b, e, g) => {
  if (Ka) {
    g = d.rotate(0, 40 * Math.sin(oa) - 70);
    for (var {F:h} of Sa) {
      ib(h - 1, g);
    }
    E.uae(b, !1, fb);
    E.d97(4, Sa[2].G - Sa[0].v, 5123, 2 * Sa[0].v);
  } else {
    for (const {H:m, F:q, l:z} of xb) {
      m && ib(q - 1, z);
    }
    E.uae(b, !1, fb);
    E.d97(4, (e ? Sa[2].G : Sa[0].v) - 3, 5123, 6);
    for (h = 0; G.length > h; ++h) {
      ib(h, G[h].l), fb[16 * h + 15] = 1 - G[h].g;
    }
    E.uae(b, !1, fb);
    E.das(4, Na.G - Na.v, 5123, 2 * Na.v, G.length);
    for (h = 0; 13 > h; ++h) {
      ib(h, Rb[h].l);
    }
    g = g ? Qa : Oa;
    E.uae(b, !1, fb);
    E.das(4, g.G - g.v, 5123, 2 * g.v, 13,);
  }
}, fc = new Int32Array(10725888), gc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), Z = NO_INLINE((b, e, g, h = 0) => 255 * h << 24 | 255 * g << 16 | 255 * e << 8 | 255 * b), E = hC.getContext("webgl2");
for (const b in E) {
  E[b[0] + [...b].reduce((e, g, h) => (e * h + g.charCodeAt(0)) % 434, 0).toString(36)] = E[b];
}
const Mb = new AudioContext(), Lb = Mb.createBufferSource();
setTimeout(() => {
  let b = 0, e = 6;
  const g = () => {
    if (h4.innerHTML += ".", !--e) {
      let A = 0, y = 0, x = 1, P = 0, B = 0, f = 0, n = !1, D, N, W, X, U, fa, aa, ua, ia, Aa;
      const ja = {x:0, y:0, z:0,}, nb = new Int32Array(256), Cb = () => {
        const {u:C, I:H} = G[ra], {x:Q, y:J, z:R} = H.transformPoint({x:0, y:8, z:-3,});
        k.x = ja.x = Q;
        k.y = ja.y = aa = J;
        k.z = ja.z = R;
        N = fa = U = W = X = 0;
        x = 1;
        A = y = C?.F || 1;
      }, Ib = () => {
        let C = 0, H = 0, Q = (NO_INLINE(() => {
          let O = 0, V = 0, ka = 0, va = 0, wa = 0;
          nb.fill(0);
          for (let da = 0; 31 > da; ++da) {
            let Fa = 0;
            const Y = 512 * da;
            for (let Ra = 0; 128 > Ra; Ra++) {
              let sa = Y + 4 * Ra;
              var ta = (Ga[sa] + Ga[1 + sa]) / 255;
              if (sa = Ga[2 + sa], 14 < Ra && 114 > Ra && (Fa += ta), sa && ta) {
                ta = nb[sa] + 1, nb[sa] = ta, O > ta || (O = ta, V = sa);
              }
            }
            3 > Fa && 5 < da && (va += da / 32);
            3 < Fa && (7 < da && (ka += da / 15), wa = 1);
          }
          V && (wa = 1);
          x ? V && (x = 0, y = V) : y = V || A;
          A = V;
          N = wa;
          W = F(W, wa ? 6.5 : 8, 4);
          ja.y += ka / 41 - (wa ? 1 : W) * va / 41 * W * c;
        })(), NO_INLINE(() => {
          for (let wa = 32; 128 > wa; wa += 2) {
            var O = 0;
            let ta = 0;
            var V = 0;
            let da = 0;
            const Fa = 512 * wa;
            for (let Y = wa >> 1 & 1; 128 > Y; Y += 2) {
              var ka = Fa + 4 * Y;
              const Ra = Fa + 4 * (127 - Y), sa = Ga[ka] / 255, Db = Ga[1 + Ra] / 255;
              var va = Y / 63.5 - 1;
              va = 1 - (0 > va ? -va : va);
              if (10 < Y && 118 > Y && (O = Ua(O, Ua(sa * va, sa * Ga[Ra] / 127.5)), ta = Ua(ta, Ua(Db * va, Db * Ga[1 + ka] / 255))), 54 > Y || 74 < Y) {
                ka = (1 - va) * (Db < sa ? sa : Db) / 3, .001 < ka && (64 > Y && ka > V ? V = ka : 64 < Y && ka > da && (da = ka));
              }
            }
            V = da - V;
            O = ta - O;
            (0 > V ? -V : V) > (0 > C ? -C : C) && (C = V);
            (0 > O ? -O : O) > (0 > H ? -H : H) && (H = O);
          }
        })(), (Kb[0] ? 1 : 0) + (Kb[2] ? -1 : 0) + ha), J = (Kb[1] ? 1 : 0) + (Kb[3] ? -1 : 0) + na;
        var R = navigator.getGamepads()[0];
        if (R) {
          var T = V => O[V]?.pressed || 0 < O[V]?.value;
          const O = R.buttons;
          R = R.axes;
          var ba = T(1) || T(3) || T(2) || T(0);
          ba !== n && (n = ba) && (Kb[5] = 1);
          Q += (.2 < Va(-R[0]) ? -R[0] : 0) + (T(14) ? 1 : 0) + (T(15) ? -1 : 0);
          J += (.2 < Va(-R[1]) ? -R[1] : 0) + (T(12) ? 1 : 0) + (T(13) ? -1 : 0);
          La && (.3 < Va(R[2]) && (qb += 80 * R[2] * c), .3 < Va(R[3]) && (mb += 80 * R[3] * c));
        }
        .05 > (0 > J ? -J : J) && (J = 0);
        .05 > (0 > Q ? -Q : Q) && (Q = 0);
        T = Math.atan2(J, Q);
        R = Wa(Math.hypot(J, Q));
        var ea = (Q = R * Math.cos(T), J = R * Math.sin(T), Wa(1 - 5 * Ua(0 > C ? -C : C, 0 > H ? -H : H)));
        ba = (y || (C += U * ea * c, H += fa * ea * c), U = F(U, 0, N ? 8 : 4), fa = F(fa, 0, N ? 8 : 4), X = F(X, N ? (Q || J ? N ? 7 : 4 : 0) * ea : 0, N ? .1 < ea ? 10 : Q || J ? 5 : 7 : 1,), La ? qb * Ta : Math.PI);
        ea = Math.sin(ba) * X * c;
        var Pa = Math.cos(ba) * X * c;
        ba = (C -= Q * Pa - J * ea, H -= Q * ea + J * Pa, 1 === xb[y].H && xb[y].l || d);
        ea = ba.inverse();
        if (ea.m41 = 0, ea.m42 = 0, ea.m43 = 0, {x:C, z:H} = ea.transformPoint({x:C, z:H, w:0,}), ja.x += C, ja.z += H, y !== D) {
          D = y;
          const {x:O, y:V, z:ka} = ba.inverse().transformPoint(k);
          ja.x = O;
          ja.y = V;
          ja.z = ka;
        }
        ea = k.x;
        Pa = k.z;
        const {x:Eb, y:gb, z:S} = ba.transformPoint(ja);
        ba = (k.x = Eb, k.y = gb, k.z = S, Va(aa - gb));
        aa = F(aa, gb + .1, 50 * ba + 5);
        y && (U = (k.x - ea) / c, fa = (k.z - Pa) / c);
        (Q || J) && (P = 90 - T / Ta);
        B = Za(B, P, 8 * c);
        f += (R - f) * Wa(10 * c);
      }, ob = C => {
        requestAnimationFrame(ob);
        var H = (C - (Ma || C)) / 1e3;
        c = Ka ? Kb[5] = 0 : .066 < H ? .066 : H;
        a += c;
        oa += H;
        Ma = C;
        if (0 < c) {
          if (E.b6o(36160, xa), E.r9r(0, 0, 128, 128, 6408, 5121, Ga), E.iay(36160, [36064]), NO_INLINE(Ib)(), ua = $a(ua, k.x, .5, c,), ia = $a(ia, k.y, 2, c,), Aa = $a(Aa, k.z, .5, c,), La) {
            C = 200 * x, jb = F(jb, k.x, 18 + C), kb = F(kb, k.y + 1.5, 15 + C), lb = F(lb, k.z, 18 + C), mb = Ua(87 > mb ? mb : 87, -87);
          } else {
            if (jb = $a(jb, ua, 1, 2 * c,), kb = $a(kb, ia + 13 + 15 * x, 4, 2 * c,), lb = $a(lb, Aa + -18, 1, 2 * c,), C = lb - Aa, 1 < (0 > C ? -C : C)) {
              H = jb - ua;
              const Q = kb - ia;
              qb = 270 + Math.atan2(C, H) / Ta;
              mb = 90 - Math.atan2(Math.hypot(C, H), Q) / Ta;
            }
          }
          qb = Ya(qb);
          Sb();
          Kb[5] = 0;
          (-25 > k.x || 109 > k.z ? -25 : -9) > k.y && Cb();
        }
        C = Ka ? d.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Wa(hC.clientWidth / 1e3)) : d.rotate(-mb, -qb, -0).invertSelf().translateSelf(-jb, -kb, -lb,);
        0 < c && (Ba(), E.b6o(36160, xa), E.v5y(0, 0, 128, 128), E.cbf(!0, !1, !0, !1), E.c4s(16640), E.uae(Ba("b"), !1, d.rotate(0, 180).invertSelf().translateSelf(-k.x, -k.y, .3 - k.z,).toFloat32Array(),), ec(Ba("c"), 0, 1), E.cbf(!1, !0, !1, !1), E.c4s(16640), E.cbf(!1, !0, !0, !1), E.uae(Ba("b"), !1, d.translate(-k.x, -k.y, -k.z - .3).toFloat32Array(),), ec(Ba("c"), 0, 1), E.cbf(!0, !0, !0, !0), 1 === y && (G[9].j = -15 > k.x && 0 > k.z ? 1 : 0));
        pb();
        E.v5y(0, 0, 2048, 2048);
        Ca[0](wb(C, .3, 55, 10));
        Ca[1](wb(C, 55, 177, 11));
        E.b6o(36160, null);
        la();
        E.v5y(0, 0, E.drawingBufferWidth, E.drawingBufferHeight);
        E.c4s(16640);
        E.uae(la("a"), !1, bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        E.uae(la("b"), !1, C.toFloat32Array());
        E.ubu(la("k"), jb, kb, lb);
        Ca[0]();
        Ca[1]();
        ec(la("c"), !La, 0);
        ma();
        E.ubu(ma("j"), E.drawingBufferWidth, E.drawingBufferHeight, oa);
        Ka ? E.ubu(ma("k"), 0, 0, 0) : E.ubu(ma("k"), jb, kb, lb);
        E.uae(ma("b"), !1, C.inverse().toFloat32Array());
        E.d97(4, 3, 5123, 0);
      }, Ga = new Uint8Array(65536), Jb = m;
      var w = yb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",);
      const pb = zb(yb("#version 300 es\nin vec4 f;uniform mat4 b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",), "#version 300 es\nvoid main(){}",), ma = zb(yb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), Ba = zb(w, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), la = zb(w, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), xa = (ma(), E.ubh(ma("q"), 3), Ba(), E.uae(Ba("a"), !1, bb(1.4, .59, 1e-4, 1)), la(), E.ubh(la("q"), 3), E.c5w());
      w = E.c3z();
      const hb = E.c25(), Ca = ab(2, C => {
        let H;
        const Q = E.c25(), J = E.c5w(), R = la(C ? "j" : "i");
        return la(), E.ubh(la(C ? "h" : "g"), C), E.b6o(36160, J), E.d45([0]), E.r9l(0), E.a4v(33984 + C), E.b9j(3553, Q), E.fas(36160, 36096, 3553, Q, 0), E.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), E.t2z(3553, 10241, 9729), E.t2z(3553, 10240, 9729), E.t2z(3553, 34893, 515), E.t2z(3553, 34892, 34894), E.t2z(3553, 10243, 33071), E.t2z(3553, 10242, 33071), T => {
          T ? (H = T, E.b6o(36160, J), E.iay(36160, [36096]), E.c4s(256), E.uae(pb("b"), !1, H), ec(pb("c"), !La, 0)) : E.uae(R, !1, H);
        };
      });
      E.e8z(2929);
      E.e8z(2884);
      E.c70(1);
      E.c7a(1029);
      E.d4n(515);
      E.c5t(0, 0, 0, 1);
      E.b6o(36160, xa);
      E.bb1(36161, w);
      E.r4v(36161, 33189, 128, 128);
      E.f8w(36160, 36096, 36161, w);
      E.a4v(33987);
      E.b9j(3553, hb);
      E.fas(36160, 36064, 3553, hb, 0);
      E.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      E.b9j(3553, E.c25());
      E.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Jb);
      E.gbn(3553);
      E.t2z(3553, 10241, 9987);
      E.t2z(3553, 10240, 9729);
      Sa.map((C, H) => {
        C.h = H ? () => Sa[0].l.translate(0, f * Wa(.45 * Math.sin(9.1 * a + Math.PI * (H - 1) - Math.PI / 2)),).rotateSelf(f * Math.sin(9.1 * a + Math.PI * (H - 1)) * .25 / Ta, 0) : () => d.translate(k.x, aa, k.z).rotateSelf(0, B,);
      });
      try {
        const [C, H, Q, J, R] = JSON.parse(localStorage.DanteSP22,);
        G.map((T, ba) => T.g = T.i = T.j = ba ? 0 | C[ba] : 0);
        Rb.map((T, ba) => T.j = 0 | H[ba]);
        ra = Q;
        a = J;
        Ia = R;
      } catch (C) {
      }
      Ha = 0 > ra ? 0 : 1 < ra ? 1 : ra;
      h4.innerHTML = "";
      qa = 0;
      Tb();
      Sb();
      NO_INLINE(Vb)();
      NO_INLINE(Pb)();
      Cb();
      jb = ua = k.x;
      kb = (ia = k.y) + 13;
      lb = (Aa = k.z) + -18;
      requestAnimationFrame(ob);
    }
  }, h = () => {
    if (5 > b) {
      var w = 0, A = b++;
      let [B, f, n, D, N, W, X, U, fa, aa, ua, ia, Aa, ja, nb, Cb, Ib, ob, Ga, Jb, pb] = Ab[A];
      aa = aa * aa * 4;
      for (const ma of [5513, 4562, 3891]) {
        let Ba = 0, la = 0, xa, hb, Ca, C, H;
        const Q = [], J = new Int32Array(768 * ma), R = 2 ** (ia - 9) / ma, T = Math.PI * 2 ** (Ib - 8) / ma, ba = Ga * ma & -2;
        for (let ea = 0; 11 >= ea; ++ea) {
          for (let Pa = 0, Eb = +"000001234556112341234556011111111112011111111112000001111112"[12 * A + ea]; 32 > Pa; ++Pa) {
            const gb = (32 * ea + Pa) * ma;
            for (var y = 0; 4 > y; ++y) {
              if (xa = 0, Eb && (xa = pb[Eb - 1].charCodeAt(Pa + 32 * y) - 40, xa += 0 < xa ? 106 : 0), xa) {
                var x;
                if (!(x = Q[xa])) {
                  x = xa;
                  let S = void 0, O = void 0;
                  var P = xa;
                  let V = 0, ka = 0;
                  const va = 2 > A ? Gb : Bb, wa = 2 > A ? 1 > A ? Fb : Hb : Bb, ta = new Int32Array(U + fa + aa);
                  for (let da = 0, Fa = 0; U + fa + aa > da; ++da, ++Fa) {
                    let Y = 1;
                    U > da ? Y = da / U : U + fa > da || (Y = (1 - (Y = (da - U - fa) / aa)) * 3 ** (-ua / 16 * Y));
                    0 > Fa || (Fa -= 4 * ma, O = 0.003960 * 2 ** ((P + f - 256) / 12), S = 0.003960 * 2 ** ((P + N - 256) / 12) * (1 + (A ? 0 : 8e-4 * 9)));
                    ta[da] = 80 * (va(V += O * Y ** (n / 32)) * B + wa(ka += S * Y ** (W / 32)) * D + (X ? (2 * Math.random() - 1) * X : 0)) * Y | 0;
                  }
                  x = Q[x] = ta;
                }
                for (let S = 0, O = 2 * gb; x.length > S; ++S, O += 2) {
                  J[O] += x[S];
                }
              }
            }
            for (let S, O = 0; ma > O; ++O) {
              y = 0, x = 2 * (gb + O), ((S = J[x]) || H) && (Ca = 0.003080 * Aa, 1 != A && 4 != A || (Ca *= Math.sin(R * x * Math.PI * 2) * Jb / 512 + .5), Ca = 1.5 * Math.sin(Ca), Ba += Ca * la, C = (1 - ja / 255) * (S - la) - Ba, la += Ca * C, S = 4 == A ? la : 3 == A ? C : Ba, A || (S = 1 > (S *= 22e-5) ? -1 < S ? Math.sin(S / 4 * Math.PI * 2) : -1 : 1, S /= 22e-5), S *= nb / 32, H = 1e-5 < S * S, hb = Math.sin(T * x) * Cb / 512 + .5, y = S * (1 - hb), S *= hb), x < ba || (y += J[1 + x - ba] * 
              ob / 255, S += J[x - ba] * ob / 255), fc[w + x] += J[x] = y, ++x, fc[w + x] += J[x] = S;
            }
          }
        }
        w += J.length;
      }
      setTimeout(h);
    } else {
      w = Mb.createBuffer(2, 5362944, 44100);
      for (A = 0; 2 > A; A++) {
        for (let B = A, f = w.getChannelData(A); 10725888 > B; B += 2) {
          f[B >> 1] = fc[B] / 65536;
        }
      }
      Lb.buffer = w;
      Lb.loop = !0;
    }
    g();
  }, m = new Image();
  m.onload = m.onerror = () => {
    g();
  };
  m.src = gc;
  setTimeout(h, 9);
  let q;
  const z = (w, A, y) => d.translate(w + Math.sin(a + 2) / 5, A + Math.sin(.8 * a) / 3, y).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), u = (() => {
    const w = ab(11, y => d.translate(Math.sin(y / 10 * Math.PI), y / 10).rotate(+y).scale(1.0001 - y / 10, 0, 1 - y / 10),), A = tb(18);
    return ab(10, y => ub(sb(A, w[y]).reverse(), sb(A, w[y + 1]), 1),).flat();
  })(), v = L(K(l(p(20, 1, 1.15, 1), d.translate(0, -3).scale(3.5, 1, 3.5), Z(.7, .4, .25, .7),), l(p(20, 1, 1.3, 1), d.translate(0, -2.5).scale(2.6, 1, 3), Z(.7, .4, .25, .2),), l(p(M), d.translate(4, -1.2).scale3d(2), Z(.7, .4, .25, .3)),),), I = L(K(l(p(M), d.translate(0, -8).scale(6, 15, 2.2)), l(p(M), d.translate(0, -14.1).scale(4, 13, 4)), l(p(20, 1), d.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),);
  t(() => {
    r([M.slice(1)], d.translate(-2).scale3d(3).rotate(90, 0));
  }, 0);
  t(() => {
    const w = () => {
      var f = G[2].i, n = 1 - G[4].i;
      return f < n ? f : n;
    }, A = (f, n, D) => t(N => {
      N.h = () => d.translate(w() * Math.sin(3 * f + a * f) * n);
      M.map(({x:W, z:X}) => {
        r(p(11, 1), d.translate(4 * W, 4, D + 4 * X).scale(.8, 3, .8), Z(.5, .3, .7, .6),);
        r(p(M), d.translate(4 * W, 7, D + 4 * X).scale(1, .3), Z(.5, .5, .5, .3),);
      });
      r(L(K(l(p(M), d.translate(0, 0, D).scale(5, 1, 5), Z(.8, .8, .8, .3),), ...[-1, 1].map(W => l(p(M), d.translate(5 * W, .2, D).rotate(0, 0, -30 * W).scale(4, 1, 2), Z(.8, .8, .8, .3),)),),),);
      r(p(M), d.translate(0, -3, D).scale(8, 2, 8), Z(.4, .4, .4, .3));
    }), y = (t(f => {
      f.h = () => z(-12, 4.2, 40 * Ha - 66);
      r(v);
      cc(d.translate(0, -3, 4));
    }), ab(7, f => l(p(6, 1), d.translate(4 * (f / 6 - .5), 3).scale(.2, 3, .2), Z(.3, .3, .38),)).flat()), x = (dc(d.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), dc(d.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...tb(18).map(({x:f, z:n}) => [7 * f, 10 * n, 4.5 - 2 * (0 > f ? -f : f)]),), r(p(M), d.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Z(.8, .8, .8, .2),), M.map(({x:f, z:n}) => r(p(6), d.translate(3 * f, 3, 15 * n).scale(.7, 4, .7), Z(.6, .3, .3, .4))), [-23, 22].map(f => 
    r(p(M), d.translate(0, 0, f).scale(3, 1, 8), Z(.9, .9, .9, .2))), [-15, 15].map((f, n) => {
      r(p(M), d.translate(0, 6.3, f).scale(4, .3, 1), Z(.3, .3, .3, .4));
      r(p(M), d.translate(0, 1, f).scale(3, .2, .35), Z(.5, .5, .5, .3));
      t(D => {
        D.h = () => d.translate(0, 4.7 * -G[n + 1].g, f);
        r(y);
      });
    }), ab(5, f => ab(2, n => r(u, d.translate(18.5 * (n - .5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * n).scale(1.2, 10, 1.2), Z(1, 1, .8, .2),))), r(p(M), d.translate(3, 1.5, -20).scale(.5, 2, 5), Z(.7, .7, .7, .2)), r(p(M), d.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Z(.75, .75, .75, .2),), r(p(5), d.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Z(.6, .3, .3, .4),), cc(d.translate(-5.4, 1.5, -19).rotate(0, -90)), r(p(M), d.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 
    0, -30).scale(4, .6, 4.5), Z(.8, .2, .2, .5),), r(L(K(bc(l(p(6, 0, 0, .3), d.translate(8, -3, -4).scale(13, 1, 13), Z(.7, .7, .7, .2),), l(p(6), d.translate(0, -8).scale(9, 8, 8), Z(.4, .2, .5, .5)), l(p(6, 0, 0, .3), d.translate(0, -0.92).scale(13, 2, 13), Z(.8, .8, .8, .2),),), l(p(5), d.scale(5, 30, 5), Z(.4, .2, .6, .5)), l(p(5, 0, 1.5), d.translate(0, 1).scale(4.5, .3, 4.5), Z(.7, .5, .9, .2),), l(p(M), d.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), Z(.5, .5, .5, 
    .5),), l(p(6), d.translate(15, -1.5, 4).scale(3.5, 1, 3.5), Z(.5, .5, .5, .5),),),),), t(f => {
      f.h = () => d.translate(0, .01 < G[3].g ? (5 * Math.cos(1.5 * a) + 2) * G[3].i * (1 - G[2].g) + -15 * (1 - G[3].g) : -500, 0,);
      cc(d.translate(0, 1.2));
      r(p(5), d.translate(0, -0.2).scale(5, 1, 5), Z(.6, .65, .7, .3));
    }), cc(d.translate(15, -2, 4)), A(.7, 12, 35), A(1, 8.2, 55), t(f => {
      f.h = () => d.translate(w() * Math.sin(a / 1.5 + 2) * 12);
      r(L(K(bc(l(p(M), d.scale(1.5, 1, 5), Z(.9, .9, .9, .2)), l(p(6), d.scale(4, 1, 5), Z(.9, .9, .9, .2)), l(p(M), d.translate(0, -2).scale(2, 3.2, 1.9), Z(.3, .8, .5, .5),), l(p(16, 1, 0, 4), d.scale(1, 1, 1.5).rotate(0, 90), Z(.9, .9, .9, .2),),), l(p(M), d.scale(1.3, 10, 1.3), Z(.2, .7, .4, .6)),),), d.translate(0, 0, 45),);
      dc(d.translate(0, 2.8, 45), [0, 0, 4.5]);
    }), t(f => {
      f.h = () => d.translate(9.8 * (1 - w()));
      r(p(3), d.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), Z(.3, .6, .6, .2));
      r(p(8), d.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Z(.8, .8, .8, .2),);
      r(p(M), d.translate(-23, -3, 55).scale(5.2, 1.7, 3), Z(.5, .5, .5, .3));
      r(p(M), d.translate(-23, -2.2, 62).scale(3, 1, 4), Z(.5, .5, .5, .3));
      cc(d.translate(-23, -0.5, 66.5));
    }), r(p(M), d.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Z(.9, .9, .9, .2),), t(f => {
      f.h = () => d.translate(0, Wa(1 - 5 * w()) * Xa(G[4].g, G[5].g) * Math.sin(1.35 * a) * 4);
      r(p(M), d.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Z(.7, .7, .7, .2),);
      r(L(K(l(p(M), d.scale(3, 1.4, 2.7)), l(p(M), d.scale(1.2, 8, 1.2)),),), d.translate(-33, -3, 55), Z(.7, .7, .7, .2),);
    }), t(f => {
      f.h = () => d.translate(0, 0, Wa(1 - 5 * w()) * Xa(G[4].g, G[5].g) * Math.sin(.9 * a) * 8);
      r(L(K(l(p(M), d.translate(-27, -3, 55).scale(3, 1.4, 2.7), Z(.9, .9, .9, .2),), l(p(M), d.translate(-27, -3, 55).scale(1, 3), Z(.9, .9, .9, .2),),),),);
      r(p(M), d.translate(-39, -3, 55).scale(3, 1.4, 2.7), Z(.9, .9, .9, .2));
    }), t(f => {
      f.h = () => d.translate(0, -6.5 * G[4].i);
      r(p(6), d.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), Z(.7, .7, .7, .4),);
    }), [...l(L(bc(l(p(M), d.translate(0, -3).scale(11, 1.4, 3), Z(.9, .9, .9, .2),), K(l(p(6), d.rotate(0, 0, 90).scale(6, 8, 6), Z(.3, .6, .6, .3)), l(p(4, 0, .01), d.translate(0, 6).scale(12, 2, .75).rotate(0, 45), Z(.3, .6, .6, .3),), l(p(6), d.rotate(0, 0, 90).scale(5, 12, 5), Z(.3, .6, .6, .3),), ...[5, 0, -5].map(f => l(p(5), d.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Z(.3, .6, .6, .3),)),),),), d,)]), P = (r(x, d.translate(-53, 0, 55)), r(p(6), d.translate(-61.3, -2.4, 49).scale(3, 
    1, 5), Z(.4, .6, .6, .3)), r(p(7), d.translate(-57, -2.6, 46).scale(4, 1, 4), Z(.8, .8, .8, .3)), cc(d.translate(-55, -1.1, 46).rotate(0, 90)), t(f => {
      f.h = () => d.translate(-75, (1 - G[5].i) * (1 - G[6].g) * 3, 55).rotate(180 * (1 - G[5].i) + Da, 0,);
      r(x);
    }, 2), r(p(M), d.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), Z(.7, .7, .7, .2),), r(p(3, 0, -0.5), d.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Z(.8, .8, .8, .2),), r(L(K(bc(l(p(M), d.translate(-100, -2.5, 55).scale(8, 1, 8), Z(.8, .8, .8, .2),), l(p(M), d.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Z(.8, .8, .8, .2),), l(p(M), d.translate(-100, -2.6, 70).scale(3, 1.1, 7), Z(.8, .8, .8, .2),), l(p(M), d.translate(-96, -2.6, 73).rotate(0, 
    45).scale(3, 1.1, 5), Z(.8, .8, .8, .2),), l(p(6), d.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Z(.6, .6, .6, .3),), l(p(M), d.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Z(.8, .8, .8, .2),), l(p(M), d.translate(-100, .42, 92).scale(3, 1.1, 4.1), Z(.8, .8, .8, .2),),), l(p(8), d.translate(-100, -1, 55).scale(7, .9, 7), Z(.3, .3, .3, .4),), l(p(8), d.translate(-100, -2, 55).scale(4, .3, 4), Z(.4, .4, .4, .5),), l(p(8), d.translate(-100, -3, 55).scale(.6, 1, 
    .6), Z(.4, .4, .4, .5),),),), d,), dc(d.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), dc(d.translate(-89, .2, 80), [0, 0, 6]), r(L(K(l(p(M), d.translate(-100, 1, 63).scale(7.5, 4), Z(.5, .5, .5, .4),), l(p(M), d.translate(-100, 0, 70).scale(2, 2, 10), Z(.5, .5, .5, .4),), l(p(20, 1), d.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Z(.5, .5, .5, .4),),),),), t(f => {
      f.h = () => d.translate(-99.7, 5.3 * -G[6].g - 2, 63.5);
      r(y);
    }), M.map(({x:f, z:n}) => {
      r(p(6), d.translate(7 * f - 100, -3, 7 * n + 55).scale(1, 8.1), Z(.6, .15, .15, .8),);
      [4, -0.4].map(D => r(p(6), d.translate(7 * f - 100, D, 7 * n + 55).scale(1.3, .5, 1.3), Z(.4, .2, .2, .8),));
    }), ab(7, f => {
      r(p((23 * f + 1) % 5 + 5, 0, .55), d.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), Z(.5 - f / 17, .5 - (1 & f) / 9, .6, .3),);
    }), r(p(M), d.translate(-87, -9.5, 24).scale(7, 1, 3), Z(.4, .5, .6, .4)), r(p(4), d.translate(-86, -9.2, 27).scale(5, 1, 5), Z(.5, .6, .7, .3)), r(p(18, 1), d.translate(-86, -9, 31).scale(1.5, 1, 1.5), Z(.3, .3, .4, .1)), cc(d.translate(-86, -7.5, 31)), t(f => {
      f.h = () => d.translate(0, 3.5 * (1 - Ua(G[6].g, G[7].g)) + Xa(G[7].i, G[6].i) * Math.sin(a) * 5,);
      [0, 12, 24].map(n => r(p(M), d.translate(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), Z(.2, .5, .6, .2),));
    }), t(f => {
      f.h = () => {
        const n = Xa(G[7].i, G[6].i);
        return d.translate(0, n * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + n) * n);
      };
      [6, 18].map(n => r(p(M), d.translate(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), Z(.1, .4, .5, .2),));
    }), r(L(K(bc(l(p(M), d.scale(11, 1, 13), Z(.3, .4, .6, .3)), l(p(5), d.translate(0, 0, -7).scale(2, 1.2, 2), Z(.2, .4, .7, .3),), l(p(5), d.scale(9, 1.2, 9), Z(0, .2, .3, .5)),), l(p(5), d.scale(5.4, 5, 5.4), Z(0, .2, .3, .5)),),), d.translate(-38.9, -11.3, 17),), cc(d.translate(-38.9, -9.6, 10)), t(f => {
      f.h = () => d.translate(0, -7.3 * G[7].i);
      r(L(K(bc(l(p(5), d.translate(0, 2).scale(5, 7, 5).skewY(8), Z(.2, .4, .5, .5),), l(p(5), d.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), Z(.25, .35, .5, .5),), l(p(5), d.translate(0, 9).scale(.6, 7, .6).skewY(8), Z(.35, .3, .5, .5),),), l(p(5), d.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Z(.2, .4, .5, .5),),),), d.translate(-38.9, -11.3, 17),);
      dc(d.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...tb(15).map(({x:n, z:D}) => [3 * n, 3 * D, 1.5]),);
    }), M.map(({x:f, z:n}) => {
      q = d.translate(9 * f - 38.9, -7.3, 11 * n + 17);
      r(p(18, 1), q.scale(1, 4), Z(.25, .25, .25, 1));
      [1.5, 8].map(D => r(p(18, 1), q.translate(0, D - 4).scale(1.5, .5, 1.5), Z(.6, .6, .6, .3)));
    }), r(L(K(bc(l(p(6), d.translate(0, 0, -36).scale(15, 1.2, 15), Z(.7, .7, .7, .3),), l(p(M), d.translate(0, 0, -18).scale(4, 1.2, 6), Z(.45, .4, .6, .3),),), ...ab(6, f => ab(6, n => l(p(6), d.translate(4.6 * n - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * n)).scale(2, 5, 2,), Z(.7, .7, .7, .3),))).flat(),),), d.translate(-38.9, -11.3, 17),), dc(d.translate(-38.9, -8.4, -21), [0, 0, 12]), r(p(5), d.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), Z(.8, .1, .25, .4),), cc(d.translate(-84, 
    -0.5, 85).rotate(0, 45)), t(f => {
      f.h = () => z(-123, 1.4, 55 + -65 * Ia);
      cc(d.translate(0, -3, -4).rotate(0, 180));
      r(v);
    }), dc(d.translate(-115, .2, -12), [0, 0, 3.5]), L(K(l(p(M), d.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), Z(.25, .25, .35, .3),), l(p(3), d.translate(0, 0, -5.5).scale(3, 2), Z(.6, .3, .4, .3)), ...[-1.2, 1.2].map(f => l(p(M), d.translate(f, -0.5, 1).scale(.14, .3, 6.5), Z(.7, .2, 0, .3),)),),)), B = (t(f => {
      f.h = () => {
        var n = Math.sin(1.1 * a);
        return d.translate.call(d, 0, -2, Xa(G[10].g, G[11].g) * (0 > n ? -n : n) * -8.5 + 10);
      };
      ab(2, n => r(P, d.translate(9 * n - 110 + (1 & n), 1.7, -12)));
    }), t(f => {
      f.h = () => {
        var n = Math.sin(2.1 * a);
        return d.translate.call(d, 0, -2, Xa(G[10].g, G[11].g) * (0 > n ? -n : n) * -8.5 + 10);
      };
      ab(2, n => r(P, d.translate(9 * (n + 2) - 110 + (1 & n), 1.7, -12)));
    }), t(f => {
      f.h = () => {
        var n = Math.sin(1.5 * a);
        return d.translate.call(d, 0, -2, -8.5 * Ua((1 - G[10].g) * (1 - Xa(G[10].g, G[11].g)), Xa(G[10].g, G[11].g) * (0 > n ? -n : n),) + 10,);
      };
      ab(3, n => r(P, d.translate(9 * n - 106, 1.7, -12)));
    }), r(L(K(bc(l(p(M), d.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), l(p(M), d.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...ab(4, f => l(p(M), d.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...ab(3, f => l(p(M), d.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),),), d.translate(-123, 0, -12), Z(.5, .5, .6, .2),), r(p(5), d.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), Z(.25, .25, .35, 1),), r(p(M), d.translate(-116, -2.6, -12).scale(3.2, 
    1.1, 4).skewX(3), Z(.8, .8, .8, .2),), r(p(6), d.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), Z(.6, .5, .7, .2)), cc(d.translate(-116, -1.4, -18).rotate(0, 180)), ab(3, f => {
      r(I, d.translate(12 * f - 109, -9, -12), Z(.6, .6, .6, .3));
      r(I, d.translate(-77, -9, -12 * f - 20).rotate(0, 90), Z(.6, .6, .6, .3),);
    }), r(L(K(l(p(12), d.translate(-77, -13.9, -12).scale(4, 18.2, 4), Z(.7, .7, .7, .2),), l(p(M), d.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), Z(.4, .5, .6, .2),), l(p(M), d.translate(-77, 0, -14).scale(1.5, 2.2, 2), Z(.4, .5, .6, .2),), l(p(12), d.translate(-77, 2.8, -12).scale(3, 5, 3), Z(.4, .5, .6, .2),),),),), r(p(M), d.translate(-115.5, -17, -12).scale(.5, 15, 2.2), Z(.6, .6, .6, .3)), r(p(M), d.translate(-77, -17, -50.5).scale(2.2, 15, .5), Z(.6, .6, .6, .3)), r(p(M), d.translate(-84.9, 
    -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), Z(.6, .6, .6, .3),), r(L(K(l(p(M), d.translate(-93, -5.8, -40).scale(9, 1, 5), Z(.8, .8, .8, .1),), l(p(9), d.translate(-98, -5.8, -40).scale(3, 8, 3), Z(.7, .7, .7, .2),),),),), r(p(9), d.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), Z(.5, .5, .5, .3)), cc(d.translate(-98, -4.4, -40).rotate(0, 90)), dc(d.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]), r(L(K(bc(l(p(6, 0, 0, .6), d.translate(-100, .7, 105.5).scale(8, 1, 11), Z(.7, 
    .7, .7, .2),), l(p(M), d.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), Z(.7, .7, .7, .2),), l(p(M), d.translate(-91.2, .7, 107).scale(3, 1, 3.3), Z(.7, .7, .7, .2),),), l(p(5), d.translate(-100, .7, 113).scale(4, 3, 4), Z(.7, .7, .7, .2),),),),), ab(4, f => t(n => {
      n.h = () => {
        const D = Xa(G[8].i, G[12].i);
        return d.translate((2 < f ? 2 * (1 - D) + D : 0) - 100, D * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + .7, 115 + (1 & f ? -1 : 1) * (1 - G[8].i) * (1 - G[12].i) * -7 + (.05 > D ? .05 : D) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
      };
      r(p(6), d.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), Z(.5 - f / 8, f / 12 + .5, .7, .3),);
    })), t(f => {
      f.h = () => {
        const n = Xa(G[8].i, G[12].i);
        return d.translate(2.5 * (1 - n) - 139.7, -3 * (1 - G[8].g) + n * Math.sin(.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * n + 3), 0);
      };
      r(L(K(l(p(10), d.scale(6, 2, 6), Z(.1, .6, .5, .3)), l(p(10), d.scale(3.3, 6, 3.3), Z(.1, .6, .5, .5)),),),);
      q = d.translate(-7.5).rotate(0, 90);
      r(p(15), q.scale(3, 2.3, 3), Z(.4, .4, .4, .3));
      r(p(10), q.scale(2, 2.5, 2), Z(.3, .8, .7, .3));
      r(p(5), q.scale(1, 3), Z(.5, .5, .5, .5));
      cc(q.translate(0, 3.4).rotate(0, 180));
      [-1, 1].map(n => r(u, d.rotate(90 * -n, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), Z(1, 1, .8, .2),));
      dc(d.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    }), [-1, 1].map(f => {
      r(p(15, 1), d.translate(-7.5 * f - 100, 3.7, 96).scale(.8, 4, .8), Z(.6, .24, .2, .5),);
      [7.2, 1.5].map(n => r(p(15, 1), d.translate(-7.5 * f - 100, n + .7, 96).scale(1.1, .5, 1.1), Z(.5, .24, .2, .4),));
      r(u, d.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), Z(1, 1, .8),);
      r(L(K(l(p(M), d.translate(-4 * f, 3.5, -0.5).scale(4, 4, .7), Z(.5, .5, .5, .4),), l(p(M), d.scale(3, 3, 10), Z(.6, .24, .2, .5)), l(p(30, 1), d.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Z(.6, .24, .2, .5),), l(p(5), d.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Z(.6, .24, .2, .5),), l(p(5), d.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), Z(.6, .24, .2, .5),),),), d.translate(f - 100, .7, 97),);
    }), t(f => {
      f.h = () => d.translate(-100, .6 - 6 * G[12].g, 96.5).scale(.88, 1.2);
      r(y);
    }), [...l(p(28, 1), d.scale(8, 1, 8), Z(.45, .45, .45, .2)), ...l(p(5), d.translate(0, 1).scale(1, .2), Z(.3, .3, .3, .2)),]);
    t(f => {
      f.h = () => d.translate(-80, 1, 106).rotate(0, 40 + ya);
      r(L(K(l(p(28, 1), d.scale(8, 1, 8), Z(.45, .45, .45, .2)), l(p(M), d.translate(0, 0, -5.5).scale(1.5, 3, 2.5), Z(.45, .45, .45, .2),),),),);
      r(p(8), d.translate(0, 2).scale(3, 1.5, 3), Z(.7, .7, .7, .1));
      r(p(5), d.translate(0, 2).scale(1, 2), Z(.3, .3, .3, .2));
      dc(d.translate(0, 3), ...tb(10).map(({x:n, z:D}) => [5.6 * n, 5.6 * D, 2.5]),);
    });
    t(f => {
      f.h = () => d.translate(-64, 1, 106).rotate(0, za);
      r(L(K(l(p(28, 1), d.translate(0, 2).scale(8, 1, 8), Z(.35, 0, 0, .3),), l(p(M), d.scale(9, 5, 2), Z(.3, 0, 0, .3)),),),);
      r(B);
      [-1, 1].map(n => r(u, d.rotate(0, 90).translate(-5 * n, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * n + 90), Z(1, 1, .8),));
    });
    t(f => {
      f.h = () => d.translate(-48, 1, 106).rotate(0, 180 - za);
      r(L(K(l(p(30, 1), d.translate(0, 2).scale(8, 1, 8), Z(.35, 0, 0, .3),), l(p(M), d.translate(7).scale(9, 5, 2), Z(.3, 0, 0, .3)), l(p(M), d.translate(0, 0, 7).scale(2, 5, 9), Z(.3, 0, 0, .3),),),),);
      r(B);
    });
    t(f => {
      f.h = () => d.translate(-48, 1, 90).rotate(0, 270 + za);
      r(L(K(l(p(30, 1), d.translate(0, 2).scale(8, 1, 8), Z(.35, 0, 0, .3),), l(p(M), d.translate(7).scale(9, 5, 2), Z(.3, 0, 0, .3)), l(p(M), d.translate(0, 0, -7).scale(2, 5, 9), Z(.3, 0, 0, .3),),),),);
      r(B);
    });
    r(p(M), d.translate(-56, 1, 106).scale(.7, .8, 2.5), Z(.7, .7, .7, .2));
    r(p(M), d.translate(-48, 1, 98).scale(2.5, .8, .7), Z(.7, .7, .7, .2));
    r(p(M), d.translate(-39, .4, 90).scale(2, 1, 2), Z(.7, .7, .7, .3));
    r(p(M), d.translate(-34.2, .4, 90).scale(3, 1, 3), Z(.7, .7, .7, .3));
    cc(d.translate(-34, 2.7, 96).rotate(-12, 0));
    r(p(5), d.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), Z(.2, .5, .5, .6));
    [Z(.1, .55, .45, .2), Z(.2, .5, .5, .3), Z(.3, .45, .55, .4)].map((f, n) => t(D => {
      D.h = () => d.translate(0, (1 - G[13].i) * (1 - G[14].i) * 3 + Xa(G[13].i, G[14].i) * Math.sin(1.5 * a + 1.5 * n) * 4.7,);
      r(p(8), d.translate(-23.5, n / 1.5 - .4, 90 + 6.8 * n).scale(3.6, 2 - n / 1.5, 3.6).rotate(0, 22.5), f,);
      2 === n && r(p(6), d.translate(-29, .4, 90).scale(2.4, 1, 2.8), Z(.6, .7, .6, .3));
      1 === n && r(p(M), d.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), Z(.6, .6, .7, .3),);
    }));
    r(L(K(l(p(6, 0, 0, .3), d.translate(0, -0.92, 95).scale(14, 2, 14), Z(.8, .8, .8, .2),), l(p(5), d.translate(0, 0, 95).scale3d(6), Z(.3, .3, .3, .5)),),),);
    [8, -6.1].map((f, n) => ab(3, D => r(I, d.translate(6 * D - 6, f - (1 & D), 111 - .2 * (1 & D) - n), 1 & D ? Z(.5, .5, .5, .3) : Z(.35, .35, .35, .5),),));
    [-1, 1].map(f => r(u, d.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), Z(1, 1, .8),));
    cc(d.translate(0, 1.7, 82).rotate(0, 180));
    r(p(5), d.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Z(.5, .3, .3, .4),);
    r(L(K(bc(l(p(M), d.translate(0, 16, 110.5).scale(12, 1, 3), Z(.5, .3, .3, .4),), l(p(M), d.translate(0, 16, 111).scale(3, 1, 3.8), Z(.5, .3, .3, .4),),), l(p(5), d.translate(0, 16, 103.5).scale(5.5, 5, 5.5), Z(.5, .3, .3, .4),),),),);
    t(f => {
      f.h = () => {
        const n = Math.sin(a);
        return d.translate(-2 * n).rotate(0, 0, 25 * n);
      };
      r(p(3), d.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), Z(.5, .3, .3, .4),);
      [22, 30].map(n => {
        r(p(6), d.translate(0, 16, n + 95).scale(3, 1, 2.3).rotate(0, 90), Z(.7, .7, .7, .4),);
        r(p(M), d.translate(0, 6.2, n + 95).scale(.5, 11, .5), Z(.5, .3, .3, .4),);
      });
    });
    r(p(6), d.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Z(.5, .6, .7, .3),);
    r(p(M), d.translate(0, 16, 129).scale(1.5, 1, 2), Z(.5, .6, .7, .3));
    r(p(7), d.translate(0, 16.2, 133).scale(5, 1, 5), Z(.4, .5, .6, .4));
    t(f => {
      f.h = () => {
        const n = Xa(Xa((G[14].g + G[14].i) / 2, G[13].i), (G[15].g + G[15].i) / 2,);
        return d.translate(0, 16 * n, 8.5 * Wa(2 * n - 1) + 95);
      };
      r(p(5), d.scale(5, 1.1, 5), Z(.5, .3, .3, .4));
      r(p(5), d.scale(5.5, .9, 5.5), Z(.25, .25, .25, .4));
      cc(d.translate(0, 1.5, -1).rotate(0, 180));
    });
    dc(d.translate(0, 3, 95), ...tb(9).map(({x:f, z:n}) => [9 * f, 9 * n, 4]),);
    dc(d.translate(0, 19, 134), [0, 0, 3.5]);
  });
  Sa = [t(() => {
    [0, 180].map(A => r(u, d.rotate(0, A).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), Z(1, 1, .8),));
    r(vb(20), d.translate(0, 1).scale(.5, .5, .5), Z(1, .3, .4));
    const w = l(L(K(p(15, 1), l(p(M), d.translate(0, 0, 1).scale(2, 2, .5)),),), d.rotate(-90, 0).scale(.1, .05, .1), Z(.3, .3, .3),);
    [-1, 1].map(A => r(w, d.translate(.2 * A, 1.2, .4).rotate(0, 20 * A, 20 * A)));
    r(p(M), d.translate(0, .9, .45).scale(.15, .02, .06), Z(.3, .3, .3));
    r(vb(20), d.scale(.7, .8, .55), Z(1, .3, .4));
  }), ...[-1, 1].map(w => t(() => {
    r(p(10, 1), d.translate(.3 * w, -0.8).scale(.2, .7, .24), Z(1, .3, .4));
  })),];
  Na = t(() => {
    r(p(6, 1), d.scale(.13, 1.4, .13), Z(.3, .3, .5, .1));
    r(p(8), d.translate(0, 1).scale(.21, .3, .21), Z(1, .5, .2));
    r(p(3), d.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), Z(.2, .2, .2, .1));
  }, 0);
  Qa = t(() => {
    r(p(6), d.scale(.8, 1, .8), Z(1, .3, .5));
  }, 0);
  Oa = t(() => {
    r(vb(40, 30, (w, A, y) => {
      const x = A / 30, P = .05 * w * Math.PI, B = x ** .6 * Math.PI / 2;
      w = x * x * Math.sin(w * Math.PI * .35) / 4;
      return 29 === A ? {x:y.D = 0, y:-0.5, z:0,} : {x:Math.cos(P) * Math.sin(B), y:Math.cos(x * Math.PI) - x - w, z:Math.sin(P) * Math.sin(B) + Math.sin(w * Math.PI * 2) / 4,};
    }), d.scale3d(.7), Z(1, 1, 1),);
    [-1, 1].map(w => r(vb(15), d.translate(.16 * w, .4, -0.36).scale3d(.09)));
  }, 0);
});

