let _ = 0,
  P = 0,
  k = 0,
  T = 0,
  S = 0,
  Y = 0,
  C = 0,
  a = 0,
  F = 0,
  j = 0,
  Z = 0,
  y = 0,
  x = 0,
  D = 0,
  H = 0,
  Q = 0,
  z = 0,
  B = .066,
  w = 1,
  $ = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  q = [],
  O = [],
  R = [],
  L = [],
  X = { x: 0, y: 0, z: 0 },
  W = Math.PI / 180,
  N = new DOMMatrix(),
  l = new Float32Array(16),
  r = new Float32Array(624),
  g = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  tt = t => 4 < t ? 4 : t,
  E = (t, a) => a < t ? t : a,
  U = t => t < 0 ? -t : t,
  at = (t, a) => a < (t < 0 ? -t : t) ? t : 0,
  K = t => t < 0 ? 0 : 1 < t ? 1 : t,
  et = (t, a, e) => t + (a - t) * (e < 0 ? 0 : 1 < e ? 1 : e),
  i = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  lt = t => Math.atan2(Math.sin(t *= W), Math.cos(t)) / W,
  st = (t, a, e) =>
    ((t *= W) + (2 * (a = (a * W - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / W,
  rt = ({ x: t, y: a, z: e }) => Math.hypot(t - X.x, a - X.y, e - X.z),
  nt = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  ot = t => {
    let a = 0, e = 0, l = 0, s, r = t.at(-1);
    for (s of t) a += (r.y - s.y) * (r.z + s.z), e += (r.z - s.z) * (r.x + s.x), l += (r.x - s.x) * (r.y + s.y), r = s;
    return s = Math.hypot(a, e, l), a /= s, e /= s, l /= s, { x: a, y: e, z: l, w: a * r.x + e * r.y + l * r.z };
  },
  u = (
    t,
    a = l,
    e = 0,
  ) => (e *= 16,
    a[e++] = t.m11,
    a[e++] = t.m12,
    a[e++] = t.m13,
    a[e++] = t.m14,
    a[e++] = t.m21,
    a[e++] = t.m22,
    a[e++] = t.m23,
    a[e++] = t.m24,
    a[e++] = t.m31,
    a[e++] = t.m32,
    a[e++] = t.m33,
    a[e++] = t.m34,
    a[e++] = t.m41,
    a[e++] = t.m42,
    a[e++] = t.m43,
    a[e] = t.m44,
    a),
  ct = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  it = (t, a, e) => (t.D = e, t.A = a, t),
  ht = (t, l, a = t.A) =>
    it(
      t.map(t => {
        let a, e;
        return { x: t, y: a, z: e } = t,
          { x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }),
          { x: t, y: a, z: e };
      }),
      a,
      t.D,
    ),
  h = (t, a, e) => t.map(t => ht(t, a, e)),
  ft = (e, l = 0) =>
    g(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  s = (l, s, r) =>
    l.map((t, a, { length: e }) => it([t, s[e - a - 1], s[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, r)),
  f = (
    t,
    a,
    e = 0,
    l,
  ) => (t = t ? ft(t, l) : $,
    l = ht(t, N.translate(0, 1).scale3d(0 < e ? e : 1)),
    t = ht(t, N.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...s(t, l, a), l, t]),
  n = (
    l,
    s = l,
    r = (
      t,
      a,
    ) => (a *= Math.PI / s,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(a), y: Math.cos(a), z: Math.sin(t) * Math.sin(a) }),
  ) => {
    let n = [];
    for (let e = 0; l > e; e++) {
      for (let a = 0; s > a; a++) {
        let t = it([], 0, 1);
        n.push(t),
          t.push(r(e, a, t)),
          a && t.push(r((e + 1) % l, a, t)),
          s - 1 > a && t.push(r((e + 1) % l, a + 1 % s, t)),
          t.push(r(e, a + 1 % s, t));
      }
    }
    return n;
  },
  c = (l, s) => {
    let r, n, o, c = s.C;
    for (let t = 0; c.length > t; ++t) {
      if ((r = nt(l, c[t]) - l.w) < -8e-5 ? o = s : 8e-5 < r && (n = s), o && n) {
        n = [], o = [], c = s.C, t = s.B;
        let a = c.at(-1), e = nt(l, a) - l.w;
        for (let t of c) {
          r = nt(l, t) - l.w,
            e < 8e-5 && o.push(a),
            -8e-5 < e && n.push(a),
            (8e-5 < e && r < -8e-5 || e < -8e-5 && 8e-5 < r)
            && (e /= r - e,
              a = { x: a.x + (a.x - t.x) * e, y: a.y + (a.y - t.y) * e, z: a.z + (a.z - t.z) * e },
              n.push(a),
              o.push(a)),
            a = t,
            e = r;
        }
        return {
          o: 2 < n.length && { C: it(n, c.A, c.D), B: t, s: s },
          m: 2 < o.length && { C: it(o, c.A, c.D), B: t, s: s },
        };
      }
    }
    return { o: n, m: o };
  },
  o = (t, a, e = ot(a.C)) => {
    let l, s, r;
    return t
      ? ({ o: l, m: s } = c(t, a), l || s || t.u.push(a), l && (t.o = o(t.o, l, e)), s && (t.m = o(t.m, s, e)))
      : ({ x: l, y: s, z: e, w: r } = e, t = { x: l, y: s, z: e, w: r, u: [a], o: 0, m: 0 }),
      t;
  },
  e = (a, s, r) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = c(t, a);
        e || l || (0 < r * nt(t, s) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of s.u) o(a, t);
    return n;
  },
  ut = (t, a) => t && (a(t), ut(t.o, a), ut(t.m, a)),
  mt = t => t.length ? t.reduce((t, a) => o(t, { C: a, B: 0, s: 0 }), 0) : t,
  Mt = t => (ut(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.u) t.B = !t.B;
  }),
    t),
  m = (...t) =>
    t.reduce((l, a) => {
      let s = [];
      if (l = mt(l), a) {
        a = mt(a), ut(l, t => t.u = e(a, t, 1)), ut(a, t => s.push([t, e(l, t, -1)]));
        for (let [a, e] of s) for (let t of e) o(l, t, a);
      }
      return l;
    }),
  M = (...t) => {
    let e = new Map(),
      l = new Map(),
      s = t => {
        let a;
        return t.s && ((a = e.get(t.s)) ? (l.delete(a), t = s(t.s)) : e.set(t.s, t)), t;
      },
      a;
    return [t, ...a] = [...t],
      t = Mt(m(Mt(mt(t)), ...a)),
      ut(t, a => {
        for (let t of a.u) l.set(s(t), t.B);
      }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return it(a ? e.reverse() : e, t.A, t.D);
      });
  },
  G = (t, a, e) => t + (a - t) * K(1 - Math.exp(-e * B)),
  gt = () => {
    let t = i(O[12].g, O[13].g);
    C = et(G(C, 0, 1), lt(C + 60 * B), O[5].g - O[6].i),
      S = et(G(S, 0, 5), lt(S + 56 * B), t),
      Y = et(G(Y, 0, 4), lt(Y + 48 * B), t),
      j = G(j, O[9].i, .2 + .3 * U(2 * O[9].i - 1)),
      F = G(F, a ? F + (-9 - F) * K(1.5 * B) : K(k / 3), 1),
      w && k > w && (w = 0, h4.innerHTML = ""),
      O[0].j && .8 < O[0].g && (_ < 13
        ? (1 / 0 > w && (w = k + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), O[0].j = 0)
        : a
          || (1 / 0 > w && (w = k + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            a = 1));
    for (let t of q) t.h && (t.l = t.h());
    for (let t of O) t.h();
    for (let t of R) t.h();
  },
  yt = () => {
    h3.innerHTML = "Souls: "
      + [
        "0",
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
      ][_ = R.reduce((t, { j: a }) => t + a, 0)] + " / XIII";
  },
  xt = () => {
    localStorage.DanteSP22 = JSON.stringify([O.map(({ j: t }) => t), R.map(({ j: t }) => t), T, k, j]);
  },
  v = (t, a = 1) => {
    let e = At;
    return q.push(At = a = { l: N, F: q.length, H: a, u: [] }), t(a), At = e, a;
  },
  d = (t, a = N, e) => At.u.push(...h(t, a, e)),
  p = s => {
    let r = At,
      n = O.length,
      o = {
        j: 0,
        g: 0,
        i: 0,
        s: r,
        h() {
          let t = o.j, a = o.g, e = o.i, l = r.l.multiply(s);
          o.I = l,
            rt(l.transformPoint()) < 3 && L[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && 1 / 0 > w && (w = k + 1, h4.innerHTML = "* click *"), T = n, xt()),
            o.g = G(a, t, 4),
            o.i = G(e, t, 1),
            o.l = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    O.push(o),
      d(f(5), s.translate(-.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      d(f(5), s.translate(.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      d(f(), s.translate(0, -.4).scale(.5, .1, .5), I(.5, .5, .4));
  },
  b = (f, ...t) => {
    let u = -1,
      m = 0,
      M = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      I = {
        j: 0,
        h() {
          if (!I.j) {
            let s = 1, r = 1 / 0, t, a, e, l, n, o, c;
            for (let l of P) {
              let { x: t, z: a, w: e } = l;
              a = (t = Math.hypot(Y - t, C - a)) - e, c ||= t < e, 0 < a && r > a && (r = a, S = l);
              var i = t / e;
              s = i > s ? s : i;
            }
            c
            || ({ x: t, z: a, w: e } = S,
              l = Y - t,
              n = C - a,
              o = Math.hypot(l, n),
              h = Math.atan2(-n, l),
              p && (M = (Math.random() - .5) * Math.PI / 2, b = E(1, b / (1 + Math.random()))),
              u = -Math.cos(h += M),
              m = Math.sin(h),
              .1 < o && (o = (o < e ? o : e) / (o || 1), Y = l * o + t, C = n * o + a)),
              p = c,
              b = G(b, 3 + 6 * (1 - s), 3 + s),
              F = G(F, Y = G(Y, Y + u, b), b),
              j = G(j, C = G(C, C + m, b), b),
              g = st(g, Math.atan2(F - v, j - d) / W - 180, 3 * B),
              v = F,
              d = j;
            var h = (I.l = A.l.multiply(f.translate(F, 0, j).rotateSelf(0, g, 7 * Math.sin(1.7 * k)))).transformPoint();
            rt(h) < 1.55
              && (I.j = 1,
                i = [
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
                ][_] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > w && (w = k + (_ && _ < 12 ? 5 : 7), h4.innerHTML = i),
                yt(),
                xt());
          }
          I.j
            && (I.l = q[2].l.translate(
              a % 4 * 1.2 - 1.7 + Math.sin(k + a) / 7,
              -2,
              1.7 * (a / 4 | 0) - 5.5 + U(a % 4 - 2) + Math.cos(k / 1.5 + a) / 6,
            ));
        },
      },
      A = At,
      a = R.length,
      P = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      S = P[0],
      { x: Y, z: C } = S,
      F = Y,
      j = C;
    R.push(I);
  },
  vt = (t, a, e, l) => {
    let s = 0,
      r = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      u = -1 / 0,
      m = 1.1 * (e - a),
      M = new DOMMatrix(ct(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return a = g(
      8,
      t => (t = M.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        s -= t.x = (m * t.x | 0) / m / t.w,
        r -= t.y = (m * t.y | 0) / m / t.w,
        n -= t.z = (m * t.z | 0) / m / t.w,
        t),
    ),
      e = N.rotate(298, 139).translateSelf(s / 8, r / 8, n / 8),
      ht(a, e).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          u = u > e ? u : e;
      }),
      f *= f < 0 ? l : 1 / l,
      u *= 0 < u ? l : 1 / l,
      N.scale(2 / (c - o), 2 / (h - i), 2 / (f - u)).translateSelf((c + o) / -2, (h + i) / -2, (f + u) / 2)
        .multiplySelf(e);
  },
  dt = (t, a = 35633) => (a = J.c6x(a), J.s3c(a, t), J.c6a(a), a),
  pt = (t, a) => {
    let e = {}, l = J.c1h();
    return J.abz(l, t), J.abz(l, dt(a, 35632)), J.l8l(l), t => t ? e[t] || (e[t] = J.gan(l, t)) : J.u7y(l);
  },
  zt = (t, a, e, l) => {
    if (A) {
      for (var s of (e = N.rotate(0, 40 * Math.sin(P) - 70), [37, 38, 39])) u(e, r, s - 1);
      J.uae(t, !1, r), J.d97(4, q[39].G - q[37].v, 5123, 2 * q[37].v);
    } else {
      for (s = 0; q.length > s; ++s) q[s].H && u(q[s].l, r, s - 1);
      for (J.uae(t, !1, r), J.d97(4, (a ? q[39].G : q[37].v) - 3, 5123, 6), a = 0; a < 13; ++a) u(R[a].l, r, a);
      for (a = 0; O.length > a; ++a) u(O[a].l, r, a + 13), l || (r[16 * (a + 13) + 15] = 1 - O[a].g);
      J.uae(t, !1, r),
        J.das(4, q[e].G - q[e].v, 5123, 2 * q[e].v, 13),
        J.das(4, q[40].G - q[40].v, 5123, 2 * q[40].v, O.length);
    }
  },
  bt = t => {
    h4.innerHTML += ".", setTimeout(t);
  },
  wt = t => Math.sin(t * Math.PI * 2),
  I = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  A,
  It,
  At,
  V,
  Pt,
  St = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Yt = new AudioContext(),
  Ct = Yt.createBufferSource(),
  J = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in J) J[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = J[t];
bt(() => {
  let t = 0,
    e = () => {
      if (2 == ++t) {
        let s = t => {
            let a, e;
            J.f1s(),
              requestAnimationFrame(s),
              l = (t - (It || t)) / 1e3,
              A ? (B = 0, L[5] = 0) : B = .066 < l ? .066 : l,
              k += B,
              P += l,
              It = t,
              0 < B && (gt(), Pt(), L[5] = 0);
            var l = A
              ? N.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + K(hC.clientWidth / 1e3))
              : N.rotate(-Q, -z, -0).invertSelf().translateSelf(-x, -D, -H);
            0 < B
            && ({ x: t, y: a, z: e } = X,
              o(),
              J.b6o(36160, f),
              J.v5y(0, 0, 128, 128),
              J.c4s(16640),
              J.cbf(!0, !1, !0, !1),
              J.uae(o("b"), !1, u(N.rotate(0, 180).invertSelf().translateSelf(-t, -a, .3 - e))),
              zt(o("c"), 0, 41, 0),
              J.c4s(256),
              J.cbf(!1, !0, !0, !1),
              J.uae(o("b"), !1, u(N.translate(-t, -a, -e - .3))),
              zt(o("c"), 0, 41, 0),
              J.f1s()),
              r(),
              J.b6o(36160, h),
              J.v5y(0, 0, 2048, 2048),
              i[0](vt(l, .3, 55, 10)),
              i[1](vt(l, 55, 177, 11)),
              c(),
              J.b6o(36160, null),
              J.v5y(0, 0, J.drawingBufferWidth, J.drawingBufferHeight),
              J.cbf(!0, !0, !0, !0),
              J.c4s(16640),
              i[0](),
              i[1](),
              J.uae(c("a"), !1, ct(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              J.uae(c("b"), !1, u(l)),
              J.ubu(c("k"), x, D, H),
              zt(c("c"), !V, 42, 0),
              n(),
              J.ubu(n("j"), J.drawingBufferWidth, J.drawingBufferHeight, P),
              A ? J.ubu(n("k"), 0, 0, 0) : J.ubu(n("k"), x, D, H),
              J.uae(n("b"), !1, u(l.inverse())),
              J.d97(4, 3, 5123, 0),
              J.b6o(36160, f),
              J.f1s();
          },
          t = dt(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          r = pt(
            dt(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          n = pt(
            dt(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          o = pt(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          c = pt(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          i = g(2, a => {
            let e = new Float32Array(16), l = J.c25();
            return J.a4v(33984 + a),
              J.b9j(3553, l),
              J.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              J.t2z(3553, 10241, 9729),
              J.t2z(3553, 10240, 9729),
              J.t2z(3553, 34893, 515),
              J.t2z(3553, 34892, 34894),
              J.t2z(3553, 10243, 33071),
              J.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (u(t, e), J.uae(r("b"), !1, e), J.fas(36160, 36096, 3553, l, 0), J.c4s(256), zt(r("c"), !V, 42, 1))
                  : J.uae(c(a ? "j" : "i"), !1, e);
              };
          }),
          h = J.c5w(),
          f = (t = J.c3z(), J.c5w()),
          a = J.c25();
        o(),
          J.uae(o("a"), !1, ct(1.4, .59, 1e-4, 1)),
          c(),
          J.ubh(c("q"), 2),
          J.ubh(c("h"), 1),
          J.ubh(c("g"), 0),
          n(),
          J.ubh(n("q"), 2),
          J.b6o(36160, h),
          J.d45([0]),
          J.r9l(0),
          J.b6o(36160, f),
          J.bb1(36161, t),
          J.r4v(36161, 33189, 128, 128),
          J.f8w(36160, 36096, 36161, t),
          J.a4v(33986),
          J.b9j(3553, a),
          J.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          J.fas(36160, 36064, 3553, a, 0),
          J.b9j(3553, J.c25()),
          J.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l),
          J.gbn(3553),
          J.t2z(3553, 10241, 9987),
          J.t2z(3553, 10240, 9729),
          J.e8z(2929),
          J.e8z(2884),
          J.c70(1),
          J.c7a(1029),
          J.d4n(515),
          J.c5t(0, 0, 0, 1),
          gt(),
          (() => {
            let n = 0,
              o = 0,
              c = 2,
              i = { x: 0, y: 0, z: 0 },
              h = new Int32Array(256),
              f = new Uint8Array(65536),
              u,
              m,
              M,
              g,
              v,
              d,
              p,
              b,
              I,
              A,
              P,
              S,
              Y,
              C,
              F,
              j;
            Pt = () => {
              let e = Z + (L[0] ? 1 : 0) - (L[2] ? 1 : 0),
                l = y + (L[1] ? 1 : 0) - (L[3] ? 1 : 0),
                s = navigator.getGamepads()[0];
              if (s) {
                var r = t => a[t]?.pressed || 0 < a[t]?.value ? 1 : 0;
                let a = s.buttons, t = s.axes;
                s = r(3) || r(2) || r(1) || r(0),
                  e += r(14) - r(15) - at(t[0], .2),
                  l += r(12) - r(13) - at(t[1], .2),
                  V && (Q += 80 * at(t[3], .3) * B, z += 80 * at(t[2], .3) * B),
                  s && !u && (L[5] = 1),
                  u = s;
              }
              r = Math.atan2(l, e),
                s = at(K(Math.hypot(l, e)), .05),
                e = s * Math.cos(r),
                l = s * Math.sin(r),
                d = G(d, s, 10),
                s && (n = 90 - r / W),
                v = Y = S = 0,
                J.fa7(),
                J.r9r(0, 0, 128, 128, 6408, 5121, f),
                J.iay(36008, [36064, 36096]),
                J.iay(36009, [36064, 36096]),
                (() => {
                  for (let t = 32; t < 128; t += 2) {
                    let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                    for (let r = 1 & t; r < 128; r += 2) {
                      let t = h + 4 * r,
                        a = h + 4 * (127 - r),
                        e = f[t] / 255,
                        l = f[1 + a] / 255,
                        s = 1 - U(r / 63.5 - 1);
                      10 < r && r < 118 && (n = E(n, E(e * s, e * f[a] / 255)), o = E(o, E(l * s, l * f[1 + t] / 255))),
                        (r < 54 || 74 < r) && .001 < (a = (1 - s) * (l < e ? e : l) / 3)
                        && (r < 64 && a > c ? c = a : 64 < r && a > i && (i = a));
                    }
                    U(i - c) > (S < 0 ? -S : S) && (S = i - c), U(o - n) > (Y < 0 ? -Y : Y) && (Y = o - n);
                  }
                })(),
                (() => {
                  let r = 0, n = 0, a = 0, e = 0;
                  h.fill(0);
                  for (let t = 0; t < 31; ++t) {
                    let l = 0, s = 512 * t;
                    for (let e = 0; e < 128; e++) {
                      let t = s + 4 * e, a = (f[t] + f[1 + t]) / 255;
                      t = f[2 + t],
                        14 < e && e < 114 && (l += a),
                        t && a && (a = h[t] + 1, h[t] = a, r > a || (r = a, n = t));
                    }
                    l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), v = 1);
                  }
                  n && (v = 1),
                    p = G(p, v ? 6.5 : 8, 4),
                    i.y += a / 41 - (v || p) * e / 41 * p * B,
                    c ? n && (c = 0, m = n) : m = n || M,
                    M = n;
                })(),
                I = G(I, 0, v ? 8 : 4),
                A = G(A, 0, v ? 8 : 4),
                r = K(1 - 5 * E(S < 0 ? -S : S, Y < 0 ? -Y : Y)),
                m || (S += I * r * B, Y += A * r * B),
                b = G(b, v ? (s ? v ? 7 : 4 : 0) * r : 0, v ? .1 < r ? 10 : s ? 5 : 7 : 1),
                s = Math.sin(r = V ? z * W : Math.PI) * b * B,
                S -= e * (r = Math.cos(r) * b * B) - l * s,
                Y -= e * s + l * r,
                (() => {
                  let t = 1 === q[m].H && q[m].l || N;
                  c
                    ? ({ x: e, y: a, z: l } = O[T].I.transformPoint({ x: 0, y: 12, z: -2.5 }),
                      1 < c && (c = 1, P = X.y = a),
                      X.x = e,
                      X.z = l)
                    : ({ x: e, z: l } =
                      ((a = t.inverse()).m41 = 0, a.m42 = 0, a.m43 = 0, a.transformPoint({ x: S, z: Y, w: 0 })),
                      i.x += e,
                      i.z += l),
                    m !== g && (g = m, { x: a, y: e, z: l } = t.inverse().transformPoint(X), i.x = a, i.y = e, i.z = l);
                  var { x: a, y: e, z: l } = t.transformPoint(i);
                  t = a - X.x;
                  let s = l - X.z,
                    r =
                      (X.x = a,
                        X.y = e,
                        X.z = l,
                        m && (I = t / B, A = s / B),
                        1 === m && (O[9].j = a < -15 && l < 0 ? 1 : 0),
                        e < (a < -25 || l < 109 ? -25 : -9) && (I =
                          A =
                          p =
                          b =
                            0,
                          M = m = O[T].s.F,
                          c = 2),
                        P = et(G(P, e, 2), e, 8 * U(P - e)),
                        void 0 === C && (x = C = a, D = (F = P = e) + 13, H = (j = l) + -36),
                        C = G(C, a, tt(E(.4, U(C - a) - 1.5))),
                        F = G(F, e, tt(E(.4, U(F - e) - 2.2))),
                        j = G(j, l, tt(E(.4, U(j - l) - 1.5))),
                        V
                          ? (x = G(x, a, 666 * c + 18), D = G(D, P + 1.5, 666 * c + 18), H = G(H, l, 666 * c + 18))
                          : (x = G(x, C, 2),
                            D = G(D, E(F + 13, 6), 2),
                            s = (H = G(H, j + -18, 2)) - j,
                            (e = at(Math.hypot(s, t = x - C), .1))
                            && (Q = 90 - Math.atan2(e, D - F) / W, z = 270 + Math.atan2(s, t) / W)),
                        Q = E(Q < 87 ? Q : 87, -87),
                        z = lt(z),
                        q[37].l = N.translate(a, P, l).rotateSelf(0, o = st(o, n, 8 * B)));
                  [38, 39].map((t, a) => {
                    q[t].l = r.translate(0, d * K(.45 * Math.sin(9.1 * k + Math.PI * (a - 1) - Math.PI / 2)))
                      .rotateSelf(d * Math.sin(9.1 * k + Math.PI * (a - 1)) * .25 / W, 0);
                  });
                })();
            },
              d =
                I =
                A =
                p =
                b =
                  0,
              M = m = O[T].s.F;
          })(),
          (() => {
            let t = !0,
              a = () => {
                A || !t ? Ct.disconnect() : Ct.connect(Yt.destination), b4.innerHTML = "Music: " + t;
              },
              s = (t = !1) => {
                if (A !== t) {
                  A = t;
                  try {
                    t ? (document.exitFullscreen().catch(() => {}), document.exitPointerLock()) : Ct.start();
                  } catch {}
                  V = 0, document.body.className = t ? "l m" : "l", a(), yt();
                }
              },
              r,
              i,
              h,
              f,
              u,
              m,
              M,
              g,
              v,
              d,
              p,
              n;
            oncontextmenu = () => !1,
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b1.onclick = () => {
                document.body.requestFullscreen(), s();
              },
              b2.onclick = () => {
                document.body.requestFullscreen(), s(), V = 1;
              },
              b4.onclick = () => {
                t = !t, a();
              },
              b5.onclick = () => s(!0),
              onclick = t => {
                n = 1, A || (t.target === hC && (L[5] = !0), V && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((l = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && A)
                  ? A && !n || s(!A)
                  : 5
                      === (e = {
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
                  ? l && (L[e] = 1)
                  : L[e] = l);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                V && (t || a) && (z += .1 * t, Q += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: t, pageY: a, identifier: e } of l.changedTouches) {
                    V && t > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, m = t, M = a, g = e, d = z, p = Q)
                      : void 0 === f && (u = 0, i = t, h = a, f = e);
                  }
                  r = P;
                }
              },
              hC.ontouchmove = l => {
                if (!A) {
                  for (let { pageX: t, pageY: a, identifier: e } of l.changedTouches) {
                    var s, r, n, o, c;
                    g === e && (z = d + (t - m) / 2.3, Q = p + (a - M) / 2.3, v = 1),
                      f === e
                      && (r = (e = (i - t) / 20) < 0 ? -e : e,
                        n = (s = (h - a) / 20) < 0 ? -s : s,
                        o = Math.atan2(s, e),
                        c = K(Math.hypot(s, e) - .5),
                        Z = .2 < r ? Math.cos(o) * c : 0,
                        y = .2 < n ? Math.sin(o) * c : 0,
                        (Z || y) && (u = 1),
                        2 < r && (i = t + 20 * Math.sign(e)),
                        2 < n && (h = a + 20 * Math.sign(s)));
                  }
                }
              },
              hC.ontouchend = a => {
                let e;
                a.preventDefault();
                for (let t of a.changedTouches) {
                  t.identifier === g
                    ? (g = void 0, v || (e = 1), v = 0)
                    : t.identifier === f
                    ? (f = void 0, y = Z = 0, u || (e = 1), u = 0)
                    : e = 1;
                }
                e && a.target === hC && r && .02 < (a = P - r) && a < .7 && (L[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  L.length = Z = y = 0,
                  f = g = void 0,
                  document.hidden && s(!0);
              })(),
              s(!0);
          })(),
          requestAnimationFrame(s);
      }
    },
    l = new Image();
  l.onload = l.onerror = e,
    l.src = St,
    (t => {
      let R = 0,
        L = new Int32Array(10725888),
        e = () => {
          let l = Yt.createBuffer(2, 5362944, 44100);
          for (let e = 0; e < 2; e++) {
            for (let t = e, a = l.getChannelData(e); t < 10725888; t += 2) {
              a[t >> 1] = L[t] / 65536;
            }
          }
          Ct.buffer = l, Ct.loop = !0, bt(t);
        },
        l = () => {
          let f = 0,
            g,
            [v, d, p, b, I, A, P, S, Y, C, F, , j, k, T, D, t, H, a, Q, B] =
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
              ]]][R];
          C = C * C * 4;
          for (let M of [5513, 4562, 3891]) {
            let s = 0,
              r = 0,
              u = [],
              m,
              n,
              o,
              c = new Int32Array(768 * M),
              i = Math.PI * 2 ** (t - 8) / M,
              h = a * M & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * R + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * M;
                for (var q, O = 0; O < 4; ++O) {
                  if (m = 0, a && (m = B[a - 1].charCodeAt(t + 32 * O) - 40, m += 0 < m ? 106 : 0), m) {
                    if (!(q = u[m])) {
                      let l = 0,
                        s = 0,
                        r,
                        n,
                        o = (q = m, M),
                        c = m,
                        i = R < 2
                          ? t => t % 1 * 2 - 1
                          : wt,
                        h = R < 2
                          ? R < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : wt,
                        f = new Int32Array(S + Y + C);
                      for (let a = 0, e = 0; S + Y + C > a; ++a, ++e) {
                        let t = 1;
                        S > a ? t = a / S : S + Y > a || (t = (1 - (t = (a - S - Y) / C)) * 3 ** (-F / 16 * t)),
                          e < 0
                          || (e -= 4 * o,
                            n = .00396 * 2 ** ((c + d - 256) / 12),
                            r = .00396 * 2 ** ((c + I - 256) / 12) * (1 + (R ? 0 : .0072))),
                          f[a] = 80
                              * (i(l += n * t ** (p / 32)) * v + h(s += r * t ** (A / 32)) * b
                                + (P ? (2 * Math.random() - 1) * P : 0))
                              * t | 0;
                      }
                      q = u[q] = f;
                    }
                    for (let t = 0, a = 2 * e; q.length > t; ++t, a += 2) c[a] += q[t];
                  }
                }
                for (let t, a = 0; M > a; ++a) {
                  O = 0,
                    ((t = c[q = 2 * (e + a)]) || o)
                    && (n = .00308 * j,
                      1 !== R && 4 !== R || (n *= Math.sin(2 ** (t - 9) / M * q * Math.PI * 2) * Q / 512 + .5),
                      n = 1.5 * Math.sin(n),
                      s += n * r,
                      g = (1 - k / 255) * (t - r) - s,
                      r += n * g,
                      t = 4 === R ? r : 3 === R ? g : s,
                      R || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= T / 32,
                      o = 1e-5 < t * t,
                      g = Math.sin(i * q) * D / 512 + .5,
                      O = t * (1 - g),
                      t *= g),
                    q < h || (O += c[1 + q - h] * H / 255, t += c[q - h] * H / 255),
                    L[f + q] += c[q] = O,
                    ++q,
                    L[f + q] += c[q] = t;
                }
              }
            }
            f += c.length;
          }
          bt(++R < 5 ? l : e);
        };
      bt(l);
    })(() => {
      bt(() => {
        let a = 0,
          l = [],
          r = [],
          n = [],
          o = [],
          c = new Map(),
          i = new Int32Array(8),
          s = t => {
            let { x: a, y: e, z: l } = h[t], s = (u[0] = a, u[1] = e, u[2] = l, c.get(t = "" + (h.D ? f : i)));
            return void 0 !== s
              ? (a = 3 * s, o[a] = (o[a++] + i[5]) / 2, o[a] = (o[a++] + i[6]) / 2, o[a] = (o[a] + i[7]) / 2)
              : (c.set(t, s = c.size), r.push(a, e, l, u[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
              s;
          },
          h,
          f = new Int32Array(i.buffer, 0, 5),
          u = new Float32Array(i.buffer);
        for (let t of q) {
          for (h of (u[3] = 40 === t.F ? -14 : t.H && t.F, t.u)) {
            let { x: t, y: a, z: e } = ot(h);
            i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * a, i[7] = 32767 * e;
            for (let t = 2, a = s(0), e = s(1); h.length > t; ++t) l.push(a, e, e = s(t));
          }
          t.u = null, t.v = a, t.G = a = l.length;
        }
        J.b11(34962, J.c1b()),
          J.b2v(34962, new Float32Array(r), 35044),
          J.v7s(0, 4, 5126, !1, 0, 0),
          J.b11(34962, J.c1b()),
          J.b2v(34962, new Int16Array(o), 35044),
          J.v7s(1, 3, 5122, !0, 0, 0),
          J.b11(34962, J.c1b()),
          J.b2v(34962, new Uint32Array(n), 35044),
          J.v7s(2, 4, 5121, !0, 0, 0),
          J.b11(34963, J.c1b()),
          J.b2v(34963, new Uint16Array(l), 35044),
          J.e3x(0),
          J.e3x(1),
          J.e3x(2),
          bt(e);
        try {
          let [e, l, t, a, s] = JSON.parse(localStorage.DanteSP22);
          O.map((t, a) => t.g = t.i = t.j = a ? 0 | e[a] : 0), R.map((t, a) => t.j = 0 | l[a]), T = t, k = a, j = s;
        } catch {}
        F = T < 0 ? 0 : 1 < T ? 1 : T;
      });
      let a = g(
          11,
          t => N.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
        ),
        c = g(10, t => s(ht(ft(18), a[t]).reverse(), ht(ft(18), a[t + 1]), 1)).flat();
      v(() => d([$.slice(1)], N.translate(-2).scale3d(3).rotate(90, 0)), 0),
        v(() => {
          let t = (a, e, l) =>
              v(t => {
                t.h = () => N.translate(s() * Math.sin(3 * a + k * a) * e),
                  $.map(({ x: t, z: a }) => {
                    d(f(11, 1), N.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), I(.5, .3, .7, .6)),
                      d(f(), N.translate(4 * t, 7, l + 4 * a).scale(1, .3), I(.5, .5, .5, .3));
                  }),
                  d(M(
                    h(f(), N.translate(0, 0, l).scale(5, 1, 5), I(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      h(f(), N.translate(5 * t, .2, l).rotate(-30 * t).scale(4, 1, 2), I(.8, .8, .8, .3))
                    ),
                  )),
                  d(f(), N.translate(0, -3, l).scale(8, 2, 8), I(.4, .4, .4, .3));
              }),
            a = (t, a, e) =>
              N.translate(t + Math.sin(k + 2) / 5, a + Math.sin(.8 * k) / 3, e).rotateSelf(
                2 * Math.sin(k),
                Math.sin(.7 * k),
                Math.sin(.9 * k),
              ),
            e = t =>
              M(
                h(f(), N.translate(0, -t / 2).scale(6, t - 1, 2.2)),
                h(f(), N.translate(0, -t / 2 - 6).scale(4, t - 3, 4)),
                h(f(32, 1), N.translate(0, t / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            s = () => {
              let t = O[2].i, a = 1 - O[4].i;
              return t < a ? t : a;
            },
            l = M(
              h(f(20, 1, 1.15, 1), N.translate(0, -3).scale(3.5, 1, 3.5), I(.7, .4, .25, .7)),
              h(f(20, 1, 1.3, 1), N.translate(0, -2.5).scale(2.6, 1, 3), I(.7, .4, .25, .2)),
              h(f(), N.translate(4, -1.2).scale3d(2), I(.7, .4, .25, .3)),
            ),
            r = g(7, t => h(f(6, 1), N.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), I(.3, .3, .38))).flat(),
            n = (v(t => {
              t.h = () => a(-12, 4.2, 40 * F - 66), d(l), p(N.translate(0, -3, 4));
            }),
              p(N.translate(-5.4, 1.5, -19).rotate(0, -90)),
              b(N.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              b(
                N.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...ft(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              d(f(), N.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), I(.8, .8, .8, .2)),
              $.map(({ x: t, z: a }) => d(f(6), N.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), I(.6, .3, .3, .4))),
              [-23, 22].map(t => d(f(), N.translate(0, 0, t).scale(3, 1, 8), I(.9, .9, .9, .2))),
              [-15, 15].map((a, e) => {
                d(f(), N.translate(0, 6.3, a).scale(4, .3, 1), I(.3, .3, .3, .4)),
                  d(f(), N.translate(0, 1, a).scale(3, .2, .35), I(.5, .5, .5, .3)),
                  v(t => {
                    t.h = () => N.translate(0, 0, a).scale(1, K(1.22 - O[e + 1].g), 1), d(r);
                  });
              }),
              g(5, a =>
                g(2, t =>
                  d(
                    c,
                    N.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    I(1, 1, .8, .2),
                  ))),
              d(f(), N.translate(3, 1.5, -20).scale(.5, 2, 5), I(.7, .7, .7, .2)),
              d(f(), N.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), I(.75, .75, .75, .2)),
              d(f(5), N.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), I(.6, .3, .3, .4)),
              d(f(), N.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), I(.8, .2, .2, .5)),
              d(M(
                m(
                  h(f(6, 0, 0, .3), N.translate(8, -3, -4).scale(13, 1, 13), I(.7, .7, .7, .2)),
                  h(f(6), N.translate(0, -8).scale(9, 8, 8), I(.4, .2, .5, .5)),
                  h(f(6, 0, 0, .3), N.translate(0, -.92).scale(13, 2, 13), I(.8, .8, .8, .2)),
                ),
                h(f(5), N.scale(5, 30, 5), I(.4, .2, .6, .5)),
                h(f(5, 0, 1.5), N.translate(0, 1).scale(4.5, .3, 4.5), I(.7, .5, .9, .2)),
                h(f(), N.rotate(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), I(.5, .5, .5, .5)),
                h(f(6), N.translate(15, -1.5, 4).scale(3.5, 1, 3.5), I(.5, .5, .5, .5)),
              )),
              v(t => {
                t.h = () =>
                  N.translate(
                    0,
                    .01 < O[3].g ? (5 * Math.cos(1.5 * k) + 2) * O[3].i * (1 - O[2].g) + -15 * (1 - O[3].g) : -500,
                    0,
                  ),
                  d(f(5), N.translate(0, -.2).scale(5, 1, 5), I(.6, .65, .7, .3)),
                  p(N.translate(0, 1.2));
              }),
              p(N.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              v(t => {
                t.h = () => N.translate(s() * Math.sin(k / 1.5 + 2) * 12),
                  d(
                    M(
                      m(
                        h(f(), N.scale(1.5, 1, 5), I(.9, .9, .9, .2)),
                        h(f(6), N.scale(4, 1, 5), I(.9, .9, .9, .2)),
                        h(f(), N.translate(0, -2).scale(2, 3.2, 1.9), I(.3, .8, .5, .5)),
                        h(f(16, 1, 0, 4), N.scale(1, 1, 1.5).rotate(0, 90), I(.9, .9, .9, .2)),
                      ),
                      h(f(), N.scale(1.3, 10, 1.3), I(.2, .7, .4, .6)),
                    ),
                    N.translate(0, 0, 45),
                  ),
                  b(N.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              d(f(), N.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), I(.9, .9, .9, .2)),
              v(t => {
                t.h = () => N.translate(9.8 * (1 - s())),
                  d(f(3), N.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), I(.3, .6, .6, .2)),
                  d(f(8), N.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), I(.8, .8, .8, .2)),
                  d(f(), N.translate(-23, -3, 55).scale(5.2, 1.7, 3), I(.5, .5, .5, .3)),
                  d(f(), N.translate(-23, -2.2, 62).scale(3, 1, 4), I(.5, .5, .5, .3)),
                  p(N.translate(-23, -.5, 66.5));
              }),
              v(t => {
                t.h = () => N.translate(0, K(1 - 5 * s()) * i(O[4].g, O[5].g) * Math.sin(1.35 * k) * 4),
                  d(f(), N.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), I(.7, .7, .7, .2)),
                  d(
                    M(h(f(), N.scale(3, 1.4, 2.7)), h(f(), N.scale(1.2, 8, 1.2))),
                    N.translate(-33, -3, 55),
                    I(.7, .7, .7, .2),
                  );
              }),
              v(t => {
                t.h = () => N.translate(0, 0, K(1 - 5 * s()) * i(O[4].g, O[5].g) * Math.sin(.9 * k) * 8),
                  d(M(
                    h(f(), N.translate(-27, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2)),
                    h(f(), N.translate(-27, -3, 55).scale(1, 3), I(.9, .9, .9, .2)),
                  )),
                  d(f(), N.translate(-39, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2));
              }),
              v(t => {
                t.h = () => N.translate(0, -6.5 * O[4].i),
                  d(
                    f(6),
                    N.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    I(.7, .7, .7, .4),
                  );
              }),
              p(N.translate(-55, -1.1, 46).rotate(0, 90)),
              d(f(6), N.translate(-61.3, -2.4, 49).scale(3, 1, 5), I(.4, .6, .6, .3)),
              d(f(7), N.translate(-57, -2.6, 46).scale(4, 1, 4), I(.8, .8, .8, .3)),
              [
                ...h(f(), N.translate(0, -3).scale(11, 1.4, 3), I(.9, .9, .9, .2)),
                ...M(
                  h(f(6), N.rotate(90).scale(6, 8, 6), I(.3, .6, .6, .3)),
                  h(f(4, 0, .01), N.translate(0, 6).scale(12, 2, .75).rotate(0, 45), I(.3, .6, .6, .3)),
                  h(f(6), N.rotate(90).scale(5, 12, 5), I(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(t =>
                    h(f(5), N.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), I(.3, .6, .6, .3))
                  ),
                ),
              ]),
            o = (d(n, N.translate(-53, 0, 55)),
              v(t => {
                t.h = () => N.translate(-75, (1 - O[5].i) * (1 - O[6].g) * 3, 55).rotate(180 * (1 - O[5].i) + C, 0),
                  d(n);
              }, 2),
              d(f(), N.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), I(.7, .7, .7, .2)),
              d(f(3, 0, -.5), N.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), I(.8, .8, .8, .2)),
              d(M(
                m(
                  h(f(), N.translate(-100, -2.5, 55).scale(8, 1, 8), I(.8, .8, .8, .2)),
                  h(f(), N.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), I(.8, .8, .8, .2)),
                  h(f(), N.translate(-100, -2.6, 70).scale(3, 1.1, 7), I(.8, .8, .8, .2)),
                  h(f(), N.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), I(.8, .8, .8, .2)),
                  h(f(6), N.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), I(.6, .6, .6, .3)),
                  h(f(), N.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), I(.8, .8, .8, .2)),
                  h(f(), N.translate(-100, .42, 92).scale(3, 1.1, 4.1), I(.8, .8, .8, .2)),
                ),
                h(f(8), N.translate(-100, -1, 55).scale(7, .9, 7), I(.3, .3, .3, .4)),
                h(f(8), N.translate(-100, -2, 55).scale(4, .3, 4), I(.4, .4, .4, .5)),
                h(f(8), N.translate(-100, -3, 55).scale(.6, 1, .6), I(.4, .4, .4, .5)),
              )),
              b(N.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              b(N.translate(-89, .2, 80), [0, 0, 6]),
              d(M(
                h(f(), N.translate(-100, 1, 63).scale(7.5, 4), I(.5, .5, .5, .4)),
                h(f(), N.translate(-100, 0, 70).scale(2, 2, 10), I(.5, .5, .5, .4)),
                h(f(20, 1), N.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), I(.5, .5, .5, .4)),
              )),
              v(t => {
                t.h = () => N.translate(-99.7, -1.9, 63.5).scale(1, K(1.1 - O[6].g), 1), d(r);
              }),
              $.map(({ x: a, z: e }) => {
                d(f(6), N.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), I(.6, .15, .15, .8)),
                  [4, -.4].map(t =>
                    d(f(6), N.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), I(.4, .2, .2, .8))
                  );
              }),
              g(7, t => {
                d(
                  f((23 * t + 1) % 5 + 5, 0, .55),
                  N.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                    5 + t / 2,
                    1 + t / 6,
                    5 + t / 3,
                  ),
                  I(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                );
              }),
              d(f(), N.translate(-87, -9.5, 24).scale(7, 1, 3), I(.4, .5, .6, .4)),
              d(f(4), N.translate(-86, -9.2, 27).scale(5, 1, 5), I(.5, .6, .7, .3)),
              d(f(12, 1), N.translate(-86, -9, 31).scale(1.5, 1, 1.5), I(.3, .3, .4, .1)),
              p(N.translate(-86, -7.5, 31)),
              v(t => {
                t.h = () => N.translate(0, 3.5 * (1 - E(O[6].g, O[7].g)) + i(O[7].i, O[6].i) * Math.sin(k) * 5),
                  [0, 12, 24].map(t =>
                    d(f(), N.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), I(.2, .5, .6, .2))
                  );
              }),
              v(t => {
                t.h = () =>
                  N.translate(0, i(O[7].i, O[6].i) * Math.sin(k + 3) * 6, 6 * Math.sin(.6 * k + 1) * i(O[7].i, O[6].i)),
                  [6, 18].map(t =>
                    d(f(), N.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), I(.1, .4, .5, .2))
                  );
              }),
              d(
                M(
                  m(
                    h(f(5), N.translate(0, 0, -7).scale(2, 1.2, 2), I(.2, .4, .7, .3)),
                    h(f(5), N.scale(9, 1.2, 9), I(0, .2, .3, .5)),
                    h(f(), N.scale(11, 1, 13), I(.3, .4, .6, .3)),
                  ),
                  h(f(5), N.scale(5.4, 5, 5.4), I(0, .2, .3, .5)),
                ),
                N.translate(-38.9, -11.3, 17),
              ),
              p(N.translate(-38.9, -9.6, 10)),
              v(t => {
                t.h = () => N.translate(0, -7.3 * O[7].i),
                  d(
                    M(
                      m(
                        h(f(5), N.translate(0, 2).scale(5, 7, 5).skewY(8), I(.2, .4, .5, .5)),
                        h(f(5), N.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), I(.25, .35, .5, .5)),
                        h(f(5), N.translate(0, 9).scale(.6, 7, .6).skewY(8), I(.35, .3, .5, .5)),
                      ),
                      h(f(5), N.scale(4, 8, 4), I(.2, .4, .5, .5)),
                      h(f(5), N.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), I(.2, .4, .5, .5)),
                    ),
                    N.translate(-38.9, -11.3, 17),
                  ),
                  b(N.translate(-39.1, -.6, 17).rotate(11), ...ft(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.2]));
              }),
              $.map(({ x: a, z: e }) => {
                d(f(14, 1), N.translate(9 * a - 38.9, -7.3, 11 * e + 17).scale(1, 4), I(.25, .25, .25, 1)),
                  [1.5, 8].map(t =>
                    d(
                      f(17, 1),
                      N.translate(9 * a - 38.9, -7.3, 11 * e + 17).translate(0, t - 4).scale(1.5, .5, 1.5),
                      I(.6, .6, .6, .3),
                    )
                  );
              }),
              d(
                M(
                  m(
                    h(f(6), N.translate(0, 0, -36).scale(15, 1.2, 15), I(.7, .7, .7, .3)),
                    h(f(), N.translate(0, 0, -18).scale(4, 1.2, 6), I(.45, .4, .6, .3)),
                  ),
                  ...g(6, a =>
                    g(6, t =>
                      h(
                        f(6),
                        N.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                        I(.7, .7, .7, .3),
                      ))).flat(),
                ),
                N.translate(-38.9, -11.3, 17),
              ),
              b(N.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              d(f(5), N.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), I(.8, .1, .25, .4)),
              p(N.translate(-84, -.5, 85).rotate(0, 45)),
              v(t => {
                t.h = () => a(-123, 1.4, 55 + -65 * j), d(l), p(N.translate(0, -3, -4).rotate(0, 180));
              }),
              M(
                h(f(), N.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), I(.25, .25, .35, .3)),
                h(f(3), N.translate(0, 0, -5.5).scale(3, 2), I(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(t => h(f(), N.translate(t, -.5, 1).scale(.14, .3, 6.5), I(.7, .2, 0, .3))),
              ));
          v(t => {
            t.h = () => N.translate(0, -2, i(O[10].g, O[11].g) * U(Math.sin(1.1 * k)) * -8.5 + 10),
              g(2, t => d(o, N.translate(9 * t - 110 + (1 & t), 1.7, -12)));
          }),
            v(t => {
              t.h = () => N.translate(0, -2, i(O[10].g, O[11].g) * U(Math.sin(2.1 * k)) * -8.5 + 10),
                g(2, t => d(o, N.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
            }),
            v(t => {
              t.h = () =>
                N.translate(
                  0,
                  -2,
                  -8.5 * E((1 - O[10].g) * (1 - i(O[10].g, O[11].g)), i(O[10].g, O[11].g) * U(Math.sin(1.5 * k))) + 10,
                ), g(3, t => d(o, N.translate(9 * t - 106, 1.7, -12)));
            }),
            d(
              M(
                m(
                  h(f(), N.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
                  h(f(), N.translate(26.5, -.6, 10).scale(19, 2, .5)),
                ),
                ...g(4, t => h(f(), N.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                ...g(3, t => h(f(), N.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              N.translate(-123, 0, -12),
              I(.5, .5, .6, .2),
            ),
            p(N.translate(-116, -1.4, -18).rotate(0, 180)),
            d(f(), N.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), I(.8, .8, .8, .2)),
            d(f(6), N.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), I(.6, .5, .7, .2)),
            d(f(), N.translate(-115.5, -17, -12).scale(.5, 15, 2.2), I(.6, .6, .6, .3)),
            d(f(8), N.translate(-114, -17, -2).scale(2, 15, 2), I(.6, .6, .6, .3)),
            d(f(8), N.translate(-79, -17, -2).scale(2, 15, 2), I(1, 1, 1, .3)),
            d(f(), N.translate(-77, -17, -50.5).scale(2.2, 15, .5), I(.6, .6, .6, .3)),
            g(3, t => {
              d(e(16), N.translate(12 * t - 109, -9, -12), I(.6, .6, .6, .3)),
                d(e(16), N.translate(-77, -9, -12 * t - 20).rotate(0, 90), I(.6, .6, .6, .3));
            }),
            d(M(
              h(f(12), N.translate(-77, -14.5, -12).scale(4, 17.5, 4), I(.7, .7, .7, .2)),
              h(f(), N.translate(-79, .1, -12).scale(3.5, 2, 1.3), I(.4, .5, .6, .2)),
              h(f(), N.translate(-77, .1, -14).scale(1.5, 2, 2), I(.4, .5, .6, .2)),
              h(f(12), N.translate(-77, 3.1, -12).scale(3, 5, 3), I(.4, .5, .6, .2)),
            )),
            d(f(), N.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), I(.6, .6, .6, .3)),
            d(f(9), N.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), I(.5, .5, .5, .3)),
            d(M(
              h(f(), N.translate(-93, -5.8, -40).scale(9, 1, 5), I(.8, .8, .8, .1)),
              h(f(9), N.translate(-98, -5.8, -40).scale(3, 8, 3), I(.7, .7, .7, .2)),
            )),
            p(N.translate(-98, -4.4, -40).rotate(0, 90)),
            b(N.translate(-115, .2, -12), [0, 0, 3.5]),
            b(N.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            d(M(
              m(
                h(f(6, 0, 0, .6), N.translate(-100, .7, 105.5).scale(8, 1, 11), I(.7, .7, .7, .2)),
                h(f(), N.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), I(.7, .7, .7, .2)),
              ),
              h(f(5), N.translate(-100, .7, 113).scale(4, 3, 4), I(.7, .7, .7, .2)),
            )),
            g(4, a =>
              v(t => {
                t.h = () => {
                  let t = i(O[8].i, O[12].i);
                  return N.translate(
                    (2 < a ? 2 * (1 - t) + t : 0) - 100,
                    t * Math.sin(1.3 * k + 1.7 * a) * (3 + a / 3) + .7,
                    115 + (1 & a ? -1 : 1) * (1 - O[8].i) * (1 - O[12].i) * -7
                      + (t < .05 ? .05 : t) * Math.cos(1.3 * k + 7 * a) * (4 - 2 * (1 - a / 3)),
                  );
                },
                  d(
                    f(6),
                    N.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                    I(.5 - a / 8, a / 12 + .5, .7, .3),
                  );
              })),
            v(t => {
              t.h = () => {
                let t = i(O[8].i, O[12].i);
                return N.translate(2.5 * (1 - t) - 139.7, -3 * (1 - O[8].g) + t * Math.sin(.8 * k) * -1 - 1.8, 93.5)
                  .rotateSelf(Math.cos(1.3 * k) * (3 * t + 3), 0);
              },
                d(M(h(f(10), N.scale(6, 2, 6), I(.1, .6, .5, .3)), h(f(10), N.scale(3.3, 6, 3.3), I(.1, .6, .5, .5)))),
                d(f(15, 1), N.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), I(.4, .4, .4, .3)),
                d(f(10), N.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), I(.3, .8, .7, .3)),
                d(f(5), N.translate(-7.5).rotate(0, 90).scale(1, 3), I(.5, .5, .5, .5)),
                p(N.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(t =>
                  d(c, N.rotate(90 * -t, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), I(1, 1, .8, .2))
                ),
                b(N.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(a => {
              d(f(12, 1), N.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), I(.6, .24, .2, .5)),
                [7.2, 1.5].map(t =>
                  d(f(15, 1), N.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), I(.5, .24, .2, .4))
                ),
                d(c, N.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), I(1, 1, .8)),
                d(
                  M(
                    h(f(), N.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), I(.5, .5, .5, .4)),
                    h(f(), N.scale(3, 3, 10), I(.6, .24, .2, .5)),
                    h(f(28, 1), N.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), I(.6, .24, .2, .5)),
                    h(f(5), N.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), I(.6, .24, .2, .5)),
                    h(f(5), N.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), I(.6, .24, .2, .5)),
                  ),
                  N.translate(a - 100, .7, 97),
                );
            }),
            v(t => {
              t.h = () => N.translate(-100, .6, 96.5).scale(.88, 1.2 - O[12].g), d(r);
            }),
            d(M(
              h(f(), N.translate(-82.07, .8, 106).scale(11, .9, 2.2), I(.7, .7, .7, .1)),
              h(f(45, 1), N.translate(-81, .7, 106).scale3d(7.7), I(.7, .7, .7, .1)),
            )),
            v(t => {
              t.h = () => N.translate(-81, .6, 106).rotate(0, 40 + S),
                d(M(
                  h(f(45, 1), N.scale(7.5, 1, 7.5), I(.45, .45, .45, .2)),
                  h(f(), N.translate(0, 0, -5.5).scale(1.5, 3, 2.7), I(.45, .45, .45, .2)),
                )),
                d(f(8), N.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), I(.7, .7, .7, .1)),
                d(f(5), N.translate(0, 2).scale(1, 2), I(.3, .3, .3, .2)),
                b(N.translate(0, 3), ...ft(14).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2]));
            }),
            v(t => {
              t.h = () => N.translate(-65.8, .8, 106).rotate(0, Y),
                [-1, 1].map(t =>
                  d(
                    c,
                    N.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                    I(1, 1, .8),
                  )
                ),
                d(M(
                  h(f(28, 1), N.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  h(f(), N.scale(9, 5, 2), I(.3, 0, 0, .3)),
                )),
                d(h(f(28, 1), N.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                d(h(f(5), N.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            v(t => {
              t.h = () => N.translate(-50.7, .8, 106).rotate(0, 180 - Y),
                d(M(
                  h(f(28, 1), N.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  h(f(), N.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                  h(f(), N.translate(0, 0, 7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                )),
                d(h(f(28, 1), N.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                d(h(f(5), N.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            v(t => {
              t.h = () => N.translate(-50.7, .8, 91).rotate(0, 270 + Y),
                d(M(
                  h(f(28, 1), N.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  h(f(), N.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                  h(f(), N.translate(0, 0, -7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                )),
                d(h(f(28, 1), N.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                d(h(f(5), N.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            d(f(), N.translate(-58, 1, 106).scale(2, .65, 2), I(.7, .7, .7, .2)),
            d(f(), N.translate(-50.7, 1, 99).scale(2, .65, 1), I(.7, .7, .7, .2)),
            d(f(), N.translate(-42, .4, 91).scale(5, 1, 2.5), I(.7, .7, .7, .3)),
            d(f(), N.translate(-34.2, .4, 91).scale(3, 1, 3), I(.7, .7, .7, .3)),
            p(N.translate(-34, 2.7, 96).rotate(-12, 0)),
            d(f(5), N.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), I(.2, .5, .5, .6)),
            [I(.1, .55, .45, .2), I(.2, .5, .5, .3), I(.3, .45, .55, .4)].map((a, e) =>
              v(t => {
                t.h = () =>
                  N.translate(
                    0,
                    (1 - O[13].i) * (1 - O[14].i) * (e ? 0 : 3) + i(O[13].i, O[14].i) * Math.sin(1.5 * k + 1.5 * e) * 4,
                  ),
                  d(f(), N.translate(-23.5, .5, 91 + 6.8 * e).scale(1 === e ? 2 : 3.3, 1, 3.3), a),
                  2 === e && d(f(), N.translate(-29.1, .4, 91).scale(2.1, 1, 3), I(.7, .7, .7, .3)),
                  1 === e
                  && d(f(), N.translate(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), I(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(t => d(c, N.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), I(1, 1, .8))),
            g(3, t =>
              d(
                e(24.7 - .7 * (1 & t)),
                N.translate(6 * t - 6, 4 - (1 & t), 111 - .2 * (1 & t)),
                1 & t ? I(.5, .5, .5, .3) : I(.35, .35, .35, .5),
              )),
            d(M(
              h(f(6, 0, 0, .3), N.translate(0, -.92, 95).scale(14, 2, 14), I(.8, .8, .8, .2)),
              h(f(5), N.translate(0, 0, 95).scale3d(6), I(.3, .3, .3, .5)),
            )),
            p(N.translate(0, 1.7, 82).rotate(0, 180)),
            d(f(5), N.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), I(.5, .3, .3, .4)),
            d(f(6), N.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), I(.5, .6, .7, .3)),
            d(f(), N.translate(0, 16, 129).scale(1.5, 1, 2), I(.5, .6, .7, .3)),
            d(f(7), N.translate(0, 16.2, 133).scale(5, 1, 5), I(.4, .5, .6, .4)),
            d(M(
              m(
                h(f(), N.translate(0, 16, 110.5).scale(12, 1, 3), I(.5, .3, .3, .4)),
                h(f(), N.translate(0, 16, 111).scale(3, 1, 3.8), I(.5, .3, .3, .4)),
              ),
              h(f(5), N.translate(0, 16, 103.5).scale(5.5, 5, 5.5), I(.5, .3, .3, .4)),
            )),
            v(t => {
              t.h = () => {
                let t = Math.sin(k);
                return N.translate(-2 * t).rotate(25 * t);
              },
                d(f(3), N.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), I(.5, .3, .3, .4)),
                [22, 30].map(t => {
                  d(f(6), N.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), I(.7, .7, .7, .4)),
                    d(f(), N.translate(0, 6.2, t + 95).scale(.5, 11, .5), I(.5, .3, .3, .4));
                });
            }),
            v(t => {
              t.h = () => {
                let t = i(i((O[14].g + O[14].i) / 2, O[13].i), (O[15].g + O[15].i) / 2);
                return N.translate(0, 16 * t, 8.5 * K(2 * t - 1) + 95);
              },
                d(f(5), N.scale(5, 1.1, 5), I(.5, .3, .3, .4)),
                d(f(5), N.scale(5.5, .9, 5.5), I(.25, .25, .25, .4)),
                p(N.translate(0, 1.5, -1).rotate(0, 180));
            }),
            b(N.translate(0, 3, 95), ...ft(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            b(N.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        v(() => {
          [0, 180].map(t => d(c, N.rotate(0, t).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), I(1, 1, .8))),
            d(n(20), N.translate(0, 1).scale(.5, .5, .5), I(1, .3, .4));
          let a = h(
            M(f(15, 1), h(f(), N.translate(0, 0, 1).scale(2, 2, .5))),
            N.rotate(-90, 0).scale(.1, .05, .1),
            I(.3, .3, .3),
          );
          [-1, 1].map(t => d(a, N.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            d(f(), N.translate(0, .9, .45).scale(.15, .02, .06), I(.3, .3, .3)),
            d(n(20), N.scale(.7, .8, .55), I(1, .3, .4));
        }),
        [-1, 1].map(t =>
          v(() => {
            d(f(10, 1), N.translate(.3 * t, -.8).scale(.2, .7, .24), I(1, .3, .4));
          })
        ),
        v(() => {
          d(f(6, 1), N.scale(.13, 1.4, .13), I(.3, .3, .5, .1)),
            d(f(10), N.translate(0, 1).scale(.21, .3, .21), I(1, .5, .2)),
            d(f(3), N.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), I(.2, .2, .2, .1));
        }, 0),
        v(() => {
          d(f(6).slice(0, -1), N.scale(.77, 1, .77), I(1, .3, .5));
        }, 0),
        v(() => {
          d(
            n(30, 24, (t, a, e) => {
              let l = a / 24, s = t * Math.PI * 2 / 30, r = l ** .6 * Math.PI / 2;
              return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
                23 === a
                  ? { x: e.D = 0, y: -.5, z: 0 }
                  : {
                    x: Math.cos(s) * Math.sin(r),
                    y: Math.cos(l * Math.PI) - l - t,
                    z: Math.sin(s) * Math.sin(r) + Math.sin(t * Math.PI * 2) / 4,
                  };
            }),
            N.scale3d(.7),
            I(1, 1, 1),
          ), [-1, 1].map(t => d(n(12), N.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
