let D,
  T,
  O,
  A,
  M,
  Y,
  F,
  C,
  Q,
  j,
  k,
  $,
  e1,
  I,
  c,
  a1,
  x,
  t1,
  y,
  l1,
  r1,
  z = 0,
  s1 = 0,
  w = 0,
  c1 = 0,
  o1 = 0,
  n1 = 0,
  i1 = 0,
  f1 = 0,
  m1 = 0,
  h1 = 0,
  B = 0,
  R = 0,
  X = 0,
  u1 = 0,
  g1 = 13,
  q = 180,
  v1 = .1,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  x1 = [],
  H = [],
  N = [],
  d1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  L = e => e < 0 ? -e : e,
  y1 = (e, a) => e < a ? e : a,
  p1 = (e, a) => a < e ? e : a,
  z1 = (e, a) => L(e) > a ? e : 0,
  E = (e, a = 0, t = 1) => e < a ? a : t < e ? t : e,
  S1 = e => _1(G(e * $1), _(e * $1)) / $1,
  w1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * E(t) || 0,
  U = (e, a, t) => (0 < t ? t < 1 ? e + (a - e) * t : a : e) || 0,
  A1 = (e, a) => (e = E(e), U(e, 1 - e, a)),
  M1 = (e, a, t = 0) => l(e * e + a * a + t * t),
  W = (e = 0, a = 0, t = 0, l = 1) => {
    D = b.m11 * e + b.m21 * a + b.m31 * t + b.m41 * l,
      T = b.m12 * e + b.m22 * a + b.m32 * t + b.m42 * l,
      O = b.m13 * e + b.m23 * a + b.m33 * t + b.m43 * l,
      A = b.m14 * e + b.m24 * a + b.m34 * t + b.m44 * l;
  },
  p = (
    e,
    a = P1,
    t = 0,
  ) => (t *= 16,
    a[t++] = e.m11,
    a[t++] = e.m12,
    a[t++] = e.m13,
    a[t++] = e.m14,
    a[t++] = e.m21,
    a[t++] = e.m22,
    a[t++] = e.m23,
    a[t++] = e.m24,
    a[t++] = e.m31,
    a[t++] = e.m32,
    a[t++] = e.m33,
    a[t++] = e.m34,
    a[t++] = e.m41,
    a[t++] = e.m42,
    a[t++] = e.m43,
    a[t] = e.m44,
    a),
  K = (
    e = S,
    a = b,
  ) => (a.m11 = e.m11,
    a.m12 = e.m12,
    a.m13 = e.m13,
    a.m14 = e.m14,
    a.m21 = e.m21,
    a.m22 = e.m22,
    a.m23 = e.m23,
    a.m24 = e.m24,
    a.m31 = e.m31,
    a.m32 = e.m32,
    a.m33 = e.m33,
    a.m34 = e.m34,
    a.m41 = e.m41,
    a.m42 = e.m42,
    a.m43 = e.m43,
    a.m44 = e.m44,
    a),
  o = (e, a, t) => S.translate(e, a, t),
  f = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  i = (e, a, t) => (e.C = t, e.u = a, e),
  I1 = (e, a, t = e.u) => (K(a), i(e.map(({ x: e, y: a, z: t }) => (W(e, a, t), { x: D, y: T, z: O })), t, e.C)),
  n = (e, a, t) => e.map(e => I1(e, a, t)),
  Y1 = (t, l = 0) =>
    f(t, e => {
      let a = _(2 * J * e / t);
      return { x: G(2 * J * e / t), y: 0, z: L(a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  F1 = (l, r, s) =>
    l.map((e, a, { length: t }) => i([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.u, s)),
  m = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? Y1(e, l) : d1,
    l = I1(e, o(0, 1).scale3d(0 < t ? t : 1)),
    e = I1(e, o(0, -1).scale3d(t < 0 ? -t : 1)).reverse(),
    [...F1(e, l, a), l, e]),
  C1 = (l, r = l, s = (e, a) => (a *= J / r, { x: _(e *= 2 * J / l) * G(a), y: _(a), z: G(e) * G(a) })) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let a = 0; r > a; a++) {
        let e = i([], 0, 1);
        c.push(e),
          e.push(s(t, a, e)),
          a && e.push(s((t + 1) % l, a, e)),
          r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
          e.push(s(t, a + 1 % r, e));
      }
    }
    return c;
  },
  j1 = e => 1 - r(-w * e),
  P = (e, a, t) => U(e, a, j1(t)),
  k1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  D1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  T1 = e => G(e * J * 2),
  O1 = (e, a) => {
    1 / 0 > v1 && (v1 = z + a, h4.innerHTML = e);
  },
  Q1 = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        n1 = x1.reduce((e, a) => e + a.i, 0)
      ] + " / XIII";
  },
  B1 = () => {
    localStorage.spdnt22 = JSON.stringify([H.map(e => e.i), x1.map(e => e.i), g1, z, I]);
  },
  h = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  u = () => {
    let l = [];
    c = (e, a = new DOMMatrix(), t) => l.push(...n(e, a, t)), N.push({ j: new DOMMatrix(), o: l });
  },
  g = e => {
    let a = N.at(-1).j,
      t = H.length,
      l = {
        i: 0,
        g: 0,
        h: 0,
        j: a,
        G: e,
        F() {
          l.g = P(l.g, l.i, 4),
            l.h = P(l.h, l.i, 1),
            K(a).multiplySelf(e),
            C && (W(), M1(B - D, R - T, X - O) < 3)
              ? l.i
                ? .7 < l.g && (l.i = 0, (g1 = t) && O1("* click *", 1), B1())
                : l.g < .3 && (l.i = 1, (g1 = t) && O1("* click *", 1), B1())
              : l.i && .8 < l.g && 13 === t && (l.i = 0,
                n1 < 13
                  ? O1("Not leaving now, there are souls to catch!", 3)
                  : i1 || (O1("Well done. They will be punished.<br>Thanks for playing", 1 / 0), i1 = 1)),
            b.rotateSelf(50 * l.g - 25, 0).translateSelf(0, 1).m44 = l.g;
        },
      };
    H.push(l),
      c(m(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), h(.4, .5, .5)),
      c(m(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), h(.4, .5, .5)),
      c(m(), e.translate(0, -.4).scale(.5, .1, .5), h(.5, .5, .4));
  },
  v = (o, ...n) => {
    let i,
      f,
      m,
      h,
      u = 0,
      g = 0,
      v = 1,
      d = -1,
      p = {
        i: 0,
        F() {
          if (!p.i) {
            let e, a, t, l, r, s = 1, c = 1 / 0;
            for (let t = 0; n.length > t; t++) {
              let e = n[t], a = M1(S - e[0], A - e[1]);
              s = y1(s, a / e[2]), (a -= e[2]) < 0 ? r = 1 : c > a && (c = a, b = e);
            }
            r
            || (e = S - b[0],
              a = A - b[1],
              t = M1(e, a),
              l = _1(-a, e),
              v && (h = E(h / (1 + Z1())), g = (Z1() - .5) * J / 2),
              l += g,
              d = -_(l),
              u = G(l),
              .1 < t && (t = y1(t, b[2]) / t, S = e * t + b[0], A = a * t + b[1])),
              v = r,
              h = P(h, 3 + 6 * (1 - s), 3 + s),
              M = P(M, S = P(S, S + d, h), h),
              I = P(I, A = P(A, A + u, h), h),
              i = w1(i, _1(M - f, I - m) / $1 - 180, j1(3)),
              K(Y).multiplySelf(o).translateSelf(f = M, 0, m = I).rotateSelf(0, i, 7 * G(1.7 * z)),
              W(),
              M1(B - D, R - T, X - O) < 1.6
              && (p.i = 1,
                O1(
                  [
                    ,
                    "Mark Zuckemberg<br>made the world worse",
                    "Giorgia Meloni<br>fascist",
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
                  ][n1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                  6,
                ),
                Q1(),
                B1());
          }
          p.i
            && K(N[24].j).translateSelf(
              e % 4 * 1.2 - 1.7 + G(z + e) / 7,
              -2,
              1.7 * (e / 4 | 0) - 5.5 + L(e % 4 - 2) + _(z / 1.5 + e) / 6,
            );
        },
      },
      b = n[0],
      [S, A] = b,
      [M, I] = b,
      Y = N.at(-1).j,
      e = x1.length;
    x1.push(p);
  },
  R1 = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  X1 = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = M1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  q1 = (l, r) => {
    let s, c, o, n = r.B;
    for (let e = 0; n.length > e; ++e) {
      if ((s = R1(l, n[e]) - l.w) < -8e-5 ? o = r : 8e-5 < s && (c = r), o && c) {
        c = [], o = [], n = r.B, e = r.v;
        let a = n.at(-1), t = R1(l, a) - l.w;
        for (let e of n) {
          s = R1(l, e) - l.w,
            t < 8e-5 && o.push(a),
            -8e-5 < t && c.push(a),
            (8e-5 < t && s < -8e-5 || t < -8e-5 && 8e-5 < s)
            && (t /= s - t,
              a = { x: a.x + (a.x - e.x) * t, y: a.y + (a.y - e.y) * t, z: a.z + (a.z - e.z) * t },
              c.push(a),
              o.push(a)),
            a = e,
            t = s;
        }
        return {
          m: 2 < c.length && { B: i(c, n.u, n.C), v: e, A: r },
          l: 2 < o.length && { B: i(o, n.u, n.C), v: e, A: r },
        };
      }
    }
    return { m: c, l: o };
  },
  s = (e, a, t = X1(a.B)) => {
    let l, r;
    return e
      ? ({ m: l, l: r } = q1(e, a), l || r || e.o.push(a), l && (e.m = s(e.m, l, t)), r && (e.l = s(e.l, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, o: [a], m: 0, l: 0 },
      e;
  },
  t = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { m: t, l } = q1(e, a);
        t || l || (0 < s * R1(e, r) ? t = a : l = a), t && (e.m ? o(e.m, t) : c.push(t)), l && e.l && o(e.l, l);
      };
    for (let e of r.o) o(a, e);
    return c;
  },
  H1 = (e, a) => e && (a(e), H1(e.m, a), H1(e.l, a)),
  N1 = e => (H1(e, a => {
    let e = a.l;
    a.l = a.m, a.m = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.o) e.v = !e.v;
  }),
    e),
  L1 = e => e.length ? e.reduce((e, a) => s(e, { B: a, v: 0, A: 0 }), 0) : e,
  E1 = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = L1(l), a) {
        a = L1(a), H1(l, e => e.o = t(a, e, 1)), H1(a, e => r.push([e, t(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) s(l, e, a);
      }
      return l;
    }),
  d = (e, ...a) => {
    let t = e => {
        let a;
        return e.A && ((a = l.get(e.A)) ? (r.delete(a), e = t(e.A)) : l.set(e.A, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = N1(E1(N1(L1(e)), ...a)),
      H1(e, a => {
        for (let e of a.o) r.set(t(e), e.v);
      }),
      Array.from(r, ([{ B: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return i(a ? t.reverse() : t, e.u, e.C);
      });
  },
  V = () => K(S, N[++a1].j),
  U1 = (e, a) => {
    Y
      ? 1100 < hC.width && Z.d97(4, N[39].D - N[37].s, 5123, 2 * N[37].s)
      : (Z.das(4, N[a].D - N[a].s, 5123, 2 * N[a].s, x1.length),
        Z.das(4, N[42].D - N[42].s, 5123, 2 * N[42].s, H.length),
        Z.d97(4, (e ? N[39].D : N[37].s) - 3, 5123, 6));
  },
  W1 = (e, a = 35633) => (a = Z.c6x(a), Z.s3c(a, e), Z.c6a(a), a),
  K1 = (e, a) => {
    let t = {}, l = Z.c1h();
    return Z.abz(l, e), Z.abz(l, W1(a, 35632)), Z.l8l(l), e => e ? t[e] || (t[e] = Z.gan(l, e)) : Z.u7y(l);
  },
  b = new DOMMatrix(),
  S = new DOMMatrix(),
  P1 = new Float32Array(16),
  V1 = new Float32Array(352),
  J1 = new Float32Array(720),
  G1 = new Uint8Array(65536),
  { PI: J, atan2: _1, sin: G, cos: _, sqrt: l, exp: r, random: Z1 } = Math,
  $1 = J / 180,
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in Z) Z[e[0] + [...e].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = Z[e];
D1(() => {
  let e = 0,
    s = () => {
      if (2 == ++e) {
        let l = a => {
            requestAnimationFrame(l);
            let e = (a - (M || a)) / 1e3;
            if (s1 += e, z += w = Y ? 0 : y1(.055, e), M = a, 0 < w) {
              e = (e, a, t, l) =>
                e.translateSelf(a + G(z + 2) / 5, t + G(.8 * z) / 3, l).rotateSelf(2 * G(z), G(.7 * z), G(.9 * z)),
                $(),
                v1 && z > v1 && (v1 = 0, h4.innerHTML = ""),
                i1 && (Q = 0),
                e1 = i1 ? P(e1, -9, .015) : P(e1, E(z / 3), 1),
                I = P(I, H[13].h, .2 + .3 * L(2 * H[13].h - 1)),
                a1 = 1,
                t1 = A1(H[15].g, H[8].g),
                r1 = U(P(r1, 0, 1), S1(r1 + 60 * w), H[2].g - H[3].h),
                y = U(P(y, 0, 5), S1(y + 56 * w), t1),
                l1 = U(P(l1, 0, 4), S1(l1 + 48 * w), t1),
                V().translateSelf(0, 270 * (H[1].g - 1) + (2 + 5 * _(1.5 * z)) * (1 - H[10].g)),
                a = y1(1 - H[11].h, H[10].h),
                V().translateSelf(a * G(.6 * z + 1.2) * 12, 0, 35),
                V().translateSelf(a * G(.6 * z - 1.2) * 8.2, 0, 55),
                V().translateSelf(a * G(.6 * z) * 12, 0, 45),
                V().translateSelf(9.8 * (1 - a)),
                a = E(1 - 5 * a) * A1(H[11].g, H[2].g),
                V().translateSelf(0, a * G(1.35 * z) * 4),
                V().translateSelf(0, 0, a * G(.9 * z) * 8),
                V().translateSelf(0, -6.5 * H[11].h),
                a = A1(H[4].h, H[3].h),
                V().translateSelf(0, a * G(z) * 5 + 3.5 * (1 - p1(H[3].g, H[4].g))),
                V().translateSelf(0, a * G(z + 3) * 6, a * G(.6 * z + 1) * 6),
                V().translateSelf(0, -7.3 * H[4].h),
                a = A1(H[6].g, H[7].g),
                V().translateSelf(0, -2, 10 - 8.5 * a * L(G(1.1 * z))),
                V().translateSelf(0, -2, 10 - 8.5 * a * L(G(2.1 * z))),
                V().translateSelf(0, -2, 10 - 8.5 * p1(a * L(G(1.5 * z)), (1 - H[6].g) * (1 - a)));
              var t = A1(H[5].h, H[15].h);
              for (a = 0; a < 4; a++) {
                V().translateSelf(
                  (2 < a ? 2 * (1 - t) + t : 0) - 100,
                  t * G(1.3 * z + 1.7 * a) * (3 + a / 3) + .7,
                  115 - 7 * (1 - H[5].h) * (1 - H[15].h) * (1 & a ? -1 : 1)
                    + p1(.05, t) * _(1.3 * z + 7 * a) * (4 - 2 * (1 - a / 3)),
                );
              }
              a = A1(H[8].h, H[9].h);
              for (let e = 0; e < 3; ++e) {
                V().translateSelf(0, a * G(1.5 * z + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - H[8].h) * (1 - H[9].h)));
              }
              for (
                a = A1(A1((H[9].g + H[9].h) / 2, H[8].h), (H[12].g + H[12].h) / 2),
                  V().translateSelf(0, 16 * a, 95 + 8.5 * E(2 * a - 1)),
                  e(V(), -12, 4.2, 40 * e1 - 66),
                  e(V(), -123, 1.4, 55 - 65 * I),
                  V().translateSelf(0, 0, -15).scaleSelf(1, E(1.22 - H[0].g), 1),
                  V().translateSelf(0, 0, 15).scaleSelf(1, E(1.22 - H[10].g), 1),
                  V().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, E(1.1 - H[3].g), 1),
                  V().translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - H[15].g),
                  V().translateSelf(-75, 3 * (1 - H[2].h) * (1 - H[3].g), 55).rotateSelf(180 * (1 - H[2].h) + r1, 0),
                  V().translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - H[5].g) - t * G(.8 * z) - 1.8, 93.5).rotateSelf(
                    _(1.3 * z) * (3 + 3 * t),
                    0,
                  ),
                  V().translateSelf(-2 * G(z)).rotateSelf(25 * G(z)),
                  V().translateSelf(-81, .6, 106).rotateSelf(0, 40 + y),
                  V().translateSelf(-65.8, .8, 106).rotateSelf(0, l1),
                  V().translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - l1),
                  V().translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + l1),
                  e = 0;
                e < 13;
                ++e
              ) {
                x1[e].F(), p(b, J1, 16 + e);
              }
              for (e = 0; e < 16; ++e) {
                H[e].F(), p(b, J1, 29 + e);
              }
              x();
              for (let e = 2, a = 0; e <= 23; ++e, a++) {
                V1[a++] = N[e].j.m41, V1[a++] = N[e].j.m42, V1[a++] = N[e].j.m43;
              }
              for (let e = 24, a = 0; e <= 39; ++e, a++) p(N[e].j, J1, a);
              s(),
                Z.u3a(s("j"), V1),
                Z.uae(s("c"), !1, J1),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(s("b"), !1, p(K().rotateSelf(0, 180).invertSelf().translateSelf(-B, -R, .3 - X))),
                U1(0, 40),
                Z.c4s(256),
                Z.cbf(!1, !0, !1, !0),
                Z.uae(s("b"), !1, p(K().translateSelf(-B, -R, -X - .3))),
                U1(0, 40),
                C = 0;
            }
            e = f1,
              t = m1,
              a = h1,
              Y
                ? (K(j).invertSelf(),
                  W(3.6, 3.5),
                  e = D,
                  t = T,
                  a = 5,
                  K(S, u).rotateSelf(-20, 0).invertSelf().translateSelf(-e, -t, -a).rotateSelf(0, 99),
                  K().rotateSelf(0, 40 * G(s1) - 80, -8),
                  p(b, J1, 35),
                  p(b, J1, 36),
                  p(b, J1, 37))
                : K(S, u).rotateSelf(-u1, -q).invertSelf().translateSelf(-e, -t, -a),
              d(),
              Z.ubu(d("k"), e, t, a),
              Z.u3a(d("j"), V1),
              Z.uae(d("c"), !1, J1),
              Z.uae(d("a"), !1, p(S)),
              Z.ubh(d("g"), 3),
              Z.ubh(d("h"), 3),
              Z.b6o(36160, o),
              Z.v5y(0, 0, 2048, 2048),
              c[0](60.17),
              c[1](138.6),
              Z.b6o(36160, null),
              Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight),
              Z.cbf(!0, !0, !0, !0),
              Z.c4s(16640),
              Z.uae(d("b"), !1, p(u)),
              Z.uae(d("a"), !1, p(j)),
              Z.uae(d("i"), !1, g),
              Z.ubh(d("g"), 0),
              Z.ubh(d("h"), 1),
              U1(!Q, 41),
              r(),
              Z.uae(r("b"), !1, p(K(u).invertSelf())),
              Z.ubu(r("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, s1),
              Z.d97(4, 3, 5123, 0),
              Z.b6o(36160, n),
              Z.v5y(0, 0, 128, 128),
              Z.f1s();
          },
          h = new DOMMatrix(),
          u = new DOMMatrix(),
          g = new Float32Array(32),
          e = i,
          v = f(8, () => ({})),
          r = K1(
            W1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}`,
          ),
          a = W1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[22];uniform mat4 c[45];void main(){mat4 i=mat4(1);if(f.w!=1.){if(f.w<1.)i=c[gl_InstanceID-int(f.w)];else if(f.w>1.&&f.w<24.)i[3].xyz=j[int(f.w)-2].xyz;else i=c[int(f.w)-24];}l=mix(d,vec4(.7,1,.2,0),d.w==0.&&f.w==-29.?i[3][3]:0.),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          s = K1(
            a,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`,
          ),
          d = K1(
            a,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          c = f(2, e => {
            let a = Z.c25();
            return Z.a4v(33984 + e),
              Z.b9j(3553, a),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              l => {
                let t = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, n = 1 / 0, i = -1 / 0, f = -1 / 0, m = -1 / 0;
                Z.fas(36160, 36096, 3553, a, 0),
                  Z.c4s(256),
                  K().scale3dSelf(l).multiplySelf(K(k[e], h).multiplySelf(u).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = v[a];
                  W(4 & a ? 1 : -1, 2 & a ? 1 : -1, 1 & a ? 1 : -1),
                    t -= e.x = (0 | D) / l / A,
                    r -= e.y = (0 | T) / l / A,
                    s -= e.z = (0 | O) / l / A;
                }
                for (K().rotateSelf(298, 139).translateSelf(t / 8, r / 8, s / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: a, z: t } = v[l];
                  W(e, a, t), c = y1(c, D), i = p1(i, D), o = y1(o, T), f = p1(f, T), n = y1(n, O), m = p1(m, O);
                }
                l = 10 + e,
                  n *= n < 0 ? l : 1 / l,
                  m *= 0 < m ? l : 1 / l,
                  Z.uae(
                    d("b"),
                    !1,
                    p(
                      K(S, h).scaleSelf(2 / (i - c), 2 / (f - o), 2 / (n - m)).translateSelf(
                        (i + c) / -2,
                        (f + o) / -2,
                        (n + m) / 2,
                      ).multiplySelf(b),
                    ),
                  ),
                  U1(!Q, 41),
                  g.set(P1, 16 * e);
              };
          }),
          o = Z.c5w(),
          t = (a = Z.c25(), Z.c3z()),
          n = Z.c5w();
        s(),
          Z.uae(s("a"), !1, p(k1(1e-4, 2, 1.2, .4))),
          d(),
          Z.ubh(d("q"), 2),
          r(),
          Z.ubh(r("q"), 2),
          Z.b6o(36160, o),
          Z.d45([0]),
          Z.r9l(0),
          Z.b6o(36160, n),
          Z.bb1(36161, t),
          Z.r4v(36161, 33190, 128, 128),
          Z.f8w(36160, 36096, 36161, t),
          Z.a4v(33986),
          Z.b9j(3553, a),
          Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null),
          Z.fas(36160, 36064, 3553, a, 0),
          Z.b9j(3553, Z.c25()),
          Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          Z.t2z(3553, 10241, 9987),
          Z.t2z(3553, 10240, 9729),
          Z.gbn(3553),
          Z.e8z(2929),
          Z.e8z(2884),
          Z.c70(1),
          Z.c7a(1029),
          Z.d4n(515),
          Z.c5t(0, 0, 0, 0),
          (() => {
            let e,
              n,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b,
              S,
              a,
              t,
              l,
              r = !0,
              s = [],
              c = () => {
                b4.innerHTML = "Music: " + r, l && (Y || !r ? l.disconnect() : l.connect(t.destination));
              },
              o = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                k = [k1(.3, 55, e, 1.732051), k1(55, 181, e, 1.732051)],
                  j = k1(.3, 181, e, 1.732051),
                  f = g = void 0,
                  s.length =
                    C =
                    a =
                    b =
                    S =
                    c1 =
                    o1 =
                      0,
                  document.hidden && A(!0);
              },
              A = e => {
                if (Y !== e) {
                  if (Y = e, o(), document.body.className = e ? "l m" : "l", e) {
                    try {
                      document.exitFullscreen().catch(() => 0), document.exitPointerLock();
                    } catch {}
                  }
                  c();
                }
              },
              M = e => {
                try {
                  t || (t = new AudioContext(), (l = t.createBufferSource()).buffer = F, l.loop = !0, l.start()),
                    document.body.requestFullscreen().catch(() => 0);
                } catch {}
                A(!1), Q = e;
              },
              I = (e, a) => e.buttons[a]?.pressed || 0 < e.buttons[a]?.value ? 1 : 0;
            oncontextmenu = () => !1,
              b1.onclick = () => {
                M();
              },
              b2.onclick = () => {
                M(1);
              },
              b5.onclick = () => A(!0),
              b4.onclick = () => {
                r = !r, c();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
              },
              onclick = e => {
                if (!Y && (e.target === hC && (C = 1), Q)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let a;
                e.repeat
                  || (a = {
                    KeyE: 0,
                    Space: 0,
                    Enter: 0,
                    Escape: 1,
                    KeyA: 2,
                    ArrowLeft: 2,
                    KeyD: 3,
                    ArrowRight: 3,
                    KeyW: 4,
                    ArrowUp: 4,
                    KeyS: 5,
                    ArrowDown: 5,
                  }[e.code],
                    (s[a] = !!e.type[5] && !0) && (0 === a && (C = 1), 1 === a && A(!0)));
              },
              onmousemove = ({ movementX: e, movementY: a }) => {
                Q && (e || a) && (q += .1 * e, u1 += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!Y) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    Q && e > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, h = e, u = a, g = t, p = u1, d = q)
                      : void 0 === f && (m = 0, n = e, i = a, f = t);
                  }
                  e = s1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, c, o;
                if (!Y) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    g === t && (u1 = p + (a - u) / 2.3, q = d + (e - h) / 2.3, v = 1),
                      f === t
                      && (t = (n - e) / 20,
                        r = L(t),
                        s = (i - a) / 20,
                        c = L(s),
                        (o = .5 < p1(r, c)) && (m = 1),
                        b = (o && .3 < r) * E(t, -1),
                        S = (o && .3 < c) * E(s, -1),
                        2 < r && (n = 20 * (t < 0 ? -1 : 1) + e),
                        2 < c && (i = 20 * (s < 0 ? -1 : 1) + a));
                  }
                }
              },
              hC.ontouchend = a => {
                let t;
                document.activeElement === document.body && a.preventDefault();
                for (let e of a.changedTouches) {
                  e.identifier === g
                    ? (g = void 0, v || (t = 1), v = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (t = 1), m = 0)
                    : t = 1;
                }
                a.target === hC && t && e && .02 < (a = s1 - e) && a < .7 && (C = 1);
              },
              $ = () => {
                c1 = S + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), o1 = b + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
                let e = navigator.getGamepads()[0];
                e
                  && (Q && (u1 += w * z1(e.axes[3], .3) * 80, q += w * z1(e.axes[2], .3) * 80),
                    c1 += I(e, 12) - I(e, 13) - z1(e.axes[1], .2),
                    o1 += I(e, 14) - I(e, 15) - z1(e.axes[0], .2),
                    I(e, 9) && A(!0),
                    (e = I(e, 3) || I(e, 2) || I(e, 1) || I(e, 0)) && !a && (C = 1),
                    a = e);
              },
              document.onvisibilitychange = onblur = onresize = o,
              A(!0);
          })(),
          (() => {
            let s,
              c,
              o,
              n,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b = 0,
              S = 0,
              A = 0,
              M = 0,
              I = 1,
              Y = 2,
              F = 15,
              C = () => K((Y ? H[g1] : N[33 !== b ? b : 0]).j),
              j = e => {
                1 < Y ? (K(H[g1].j).multiplySelf(H[g1].G), W(0, .9 < g1 + e1 ? 15 : 1, -2.4)) : (C(), W(S, A, M)),
                  e && (i = (D - B) / w, f = (O - X) / w),
                  B = D,
                  R = T,
                  X = O;
              },
              k = (e, a, t, l) => U(e, a, I || (E(L(a - e) ** .5 - t) + 1 / 7) * j1(1.5 * l));
            x = () => {
              let e,
                a,
                t,
                l,
                r = (j(g),
                  Z.r9r(0, 0, 128, 128, 6408, 5121, G1),
                  (() => {
                    let a, t, l, r, s, c = 0, o = 0, n = 0, i = 0, e = 0, f = 0, m = -1;
                    for (a = 0; a < 36; ++a) {
                      for (t = 512 * a, l = 96; l < 416; l += 4) {
                        for (r = 0; r < 2; ++r) {
                          let e = G1[t + l + r + 2];
                          (s = G1[t + l + r]) > i && (i = s),
                            s + e && (m < 0 || m === a) && (m = a, e === g ? ++c : o && o !== e || (o = e, ++n));
                        }
                      }
                    }
                    for (g = m < 0 ? 0 : n > 2 * c ? o : g, c = 36; c < 128; ++c) {
                      for (
                        a =
                          m =
                          n =
                          o =
                            0,
                          t = 512 * c,
                          l = 0;
                        l < 128;
                        ++l
                      ) {
                        s = G1[r = t + 4 * l],
                          l < 64 ? s > o && (o = s) : s > n && (n = s),
                          (s = G1[2 + r]) > m && (m = s),
                          s = G1[1 + r],
                          64 < l ? s > o && (o = s) : s > n && (n = s),
                          (s = G1[3 + r]) > a && (a = s);
                      }
                      (n -= o) * n > e * e && (e = n), (a -= m) * a > f * f && (f = a);
                    }
                    e *= .7,
                      h = E(1 - .01 * p1(L(e), L(f)), .3),
                      e /= 255,
                      i /= 255,
                      f /= 255,
                      C().invertSelf(),
                      W(e, i, f, 0),
                      S += D,
                      A += i,
                      M += O,
                      j();
                  })(),
                  !Y && g === b || (b = g, C().invertSelf(), W(B, R, X), S = D, A = T, M = O, Y = Y && (g ? 0 : 1)),
                  (B < -20 || X < 109 ? -25 : -9) > R && (Y = 2),
                  1 === g && (H[14].i = B < -15 && X < 0 ? 1 : 0),
                  u = U(P(u, R, 2), R, Y || 8 * L(u - R)),
                  v = k(v, B, .5, 1),
                  d = k(d, u, 2, 1),
                  p = k(p, X, .5, 1),
                  n = P(n, t1 * (32 < g && g < 37), 2),
                  Q
                    ? (e = Y + j1(18), f1 = U(f1, B, e), h1 = U(h1, X, e), m1 = U(m1, 1.6 + u, e), q = S1(q))
                    : (f1 = k(f1, v, 1, 2 + n),
                      h1 = k(h1, p + -18 + 5 * n, 1, 2 + n),
                      m1 = k(m1, p1(d + E((-60 - X) / 8, 0, 20) + 13 + 9 * n, 6), 4, 2),
                      e = y1(-6, -L(p - h1)),
                      q = w1(q, 90 - S1(_1(e, a = v - f1) / $1), I + j1(10)),
                      u1 = w1(u1, 90 - _1(M1(e, a), m1 - d) / $1, I + j1(10))),
                  u1 = E(u1, -87, 87),
                  I = 0,
                  e = E(c1, -1),
                  a = E(o1, -1),
                  t = z1(M1(e, a) ** .5, .1),
                  _1(e, a));
              for (
                t && (s = 90 - r / $1),
                  c = w1(c, s, j1(8)),
                  o = P(o, t, 10),
                  V().translateSelf(B, .06 * h * o * _(18.2 * z) + u, X).rotateSelf(0, c),
                  l = 0;
                l < 2;
                ++l
              ) {
                let e = 9.1 * z - J * l;
                K(N[37].j, V()).translateSelf(0, o * E(.45 * G(e - J / 2))).rotateSelf(o * G(e) * .25 / $1, 0);
              }
              F = g ? 5 : P(F, Y ? 13 : 19 - 2 * y1(0, R + 10), 2.2),
                i = g || Y ? 0 : P(i, 0, 3),
                f = g || Y ? 0 : P(f, 0, 3),
                e = (m = Y ? 0 : P(m, g ? 7 * E(2 * t) * h : 0, g ? 9 : 1)) * t * L(e) * G(r),
                a = m * t * L(a) * _(r),
                r = Q ? (180 + q) * $1 : 0,
                t = w * (i + (a * _(r) - G(r) * e)),
                l = w * -F,
                e = w * (f + (a * G(r) + _(r) * e)),
                C().invertSelf(),
                W(t, l, e, 0),
                S += D,
                A += l,
                M += O,
                j();
            };
          })(),
          requestAnimationFrame(l);
      }
    },
    i = new Image();
  i.onload = i.onerror = s,
    i.src = a,
    (r => {
      let L = 0,
        s = () => {
          let b = 0,
            e = m => {
              let r,
                h,
                s,
                u,
                c,
                o,
                n = 0,
                i = 0,
                g = [],
                f = new Int32Array(768 * m),
                v = 2 ** (t - 9) / m,
                d = J * 2 ** (l - 8) / m,
                p = q * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + l];
                  e < 32;
                  ++e
                ) {
                  let t = (32 * l + e) * m;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, a && (u = S[a - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(h = g[u])) {
                        let l,
                          r,
                          s = 0,
                          c = 0,
                          o = h = u,
                          n = L < 2
                            ? e => e % 1 * 2 - 1
                            : T1,
                          i = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : T1,
                          f = new Int32Array(k + D + N);
                        for (let a = 0, t = 0; k + D + N > a; ++a, ++t) {
                          let e = 1;
                          k > a ? e = a / k : k + D > a || (e = (1 - (e = (a - k - D) / N)) * 3 ** (-T / 16 * e)),
                            t < 0
                            || (t -= 4 * m,
                              r = .00396 * 2 ** ((o + M - 256) / 12),
                              l = .00396 * 2 ** ((o + F - 256) / 12) * (1 + (L ? 0 : .0072))),
                            f[a] = 80
                                * (n(s += r * e ** (I / 32)) * A + i(c += l * e ** (C / 32)) * Y
                                  + (j ? (2 * Z1() - 1) * j : 0))
                                * e | 0;
                        }
                        h = g[h] = f;
                      }
                      for (let e = 0, a = 2 * t; h.length > e; ++e, a += 2) f[a] += h[e];
                    }
                  }
                  for (let e, a = 0; m > a; ++a) {
                    r = 0,
                      h = 2 * (t + a),
                      ((e = f[h]) || o)
                      && (c = .00308 * O,
                        1 !== L && 4 !== L || (c *= G(v * h * J * 2) * H / 512 + .5),
                        c = 1.5 * G(c),
                        n += c * i,
                        i += c * (s = (1 - Q / 255) * (e - i) - n),
                        e = 4 === L ? i : 3 === L ? s : n,
                        L || (e = (e *= 22e-5) < 1 ? -1 < e ? G(e / 4 * J * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        o = 1e-5 < e * e,
                        r = e * (1 - (s = G(d * h) * R / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * X / 255, e += f[h - p] * X / 255),
                      E[s = b + h >> 1] += (f[h] = r) / 65536,
                      U[s] += (f[++h] = e) / 65536;
                  }
                }
              }
              b += 768 * m;
            },
            S = [
              [
                "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
                "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
                "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
                "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
                "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
                "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
              ],
              [
                ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
                "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
                ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
                "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
                "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
                "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
              ],
              ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
              ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
              ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
            ][L],
            [A, M, I, Y, F, C, j, k, D, a, T, t, O, Q, B, R, l, X, q, H] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            N = 4 * a ** 2;
          e(5513), e(4562), e(3891), D1(++L < 5 ? s : r);
        },
        E = (F = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        U = F.getChannelData(1);
      D1(s);
    })(() => {
      let a = e => o(G((e /= 11) * J), e).rotateSelf(10 * e).scaleSelf(1.001 - e, 1, 1.001 - e),
        t = e =>
          d(
            n(m(), o(0, -e / 2).scale(6, e - 1, 2.2)),
            n(m(), o(0, -e / 2 - 6).scale(4, e - 3, 4)),
            n(m(32, 1), o(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        l = (D1(() => {
          let t = 0,
            r = [],
            c = [],
            o = [],
            n = [],
            i = new Int32Array(8),
            f = new Map(),
            m = new Int32Array(i.buffer, 0, 5),
            h = new Float32Array(i.buffer);
          N.map((e, a) => {
            let s,
              l = e => {
                let { x: a, y: t, z: l } = s[e], r = (h[0] = a, h[1] = t, h[2] = l, f.get(e = "" + (s.C ? m : i)));
                return void 0 !== r
                  ? (a = 3 * r, n[a] = (n[a++] + i[5]) / 2, n[a] = (n[a++] + i[6]) / 2, n[a] = (n[a] + i[7]) / 2)
                  : (f.set(e, r = f.size), c.push(a, t, l, h[3]), o.push(i[4]), n.push(i[5], i[6], i[7])),
                  r;
              };
            for (s of (h[3] = 41 === a || 40 === a ? -16 : 42 === a ? -29 : a, e.o)) {
              let { x: e, y: a, z: t } = X1(s);
              i[4] = 0 | s.u, i[5] = 32767 * e, i[6] = 32767 * a, i[7] = 32767 * t;
              for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
            }
            e.o = 0, e.s = t, e.D = t = r.length;
          }),
            Z.b11(34962, Z.c1b()),
            Z.b2v(34962, new Float32Array(c), 35044),
            Z.v7s(0, 4, 5126, !1, 0, 0),
            Z.b11(34962, Z.c1b()),
            Z.b2v(34962, new Int16Array(n), 35044),
            Z.v7s(1, 3, 5122, !0, 0, 0),
            Z.b11(34962, Z.c1b()),
            Z.b2v(34962, new Uint32Array(o), 35044),
            Z.v7s(2, 4, 5121, !0, 0, 0),
            Z.b11(34963, Z.c1b()),
            Z.b2v(34963, new Uint16Array(r), 35044),
            Z.e3x(0),
            Z.e3x(1),
            Z.e3x(2);
          try {
            let [t, l, e, a, r] = JSON.parse(localStorage.spdnt22);
            H.map((e, a) => e.g = e.h = e.i = a ? 0 | t[a] : 0), x1.map((e, a) => e.i = 0 | l[a]), g1 = e, z = a, I = r;
          } catch {
          }
          Q1(), e1 = 13 === g1 ? 0 : E(n1), D1(s);
        }),
          f(11, e => F1(I1(Y1(19), a(e), h(1, 1, .8, .2)).reverse(), I1(Y1(19), a(e + 1), h(1, 1, .8, .2)), 1)).flat()),
        e = [
          ...n(m(), o(0, -3).scale(11, 1.4, 3), h(.9, .9, .9, .2)),
          ...n(m(), o(0, -2.2).scale(7.7, .5, 4), h(.5, .5, .5, .2)),
          ...f(12, e => n(m(), S.translate(e - 5.5, 4.4).scale(.1, .1, 2), h(.6, .5, .4, .3))).flat(),
          ...d(
            n(m(6), S.rotate(90).scale(6, 8, 6), h(.3, .6, .6, .3)),
            n(m(4, 0, .01), o(0, 6).scale(12, 2, .75).rotate(0, 45), h(.3, .6, .6, .3)),
            n(m(6), S.rotate(90).scale(5, 12, 5), h(.3, .6, .6, .3)),
            ...[-5, 0, 5].map(e => n(m(5), o(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), h(.3, .6, .6, .3))),
          ),
        ],
        r = d(
          n(m(), o(0, -.5, 1).scale(1.15, 1.2, 6.5), h(.25, .25, .35, .3)),
          d(
            n(m(3), o(0, 0, -5.5).scale(3, 2), h(.6, .3, .4, .3)),
            n(m(), o(0, 0, -3.65).scale(2.5, 3), h(.6, .3, .4, .3)),
          ),
          ...[-1, 1].map(e => n(m(), o(1.2 * e, -.5, 1).scale(.14, .3, 6.5), h(.7, .2, 0, .3))),
        );
      u(),
        c([d1.slice(1)], o(-2).scale3d(3).rotate(90, 0)),
        u(),
        g(o(-5.4, 1.5, -19).rotate(0, -90)),
        [-15, 15].map((e, a) => {
          c(m(), o(0, 0, a ? 22 : -23).scale(3, 1, 8), h(.9, .9, .9, .2)),
            c(m(), o(0, 6.3, e).scale(4, .3, 1), h(.3, .3, .3, .4)),
            c(m(), o(0, 1, e).scale(3, .2, .35), h(.5, .5, .5, .3)),
            f(5, e => c(l, o(18.5 * (a - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * a).scale(1.2, 10, 1.2)));
        }),
        c(m(), o(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), h(.8, .8, .8, .2)),
        c(m(), o(3, 1.5, -20).scale(.5, 2, 5), h(.7, .7, .7, .2)),
        c(m(), o(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), h(.75, .75, .75, .2)),
        c(m(5), o(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), h(.6, .3, .3, .4)),
        c(d(
          E1(
            n(m(6, 0, 0, .3), o(8, -3, -4).scale(13, 1, 13), h(.7, .7, .7, .2)),
            d(
              n(m(6, 0, 0, .3), o(0, -.92).scale(13, 2, 13), h(.8, .8, .8, .2)),
              n(m(), S.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), h(.5, .5, .5, .5)),
            ),
            n(
              m(),
              S.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
              h(.8, .2, .2, .5),
            ),
            n(m(6), o(0, -8).scale(9, 8, 7), h(.2, .1, .4, .5)),
          ),
          n(m(5), S.scale(5, 30, 5), h(.4, .2, .6, .5)),
          n(m(5, 0, 1.5), o(0, 1).scale(4.5, .3, 4.5), h(.7, .5, .9, .2)),
          n(m(6), o(15, -1.5, 4).scale(3.5, 1, 3.5), h(.5, .5, .5, .5)),
        )),
        g(o(15, -2, 4)),
        c(m(), o(-18.65, -3, 55).scale(2.45, 1.4, 2.7), h(.9, .9, .9, .2)),
        g(o(-55, -1.1, 46).rotate(0, 90)),
        c(m(7), o(-57, -2.6, 46).scale(4, 1, 4), h(.8, .8, .8, .3)),
        c(m(6), o(-61.3, -2.4, 49).scale(3, 1, 5), h(.4, .6, .6, .3)),
        c(e, o(-53, 0, 55)),
        c(m(), o(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), h(.7, .7, .7, .2)),
        c(m(3, 0, -.5), o(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), h(.8, .8, .8, .2)),
        c(d(
          E1(
            n(m(), o(-100, -2.4, 55).scale(8, .9, 8), h(.8, .8, .8, .2)),
            n(m(), o(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), h(.8, .8, .8, .2)),
            n(m(), o(-100, -2.6, 70).scale(3, 1.1, 7), h(.8, .8, .8, .2)),
            n(m(), o(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), h(.8, .8, .8, .2)),
            n(m(6), o(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), h(.6, .6, .6, .3)),
            n(m(), o(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), h(.8, .8, .8, .2)),
            n(m(), o(-100, .42, 92).scale(3, 1.1, 4.1), h(.8, .8, .8, .2)),
          ),
          n(m(8), o(-100, -1, 55).scale(7, .9, 7), h(.3, .3, .3, .4)),
          n(m(8), o(-100, -2, 55).scale(4, .3, 4), h(.4, .4, .4, .5)),
          n(m(8, 0, -3.1), o(-100, -3, 55).scale(.4, 1, .4), h(.4, .4, .4, .5)),
        )),
        c(d(
          n(m(), o(-100, 1, 63).scale(7.5, 4), h(.5, .5, .5, .4)),
          n(m(), o(-100, 0, 70).scale(2, 2, 10), h(.5, .5, .5, .4)),
          n(m(20, 1), o(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), h(.5, .5, .5, .4)),
        )),
        d1.map(({ x: a, z: t }) => {
          c(m(6), o(3 * a, 3, 15 * t).scale(.7, 4, .7), h(.6, .3, .3, .4)),
            c(m(6), o(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), h(.6, .15, .15, .8)),
            [4, -.4].map(e => c(m(6), o(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), h(.4, .2, .2, .8))),
            c(m(14, 1), o(9 * a - 38.9, -7.3, 11 * t + 17).scale(1, 4), h(.25, .25, .25, 1)),
            [1.5, 8].map(e =>
              c(m(17, 1), o(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), h(.6, .6, .6, .3))
            );
        }),
        f(7, e => {
          c(
            m((23 * e + 1) % 5 + 5, 0, .5),
            o(5 * G(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
            h(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
          );
        }),
        c(m(), o(-87, -9.5, 24).scale(7, 1, 3), h(.4, .5, .6, .4)),
        c(m(4), o(-86, -9.2, 27).scale(5, 1, 5), h(.5, .6, .7, .3)),
        c(m(12, 1), o(-86, -9, 31).scale(1.5, 1, 1.5), h(.3, .3, .4, .1)),
        g(o(-86, -7.5, 31)),
        c(
          d(
            E1(
              n(m(5), o(0, 0, -7).scale(2, 1.2, 2), h(.2, .4, .7, .3)),
              n(m(5), S.scale(9, 1.2, 9), h(0, .2, .3, .5)),
              n(m(), S.scale(11, 1, 13), h(.3, .4, .6, .3)),
            ),
            n(m(5), S.scale(5.4, 5, 5.4), h(0, .2, .3, .5)),
          ),
          o(-38.9, -11.3, 17),
        ),
        g(o(-38.9, -9.6, 10)),
        c(
          d(
            E1(
              n(m(6), o(0, 0, -18).scale(15, 1.2, 15), h(.7, .7, .7, .3)),
              n(m(), S.scale(4, 1.2, 6), h(.45, .4, .6, .3)),
            ),
            ...f(6, a =>
              f(
                6,
                e =>
                  n(
                    m(6),
                    o(4.6 * e - 12 + 2 * (1 & a), 0, 4.6 * a + 2 * G(4 * e) - 32).scale(2, 5, 2),
                    h(.7, .7, .7, .3),
                  ),
              )).flat(),
          ),
          o(-38.9, -11.3, -1),
        ),
        c(m(5), o(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), h(.8, .1, .25, .4)),
        g(o(-84, -.7, 85).rotate(0, 45)),
        f(3, e => {
          c(t(16), o(12 * e - 109, -9, -12), h(.6, .6, .6, .3)),
            c(t(16), o(-77, -9, -12 * e - 20).rotate(0, 90), h(.6, .6, .6, .3));
        }),
        c(
          d(
            E1(n(m(), o(26.5, -1.6, 10).scale(20, 2.08, 3)), n(m(), o(26.5, -.5, 10).scale(19, 2, .5))),
            ...f(4, e => n(m(), o(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
            ...f(3, e => n(m(), o(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
          ),
          o(-123, .2, -12),
          h(.5, .5, .6, .2),
        ),
        g(o(-116, -1.4, -18).rotate(0, 180)),
        c(m(6), o(-116, -2.6, -16.5).scale(3.2, .8, 3), h(.6, .5, .7, .2)),
        c(m(), o(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), h(.8, .8, .8, .2)),
        c(m(), o(-115.5, -17, -12).scale(.5, 15, 2.2), h(.6, .6, .6, .3)),
        c(m(8), o(-114, -17, -2).scale(2, 15, 2), h(.6, .6, .6, .3)),
        c(m(8), o(-79, -17, -2).scale(2, 15, 2), h(1, 1, 1, .3)),
        c(m(), o(-77, -17, -50.5).scale(2.2, 15, .5), h(.6, .6, .6, .3)),
        c(d(
          n(m(12), o(-77, -14.5, -12).scale(4, 17.5, 4), h(.7, .7, .7, .2)),
          n(m(12), o(-77, 3.1, -12).scale(3, 5, 3), h(.4, .5, .6, .2)),
          n(m(), o(-79, .1, -12).scale(3.5, 2, 1.3), h(.4, .5, .6, .2)),
          n(m(), o(-77, .1, -14).scale(1.5, 2, 2), h(.4, .5, .6, .2)),
        )),
        c(m(), o(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), h(.6, .6, .6, .3)),
        c(m(9), o(-98, -18.4, -40).scale(2.5, 13.5, 2.5), h(.5, .5, .5, .3)),
        c(d(
          n(m(), o(-93, -5.8, -40).scale(9, 1, 5), h(.8, .8, .8, .1)),
          n(m(9), o(-98, -5.8, -40).scale(3, 8, 3), h(.7, .7, .7, .2)),
        )),
        g(o(-98, -4.4, -40).rotate(0, 90)),
        c(d(
          E1(
            n(m(6, 0, 0, .6), o(-100, .7, 105.5).scale(8, 1, 11), h(.7, .7, .7, .2)),
            n(m(), o(-101.5, .7, 93.5).scale(10.5, 1, 2), h(.7, .7, .7, .2)),
          ),
          n(m(5), o(-100, .7, 113).scale(4, 3, 4), h(.7, .7, .7, .2)),
        )),
        [-1, 1].map(a => {
          [7.2, 1.5].map(e => c(m(15, 1), o(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), h(.5, .24, .2, .4))),
            c(l, o(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90)),
            c(m(12, 1), o(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), h(.6, .24, .2, .5)),
            c(
              d(
                n(m(), o(-4 * a, 3.5, -.5).scale(4, 4, .7), h(.5, .5, .5, .4)),
                n(m(), S.scale(3, 3, 10), h(.6, .24, .2, .5)),
                n(m(28, 1), o(0, 3, -5).scale(3, 4, 10).rotate(90, 0), h(.6, .24, .2, .5)),
                n(m(5), o(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), h(.6, .24, .2, .5)),
                n(m(5), o(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), h(.6, .24, .2, .5)),
              ),
              o(a - 100, .7, 97),
            );
        }),
        c(d(
          n(m(), o(-82.07, .8, 106).scale(11, .9, 2.2), h(.7, .7, .7, .1)),
          n(m(45, 1), o(-81, .7, 106).scale3d(7.7), h(.7, .7, .7, .1)),
        )),
        c(m(), o(-58, 1, 106).scale(2, .65, 2), h(.7, .7, .7, .2)),
        c(m(), o(-50.7, 1, 99).scale(2, .65, 1), h(.7, .7, .7, .2)),
        c(m(), o(-42, .4, 91).scale(5, 1, 2.5), h(.7, .7, .7, .3)),
        c(m(), o(-34.2, .4, 91).scale(3, 1, 3), h(.7, .7, .7, .3)),
        c(m(5), o(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), h(.2, .5, .5, .6)),
        g(o(-34, 2.7, 96).rotate(-12, 0)),
        [-1, 1].map(e => c(l, o(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90))),
        f(
          3,
          e =>
            c(
              t(24.7 - .7 * (1 & e)),
              o(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
              1 & e ? h(.5, .5, .5, .3) : h(.35, .35, .35, .5),
            ),
        ),
        c(d(
          n(m(6, 0, 0, .3), o(0, -.92, 95).scale(14, 2, 14), h(.8, .8, .8, .2)),
          n(m(5), o(0, 0, 95).scale3d(6), h(.3, .3, .3, .5)),
        )),
        g(o(0, 1.7, 82).rotate(0, 180)),
        c(m(5), o(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), h(.5, .3, .3, .4)),
        c(m(6), o(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), h(.5, .6, .7, .3)),
        c(m(), o(0, 16, 129).scale(1.5, 1, 2), h(.5, .6, .7, .3)),
        c(m(7), o(0, 16.2, 133).scale(5, 1, 5), h(.4, .5, .6, .4)),
        c(d(
          E1(
            n(m(), o(0, 16, 110.5).scale(12, 1, 3), h(.5, .3, .3, .4)),
            n(m(), o(0, 16, 111).scale(3, 1, 3.8), h(.5, .3, .3, .4)),
          ),
          n(m(5), o(0, 16, 103.5).scale(5.5, 5, 5.5), h(.5, .3, .3, .4)),
        )),
        v(o(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
        v(o(0, 2.8), [5, 10, 3], [-5, 10, 3], ...Y1(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * L(e)])),
        v(o(0, 3, 95), ...Y1(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
        v(o(0, 19, 134), [0, 0, 3.5]),
        v(o(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
        v(o(-89, .2, 80), [0, 0, 6]),
        v(o(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
        v(o(-115, .2, -12), [0, 0, 3.5]),
        v(o(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
        u(),
        c(m(5), o(0, -.2).scale(5, 1, 5), h(.6, .65, .7, .3)),
        g(o(0, 1.2)),
        f(2, () => {
          u(),
            d1.map(({ x: e, z: a }) => {
              c(m(11, 1), o(4 * e, 4, 4 * a).scale(.8, 3, .8), h(.5, .3, .7, .6)),
                c(m(), o(4 * e, 7, 4 * a).scale(1, .3), h(.5, .5, .5, .3));
            }),
            c(d(
              n(m(), S.scale(5, 1, 5), h(.8, .8, .8, .3)),
              ...[-1, 1].map(e => n(m(25, 1), o(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), h(.8, .8, .8, .3))),
            )),
            c(m(), o(0, -3).scale(8, 2, 8), h(.4, .4, .4, .3));
        }),
        u(),
        c(d(
          E1(
            n(m(), S.scale(1.5, 1, 5), h(.9, .9, .9, .2)),
            n(m(6), S.scale(4, 1, 5), h(.9, .9, .9, .2)),
            n(m(), o(0, -2).scale(2, 3.2, 1.9), h(.3, .8, .5, .5)),
            n(m(16, 1, 0, 4), S.scale(1, 1, 1.5).rotate(0, 90), h(.9, .9, .9, .2)),
          ),
          n(m(), S.scale(1.3, 10, 1.3), h(.2, .7, .4, .6)),
        )),
        v(o(0, 2.8), [0, 0, 4.5]),
        u(),
        c(m(3), o(-23, -1.7, 55.8).scale(5, .7, 8.3), h(.3, .6, .6, .2)),
        c(m(8), o(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), h(.8, .8, .8, .2)),
        c(m(), o(-23, -3, 55).scale(5.2, 1.7, 3), h(.5, .5, .5, .3)),
        c(m(), o(-23, -2.2, 62).scale(3, 1, 4), h(.5, .5, .5, .3)),
        g(o(-23, -.5, 66.5)),
        u(),
        c(m(), o(-22.55, -3, 55).scale(1.45, 1.4, 2.7), h(.7, .7, .7, .2)),
        c(d(n(m(), S.scale(3, 1.4, 2.7)), n(m(), S.scale(1.2, 8, 1.2))), o(-33, -3, 55), h(.7, .7, .7, .2)),
        u(),
        c(d(
          n(m(), o(-27, -3, 55).scale(3, 1.4, 2.7), h(.9, .9, .9, .2)),
          n(m(), o(-27, -3, 55).scale(1, 3), h(.9, .9, .9, .2)),
        )),
        c(m(), o(-39, -3, 55).scale(3, 1.4, 2.7), h(.9, .9, .9, .2)),
        u(),
        c(m(6), o(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), h(.7, .7, .7, .4)),
        u(),
        [0, 12, 24].map(e =>
          c(m(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), h(.2, .5, .6, .2))
        ),
        u(),
        [6, 18].map(e =>
          c(m(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), h(.1, .4, .5, .2))
        ),
        u(),
        c(
          d(
            E1(
              n(m(5), o(0, 2).scale(5, 7, 5).skewY(8), h(.2, .4, .5, .5)),
              n(m(5), o(0, 6).scale(1.1, 7, 1.1).skewY(-8), h(.25, .35, .5, .5)),
              n(m(5), o(0, 9).scale(.6, 7, .6).skewY(8), h(.35, .3, .5, .5)),
            ),
            n(m(5), S.scale(4, 8, 4), h(.2, .4, .5, .5)),
            n(m(5), o(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), h(.2, .4, .5, .5)),
          ),
          o(-38.9, -11.3, 17),
        ),
        v(o(-39.1, -.6, 17).rotate(11), ...Y1(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2])),
        u(),
        f(2, e => c(r, o(9 * e - 110 + (1 & e), 1.9, -12))),
        u(),
        f(2, e => c(r, o(9 * (e + 2) - 110 + (1 & e), 1.9, -12))),
        u(),
        f(3, e => c(r, o(9 * e - 106, 1.9, -12))),
        f(4, e => {
          u(),
            c(
              m(6),
              o(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              h(.5 - e / 8, e / 12 + .5, .7, .3),
            );
        }),
        [h(.1, .55, .45, .2), h(.2, .5, .5, .3), h(.3, .45, .55, .4)].map((e, a) => {
          u(),
            c(m(), o(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
            2 === a && c(m(), o(-29.1, .4, 91).scale(2.1, 1, 3), h(.7, .7, .7, .3)),
            1 === a && c(m(), o(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), h(.6, .6, .7, .3));
        }),
        u(),
        c(m(5), S.scale(5, 1.1, 5), h(.5, .3, .3, .4)),
        c(m(5), S.scale(5.5, .9, 5.5), h(.25, .25, .25, .4)),
        g(o(0, 1.5, -1).rotate(0, 180)),
        f(2, () => {
          u(),
            c(d(
              n(m(30, 1, 1.15, 1), o(0, -3).scale(3.5, 1, 3.5), h(.7, .4, .25, .7)),
              n(m(30, 1, 1.3, 1), o(0, -2.5).scale(2.6, 1, 3), h(.7, .4, .25, .2)),
              n(m(), o(4, -1.2).scale3d(2), h(.7, .4, .25, .3)),
            )),
            g(o(0, -3, 4));
        }),
        f(4, () => {
          u(), f(7, e => c(n(m(9, 1), o(4 * (e / 6 - .5), 3).scale(.2, 3, .2), h(.3, .3, .38))));
        }),
        u(),
        c(e),
        u(),
        c(m(15, 1), o(-7.5).rotate(0, 90).scale(3, 2.3, 3), h(.4, .4, .4, .3)),
        c(m(10), o(-7.5).rotate(0, 90).scale(2, 2.5, 2), h(.3, .8, .7, .3)),
        c(m(5), o(-7.5).rotate(0, 90).scale(1, 3), h(.5, .5, .5, .5)),
        g(o(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
        [-1, 1].map(e => c(l, S.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
        v(o(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
        c(d(n(m(10), S.scale(6, 2, 6), h(.1, .6, .5, .3)), n(m(10), S.scale(3.3, 6, 3.3), h(.1, .6, .5, .5)))),
        u(),
        c(m(3), o(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), h(.5, .3, .3, .4)),
        [22, 30].map(e => {
          c(m(6), o(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), h(.7, .7, .7, .4)),
            c(m(), o(0, 6.2, e + 95).scale(.5, 11, .5), h(.5, .3, .3, .4));
        }),
        u(),
        c(d(
          n(m(45, 1), S.scale(7.5, 1, 7.5), h(.45, .45, .45, .2)),
          n(m(), o(0, 0, -5.5).scale(1.5, 3, 2.7), h(.45, .45, .45, .2)),
        )),
        c(m(8), o(0, 2).scale(3, 1.5, 3).rotate(0, 22), h(.7, .7, .7, .1)),
        c(m(5), o(0, 2).scale(1, 2), h(.3, .3, .3, .2)),
        v(o(0, 3), ...Y1(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2])),
        u(),
        [-1, 1].map(e => c(l, S.rotate(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90))),
        c(d(n(m(28, 1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)), n(m(), S.scale(9, 5, 2), h(.3, 0, 0, .3)))),
        c(n(m(28, 1), S.scale(7.5, 1, 7.5), h(.45, .45, .45, .2))),
        c(n(m(5), o(0, 1).scale(1, .2), h(.3, .3, .3, .2))),
        u(),
        c(d(
          n(m(28, 1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
          n(m(), o(7).scale(9, 5, 2), h(.3, 0, 0, .3)),
          n(m(), o(0, 0, 7).scale(2, 5, 9), h(.3, 0, 0, .3)),
        )),
        c(n(m(28, 1), S.scale(7.5, 1, 7.5), h(.45, .45, .45, .2))),
        c(n(m(5), o(0, 1).scale(1, .2), h(.3, .3, .3, .2))),
        u(),
        c(d(
          n(m(28, 1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
          n(m(), o(7).scale(9, 5, 2), h(.3, 0, 0, .3)),
          n(m(), o(0, 0, -7).scale(2, 5, 9), h(.3, 0, 0, .3)),
        )),
        c(n(m(28, 1), S.scale(7.5, 1, 7.5), h(.45, .45, .45, .2))),
        c(n(m(5), o(0, 1).scale(1, .2), h(.3, .3, .3, .2))),
        u(),
        c(C1(20), o(0, 1).scale3d(.5), h(1, .3, .4)),
        c(C1(30), S.scale(.65, .8, .55), h(1, .3, .4)),
        c(m(), o(0, .9, .45).scale(.15, .02, .06), h(.3, .3, .3)),
        [-1, 1].map(e => {
          c(l, S.rotate(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), h(1, 1, .8)),
            c(
              n(d(m(15, 1), n(m(), o(0, 0, 1).scale(2, 2, .5))), S.rotate(-90, 0).scale(.1, .05, .1), h(.3, .3, .3)),
              o(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          u(), c(m(20, 1), o(.3 * e, -.8).scale(.2, .7, .24), h(1, .3, .4));
        }),
        u(),
        c(m(6).slice(0, -1), S.scale(.77, 1, .77), h(1, .3, .5)),
        u(),
        c(
          C1(30, 24, (e, a, t) => {
            let l = a / 24, r = e * J * 2 / 30, s = G(l ** .6 * J / 2);
            return e = l * l * G(e * J * 14 / 30) / 4,
              23 < a
                ? { x: t.C = 0, y: -.5, z: 0 }
                : { x: _(r) * s, y: _(l * J) - l - e, z: G(r) * s + G(e * J * 2) / 4 };
          }),
          S.scale(.7, .7, .7),
          h(1, 1, 1),
        ),
        [-1, 1].map(e => c(C1(12), o(.16 * e, .4, -.36).scale3d(.09))),
        u(),
        c(m(6, 1), S.scale(.12, 1.2, .12), h(.3, .3, .5, .1)),
        c(m(10), o(0, .8).scale(.2, .3, .2), h(1, .5, .2)),
        c(m(3), o(0, -1).rotate(90, 90).scale(.3, .4, .3), h(.2, .2, .2, .1));
    });
});
