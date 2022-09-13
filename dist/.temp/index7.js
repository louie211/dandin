(() => {
  document.body.innerHTML +=
    "<canvas id=hC></canvas><h3>Souls:<b id=h3></b> / XIII</h3><h4 id=h4>loading</h4><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A special delivery of evil souls fell in an area under construction. Go, Dante, take them where they belong, to the eighth circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Delete progress</li><li id=b4></li></ul><p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 SalvatorePreviti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><b id=b5>☰</b><style>body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none;-webkit-user-select:none}body>*{position:absolute}.l #b5,.l h3{display:block;padding:10px}.l h3{bottom:0;right:5%;text-align:right}.m main,h4{right:0;top:0}h4{left:0;text-align:center}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:800px;min-width:50%;padding:1em}p{font-size:.7em}h2{color:#f61;margin:0 0 .7em}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}.m h4,h3,main{display:none}";
  let a = 0,
    at = !0,
    et = 0,
    lt = 0,
    rt = 0,
    D = 0,
    Q = 0,
    B = 0,
    L = 0,
    y = 0,
    st = 0,
    nt = 0,
    x = 0,
    ot = 0,
    ct = 0,
    O = .066,
    z = Math.PI / 180,
    N = new DOMMatrix(),
    w = (t, a) => a < t ? t : a,
    it = t => t < 0 ? -t : t,
    R = t => t < 0 ? 0 : 1 < t ? 1 : t,
    X = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
    ht = t => Math.atan2(Math.sin(t *= z), Math.cos(t)) / z,
    ft = (t, a, e) =>
      ((t *= z) + (2 * (a = (a * z - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / z,
    ut = (t, a, e, l) => {
      let r = a - t;
      return (t += Math.sign(a - t) * w(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * R(l / 7);
    },
    W = (t, e) => Array.from(Array(t), (t, a) => e(a)),
    mt = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
    d = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
    S = ({ x: t, y: a, z: e }, l) => Math.hypot(t - l.x, a - l.y, e - l.z) || 0,
    v = t => {
      let a = 0, e = 0, l = 0, r, s = t.at(-1);
      for (r of t) {
        a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
      }
      return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
    },
    n = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
    b = (t, a, e) => (t.D = e, t.A = a, t),
    I = (t, l, a = t.A) =>
      b(
        t.map(t =>
          ((
            { x: t, y: a, z: e },
          ) => ({ x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }), { x: t, y: a, z: e }))(t)
        ),
        a,
        t.D,
      ),
    o = (t, a, e) => t.map(t => I(t, a, e)),
    A = (e, l = 0) =>
      W(e, t => {
        let a = Math.cos(2 * Math.PI * t / e);
        return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
      }),
    r = (l, r, s) =>
      l.map((t, a, { length: e }) => b([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, s)),
    c = (
      t,
      a,
      e = 0,
      l,
    ) => (l = t.length ? t : A(t, l),
      t = I(l, N.translate(0, 1).scale3d(0 < e ? e : 1)),
      e = I(l, N.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
      [...r(e, t, a), e, t]),
    e = (
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
          let t = b([], 0, 1);
          n.push(t),
            t.push(s(e, a, t)),
            a && t.push(s((e + 1) % l, a, t)),
            r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
            t.push(s(e, a + 1 % r, t));
        }
      }
      return n;
    },
    Y = (l, r) => {
      let s, n, o, c = r.C;
      for (let t = 0; c.length > t; ++t) {
        if ((o = d(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
          n = [], o = [], c = r.C, t = r.B;
          let a = c.at(-1), e = d(l, a) - l.w;
          for (let t of c) {
            s = d(l, t) - l.w,
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
            m: 2 < n.length && { C: b(n, c.A, c.D), B: t, o: r },
            l: 2 < o.length && { C: b(o, c.A, c.D), B: t, o: r },
          };
        }
      }
      return { m: s, l: n };
    },
    F = (e, l, r = v(l.C)) => {
      if (e) {
        let { m: t, l: a } = Y(e, l);
        t || a || e.F.push(l), t && (e.m = F(e.m, t, r)), a && (e.l = F(e.l, a, r));
      } else e = { x: r.x, y: r.y, z: r.z, w: r.w, F: [l], m: 0, l: 0 };
      return e;
    },
    T = (a, r, s) => {
      let n = [],
        o = (t, a) => {
          let { m: e, l } = Y(t, a);
          e || l || (0 < s * d(t, r) ? e = a : l = a), e && (t.m ? o(t.m, e) : n.push(e)), l && t.l && o(t.l, l);
        };
      for (let t of r.F) o(a, t);
      return n;
    },
    j = (t, a) => t && (a(t), j(t.m, a), j(t.l, a)),
    k = t => t.length ? t.reduce((t, a) => F(t, { C: a, B: 0, o: 0 }), 0) : t,
    l = t => (j(t, a => {
      let t = a.l;
      a.l = a.m, a.m = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
      for (let t of a.F) t.B = !t.B;
    }),
      t),
    i = (...t) =>
      t.reduce((l, a) => {
        let r = [];
        if (l = k(l), a) {
          a = k(a), j(l, t => t.F = T(a, t, 1)), j(a, t => r.push([t, T(l, t, -1)]));
          for (let [a, e] of r) for (let t of e) F(l, t, a);
        }
        return l;
      }),
    h = (t, ...a) => l(i(l(k(t)), ...a)),
    f = t => {
      let e = new Map(),
        l = new Map(),
        r = a => {
          if (a.o) {
            let t = e.get(a.o);
            t ? (l.delete(t), a = r(a.o)) : e.set(a.o, a);
          }
          return a;
        };
      return j(t, a => {
        for (let t of a.F) l.set(r(t), t.B);
      }),
        Array.from(l, ([{ C: t }, a]) => {
          let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
          return b(a ? e.reverse() : e, t.A, t.D);
        });
    },
    u = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
    yt = [],
    m = (t, a) => {
      Nt.push(Nt.at(-1).multiply(t)), a(), Nt.pop();
    },
    xt = [],
    Mt = [],
    K = [],
    pt = [],
    C = [[]],
    H = new Map(),
    s = new Int32Array(7),
    zt = t => {
      let { x: a, y: e, z: l } = Ct[t], r = (Xt[0] = a, Xt[1] = e, Xt[2] = l, H.get(t = "" + (Ct.D ? Rt : s)));
      return void 0 !== r
        ? (a = 3 * r, K[a] = (K[a++] + s[4]) / 2, K[a] = (K[a++] + s[5]) / 2, K[a] = (K[a] + s[6]) / 2)
        : (H.set(t, r = H.size), Mt.push(a, e, l), K.push(s[4], s[5], s[6]), pt.push(s[3])),
        r;
    },
    M = (t, a = N, e) => C.at(-1).push(...o(t, Nt.at(-1).multiply(a), e)),
    gt = () => {
      let t = C.at(-1);
      for (Ct of t) {
        let { x: t, y: a, z: e } = v(Ct);
        s[3] = 0 | Ct.A, s[4] = 32767 * t, s[5] = 32767 * a, s[6] = 32767 * e;
        for (let t = 2, a = zt(0), e = zt(1); Ct.length > t; ++t) xt.push(a, e, e = zt(t));
      }
      return t.length = 0, { N: t = a, K: (a = xt.length) - t };
    },
    P = (
      t,
      a = 0,
    ) => (a = { ...Lt, o: Ot, G: [], J: Nt.at(-1), u: a },
      Nt.push(N),
      C.push([]),
      Ot.G.push(a),
      t = t(Ot = a) || gt(),
      yt[a.u] = a,
      t && t.K && (a.H = t),
      Ot = a.o,
      Nt.pop(),
      C.pop(),
      a),
    dt = (a, t = N) => {
      let e = a.h;
      a.o && !a.u && (a.u = a.o.u || 1), a.s = t.multiply(a.J), e && (t = e(a)) && (a.s = a.s.multiply(t));
      for (let t of a.G) dt(t, a.s);
    },
    E = { x: -11, y: 17, z: -90 },
    U = 0,
    J = 0,
    vt = t => Math.sin(t * Math.PI * 2),
    V = [],
    bt = () => {
      Z || !at ? Kt.disconnect() : Kt.connect(Wt.destination), b4.innerHTML = "Music: " + at;
    },
    wt = (t = !1) => {
      if (Z !== t) {
        Z = t, $ = 0;
        try {
          t ? document.exitPointerLock() : Kt.start();
        } catch {}
        document.body.className = t ? "l m" : "l", bt();
      }
    },
    G = (t, a, e) => t + (a - t) * R(1 - Math.exp(-e * O)),
    t = ({ j: t }) => t,
    q = [],
    It = [],
    At = () => {
      Q = It.reduce((t, a) => t + a.j, 0),
        h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][Q];
    },
    Pt = () => {
      At(), localStorage.DanteSP22 = JSON.stringify([q.map(t), It.map(t), L, D, ct]);
    },
    _ = { x: 0, y: 0, z: 0 },
    p = t => {
      m(t, () => {
        P(s => {
          let n = { j: 0, g: 0, i: 0, M: s }, o = q.push(n) - 1;
          s.h = () => {
            let t = n.j, a = n.g, e = n.i, l = (n.L = s.s).transformPoint(), r = S(l, E);
            return S(l, _) < 2.9 && V[5] && (a < .3 || .7 < a)
              && (n.j = t ? 0 : 1, o && !x && (h4.innerHTML = "* click *", B = D + 1), L = o, Pt()),
              n.g = G(a, t, 4),
              n.i = G(e, t, 1),
              s.I = 80 < S(l, E),
              s.v = r < 150,
              s.H = Et[.5 < a ? 1 : 0],
              N.rotate(60 * n.g - 30, 0).translateSelf(0, 1);
          };
        }),
          M(c(5), N.translate(-.2).rotate(90, 90).scale(.4, .1, .5), n(.4, .5, .5)),
          M(c(5), N.translate(.2).rotate(90, 90).scale(.4, .1, .5), n(.4, .5, .5)),
          M(c(u), N.translate(0, -.4).scale(.5, .1, .5), n(.5, .5, .4));
      });
    },
    g = (t, ...a) => {
      m(t, () => {
        let c = -1,
          i = 0,
          h = 1,
          f = 0,
          u = 0,
          m = 3,
          M = 0,
          p = 0,
          g = { j: 0 },
          d = a.map(([t, a, e]) => ({ x: t, z: a, w: e })),
          y = d[0],
          { x: v, z: b } = y,
          I = v,
          A = b;
        It.push(g),
          P(o => (o.h = () => {
            let t = 1, e = 1 / 0;
            for (l of d) {
              var a, l, r = l.w, s = Math.hypot(v - l.x, b - l.z), n = s - r;
              a ||= s < r, 0 < n && e > n && (e = n, y = l), t = (r = s / r) > t ? t : r;
            }
            if (!a) {
              e = y.x, r = y.w;
              let t = Math.hypot(s = v - e, n = b - (l = y.z)), a = Math.atan2(-n, s);
              h && (f = (Math.random() - .5) * Math.PI / 2, m = w(1, m / (1 + Math.random()))),
                a += f,
                c = -Math.cos(a),
                i = Math.sin(a),
                .1 < t && (t = (r > t ? t : r) / (t || 1), v = s * t + e, b = n * t + l);
            }
            return h = a,
              m = G(m, 3 + 6 * (1 - t), 3 + t),
              v = G(v, v + c, m),
              b = G(b, b + i, m),
              I = G(I, v, m),
              A = G(A, b, m),
              u = ft(u, Math.atan2(I - M, A - p) / z - 180, 3 * O),
              M = I,
              p = A,
              t = N.translate(I, 0, A).rotateSelf(0, u).skewXSelf(7 * Math.sin(2 * D)).skewYSelf(7 * Math.sin(1.4 * D)),
              a = o.s.multiply(t).transformPoint(),
              o.v = 1 - g.j,
              o.I = 100 < S(a, E),
              !g.j && S(a, _) < 1.5
              && (g.j = 1,
                a = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
                  "Andrzej Mazur<br>for the js13k competition",
                  "Donald Trump<br>lies",
                  "Kim Jong-un<br>Dictator, and liked pineapple on pizza",
                  "Maxime Euziere<br>forced me to finish this game",
                  "She traded NFTs monkeys",
                  ,
                  "Vladimir Putin<br>another war",
                  "He was NOT a good person",
                  ,
                  "Salvatore Previti<br>made this evil game<br><br>All \"good\", go back to the boat",
                ][Q] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                e = Q && Q < 12 ? 5 : 7,
                x || (h4.innerHTML = a, B = D + e),
                Pt()),
              t;
          },
            Jt)
          );
      });
    },
    St = () => {
      let r = 3,
        a = t =>
          N.translate(Math.sin(D + 2) / 5, Math.sin(.8 * D) / 3, t).rotateSelf(
            2 * Math.sin(D),
            Math.sin(.7 * D),
            Math.sin(.9 * D),
          ),
        l = f(
          h(
            o(c(u), N.translate(0, -8).scale(6, 15, 2.2)),
            o(c(u), N.translate(0, -14.1).scale(4, 13, 4)),
            o(c(20, 1), N.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
          ),
        ),
        e = f(
          h(
            o(c(20, 1, 1.15, 1), N.translate(0, -3).scale(3.5, 1, 3.5), n(.7, .4, .25, .7)),
            o(c(20, 1, 1.3, 1), N.translate(0, -2.5).scale(2.6, 1, 3), n(.7, .4, .25, .2)),
            o(c(u), N.translate(4, -1.2).scale3d(2), n(.7, .4, .25, .3)),
          ),
        ),
        s = (W(7, t => M(c(6, 1), N.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), n(.3, .3, .38))), gt());
      m(N.translate(-12, 4.2, -66), () => {
        P(t => {
          t.h = () => a(40 * ot),
            p(N.translate(0, -3, 4)),
            M(e),
            W(13, a => {
              m(N.translate(a % 4 * 1.2 - 1.7, -2, 1.7 * (a / 4 | 0) - 5.5 + it(a % 4 - 2)), () =>
                P(t => (t.h = () => {
                  if (t.I = 60 < Math.hypot(E.x + 11, E.y - 4, E.z + 27 - 40 * ot), t.v = Q > 12 - a) {
                    return N.translate(Math.sin(D + a) / 6, 0, Math.cos(D / 1.5 + a) / 6);
                  }
                },
                  Jt)
                ));
            });
        }, ++r);
      }),
        M(c(u), N.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), n(.8, .8, .8, .2)),
        g(N.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
        g(
          N.translate(0, 2.8),
          [5, 10, 3],
          [-5, 10, 3],
          ...A(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
        ),
        u.map(({ x: t, z: a }) => M(c(6), N.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), n(.6, .3, .3, .4))),
        [-23, 22].map(t => M(c(u), N.translate(0, 0, t).scale(3, 1, 8), n(.9, .9, .9, .2))),
        [-15, 15].map((t, e) => {
          M(c(u), N.translate(0, 6.3, t).scale(4, .3, 1), n(.3, .3, .3, .4)),
            M(c(u), N.translate(0, 1, t).scale(3, .2, .35), n(.3, .3, .38, .2)),
            m(N.translate(0, 0, t), () =>
              P(a => (a.h = () => {
                let t = q[e + 1].g;
                return a.v = t < .99, N.translate(0, 5 * -t);
              },
                s)
              ));
        }),
        W(5, a =>
          W(2, t =>
            M(
              Bt,
              N.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
              n(1, 1, .8, .2),
            ))),
        M(c(u), N.translate(3, 1.5, -20).scale(.5, 2, 5), n(.7, .7, .7, .2)),
        M(c(u), N.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), n(.75, .75, .75, .2)),
        M(c(5), N.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), n(.6, .3, .3, .4)),
        p(N.translate(-5.4, 1.5, -19).rotate(0, -90)),
        M(c(u), N.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), n(.8, .2, .2, .5)),
        M(f(
          h(
            i(
              o(c(6, 0, 0, .3), N.translate(8, -3, -4).scale(13, 1, 13), n(.7, .7, .7, .2)),
              o(c(6), N.translate(0, -8).scale(9, 8, 8), n(.4, .2, .5, .5)),
              o(c(6, 0, 0, .3), N.translate(0, -.92).scale(13, 2, 13), n(.8, .8, .8, .2)),
            ),
            o(c(5), N.scale(5, 30, 5), n(.4, .2, .6, .5)),
            o(c(5, 0, 1.5), N.translate(0, 1).scale(4.5, .3, 4.5), n(.7, .5, .9, .2)),
            o(c(u), N.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), n(.5, .5, .5, .5)),
            o(c(6), N.translate(15, -1.5, 4).scale(3.5, 1, 3.5), n(.5, .5, .5, .5)),
          ),
        )),
        P(t => {
          p(N.translate(0, 1.2)),
            t.h =
              () => (t.v = .01 < q[3].g,
                N.translate(0, (5 * Math.cos(1.5 * D) + 2) * q[3].i * (1 - q[2].g) + -15 * (1 - q[3].g), 0)),
            M(c(5), N.translate(0, -.2).scale(5, 1, 5), n(.6, .65, .7, .3));
        }, ++r),
        p(N.translate(15, -2, 4)),
        m(N.translate(0, 0, 75), () => {
          let l = () => {
              let t = q[2].i, a = 1 - q[4].i;
              return t < a ? t : a;
            },
            t = (a, e) =>
              P(t => {
                t.h = () => N.translate(l() * Math.sin(3 * a + D * a) * e),
                  u.map(({ x: t, z: a }) => {
                    M(c(11, 1), N.translate(4 * t, 4, 4 * a - 40).scale(.8, 3, .8), n(.5, .3, .7, .6)),
                      M(c(u), N.translate(4 * t, 7, 4 * a - 40).scale(1, .3), n(.5, .5, .5, .3));
                  }),
                  M(f(h(
                    o(c(u), N.translate(0, 0, -40).scale(5, 1, 5), n(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      o(c(u), N.translate(5 * t, .2, -40).rotate(0, 0, -30 * t).scale(4, 1, 2), n(.8, .8, .8, .3))
                    ),
                  ))),
                  M(c(u), N.translate(0, -3, -40).scale(8, 2, 8), n(.4, .4, .4, .3));
              }, ++r),
            a = (t(.7, 12),
              m(N.translate(0, 0, 20), () => t(1, 8.2)),
              P(t => {
                m(N.translate(0, 0, -30), () => {
                  t.h = () => N.translate(l() * Math.sin(D / 1.5 + 2) * 12),
                    M(f(
                      h(
                        i(
                          o(c(u), N.scale(1.5, 1, 5), n(.9, .9, .9, .2)),
                          o(c(6), N.scale(4, 1, 5), n(.9, .9, .9, .2)),
                          o(c(u), N.translate(0, -2).scale(2, 3.2, 1.9), n(.3, .8, .5, .5)),
                          o(c(16, 1, 0, 4), N.scale(1, 1, 1.5).rotate(0, 90), n(.9, .9, .9, .2)),
                        ),
                        o(c(u), N.scale(1.3, 10, 1.3), n(.2, .7, .4, .6)),
                      ),
                    )),
                    g(N.translate(0, 2.8), [0, 0, 4.5]);
                });
              }, ++r),
              P(t => {
                t.h = () => N.translate(9.8 * (1 - l())),
                  M(c(3), N.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), n(.3, .6, .6, .2)),
                  M(c(8), N.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), n(.8, .8, .8, .2)),
                  M(c(u), N.translate(-23, -3, -20).scale(5.2, 1.7, 3), n(.5, .5, .5, .3)),
                  M(c(u), N.translate(-23, -2.2, -13).scale(3, 1, 4), n(.5, .5, .5, .3)),
                  p(N.translate(-23, -.5, -8.5));
              }, ++r),
              M(c(u), N.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), n(.9, .9, .9, .2)),
              P(t => {
                t.h = () => N.translate(0, R(1 - 5 * l()) * X(q[4].g, q[5].g) * Math.sin(1.35 * D) * 4),
                  M(c(u), N.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), n(.7, .7, .7, .2)),
                  M(
                    f(h(o(c(u), N.scale(3, 1.4, 2.7)), o(c(u), N.scale(1.2, 8, 1.2)))),
                    N.translate(-33, -3, -20),
                    n(.7, .7, .7, .2),
                  );
              }, ++r),
              P(t => {
                t.h = () => N.translate(0, 0, R(1 - 5 * l()) * X(q[4].g, q[5].g) * Math.sin(.9 * D) * 8),
                  M(f(
                    h(
                      o(c(u), N.translate(-27, -3, -20).scale(3, 1.4, 2.7), n(.9, .9, .9, .2)),
                      o(c(u), N.translate(-27, -3, -20).scale(1, 3), n(.9, .9, .9, .2)),
                    ),
                  )),
                  M(c(u), N.translate(-39, -3, -20).scale(3, 1.4, 2.7), n(.9, .9, .9, .2));
              }, ++r),
              m(N.translate(-44.5, 0, -20), () =>
                P(t => {
                  t.h = () => N.translate(0, -6.5 * q[4].i),
                    M(c(6), N.rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), n(.7, .7, .7, .4));
                })),
              [...o(
                f(i(
                  o(c(u), N.translate(0, -3).scale(11, 1.4, 3), n(.9, .9, .9, .2)),
                  h(
                    o(c(6), N.rotate(0, 0, 90).scale(6, 8, 6), n(.3, .6, .6, .3)),
                    o(c(4, 0, .01), N.translate(0, 6).scale(12, 2, .75).rotate(0, 45), n(.3, .6, .6, .3)),
                    o(c(6), N.rotate(0, 0, 90).scale(5, 12, 5), n(.3, .6, .6, .3)),
                    ...[5, 0, -5].map(t =>
                      o(c(5), N.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), n(.3, .6, .6, .3))
                    ),
                  ),
                )),
                N,
              )]);
          M(a, N.translate(-53, 0, -20)),
            M(c(6), N.translate(-61.3, -2.4, -26).scale(3, 1, 5), n(.4, .6, .6, .3)),
            M(c(7), N.translate(-57, -2.6, -29).scale(4, 1, 4), n(.8, .8, .8, .3)),
            p(N.translate(-55, -1.1, -29).rotate(0, 90)),
            m(N.translate(-75, 0, -20), () =>
              P(t => {
                t.h = () => N.translate(0, (1 - q[5].i) * (1 - q[6].g) * 3).rotate(180 * (1 - q[5].i) + nt, 0), M(a);
              })),
            M(c(u), N.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), n(.7, .7, .7, .2)),
            M(c(3, 0, -.5), N.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), n(.8, .8, .8, .2)),
            g(N.translate(-100, .2, -20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            M(
              f(h(
                i(
                  o(c(u), N.translate(-100, -2.5, -20).scale(8, 1, 8), n(.8, .8, .8, .2)),
                  o(c(u), N.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), n(.8, .8, .8, .2)),
                  o(c(u), N.translate(-100, -2.6, -5).scale(3, 1.1, 7), n(.8, .8, .8, .2)),
                  o(c(u), N.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), n(.8, .8, .8, .2)),
                  o(c(6), N.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), n(.6, .6, .6, .3)),
                  o(c(u), N.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), n(.8, .8, .8, .2)),
                  o(c(u), N.translate(-100, .42, 17).scale(3, 1.1, 4.1), n(.8, .8, .8, .2)),
                ),
                o(c(8), N.translate(-100, -1, -20).scale(7, .9, 7), n(.3, .3, .3, .4)),
                o(c(8), N.translate(-100, -2, -20).scale(4, .3, 4), n(.4, .4, .4, .5)),
                o(c(8), N.translate(-100, -3, -20).scale(.6, 1, .6), n(.4, .4, .4, .5)),
              )),
              N,
            ),
            M(f(
              h(
                o(c(u), N.translate(-100, 1, -12).scale(7.5, 4), n(.5, .5, .5, .4)),
                o(c(u), N.translate(-100, 0, -5).scale(2, 2, 10), n(.5, .5, .5, .4)),
                o(c(20, 1), N.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), n(.5, .5, .5, .4)),
              ),
            )),
            g(N.translate(-89, .2, 5), [0, 0, 6]),
            m(N.translate(-99.7, -2, -11.5), () => P(t => (t.h = () => N.translate(0, 5.3 * -q[6].g), s))),
            u.map(({ x: a, z: e }) => {
              M(c(6), N.translate(7 * a - 100, -3, 7 * e - 20).scale(1, 8.1), n(.6, .15, .15, .8)),
                [4, -.4].map(t =>
                  M(c(6), N.translate(7 * a - 100, t, 7 * e - 20).scale(1.3, .5, 1.3), n(.4, .2, .2, .8))
                );
            }),
            W(7, t => {
              M(
                c((23 * t + 1) % 5 + 5, 0, .55),
                N.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, -30.1 - 2.8 * t).scaleSelf(
                  5 + t / 2,
                  1 + t / 6,
                  5 + t / 3,
                ),
                n(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
              );
            }),
            M(c(u), N.translate(-87, -9.5, -51).scale(7, 1, 3), n(.4, .5, .6, .4)),
            M(c(4), N.translate(-86, -9.2, -48).scale(5, 1, 5), n(.5, .6, .7, .3)),
            M(c(18, 1), N.translate(-86, -9, -44).scale(1.5, 1, 1.5), n(.3, .3, .4, .1)),
            p(N.translate(-86, -7.5, -44)),
            m(N.translate(-76.9, -10, -51), () => {
              P(t => {
                t.h = () => N.translate(0, 3.5 * (1 - w(q[6].g, q[7].g)) + X(q[7].i, q[6].i) * Math.sin(D) * 5),
                  [0, 12, 24].map(t => M(c(u), N.translate(t, t / -13).scale(2.8, 1.5, 3), n(.2, .5, .6, .2)));
              }, ++r),
                P(t => {
                  t.h = () => {
                    let t = X(q[7].i, q[6].i);
                    return N.translate(0, t * Math.sin(D + 3) * 6, 6 * Math.sin(.6 * D + t) * t);
                  }, [6, 18].map(t => M(c(u), N.translate(t, t / -13).scale(2.8, 1.5, 3), n(.1, .4, .5, .2)));
                }, ++r);
            }),
            m(N.translate(-38.9, -11.3, -58), () => {
              M(f(
                h(
                  i(
                    o(c(u), N.scale(11, 1, 13), n(.3, .4, .6, .3)),
                    o(c(5), N.translate(0, 0, -7).scale(2, 1.2, 2), n(.2, .4, .7, .3)),
                    o(c(5), N.scale(9, 1.2, 9), n(0, .2, .3, .5)),
                  ),
                  o(c(5), N.scale(5.4, 5, 5.4), n(0, .2, .3, .5)),
                ),
              )),
                p(N.translate(0, 1.7, -7)),
                P(t => {
                  t.h = () => N.translate(0, -7.3 * q[7].i),
                    g(N.translate(0, 11).rotate(0, 0, 10), ...A(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5])),
                    M(f(
                      h(
                        i(
                          o(c(5), N.translate(0, 2).scale(5, 7, 5).skewY(8), n(.2, .4, .5, .5)),
                          o(c(5), N.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), n(.25, .35, .5, .5)),
                          o(c(5), N.translate(0, 9).scale(.6, 7, .6).skewY(8), n(.35, .3, .5, .5)),
                        ),
                        o(c(5), N.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), n(.2, .4, .5, .5)),
                      ),
                    ));
                }),
                u.map(({ x: a, z: e }) => {
                  M(c(18, 1), N.translate(9 * a, 4, 11 * e).scale(1, 4), n(.25, .25, .25, 1)),
                    [1.5, 8].map(t =>
                      M(c(18, 1), N.translate(9 * a, t, 11 * e).scale(1.5, .5, 1.5), n(.6, .6, .6, .3))
                    );
                }),
                M(f(
                  h(
                    i(
                      o(c(6), N.translate(0, 0, -36).scale(15, 1.2, 15), n(.7, .7, .7, .3)),
                      o(c(u), N.translate(0, 0, -18).scale(4, 1.2, 6), n(.45, .4, .6, .3)),
                    ),
                    ...W(6, a =>
                      W(6, t =>
                        o(
                          c(6),
                          N.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          n(.7, .7, .7, .3),
                        ))).flat(),
                  ),
                )),
                g(N.translate(0, 2.9, -38), [0, 0, 12]);
            }),
            M(c(5), N.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), n(.8, .1, .25, .4)),
            p(N.translate(-84, -.5, 10).rotate(0, 45));
        }),
        m(N.translate(-123, 1.4, 55), () => {
          P(t => {
            t.h = () => a(-65 * ct), p(N.translate(0, -3, -4).rotate(0, 180)), M(e);
          }, ++r);
        }),
        m(N.translate(-123, 0, -12), () => {
          let a = f(
            h(
              o(c(u), N.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), n(.25, .25, .35, .3)),
              o(c(3), N.translate(0, 0, -5.5).scale(3, 2), n(.6, .3, .4, .3)),
              ...[-1.2, 1.2].map(t => o(c(u), N.translate(t, -.5, 1).scale(.14, .3, 6.5), n(.7, .2, 0, .3))),
            ),
          );
          M(c(u), N.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), n(.8, .8, .8, .2)),
            M(c(6), N.translate(7, -2.6, -4.5).scale(3.2, .8, 3), n(.6, .5, .7, .2)),
            p(N.translate(7, -1.4, -6).rotate(0, 180)),
            g(N.translate(8, .2), [0, 0, 3.5]),
            W(3, t => M(l, N.translate(12 * t + 14, -9), n(.6, .6, .6, .3))),
            W(3, t => M(l, N.translate(46, -9, -12 * t - 8).rotate(0, 90), n(.6, .6, .6, .3))),
            M(f(
              h(
                o(c(12), N.translate(46, -13.9).scale(4, 18.2, 4), n(.7, .7, .7, .2)),
                o(c(u), N.translate(44).scale(3.5, 2.2, 1.3), n(.4, .5, .6, .2)),
                o(c(u), N.translate(46, 0, -2).scale(1.5, 2.2, 2), n(.4, .5, .6, .2)),
                o(c(12), N.translate(46, 2.8).scale(3, 5, 3), n(.4, .5, .6, .2)),
              ),
            )),
            M(c(u), N.translate(7.5, -17).scale(.5, 15, 2.2), n(.6, .6, .6, .3)),
            M(c(u), N.translate(46, -17, -38.5).scale(2.2, 15, .5), n(.6, .6, .6, .3)),
            M(
              f(h(
                i(
                  o(c(u), N.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                  o(c(u), N.translate(26.5, -.6, 10).scale(17, 2, .5)),
                ),
                ...W(4, t => o(c(u), N.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                ...W(3, t => o(c(u), N.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
              )),
              N,
              n(.5, .5, .6, .2),
            ),
            M(c(5), N.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), n(.25, .25, .35, 1)),
            P(t => {
              t.h = () => {
                let t = Math.sin(1.1 * D);
                return N.translate.call(N, 0, -2, X(q[10].g, q[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
              }, W(2, t => M(a, N.translate(13 + 9 * t + (1 & t), 1.7)));
            }),
            P(t => {
              t.h = () => {
                let t = Math.sin(2.1 * D);
                return N.translate.call(N, 0, -2, X(q[10].g, q[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
              }, W(2, t => M(a, N.translate(13 + 9 * (t + 2) + (1 & t), 1.7)));
            }),
            P(t => {
              t.h = () => {
                let t = Math.sin(1.5 * D);
                return N.translate.call(
                  N,
                  0,
                  -2,
                  -8.5 * w((1 - q[10].g) * (1 - X(q[10].g, q[11].g)), X(q[10].g, q[11].g) * (t < 0 ? -t : t)) + 10,
                );
              }, W(3, t => M(a, N.translate(17 + 9 * t, 1.7)));
            }),
            M(c(u), N.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), n(.6, .6, .6, .3)),
            M(f(
              h(
                o(c(u), N.translate(30, -5.8, -28).scale(9, 1, 5), n(.8, .8, .8, .1)),
                o(c(9), N.translate(25, -5.8, -28).scale(3, 8, 3), n(.7, .7, .7, .2)),
              ),
            )),
            g(N.translate(30, -3, -28).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
            M(c(9), N.translate(25, -5.8, -28).scale(2.5, .9, 2.5), n(.5, .5, .5, .3)),
            p(N.translate(25, -4.4, -28).rotate(0, 90));
        }),
        m(N.translate(-100, .7, 115), () => {
          M(f(
            h(
              i(
                o(c(6, 0, 0, .6), N.translate(0, 0, -9.5).scale(8, 1, 11), n(.7, .7, .7, .2)),
                o(c(u), N.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), n(.7, .7, .7, .2)),
                o(c(u), N.translate(8.8, 0, -8).scale(3, 1, 3.3), n(.7, .7, .7, .2)),
              ),
              o(c(5), N.translate(0, 0, -2).scale(4, 3, 4), n(.7, .7, .7, .2)),
            ),
          )),
            W(4, e =>
              P(a => {
                a.h = () => {
                  a.v = q[1].j && q[2].j;
                  let t = X(q[8].i, q[12].i);
                  return N.translate(
                    2 < e ? 2 * (1 - t) + t : 0,
                    t * Math.sin(1.3 * D + 1.7 * e) * (3 + e / 3),
                    (1 & e ? -1 : 1) * (1 - q[8].i) * (1 - q[12].i) * -7
                      + (t < .05 ? .05 : t) * Math.cos(1.3 * D + 7 * e) * (4 - 2 * (1 - e / 3)),
                  );
                },
                  M(
                    c(6),
                    N.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
                    n(.5 - e / 8, e / 12 + .5, .7, .3),
                  );
              }, ++r)),
            m(N.translate(-39.7, -2.5, -21.5), () => {
              P(a => {
                a.h = () => {
                  a.v = q[1].j && q[2].j;
                  let t = X(q[8].i, q[12].i);
                  return N.translate(2.5 * (1 - t), -3 * (1 - q[8].g) + t * Math.sin(.8 * D) * -1).rotateSelf(
                    Math.cos(1.3 * D) * (3 * t + 3),
                    0,
                  );
                },
                  M(f(
                    h(o(c(10), N.scale(6, 2, 6), n(.1, .6, .5, .3)), o(c(10), N.scale(3.3, 6, 3.3), n(.1, .6, .5, .5))),
                  )),
                  m(N.translate(-7.5).rotate(0, 90), () => {
                    M(c(15), N.scale(3, 2.3, 3), n(.4, .4, .4, .3)),
                      M(c(10), N.scale(2, 2.5, 2), n(.3, .8, .7, .3)),
                      M(c(5), N.scale(1, 3), n(.5, .5, .5, .5)),
                      p(N.translate(0, 3.4).rotate(0, 180));
                  }),
                  g(N.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
                  [-1, 1].map(t =>
                    M(
                      Bt,
                      N.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                      n(1, 1, .8, .2),
                    )
                  );
              }, ++r);
            }),
            [-1, 1].map(a => {
              M(c(15, 1), N.translate(-7.5 * a, 3, -19).scale(.8, 4, .8), n(.6, .24, .2, .5)),
                [7.2, 1.5].map(t => M(c(15, 1), N.translate(-7.5 * a, t, -19).scale(1.1, .5, 1.1), n(.5, .24, .2, .4))),
                M(Bt, N.translate(-5 * a, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), n(1, 1, .8)),
                M(
                  f(h(
                    o(c(u), N.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), n(.5, .5, .5, .4)),
                    o(c(u), N.scale(3, 3, 10), n(.6, .24, .2, .5)),
                    o(c(30, 1), N.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), n(.6, .24, .2, .5)),
                    o(c(5), N.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), n(.6, .24, .2, .5)),
                    o(c(5), N.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), n(.6, .24, .2, .5)),
                  )),
                  N.translate(a, 0, -18),
                );
            }),
            P(t => (t.h = () => N.translate(0, -.1 - 6 * q[12].g, -18.5).scale(.88, 1.2), s));
          let a = [
            ...o(c(28, 1), N.scale(8, 1, 8), n(.45, .45, .45, .2)),
            ...o(c(5), N.translate(0, 1).scale(1, .2), n(.3, .3, .3, .2)),
          ];
          m(N.translate(20, .3, -9), () => {
            P(t => {
              t.h = () => N.rotate(0, 40 + y),
                M(f(
                  h(
                    o(c(28, 1), N.scale(8, 1, 8), n(.45, .45, .45, .2)),
                    o(c(u), N.translate(0, 0, -5.5).scale(1.5, 3, 2.5), n(.45, .45, .45, .2)),
                  ),
                )),
                M(c(8), N.translate(0, 2).scale(3, 1.5, 3), n(.7, .7, .7, .1)),
                M(c(5), N.translate(0, 2).scale(1, 2), n(.3, .3, .3, .2)),
                g(N.translate(0, 3), ...A(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
            }, ++r);
          }),
            m(N.translate(36, .3, -9), () => {
              M(c(u), N.translate(8).scale(.7, .8, 2.5), n(.7, .7, .7, .2)),
                P(t => {
                  t.h = () => N.rotate(0, st),
                    M(f(
                      h(
                        o(c(28, 1), N.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3)),
                        o(c(u), N.scale(9, 5, 2), n(.3, 0, 0, .3)),
                      ),
                    )),
                    M(a),
                    [-1, 1].map(t =>
                      M(
                        Bt,
                        N.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                        n(1, 1, .8),
                      )
                    );
                }, ++r);
            }),
            m(N.translate(52, .3, -9), () => {
              M(c(u), N.translate(0, 0, -8).scale(2.5, .8, .7), n(.7, .7, .7, .2)),
                P(t => {
                  t.h = () => N.rotate(0, 180 - st),
                    M(f(
                      h(
                        o(c(30, 1), N.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3)),
                        o(c(u), N.translate(7).scale(9, 5, 2), n(.3, 0, 0, .3)),
                        o(c(u), N.translate(0, 0, 7).scale(2, 5, 9), n(.3, 0, 0, .3)),
                      ),
                    )),
                    M(a);
                }, ++r);
            }),
            m(N.translate(52, .3, -25), () => {
              P(t => {
                t.h = () => N.rotate(0, 270 + st),
                  M(f(
                    h(
                      o(c(30, 1), N.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3)),
                      o(c(u), N.translate(7).scale(9, 5, 2), n(.3, 0, 0, .3)),
                      o(c(u), N.translate(0, 0, -7).scale(2, 5, 9), n(.3, 0, 0, .3)),
                    ),
                  )),
                  M(a);
              }, ++r);
            }),
            M(c(u), N.translate(61, -.3, -25).scale(2, 1, 2), n(.7, .7, .7, .3)),
            M(c(u), N.translate(68, -.3, -25).scale(5, 1, 3), n(.7, .7, .7, .3)),
            p(N.translate(66, 2, -19).rotate(-12, 0)),
            M(c(5), N.translate(66, -.5, -19).scale(3, 2, 4).rotate(-20, 0), n(.2, .5, .5, .6)),
            [n(.1, .55, .45, .2), n(.2, .5, .5, .3), n(.3, .45, .55, .4)].map((a, e) =>
              P(t => {
                t.h = () =>
                  N.translate(
                    0,
                    (1 - q[13].i) * (1 - q[14].i) * 3 + X(q[13].i, q[14].i) * Math.sin(1.5 * D + 1.5 * e) * 4,
                  ),
                  M(
                    c(u),
                    N.translate(76.5, e / 2 - 2.1, 7.5 * (1 - e / 30) * e - 25).scale(3.3, 3 - e / 2, 3.45 - e / 5),
                    a,
                  );
              }, ++r)
            ),
            m(N.translate(100, .2, -20), () => {
              M(c(u), N.translate(-9.7, -.2, 8.9).scale(10, 1, 2.5), n(.6, .6, .6, .2)),
                M(f(
                  h(
                    o(c(6, 0, 0, .3), N.translate(0, -.92).scale(14, 2, 14), n(.8, .8, .8, .2)),
                    o(c(5), N.scale3d(6), n(.3, .3, .3, .5)),
                  ),
                )),
                [8, -6.1].map((a, e) =>
                  W(3, t =>
                    M(
                      l,
                      N.translate(6 * t - 6, a - (1 & t), 16 - .2 * (1 & t) - e),
                      1 & t ? n(.5, .5, .5, .3) : n(.35, .35, .35, .5),
                    ))
                ),
                [-1, 1].map(t =>
                  M(Bt, N.translate(-8 * t, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), n(1, 1, .8))
                ),
                M(c(5), N.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), n(.5, .3, .3, .4)),
                p(N.translate(0, 1.7, -13).rotate(0, 180)),
                g(N.translate(0, 3), ...A(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
                M(f(
                  h(
                    i(
                      o(c(u), N.translate(0, 16, 15.5).scale(12, 1, 3), n(.5, .3, .3, .4)),
                      o(c(u), N.translate(0, 16, 16).scale(3, 1, 3.8), n(.5, .3, .3, .4)),
                    ),
                    o(c(5), N.translate(0, 16, 8.5).scale(5.5, 5, 5.5), n(.5, .3, .3, .4)),
                  ),
                )),
                P(t => {
                  t.h = () => {
                    let t = Math.sin(D);
                    return N.translate(-2 * t).rotate(0, 0, 25 * t);
                  },
                    M(c(3), N.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), n(.5, .3, .3, .4)),
                    [22, 30].map(t => {
                      M(c(6), N.translate(0, 16, t).scale(3, 1, 2.3).rotate(0, 90), n(.7, .7, .7, .4)),
                        M(c(u), N.translate(0, 6.2, t).scale(.5, 11, .5), n(.5, .3, .3, .4));
                    });
                }, ++r),
                M(c(6), N.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), n(.5, .6, .7, .3)),
                M(c(u), N.translate(0, 16, 34).scale(1.5, 1, 2), n(.5, .6, .7, .3)),
                M(c(7), N.translate(0, 16.2, 38).scale(5, 1, 5), n(.4, .5, .6, .4)),
                P(t => {
                  t.h = () => {
                    let t = X((q[14].g + q[14].i) / 2, q[13].i);
                    return t = X(t, (q[15].g + q[15].i) / 2), N.translate(0, 16 * t, 8.5 * R(2 * t - 1));
                  },
                    M(c(5), N.scale(5, 1.1, 5), n(.5, .3, .3, .4)),
                    M(c(5), N.scale(5.5, .9, 5.5), n(.25, .25, .25, .4)),
                    p(N.translate(0, 1.5, -1).rotate(0, 180));
                }, ++r),
                g(N.translate(0, 19, 39), [0, 0, 3.5]);
            });
        });
    },
    Yt = (t, a, e, l) => {
      let r = 0,
        s = 0,
        n = 0,
        o = 1 / 0,
        c = -1 / 0,
        i = 1 / 0,
        h = -1 / 0,
        f = 1 / 0,
        u = -1 / 0,
        m = 1.1 * (e - a),
        y = new DOMMatrix(mt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
      return t = W(
        8,
        t => (t = y.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
          r -= t.x = (m * t.x | 0) / m / t.w,
          s -= t.y = (m * t.y | 0) / m / t.w,
          n -= t.z = (m * t.z | 0) / m / t.w,
          t),
      ),
        a = N.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
        I(t, a).map(({ x: t, y: a, z: e }) => {
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
          .multiplySelf(a).toFloat32Array();
    },
    Ft = (t, a = 35633) => (a = tt.c6x(a), tt.s3c(a, t), tt.c6a(a), a),
    Tt = (t, a) => {
      let e = {}, l = tt.c1h();
      return tt.abz(l, t), tt.abz(l, Ft(a, 35632)), tt.l8l(l), t => t ? e[t] || (e[t] = tt.gan(l, t)) : tt.u7y(l);
    },
    jt = (r, s, n, o) => {
      let c = t => tt.d97(4, t.K, 5123, 2 * t.N),
        i = t => {
          let a = t.u, e = t.H, l = t.G;
          if (!(!s && 2 === t.u || n && t.I) && t.v) {
            for (let t of l) i(t);
            e && (o && tt.ube(o, a / 255), tt.uae(r, !1, t.s.toFloat32Array()), c(e));
          }
        };
      Z
        ? (tt.uae(r, !1, N.rotate(0, 40 * Math.sin(rt) - 70).toFloat32Array()), c(Ut.H), Dt.map(t => t.H).map(c))
        : i(Lt);
    },
    kt = new Int32Array(10725888),
    Ct,
    Z,
    $,
    Ht,
    Dt,
    Qt = "data:image/svg+xml;base64,"
      + btoa(
        "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
      ),
    Bt = (() => {
      let a = W(
          11,
          t => N.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
        ),
        e = A(18);
      return W(10, t => r(I(e, a[t]).reverse(), I(e, a[t + 1]), 1)).flat();
    })(),
    Lt = { G: [], J: N, s: N, u: 1, v: 1, I: 0 },
    Ot = Lt,
    Nt = [N],
    Rt = new Int32Array(s.buffer, 0, 4),
    Xt = new Float32Array(s.buffer),
    Wt = new AudioContext(),
    Kt = Wt.createBufferSource(),
    Et = (M([u.slice(1)], N.translate(-2).scale3d(3).rotate(90, 0)),
      gt(),
      [n(1, .5, .2), n(.7, 1, .2)].map(
        t => (M(c(6, 1), N.scale(.13, 1.4, .13), n(.3, .3, .5)),
          M(c(8), N.translate(0, 1).scale(.21, .3, .21), t),
          M(c(3), N.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), n(.2, .2, .2)),
          gt()),
      )),
    Ut = P(() => {
      Dt = [-1, 1].map(t =>
        P(() => {
          M(c(10, 1), N.translate(.3 * t, -.8).scale(.2, .7, .24), n(1, .3, .4));
        })
      ),
        [0, 180].map(t => M(Bt, N.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), n(1, 1, .8))),
        M(e(20), N.translate(0, 1).scale(.5, .5, .5), n(1, .3, .4));
      let a = o(
        f(h(c(15, 1), o(c(u), N.translate(0, 0, 1).scale(2, 2, .5)))),
        N.rotate(-90, 0).scale(.1, .05, .1),
        n(.3, .3, .3),
      );
      [-1, 1].map(t => M(a, N.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
        M(c(u), N.translate(0, .9, .45).scale(.15, .02, .06), n(.3, .3, .3)),
        M(e(20), N.scale(.7, .8, .55), n(1, .3, .4));
    }, 2),
    Jt = (M(
      e(40, 30, (t, a, e) => {
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
      N.scale3d(.7),
      n(1, 1, 1),
    ),
      [-1, 1].map(t => M(e(15), N.translate(.16 * t, .4, -.36).scale3d(.09))),
      gt()),
    tt = hC.getContext("webgl2");
  for (let t in tt) tt[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = tt[t];
  setTimeout(() => {
    let a = 0,
      t = 6,
      e = () => {
        if (h4.innerHTML += ".", !--t) {
          let h = 0,
            f = 0,
            u = 1,
            m = 0,
            M = 0,
            p = 0,
            g = !1,
            d = { x: 0, y: 0, z: 0 },
            v = new Int32Array(256),
            e = () => {
              let { L: t, M: a } = q[L], { x: e, y: l, z: r } = t.transformPoint({ x: 0, y: 8, z: -3 });
              _.x = d.x = e,
                _.y = d.y = T = l,
                _.z = d.z = r,
                A =
                  F =
                  Y =
                  P =
                  S =
                    0,
                u = 1,
                h = f = a.u || 1;
            },
            l = t => {
              requestAnimationFrame(l);
              let a = (t - (Ht || t)) / 1e3;
              O = Z ? V[5] = 0 : .066 < a ? .066 : a,
                D += O,
                rt += a,
                Ht = t,
                0 < O && (tt.b6o(36160, k),
                  tt.r9r(0, 0, 128, 128, 6408, 5121, b),
                  tt.iay(36160, [36064]),
                  (() => {
                    let a = 0,
                      e = 0,
                      t = ((() => {
                        let s = 0, n = 0, a = 0, e = 0, o = 0;
                        v.fill(0);
                        for (let t = 0; t < 31; ++t) {
                          let l = 0, r = 512 * t;
                          for (let e = 0; e < 128; e++) {
                            let t = r + 4 * e, a = (b[t] + b[1 + t]) / 255;
                            t = b[2 + t],
                              14 < e && e < 114 && (l += a),
                              t && a && (a = v[t] + 1, v[t] = a, s > a || (s = a, n = t));
                          }
                          l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), o = 1);
                        }
                        n && (o = 1),
                          u ? n && (u = 0, f = n) : f = n || h,
                          h = n,
                          A = o,
                          P = G(P, o ? 6.5 : 8, 4),
                          d.y += a / 41 - (o ? 1 : P) * e / 41 * P * O;
                      })(),
                        (() => {
                          for (let t = 32; t < 128; t += 2) {
                            let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                            for (let s = t >> 1 & 1; s < 128; s += 2) {
                              let t = h + 4 * s,
                                a = h + 4 * (127 - s),
                                e = b[t] / 255,
                                l = b[1 + a] / 255,
                                r = s / 63.5 - 1;
                              r = 1 - (r < 0 ? -r : r),
                                10 < s && s < 118
                                && (n = w(n, w(e * r, e * b[a] / 127.5)), o = w(o, w(l * r, l * b[1 + t] / 255))),
                                (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < e ? e : l) / 3)
                                && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                            }
                            c = i - c,
                              n = o - n,
                              (c < 0 ? -c : c) > (a < 0 ? -a : a) && (a = c),
                              (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                          }
                        })(),
                        (V[0] ? 1 : 0) + (V[2] ? -1 : 0) + et),
                      l = (V[1] ? 1 : 0) + (V[3] ? -1 : 0) + lt,
                      r = navigator.getGamepads()[0];
                    if (r) {
                      var n, s = t => a[t]?.pressed || 0 < a[t]?.value;
                      let a = r.buttons;
                      r = r.axes,
                        n = s(1) || s(3) || s(2) || s(0),
                        n !== g && (g = n) && (V[5] = 1),
                        t += (.2 < it(-r[0]) ? -r[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                        l += (.2 < it(-r[1]) ? -r[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                        $ && (.3 < it(r[2]) && (J += 80 * r[2] * O), .3 < it(r[3]) && (U += 80 * r[3] * O));
                    }
                    (l < 0 ? -l : l) < .05 && (l = 0),
                      (t < 0 ? -t : t) < .05 && (t = 0),
                      s = Math.atan2(l, t),
                      r = R(Math.hypot(l, t)),
                      t = r * Math.cos(s),
                      l = r * Math.sin(s);
                    let o = R(1 - 5 * w(a < 0 ? -a : a, e < 0 ? -e : e)),
                      y =
                        (f || (a += Y * o * O, e += F * o * O),
                          Y = G(Y, 0, A ? 8 : 4),
                          F = G(F, 0, A ? 8 : 4),
                          S = G(S, A ? (t || l ? A ? 7 : 4 : 0) * o : 0, A ? .1 < o ? 10 : t || l ? 5 : 7 : 1),
                          o = Math.sin(n = $ ? J * z : Math.PI) * S * O,
                          Math.cos(n) * S * O);
                    if (
                      a -= t * y - l * o,
                        e -= t * o + l * y,
                        (o = (n = yt[f]?.s || N).inverse()).m41 = 0,
                        o.m42 = 0,
                        o.m43 = 0,
                        { x: a, z: e } = o.transformPoint({ x: a, z: e, w: 0 }),
                        d.x += a,
                        d.z += e,
                        f !== I
                    ) {
                      I = f;
                      let { x: t, y: a, z: e } = n.inverse().transformPoint(_);
                      d.x = t, d.y = a, d.z = e;
                    }
                    o = _.x, y = _.z;
                    let { x: c, y: i, z: x } = n.transformPoint(d);
                    _.x = c,
                      _.y = i,
                      _.z = x,
                      n = it(T - i),
                      T = G(T, i + .1, 50 * n + 5),
                      f && (Y = (_.x - o) / O, F = (_.z - y) / O),
                      (t || l) && (m = 90 - s / z),
                      M = ft(M, m, 8 * O),
                      p += (r - p) * R(10 * O);
                  })(),
                  dt(Lt)),
                0 < O && (r = ut(r, _.x, .5, O),
                  s = ut(s, _.y, 2, O),
                  n = ut(n, _.z, .5, O),
                  $
                    ? (E.x = G(E.x, _.x, 18 + (t = 200 * u)),
                      E.y = G(E.y, _.y + 1.5, 15 + t),
                      E.z = G(E.z, _.z, 18 + t),
                      U = w(U < 87 ? U : 87, -87))
                    : (E.x = ut(E.x, r, 1, 2 * O),
                      E.y = ut(E.y, s + 13 + 15 * u, 4, 2 * O),
                      E.z = ut(E.z, n + -18, 1, 2 * O),
                      1 < ((t = E.z - n) < 0 ? -t : t)
                      && (a = E.x - r,
                        J = 270 + Math.atan2(t, a) / z,
                        U = 90 - Math.atan2(Math.hypot(t, a), E.y - s) / z)),
                  J = ht(J),
                  0 < O
                  && (t = X(q[12].g, q[13].g),
                    D > B && (h4.innerHTML = "", B = 0),
                    a = G(nt, 0, 1),
                    nt = a + (ht(nt + 60 * O) - a) * R(q[5].g - q[6].i),
                    a = G(y, 0, 5),
                    y = a + (ht(y + 56 * O) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                    a = G(st, 0, 4),
                    st = a + (ht(st + 48 * O) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                    ct = G(ct, q[9].i, .2 + .3 * ((t = 2 * q[9].i - 1) < 0 ? -t : t)),
                    ot = G(ot, x ? ot + (-9 - ot) * R(1.5 * O) : R(D / 3), 1),
                    1 === q[0].j && .8 < q[0].g && (Q < 13
                      ? (q[0].j = 0, x || (h4.innerHTML = "Not leaving now, there are souls to catch!", B = D + 3))
                      : x
                        || (x
                          || (h4.innerHTML = "Well done Dante! All souls will be punished.<br>Thanks for playing.",
                            B = D + 1 / 0),
                          x = 1)),
                    V[5] = 0,
                    (_.x < -25 || _.z < 109 ? -25 : -9) > _.y && e())),
                t = Z
                  ? N.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + R(hC.clientWidth / 1e3))
                  : N.rotate(-U, -J, -0).invertSelf().translateSelf(-E.x, -E.y, -E.z),
                0 < O
                && (i(),
                  tt.b6o(36160, k),
                  tt.v5y(0, 0, 128, 128),
                  tt.cbf(!0, !1, !0, !1),
                  tt.c4s(16640),
                  tt.uae(
                    i("b"),
                    !1,
                    N.rotate(0, 180).invertSelf().translateSelf(-_.x, -_.y, .3 - _.z).toFloat32Array(),
                  ),
                  jt(i("c"), 0, 1, i("i")),
                  tt.cbf(!1, !0, !1, !1),
                  tt.c4s(16640),
                  tt.cbf(!1, !0, !0, !1),
                  tt.uae(i("b"), !1, N.translate(-_.x, -_.y, -_.z - .3).toFloat32Array()),
                  jt(i("c"), 0, 1, i("i")),
                  tt.cbf(!0, !0, !0, !0),
                  1 === f && (q[9].j = _.x < -15 && _.z < 0 ? 1 : 0)),
                o(),
                tt.v5y(0, 0, 2048, 2048),
                C[0](Yt(t, .3, 55, 10)),
                C[1](Yt(t, 55, 177, 11)),
                tt.b6o(36160, null),
                j(),
                tt.v5y(0, 0, tt.drawingBufferWidth, tt.drawingBufferHeight),
                tt.c4s(16640),
                tt.uae(j("a"), !1, mt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
                tt.uae(j("b"), !1, t.toFloat32Array()),
                tt.ubu(j("j"), E.x, E.y, E.z),
                C[0](),
                C[1](),
                jt(j("c"), !$),
                c(),
                tt.ubu(c("c"), tt.drawingBufferWidth, tt.drawingBufferHeight, rt),
                Z ? tt.ubu(c("j"), 0, 0, 0) : tt.ubu(c("j"), E.x, E.y, E.z),
                tt.uae(c("b"), !1, t.inverse().toFloat32Array()),
                tt.d97(4, 3, 5123, 0);
            },
            b = new Uint8Array(65536),
            I,
            A,
            P,
            S,
            Y,
            F,
            T,
            r,
            s,
            n,
            t = Ft(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 n,l,m,k;uniform mat4 a,b,c;void main(){k=d,m=f,l=c*f,gl_Position=a*b*l,n=c*vec4(e,0);}`),
            o = Tt(
              Ft(`#version 300 es
in vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}`),
              `#version 300 es
void main(){}`,
            ),
            c = Tt(
              Ft(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
              `#version 300 es
precision highp float;uniform vec3 c,j;uniform mat4 b;uniform highp sampler2D d;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/c.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(c.x/c.y),-t.y,sqrt(3.),0.))).xyz;float i=(-32.-j.y)/e.y,o=1.-clamp(abs(i/1e4),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(c.z/30.),i=sin(c.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(d,e.xy).z,texture(d,e.yz*2.).z),t.zx)*t.y);}else e=j+e*i,O.x=(o*=.9-texture(d,e.xz/150.+vec2(sin(e.z/35.+c.z),cos(e.x/25.+c.z))/80.).y),O.y=o*o*o;}}`,
            ),
            i = Tt(
              t,
              `#version 300 es
precision highp float;in vec4 n,l;uniform mat4 b;uniform float i;out vec4 O;void main(){vec4 o=b*l;float a=i>0.?1.-min(abs(o.z/o.w),1.):0.;O=vec4(vec2(a*(gl_FragCoord.y>31.?1.:abs(n.y))),a>0.?i:0.,1);}`,
            ),
            j = Tt(
              t,
              `#version 300 es
precision highp float;in vec4 n,l,m,k;uniform vec3 j;uniform mat4 b,i,w;uniform highp sampler2DShadow g,h;uniform highp sampler2D d;out vec4 O;void main(){vec3 e=normalize(n.xyz),x=k.w*(texture(d,m.yz*.035)*e.x+texture(d,m.xz*.035)*e.y+texture(d,m.xy*.035)*e.z).xyz;e=normalize(e+x*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),o=1.,c=abs((b*l).z);vec4 r=(c<55.?i:w)*l;if(r=r/r.w*.5+.5,r.z<1.){o=0.;for(float e=-1.;e<=1.;++e)for(float t=-1.;t<=1.;++t){vec3 a=vec3(r.xy+vec2(e,t)/2048.,r.z-.00017439);o+=c<55.?texture(g,a):texture(h,a);}o/=9.;}vec3 t=k.xyz*(1.-x.x);O=vec4(vec3(.09,.05,.1)*t+t*(max(0.,a)*.5+t*a*a*vec3(.5,.45,.3))*(o*.7+.3)+t*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-l.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(l.xyz-j),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*o,1);}`,
            ),
            k =
              (c(),
                tt.ubh(c("d"), 3),
                i(),
                tt.uae(i("a"), !1, mt(1.4, .59, 1e-4, 1)),
                j(),
                tt.ubh(j("d"), 3),
                tt.c5w()),
            a = (t = tt.c3z(), tt.c25()),
            C = W(2, t => {
              let a, e = tt.c25(), l = tt.c5w(), r = j(t ? "w" : "i");
              return j(),
                tt.ubh(j(t ? "h" : "g"), t),
                tt.b6o(36160, l),
                tt.d45([0]),
                tt.r9l(0),
                tt.a4v(33984 + t),
                tt.b9j(3553, e),
                tt.fas(36160, 36096, 3553, e, 0),
                tt.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                tt.t2z(3553, 10241, 9729),
                tt.t2z(3553, 10240, 9729),
                tt.t2z(3553, 34893, 515),
                tt.t2z(3553, 34892, 34894),
                tt.t2z(3553, 10243, 33071),
                tt.t2z(3553, 10242, 33071),
                t => {
                  t
                    ? (a = t,
                      tt.b6o(36160, l),
                      tt.iay(36160, [36096]),
                      tt.c4s(256),
                      tt.uae(o("b"), !1, a),
                      jt(o("c"), !$, 1))
                    : tt.uae(r, !1, a);
                };
            });
          tt.b11(34963, tt.c1b()),
            tt.b2v(34963, new Uint16Array(xt), 35044),
            tt.b11(34962, tt.c1b()),
            tt.b2v(34962, new Float32Array(Mt), 35044),
            tt.v7s(0, 3, 5126, !1, 0, 0),
            tt.b11(34962, tt.c1b()),
            tt.b2v(34962, new Int16Array(K), 35044),
            tt.v7s(1, 3, 5122, !0, 0, 0),
            tt.b11(34962, tt.c1b()),
            tt.b2v(34962, new Uint32Array(pt), 35044),
            tt.v7s(2, 4, 5121, !0, 0, 0),
            tt.e3x(0),
            tt.e3x(1),
            tt.e3x(2),
            tt.e8z(2929),
            tt.e8z(2884),
            tt.c70(1),
            tt.c7a(1029),
            tt.d4n(515),
            tt.c5t(0, 0, 0, 1),
            tt.b6o(36160, k),
            tt.bb1(36161, t),
            tt.r4v(36161, 33189, 128, 128),
            tt.f8w(36160, 36096, 36161, t),
            tt.a4v(33987),
            tt.b9j(3553, a),
            tt.fas(36160, 36064, 3553, a, 0),
            tt.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
            tt.b9j(3553, tt.c25()),
            tt.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, H),
            tt.gbn(3553),
            tt.t2z(3553, 10241, 9987),
            tt.t2z(3553, 10240, 9729),
            Ut.h = () => N.translate(_.x, T, _.z).rotateSelf(0, M),
            Dt.map((t, a) => {
              t.h = () =>
                N.translate(0, p * R(.45 * Math.sin(9.1 * D + Math.PI * a - Math.PI / 2))).rotateSelf(
                  p * Math.sin(9.1 * D + Math.PI * a) * .25 / z,
                  0,
                );
            });
          try {
            let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
            q.map((t, a) => t.g = t.i = t.j = a ? 0 | e[a] : 0), It.map((t, a) => t.j = 0 | l[a]), L = t, D = a, ct = r;
          } catch {}
          ot = L < 0 ? 0 : 1 < L ? 1 : L,
            h4.innerHTML = "",
            B = 0,
            At(),
            dt(Lt),
            (() => {
              let r = 0,
                s = 0,
                e = 0,
                t = () => {
                  hC.width = innerWidth,
                    hC.height = innerHeight,
                    n = o = void 0,
                    V.length = et = lt = 0,
                    document.hidden && wt(!0);
                },
                n,
                o,
                c;
              b1.onclick = () => wt(),
                b2.onclick = () => {
                  wt(), $ = 1;
                },
                b3.onclick = () => {
                  confirm("Delete game progress?") && (localStorage.DanteSP22 = "", location.reload());
                },
                b4.onclick = () => {
                  at = !at, bt();
                },
                b5.onclick = () => wt(!0),
                onclick = () => {
                  if (c = 1, !Z) {
                    let t = rt - e;
                    (!e || .07 < t && t < .8) && (V[5] = !0), $ && hC.requestPointerLock();
                  }
                },
                document.onvisibilitychange = onresize = onblur = t,
                onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                  l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && Z)
                    ? Z && !c || wt(!Z)
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
                    ? a && (V[t] = 1)
                    : V[t] = a);
                },
                onmousemove = ({ movementX: t, movementY: a }) => {
                  $ && (t || a) && (J += .1 * t, U += .1 * a);
                },
                hC.ontouchstart = a => {
                  if (!Z) {
                    for (let t of a.changedTouches) $ && t.pageX > hC.clientWidth / 2 ? (n = t, r = J, s = U) : o = t;
                    e = rt;
                  }
                },
                hC.ontouchmove = ({ changedTouches: l }) => {
                  if (!Z) {
                    for (let { pageX: t, pageY: a, identifier: e } of l) {
                      n?.identifier === e && (J = r + (t - n.pageX) / 3, U = s + (a - n.pageY) / 3),
                        o?.identifier === e && (et = -(t - o.pageX) / 20, lt = -(a - o.pageY) / 20);
                    }
                  }
                },
                hC.ontouchend = a => {
                  for (let t of a.changedTouches) {
                    t.identifier === n?.identifier && (n = void 0),
                      t.identifier === o?.identifier && (o = void 0, lt = et = 0);
                  }
                },
                oncontextmenu = () => !1,
                t(),
                wt(!0);
            })(),
            e(),
            E.x = r = _.x,
            E.y = (s = _.y) + 13,
            E.z = (n = _.z) + -18,
            requestAnimationFrame(l);
        }
      },
      l = () => {
        if (a < 5) {
          var O, N, B = 0, L = a++;
          let [d, v, b, I, A, P, S, Y, F, y, T, t, x, j, k, C, z, H, w, D, Q] =
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
            ]]][L];
          y = y * y * 4;
          for (let g of [5513, 4562, 3891]) {
            let r = 0,
              s = 0,
              f = [],
              u,
              n,
              o,
              c,
              i,
              h = new Int32Array(768 * g),
              m = 2 ** (t - 9) / g,
              M = Math.PI * 2 ** (z - 8) / g,
              p = w * g & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * g;
                for (N = 0; N < 4; ++N) {
                  if (u = 0, a && (u = Q[a - 1].charCodeAt(t + 32 * N) - 40, u += 0 < u ? 106 : 0), u) {
                    if (!(O = f[u])) {
                      let l = 0,
                        r = 0,
                        s,
                        n,
                        o = O = u,
                        c = L < 2
                          ? t => t % 1 * 2 - 1
                          : vt,
                        i = L < 2
                          ? L < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : vt,
                        h = new Int32Array(Y + F + y);
                      for (let a = 0, e = 0; Y + F + y > a; ++a, ++e) {
                        let t = 1;
                        Y > a ? t = a / Y : Y + F > a || (t = (1 - (t = (a - Y - F) / y)) * 3 ** (-T / 16 * t)),
                          e < 0
                          || (e -= 4 * g,
                            n = .00396 * 2 ** ((o + v - 256) / 12),
                            s = .00396 * 2 ** ((o + A - 256) / 12) * (1 + (L ? 0 : 8e-4 * 9))),
                          h[a] = 80
                              * (c(l += n * t ** (b / 32)) * d + i(r += s * t ** (P / 32)) * I
                                + (S ? (2 * Math.random() - 1) * S : 0))
                              * t | 0;
                      }
                      O = f[O] = h;
                    }
                    for (let t = 0, a = 2 * e; O.length > t; ++t, a += 2) h[a] += O[t];
                  }
                }
                for (let t, a = 0; g > a; ++a) {
                  N = 0,
                    ((t = h[O = 2 * (e + a)]) || i)
                    && (o = .00308 * x,
                      1 != L && 4 != L || (o *= Math.sin(m * O * Math.PI * 2) * D / 512 + .5),
                      o = 1.5 * Math.sin(o),
                      r += o * s,
                      c = (1 - j / 255) * (t - s) - r,
                      s += o * c,
                      t = 4 == L ? s : 3 == L ? c : r,
                      L || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= k / 32,
                      i = 1e-5 < t * t,
                      n = Math.sin(M * O) * C / 512 + .5,
                      N = t * (1 - n),
                      t *= n),
                    O < p || (N += h[O - p + 1] * H / 255, t += h[O - p] * H / 255),
                    kt[B + O] += h[O] = N,
                    ++O,
                    kt[B + O] += h[O] = t;
                }
              }
            }
            B += h.length;
          }
          setTimeout(l);
        } else {
          for (B = Wt.createBuffer(2, 5362944, 44100), L = 0; L < 2; L++) {
            for (let t = L, a = B.getChannelData(L); t < 10725888; t += 2) {
              a[t >> 1] = kt[t] / 65536;
            }
          }
          Kt.buffer = B, Kt.loop = !0;
        }
        e();
      },
      H = new Image();
    H.onload = H.onerror = () => {
      e();
    },
      H.src = Qt,
      setTimeout(l, 50),
      P(St);
  });
})();
