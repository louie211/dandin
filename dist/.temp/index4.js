let et = !0,
  D = 0,
  H = 0,
  lt = 0,
  Q = 0,
  S = 0,
  y = 0,
  x = 0,
  Y = 0,
  k = 0,
  z = 0,
  F = 0,
  rt = 0,
  st = 0,
  B = .066,
  w = Math.PI / 180,
  O = new DOMMatrix(),
  R = (t, a) => a < t ? t : a,
  nt = t => t < 0 ? -t : t,
  X = t => t < 0 ? 0 : 1 < t ? 1 : t,
  f = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  ot = t => Math.atan2(Math.sin(t *= w), Math.cos(t)) / w,
  ct = (t, a, e) =>
    ((t *= w) + (2 * (a = (a * w - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / w,
  it = (t, a, e, l) => {
    let r = a - t;
    return (t += Math.sign(a - t) * R(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * X(l / 7);
  },
  L = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  ht = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  i = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  T = ({ x: t, y: a, z: e }) => Math.hypot(t - _.x, a - _.y, e - _.z) || 0,
  ft = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  r = (t, a) => {
    let e = It;
    t *= 16,
      e[t++] = a.m11,
      e[t++] = a.m12,
      e[t++] = a.m13,
      e[t++] = a.m14,
      e[t++] = a.m21,
      e[t++] = a.m22,
      e[t++] = a.m23,
      e[t++] = a.m24,
      e[t++] = a.m31,
      e[t++] = a.m32,
      e[t++] = a.m33,
      e[t++] = a.m34,
      e[t++] = a.m41,
      e[t++] = a.m42,
      e[t++] = a.m43,
      e[t] = a.m44;
  },
  q = -11,
  W = 17,
  N = -90,
  E = 0,
  U = 0,
  h = (t, a, e) => (t.D = e, t.A = a, t),
  j = (t, l, a = t.A) =>
    h(
      t.map(t => {
        let a, e;
        return { x: t, y: a, z: e } = t,
          { x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }),
          { x: t, y: a, z: e };
      }),
      a,
      t.D,
    ),
  m = (t, a, e) => t.map(t => j(t, a, e)),
  mt = (e, l = 0) =>
    L(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  s = (l, r, s) => l.map((t, a, { length: e }) => h([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, s)),
  u = (
    t,
    a,
    e = 0,
    l,
  ) => (l = t.length ? t : mt(t, l),
    t = j(l, O.translate(0, 1).scale3d(0 < e ? e : 1)),
    e = j(l, O.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...s(e, t, a), e, t]),
  ut = (
    l,
    r = l,
    s = (
      t,
      a,
    ) => (a *= Math.PI / r,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(a), y: Math.cos(a), z: Math.sin(t) * Math.sin(a) }),
  ) => {
    let n = [];
    for (let e = 0; l > e; e++) {
      for (let a = 0; r > a; a++) {
        let t = h([], 0, 1);
        n.push(t),
          t.push(s(e, a, t)),
          a && t.push(s((e + 1) % l, a, t)),
          r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
          t.push(s(e, a + 1 % r, t));
      }
    }
    return n;
  },
  yt = (t, a, e, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (e - a),
      y = new DOMMatrix(ht(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return t = L(
      8,
      t => (t = y.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (u * t.x | 0) / u / t.w,
        s -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      a = O.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      j(t, a).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          m = m > e ? m : e;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      O.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(a).toFloat32Array();
  },
  K = [],
  g = (t, a = O, e) => St.s.push(...m(t, a, e)),
  M = (t, a = 1) => {
    let e = St;
    return K.push(St = a = { l: O, F: K.length, H: a, s: [] }), t(a), St = e, a;
  },
  xt = (t, a = 35633) => (a = at.c6x(a), at.s3c(a, t), at.c6a(a), a),
  gt = (t, a) => {
    let e = {}, l = at.c1h();
    return at.abz(l, t), at.abz(l, xt(a, 35632)), at.l8l(l), t => t ? e[t] || (e[t] = at.gan(l, t)) : at.u7y(l);
  },
  Mt = t => Math.sin(t * Math.PI * 2),
  G = [],
  zt = () => {
    Z || !et ? Dt.disconnect() : Dt.connect(Ct.destination), b4.innerHTML = "Music: " + et;
  },
  vt = (t = !1) => {
    if (Z !== t) {
      Z = t, $ = 0;
      try {
        t ? document.exitPointerLock() : Dt.start();
      } catch {}
      document.body.className = t ? "l m" : "l", zt();
    }
  },
  V = (t, a, e) => t + (a - t) * X(1 - Math.exp(-e * B)),
  t = ({ j: t }) => t,
  J = [],
  pt = [],
  dt = () => {
    let t = f(J[12].g, J[13].g), a = (Q > y && (h4.innerHTML = "", y = 0), V(z, 0, 1));
    z = a + (ot(z + 60 * B) - a) * X(J[5].g - J[6].i),
      a = V(Y, 0, 5),
      Y = a + (ot(Y + 56 * B) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
      a = V(k, 0, 4),
      k = a + (ot(k + 48 * B) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
      t = 2 * J[9].i - 1,
      st = V(st, J[9].i, .2 + .3 * (t < 0 ? -t : t)),
      rt = V(rt, F ? rt + (-9 - rt) * X(1.5 * B) : X(Q / 3), 1),
      1 === J[0].j && .8 < J[0].g && (S < 13
        ? (J[0].j = 0, F || (h4.innerHTML = "Not leaving now, there are souls to catch!", y = Q + 3))
        : F || (F || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", y = Q + 1 / 0), F = 1));
    for (let t of K) t.h && (t.l = t.h(t));
    for (let t of J) t.h();
    for (let t of pt) t.h();
  },
  bt = () => {
    S = pt.reduce((t, a) => t + a.j, 0),
      h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][S];
  },
  C = () => {
    bt(), localStorage.DanteSP22 = JSON.stringify([J.map(t), pt.map(t), x, Q, st]);
  },
  c = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((o = i(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
        n = [], o = [], c = r.C, t = r.B;
        let a = c.at(-1), e = i(l, a) - l.w;
        for (let t of c) {
          s = i(l, t) - l.w,
            e < 8e-5 && o.push(a),
            -8e-5 < e && n.push(a),
            (8e-5 < e && s < -8e-5 || e < -8e-5 && 8e-5 < s)
            && (e /= s - e,
              a = { x: a.x + (a.x - t.x) * e, y: a.y + (a.y - t.y) * e, z: a.z + (a.z - t.z) * e },
              n.push(a),
              o.push(a)),
            a = t,
            e = s;
        }
        return {
          o: 2 < n.length && { C: h(n, c.A, c.D), B: t, u: r },
          m: 2 < o.length && { C: h(o, c.A, c.D), B: t, u: r },
        };
      }
    }
    return { o: s, m: n };
  },
  n = (e, l, r = ft(l.C)) => {
    if (e) {
      let { o: t, m: a } = c(e, l);
      t || a || e.s.push(l), t && (e.o = n(e.o, t, r)), a && (e.m = n(e.m, a, r));
    } else e = { x: r.x, y: r.y, z: r.z, w: r.w, s: [l], o: 0, m: 0 };
    return e;
  },
  e = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = c(t, a);
        e || l || (0 < s * i(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(a, t);
    return n;
  },
  o = (t, a) => t && (a(t), o(t.o, a), o(t.m, a)),
  wt = t => t.length ? t.reduce((t, a) => n(t, { C: a, B: 0, u: 0 }), 0) : t,
  l = t => (o(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.s) t.B = !t.B;
  }),
    t),
  v = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = wt(l), a) {
        a = wt(a), o(l, t => t.s = e(a, t, 1)), o(a, t => r.push([t, e(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) n(l, t, a);
      }
      return l;
    }),
  p = (t, ...a) => l(v(l(wt(t)), ...a)),
  d = t => {
    let e = new Map(),
      l = new Map(),
      r = a => {
        if (a.u) {
          let t = e.get(a.u);
          t ? (l.delete(t), a = r(a.u)) : e.set(a.u, a);
        }
        return a;
      };
    return o(t, a => {
      for (let t of a.s) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return h(a ? e.reverse() : e, t.A, t.D);
      });
  },
  _ = { x: 0, y: 0, z: 0 },
  b = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  I = r => {
    let s = St,
      n = J.length,
      o = {
        j: 0,
        g: 0,
        i: 0,
        u: s,
        h() {
          let t = o.j, a = o.g, e = o.i, l = s.l.multiply(r);
          o.I = l,
            T(l.transformPoint()) < 2.9 && G[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && !F && (h4.innerHTML = "* click *", y = Q + 1), x = n, C()),
            o.g = V(a, t, 4),
            o.i = V(e, t, 1),
            o.l = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    J.push(o),
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
            var a = 1;
            let e = 1 / 0, l, t;
            for (l of p) {
              var r = l.w, s = Math.hypot(d - l.x, b - l.z), n = s - r;
              t ||= s < r, 0 < n && e > n && (e = n, z = l), a = a < (r = s / r) ? a : r;
            }
            if (!t) {
              r = z.w;
              let t = Math.hypot(s = d - (e = z.x), n = b - (l = z.z)), a = Math.atan2(-n, s);
              M && (h = (Math.random() - .5) * Math.PI / 2, g = R(1, g / (1 + Math.random()))),
                a += h,
                c = -Math.cos(a),
                i = Math.sin(a),
                .1 < t && (t = (t < r ? t : r) / (t || 1), d = s * t + e, b = n * t + l);
            }
            M = t,
              g = V(g, 3 + 6 * (1 - a), 3 + a),
              I = V(I, d = V(d, d + c, g), g),
              A = V(A, b = V(b, b + i, g), g),
              f = ct(f, Math.atan2(I - m, A - u) / w - 180, 3 * B),
              m = I,
              u = A,
              a = (v.l = o.multiply(
                x.l.translate(I, 0, A).rotateSelf(0, f).skewXSelf(7 * Math.sin(2 * Q)).skewYSelf(
                  7 * Math.sin(1.4 * Q),
                ),
              )).transformPoint(),
              T(a) < 1.5
              && (v.j = 1,
                a = [
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
                F || (h4.innerHTML = a, y = Q + t),
                C());
          }
          v.j
            && (a = e % 4 - 2,
              v.l = K[2].l.translate(
                e % 4 * 1.2 - 1.7 + Math.sin(Q + e) / 7,
                -2,
                1.7 * (e / 4 | 0) - 5.5 + (a < 0 ? -a : a) + Math.cos(Q / 1.5 + e) / 6,
              ));
        },
      },
      x = St,
      e = pt.length,
      p = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      z = p[0],
      { x: d, z: b } = z,
      I = d,
      A = b;
    pt.push(v);
  },
  It = new Float32Array(624),
  At = (t, a, e) => {
    if (Z) {
      for (var { F: l } of (e = O.rotate(0, 40 * Math.sin(lt) - 70), tt)) r(l - 1, e);
      at.uae(t, !1, It), at.d97(4, tt[2].G - tt[0].v, 5123, 2 * tt[0].v);
    } else {
      for (let { H: t, F: a, l: e } of K) t && r(a - 1, e);
      for (at.uae(t, !1, It), at.d97(4, (a ? tt[2].G : tt[0].v) - 3, 5123, 6), l = 0; J.length > l; ++l) {
        r(l, J[l].l), It[16 * l + 15] = 1 - J[l].g;
      }
      for (at.uae(t, !1, It), at.das(4, kt.G - kt.v, 5123, 2 * kt.v, J.length), l = 0; l < 13; ++l) r(l, pt[l].l);
      e = e ? Tt : Ft, at.uae(t, !1, It), at.das(4, e.G - e.v, 5123, 2 * e.v, 13);
    }
  },
  Pt = new Int32Array(10725888),
  P = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  St,
  Z,
  $,
  Yt,
  kt,
  Ft,
  Tt,
  tt,
  jt = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  at = hC.getContext("webgl2");
for (let t in at) at[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = at[t];
let Ct = new AudioContext(), Dt = Ct.createBufferSource();
setTimeout(() => {
  let a = 0,
    t = 6,
    e = () => {
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
          e = () => {
            let { u: t, I: a } = J[x], { x: e, y: l, z: r } = a.transformPoint({ x: 0, y: 8, z: -3 });
            _.x = v.x = e,
              _.y = v.y = k = l,
              _.z = v.z = r,
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
            let a = (t - (Yt || t)) / 1e3;
            B = Z ? G[5] = 0 : .066 < a ? .066 : a,
              Q += B,
              lt += a,
              Yt = t,
              0 < B && (at.b6o(36160, T),
                at.r9r(0, 0, 128, 128, 6408, 5121, d),
                at.iay(36160, [36064]),
                (() => {
                  let a = 0,
                    e = 0,
                    t = ((() => {
                      let s = 0, n = 0, a = 0, e = 0, o = 0;
                      p.fill(0);
                      for (let t = 0; t < 31; ++t) {
                        let l = 0, r = 512 * t;
                        for (let e = 0; e < 128; e++) {
                          let t = r + 4 * e, a = (d[t] + d[1 + t]) / 255;
                          t = d[2 + t],
                            14 < e && e < 114 && (l += a),
                            t && a && (a = p[t] + 1, p[t] = a, s > a || (s = a, n = t));
                        }
                        l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), o = 1);
                      }
                      n && (o = 1),
                        f ? n && (f = 0, h = n) : h = n || i,
                        i = n,
                        I = o,
                        A = V(A, o ? 6.5 : 8, 4),
                        v.y += a / 41 - (o ? 1 : A) * e / 41 * A * B;
                    })(),
                      (() => {
                        for (let t = 32; t < 128; t += 2) {
                          let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                          for (let s = t >> 1 & 1; s < 128; s += 2) {
                            let t = h + 4 * s,
                              a = h + 4 * (127 - s),
                              e = d[t] / 255,
                              l = d[1 + a] / 255,
                              r = s / 63.5 - 1;
                            r = 1 - (r < 0 ? -r : r),
                              10 < s && s < 118
                              && (n = R(n, R(e * r, e * d[a] / 127.5)), o = R(o, R(l * r, l * d[1 + t] / 255))),
                              (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < e ? e : l) / 3)
                              && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                          }
                          c = i - c,
                            n = o - n,
                            (c < 0 ? -c : c) > (a < 0 ? -a : a) && (a = c),
                            (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                        }
                      })(),
                      (G[0] ? 1 : 0) + (G[2] ? -1 : 0) + D),
                    l = (G[1] ? 1 : 0) + (G[3] ? -1 : 0) + H,
                    r = navigator.getGamepads()[0];
                  if (r) {
                    var y = t => a[t]?.pressed || 0 < a[t]?.value;
                    let a = r.buttons;
                    r = r.axes;
                    var x = y(1) || y(3) || y(2) || y(0);
                    x !== M && (M = x) && (G[5] = 1),
                      t += (.2 < nt(-r[0]) ? -r[0] : 0) + (y(14) ? 1 : 0) + (y(15) ? -1 : 0),
                      l += (.2 < nt(-r[1]) ? -r[1] : 0) + (y(12) ? 1 : 0) + (y(13) ? -1 : 0),
                      $ && (.3 < nt(r[2]) && (U += 80 * r[2] * B), .3 < nt(r[3]) && (E += 80 * r[3] * B));
                  }
                  (l < 0 ? -l : l) < .05 && (l = 0),
                    (t < 0 ? -t : t) < .05 && (t = 0),
                    y = Math.atan2(l, t),
                    r = X(Math.hypot(l, t)),
                    t = r * Math.cos(y),
                    l = r * Math.sin(y);
                  let s = X(1 - 5 * R(a < 0 ? -a : a, e < 0 ? -e : e)),
                    z =
                      (h || (a += S * s * B, e += Y * s * B),
                        S = V(S, 0, I ? 8 : 4),
                        Y = V(Y, 0, I ? 8 : 4),
                        P = V(P, I ? (t || l ? I ? 7 : 4 : 0) * s : 0, I ? .1 < s ? 10 : t || l ? 5 : 7 : 1),
                        s = Math.sin(x = $ ? U * w : Math.PI) * P * B,
                        Math.cos(x) * P * B);
                  if (
                    a -= t * z - l * s,
                      e -= t * s + l * z,
                      (s = (x = 1 === K[h].H && K[h].l || O).inverse()).m41 = 0,
                      s.m42 = 0,
                      s.m43 = 0,
                      { x: a, z: e } = s.transformPoint({ x: a, z: e, w: 0 }),
                      v.x += a,
                      v.z += e,
                      h !== b
                  ) {
                    b = h;
                    let { x: t, y: a, z: e } = x.inverse().transformPoint(_);
                    v.x = t, v.y = a, v.z = e;
                  }
                  s = _.x, z = _.z;
                  let { x: n, y: o, z: c } = x.transformPoint(v);
                  _.x = n,
                    _.y = o,
                    _.z = c,
                    x = nt(k - o),
                    k = V(k, o + .1, 50 * x + 5),
                    h && (S = (_.x - s) / B, Y = (_.z - z) / B),
                    (t || l) && (m = 90 - y / w),
                    u = ct(u, m, 8 * B),
                    g += (r - g) * X(10 * B);
                })(),
                r = it(r, _.x, .5, B),
                z = it(z, _.y, 2, B),
                s = it(s, _.z, .5, B),
                $
                  ? (q = V(q, _.x, 18 + (t = 200 * f)),
                    W = V(W, _.y + 1.5, 15 + t),
                    N = V(N, _.z, 18 + t),
                    E = R(E < 87 ? E : 87, -87))
                  : (q = it(q, r, 1, 2 * B),
                    W = it(W, z + 13 + 15 * f, 4, 2 * B),
                    1 < ((t = (N = it(N, s + -18, 1, 2 * B)) - s) < 0 ? -t : t)
                    && (a = q - r, U = 270 + Math.atan2(t, a) / w, E = 90 - Math.atan2(Math.hypot(t, a), W - z) / w)),
                U = ot(U),
                dt(),
                G[5] = 0,
                (_.x < -25 || _.z < 109 ? -25 : -9) > _.y && e()),
              t = Z
                ? O.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + X(hC.clientWidth / 1e3))
                : O.rotate(-E, -U, -0).invertSelf().translateSelf(-q, -W, -N),
              0 < B
              && (c(),
                at.b6o(36160, T),
                at.v5y(0, 0, 128, 128),
                at.cbf(!0, !1, !0, !1),
                at.c4s(16640),
                at.uae(c("b"), !1, O.rotate(0, 180).invertSelf().translateSelf(-_.x, -_.y, .3 - _.z).toFloat32Array()),
                At(c("c"), 0, 1),
                at.cbf(!1, !0, !1, !1),
                at.c4s(16640),
                at.cbf(!1, !0, !0, !1),
                at.uae(c("b"), !1, O.translate(-_.x, -_.y, -_.z - .3).toFloat32Array()),
                At(c("c"), 0, 1),
                at.cbf(!0, !0, !0, !0),
                1 === h && (J[9].j = _.x < -15 && _.z < 0 ? 1 : 0)),
              n(),
              at.v5y(0, 0, 2048, 2048),
              j[0](yt(t, .3, 55, 10)),
              j[1](yt(t, 55, 177, 11)),
              at.b6o(36160, null),
              F(),
              at.v5y(0, 0, at.drawingBufferWidth, at.drawingBufferHeight),
              at.c4s(16640),
              at.uae(F("a"), !1, ht(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              at.uae(F("b"), !1, t.toFloat32Array()),
              at.ubu(F("k"), q, W, N),
              j[0](),
              j[1](),
              At(F("c"), !$, 0),
              o(),
              at.ubu(o("j"), at.drawingBufferWidth, at.drawingBufferHeight, lt),
              Z ? at.ubu(o("k"), 0, 0, 0) : at.ubu(o("k"), q, W, N),
              at.uae(o("b"), !1, t.inverse().toFloat32Array()),
              at.d97(4, 3, 5123, 0);
          },
          d = new Uint8Array(65536),
          b,
          I,
          A,
          P,
          S,
          Y,
          k,
          r,
          z,
          s,
          t = xt(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          n = gt(
            xt(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          o = gt(
            xt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          c = gt(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          F = gt(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          T =
            (o(), at.ubh(o("q"), 3), c(), at.uae(c("a"), !1, ht(1.4, .59, 1e-4, 1)), F(), at.ubh(F("q"), 3), at.c5w()),
          a = (t = at.c3z(), at.c25()),
          j = L(2, t => {
            let a, e = at.c25(), l = at.c5w(), r = F(t ? "j" : "i");
            return F(),
              at.ubh(F(t ? "h" : "g"), t),
              at.b6o(36160, l),
              at.d45([0]),
              at.r9l(0),
              at.a4v(33984 + t),
              at.b9j(3553, e),
              at.fas(36160, 36096, 3553, e, 0),
              at.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              at.t2z(3553, 10241, 9729),
              at.t2z(3553, 10240, 9729),
              at.t2z(3553, 34893, 515),
              at.t2z(3553, 34892, 34894),
              at.t2z(3553, 10243, 33071),
              at.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (a = t,
                    at.b6o(36160, l),
                    at.iay(36160, [36096]),
                    at.c4s(256),
                    at.uae(n("b"), !1, a),
                    At(n("c"), !$, 0))
                  : at.uae(r, !1, a);
              };
          });
        at.e8z(2929),
          at.e8z(2884),
          at.c70(1),
          at.c7a(1029),
          at.d4n(515),
          at.c5t(0, 0, 0, 1),
          at.b6o(36160, T),
          at.bb1(36161, t),
          at.r4v(36161, 33189, 128, 128),
          at.f8w(36160, 36096, 36161, t),
          at.a4v(33987),
          at.b9j(3553, a),
          at.fas(36160, 36064, 3553, a, 0),
          at.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          at.b9j(3553, at.c25()),
          at.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, C),
          at.gbn(3553),
          at.t2z(3553, 10241, 9987),
          at.t2z(3553, 10240, 9729),
          tt.map((t, a) => {
            t.h = a
              ? () =>
                tt[0].l.translate(0, g * X(.45 * Math.sin(9.1 * Q + Math.PI * (a - 1) - Math.PI / 2))).rotateSelf(
                  g * Math.sin(9.1 * Q + Math.PI * (a - 1)) * .25 / w,
                  0,
                )
              : () => O.translate(_.x, k, _.z).rotateSelf(0, u);
          });
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          J.map((t, a) => t.g = t.i = t.j = a ? 0 | e[a] : 0), pt.map((t, a) => t.j = 0 | l[a]), x = t, Q = a, st = r;
        } catch (t) {}
        rt = x < 0 ? 0 : 1 < x ? 1 : x,
          h4.innerHTML = "",
          y = 0,
          bt(),
          dt(),
          (() => {
            let a = 0,
              l = [],
              s = [],
              n = [],
              o = [],
              c = new Map(),
              i = new Int32Array(8),
              r = t => {
                let { x: a, y: e, z: l } = h[t], r = (m[0] = a, m[1] = e, m[2] = l, c.get(t = "" + (h.D ? f : i)));
                return void 0 !== r
                  ? (a = 3 * r, o[a] = (o[a++] + i[5]) / 2, o[a] = (o[a++] + i[6]) / 2, o[a] = (o[a] + i[7]) / 2)
                  : (c.set(t, r = c.size), s.push(a, e, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
                  r;
              },
              h,
              f = new Int32Array(i.buffer, 0, 5),
              m = new Float32Array(i.buffer);
            for (let t of K) {
              for (h of (m[3] = t.H ? t.F : 0, t.s)) {
                let { x: t, y: a, z: e } = ft(h);
                i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * a, i[7] = 32767 * e;
                for (let t = 2, a = r(0), e = r(1); h.length > t; ++t) l.push(a, e, e = r(t));
              }
              t.s = null, t.v = a, t.G = a = l.length;
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
          (() => {
            let r = 0,
              s = 0,
              t = 0,
              a = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  G.length = D = H = 0,
                  n = o = void 0,
                  document.hidden && vt(!0);
              },
              n,
              o,
              c;
            b1.onclick = () => vt(),
              b2.onclick = () => {
                vt(), $ = 1;
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b4.onclick = () => {
                et = !et, zt();
              },
              b5.onclick = () => vt(!0),
              onclick = () => {
                c = 1, Z || (G[5] = !0, $ && hC.requestPointerLock());
              },
              document.onvisibilitychange = onresize = onblur = a,
              onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && Z)
                  ? Z && !c || vt(!Z)
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
                  ? a && (G[t] = 1)
                  : G[t] = a);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                $ && (t || a) && (U += .1 * t, E += .1 * a);
              },
              hC.ontouchstart = a => {
                if (!Z) {
                  for (let t of a.changedTouches) {
                    $ && t.pageX > hC.clientWidth / 2
                      ? n || (n = t, r = U, s = E)
                      : o = o || t;
                  }
                  t = lt;
                }
              },
              hC.ontouchmove = ({ changedTouches: l }) => {
                if (!Z) {
                  for (
                    let { pageX: t, pageY: a, identifier: e } of l
                  ) {
                    n?.identifier === e && (U = r + (t - n.pageX) / 3, E = s + (a - n.pageY) / 3),
                      o?.identifier === e
                      && (D = -(t - o.pageX) / 18,
                        H = -(a - o.pageY) / 18,
                        D = (D < 0 ? -D : D) < .35 ? 0 : .8 * D,
                        H = (H < 0 ? -H : H) < .35 ? 0 : .8 * H);
                  }
                }
              },
              hC.ontouchend = a => {
                for (let t of a.changedTouches) {
                  t.identifier === n?.identifier && (n = void 0),
                    t.identifier === o?.identifier && (o = void 0, H = D = 0);
                }
                a.preventDefault(), a = lt - t, (!t || .02 < a && a < .4) && (G[5] = !0);
              },
              oncontextmenu = () => !1,
              a(),
              vt(!0);
          })(),
          e(),
          q = r = _.x,
          W = (z = _.y) + 13,
          N = (s = _.z) + -18,
          requestAnimationFrame(l);
      }
    },
    l = () => {
      if (a < 5) {
        var H = 0, Q = a++;
        let [v, p, d, b, I, A, P, S, Y, y, x, , k, z, F, T, t, j, w, C, D] =
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
          ]]][Q];
        y = y * y * 4;
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
              let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * Q + l];
              t < 32;
              ++t
            ) {
              let e = (32 * l + t) * M;
              for (var B, O = 0; O < 4; ++O) {
                if (m = 0, a && (m = D[a - 1].charCodeAt(t + 32 * O) - 40, m += 0 < m ? 106 : 0), m) {
                  if (!(B = f[m])) {
                    let l = 0,
                      r = 0,
                      s,
                      n,
                      o = B = m,
                      c = Q < 2
                        ? t => t % 1 * 2 - 1
                        : Mt,
                      i = Q < 2
                        ? Q < 1
                          ? t => t % 1 < .5 ? 1 : -1
                          : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                        : Mt,
                      h = new Int32Array(S + Y + y);
                    for (let a = 0, e = 0; S + Y + y > a; ++a, ++e) {
                      let t = 1;
                      S > a ? t = a / S : S + Y > a || (t = (1 - (t = (a - S - Y) / y)) * 3 ** (-x / 16 * t)),
                        e < 0
                        || (e -= 4 * M,
                          n = .00396 * 2 ** ((o + p - 256) / 12),
                          s = .00396 * 2 ** ((o + I - 256) / 12) * (1 + (Q ? 0 : 8e-4 * 9))),
                        h[a] = 80
                            * (c(l += n * t ** (d / 32)) * v + i(r += s * t ** (A / 32)) * b
                              + (P ? (2 * Math.random() - 1) * P : 0))
                            * t | 0;
                    }
                    B = f[B] = h;
                  }
                  for (let t = 0, a = 2 * e; B.length > t; ++t, a += 2) h[a] += B[t];
                }
              }
              for (let t, a = 0; M > a; ++a) {
                O = 0,
                  ((t = h[B = 2 * (e + a)]) || i)
                  && (o = .00308 * k,
                    1 != Q && 4 != Q || (o *= Math.sin(2 ** (t - 9) / M * B * Math.PI * 2) * C / 512 + .5),
                    o = 1.5 * Math.sin(o),
                    r += o * s,
                    c = (1 - z / 255) * (t - s) - r,
                    s += o * c,
                    t = 4 == Q ? s : 3 == Q ? c : r,
                    Q || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                    t *= F / 32,
                    i = 1e-5 < t * t,
                    n = Math.sin(u * B) * T / 512 + .5,
                    O = t * (1 - n),
                    t *= n),
                  B < g || (O += h[1 + B - g] * j / 255, t += h[B - g] * j / 255),
                  Pt[H + B] += h[B] = O,
                  ++B,
                  Pt[H + B] += h[B] = t;
              }
            }
          }
          H += h.length;
        }
        setTimeout(l);
      } else {
        for (H = Ct.createBuffer(2, 5362944, 44100), Q = 0; Q < 2; Q++) {
          for (
            let t = Q, a = H.getChannelData(Q);
            t < 10725888;
            t += 2
          ) {
            a[t >> 1] = Pt[t] / 65536;
          }
        }
        Dt.buffer = H, Dt.loop = !0;
      }
      e();
    },
    n = (t, a, e) =>
      O.translate(t + Math.sin(Q + 2) / 5, a + Math.sin(.8 * Q) / 3, e).rotateSelf(
        2 * Math.sin(Q),
        Math.sin(.7 * Q),
        Math.sin(.9 * Q),
      ),
    o,
    C = new Image(),
    c = (C.onload = C.onerror = () => {
      e();
    },
      C.src = jt,
      setTimeout(l, 9),
      (() => {
        let a = L(
            11,
            t => O.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
          ),
          e = mt(18);
        return L(10, t => s(j(e, a[t]).reverse(), j(e, a[t + 1]), 1)).flat();
      })()),
    i = d(
      p(
        m(u(20, 1, 1.15, 1), O.translate(0, -3).scale(3.5, 1, 3.5), P(.7, .4, .25, .7)),
        m(u(20, 1, 1.3, 1), O.translate(0, -2.5).scale(2.6, 1, 3), P(.7, .4, .25, .2)),
        m(u(b), O.translate(4, -1.2).scale3d(2), P(.7, .4, .25, .3)),
      ),
    ),
    h = d(
      p(
        m(u(b), O.translate(0, -8).scale(6, 15, 2.2)),
        m(u(b), O.translate(0, -14.1).scale(4, 13, 4)),
        m(u(20, 1), O.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
      ),
    );
  M(() => {
    g([b.slice(1)], O.translate(-2).scale3d(3).rotate(90, 0));
  }, 0),
    M(() => {
      let r = () => {
          let t = J[2].i, a = 1 - J[4].i;
          return t < a ? t : a;
        },
        t = (a, e, l) =>
          M(t => {
            t.h = () => O.translate(r() * Math.sin(3 * a + Q * a) * e),
              b.map(({ x: t, z: a }) => {
                g(u(11, 1), O.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), P(.5, .3, .7, .6)),
                  g(u(b), O.translate(4 * t, 7, l + 4 * a).scale(1, .3), P(.5, .5, .5, .3));
              }),
              g(d(p(
                m(u(b), O.translate(0, 0, l).scale(5, 1, 5), P(.8, .8, .8, .3)),
                ...[-1, 1].map(t =>
                  m(u(b), O.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), P(.8, .8, .8, .3))
                ),
              ))),
              g(u(b), O.translate(0, -3, l).scale(8, 2, 8), P(.4, .4, .4, .3));
          }),
        l = (M(t => {
          t.h = () => n(-12, 4.2, 40 * rt - 66), g(i), I(O.translate(0, -3, 4));
        }),
          L(7, t => m(u(6, 1), O.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), P(.3, .3, .38))).flat()),
        a = (A(O.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          A(
            O.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...mt(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
          ),
          g(u(b), O.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), P(.8, .8, .8, .2)),
          b.map(({ x: t, z: a }) => g(u(6), O.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), P(.6, .3, .3, .4))),
          [-23, 22].map(t => g(u(b), O.translate(0, 0, t).scale(3, 1, 8), P(.9, .9, .9, .2))),
          [-15, 15].map((a, e) => {
            g(u(b), O.translate(0, 6.3, a).scale(4, .3, 1), P(.3, .3, .3, .4)),
              g(u(b), O.translate(0, 1, a).scale(3, .2, .35), P(.5, .5, .5, .3)),
              M(t => {
                t.h = () => O.translate(0, 4.7 * -J[e + 1].g, a), g(l);
              });
          }),
          L(5, a =>
            L(2, t =>
              g(
                c,
                O.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                P(1, 1, .8, .2),
              ))),
          g(u(b), O.translate(3, 1.5, -20).scale(.5, 2, 5), P(.7, .7, .7, .2)),
          g(u(b), O.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(.75, .75, .75, .2)),
          g(u(5), O.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(.6, .3, .3, .4)),
          I(O.translate(-5.4, 1.5, -19).rotate(0, -90)),
          g(u(b), O.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), P(.8, .2, .2, .5)),
          g(d(
            p(
              v(
                m(u(6, 0, 0, .3), O.translate(8, -3, -4).scale(13, 1, 13), P(.7, .7, .7, .2)),
                m(u(6), O.translate(0, -8).scale(9, 8, 8), P(.4, .2, .5, .5)),
                m(u(6, 0, 0, .3), O.translate(0, -.92).scale(13, 2, 13), P(.8, .8, .8, .2)),
              ),
              m(u(5), O.scale(5, 30, 5), P(.4, .2, .6, .5)),
              m(u(5, 0, 1.5), O.translate(0, 1).scale(4.5, .3, 4.5), P(.7, .5, .9, .2)),
              m(u(b), O.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), P(.5, .5, .5, .5)),
              m(u(6), O.translate(15, -1.5, 4).scale(3.5, 1, 3.5), P(.5, .5, .5, .5)),
            ),
          )),
          M(t => {
            t.h = () =>
              O.translate(
                0,
                .01 < J[3].g ? (5 * Math.cos(1.5 * Q) + 2) * J[3].i * (1 - J[2].g) + -15 * (1 - J[3].g) : -500,
                0,
              ),
              I(O.translate(0, 1.2)),
              g(u(5), O.translate(0, -.2).scale(5, 1, 5), P(.6, .65, .7, .3));
          }),
          I(O.translate(15, -2, 4)),
          t(.7, 12, 35),
          t(1, 8.2, 55),
          M(t => {
            t.h = () => O.translate(r() * Math.sin(Q / 1.5 + 2) * 12),
              g(
                d(p(
                  v(
                    m(u(b), O.scale(1.5, 1, 5), P(.9, .9, .9, .2)),
                    m(u(6), O.scale(4, 1, 5), P(.9, .9, .9, .2)),
                    m(u(b), O.translate(0, -2).scale(2, 3.2, 1.9), P(.3, .8, .5, .5)),
                    m(u(16, 1, 0, 4), O.scale(1, 1, 1.5).rotate(0, 90), P(.9, .9, .9, .2)),
                  ),
                  m(u(b), O.scale(1.3, 10, 1.3), P(.2, .7, .4, .6)),
                )),
                O.translate(0, 0, 45),
              ),
              A(O.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          M(t => {
            t.h = () => O.translate(9.8 * (1 - r())),
              g(u(3), O.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), P(.3, .6, .6, .2)),
              g(u(8), O.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(.8, .8, .8, .2)),
              g(u(b), O.translate(-23, -3, 55).scale(5.2, 1.7, 3), P(.5, .5, .5, .3)),
              g(u(b), O.translate(-23, -2.2, 62).scale(3, 1, 4), P(.5, .5, .5, .3)),
              I(O.translate(-23, -.5, 66.5));
          }),
          g(u(b), O.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(.9, .9, .9, .2)),
          M(t => {
            t.h = () => O.translate(0, X(1 - 5 * r()) * f(J[4].g, J[5].g) * Math.sin(1.35 * Q) * 4),
              g(u(b), O.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(.7, .7, .7, .2)),
              g(
                d(p(m(u(b), O.scale(3, 1.4, 2.7)), m(u(b), O.scale(1.2, 8, 1.2)))),
                O.translate(-33, -3, 55),
                P(.7, .7, .7, .2),
              );
          }),
          M(t => {
            t.h = () => O.translate(0, 0, X(1 - 5 * r()) * f(J[4].g, J[5].g) * Math.sin(.9 * Q) * 8),
              g(d(
                p(
                  m(u(b), O.translate(-27, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2)),
                  m(u(b), O.translate(-27, -3, 55).scale(1, 3), P(.9, .9, .9, .2)),
                ),
              )),
              g(u(b), O.translate(-39, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2));
          }),
          M(t => {
            t.h = () => O.translate(0, -6.5 * J[4].i),
              g(u(6), O.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), P(.7, .7, .7, .4));
          }),
          [...m(
            d(v(
              m(u(b), O.translate(0, -3).scale(11, 1.4, 3), P(.9, .9, .9, .2)),
              p(
                m(u(6), O.rotate(0, 0, 90).scale(6, 8, 6), P(.3, .6, .6, .3)),
                m(u(4, 0, .01), O.translate(0, 6).scale(12, 2, .75).rotate(0, 45), P(.3, .6, .6, .3)),
                m(u(6), O.rotate(0, 0, 90).scale(5, 12, 5), P(.3, .6, .6, .3)),
                ...[5, 0, -5].map(t =>
                  m(u(5), O.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(.3, .6, .6, .3))
                ),
              ),
            )),
            O,
          )]),
        e =
          (g(a, O.translate(-53, 0, 55)),
            g(u(6), O.translate(-61.3, -2.4, 49).scale(3, 1, 5), P(.4, .6, .6, .3)),
            g(u(7), O.translate(-57, -2.6, 46).scale(4, 1, 4), P(.8, .8, .8, .3)),
            I(O.translate(-55, -1.1, 46).rotate(0, 90)),
            M(t => {
              t.h = () => O.translate(-75, (1 - J[5].i) * (1 - J[6].g) * 3, 55).rotate(180 * (1 - J[5].i) + z, 0), g(a);
            }, 2),
            g(u(b), O.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), P(.7, .7, .7, .2)),
            g(u(3, 0, -.5), O.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(.8, .8, .8, .2)),
            g(
              d(p(
                v(
                  m(u(b), O.translate(-100, -2.5, 55).scale(8, 1, 8), P(.8, .8, .8, .2)),
                  m(u(b), O.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(.8, .8, .8, .2)),
                  m(u(b), O.translate(-100, -2.6, 70).scale(3, 1.1, 7), P(.8, .8, .8, .2)),
                  m(u(b), O.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(.8, .8, .8, .2)),
                  m(u(6), O.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(.6, .6, .6, .3)),
                  m(u(b), O.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(.8, .8, .8, .2)),
                  m(u(b), O.translate(-100, .42, 92).scale(3, 1.1, 4.1), P(.8, .8, .8, .2)),
                ),
                m(u(8), O.translate(-100, -1, 55).scale(7, .9, 7), P(.3, .3, .3, .4)),
                m(u(8), O.translate(-100, -2, 55).scale(4, .3, 4), P(.4, .4, .4, .5)),
                m(u(8), O.translate(-100, -3, 55).scale(.6, 1, .6), P(.4, .4, .4, .5)),
              )),
              O,
            ),
            A(O.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            A(O.translate(-89, .2, 80), [0, 0, 6]),
            g(d(
              p(
                m(u(b), O.translate(-100, 1, 63).scale(7.5, 4), P(.5, .5, .5, .4)),
                m(u(b), O.translate(-100, 0, 70).scale(2, 2, 10), P(.5, .5, .5, .4)),
                m(u(20, 1), O.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(.5, .5, .5, .4)),
              ),
            )),
            M(t => {
              t.h = () => O.translate(-99.7, 5.3 * -J[6].g - 2, 63.5), g(l);
            }),
            b.map(({ x: a, z: e }) => {
              g(u(6), O.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), P(.6, .15, .15, .8)),
                [4, -.4].map(t =>
                  g(u(6), O.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), P(.4, .2, .2, .8))
                );
            }),
            L(7, t => {
              g(
                u((23 * t + 1) % 5 + 5, 0, .55),
                O.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                  5 + t / 2,
                  1 + t / 6,
                  5 + t / 3,
                ),
                P(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
              );
            }),
            g(u(b), O.translate(-87, -9.5, 24).scale(7, 1, 3), P(.4, .5, .6, .4)),
            g(u(4), O.translate(-86, -9.2, 27).scale(5, 1, 5), P(.5, .6, .7, .3)),
            g(u(18, 1), O.translate(-86, -9, 31).scale(1.5, 1, 1.5), P(.3, .3, .4, .1)),
            I(O.translate(-86, -7.5, 31)),
            M(t => {
              t.h = () => O.translate(0, 3.5 * (1 - R(J[6].g, J[7].g)) + f(J[7].i, J[6].i) * Math.sin(Q) * 5),
                [0, 12, 24].map(t =>
                  g(u(b), O.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.2, .5, .6, .2))
                );
            }),
            M(t => {
              t.h = () => {
                let t = f(J[7].i, J[6].i);
                return O.translate(0, t * Math.sin(Q + 3) * 6, 6 * Math.sin(.6 * Q + t) * t);
              },
                [6, 18].map(t =>
                  g(u(b), O.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.1, .4, .5, .2))
                );
            }),
            g(
              d(p(
                v(
                  m(u(b), O.scale(11, 1, 13), P(.3, .4, .6, .3)),
                  m(u(5), O.translate(0, 0, -7).scale(2, 1.2, 2), P(.2, .4, .7, .3)),
                  m(u(5), O.scale(9, 1.2, 9), P(0, .2, .3, .5)),
                ),
                m(u(5), O.scale(5.4, 5, 5.4), P(0, .2, .3, .5)),
              )),
              O.translate(-38.9, -11.3, 17),
            ),
            I(O.translate(-38.9, -9.6, 10)),
            M(t => {
              t.h = () => O.translate(0, -7.3 * J[7].i),
                g(
                  d(p(
                    v(
                      m(u(5), O.translate(0, 2).scale(5, 7, 5).skewY(8), P(.2, .4, .5, .5)),
                      m(u(5), O.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(.25, .35, .5, .5)),
                      m(u(5), O.translate(0, 9).scale(.6, 7, .6).skewY(8), P(.35, .3, .5, .5)),
                    ),
                    m(u(5), O.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(.2, .4, .5, .5)),
                  )),
                  O.translate(-38.9, -11.3, 17),
                ),
                A(O.translate(-38.9, -.3, 17).rotate(0, 0, 10), ...mt(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5]));
            }),
            b.map(({ x: t, z: a }) => {
              o = O.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                g(u(18, 1), o.scale(1, 4), P(.25, .25, .25, 1)),
                [1.5, 8].map(t => g(u(18, 1), o.translate(0, t - 4).scale(1.5, .5, 1.5), P(.6, .6, .6, .3)));
            }),
            g(
              d(p(
                v(
                  m(u(6), O.translate(0, 0, -36).scale(15, 1.2, 15), P(.7, .7, .7, .3)),
                  m(u(b), O.translate(0, 0, -18).scale(4, 1.2, 6), P(.45, .4, .6, .3)),
                ),
                ...L(6, a =>
                  L(6, t =>
                    m(
                      u(6),
                      O.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                      P(.7, .7, .7, .3),
                    ))).flat(),
              )),
              O.translate(-38.9, -11.3, 17),
            ),
            A(O.translate(-38.9, -8.4, -21), [-5, -2, 8], [5, -2, 8], [0, -5, 7], [1, 4, 2.6]),
            g(u(5), O.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), P(.8, .1, .25, .4)),
            I(O.translate(-84, -.5, 85).rotate(0, 45)),
            M(t => {
              t.h = () => n(-123, 1.4, 55 + -65 * st), I(O.translate(0, -3, -4).rotate(0, 180)), g(i);
            }),
            A(O.translate(-115, .2, -12), [0, 0, 3.5]),
            d(p(
              m(u(b), O.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), P(.25, .25, .35, .3)),
              m(u(3), O.translate(0, 0, -5.5).scale(3, 2), P(.6, .3, .4, .3)),
              ...[-1.2, 1.2].map(t => m(u(b), O.translate(t, -.5, 1).scale(.14, .3, 6.5), P(.7, .2, 0, .3))),
            ))),
        s = (M(t => {
          t.h = () => {
            let t = Math.sin(1.1 * Q);
            return O.translate.call(O, 0, -2, f(J[10].g, J[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
          }, L(2, t => g(e, O.translate(9 * t - 110 + (1 & t), 1.7, -12)));
        }),
          M(t => {
            t.h = () => {
              let t = Math.sin(2.1 * Q);
              return O.translate.call(O, 0, -2, f(J[10].g, J[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
            }, L(2, t => g(e, O.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
          }),
          M(t => {
            t.h = () => {
              let t = Math.sin(1.5 * Q);
              return O.translate.call(
                O,
                0,
                -2,
                -8.5 * R((1 - J[10].g) * (1 - f(J[10].g, J[11].g)), f(J[10].g, J[11].g) * (t < 0 ? -t : t)) + 10,
              );
            }, L(3, t => g(e, O.translate(9 * t - 106, 1.7, -12)));
          }),
          g(
            d(p(
              v(
                m(u(b), O.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                m(u(b), O.translate(26.5, -.6, 10).scale(17, 2, .5)),
              ),
              ...L(4, t => m(u(b), O.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
              ...L(3, t => m(u(b), O.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
            )),
            O.translate(-123, 0, -12),
            P(.5, .5, .6, .2),
          ),
          g(u(5), O.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), P(.25, .25, .35, 1)),
          g(u(b), O.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(.8, .8, .8, .2)),
          g(u(6), O.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), P(.6, .5, .7, .2)),
          I(O.translate(-116, -1.4, -18).rotate(0, 180)),
          L(3, t => {
            g(h, O.translate(12 * t - 109, -9, -12), P(.6, .6, .6, .3)),
              g(h, O.translate(-77, -9, -12 * t - 20).rotate(0, 90), P(.6, .6, .6, .3));
          }),
          g(d(
            p(
              m(u(12), O.translate(-77, -13.9, -12).scale(4, 18.2, 4), P(.7, .7, .7, .2)),
              m(u(b), O.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), P(.4, .5, .6, .2)),
              m(u(b), O.translate(-77, 0, -14).scale(1.5, 2.2, 2), P(.4, .5, .6, .2)),
              m(u(12), O.translate(-77, 2.8, -12).scale(3, 5, 3), P(.4, .5, .6, .2)),
            ),
          )),
          g(u(b), O.translate(-115.5, -17, -12).scale(.5, 15, 2.2), P(.6, .6, .6, .3)),
          g(u(b), O.translate(-77, -17, -50.5).scale(2.2, 15, .5), P(.6, .6, .6, .3)),
          g(u(b), O.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), P(.6, .6, .6, .3)),
          g(d(
            p(
              m(u(b), O.translate(-93, -5.8, -40).scale(9, 1, 5), P(.8, .8, .8, .1)),
              m(u(9), O.translate(-98, -5.8, -40).scale(3, 8, 3), P(.7, .7, .7, .2)),
            ),
          )),
          g(u(9), O.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), P(.5, .5, .5, .3)),
          I(O.translate(-98, -4.4, -40).rotate(0, 90)),
          A(O.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          g(d(
            p(
              v(
                m(u(6, 0, 0, .6), O.translate(-100, .7, 105.5).scale(8, 1, 11), P(.7, .7, .7, .2)),
                m(u(b), O.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), P(.7, .7, .7, .2)),
                m(u(b), O.translate(-91.2, .7, 107).scale(3, 1, 3.3), P(.7, .7, .7, .2)),
              ),
              m(u(5), O.translate(-100, .7, 113).scale(4, 3, 4), P(.7, .7, .7, .2)),
            ),
          )),
          L(4, a =>
            M(t => {
              t.h = () => {
                let t = f(J[8].i, J[12].i);
                return O.translate(
                  (2 < a ? 2 * (1 - t) + t : 0) - 100,
                  t * Math.sin(1.3 * Q + 1.7 * a) * (3 + a / 3) + .7,
                  115 + (1 & a ? -1 : 1) * (1 - J[8].i) * (1 - J[12].i) * -7
                    + (t < .05 ? .05 : t) * Math.cos(1.3 * Q + 7 * a) * (4 - 2 * (1 - a / 3)),
                );
              },
                g(
                  u(6),
                  O.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                  P(.5 - a / 8, a / 12 + .5, .7, .3),
                );
            })),
          M(t => {
            t.h = () => {
              let t = f(J[8].i, J[12].i);
              return O.translate(2.5 * (1 - t) - 139.7, -3 * (1 - J[8].g) + t * Math.sin(.8 * Q) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * Q) * (3 * t + 3), 0);
            },
              g(d(p(m(u(10), O.scale(6, 2, 6), P(.1, .6, .5, .3)), m(u(10), O.scale(3.3, 6, 3.3), P(.1, .6, .5, .5))))),
              o = O.translate(-7.5).rotate(0, 90),
              g(u(15), o.scale(3, 2.3, 3), P(.4, .4, .4, .3)),
              g(u(10), o.scale(2, 2.5, 2), P(.3, .8, .7, .3)),
              g(u(5), o.scale(1, 3), P(.5, .5, .5, .5)),
              I(o.translate(0, 3.4).rotate(0, 180)),
              [-1, 1].map(t =>
                g(c, O.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), P(1, 1, .8, .2))
              ),
              A(O.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(a => {
            g(u(15, 1), O.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), P(.6, .24, .2, .5)),
              [7.2, 1.5].map(t =>
                g(u(15, 1), O.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), P(.5, .24, .2, .4))
              ),
              g(c, O.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), P(1, 1, .8)),
              g(
                d(p(
                  m(u(b), O.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), P(.5, .5, .5, .4)),
                  m(u(b), O.scale(3, 3, 10), P(.6, .24, .2, .5)),
                  m(u(30, 1), O.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(.6, .24, .2, .5)),
                  m(u(5), O.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(.6, .24, .2, .5)),
                  m(u(5), O.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), P(.6, .24, .2, .5)),
                )),
                O.translate(a - 100, .7, 97),
              );
          }),
          M(t => {
            t.h = () => O.translate(-100, .6 - 6 * J[12].g, 96.5).scale(.88, 1.2), g(l);
          }),
          [
            ...m(u(28, 1), O.scale(8, 1, 8), P(.45, .45, .45, .2)),
            ...m(u(5), O.translate(0, 1).scale(1, .2), P(.3, .3, .3, .2)),
          ]);
      M(t => {
        t.h = () => O.translate(-80, 1, 106).rotate(0, 40 + Y),
          g(d(
            p(
              m(u(28, 1), O.scale(8, 1, 8), P(.45, .45, .45, .2)),
              m(u(b), O.translate(0, 0, -5.5).scale(1.5, 3, 2.5), P(.45, .45, .45, .2)),
            ),
          )),
          g(u(8), O.translate(0, 2).scale(3, 1.5, 3), P(.7, .7, .7, .1)),
          g(u(5), O.translate(0, 2).scale(1, 2), P(.3, .3, .3, .2)),
          A(O.translate(0, 3), ...mt(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
      }),
        M(t => {
          t.h = () => O.translate(-64, 1, 106).rotate(0, k),
            g(d(
              p(
                m(u(28, 1), O.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                m(u(b), O.scale(9, 5, 2), P(.3, 0, 0, .3)),
              ),
            )),
            g(s),
            [-1, 1].map(t =>
              g(c, O.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))
            );
        }),
        M(t => {
          t.h = () => O.translate(-48, 1, 106).rotate(0, 180 - k),
            g(d(
              p(
                m(u(30, 1), O.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                m(u(b), O.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                m(u(b), O.translate(0, 0, 7).scale(2, 5, 9), P(.3, 0, 0, .3)),
              ),
            )),
            g(s);
        }),
        M(t => {
          t.h = () => O.translate(-48, 1, 90).rotate(0, 270 + k),
            g(d(
              p(
                m(u(30, 1), O.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                m(u(b), O.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                m(u(b), O.translate(0, 0, -7).scale(2, 5, 9), P(.3, 0, 0, .3)),
              ),
            )),
            g(s);
        }),
        g(u(b), O.translate(-56, 1, 106).scale(.7, .8, 2.5), P(.7, .7, .7, .2)),
        g(u(b), O.translate(-48, 1, 98).scale(2.5, .8, .7), P(.7, .7, .7, .2)),
        g(u(b), O.translate(-39, .4, 90).scale(2, 1, 2), P(.7, .7, .7, .3)),
        g(u(b), O.translate(-34.2, .4, 90).scale(3, 1, 3), P(.7, .7, .7, .3)),
        I(O.translate(-34, 2.7, 96).rotate(-12, 0)),
        g(u(5), O.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), P(.2, .5, .5, .6)),
        [P(.1, .55, .45, .2), P(.2, .5, .5, .3), P(.3, .45, .55, .4)].map((a, e) =>
          M(t => {
            t.h = () =>
              O.translate(
                0,
                (1 - J[13].i) * (1 - J[14].i) * (e ? 0 : 3) + f(J[13].i, J[14].i) * Math.sin(1.5 * Q + 1.5 * e) * 4,
              ),
              g(u(b), O.translate(-23.5, .5, 90 + 6.8 * e).scale(1 === e ? 2 : 3.3, 1, 3.3), a),
              2 === e && g(u(b), O.translate(-29.1, .4, 90).scale(2.1, 1, 3), P(.7, .7, .7, .3)),
              1 === e
              && g(
                u(b),
                O.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                P(.6, .6, .7, .3),
              );
          })
        ),
        g(d(
          p(
            m(u(6, 0, 0, .3), O.translate(0, -.92, 95).scale(14, 2, 14), P(.8, .8, .8, .2)),
            m(u(5), O.translate(0, 0, 95).scale3d(6), P(.3, .3, .3, .5)),
          ),
        )),
        [8, -6.1].map((a, e) =>
          L(
            3,
            t =>
              g(
                h,
                O.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e),
                1 & t ? P(.5, .5, .5, .3) : P(.35, .35, .35, .5),
              ),
          )
        ),
        [-1, 1].map(t => g(c, O.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))),
        I(O.translate(0, 1.7, 82).rotate(0, 180)),
        g(u(5), O.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(.5, .3, .3, .4)),
        g(d(
          p(
            v(
              m(u(b), O.translate(0, 16, 110.5).scale(12, 1, 3), P(.5, .3, .3, .4)),
              m(u(b), O.translate(0, 16, 111).scale(3, 1, 3.8), P(.5, .3, .3, .4)),
            ),
            m(u(5), O.translate(0, 16, 103.5).scale(5.5, 5, 5.5), P(.5, .3, .3, .4)),
          ),
        )),
        M(t => {
          t.h = () => {
            let t = Math.sin(Q);
            return O.translate(-2 * t).rotate(0, 0, 25 * t);
          },
            g(u(3), O.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), P(.5, .3, .3, .4)),
            [22, 30].map(t => {
              g(u(6), O.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), P(.7, .7, .7, .4)),
                g(u(b), O.translate(0, 6.2, t + 95).scale(.5, 11, .5), P(.5, .3, .3, .4));
            });
        }),
        g(u(6), O.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(.5, .6, .7, .3)),
        g(u(b), O.translate(0, 16, 129).scale(1.5, 1, 2), P(.5, .6, .7, .3)),
        g(u(7), O.translate(0, 16.2, 133).scale(5, 1, 5), P(.4, .5, .6, .4)),
        M(t => {
          t.h = () => {
            let t = f(f((J[14].g + J[14].i) / 2, J[13].i), (J[15].g + J[15].i) / 2);
            return O.translate(0, 16 * t, 8.5 * X(2 * t - 1) + 95);
          },
            g(u(5), O.scale(5, 1.1, 5), P(.5, .3, .3, .4)),
            g(u(5), O.scale(5.5, .9, 5.5), P(.25, .25, .25, .4)),
            I(O.translate(0, 1.5, -1).rotate(0, 180));
        }),
        A(O.translate(0, 3, 95), ...mt(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
        A(O.translate(0, 19, 134), [0, 0, 3.5]);
    }),
    tt = [
      M(() => {
        [0, 180].map(t => g(c, O.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), P(1, 1, .8))),
          g(ut(20), O.translate(0, 1).scale(.5, .5, .5), P(1, .3, .4));
        let a = m(
          d(p(u(15, 1), m(u(b), O.translate(0, 0, 1).scale(2, 2, .5)))),
          O.rotate(-90, 0).scale(.1, .05, .1),
          P(.3, .3, .3),
        );
        [-1, 1].map(t => g(a, O.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
          g(u(b), O.translate(0, .9, .45).scale(.15, .02, .06), P(.3, .3, .3)),
          g(ut(20), O.scale(.7, .8, .55), P(1, .3, .4));
      }),
      ...[-1, 1].map(t =>
        M(() => {
          g(u(10, 1), O.translate(.3 * t, -.8).scale(.2, .7, .24), P(1, .3, .4));
        })
      ),
    ],
    kt = M(() => {
      g(u(6, 1), O.scale(.13, 1.4, .13), P(.3, .3, .5, .1)),
        g(u(8), O.translate(0, 1).scale(.21, .3, .21), P(1, .5, .2)),
        g(u(3), O.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), P(.2, .2, .2, .1));
    }, 0),
    Tt = M(() => {
      g(u(6), O.scale(.77, 1, .77), P(1, .3, .5));
    }, 0),
    Ft = M(() => {
      g(
        ut(40, 30, (t, a, e) => {
          let l = a / 30, r = .05 * t * Math.PI, s = l ** .6 * Math.PI / 2;
          return t = l * l * Math.sin(t * Math.PI * .35) / 4,
            29 === a
              ? { x: e.D = 0, y: -.5, z: 0 }
              : {
                x: Math.cos(r) * Math.sin(s),
                y: Math.cos(l * Math.PI) - l - t,
                z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
              };
        }),
        O.scale3d(.7),
        P(1, 1, 1),
      ), [-1, 1].map(t => g(ut(15), O.translate(.16 * t, .4, -.36).scale3d(.09)));
    }, 0);
});
