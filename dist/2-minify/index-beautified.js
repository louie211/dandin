let b,
  S,
  k,
  I,
  j,
  G,
  Z,
  $,
  w,
  e1,
  z,
  a1,
  l,
  n,
  t1,
  l1,
  D,
  Y,
  C,
  r1,
  T = 0,
  F = 0,
  s1 = 0,
  c1 = 0,
  o1 = 0,
  i1 = 0,
  n1 = 0,
  m1 = 0,
  f1 = 0,
  B = 0,
  O = 0,
  Q = 0,
  h1 = 14,
  R = 180,
  u1 = .1,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  X = [],
  q = [],
  d1 = [],
  g1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  { PI: L, atan2: p1, sin: N, cos: H, exp: t, random: v1 } = Math,
  A = (
    e,
    a = r,
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
  E = (
    e = x,
    a = M,
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
  P = (e = 0, a = 0, t = 0, l = 1) => {
    D = M.m11 * e + M.m21 * a + M.m31 * t + M.m41 * l,
      Y = M.m12 * e + M.m22 * a + M.m32 * t + M.m42 * l,
      C = M.m13 * e + M.m23 * a + M.m33 * t + M.m43 * l,
      r1 = M.m14 * e + M.m24 * a + M.m34 * t + M.m44 * l;
  },
  o = (e, a, t) => x.translate(e, a, t),
  m = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  d = (e, a, t) => (e.A = t, e.s = a, e),
  x1 = (e, a, t = e.s) => (E(a), d(e.map(({ x: e, y: a, z: t }) => (P(e, a, t), { x: D, y: Y, z: C })), t, e.A)),
  i = (e, a, t) => e.map(e => x1(e, a, t)),
  W = e => 0 > e ? -e : e,
  y1 = (e, a) => a > e ? e : a,
  w1 = (e, a) => e > a ? e : a,
  z1 = (e, a) => W(e) > a ? e : 0,
  U = (e, a = 0, t = 1) => a > e ? a : e > t ? t : e,
  S1 = e => p1(N(e * U1), H(e * U1)) / U1,
  A1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * U(t) || 0,
  K = (e, a, t) => (t > 0 ? 1 > t ? e + (a - e) * t : a : e) || 0,
  M1 = (e, a, t = 0) => (e * e + a * a + t * t) ** .5,
  k1 = (t, l = 0) =>
    m(t, e => {
      let a = H(2 * L * e / t);
      return { x: N(2 * L * e / t), y: 0, z: .01 > W(a) ? a : 0 > a ? a - l : a + l };
    }),
  I1 = (l, r, s) =>
    l.map((e, a, { length: t }) => d([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.s, s)),
  f = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? k1(e, l) : g1,
    l = x1(e, o(0, 1).scale3d(t > 0 ? t : 1)),
    e = x1(e, o(0, -1).scale3d(0 > t ? -t : 1)).reverse(),
    [...I1(e, l, a), l, e]),
  j1 = (l, r = l, s = ((e, a) => (a *= L / r, { x: H(e *= 2 * L / l) * N(a), y: H(a), z: N(e) * N(a) }))) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let a = 0; r > a; a++) {
        let e = d([], 0, 1);
        c.push(e),
          e.push(s(t, a, e)),
          a && e.push(s((t + 1) % l, a, e)),
          r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
          e.push(s(t, a + 1 % r, e));
      }
    }
    return c;
  },
  h = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  D1 = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = M1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  Y1 = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  C1 = (l, e) => {
    let r, s, c, o = e.i, i = e.u;
    for (let t = 0; o.length > t; ++t) {
      if (-8e-5 > (r = Y1(l, o[t]) - l.w) ? c = e : r > 8e-5 && (s = e), c && s) {
        s = [], c = [], t = o.at(-1);
        let a = Y1(t, l) - l.w;
        for (let e of o) {
          r = Y1(e, l) - l.w,
            8e-5 > a && c.push(t),
            a > -8e-5 && s.push(t),
            (a > 8e-5 && -8e-5 > r || -8e-5 > a && r > 8e-5)
            && (a /= r - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              s.push(t),
              c.push(t)),
            t = e,
            a = r;
        }
        s = s.length > 2 && { i: d(s, o.s, o.A), u: i, v: e }, c = c.length > 2 && { i: d(c, o.s, o.A), u: i, v: e };
        break;
      }
    }
    return { x: s, y: c };
  },
  s = (e, a, t = D1(a.i)) => {
    let l, r;
    return e
      ? (({ x: l, y: r } = C1(e, a)), l || r || e.i.push(a), l && (e.o = s(e.o, l, t)), r && (e.m = s(e.m, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, i: [a], o: 0, m: 0 },
      e;
  },
  c = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { x: t, y: l } = C1(e, a);
        t || l || (s * Y1(e, r) > 0 ? t = a : l = a), t && (e.o ? o(e.o, t) : c.push(t)), l && e.m && o(e.m, l);
      };
    for (let e of r.i) o(a, e);
    return c;
  },
  T1 = (e, a) => e && (a(e), T1(e.o, a), T1(e.m, a)),
  F1 = e => (T1(e, a => {
    let e = a.m;
    a.m = a.o, a.o = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.i) e.u = !e.u;
  }),
    e),
  B1 = e => e.length ? e.reduce((e, a) => s(e, { i: a, u: 0, v: 0 }), 0) : e,
  O1 = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = B1(l), a) {
        a = B1(a), T1(l, e => e.i = c(a, e, 1)), T1(a, e => r.push([e, c(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) s(l, e, a);
      }
      return l;
    }),
  u = (e, ...a) => {
    let t = e => {
        let a;
        return e.v && ((a = r.get(e.v)) ? (l.delete(a), e = t(e.v)) : r.set(e.v, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = F1(O1(F1(B1(e)), ...a)),
      T1(e, a => {
        for (let e of a.i) l.set(t(e), e.u);
      }),
      Array.from(l, ([{ i: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return d(a ? t.reverse() : t, e.s, e.A);
      });
  },
  Q1 = e => 1 - t(-T * e),
  V = (e, a, t) => K(e, a, Q1(t)),
  R1 = e => {
    setTimeout(e), h4.innerHTML += ".";
  },
  X1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  q1 = () => {
    let e,
      i,
      n,
      m,
      f,
      h,
      u,
      d,
      g,
      p,
      v,
      x,
      y,
      a,
      t,
      l,
      r = !0,
      s = [],
      c = () => {
        b4.innerHTML = "Music: " + r, l && (S || !r ? l.disconnect() : l.connect(t.destination));
      },
      o = () => {
        let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        Z = X1(.3, 181, e, 1.732051),
          G = [X1(.3, 55, e, 1.732051), X1(55, 181, e, 1.732051)],
          m = d = void 0,
          s.length =
            I =
            a =
            x =
            y =
            c1 =
            o1 =
              0,
          document.hidden && b(!0);
      },
      b = e => {
        if (S !== e && (S = e, o(), hB.className = e ? "l m" : "l", c(), e)) {
          try {
            document.exitFullscreen().catch(() => !1), document.exitPointerLock();
          } catch {}
        }
      },
      w = e => {
        try {
          t || (t = new AudioContext(), (l = t.createBufferSource()).buffer = k, l.loop = !0, l.start()),
            hB.requestFullscreen().catch(() => !1);
        } catch {}
        b(!1), j = e;
      },
      z = (e, a) => e.buttons[a]?.pressed || e.buttons[a]?.value > 0 ? 1 : 0;
    oncontextmenu = () => !1,
      onclick = e => {
        if (!S && (e.target === hC && (I = 1), j)) {
          try {
            hC.requestPointerLock();
          } catch {}
        }
      },
      b5.onclick = () => b(!0),
      b2.onclick = () => w(1),
      b1.onclick = () => w(),
      b4.onclick = () => {
        r = !r, c();
      },
      b3.onclick = () => {
        confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
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
            (s[a] = !!e.type[5] && !0) && (0 === a && (I = 1), 1 === a && b(!0)));
      },
      onmousemove = e => {
        j && (R += .1 * e.movementX || 0, f1 += .1 * e.movementY || 0);
      },
      hC.ontouchstart = l => {
        if (!S) {
          for (let { identifier: e, pageX: a, pageY: t } of l.changedTouches) {j && a > hC.clientWidth / 2
              ? void 0 === d && (g = 0, h = a, u = t, d = e, v = f1, p = R)
              : void 0 === m && (f = 0, i = a, n = t, m = e);}
          e = s1;
        }
      },
      hC.ontouchmove = l => {
        if (!S) {
          for (let { identifier: e, pageX: a, pageY: t } of l.changedTouches) {
            var r, s, c, o;
            d === e && (g = 1, f1 = v + (t - u) / 2, R = p + (a - h) / 2),
              m === e
              && (e = (i - a) / 19,
                r = W(e),
                c = W(s = (n - t) / 19),
                (o = w1(r, c) > .3) && (f = 1),
                x = U(e, -1) * (o && r > .2),
                y = U(s, -1) * (o && c > .2),
                r > 2 && (i = 19 * (0 > e ? -1 : 1) + a),
                c > 2 && (n = 19 * (0 > s ? -1 : 1) + t));
          }
        }
      },
      hC.ontouchend = a => {
        let t;
        document.activeElement === hB && a.preventDefault();
        for (let e of a.changedTouches) {e.identifier === d
            ? (d = void 0, g || (t = 1), g = 0)
            : e.identifier === m
            ? (m = void 0, y = x = 0, f || (t = 1), f = 0)
            : t = 1;}
        a.target === hC && t && e && (a = s1 - e) > .02 && .7 > a && (I = 1);
      },
      q1 = () => {
        c1 = y + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), o1 = x + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
        let e = navigator.getGamepads()[0];
        e
          && (j && (f1 += 80 * T * z1(e.axes[3], .3), R += 80 * T * z1(e.axes[2], .3)),
            c1 += z(e, 12) - z(e, 13) - z1(e.axes[1], .2),
            o1 += z(e, 14) - z(e, 15) - z1(e.axes[0], .2),
            z(e, 9) && b(!0),
            (e = z(e, 3) || z(e, 2) || z(e, 1) || z(e, 0)) && !a && (I = 1),
            a = e);
      },
      document.onpointerlockchange = () => j = document.pointerLockElement ? 1 : 0,
      document.onvisibilitychange = onblur = onresize = o,
      b(!0);
  },
  H1 = (e, a) => {
    1 / 0 > u1 && (u1 = F + a, h4.innerHTML = e);
  },
  E1 = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        $ = d1.reduce((e, a) => e + a.j, 0)
      ] + " / XIII";
  },
  L1 = () => {
    localStorage["Dante-22"] = JSON.stringify([q.map(e => e.j), d1.map(e => e.j), h1, z, F]);
  },
  g = (e, a = x, t) => l.push(...i(e, a, t)),
  p = () => {
    X.push({ l: a1 = new DOMMatrix(), i: l = [] });
  },
  v = (o, ...i) => {
    let n,
      m,
      f,
      h,
      u = 0,
      d = 0,
      g = 1,
      p = -1,
      v = () => {
        if (v.j) {
          E(X[35].l).translateSelf(
            e % 4 * 1.2 - 1.7 + N(F + e) / 7,
            -2,
            1.7 * (e >> 2) - 5.5 + W(e % 4 - 2) + H(F / 1.5 + e) / 6,
          );
        } else {
          let l, e, a, t, r, s = 1, c = 1 / 0;
          for (let t = 0; i.length > t; t++) {
            let e = i[t], a = M1(y - e[0], b - e[1]);
            s = y1(s, a / e[2]), 0 > (a -= e[2]) ? l = 1 : c > a && (c = a, x = e);
          }
          l
          || (e = y - x[0],
            a = b - x[1],
            t = M1(e, a),
            r = p1(-a, e),
            g && (h = U(h / (1 + v1())), d = (v1() - .5) * L / 2),
            r += d,
            p = -H(r),
            u = N(r),
            t > .1 && (t = y1(t, x[2]) / t, y = e * t + x[0], b = a * t + x[1])),
            g = l,
            h = V(h, 3 + 6 * (1 - s), 3 + s),
            w = V(w, y = V(y, y + p, h), h),
            z = V(z, b = V(b, b + u, h), h),
            n = A1(n, p1(w - m, z - f) / U1 - 180, Q1(3)),
            E(S).multiplySelf(o).translateSelf(m = w, 0, f = z).rotateSelf(0, n, 7 * N(1.7 * F)),
            P(),
            1.6 > M1(B - D, O - Y, Q - C)
            && (v.j = 1,
              H1(
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
                ][$] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                6,
              ),
              E1(),
              L1());
        }
        A(M, P1, 28 + e);
      },
      x = i[0],
      [y, b] = x,
      [w, z] = x,
      S = a1,
      e = d1.length;
    d1.push(v);
  },
  _ = (e, a = 0, t = 0) => {
    let l = E(x, X[++n].l);
    return l.m41 = e, l.m42 = a, l.m43 = t, l;
  },
  N1 = () => {
    let l, r, s, c = (e, a) => (e = U(e), K(e, 1 - e, a));
    (N1 = () => {
      let e = (e, a, t) => _(e + N(F + 2) / 5, a + N(.8 * F) / 5, t).rotateSelf(2 * N(F), N(.7 * F), N(.9 * F)),
        a =
          (n = 1,
            s = K(V(s, 0, 1), S1(s + 60 * T), q[2].h - q[3].g),
            l1 = c(q[13].h, q[8].h),
            l = K(V(l, 0, 5), S1(l + 56 * T), l1),
            r = K(V(r, 0, 4), S1(r + 48 * T), l1),
            _(0, 270 * (q[1].h - 1) + (2 + 5 * H(1.5 * F)) * (1 - q[10].h)),
            y1(1 - q[11].g, q[10].g)),
        t =
          (_(a * N(.6 * F + 1.2) * 12, 0, 35),
            _(a * N(.6 * F - 1.2) * 8.2, 0, 55),
            _(a * N(.6 * F) * 12, 0, 45),
            _(9.8 * (1 - a)),
            a = U(1 - 5 * a) * c(q[11].h, q[2].h),
            _(0, a * N(1.35 * F) * 4),
            _(0, 0, a * N(.9 * F) * 8),
            _(0, -6.5 * q[11].g),
            a = c(q[4].g, q[3].g),
            _(0, a * N(F) * 5 + 3.5 * (1 - w1(q[3].h, q[4].h))),
            _(0, a * N(F + 3) * 6, a * N(.6 * F + 1) * 6),
            _(0, -7.3 * q[4].g),
            a = c(q[6].h, q[7].h),
            _(0, -2, 10 - 8.5 * a * W(N(1.1 * F))),
            _(0, -2, 10 - 8.5 * a * W(N(2.1 * F))),
            _(0, -2, 10 - 8.5 * w1(a * W(N(1.5 * F)), (1 - q[6].h) * (1 - a))),
            c(q[5].g, q[13].g));
      for (a = 0; 4 > a; a++) {
        _(
          (a > 2 ? 2 * (1 - t) + t : 0) - 100,
          t * N(1.3 * F + 1.7 * a) * (3 + a / 3) + .7,
          115 - 7 * (1 - q[5].g) * (1 - q[13].g) * (1 & a ? -1 : 1)
            + w1(.05, t) * H(1.3 * F + 7 * a) * (4 - 2 * (1 - a / 3)),
        );
      }
      a = c(q[8].g, q[9].g);
      for (let e = 0; 3 > e; ++e) _(0, a * N(1.5 * F + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - q[8].g) * (1 - q[9].g)));
      for (
        a = c(c((q[9].h + q[9].g) / 2, q[8].g), (q[12].h + q[12].g) / 2),
          _(0, 16 * a, 95 + 8.5 * U(2 * a - 1)),
          _(0, -4.7 * q[0].h, -15),
          _(0, -4.7 * q[10].h, 15),
          _(-99.7, -1.9 - 5.5 * q[3].h, 63.5),
          _(-100, .6 - 5.8 * q[13].h, 96.5),
          _(-75, 3 * (1 - q[2].g) * (1 - q[3].h), 55).rotateSelf(180 * (1 - q[2].g) + s, 0),
          _(2.5 * (1 - t) - 139.7, -3 * (1 - q[5].h) - t * N(.8 * F) - 1.8, 93.5).rotateSelf(
            H(1.3 * F) * (3 + 3 * t),
            0,
          ),
          _(-2 * N(F)).rotateSelf(25 * N(F)),
          _(-81, .6, 106).rotateSelf(0, 40 + l),
          _(-65.8, .8, 106).rotateSelf(0, r),
          _(-50.7, .8, 106).rotateSelf(0, 180 - r),
          _(-50.7, .8, 91).rotateSelf(0, 270 + r),
          e(-12, 4.2, 40 * e1 - 66),
          e(-123, 1.4, 55 - 65 * z),
          e = 0;
        16 > e;
        ++e
      ) {
        t = q[e],
          a = t.h = V(t.h, t.j, 4),
          t.g = V(t.g, t.j, 1),
          E(E(t.l).multiplySelf(t.C), _(0)).rotateSelf(50 * a - 25, 0).translateSelf(0, 1).m44 = a,
          I && (P(),
            3 > M1(B - D, O - Y, Q - C) && (t.j
              ? a > .7 && (t.j = 0, h1 = e, H1("* click *", 1), L1())
              : .3 > a && (t.j = 1, h1 = e, H1("* click *", 1), L1()))),
          14 === e && t.j && a > .8 && (t.j = 0,
            13 > $
              ? H1("Not leaving now, there are souls to catch!", 3)
              : w || (w = 1, H1("Well done. They will be punished.<br>Thanks for playing", 1 / 0))),
          13 > e && d1[e]();
      }
      for (t1(), e = 0; 28 > e; ++e) A(X[28 + e].l, P1, e);
      for (let e, a = 0, t = 656; 26 > a; ++a, ++t) e = X[2 + a].l, P1[t++] = e.m41, P1[t++] = e.m42, P1[t++] = e.m43;
    })();
  },
  x = new DOMMatrix(),
  M = new DOMMatrix(),
  r = new Float32Array(16),
  P1 = new Float32Array(760),
  W1 = new Uint8Array(65536),
  U1 = L / 180,
  y =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      hC.getContext("webgl2", { powerPreference: "high-performance" })),
  J = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (let a in J) {
  [y, J].map(e => e[a[0] + [...a].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = e[a]);
}
R1(() => {
  let e = 0,
    d = () => {
      if (2 == ++e) {
        let h = [],
          t = (e, a, t) => {
            S
              ? hC.width > 1100 && e.d97(4, X[55].D - X[53].B, 5123, 2 * X[53].B)
              : (e.das(4, X[a].D - X[a].B, 5123, 2 * X[a].B, d1.length), e.d97(4, X[t ? 53 : 56].B - 3, 5123, 6));
          },
          e = (
            t,
            e,
            a =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            let l = {}, r = (e, a) => (a = t.c6x(a), t.s3c(a, e), t.c6a(a), a), s = t.c1h();
            return t.abz(s, r(a, 35633)),
              t.abz(s, r(e, 35632)),
              t.l8l(s),
              e => e ? l[e] || (l[e] = t.gan(s, e)) : t.u7y(s);
          },
          l = e => {
            let a = (e - (b || e)) / 1e3;
            s1 += a,
              F += T = S ? 0 : y1(.055, a),
              b = e,
              requestAnimationFrame(l),
              T > 0
              && (q1(),
                z = V(z, q[15].g, .2 + .3 * W(2 * q[15].g - 1)),
                e1 = w ? (j = 0, V(e1, -9, .015)) : V(e1, U(F / 3), 1),
                u1 && F > u1 && (u1 = 0, h4.innerHTML = ""),
                N1(),
                J.u3a(s("j"), P1),
                J.cbf(!0, !0, !0, !0),
                J.c4s(16640),
                J.cbf(!0, !1, !0, !1),
                J.uae(s("b"), !1, A(E().rotateSelf(0, 180).invertSelf().translateSelf(-B, -O, .3 - Q))),
                t(J, 56, 1),
                J.c4s(256),
                J.cbf(!1, !0, !1, !0),
                J.uae(s("b"), !1, A(E().translateSelf(-B, -O, -Q - .3))),
                t(J, 56, 1),
                J.f1s(),
                I = 0),
              p(),
              y.u3a(p("j"), P1),
              y.b6o(36160, r),
              y.v5y(0, 0, 2048, 2048),
              y.ubh(p("g"), 4),
              y.ubh(p("h"), 4),
              y.uae(p("a"), !1, A(x)),
              e = i1,
              a = n1,
              S
                ? (E().rotateSelf(0, 40 * N(s1) - 80, -8),
                  A(M, P1, 25),
                  A(M, P1, 26),
                  A(M, P1, 27),
                  E(Z).invertSelf(),
                  P(3.6, 3.5),
                  e = D,
                  a = Y,
                  E(x, d).rotateSelf(20, 0).translateSelf(-e, -a, -5).rotateSelf(0, 99))
                : E(x, d).rotateSelf(-f1, -R).invertSelf().translateSelf(-e, -a, -5),
              o(54.7),
              t(y, 57, j),
              i(126),
              t(y, 57, j),
              y.b6o(36160, null),
              y.v5y(0, 0, y.drawingBufferWidth, y.drawingBufferHeight),
              y.c4s(16640),
              y.ubh(p("g"), 0),
              y.ubh(p("h"), 1),
              y.ubu(p("k"), e, a, 5),
              y.uae(p("a"), !1, A(Z)),
              y.uae(p("b"), !1, A(d)),
              y.uae(p("i"), !1, g),
              t(y, 57, j),
              c(),
              y.uae(c("b"), !1, A(d.invertSelf())),
              y.ubu(c("j"), y.drawingBufferWidth, y.drawingBufferHeight, s1),
              y.d97(4, 3, 5123, 0);
          },
          u = new DOMMatrix(),
          d = new DOMMatrix(),
          g = new Float32Array(32),
          a = n,
          r = y.c5w(),
          p = e(
            y,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          s = e(
            J,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          c = e(
            y,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [o, i] = m(2, e => {
            let a = y.c25();
            return y.a4v(33984 + e),
              y.b9j(3553, a),
              y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              y.t2z(3553, 10241, 9729),
              y.t2z(3553, 10240, 9729),
              y.t2z(3553, 34893, 515),
              y.t2z(3553, 34892, 34894),
              y.t2z(3553, 10243, 33071),
              y.t2z(3553, 10242, 33071),
              t => {
                let l = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, i = 1 / 0, n = -1 / 0, m = -1 / 0, f = -1 / 0;
                y.fas(36160, 36096, 3553, a, 0),
                  y.c4s(256),
                  E().scale3dSelf(t *= 1.1).multiplySelf(E(G[e], u).multiplySelf(d).invertSelf());
                for (let e = 0, a = 0; 8 > e; ++e) {
                  P(4 & e ? 1 : -1, 2 & e ? 1 : -1, 1 & e ? 1 : -1),
                    l -= h[a++] = (0 | D) / t / r1,
                    r -= h[a++] = (0 | Y) / t / r1,
                    s -= h[a++] = (0 | C) / t / r1;
                }
                E().rotateSelf(298, 139).translateSelf(l / 8, r / 8, s / 8);
                for (let e = 0, a = 0; 8 > e; ++e) {
                  P(h[a++], h[a++], h[a++]),
                    n = w1(n, D),
                    m = w1(m, Y),
                    f = w1(f, C),
                    c = y1(c, D),
                    o = y1(o, Y),
                    i = y1(i, C);
                }
                s = 10 + e,
                  i *= 0 > i ? s : 1 / s,
                  f *= f > 0 ? s : 1 / s,
                  y.uae(
                    p("b"),
                    !1,
                    A(
                      E(x, u).scaleSelf(2 / (n - c), 2 / (m - o), 2 / (i - f)).translateSelf(
                        (n + c) / -2,
                        (m + o) / -2,
                        (i + f) / 2,
                      ).multiplySelf(M),
                      g,
                      e,
                    ),
                    16 * e,
                    16,
                  );
              };
          });
        y.a4v(33986),
          y.b9j(3553, y.c25()),
          y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, a),
          y.t2z(3553, 10241, 9987),
          y.t2z(3553, 10240, 9729),
          y.gbn(3553),
          y.b6o(36160, r),
          y.d45([0]),
          y.r9l(0),
          p(),
          y.ubh(p("q"), 2),
          c(),
          y.ubh(c("q"), 2),
          y.c5t(0, 0, 0, 1),
          y.d4n(515),
          y.e8z(2929),
          y.e8z(2884),
          J.e8z(2929),
          J.e8z(2884),
          J.v5y(0, 0, 128, 128),
          s(),
          J.uae(s("a"), !1, A(X1(1e-4, 2, 1.2, .4))),
          (() => {
            let s,
              c,
              o,
              i,
              n,
              m,
              f,
              h,
              u,
              d,
              g,
              p,
              v,
              x,
              y,
              b,
              w = 0,
              z = 1,
              S = 2,
              A = 15,
              M = (e, a, t, l) => K(e, a, z || (U(W(a - e) ** .5 - t) + 1 / 7) * Q1(1.5 * l)),
              k = () => E((S ? q[h1] : X[28 !== w ? w : 0]).l),
              I = e => {
                S > 1 ? (E(q[h1].l).multiplySelf(q[h1].C), P(0, e1 > .9 ? 15 : 1, -2.4)) : (k(), P(x, y, b)),
                  e && (n = (D - B) / T, m = (C - Q) / T),
                  B = D,
                  O = Y,
                  Q = C;
              };
            t1 = () => {
              let e, a, t, l, r;
              for (
                I(d),
                  J.r9r(0, 0, 128, 128, 6408, 5121, W1),
                  (() => {
                    let l, r, s, c = 0, o = 0, i = 0, n = 0, e = 0, a = 0, m = -1;
                    for (l = 0; 36 > l; ++l) {
                      for (let a = 96, t = 512 * l; 416 > a; a += 4) {
                        for (r = 0; 2 > r; ++r) {
                          let e = W1[t + a + r + 2];
                          (s = W1[t + a + r]) > n && (n = s),
                            s + e && (0 > m || m === l) && (m = l, e === d ? ++c : o && o !== e || (o = e, ++i));
                        }
                      }
                    }
                    for (d = 0 > m ? 0 : i > 2 * c ? o : d, c = 36; 128 > c; ++c) {
                      for (
                        let e = l =
                            m =
                            i =
                            o =
                              0,
                          a = 512 * c;
                        128 > e;
                        ++e
                      ) {
                        s = W1[r = a + 4 * e],
                          64 > e ? s > o && (o = s) : s > i && (i = s),
                          (s = W1[2 + r]) > m && (m = s),
                          s = W1[1 + r],
                          e > 64 ? s > o && (o = s) : s > i && (i = s),
                          (s = W1[3 + r]) > l && (l = s);
                      }
                      (i -= o) * i > e * e && (e = i), (l -= m) * l > a * a && (a = l);
                    }
                    h = U(1 - .01 * w1(W(e *= .7), W(a)), .3),
                      e /= 255,
                      n /= 255,
                      a /= 255,
                      k().invertSelf(),
                      P(e, n, a, 0),
                      x += D,
                      y += n,
                      b += C,
                      I();
                  })(),
                  !S && d === w || (w = d, k().invertSelf(), P(B, O, Q), x = D, y = Y, b = C, S = S && (d ? 0 : 1)),
                  (-20 > B || 109 > Q ? -25 : -9) > O && (S = 2),
                  1 === d && (q[15].j = -15 > B && 0 > Q ? 1 : 0),
                  i = V(i, l1 * (d > 30 && 35 > d), 2),
                  g = M(g, B, .5, 1),
                  p = M(p, u = K(V(u, O, 2), O, S || 8 * W(u - O)), 2, 1),
                  v = M(v, Q, .5, 1),
                  j
                    ? (e = S + Q1(18), i1 = K(i1, B, e), m1 = K(m1, Q, e), n1 = K(n1, 1.6 + u, e), R = S1(R))
                    : (i1 = M(i1, g, 1, 2 + i),
                      m1 = M(m1, v + -18 + 5 * i, 1, 2 + i),
                      n1 = M(n1, w1(p + U((-60 - Q) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                      e = y1(-6, -W(v - m1)),
                      R = A1(R, 90 - S1(p1(e, a = g - i1) / U1), z + Q1(10)),
                      f1 = A1(f1, 90 - p1(M1(e, a), n1 - p) / U1, z + Q1(10))),
                  f1 = U(f1, -87, 87),
                  z = 0,
                  e = U(c1, -1),
                  a = U(o1, -1),
                  t = z1(M1(e, a) ** .5, .1),
                  l = p1(e, a),
                  t && (s = 90 - l / U1),
                  o = V(o, t, 10),
                  _(B, .06 * h * o * H(18.2 * F) + u, Q).rotateSelf(0, c = A1(c, s, Q1(8))),
                  r = 0;
                2 > r;
                ++r
              ) {
                let e = 9.1 * F - L * r;
                E(X[53].l, _(0)).translateSelf(0, o * U(.45 * N(e - L / 2))).rotateSelf(o * N(e) * .25 / U1, 0);
              }
              A = d ? 5 : V(A, S ? 13 : 19 - 2 * y1(0, O + 10), 2.2),
                n = d || S ? 0 : V(n, 0, 3),
                m = d || S ? 0 : V(m, 0, 3),
                e = (f = S ? 0 : V(f, d ? 7 * U(2 * t) * h : 0, d ? 9 : 1)) * t * W(e) * N(l),
                a = f * t * W(a) * H(l),
                t = T * (n + (H(l = j ? (180 + R) * U1 : 0) * a - N(l) * e)),
                r = T * -A,
                e = T * (m + (N(l) * a + H(l) * e)),
                k().invertSelf(),
                P(t, r, e, 0),
                x += D,
                y += r,
                b += C,
                I();
            };
          })(),
          q1(),
          requestAnimationFrame(l);
      }
    },
    n = new Image();
  n.onload = d,
    n.src = a,
    (r => {
      let X = 0,
        q = e => N(e * L * 2),
        s = () => {
          let x = 0,
            e = f => {
              let h,
                r,
                s,
                c,
                u,
                o,
                i = 0,
                n = 0,
                d = [],
                m = new Int32Array(768 * f),
                g = 2 ** (t - 9) / f,
                p = L * 2 ** (l - 8) / f,
                v = O * f & -2;
              for (let l = 0; 11 >= l; ++l) {
                for (
                  let e = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * X + l];
                  32 > e;
                  ++e
                ) {
                  let t = (32 * l + e) * f;
                  for (c = 0; 4 > c; ++c) {
                    if (h = 0, a && (h = y[a - 1].charCodeAt(e + 32 * c) - 40, h += h > 0 ? 106 : 0), h) {
                      if (!(u = d[h])) {
                        let l,
                          r,
                          s = 0,
                          c = 0,
                          o = u = h,
                          i = 2 > X
                            ? e => e % 1 * 2 - 1
                            : q,
                          n = 2 > X
                            ? 1 > X
                              ? e => .5 > e % 1 ? 1 : -1
                              : e => 2 > (e = e % 1 * 4) ? e - 1 : 3 - e
                            : q,
                          m = new Int32Array(I + j + R);
                        for (let a = 0, t = 0; I + j + R > a; ++a, ++t) {
                          let e = 1;
                          I > a ? e = a / I : I + j > a || (e = (1 - (e = (a - I - j) / R)) * 3 ** (-D / 16 * e)),
                            0 > t
                            || (t -= 4 * f,
                              r = .00396 * 2 ** ((o + w - 256) / 12),
                              l = .00396 * 2 ** ((o + A - 256) / 12) * (1 + (X ? 0 : .0072))),
                            m[a] = 80
                                * (i(s += r * e ** (z / 32)) * b + n(c += l * e ** (M / 32)) * S
                                  + (k ? (2 * v1() - 1) * k : 0))
                                * e | 0;
                        }
                        u = d[u] = m;
                      }
                      for (let e = 0, a = 2 * t; u.length > e; ++e, a += 2) m[a] += u[e];
                    }
                  }
                  for (let e, a = 0; f > a; ++a) {
                    u = 0,
                      ((e = m[c = 2 * (t + a)]) || s)
                      && (r = .00308 * Y,
                        1 !== X && 4 !== X || (r *= N(g * c * L * 2) * Q / 512 + .5),
                        r = 1.5 * N(r),
                        i += r * n,
                        n += r * (o = (1 - C / 255) * (e - n) - i),
                        e = 4 === X ? n : 3 === X ? o : i,
                        X || (e = 1 > (e *= 22e-5) ? e > -1 ? N(e / 4 * L * 2) : -1 : 1, e /= 22e-5),
                        e *= T / 32,
                        s = e * e > 1e-5,
                        u = e * (1 - (o = N(p * c) * F / 512 + .5)),
                        e *= o),
                      v > c || (u += m[1 + c - v] * B / 255, e += m[c - v] * B / 255),
                      H[o = x + c >> 1] += (m[c] = u) / 65536,
                      E[o] += (m[++c] = e) / 65536;
                  }
                }
              }
              x += 768 * f;
            },
            y = [
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
            ][X],
            [b, w, z, S, A, M, k, I, j, a, D, t, Y, C, T, F, l, B, O, Q] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][X],
            R = 4 * a ** 2;
          e(5513), e(4562), e(3891), R1(5 > ++X ? s : r);
        },
        H = (k = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        E = k.getChannelData(1);
      R1(s);
    })(() => {
      let e = [-110, -100, -92, -82, -106, -97, -88],
        a = e => o(N((e /= 11) * L), e).rotateSelf(10 * e).scaleSelf(1.002 - e, 1, 1.002 - e),
        t = e => {
          q.push({ l: a1, C: e }),
            g(f(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), h(.4, .5, .5)),
            g(f(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), h(.4, .5, .5)),
            g(f().slice(0, -1), e.translate(0, -.4).scale(.5, .1, .5), h(.5, .5, .4));
        },
        l = e =>
          u(
            i(f().slice(0, -1), o(0, -e / 2).scale(6, e - 1, 2.2)),
            i(f().slice(0, -1), o(0, -e / 2 - 4).scale(4, e - 5, 4)),
            i(f(28, 1), o(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        r = (R1(() => {
          let t = 0,
            r = [],
            c = [],
            o = [],
            i = [],
            s = [],
            n = [],
            m = new Int32Array(8),
            f = new Map(),
            h = new Int32Array(m.buffer, 0, 5),
            u = new Float32Array(m.buffer);
          X.map((e, a) => {
            let s,
              l = e => {
                let { x: a, y: t, z: l } = s[e], r = (u[0] = a, u[1] = t, u[2] = l, f.get(e = "" + (s.A ? h : m)));
                return void 0 !== r
                  ? (a = 3 * r, i[a] = (i[a++] + m[5]) / 2, i[a] = (i[a++] + m[6]) / 2, i[a] = (i[a] + m[7]) / 2)
                  : (f.set(e, r = f.size), c.push(a, t, l, u[3]), o.push(m[4]), i.push(m[5], m[6], m[7])),
                  r;
              };
            for (s of (u[3] = a > 55 ? -28 : a, e.i)) {
              let { x: e, y: a, z: t } = D1(s);
              m[4] = 0 | s.s, m[5] = 32767 * e, m[6] = 32767 * a, m[7] = 32767 * t;
              for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
            }
            e.i = 0, e.B = t, e.D = t = r.length;
          }),
            [y, J].map(e => {
              e.b11(34962, e.c1b()),
                e.b2v(34962, new Float32Array(c), 35044),
                e.v7s(0, 4, 5126, !1, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Int16Array(i), 35044),
                e.v7s(1, 3, 5122, !0, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Uint32Array(o), 35044),
                e.v7s(2, 4, 5121, !0, 0, 0),
                e.b11(34963, e.c1b()),
                e.b2v(34963, new Uint16Array(r), 35044),
                e.e3x(0),
                e.e3x(1),
                e.e3x(2);
            });
          try {
            let [e, a, t, l, r] = JSON.parse(localStorage["Dante-22"]);
            s = e, n = a, h1 = t, z = l, F = r;
          } catch {}
          q.map((e, a) => e.h = e.g = e.j = 14 !== a && s[a] ? 1 : 0),
            d1.map((e, a) => e.j = n[a] ? 1 : 0),
            E1(),
            e1 = $ || 14 !== h1 ? 1 : 0,
            R1(d);
        }),
          u(
            i(f(), o(0, -.5, 1).scale(1.15, 1.2, 6.5), h(.25, .25, .35, .3)),
            u(
              i(f(3), o(0, 0, -5.5).scale(3, 2), h(.6, .3, .4, .3)),
              i(f(), o(0, 0, -3.65).scale(2.5, 3), h(.6, .3, .4, .3)),
            ),
            ...[-1, 1].map(e => i(f(), o(1.2 * e, -.5, 1).scale(.14, .3, 6.5), h(.7, .2, 0, .3))),
          )),
        s = [
          i(f(), o(0, -3).scale(11, 1.4, 3), h(.9, .9, .9, .2)),
          i(f(), o(0, -2.2).scale(7.7, .5, 4), h(.5, .5, .5, .2)),
          m(12, e => i(f(), o(e - 5.5, 4.4).scale(.1, .1, 2), h(.6, .5, .3, .2))).flat(),
          i(
            u(
              i(f(6), x.rotate(90).scale(6, 8, 6)),
              i(f(4, 0, .01), o(0, 6).scale(12, 2, .75).rotate(0, 45)),
              i(f(6), x.rotate(90).scale(5, 12, 5)),
              ...[-5, 0, 5].map(e => i(f(5), o(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
            ),
            x,
            h(.3, .6, .6, .3),
          ),
        ].flat(),
        c = m(11, e => I1(x1(k1(16), a(e), h(1, 1, .8, .2)).reverse(), x1(k1(16), a(e + 1), h(1, 1, .8, .2)), 1))
          .flat();
      for (
        p(),
          g([g1.slice(1)], o(-2).scale3d(3).rotate(90, 0)),
          p(),
          t(o(-5.4, 1.5, -19).rotate(0, -90)),
          [-15, 15].map((e, a) => {
            g(f(), o(0, 0, a ? 22 : -23).scale(3, 1, 8), h(.9, .9, .9, .2)),
              g(f(), o(0, 6.3, e).scale(4, .3, 1), h(.3, .3, .3, .4)),
              g(f().slice(0, -1), o(0, 1, e).scale(3, .2, .35), h(.5, .5, .5, .3));
          }),
          g(f(), o(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), h(.8, .8, .8, .2)),
          g(f(), o(3, 1.5, -20).scale(.5, 2, 5), h(.7, .7, .7, .2)),
          g(f(5), o(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), h(.6, .3, .3, .4)),
          g(f(), o(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), h(.75, .75, .75, .2)),
          g(u(
            O1(
              u(
                i(f(6, 0, 0, .3), o(0, -.92).scale(13, 2, 13), h(.8, .8, .8, .2)),
                i(f(), x.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), h(.5, .5, .5, .5)),
              ),
              i(
                f(),
                x.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                h(.8, .2, .2, .5),
              ),
              i(f(6), o(0, -8).scale(9, 8, 7), h(.2, .1, .4, .5)),
              i(f(6, 0, 0, .3), o(8, -4, -4).scale(14, 2, 13), h(.7, .7, .7, .2)),
            ),
            i(f(6), o(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), h(.5, .5, .5, .5)),
            i(f(5, 0, 1.5), o(0, 1).scale(4.5, .3, 4.5), h(.7, .5, .9, .2)),
            i(f(5), x.scale(5, 30, 5), h(.4, .2, .6, .5)),
          )),
          t(o(15.8, -2, 3.8)),
          g(f(), o(-18.65, -3, 55).scale(2.45, 1.4, 2.7), h(.9, .9, .9, .2)),
          t(o(-55, -1.1, 46).rotate(0, 90)),
          g(f(7), o(-57, -2.6, 46).scale(4, 1, 4), h(.8, .8, .8, .3)),
          g(f(6), o(-61.3, -2.4, 49).scale(3, 1, 5), h(.4, .6, .6, .3)),
          g(s, o(-53, 0, 55)),
          g(f(), o(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), h(.7, .7, .7, .2)),
          g(f(3, 0, -.5), o(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), h(.8, .8, .8, .2)),
          g(u(
            i(f(), o(-100, 1, 63).scale(7.5, 4), h(.5, .5, .5, .4)),
            i(f(), o(-100, 0, 63).scale(2, 2, 4), h(.5, .5, .5, .4)),
            i(f(20, 1), o(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), h(.5, .5, .5, .4)),
          )),
          g(u(
            O1(
              i(f(), o(-100, -2.6, 70).scale(3, 1.1, 7), h(.8, .8, .8, .2)),
              i(f(), o(-100, -2.4, 55).scale(8, .9, 8), h(.8, .8, .8, .2)),
              i(f(), o(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), h(.8, .8, .8, .2)),
              i(f(6), o(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), h(.6, .6, .6, .3)),
              i(f(), o(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), h(.8, .8, .8, .2)),
              i(f(), o(-100, .42, 92).scale(3, 1.1, 4.1), h(.8, .8, .8, .2)),
              i(f(), o(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), h(.8, .8, .8, .2)),
            ),
            i(f(8), o(-100, -1, 55).scale(7, .9, 7), h(.3, .3, .3, .4)),
            i(f(8), o(-100, -2, 55).scale(4, .3, 4), h(.4, .4, .4, .5)),
            i(f(8, 0, -3.1), o(-100, -3, 55).scale(.4, 1, .4), h(.4, .4, .4, .5)),
          )),
          g1.map(({ x: a, z: t }) => {
            g(f(6), o(3 * a, 3, 15 * t).scale(.7, 4, .7), h(.6, .3, .3, .4)),
              g(f(6), o(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), h(.6, .15, .15, .8)),
              [4, -.4].map(e => g(f(6), o(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), h(.4, .2, .2, .8))),
              [1.5, 8].map(e =>
                g(f(15, 1), o(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), h(.6, .6, .6, .3))
              ),
              g(f(14, 1).slice(0, -2), o(9 * a - 38.9, -18, 11 * t + 17).scale(1, 14.2), h(.25, .25, .25, 1));
          }),
          m(7, e => {
            g(
              f((23 * e + 1) % 5 + 5, 0, .5),
              o(5 * N(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1.1 + e / 6, 5 + e / 3),
              h(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
            );
          }),
          g(f(), o(-87, -9.5, 24).scale(7, 1, 3), h(.4, .5, .6, .4)),
          g(f(4), o(-86, -9.2, 27).scale(5, 1, 5), h(.5, .6, .7, .3)),
          g(f(12, 1), o(-86, -9, 31).scale(1.5, 1, 1.5), h(.3, .3, .4, .1)),
          t(o(-86, -7.5, 31)),
          g(f(5), o(-38.9, -11.1, 10).scale(2, 1.2, 2), h(.2, .4, .7, .3)),
          g(u(
            O1(
              i(f(), o(-38.9, -11.3, 17).scale(11, 1, 13), h(.3, .4, .6, .3)),
              i(f(5), o(-38.9, -11.1, 17).scale(9, 1, 9), h(0, .2, .3, .5)),
            ),
            i(f(5), o(-38.9, -11.1, 17).scale3d(5.4), h(0, .2, .3, .5)),
          )),
          t(o(-38.9, -9.4, 10)),
          g(
            u(
              O1(
                i(f(6), o(0, 0, -18).scale(15, 1.3, 15), h(.7, .7, .7, .3)),
                i(f(5), x.scale(4.5, 1.2, 9), h(.45, .4, .6, .3)),
              ),
              ...m(6, a =>
                m(
                  6,
                  e =>
                    i(
                      f(6),
                      o(4.6 * e - (1 & a ? 10 : 12), 0, 4.6 * a + 2 * N(4 * e) - 32).scale3d(2),
                      h(.7, .7, .7, .3),
                    ),
                )).flat(),
            ),
            o(-38.9, -11.3, -1),
          ),
          t(o(-84, -.7, 85).rotate(0, 45)),
          g(f(5), o(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), h(.8, .1, .25, .4)),
          t(o(-116, -1.4, -18).rotate(0, 180)),
          g(
            u(i(f(), o(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...e.map(e => i(f(), o(e, .05, -3).scale(1.35, 2, 9)))),
            x,
            h(.5, .5, .6, .2),
          ),
          g(f(), o(-96.5, 1, -2).scale(19, .3, .3), h(.5, .5, .6, .2)),
          g(f(6), o(-116, -2.6, -16.5).scale(3.2, .8, 3), h(.6, .5, .7, .2)),
          g(f(), o(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), h(.8, .8, .8, .2)),
          g(f().slice(0, -1), o(-115.5, -17, -12).scale(.5, 15, 2.2), h(.6, .6, .6, .3)),
          g(f(8).slice(0, -2), o(-114, -17, -2).scale(2, 15, 2), h(.6, .6, .6, .3)),
          g(f(8).slice(0, -2), o(-79, -17, -2).scale(2, 15, 2), h(1, 1, 1, .3)),
          g(f().slice(0, -1), o(-77, -17, -50.5).scale(2.2, 15, .5), h(.6, .6, .6, .3)),
          g(u(
            i(f(12).slice(0, -1), o(-77, -14.5, -12).scale(4, 17.5, 4), h(.7, .7, .7, .2)),
            i(f(12), o(-77, 3.1, -12).scale(3, 5, 3), h(.4, .5, .6, .2)),
            i(f(), o(-79, .1, -12).scale(3.5, 2, 1.3), h(.4, .5, .6, .2)),
            i(f(), o(-77, .1, -14).scale(1.5, 2, 2), h(.4, .5, .6, .2)),
          )),
          g(u(
            i(f(), o(-93, -5.8, -40).scale(9, 1, 5), h(.8, .8, .8, .1)),
            i(f(9), o(-98, -5.8, -40).scale(3, 8, 3), h(.7, .7, .7, .2)),
          )),
          g(f(), o(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), h(.6, .6, .6, .3)),
          g(f(9).slice(0, -1), o(-98, -18.4, -40).scale(2.5, 13.5, 2.5), h(.5, .5, .5, .3)),
          t(o(-98, -4.4, -40).rotate(0, 90)),
          [-1, 1].map((a, t) => {
            g(
              u(
                i(f(), o(-4 * a, 3.5, -.5).scale(4, 4, .7), h(.5, .5, .5, .4)),
                i(f(5), o(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), h(.6, .24, .2, .5)),
                i(f(), x.scale(3, 3, 10), h(.6, .24, .2, .5)),
                i(f(5), o(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), h(.6, .24, .2, .5)),
                i(f(32, 1), o(0, 3, -5).scale(3, 4, 10).rotate(90, 0), h(.6, .24, .2, .5)),
              ),
              o(a - 100, .7, 97),
            ),
              g(f(12, 1), o(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), h(.6, .24, .2, .5)),
              [7.2, 1.5].map(e => g(f(15, 1), o(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), h(.5, .24, .2, .4))),
              g(c, o(-8 * a, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * a + 90)),
              g(c, o(-5 * a - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90)),
              m(5, e => g(c, o(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2)));
          }),
          g(u(
            i(f(), o(-82.07, .8, 106).scale(11, .9, 2.2), h(.7, .7, .7, .1)),
            i(f(45, 1), o(-81, .7, 106).scale3d(7.7), h(.7, .7, .7, .1)),
          )),
          g(f(), o(-50.7, 1, 99).scale(2, .65, 1), h(.7, .7, .7, .2)),
          g(f(), o(-58, 1, 106).scale(2, .65, 2), h(.7, .7, .7, .2)),
          g(f(), o(-34.2, .4, 91).scale(3, 1, 3), h(.7, .7, .7, .3)),
          g(f(), o(-42, .4, 91).scale(5, 1, 2.5), h(.7, .7, .7, .3)),
          g(f(5), o(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), h(.2, .5, .5, .6)),
          t(o(-34, 2.7, 96).rotate(-12, 0)),
          g(u(
            O1(
              i(f(), o(-101.5, .7, 93.5).scale(10.5, 1, 2), h(.7, .7, .7, .2)),
              i(f(6, 0, 0, .6), o(-100, .7, 105.5).scale(8, 1, 11), h(.7, .7, .7, .2)),
            ),
            i(f(5), o(-100, .7, 113).scale(4, 3, 4), h(.7, .7, .7, .2)),
          )),
          m(3, e => {
            g(l(16), o(-77, -9, -12 * e - 20).rotate(0, 90), h(.6, .6, .6, .3)),
              g(l(16), o(12 * e - 109, -9, -12), h(.6, .6, .6, .3)),
              g(
                l(24.7 - .7 * (1 & e)),
                o(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? h(.5, .5, .5, .3) : h(.35, .35, .35, .5),
              );
          }),
          g(u(
            O1(
              i(f(), o(0, 16, 111).scale(3, 1, 3.8), h(.5, .3, .3, .4)),
              i(f(6, 0, 0, .3), o(0, -.92, 95).scale(14, 2, 14), h(.8, .8, .8, .2)),
              i(f(), o(0, 16, 110.5).scale(12, 1, 3), h(.5, .3, .3, .4)),
            ),
            i(f(5), o(0, 0, 95).scale3d(6), h(.3, .3, .3, .5)),
            i(f(5), o(0, 16, 103.5).scale(5.5, 5, 5.5), h(.5, .3, .3, .4)),
          )),
          t(o(0, 1.7, 82).rotate(0, 180)),
          g(f(5).slice(0, -1), o(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), h(.5, .3, .3, .4)),
          g(f(6), o(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), h(.5, .6, .7, .3)),
          g(f(), o(0, 16, 127.8).scale(1.5, 1, .7), h(.5, .6, .7, .3)),
          g(f(7), o(0, 15.1, 133).scale(5, 2, 5), h(.4, .5, .6, .4)),
          v(o(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          v(o(0, 2.8), [5, 10, 3], [-5, 10, 3], ...k1(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * W(e)])),
          v(o(0, 3, 95), ...k1(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
          v(o(0, 19, 134), [0, 0, 3.5]),
          v(o(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          v(o(-89, .2, 80), [0, 0, 6]),
          v(o(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          v(o(-115, .2, -12), [0, 0, 3.5]),
          v(o(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
          p(),
          g(f(5), o(0, -.2).scale(5, 1, 5), h(.6, .65, .7, .3)),
          t(o(0, 1.2)),
          m(2, () => {
            p(),
              g1.map(({ x: e, z: a }) => {
                g(f(11, 1).slice(0, -2), o(4 * e, 4, 4 * a).scale(.8, 3, .8), h(.5, .3, .7, .6)),
                  g(f(), o(4 * e, 7, 4 * a).scale(1, .3), h(.5, .5, .5, .3));
              }),
              g(u(
                i(f().slice(0, -1), x.scale(5, 1, 5), h(.8, .8, .8, .3)),
                ...[-1, 1].map(e => i(f(25, 1), o(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), h(.8, .8, .8, .3))),
              )),
              g(f(), o(0, -3).scale(8, 2, 8), h(.4, .4, .4, .3));
          }),
          p(),
          g(u(
            O1(
              i(f(), x.scale(1.5, 1, 5), h(.9, .9, .9, .2)),
              i(f(), o(0, -2).scale(2, 3.2, 1.9), h(.3, .8, .5, .5)),
              i(f(6), x.scale(4, 1, 5), h(.9, .9, .9, .2)),
              i(f(16, 1, 0, 4), x.scale(1, 1, 1.5).rotate(0, 90), h(.9, .9, .9, .2)),
            ),
            i(f(), x.scale(1.3, 10, 1.3), h(.2, .7, .4, .6)),
          )),
          v(o(0, 2.8), [0, 0, 4.5]),
          p(),
          g(f(3), o(-23, -1.7, 55.8).scale(5, .7, 8.3), h(.3, .6, .6, .2)),
          g(f(8), o(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), h(.8, .8, .8, .2)),
          g(f(), o(-23, -2.2, 62).scale(3, 1, 4), h(.5, .5, .5, .3)),
          g(f(), o(-23, -3, 55).scale(5.2, 1.7, 3), h(.5, .5, .5, .3)),
          t(o(-23, -.5, 66.5)),
          p(),
          g(f(), o(-22.55, -3, 55).scale(1.45, 1.4, 2.7), h(.7, .7, .7, .2)),
          g(u(i(f(), x.scale(3, 1.4, 2.7)), i(f(), x.scale(1.2, 8, 1.2))), o(-33, -3, 55), h(.7, .7, .7, .2)),
          p(),
          g(u(i(f(), x.scale(3, 1.4, 2.7)), i(f(), x.scale(1, 3))), o(-27, -3, 55), h(.9, .9, .9, .2)),
          g(f(), o(-39, -3, 55).scale(3, 1.4, 2.7), h(.9, .9, .9, .2)),
          p(),
          g(f(6), o(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), h(.7, .7, .7, .4)),
          p(),
          [0, 12, 24].map(e =>
            g(f(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), h(.2, .5, .6, .2))
          ),
          p(),
          [6, 18].map(e =>
            g(f(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), h(.1, .4, .5, .2))
          ),
          p(),
          g(f(5), o(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), h(.3, .3, .5, .5)),
          g(f(5).slice(0, -1), o(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), h(.6, .3, .5, .5)),
          g(
            u(
              i(f(5), o(0, 2).scale(5, 7, 5).skewY(8)),
              i(f(5), o(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
              i(f(), x.scale(2, 8, 3)),
            ),
            o(-38.9, -11.3, 17),
            h(.2, .4, .5, .5),
          ),
          v(o(-39.1, -.6, 17).rotate(11), ...k1(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2])),
          e.map((e, a) => {
            a % 2 || a >= 6 || p(), g(r, o(e, 1.9, -12));
          }),
          m(4, e => {
            p(),
              g(
                f(6),
                o(-14.6 - 4.8 * e - (e > 2 ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                  2.6,
                  1,
                  2.5,
                ),
                h(.5 - e / 8, e / 12 + .5, .7, .3),
              );
          }),
          [h(.1, .55, .45, .2), h(.2, .5, .5, .3), h(.3, .45, .55, .4)].map((e, a) => {
            p(),
              g(f(), o(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
              2 === a && g(f(), o(-29.1, .4, 91).scale(2.1, 1, 3), h(.7, .7, .7, .3)),
              1 === a && g(f(), o(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), h(.6, .6, .7, .3));
          }),
          p(),
          g(f(5), x.scale(5, 1.1, 5), h(.5, .3, .3, .4)),
          g(f(5), x.scale(5.5, .9, 5.5), h(.25, .25, .25, .4)),
          t(o(0, 1.5, -1).rotate(0, 180)),
          m(4, a => {
            p(),
              m(
                7,
                e =>
                  g(i(
                    f(8, 1).slice(0, -1),
                    o((a > 2 ? 3.5 : 4) * (e / 6 - .5), 3).scale(.2, a > 2 ? 4 : 3, .2),
                    h(.3, .3, .38),
                  )),
              );
          }),
          p(),
          g(s),
          p(),
          g(f(5).slice(0, -1), o(-7.5, 2.7).rotate(0, 90).scale(1, .2), h(.5, .5, .5, .5)),
          g(f(10).slice(0, -1), o(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), h(.3, .8, .7, .3)),
          g(f(15, 1), o(-7.5).rotate(0, 90).scale(3, 2.3, 3), h(.4, .4, .4, .3)),
          t(o(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
          [-1, 1].map(e => g(c, x.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
          g(u(i(f(10), x.scale(6, 2, 6), h(.1, .6, .5, .3)), i(f(10), x.scale(3.3, 6, 3.3), h(.1, .6, .5, .5)))),
          v(o(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
          p(),
          g(f(3), o(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), h(.5, .3, .3, .4)),
          [22, 30].map(e => {
            g(f(6), o(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), h(.7, .7, .7, .4)),
              g(f(), o(0, 6.2, e + 95).scale(.5, 11, .5), h(.5, .3, .3, .4));
          }),
          p(),
          g(f(5).slice(0, -1), o(0, 2).scale(1, 2), h(.3, .3, .3, .2)),
          g(f(8).slice(0, -1), o(0, 2).scale(3, 1.5, 3).rotate(0, 22), h(.7, .7, .7, .1)),
          g(u(
            i(f(28, 1), x.scale(7.5, 1, 7.5), h(.45, .45, .45, .2)),
            i(f(), o(0, 0, -5.5).scale(1.5, 3, 2.7), h(.45, .45, .45, .2)),
          )),
          v(o(0, 3), ...k1(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2])),
          p(),
          [-1, 1].map(e => g(c, x.rotate(0, 90).translate(-5 * e, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * e + 90))),
          g(u(
            i(f(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
            i(f().slice(0, -1), o(0, 2).scale(9, 1.1, 2), h(.3, 0, 0, .3)),
          )),
          g(f(5).slice(0, -1), o(0, 1).scale(1, .2), h(.3, .3, .3, .2)),
          g(f(28, 1), x.scale(7.5, 1, 7.5), h(.45, .45, .45, .2)),
          p(),
          g(u(
            i(f(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
            i(f().slice(0, -1), o(0, 2, 7).scale(2, 1.1, 9), h(.3, 0, 0, .3)),
            i(f().slice(0, -1), o(7, 2).scale(9, 1.1, 2), h(.3, 0, 0, .3)),
          )),
          g(f(5).slice(0, -1), o(0, 1).scale(1, .2), h(.3, .3, .3, .2)),
          g(f(28, 1), x.scale(7.5, 1, 7.5), h(.45, .45, .45, .2)),
          p(),
          g(u(
            i(f(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
            i(f().slice(0, -1), o(0, 2, -7).scale(2, 1.1, 9), h(.3, 0, 0, .3)),
            i(f().slice(0, -1), o(7, 2).scale(9, 1.1, 2), h(.3, 0, 0, .3)),
          )),
          g(f(5).slice(0, -1), o(0, 1).scale(1, .2), h(.3, .3, .3, .2)),
          g(f(28, 1), x.scale(7.5, 1, 7.5), h(.45, .45, .45, .2)),
          m(2, () => {
            p(),
              g(u(
                i(f(30, 1, 1.15, 1), o(0, -3).scale(3.5, 1, 3.5), h(.7, .4, .25, .7)),
                i(f(), o(4, -1.2).scale3d(2), h(.7, .4, .25, .3)),
                i(f(30, 1, 1.3, 1), o(0, -2.5).scale(2.6, 1, 3), h(.7, .4, .25, .2)),
              )),
              t(o(0, -3, 4));
          }),
          e = 0;
        16 > e;
        ++e
      ) {
        p(),
          g(f(9, 1), o(0, .8).scale(.2, .3, .2), h(.7, 1, .2)),
          g(f(6, 1).slice(0, -1), x.scale(.12, 1.2, .12), h(.3, .3, .5, .1)),
          g(f(3), o(0, -1).rotate(90, 90).scale(.3, .4, .3), h(.2, .2, .2, .1));
      }
      p(),
        g(j1(20), o(0, 1).scale3d(.5), h(1, .3, .4)),
        g(j1(30), x.scale(.65, .8, .55), h(1, .3, .4)),
        g(f(), o(0, .9, .45).scale(.15, .02, .06), h(.3, .3, .3)),
        [-1, 1].map(e => {
          g(c, x.rotate(0, e > 0 ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), h(1, 1, .8)),
            g(
              i(u(f(15, 1), i(f(), o(0, 0, 1).scale(2, 2, .5))), x.rotate(-90, 0).scale(.1, .05, .1), h(.3, .3, .3)),
              o(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          p(), g(f(20, 1), o(.3 * e, -.8).scale(.2, .7, .24), h(1, .3, .4));
        }),
        p(),
        g(f(6, 1).slice(0, -1), x.scale(.77, 1, .77), h(1, .3, .5)),
        p(),
        g(
          j1(28, 22, (e, a, t) => {
            let l = a / 22, r = e * L * 2 / 28, s = N(l ** .6 * L / 2);
            return e = l * l * N(e * L * .5) / 4,
              a > 21
                ? { x: t.A = 0, y: -.5, z: 0 }
                : { x: H(r) * s, y: H(l * L) - l - e, z: N(r) * s + N(e * L * 2) / 4 };
          }),
          x.scale3d(.7),
          h(1, 1, 1),
        ),
        [-1, 1].map(e => g(j1(10), o(.16 * e, .4, -.36).scale3d(.09)));
    });
});
