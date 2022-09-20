let lt = !0,
  H = 0,
  Q = 0,
  rt = 0,
  B = 0,
  S = 0,
  x = 0,
  st = 0,
  y = 0,
  Y = 0,
  z = 0,
  T = 0,
  nt = 0,
  ot = 0,
  O = .066,
  w = Math.PI / 180,
  R = new DOMMatrix(),
  L = (t, e) => e < t ? t : e,
  ct = t => t < 0 ? -t : t,
  X = t => t < 0 ? 0 : 1 < t ? 1 : t,
  f = (t, e) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (e < 0 ? 0 : 1 < e ? 1 : e),
  it = t => Math.atan2(Math.sin(t *= w), Math.cos(t)) / w,
  ht = (t, e, a) =>
    ((t *= w) + (2 * (e = (e * w - t) % (2 * Math.PI)) % (2 * Math.PI) - e) * (a < 0 ? 0 : 1 < a ? 1 : a)) / w,
  ft = (t, e, a, l) => {
    let r = e - t;
    return (t += Math.sign(e - t) * L(0, (r < 0 ? -r : r) ** .9 - a) * l * 2) + (e - t) * X(l / 7);
  },
  q = (t, a) => Array.from(Array(t), (t, e) => a(e)),
  mt = (t, e, a, l) => [t, 0, 0, 0, 0, e, 0, 0, 0, 0, (l + a) / (a - l), -1, 0, 0, 2 * l * a / (a - l), 0],
  i = ({ x: t, y: e, z: a }, l) => t * l.x + e * l.y + a * l.z,
  k = ({ x: t, y: e, z: a }) => Math.hypot(t - $.x, e - $.y, a - $.z) || 0,
  ut = t => {
    let e = 0, a = 0, l = 0, r, s = t.at(-1);
    for (r of t) e += (s.y - r.y) * (s.z + r.z), a += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(e, a, l), e /= r, a /= r, l /= r, { x: e, y: a, z: l, w: e * s.x + a * s.y + l * s.z };
  },
  l = new Float32Array(16),
  W = (
    t,
    e = l,
    a = 0,
  ) => (a *= 16,
    e[a++] = t.m11,
    e[a++] = t.m12,
    e[a++] = t.m13,
    e[a++] = t.m14,
    e[a++] = t.m21,
    e[a++] = t.m22,
    e[a++] = t.m23,
    e[a++] = t.m24,
    e[a++] = t.m31,
    e[a++] = t.m32,
    e[a++] = t.m33,
    e[a++] = t.m34,
    e[a++] = t.m41,
    e[a++] = t.m42,
    e[a++] = t.m43,
    e[a] = t.m44,
    e),
  N = -11,
  E = 17,
  U = -90,
  K = 0,
  G = 0,
  h = (t, e, a) => (t.D = a, t.A = e, t),
  j = (t, l, e = t.A) =>
    h(
      t.map(t => {
        let e, a;
        return { x: t, y: e, z: a } = t,
          { x: t, y: e, z: a } = l.transformPoint({ x: t, y: e, z: a }),
          { x: t, y: e, z: a };
      }),
      e,
      t.D,
    ),
  m = (t, e, a) => t.map(t => j(t, e, a)),
  C = (a, l = 0) =>
    q(a, t => {
      let e = Math.cos(2 * Math.PI * t / a);
      return { x: Math.sin(2 * Math.PI * t / a), y: 0, z: (e < 0 ? -e : e) < .01 ? e : e < 0 ? e - l : e + l };
    }),
  s = (l, r, s) => l.map((t, e, { length: a }) => h([t, r[a - e - 1], r[a - (e + 1) % a - 1], l[(e + 1) % a]], l.A, s)),
  u = (
    t,
    e,
    a = 0,
    l,
  ) => (l = t.length ? t : C(t, l),
    t = j(l, R.translate(0, 1).scale3d(0 < a ? a : 1)),
    a = j(l, R.translate(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...s(a, t, e), t, a]),
  F = (
    l,
    r = l,
    s = (
      t,
      e,
    ) => (e *= Math.PI / r,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(e), y: Math.cos(e), z: Math.sin(t) * Math.sin(e) }),
  ) => {
    let n = [];
    for (let a = 0; l > a; a++) {
      for (let e = 0; r > e; e++) {
        let t = h([], 0, 1);
        n.push(t),
          t.push(s(a, e, t)),
          e && t.push(s((a + 1) % l, e, t)),
          r - 1 > e && t.push(s((a + 1) % l, e + 1 % r, t)),
          t.push(s(a, e + 1 % r, t));
      }
    }
    return n;
  },
  xt = (t, e, a, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (a - e),
      x = new DOMMatrix(mt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, a)).multiplySelf(t).invertSelf();
    return t = q(
      8,
      t => (t = x.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (u * t.x | 0) / u / t.w,
        s -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      e = R.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      j(t, e).map(({ x: t, y: e, z: a }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = e > i ? i : e,
          h = h > e ? h : e,
          f = a > f ? f : a,
          m = m > a ? m : a;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      R.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(e);
  },
  V = [],
  g = (t, e = R, a) => St.s.push(...m(t, e, a)),
  M = (t, e = 1) => {
    let a = St;
    return V.push(St = e = { l: R, F: V.length, H: e, s: [] }), t(e), St = a, e;
  },
  gt = (t, e = 35633) => (e = at.c6x(e), at.s3c(e, t), at.c6a(e), e),
  yt = (t, e) => {
    let a = {}, l = at.c1h();
    return at.abz(l, t), at.abz(l, gt(e, 35632)), at.l8l(l), t => t ? a[t] || (a[t] = at.gan(l, t)) : at.u7y(l);
  },
  Mt = t => Math.sin(t * Math.PI * 2),
  J = [],
  zt = () => {
    tt || !lt ? Ht.disconnect() : Ht.connect(Dt.destination), b4.innerHTML = "Music: " + lt;
  },
  vt = (t = !1) => {
    if (tt !== t) {
      tt = t, et = 0;
      try {
        t ? document.exitPointerLock() : Ht.start();
      } catch {}
      document.body.className = t ? "l m" : "l", zt();
    }
  },
  _ = (t, e, a) => t + (e - t) * X(1 - Math.exp(-a * O)),
  t = ({ j: t }) => t,
  Z = [],
  pt = [],
  dt = () => {
    let t = f(Z[12].g, Z[13].g), e = (B > x && (h4.innerHTML = "", x = 0), _(z, 0, 1));
    z = e + (it(z + 60 * O) - e) * X(Z[5].g - Z[6].i),
      e = _(y, 0, 5),
      y = e + (it(y + 56 * O) - e) * (t < 0 ? 0 : 1 < t ? 1 : t),
      e = _(Y, 0, 4),
      Y = e + (it(Y + 48 * O) - e) * (t < 0 ? 0 : 1 < t ? 1 : t),
      t = 2 * Z[9].i - 1,
      ot = _(ot, Z[9].i, .2 + .3 * (t < 0 ? -t : t)),
      nt = _(nt, T ? nt + (-9 - nt) * X(1.5 * O) : X(B / 3), 1),
      Z[0].j && .7 < Z[0].g && (S < 13
        ? (T || (h4.innerHTML = "Not leaving now, there are souls to catch!", x = B + 3), Z[0].j = 0)
        : T || (T || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", x = B + 1 / 0), T = 1));
    for (let t of V) t.h && (t.l = t.h(t));
    for (let t of Z) t.h();
    for (let t of pt) t.h();
  },
  bt = () => {
    S = pt.reduce((t, e) => t + e.j, 0),
      h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][S];
  },
  D = () => {
    bt(), localStorage.DanteSP22 = JSON.stringify([Z.map(t), pt.map(t), st, B, ot]);
  },
  c = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((o = i(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
        n = [], o = [], c = r.C, t = r.B;
        let e = c.at(-1), a = i(l, e) - l.w;
        for (let t of c) {
          s = i(l, t) - l.w,
            a < 8e-5 && o.push(e),
            -8e-5 < a && n.push(e),
            (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
            && (a /= s - a,
              e = { x: e.x + (e.x - t.x) * a, y: e.y + (e.y - t.y) * a, z: e.z + (e.z - t.z) * a },
              n.push(e),
              o.push(e)),
            e = t,
            a = s;
        }
        return {
          o: 2 < n.length && { C: h(n, c.A, c.D), B: t, u: r },
          m: 2 < o.length && { C: h(o, c.A, c.D), B: t, u: r },
        };
      }
    }
    return { o: s, m: n };
  },
  n = (a, l, r = ut(l.C)) => {
    if (a) {
      let { o: t, m: e } = c(a, l);
      t || e || a.s.push(l), t && (a.o = n(a.o, t, r)), e && (a.m = n(a.m, e, r));
    } else a = { x: r.x, y: r.y, z: r.z, w: r.w, s: [l], o: 0, m: 0 };
    return a;
  },
  a = (e, r, s) => {
    let n = [],
      o = (t, e) => {
        let { o: a, m: l } = c(t, e);
        a || l || (0 < s * i(t, r) ? a = e : l = e), a && (t.o ? o(t.o, a) : n.push(a)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(e, t);
    return n;
  },
  o = (t, e) => t && (e(t), o(t.o, e), o(t.m, e)),
  wt = t => t.length ? t.reduce((t, e) => n(t, { C: e, B: 0, u: 0 }), 0) : t,
  It = t => (o(t, e => {
    let t = e.m;
    e.m = e.o, e.o = t, e.x *= -1, e.y *= -1, e.z *= -1, e.w *= -1;
    for (let t of e.s) t.B = !t.B;
  }),
    t),
  v = (...t) =>
    t.reduce((l, e) => {
      let r = [];
      if (l = wt(l), e) {
        e = wt(e), o(l, t => t.s = a(e, t, 1)), o(e, t => r.push([t, a(l, t, -1)]));
        for (let [e, a] of r) for (let t of a) n(l, t, e);
      }
      return l;
    }),
  p = (t, ...e) => It(v(It(wt(t)), ...e)),
  d = t => {
    let a = new Map(),
      l = new Map(),
      r = e => {
        if (e.u) {
          let t = a.get(e.u);
          t ? (l.delete(t), e = r(e.u)) : a.set(e.u, e);
        }
        return e;
      };
    return o(t, e => {
      for (let t of e.s) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, e]) => {
        let a = t.map(({ x: t, y: e, z: a }) => ({ x: t, y: e, z: a }));
        return h(e ? a.reverse() : a, t.A, t.D);
      });
  },
  $ = { x: 0, y: 0, z: 0 },
  b = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  I = r => {
    let s = St,
      n = Z.length,
      o = {
        j: 0,
        g: 0,
        i: 0,
        u: s,
        h() {
          let t = o.j, e = o.g, a = o.i, l = s.l.multiply(r);
          o.I = l,
            k(l.transformPoint()) < 2.9 && J[5] && (e < .3 || .7 < e)
            && (o.j = t ? 0 : 1, n && !T && (h4.innerHTML = "* click *", x = B + 1), st = n, D()),
            o.g = _(e, t, 4),
            o.i = _(a, t, 1),
            o.l = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    Z.push(o),
      g(u(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
      g(u(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
      g(u(b), r.translate(0, -.4).scale(.5, .1, .5), P(.5, .5, .4));
  },
  A = (o, ...t) => {
    let c = -1,
      i = 0,
      h = 0,
      f = 0,
      m = 0,
      u = 0,
      g = 3,
      M = 1,
      v = {
        j: 0,
        h() {
          if (!v.j) {
            var e = 1;
            let a = 1 / 0, l, t;
            for (l of d) {
              var r = l.w, s = Math.hypot(b - l.x, I - l.z), n = s - r;
              t ||= s < r, 0 < n && a > n && (a = n, z = l), e = e < (r = s / r) ? e : r;
            }
            if (!t) {
              r = z.w;
              let t = Math.hypot(s = b - (a = z.x), n = I - (l = z.z)), e = Math.atan2(-n, s);
              M && (h = (Math.random() - .5) * Math.PI / 2, g = L(1, g / (1 + Math.random()))),
                e += h,
                c = -Math.cos(e),
                i = Math.sin(e),
                .1 < t && (t = (t < r ? t : r) / (t || 1), b = s * t + a, I = n * t + l);
            }
            M = t,
              g = _(g, 3 + 6 * (1 - e), 3 + e),
              A = _(A, b = _(b, b + c, g), g),
              P = _(P, I = _(I, I + i, g), g),
              f = ht(f, Math.atan2(A - m, P - u) / w - 180, 3 * O),
              m = A,
              u = P,
              e = (v.l = p.l.multiply(o.translate(A, 0, P).rotateSelf(0, f, 7 * Math.sin(1.7 * B)))).transformPoint(),
              k(e) < 1.5
              && (v.j = 1,
                e = [
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
                ][S] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                t = S && S < 12 ? 5 : 7,
                T || (h4.innerHTML = e, x = B + t),
                D());
          }
          v.j
            && (e = y % 4 - 2,
              v.l = V[2].l.translate(
                y % 4 * 1.2 - 1.7 + Math.sin(B + y) / 7,
                -2,
                1.7 * (y / 4 | 0) - 5.5 + (e < 0 ? -e : e) + Math.cos(B / 1.5 + y) / 6,
              ));
        },
      },
      p = St,
      y = pt.length,
      d = t.map(([t, e, a]) => ({ x: t, z: e, w: a })),
      z = d[0],
      { x: b, z: I } = z,
      A = b,
      P = I;
    pt.push(v);
  },
  r = new Float32Array(624),
  At = (t, a, e) => {
    if (e = e ? jt : kt, tt) {
      for (var { F: l } of (e = R.rotate(0, 40 * Math.sin(rt) - 70), Ct)) W(e, r, l - 1);
      at.uae(t, !1, r), at.d97(4, Ct[2].G - Ct[0].v, 5123, 2 * Ct[0].v);
    } else {
      for (l = 0; V.length > l; ++l) {
        let { H: t, F: e, l: a } = V[l];
        t && W(a, r, e - 1);
      }
      for (at.uae(t, !1, r), at.d97(4, (a ? Ct[2].G : Ct[0].v) - 3, 5123, 6), a = 0; Z.length > a; ++a) {
        let { l: t, g: e } = Z[a];
        W(t, r, a), r[16 * a + 15] = 1 - e;
      }
      for (at.uae(t, !1, r), at.das(4, Tt.G - Tt.v, 5123, 2 * Tt.v, Z.length), a = 0; a < 13; ++a) W(pt[a].l, r, a);
      at.uae(t, !1, r), at.das(4, e.G - e.v, 5123, 2 * e.v, 13);
    }
  },
  Pt = new Int32Array(10725888),
  P = (t, e, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * e << 8 | 255 * t,
  St,
  tt,
  et,
  Yt,
  Tt,
  kt,
  jt,
  Ct,
  Ft = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  at = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in at) at[t[0] + [...t].reduce((t, e, a) => (t * a + e.charCodeAt(0)) % 434, 0).toString(36)] = at[t];
let Dt = new AudioContext(), Ht = Dt.createBufferSource();
setTimeout(() => {
  let e = 0,
    t = 6,
    a = () => {
      if (h4.innerHTML += ".", !--t) {
        let i = 0,
          h = 0,
          f = 1,
          m = 0,
          u = 0,
          g = 0,
          M = !1,
          v = { x: 0, y: 0, z: 0 },
          p = new Int32Array(256),
          a = () => {
            let { u: t, I: e } = Z[st], { x: a, y: l, z: r } = e.transformPoint({ x: 0, y: 8, z: -3 });
            $.x = v.x = a,
              $.y = v.y = y = l,
              $.z = v.z = r,
              I =
                Y =
                S =
                A =
                P =
                  0,
              f = 1,
              i = h = t?.F || 1;
          },
          l = t => {
            requestAnimationFrame(l);
            let e = (t - (Yt || t)) / 1e3;
            0 < O
            && (n(),
              at.b6o(36160, c),
              at.v5y(0, 0, 128, 128),
              at.c4s(16640),
              at.cbf(!0, !1, !0, !1),
              at.uae(n("b"), !1, W(R.rotate(0, 180).invertSelf().translateSelf(-$.x, -$.y, .3 - $.z))),
              At(n("c"), 0, 1),
              at.c4s(256),
              at.cbf(!1, !0, !0, !1),
              at.uae(n("b"), !1, W(R.translate(-$.x, -$.y, -$.z - .3))),
              At(n("c"), 0, 1),
              1 === h && (Z[9].j = $.x < -15 && $.z < 0 ? 1 : 0),
              at.r9r(0, 0, 128, 128, 6408, 5121, d),
              at.cbf(!0, !0, !0, !0)),
              s(),
              at.v5y(0, 0, 2048, 2048),
              F[1](
                (O = tt ? J[5] = 0 : .066 < e ? .066 : e,
                  B += O,
                  rt += e,
                  Yt = t,
                  0 < O && ((() => {
                    z = T = 0,
                      (() => {
                        let s = 0, n = 0, e = 0, a = 0, o = 0;
                        p.fill(0);
                        for (let t = 0; t < 31; ++t) {
                          let l = 0, r = 512 * t;
                          for (let a = 0; a < 128; a++) {
                            let t = r + 4 * a, e = (d[t] + d[1 + t]) / 255;
                            t = d[2 + t],
                              14 < a && a < 114 && (l += e),
                              t && e && (e = p[t] + 1, p[t] = e, s > e || (s = e, n = t));
                          }
                          l < 3 && 5 < t && (a += t / 32), 3 < l && (7 < t && (e += t / 15), o = 1);
                        }
                        n && (o = 1),
                          f ? n && (f = 0, h = n) : h = n || i,
                          i = n,
                          I = o,
                          A = _(A, o ? 6.5 : 8, 4),
                          v.y += e / 41 - (o ? 1 : A) * a / 41 * A * O;
                      })(),
                      (() => {
                        for (let t = 32; t < 128; t += 2) {
                          let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                          for (let s = 1 & t; s < 128; s += 2) {
                            let t = h + 4 * s,
                              e = h + 4 * (127 - s),
                              a = d[t] / 255,
                              l = d[1 + e] / 255,
                              r = s / 63.5 - 1;
                            r = 1 - (r < 0 ? -r : r),
                              10 < s && s < 118
                              && (n = L(n, L(a * r, a * d[e] / 127.5)), o = L(o, L(l * r, l * d[1 + t] / 255))),
                              (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < a ? a : l) / 3)
                              && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                          }
                          c = i - c,
                            n = o - n,
                            (c < 0 ? -c : c) > (T < 0 ? -T : T) && (T = c),
                            (n < 0 ? -n : n) > (z < 0 ? -z : z) && (z = n);
                        }
                      })();
                    let t = (J[0] ? 1 : 0) + (J[2] ? -1 : 0) + H,
                      a = (J[1] ? 1 : 0) + (J[3] ? -1 : 0) + Q,
                      l = navigator.getGamepads()[0];
                    if (l) {
                      var r = t => e[t]?.pressed || 0 < e[t]?.value;
                      let e = l.buttons;
                      l = l.axes;
                      var s = r(1) || r(3) || r(2) || r(0);
                      s !== M && (M = s) && (J[5] = 1),
                        t += (.2 < ct(-l[0]) ? -l[0] : 0) + (r(14) ? 1 : 0) + (r(15) ? -1 : 0),
                        a += (.2 < ct(-l[1]) ? -l[1] : 0) + (r(12) ? 1 : 0) + (r(13) ? -1 : 0),
                        et && (.3 < ct(l[2]) && (G += 80 * l[2] * O), .3 < ct(l[3]) && (K += 80 * l[3] * O));
                    }
                    (a < 0 ? -a : a) < .05 && (a = 0),
                      (t < 0 ? -t : t) < .05 && (t = 0),
                      r = Math.atan2(a, t),
                      l = X(Math.hypot(a, t)),
                      t = l * Math.cos(r),
                      a = l * Math.sin(r),
                      s = X(1 - 5 * L(T < 0 ? -T : T, z < 0 ? -z : z)),
                      h || (T += S * s * O, z += Y * s * O),
                      S = _(S, 0, I ? 8 : 4),
                      Y = _(Y, 0, I ? 8 : 4),
                      P = _(P, I ? (t || a ? I ? 7 : 4 : 0) * s : 0, I ? .1 < s ? 10 : t || a ? 5 : 7 : 1);
                    let e = et ? G * w : Math.PI;
                    if (
                      s = Math.sin(e) * P * O,
                        e = Math.cos(e) * P * O,
                        T -= t * e - a * s,
                        z -= t * s + a * e,
                        (e = (s = 1 === V[h].H && V[h].l || R).inverse()).m41 = 0,
                        e.m42 = 0,
                        e.m43 = 0,
                        { x: T, z } = e.transformPoint({ x: T, z: z, w: 0 }),
                        v.x += T,
                        v.z += z,
                        h !== b
                    ) {
                      b = h;
                      let { x: t, y: e, z: a } = s.inverse().transformPoint($);
                      v.x = t, v.y = e, v.z = a;
                    }
                    e = $.x;
                    let x = $.z, { x: n, y: o, z: c } = s.transformPoint(v);
                    $.x = n,
                      $.y = o,
                      $.z = c,
                      s = ct(y - o),
                      y = _(y, o + .1, 50 * s + 5),
                      h && (S = ($.x - e) / O, Y = ($.z - x) / O),
                      (t || a) && (m = 90 - r / w),
                      u = ht(u, m, 8 * O),
                      g += (l - g) * X(10 * O),
                      k = ft(k, $.x, .5, O),
                      j = ft(j, $.y, 2, O),
                      C = ft(C, $.z, .5, O),
                      et
                        ? (t = 200 * f,
                          N = _(N, $.x, 18 + t),
                          E = _(E, $.y + 1.5, 15 + t),
                          U = _(U, $.z, 18 + t),
                          K = L(K < 87 ? K : 87, -87))
                        : (N = ft(N, k, 1, 2 * O),
                          E = ft(E, j + 13 + 15 * f, 4, 2 * O),
                          U = ft(U, C + -18, 1, 2 * O),
                          1 < ((t = U - C) < 0 ? -t : t)
                          && (a = N - k,
                            r = E - j,
                            G = 270 + Math.atan2(t, a) / w,
                            K = 90 - Math.atan2(Math.hypot(t, a), r) / w)),
                      G = it(G);
                  })(),
                    dt(),
                    ($.x < -25 || $.z < 109 ? -25 : -9) > $.y && a(),
                    J[5] = 0),
                  t = tt
                    ? R.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + X(hC.clientWidth / 1e3))
                    : R.rotate(-K, -G, -0).invertSelf().translateSelf(-N, -E, -U),
                  e = xt(t, .3, 55, 10),
                  xt(t, 55, 177, 11)),
              ),
              F[0](e),
              at.b6o(36160, null),
              o(),
              at.v5y(0, 0, at.drawingBufferWidth, at.drawingBufferHeight),
              at.c4s(16640),
              F[1](),
              F[0](),
              at.uae(o("a"), !1, mt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              at.uae(o("b"), !1, W(t)),
              at.ubu(o("k"), N, E, U),
              At(o("c"), !et, 0),
              r(),
              at.ubu(r("j"), at.drawingBufferWidth, at.drawingBufferHeight, rt),
              tt ? at.ubu(r("k"), 0, 0, 0) : at.ubu(r("k"), N, E, U),
              at.uae(r("b"), !1, W(t.inverse())),
              at.d97(4, 3, 5123, 0);
          },
          d = new Uint8Array(65536),
          b,
          I,
          A,
          P,
          S,
          Y,
          y,
          T,
          z,
          k,
          j,
          C,
          t = ((() => {
            let e = 0,
              l = [],
              s = [],
              n = [],
              o = [],
              c = new Map(),
              i = new Int32Array(8),
              r = t => {
                let { x: e, y: a, z: l } = h[t], r = (m[0] = e, m[1] = a, m[2] = l, c.get(t = "" + (h.D ? f : i)));
                return void 0 !== r
                  ? (e = 3 * r, o[e] = (o[e++] + i[5]) / 2, o[e] = (o[e++] + i[6]) / 2, o[e] = (o[e] + i[7]) / 2)
                  : (c.set(t, r = c.size), s.push(e, a, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
                  r;
              },
              h,
              f = new Int32Array(i.buffer, 0, 5),
              m = new Float32Array(i.buffer);
            for (let t of V) {
              for (h of (m[3] = t.H ? t.F : 0, t.s)) {
                let { x: t, y: e, z: a } = ut(h);
                i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * e, i[7] = 32767 * a;
                for (let t = 2, e = r(0), a = r(1); h.length > t; ++t) l.push(e, a, a = r(t));
              }
              t.s = null, t.v = e, t.G = e = l.length;
            }
            at.b11(34963, at.c1b()),
              at.b2v(34963, new Uint16Array(l), 35044),
              at.b11(34962, at.c1b()),
              at.b2v(34962, new Float32Array(s), 35044),
              at.v7s(0, 4, 5126, !1, 0, 0),
              at.b11(34962, at.c1b()),
              at.b2v(34962, new Int16Array(o), 35044),
              at.v7s(1, 3, 5122, !0, 0, 0),
              at.b11(34962, at.c1b()),
              at.b2v(34962, new Uint32Array(n), 35044),
              at.v7s(2, 4, 5121, !0, 0, 0),
              at.e3x(0),
              at.e3x(1),
              at.e3x(2);
          })(),
            gt(
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
            )),
          s = yt(
            gt(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          r = yt(
            gt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          n = yt(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          o = yt(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          c =
            (r(), at.ubh(r("q"), 3), n(), at.uae(n("a"), !1, mt(1.4, .59, 1e-4, 1)), o(), at.ubh(o("q"), 3), at.c5w()),
          e = (t = at.c3z(), at.c25()),
          F = q(2, t => {
            let e = new Float32Array(16), a = at.c25(), l = at.c5w(), r = o(t ? "j" : "i");
            return o(),
              at.ubh(o(t ? "h" : "g"), t),
              at.b6o(36160, l),
              at.d45([0]),
              at.r9l(0),
              at.a4v(33984 + t),
              at.b9j(3553, a),
              at.fas(36160, 36096, 3553, a, 0),
              at.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              at.t2z(3553, 10241, 9729),
              at.t2z(3553, 10240, 9729),
              at.t2z(3553, 34893, 515),
              at.t2z(3553, 34892, 34894),
              at.t2z(3553, 10243, 33071),
              at.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (W(t, e), at.uae(s("b"), !1, e), at.b6o(36160, l), at.c4s(256), At(s("c"), !et, 0))
                  : at.uae(r, !1, e);
              };
          });
        at.e8z(2929),
          at.e8z(2884),
          at.c70(1),
          at.c7a(1029),
          at.d4n(515),
          at.c5t(0, 0, 0, 1),
          at.b6o(36160, c),
          at.bb1(36161, t),
          at.r4v(36161, 33189, 128, 128),
          at.f8w(36160, 36096, 36161, t),
          at.a4v(33987),
          at.b9j(3553, e),
          at.fas(36160, 36064, 3553, e, 0),
          at.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          at.a4v(33987),
          at.b9j(3553, at.c25()),
          at.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, D),
          at.gbn(3553),
          at.t2z(3553, 10241, 9987),
          at.t2z(3553, 10240, 9729),
          Ct.map((t, e) => {
            t.h = e
              ? () =>
                Ct[0].l.translate(0, g * X(.45 * Math.sin(9.1 * B + Math.PI * (e - 1) - Math.PI / 2))).rotateSelf(
                  g * Math.sin(9.1 * B + Math.PI * (e - 1)) * .25 / w,
                  0,
                )
              : () => R.translate($.x, y, $.z).rotateSelf(0, u);
          });
        try {
          let [a, l, t, e, r] = JSON.parse(localStorage.DanteSP22);
          Z.map((t, e) => t.g = t.i = t.j = e ? 0 | a[e] : 0), pt.map((t, e) => t.j = 0 | l[e]), st = t, B = e, ot = r;
        } catch (t) {}
        nt = st < 0 ? 0 : 1 < st ? 1 : st,
          h4.innerHTML = "",
          x = 0,
          bt(),
          dt(),
          a(),
          N = k = $.x,
          E = (j = $.y) + 13,
          U = (C = $.z) + -18,
          (() => {
            let r = 0,
              s = 0,
              t = 0,
              e = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  J.length = H = Q = 0,
                  n = o = void 0,
                  document.hidden && vt(!0);
              },
              n,
              o,
              c;
            b1.onclick = () => vt(),
              b2.onclick = () => {
                vt(), et = 1;
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b4.onclick = () => {
                lt = !lt, zt();
              },
              b5.onclick = () => vt(!0),
              onclick = () => {
                c = 1, tt || (J[5] = !0, et && hC.requestPointerLock());
              },
              document.onvisibilitychange = onresize = onblur = e,
              onkeydown = onkeyup = ({ code: t, target: e, type: a, repeat: l }) => {
                l || ((e = !!a[5] && e === document.body) && ("Escape" === t || "Enter" === t && tt)
                  ? tt && !c || vt(!tt)
                  : 5
                      === (t = {
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
                      }[t])
                  ? e && (J[t] = 1)
                  : J[t] = e);
              },
              onmousemove = ({ movementX: t, movementY: e }) => {
                et && (t || e) && (G += .1 * t, K += .1 * e);
              },
              hC.ontouchstart = e => {
                if (!tt) {
                  for (let t of e.changedTouches) {
                    et && t.pageX > hC.clientWidth / 2
                      ? n || (n = t, r = G, s = K)
                      : o = o || t;
                  }
                  t = rt;
                }
              },
              hC.ontouchmove = ({ changedTouches: l }) => {
                if (!tt) {
                  for (
                    let { pageX: t, pageY: e, identifier: a } of l
                  ) {
                    n?.identifier === a && (G = r + (t - n.pageX) / 3, K = s + (e - n.pageY) / 3),
                      o?.identifier === a
                      && (H = -(t - o.pageX) / 18,
                        Q = -(e - o.pageY) / 18,
                        H = (H < 0 ? -H : H) < .35 ? 0 : .8 * H,
                        Q = (Q < 0 ? -Q : Q) < .35 ? 0 : .8 * Q);
                  }
                }
              },
              hC.ontouchend = e => {
                for (let t of e.changedTouches) {
                  t.identifier === n?.identifier && (n = void 0),
                    t.identifier === o?.identifier && (o = void 0, Q = H = 0);
                }
                e.preventDefault(), e = rt - t, (!t || .02 < e && e < .4) && (J[5] = !0);
              },
              oncontextmenu = () => !1,
              e(),
              vt(!0);
          })(),
          requestAnimationFrame(l);
      }
    },
    l = () => {
      if (e < 5) {
        var Q = 0, B = e++;
        let [v, p, d, b, I, A, P, S, Y, x, T, , k, z, j, C, t, F, w, D, H] =
          [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, [
            "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
            "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
            "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
            "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
            "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
            "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
          ]], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, [
            ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
            "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
            ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
            "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
            "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
            "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
          ]], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
            "9(((9(((9(((9(((9(((9(((9(((9",
            "9(((Q(((Q(((Q",
          ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
            "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
            "9(9(9(9(9(999(9(((((Q",
          ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
            "((((Q(((((((Q(((((((Q(((((((Q",
            "Q((Q((Q((Q((Q((Q((((Q",
          ]]][B];
        x = x * x * 4;
        for (let M of [5513, 4562, 3891]) {
          let r = 0,
            s = 0,
            f = [],
            m,
            n,
            o,
            c,
            i,
            h = new Int32Array(768 * M),
            u = Math.PI * 2 ** (t - 8) / M,
            g = w * M & -2;
          for (let l = 0; l <= 11; ++l) {
            for (
              let t = 0, e = +"000001234556112341234556011111111112011111111112000001111112"[12 * B + l];
              t < 32;
              ++t
            ) {
              let a = (32 * l + t) * M;
              for (var O, R = 0; R < 4; ++R) {
                if (m = 0, e && (m = H[e - 1].charCodeAt(t + 32 * R) - 40, m += 0 < m ? 106 : 0), m) {
                  if (!(O = f[m])) {
                    let l = 0,
                      r = 0,
                      s,
                      n,
                      o = O = m,
                      c = B < 2
                        ? t => t % 1 * 2 - 1
                        : Mt,
                      i = B < 2
                        ? B < 1
                          ? t => t % 1 < .5 ? 1 : -1
                          : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                        : Mt,
                      h = new Int32Array(S + Y + x);
                    for (let e = 0, a = 0; S + Y + x > e; ++e, ++a) {
                      let t = 1;
                      S > e ? t = e / S : S + Y > e || (t = (1 - (t = (e - S - Y) / x)) * 3 ** (-T / 16 * t)),
                        a < 0
                        || (a -= 4 * M,
                          n = .00396 * 2 ** ((o + p - 256) / 12),
                          s = .00396 * 2 ** ((o + I - 256) / 12) * (1 + (B ? 0 : 8e-4 * 9))),
                        h[e] = 80
                            * (c(l += n * t ** (d / 32)) * v + i(r += s * t ** (A / 32)) * b
                              + (P ? (2 * Math.random() - 1) * P : 0))
                            * t | 0;
                    }
                    O = f[O] = h;
                  }
                  for (let t = 0, e = 2 * a; O.length > t; ++t, e += 2) h[e] += O[t];
                }
              }
              for (let t, e = 0; M > e; ++e) {
                R = 0,
                  ((t = h[O = 2 * (a + e)]) || i)
                  && (o = .00308 * k,
                    1 != B && 4 != B || (o *= Math.sin(2 ** (l - 9) / M * O * Math.PI * 2) * D / 512 + .5),
                    o = 1.5 * Math.sin(o),
                    r += o * s,
                    c = (1 - z / 255) * (t - s) - r,
                    s += o * c,
                    t = 4 == B ? s : 3 == B ? c : r,
                    B || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                    t *= j / 32,
                    i = 1e-5 < t * t,
                    n = Math.sin(u * O) * C / 512 + .5,
                    R = t * (1 - n),
                    t *= n),
                  O < g || (R += h[1 + O - g] * F / 255, t += h[O - g] * F / 255),
                  Pt[Q + O] += h[O] = R,
                  ++O,
                  Pt[Q + O] += h[O] = t;
              }
            }
          }
          Q += h.length;
        }
        setTimeout(l);
      } else {
        for (Q = Dt.createBuffer(2, 5362944, 44100), B = 0; B < 2; B++) {
          for (
            let t = B, e = Q.getChannelData(B);
            t < 10725888;
            t += 2
          ) {
            e[t >> 1] = Pt[t] / 65536;
          }
        }
        Ht.buffer = Q, Ht.loop = !0;
      }
      a();
    },
    n = (t, e, a) =>
      R.translate(t + Math.sin(B + 2) / 5, e + Math.sin(.8 * B) / 3, a).rotateSelf(
        2 * Math.sin(B),
        Math.sin(.7 * B),
        Math.sin(.9 * B),
      ),
    o,
    D = new Image(),
    c = (D.onload = D.onerror = () => {
      a();
    },
      D.src = Ft,
      setTimeout(l, 9),
      (() => {
        let e = q(
            11,
            t => R.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
          ),
          a = C(18);
        return q(10, t => s(j(a, e[t]).reverse(), j(a, e[t + 1]), 1)).flat();
      })()),
    i = d(
      p(
        m(u(20, 1, 1.15, 1), R.translate(0, -3).scale(3.5, 1, 3.5), P(.7, .4, .25, .7)),
        m(u(20, 1, 1.3, 1), R.translate(0, -2.5).scale(2.6, 1, 3), P(.7, .4, .25, .2)),
        m(u(b), R.translate(4, -1.2).scale3d(2), P(.7, .4, .25, .3)),
      ),
    ),
    h = d(
      p(
        m(u(b), R.translate(0, -8).scale(6, 15, 2.2)),
        m(u(b), R.translate(0, -14.1).scale(4, 13, 4)),
        m(u(20, 1), R.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
      ),
    );
  M(() => {
    g([b.slice(1)], R.translate(-2).scale3d(3).rotate(90, 0));
  }, 0),
    M(() => {
      let r = () => {
          let t = Z[2].i, e = 1 - Z[4].i;
          return t < e ? t : e;
        },
        t = (e, a, l) =>
          M(t => {
            t.h = () => R.translate(r() * Math.sin(3 * e + B * e) * a),
              b.map(({ x: t, z: e }) => {
                g(u(11, 1), R.translate(4 * t, 4, l + 4 * e).scale(.8, 3, .8), P(.5, .3, .7, .6)),
                  g(u(b), R.translate(4 * t, 7, l + 4 * e).scale(1, .3), P(.5, .5, .5, .3));
              }),
              g(d(p(
                m(u(b), R.translate(0, 0, l).scale(5, 1, 5), P(.8, .8, .8, .3)),
                ...[-1, 1].map(t =>
                  m(u(b), R.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), P(.8, .8, .8, .3))
                ),
              ))),
              g(u(b), R.translate(0, -3, l).scale(8, 2, 8), P(.4, .4, .4, .3));
          }),
        l = (M(t => {
          t.h = () => n(-12, 4.2, 40 * nt - 66), g(i), I(R.translate(0, -3, 4));
        }),
          q(7, t => m(u(6, 1), R.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), P(.3, .3, .38))).flat()),
        e = (A(R.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          A(
            R.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...C(18).map(({ x: t, z: e }) => [7 * t, 10 * e, 4.5 - 2 * (t < 0 ? -t : t)]),
          ),
          g(u(b), R.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), P(.8, .8, .8, .2)),
          b.map(({ x: t, z: e }) => g(u(6), R.translate(3 * t, 3, 15 * e).scale(.7, 4, .7), P(.6, .3, .3, .4))),
          [-23, 22].map(t => g(u(b), R.translate(0, 0, t).scale(3, 1, 8), P(.9, .9, .9, .2))),
          [-15, 15].map((e, a) => {
            g(u(b), R.translate(0, 6.3, e).scale(4, .3, 1), P(.3, .3, .3, .4)),
              g(u(b), R.translate(0, 1, e).scale(3, .2, .35), P(.5, .5, .5, .3)),
              M(t => {
                t.h = () => R.translate(0, 4.7 * -Z[a + 1].g, e), g(l);
              });
          }),
          q(5, e =>
            q(2, t =>
              g(
                c,
                R.translate(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                P(1, 1, .8, .2),
              ))),
          g(u(b), R.translate(3, 1.5, -20).scale(.5, 2, 5), P(.7, .7, .7, .2)),
          g(u(b), R.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(.75, .75, .75, .2)),
          g(u(5), R.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(.6, .3, .3, .4)),
          I(R.translate(-5.4, 1.5, -19).rotate(0, -90)),
          g(u(b), R.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), P(.8, .2, .2, .5)),
          g(d(
            p(
              v(
                m(u(6, 0, 0, .3), R.translate(8, -3, -4).scale(13, 1, 13), P(.7, .7, .7, .2)),
                m(u(6), R.translate(0, -8).scale(9, 8, 8), P(.4, .2, .5, .5)),
                m(u(6, 0, 0, .3), R.translate(0, -.92).scale(13, 2, 13), P(.8, .8, .8, .2)),
              ),
              m(u(5), R.scale(5, 30, 5), P(.4, .2, .6, .5)),
              m(u(5, 0, 1.5), R.translate(0, 1).scale(4.5, .3, 4.5), P(.7, .5, .9, .2)),
              m(u(b), R.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), P(.5, .5, .5, .5)),
              m(u(6), R.translate(15, -1.5, 4).scale(3.5, 1, 3.5), P(.5, .5, .5, .5)),
            ),
          )),
          M(t => {
            t.h = () =>
              R.translate(
                0,
                .01 < Z[3].g ? (5 * Math.cos(1.5 * B) + 2) * Z[3].i * (1 - Z[2].g) + -15 * (1 - Z[3].g) : -500,
                0,
              ),
              I(R.translate(0, 1.2)),
              g(u(5), R.translate(0, -.2).scale(5, 1, 5), P(.6, .65, .7, .3));
          }),
          I(R.translate(15, -2, 4)),
          t(.7, 12, 35),
          t(1, 8.2, 55),
          M(t => {
            t.h = () => R.translate(r() * Math.sin(B / 1.5 + 2) * 12),
              g(
                d(p(
                  v(
                    m(u(b), R.scale(1.5, 1, 5), P(.9, .9, .9, .2)),
                    m(u(6), R.scale(4, 1, 5), P(.9, .9, .9, .2)),
                    m(u(b), R.translate(0, -2).scale(2, 3.2, 1.9), P(.3, .8, .5, .5)),
                    m(u(16, 1, 0, 4), R.scale(1, 1, 1.5).rotate(0, 90), P(.9, .9, .9, .2)),
                  ),
                  m(u(b), R.scale(1.3, 10, 1.3), P(.2, .7, .4, .6)),
                )),
                R.translate(0, 0, 45),
              ),
              A(R.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          M(t => {
            t.h = () => R.translate(9.8 * (1 - r())),
              g(u(3), R.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), P(.3, .6, .6, .2)),
              g(u(8), R.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(.8, .8, .8, .2)),
              g(u(b), R.translate(-23, -3, 55).scale(5.2, 1.7, 3), P(.5, .5, .5, .3)),
              g(u(b), R.translate(-23, -2.2, 62).scale(3, 1, 4), P(.5, .5, .5, .3)),
              I(R.translate(-23, -.5, 66.5));
          }),
          g(u(b), R.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(.9, .9, .9, .2)),
          M(t => {
            t.h = () => R.translate(0, X(1 - 5 * r()) * f(Z[4].g, Z[5].g) * Math.sin(1.35 * B) * 4),
              g(u(b), R.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(.7, .7, .7, .2)),
              g(
                d(p(m(u(b), R.scale(3, 1.4, 2.7)), m(u(b), R.scale(1.2, 8, 1.2)))),
                R.translate(-33, -3, 55),
                P(.7, .7, .7, .2),
              );
          }),
          M(t => {
            t.h = () => R.translate(0, 0, X(1 - 5 * r()) * f(Z[4].g, Z[5].g) * Math.sin(.9 * B) * 8),
              g(d(
                p(
                  m(u(b), R.translate(-27, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2)),
                  m(u(b), R.translate(-27, -3, 55).scale(1, 3), P(.9, .9, .9, .2)),
                ),
              )),
              g(u(b), R.translate(-39, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2));
          }),
          M(t => {
            t.h = () => R.translate(0, -6.5 * Z[4].i),
              g(u(6), R.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), P(.7, .7, .7, .4));
          }),
          [...m(
            d(v(
              m(u(b), R.translate(0, -3).scale(11, 1.4, 3), P(.9, .9, .9, .2)),
              p(
                m(u(6), R.rotate(0, 0, 90).scale(6, 8, 6), P(.3, .6, .6, .3)),
                m(u(4, 0, .01), R.translate(0, 6).scale(12, 2, .75).rotate(0, 45), P(.3, .6, .6, .3)),
                m(u(6), R.rotate(0, 0, 90).scale(5, 12, 5), P(.3, .6, .6, .3)),
                ...[5, 0, -5].map(t =>
                  m(u(5), R.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(.3, .6, .6, .3))
                ),
              ),
            )),
            R,
          )]),
        a =
          (g(e, R.translate(-53, 0, 55)),
            g(u(6), R.translate(-61.3, -2.4, 49).scale(3, 1, 5), P(.4, .6, .6, .3)),
            g(u(7), R.translate(-57, -2.6, 46).scale(4, 1, 4), P(.8, .8, .8, .3)),
            I(R.translate(-55, -1.1, 46).rotate(0, 90)),
            M(t => {
              t.h = () => R.translate(-75, (1 - Z[5].i) * (1 - Z[6].g) * 3, 55).rotate(180 * (1 - Z[5].i) + z, 0), g(e);
            }, 2),
            g(u(b), R.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), P(.7, .7, .7, .2)),
            g(u(3, 0, -.5), R.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(.8, .8, .8, .2)),
            g(
              d(p(
                v(
                  m(u(b), R.translate(-100, -2.5, 55).scale(8, 1, 8), P(.8, .8, .8, .2)),
                  m(u(b), R.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(.8, .8, .8, .2)),
                  m(u(b), R.translate(-100, -2.6, 70).scale(3, 1.1, 7), P(.8, .8, .8, .2)),
                  m(u(b), R.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(.8, .8, .8, .2)),
                  m(u(6), R.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(.6, .6, .6, .3)),
                  m(u(b), R.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(.8, .8, .8, .2)),
                  m(u(b), R.translate(-100, .42, 92).scale(3, 1.1, 4.1), P(.8, .8, .8, .2)),
                ),
                m(u(8), R.translate(-100, -1, 55).scale(7, .9, 7), P(.3, .3, .3, .4)),
                m(u(8), R.translate(-100, -2, 55).scale(4, .3, 4), P(.4, .4, .4, .5)),
                m(u(8), R.translate(-100, -3, 55).scale(.6, 1, .6), P(.4, .4, .4, .5)),
              )),
              R,
            ),
            A(R.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            A(R.translate(-89, .2, 80), [0, 0, 6]),
            g(d(
              p(
                m(u(b), R.translate(-100, 1, 63).scale(7.5, 4), P(.5, .5, .5, .4)),
                m(u(b), R.translate(-100, 0, 70).scale(2, 2, 10), P(.5, .5, .5, .4)),
                m(u(20, 1), R.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(.5, .5, .5, .4)),
              ),
            )),
            M(t => {
              t.h = () => R.translate(-99.7, 5.3 * -Z[6].g - 2, 63.5), g(l);
            }),
            b.map(({ x: e, z: a }) => {
              g(u(6), R.translate(7 * e - 100, -3, 7 * a + 55).scale(1, 8.1), P(.6, .15, .15, .8)),
                [4, -.4].map(t =>
                  g(u(6), R.translate(7 * e - 100, t, 7 * a + 55).scale(1.3, .5, 1.3), P(.4, .2, .2, .8))
                );
            }),
            q(7, t => {
              g(
                u((23 * t + 1) % 5 + 5, 0, .55),
                R.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                  5 + t / 2,
                  1 + t / 6,
                  5 + t / 3,
                ),
                P(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
              );
            }),
            g(u(b), R.translate(-87, -9.5, 24).scale(7, 1, 3), P(.4, .5, .6, .4)),
            g(u(4), R.translate(-86, -9.2, 27).scale(5, 1, 5), P(.5, .6, .7, .3)),
            g(u(12, 1), R.translate(-86, -9, 31).scale(1.5, 1, 1.5), P(.3, .3, .4, .1)),
            I(R.translate(-86, -7.5, 31)),
            M(t => {
              t.h = () => R.translate(0, 3.5 * (1 - L(Z[6].g, Z[7].g)) + f(Z[7].i, Z[6].i) * Math.sin(B) * 5),
                [0, 12, 24].map(t =>
                  g(u(b), R.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.2, .5, .6, .2))
                );
            }),
            M(t => {
              t.h = () => {
                let t = f(Z[7].i, Z[6].i);
                return R.translate(0, t * Math.sin(B + 3) * 6, 6 * Math.sin(.6 * B + t) * t);
              },
                [6, 18].map(t =>
                  g(u(b), R.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.1, .4, .5, .2))
                );
            }),
            g(
              d(p(
                v(
                  m(u(b), R.scale(11, 1, 13), P(.3, .4, .6, .3)),
                  m(u(5), R.translate(0, 0, -7).scale(2, 1.2, 2), P(.2, .4, .7, .3)),
                  m(u(5), R.scale(9, 1.2, 9), P(0, .2, .3, .5)),
                ),
                m(u(5), R.scale(5.4, 5, 5.4), P(0, .2, .3, .5)),
              )),
              R.translate(-38.9, -11.3, 17),
            ),
            I(R.translate(-38.9, -9.6, 10)),
            M(t => {
              t.h = () => R.translate(0, -7.3 * Z[7].i),
                g(
                  d(p(
                    v(
                      m(u(5), R.translate(0, 2).scale(5, 7, 5).skewY(8), P(.2, .4, .5, .5)),
                      m(u(5), R.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(.25, .35, .5, .5)),
                      m(u(5), R.translate(0, 9).scale(.6, 7, .6).skewY(8), P(.35, .3, .5, .5)),
                    ),
                    m(u(5), R.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(.2, .4, .5, .5)),
                  )),
                  R.translate(-38.9, -11.3, 17),
                ),
                A(R.translate(-39.1, -.3, 17).rotate(0, 0, 10), ...C(15).map(({ x: t, z: e }) => [3 * t, 3 * e, 1.2]));
            }),
            b.map(({ x: t, z: e }) => {
              o = R.translate(9 * t - 38.9, -7.3, 11 * e + 17),
                g(u(14, 1), o.scale(1, 4), P(.25, .25, .25, 1)),
                [1.5, 8].map(t => g(u(17, 1), o.translate(0, t - 4).scale(1.5, .5, 1.5), P(.6, .6, .6, .3)));
            }),
            g(
              d(p(
                v(
                  m(u(6), R.translate(0, 0, -36).scale(15, 1.2, 15), P(.7, .7, .7, .3)),
                  m(u(b), R.translate(0, 0, -18).scale(4, 1.2, 6), P(.45, .4, .6, .3)),
                ),
                ...q(6, e =>
                  q(6, t =>
                    m(
                      u(6),
                      R.translate(4.6 * t - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                      P(.7, .7, .7, .3),
                    ))).flat(),
              )),
              R.translate(-38.9, -11.3, 17),
            ),
            A(R.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
            g(u(5), R.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), P(.8, .1, .25, .4)),
            I(R.translate(-84, -.5, 85).rotate(0, 45)),
            M(t => {
              t.h = () => n(-123, 1.4, 55 + -65 * ot), I(R.translate(0, -3, -4).rotate(0, 180)), g(i);
            }),
            A(R.translate(-115, .2, -12), [0, 0, 3.5]),
            d(p(
              m(u(b), R.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), P(.25, .25, .35, .3)),
              m(u(3), R.translate(0, 0, -5.5).scale(3, 2), P(.6, .3, .4, .3)),
              ...[-1.2, 1.2].map(t => m(u(b), R.translate(t, -.5, 1).scale(.14, .3, 6.5), P(.7, .2, 0, .3))),
            ))),
        s = (M(t => {
          t.h = () => {
            let t = Math.sin(1.1 * B);
            return R.translate.call(R, 0, -2, f(Z[10].g, Z[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
          }, q(2, t => g(a, R.translate(9 * t - 110 + (1 & t), 1.7, -12)));
        }),
          M(t => {
            t.h = () => {
              let t = Math.sin(2.1 * B);
              return R.translate.call(R, 0, -2, f(Z[10].g, Z[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
            }, q(2, t => g(a, R.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
          }),
          M(t => {
            t.h = () => {
              let t = Math.sin(1.5 * B);
              return R.translate.call(
                R,
                0,
                -2,
                -8.5 * L((1 - Z[10].g) * (1 - f(Z[10].g, Z[11].g)), f(Z[10].g, Z[11].g) * (t < 0 ? -t : t)) + 10,
              );
            }, q(3, t => g(a, R.translate(9 * t - 106, 1.7, -12)));
          }),
          g(
            d(p(
              v(
                m(u(b), R.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                m(u(b), R.translate(26.5, -.6, 10).scale(17, 2, .5)),
              ),
              ...q(4, t => m(u(b), R.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
              ...q(3, t => m(u(b), R.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
            )),
            R.translate(-123, 0, -12),
            P(.5, .5, .6, .2),
          ),
          g(u(5), R.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), P(.25, .25, .35, 1)),
          g(u(b), R.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(.8, .8, .8, .2)),
          g(u(6), R.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), P(.6, .5, .7, .2)),
          I(R.translate(-116, -1.4, -18).rotate(0, 180)),
          q(3, t => {
            g(h, R.translate(12 * t - 109, -9, -12), P(.6, .6, .6, .3)),
              g(h, R.translate(-77, -9, -12 * t - 20).rotate(0, 90), P(.6, .6, .6, .3));
          }),
          g(d(
            p(
              m(u(12), R.translate(-77, -13.9, -12).scale(4, 18.2, 4), P(.7, .7, .7, .2)),
              m(u(b), R.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), P(.4, .5, .6, .2)),
              m(u(b), R.translate(-77, 0, -14).scale(1.5, 2.2, 2), P(.4, .5, .6, .2)),
              m(u(12), R.translate(-77, 2.8, -12).scale(3, 5, 3), P(.4, .5, .6, .2)),
            ),
          )),
          g(u(b), R.translate(-115.5, -17, -12).scale(.5, 15, 2.2), P(.6, .6, .6, .3)),
          g(u(b), R.translate(-77, -17, -50.5).scale(2.2, 15, .5), P(.6, .6, .6, .3)),
          g(u(b), R.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), P(.6, .6, .6, .3)),
          g(d(
            p(
              m(u(b), R.translate(-93, -5.8, -40).scale(9, 1, 5), P(.8, .8, .8, .1)),
              m(u(9), R.translate(-98, -5.8, -40).scale(3, 8, 3), P(.7, .7, .7, .2)),
            ),
          )),
          g(u(9), R.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), P(.5, .5, .5, .3)),
          I(R.translate(-98, -4.4, -40).rotate(0, 90)),
          A(R.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          g(d(
            p(
              v(
                m(u(6, 0, 0, .6), R.translate(-100, .7, 105.5).scale(8, 1, 11), P(.7, .7, .7, .2)),
                m(u(b), R.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), P(.7, .7, .7, .2)),
                m(u(b), R.translate(-91.2, .7, 107).scale(3, 1, 3.3), P(.7, .7, .7, .2)),
              ),
              m(u(5), R.translate(-100, .7, 113).scale(4, 3, 4), P(.7, .7, .7, .2)),
            ),
          )),
          q(4, e =>
            M(t => {
              t.h = () => {
                let t = f(Z[8].i, Z[12].i);
                return R.translate(
                  (2 < e ? 2 * (1 - t) + t : 0) - 100,
                  t * Math.sin(1.3 * B + 1.7 * e) * (3 + e / 3) + .7,
                  115 + (1 & e ? -1 : 1) * (1 - Z[8].i) * (1 - Z[12].i) * -7
                    + (t < .05 ? .05 : t) * Math.cos(1.3 * B + 7 * e) * (4 - 2 * (1 - e / 3)),
                );
              },
                g(
                  u(6),
                  R.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
                  P(.5 - e / 8, e / 12 + .5, .7, .3),
                );
            })),
          M(t => {
            t.h = () => {
              let t = f(Z[8].i, Z[12].i);
              return R.translate(2.5 * (1 - t) - 139.7, -3 * (1 - Z[8].g) + t * Math.sin(.8 * B) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * B) * (3 * t + 3), 0);
            },
              g(d(p(m(u(10), R.scale(6, 2, 6), P(.1, .6, .5, .3)), m(u(10), R.scale(3.3, 6, 3.3), P(.1, .6, .5, .5))))),
              o = R.translate(-7.5).rotate(0, 90),
              g(u(15, 1), o.scale(3, 2.3, 3), P(.4, .4, .4, .3)),
              g(u(10), o.scale(2, 2.5, 2), P(.3, .8, .7, .3)),
              g(u(5), o.scale(1, 3), P(.5, .5, .5, .5)),
              I(o.translate(0, 3.4).rotate(0, 180)),
              [-1, 1].map(t =>
                g(c, R.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), P(1, 1, .8, .2))
              ),
              A(R.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(e => {
            g(u(12, 1), R.translate(-7.5 * e - 100, 3.7, 96).scale(.8, 4, .8), P(.6, .24, .2, .5)),
              [7.2, 1.5].map(t =>
                g(u(15, 1), R.translate(-7.5 * e - 100, t + .7, 96).scale(1.1, .5, 1.1), P(.5, .24, .2, .4))
              ),
              g(c, R.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), P(1, 1, .8)),
              g(
                d(p(
                  m(u(b), R.translate(-4 * e, 3.5, -.5).scale(4, 4, .7), P(.5, .5, .5, .4)),
                  m(u(b), R.scale(3, 3, 10), P(.6, .24, .2, .5)),
                  m(u(28, 1), R.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(.6, .24, .2, .5)),
                  m(u(5), R.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(.6, .24, .2, .5)),
                  m(u(5), R.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), P(.6, .24, .2, .5)),
                )),
                R.translate(e - 100, .7, 97),
              );
          }),
          M(t => {
            t.h = () => R.translate(-100, .6 - 6 * Z[12].g, 96.5).scale(.88, 1.2), g(l);
          }),
          [
            ...m(u(25, 1), R.scale(8, 1, 8), P(.45, .45, .45, .2)),
            ...m(u(5), R.translate(0, 1).scale(1, .2), P(.3, .3, .3, .2)),
          ]);
      M(t => {
        t.h = () => R.translate(-80, 1, 106).rotate(0, 40 + y),
          g(d(
            p(
              m(u(25, 1), R.scale(8, 1, 8), P(.45, .45, .45, .2)),
              m(u(b), R.translate(0, 0, -5.5).scale(1.5, 3, 2.5), P(.45, .45, .45, .2)),
            ),
          )),
          g(u(8), R.translate(0, 2).scale(3, 1.5, 3), P(.7, .7, .7, .1)),
          g(u(5), R.translate(0, 2).scale(1, 2), P(.3, .3, .3, .2)),
          A(R.translate(0, 3), ...C(10).map(({ x: t, z: e }) => [5.6 * t, 5.6 * e, 2.5]));
      }),
        M(t => {
          t.h = () => R.translate(-64, 1, 106).rotate(0, Y),
            g(d(
              p(
                m(u(25, 1), R.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                m(u(b), R.scale(9, 5, 2), P(.3, 0, 0, .3)),
              ),
            )),
            g(s),
            [-1, 1].map(t =>
              g(c, R.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))
            );
        }),
        M(t => {
          t.h = () => R.translate(-48, 1, 106).rotate(0, 180 - Y),
            g(d(
              p(
                m(u(25, 1), R.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                m(u(b), R.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                m(u(b), R.translate(0, 0, 7).scale(2, 5, 9), P(.3, 0, 0, .3)),
              ),
            )),
            g(s);
        }),
        M(t => {
          t.h = () => R.translate(-48, 1, 90).rotate(0, 270 + Y),
            g(d(
              p(
                m(u(25, 1), R.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                m(u(b), R.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                m(u(b), R.translate(0, 0, -7).scale(2, 5, 9), P(.3, 0, 0, .3)),
              ),
            )),
            g(s);
        }),
        g(u(b), R.translate(-56, 1, 106).scale(.7, .8, 2.5), P(.7, .7, .7, .2)),
        g(u(b), R.translate(-48, 1, 98).scale(2.5, .8, .7), P(.7, .7, .7, .2)),
        g(u(b), R.translate(-39, .4, 90).scale(2, 1, 2), P(.7, .7, .7, .3)),
        g(u(b), R.translate(-34.2, .4, 90).scale(3, 1, 3), P(.7, .7, .7, .3)),
        I(R.translate(-34, 2.7, 96).rotate(-12, 0)),
        g(u(5), R.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), P(.2, .5, .5, .6)),
        [P(.1, .55, .45, .2), P(.2, .5, .5, .3), P(.3, .45, .55, .4)].map((e, a) =>
          M(t => {
            t.h = () =>
              R.translate(
                0,
                (1 - Z[13].i) * (1 - Z[14].i) * (a ? 0 : 3) + f(Z[13].i, Z[14].i) * Math.sin(1.5 * B + 1.5 * a) * 4,
              ),
              g(u(b), R.translate(-23.5, .5, 90 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
              2 === a && g(u(b), R.translate(-29.1, .4, 90).scale(2.1, 1, 3), P(.7, .7, .7, .3)),
              1 === a
              && g(
                u(b),
                R.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                P(.6, .6, .7, .3),
              );
          })
        ),
        g(d(
          p(
            m(u(6, 0, 0, .3), R.translate(0, -.92, 95).scale(14, 2, 14), P(.8, .8, .8, .2)),
            m(u(5), R.translate(0, 0, 95).scale3d(6), P(.3, .3, .3, .5)),
          ),
        )),
        [8, -6.1].map((e, a) =>
          q(
            3,
            t =>
              g(
                h,
                R.translate(6 * t - 6, e - (1 & t), 111 - .2 * (1 & t) - a),
                1 & t ? P(.5, .5, .5, .3) : P(.35, .35, .35, .5),
              ),
          )
        ),
        [-1, 1].map(t => g(c, R.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))),
        I(R.translate(0, 1.7, 82).rotate(0, 180)),
        g(u(5), R.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(.5, .3, .3, .4)),
        g(d(
          p(
            v(
              m(u(b), R.translate(0, 16, 110.5).scale(12, 1, 3), P(.5, .3, .3, .4)),
              m(u(b), R.translate(0, 16, 111).scale(3, 1, 3.8), P(.5, .3, .3, .4)),
            ),
            m(u(5), R.translate(0, 16, 103.5).scale(5.5, 5, 5.5), P(.5, .3, .3, .4)),
          ),
        )),
        M(t => {
          t.h = () => {
            let t = Math.sin(B);
            return R.translate(-2 * t).rotate(0, 0, 25 * t);
          },
            g(u(3), R.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), P(.5, .3, .3, .4)),
            [22, 30].map(t => {
              g(u(6), R.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), P(.7, .7, .7, .4)),
                g(u(b), R.translate(0, 6.2, t + 95).scale(.5, 11, .5), P(.5, .3, .3, .4));
            });
        }),
        g(u(6), R.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(.5, .6, .7, .3)),
        g(u(b), R.translate(0, 16, 129).scale(1.5, 1, 2), P(.5, .6, .7, .3)),
        g(u(7), R.translate(0, 16.2, 133).scale(5, 1, 5), P(.4, .5, .6, .4)),
        M(t => {
          t.h = () => {
            let t = f(f((Z[14].g + Z[14].i) / 2, Z[13].i), (Z[15].g + Z[15].i) / 2);
            return R.translate(0, 16 * t, 8.5 * X(2 * t - 1) + 95);
          },
            g(u(5), R.scale(5, 1.1, 5), P(.5, .3, .3, .4)),
            g(u(5), R.scale(5.5, .9, 5.5), P(.25, .25, .25, .4)),
            I(R.translate(0, 1.5, -1).rotate(0, 180));
        }),
        A(R.translate(0, 3, 95), ...C(9).map(({ x: t, z: e }) => [9 * t, 9 * e, 4])),
        A(R.translate(0, 19, 134), [0, 0, 3.5]);
    }),
    Ct = [
      M(() => {
        [0, 180].map(t => g(c, R.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), P(1, 1, .8))),
          g(F(20), R.translate(0, 1).scale(.5, .5, .5), P(1, .3, .4));
        let e = m(
          d(p(u(15, 1), m(u(b), R.translate(0, 0, 1).scale(2, 2, .5)))),
          R.rotate(-90, 0).scale(.1, .05, .1),
          P(.3, .3, .3),
        );
        [-1, 1].map(t => g(e, R.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
          g(u(b), R.translate(0, .9, .45).scale(.15, .02, .06), P(.3, .3, .3)),
          g(F(20), R.scale(.7, .8, .55), P(1, .3, .4));
      }),
      ...[-1, 1].map(t =>
        M(() => {
          g(u(10, 1), R.translate(.3 * t, -.8).scale(.2, .7, .24), P(1, .3, .4));
        })
      ),
    ],
    Tt = M(() => {
      g(u(6, 1), R.scale(.13, 1.4, .13), P(.3, .3, .5, .1)),
        g(u(8, 1), R.translate(0, 1).scale(.21, .3, .21), P(1, .5, .2)),
        g(u(3), R.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), P(.2, .2, .2, .1));
    }, 0),
    jt = M(() => {
      g(u(6).slice(0, -1), R.scale(.77, 1, .77), P(1, .3, .5));
    }, 0),
    kt = M(() => {
      g(
        F(30, 24, (t, e, a) => {
          let l = e / 24, r = t * Math.PI * 2 / 30, s = l ** .6 * Math.PI / 2;
          return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
            23 === e
              ? { x: a.D = 0, y: -.5, z: 0 }
              : {
                x: Math.cos(r) * Math.sin(s),
                y: Math.cos(l * Math.PI) - l - t,
                z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
              };
        }),
        R.scale3d(.7),
        P(1, 1, 1),
      ), [-1, 1].map(t => g(F(12), R.translate(.16 * t, .4, -.36).scale3d(.09)));
    }, 0);
});
