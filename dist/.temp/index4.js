let u1,
  d1,
  S,
  g1,
  q,
  v1,
  p1,
  A,
  x1,
  y1,
  w1,
  M,
  l,
  d,
  z1,
  S1,
  H,
  N,
  E,
  A1,
  L = 0,
  P = 0,
  M1 = 0,
  k1 = 0,
  I1 = 0,
  j1 = 0,
  D1 = 0,
  Y1 = 0,
  C1 = 0,
  W = 0,
  U = 0,
  K = 0,
  T1 = 14,
  V = 180,
  F1 = .1,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  _ = [],
  J = [],
  O1 = [],
  v = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  { PI: G, atan2: Q1, sin: Z, cos: $, exp: t, random: B1 } = Math,
  e1 = (
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
  a1 = (
    e = n1,
    a = m1,
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
  t1 = (e = 0, a = 0, t = 0, l = 1) => {
    H = m1.m11 * e + m1.m21 * a + m1.m31 * t + m1.m41 * l,
      N = m1.m12 * e + m1.m22 * a + m1.m32 * t + m1.m42 * l,
      E = m1.m13 * e + m1.m23 * a + m1.m33 * t + m1.m43 * l,
      A1 = m1.m14 * e + m1.m24 * a + m1.m34 * t + m1.m44 * l;
  },
  o = (e, a, t) => n1.translate(e, a, t),
  l1 = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  p = (e, a, t) => (e.A = t, e.s = a, e),
  x = (e, a, t = e.s) => (a1(a), p(e.map(({ x: e, y: a, z: t }) => (t1(e, a, t), { x: H, y: N, z: E })), t, e.A)),
  i = (e, a, t) => e.map(e => x(e, a, t)),
  r1 = e => 0 > e ? -e : e,
  R1 = (e, a) => a > e ? e : a,
  X1 = (e, a) => e > a ? e : a,
  q1 = (e, a) => r1(e) > a ? e : 0,
  s1 = (e, a = 0, t = 1) => a > e ? a : e > t ? t : e,
  H1 = e => Q1(Z(e * J1), $(e * J1)) / J1,
  N1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * s1(t) || 0,
  c1 = (e, a, t) => (t > 0 ? 1 > t ? e + (a - e) * t : a : e) || 0,
  E1 = (e, a, t = 0) => (e * e + a * a + t * t) ** .5,
  y = (t, l = 0) =>
    l1(t, e => {
      let a = $(2 * G * e / t);
      return { x: Z(2 * G * e / t), y: 0, z: .01 > r1(a) ? a : 0 > a ? a - l : a + l };
    }),
  b = (l, r, s) => l.map((e, a, { length: t }) => p([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.s, s)),
  n = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? y(e, l) : v,
    l = x(e, o(0, 1).scale3d(t > 0 ? t : 1)),
    e = x(e, o(0, -1).scale3d(0 > t ? -t : 1)).reverse(),
    [...b(e, l, a), l, e]),
  w = (l, r = l, s = ((e, a) => (a *= G / r, { x: $(e *= 2 * G / l) * Z(a), y: $(a), z: Z(e) * Z(a) }))) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let a = 0; r > a; a++) {
        let e = p([], 0, 1);
        c.push(e),
          e.push(s(t, a, e)),
          a && e.push(s((t + 1) % l, a, e)),
          r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
          e.push(s(t, a + 1 % r, e));
      }
    }
    return c;
  },
  m = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  z = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = E1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  k = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  I = (l, e) => {
    let r, s, c, o = e.i, i = e.u;
    for (let t = 0; o.length > t; ++t) {
      if (-8e-5 > (r = k(l, o[t]) - l.w) ? c = e : r > 8e-5 && (s = e), c && s) {
        s = [], c = [], t = o.at(-1);
        let a = k(t, l) - l.w;
        for (let e of o) {
          r = k(e, l) - l.w,
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
        s = s.length > 2 && { i: p(s, o.s, o.A), u: i, v: e }, c = c.length > 2 && { i: p(c, o.s, o.A), u: i, v: e };
        break;
      }
    }
    return { x: s, y: c };
  },
  s = (e, a, t = z(a.i)) => {
    let l, r;
    return e
      ? (({ x: l, y: r } = I(e, a)), l || r || e.i.push(a), l && (e.o = s(e.o, l, t)), r && (e.m = s(e.m, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, i: [a], o: 0, m: 0 },
      e;
  },
  c = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { x: t, y: l } = I(e, a);
        t || l || (s * k(e, r) > 0 ? t = a : l = a), t && (e.o ? o(e.o, t) : c.push(t)), l && e.m && o(e.m, l);
      };
    for (let e of r.i) o(a, e);
    return c;
  },
  j = (e, a) => e && (a(e), j(e.o, a), j(e.m, a)),
  D = e => (j(e, a => {
    let e = a.m;
    a.m = a.o, a.o = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.i) e.u = !e.u;
  }),
    e),
  Y = e => e.length ? e.reduce((e, a) => s(e, { i: a, u: 0, v: 0 }), 0) : e,
  C = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = Y(l), a) {
        a = Y(a), j(l, e => e.i = c(a, e, 1)), j(a, e => r.push([e, c(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) s(l, e, a);
      }
      return l;
    }),
  f = (e, ...a) => {
    let t = e => {
        let a;
        return e.v && ((a = r.get(e.v)) ? (l.delete(a), e = t(e.v)) : r.set(e.v, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = D(C(D(Y(e)), ...a)),
      j(e, a => {
        for (let e of a.i) l.set(t(e), e.u);
      }),
      Array.from(l, ([{ i: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return p(a ? t.reverse() : t, e.s, e.A);
      });
  },
  L1 = e => 1 - t(-L * e),
  o1 = (e, a, t) => c1(e, a, L1(t)),
  P1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  W1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  U1 = () => {
    let e,
      i,
      n,
      m,
      f,
      h,
      u,
      d,
      g,
      v,
      p,
      x,
      y,
      a,
      t,
      l,
      r = !0,
      s = [],
      c = () => {
        b4.innerHTML = "Music: " + r, l && (d1 || !r ? l.disconnect() : l.connect(t.destination));
      },
      o = () => {
        let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        v1 = [W1(.3, 55, e, 1.732051), W1(55, 181, e, 1.732051)],
          p1 = W1(.3, 181, e, 1.732051),
          m = d = void 0,
          s.length =
            g1 =
            a =
            x =
            y =
            k1 =
            I1 =
              0,
          document.hidden && b(!0);
      },
      b = e => {
        if (d1 !== e) {
          if (d1 = e, o(), document.body.className = e ? "l m" : "l", e) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {}
          }
          c();
        }
      },
      w = e => {
        try {
          t || (t = new AudioContext(), (l = t.createBufferSource()).buffer = S, l.loop = !0, l.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {}
        b(!1), q = e;
      },
      z = (e, a) => e.buttons[a]?.pressed || e.buttons[a]?.value > 0 ? 1 : 0;
    oncontextmenu = () => !1,
      b1.onclick = () => w(),
      b2.onclick = () => w(1),
      b5.onclick = () => b(!0),
      b4.onclick = () => {
        r = !r, c();
      },
      b3.onclick = () => {
        confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
      },
      onclick = e => {
        if (!d1 && (e.target === hC && (g1 = 1), q)) {try {
            hC.requestPointerLock();
          } catch {}}
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
            (s[a] = !!e.type[5] && !0) && (0 === a && (g1 = 1), 1 === a && b(!0)));
      },
      onmousemove = ({ movementX: e, movementY: a }) => {
        q && (e || a) && (V += .1 * e, C1 += .1 * a);
      },
      hC.ontouchstart = l => {
        if (!d1) {
          for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {q && e > hC.clientWidth / 2
              ? void 0 === d && (g = 0, h = e, u = a, d = t, p = C1, v = V)
              : void 0 === m && (f = 0, i = e, n = a, m = t);}
          e = M1;
        }
      },
      hC.ontouchmove = l => {
        if (!d1) {
          for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
            var r, s, c, o;
            d === t && (C1 = p + (a - u) / 2.3, V = v + (e - h) / 2.3, g = 1),
              m === t
              && (t = (i - e) / 19,
                r = r1(t),
                c = r1(s = (n - a) / 19),
                (o = X1(r, c) > .3) && (f = 1),
                x = s1(t, -1) * (o && r > .2),
                y = s1(s, -1) * (o && c > .2),
                r > 2 && (i = 19 * (0 > t ? -1 : 1) + e),
                c > 2 && (n = 19 * (0 > s ? -1 : 1) + a));
          }
        }
      },
      hC.ontouchend = a => {
        let t;
        document.activeElement === document.body && a.preventDefault();
        for (let e of a.changedTouches) {e.identifier === d
            ? (d = void 0, g || (t = 1), g = 0)
            : e.identifier === m
            ? (m = void 0, y = x = 0, f || (t = 1), f = 0)
            : t = 1;}
        a.target === hC && t && e && (a = M1 - e) > .02 && .7 > a && (g1 = 1);
      },
      U1 = () => {
        k1 = y + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), I1 = x + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
        let e = navigator.getGamepads()[0];
        e
          && (q && (C1 += 80 * L * q1(e.axes[3], .3), V += 80 * L * q1(e.axes[2], .3)),
            k1 += z(e, 12) - z(e, 13) - q1(e.axes[1], .2),
            I1 += z(e, 14) - z(e, 15) - q1(e.axes[0], .2),
            z(e, 9) && b(!0),
            (e = z(e, 3) || z(e, 2) || z(e, 1) || z(e, 0)) && !a && (g1 = 1),
            a = e);
      },
      document.onvisibilitychange = onblur = onresize = o,
      b(!0);
  },
  T = (e, a) => {
    1 / 0 > F1 && (F1 = P + a, h4.innerHTML = e);
  },
  F = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        A = O1.reduce((e, a) => e + a.j, 0)
      ] + " / XIII";
  },
  O = () => {
    localStorage["Dante-22"] = JSON.stringify([J.map(e => e.j), O1.map(e => e.j), T1, w1, P]);
  },
  h = (e, a = n1, t) => l.push(...i(e, a, t)),
  u = () => {
    _.push({ l: M = new DOMMatrix(), i: l = [] });
  },
  g = (o, ...i) => {
    let n,
      m,
      f,
      h,
      u = 0,
      d = 0,
      g = 1,
      v = -1,
      p = () => {
        if (p.j) {
          a1(_[35].l).translateSelf(
            e % 4 * 1.2 - 1.7 + Z(P + e) / 7,
            -2,
            1.7 * (e >> 2) - 5.5 + r1(e % 4 - 2) + $(P / 1.5 + e) / 6,
          );
        } else {
          let l, e, a, t, r, s = 1, c = 1 / 0;
          for (let t = 0; i.length > t; t++) {
            let e = i[t], a = E1(y - e[0], b - e[1]);
            s = R1(s, a / e[2]), 0 > (a -= e[2]) ? l = 1 : c > a && (c = a, x = e);
          }
          l
          || (e = y - x[0],
            a = b - x[1],
            t = E1(e, a),
            r = Q1(-a, e),
            g && (h = s1(h / (1 + B1())), d = (B1() - .5) * G / 2),
            r += d,
            v = -$(r),
            u = Z(r),
            t > .1 && (t = R1(t, x[2]) / t, y = e * t + x[0], b = a * t + x[1])),
            g = l,
            h = o1(h, 3 + 6 * (1 - s), 3 + s),
            w = o1(w, y = o1(y, y + v, h), h),
            z = o1(z, b = o1(b, b + u, h), h),
            n = N1(n, Q1(w - m, z - f) / J1 - 180, L1(3)),
            a1(S).multiplySelf(o).translateSelf(m = w, 0, f = z).rotateSelf(0, n, 7 * Z(1.7 * P)),
            t1(),
            1.6 > E1(W - H, U - N, K - E)
            && (p.j = 1,
              T(
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
                ][A] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                6,
              ),
              F(),
              O());
        }
        e1(m1, V1, 28 + e);
      },
      x = i[0],
      [y, b] = x,
      [w, z] = x,
      S = M,
      e = O1.length;
    O1.push(p);
  },
  i1 = (e, a = 0, t = 0) => {
    let l = a1(n1, _[++d].l);
    return l.m41 = e, l.m42 = a, l.m43 = t, l;
  },
  K1 = () => {
    let l, r, s, c = (e, a) => (e = s1(e), c1(e, 1 - e, a));
    (K1 = () => {
      let e = (e, a, t) => i1(e + Z(P + 2) / 5, a + Z(.8 * P) / 5, t).rotateSelf(2 * Z(P), Z(.7 * P), Z(.9 * P)),
        a =
          (d = 1,
            s = c1(o1(s, 0, 1), H1(s + 60 * L), J[2].h - J[3].g),
            S1 = c(J[13].h, J[8].h),
            l = c1(o1(l, 0, 5), H1(l + 56 * L), S1),
            r = c1(o1(r, 0, 4), H1(r + 48 * L), S1),
            i1(0, 270 * (J[1].h - 1) + (2 + 5 * $(1.5 * P)) * (1 - J[10].h)),
            R1(1 - J[11].g, J[10].g)),
        t =
          (i1(a * Z(.6 * P + 1.2) * 12, 0, 35),
            i1(a * Z(.6 * P - 1.2) * 8.2, 0, 55),
            i1(a * Z(.6 * P) * 12, 0, 45),
            i1(9.8 * (1 - a)),
            a = s1(1 - 5 * a) * c(J[11].h, J[2].h),
            i1(0, a * Z(1.35 * P) * 4),
            i1(0, 0, a * Z(.9 * P) * 8),
            i1(0, -6.5 * J[11].g),
            a = c(J[4].g, J[3].g),
            i1(0, a * Z(P) * 5 + 3.5 * (1 - X1(J[3].h, J[4].h))),
            i1(0, a * Z(P + 3) * 6, a * Z(.6 * P + 1) * 6),
            i1(0, -7.3 * J[4].g),
            a = c(J[6].h, J[7].h),
            i1(0, -2, 10 - 8.5 * a * r1(Z(1.1 * P))),
            i1(0, -2, 10 - 8.5 * a * r1(Z(2.1 * P))),
            i1(0, -2, 10 - 8.5 * X1(a * r1(Z(1.5 * P)), (1 - J[6].h) * (1 - a))),
            c(J[5].g, J[13].g));
      for (a = 0; 4 > a; a++) {
        i1(
          (a > 2 ? 2 * (1 - t) + t : 0) - 100,
          t * Z(1.3 * P + 1.7 * a) * (3 + a / 3) + .7,
          115 - 7 * (1 - J[5].g) * (1 - J[13].g) * (1 & a ? -1 : 1)
            + X1(.05, t) * $(1.3 * P + 7 * a) * (4 - 2 * (1 - a / 3)),
        );
      }
      a = c(J[8].g, J[9].g);
      for (let e = 0; 3 > e; ++e) i1(0, a * Z(1.5 * P + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - J[8].g) * (1 - J[9].g)));
      for (
        a = c(c((J[9].h + J[9].g) / 2, J[8].g), (J[12].h + J[12].g) / 2),
          i1(0, 16 * a, 95 + 8.5 * s1(2 * a - 1)),
          i1(0, -4.7 * J[0].h, -15),
          i1(0, -4.7 * J[10].h, 15),
          i1(-99.7, -1.9 - 5.5 * J[3].h, 63.5),
          i1(-100, .6 - 5.8 * J[13].h, 96.5),
          i1(-75, 3 * (1 - J[2].g) * (1 - J[3].h), 55).rotateSelf(180 * (1 - J[2].g) + s, 0),
          i1(2.5 * (1 - t) - 139.7, -3 * (1 - J[5].h) - t * Z(.8 * P) - 1.8, 93.5).rotateSelf(
            $(1.3 * P) * (3 + 3 * t),
            0,
          ),
          i1(-2 * Z(P)).rotateSelf(25 * Z(P)),
          i1(-81, .6, 106).rotateSelf(0, 40 + l),
          i1(-65.8, .8, 106).rotateSelf(0, r),
          i1(-50.7, .8, 106).rotateSelf(0, 180 - r),
          i1(-50.7, .8, 91).rotateSelf(0, 270 + r),
          e(-12, 4.2, 40 * y1 - 66),
          e(-123, 1.4, 55 - 65 * w1),
          e = 0;
        16 > e;
        ++e
      ) {
        t = J[e],
          a = t.h = o1(t.h, t.j, 4),
          t.g = o1(t.g, t.j, 1),
          a1(a1(t.l).multiplySelf(t.C), i1(0)).rotateSelf(50 * a - 25, 0).translateSelf(0, 1).m44 = a,
          g1 && (t1(),
            3 > E1(W - H, U - N, K - E) && (t.j
              ? a > .7 && (t.j = 0, T1 = e, T("* click *", 1), O())
              : .3 > a && (t.j = 1, T1 = e, T("* click *", 1), O()))),
          14 === e && t.j && a > .8 && (t.j = 0,
            13 > A
              ? T("Not leaving now, there are souls to catch!", 3)
              : x1 || (x1 = 1, T("Well done. They will be punished.<br>Thanks for playing", 1 / 0))),
          13 > e && O1[e]();
      }
      for (z1(), e = 0; 28 > e; ++e) e1(_[28 + e].l, V1, e);
      for (let e, a = 0, t = 656; 26 > a; ++a, ++t) e = _[2 + a].l, V1[t++] = e.m41, V1[t++] = e.m42, V1[t++] = e.m43;
    })();
  },
  n1 = new DOMMatrix(),
  m1 = new DOMMatrix(),
  r = new Float32Array(16),
  V1 = new Float32Array(760),
  _1 = new Uint8Array(65536),
  J1 = G / 180,
  f1 =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      hC.getContext("webgl2", { powerPreference: "high-performance" })),
  h1 = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (let a in h1) {
  [f1, h1].map(e => e[a[0] + [...a].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = e[a]);
}
P1(() => {
  let e = 0,
    d = () => {
      if (2 == ++e) {
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
          v,
          p,
          x,
          y,
          b,
          w = 0,
          z = 1,
          S = 2,
          A = 15,
          M = [{}, {}, {}, {}, {}, {}, {}, {}],
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
          t = (e, a, t) => {
            d1
              ? hC.width > 1100 && e.d97(4, _[55].D - _[53].B, 5123, 2 * _[53].B)
              : (e.das(4, _[a].D - _[a].B, 5123, 2 * _[a].B, O1.length), e.d97(4, _[t ? 53 : 56].B - 3, 5123, 6));
          },
          l = e => {
            requestAnimationFrame(l);
            let a = (e - (u1 || e)) / 1e3;
            M1 += a,
              P += L = d1 ? 0 : R1(.055, a),
              u1 = e,
              L > 0
              && (w1 = o1(w1, J[15].g, .2 + .3 * r1(2 * J[15].g - 1)),
                y1 = x1 ? (q = 0, o1(y1, -9, .015)) : o1(y1, s1(P / 3), 1),
                F1 && P > F1 && (F1 = 0, h4.innerHTML = ""),
                U1(),
                K1(),
                h1.cbf(!0, !0, !0, !0),
                h1.c4s(16640),
                h1.u3a(O("j"), V1),
                h1.cbf(!0, !1, !0, !1),
                h1.uae(O("b"), !1, e1(a1().rotateSelf(0, 180).invertSelf().translateSelf(-W, -U, .3 - K))),
                t(h1, 56, 1),
                h1.c4s(256),
                h1.cbf(!1, !0, !1, !0),
                h1.uae(O("b"), !1, e1(a1().translateSelf(-W, -U, -K - .3))),
                t(h1, 56, 1),
                h1.f1s(),
                g1 = 0),
              F(),
              f1.u3a(F("j"), V1),
              f1.b6o(36160, r),
              f1.v5y(0, 0, 2048, 2048),
              f1.ubh(F("g"), 4),
              f1.ubh(F("h"), 4),
              f1.uae(F("a"), !1, e1(n1)),
              e = j1,
              a = D1,
              d1
                ? (a1().rotateSelf(0, 40 * Z(M1) - 80, -8),
                  e1(m1, V1, 25),
                  e1(m1, V1, 26),
                  e1(m1, V1, 27),
                  a1(p1).invertSelf(),
                  t1(3.6, 3.5),
                  e = H,
                  a = N,
                  a1(n1, C).rotateSelf(20, 0).translateSelf(-e, -a, -5).rotateSelf(0, 99))
                : a1(n1, C).rotateSelf(-C1, -V).invertSelf().translateSelf(-e, -a, -5),
              B(54.7),
              t(f1, 57, q),
              R(126),
              t(f1, 57, q),
              f1.b6o(36160, null),
              f1.v5y(0, 0, f1.drawingBufferWidth, f1.drawingBufferHeight),
              f1.c4s(16640),
              f1.ubh(F("g"), 0),
              f1.ubh(F("h"), 1),
              f1.ubu(F("k"), e, a, 5),
              f1.uae(F("a"), !1, e1(p1)),
              f1.uae(F("b"), !1, e1(C)),
              f1.uae(F("i"), !1, T),
              t(f1, 57, q),
              Q(),
              f1.uae(Q("b"), !1, e1(C.invertSelf())),
              f1.ubu(Q("j"), f1.drawingBufferWidth, f1.drawingBufferHeight, M1),
              f1.d97(4, 3, 5123, 0);
          },
          k = (e, a, t, l) => c1(e, a, z || (s1(r1(a - e) ** .5 - t) + 1 / 7) * L1(1.5 * l)),
          I = () => a1((S ? J[T1] : _[28 !== w ? w : 0]).l),
          j = e => {
            S > 1 ? (a1(J[T1].l).multiplySelf(J[T1].C), t1(0, y1 > .9 ? 15 : 1, -2.4)) : (I(), t1(x, y, b)),
              e && (n = (H - W) / L, m = (E - K) / L),
              W = H,
              U = N,
              K = E;
          },
          D = () => {
            let l, r, s, c = 0, o = 0, i = 0, n = 0, e = 0, a = 0, m = -1;
            for (l = 0; 36 > l; ++l) {
              for (let a = 96, t = 512 * l; 416 > a; a += 4) {
                for (r = 0; 2 > r; ++r) {
                  let e = _1[t + a + r + 2];
                  (s = _1[t + a + r]) > n && (n = s),
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
                s = _1[r = a + 4 * e],
                  64 > e ? s > o && (o = s) : s > i && (i = s),
                  (s = _1[2 + r]) > m && (m = s),
                  s = _1[1 + r],
                  e > 64 ? s > o && (o = s) : s > i && (i = s),
                  (s = _1[3 + r]) > l && (l = s);
              }
              (i -= o) * i > e * e && (e = i), (l -= m) * l > a * a && (a = l);
            }
            h = s1(1 - .01 * X1(r1(e *= .7), r1(a)), .3),
              e /= 255,
              n /= 255,
              a /= 255,
              I().invertSelf(),
              t1(e, n, a, 0),
              x += H,
              y += n,
              b += E,
              j();
          },
          Y = new DOMMatrix(),
          C = new DOMMatrix(),
          T = new Float32Array(32),
          a = X,
          r = f1.c5w(),
          F = e(
            f1,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          O = e(
            h1,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          Q = e(
            f1,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [B, R] = l1(2, e => {
            let a = f1.c25();
            return f1.a4v(33984 + e),
              f1.b9j(3553, a),
              f1.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              f1.t2z(3553, 10241, 9729),
              f1.t2z(3553, 10240, 9729),
              f1.t2z(3553, 34893, 515),
              f1.t2z(3553, 34892, 34894),
              f1.t2z(3553, 10243, 33071),
              f1.t2z(3553, 10242, 33071),
              l => {
                let t = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, i = 1 / 0, n = -1 / 0, m = -1 / 0, f = -1 / 0;
                f1.fas(36160, 36096, 3553, a, 0),
                  f1.c4s(256),
                  a1().scale3dSelf(l *= 1.1).multiplySelf(a1(v1[e], Y).multiplySelf(C).invertSelf());
                for (let a = 0; 8 > a; ++a) {
                  let e = M[a];
                  t1(4 & a ? 1 : -1, 2 & a ? 1 : -1, 1 & a ? 1 : -1),
                    t -= e.x = (0 | H) / l / A1,
                    r -= e.y = (0 | N) / l / A1,
                    s -= e.z = (0 | E) / l / A1;
                }
                for (a1().rotateSelf(298, 139).translateSelf(t / 8, r / 8, s / 8), l = 0; 8 > l; ++l) {
                  let { x: e, y: a, z: t } = M[l];
                  t1(e, a, t), n = X1(n, H), m = X1(m, N), f = X1(f, E), c = R1(c, H), o = R1(o, N), i = R1(i, E);
                }
                l = 10 + e,
                  i *= 0 > i ? l : 1 / l,
                  f *= f > 0 ? l : 1 / l,
                  f1.uae(
                    F("b"),
                    !1,
                    e1(
                      a1(n1, Y).scaleSelf(2 / (n - c), 2 / (m - o), 2 / (i - f)).translateSelf(
                        (n + c) / -2,
                        (m + o) / -2,
                        (i + f) / 2,
                      ).multiplySelf(m1),
                      T,
                      e,
                    ),
                    16 * e,
                    16,
                  );
              };
          });
        f1.a4v(33986),
          f1.b9j(3553, f1.c25()),
          f1.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, a),
          f1.t2z(3553, 10241, 9987),
          f1.t2z(3553, 10240, 9729),
          f1.gbn(3553),
          f1.b6o(36160, r),
          f1.d45([0]),
          f1.r9l(0),
          F(),
          f1.ubh(F("q"), 2),
          Q(),
          f1.ubh(Q("q"), 2),
          f1.c5t(0, 0, 0, 1),
          f1.d4n(515),
          f1.e8z(2929),
          f1.e8z(2884),
          h1.e8z(2929),
          h1.e8z(2884),
          h1.v5y(0, 0, 128, 128),
          O(),
          h1.uae(O("a"), !1, e1(W1(1e-4, 2, 1.2, .4))),
          z1 = () => {
            let e, a, t, l, r;
            for (
              j(d),
                h1.r9r(0, 0, 128, 128, 6408, 5121, _1),
                D(),
                !S && d === w || (w = d, I().invertSelf(), t1(W, U, K), x = H, y = N, b = E, S = S && (d ? 0 : 1)),
                (-20 > W || 109 > K ? -25 : -9) > U && (S = 2),
                1 === d && (J[15].j = -15 > W && 0 > K ? 1 : 0),
                i = o1(i, S1 * (d > 30 && 35 > d), 2),
                g = k(g, W, .5, 1),
                v = k(v, u = c1(o1(u, U, 2), U, S || 8 * r1(u - U)), 2, 1),
                p = k(p, K, .5, 1),
                q
                  ? (e = S + L1(18), j1 = c1(j1, W, e), Y1 = c1(Y1, K, e), D1 = c1(D1, 1.6 + u, e), V = H1(V))
                  : (j1 = k(j1, g, 1, 2 + i),
                    Y1 = k(Y1, p + -18 + 5 * i, 1, 2 + i),
                    D1 = k(D1, X1(v + s1((-60 - K) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                    e = R1(-6, -r1(p - Y1)),
                    V = N1(V, 90 - H1(Q1(e, a = g - j1) / J1), z + L1(10)),
                    C1 = N1(C1, 90 - Q1(E1(e, a), D1 - v) / J1, z + L1(10))),
                C1 = s1(C1, -87, 87),
                z = 0,
                e = s1(k1, -1),
                a = s1(I1, -1),
                t = q1(E1(e, a) ** .5, .1),
                l = Q1(e, a),
                t && (s = 90 - l / J1),
                o = o1(o, t, 10),
                i1(W, .06 * h * o * $(18.2 * P) + u, K).rotateSelf(0, c = N1(c, s, L1(8))),
                r = 0;
              2 > r;
              ++r
            ) {
              let e = 9.1 * P - G * r;
              a1(_[53].l, i1(0)).translateSelf(0, o * s1(.45 * Z(e - G / 2))).rotateSelf(o * Z(e) * .25 / J1, 0);
            }
            A = d ? 5 : o1(A, S ? 13 : 19 - 2 * R1(0, U + 10), 2.2),
              n = d || S ? 0 : o1(n, 0, 3),
              m = d || S ? 0 : o1(m, 0, 3),
              e = (f = S ? 0 : o1(f, d ? 7 * s1(2 * t) * h : 0, d ? 9 : 1)) * t * r1(e) * Z(l),
              a = f * t * r1(a) * $(l),
              t = L * (n + ($(l = q ? (180 + V) * J1 : 0) * a - Z(l) * e)),
              r = L * -A,
              e = L * (m + (Z(l) * a + $(l) * e)),
              I().invertSelf(),
              t1(t, r, e, 0),
              x += H,
              y += r,
              b += E,
              j();
          },
          U1(),
          requestAnimationFrame(l);
      }
    },
    X = new Image();
  X.onload = d,
    X.src = a,
    (r => {
      let X = 0,
        q = e => Z(e * G * 2),
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
                v = G * 2 ** (l - 8) / f,
                p = Q * f & -2;
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
                                  + (k ? (2 * B1() - 1) * k : 0))
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
                        1 !== X && 4 !== X || (r *= Z(g * c * G * 2) * B / 512 + .5),
                        r = 1.5 * Z(r),
                        i += r * n,
                        n += r * (o = (1 - C / 255) * (e - n) - i),
                        e = 4 === X ? n : 3 === X ? o : i,
                        X || (e = 1 > (e *= 22e-5) ? e > -1 ? Z(e / 4 * G * 2) : -1 : 1, e /= 22e-5),
                        e *= T / 32,
                        s = e * e > 1e-5,
                        u = e * (1 - (o = Z(v * c) * F / 512 + .5)),
                        e *= o),
                      p > c || (u += m[1 + c - p] * O / 255, e += m[c - p] * O / 255),
                      H[o = x + c >> 1] += (m[c] = u) / 65536,
                      N[o] += (m[++c] = e) / 65536;
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
            [b, w, z, S, A, M, k, I, j, a, D, t, Y, C, T, F, l, O, Q, B] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][X],
            R = 4 * a ** 2;
          e(5513), e(4562), e(3891), P1(5 > ++X ? s : r);
        },
        H = (S = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        N = S.getChannelData(1);
      P1(s);
    })(() => {
      let e = [-110, -100, -92, -82, -106, -97, -88],
        a = e => o(Z((e /= 11) * G), e).rotateSelf(10 * e).scaleSelf(1.002 - e, 1, 1.002 - e),
        t = e => {
          J.push({ l: M, C: e }),
            h(n(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), m(.4, .5, .5)),
            h(n(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), m(.4, .5, .5)),
            h(n().slice(0, -1), e.translate(0, -.4).scale(.5, .1, .5), m(.5, .5, .4));
        },
        l = e =>
          f(
            i(n().slice(0, -1), o(0, -e / 2).scale(6, e - 1, 2.2)),
            i(n().slice(0, -1), o(0, -e / 2 - 4).scale(4, e - 5, 4)),
            i(n(28, 1), o(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        r = (P1(() => {
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
          _.map((e, a) => {
            let s,
              l = e => {
                let { x: a, y: t, z: l } = s[e], r = (u[0] = a, u[1] = t, u[2] = l, f.get(e = "" + (s.A ? h : m)));
                return void 0 !== r
                  ? (a = 3 * r, i[a] = (i[a++] + m[5]) / 2, i[a] = (i[a++] + m[6]) / 2, i[a] = (i[a] + m[7]) / 2)
                  : (f.set(e, r = f.size), c.push(a, t, l, u[3]), o.push(m[4]), i.push(m[5], m[6], m[7])),
                  r;
              };
            for (s of (u[3] = a > 55 ? -28 : a, e.i)) {
              let { x: e, y: a, z: t } = z(s);
              m[4] = 0 | s.s, m[5] = 32767 * e, m[6] = 32767 * a, m[7] = 32767 * t;
              for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
            }
            e.i = 0, e.B = t, e.D = t = r.length;
          }),
            [f1, h1].map(e => {
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
            s = e, n = a, T1 = t, w1 = l, P = r;
          } catch {}
          J.map((e, a) => e.h = e.g = e.j = 14 !== a && s[a] ? 1 : 0),
            O1.map((e, a) => e.j = n[a] ? 1 : 0),
            F(),
            y1 = A || 14 !== T1 ? 1 : 0,
            P1(d);
        }),
          f(
            i(n(), o(0, -.5, 1).scale(1.15, 1.2, 6.5), m(.25, .25, .35, .3)),
            f(
              i(n(3), o(0, 0, -5.5).scale(3, 2), m(.6, .3, .4, .3)),
              i(n(), o(0, 0, -3.65).scale(2.5, 3), m(.6, .3, .4, .3)),
            ),
            ...[-1, 1].map(e => i(n(), o(1.2 * e, -.5, 1).scale(.14, .3, 6.5), m(.7, .2, 0, .3))),
          )),
        s = [
          i(n(), o(0, -3).scale(11, 1.4, 3), m(.9, .9, .9, .2)),
          i(n(), o(0, -2.2).scale(7.7, .5, 4), m(.5, .5, .5, .2)),
          l1(12, e => i(n(), n1.translate(e - 5.5, 4.4).scale(.1, .1, 2), m(.6, .5, .3, .2))).flat(),
          i(
            f(
              i(n(6), n1.rotate(90).scale(6, 8, 6)),
              i(n(4, 0, .01), o(0, 6).scale(12, 2, .75).rotate(0, 45)),
              i(n(6), n1.rotate(90).scale(5, 12, 5)),
              ...[-5, 0, 5].map(e => i(n(5), o(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
            ),
            n1,
            m(.3, .6, .6, .3),
          ),
        ].flat(),
        c = l1(11, e => b(x(y(16), a(e), m(1, 1, .8, .2)).reverse(), x(y(16), a(e + 1), m(1, 1, .8, .2)), 1)).flat();
      for (
        u(),
          h([v.slice(1)], o(-2).scale3d(3).rotate(90, 0)),
          u(),
          t(o(-5.4, 1.5, -19).rotate(0, -90)),
          [-15, 15].map((e, a) => {
            h(n(), o(0, 0, a ? 22 : -23).scale(3, 1, 8), m(.9, .9, .9, .2)),
              h(n(), o(0, 6.3, e).scale(4, .3, 1), m(.3, .3, .3, .4)),
              h(n().slice(0, -1), o(0, 1, e).scale(3, .2, .35), m(.5, .5, .5, .3));
          }),
          h(n(), o(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), m(.8, .8, .8, .2)),
          h(n(), o(3, 1.5, -20).scale(.5, 2, 5), m(.7, .7, .7, .2)),
          h(n(5), o(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), m(.6, .3, .3, .4)),
          h(n(), o(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), m(.75, .75, .75, .2)),
          h(f(
            C(
              f(
                i(n(6, 0, 0, .3), o(0, -.92).scale(13, 2, 13), m(.8, .8, .8, .2)),
                i(n(), n1.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), m(.5, .5, .5, .5)),
              ),
              i(
                n(),
                n1.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                m(.8, .2, .2, .5),
              ),
              i(n(6), o(0, -8).scale(9, 8, 7), m(.2, .1, .4, .5)),
              i(n(6, 0, 0, .3), o(8, -4, -4).scale(14, 2, 13), m(.7, .7, .7, .2)),
            ),
            i(n(6), o(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), m(.5, .5, .5, .5)),
            i(n(5, 0, 1.5), o(0, 1).scale(4.5, .3, 4.5), m(.7, .5, .9, .2)),
            i(n(5), n1.scale(5, 30, 5), m(.4, .2, .6, .5)),
          )),
          t(o(15.8, -2, 3.8)),
          h(n(), o(-18.65, -3, 55).scale(2.45, 1.4, 2.7), m(.9, .9, .9, .2)),
          t(o(-55, -1.1, 46).rotate(0, 90)),
          h(n(7), o(-57, -2.6, 46).scale(4, 1, 4), m(.8, .8, .8, .3)),
          h(n(6), o(-61.3, -2.4, 49).scale(3, 1, 5), m(.4, .6, .6, .3)),
          h(s, o(-53, 0, 55)),
          h(n(), o(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), m(.7, .7, .7, .2)),
          h(n(3, 0, -.5), o(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), m(.8, .8, .8, .2)),
          h(f(
            i(n(), o(-100, 1, 63).scale(7.5, 4), m(.5, .5, .5, .4)),
            i(n(), o(-100, 0, 63).scale(2, 2, 4), m(.5, .5, .5, .4)),
            i(n(20, 1), o(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), m(.5, .5, .5, .4)),
          )),
          h(f(
            C(
              i(n(), o(-100, -2.6, 70).scale(3, 1.1, 7), m(.8, .8, .8, .2)),
              i(n(), o(-100, -2.4, 55).scale(8, .9, 8), m(.8, .8, .8, .2)),
              i(n(), o(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), m(.8, .8, .8, .2)),
              i(n(6), o(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), m(.6, .6, .6, .3)),
              i(n(), o(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), m(.8, .8, .8, .2)),
              i(n(), o(-100, .42, 92).scale(3, 1.1, 4.1), m(.8, .8, .8, .2)),
              i(n(), o(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), m(.8, .8, .8, .2)),
            ),
            i(n(8), o(-100, -1, 55).scale(7, .9, 7), m(.3, .3, .3, .4)),
            i(n(8), o(-100, -2, 55).scale(4, .3, 4), m(.4, .4, .4, .5)),
            i(n(8, 0, -3.1), o(-100, -3, 55).scale(.4, 1, .4), m(.4, .4, .4, .5)),
          )),
          v.map(({ x: a, z: t }) => {
            h(n(6), o(3 * a, 3, 15 * t).scale(.7, 4, .7), m(.6, .3, .3, .4)),
              h(n(6), o(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), m(.6, .15, .15, .8)),
              [4, -.4].map(e => h(n(6), o(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), m(.4, .2, .2, .8))),
              [1.5, 8].map(e =>
                h(n(15, 1), o(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), m(.6, .6, .6, .3))
              ),
              h(n(14, 1).slice(0, -2), o(9 * a - 38.9, -18, 11 * t + 17).scale(1, 14.2), m(.25, .25, .25, 1));
          }),
          l1(7, e => {
            h(
              n((23 * e + 1) % 5 + 5, 0, .5),
              o(5 * Z(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1.1 + e / 6, 5 + e / 3),
              m(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
            );
          }),
          h(n(), o(-87, -9.5, 24).scale(7, 1, 3), m(.4, .5, .6, .4)),
          h(n(4), o(-86, -9.2, 27).scale(5, 1, 5), m(.5, .6, .7, .3)),
          h(n(12, 1), o(-86, -9, 31).scale(1.5, 1, 1.5), m(.3, .3, .4, .1)),
          t(o(-86, -7.5, 31)),
          h(n(5), o(-38.9, -11.1, 10).scale(2, 1.2, 2), m(.2, .4, .7, .3)),
          h(f(
            C(
              i(n(), o(-38.9, -11.3, 17).scale(11, 1, 13), m(.3, .4, .6, .3)),
              i(n(5), o(-38.9, -11.1, 17).scale(9, 1, 9), m(0, .2, .3, .5)),
            ),
            i(n(5), o(-38.9, -11.1, 17).scale3d(5.4), m(0, .2, .3, .5)),
          )),
          t(o(-38.9, -9.4, 10)),
          h(
            f(
              C(
                i(n(6), o(0, 0, -18).scale(15, 1.3, 15), m(.7, .7, .7, .3)),
                i(n(5), n1.scale(4.5, 1.2, 9), m(.45, .4, .6, .3)),
              ),
              ...l1(6, a =>
                l1(
                  6,
                  e =>
                    i(
                      n(6),
                      o(4.6 * e - (1 & a ? 10 : 12), 0, 4.6 * a + 2 * Z(4 * e) - 32).scale3d(2),
                      m(.7, .7, .7, .3),
                    ),
                )).flat(),
            ),
            o(-38.9, -11.3, -1),
          ),
          t(o(-84, -.7, 85).rotate(0, 45)),
          h(n(5), o(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), m(.8, .1, .25, .4)),
          t(o(-116, -1.4, -18).rotate(0, 180)),
          h(
            f(i(n(), o(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...e.map(e => i(n(), o(e, .05, -3).scale(1.35, 2, 9)))),
            n1,
            m(.5, .5, .6, .2),
          ),
          h(n(), o(-96.5, 1, -2).scale(19, .3, .3), m(.5, .5, .6, .2)),
          h(n(6), o(-116, -2.6, -16.5).scale(3.2, .8, 3), m(.6, .5, .7, .2)),
          h(n(), o(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), m(.8, .8, .8, .2)),
          h(n().slice(0, -1), o(-115.5, -17, -12).scale(.5, 15, 2.2), m(.6, .6, .6, .3)),
          h(n(8).slice(0, -2), o(-114, -17, -2).scale(2, 15, 2), m(.6, .6, .6, .3)),
          h(n(8).slice(0, -2), o(-79, -17, -2).scale(2, 15, 2), m(1, 1, 1, .3)),
          h(n().slice(0, -1), o(-77, -17, -50.5).scale(2.2, 15, .5), m(.6, .6, .6, .3)),
          h(f(
            i(n(12).slice(0, -1), o(-77, -14.5, -12).scale(4, 17.5, 4), m(.7, .7, .7, .2)),
            i(n(12), o(-77, 3.1, -12).scale(3, 5, 3), m(.4, .5, .6, .2)),
            i(n(), o(-79, .1, -12).scale(3.5, 2, 1.3), m(.4, .5, .6, .2)),
            i(n(), o(-77, .1, -14).scale(1.5, 2, 2), m(.4, .5, .6, .2)),
          )),
          h(f(
            i(n(), o(-93, -5.8, -40).scale(9, 1, 5), m(.8, .8, .8, .1)),
            i(n(9), o(-98, -5.8, -40).scale(3, 8, 3), m(.7, .7, .7, .2)),
          )),
          h(n(), o(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), m(.6, .6, .6, .3)),
          h(n(9).slice(0, -1), o(-98, -18.4, -40).scale(2.5, 13.5, 2.5), m(.5, .5, .5, .3)),
          t(o(-98, -4.4, -40).rotate(0, 90)),
          [-1, 1].map((a, t) => {
            h(
              f(
                i(n(), o(-4 * a, 3.5, -.5).scale(4, 4, .7), m(.5, .5, .5, .4)),
                i(n(5), o(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), m(.6, .24, .2, .5)),
                i(n(), n1.scale(3, 3, 10), m(.6, .24, .2, .5)),
                i(n(5), o(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), m(.6, .24, .2, .5)),
                i(n(32, 1), o(0, 3, -5).scale(3, 4, 10).rotate(90, 0), m(.6, .24, .2, .5)),
              ),
              o(a - 100, .7, 97),
            ),
              h(n(12, 1), o(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), m(.6, .24, .2, .5)),
              [7.2, 1.5].map(e => h(n(15, 1), o(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), m(.5, .24, .2, .4))),
              h(c, o(-8 * a, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * a + 90)),
              h(c, o(-5 * a - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90)),
              l1(5, e => h(c, o(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2)));
          }),
          h(f(
            i(n(), o(-82.07, .8, 106).scale(11, .9, 2.2), m(.7, .7, .7, .1)),
            i(n(45, 1), o(-81, .7, 106).scale3d(7.7), m(.7, .7, .7, .1)),
          )),
          h(n(), o(-50.7, 1, 99).scale(2, .65, 1), m(.7, .7, .7, .2)),
          h(n(), o(-58, 1, 106).scale(2, .65, 2), m(.7, .7, .7, .2)),
          h(n(), o(-34.2, .4, 91).scale(3, 1, 3), m(.7, .7, .7, .3)),
          h(n(), o(-42, .4, 91).scale(5, 1, 2.5), m(.7, .7, .7, .3)),
          h(n(5), o(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), m(.2, .5, .5, .6)),
          t(o(-34, 2.7, 96).rotate(-12, 0)),
          h(f(
            C(
              i(n(), o(-101.5, .7, 93.5).scale(10.5, 1, 2), m(.7, .7, .7, .2)),
              i(n(6, 0, 0, .6), o(-100, .7, 105.5).scale(8, 1, 11), m(.7, .7, .7, .2)),
            ),
            i(n(5), o(-100, .7, 113).scale(4, 3, 4), m(.7, .7, .7, .2)),
          )),
          l1(3, e => {
            h(l(16), o(-77, -9, -12 * e - 20).rotate(0, 90), m(.6, .6, .6, .3)),
              h(l(16), o(12 * e - 109, -9, -12), m(.6, .6, .6, .3)),
              h(
                l(24.7 - .7 * (1 & e)),
                o(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? m(.5, .5, .5, .3) : m(.35, .35, .35, .5),
              );
          }),
          h(f(
            C(
              i(n(), o(0, 16, 111).scale(3, 1, 3.8), m(.5, .3, .3, .4)),
              i(n(6, 0, 0, .3), o(0, -.92, 95).scale(14, 2, 14), m(.8, .8, .8, .2)),
              i(n(), o(0, 16, 110.5).scale(12, 1, 3), m(.5, .3, .3, .4)),
            ),
            i(n(5), o(0, 0, 95).scale3d(6), m(.3, .3, .3, .5)),
            i(n(5), o(0, 16, 103.5).scale(5.5, 5, 5.5), m(.5, .3, .3, .4)),
          )),
          t(o(0, 1.7, 82).rotate(0, 180)),
          h(n(5).slice(0, -1), o(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), m(.5, .3, .3, .4)),
          h(n(6), o(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), m(.5, .6, .7, .3)),
          h(n(), o(0, 16, 127.8).scale(1.5, 1, .7), m(.5, .6, .7, .3)),
          h(n(7), o(0, 15.1, 133).scale(5, 2, 5), m(.4, .5, .6, .4)),
          g(o(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          g(o(0, 2.8), [5, 10, 3], [-5, 10, 3], ...y(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * r1(e)])),
          g(o(0, 3, 95), ...y(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
          g(o(0, 19, 134), [0, 0, 3.5]),
          g(o(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          g(o(-89, .2, 80), [0, 0, 6]),
          g(o(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          g(o(-115, .2, -12), [0, 0, 3.5]),
          g(o(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
          u(),
          h(n(5), o(0, -.2).scale(5, 1, 5), m(.6, .65, .7, .3)),
          t(o(0, 1.2)),
          l1(2, () => {
            u(),
              v.map(({ x: e, z: a }) => {
                h(n(11, 1).slice(0, -2), o(4 * e, 4, 4 * a).scale(.8, 3, .8), m(.5, .3, .7, .6)),
                  h(n(), o(4 * e, 7, 4 * a).scale(1, .3), m(.5, .5, .5, .3));
              }),
              h(f(
                i(n().slice(0, -1), n1.scale(5, 1, 5), m(.8, .8, .8, .3)),
                ...[-1, 1].map(e => i(n(25, 1), o(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), m(.8, .8, .8, .3))),
              )),
              h(n(), o(0, -3).scale(8, 2, 8), m(.4, .4, .4, .3));
          }),
          u(),
          h(f(
            C(
              i(n(), n1.scale(1.5, 1, 5), m(.9, .9, .9, .2)),
              i(n(), o(0, -2).scale(2, 3.2, 1.9), m(.3, .8, .5, .5)),
              i(n(6), n1.scale(4, 1, 5), m(.9, .9, .9, .2)),
              i(n(16, 1, 0, 4), n1.scale(1, 1, 1.5).rotate(0, 90), m(.9, .9, .9, .2)),
            ),
            i(n(), n1.scale(1.3, 10, 1.3), m(.2, .7, .4, .6)),
          )),
          g(o(0, 2.8), [0, 0, 4.5]),
          u(),
          h(n(3), o(-23, -1.7, 55.8).scale(5, .7, 8.3), m(.3, .6, .6, .2)),
          h(n(8), o(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), m(.8, .8, .8, .2)),
          h(n(), o(-23, -2.2, 62).scale(3, 1, 4), m(.5, .5, .5, .3)),
          h(n(), o(-23, -3, 55).scale(5.2, 1.7, 3), m(.5, .5, .5, .3)),
          t(o(-23, -.5, 66.5)),
          u(),
          h(n(), o(-22.55, -3, 55).scale(1.45, 1.4, 2.7), m(.7, .7, .7, .2)),
          h(f(i(n(), n1.scale(3, 1.4, 2.7)), i(n(), n1.scale(1.2, 8, 1.2))), o(-33, -3, 55), m(.7, .7, .7, .2)),
          u(),
          h(f(i(n(), n1.scale(3, 1.4, 2.7)), i(n(), n1.scale(1, 3))), o(-27, -3, 55), m(.9, .9, .9, .2)),
          h(n(), o(-39, -3, 55).scale(3, 1.4, 2.7), m(.9, .9, .9, .2)),
          u(),
          h(n(6), o(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), m(.7, .7, .7, .4)),
          u(),
          [0, 12, 24].map(e =>
            h(n(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), m(.2, .5, .6, .2))
          ),
          u(),
          [6, 18].map(e =>
            h(n(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), m(.1, .4, .5, .2))
          ),
          u(),
          h(n(5), o(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), m(.3, .3, .5, .5)),
          h(n(5).slice(0, -1), o(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), m(.6, .3, .5, .5)),
          h(
            f(
              i(n(5), o(0, 2).scale(5, 7, 5).skewY(8)),
              i(n(5), o(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
              i(n(), n1.scale(2, 8, 3)),
            ),
            o(-38.9, -11.3, 17),
            m(.2, .4, .5, .5),
          ),
          g(o(-39.1, -.6, 17).rotate(11), ...y(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2])),
          e.map((e, a) => {
            a % 2 || a >= 6 || u(), h(r, o(e, 1.9, -12));
          }),
          l1(4, e => {
            u(),
              h(
                n(6),
                o(-14.6 - 4.8 * e - (e > 2 ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                  2.6,
                  1,
                  2.5,
                ),
                m(.5 - e / 8, e / 12 + .5, .7, .3),
              );
          }),
          [m(.1, .55, .45, .2), m(.2, .5, .5, .3), m(.3, .45, .55, .4)].map((e, a) => {
            u(),
              h(n(), o(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
              2 === a && h(n(), o(-29.1, .4, 91).scale(2.1, 1, 3), m(.7, .7, .7, .3)),
              1 === a && h(n(), o(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), m(.6, .6, .7, .3));
          }),
          u(),
          h(n(5), n1.scale(5, 1.1, 5), m(.5, .3, .3, .4)),
          h(n(5), n1.scale(5.5, .9, 5.5), m(.25, .25, .25, .4)),
          t(o(0, 1.5, -1).rotate(0, 180)),
          l1(4, a => {
            u(),
              l1(
                7,
                e =>
                  h(i(
                    n(8, 1).slice(0, -1),
                    o((a > 2 ? 3.5 : 4) * (e / 6 - .5), 3).scale(.2, a > 2 ? 4 : 3, .2),
                    m(.3, .3, .38),
                  )),
              );
          }),
          u(),
          h(s),
          u(),
          h(n(5).slice(0, -1), o(-7.5, 2.7).rotate(0, 90).scale(1, .2), m(.5, .5, .5, .5)),
          h(n(10).slice(0, -1), o(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), m(.3, .8, .7, .3)),
          h(n(15, 1), o(-7.5).rotate(0, 90).scale(3, 2.3, 3), m(.4, .4, .4, .3)),
          t(o(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
          [-1, 1].map(e => h(c, n1.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
          h(f(i(n(10), n1.scale(6, 2, 6), m(.1, .6, .5, .3)), i(n(10), n1.scale(3.3, 6, 3.3), m(.1, .6, .5, .5)))),
          g(o(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
          u(),
          h(n(3), o(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), m(.5, .3, .3, .4)),
          [22, 30].map(e => {
            h(n(6), o(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), m(.7, .7, .7, .4)),
              h(n(), o(0, 6.2, e + 95).scale(.5, 11, .5), m(.5, .3, .3, .4));
          }),
          u(),
          h(n(5).slice(0, -1), o(0, 2).scale(1, 2), m(.3, .3, .3, .2)),
          h(n(8).slice(0, -1), o(0, 2).scale(3, 1.5, 3).rotate(0, 22), m(.7, .7, .7, .1)),
          h(f(
            i(n(28, 1), n1.scale(7.5, 1, 7.5), m(.45, .45, .45, .2)),
            i(n(), o(0, 0, -5.5).scale(1.5, 3, 2.7), m(.45, .45, .45, .2)),
          )),
          g(o(0, 3), ...y(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2])),
          u(),
          [-1, 1].map(e => h(c, n1.rotate(0, 90).translate(-5 * e, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * e + 90))),
          h(f(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), m(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2).scale(9, 1.1, 2), m(.3, 0, 0, .3)),
          )),
          h(n(5).slice(0, -1), o(0, 1).scale(1, .2), m(.3, .3, .3, .2)),
          h(n(28, 1), n1.scale(7.5, 1, 7.5), m(.45, .45, .45, .2)),
          u(),
          h(f(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), m(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2, 7).scale(2, 1.1, 9), m(.3, 0, 0, .3)),
            i(n().slice(0, -1), o(7, 2).scale(9, 1.1, 2), m(.3, 0, 0, .3)),
          )),
          h(n(5).slice(0, -1), o(0, 1).scale(1, .2), m(.3, .3, .3, .2)),
          h(n(28, 1), n1.scale(7.5, 1, 7.5), m(.45, .45, .45, .2)),
          u(),
          h(f(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), m(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2, -7).scale(2, 1.1, 9), m(.3, 0, 0, .3)),
            i(n().slice(0, -1), o(7, 2).scale(9, 1.1, 2), m(.3, 0, 0, .3)),
          )),
          h(n(5).slice(0, -1), o(0, 1).scale(1, .2), m(.3, .3, .3, .2)),
          h(n(28, 1), n1.scale(7.5, 1, 7.5), m(.45, .45, .45, .2)),
          l1(2, () => {
            u(),
              h(f(
                i(n(30, 1, 1.15, 1), o(0, -3).scale(3.5, 1, 3.5), m(.7, .4, .25, .7)),
                i(n(), o(4, -1.2).scale3d(2), m(.7, .4, .25, .3)),
                i(n(30, 1, 1.3, 1), o(0, -2.5).scale(2.6, 1, 3), m(.7, .4, .25, .2)),
              )),
              t(o(0, -3, 4));
          }),
          e = 0;
        16 > e;
        ++e
      ) {
        u(),
          h(n(9, 1), o(0, .8).scale(.2, .3, .2), m(.7, 1, .2)),
          h(n(6, 1).slice(0, -1), n1.scale(.12, 1.2, .12), m(.3, .3, .5, .1)),
          h(n(3), o(0, -1).rotate(90, 90).scale(.3, .4, .3), m(.2, .2, .2, .1));
      }
      u(),
        h(w(20), o(0, 1).scale3d(.5), m(1, .3, .4)),
        h(w(30), n1.scale(.65, .8, .55), m(1, .3, .4)),
        h(n(), o(0, .9, .45).scale(.15, .02, .06), m(.3, .3, .3)),
        [-1, 1].map(e => {
          h(c, n1.rotate(0, e > 0 ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), m(1, 1, .8)),
            h(
              i(f(n(15, 1), i(n(), o(0, 0, 1).scale(2, 2, .5))), n1.rotate(-90, 0).scale(.1, .05, .1), m(.3, .3, .3)),
              o(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          u(), h(n(20, 1), o(.3 * e, -.8).scale(.2, .7, .24), m(1, .3, .4));
        }),
        u(),
        h(n(6, 1).slice(0, -1), n1.scale(.77, 1, .77), m(1, .3, .5)),
        u(),
        h(
          w(28, 22, (e, a, t) => {
            let l = a / 22, r = e * G * 2 / 28, s = Z(l ** .6 * G / 2);
            return e = l * l * Z(e * G * .5) / 4,
              a > 21
                ? { x: t.A = 0, y: -.5, z: 0 }
                : { x: $(r) * s, y: $(l * G) - l - e, z: Z(r) * s + Z(e * G * 2) / 4 };
          }),
          n1.scale3d(.7),
          m(1, 1, 1),
        ),
        [-1, 1].map(e => h(w(10), o(.16 * e, .4, -.36).scale3d(.09)));
    });
});
