let ca = 0,
  da = 0,
  a = 0,
  ea = 0,
  ha = 0,
  ia = 0,
  ja = 0,
  la = 0,
  ma = 0,
  na = 0,
  oa = 0,
  pa = 0,
  c = 0.066,
  qa = 1,
  ra,
  sa,
  ta,
  va,
  wa;
const za = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  e = [],
  h = [],
  Aa = [],
  Ba = [],
  Fa = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ga = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Ha = { x: 0, y: 0, z: 0 },
  Ia = { x: 0, y: 0, z: 0 };
var Ja = 0, Ka = 180;
const La = { x: 0, y: 0, z: 0 },
  Ma = Math.PI / 180,
  m = new DOMMatrix(),
  Oa = new Float32Array(16),
  Pa = new Float32Array(624),
  r = (d, b) => Array.from(Array(d), (g, l) => b(l)),
  Qa = (d, b) => b < d ? d : b,
  u = (d, b = 0, g = 1) => d < b ? b : g < d ? g : d,
  Ra = (d, b) => b < Math.abs(d) ? d : 0,
  D = (d, b, g) => (0 < g ? 1 > g ? d + (b - d) * g : b : d) || 0,
  Sa = (d, b) => (d = u(d), D(d, 1 - d, b)),
  Ta = d => Math.atan2(Math.sin(d *= Ma), Math.cos(d)) / Ma,
  Ua = (d, b, g) =>
    d + (2 * (b = (b
                - d) % 360) % 360 - b) * u(g),
  Va = ({ x: d, y: b, z: g }) => Math.hypot(d - Ha.x, b - Ha.y, g - Ha.z),
  Ya = ({ x: d, y: b, z: g }, l) => d * l.x + b * l.y + g * l.z,
  Za = d => {
    let b = 0, g = 0, l = 0, n, k = d.at(-1);
    for (n of d) {
      b += (k.y - n.y) * (k.z + n.z), g += (k.z - n.z) * (k.x + n.x), l += (k.x - n.x) * (k.y + n.y), k = n;
    }
    return n = Math.hypot(b, g, l), b /= n, g /= n, l /= n, { x: b, y: g, z: l, w: b * k.x + g * k.y + l * k.z };
  },
  $a = (
    d,
    b = Oa,
    g = 0,
  ) => (g *= 16,
    b[g++] = d.m11,
    b[g++] = d.m12,
    b[g++] = d.m13,
    b[g++] = d.m14,
    b[g++] = d.m21,
    b[g++] = d.m22,
    b[g++] = d.m23,
    b[g++] = d.m24,
    b[g++] = d.m31,
    b[g++] = d.m32,
    b[g++] = d.m33,
    b[g++] = d.m34,
    b[g++] = d.m41,
    b[g++] = d.m42,
    b[g++] = d.m43,
    b[g] = d.m44,
    b),
  ab = (d, b, g, l) => [d, 0, 0, 0, 0, b, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0],
  bb = (d, b, g) => (d.D = g, d.A = b, d),
  cb = (d, b, g = d.A) =>
    bb(
      d.map(l => {
        let n, k;
        return { x: l, y: n, z: k } = l,
          { x: l, y: n, z: k } = b.transformPoint({ x: l, y: n, z: k }),
          { x: l, y: n, z: k };
      }),
      g,
      d.D,
    ),
  J = (d, b, g) => d.map(l => cb(l, b, g)),
  db = (d, b = 0) =>
    r(d, g => {
      const l = Math.cos(2 * Math.PI * g / d);
      return { x: Math.sin(2 * Math.PI * g / d), y: 0, z: 0.01 > Math.abs(l) ? l : 0 > l ? l - b : l + b };
    }),
  eb = (d, b, g) =>
    d.map((l, n, { length: k }) => bb([l, b[k - n - 1], b[k - (n + 1) % k - 1], d[(n + 1) % k]], d.A, g)),
  K = (
    d,
    b,
    g = 0,
    l,
  ) => (d = d ? db(d, l) : za,
    l = cb(d, m.translate(0, 1).scale3d(0 < g ? g : 1)),
    d = cb(d, m.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...eb(d, l, b), l, d]),
  fb = (
    d,
    b = d,
    g = (
      l,
      n,
    ) => (n *= Math.PI / b,
      { x: Math.cos(l *= 2 * Math.PI / d) * Math.sin(n), y: Math.cos(n), z: Math.sin(l) * Math.sin(n) }),
  ) => {
    const l = [];
    for (let n = 0; d > n; n++) {
      for (let k = 0; b > k; k++) {
        const t = bb([], 0, 1);
        l.push(t);
        t.push(g(n, k, t));
        k && t.push(g((n + 1) % d, k, t));
        b - 1 > k && t.push(g((n + 1) % d, k + 1 % b, t));
        t.push(g(n, k + 1 % b, t));
      }
    }
    return l;
  },
  ib = (d, b) => {
    var g, l, n, k = b.C;
    for (var t = 0; k.length > t; ++t) {
      if (-0.00008 > (g = Ya(d, k[t]) - d.w) ? n = b : 8e-5 < g && (l = b), n && l) {
        l = [];
        n = [];
        k = b.C;
        t = b.B;
        let x = k.at(-1), w = Ya(d, x) - d.w;
        for (const y of k) {
          g = Ya(d, y) - d.w,
            8e-5 > w && n.push(x),
            -0.00008 < w && l.push(x),
            (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g)
            && (w /= g - w,
              x = { x: x.x + (x.x - y.x) * w, y: x.y + (x.y - y.y) * w, z: x.z + (x.z - y.z) * w },
              l.push(x),
              n.push(x)),
            x = y,
            w = g;
        }
        return {
          o: 2 < l.length && { C: bb(l, k.A, k.D), B: t, u: b },
          m: 2 < n.length && { C: bb(n, k.A, k.D), B: t, u: b },
        };
      }
    }
    return { o: l, m: n };
  },
  jb = (d, b, g = Za(b.C)) => {
    let l, n, k;
    return d
      ? ({ o: l, m: n } = ib(d, b), l || n || d.s.push(b), l && (d.o = jb(d.o, l, g)), n && (d.m = jb(d.m, n, g)))
      : ({ x: l, y: n, z: g, w: k } = g, d = { x: l, y: n, z: g, w: k, s: [b], o: 0, m: 0 }),
      d;
  },
  kb = (d, b, g) => {
    const l = [],
      n = (k, t) => {
        let { o: x, m: w } = ib(k, t);
        x || w || (0 < g * Ya(k, b) ? x = t : w = t);
        x && (k.o ? n(k.o, x) : l.push(x));
        w && k.m && n(k.m, w);
      };
    for (const k of b.s) {
      n(d, k);
    }
    return l;
  },
  lb = (d, b) => d && (b(d), lb(d.o, b), lb(d.m, b)),
  ob = d => d.length ? d.reduce((b, g) => jb(b, { C: g, B: 0, u: 0 }), 0) : d,
  pb = d => (lb(d, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const l of b.s) {
      l.B = !l.B;
    }
  }),
    d),
  qb = (...d) =>
    d.reduce((b, g) => {
      const l = [];
      if (b = ob(b), g) {
        g = ob(g);
        lb(b, n => n.s = kb(g, n, 1));
        lb(g, n => l.push([n, kb(b, n, -1)]));
        for (let [n, k] of l) {
          for (const t of k) {
            jb(b, t, n);
          }
        }
      }
      return b;
    }),
  N = (...d) => {
    let b;
    const g = new Map(),
      l = new Map(),
      n = k => {
        let t;
        return k.u && ((t = g.get(k.u)) ? (l.delete(t), k = n(k.u)) : g.set(k.u, k)), k;
      };
    return [d, ...b] = [...d],
      d = pb(qb(pb(ob(d)), ...b)),
      lb(d, k => {
        for (const t of k.s) {
          l.set(n(t), t.B);
        }
      }),
      Array.from(l, ([{ C: k }, t]) => {
        const x = k.map(({ x: w, y, z: B }) => ({ x: w, y, z: B }));
        return bb(t ? x.reverse() : x, k.A, k.D);
      });
  },
  rb = () => {
    const d = Sa(h[12].g, h[13].g);
    ja = D(D(ja, 0, 1 - Math.exp(-1 * c)), Ta(ja + 60 * c), h[5].g - h[6].i);
    ha = D(D(ha, 0, 1 - Math.exp(-5 * c)), Ta(ha + 56 * c), d);
    ia = D(D(ia, 0, 1 - Math.exp(-4 * c)), Ta(ia + 48 * c), d);
    na = D(na, h[9].i, 1 - Math.exp(-(0.2 + 0.3 * Math.abs(2 * h[9].i - 1)) * c));
    ma = D(ma, la ? D(ma, -9, 1 - Math.exp(-1.5 * c)) : u(a / 3), 1 - Math.exp(-1 * c));
    qa && a > qa && (qa = 0, h4.innerHTML = "");
    h[0].l && 0.8 < h[0].g && (13 > ca
      ? (1 / 0 > qa && (qa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0)
      : la
        || (1 / 0 > qa && (qa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          la = 1));
    for (const b of e) {
      b.h && (b.j = b.h());
    }
    for (const b of h) {
      b.h();
    }
    for (const b of Aa) {
      b.h();
    }
  },
  sb = () => {
    h3.innerHTML = "Souls: "
      + [
        0,
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "XIII",
      ][ca = Aa.reduce((d, { l: b }) => d + b, 0)] + " / XIII";
  },
  tb = () => {
    localStorage.I = JSON.stringify([h.map(({ l: d }) => d), Aa.map(({ l: d }) => d), ea, a, na]);
  },
  R = (d, b = 1) => {
    const g = ta;
    b = { j: m, H: e.length, G: b, s: [] };
    return e.push(ta = b), d(b), ta = g, b;
  },
  U = (d, b = m, g) => ta.s.push(...J(d, b, g)),
  ub = d => {
    const b = ta,
      g = h.length,
      l = {
        l: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const n = l.l, k = l.g, t = l.i, x = b.j.multiply(d);
          l.J = x;
          3 > Va(x.transformPoint()) && Ba[5] && (0.3 > k || 0.7 < k)
            && (l.l = n ? 0 : 1, g && 1 / 0 > qa && (qa = a + 1, h4.innerHTML = "* click *"), ea = g, tb());
          l.g = D(k, n, 1 - Math.exp(-4 * c));
          l.i = D(t, n, 1 - Math.exp(-1 * c));
          l.j = x.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    h.push(l);
    U(K(5), d.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    U(K(5), d.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    U(K(), d.translate(0, -0.4).scale(0.5, 0.1, 0.5), X(0.5, 0.5, 0.4));
  },
  vb = (d, ...b) => {
    let g = -1, l = 0, n = 0, k = 0, t = 0, x = 0, w = 1, y = 3;
    const B = {
        l: 0,
        h() {
          if (!B.l) {
            let ua = 1, xa = 1 / 0, Ca, O, C, A, E, G, P;
            for (const M of f) {
              var { x: Q, z: I, w: S } = M;
              I = (Q = Math.hypot(q - Q, v - I)) - S;
              P ||= Q < S;
              0 < I && xa > I && (xa = I, p = M);
              var T = Q / S;
              ua = ua < T ? ua : T;
            }
            P
              || ({ x: Ca, z: O, w: C } = p,
                A = q - Ca,
                E = v - O,
                G = Math.hypot(A, E),
                aa = Math.atan2(-E, A),
                w && (n = (Math.random() - 0.5) * Math.PI / 2, y = u(y / (1 + Math.random()))),
                aa += n,
                g = -Math.cos(aa),
                l = Math.sin(aa),
                0.1 < G && (G = (G < C ? G : C) / (G || 1), q = A * G + Ca, v = E * G + O));
            w = P;
            y = D(y, 6 * (1 - ua) + 3, 1 - Math.exp(-(ua + 3) * c));
            T = q = D(q, q + g, 1 - Math.exp(-y * c));
            z = D(z, T, 1 - Math.exp(-y * c));
            T = v = D(v, v + l, 1 - Math.exp(-y * c));
            H = D(H, T, 1 - Math.exp(-y * c));
            k = Ua(k, Math.atan2(z - t, H - x) / Ma - 180, 3 * c);
            t = z;
            x = H;
            var aa = (B.j = F.j.multiply(d.translate(z, 0, H).rotateSelf(0, k, 7 * Math.sin(1.7 * a))))
              .transformPoint();
            1.55 > Va(aa)
              && (B.l = 1,
                T = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
                  "Andrzej Mazur<br>for the js13k competition",
                  "Donald Trump<br>lies",
                  "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                  "Maxime Euziere<br>forced me to finish this game",
                  "She traded NFTs apes",
                  ,
                  "Vladimir Putin<br>evil war",
                  "He was not a good person",
                  ,
                  "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
                ][ca] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > qa && (qa = a + (ca && 12 > ca ? 5 : 7), h4.innerHTML = T),
                sb(),
                tb());
          }
          B.l
            && (B.j = e[2].j.translate(
              L % 4 * 1.2 - 1.7 + Math.sin(a + L) / 7,
              -2,
              1.7 * (L / 4 | 0) - 5.5 + Math.abs(L % 4 - 2) + Math.cos(a / 1.5 + L) / 6,
            ));
        },
      },
      F = ta,
      L = Aa.length,
      f = b.map(([Q, I, S]) => ({ x: Q, z: I, w: S }));
    let p = f[0], { x: q, z: v } = p, z = q, H = v;
    Aa.push(B);
  },
  wb = (d, b, g, l) => {
    let n = 0, k = 0, t = 0, x = 1 / 0, w = -1 / 0, y = 1 / 0, B = -1 / 0, F = 1 / 0, L = -1 / 0;
    const f = 1.1 * (g - b),
      p = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(d).invertSelf();
    return b = r(
      8,
      q => (q = p.transformPoint({ x: 4 & q ? 1 : -1, y: 2 & q ? 1 : -1, z: 1 & q ? 1 : -1 }),
        n -= q.x = (f * q.x | 0) / f / q.w,
        k -= q.y = (f * q.y | 0) / f / q.w,
        t -= q.z = (f * q.z | 0) / f / q.w,
        q),
    ),
      g = m.rotate(298, 139).translateSelf(n / 8, k / 8, t / 8),
      cb(b, g).map(({ x: q, y: v, z }) => {
        x = x < q ? x : q;
        w = q < w ? w : q;
        y = y < v ? y : v;
        B = v < B ? B : v;
        F = F < z ? F : z;
        L = z < L ? L : z;
      }),
      F *= 0 > F ? l : 1 / l,
      L *= 0 < L ? l : 1 / l,
      m.scale(2 / (w - x), 2 / (B - y), 2 / (F - L)).translateSelf((w + x) / -2, (B + y) / -2, (F + L) / 2)
        .multiplySelf(g);
  },
  zb = () => {
    let d = !0, b, g, l, n, k, t, x, w, y, B, F, L;
    const f = () => {
        ra || !d ? xb.disconnect() : xb.connect(yb.destination);
        b4.innerHTML = "Music: " + d;
      },
      p = (q = !1) => {
        if (ra !== q) {
          ra = q;
          try {
            q
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : xb.start();
          } catch {
          }
          va = 0;
          document.body.className = q ? "l m" : "l";
          f();
          sb();
        }
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.I = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      p();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      p();
      va = 1;
    };
    b4.onclick = () => {
      d = !d;
      f();
    };
    b5.onclick = () => p(!0);
    onclick = q => {
      L = 1;
      ra || (q.target === hC && (Ba[5] = !0), va && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: q, target: v, type: z, repeat: H }) => {
      H || ((H = !!z[5] && v === document.body) && ("Escape" === q || "Enter" === q && ra)
        ? ra && !L || p(!ra)
        : 5
            === (z = {
              KeyA: 0,
              ArrowLeft: 0,
              KeyW: 1,
              ArrowUp: 1,
              KeyD: 2,
              ArrowRight: 2,
              KeyS: 3,
              ArrowDown: 3,
              KeyE: 5,
              Space: 5,
              Enter: 5,
            }[q])
        ? H && (Ba[z] = 1)
        : Ba[z] = H);
    };
    onmousemove = ({ movementX: q, movementY: v }) => {
      va && (q || v) && (Ka += 0.1 * q, Ja += 0.1 * v);
    };
    hC.ontouchstart = q => {
      if (!ra) {
        for (let { pageX: v, pageY: z, identifier: H } of q.changedTouches) {
          va && v > hC.clientWidth / 2
            ? void 0 === w && (y = 0, t = v, x = z, w = H, B = Ka, F = Ja)
            : void 0 === n && (k = 0, g = v, l = z, n = H);
        }
        b = da;
      }
    };
    hC.ontouchmove = q => {
      if (!ra) {
        for (let { pageX: S, pageY: T, identifier: aa } of q.changedTouches) {
          var v, z, H, Q, I;
          w === aa && (Ka = B + (S - t) / 2.3, Ja = F + (T - x) / 2.3, y = 1);
          n === aa
            && (aa = (g - S) / 20,
              v = (l - T) / 20,
              z = Math.abs(aa),
              H = Math.abs(v),
              Q = Math.atan2(v, aa),
              I = u(Math.hypot(v, aa) - 0.5),
              oa = 0.2 < z ? Math.cos(Q) * I : 0,
              pa = 0.2 < H ? Math.sin(Q) * I : 0,
              (oa || pa) && (k = 1),
              2 < z && (g = S + 20 * Math.sign(aa)),
              2 < H && (l = T + 20 * Math.sign(v)));
        }
      }
    };
    hC.ontouchend = q => {
      let v;
      q.preventDefault();
      for (const z of q.changedTouches) {
        z.identifier === w
          ? (w = void 0, y || (v = 1), y = 0)
          : z.identifier === n
          ? (n = void 0, pa = oa = 0, k || (v = 1), k = 0)
          : v = 1;
      }
      v && q.target === hC && b && 0.02 < (q = da - b) && 0.7 > q && (Ba[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Ba.length = oa = pa = 0;
      n = w = void 0;
      document.hidden && p(!0);
    })();
    p(!0);
  },
  Ab = () => {
    let d = 0, b = 0, g = 1, l = 2, n = 2, k, t, x, w, y, B, F, L, f, p, q, v, z, H, Q;
    const I = new Int32Array(256),
      S = new Uint8Array(65536),
      T = (O, C, A) => g ? C : D(O + Math.sign(C - O) * Qa(0, Math.abs(C - O) ** 0.9 - A) * c * 2, C, c / 7),
      aa = () => {
        v = q = 0;
        for (let O = 32; 128 > O; O += 2) {
          let C = 0, A = 0, E = 0, G = 0;
          const P = 512 * O;
          for (let M = 1 & O; 128 > M; M += 2) {
            const ba = P + 4 * M;
            let Y = P + 4 * (127 - M);
            const fa = S[ba] / 255, ka = S[1 + Y] / 255, Wa = 1 - Math.abs(M / 63.5 - 1);
            10 < M && 118 > M
              && (C = Qa(Qa(fa * Wa, fa * S[Y] / 255), C), A = Qa(Qa(ka * Wa, ka * S[1 + ba] / 255), A));
            (54 > M || 74 < M) && 1e-3 < (Y = (1 - Wa) * (ka < fa ? fa : ka) / 3)
              && (64 > M && Y > E ? E = Y : 64 < M && Y > G && (G = Y));
          }
          Math.abs(G - E) > Math.abs(q) && (q = G - E);
          Math.abs(A - C) > Math.abs(v) && (v = A - C);
        }
      },
      ua = () => {
        let O = 0, C = 0, A = 0, E = 0;
        y = 0;
        I.fill(0);
        for (let P = 0; 31 > P; ++P) {
          let M = 0;
          const ba = 512 * P;
          for (let Y = 0; 128 > Y; Y++) {
            var G = ba + 4 * Y;
            let fa = (S[G] + S[1 + G]) / 255;
            G = S[2 + G];
            14 < Y && 114 > Y && (M += fa);
            G && fa && (fa = I[G] + 1, I[G] = fa, O > fa || (O = fa, C = G));
          }
          3 > M && 5 < P && (E += P / 32);
          3 < M && (7 < P && (A += P / 15), y = 1);
        }
        C && (y = 1);
        l = D(l, y ? 6.5 : 8, 1 - Math.exp(-4 * c));
        La.y += A / 41 - (y || l) * E / 41 * l * c;
        t = C || x;
        x = C;
      },
      xa = () => n ? h[ea].u.j : w && 1 === e[w].G && e[w].j || m,
      Ca = () => {
        let O = xa();
        var { x: C, y: A, z: E } = 1 < n
          ? h[ea].J.transformPoint({ x: 0, y: ea || 0.9 < ma ? 15 : 1, z: -2.4 })
          : ((C = (E = O).inverse()).m41 = 0,
            C.m42 = 0,
            C.m43 = 0,
            A = C.transformPoint({ x: q, z: v, w: 0 }),
            La.x += A.x,
            La.z += A.z,
            E.transformPoint(La));
        let G = C - Ha.x, P = E - Ha.z;
        if (n = n && (y && t ? 0 : 1), Ha.x = C, Ha.y = A, Ha.z = E, n || t !== w) {
          w = t;
          const ba = (O = xa()).inverse().transformPoint(Ha);
          La.x = ba.x;
          La.y = ba.y;
          La.z = ba.z;
        }
        A < (-25 > C || 109 > E ? -25 : -9) && (n = 2);
        t && (L = G / c, f = P / c);
        1 === t && (h[9].l = -15 > C && 0 > E ? 1 : 0);
        p = D(D(p, A, 1 - Math.exp(-2 * c)), A, n || 8 * Math.abs(p - A));
        H = T(H, p, 3);
        z = T(z, C, 2);
        Q = T(Q, E, 2);
        va
          ? (O = n + (1 - Math.exp(-18 * c)),
            Ia.x = D(Ia.x, C, O),
            Ia.y = D(Ia.y, p + 1.5, O),
            Ia.z = D(Ia.z, E, O),
            Ka = Ta(Ka))
          : (G = g + (1 - Math.exp(-2 * c)),
            Ia.x = D(Ia.x, z, G),
            Ia.y = D(Ia.y, Qa(H + u((-60 - E) / 8, 0, 20) + 13, 6), G),
            Ia.z = D(Ia.z, Q + -18, G),
            P = z - Ia.x,
            A = -Math.abs(Q - Ia.z),
            G = g + (1 - Math.exp(-4 * c)),
            Ja = Ua(Ja, 90 - Math.atan2(Math.hypot(A, P), Ia.y - H) / Ma, G),
            Ka = Ua(Ka, 90 - Ta(Math.atan2(A, P) / Ma), G));
        Ja = u(Ja, -87, 87);
        g = 0;
        const M = e[37].j = m.translate(C, p, E).rotateSelf(0, b = Ua(b, d, 8 * c));
        [38, 39].map((ba, Y) => {
          e[ba].j = M.translate(0, B * u(0.45 * Math.sin(9.1 * a + Math.PI * (Y - 1) - Math.PI / 2))).rotateSelf(
            B * Math.sin(9.1 * a + Math.PI * (Y - 1)) * 0.25 / Ma,
            0,
          );
        });
      };
    wa = () => {
      var O = oa + (Ba[0] ? 1 : 0) - (Ba[2] ? 1 : 0), C = pa + (Ba[1] ? 1 : 0) - (Ba[3] ? 1 : 0);
      if (E = navigator.getGamepads()[0]) {
        const G = E.buttons, P = E.axes;
        E = (A = M => G[M]?.pressed || 0 < G[M]?.value ? 1 : 0)(3) || A(2) || A(1) || A(0);
        O += A(14) - A(15) - Ra(P[0], 0.2);
        C += A(12) - A(13) - Ra(P[1], 0.2);
        va && (Ja += 80 * Ra(P[3], 0.3) * c, Ka += 80 * Ra(P[2], 0.3) * c);
        E && !k && (Ba[5] = 1);
        k = E;
      }
      var A = Math.atan2(C, O), E = Ra(u(Math.hypot(C, O)), 0.05);
      O =
        (Z.fa7(),
          Z.r9r(0, 0, 128, 128, 6408, 5121, S),
          Z.iay(36008, [36064, 36096]),
          Z.iay(36009, [36064, 36096]),
          NO_INLINE(aa)(),
          NO_INLINE(ua)(),
          va ? Ka * Ma : Math.PI);
      C = u(1 - 5 * Qa(Math.abs(q), Math.abs(v)));
      F = D(F, y * C * u(2 * E) * 7, 1 - Math.exp(-(y ? 0.1 < C ? 10 : 5 + 2 * E : 1) * c));
      L = D(L, 0, 1 - Math.exp(-(y ? 8 : 4) * c));
      q += c * ((t ? 0 : C * L) - Math.cos(A + O) * E * F);
      f = D(f, 0, 1 - Math.exp(-(y ? 8 : 4) * c));
      v += c * ((t ? 0 : C * f) - Math.sin(A + O) * E * F);
      B = D(B, E, 1 - Math.exp(-10 * c));
      E && (d = 90 - A / Ma);
      NO_INLINE(Ca)();
    };
  },
  Fb = (d, b = 35633) => (b = Z.c6x(b), Z.s3c(b, d), Z.c6a(b), b),
  Gb = (d, b) => {
    const g = {}, l = Z.c1h();
    return Z.abz(l, d), Z.abz(l, Fb(b, 35632)), Z.l8l(l), n => n ? g[n] || (g[n] = Z.gan(l, n)) : Z.u7y(l);
  },
  Hb = (d, b, g, l) => {
    if (ra) {
      g = m.rotate(0, 40 * Math.sin(da) - 70);
      for (var n of [37, 38, 39]) {
        $a(g, Pa, n - 1);
      }
      Z.uae(d, !1, Pa);
      Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      for (n = 0; e.length > n; ++n) {
        e[n].G && $a(e[n].j, Pa, n - 1);
      }
      Z.uae(d, !1, Pa);
      Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        $a(Aa[b].j, Pa, b);
      }
      for (b = 0; h.length > b; ++b) {
        $a(h[b].j, Pa, b + 13), l || (Pa[16 * (b + 13) + 15] = 1 - h[b].g);
      }
      Z.uae(d, !1, Pa);
      Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13);
      Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
  },
  Ib = d => {
    h4.innerHTML += ".";
    setTimeout(d);
  },
  Jb = d => Math.sin(d * Math.PI * 2),
  Kb = d => 0.5 > d % 1 ? 1 : -1,
  Lb = d => d % 1 * 2 - 1,
  Mb = d => 2 > (d = d % 1 * 4) ? d - 1 : 3 - d,
  Rb = d => {
    let b = 0;
    const g = new Int32Array(10725888),
      l = () => {
        const k = yb.createBuffer(2, 5362944, 44100);
        for (let t = 0; 2 > t; t++) {
          for (let x = t, w = k.getChannelData(t); 10725888 > x; x += 2) {
            w[x >> 1] = g[x] / 65536;
          }
        }
        xb.buffer = k;
        xb.loop = !0;
        Ib(d);
      },
      n = () => {
        let k = 0;
        const t = A => {
            let E = 0, G = 0, P, M, ba, Y;
            const fa = [],
              ka = new Int32Array(768 * A),
              Wa = 2 ** (Q - 9) / A,
              Nb = Math.PI * 2 ** (ua - 8) / A,
              mb = Ca * A & -2;
            for (let gb = 0; 11 >= gb; ++gb) {
              for (
                let hb = 0,
                  Bb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + gb],
                  Cb = (32 * gb + hb) * A;
                32 > hb;
                ++hb
              ) {
                for (let ya = 0; 4 > ya; ++ya) {
                  if (M = 0, Bb && (M = x[Bb - 1].charCodeAt(hb + 32 * ya) - 40, M += 0 < M ? 106 : 0), M) {
                    var Na;
                    if (!(Na = fa[M])) {
                      Na = M;
                      let V = void 0, W = void 0;
                      var Db = M;
                      let Xa = 0, Ob = 0;
                      const Pb = 2 > b ? Lb : Jb, Qb = 2 > b ? 1 > b ? Kb : Mb : Jb, Eb = new Int32Array(q + v + C);
                      for (let Da = 0, nb = 0; q + v + C > Da; ++Da, ++nb) {
                        let Ea = 1;
                        q > Da ? Ea = Da / q : q + v > Da || (Ea = (1 - (Ea = (Da - q - v) / C)) * 3 ** (H / -16 * Ea));
                        0 > nb
                          || (W = 396e-5 * 2 ** ((Db + y - 256) / 12),
                            V = 396e-5 * 2 ** ((Db + L - 256) / 12) * (b ? 1 : 1.0072),
                            nb -= 4 * A);
                        Eb[Da] = 80
                          * (Pb(Xa += W * Ea ** (B / 32)) * w + Qb(Ob += V * Ea ** (f / 32)) * F
                            + (p ? (2 * Math.random() - 1) * p : 0))
                          * Ea;
                      }
                      Na = fa[Na] = Eb;
                    }
                    for (let V = 0, W = 2 * Cb; Na.length > V; ++V, W += 2) {
                      ka[W] += Na[V];
                    }
                  }
                }
                for (let ya, V, W, Xa = 0; A > Xa; ++Xa) {
                  W = 2 * (Cb + Xa),
                    ya = 0,
                    ((V = ka[W]) || Y)
                    && (ba = 308e-5 * I,
                      1 !== b && 4 !== b || (ba *= Math.sin(Wa * W * Math.PI * 2) * O / 512 + 0.5),
                      ba = 1.5 * Math.sin(ba),
                      E += ba * G,
                      P = (1 - S / 255) * (V - G) - E,
                      G += ba * P,
                      V = 4 === b ? G : 3 === b ? P : E,
                      b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5),
                      V *= T / 32,
                      Y = 1e-5 < V * V,
                      P = Math.sin(Nb * W) * aa / 512 + 0.5,
                      ya = V * (1 - P),
                      V *= P),
                    W < mb || (ya += ka[1 + W - mb] * xa
                      / 255,
                      V += ka[W - mb] * xa / 255),
                    g[k + W] += ka[W] = ya,
                    ++W,
                    g[k + W] += ka[W] = V;
                }
              }
            }
            k += 768 * A;
          },
          x = Fa[b],
          [w, y, B, F, L, f, p, q, v, z, H, Q, I, S, T, aa, ua, xa, Ca, O] = Ga[b],
          C = 4 * z ** 2;
        t(5513);
        t(4562);
        t(3891);
        Ib(5 > ++b ? n : l);
      };
    Ib(n);
  },
  Sb = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  X = NO_INLINE((d, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * d),
  yb = new AudioContext(),
  xb = yb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const d in Z) {
  Z[d[0] + [...d].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[d];
}
Ib(() => {
  let d = 0;
  const b = () => {
      if (2 == ++d) {
        const l = p => {
            let q, v;
            Z.f1s();
            requestAnimationFrame(l);
            I = (p - (sa || p)) / 1e3;
            ra ? (c = 0, Ba[5] = 0) : c = 0.066 < I ? 0.066 : I;
            a += c;
            da += I;
            sa = p;
            0 < c && (rb(), wa(), Ba[5] = 0);
            let { x: z, y: H, z: Q } = Ia;
            ra && (z = -4.5, H = 2, Q = 3.2 - u(hC.clientWidth / 1e3));
            var I = (ra ? m.rotate(-20, -90) : m.rotate(-Ja, -Ka)).invertSelf().translateSelf(-z, -H, -Q);
            0 < c
              && ({ x: p, y: q, z: v } = Ha,
                w(),
                Z.b6o(36160, L),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(w("b"), !1, $a(m.rotate(0, 180).invertSelf().translateSelf(-p, -q, 0.3 - v))),
                Hb(w("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(w("b"), !1, $a(m.translate(-p, -q, -v - 0.3))),
                Hb(w("c"), 0, 41, 0),
                Z.f1s());
            t();
            Z.b6o(36160, F);
            Z.v5y(0, 0, 2048, 2048);
            B[0](wb(I, 0.3, 55, 10));
            B[1](wb(I, 55, 186, 11));
            y();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            B[0]();
            B[1]();
            Z.uae(y("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
            Z.uae(y("b"), !1, $a(I));
            Z.ubu(y("k"), z, H, Q);
            Hb(y("c"), !va, 42, 0);
            x();
            Z.ubu(x("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, da);
            Z.ubu(x("k"), z, H, Q);
            Z.uae(x("b"), !1, $a(I.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, L);
            Z.f1s();
          },
          n = g;
        let k = Fb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const t = Gb(
            Fb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          x = Gb(
            Fb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          w = Gb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          y = Gb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          B = r(2, p => {
            const q = new Float32Array(16), v = Z.c25();
            return Z.a4v(33984 + p),
              Z.b9j(3553, v),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              z => {
                z
                  ? ($a(z, q),
                    Z.uae(t("b"), !1, q),
                    Z.fas(36160, 36096, 3553, v, 0),
                    Z.c4s(256),
                    Hb(t("c"), !va, 42, 1))
                  : Z.uae(y(p ? "j" : "i"), !1, q);
              };
          }),
          F = Z.c5w(),
          L = (k = Z.c3z(), Z.c5w()),
          f = Z.c25();
        w();
        Z.uae(w("a"), !1, ab(1.4, 0.59, 1e-4, 1));
        y();
        Z.ubh(y("q"), 2);
        Z.ubh(y("h"), 1);
        Z.ubh(y("g"), 0);
        x();
        Z.ubh(x("q"), 2);
        Z.b6o(36160, F);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, L);
        Z.bb1(36161, k);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, k);
        Z.a4v(33986);
        Z.b9j(3553, f);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, f, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        rb();
        NO_INLINE(Ab)();
        NO_INLINE(zb)();
        requestAnimationFrame(l);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = Sb;
  NO_INLINE(Rb)(() => {
    Ib(() => {
      let k = 0, t;
      const x = [],
        w = [],
        y = [],
        B = [],
        F = new Int32Array(8),
        L = new Map(),
        f = v => {
          let { x: z, y: H, z: Q } = t[v], I = (q[0] = z, q[1] = H, q[2] = Q, v = "" + (t.D ? p : F), L.get(v));
          return void 0 !== I
            ? (z = 3 * I, B[z] = (B[z++] + F[5]) / 2, B[z] = (B[z++] + F[6]) / 2, B[z] = (B[z] + F[7]) / 2)
            : (L.set(v, I = L.size), w.push(z, H, Q, q[3]), y.push(F[4]), B.push(F[5], F[6], F[7])),
            I;
        },
        p = new Int32Array(F.buffer, 0, 5),
        q = new Float32Array(F.buffer);
      for (const v of e) {
        for (t of (q[3] = 40 === v.H ? -14 : v.G && v.H, v.s)) {
          const { x: z, y: H, z: Q } = Za(t);
          F[4] = 0 | t.A;
          F[5] = 32767 * z;
          F[6] = 32767 * H;
          F[7] = 32767 * Q;
          for (let I = 2, S = f(0), T = f(1); t.length > I; ++I) {
            x.push(S, T, T = f(I));
          }
        }
        v.s = null;
        v.v = k;
        v.F = k = x.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(w), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(y), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(x), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ib(b);
      try {
        const [v, z, H, Q, I] = JSON.parse(localStorage.I);
        h.map((S, T) => S.g = S.i = S.l = T ? 0 | v[T] : 0);
        Aa.map((S, T) => S.l = 0 | z[T]);
        ea = H;
        a = Q;
        na = I;
      } catch {
      }
      ma = u(ea);
    });
    const l = r(
        11,
        k => m.translate(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),
      ),
      n = r(10, k => eb(cb(db(18), l[k]).reverse(), cb(db(18), l[k + 1]), 1)).flat();
    R(() => U([za.slice(1)], m.translate(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const k = (f, p, q) =>
          R(v => {
            v.h = () => m.translate(w() * Math.sin(3 * f + a * f) * p);
            za.map(({ x: z, z: H }) => {
              U(K(11, 1), m.translate(4 * z, 4, q + 4 * H).scale(0.8, 3, 0.8), X(0.5, 0.3, 0.7, 0.6));
              U(K(), m.translate(4 * z, 7, q + 4 * H).scale(1, 0.3), X(0.5, 0.5, 0.5, 0.3));
            });
            U(N(
              J(K(), m.translate(0, 0, q).scale(5, 1, 5), X(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(z =>
                J(K(), m.translate(5 * z, 0.2, q).rotate(-30 * z).scale(4, 1, 2), X(0.8, 0.8, 0.8, 0.3))
              ),
            ));
            U(K(), m.translate(0, -3, q).scale(8, 2, 8), X(0.4, 0.4, 0.4, 0.3));
          }),
        t = (f, p, q) =>
          m.translate(f + Math.sin(a + 2) / 5, p + Math.sin(0.8 * a) / 3, q).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        x = f =>
          N(
            J(K(), m.translate(0, -f / 2).scale(6, f - 1, 2.2)),
            J(K(), m.translate(0, -f / 2 - 6).scale(4, f - 3, 4)),
            J(K(32, 1), m.translate(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => {
          var f = h[2].i, p = 1 - h[4].i;
          return f < p ? f : p;
        },
        y = N(
          J(K(20, 1, 1.15, 1), m.translate(0, -3).scale(3.5, 1, 3.5), X(0.7, 0.4, 0.25, 0.7)),
          J(K(20, 1, 1.3, 1), m.translate(0, -2.5).scale(2.6, 1, 3), X(0.7, 0.4, 0.25, 0.2)),
          J(K(), m.translate(4, -1.2).scale3d(2), X(0.7, 0.4, 0.25, 0.3)),
        ),
        B = r(7, f => J(K(6, 1), m.translate(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), X(0.3, 0.3, 0.38))).flat(),
        F = (R(f => {
          f.h = () => t(-12, 4.2, 40 * ma - 66);
          U(y);
          ub(m.translate(0, -3, 4));
        }),
          ub(m.translate(-5.4, 1.5, -19).rotate(0, -90)),
          vb(m.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          vb(
            m.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...db(18).map(({ x: f, z: p }) => [7 * f, 10 * p, 4.5 - 2 * Math.abs(f)]),
          ),
          U(K(), m.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
          za.map(({ x: f, z: p }) => U(K(6), m.translate(3 * f, 3, 15 * p).scale(0.7, 4, 0.7), X(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(f => U(K(), m.translate(0, 0, f).scale(3, 1, 8), X(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((f, p) => {
            U(K(), m.translate(0, 6.3, f).scale(4, 0.3, 1), X(0.3, 0.3, 0.3, 0.4));
            U(K(), m.translate(0, 1, f).scale(3, 0.2, 0.35), X(0.5, 0.5, 0.5, 0.3));
            R(q => {
              q.h = () => m.translate(0, 0, f).scale(1, u(1.22 - h[p + 1].g), 1);
              U(B);
            });
          }),
          r(5, f =>
            r(2, p =>
              U(
                n,
                m.translate(18.5 * (p - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2),
                X(1, 1, 0.8, 0.2),
              ))),
          U(K(), m.translate(3, 1.5, -20).scale(0.5, 2, 5), X(0.7, 0.7, 0.7, 0.2)),
          U(K(), m.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(0.75, 0.75, 0.75, 0.2)),
          U(K(5), m.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(0.6, 0.3, 0.3, 0.4)),
          U(K(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), X(0.8, 0.2, 0.2, 0.5)),
          U(N(
            qb(
              J(K(6, 0, 0, 0.3), m.translate(8, -3, -4).scale(13, 1, 13), X(0.7, 0.7, 0.7, 0.2)),
              J(K(6), m.translate(0, -8).scale(9, 8, 8), X(0.4, 0.2, 0.5, 0.5)),
              J(K(6, 0, 0, 0.3), m.translate(0, -0.92).scale(13, 2, 13), X(0.8, 0.8, 0.8, 0.2)),
            ),
            J(K(5), m.scale(5, 30, 5), X(0.4, 0.2, 0.6, 0.5)),
            J(K(5, 0, 1.5), m.translate(0, 1).scale(4.5, 0.3, 4.5), X(0.7, 0.5, 0.9, 0.2)),
            J(K(), m.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), X(0.5, 0.5, 0.5, 0.5)),
            J(K(6), m.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(0.5, 0.5, 0.5, 0.5)),
          )),
          R(f => {
            f.h = () =>
              m.translate(
                0,
                0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500,
                0,
              );
            U(K(5), m.translate(0, -0.2).scale(5, 1, 5), X(0.6, 0.65, 0.7, 0.3));
            ub(m.translate(0, 1.2));
          }),
          ub(m.translate(15, -2, 4)),
          k(0.7, 12, 35),
          k(1, 8.2, 55),
          R(f => {
            f.h = () => m.translate(w() * Math.sin(a / 1.5 + 2) * 12);
            U(
              N(
                qb(
                  J(K(), m.scale(1.5, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  J(K(6), m.scale(4, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  J(K(), m.translate(0, -2).scale(2, 3.2, 1.9), X(0.3, 0.8, 0.5, 0.5)),
                  J(K(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), X(0.9, 0.9, 0.9, 0.2)),
                ),
                J(K(), m.scale(1.3, 10, 1.3), X(0.2, 0.7, 0.4, 0.6)),
              ),
              m.translate(0, 0, 45),
            );
            vb(m.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          U(K(), m.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
          R(f => {
            f.h = () => m.translate(9.8 * (1 - w()));
            U(K(3), m.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), X(0.3, 0.6, 0.6, 0.2));
            U(K(8), m.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(0.8, 0.8, 0.8, 0.2));
            U(K(), m.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(0.5, 0.5, 0.5, 0.3));
            U(K(), m.translate(-23, -2.2, 62).scale(3, 1, 4), X(0.5, 0.5, 0.5, 0.3));
            ub(m.translate(-23, -0.5, 66.5));
          }),
          R(f => {
            f.h = () => m.translate(0, u(1 - 5 * w()) * Sa(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
            U(K(), m.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(0.7, 0.7, 0.7, 0.2));
            U(
              N(J(K(), m.scale(3, 1.4, 2.7)), J(K(), m.scale(1.2, 8, 1.2))),
              m.translate(-33, -3, 55),
              X(0.7, 0.7, 0.7, 0.2),
            );
          }),
          R(f => {
            f.h = () => m.translate(0, 0, u(1 - 5 * w()) * Sa(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
            U(N(
              J(K(), m.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
              J(K(), m.translate(-27, -3, 55).scale(1, 3), X(0.9, 0.9, 0.9, 0.2)),
            ));
            U(K(), m.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2));
          }),
          R(f => {
            f.h = () => m.translate(0, -6.5 * h[4].i);
            U(K(6), m.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), X(0.7, 0.7, 0.7, 0.4));
          }),
          ub(m.translate(-55, -1.1, 46).rotate(0, 90)),
          U(K(6), m.translate(-61.3, -2.4, 49).scale(3, 1, 5), X(0.4, 0.6, 0.6, 0.3)),
          U(K(7), m.translate(-57, -2.6, 46).scale(4, 1, 4), X(0.8, 0.8, 0.8, 0.3)),
          [
            ...J(K(), m.translate(0, -3).scale(11, 1.4, 3), X(0.9, 0.9, 0.9, 0.2)),
            ...N(
              J(K(6), m.rotate(90).scale(6, 8, 6), X(0.3, 0.6, 0.6, 0.3)),
              J(K(4, 0, 0.01), m.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), X(0.3, 0.6, 0.6, 0.3)),
              J(K(6), m.rotate(90).scale(5, 12, 5), X(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f =>
                J(K(5), m.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(0.3, 0.6, 0.6, 0.3))
              ),
            ),
          ]),
        L = (U(F, m.translate(-53, 0, 55)),
          R(f => {
            f.h = () => m.translate(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ja, 0);
            U(F);
          }, 2),
          U(K(), m.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), X(0.7, 0.7, 0.7, 0.2)),
          U(K(3, 0, -0.5), m.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), X(0.8, 0.8, 0.8, 0.2)),
          U(N(
            qb(
              J(K(), m.translate(-100, -2.5, 55).scale(8, 1, 8), X(0.8, 0.8, 0.8, 0.2)),
              J(K(), m.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
              J(K(), m.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(0.8, 0.8, 0.8, 0.2)),
              J(K(), m.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), X(0.8, 0.8, 0.8, 0.2)),
              J(K(6), m.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(0.6, 0.6, 0.6, 0.3)),
              J(K(), m.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(0.8, 0.8, 0.8, 0.2)),
              J(K(), m.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), X(0.8, 0.8, 0.8, 0.2)),
            ),
            J(K(8), m.translate(-100, -1, 55).scale(7, 0.9, 7), X(0.3, 0.3, 0.3, 0.4)),
            J(K(8), m.translate(-100, -2, 55).scale(4, 0.3, 4), X(0.4, 0.4, 0.4, 0.5)),
            J(K(8), m.translate(-100, -3, 55).scale(0.6, 1, 0.6), X(0.4, 0.4, 0.4, 0.5)),
          )),
          vb(m.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          vb(m.translate(-89, 0.2, 80), [0, 0, 6]),
          U(N(
            J(K(), m.translate(-100, 1, 63).scale(7.5, 4), X(0.5, 0.5, 0.5, 0.4)),
            J(K(), m.translate(-100, 0, 70).scale(2, 2, 10), X(0.5, 0.5, 0.5, 0.4)),
            J(K(20, 1), m.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(0.5, 0.5, 0.5, 0.4)),
          )),
          R(f => {
            f.h = () => m.translate(-99.7, -1.9, 63.5).scale(1, u(1.1 - h[6].g), 1);
            U(B);
          }),
          za.map(({ x: f, z: p }) => {
            U(K(6), m.translate(7 * f - 100, -3, 7 * p + 55).scale(1, 8.1), X(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(q =>
              U(K(6), m.translate(7 * f - 100, q, 7 * p + 55).scale(1.3, 0.5, 1.3), X(0.4, 0.2, 0.2, 0.8))
            );
          }),
          r(7, f => {
            U(
              K((23 * f + 1) % 5 + 5, 0, 0.55),
              m.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(
                5 + f / 2,
                1 + f / 6,
                5 + f / 3,
              ),
              X(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          U(K(), m.translate(-87, -9.5, 24).scale(7, 1, 3), X(0.4, 0.5, 0.6, 0.4)),
          U(K(4), m.translate(-86, -9.2, 27).scale(5, 1, 5), X(0.5, 0.6, 0.7, 0.3)),
          U(K(12, 1), m.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(0.3, 0.3, 0.4, 0.1)),
          ub(m.translate(-86, -7.5, 31)),
          R(f => {
            f.h = () => m.translate(0, 3.5 * (1 - Qa(h[6].g, h[7].g)) + Sa(h[7].i, h[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(p =>
              U(K(), m.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.2, 0.5, 0.6, 0.2))
            );
          }),
          R(f => {
            f.h = () =>
              m.translate(0, Sa(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Sa(h[7].i, h[6].i));
            [6, 18].map(p => U(K(), m.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.1, 0.4, 0.5, 0.2)));
          }),
          U(
            N(
              qb(
                J(K(5), m.translate(0, 0, -7).scale(2, 1.2, 2), X(0.2, 0.4, 0.7, 0.3)),
                J(K(5), m.scale(9, 1.2, 9), X(0, 0.2, 0.3, 0.5)),
                J(K(), m.scale(11, 1, 13), X(0.3, 0.4, 0.6, 0.3)),
              ),
              J(K(5), m.scale(5.4, 5, 5.4), X(0, 0.2, 0.3, 0.5)),
            ),
            m.translate(-38.9, -11.3, 17),
          ),
          ub(m.translate(-38.9, -9.6, 10)),
          R(f => {
            f.h = () => m.translate(0, -7.3 * h[7].i);
            U(
              N(
                qb(
                  J(K(5), m.translate(0, 2).scale(5, 7, 5).skewY(8), X(0.2, 0.4, 0.5, 0.5)),
                  J(K(5), m.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(0.25, 0.35, 0.5, 0.5)),
                  J(K(5), m.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), X(0.35, 0.3, 0.5, 0.5)),
                ),
                J(K(5), m.scale(4, 8, 4), X(0.2, 0.4, 0.5, 0.5)),
                J(K(5), m.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(0.2, 0.4, 0.5, 0.5)),
              ),
              m.translate(-38.9, -11.3, 17),
            );
            vb(m.translate(-39.1, -0.6, 17).rotate(11), ...db(15).map(({ x: p, z: q }) => [3 * p, 3 * q, 1.2]));
          }),
          za.map(({ x: f, z: p }) => {
            U(K(14, 1), m.translate(9 * f - 38.9, -7.3, 11 * p + 17).scale(1, 4), X(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(q =>
              U(
                K(17, 1),
                m.translate(9 * f - 38.9, -7.3, 11 * p + 17).translate(0, q - 4).scale(1.5, 0.5, 1.5),
                X(0.6, 0.6, 0.6, 0.3),
              )
            );
          }),
          U(
            N(
              qb(
                J(K(6), m.translate(0, 0, -36).scale(15, 1.2, 15), X(0.7, 0.7, 0.7, 0.3)),
                J(K(), m.translate(0, 0, -18).scale(4, 1.2, 6), X(0.45, 0.4, 0.6, 0.3)),
              ),
              ...r(6, f =>
                r(6, p =>
                  J(
                    K(6),
                    m.translate(4.6 * p - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * p)).scale(2, 5, 2),
                    X(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            m.translate(-38.9, -11.3, 17),
          ),
          vb(m.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          U(K(5), m.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), X(0.8, 0.1, 0.25, 0.4)),
          ub(m.translate(-84, -0.5, 85).rotate(0, 45)),
          R(f => {
            f.h = () => t(-123, 1.4, 55 + -65 * na);
            U(y);
            ub(m.translate(0, -3, -4).rotate(0, 180));
          }),
          N(
            J(K(), m.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(0.25, 0.25, 0.35, 0.3)),
            J(K(3), m.translate(0, 0, -5.5).scale(3, 2), X(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => J(K(), m.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), X(0.7, 0.2, 0, 0.3))),
          ));
      R(f => {
        f.h = () => m.translate(0, -2, Sa(h[10].g, h[11].g) * Math.abs(Math.sin(1.1 * a)) * -8.5 + 10);
        r(2, p => U(L, m.translate(9 * p - 110 + (1 & p), 1.7, -12)));
      });
      R(f => {
        f.h = () => m.translate(0, -2, Sa(h[10].g, h[11].g) * Math.abs(Math.sin(2.1 * a)) * -8.5 + 10);
        r(2, p => U(L, m.translate(9 * (p + 2) - 110 + (1 & p), 1.7, -12)));
      });
      R(f => {
        f.h = () =>
          m.translate(
            0,
            -2,
            -8.5 * Qa((1 - h[10].g) * (1 - Sa(h[10].g, h[11].g)), Sa(h[10].g, h[11].g) * Math.abs(Math.sin(1.5 * a)))
              + 10,
          );
        r(3, p => U(L, m.translate(9 * p - 106, 1.7, -12)));
      });
      U(
        N(
          qb(
            J(K(), m.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
            J(K(), m.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),
          ),
          ...r(4, f => J(K(), m.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...r(3, f => J(K(), m.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        m.translate(-123, 0, -12),
        X(0.5, 0.5, 0.6, 0.2),
      );
      ub(m.translate(-116, -1.4, -18).rotate(0, 180));
      U(K(), m.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(0.8, 0.8, 0.8, 0.2));
      U(K(6), m.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), X(0.6, 0.5, 0.7, 0.2));
      U(K(), m.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), X(0.6, 0.6, 0.6, 0.3));
      U(K(8), m.translate(-114, -17, -2).scale(2, 15, 2), X(0.6, 0.6, 0.6, 0.3));
      U(K(8), m.translate(-79, -17, -2).scale(2, 15, 2), X(1, 1, 1, 0.3));
      U(K(), m.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), X(0.6, 0.6, 0.6, 0.3));
      r(3, f => {
        U(x(16), m.translate(12 * f - 109, -9, -12), X(0.6, 0.6, 0.6, 0.3));
        U(x(16), m.translate(-77, -9, -12 * f - 20).rotate(0, 90), X(0.6, 0.6, 0.6, 0.3));
      });
      U(N(
        J(K(12), m.translate(-77, -14.5, -12).scale(4, 17.5, 4), X(0.7, 0.7, 0.7, 0.2)),
        J(K(), m.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), X(0.4, 0.5, 0.6, 0.2)),
        J(K(), m.translate(-77, 0.1, -14).scale(1.5, 2, 2), X(0.4, 0.5, 0.6, 0.2)),
        J(K(12), m.translate(-77, 3.1, -12).scale(3, 5, 3), X(0.4, 0.5, 0.6, 0.2)),
      ));
      U(K(), m.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), X(0.6, 0.6, 0.6, 0.3));
      U(K(9), m.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), X(0.5, 0.5, 0.5, 0.3));
      U(N(
        J(K(), m.translate(-93, -5.8, -40).scale(9, 1, 5), X(0.8, 0.8, 0.8, 0.1)),
        J(K(9), m.translate(-98, -5.8, -40).scale(3, 8, 3), X(0.7, 0.7, 0.7, 0.2)),
      ));
      ub(m.translate(-98, -4.4, -40).rotate(0, 90));
      vb(m.translate(-115, 0.2, -12), [0, 0, 3.5]);
      vb(m.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      U(N(
        qb(
          J(K(6, 0, 0, 0.6), m.translate(-100, 0.7, 105.5).scale(8, 1, 11), X(0.7, 0.7, 0.7, 0.2)),
          J(K(), m.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), X(0.7, 0.7, 0.7, 0.2)),
        ),
        J(K(5), m.translate(-100, 0.7, 113).scale(4, 3, 4), X(0.7, 0.7, 0.7, 0.2)),
      ));
      r(4, f =>
        R(p => {
          p.h = () => {
            const q = Sa(h[8].i, h[12].i);
            return m.translate(
              (2 < f ? 2 * (1 - q) + q : 0) - 100,
              q * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + (0.05 < q ? q : 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          U(
            K(6),
            m.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            X(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      R(f => {
        f.h = () => {
          const p = Sa(h[8].i, h[12].i);
          return m.translate(2.5 * (1 - p) - 139.7, -3 * (1 - h[8].g) + p * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
            .rotateSelf(Math.cos(1.3 * a) * (3 * p + 3), 0);
        };
        U(N(J(K(10), m.scale(6, 2, 6), X(0.1, 0.6, 0.5, 0.3)), J(K(10), m.scale(3.3, 6, 3.3), X(0.1, 0.6, 0.5, 0.5))));
        U(K(15, 1), m.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), X(0.4, 0.4, 0.4, 0.3));
        U(K(10), m.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), X(0.3, 0.8, 0.7, 0.3));
        U(K(5), m.translate(-7.5).rotate(0, 90).scale(1, 3), X(0.5, 0.5, 0.5, 0.5));
        ub(m.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(p =>
          U(n, m.rotate(90 * -p, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), X(1, 1, 0.8, 0.2))
        );
        vb(m.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        U(K(12, 1), m.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), X(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(p =>
          U(K(15, 1), m.translate(-7.5 * f - 100, p + 0.7, 96).scale(1.1, 0.5, 1.1), X(0.5, 0.24, 0.2, 0.4))
        );
        U(n, m.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), X(1, 1, 0.8));
        U(
          N(
            J(K(), m.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), X(0.5, 0.5, 0.5, 0.4)),
            J(K(), m.scale(3, 3, 10), X(0.6, 0.24, 0.2, 0.5)),
            J(K(28, 1), m.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(0.6, 0.24, 0.2, 0.5)),
            J(K(5), m.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(0.6, 0.24, 0.2, 0.5)),
            J(K(5), m.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), X(0.6, 0.24, 0.2, 0.5)),
          ),
          m.translate(f - 100, 0.7, 97),
        );
      });
      R(f => {
        f.h = () => m.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        U(B);
      });
      U(N(
        J(K(), m.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), X(0.7, 0.7, 0.7, 0.1)),
        J(K(45, 1), m.translate(-81, 0.7, 106).scale3d(7.7), X(0.7, 0.7, 0.7, 0.1)),
      ));
      R(f => {
        f.h = () => m.translate(-81, 0.6, 106).rotate(0, 40 + ha);
        U(N(
          J(K(45, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),
          J(K(), m.translate(0, 0, -5.5).scale(1.5, 3, 2.7), X(0.45, 0.45, 0.45, 0.2)),
        ));
        U(K(8), m.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), X(0.7, 0.7, 0.7, 0.1));
        U(K(5), m.translate(0, 2).scale(1, 2), X(0.3, 0.3, 0.3, 0.2));
        vb(m.translate(0, 3), ...db(14).map(({ x: p, z: q }) => [5.6 * p, 5.6 * q, 2]));
      });
      R(f => {
        f.h = () => m.translate(-65.8, 0.8, 106).rotate(0, ia);
        [-1, 1].map(p =>
          U(n, m.rotate(0, 90).translate(-5 * p, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * p + 90), X(1, 1, 0.8))
        );
        U(N(
          J(K(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3)),
          J(K(), m.scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
        ));
        U(J(K(28, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)));
        U(J(K(5), m.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)));
      });
      R(f => {
        f.h = () => m.translate(-50.7, 0.8, 106).rotate(0, 180 - ia);
        U(N(
          J(K(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3)),
          J(K(), m.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
          J(K(), m.translate(0, 0, 7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
        ));
        U(J(K(28, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)));
        U(J(K(5), m.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)));
      });
      R(f => {
        f.h = () => m.translate(-50.7, 0.8, 91).rotate(0, 270 + ia);
        U(N(
          J(K(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3)),
          J(K(), m.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
          J(K(), m.translate(0, 0, -7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
        ));
        U(J(K(28, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)));
        U(J(K(5), m.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)));
      });
      U(K(), m.translate(-58, 1, 106).scale(2, 0.65, 2), X(0.7, 0.7, 0.7, 0.2));
      U(K(), m.translate(-50.7, 1, 99).scale(2, 0.65, 1), X(0.7, 0.7, 0.7, 0.2));
      U(K(), m.translate(-42, 0.4, 91).scale(5, 1, 2.5), X(0.7, 0.7, 0.7, 0.3));
      U(K(), m.translate(-34.2, 0.4, 91).scale(3, 1, 3), X(0.7, 0.7, 0.7, 0.3));
      ub(m.translate(-34, 2.7, 96).rotate(-12, 0));
      U(K(5), m.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), X(0.2, 0.5, 0.5, 0.6));
      [X(0.1, 0.55, 0.45, 0.2), X(0.2, 0.5, 0.5, 0.3), X(0.3, 0.45, 0.55, 0.4)].map((f, p) =>
        R(q => {
          q.h = () =>
            m.translate(
              0,
              (1 - h[13].i) * (1 - h[14].i) * (p ? 0 : 3) + Sa(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * p) * 4,
            );
          U(K(), m.translate(-23.5, 0.5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), f);
          2 === p && U(K(), m.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), X(0.7, 0.7, 0.7, 0.3));
          1 === p
            && U(K(), m.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), X(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => U(n, m.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), X(1, 1, 0.8)));
      r(
        3,
        f =>
          U(
            x(24.7 - 0.7 * (1 & f)),
            m.translate(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? X(0.5, 0.5, 0.5, 0.3) : X(0.35, 0.35, 0.35, 0.5),
          ),
      );
      U(N(
        J(K(6, 0, 0, 0.3), m.translate(0, -0.92, 95).scale(14, 2, 14), X(0.8, 0.8, 0.8, 0.2)),
        J(K(5), m.translate(0, 0, 95).scale3d(6), X(0.3, 0.3, 0.3, 0.5)),
      ));
      ub(m.translate(0, 1.7, 82).rotate(0, 180));
      U(K(5), m.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(0.5, 0.3, 0.3, 0.4));
      U(K(6), m.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(0.5, 0.6, 0.7, 0.3));
      U(K(), m.translate(0, 16, 129).scale(1.5, 1, 2), X(0.5, 0.6, 0.7, 0.3));
      U(K(7), m.translate(0, 16.2, 133).scale(5, 1, 5), X(0.4, 0.5, 0.6, 0.4));
      U(N(
        qb(
          J(K(), m.translate(0, 16, 110.5).scale(12, 1, 3), X(0.5, 0.3, 0.3, 0.4)),
          J(K(), m.translate(0, 16, 111).scale(3, 1, 3.8), X(0.5, 0.3, 0.3, 0.4)),
        ),
        J(K(5), m.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(0.5, 0.3, 0.3, 0.4)),
      ));
      R(f => {
        f.h = () => {
          const p = Math.sin(a);
          return m.translate(-2 * p).rotate(25 * p);
        };
        U(K(3), m.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), X(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(p => {
          U(K(6), m.translate(0, 16, p + 95).scale(3, 1, 2.3).rotate(0, 90), X(0.7, 0.7, 0.7, 0.4));
          U(K(), m.translate(0, 6.2, p + 95).scale(0.5, 11, 0.5), X(0.5, 0.3, 0.3, 0.4));
        });
      });
      R(f => {
        f.h = () => {
          const p = Sa(Sa((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          return m.translate(0, 16 * p, 8.5 * u(2 * p - 1) + 95);
        };
        U(K(5), m.scale(5, 1.1, 5), X(0.5, 0.3, 0.3, 0.4));
        U(K(5), m.scale(5.5, 0.9, 5.5), X(0.25, 0.25, 0.25, 0.4));
        ub(m.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(m.translate(0, 3, 95), ...db(9).map(({ x: f, z: p }) => [9 * f, 9 * p, 4]));
      vb(m.translate(0, 19, 134), [0, 0, 3.5]);
    });
    R(() => {
      [0, 180].map(t => U(n, m.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), X(1, 1, 0.8)));
      U(fb(20), m.translate(0, 1).scale(0.5, 0.5, 0.5), X(1, 0.3, 0.4));
      const k = J(
        N(K(15, 1), J(K(), m.translate(0, 0, 1).scale(2, 2, 0.5))),
        m.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        X(0.3, 0.3, 0.3),
      );
      [-1, 1].map(t => U(k, m.translate(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      U(K(), m.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), X(0.3, 0.3, 0.3));
      U(fb(20), m.scale(0.7, 0.8, 0.55), X(1, 0.3, 0.4));
    });
    [-1, 1].map(k =>
      R(() => {
        U(K(10, 1), m.translate(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), X(1, 0.3, 0.4));
      })
    );
    R(() => {
      U(K(6, 1), m.scale(0.13, 1.4, 0.13), X(0.3, 0.3, 0.5, 0.1));
      U(K(10), m.translate(0, 1).scale(0.21, 0.3, 0.21), X(1, 0.5, 0.2));
      U(K(3), m.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), X(0.2, 0.2, 0.2, 0.1));
    }, 0);
    R(() => {
      U(K(6).slice(0, -1), m.scale(0.77, 1, 0.77), X(1, 0.3, 0.5));
    }, 0);
    R(() => {
      U(
        fb(30, 24, (k, t, x) => {
          const w = t / 24, y = k * Math.PI * 2 / 30, B = w ** 0.6 * Math.PI / 2;
          k = w * w * Math.sin(k * Math.PI * 14 / 30) / 4;
          return 23 === t
            ? { x: x.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(y) * Math.sin(B),
              y: Math.cos(w * Math.PI) - w - k,
              z: Math.sin(y) * Math.sin(B) + Math.sin(k * Math.PI * 2) / 4,
            };
        }),
        m.scale3d(0.7),
        X(1, 1, 1),
      );
      [-1, 1].map(k => U(fb(12), m.translate(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
