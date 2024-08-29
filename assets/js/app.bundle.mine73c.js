!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ClipboardJS = t())
    : (e.ClipboardJS = t());
})(this, function () {
  return (
    (a = {
      686: function (e, t, a) {
        "use strict";
        a.d(t, {
          default: function () {
            return v;
          },
        });
        var t = a(279),
          n = a.n(t),
          t = a(370),
          o = a.n(t),
          t = a(817),
          s = a.n(t);
        function r(e) {
          try {
            document.execCommand(e);
          } catch (e) {}
        }
        function l(e) {
          return (e = s()(e)), r("cut"), e;
        }
        function i(e, t) {
          var a, i;
          (a = e),
            (i = "rtl" === document.documentElement.getAttribute("dir")),
            ((e = document.createElement("textarea")).style.fontSize = "12pt"),
            (e.style.border = "0"),
            (e.style.padding = "0"),
            (e.style.margin = "0"),
            (e.style.position = "absolute"),
            (e.style[i ? "right" : "left"] = "-9999px"),
            (i = window.pageYOffset || document.documentElement.scrollTop),
            (e.style.top = "".concat(i, "px")),
            e.setAttribute("readonly", ""),
            (e.value = a);
          return (
            t.container.appendChild(e), (t = s()(e)), r("copy"), e.remove(), t
          );
        }
        function d(e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : { container: document.body },
            a = "";
          return (
            "string" == typeof e
              ? (a = i(e, t))
              : e instanceof HTMLInputElement &&
                !["text", "search", "url", "tel", "password"].includes(
                  null == e ? void 0 : e.type
                )
              ? (a = i(e.value, t))
              : ((a = s()(e)), r("copy")),
            a
          );
        }
        function c(e) {
          return (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function p(e) {
          return (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function u(e, t) {
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function m(e, t) {
          return (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function h(e) {
          return (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function f(e, t) {
          if (((e = "data-clipboard-".concat(e)), t.hasAttribute(e)))
            return t.getAttribute(e);
        }
        var v = (function () {
          var e = r,
            t = n();
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && m(e, t);
          (a = r),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })());
          var a,
            i,
            s = function () {
              var e = h(a),
                t = i
                  ? ((t = h(this).constructor),
                    Reflect.construct(e, arguments, t))
                  : e.apply(this, arguments),
                e = this;
              if (!t || ("object" !== p(t) && "function" != typeof t)) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              }
              return t;
            };
          function r(e, t) {
            var a;
            if (this instanceof r)
              return (a = s.call(this)).resolveOptions(t), a.listenClick(e), a;
            throw new TypeError("Cannot call a class as a function");
          }
          return (
            (e = [
              {
                key: "copy",
                value: function (e) {
                  var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : { container: document.body };
                  return d(e, t);
                },
              },
              { key: "cut", value: l },
              {
                key: "isSupported",
                value: function () {
                  var e =
                      "string" ==
                      typeof (e =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : ["copy", "cut"])
                        ? [e]
                        : e,
                    t = !!document.queryCommandSupported;
                  return (
                    e.forEach(function (e) {
                      t = t && !!document.queryCommandSupported(e);
                    }),
                    t
                  );
                },
              },
            ]),
            u((t = r).prototype, [
              {
                key: "resolveOptions",
                value: function () {
                  var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.action =
                    "function" == typeof e.action
                      ? e.action
                      : this.defaultAction),
                    (this.target =
                      "function" == typeof e.target
                        ? e.target
                        : this.defaultTarget),
                    (this.text =
                      "function" == typeof e.text ? e.text : this.defaultText),
                    (this.container =
                      "object" === p(e.container)
                        ? e.container
                        : document.body);
                },
              },
              {
                key: "listenClick",
                value: function (e) {
                  var t = this;
                  this.listener = o()(e, "click", function (e) {
                    return t.onClick(e);
                  });
                },
              },
              {
                key: "onClick",
                value: function (e) {
                  var t = e.delegateTarget || e.currentTarget,
                    a = this.action(t) || "copy",
                    e = (function () {
                      var e =
                          void 0 ===
                          (a = (i =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}).action)
                            ? "copy"
                            : a,
                        t = i.container,
                        a = i.target,
                        i = i.text;
                      if ("copy" !== e && "cut" !== e)
                        throw new Error(
                          'Invalid "action" value, use either "copy" or "cut"'
                        );
                      if (void 0 !== a) {
                        if (!a || "object" !== c(a) || 1 !== a.nodeType)
                          throw new Error(
                            'Invalid "target" value, use a valid Element'
                          );
                        if ("copy" === e && a.hasAttribute("disabled"))
                          throw new Error(
                            'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                          );
                        if (
                          "cut" === e &&
                          (a.hasAttribute("readonly") ||
                            a.hasAttribute("disabled"))
                        )
                          throw new Error(
                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                          );
                      }
                      return i
                        ? d(i, { container: t })
                        : a
                        ? "cut" === e
                          ? l(a)
                          : d(a, { container: t })
                        : void 0;
                    })({
                      action: a,
                      container: this.container,
                      target: this.target(t),
                      text: this.text(t),
                    });
                  this.emit(e ? "success" : "error", {
                    action: a,
                    text: e,
                    trigger: t,
                    clearSelection: function () {
                      t && t.focus(), window.getSelection().removeAllRanges();
                    },
                  });
                },
              },
              {
                key: "defaultAction",
                value: function (e) {
                  return f("action", e);
                },
              },
              {
                key: "defaultTarget",
                value: function (e) {
                  if ((e = f("target", e))) return document.querySelector(e);
                },
              },
              {
                key: "defaultText",
                value: function (e) {
                  return f("text", e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.listener.destroy();
                },
              },
            ]),
            u(t, e),
            r
          );
        })();
      },
      828: function (e) {
        var t;
        "undefined" == typeof Element ||
          Element.prototype.matches ||
          ((t = Element.prototype).matches =
            t.matchesSelector ||
            t.mozMatchesSelector ||
            t.msMatchesSelector ||
            t.oMatchesSelector ||
            t.webkitMatchesSelector),
          (e.exports = function (e, t) {
            for (; e && 9 !== e.nodeType; ) {
              if ("function" == typeof e.matches && e.matches(t)) return e;
              e = e.parentNode;
            }
          });
      },
      438: function (e, t, a) {
        var n = a(828);
        function r(e, t, a, i, s) {
          var r = function (t, a, e, i) {
            return function (e) {
              (e.delegateTarget = n(e.target, a)),
                e.delegateTarget && i.call(t, e);
            };
          }.apply(this, arguments);
          return (
            e.addEventListener(a, r, s),
            {
              destroy: function () {
                e.removeEventListener(a, r, s);
              },
            }
          );
        }
        e.exports = function (e, t, a, i, s) {
          return "function" == typeof e.addEventListener
            ? r.apply(null, arguments)
            : "function" == typeof a
            ? r.bind(null, document).apply(null, arguments)
            : ("string" == typeof e && (e = document.querySelectorAll(e)),
              Array.prototype.map.call(e, function (e) {
                return r(e, t, a, i, s);
              }));
        };
      },
      879: function (e, a) {
        (a.node = function (e) {
          return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
        }),
          (a.nodeList = function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              void 0 !== e &&
              ("[object NodeList]" === t || "[object HTMLCollection]" === t) &&
              "length" in e &&
              (0 === e.length || a.node(e[0]))
            );
          }),
          (a.string = function (e) {
            return "string" == typeof e || e instanceof String;
          }),
          (a.fn = function (e) {
            return "[object Function]" === Object.prototype.toString.call(e);
          });
      },
      370: function (e, t, a) {
        var d = a(879),
          c = a(438);
        e.exports = function (e, t, a) {
          if (!e && !t && !a) throw new Error("Missing required arguments");
          if (!d.string(t))
            throw new TypeError("Second argument must be a String");
          if (!d.fn(a))
            throw new TypeError("Third argument must be a Function");
          if (d.node(e))
            return (
              (n = e).addEventListener((o = t), (l = a)),
              {
                destroy: function () {
                  n.removeEventListener(o, l);
                },
              }
            );
          if (d.nodeList(e))
            return (
              (i = e),
              (s = t),
              (r = a),
              Array.prototype.forEach.call(i, function (e) {
                e.addEventListener(s, r);
              }),
              {
                destroy: function () {
                  Array.prototype.forEach.call(i, function (e) {
                    e.removeEventListener(s, r);
                  });
                },
              }
            );
          if (d.string(e)) return c(document.body, e, t, a);
          throw new TypeError(
            "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
          );
          var i, s, r, n, o, l;
        };
      },
      817: function (e) {
        e.exports = function (e) {
          var t,
            a =
              "SELECT" === e.nodeName
                ? (e.focus(), e.value)
                : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName
                ? ((t = e.hasAttribute("readonly")) ||
                    e.setAttribute("readonly", ""),
                  e.select(),
                  e.setSelectionRange(0, e.value.length),
                  t || e.removeAttribute("readonly"),
                  e.value)
                : (e.hasAttribute("contenteditable") && e.focus(),
                  (a = window.getSelection()),
                  (t = document.createRange()).selectNodeContents(e),
                  a.removeAllRanges(),
                  a.addRange(t),
                  a.toString());
          return a;
        };
      },
      279: function (e) {
        function t() {}
        (t.prototype = {
          on: function (e, t, a) {
            var i = this.e || (this.e = {});
            return (i[e] || (i[e] = [])).push({ fn: t, ctx: a }), this;
          },
          once: function (e, t, a) {
            var i = this;
            function s() {
              i.off(e, s), t.apply(a, arguments);
            }
            return (s._ = t), this.on(e, s, a);
          },
          emit: function (e) {
            for (
              var t = [].slice.call(arguments, 1),
                a = ((this.e || (this.e = {}))[e] || []).slice(),
                i = 0,
                s = a.length;
              i < s;
              i++
            )
              a[i].fn.apply(a[i].ctx, t);
            return this;
          },
          off: function (e, t) {
            var a = this.e || (this.e = {}),
              i = a[e],
              s = [];
            if (i && t)
              for (var r = 0, n = i.length; r < n; r++)
                i[r].fn !== t && i[r].fn._ !== t && s.push(i[r]);
            return s.length ? (a[e] = s) : delete a[e], this;
          },
        }),
          (e.exports = t),
          (e.exports.TinyEmitter = t);
      },
    }),
    (s = {}),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, { a: t }), t;
    }),
    (i.d = function (e, t) {
      for (var a in t)
        i.o(t, a) &&
          !i.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    i(686).default
  );
  function i(e) {
    var t;
    return (
      s[e] || ((t = s[e] = { exports: {} }), a[e](t, t.exports, i), t)
    ).exports;
  }
  var a, s;
}),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.Lightense = t())
      : (e.Lightense = t());
  })(this, function () {
    return (
      (i = {
        352: (e) => {
          function t(t, e) {
            var a,
              i = Object.keys(t);
            return (
              Object.getOwnPropertySymbols &&
                ((a = Object.getOwnPropertySymbols(t)),
                e &&
                  (a = a.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                i.push.apply(i, a)),
              i
            );
          }
          function v(i) {
            for (var e = 1; e < arguments.length; e++) {
              var s = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? t(Object(s), !0).forEach(function (e) {
                    var t, a;
                    (t = i),
                      (a = s[(e = e)]),
                      e in t
                        ? Object.defineProperty(t, e, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[e] = a);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    i,
                    Object.getOwnPropertyDescriptors(s)
                  )
                : t(Object(s)).forEach(function (e) {
                    Object.defineProperty(
                      i,
                      e,
                      Object.getOwnPropertyDescriptor(s, e)
                    );
                  });
            }
            return i;
          }
          function l(e) {
            return (l =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          var a = (function () {
            "use strict";
            var r,
              c = {
                time: 300,
                padding: 40,
                offset: 40,
                keyboard: !0,
                cubicBezier: "cubic-bezier(.2, 0, .1, 1)",
                background: "var(--bg-color-80, rgba(255, 255, 255, .98))",
                zIndex: 1e6,
                beforeShow: void 0,
                afterShow: void 0,
                beforeHide: void 0,
                afterHide: void 0,
              },
              p = {};
            function n(e) {
              var t = p[e];
              if (t) {
                if ("function" != typeof t)
                  throw "config.".concat(e, " must be a function!");
                Reflect.apply(t, p, [p]);
              }
            }
            function o(t) {
              t.src &&
                !t.classList.contains("lightense-target") &&
                (t.classList.add("lightense-target"),
                t.addEventListener(
                  "click",
                  function (e) {
                    if (p.keyboard && (e.metaKey || e.ctrlKey))
                      return window.open(t.src, "_blank");
                    var a, i, s;
                    (e = this),
                      (p.target = e),
                      p.target.classList.contains("lightense-open")
                        ? m()
                        : (n("beforeShow"),
                          (p.scrollY = window.scrollY),
                          (a = p.target),
                          (i = "transitionend"),
                          (s = function () {
                            n("afterShow");
                          }),
                          a.addEventListener(i, function e(t) {
                            Reflect.apply(s, this, t),
                              a.removeEventListener(i, e);
                          }),
                          ((e = new Image()).onload = function () {
                            var e, t, a, i, s, r, n, o, l, d;
                            (t = (e = this).width),
                              (e = e.height),
                              (a =
                                window.pageYOffset ||
                                document.documentElement.scrollTop ||
                                0),
                              (i =
                                window.pageXOffset ||
                                document.documentElement.scrollLeft ||
                                0),
                              (s = p.target.getBoundingClientRect()),
                              (r = t / s.width),
                              (n =
                                window.innerWidth ||
                                document.documentElement.clientWidth ||
                                0),
                              (o =
                                window.innerHeight ||
                                document.documentElement.clientHeight ||
                                0),
                              (l =
                                p.target.getAttribute(
                                  "data-lightense-padding"
                                ) ||
                                p.target.getAttribute("data-padding") ||
                                p.padding),
                              (d = l < n ? n - l : n - c.padding),
                              (l = l < o ? o - l : o - c.padding),
                              (p.scaleFactor =
                                t < d && e < l
                                  ? r
                                  : t / e < d / l
                                  ? (l / e) * r
                                  : (d / t) * r),
                              (l = n / 2),
                              (e = a + o / 2),
                              (d = s.left + i + s.width / 2),
                              (t = s.top + a + s.height / 2),
                              (p.translateX = Math.round(l - d)),
                              (p.translateY = Math.round(e - t)),
                              p.target.classList.add("lightense-open"),
                              (p.wrap = document.createElement("div")),
                              (p.wrap.className = "lightense-wrap"),
                              setTimeout(function () {
                                p.target.style.transform =
                                  "scale(" + p.scaleFactor + ")";
                              }, 20),
                              p.target.parentNode.insertBefore(
                                p.wrap,
                                p.target
                              ),
                              p.wrap.appendChild(p.target),
                              setTimeout(function () {
                                p.wrap.style.transform =
                                  "translate3d(" +
                                  p.translateX +
                                  "px, " +
                                  p.translateY +
                                  "px, 0)";
                              }, 20),
                              (r = {
                                cubicBezier:
                                  p.target.getAttribute(
                                    "data-lightense-cubic-bezier"
                                  ) || p.cubicBezier,
                                background:
                                  p.target.getAttribute(
                                    "data-lightense-background"
                                  ) ||
                                  p.target.getAttribute("data-background") ||
                                  p.background,
                                zIndex:
                                  p.target.getAttribute(
                                    "data-lightense-z-index"
                                  ) || p.zIndex,
                              }),
                              (r = v(v({}, p), r)),
                              u(
                                "lightense-images-css-computed",
                                "\n    :root {\n      --lightense-z-index: "
                                  .concat(
                                    r.zIndex - 1,
                                    ";\n      --lightense-backdrop: "
                                  )
                                  .concat(
                                    r.background,
                                    ";\n      --lightense-duration: "
                                  )
                                  .concat(
                                    r.time,
                                    "ms;\n      --lightense-timing-func: "
                                  )
                                  .concat(r.cubicBezier, ";\n    }")
                              ),
                              (p.container.style.visibility = "visible"),
                              setTimeout(function () {
                                p.container.style.opacity = "1";
                              }, 20),
                              window.addEventListener("keyup", f, !1),
                              window.addEventListener("scroll", h, !1),
                              p.container.addEventListener("click", m, !1);
                          }),
                          (e.src = p.target.src));
                  },
                  !1
                ));
            }
            function u(e, t) {
              var a = document.head || document.getElementsByTagName("head")[0],
                i =
                  (document.getElementById(e) &&
                    document.getElementById(e).remove(),
                  document.createElement("style"));
              (i.id = e),
                i.styleSheet
                  ? (i.styleSheet.cssText = t)
                  : i.appendChild(document.createTextNode(t)),
                a.appendChild(i);
            }
            function m() {
              n("beforeHide"),
                window.removeEventListener("keyup", f, !1),
                window.removeEventListener("scroll", h, !1),
                p.container.removeEventListener("click", m, !1),
                p.target.classList.remove("lightense-open"),
                (p.wrap.style.transform = ""),
                (p.target.style.transform = ""),
                p.target.classList.add("lightense-transitioning"),
                (p.container.style.opacity = ""),
                setTimeout(function () {
                  n("afterHide"),
                    (p.container.style.visibility = ""),
                    (p.container.style.backgroundColor = ""),
                    p.wrap.parentNode.replaceChild(p.target, p.wrap),
                    p.target.classList.remove("lightense-transitioning");
                }, p.time);
            }
            function h() {
              Math.abs(p.scrollY - window.scrollY) >= p.offset && m();
            }
            function f(e) {
              e.preventDefault(), 27 === e.keyCode && m();
            }
            return function (e) {
              var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a =
                  ((r = (function (e) {
                    switch (l(e)) {
                      case "undefined":
                        throw "You need to pass an element!";
                      case "string":
                        return document.querySelectorAll(e);
                      case "object":
                        return e;
                    }
                  })(e)),
                  (p = v(v({}, c), t)),
                  u(
                    "lightense-images-css",
                    "\n:root {\n  --lightense-z-index: "
                      .concat(p.zIndex - 1, ";\n  --lightense-backdrop: ")
                      .concat(p.background, ";\n  --lightense-duration: ")
                      .concat(p.time, "ms;\n  --lightense-timing-func: ")
                      .concat(
                        p.cubicBezier,
                        ";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}"
                      )
                  ),
                  null === document.querySelector(".lightense-backdrop")
                    ? ((p.container = document.createElement("div")),
                      (p.container.className = "lightense-backdrop"),
                      document.body.appendChild(p.container))
                    : (p.container = document.querySelector(
                        ".lightense-backdrop"
                      )),
                  r),
                i = a.length;
              if (i) for (var s = 0; s < i; s++) o(a[s]);
              else o(a);
            };
          })();
          e.exports = a;
        },
      }),
      (s = {}),
      (function e(t) {
        var a = s[t];
        return (
          void 0 !== a || ((a = s[t] = { exports: {} }), i[t](a, a.exports, e)),
          a.exports
        );
      })(352)
    );
    var i, s;
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).mediumZoom = t());
  })(this, function () {
    "use strict";
    function d(e) {
      return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
    }
    function l(e) {
      try {
        return Array.isArray(e)
          ? e.filter(s)
          : NodeList.prototype.isPrototypeOf(e)
          ? [].slice.call(e).filter(s)
          : x(e)
          ? [e].filter(s)
          : "string" == typeof e
          ? [].slice.call(document.querySelectorAll(e)).filter(s)
          : [];
      } catch (e) {
        throw new TypeError(
          "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
        );
      }
    }
    function y(e, t) {
      var a,
        t = E({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
      return "function" == typeof window.CustomEvent
        ? new CustomEvent(e, t)
        : ((a = document.createEvent("CustomEvent")).initCustomEvent(
            e,
            t.bubbles,
            t.cancelable,
            t.detail
          ),
          a);
    }
    var e,
      t,
      a,
      i,
      E =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a,
              i = arguments[t];
            for (a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
          }
          return e;
        },
      s = function (e) {
        return "IMG" === e.tagName;
      },
      x = function (e) {
        return e && 1 === e.nodeType;
      };
    return (
      (e =
        ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),
      (t = (t = void 0 === t ? {} : t).insertAt),
      "undefined" != typeof document &&
        ((a = document.head || document.getElementsByTagName("head")[0]),
        ((i = document.createElement("style")).type = "text/css"),
        "top" === t && a.firstChild
          ? a.insertBefore(i, a.firstChild)
          : a.appendChild(i),
        i.styleSheet
          ? (i.styleSheet.cssText = e)
          : i.appendChild(document.createTextNode(e))),
      function e(t, a) {
        function i() {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var s = t.reduce(function (e, t) {
            return [].concat(e, l(t));
          }, []);
          return (
            s
              .filter(function (e) {
                return -1 === m.indexOf(e);
              })
              .forEach(function (e) {
                m.push(e), e.classList.add("medium-zoom-image");
              }),
            o.forEach(function (e) {
              var t = e.type,
                a = e.listener,
                i = e.options;
              s.forEach(function (e) {
                e.addEventListener(t, a, i);
              });
            }),
            w
          );
        }
        function s() {
          var e = (
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          ).target;
          return g.original ? u() : n({ target: e });
        }
        var r =
            window.Promise ||
            function (e) {
              function t() {}
              e(t, t);
            },
          n = function () {
            function c() {
              var e = {
                  width: document.documentElement.clientWidth,
                  height: document.documentElement.clientHeight,
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                t = void 0,
                a = void 0,
                i =
                  (v.container &&
                    (v.container instanceof Object
                      ? ((t =
                          (e = E({}, e, v.container)).width -
                          e.left -
                          e.right -
                          2 * v.margin),
                        (a = e.height - e.top - e.bottom - 2 * v.margin))
                      : ((i = (l = (
                          x(v.container)
                            ? v.container
                            : document.querySelector(v.container)
                        ).getBoundingClientRect()).width),
                        (s = l.height),
                        (r = l.left),
                        (l = l.top),
                        (e = E({}, e, {
                          width: i,
                          height: s,
                          left: r,
                          top: l,
                        })))),
                  (t = t || e.width - 2 * v.margin),
                  (a = a || e.height - 2 * v.margin),
                  g.zoomedHd || g.original),
                s = (!d(i) && i.naturalWidth) || t,
                r = (!d(i) && i.naturalHeight) || a,
                i = (l = i.getBoundingClientRect()).top,
                n = l.left,
                o = l.width,
                l = l.height,
                s = Math.min(s, t) / o,
                r = Math.min(r, a) / l,
                r =
                  "scale(" +
                  (s = Math.min(s, r)) +
                  ") translate3d(" +
                  ((t - o) / 2 - n + v.margin + e.left) / s +
                  "px, " +
                  ((a - l) / 2 - i + v.margin + e.top) / s +
                  "px, 0)";
              (g.zoomed.style.transform = r),
                g.zoomedHd && (g.zoomedHd.style.transform = r);
            }
            var p = (
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ).target;
            return new r(function (t) {
              if (p && -1 === m.indexOf(p)) t(w);
              else if (g.zoomed) t(w);
              else {
                if (p) g.original = p;
                else {
                  if (!(0 < m.length)) return void t(w);
                  var e = m;
                  g.original = e[0];
                }
                var a, i;
                g.original.dispatchEvent(
                  y("medium-zoom:open", { detail: { zoom: w } })
                ),
                  (f =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0),
                  (h = !0),
                  (g.zoomed =
                    ((e = g.original),
                    (s = e.getBoundingClientRect()),
                    (r = s.top),
                    (n = s.left),
                    (o = s.width),
                    (s = s.height),
                    (e = e.cloneNode()),
                    (l =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      0),
                    (d =
                      window.pageXOffset ||
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft ||
                      0),
                    e.removeAttribute("id"),
                    (e.style.position = "absolute"),
                    (e.style.top = r + l + "px"),
                    (e.style.left = n + d + "px"),
                    (e.style.width = o + "px"),
                    (e.style.height = s + "px"),
                    (e.style.transform = ""),
                    e)),
                  document.body.appendChild(b),
                  v.template &&
                    ((r = x(v.template)
                      ? v.template
                      : document.querySelector(v.template)),
                    (g.template = document.createElement("div")),
                    g.template.appendChild(r.content.cloneNode(!0)),
                    document.body.appendChild(g.template)),
                  document.body.appendChild(g.zoomed),
                  window.requestAnimationFrame(function () {
                    document.body.classList.add("medium-zoom--opened");
                  }),
                  g.original.classList.add("medium-zoom-image--hidden"),
                  g.zoomed.classList.add("medium-zoom-image--opened"),
                  g.zoomed.addEventListener("click", u),
                  g.zoomed.addEventListener("transitionend", function e() {
                    (h = !1),
                      g.zoomed.removeEventListener("transitionend", e),
                      g.original.dispatchEvent(
                        y("medium-zoom:opened", { detail: { zoom: w } })
                      ),
                      t(w);
                  }),
                  g.original.getAttribute("data-zoom-src")
                    ? ((g.zoomedHd = g.zoomed.cloneNode()),
                      g.zoomedHd.removeAttribute("srcset"),
                      g.zoomedHd.removeAttribute("sizes"),
                      (g.zoomedHd.src = g.zoomed.getAttribute("data-zoom-src")),
                      (g.zoomedHd.onerror = function () {
                        clearInterval(a),
                          console.warn(
                            "Unable to reach the zoom image target " +
                              g.zoomedHd.src
                          ),
                          (g.zoomedHd = null),
                          c();
                      }),
                      (a = setInterval(function () {
                        g.zoomedHd.complete &&
                          (clearInterval(a),
                          g.zoomedHd.classList.add("medium-zoom-image--opened"),
                          g.zoomedHd.addEventListener("click", u),
                          document.body.appendChild(g.zoomedHd),
                          c());
                      }, 10)))
                    : g.original.hasAttribute("srcset")
                    ? ((g.zoomedHd = g.zoomed.cloneNode()),
                      g.zoomedHd.removeAttribute("sizes"),
                      g.zoomedHd.removeAttribute("loading"),
                      (i = g.zoomedHd.addEventListener("load", function () {
                        g.zoomedHd.removeEventListener("load", i),
                          g.zoomedHd.classList.add("medium-zoom-image--opened"),
                          g.zoomedHd.addEventListener("click", u),
                          document.body.appendChild(g.zoomedHd),
                          c();
                      })))
                    : c();
              }
              var s, r, n, o, l, d;
            });
          },
          u = function () {
            return new r(function (t) {
              !h && g.original
                ? ((h = !0),
                  document.body.classList.remove("medium-zoom--opened"),
                  (g.zoomed.style.transform = ""),
                  g.zoomedHd && (g.zoomedHd.style.transform = ""),
                  g.template &&
                    ((g.template.style.transition = "opacity 150ms"),
                    (g.template.style.opacity = 0)),
                  g.original.dispatchEvent(
                    y("medium-zoom:close", { detail: { zoom: w } })
                  ),
                  g.zoomed.addEventListener("transitionend", function e() {
                    g.original.classList.remove("medium-zoom-image--hidden"),
                      document.body.removeChild(g.zoomed),
                      g.zoomedHd && document.body.removeChild(g.zoomedHd),
                      document.body.removeChild(b),
                      g.zoomed.classList.remove("medium-zoom-image--opened"),
                      g.template && document.body.removeChild(g.template),
                      (h = !1),
                      g.zoomed.removeEventListener("transitionend", e),
                      g.original.dispatchEvent(
                        y("medium-zoom:closed", { detail: { zoom: w } })
                      ),
                      (g.original = null),
                      (g.zoomed = null),
                      (g.zoomedHd = null),
                      (g.template = null),
                      t(w);
                  }))
                : t(w);
            });
          },
          m = [],
          o = [],
          h = !1,
          f = 0,
          v = 1 < arguments.length && void 0 !== a ? a : {},
          g = { original: null, zoomed: null, zoomedHd: null, template: null },
          b =
            ("[object Object]" === Object.prototype.toString.call(t)
              ? (v = t)
              : (!t && "string" != typeof t) || i(t),
            (v = E(
              {
                margin: 0,
                background: "#fff",
                scrollOffset: 40,
                container: null,
                template: null,
              },
              v
            )),
            (a = v.background),
            (t = document.createElement("div")).classList.add(
              "medium-zoom-overlay"
            ),
            (t.style.background = a),
            t),
          w =
            (document.addEventListener("click", function (e) {
              e = e.target;
              e !== b ? -1 !== m.indexOf(e) && s({ target: e }) : u();
            }),
            document.addEventListener("keyup", function (e) {
              e = e.key || e.keyCode;
              ("Escape" !== e && "Esc" !== e && 27 !== e) || u();
            }),
            document.addEventListener("scroll", function () {
              var e;
              !h &&
                g.original &&
                ((e =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0),
                Math.abs(f - e) > v.scrollOffset) &&
                setTimeout(u, 150);
            }),
            window.addEventListener("resize", u),
            {
              open: n,
              close: u,
              toggle: s,
              update: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e;
                return (
                  e.background && (b.style.background = e.background),
                  e.container &&
                    e.container instanceof Object &&
                    (t.container = E({}, v.container, e.container)),
                  e.template &&
                    ((e = x(e.template)
                      ? e.template
                      : document.querySelector(e.template)),
                    (t.template = e)),
                  (v = E({}, v, t)),
                  m.forEach(function (e) {
                    e.dispatchEvent(
                      y("medium-zoom:update", { detail: { zoom: w } })
                    );
                  }),
                  w
                );
              },
              clone: function () {
                return e(
                  E(
                    {},
                    v,
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  )
                );
              },
              attach: i,
              detach: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                  t[a] = arguments[a];
                g.zoomed && u();
                var i =
                  0 < t.length
                    ? t.reduce(function (e, t) {
                        return [].concat(e, l(t));
                      }, [])
                    : m;
                return (
                  i.forEach(function (e) {
                    e.classList.remove("medium-zoom-image"),
                      e.dispatchEvent(
                        y("medium-zoom:detach", { detail: { zoom: w } })
                      );
                  }),
                  (m = m.filter(function (e) {
                    return -1 === i.indexOf(e);
                  })),
                  w
                );
              },
              on: function (t, a) {
                var i =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (
                  m.forEach(function (e) {
                    e.addEventListener("medium-zoom:" + t, a, i);
                  }),
                  o.push({ type: "medium-zoom:" + t, listener: a, options: i }),
                  w
                );
              },
              off: function (t, a) {
                var i =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (
                  m.forEach(function (e) {
                    e.removeEventListener("medium-zoom:" + t, a, i);
                  }),
                  (o = o.filter(function (e) {
                    return !(
                      e.type === "medium-zoom:" + t &&
                      e.listener.toString() === a.toString()
                    );
                  })),
                  w
                );
              },
              getOptions: function () {
                return v;
              },
              getImages: function () {
                return m;
              },
              getZoomedImage: function () {
                return g.original;
              },
            });
        return w;
      }
    );
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).reframe =
          t());
  })(this, function () {
    "use strict";
    return function (e, t) {
      var a = "string" == typeof e ? document.querySelectorAll(e) : e,
        i = t || "js-reframe";
      "length" in a || (a = [a]);
      for (var s = 0; s < a.length; s += 1) {
        var r = a[s];
        if (
          -1 !== r.className.split(" ").indexOf(i) ||
          -1 < r.style.width.indexOf("%")
        )
          return;
        var n = r.getAttribute("height") || r.offsetHeight,
          o = r.getAttribute("width") || r.offsetWidth,
          n =
            (("string" == typeof n ? parseInt(n) : n) /
              ("string" == typeof o ? parseInt(o) : o)) *
            100,
          l = (((o = document.createElement("div")).className = i), o.style);
        (l.position = "relative"),
          (l.width = "100%"),
          (l.paddingTop = "".concat(n, "%")),
          ((l = r.style).position = "absolute"),
          (l.width = "100%"),
          (l.height = "100%"),
          (l.left = "0"),
          (l.top = "0"),
          null != (n = r.parentNode) && n.insertBefore(o, r),
          null != (l = r.parentNode) && l.removeChild(r),
          o.appendChild(r);
      }
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define([], function () {
          return (e.returnExportsGlobal = t());
        })
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.ResizeSensor = t());
  })(this, function () {
    return (function () {
      "use strict";
      function f() {
        var e, t;
        (this.q = []),
          (this.add = function (e) {
            this.q.push(e);
          }),
          (this.call = function () {
            for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
          });
      }
      function r(e, t) {
        if (e.resizedAttached) {
          if (e.resizedAttached) return e.resizedAttached.add(t);
        } else (e.resizedAttached = new f()), e.resizedAttached.add(t);
        (e.resizeSensor = document.createElement("div")),
          (e.resizeSensor.className = "resize-sensor");
        function a() {
          (n.style.width = 1e5 + "px"),
            (n.style.height = 1e5 + "px"),
            (r.scrollLeft = 1e5),
            (r.scrollTop = 1e5),
            (o.scrollLeft = 1e5),
            (o.scrollTop = 1e5);
        }
        function i() {
          e.resizedAttached &&
            (l && (e.resizedAttached.call(), (l = !1)), v(i));
        }
        var t =
            "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;",
          s = "position: absolute; left: 0; top: 0; transition: 0s;",
          r =
            ((e.resizeSensor.style.cssText = t),
            (e.resizeSensor.innerHTML =
              '<div class="resize-sensor-expand" style="' +
              t +
              '"><div style="' +
              s +
              '"></div></div><div class="resize-sensor-shrink" style="' +
              t +
              '"><div style="' +
              s +
              ' width: 200%; height: 200%"></div></div>'),
            e.appendChild(e.resizeSensor),
            "static" ==
              ((t = "position"),
              (s = e).currentStyle
                ? s.currentStyle[t]
                : window.getComputedStyle
                ? window.getComputedStyle(s, null).getPropertyValue(t)
                : s.style[t]) && (e.style.position = "relative"),
            e.resizeSensor.childNodes[0]),
          n = r.childNodes[0],
          o = e.resizeSensor.childNodes[1],
          l = (a(), !1);
        v(i);
        function d() {
          ((m = e.offsetWidth) == p && (h = e.offsetHeight) == u) ||
            ((l = !0), (p = m), (u = h)),
            a();
        }
        function c(e, t, a) {
          e.attachEvent ? e.attachEvent("on" + t, a) : e.addEventListener(t, a);
        }
        var p, u, m, h;
        c(r, "scroll", d), c(o, "scroll", d);
      }
      function s(e, t) {
        var a = Object.prototype.toString.call(e),
          a = (this._isCollectionTyped =
            "[object Array]" === a ||
            "[object NodeList]" === a ||
            "[object HTMLCollection]" === a ||
            ("undefined" != typeof jQuery && e instanceof window.jQuery) ||
            ("undefined" != typeof Elements && e instanceof window.Elements));
        if (((this._element = e), a))
          for (var i = 0, s = e.length; i < s; i++) r(e[i], t);
        else r(e, t);
      }
      var v =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (e) {
          return window.setTimeout(e, 20);
        };
      return (
        (s.prototype.detach = function () {
          var e = this._isCollectionTyped,
            t = this._element;
          if (e) for (var a = 0, i = t.length; a < i; a++) s.detach(t[a]);
          else s.detach(t);
        }),
        (s.detach = function (e) {
          e.resizeSensor &&
            (e.removeChild(e.resizeSensor),
            delete e.resizeSensor,
            delete e.resizedAttached);
        }),
        s
      );
    })();
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.StickySidebar = t());
  })(this, function () {
    "use strict";
    (r = {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: !(n = ".stickySidebar"),
      innerWrapperSelector: ".inner-wrapper-sticky",
      stickyClass: "is-affixed",
      resizeSensor: !0,
      minWidth: !1,
    }),
      (function (e, t, a) {
        t && i(e.prototype, t), a && i(e, a);
      })(
        o,
        [
          {
            key: "initialize",
            value: function () {
              var a = this;
              if (
                (this._setSupportFeatures(),
                this.options.innerWrapperSelector &&
                  ((this.sidebarInner = this.sidebar.querySelector(
                    this.options.innerWrapperSelector
                  )),
                  null === this.sidebarInner) &&
                  (this.sidebarInner = !1),
                !this.sidebarInner)
              ) {
                var e = document.createElement("div");
                for (
                  e.setAttribute("class", "inner-wrapper-sticky"),
                    this.sidebar.appendChild(e);
                  this.sidebar.firstChild != e;

                )
                  e.appendChild(this.sidebar.firstChild);
                this.sidebarInner = this.sidebar.querySelector(
                  ".inner-wrapper-sticky"
                );
              }
              if (this.options.containerSelector) {
                var t = document.querySelectorAll(
                  this.options.containerSelector
                );
                if (
                  ((t = Array.prototype.slice.call(t)).forEach(function (e, t) {
                    e.contains(a.sidebar) && (a.container = e);
                  }),
                  !t.length)
                )
                  throw new Error(
                    "The container does not contains on the sidebar."
                  );
              }
              "function" != typeof this.options.topSpacing &&
                (this.options.topSpacing =
                  parseInt(this.options.topSpacing) || 0),
                "function" != typeof this.options.bottomSpacing &&
                  (this.options.bottomSpacing =
                    parseInt(this.options.bottomSpacing) || 0),
                this._widthBreakpoint(),
                this.calcDimensions(),
                this.stickyPosition(),
                this.bindEvents(),
                (this._initialized = !0);
            },
          },
          {
            key: "bindEvents",
            value: function () {
              window.addEventListener("resize", this, {
                passive: !0,
                capture: !1,
              }),
                window.addEventListener("scroll", this, {
                  passive: !0,
                  capture: !1,
                }),
                this.sidebar.addEventListener("update" + n, this),
                this.options.resizeSensor &&
                  "undefined" != typeof ResizeSensor &&
                  (new ResizeSensor(this.sidebarInner, this.handleEvent),
                  new ResizeSensor(this.container, this.handleEvent));
            },
          },
          {
            key: "handleEvent",
            value: function (e) {
              this.updateSticky(e);
            },
          },
          {
            key: "calcDimensions",
            value: function () {
              var e;
              this._breakpoint ||
                (((e = this.dimensions).containerTop = o.offsetRelative(
                  this.container
                ).top),
                (e.containerHeight = this.container.clientHeight),
                (e.containerBottom = e.containerTop + e.containerHeight),
                (e.sidebarHeight = this.sidebarInner.offsetHeight),
                (e.sidebarWidth = this.sidebar.offsetWidth),
                (e.viewportHeight = window.innerHeight),
                this._calcDimensionsWithScroll());
            },
          },
          {
            key: "_calcDimensionsWithScroll",
            value: function () {
              var e = this.dimensions;
              (e.sidebarLeft = o.offsetRelative(this.sidebar).left),
                (e.viewportTop =
                  document.documentElement.scrollTop ||
                  document.body.scrollTop),
                (e.viewportBottom = e.viewportTop + e.viewportHeight),
                (e.viewportLeft =
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft),
                (e.topSpacing = this.options.topSpacing),
                (e.bottomSpacing = this.options.bottomSpacing),
                "function" == typeof e.topSpacing &&
                  (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0),
                "function" == typeof e.bottomSpacing &&
                  (e.bottomSpacing =
                    parseInt(e.bottomSpacing(this.sidebar)) || 0),
                "VIEWPORT-TOP" === this.affixedType
                  ? e.topSpacing < e.lastTopSpacing &&
                    ((e.translateY += e.lastTopSpacing - e.topSpacing),
                    (this._reStyle = !0))
                  : "VIEWPORT-BOTTOM" === this.affixedType &&
                    e.bottomSpacing < e.lastBottomSpacing &&
                    ((e.translateY += e.lastBottomSpacing - e.bottomSpacing),
                    (this._reStyle = !0)),
                (e.lastTopSpacing = e.topSpacing),
                (e.lastBottomSpacing = e.bottomSpacing);
            },
          },
          {
            key: "isSidebarFitsViewport",
            value: function () {
              return (
                this.dimensions.sidebarHeight < this.dimensions.viewportHeight
              );
            },
          },
          {
            key: "observeScrollDir",
            value: function () {
              var e,
                t = this.dimensions;
              t.lastViewportTop !== t.viewportTop &&
                ((e = "down" === this.direction ? Math.min : Math.max),
                t.viewportTop === e(t.viewportTop, t.lastViewportTop)) &&
                (this.direction = "down" === this.direction ? "up" : "down");
            },
          },
          {
            key: "getAffixType",
            value: function () {
              var e = this.dimensions,
                t = !1,
                a =
                  (this._calcDimensionsWithScroll(),
                  e.sidebarHeight + e.containerTop),
                i = e.viewportTop + e.topSpacing,
                s = e.viewportBottom - e.bottomSpacing;
              return (
                "up" === this.direction
                  ? i <= e.containerTop
                    ? ((e.translateY = 0), (t = "STATIC"))
                    : i <= e.translateY + e.containerTop
                    ? ((e.translateY = i - e.containerTop),
                      (t = "VIEWPORT-TOP"))
                    : !this.isSidebarFitsViewport() &&
                      e.containerTop <= i &&
                      (t = "VIEWPORT-UNBOTTOM")
                  : this.isSidebarFitsViewport()
                  ? e.sidebarHeight + i >= e.containerBottom
                    ? ((e.translateY = e.containerBottom - a),
                      (t = "CONTAINER-BOTTOM"))
                    : i >= e.containerTop &&
                      ((e.translateY = i - e.containerTop),
                      (t = "VIEWPORT-TOP"))
                  : e.containerBottom <= s
                  ? ((e.translateY = e.containerBottom - a),
                    (t = "CONTAINER-BOTTOM"))
                  : a + e.translateY <= s
                  ? ((e.translateY = s - a), (t = "VIEWPORT-BOTTOM"))
                  : e.containerTop + e.translateY <= i &&
                    (t = "VIEWPORT-UNBOTTOM"),
                (e.translateY = Math.max(0, e.translateY)),
                (e.translateY = Math.min(e.containerHeight, e.translateY)),
                (e.lastViewportTop = e.viewportTop),
                t
              );
            },
          },
          {
            key: "_getStyle",
            value: function (e) {
              if (void 0 !== e) {
                var t = { inner: {}, outer: {} },
                  a = this.dimensions;
                switch (e) {
                  case "VIEWPORT-TOP":
                    t.inner = {
                      position: "fixed",
                      top: a.topSpacing,
                      left: a.sidebarLeft - a.viewportLeft,
                      width: a.sidebarWidth,
                    };
                    break;
                  case "VIEWPORT-BOTTOM":
                    t.inner = {
                      position: "fixed",
                      top: "auto",
                      left: a.sidebarLeft,
                      bottom: a.bottomSpacing,
                      width: a.sidebarWidth,
                    };
                    break;
                  case "CONTAINER-BOTTOM":
                  case "VIEWPORT-UNBOTTOM":
                    var i = this._getTranslate(0, a.translateY + "px");
                    t.inner = i
                      ? { transform: i }
                      : {
                          position: "absolute",
                          top: a.translateY,
                          width: a.sidebarWidth,
                        };
                }
                switch (e) {
                  case "VIEWPORT-TOP":
                  case "VIEWPORT-BOTTOM":
                  case "VIEWPORT-UNBOTTOM":
                  case "CONTAINER-BOTTOM":
                    t.outer = { height: a.sidebarHeight, position: "relative" };
                }
                return (
                  (t.outer = o.extend({ height: "", position: "" }, t.outer)),
                  (t.inner = o.extend(
                    {
                      position: "relative",
                      top: "",
                      left: "",
                      bottom: "",
                      width: "",
                      transform: this._getTranslate(),
                    },
                    t.inner
                  )),
                  t
                );
              }
            },
          },
          {
            key: "stickyPosition",
            value: function (e) {
              if (!this._breakpoint) {
                e = this._reStyle || e || !1;
                var t = this.getAffixType(),
                  a = this._getStyle(t);
                if ((this.affixedType != t || e) && t) {
                  var i,
                    s,
                    e = "affix." + t.toLowerCase().replace("viewport-", "") + n;
                  for (i in (o.eventTrigger(this.sidebar, e),
                  "STATIC" === t
                    ? o.removeClass(this.sidebar, this.options.stickyClass)
                    : o.addClass(this.sidebar, this.options.stickyClass),
                  a.outer))
                    this.sidebar.style[i] = a.outer[i];
                  for (s in a.inner) {
                    var r = "number" == typeof a.inner[s] ? "px" : "";
                    this.sidebarInner.style[s] = a.inner[s] + r;
                  }
                  e = "affixed." + t.toLowerCase().replace("viewport-", "") + n;
                  o.eventTrigger(this.sidebar, e);
                } else
                  this._initialized &&
                    (this.sidebarInner.style.left = a.inner.left);
                this.affixedType = t;
              }
            },
          },
          {
            key: "_widthBreakpoint",
            value: function () {
              window.innerWidth <= this.options.minWidth
                ? ((this._breakpoint = !0),
                  (this.affixedType = "STATIC"),
                  this.sidebar.removeAttribute("style"),
                  o.removeClass(this.sidebar, this.options.stickyClass),
                  this.sidebarInner.removeAttribute("style"))
                : (this._breakpoint = !1);
            },
          },
          {
            key: "updateSticky",
            value: function () {
              var e,
                t = this,
                a =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              this._running ||
                ((this._running = !0),
                (e = a.type),
                requestAnimationFrame(function () {
                  "scroll" === e
                    ? (t._calcDimensionsWithScroll(),
                      t.observeScrollDir(),
                      t.stickyPosition())
                    : (t._widthBreakpoint(),
                      t.calcDimensions(),
                      t.stickyPosition(!0)),
                    (t._running = !1);
                }));
            },
          },
          {
            key: "_setSupportFeatures",
            value: function () {
              var e = this.support;
              (e.transform = o.supportTransform()),
                (e.transform3d = o.supportTransform(!0));
            },
          },
          {
            key: "_getTranslate",
            value: function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return this.support.transform3d
                ? "translate3d(" +
                    e +
                    ", " +
                    t +
                    ", " +
                    (2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0) +
                    ")"
                : !!this.support.translate && "translate(" + e + ", " + t + ")";
            },
          },
          {
            key: "destroy",
            value: function () {
              window.removeEventListener("resize", this, { caption: !1 }),
                window.removeEventListener("scroll", this, { caption: !1 }),
                this.sidebar.classList.remove(this.options.stickyClass),
                (this.sidebar.style.minHeight = ""),
                this.sidebar.removeEventListener("update" + n, this);
              var e,
                t,
                a = { inner: {}, outer: {} };
              for (e in ((a.inner = {
                position: "",
                top: "",
                left: "",
                bottom: "",
                width: "",
                transform: "",
              }),
              (a.outer = { height: "", position: "" }),
              a.outer))
                this.sidebar.style[e] = a.outer[e];
              for (t in a.inner) this.sidebarInner.style[t] = a.inner[t];
              this.options.resizeSensor &&
                "undefined" != typeof ResizeSensor &&
                (ResizeSensor.detach(this.sidebarInner, this.handleEvent),
                ResizeSensor.detach(this.container, this.handleEvent));
            },
          },
        ],
        [
          {
            key: "supportTransform",
            value: function (e) {
              var a = !1,
                e = e ? "perspective" : "transform",
                t = e.charAt(0).toUpperCase() + e.slice(1),
                i = document.createElement("support").style;
              return (
                (e + " " + ["Webkit", "Moz", "O", "ms"].join(t + " ") + t)
                  .split(" ")
                  .forEach(function (e, t) {
                    if (void 0 !== i[e]) return (a = e), !1;
                  }),
                a
              );
            },
          },
          {
            key: "eventTrigger",
            value: function (e, t, a) {
              try {
                var i = new CustomEvent(t, { detail: a });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  !0,
                  !0,
                  a
                );
              }
              e.dispatchEvent(i);
            },
          },
          {
            key: "extend",
            value: function (e, t) {
              var a,
                i = {};
              for (a in e) void 0 !== t[a] ? (i[a] = t[a]) : (i[a] = e[a]);
              return i;
            },
          },
          {
            key: "offsetRelative",
            value: function (e) {
              var t = { left: 0, top: 0 };
              do {
                var a = e.offsetTop,
                  i = e.offsetLeft;
              } while (
                (isNaN(a) || (t.top += a),
                isNaN(i) || (t.left += i),
                (e = "BODY" === e.tagName ? e.parentElement : e.offsetParent))
              );
              return t;
            },
          },
          {
            key: "addClass",
            value: function (e, t) {
              o.hasClass(e, t) ||
                (e.classList ? e.classList.add(t) : (e.className += " " + t));
            },
          },
          {
            key: "removeClass",
            value: function (e, t) {
              o.hasClass(e, t) &&
                (e.classList
                  ? e.classList.remove(t)
                  : (e.className = e.className.replace(
                      new RegExp(
                        "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                        "gi"
                      ),
                      " "
                    )));
            },
          },
          {
            key: "hasClass",
            value: function (e, t) {
              return e.classList
                ? e.classList.contains(t)
                : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
            },
          },
        ]
      );
    var n,
      r,
      e = o;
    function o(e) {
      var t = this,
        a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        i = this,
        s = o;
      if (!(i instanceof s))
        throw new TypeError("Cannot call a class as a function");
      if (
        ((this.options = o.extend(r, a)),
        (this.sidebar = "string" == typeof e ? document.querySelector(e) : e),
        void 0 === this.sidebar)
      )
        throw new Error("There is no specific sidebar element.");
      (this.sidebarInner = !1),
        (this.container = this.sidebar.parentElement),
        (this.affixedType = "STATIC"),
        (this.direction = "down"),
        (this.support = { transform: !1, transform3d: !1 }),
        (this._initialized = !1),
        (this._reStyle = !1),
        (this._breakpoint = !1),
        (this._resizeListeners = []),
        (this.dimensions = {
          translateY: 0,
          topSpacing: 0,
          lastTopSpacing: 0,
          bottomSpacing: 0,
          lastBottomSpacing: 0,
          sidebarHeight: 0,
          sidebarWidth: 0,
          containerTop: 0,
          containerHeight: 0,
          viewportHeight: 0,
          viewportTop: 0,
          lastViewportTop: 0,
        }),
        ["handleEvent"].forEach(function (e) {
          t[e] = t[e].bind(t);
        }),
        this.initialize();
    }
    function i(e, t) {
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    return (window.StickySidebar = e);
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    "use strict";
    function i(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function s(t, a) {
      void 0 === t && (t = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach((e) => {
          void 0 === t[e]
            ? (t[e] = a[e])
            : i(a[e]) &&
              i(t[e]) &&
              0 < Object.keys(a[e]).length &&
              s(t[e], a[e]);
        });
    }
    const t = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function S() {
      var e = "undefined" != typeof document ? document : {};
      return s(e, t), e;
    }
    const H = {
      document: t,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function L() {
      var e = "undefined" != typeof window ? window : {};
      return s(e, H), e;
    }
    class n extends Array {
      constructor(e) {
        if ("number" == typeof e) super(e);
        else {
          super(...(e || []));
          {
            e = this;
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          }
        }
      }
    }
    function r(e) {
      const t = [];
      return (
        (e = void 0 === e ? [] : e).forEach((e) => {
          Array.isArray(e) ? t.push(...r(e)) : t.push(e);
        }),
        t
      );
    }
    function o(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function O(e, i) {
      const t = L(),
        s = S();
      let a = [];
      if (!i && e instanceof n) return e;
      if (!e) return new n(a);
      if ("string" == typeof e) {
        const t = e.trim();
        if (0 <= t.indexOf("<") && 0 <= t.indexOf(">")) {
          let e = "div";
          0 === t.indexOf("<li") && (e = "ul"),
            0 === t.indexOf("<tr") && (e = "tbody"),
            (0 !== t.indexOf("<td") && 0 !== t.indexOf("<th")) || (e = "tr"),
            0 === t.indexOf("<tbody") && (e = "table"),
            0 === t.indexOf("<option") && (e = "select");
          const i = s.createElement(e);
          i.innerHTML = t;
          for (let e = 0; e < i.childNodes.length; e += 1)
            a.push(i.childNodes[e]);
        } else
          a = (function (e) {
            if ("string" != typeof e) return [e];
            var t = [],
              a = (i || s).querySelectorAll(e);
            for (let e = 0; e < a.length; e += 1) t.push(a[e]);
            return t;
          })(e.trim());
      } else if (e.nodeType || e === t || e === s) a.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof n) return e;
        a = e;
      }
      return new n(
        (function (t) {
          var a = [];
          for (let e = 0; e < t.length; e += 1)
            -1 === a.indexOf(t[e]) && a.push(t[e]);
          return a;
        })(a)
      );
    }
    O.fn = n.prototype;
    const a = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        const i = r(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        const i = r(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        const i = r(t.map((e) => e.split(" ")));
        return (
          0 <
          o(this, (t) => 0 < i.filter((e) => t.classList.contains(e)).length)
            .length
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        const i = r(t.map((e) => e.split(" ")));
        this.forEach((t) => {
          i.forEach((e) => {
            t.classList.toggle(e);
          });
        });
      },
      attr: function (t, a) {
        if (1 === arguments.length && "string" == typeof t)
          return this[0] ? this[0].getAttribute(t) : void 0;
        for (let e = 0; e < this.length; e += 1)
          if (2 === arguments.length) this[e].setAttribute(t, a);
          else
            for (const a in t)
              (this[e][a] = t[a]), this[e].setAttribute(a, t[a]);
        return this;
      },
      removeAttr: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
        return this;
      },
      transform: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
        return this;
      },
      transition: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].style.transitionDuration =
            "string" != typeof t ? t + "ms" : t;
        return this;
      },
      on: function () {
        for (var t = arguments.length, a = new Array(t), e = 0; e < t; e++)
          a[e] = arguments[e];
        let [i, s, r, n] = a;
        function o(t) {
          var e = t.target;
          if (e) {
            var a = t.target.dom7EventData || [];
            if ((a.indexOf(t) < 0 && a.unshift(t), O(e).is(s))) r.apply(e, a);
            else {
              const t = O(e).parents();
              for (let e = 0; e < t.length; e += 1)
                O(t[e]).is(s) && r.apply(t[e], a);
            }
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof a[1] && (([i, r, n] = a), (s = void 0)),
          (n = n || !1);
        var d = i.split(" ");
        let c;
        for (let e = 0; e < this.length; e += 1) {
          const a = this[e];
          if (s)
            for (c = 0; c < d.length; c += 1) {
              const t = d[c];
              a.dom7LiveListeners || (a.dom7LiveListeners = {}),
                a.dom7LiveListeners[t] || (a.dom7LiveListeners[t] = []),
                a.dom7LiveListeners[t].push({ listener: r, proxyListener: o }),
                a.addEventListener(t, o, n);
            }
          else
            for (c = 0; c < d.length; c += 1) {
              const t = d[c];
              a.dom7Listeners || (a.dom7Listeners = {}),
                a.dom7Listeners[t] || (a.dom7Listeners[t] = []),
                a.dom7Listeners[t].push({ listener: r, proxyListener: l }),
                a.addEventListener(t, l, n);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
          a[i] = arguments[i];
        let [t, s, r, n] = a;
        "function" == typeof a[1] && (([t, r, n] = a), (s = void 0)),
          (n = n || !1);
        var o = t.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const a = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const i = this[e];
            let t;
            if (
              (!s && i.dom7Listeners
                ? (t = i.dom7Listeners[a])
                : s && i.dom7LiveListeners && (t = i.dom7LiveListeners[a]),
              t && t.length)
            )
              for (let e = t.length - 1; 0 <= e; --e) {
                const s = t[e];
                ((r && s.listener === r) ||
                  (r &&
                    s.listener &&
                    s.listener.dom7proxy &&
                    s.listener.dom7proxy === r) ||
                  !r) &&
                  (i.removeEventListener(a, s.proxyListener, n),
                  t.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function () {
        for (
          var t = L(), a = arguments.length, i = new Array(a), s = 0;
          s < a;
          s++
        )
          i[s] = arguments[s];
        const r = i[0].split(" "),
          n = i[1];
        for (let e = 0; e < r.length; e += 1) {
          const s = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            if (t.CustomEvent) {
              const a = new t.CustomEvent(s, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = i.filter((e, t) => 0 < t)),
                r.dispatchEvent(a),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (a) {
        const i = this;
        return (
          a &&
            i.on("transitionend", function e(t) {
              t.target === this && (a.call(this, t), i.off("transitionend", e));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = L();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        var e, t, a, i, s, r;
        return 0 < this.length
          ? ((r = L()),
            (i = S()),
            (t = (e = this[0]).getBoundingClientRect()),
            (i = i.body),
            (a = e.clientTop || i.clientTop || 0),
            (i = e.clientLeft || i.clientLeft || 0),
            (s = e === r ? r.scrollY : e.scrollTop),
            (r = e === r ? r.scrollX : e.scrollLeft),
            { top: t.top + s - a, left: t.left + r - i })
          : null;
      },
      css: function (e, t) {
        var a = L();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return a.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e)
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      },
      each: function (a) {
        return (
          a &&
            this.forEach((e, t) => {
              a.apply(e, [e, t]);
            }),
          this
        );
      },
      html: function (t) {
        if (void 0 === t) return this[0] ? this[0].innerHTML : null;
        for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
        return this;
      },
      text: function (t) {
        if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
        return this;
      },
      is: function (e) {
        var t = L(),
          a = S(),
          i = this[0];
        let s, r;
        if (i && void 0 !== e)
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (s = O(e), r = 0; r < s.length; r += 1)
              if (s[r] === i) return !0;
          } else {
            if (e === a) return i === a;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n)
              for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
                if (s[r] === i) return !0;
          }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        var t;
        return void 0 === e
          ? this
          : O(
              (t = this.length) - 1 < e
                ? []
                : e < 0
                ? (t = t + e) < 0
                  ? []
                  : [this[t]]
                : [this[e]]
            );
      },
      append: function () {
        var a,
          i = S();
        for (let e = 0; e < arguments.length; e += 1) {
          a = e < 0 || arguments.length <= e ? void 0 : arguments[e];
          for (let t = 0; t < this.length; t += 1)
            if ("string" == typeof a) {
              const S = i.createElement("div");
              for (S.innerHTML = a; S.firstChild; )
                this[t].appendChild(S.firstChild);
            } else if (a instanceof n)
              for (let e = 0; e < a.length; e += 1) this[t].appendChild(a[e]);
            else this[t].appendChild(a);
        }
        return this;
      },
      prepend: function (e) {
        var t = S();
        let a, i;
        for (a = 0; a < this.length; a += 1)
          if ("string" == typeof e) {
            const S = t.createElement("div");
            for (S.innerHTML = e, i = S.childNodes.length - 1; 0 <= i; --i)
              this[a].insertBefore(S.childNodes[i], this[a].childNodes[0]);
          } else if (e instanceof n)
            for (i = 0; i < e.length; i += 1)
              this[a].insertBefore(e[i], this[a].childNodes[0]);
          else this[a].insertBefore(e, this[a].childNodes[0]);
        return this;
      },
      next: function (e) {
        return 0 < this.length
          ? e
            ? this[0].nextElementSibling && O(this[0].nextElementSibling).is(e)
              ? O([this[0].nextElementSibling])
              : O([])
            : this[0].nextElementSibling
            ? O([this[0].nextElementSibling])
            : O([])
          : O([]);
      },
      nextAll: function (e) {
        var t = [];
        let a = this[0];
        if (!a) return O([]);
        for (; a.nextElementSibling; ) {
          var i = a.nextElementSibling;
          (e && !O(i).is(e)) || t.push(i), (a = i);
        }
        return O(t);
      },
      prev: function (e) {
        var t;
        return 0 < this.length
          ? ((t = this[0]),
            e
              ? t.previousElementSibling && O(t.previousElementSibling).is(e)
                ? O([t.previousElementSibling])
                : O([])
              : t.previousElementSibling
              ? O([t.previousElementSibling])
              : O([]))
          : O([]);
      },
      prevAll: function (e) {
        var t = [];
        let a = this[0];
        if (!a) return O([]);
        for (; a.previousElementSibling; ) {
          var i = a.previousElementSibling;
          (e && !O(i).is(e)) || t.push(i), (a = i);
        }
        return O(t);
      },
      parent: function (t) {
        var a = [];
        for (let e = 0; e < this.length; e += 1)
          null === this[e].parentNode ||
            (t && !O(this[e].parentNode).is(t)) ||
            a.push(this[e].parentNode);
        return O(a);
      },
      parents: function (a) {
        var i = [];
        for (let t = 0; t < this.length; t += 1) {
          let e = this[t].parentNode;
          for (; e; ) (a && !O(e).is(a)) || i.push(e), (e = e.parentNode);
        }
        return O(i);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? O([]) : (t = t.is(e) ? t : t.parents(e).eq(0));
      },
      find: function (t) {
        var a = [];
        for (let e = 0; e < this.length; e += 1) {
          var i = this[e].querySelectorAll(t);
          for (let e = 0; e < i.length; e += 1) a.push(i[e]);
        }
        return O(a);
      },
      children: function (t) {
        var a = [];
        for (let e = 0; e < this.length; e += 1) {
          var i = this[e].children;
          for (let e = 0; e < i.length; e += 1)
            (t && !O(i[e]).is(t)) || a.push(i[e]);
        }
        return O(a);
      },
      filter: function (e) {
        return O(o(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    function C(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function g() {
      return Date.now();
    }
    function I(e, t) {
      void 0 === t && (t = "x");
      var a = L();
      let i, s, r;
      e = (function (e) {
        var t = L();
        let a;
        return (a =
          (a =
            !(a = t.getComputedStyle ? t.getComputedStyle(e, null) : a) &&
            e.currentStyle
              ? e.currentStyle
              : a) || e.style);
      })(e);
      return (
        a.WebKitCSSMatrix
          ? (6 < (s = e.transform || e.webkitTransform).split(",").length &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new a.WebKitCSSMatrix("none" === s ? "" : s)))
          : ((r =
              e.MozTransform ||
              e.OTransform ||
              e.MsTransform ||
              e.msTransform ||
              e.transform ||
              e
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (s = a.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        (s =
          "y" === t
            ? a.WebKitCSSMatrix
              ? r.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])
            : s) || 0
      );
    }
    function d(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function h(e) {
      const a = Object(arguments.length <= 0 ? void 0 : e),
        t = ["__proto__", "constructor", "prototype"];
      for (let e = 1; e < arguments.length; e += 1) {
        var i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
        if (
          null != i &&
          ((o = i),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? o instanceof HTMLElement
            : o && (1 === o.nodeType || 11 === o.nodeType)))
        ) {
          var s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let e = 0, t = s.length; e < t; e += 1) {
            var r = s[e],
              n = Object.getOwnPropertyDescriptor(i, r);
            void 0 !== n &&
              n.enumerable &&
              (d(a[r]) && d(i[r])
                ? i[r].__swiper__
                  ? (a[r] = i[r])
                  : h(a[r], i[r])
                : d(a[r]) || !d(i[r]) || ((a[r] = {}), i[r].__swiper__)
                ? (a[r] = i[r])
                : h(a[r], i[r]));
          }
        }
      }
      var o;
      return a;
    }
    function M(e, t, a) {
      e.style.setProperty(t, a);
    }
    function b(e) {
      let { swiper: a, targetPosition: i, side: s } = e;
      const r = L(),
        n = -a.translate;
      let o,
        l = null;
      const d = a.params.speed,
        c =
          ((a.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(a.cssModeFrameID),
          i > n ? "next" : "prev"),
        p = (e, t) => ("next" === c && t <= e) || ("prev" === c && e <= t),
        u = () => {
          (o = new Date().getTime()), null === l && (l = o);
          var e = Math.max(Math.min((o - l) / d, 1), 0),
            e = 0.5 - Math.cos(e * Math.PI) / 2;
          let t = n + e * (i - n);
          p(t, i) && (t = i),
            a.wrapperEl.scrollTo({ [s]: t }),
            p(t, i)
              ? ((a.wrapperEl.style.overflow = "hidden"),
                (a.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (a.wrapperEl.style.overflow = ""),
                    a.wrapperEl.scrollTo({ [s]: t });
                }),
                r.cancelAnimationFrame(a.cssModeFrameID))
              : (a.cssModeFrameID = r.requestAnimationFrame(u));
        };
      u();
    }
    let e, c, l;
    function u() {
      return (e =
        e ||
        (function () {
          const a = L(),
            e = S();
          return {
            smoothScroll:
              e.documentElement && "scrollBehavior" in e.documentElement.style,
            touch: !!(
              "ontouchstart" in a ||
              (a.DocumentTouch && e instanceof a.DocumentTouch)
            ),
            passiveListener: (function () {
              let e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0;
                  },
                });
                a.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in a,
          };
        })());
    }
    function N() {
      return (l =
        l ||
        (function () {
          const e = L();
          return {
            isSafari:
              0 <=
                (t = e.navigator.userAgent.toLowerCase()).indexOf("safari") &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
          var t;
        })());
    }
    function p(e) {
      var { swiper: e, runCallbacks: t, direction: a, step: i } = e,
        { activeIndex: s, previousIndex: r } = e;
      let n = a;
      if (
        ((n = n || (r < s ? "next" : s < r ? "prev" : "reset")),
        e.emit("transition" + i),
        t && s !== r)
      ) {
        if ("reset" === n) return e.emit("slideResetTransition" + i);
        e.emit("slideChangeTransition" + i),
          "next" === n
            ? e.emit("slideNextTransition" + i)
            : e.emit("slidePrevTransition" + i);
      }
    }
    function m() {
      var e,
        t,
        a = this,
        { params: i, el: s } = a;
      (s && 0 === s.offsetWidth) ||
        (i.breakpoints && a.setBreakpoint(),
        ({ allowSlideNext: s, allowSlidePrev: e, snapGrid: t } = a),
        (a.allowSlideNext = !0),
        (a.allowSlidePrev = !0),
        a.updateSize(),
        a.updateSlides(),
        a.updateSlidesClasses(),
        ("auto" === i.slidesPerView || 1 < i.slidesPerView) &&
        a.isEnd &&
        !a.isBeginning &&
        !a.params.centeredSlides
          ? a.slideTo(a.slides.length - 1, 0, !1, !0)
          : a.slideTo(a.activeIndex, 0, !1, !0),
        a.autoplay &&
          a.autoplay.running &&
          a.autoplay.paused &&
          a.autoplay.run(),
        (a.allowSlidePrev = e),
        (a.allowSlideNext = s),
        a.params.watchOverflow && t !== a.snapGrid && a.checkOverflow());
    }
    Object.keys(a).forEach((e) => {
      Object.defineProperty(O.fn, e, { value: a[e], writable: !0 });
    });
    let f = !1;
    function B() {}
    const v = (e, t) => {
        var a = S(),
          {
            params: i,
            touchEvents: s,
            el: r,
            wrapperEl: n,
            device: o,
            support: l,
          } = e,
          d = !!i.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener";
        if (l.touch) {
          const t = !(
            "touchstart" !== s.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[c](s.start, e.onTouchStart, t),
            r[c](
              s.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: d } : d
            ),
            r[c](s.end, e.onTouchEnd, t),
            s.cancel && r[c](s.cancel, e.onTouchEnd, t);
        } else
          r[c](s.start, e.onTouchStart, !1),
            a[c](s.move, e.onTouchMove, d),
            a[c](s.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          r[c]("click", e.onClick, !0),
          i.cssMode && n[c]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[t](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                m,
                !0
              )
            : e[t]("observerUpdate", m, !0);
      },
      w = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
    var y = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    const E = {
        eventsEmitter: {
          on(e, t, a) {
            const i = this;
            if (i.eventsListeners && !i.destroyed && "function" == typeof t) {
              const s = a ? "unshift" : "push";
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][s](t);
              });
            }
            return i;
          },
          once(i, s, e) {
            const r = this;
            return !r.eventsListeners || r.destroyed || "function" != typeof s
              ? r
              : ((n.__emitterProxy = s), r.on(i, n, e));
            function n() {
              r.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              s.apply(r, t);
            }
          },
          onAny(e, t) {
            var a = this;
            return (
              a.eventsListeners &&
                !a.destroyed &&
                "function" == typeof e &&
                ((t = t ? "unshift" : "push"),
                a.eventsAnyListeners.indexOf(e) < 0) &&
                a.eventsAnyListeners[t](e),
              a
            );
          },
          offAny(e) {
            var t = this;
            return (
              t.eventsListeners &&
                !t.destroyed &&
                t.eventsAnyListeners &&
                0 <= (e = t.eventsAnyListeners.indexOf(e)) &&
                t.eventsAnyListeners.splice(e, 1),
              t
            );
          },
          off(e, i) {
            const s = this;
            return (
              !s.eventsListeners ||
                s.destroyed ||
                (s.eventsListeners &&
                  e.split(" ").forEach((a) => {
                    void 0 === i
                      ? (s.eventsListeners[a] = [])
                      : s.eventsListeners[a] &&
                        s.eventsListeners[a].forEach((e, t) => {
                          (e === i ||
                            (e.__emitterProxy && e.__emitterProxy === i)) &&
                            s.eventsListeners[a].splice(t, 1);
                        });
                  })),
              s
            );
          },
          emit() {
            const s = this;
            if (s.eventsListeners && !s.destroyed && s.eventsListeners) {
              let e, a, i;
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              (i =
                "string" == typeof r[0] || Array.isArray(r[0])
                  ? ((e = r[0]), (a = r.slice(1, r.length)), s)
                  : ((e = r[0].events), (a = r[0].data), r[0].context || s)),
                a.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((t) => {
                  s.eventsAnyListeners &&
                    s.eventsAnyListeners.length &&
                    s.eventsAnyListeners.forEach((e) => {
                      e.apply(i, [t, ...a]);
                    }),
                    s.eventsListeners &&
                      s.eventsListeners[t] &&
                      s.eventsListeners[t].forEach((e) => {
                        e.apply(i, a);
                      });
                });
            }
            return s;
          },
        },
        update: {
          updateSize: function () {
            var e = this;
            let t, a;
            var i = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i[0].clientWidth),
              (a =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === a && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(i.css("padding-left") || 0, 10) -
                  parseInt(i.css("padding-right") || 0, 10)),
                (a =
                  a -
                  parseInt(i.css("padding-top") || 0, 10) -
                  parseInt(i.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(a) && (a = 0),
                Object.assign(e, {
                  width: t,
                  height: a,
                  size: e.isHorizontal() ? t : a,
                }));
          },
          updateSlides: function () {
            const a = this;
            function i(e) {
              return a.isHorizontal()
                ? e
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[e];
            }
            function s(e, t) {
              return parseFloat(e.getPropertyValue(i(t)) || 0);
            }
            const r = a.params,
              { $wrapperEl: n, size: o, rtlTranslate: l, wrongRTL: d } = a,
              c = a.virtual && r.virtual.enabled,
              e = (c ? a.virtual : a).slides.length,
              p = n.children("." + a.params.slideClass),
              u = (c ? a.virtual.slides : p).length;
            let m = [];
            const h = [],
              f = [];
            let v = r.slidesOffsetBefore,
              g =
                ("function" == typeof v && (v = r.slidesOffsetBefore.call(a)),
                r.slidesOffsetAfter);
            "function" == typeof g && (g = r.slidesOffsetAfter.call(a));
            var b = a.snapGrid.length,
              w = a.slidesGrid.length;
            let y = r.spaceBetween,
              E = -v,
              x = 0,
              T = 0;
            if (void 0 !== o) {
              "string" == typeof y &&
                0 <= y.indexOf("%") &&
                (y = (parseFloat(y.replace("%", "")) / 100) * o),
                (a.virtualSize = -y),
                l
                  ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                  : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                r.centeredSlides &&
                  r.cssMode &&
                  (M(a.wrapperEl, "--swiper-centered-offset-before", ""),
                  M(a.wrapperEl, "--swiper-centered-offset-after", ""));
              var S = r.grid && 1 < r.grid.rows && a.grid;
              let t;
              S && a.grid.initSlides(u);
              var C =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                0 <
                  Object.keys(r.breakpoints).filter(
                    (e) => void 0 !== r.breakpoints[e].slidesPerView
                  ).length;
              for (let e = 0; e < u; e += 1) {
                t = 0;
                const l = p.eq(e);
                if (
                  (S && a.grid.updateSlide(e, l, u, i),
                  "none" !== l.css("display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    C && (p[e].style[i("width")] = "");
                    const o = getComputedStyle(l[0]),
                      d = l[0].style.transform,
                      c = l[0].style.webkitTransform;
                    if (
                      (d && (l[0].style.transform = "none"),
                      c && (l[0].style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      t = a.isHorizontal()
                        ? l.outerWidth(!0)
                        : l.outerHeight(!0);
                    else {
                      const a = s(o, "width"),
                        i = s(o, "padding-left"),
                        r = s(o, "padding-right"),
                        n = s(o, "margin-left"),
                        d = s(o, "margin-right"),
                        c = o.getPropertyValue("box-sizing");
                      if (c && "border-box" === c) t = a + n + d;
                      else {
                        const { clientWidth: s, offsetWidth: o } = l[0];
                        t = a + i + r + n + d + (o - s);
                      }
                    }
                    d && (l[0].style.transform = d),
                      c && (l[0].style.webkitTransform = c),
                      r.roundLengths && (t = Math.floor(t));
                  } else
                    (t = (o - (r.slidesPerView - 1) * y) / r.slidesPerView),
                      r.roundLengths && (t = Math.floor(t)),
                      p[e] && (p[e].style[i("width")] = t + "px");
                  p[e] && (p[e].swiperSlideSize = t),
                    f.push(t),
                    r.centeredSlides
                      ? ((E = E + t / 2 + x / 2 + y),
                        0 === x && 0 !== e && (E = E - o / 2 - y),
                        0 === e && (E = E - o / 2 - y),
                        Math.abs(E) < 0.001 && (E = 0),
                        r.roundLengths && (E = Math.floor(E)),
                        T % r.slidesPerGroup == 0 && m.push(E),
                        h.push(E))
                      : (r.roundLengths && (E = Math.floor(E)),
                        (T - Math.min(a.params.slidesPerGroupSkip, T)) %
                          a.params.slidesPerGroup ==
                          0 && m.push(E),
                        h.push(E),
                        (E = E + t + y)),
                    (a.virtualSize += t + y),
                    (x = t),
                    (T += 1);
                }
              }
              if (
                ((a.virtualSize = Math.max(a.virtualSize, o) + g),
                l &&
                  d &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  n.css({ width: a.virtualSize + r.spaceBetween + "px" }),
                r.setWrapperSize &&
                  n.css({
                    [i("width")]: a.virtualSize + r.spaceBetween + "px",
                  }),
                S && a.grid.updateWrapperSize(t, m, i),
                !r.centeredSlides)
              ) {
                const i = [];
                for (let t = 0; t < m.length; t += 1) {
                  let e = m[t];
                  r.roundLengths && (e = Math.floor(e)),
                    m[t] <= a.virtualSize - o && i.push(e);
                }
                (m = i),
                  1 <
                    Math.floor(a.virtualSize - o) -
                      Math.floor(m[m.length - 1]) && m.push(a.virtualSize - o);
              }
              if ((0 === m.length && (m = [0]), 0 !== r.spaceBetween)) {
                const s =
                  a.isHorizontal() && l ? "marginLeft" : i("marginRight");
                p.filter((e, t) => !r.cssMode || t !== p.length - 1).css({
                  [s]: y + "px",
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let t = 0;
                f.forEach((e) => {
                  t += e + (r.spaceBetween || 0);
                });
                const i = (t -= r.spaceBetween) - o;
                m = m.map((e) => (e < 0 ? -v : e > i ? i + g : e));
              }
              if (r.centerInsufficientSlides) {
                let t = 0;
                if (
                  (f.forEach((e) => {
                    t += e + (r.spaceBetween || 0);
                  }),
                  (t -= r.spaceBetween) < o)
                ) {
                  const i = (o - t) / 2;
                  m.forEach((e, t) => {
                    m[t] = e - i;
                  }),
                    h.forEach((e, t) => {
                      h[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(a, {
                  slides: p,
                  snapGrid: m,
                  slidesGrid: h,
                  slidesSizesGrid: f,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                M(a.wrapperEl, "--swiper-centered-offset-before", -m[0] + "px"),
                  M(
                    a.wrapperEl,
                    "--swiper-centered-offset-after",
                    a.size / 2 - f[f.length - 1] / 2 + "px"
                  );
                const i = -a.snapGrid[0],
                  s = -a.slidesGrid[0];
                (a.snapGrid = a.snapGrid.map((e) => e + i)),
                  (a.slidesGrid = a.slidesGrid.map((e) => e + s));
              }
              if (
                (u !== e && a.emit("slidesLengthChange"),
                m.length !== b &&
                  (a.params.watchOverflow && a.checkOverflow(),
                  a.emit("snapGridLengthChange")),
                h.length !== w && a.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && a.updateSlidesOffset(),
                !(
                  c ||
                  r.cssMode ||
                  ("slide" !== r.effect && "fade" !== r.effect)
                ))
              ) {
                const i = r.containerModifierClass + "backface-hidden",
                  s = a.$el.hasClass(i);
                u <= r.maxBackfaceHiddenSlides
                  ? s || a.$el.addClass(i)
                  : s && a.$el.removeClass(i);
              }
            }
          },
          updateAutoHeight: function (e) {
            const a = this,
              t = [],
              i = a.virtual && a.params.virtual.enabled;
            let s,
              r = 0;
            "number" == typeof e
              ? a.setTransition(e)
              : !0 === e && a.setTransition(a.params.speed);
            var n = (t) =>
              (i
                ? a.slides.filter(
                    (e) =>
                      parseInt(
                        e.getAttribute("data-swiper-slide-index"),
                        10
                      ) === t
                  )
                : a.slides.eq(t))[0];
            if ("auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
              if (a.params.centeredSlides)
                (a.visibleSlides || O([])).each((e) => {
                  t.push(e);
                });
              else
                for (s = 0; s < Math.ceil(a.params.slidesPerView); s += 1) {
                  const e = a.activeIndex + s;
                  if (e > a.slides.length && !i) break;
                  t.push(n(e));
                }
            else t.push(n(a.activeIndex));
            for (s = 0; s < t.length; s += 1)
              if (void 0 !== t[s]) {
                const e = t[s].offsetHeight;
                r = e > r ? e : r;
              }
            (!r && 0 !== r) || a.$wrapperEl.css("height", r + "px");
          },
          updateSlidesOffset: function () {
            var t = this.slides;
            for (let e = 0; e < t.length; e += 1)
              t[e].swiperSlideOffset = this.isHorizontal()
                ? t[e].offsetLeft
                : t[e].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var i = this,
              s = i.params,
              { slides: r, rtlTranslate: n, snapGrid: o } = i;
            if (0 !== r.length) {
              void 0 === r[0].swiperSlideOffset && i.updateSlidesOffset();
              let a = n ? e : -e;
              r.removeClass(s.slideVisibleClass),
                (i.visibleSlidesIndexes = []),
                (i.visibleSlides = []);
              for (let t = 0; t < r.length; t += 1) {
                var l = r[t];
                let e = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (e -= r[0].swiperSlideOffset);
                const O =
                    (a + (s.centeredSlides ? i.minTranslate() : 0) - e) /
                    (l.swiperSlideSize + s.spaceBetween),
                  d =
                    (a - o[0] + (s.centeredSlides ? i.minTranslate() : 0) - e) /
                    (l.swiperSlideSize + s.spaceBetween),
                  c = -(a - e),
                  p = c + i.slidesSizesGrid[t];
                ((0 <= c && c < i.size - 1) ||
                  (1 < p && p <= i.size) ||
                  (c <= 0 && p >= i.size)) &&
                  (i.visibleSlides.push(l),
                  i.visibleSlidesIndexes.push(t),
                  r.eq(t).addClass(s.slideVisibleClass)),
                  (l.progress = n ? -O : O),
                  (l.originalProgress = n ? -d : d);
              }
              i.visibleSlides = O(i.visibleSlides);
            }
          },
          updateProgress: function (e) {
            var t = this;
            if (void 0 === e) {
              const a = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * a) || 0;
            }
            const a = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: s, isBeginning: r, isEnd: n } = t;
            var o = r,
              l = n;
            (n =
              0 == i
                ? ((s = 0), (r = !0))
                : ((s = (e - t.minTranslate()) / i), (r = s <= 0), 1 <= s)),
              Object.assign(t, { progress: s, isBeginning: r, isEnd: n }),
              (a.watchSlidesProgress || (a.centeredSlides && a.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !o && t.emit("reachBeginning toEdge"),
              n && !l && t.emit("reachEnd toEdge"),
              ((o && !r) || (l && !n)) && t.emit("fromEdge"),
              t.emit("progress", s);
          },
          updateSlidesClasses: function () {
            var {
                slides: e,
                params: t,
                $wrapperEl: a,
                activeIndex: i,
                realIndex: s,
              } = this,
              r = this.virtual && t.virtual.enabled;
            e.removeClass(
              `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` +
                t.slideDuplicatePrevClass
            ),
              (r = r
                ? this.$wrapperEl.find(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]`
                  )
                : e.eq(i)).addClass(t.slideActiveClass),
              t.loop &&
                (r.hasClass(t.slideDuplicateClass)
                  ? a.children(
                      `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                  : a.children(
                      `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                ).addClass(t.slideDuplicateActiveClass);
            let n = r
                .nextAll("." + t.slideClass)
                .eq(0)
                .addClass(t.slideNextClass),
              o =
                (t.loop &&
                  0 === n.length &&
                  (n = e.eq(0)).addClass(t.slideNextClass),
                r
                  .prevAll("." + t.slideClass)
                  .eq(0)
                  .addClass(t.slidePrevClass));
            t.loop &&
              0 === o.length &&
              (o = e.eq(-1)).addClass(t.slidePrevClass),
              t.loop &&
                ((n.hasClass(t.slideDuplicateClass)
                  ? a.children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${n.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                  : a.children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${n.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                ).addClass(t.slideDuplicateNextClass),
                (o.hasClass(t.slideDuplicateClass)
                  ? a.children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                  : a.children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                ).addClass(t.slideDuplicatePrevClass)),
              this.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t = this,
              a = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: s,
                params: r,
                activeIndex: n,
                realIndex: o,
                snapIndex: l,
              } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? a >= i[e] && a < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (c = e)
                    : a >= i[e] && a < i[e + 1] && (c = e + 1)
                  : a >= i[e] && (c = e);
              r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (0 <= s.indexOf(a)) d = s.indexOf(a);
            else {
              const e = Math.min(r.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / r.slidesPerGroup);
            }
            d >= s.length && (d = s.length - 1),
              c === n
                ? d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
                : ((e = parseInt(
                    t.slides.eq(c).attr("data-swiper-slide-index") || c,
                    10
                  )),
                  Object.assign(t, {
                    snapIndex: d,
                    realIndex: e,
                    previousIndex: n,
                    activeIndex: c,
                  }),
                  t.emit("activeIndexChange"),
                  t.emit("snapIndexChange"),
                  o !== e && t.emit("realIndexChange"),
                  (t.initialized || t.params.runCallbacksOnInit) &&
                    t.emit("slideChange"));
          },
          updateClickedSlide: function (e) {
            var t = this,
              a = t.params,
              i = O(e).closest("." + a.slideClass)[0];
            let s,
              r = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (r = !0), (s = e);
                  break;
                }
            i && r
              ? ((t.clickedSlide = i),
                t.virtual && t.params.virtual.enabled
                  ? (t.clickedIndex = parseInt(
                      O(i).attr("data-swiper-slide-index"),
                      10
                    ))
                  : (t.clickedIndex = s),
                a.slideToClickedSlide &&
                  void 0 !== t.clickedIndex &&
                  t.clickedIndex !== t.activeIndex &&
                  t.slideToClickedSlide())
              : ((t.clickedSlide = void 0), (t.clickedIndex = void 0));
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var {
              params: t,
              rtlTranslate: a,
              translate: i,
              $wrapperEl: s,
            } = this;
            if (t.virtualTranslate) return a ? -i : i;
            if (t.cssMode) return i;
            let r = I(s[0], e);
            return (r = a ? -r : r) || 0;
          },
          setTranslate: function (e, t) {
            var a = this,
              {
                rtlTranslate: i,
                params: s,
                $wrapperEl: r,
                wrapperEl: n,
                progress: o,
              } = a;
            let l = 0,
              d = 0;
            a.isHorizontal() ? (l = i ? -e : e) : (d = e),
              s.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              s.cssMode
                ? (n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    a.isHorizontal() ? -l : -d)
                : s.virtualTranslate ||
                  r.transform(`translate3d(${l}px, ${d}px, 0px)`),
              (a.previousTranslate = a.translate),
              (a.translate = a.isHorizontal() ? l : d);
            i = a.maxTranslate() - a.minTranslate();
            (0 == i ? 0 : (e - a.minTranslate()) / i) !== o &&
              a.updateProgress(e),
              a.emit("setTranslate", a.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, a, i, s) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === a && (a = !0),
              void 0 === i && (i = !0);
            const r = this,
              { params: n, wrapperEl: o } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            var l = r.minTranslate(),
              d = r.maxTranslate(),
              l = i && l < e ? l : i && e < d ? d : e;
            if ((r.updateProgress(l), n.cssMode)) {
              const e = r.isHorizontal();
              if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -l;
              else {
                if (!r.support.smoothScroll)
                  return (
                    b({
                      swiper: r,
                      targetPosition: -l,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                o.scrollTo({ [e ? "left" : "top"]: -l, behavior: "smooth" });
              }
            } else
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(l),
                  a &&
                    (r.emit("beforeTransitionStart", t, s),
                    r.emit("transitionEnd")))
                : (r.setTransition(t),
                  r.setTranslate(l),
                  a &&
                    (r.emit("beforeTransitionStart", t, s),
                    r.emit("transitionStart")),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          a) &&
                          r.emit("transitionEnd");
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    )));
            return !0;
          },
        },
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
              this.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this["params"];
            a.cssMode ||
              (a.autoHeight && this.updateAutoHeight(),
              p({
                swiper: this,
                runCallbacks: e,
                direction: t,
                step: "Start",
              }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this["params"];
            (this.animating = !1),
              a.cssMode ||
                (this.setTransition(0),
                p({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (e, t, a, i, s) {
            if (
              (void 0 === t && (t = this.params.speed),
              void 0 === a && (a = !0),
              "number" != typeof (e = void 0 === e ? 0 : e) &&
                "string" != typeof e)
            )
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            var {
              params: e,
              snapGrid: o,
              slidesGrid: l,
              previousIndex: d,
              activeIndex: c,
              rtlTranslate: p,
              wrapperEl: u,
              enabled: m,
            } = r;
            if (
              (r.animating && e.preventInteractionOnTransition) ||
              (!m && !i && !s)
            )
              return !1;
            m = Math.min(r.params.slidesPerGroupSkip, n);
            let h = m + Math.floor((n - m) / r.params.slidesPerGroup);
            var f = -o[(h = h >= o.length ? o.length - 1 : h)];
            if (e.normalizeSlideIndex)
              for (let e = 0; e < l.length; e += 1) {
                const t = -Math.floor(100 * f),
                  a = Math.floor(100 * l[e]),
                  i = Math.floor(100 * l[e + 1]);
                void 0 !== l[e + 1]
                  ? t >= a && t < i - (i - a) / 2
                    ? (n = e)
                    : t >= a && t < i && (n = e + 1)
                  : t >= a && (n = e);
              }
            if (r.initialized && n !== c) {
              if (!r.allowSlideNext && f < r.translate && f < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                f > r.translate &&
                f > r.maxTranslate() &&
                (c || 0) !== n
              )
                return !1;
            }
            let v;
            if (
              (n !== (d || 0) && a && r.emit("beforeSlideChangeStart"),
              r.updateProgress(f),
              (v = n > c ? "next" : n < c ? "prev" : "reset"),
              (p && -f === r.translate) || (!p && f === r.translate))
            )
              return (
                r.updateActiveIndex(n),
                e.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== e.effect && r.setTranslate(f),
                "reset" != v &&
                  (r.transitionStart(a, v), r.transitionEnd(a, v)),
                !1
              );
            if (e.cssMode) {
              const e = r.isHorizontal(),
                a = p ? f : -f;
              if (0 === t) {
                const t = r.virtual && r.params.virtual.enabled;
                t &&
                  ((r.wrapperEl.style.scrollSnapType = "none"),
                  (r._immediateVirtual = !0)),
                  (u[e ? "scrollLeft" : "scrollTop"] = a),
                  t &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ""),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    b({
                      swiper: r,
                      targetPosition: a,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                u.scrollTo({ [e ? "left" : "top"]: a, behavior: "smooth" });
              }
            } else
              r.setTransition(t),
                r.setTranslate(f),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(a, v),
                0 === t
                  ? r.transitionEnd(a, v)
                  : r.animating ||
                    ((r.animating = !0),
                    r.onSlideToWrapperTransitionEnd ||
                      (r.onSlideToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onSlideToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onSlideToWrapperTransitionEnd
                          ),
                          (r.onSlideToWrapperTransitionEnd = null),
                          delete r.onSlideToWrapperTransitionEnd,
                          r.transitionEnd(a, v));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ));
            return !0;
          },
          slideToLoop: function (e, t, a, i) {
            if (
              (void 0 === t && (t = this.params.speed),
              void 0 === a && (a = !0),
              "string" == typeof (e = void 0 === e ? 0 : e))
            ) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            let s = e;
            return (
              this.params.loop && (s += this.loopedSlides),
              this.slideTo(s, t, a, i)
            );
          },
          slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
              { animating: s, enabled: r, params: n } = i;
            if (!r) return i;
            let o = n.slidesPerGroup;
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            r = i.activeIndex < n.slidesPerGroupSkip ? 1 : o;
            if (n.loop) {
              if (s && n.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return n.rewind && i.isEnd
              ? i.slideTo(0, e, t, a)
              : i.slideTo(i.activeIndex + r, e, t, a);
          },
          slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                params: s,
                animating: r,
                snapGrid: n,
                slidesGrid: o,
                rtlTranslate: l,
                enabled: d,
              } = i;
            if (!d) return i;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = c(l ? i.translate : -i.translate),
              u = n.map((e) => c(e));
            let m = n[u.indexOf(p) - 1];
            if (void 0 === m && s.cssMode) {
              let a;
              n.forEach((e, t) => {
                p >= e && (a = t);
              }),
                void 0 !== a && (m = n[0 < a ? a - 1 : a]);
            }
            let h = 0;
            if (
              (void 0 !== m &&
                ((h = o.indexOf(m)) < 0 && (h = i.activeIndex - 1),
                "auto" === s.slidesPerView) &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0))),
              s.rewind && i.isBeginning)
            ) {
              const s =
                i.params.virtual && i.params.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1;
              return i.slideTo(s, e, t, a);
            }
            return i.slideTo(h, e, t, a);
          },
          slideReset: function (e, t, a) {
            return (
              void 0 === e && (e = this.params.speed),
              this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), a)
            );
          },
          slideToClosest: function (e, t, a, i) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === i && (i = 0.5);
            var s = this;
            let r = s.activeIndex;
            var n = Math.min(s.params.slidesPerGroupSkip, r),
              n = n + Math.floor((r - n) / s.params.slidesPerGroup),
              o = s.rtlTranslate ? s.translate : -s.translate;
            if (o >= s.snapGrid[n]) {
              const e = s.snapGrid[n];
              o - e > (s.snapGrid[n + 1] - e) * i &&
                (r += s.params.slidesPerGroup);
            } else {
              const e = s.snapGrid[n - 1];
              o - e <= (s.snapGrid[n] - e) * i &&
                (r -= s.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, s.slidesGrid.length - 1)),
              s.slideTo(r, e, t, a)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: a } = e,
              i =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let s,
              r = e.clickedIndex;
            t.loop
              ? e.animating ||
                ((s = parseInt(
                  O(e.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                t.centeredSlides
                  ? r < e.loopedSlides - i / 2 ||
                    r > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (r = a
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      C(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r)
                  : r > e.slides.length - i
                  ? (e.loopFix(),
                    (r = a
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    C(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r))
              : e.slideTo(r);
          },
        },
        loop: {
          loopCreate: function () {
            const t = this,
              a = S(),
              { params: i, $wrapperEl: e } = t,
              s = 0 < e.children().length ? O(e.children()[0].parentNode) : e;
            s.children(`.${i.slideClass}.` + i.slideDuplicateClass).remove();
            let r = s.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              const t = i.slidesPerGroup - (r.length % i.slidesPerGroup);
              if (t !== i.slidesPerGroup) {
                for (let e = 0; e < t; e += 1) {
                  const t = O(a.createElement("div")).addClass(
                    i.slideClass + " " + i.slideBlankClass
                  );
                  s.append(t);
                }
                r = s.children("." + i.slideClass);
              }
            }
            "auto" !== i.slidesPerView ||
              i.loopedSlides ||
              (i.loopedSlides = r.length),
              (t.loopedSlides = Math.ceil(
                parseFloat(i.loopedSlides || i.slidesPerView, 10)
              )),
              (t.loopedSlides += i.loopAdditionalSlides),
              t.loopedSlides > r.length &&
                t.params.loopedSlidesLimit &&
                (t.loopedSlides = r.length);
            var n = [],
              o = [];
            r.each((e, t) => {
              O(e).attr("data-swiper-slide-index", t);
            });
            for (let e = 0; e < t.loopedSlides; e += 1) {
              const t = e - Math.floor(e / r.length) * r.length;
              o.push(r.eq(t)[0]), n.unshift(r.eq(r.length - t - 1)[0]);
            }
            for (let e = 0; e < o.length; e += 1)
              s.append(O(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (let e = n.length - 1; 0 <= e; --e)
              s.prepend(O(n[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function () {
            var e = this,
              {
                activeIndex: t,
                slides: a,
                loopedSlides: i,
                allowSlidePrev: s,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: o,
              } = (e.emit("beforeLoopFix"), e);
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            n = -n[t] - e.getTranslate();
            t < i
              ? ((l = a.length - 3 * i + t),
                (l += i),
                e.slideTo(l, 0, !1, !0) &&
                  0 != n &&
                  e.setTranslate((o ? -e.translate : e.translate) - n))
              : t >= a.length - i &&
                ((l = -a.length + t + i), (l += i), e.slideTo(l, 0, !1, !0)) &&
                0 != n &&
                e.setTranslate((o ? -e.translate : e.translate) - n),
              (e.allowSlidePrev = s),
              (e.allowSlideNext = r),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            var { $wrapperEl: e, params: t, slides: a } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` +
                  t.slideBlankClass
              )
              .remove(),
              a.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode ||
              (((t =
                "container" === t.params.touchEventsTarget
                  ? t.el
                  : t.wrapperEl).style.cursor = "move"),
              (t.style.cursor = e ? "grabbing" : "grab"));
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            var e = this,
              t = S(),
              { params: a, support: i } = e;
            (e.onTouchStart = function (e) {
              var i = this,
                s = S(),
                r = L(),
                n = i.touchEventsData,
                { params: o, touches: l, enabled: d } = i;
              if (d && (!i.animating || !o.preventInteractionOnTransition)) {
                !i.animating && o.cssMode && o.loop && i.loopFix();
                let t = e,
                  a = O((t = t.originalEvent ? t.originalEvent : t).target);
                if (
                  ("wrapper" !== o.touchEventsTarget ||
                    a.closest(i.wrapperEl).length) &&
                  ((n.isTouchEvent = "touchstart" === t.type),
                  n.isTouchEvent || !("which" in t) || 3 !== t.which) &&
                  !(
                    (!n.isTouchEvent && "button" in t && 0 < t.button) ||
                    (n.isTouched && n.isMoved)
                  )
                ) {
                  var d = !!o.noSwipingClass && "" !== o.noSwipingClass,
                    c = e.composedPath ? e.composedPath() : e.path,
                    d =
                      (d &&
                        t.target &&
                        t.target.shadowRoot &&
                        c &&
                        (a = O(c[0])),
                      o.noSwipingSelector || "." + o.noSwipingClass),
                    c = !(!t.target || !t.target.shadowRoot);
                  if (
                    o.noSwiping &&
                    (c
                      ? (function (i, e) {
                          return (function e(t) {
                            var a;
                            return t &&
                              t !== S() &&
                              t !== L() &&
                              ((a = (t = t.assignedSlot
                                ? t.assignedSlot
                                : t).closest(i)) ||
                                t.getRootNode)
                              ? a || e(t.getRootNode().host)
                              : null;
                          })((e = void 0 === e ? this : e));
                        })(d, a[0])
                      : a.closest(d)[0])
                  )
                    i.allowClick = !0;
                  else if (!o.swipeHandler || a.closest(o.swipeHandler)[0]) {
                    (l.currentX = (
                      "touchstart" === t.type ? t.targetTouches[0] : t
                    ).pageX),
                      (l.currentY = (
                        "touchstart" === t.type ? t.targetTouches[0] : t
                      ).pageY);
                    var c = l.currentX,
                      d = l.currentY,
                      p = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                      u = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                    if (p && (c <= u || c >= r.innerWidth - u)) {
                      if ("prevent" !== p) return;
                      e.preventDefault();
                    }
                    if (
                      (Object.assign(n, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                      }),
                      (l.startX = c),
                      (l.startY = d),
                      (n.touchStartTime = g()),
                      (i.allowClick = !0),
                      i.updateSize(),
                      (i.swipeDirection = void 0),
                      0 < o.threshold && (n.allowThresholdMove = !1),
                      "touchstart" !== t.type)
                    ) {
                      let e = !0;
                      a.is(n.focusableElements) &&
                        ((e = !1), "SELECT" === a[0].nodeName) &&
                        (n.isTouched = !1),
                        s.activeElement &&
                          O(s.activeElement).is(n.focusableElements) &&
                          s.activeElement !== a[0] &&
                          s.activeElement.blur();
                      const S =
                        e && i.allowTouchMove && o.touchStartPreventDefault;
                      (!o.touchStartForcePreventDefault && !S) ||
                        a[0].isContentEditable ||
                        t.preventDefault();
                    }
                    i.params.freeMode &&
                      i.params.freeMode.enabled &&
                      i.freeMode &&
                      i.animating &&
                      !o.cssMode &&
                      i.freeMode.onTouchStart(),
                      i.emit("touchStart", t);
                  }
                }
              }
            }.bind(e)),
              (e.onTouchMove = function (e) {
                var s = S(),
                  r = this,
                  n = r.touchEventsData,
                  { params: o, touches: l, rtlTranslate: d, enabled: t } = r;
                if (t) {
                  let i = e;
                  if ((i.originalEvent && (i = i.originalEvent), n.isTouched)) {
                    if (!n.isTouchEvent || "touchmove" === i.type) {
                      (t =
                        "touchmove" === i.type &&
                        i.targetTouches &&
                        (i.targetTouches[0] || i.changedTouches[0])),
                        (e = ("touchmove" === i.type ? t : i).pageX),
                        (t = ("touchmove" === i.type ? t : i).pageY);
                      if (i.preventedByNestedSwiper)
                        (l.startX = e), (l.startY = t);
                      else if (r.allowTouchMove) {
                        if (n.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                          if (r.isVertical()) {
                            if (
                              (t < l.startY &&
                                r.translate <= r.maxTranslate()) ||
                              (t > l.startY && r.translate >= r.minTranslate())
                            )
                              return (n.isTouched = !1), void (n.isMoved = !1);
                          } else if (
                            (e < l.startX && r.translate <= r.maxTranslate()) ||
                            (e > l.startX && r.translate >= r.minTranslate())
                          )
                            return;
                        if (
                          n.isTouchEvent &&
                          s.activeElement &&
                          i.target === s.activeElement &&
                          O(i.target).is(n.focusableElements)
                        )
                          (n.isMoved = !0), (r.allowClick = !1);
                        else if (
                          (n.allowTouchCallbacks && r.emit("touchMove", i),
                          !(i.targetTouches && 1 < i.targetTouches.length))
                        ) {
                          (l.currentX = e), (l.currentY = t);
                          var a,
                            s = l.currentX - l.startX,
                            c = l.currentY - l.startY;
                          if (
                            !(
                              r.params.threshold &&
                              Math.sqrt(s ** 2 + c ** 2) < r.params.threshold
                            )
                          )
                            if (
                              (void 0 === n.isScrolling &&
                                ((r.isHorizontal() &&
                                  l.currentY === l.startY) ||
                                (r.isVertical() && l.currentX === l.startX)
                                  ? (n.isScrolling = !1)
                                  : 25 <= s * s + c * c &&
                                    ((a =
                                      (180 *
                                        Math.atan2(Math.abs(c), Math.abs(s))) /
                                      Math.PI),
                                    (n.isScrolling = r.isHorizontal()
                                      ? a > o.touchAngle
                                      : 90 - a > o.touchAngle))),
                              n.isScrolling && r.emit("touchMoveOpposite", i),
                              void 0 !== n.startMoving ||
                                (l.currentX === l.startX &&
                                  l.currentY === l.startY) ||
                                (n.startMoving = !0),
                              n.isScrolling)
                            )
                              n.isTouched = !1;
                            else if (n.startMoving) {
                              (r.allowClick = !1),
                                !o.cssMode &&
                                  i.cancelable &&
                                  i.preventDefault(),
                                o.touchMoveStopPropagation &&
                                  !o.nested &&
                                  i.stopPropagation(),
                                n.isMoved ||
                                  (o.loop && !o.cssMode && r.loopFix(),
                                  (n.startTranslate = r.getTranslate()),
                                  r.setTransition(0),
                                  r.animating &&
                                    r.$wrapperEl.trigger(
                                      "webkitTransitionEnd transitionend"
                                    ),
                                  (n.allowMomentumBounce = !1),
                                  !o.grabCursor ||
                                    (!0 !== r.allowSlideNext &&
                                      !0 !== r.allowSlidePrev) ||
                                    r.setGrabCursor(!0),
                                  r.emit("sliderFirstMove", i)),
                                r.emit("sliderMove", i),
                                (n.isMoved = !0);
                              let e = r.isHorizontal() ? s : c,
                                t =
                                  ((l.diff = e),
                                  (e *= o.touchRatio),
                                  d && (e = -e),
                                  (r.swipeDirection = 0 < e ? "prev" : "next"),
                                  (n.currentTranslate = e + n.startTranslate),
                                  !0),
                                a = o.resistanceRatio;
                              if (
                                (o.touchReleaseOnEdges && (a = 0),
                                0 < e && n.currentTranslate > r.minTranslate()
                                  ? ((t = !1),
                                    o.resistance &&
                                      (n.currentTranslate =
                                        r.minTranslate() -
                                        1 +
                                        (-r.minTranslate() +
                                          n.startTranslate +
                                          e) **
                                          a))
                                  : e < 0 &&
                                    n.currentTranslate < r.maxTranslate() &&
                                    ((t = !1), o.resistance) &&
                                    (n.currentTranslate =
                                      r.maxTranslate() +
                                      1 -
                                      (r.maxTranslate() -
                                        n.startTranslate -
                                        e) **
                                        a),
                                t && (i.preventedByNestedSwiper = !0),
                                !r.allowSlideNext &&
                                  "next" === r.swipeDirection &&
                                  n.currentTranslate < n.startTranslate &&
                                  (n.currentTranslate = n.startTranslate),
                                !r.allowSlidePrev &&
                                  "prev" === r.swipeDirection &&
                                  n.currentTranslate > n.startTranslate &&
                                  (n.currentTranslate = n.startTranslate),
                                r.allowSlidePrev ||
                                  r.allowSlideNext ||
                                  (n.currentTranslate = n.startTranslate),
                                0 < o.threshold)
                              ) {
                                if (
                                  !(
                                    Math.abs(e) > o.threshold ||
                                    n.allowThresholdMove
                                  )
                                )
                                  return void (n.currentTranslate =
                                    n.startTranslate);
                                if (!n.allowThresholdMove)
                                  return (
                                    (n.allowThresholdMove = !0),
                                    (l.startX = l.currentX),
                                    (l.startY = l.currentY),
                                    (n.currentTranslate = n.startTranslate),
                                    void (l.diff = r.isHorizontal()
                                      ? l.currentX - l.startX
                                      : l.currentY - l.startY)
                                  );
                              }
                              o.followFinger &&
                                !o.cssMode &&
                                (((o.freeMode &&
                                  o.freeMode.enabled &&
                                  r.freeMode) ||
                                  o.watchSlidesProgress) &&
                                  (r.updateActiveIndex(),
                                  r.updateSlidesClasses()),
                                r.params.freeMode &&
                                  o.freeMode.enabled &&
                                  r.freeMode &&
                                  r.freeMode.onTouchMove(),
                                r.updateProgress(n.currentTranslate),
                                r.setTranslate(n.currentTranslate));
                            }
                        }
                      } else
                        O(i.target).is(n.focusableElements) ||
                          (r.allowClick = !1),
                          n.isTouched &&
                            (Object.assign(l, {
                              startX: e,
                              startY: t,
                              currentX: e,
                              currentY: t,
                            }),
                            (n.touchStartTime = g()));
                    }
                  } else
                    n.startMoving &&
                      n.isScrolling &&
                      r.emit("touchMoveOpposite", i);
                }
              }.bind(e)),
              (e.onTouchEnd = function (r) {
                const n = this,
                  e = n.touchEventsData,
                  {
                    params: o,
                    touches: t,
                    rtlTranslate: a,
                    slidesGrid: l,
                    enabled: i,
                  } = n;
                if (i) {
                  let s = r;
                  if (
                    (s.originalEvent && (s = s.originalEvent),
                    e.allowTouchCallbacks && n.emit("touchEnd", s),
                    (e.allowTouchCallbacks = !1),
                    e.isTouched)
                  ) {
                    o.grabCursor &&
                      e.isMoved &&
                      e.isTouched &&
                      (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) &&
                      n.setGrabCursor(!1);
                    var d,
                      c = g(),
                      p = c - e.touchStartTime;
                    if (n.allowClick) {
                      const r = s.path || (s.composedPath && s.composedPath());
                      n.updateClickedSlide((r && r[0]) || s.target),
                        n.emit("tap click", s),
                        p < 300 &&
                          c - e.lastClickTime < 300 &&
                          n.emit("doubleTap doubleClick", s);
                    }
                    if (
                      ((e.lastClickTime = g()),
                      C(() => {
                        n.destroyed || (n.allowClick = !0);
                      }),
                      e.isTouched &&
                        e.isMoved &&
                        n.swipeDirection &&
                        0 !== t.diff &&
                        e.currentTranslate !== e.startTranslate)
                    ) {
                      if (
                        ((e.isTouched = !1),
                        (e.isMoved = !1),
                        (e.startMoving = !1),
                        (d = o.followFinger
                          ? a
                            ? n.translate
                            : -n.translate
                          : -e.currentTranslate),
                        !o.cssMode)
                      )
                        if (n.params.freeMode && o.freeMode.enabled)
                          n.freeMode.onTouchEnd({ currentPos: d });
                        else {
                          let t = 0,
                            a = n.slidesSizesGrid[0];
                          for (
                            let e = 0;
                            e < l.length;
                            e += e < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
                          ) {
                            const n =
                              e < o.slidesPerGroupSkip - 1
                                ? 1
                                : o.slidesPerGroup;
                            void 0 !== l[e + n]
                              ? d >= l[e] &&
                                d < l[e + n] &&
                                ((t = e), (a = l[e + n] - l[e]))
                              : d >= l[e] &&
                                ((t = e),
                                (a = l[l.length - 1] - l[l.length - 2]));
                          }
                          let e = null,
                            i = null;
                          o.rewind &&
                            (n.isBeginning
                              ? (i =
                                  n.params.virtual &&
                                  n.params.virtual.enabled &&
                                  n.virtual
                                    ? n.virtual.slides.length - 1
                                    : n.slides.length - 1)
                              : n.isEnd && (e = 0));
                          (r = (d - l[t]) / a),
                            (c =
                              t < o.slidesPerGroupSkip - 1
                                ? 1
                                : o.slidesPerGroup);
                          p > o.longSwipesMs
                            ? o.longSwipes
                              ? ("next" === n.swipeDirection &&
                                  (r >= o.longSwipesRatio
                                    ? n.slideTo(o.rewind && n.isEnd ? e : t + c)
                                    : n.slideTo(t)),
                                "prev" === n.swipeDirection &&
                                  (r > 1 - o.longSwipesRatio
                                    ? n.slideTo(t + c)
                                    : null !== i &&
                                      r < 0 &&
                                      Math.abs(r) > o.longSwipesRatio
                                    ? n.slideTo(i)
                                    : n.slideTo(t)))
                              : n.slideTo(n.activeIndex)
                            : o.shortSwipes
                            ? !n.navigation ||
                              (s.target !== n.navigation.nextEl &&
                                s.target !== n.navigation.prevEl)
                              ? ("next" === n.swipeDirection &&
                                  n.slideTo(null !== e ? e : t + c),
                                "prev" === n.swipeDirection &&
                                  n.slideTo(null !== i ? i : t))
                              : s.target === n.navigation.nextEl
                              ? n.slideTo(t + c)
                              : n.slideTo(t)
                            : n.slideTo(n.activeIndex);
                        }
                    } else
                      (e.isTouched = !1),
                        (e.isMoved = !1),
                        (e.startMoving = !1);
                  } else
                    e.isMoved && o.grabCursor && n.setGrabCursor(!1),
                      (e.isMoved = !1),
                      (e.startMoving = !1);
                }
              }.bind(e)),
              a.cssMode &&
                (e.onScroll = function () {
                  var e = this,
                    { wrapperEl: t, rtlTranslate: a, enabled: i } = e;
                  i &&
                    ((e.previousTranslate = e.translate),
                    e.isHorizontal()
                      ? (e.translate = -t.scrollLeft)
                      : (e.translate = -t.scrollTop),
                    0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    (0 == (i = e.maxTranslate() - e.minTranslate())
                      ? 0
                      : (e.translate - e.minTranslate()) / i) !== e.progress &&
                      e.updateProgress(a ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1));
                }.bind(e)),
              (e.onClick = function (e) {
                var t = this;
                t.enabled &&
                  !t.allowClick &&
                  (t.params.preventClicks && e.preventDefault(),
                  t.params.preventClicksPropagation) &&
                  t.animating &&
                  (e.stopPropagation(), e.stopImmediatePropagation());
              }.bind(e)),
              i.touch && !f && (t.addEventListener("touchstart", B), (f = !0)),
              v(e, "on");
          },
          detachEvents: function () {
            v(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const i = this,
              {
                activeIndex: e,
                initialized: t,
                loopedSlides: a = 0,
                params: s,
                $el: r,
              } = i,
              n = s.breakpoints;
            if (n && 0 !== Object.keys(n).length) {
              var o = i.getBreakpoint(n, i.params.breakpointsBase, i.el);
              if (o && i.currentBreakpoint !== o) {
                const c = (o in n ? n[o] : void 0) || i.originalParams,
                  p = w(i, s),
                  u = w(i, c),
                  m = s.enabled;
                p && !u
                  ? (r.removeClass(
                      `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
                    ),
                    i.emitContainerClasses())
                  : !p &&
                    u &&
                    (r.addClass(s.containerModifierClass + "grid"),
                    ((c.grid.fill && "column" === c.grid.fill) ||
                      (!c.grid.fill && "column" === s.grid.fill)) &&
                      r.addClass(s.containerModifierClass + "grid-column"),
                    i.emitContainerClasses()),
                  ["navigation", "pagination", "scrollbar"].forEach((e) => {
                    var t = s[e] && s[e].enabled,
                      a = c[e] && c[e].enabled;
                    t && !a && i[e].disable(), !t && a && i[e].enable();
                  });
                var l = c.direction && c.direction !== s.direction,
                  d = s.loop && (c.slidesPerView !== s.slidesPerView || l),
                  l =
                    (l && t && i.changeDirection(),
                    h(i.params, c),
                    i.params.enabled);
                Object.assign(i, {
                  allowTouchMove: i.params.allowTouchMove,
                  allowSlideNext: i.params.allowSlideNext,
                  allowSlidePrev: i.params.allowSlidePrev,
                }),
                  m && !l ? i.disable() : !m && l && i.enable(),
                  (i.currentBreakpoint = o),
                  i.emit("_beforeBreakpoint", c),
                  d &&
                    t &&
                    (i.loopDestroy(),
                    i.loopCreate(),
                    i.updateSlides(),
                    i.slideTo(e - a + i.loopedSlides, 0, !1)),
                  i.emit("breakpoint", c);
              }
            }
          },
          getBreakpoint: function (e, a, i) {
            if (
              (void 0 === a && (a = "window"), e && ("container" !== a || i))
            ) {
              let t = !1;
              const s = L(),
                r = "window" === a ? s.innerHeight : i.clientHeight,
                n = Object.keys(e).map((e) => {
                  var t;
                  return "string" == typeof e && 0 === e.indexOf("@")
                    ? ((t = parseFloat(e.substr(1))),
                      { value: r * t, point: e })
                    : { value: e, point: e };
                });
              n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < n.length; e += 1) {
                const { point: L, value: r } = n[e];
                "window" === a
                  ? s.matchMedia(`(min-width: ${r}px)`).matches && (t = L)
                  : r <= i.clientWidth && (t = L);
              }
              return t || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: a } = e,
              i = a["slidesOffsetBefore"];
            if (i) {
              const t = e.slides.length - 1,
                a = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > a;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === a.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === a.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            var {
                classNames: e,
                params: t,
                rtl: a,
                $el: i,
                device: s,
                support: r,
              } = this,
              r = (function (e, a) {
                const i = [];
                return (
                  e.forEach((t) => {
                    "object" == typeof t
                      ? Object.keys(t).forEach((e) => {
                          t[e] && i.push(a + e);
                        })
                      : "string" == typeof t && i.push(a + t);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  t.direction,
                  { "pointer-events": !r.touch },
                  { "free-mode": this.params.freeMode && t.freeMode.enabled },
                  { autoheight: t.autoHeight },
                  { rtl: a },
                  { grid: t.grid && 1 < t.grid.rows },
                  {
                    "grid-column":
                      t.grid && 1 < t.grid.rows && "column" === t.grid.fill,
                  },
                  { android: s.android },
                  { ios: s.ios },
                  { "css-mode": t.cssMode },
                  { centered: t.cssMode && t.centeredSlides },
                  { "watch-progress": t.watchSlidesProgress },
                ],
                t.containerModifierClass
              );
            e.push(...r),
              i.addClass([...e].join(" ")),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            var { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, a, i, s, r) {
            var n = L();
            function o() {
              r && r();
            }
            !(O(e).parent("picture")[0] || (e.complete && s)) && t
              ? (((e = new n.Image()).onload = o),
                (e.onerror = o),
                i && (e.sizes = i),
                a && (e.srcset = a),
                t && (e.src = t))
              : o();
          },
          preloadImages: function () {
            const t = this;
            function a() {
              null != t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length) &&
                (t.params.updateOnImagesReady && t.update(),
                t.emit("imagesReady"));
            }
            t.imagesToLoad = t.$el.find("img");
            for (let e = 0; e < t.imagesToLoad.length; e += 1) {
              var i = t.imagesToLoad[e];
              t.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                a
              );
            }
          },
        },
      },
      x = {};
    class T {
      constructor() {
        let t, a;
        for (var p, e = arguments.length, i = new Array(e), s = 0; s < e; s++)
          i[s] = arguments[s];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (a = i[0])
            : ([t, a] = i),
          (a = h({}, (a = a || {}))),
          t && !a.el && (a.el = t),
          a.el && 1 < O(a.el).length)
        ) {
          const t = [];
          return (
            O(a.el).each((e) => {
              e = h({}, a, { el: e });
              t.push(new T(e));
            }),
            t
          );
        }
        const r = this,
          n =
            ((r.__swiper__ = !0),
            (r.support = u()),
            (r.device =
              (void 0 === (p = { userAgent: a.userAgent }) && (p = {}),
              (c =
                c ||
                (function () {
                  var e = (void 0 === p ? {} : p)["userAgent"],
                    t = u(),
                    a = L(),
                    i = a.navigator.platform,
                    e = e || a.navigator.userAgent,
                    s = { ios: !1, android: !1 },
                    r = a.screen.width,
                    a = a.screen.height,
                    n = e.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let o = e.match(/(iPad).*OS\s([\d_]+)/);
                  var l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    d = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    c = "Win32" === i,
                    i = "MacIntel" === i;
                  return (
                    !o &&
                      i &&
                      t.touch &&
                      0 <=
                        [
                          "1024x1366",
                          "1366x1024",
                          "834x1194",
                          "1194x834",
                          "834x1112",
                          "1112x834",
                          "768x1024",
                          "1024x768",
                          "820x1180",
                          "1180x820",
                          "810x1080",
                          "1080x810",
                        ].indexOf(r + "x" + a) &&
                      (o = (o = e.match(/(Version)\/([\d.]+)/)) || [
                        0,
                        1,
                        "13_0_0",
                      ]),
                    n && !c && ((s.os = "android"), (s.android = !0)),
                    (o || d || l) && ((s.os = "ios"), (s.ios = !0)),
                    s
                  );
                })()))),
            (r.browser = N()),
            (r.eventsListeners = {}),
            (r.eventsAnyListeners = []),
            (r.modules = [...r.__modules__]),
            a.modules &&
              Array.isArray(a.modules) &&
              r.modules.push(...a.modules),
            {});
        r.modules.forEach((e) => {
          var i, s;
          e({
            swiper: r,
            extendParams:
              ((i = a),
              (s = n),
              function (e) {
                void 0 === e && (e = {});
                var t = Object.keys(e)[0],
                  a = e[t];
                "object" == typeof a &&
                  null !== a &&
                  (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) &&
                    !0 === i[t] &&
                    (i[t] = { auto: !0 }),
                  t in i) &&
                  "enabled" in a &&
                  (!0 === i[t] && (i[t] = { enabled: !0 }),
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                  i[t] || (i[t] = { enabled: !1 })),
                  h(s, e);
              }),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        var o,
          l = h({}, y, n);
        return (
          (r.params = h({}, l, x, a)),
          (r.originalParams = h({}, r.params)),
          (r.passedParams = h({}, a)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = O),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: t,
            classNames: [],
            slides: O(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents:
              ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
              (o = ["pointerdown", "pointermove", "pointerup"]),
              (r.touchEventsTouch = {
                start: l[0],
                move: l[1],
                end: l[2],
                cancel: l[3],
              }),
              (r.touchEventsDesktop = { start: o[0], move: o[1], end: o[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: g(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        var e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        var e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        var a = this,
          i = ((e = Math.min(Math.max(e, 0), 1)), a.minTranslate()),
          e = (a.maxTranslate() - i) * e + i;
        a.translateTo(e, void 0 === t ? 0 : t),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      }
      emitContainerClasses() {
        const t = this;
        var e;
        t.params._emitClasses &&
          t.el &&
          ((e = t.el.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper") ||
                0 === e.indexOf(t.params.containerModifierClass)
            )),
          t.emit("_containerClasses", e.join(" ")));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const a = this;
        if (a.params._emitClasses && a.el) {
          const i = [];
          a.slides.each((e) => {
            var t = a.getSlideClasses(e);
            i.push({ slideEl: e, classNames: t }), a.emit("_slideClass", e, t);
          }),
            a.emit("_slideClasses", i);
        }
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var {
          params: a,
          slides: i,
          slidesGrid: s,
          slidesSizesGrid: r,
          size: n,
          activeIndex: o,
        } = this;
        let l = 1;
        if (a.centeredSlides) {
          let t,
            a = i[o].swiperSlideSize;
          for (let e = o + 1; e < i.length; e += 1)
            i[e] &&
              !t &&
              ((a += i[e].swiperSlideSize), (l += 1), a > n) &&
              (t = !0);
          for (let e = o - 1; 0 <= e; --e)
            i[e] &&
              !t &&
              ((a += i[e].swiperSlideSize), (l += 1), a > n) &&
              (t = !0);
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1)
            (t ? s[e] + r[e] - s[o] < n : s[e] - s[o] < n) && (l += 1);
        else for (let e = o - 1; 0 <= e; --e) s[o] - s[e] < n && (l += 1);
        return l;
      }
      update() {
        const t = this;
        var e, a;
        function i() {
          var e = t.rtlTranslate ? -1 * t.translate : t.translate,
            e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        t &&
          !t.destroyed &&
          (({ snapGrid: e, params: a } = t),
          a.breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.params.freeMode && t.params.freeMode.enabled
            ? (i(), t.params.autoHeight && t.updateAutoHeight())
            : (("auto" === t.params.slidesPerView ||
                1 < t.params.slidesPerView) &&
              t.isEnd &&
              !t.params.centeredSlides
                ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                : t.slideTo(t.activeIndex, 0, !1, !0)) || i(),
          a.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
          t.emit("update"));
      }
      changeDirection(t, e) {
        void 0 === e && (e = !0);
        var a = this,
          i = a.params.direction;
        return (
          (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i ||
            ("horizontal" !== t && "vertical" !== t) ||
            (a.$el
              .removeClass("" + a.params.containerModifierClass + i)
              .addClass("" + a.params.containerModifierClass + t),
            a.emitContainerClasses(),
            (a.params.direction = t),
            a.slides.each((e) => {
              "vertical" === t ? (e.style.width = "") : (e.style.height = "");
            }),
            a.emit("changeDirection"),
            e && a.update()),
          a
        );
      }
      changeLanguageDirection(e) {
        var t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const a = this;
        if (!a.mounted) {
          const s = O(e || a.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = a;
          const r = () =>
            "." + (a.params.wrapperClass || "").trim().split(" ").join(".");
          let t =
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? (((i = O(e.shadowRoot.querySelector(r()))).children = (e) =>
                  s.children(e)),
                i)
              : (s.children ? s : O(s)).children(r());
          var i;
          if (0 === t.length && a.params.createElements) {
            const e = S().createElement("div");
            (t = O(e)),
              (e.className = a.params.wrapperClass),
              s.append(e),
              s.children("." + a.params.slideClass).each((e) => {
                t.append(e);
              });
          }
          Object.assign(a, {
            $el: s,
            el: e,
            $wrapperEl: t,
            wrapperEl: t[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === a.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === t.css("display"),
          });
        }
        return !0;
      }
      init(e) {
        var t = this;
        return (
          t.initialized ||
            (!1 !== t.mount(e) &&
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit"))),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const a = this,
          { params: i, $el: s, $wrapperEl: r, slides: n } = a;
        if (void 0 !== a.params && !a.destroyed) {
          if (
            (a.emit("beforeDestroy"),
            (a.initialized = !1),
            a.detachEvents(),
            i.loop && a.loopDestroy(),
            t &&
              (a.removeClasses(),
              s.removeAttr("style"),
              r.removeAttr("style"),
              n) &&
              n.length &&
              n
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index"),
            a.emit("destroy"),
            Object.keys(a.eventsListeners).forEach((e) => {
              a.off(e);
            }),
            !1 !== e)
          ) {
            a.$el[0].swiper = null;
            {
              const o = a;
              Object.keys(o).forEach((e) => {
                try {
                  o[e] = null;
                } catch (e) {}
                try {
                  delete o[e];
                } catch (e) {}
              });
            }
          }
          a.destroyed = !0;
        }
        return null;
      }
      static extendDefaults(e) {
        h(x, e);
      }
      static get extendedDefaults() {
        return x;
      }
      static get defaults() {
        return y;
      }
      static installModule(e) {
        T.prototype.__modules__ || (T.prototype.__modules__ = []);
        var t = T.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return (
          Array.isArray(e)
            ? e.forEach((e) => T.installModule(e))
            : T.installModule(e),
          T
        );
      }
    }
    function $(a, i, s, r) {
      const n = S();
      return (
        a.params.createElements &&
          Object.keys(r).forEach((t) => {
            if (!s[t] && !0 === s.auto) {
              let e = a.$el.children("." + r[t])[0];
              e ||
                (((e = n.createElement("div")).className = r[t]),
                a.$el.append(e)),
                (s[t] = e),
                (i[t] = e);
            }
          }),
        s
      );
    }
    function z(e) {
      return (
        "." +
        (e = void 0 === e ? "" : e)
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")
      );
    }
    function k(e) {
      const {
        effect: a,
        swiper: i,
        on: t,
        setTranslate: s,
        setTransition: r,
        overwriteParams: n,
        perspective: o,
        recreateShadows: l,
        getEffectParams: d,
      } = e;
      let c;
      t("beforeInit", () => {
        var e;
        i.params.effect === a &&
          (i.classNames.push("" + i.params.containerModifierClass + a),
          o && o() && i.classNames.push(i.params.containerModifierClass + "3d"),
          (e = n ? n() : {}),
          Object.assign(i.params, e),
          Object.assign(i.originalParams, e));
      }),
        t("setTranslate", () => {
          i.params.effect === a && s();
        }),
        t("setTransition", (e, t) => {
          i.params.effect === a && r(t);
        }),
        t("transitionEnd", () => {
          i.params.effect === a &&
            l &&
            d &&
            d().slideShadows &&
            (i.slides.each((e) => {
              i.$(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .remove();
            }),
            l());
        }),
        t("virtualUpdate", () => {
          i.params.effect === a &&
            (i.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && i.slides && i.slides.length && (s(), (c = !1));
            }));
        });
    }
    function P(e, t) {
      return e.transformEl
        ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
        : t;
    }
    function A(e) {
      let { swiper: a, duration: t, transformEl: i, allSlides: s } = e;
      const { slides: r, activeIndex: n, $wrapperEl: o } = a;
      if (a.params.virtualTranslate && 0 !== t) {
        let e = !1;
        (s ? (i ? r.find(i) : r) : i ? r.eq(n).find(i) : r.eq(n)).transitionEnd(
          () => {
            if (!e && a && !a.destroyed) {
              (e = !0), (a.animating = !1);
              var t = ["webkitTransitionEnd", "transitionend"];
              for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
            }
          }
        );
      }
    }
    function D(e, t, a) {
      var i = "swiper-slide-shadow" + (a ? "-" + a : ""),
        e = e.transformEl ? t.find(e.transformEl) : t;
      let s = e.children("." + i);
      return (
        s.length ||
          ((s = O(
            `<div class="swiper-slide-shadow${a ? "-" + a : ""}"></div>`
          )),
          e.append(s)),
        s
      );
    }
    return (
      Object.keys(E).forEach((t) => {
        Object.keys(E[t]).forEach((e) => {
          T.prototype[e] = E[t][e];
        });
      }),
      T.use([
        function (e) {
          let { swiper: r, on: t, emit: a } = e;
          const i = L();
          let s = null,
            n = null;
          const o = () => {
              r &&
                !r.destroyed &&
                r.initialized &&
                (a("beforeResize"), a("resize"));
            },
            l = () => {
              r && !r.destroyed && r.initialized && a("orientationchange");
            };
          t("init", () => {
            r.params.resizeObserver && void 0 !== i.ResizeObserver
              ? r &&
                !r.destroyed &&
                r.initialized &&
                (s = new ResizeObserver((a) => {
                  n = i.requestAnimationFrame(() => {
                    var { width: e, height: t } = r;
                    let i = e,
                      s = t;
                    a.forEach((e) => {
                      var { contentBoxSize: e, contentRect: t, target: a } = e;
                      (a && a !== r.el) ||
                        ((i = t ? t.width : (e[0] || e).inlineSize),
                        (s = t ? t.height : (e[0] || e).blockSize));
                    }),
                      (i === e && s === t) || o();
                  });
                })).observe(r.el)
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              n && i.cancelAnimationFrame(n),
                s && s.unobserve && r.el && (s.unobserve(r.el), (s = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: a, extendParams: t, on: i, emit: s } = e;
          function r(e, t) {
            void 0 === t && (t = {});
            var a = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                var t;
                1 === e.length
                  ? s("observerUpdate", e[0])
                  : ((t = function () {
                      s("observerUpdate", e[0]);
                    }),
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0));
              }
            );
            a.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(a);
          }
          const n = [],
            o = L();
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (a.params.observer) {
                if (a.params.observeParents) {
                  var t = a.$el.parents();
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(a.$el[0], { childList: a.params.observeSlideChildren }),
                  r(a.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]),
      T.use([
        function (e) {
          let t,
            { swiper: E, extendParams: a, on: i, emit: x } = e;
          function T(e, t) {
            var a = E.params.virtual;
            return a.cache && E.virtual.cache[t]
              ? E.virtual.cache[t]
              : ((e = a.renderSlide
                  ? O(a.renderSlide.call(E, e, t))
                  : O(
                      `<div class="${E.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
                    )).attr("data-swiper-slide-index") ||
                  e.attr("data-swiper-slide-index", t),
                a.cache && (E.virtual.cache[t] = e),
                e);
          }
          function n(t) {
            const {
                slidesPerView: e,
                slidesPerGroup: a,
                centeredSlides: i,
              } = E.params,
              { addSlidesBefore: s, addSlidesAfter: r } = E.params.virtual,
              {
                from: n,
                to: o,
                slides: l,
                slidesGrid: d,
                offset: c,
              } = E.virtual;
            E.params.cssMode || E.updateActiveIndex();
            var p = E.activeIndex || 0;
            let u, m, h;
            (u = E.rtlTranslate ? "right" : E.isHorizontal() ? "left" : "top"),
              (h = i
                ? ((m = Math.floor(e / 2) + a + r), Math.floor(e / 2) + a + s)
                : ((m = e + (a - 1) + r), a + s));
            const f = Math.max((p || 0) - h, 0),
              v = Math.min((p || 0) + m, l.length - 1),
              g = (E.slidesGrid[f] || 0) - (E.slidesGrid[0] || 0);
            function b() {
              E.updateSlides(),
                E.updateProgress(),
                E.updateSlidesClasses(),
                E.lazy && E.params.lazy.enabled && E.lazy.load(),
                x("virtualUpdate");
            }
            if (
              (Object.assign(E.virtual, {
                from: f,
                to: v,
                offset: g,
                slidesGrid: E.slidesGrid,
              }),
              n !== f || o !== v || t)
            )
              if (E.params.virtual.renderExternal)
                E.params.virtual.renderExternal.call(E, {
                  offset: g,
                  from: f,
                  to: v,
                  slides: (function () {
                    var t = [];
                    for (let e = f; e <= v; e += 1) t.push(l[e]);
                    return t;
                  })(),
                }),
                  E.params.virtual.renderExternalUpdate
                    ? b()
                    : x("virtualUpdate");
              else {
                var w = [],
                  y = [];
                if (t) E.$wrapperEl.find("." + E.params.slideClass).remove();
                else
                  for (let e = n; e <= o; e += 1)
                    (e < f || e > v) &&
                      E.$wrapperEl
                        .find(
                          `.${E.params.slideClass}[data-swiper-slide-index="${e}"]`
                        )
                        .remove();
                for (let e = 0; e < l.length; e += 1)
                  e >= f &&
                    e <= v &&
                    (void 0 === o || t
                      ? y.push(e)
                      : (e > o && y.push(e), e < n && w.push(e)));
                y.forEach((e) => {
                  E.$wrapperEl.append(T(l[e], e));
                }),
                  w
                    .sort((e, t) => t - e)
                    .forEach((e) => {
                      E.$wrapperEl.prepend(T(l[e], e));
                    }),
                  E.$wrapperEl.children(".swiper-slide").css(u, g + "px"),
                  b();
              }
            else
              E.slidesGrid !== d && g !== c && E.slides.css(u, g + "px"),
                E.updateProgress(),
                x("virtualUpdate");
          }
          a({
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          }),
            (E.virtual = {
              cache: {},
              from: void 0,
              to: void 0,
              slides: [],
              offset: 0,
              slidesGrid: [],
            }),
            i("beforeInit", () => {
              E.params.virtual.enabled &&
                ((E.virtual.slides = E.params.virtual.slides),
                E.classNames.push(E.params.containerModifierClass + "virtual"),
                (E.params.watchSlidesProgress = !0),
                (E.originalParams.watchSlidesProgress = !0),
                E.params.initialSlide || n());
            }),
            i("setTranslate", () => {
              E.params.virtual.enabled &&
                (E.params.cssMode && !E._immediateVirtual
                  ? (clearTimeout(t),
                    (t = setTimeout(() => {
                      n();
                    }, 100)))
                  : n());
            }),
            i("init update resize", () => {
              E.params.virtual.enabled &&
                E.params.cssMode &&
                M(E.wrapperEl, "--swiper-virtual-size", E.virtualSize + "px");
            }),
            Object.assign(E.virtual, {
              appendSlide: function (t) {
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1)
                    t[e] && E.virtual.slides.push(t[e]);
                else E.virtual.slides.push(t);
                n(!0);
              },
              prependSlide: function (i) {
                const s = E.activeIndex;
                let e = s + 1,
                  r = 1;
                if (Array.isArray(i)) {
                  for (let e = 0; e < i.length; e += 1)
                    i[e] && E.virtual.slides.unshift(i[e]);
                  (e = s + i.length), (r = i.length);
                } else E.virtual.slides.unshift(i);
                if (E.params.virtual.cache) {
                  const i = E.virtual.cache,
                    s = {};
                  Object.keys(i).forEach((e) => {
                    var t = i[e],
                      a = t.attr("data-swiper-slide-index");
                    a && t.attr("data-swiper-slide-index", parseInt(a, 10) + r),
                      (s[parseInt(e, 10) + r] = t);
                  }),
                    (E.virtual.cache = s);
                }
                n(!0), E.slideTo(e, 0);
              },
              removeSlide: function (a) {
                if (null != a) {
                  let t = E.activeIndex;
                  if (Array.isArray(a))
                    for (let e = a.length - 1; 0 <= e; --e)
                      E.virtual.slides.splice(a[e], 1),
                        E.params.virtual.cache && delete E.virtual.cache[a[e]],
                        a[e] < t && --t,
                        (t = Math.max(t, 0));
                  else
                    E.virtual.slides.splice(a, 1),
                      E.params.virtual.cache && delete E.virtual.cache[a],
                      a < t && --t,
                      (t = Math.max(t, 0));
                  n(!0), E.slideTo(t, 0);
                }
              },
              removeAllSlides: function () {
                (E.virtual.slides = []),
                  E.params.virtual.cache && (E.virtual.cache = {}),
                  n(!0),
                  E.slideTo(0, 0);
              },
              update: n,
            });
        },
        function (e) {
          let { swiper: p, extendParams: t, on: a, emit: u } = e;
          const m = S(),
            h = L();
          function i(t) {
            if (p.enabled) {
              const a = p["rtlTranslate"];
              let e = t;
              const i =
                  (e = e.originalEvent ? e.originalEvent : e).keyCode ||
                  e.charCode,
                s = p.params.keyboard.pageUpDown,
                r = s && 33 === i,
                n = s && 34 === i,
                o = 37 === i,
                l = 39 === i,
                d = 38 === i,
                c = 40 === i;
              if (
                !p.allowSlideNext &&
                ((p.isHorizontal() && l) || (p.isVertical() && c) || n)
              )
                return !1;
              if (
                !p.allowSlidePrev &&
                ((p.isHorizontal() && o) || (p.isVertical() && d) || r)
              )
                return !1;
              if (
                !(
                  e.shiftKey ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  (m.activeElement &&
                    m.activeElement.nodeName &&
                    ("input" === m.activeElement.nodeName.toLowerCase() ||
                      "textarea" === m.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  p.params.keyboard.onlyInViewport &&
                  (r || n || o || l || d || c)
                ) {
                  let t = !1;
                  if (
                    0 < p.$el.parents("." + p.params.slideClass).length &&
                    0 === p.$el.parents("." + p.params.slideActiveClass).length
                  )
                    return;
                  const e = p.$el,
                    i = e[0].clientWidth,
                    s = e[0].clientHeight,
                    u = h.innerWidth,
                    m = h.innerHeight,
                    r = p.$el.offset(),
                    n =
                      (a && (r.left -= p.$el[0].scrollLeft),
                      [
                        [r.left, r.top],
                        [r.left + i, r.top],
                        [r.left, r.top + s],
                        [r.left + i, r.top + s],
                      ]);
                  for (let e = 0; e < n.length; e += 1) {
                    const a = n[e];
                    0 <= a[0] &&
                      a[0] <= u &&
                      0 <= a[1] &&
                      a[1] <= m &&
                      ((0 === a[0] && 0 === a[1]) || (t = !0));
                  }
                  if (!t) return;
                }
                p.isHorizontal()
                  ? ((r || n || o || l) &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1)),
                    (((n || l) && !a) || ((r || o) && a)) && p.slideNext(),
                    (((r || o) && !a) || ((n || l) && a)) && p.slidePrev())
                  : ((r || n || d || c) &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1)),
                    (n || c) && p.slideNext(),
                    (r || d) && p.slidePrev()),
                  u("keyPress", i);
              }
            }
          }
          function s() {
            p.keyboard.enabled ||
              (O(m).on("keydown", i), (p.keyboard.enabled = !0));
          }
          function r() {
            p.keyboard.enabled &&
              (O(m).off("keydown", i), (p.keyboard.enabled = !1));
          }
          (p.keyboard = { enabled: !1 }),
            t({
              keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
            }),
            a("init", () => {
              p.params.keyboard.enabled && s();
            }),
            a("destroy", () => {
              p.keyboard.enabled && r();
            }),
            Object.assign(p.keyboard, { enable: s, disable: r });
        },
        function (e) {
          let { swiper: d, extendParams: t, on: a, emit: c } = e;
          const i = L();
          let p;
          t({
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null,
            },
          }),
            (d.mousewheel = { enabled: !1 });
          let u,
            s = g();
          const m = [];
          function r() {
            d.enabled && (d.mouseEntered = !0);
          }
          function n() {
            d.enabled && (d.mouseEntered = !1);
          }
          function h(e) {
            (d.params.mousewheel.thresholdDelta &&
              e.delta < d.params.mousewheel.thresholdDelta) ||
              (d.params.mousewheel.thresholdTime &&
                g() - s < d.params.mousewheel.thresholdTime) ||
              (6 <= e.delta && g() - s < 60) ||
              (e.direction < 0
                ? (d.isEnd && !d.params.loop) ||
                  d.animating ||
                  (d.slideNext(), c("scroll", e.raw))
                : (d.isBeginning && !d.params.loop) ||
                  d.animating ||
                  (d.slidePrev(), c("scroll", e.raw)),
              (s = new i.Date().getTime()));
          }
          function o(i) {
            let s = i,
              r = !0;
            if (d.enabled) {
              var n = d.params.mousewheel;
              d.params.cssMode && s.preventDefault();
              let e = d.$el;
              if (
                ("container" !== d.params.mousewheel.eventsTarget &&
                  (e = O(d.params.mousewheel.eventsTarget)),
                !d.mouseEntered &&
                  !e[0].contains(s.target) &&
                  !n.releaseOnEdges)
              )
                return !0;
              s.originalEvent && (s = s.originalEvent);
              let t = 0;
              var o = d.rtlTranslate ? -1 : 1,
                l = (function (e) {
                  let t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                  return (
                    "detail" in e && (a = e.detail),
                    "wheelDelta" in e && (a = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                      e.axis === e.HORIZONTAL_AXIS &&
                      ((t = a), (a = 0)),
                    (i = 10 * t),
                    (s = 10 * a),
                    "deltaY" in e && (s = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    e.shiftKey && !i && ((i = s), (s = 0)),
                    (i || s) &&
                      e.deltaMode &&
                      (1 === e.deltaMode
                        ? ((i *= 40), (s *= 40))
                        : ((i *= 800), (s *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    s && !a && (a = s < 1 ? -1 : 1),
                    { spinX: t, spinY: a, pixelX: i, pixelY: s }
                  );
                })(s);
              if (n.forceToAxis)
                if (d.isHorizontal()) {
                  if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                  t = -l.pixelX * o;
                } else {
                  if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                  t = -l.pixelY;
                }
              else
                t =
                  Math.abs(l.pixelX) > Math.abs(l.pixelY)
                    ? -l.pixelX * o
                    : -l.pixelY;
              if (0 === t) return !0;
              n.invert && (t = -t);
              let a = d.getTranslate() + t * n.sensitivity;
              if (
                ((a = a >= d.minTranslate() ? d.minTranslate() : a) <=
                  d.maxTranslate() && (a = d.maxTranslate()),
                (r =
                  !!d.params.loop ||
                  !(a === d.minTranslate() || a === d.maxTranslate())) &&
                  d.params.nested &&
                  s.stopPropagation(),
                d.params.freeMode && d.params.freeMode.enabled)
              ) {
                const i = {
                    time: g(),
                    delta: Math.abs(t),
                    direction: Math.sign(t),
                  },
                  r =
                    u &&
                    i.time < u.time + 500 &&
                    i.delta <= u.delta &&
                    i.direction === u.direction;
                if (!r) {
                  (u = void 0), d.params.loop && d.loopFix();
                  let e = d.getTranslate() + t * n.sensitivity;
                  const O = d.isBeginning,
                    g = d.isEnd;
                  if (
                    ((e = e >= d.minTranslate() ? d.minTranslate() : e) <=
                      d.maxTranslate() && (e = d.maxTranslate()),
                    d.setTransition(0),
                    d.setTranslate(e),
                    d.updateProgress(),
                    d.updateActiveIndex(),
                    d.updateSlidesClasses(),
                    ((!O && d.isBeginning) || (!g && d.isEnd)) &&
                      d.updateSlidesClasses(),
                    d.params.freeMode.sticky)
                  ) {
                    clearTimeout(p), (p = void 0), 15 <= m.length && m.shift();
                    const s = m.length ? m[m.length - 1] : void 0,
                      r = m[0];
                    if (
                      (m.push(i),
                      s && (i.delta > s.delta || i.direction !== s.direction))
                    )
                      m.splice(0);
                    else if (
                      15 <= m.length &&
                      i.time - r.time < 500 &&
                      1 <= r.delta - i.delta &&
                      i.delta <= 6
                    ) {
                      const s = 0 < t ? 0.8 : 0.2;
                      (u = i),
                        m.splice(0),
                        (p = C(() => {
                          d.slideToClosest(d.params.speed, !0, void 0, s);
                        }, 0));
                    }
                    p =
                      p ||
                      C(() => {
                        (u = i),
                          m.splice(0),
                          d.slideToClosest(d.params.speed, !0, void 0, 0.5);
                      }, 500);
                  }
                  if (
                    (r || c("scroll", s),
                    d.params.autoplay &&
                      d.params.autoplayDisableOnInteraction &&
                      d.autoplay.stop(),
                    e === d.minTranslate() || e === d.maxTranslate())
                  )
                    return !0;
                }
              } else {
                const s = {
                    time: g(),
                    delta: Math.abs(t),
                    direction: Math.sign(t),
                    raw: i,
                  },
                  r =
                    (2 <= m.length && m.shift(),
                    m.length ? m[m.length - 1] : void 0);
                if (
                  (m.push(s),
                  (!r ||
                    s.direction !== r.direction ||
                    s.delta > r.delta ||
                    s.time > r.time + 150) &&
                    h(s),
                  (function (e) {
                    var t = d.params.mousewheel;
                    if (e.direction < 0) {
                      if (d.isEnd && !d.params.loop && t.releaseOnEdges)
                        return 1;
                    } else if (
                      d.isBeginning &&
                      !d.params.loop &&
                      t.releaseOnEdges
                    )
                      return 1;
                  })(s))
                )
                  return !0;
              }
              return (
                s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1
              );
            }
          }
          function l(e) {
            let t = d.$el;
            (t =
              "container" !== d.params.mousewheel.eventsTarget
                ? O(d.params.mousewheel.eventsTarget)
                : t)[e]("mouseenter", r),
              t[e]("mouseleave", n),
              t[e]("wheel", o);
          }
          function f() {
            return d.params.cssMode
              ? (d.wrapperEl.removeEventListener("wheel", o), !0)
              : !d.mousewheel.enabled && (l("on"), (d.mousewheel.enabled = !0));
          }
          function v() {
            return d.params.cssMode
              ? (d.wrapperEl.addEventListener(event, o), !0)
              : !!d.mousewheel.enabled &&
                  (l("off"), !(d.mousewheel.enabled = !1));
          }
          a("init", () => {
            !d.params.mousewheel.enabled && d.params.cssMode && v(),
              d.params.mousewheel.enabled && f();
          }),
            a("destroy", () => {
              d.params.cssMode && f(), d.mousewheel.enabled && v();
            }),
            Object.assign(d.mousewheel, { enable: f, disable: v });
        },
        function (e) {
          let { swiper: s, extendParams: t, on: a, emit: r } = e;
          function i(e) {
            let t;
            return (t =
              e &&
              ((t = O(e)), s.params.uniqueNavElements) &&
              "string" == typeof e &&
              1 < t.length &&
              1 === s.$el.find(e).length
                ? s.$el.find(e)
                : t);
          }
          function n(e, t) {
            var a = s.params.navigation;
            e &&
              0 < e.length &&
              (e[t ? "addClass" : "removeClass"](a.disabledClass),
              e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t),
              s.params.watchOverflow) &&
              s.enabled &&
              e[s.isLocked ? "addClass" : "removeClass"](a.lockClass);
          }
          function o() {
            var e, t;
            s.params.loop ||
              (({ $nextEl: e, $prevEl: t } = s.navigation),
              n(t, s.isBeginning && !s.params.rewind),
              n(e, s.isEnd && !s.params.rewind));
          }
          function l(e) {
            e.preventDefault(),
              (s.isBeginning && !s.params.loop && !s.params.rewind) ||
                (s.slidePrev(), r("navigationPrev"));
          }
          function d(e) {
            e.preventDefault(),
              (s.isEnd && !s.params.loop && !s.params.rewind) ||
                (s.slideNext(), r("navigationNext"));
          }
          function c() {
            var e,
              t,
              a = s.params.navigation;
            (s.params.navigation = $(
              s,
              s.originalParams.navigation,
              s.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
              (a.nextEl || a.prevEl) &&
                ((e = i(a.nextEl)),
                (t = i(a.prevEl)),
                e && 0 < e.length && e.on("click", d),
                t && 0 < t.length && t.on("click", l),
                Object.assign(s.navigation, {
                  $nextEl: e,
                  nextEl: e && e[0],
                  $prevEl: t,
                  prevEl: t && t[0],
                }),
                s.enabled ||
                  (e && e.addClass(a.lockClass), t && t.addClass(a.lockClass)));
          }
          function p() {
            var { $nextEl: e, $prevEl: t } = s.navigation;
            e &&
              e.length &&
              (e.off("click", d),
              e.removeClass(s.params.navigation.disabledClass)),
              t &&
                t.length &&
                (t.off("click", l),
                t.removeClass(s.params.navigation.disabledClass));
          }
          t({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
              navigationDisabledClass: "swiper-navigation-disabled",
            },
          }),
            (s.navigation = {
              nextEl: null,
              $nextEl: null,
              prevEl: null,
              $prevEl: null,
            }),
            a("init", () => {
              (!1 === s.params.navigation.enabled ? u : (c(), o))();
            }),
            a("toEdge fromEdge lock unlock", () => {
              o();
            }),
            a("destroy", () => {
              p();
            }),
            a("enable disable", () => {
              var { $nextEl: e, $prevEl: t } = s.navigation;
              e &&
                e[s.enabled ? "removeClass" : "addClass"](
                  s.params.navigation.lockClass
                ),
                t &&
                  t[s.enabled ? "removeClass" : "addClass"](
                    s.params.navigation.lockClass
                  );
            }),
            a("click", (e, t) => {
              var { $nextEl: a, $prevEl: i } = s.navigation,
                t = t.target;
              if (
                s.params.navigation.hideOnClick &&
                !O(t).is(i) &&
                !O(t).is(a) &&
                (!(
                  s.pagination &&
                  s.params.pagination &&
                  s.params.pagination.clickable
                ) ||
                  (s.pagination.el !== t && !s.pagination.el.contains(t)))
              ) {
                let e;
                a
                  ? (e = a.hasClass(s.params.navigation.hiddenClass))
                  : i && (e = i.hasClass(s.params.navigation.hiddenClass)),
                  r(!0 === e ? "navigationShow" : "navigationHide"),
                  a && a.toggleClass(s.params.navigation.hiddenClass),
                  i && i.toggleClass(s.params.navigation.hiddenClass);
              }
            });
          const u = () => {
            s.$el.addClass(s.params.navigation.navigationDisabledClass), p();
          };
          Object.assign(s.navigation, {
            enable: () => {
              s.$el.removeClass(s.params.navigation.navigationDisabledClass),
                c(),
                o();
            },
            disable: u,
            update: o,
            init: c,
            destroy: p,
          });
        },
        function (e) {
          let { swiper: l, extendParams: t, on: a, emit: d } = e;
          e = "swiper-pagination";
          let c,
            p =
              (t({
                pagination: {
                  el: null,
                  bulletElement: "span",
                  clickable: !1,
                  hideOnClick: !1,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: !1,
                  type: "bullets",
                  dynamicBullets: !1,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: (e) => e,
                  formatFractionTotal: (e) => e,
                  bulletClass: e + "-bullet",
                  bulletActiveClass: e + "-bullet-active",
                  modifierClass: e + "-",
                  currentClass: e + "-current",
                  totalClass: e + "-total",
                  hiddenClass: e + "-hidden",
                  progressbarFillClass: e + "-progressbar-fill",
                  progressbarOppositeClass: e + "-progressbar-opposite",
                  clickableClass: e + "-clickable",
                  lockClass: e + "-lock",
                  horizontalClass: e + "-horizontal",
                  verticalClass: e + "-vertical",
                  paginationDisabledClass: e + "-disabled",
                },
              }),
              (l.pagination = { el: null, $el: null, bullets: [] }),
              0);
          function u() {
            return (
              !l.params.pagination.el ||
              !l.pagination.el ||
              !l.pagination.$el ||
              0 === l.pagination.$el.length
            );
          }
          function m(e, t) {
            var a = l.params.pagination["bulletActiveClass"];
            e[t]()
              .addClass(a + "-" + t)
              [t]()
              .addClass(a + `-${t}-` + t);
          }
          function i() {
            const t = l.rtl,
              r = l.params.pagination;
            if (!u()) {
              const n = (l.virtual && l.params.virtual.enabled ? l.virtual : l)
                  .slides.length,
                o = l.pagination.$el;
              let s;
              var a = l.params.loop
                ? Math.ceil((n - 2 * l.loopedSlides) / l.params.slidesPerGroup)
                : l.snapGrid.length;
              if (
                (l.params.loop
                  ? ((s = Math.ceil(
                      (l.activeIndex - l.loopedSlides) / l.params.slidesPerGroup
                    )) >
                      n - 1 - 2 * l.loopedSlides &&
                      (s -= n - 2 * l.loopedSlides),
                    s > a - 1 && (s -= a),
                    s < 0 &&
                      "bullets" !== l.params.paginationType &&
                      (s = a + s))
                  : (s =
                      void 0 !== l.snapIndex
                        ? l.snapIndex
                        : l.activeIndex || 0),
                "bullets" === r.type &&
                  l.pagination.bullets &&
                  0 < l.pagination.bullets.length)
              ) {
                const n = l.pagination.bullets;
                let a, i, e;
                if (
                  (r.dynamicBullets &&
                    ((c = n
                      .eq(0)
                      [l.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    o.css(
                      l.isHorizontal() ? "width" : "height",
                      c * (r.dynamicMainBullets + 4) + "px"
                    ),
                    1 < r.dynamicMainBullets &&
                      void 0 !== l.previousIndex &&
                      ((p += s - (l.previousIndex - l.loopedSlides || 0)) >
                      r.dynamicMainBullets - 1
                        ? (p = r.dynamicMainBullets - 1)
                        : p < 0 && (p = 0)),
                    (a = Math.max(s - p, 0)),
                    (i = a + (Math.min(n.length, r.dynamicMainBullets) - 1)),
                    (e = (i + a) / 2)),
                  n.removeClass(
                    ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                      .map((e) => "" + r.bulletActiveClass + e)
                      .join(" ")
                  ),
                  1 < o.length)
                )
                  n.each((e) => {
                    var e = O(e),
                      t = e.index();
                    t === s && e.addClass(r.bulletActiveClass),
                      r.dynamicBullets &&
                        (t >= a &&
                          t <= i &&
                          e.addClass(r.bulletActiveClass + "-main"),
                        t === a && m(e, "prev"),
                        t === i) &&
                        m(e, "next");
                  });
                else {
                  const t = n.eq(s),
                    o = t.index();
                  if ((t.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                    const t = n.eq(a),
                      c = n.eq(i);
                    for (let e = a; e <= i; e += 1)
                      n.eq(e).addClass(r.bulletActiveClass + "-main");
                    if (l.params.loop)
                      if (o >= n.length) {
                        for (let e = r.dynamicMainBullets; 0 <= e; --e)
                          n.eq(n.length - e).addClass(
                            r.bulletActiveClass + "-main"
                          );
                        n.eq(n.length - r.dynamicMainBullets - 1).addClass(
                          r.bulletActiveClass + "-prev"
                        );
                      } else m(t, "prev"), m(c, "next");
                    else m(t, "prev"), m(c, "next");
                  }
                }
                if (r.dynamicBullets) {
                  const d = Math.min(n.length, r.dynamicMainBullets + 4),
                    o = (c * d - c) / 2 - e * c,
                    p = t ? "right" : "left";
                  n.css(l.isHorizontal() ? p : "top", o + "px");
                }
              }
              if (
                ("fraction" === r.type &&
                  (o
                    .find(z(r.currentClass))
                    .text(r.formatFractionCurrent(s + 1)),
                  o.find(z(r.totalClass)).text(r.formatFractionTotal(a))),
                "progressbar" === r.type)
              ) {
                var i = r.progressbarOpposite
                  ? l.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : l.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                const n = (s + 1) / a;
                let e = 1,
                  t = 1;
                "horizontal" == i ? (e = n) : (t = n),
                  o
                    .find(z(r.progressbarFillClass))
                    .transform(`translate3d(0,0,0) scaleX(${e}) scaleY(${t})`)
                    .transition(l.params.speed);
              }
              "custom" === r.type && r.renderCustom
                ? (o.html(r.renderCustom(l, s + 1, a)),
                  d("paginationRender", o[0]))
                : d("paginationUpdate", o[0]),
                l.params.watchOverflow &&
                  l.enabled &&
                  o[l.isLocked ? "addClass" : "removeClass"](r.lockClass);
            }
          }
          function s() {
            var i = l.params.pagination;
            if (!u()) {
              var e = (l.virtual && l.params.virtual.enabled ? l.virtual : l)
                  .slides.length,
                s = l.pagination.$el;
              let a = "";
              if ("bullets" === i.type) {
                let t = l.params.loop
                  ? Math.ceil(
                      (e - 2 * l.loopedSlides) / l.params.slidesPerGroup
                    )
                  : l.snapGrid.length;
                l.params.freeMode &&
                  l.params.freeMode.enabled &&
                  !l.params.loop &&
                  t > e &&
                  (t = e);
                for (let e = 0; e < t; e += 1)
                  i.renderBullet
                    ? (a += i.renderBullet.call(l, e, i.bulletClass))
                    : (a += `<${i.bulletElement} class="${i.bulletClass}"></${i.bulletElement}>`);
                s.html(a), (l.pagination.bullets = s.find(z(i.bulletClass)));
              }
              "fraction" === i.type &&
                ((a = i.renderFraction
                  ? i.renderFraction.call(l, i.currentClass, i.totalClass)
                  : `<span class="${i.currentClass}"></span> / <span class="${i.totalClass}"></span>`),
                s.html(a)),
                "progressbar" === i.type &&
                  ((a = i.renderProgressbar
                    ? i.renderProgressbar.call(l, i.progressbarFillClass)
                    : `<span class="${i.progressbarFillClass}"></span>`),
                  s.html(a)),
                "custom" !== i.type &&
                  d("paginationRender", l.pagination.$el[0]);
            }
          }
          function r() {
            l.params.pagination = $(
              l,
              l.originalParams.pagination,
              l.params.pagination,
              { el: "swiper-pagination" }
            );
            var t = l.params.pagination;
            if (t.el) {
              let e = O(t.el);
              0 !== e.length &&
                (l.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  1 < e.length &&
                  1 < (e = l.$el.find(t.el)).length &&
                  (e = e.filter((e) => O(e).parents(".swiper")[0] === l.el)),
                "bullets" === t.type &&
                  t.clickable &&
                  e.addClass(t.clickableClass),
                e.addClass(t.modifierClass + t.type),
                e.addClass(
                  l.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (e.addClass("" + t.modifierClass + t.type + "-dynamic"),
                  (p = 0),
                  t.dynamicMainBullets < 1) &&
                  (t.dynamicMainBullets = 1),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  e.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  e.on("click", z(t.bulletClass), function (e) {
                    e.preventDefault();
                    let t = O(this).index() * l.params.slidesPerGroup;
                    l.params.loop && (t += l.loopedSlides), l.slideTo(t);
                  }),
                Object.assign(l.pagination, { $el: e, el: e[0] }),
                l.enabled || e.addClass(t.lockClass));
            }
          }
          function n() {
            var e,
              t = l.params.pagination;
            u() ||
              ((e = l.pagination.$el).removeClass(t.hiddenClass),
              e.removeClass(t.modifierClass + t.type),
              e.removeClass(
                l.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              l.pagination.bullets &&
                l.pagination.bullets.removeClass &&
                l.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && e.off("click", z(t.bulletClass)));
          }
          a("init", () => {
            (!1 === l.params.pagination.enabled ? o : (r(), s(), i))();
          }),
            a("activeIndexChange", () => {
              (!l.params.loop && void 0 !== l.snapIndex) || i();
            }),
            a("snapIndexChange", () => {
              l.params.loop || i();
            }),
            a("slidesLengthChange", () => {
              l.params.loop && (s(), i());
            }),
            a("snapGridLengthChange", () => {
              l.params.loop || (s(), i());
            }),
            a("destroy", () => {
              n();
            }),
            a("enable disable", () => {
              var e = l.pagination["$el"];
              e &&
                e[l.enabled ? "removeClass" : "addClass"](
                  l.params.pagination.lockClass
                );
            }),
            a("lock unlock", () => {
              i();
            }),
            a("click", (e, t) => {
              var t = t.target,
                a = l.pagination["$el"];
              if (
                l.params.pagination.el &&
                l.params.pagination.hideOnClick &&
                a &&
                0 < a.length &&
                !O(t).hasClass(l.params.pagination.bulletClass) &&
                (!l.navigation ||
                  !(
                    (l.navigation.nextEl && t === l.navigation.nextEl) ||
                    (l.navigation.prevEl && t === l.navigation.prevEl)
                  ))
              ) {
                const e = a.hasClass(l.params.pagination.hiddenClass);
                d(!0 === e ? "paginationShow" : "paginationHide"),
                  a.toggleClass(l.params.pagination.hiddenClass);
              }
            });
          const o = () => {
            l.$el.addClass(l.params.pagination.paginationDisabledClass),
              l.pagination.$el &&
                l.pagination.$el.addClass(
                  l.params.pagination.paginationDisabledClass
                ),
              n();
          };
          Object.assign(l.pagination, {
            enable: () => {
              l.$el.removeClass(l.params.pagination.paginationDisabledClass),
                l.pagination.$el &&
                  l.pagination.$el.removeClass(
                    l.params.pagination.paginationDisabledClass
                  ),
                r(),
                s(),
                i();
            },
            disable: o,
            render: s,
            update: i,
            init: r,
            destroy: n,
          });
        },
        function (e) {
          let { swiper: l, extendParams: t, on: a, emit: r } = e;
          const o = S();
          let n,
            d,
            c,
            i,
            p = !1,
            u = null,
            m = null;
          function s() {
            if (l.params.scrollbar.el && l.scrollbar.el) {
              const { scrollbar: a, rtlTranslate: i, progress: s } = l,
                { $dragEl: r, $el: n } = a,
                o = l.params.scrollbar;
              let e = d,
                t = (c - d) * s;
              i
                ? 0 < (t = -t)
                  ? ((e = d - t), (t = 0))
                  : -t + d > c && (e = c + t)
                : t < 0
                ? ((e = d + t), (t = 0))
                : t + d > c && (e = c - t),
                l.isHorizontal()
                  ? (r.transform(`translate3d(${t}px, 0, 0)`),
                    (r[0].style.width = e + "px"))
                  : (r.transform(`translate3d(0px, ${t}px, 0)`),
                    (r[0].style.height = e + "px")),
                o.hide &&
                  (clearTimeout(u),
                  (n[0].style.opacity = 1),
                  (u = setTimeout(() => {
                    (n[0].style.opacity = 0), n.transition(400);
                  }, 1e3)));
            }
          }
          function h() {
            var e, t, a;
            l.params.scrollbar.el &&
              l.scrollbar.el &&
              ((e = l["scrollbar"]),
              ({ $dragEl: t, $el: a } = e),
              (t[0].style.width = ""),
              (t[0].style.height = ""),
              (c = l.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
              (i =
                l.size /
                (l.virtualSize +
                  l.params.slidesOffsetBefore -
                  (l.params.centeredSlides ? l.snapGrid[0] : 0))),
              (d =
                "auto" === l.params.scrollbar.dragSize
                  ? c * i
                  : parseInt(l.params.scrollbar.dragSize, 10)),
              l.isHorizontal()
                ? (t[0].style.width = d + "px")
                : (t[0].style.height = d + "px"),
              (a[0].style.display = 1 <= i ? "none" : ""),
              l.params.scrollbar.hide && (a[0].style.opacity = 0),
              l.params.watchOverflow) &&
              l.enabled &&
              e.$el[l.isLocked ? "addClass" : "removeClass"](
                l.params.scrollbar.lockClass
              );
          }
          function f(e) {
            return l.isHorizontal()
              ? ("touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0]
                  : e
                ).clientX
              : ("touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0]
                  : e
                ).clientY;
          }
          function v(e) {
            var { scrollbar: t, rtlTranslate: a } = l,
              t = t["$el"];
            let i;
            (i =
              (f(e) -
                t.offset()[l.isHorizontal() ? "left" : "top"] -
                (null !== n ? n : d / 2)) /
              (c - d)),
              (i = Math.max(Math.min(i, 1), 0)),
              a && (i = 1 - i);
            e = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * i;
            l.updateProgress(e),
              l.setTranslate(e),
              l.updateActiveIndex(),
              l.updateSlidesClasses();
          }
          function g(e) {
            var t = l.params.scrollbar,
              { scrollbar: a, $wrapperEl: i } = l,
              { $el: a, $dragEl: s } = a;
            (p = !0),
              (n =
                e.target === s[0] || e.target === s
                  ? f(e) -
                    e.target.getBoundingClientRect()[
                      l.isHorizontal() ? "left" : "top"
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              i.transition(100),
              s.transition(100),
              v(e),
              clearTimeout(m),
              a.transition(0),
              t.hide && a.css("opacity", 1),
              l.params.cssMode && l.$wrapperEl.css("scroll-snap-type", "none"),
              r("scrollbarDragStart", e);
          }
          function b(e) {
            var { scrollbar: t, $wrapperEl: a } = l,
              { $el: t, $dragEl: i } = t;
            p &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              v(e),
              a.transition(0),
              t.transition(0),
              i.transition(0),
              r("scrollbarDragMove", e));
          }
          function w(e) {
            const t = l.params.scrollbar,
              { scrollbar: a, $wrapperEl: i } = l,
              s = a["$el"];
            p &&
              ((p = !1),
              l.params.cssMode &&
                (l.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
              t.hide &&
                (clearTimeout(m),
                (m = C(() => {
                  s.css("opacity", 0), s.transition(400);
                }, 1e3))),
              r("scrollbarDragEnd", e),
              t.snapOnRelease) &&
              l.slideToClosest();
          }
          function y(e) {
            var t,
              {
                scrollbar: a,
                touchEventsTouch: i,
                touchEventsDesktop: s,
                params: r,
                support: n,
              } = l,
              a = a.$el;
            a &&
              ((a = a[0]),
              (t = !(!n.passiveListener || !r.passiveListeners) && {
                passive: !1,
                capture: !1,
              }),
              (r = !(!n.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1,
              }),
              a) &&
              ((e = "on" === e ? "addEventListener" : "removeEventListener"),
              n.touch
                ? (a[e](i.start, g, t), a[e](i.move, b, t), a[e](i.end, w, r))
                : (a[e](s.start, g, t), o[e](s.move, b, t), o[e](s.end, w, r)));
          }
          function E() {
            var { scrollbar: a, $el: i } = l,
              s =
                ((l.params.scrollbar = $(
                  l,
                  l.originalParams.scrollbar,
                  l.params.scrollbar,
                  { el: "swiper-scrollbar" }
                )),
                l.params.scrollbar);
            if (s.el) {
              let e = O(s.el),
                t =
                  ((e =
                    l.params.uniqueNavElements &&
                    "string" == typeof s.el &&
                    1 < e.length &&
                    1 === i.find(s.el).length
                      ? i.find(s.el)
                      : e).addClass(
                    l.isHorizontal() ? s.horizontalClass : s.verticalClass
                  ),
                  e.find("." + l.params.scrollbar.dragClass));
              0 === t.length &&
                ((t = O(`<div class="${l.params.scrollbar.dragClass}"></div>`)),
                e.append(t)),
                Object.assign(a, {
                  $el: e,
                  el: e[0],
                  $dragEl: t,
                  dragEl: t[0],
                }),
                s.draggable &&
                  l.params.scrollbar.el &&
                  l.scrollbar.el &&
                  y("on"),
                e &&
                  e[l.enabled ? "removeClass" : "addClass"](
                    l.params.scrollbar.lockClass
                  );
            }
          }
          function x() {
            var e = l.params.scrollbar,
              t = l.scrollbar.$el;
            t &&
              t.removeClass(
                l.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              l.params.scrollbar.el && l.scrollbar.el && y("off");
          }
          t({
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
              scrollbarDisabledClass: "swiper-scrollbar-disabled",
              horizontalClass: "swiper-scrollbar-horizontal",
              verticalClass: "swiper-scrollbar-vertical",
            },
          }),
            (l.scrollbar = {
              el: null,
              dragEl: null,
              $el: null,
              $dragEl: null,
            }),
            a("init", () => {
              (!1 === l.params.scrollbar.enabled ? T : (E(), h(), s))();
            }),
            a("update resize observerUpdate lock unlock", () => {
              h();
            }),
            a("setTranslate", () => {
              s();
            }),
            a("setTransition", (e, t) => {
              (t = t),
                l.params.scrollbar.el &&
                  l.scrollbar.el &&
                  l.scrollbar.$dragEl.transition(t);
            }),
            a("enable disable", () => {
              var e = l.scrollbar["$el"];
              e &&
                e[l.enabled ? "removeClass" : "addClass"](
                  l.params.scrollbar.lockClass
                );
            }),
            a("destroy", () => {
              x();
            });
          const T = () => {
            l.$el.addClass(l.params.scrollbar.scrollbarDisabledClass),
              l.scrollbar.$el &&
                l.scrollbar.$el.addClass(
                  l.params.scrollbar.scrollbarDisabledClass
                ),
              x();
          };
          Object.assign(l.scrollbar, {
            enable: () => {
              l.$el.removeClass(l.params.scrollbar.scrollbarDisabledClass),
                l.scrollbar.$el &&
                  l.scrollbar.$el.removeClass(
                    l.params.scrollbar.scrollbarDisabledClass
                  ),
                E(),
                h(),
                s();
            },
            disable: T,
            updateSize: h,
            setTranslate: s,
            init: E,
            destroy: x,
          });
        },
        function (e) {
          let { swiper: l, extendParams: t, on: a } = e;
          t({ parallax: { enabled: !1 } });
          const r = (e, t) => {
              var a = l["rtl"],
                i = O(e),
                e = a ? -1 : 1,
                a = i.attr("data-swiper-parallax") || "0";
              let s = i.attr("data-swiper-parallax-x"),
                r = i.attr("data-swiper-parallax-y");
              var n = i.attr("data-swiper-parallax-scale"),
                o = i.attr("data-swiper-parallax-opacity");
              if (
                (s || r
                  ? ((s = s || "0"), (r = r || "0"))
                  : l.isHorizontal()
                  ? ((s = a), (r = "0"))
                  : ((r = a), (s = "0")),
                (s =
                  0 <= s.indexOf("%")
                    ? parseInt(s, 10) * t * e + "%"
                    : s * t * e + "px"),
                (r =
                  0 <= r.indexOf("%")
                    ? parseInt(r, 10) * t + "%"
                    : r * t + "px"),
                null != o)
              ) {
                const e = o - (o - 1) * (1 - Math.abs(t));
                i[0].style.opacity = e;
              }
              if (null == n) i.transform(`translate3d(${s}, ${r}, 0px)`);
              else {
                const e = n - (n - 1) * (1 - Math.abs(t));
                i.transform(`translate3d(${s}, ${r}, 0px) scale(${e})`);
              }
            },
            i = () => {
              const { $el: e, slides: t, progress: i, snapGrid: s } = l;
              e
                .children(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((e) => {
                  r(e, i);
                }),
                t.each((e, t) => {
                  let a = e.progress;
                  1 < l.params.slidesPerGroup &&
                    "auto" !== l.params.slidesPerView &&
                    (a += Math.ceil(t / 2) - i * (s.length - 1)),
                    (a = Math.min(Math.max(a, -1), 1)),
                    O(e)
                      .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                      )
                      .each((e) => {
                        r(e, a);
                      });
                });
            };
          a("beforeInit", () => {
            l.params.parallax.enabled &&
              ((l.params.watchSlidesProgress = !0),
              (l.originalParams.watchSlidesProgress = !0));
          }),
            a("init", () => {
              l.params.parallax.enabled && i();
            }),
            a("setTranslate", () => {
              l.params.parallax.enabled && i();
            }),
            a("setTransition", (e, t) => {
              var a;
              l.params.parallax.enabled &&
                (void 0 === (a = t) && (a = l.params.speed),
                l.$el
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    e = O(e);
                    let t =
                      parseInt(e.attr("data-swiper-parallax-duration"), 10) ||
                      a;
                    0 === a && (t = 0), e.transition(t);
                  }));
            });
        },
        function (e) {
          let { swiper: E, extendParams: t, on: a, emit: i } = e;
          const x = L();
          t({
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          }),
            (E.zoom = { enabled: !1 });
          let s,
            r,
            n,
            T = 1,
            o = !1;
          const S = {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3,
            },
            C = {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {},
            },
            l = {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0,
            };
          let d = 1;
          function c(e) {
            var t, a, i;
            return e.targetTouches.length < 2
              ? 1
              : ((t = e.targetTouches[0].pageX),
                (a = e.targetTouches[0].pageY),
                (i = e.targetTouches[1].pageX),
                (e = e.targetTouches[1].pageY),
                Math.sqrt((i - t) ** 2 + (e - a) ** 2));
          }
          function p(e) {
            var t = E.support,
              a = E.params.zoom;
            if (((r = !1), (n = !1), !t.gestures)) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (r = !0), (S.scaleStart = c(e));
            }
            (S.$slideEl && S.$slideEl.length) ||
            ((S.$slideEl = O(e.target).closest("." + E.params.slideClass)),
            0 === S.$slideEl.length &&
              (S.$slideEl = E.slides.eq(E.activeIndex)),
            (S.$imageEl = S.$slideEl
              .find("." + a.containerClass)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (S.$imageWrapEl = S.$imageEl.parent("." + a.containerClass)),
            (S.maxRatio =
              S.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            0 !== S.$imageWrapEl.length)
              ? (S.$imageEl && S.$imageEl.transition(0), (o = !0))
              : (S.$imageEl = void 0);
          }
          function u(e) {
            var t = E.support,
              a = E.params.zoom,
              i = E.zoom;
            if (!t.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (n = !0), (S.scaleMove = c(e));
            }
            S.$imageEl && 0 !== S.$imageEl.length
              ? (t.gestures
                  ? (i.scale = e.scale * T)
                  : (i.scale = (S.scaleMove / S.scaleStart) * T),
                i.scale > S.maxRatio &&
                  (i.scale =
                    S.maxRatio - 1 + (i.scale - S.maxRatio + 1) ** 0.5),
                i.scale < a.minRatio &&
                  (i.scale =
                    a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
                S.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
              : "gesturechange" === e.type && p(e);
          }
          function m(e) {
            var t = E.device,
              a = E.support,
              i = E.params.zoom,
              s = E.zoom;
            if (!a.gestures) {
              if (!r || !n) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !t.android)
              )
                return;
              (r = !1), (n = !1);
            }
            S.$imageEl &&
              0 !== S.$imageEl.length &&
              ((s.scale = Math.max(Math.min(s.scale, S.maxRatio), i.minRatio)),
              S.$imageEl
                .transition(E.params.speed)
                .transform(`translate3d(0,0,0) scale(${s.scale})`),
              (T = s.scale),
              (o = !1),
              1 === s.scale) &&
              (S.$slideEl = void 0);
          }
          function h(e) {
            var t = E.zoom;
            if (
              S.$imageEl &&
              0 !== S.$imageEl.length &&
              ((E.allowClick = !1), C.isTouched) &&
              S.$slideEl
            ) {
              C.isMoved ||
                ((C.width = S.$imageEl[0].offsetWidth),
                (C.height = S.$imageEl[0].offsetHeight),
                (C.startX = I(S.$imageWrapEl[0], "x") || 0),
                (C.startY = I(S.$imageWrapEl[0], "y") || 0),
                (S.slideWidth = S.$slideEl[0].offsetWidth),
                (S.slideHeight = S.$slideEl[0].offsetHeight),
                S.$imageWrapEl.transition(0));
              var a = C.width * t.scale,
                t = C.height * t.scale;
              if (!(a < S.slideWidth && t < S.slideHeight)) {
                if (
                  ((C.minX = Math.min(S.slideWidth / 2 - a / 2, 0)),
                  (C.maxX = -C.minX),
                  (C.minY = Math.min(S.slideHeight / 2 - t / 2, 0)),
                  (C.maxY = -C.minY),
                  (C.touchesCurrent.x = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageX),
                  (C.touchesCurrent.y = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageY),
                  !C.isMoved && !o)
                ) {
                  if (
                    E.isHorizontal() &&
                    ((Math.floor(C.minX) === Math.floor(C.startX) &&
                      C.touchesCurrent.x < C.touchesStart.x) ||
                      (Math.floor(C.maxX) === Math.floor(C.startX) &&
                        C.touchesCurrent.x > C.touchesStart.x))
                  )
                    return void (C.isTouched = !1);
                  if (
                    !E.isHorizontal() &&
                    ((Math.floor(C.minY) === Math.floor(C.startY) &&
                      C.touchesCurrent.y < C.touchesStart.y) ||
                      (Math.floor(C.maxY) === Math.floor(C.startY) &&
                        C.touchesCurrent.y > C.touchesStart.y))
                  )
                    return void (C.isTouched = !1);
                }
                e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  (C.isMoved = !0),
                  (C.currentX =
                    C.touchesCurrent.x - C.touchesStart.x + C.startX),
                  (C.currentY =
                    C.touchesCurrent.y - C.touchesStart.y + C.startY),
                  C.currentX < C.minX &&
                    (C.currentX =
                      C.minX + 1 - (C.minX - C.currentX + 1) ** 0.8),
                  C.currentX > C.maxX &&
                    (C.currentX =
                      C.maxX - 1 + (C.currentX - C.maxX + 1) ** 0.8),
                  C.currentY < C.minY &&
                    (C.currentY =
                      C.minY + 1 - (C.minY - C.currentY + 1) ** 0.8),
                  C.currentY > C.maxY &&
                    (C.currentY =
                      C.maxY - 1 + (C.currentY - C.maxY + 1) ** 0.8),
                  l.prevPositionX || (l.prevPositionX = C.touchesCurrent.x),
                  l.prevPositionY || (l.prevPositionY = C.touchesCurrent.y),
                  l.prevTime || (l.prevTime = Date.now()),
                  (l.x =
                    (C.touchesCurrent.x - l.prevPositionX) /
                    (Date.now() - l.prevTime) /
                    2),
                  (l.y =
                    (C.touchesCurrent.y - l.prevPositionY) /
                    (Date.now() - l.prevTime) /
                    2),
                  Math.abs(C.touchesCurrent.x - l.prevPositionX) < 2 &&
                    (l.x = 0),
                  Math.abs(C.touchesCurrent.y - l.prevPositionY) < 2 &&
                    (l.y = 0),
                  (l.prevPositionX = C.touchesCurrent.x),
                  (l.prevPositionY = C.touchesCurrent.y),
                  (l.prevTime = Date.now()),
                  S.$imageWrapEl.transform(
                    `translate3d(${C.currentX}px, ${C.currentY}px,0)`
                  );
              }
            }
          }
          function f() {
            var e = E.zoom;
            S.$slideEl &&
              E.previousIndex !== E.activeIndex &&
              (S.$imageEl &&
                S.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              S.$imageWrapEl && S.$imageWrapEl.transform("translate3d(0,0,0)"),
              (e.scale = 1),
              (T = 1),
              (S.$slideEl = void 0),
              (S.$imageEl = void 0),
              (S.$imageWrapEl = void 0));
          }
          function v(b) {
            var w = E.zoom,
              y = E.params.zoom;
            if (
              (S.$slideEl ||
                (b &&
                  b.target &&
                  (S.$slideEl = O(b.target).closest("." + E.params.slideClass)),
                S.$slideEl ||
                  (E.params.virtual && E.params.virtual.enabled && E.virtual
                    ? (S.$slideEl = E.$wrapperEl.children(
                        "." + E.params.slideActiveClass
                      ))
                    : (S.$slideEl = E.slides.eq(E.activeIndex))),
                (S.$imageEl = S.$slideEl
                  .find("." + y.containerClass)
                  .eq(0)
                  .find("picture, img, svg, canvas, .swiper-zoom-target")
                  .eq(0)),
                (S.$imageWrapEl = S.$imageEl.parent("." + y.containerClass))),
              S.$imageEl &&
                0 !== S.$imageEl.length &&
                S.$imageWrapEl &&
                0 !== S.$imageWrapEl.length)
            ) {
              let e, t, a, i, s, r, n, o, l, d, c, p, u, m, h, f, v, g;
              E.params.cssMode &&
                ((E.wrapperEl.style.overflow = "hidden"),
                (E.wrapperEl.style.touchAction = "none")),
                S.$slideEl.addClass("" + y.zoomedSlideClass),
                (t =
                  void 0 === C.touchesStart.x && b
                    ? ((e = ("touchend" === b.type ? b.changedTouches[0] : b)
                        .pageX),
                      ("touchend" === b.type ? b.changedTouches[0] : b).pageY)
                    : ((e = C.touchesStart.x), C.touchesStart.y)),
                (w.scale =
                  S.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                (T = S.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                b
                  ? ((v = S.$slideEl[0].offsetWidth),
                    (g = S.$slideEl[0].offsetHeight),
                    (a = S.$slideEl.offset().left + x.scrollX),
                    (i = S.$slideEl.offset().top + x.scrollY),
                    (s = a + v / 2 - e),
                    (r = i + g / 2 - t),
                    (l = S.$imageEl[0].offsetWidth),
                    (d = S.$imageEl[0].offsetHeight),
                    (c = l * w.scale),
                    (p = d * w.scale),
                    (h = -(u = Math.min(v / 2 - c / 2, 0))),
                    (f = -(m = Math.min(g / 2 - p / 2, 0))),
                    (n = s * w.scale),
                    (o = r * w.scale),
                    (n = n < u ? u : n) > h && (n = h),
                    (o = o < m ? m : o) > f && (o = f))
                  : ((n = 0), (o = 0)),
                S.$imageWrapEl
                  .transition(300)
                  .transform(`translate3d(${n}px, ${o}px,0)`),
                S.$imageEl
                  .transition(300)
                  .transform(`translate3d(0,0,0) scale(${w.scale})`);
            }
          }
          function g() {
            var e = E.zoom,
              t = E.params.zoom;
            S.$slideEl ||
              (E.params.virtual && E.params.virtual.enabled && E.virtual
                ? (S.$slideEl = E.$wrapperEl.children(
                    "." + E.params.slideActiveClass
                  ))
                : (S.$slideEl = E.slides.eq(E.activeIndex)),
              (S.$imageEl = S.$slideEl
                .find("." + t.containerClass)
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (S.$imageWrapEl = S.$imageEl.parent("." + t.containerClass))),
              S.$imageEl &&
                0 !== S.$imageEl.length &&
                S.$imageWrapEl &&
                0 !== S.$imageWrapEl.length &&
                (E.params.cssMode &&
                  ((E.wrapperEl.style.overflow = ""),
                  (E.wrapperEl.style.touchAction = "")),
                (e.scale = 1),
                (T = 1),
                S.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                S.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                S.$slideEl.removeClass("" + t.zoomedSlideClass),
                (S.$slideEl = void 0));
          }
          function b(e) {
            var t = E.zoom;
            t.scale && 1 !== t.scale ? g() : v(e);
          }
          function w() {
            var e = E.support;
            return {
              passiveListener: !(
                "touchstart" !== E.touchEvents.start ||
                !e.passiveListener ||
                !E.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              activeListenerWithCapture: !e.passiveListener || {
                passive: !1,
                capture: !0,
              },
            };
          }
          function y() {
            return "." + E.params.slideClass;
          }
          function M(e) {
            var t = w()["passiveListener"],
              a = y();
            E.$wrapperEl[e]("gesturestart", a, p, t),
              E.$wrapperEl[e]("gesturechange", a, u, t),
              E.$wrapperEl[e]("gestureend", a, m, t);
          }
          function $() {
            s || ((s = !0), M("on"));
          }
          function z() {
            s && ((s = !1), M("off"));
          }
          function k() {
            var e,
              t,
              a,
              i = E.zoom;
            i.enabled ||
              ((i.enabled = !0),
              (i = E.support),
              ({ passiveListener: e, activeListenerWithCapture: t } = w()),
              (a = y()),
              i.gestures
                ? (E.$wrapperEl.on(E.touchEvents.start, $, e),
                  E.$wrapperEl.on(E.touchEvents.end, z, e))
                : "touchstart" === E.touchEvents.start &&
                  (E.$wrapperEl.on(E.touchEvents.start, a, p, e),
                  E.$wrapperEl.on(E.touchEvents.move, a, u, t),
                  E.$wrapperEl.on(E.touchEvents.end, a, m, e),
                  E.touchEvents.cancel) &&
                  E.$wrapperEl.on(E.touchEvents.cancel, a, m, e),
              E.$wrapperEl.on(
                E.touchEvents.move,
                "." + E.params.zoom.containerClass,
                h,
                t
              ));
          }
          function P() {
            var e,
              t,
              a,
              i = E.zoom;
            i.enabled &&
              ((e = E.support),
              ({ passiveListener: i, activeListenerWithCapture: t } =
                ((i.enabled = !1), w())),
              (a = y()),
              e.gestures
                ? (E.$wrapperEl.off(E.touchEvents.start, $, i),
                  E.$wrapperEl.off(E.touchEvents.end, z, i))
                : "touchstart" === E.touchEvents.start &&
                  (E.$wrapperEl.off(E.touchEvents.start, a, p, i),
                  E.$wrapperEl.off(E.touchEvents.move, a, u, t),
                  E.$wrapperEl.off(E.touchEvents.end, a, m, i),
                  E.touchEvents.cancel) &&
                  E.$wrapperEl.off(E.touchEvents.cancel, a, m, i),
              E.$wrapperEl.off(
                E.touchEvents.move,
                "." + E.params.zoom.containerClass,
                h,
                t
              ));
          }
          Object.defineProperty(E.zoom, "scale", {
            get: () => d,
            set(e) {
              var t, a;
              d !== e &&
                ((t = S.$imageEl ? S.$imageEl[0] : void 0),
                (a = S.$slideEl ? S.$slideEl[0] : void 0),
                i("zoomChange", e, t, a)),
                (d = e);
            },
          }),
            a("init", () => {
              E.params.zoom.enabled && k();
            }),
            a("destroy", () => {
              P();
            }),
            a("touchStart", (e, t) => {
              var a;
              E.zoom.enabled &&
                ((t = t), (a = E.device), S.$imageEl) &&
                0 !== S.$imageEl.length &&
                !C.isTouched &&
                (a.android && t.cancelable && t.preventDefault(),
                (C.isTouched = !0),
                (C.touchesStart.x = (
                  "touchstart" === t.type ? t.targetTouches[0] : t
                ).pageX),
                (C.touchesStart.y = (
                  "touchstart" === t.type ? t.targetTouches[0] : t
                ).pageY));
            }),
            a("touchEnd", (e, t) => {
              if (E.zoom.enabled) {
                var a = E.zoom;
                if (S.$imageEl && 0 !== S.$imageEl.length) {
                  if (!C.isTouched || !C.isMoved)
                    return void ((C.isTouched = !1), (C.isMoved = !1));
                  (C.isTouched = !1), (C.isMoved = !1);
                  let e = 300,
                    t = 300;
                  var i = l.x * e,
                    i = C.currentX + i,
                    s = l.y * t,
                    s = C.currentY + s,
                    r =
                      (0 !== l.x && (e = Math.abs((i - C.currentX) / l.x)),
                      0 !== l.y && (t = Math.abs((s - C.currentY) / l.y)),
                      Math.max(e, t)),
                    i = ((C.currentX = i), (C.currentY = s), C.width * a.scale),
                    s = C.height * a.scale;
                  (C.minX = Math.min(S.slideWidth / 2 - i / 2, 0)),
                    (C.maxX = -C.minX),
                    (C.minY = Math.min(S.slideHeight / 2 - s / 2, 0)),
                    (C.maxY = -C.minY),
                    (C.currentX = Math.max(
                      Math.min(C.currentX, C.maxX),
                      C.minX
                    )),
                    (C.currentY = Math.max(
                      Math.min(C.currentY, C.maxY),
                      C.minY
                    )),
                    S.$imageWrapEl
                      .transition(r)
                      .transform(
                        `translate3d(${C.currentX}px, ${C.currentY}px,0)`
                      );
                }
              }
            }),
            a("doubleTap", (e, t) => {
              !E.animating &&
                E.params.zoom.enabled &&
                E.zoom.enabled &&
                E.params.zoom.toggle &&
                b(t);
            }),
            a("transitionEnd", () => {
              E.zoom.enabled && E.params.zoom.enabled && f();
            }),
            a("slideChange", () => {
              E.zoom.enabled &&
                E.params.zoom.enabled &&
                E.params.cssMode &&
                f();
            }),
            Object.assign(E.zoom, {
              enable: k,
              disable: P,
              in: v,
              out: g,
              toggle: b,
            });
        },
        function (e) {
          let { swiper: c, extendParams: t, on: a, emit: p } = e,
            o =
              (t({
                lazy: {
                  checkInView: !1,
                  enabled: !1,
                  loadPrevNext: !1,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: !1,
                  scrollingElement: "",
                  elementClass: "swiper-lazy",
                  loadingClass: "swiper-lazy-loading",
                  loadedClass: "swiper-lazy-loaded",
                  preloaderClass: "swiper-lazy-preloader",
                },
              }),
              !(c.lazy = {})),
            d = !1;
          function u(e, o) {
            void 0 === o && (o = !0);
            const l = c.params.lazy;
            if (void 0 !== e && 0 !== c.slides.length) {
              const d =
                  c.virtual && c.params.virtual.enabled
                    ? c.$wrapperEl.children(
                        `.${c.params.slideClass}[data-swiper-slide-index="${e}"]`
                      )
                    : c.slides.eq(e),
                t = d.find(
                  `.${l.elementClass}:not(.${l.loadedClass}):not(.${l.loadingClass})`
                );
              !d.hasClass(l.elementClass) ||
                d.hasClass(l.loadedClass) ||
                d.hasClass(l.loadingClass) ||
                t.push(d[0]),
                0 !== t.length &&
                  t.each((e) => {
                    const t = O(e),
                      a =
                        (t.addClass(l.loadingClass), t.attr("data-background")),
                      i = t.attr("data-src"),
                      s = t.attr("data-srcset"),
                      r = t.attr("data-sizes"),
                      n = t.parent("picture");
                    c.loadImage(t[0], i || a, s, r, !1, () => {
                      var e;
                      null == c ||
                        !c ||
                        (c && !c.params) ||
                        c.destroyed ||
                        (a
                          ? (t.css("background-image", `url("${a}")`),
                            t.removeAttr("data-background"))
                          : (s &&
                              (t.attr("srcset", s),
                              t.removeAttr("data-srcset")),
                            r &&
                              (t.attr("sizes", r), t.removeAttr("data-sizes")),
                            n.length &&
                              n.children("source").each((e) => {
                                e = O(e);
                                e.attr("data-srcset") &&
                                  (e.attr("srcset", e.attr("data-srcset")),
                                  e.removeAttr("data-srcset"));
                              }),
                            i && (t.attr("src", i), t.removeAttr("data-src"))),
                        t.addClass(l.loadedClass).removeClass(l.loadingClass),
                        d.find("." + l.preloaderClass).remove(),
                        c.params.loop &&
                          o &&
                          ((e = d.attr("data-swiper-slide-index")),
                          d.hasClass(c.params.slideDuplicateClass)
                            ? u(
                                c.$wrapperEl
                                  .children(
                                    `[data-swiper-slide-index="${e}"]:not(.${c.params.slideDuplicateClass})`
                                  )
                                  .index(),
                                !1
                              )
                            : u(
                                c.$wrapperEl
                                  .children(
                                    `.${c.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                                  )
                                  .index(),
                                !1
                              )),
                        p("lazyImageReady", d[0], t[0]),
                        c.params.autoHeight && c.updateAutoHeight());
                    }),
                      p("lazyImageLoad", d[0], t[0]);
                  });
            }
          }
          function l() {
            const { $wrapperEl: t, params: a, slides: i, activeIndex: s } = c,
              r = c.virtual && a.virtual.enabled,
              e = a.lazy;
            let n = a.slidesPerView;
            function o(e) {
              if (r) {
                if (
                  t.children(`.${a.slideClass}[data-swiper-slide-index="${e}"]`)
                    .length
                )
                  return 1;
              } else if (i[e]) return 1;
            }
            function l(e) {
              return r ? O(e).attr("data-swiper-slide-index") : O(e).index();
            }
            if (
              ("auto" === n && (n = 0),
              (d = d || !0),
              c.params.watchSlidesProgress)
            )
              t.children("." + a.slideVisibleClass).each((e) => {
                u(r ? O(e).attr("data-swiper-slide-index") : O(e).index());
              });
            else if (1 < n) for (let e = s; e < s + n; e += 1) o(e) && u(e);
            else u(s);
            if (e.loadPrevNext)
              if (1 < n || (e.loadPrevNextAmount && 1 < e.loadPrevNextAmount)) {
                const t = e.loadPrevNextAmount,
                  c = Math.ceil(n),
                  a = Math.min(s + c + Math.max(t, c), i.length),
                  r = Math.max(s - Math.max(c, t), 0);
                for (let e = s + c; e < a; e += 1) o(e) && u(e);
                for (let e = r; e < s; e += 1) o(e) && u(e);
              } else {
                const c = t.children("." + a.slideNextClass),
                  i =
                    (0 < c.length && u(l(c)),
                    t.children("." + a.slidePrevClass));
                0 < i.length && u(l(i));
              }
          }
          function m() {
            var e = L();
            if (c && !c.destroyed) {
              var a = c.params.lazy.scrollingElement
                  ? O(c.params.lazy.scrollingElement)
                  : O(e),
                i = a[0] === e,
                s = i ? e.innerWidth : a[0].offsetWidth,
                r = i ? e.innerHeight : a[0].offsetHeight,
                i = c.$el.offset(),
                e = c["rtlTranslate"];
              let t = !1;
              e && (i.left -= c.$el[0].scrollLeft);
              var n = [
                [i.left, i.top],
                [i.left + c.width, i.top],
                [i.left, i.top + c.height],
                [i.left + c.width, i.top + c.height],
              ];
              for (let e = 0; e < n.length; e += 1) {
                const c = n[e];
                0 <= c[0] &&
                  c[0] <= s &&
                  0 <= c[1] &&
                  c[1] <= r &&
                  ((0 === c[0] && 0 === c[1]) || (t = !0));
              }
              e = !(
                "touchstart" !== c.touchEvents.start ||
                !c.support.passiveListener ||
                !c.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              t
                ? (l(), a.off("scroll", m, e))
                : o || ((o = !0), a.on("scroll", m, e));
            }
          }
          a("beforeInit", () => {
            c.params.lazy.enabled &&
              c.params.preloadImages &&
              (c.params.preloadImages = !1);
          }),
            a("init", () => {
              c.params.lazy.enabled && (c.params.lazy.checkInView ? m : l)();
            }),
            a("scroll", () => {
              c.params.freeMode &&
                c.params.freeMode.enabled &&
                !c.params.freeMode.sticky &&
                l();
            }),
            a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
              c.params.lazy.enabled && (c.params.lazy.checkInView ? m : l)();
            }),
            a("transitionStart", () => {
              c.params.lazy.enabled &&
                (c.params.lazy.loadOnTransitionStart ||
                  (!c.params.lazy.loadOnTransitionStart && !d)) &&
                (c.params.lazy.checkInView ? m : l)();
            }),
            a("transitionEnd", () => {
              c.params.lazy.enabled &&
                !c.params.lazy.loadOnTransitionStart &&
                (c.params.lazy.checkInView ? m : l)();
            }),
            a("slideChange", () => {
              var {
                lazy: e,
                cssMode: t,
                watchSlidesProgress: a,
                touchReleaseOnEdges: i,
                resistanceRatio: s,
              } = c.params;
              e.enabled && (t || (a && (i || 0 === s))) && l();
            }),
            a("destroy", () => {
              c.$el &&
                c.$el
                  .find("." + c.params.lazy.loadingClass)
                  .removeClass(c.params.lazy.loadingClass);
            }),
            Object.assign(c.lazy, { load: l, loadInSlide: u });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: a } = e;
          function l(e, t) {
            const a = (function () {
              let a, i, s;
              return (e, t) => {
                for (i = -1, a = e.length; 1 < a - i; )
                  e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
                return a;
              };
            })();
            let i, s;
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function (e) {
                return e
                  ? ((s = a(this.x, e)),
                    (i = s - 1),
                    ((e - this.x[i]) * (this.y[s] - this.y[i])) /
                      (this.x[s] - this.x[i]) +
                      this.y[i])
                  : 0;
              }),
              this
            );
          }
          function i() {
            o.controller.control &&
              o.controller.spline &&
              ((o.controller.spline = void 0), delete o.controller.spline);
          }
          t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
            (o.controller = { control: void 0 }),
            a("beforeInit", () => {
              o.controller.control = o.params.controller.control;
            }),
            a("update", () => {
              i();
            }),
            a("resize", () => {
              i();
            }),
            a("observerUpdate", () => {
              i();
            }),
            a("setTranslate", (e, t, a) => {
              o.controller.control && o.controller.setTranslate(t, a);
            }),
            a("setTransition", (e, t, a) => {
              o.controller.control && o.controller.setTransition(t, a);
            }),
            Object.assign(o.controller, {
              setTranslate: function (e, t) {
                var a = o.controller.control;
                let i, s;
                var r = o.constructor;
                function n(e) {
                  var t,
                    a = o.rtlTranslate ? -o.translate : o.translate;
                  "slide" === o.params.controller.by &&
                    ((t = e),
                    o.controller.spline ||
                      (o.controller.spline = o.params.loop
                        ? new l(o.slidesGrid, t.slidesGrid)
                        : new l(o.snapGrid, t.snapGrid)),
                    (s = -o.controller.spline.interpolate(-a))),
                    (s && "container" !== o.params.controller.by) ||
                      ((i =
                        (e.maxTranslate() - e.minTranslate()) /
                        (o.maxTranslate() - o.minTranslate())),
                      (s = (a - o.minTranslate()) * i + e.minTranslate())),
                    o.params.controller.inverse && (s = e.maxTranslate() - s),
                    e.updateProgress(s),
                    e.setTranslate(s, o),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                }
                if (Array.isArray(a))
                  for (let e = 0; e < a.length; e += 1)
                    a[e] !== t && a[e] instanceof r && n(a[e]);
                else a instanceof r && t !== a && n(a);
              },
              setTransition: function (t, e) {
                const a = o.constructor,
                  i = o.controller.control;
                let s;
                function r(e) {
                  e.setTransition(t, o),
                    0 !== t &&
                      (e.transitionStart(),
                      e.params.autoHeight &&
                        C(() => {
                          e.updateAutoHeight();
                        }),
                      e.$wrapperEl.transitionEnd(() => {
                        i &&
                          (e.params.loop &&
                            "slide" === o.params.controller.by &&
                            e.loopFix(),
                          e.transitionEnd());
                      }));
                }
                if (Array.isArray(i))
                  for (s = 0; s < i.length; s += 1)
                    i[s] !== e && i[s] instanceof a && r(i[s]);
                else i instanceof a && e !== i && r(i);
              },
            });
        },
        function (e) {
          let { swiper: n, extendParams: t, on: a } = e,
            o =
              (t({
                a11y: {
                  enabled: !0,
                  notificationClass: "swiper-notification",
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  firstSlideMessage: "This is the first slide",
                  lastSlideMessage: "This is the last slide",
                  paginationBulletMessage: "Go to slide {{index}}",
                  slideLabelMessage: "{{index}} / {{slidesLength}}",
                  containerMessage: null,
                  containerRoleDescriptionMessage: null,
                  itemRoleDescriptionMessage: null,
                  slideRole: "group",
                  id: null,
                },
              }),
              (n.a11y = { clicked: !1 }),
              null);
          function i(e) {
            var t = o;
            0 !== t.length && (t.html(""), t.html(e));
          }
          function s(e) {
            e.attr("tabIndex", "0");
          }
          function r(e) {
            e.attr("tabIndex", "-1");
          }
          function l(e, t) {
            e.attr("role", t);
          }
          function d(e, t) {
            e.attr("aria-roledescription", t);
          }
          function c(e, t) {
            e.attr("aria-label", t);
          }
          function p(e) {
            e.attr("aria-disabled", !0);
          }
          function u(e) {
            e.attr("aria-disabled", !1);
          }
          function m(e) {
            var t;
            (13 !== e.keyCode && 32 !== e.keyCode) ||
              ((t = n.params.a11y),
              (e = O(e.target)),
              n.navigation &&
                n.navigation.$nextEl &&
                e.is(n.navigation.$nextEl) &&
                ((n.isEnd && !n.params.loop) || n.slideNext(),
                n.isEnd ? i(t.lastSlideMessage) : i(t.nextSlideMessage)),
              n.navigation &&
                n.navigation.$prevEl &&
                e.is(n.navigation.$prevEl) &&
                ((n.isBeginning && !n.params.loop) || n.slidePrev(),
                n.isBeginning ? i(t.firstSlideMessage) : i(t.prevSlideMessage)),
              n.pagination &&
                e.is(z(n.params.pagination.bulletClass)) &&
                e[0].click());
          }
          function h() {
            return (
              n.pagination &&
              n.pagination.bullets &&
              n.pagination.bullets.length
            );
          }
          function f() {
            return h() && n.params.pagination.clickable;
          }
          const v = (e, t, a) => {
              s(e),
                "BUTTON" !== e[0].tagName &&
                  (l(e, "button"), e.on("keydown", m)),
                c(e, a),
                e.attr("aria-controls", t);
            },
            g = () => {
              n.a11y.clicked = !0;
            },
            b = () => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  n.destroyed || (n.a11y.clicked = !1);
                });
              });
            },
            w = (e) => {
              var t, a, i;
              n.a11y.clicked ||
                ((t = e.target.closest("." + n.params.slideClass)) &&
                  n.slides.includes(t) &&
                  ((a = n.slides.indexOf(t) === n.activeIndex),
                  (i =
                    n.params.watchSlidesProgress &&
                    n.visibleSlides &&
                    n.visibleSlides.includes(t)),
                  a ||
                    i ||
                    (e.sourceCapabilities &&
                      e.sourceCapabilities.firesTouchEvents) ||
                    (n.isHorizontal()
                      ? (n.el.scrollLeft = 0)
                      : (n.el.scrollTop = 0),
                    n.slideTo(n.slides.indexOf(t), 0))));
            },
            y = () => {
              const a = n.params.a11y,
                i =
                  (a.itemRoleDescriptionMessage &&
                    d(O(n.slides), a.itemRoleDescriptionMessage),
                  a.slideRole && l(O(n.slides), a.slideRole),
                  (n.params.loop
                    ? n.slides.filter(
                        (e) =>
                          !e.classList.contains(n.params.slideDuplicateClass)
                      )
                    : n.slides
                  ).length);
              a.slideLabelMessage &&
                n.slides.each((e, t) => {
                  (e = O(e)),
                    (t = n.params.loop
                      ? parseInt(e.attr("data-swiper-slide-index"), 10)
                      : t);
                  c(
                    e,
                    a.slideLabelMessage
                      .replace(/\{\{index\}\}/, t + 1)
                      .replace(/\{\{slidesLength\}\}/, i)
                  );
                });
            };
          a("beforeInit", () => {
            o = O(
              `<span class="${n.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
            );
          }),
            a("afterInit", () => {
              if (n.params.a11y.enabled) {
                var a = n.params.a11y,
                  i = (n.$el.append(o), n.$el),
                  i =
                    (a.containerRoleDescriptionMessage &&
                      d(i, a.containerRoleDescriptionMessage),
                    a.containerMessage && c(i, a.containerMessage),
                    n.$wrapperEl),
                  s =
                    a.id ||
                    i.attr("id") ||
                    "swiper-wrapper-" +
                      "x"
                        .repeat((s = void 0 === (s = 16) ? 16 : s))
                        .replace(/x/g, () =>
                          Math.round(16 * Math.random()).toString(16)
                        ),
                  r =
                    n.params.autoplay && n.params.autoplay.enabled
                      ? "off"
                      : "polite";
                let e, t;
                i.attr("id", s),
                  i.attr("aria-live", r),
                  y(),
                  n.navigation &&
                    n.navigation.$nextEl &&
                    (e = n.navigation.$nextEl),
                  n.navigation &&
                    n.navigation.$prevEl &&
                    (t = n.navigation.$prevEl),
                  e && e.length && v(e, s, a.nextSlideMessage),
                  t && t.length && v(t, s, a.prevSlideMessage),
                  f() &&
                    n.pagination.$el.on(
                      "keydown",
                      z(n.params.pagination.bulletClass),
                      m
                    ),
                  n.$el.on("focus", w, !0),
                  n.$el.on("pointerdown", g, !0),
                  n.$el.on("pointerup", b, !0);
              }
            }),
            a(
              "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
              () => {
                n.params.a11y.enabled && y();
              }
            ),
            a("fromEdge toEdge afterInit lock unlock", () => {
              var e, t;
              n.params.a11y.enabled &&
                !n.params.loop &&
                !n.params.rewind &&
                n.navigation &&
                (({ $nextEl: e, $prevEl: t } = n.navigation),
                t && 0 < t.length && (n.isBeginning ? (p(t), r) : (u(t), s))(t),
                e && 0 < e.length) &&
                (n.isEnd ? (p(e), r) : (u(e), s))(e);
            }),
            a("paginationUpdate", () => {
              if (n.params.a11y.enabled) {
                const t = n.params.a11y;
                h() &&
                  n.pagination.bullets.each((e) => {
                    e = O(e);
                    n.params.pagination.clickable &&
                      (s(e),
                      n.params.pagination.renderBullet ||
                        (l(e, "button"),
                        c(
                          e,
                          t.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            e.index() + 1
                          )
                        ))),
                      e.is("." + n.params.pagination.bulletActiveClass)
                        ? e.attr("aria-current", "true")
                        : e.removeAttr("aria-current");
                  });
              }
            }),
            a("destroy", () => {
              if (n.params.a11y.enabled) {
                let e, t;
                o && 0 < o.length && o.remove(),
                  n.navigation &&
                    n.navigation.$nextEl &&
                    (e = n.navigation.$nextEl),
                  n.navigation &&
                    n.navigation.$prevEl &&
                    (t = n.navigation.$prevEl),
                  e && e.off("keydown", m),
                  t && t.off("keydown", m),
                  f() &&
                    n.pagination.$el.off(
                      "keydown",
                      z(n.params.pagination.bulletClass),
                      m
                    ),
                  n.$el.off("focus", w, !0),
                  n.$el.off("pointerdown", g, !0),
                  n.$el.off("pointerup", b, !0);
              }
            });
        },
        function (e) {
          let { swiper: n, extendParams: t, on: a } = e,
            r =
              (t({
                history: {
                  enabled: !1,
                  root: "",
                  replaceState: !1,
                  key: "slides",
                  keepQuery: !1,
                },
              }),
              !1),
            i = {};
          const o = (e) =>
              e
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, ""),
            s = (e) => {
              var t = L(),
                e = (e ? new URL(e) : t.location).pathname
                  .slice(1)
                  .split("/")
                  .filter((e) => "" !== e),
                t = e.length;
              return { key: e[t - 2], value: e[t - 1] };
            },
            l = (a, e) => {
              var i = L();
              if (r && n.params.history.enabled) {
                var s = n.params.url ? new URL(n.params.url) : i.location,
                  e = n.slides.eq(e);
                let t = o(e.attr("data-history"));
                if (0 < n.params.history.root.length) {
                  let e = n.params.history.root;
                  "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                    (t = e + `/${a}/` + t);
                } else s.pathname.includes(a) || (t = a + "/" + t);
                n.params.history.keepQuery && (t += s.search);
                e = i.history.state;
                (e && e.value === t) ||
                  (n.params.history.replaceState
                    ? i.history.replaceState({ value: t }, null, t)
                    : i.history.pushState({ value: t }, null, t));
              }
            },
            d = (a, i, s) => {
              if (i)
                for (let e = 0, t = n.slides.length; e < t; e += 1) {
                  var r = n.slides.eq(e);
                  if (
                    o(r.attr("data-history")) === i &&
                    !r.hasClass(n.params.slideDuplicateClass)
                  ) {
                    const i = r.index();
                    n.slideTo(i, a, s);
                  }
                }
              else n.slideTo(0, a, s);
            },
            c = () => {
              (i = s(n.params.url)), d(n.params.speed, i.value, !1);
            };
          a("init", () => {
            var e;
            n.params.history.enabled &&
              ((e = L()), n.params.history) &&
              (e.history && e.history.pushState
                ? ((r = !0),
                  ((i = s(n.params.url)).key || i.value) &&
                    (d(0, i.value, n.params.runCallbacksOnInit),
                    n.params.history.replaceState ||
                      e.addEventListener("popstate", c)))
                : ((n.params.history.enabled = !1),
                  (n.params.hashNavigation.enabled = !0)));
          }),
            a("destroy", () => {
              var e;
              n.params.history.enabled &&
                ((e = L()),
                n.params.history.replaceState ||
                  e.removeEventListener("popstate", c));
            }),
            a("transitionEnd _freeModeNoMomentumRelease", () => {
              r && l(n.params.history.key, n.activeIndex);
            }),
            a("slideChange", () => {
              r && n.params.cssMode && l(n.params.history.key, n.activeIndex);
            });
        },
        function (e) {
          let { swiper: s, extendParams: t, emit: a, on: i } = e,
            r = !1;
          const n = S(),
            o = L(),
            l =
              (t({
                hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1,
                },
              }),
              () => {
                a("hashChange");
                var e = n.location.hash.replace("#", "");
                e !== s.slides.eq(s.activeIndex).attr("data-hash") &&
                  void 0 !==
                    (e = s.$wrapperEl
                      .children(`.${s.params.slideClass}[data-hash="${e}"]`)
                      .index()) &&
                  s.slideTo(e);
              }),
            d = () => {
              var e;
              r &&
                s.params.hashNavigation.enabled &&
                (s.params.hashNavigation.replaceState &&
                o.history &&
                o.history.replaceState
                  ? o.history.replaceState(
                      null,
                      null,
                      "#" + s.slides.eq(s.activeIndex).attr("data-hash") || ""
                    )
                  : ((e =
                      (e = s.slides.eq(s.activeIndex)).attr("data-hash") ||
                      e.attr("data-history")),
                    (n.location.hash = e || "")),
                a("hashSet"));
            };
          i("init", () => {
            if (
              s.params.hashNavigation.enabled &&
              !(
                !s.params.hashNavigation.enabled ||
                (s.params.history && s.params.history.enabled)
              )
            ) {
              r = !0;
              const i = n.location.hash.replace("#", "");
              if (i)
                for (let e = 0, t = s.slides.length; e < t; e += 1) {
                  var a = s.slides.eq(e);
                  if (
                    (a.attr("data-hash") || a.attr("data-history")) === i &&
                    !a.hasClass(s.params.slideDuplicateClass)
                  ) {
                    const i = a.index();
                    s.slideTo(i, 0, s.params.runCallbacksOnInit, !0);
                  }
                }
              s.params.hashNavigation.watchState && O(o).on("hashchange", l);
            }
          }),
            i("destroy", () => {
              s.params.hashNavigation.enabled &&
                s.params.hashNavigation.watchState &&
                O(o).off("hashchange", l);
            }),
            i("transitionEnd _freeModeNoMomentumRelease", () => {
              r && d();
            }),
            i("slideChange", () => {
              r && s.params.cssMode && d();
            });
        },
        function (e) {
          let a,
            { swiper: i, extendParams: t, on: s, emit: r } = e;
          function n() {
            if (i.size) {
              var t = i.slides.eq(i.activeIndex);
              let e = i.params.autoplay.delay;
              t.attr("data-swiper-autoplay") &&
                (e = t.attr("data-swiper-autoplay") || i.params.autoplay.delay),
                clearTimeout(a),
                (a = C(() => {
                  let e;
                  i.params.autoplay.reverseDirection
                    ? i.params.loop
                      ? (i.loopFix(),
                        (e = i.slidePrev(i.params.speed, !0, !0)),
                        r("autoplay"))
                      : i.isBeginning
                      ? i.params.autoplay.stopOnLastSlide
                        ? l()
                        : ((e = i.slideTo(
                            i.slides.length - 1,
                            i.params.speed,
                            !0,
                            !0
                          )),
                          r("autoplay"))
                      : ((e = i.slidePrev(i.params.speed, !0, !0)),
                        r("autoplay"))
                    : i.params.loop
                    ? (i.loopFix(),
                      (e = i.slideNext(i.params.speed, !0, !0)),
                      r("autoplay"))
                    : i.isEnd
                    ? i.params.autoplay.stopOnLastSlide
                      ? l()
                      : ((e = i.slideTo(0, i.params.speed, !0, !0)),
                        r("autoplay"))
                    : ((e = i.slideNext(i.params.speed, !0, !0)),
                      r("autoplay")),
                    ((i.params.cssMode && i.autoplay.running) || !1 === e) &&
                      n();
                }, e));
            } else (i.autoplay.running = !1), (i.autoplay.paused = !1);
          }
          function o() {
            return (
              void 0 === a &&
              !i.autoplay.running &&
              ((i.autoplay.running = !0), r("autoplayStart"), n(), !0)
            );
          }
          function l() {
            return (
              !!i.autoplay.running &&
              void 0 !== a &&
              (a && (clearTimeout(a), (a = void 0)),
              (i.autoplay.running = !1),
              r("autoplayStop"),
              !0)
            );
          }
          function d(e) {
            !i.autoplay.running ||
              i.autoplay.paused ||
              (a && clearTimeout(a),
              (i.autoplay.paused = !0),
              0 !== e && i.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    i.$wrapperEl[0].addEventListener(e, p);
                  })
                : ((i.autoplay.paused = !1), n()));
          }
          function c() {
            var e = S();
            "hidden" === e.visibilityState && i.autoplay.running && d(),
              "visible" === e.visibilityState &&
                i.autoplay.paused &&
                (n(), (i.autoplay.paused = !1));
          }
          function p(e) {
            i &&
              !i.destroyed &&
              i.$wrapperEl &&
              e.target === i.$wrapperEl[0] &&
              (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                i.$wrapperEl[0].removeEventListener(e, p);
              }),
              (i.autoplay.paused = !1),
              (i.autoplay.running ? n : l)());
          }
          function u() {
            (i.params.autoplay.disableOnInteraction
              ? l
              : (r("autoplayPause"), d))(),
              ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                i.$wrapperEl[0].removeEventListener(e, p);
              });
          }
          function m() {
            i.params.autoplay.disableOnInteraction ||
              ((i.autoplay.paused = !1), r("autoplayResume"), n());
          }
          (i.autoplay = { running: !1, paused: !1 }),
            t({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            }),
            s("init", () => {
              i.params.autoplay.enabled &&
                (o(),
                S().addEventListener("visibilitychange", c),
                i.params.autoplay.pauseOnMouseEnter) &&
                (i.$el.on("mouseenter", u), i.$el.on("mouseleave", m));
            }),
            s("beforeTransitionStart", (e, t, a) => {
              i.autoplay.running &&
                (a || !i.params.autoplay.disableOnInteraction
                  ? i.autoplay.pause(t)
                  : l());
            }),
            s("sliderFirstMove", () => {
              i.autoplay.running &&
                (i.params.autoplay.disableOnInteraction ? l : d)();
            }),
            s("touchEnd", () => {
              i.params.cssMode &&
                i.autoplay.paused &&
                !i.params.autoplay.disableOnInteraction &&
                n();
            }),
            s("destroy", () => {
              i.$el.off("mouseenter", u),
                i.$el.off("mouseleave", m),
                i.autoplay.running && l(),
                S().removeEventListener("visibilitychange", c);
            }),
            Object.assign(i.autoplay, { pause: d, run: n, start: o, stop: l });
        },
        function (e) {
          let { swiper: l, extendParams: t, on: a } = e,
            i =
              (t({
                thumbs: {
                  swiper: null,
                  multipleActiveThumbs: !0,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: "swiper-slide-thumb-active",
                  thumbsContainerClass: "swiper-thumbs",
                },
              }),
              !1),
            s = !1;
          function r() {
            var e = l.thumbs.swiper;
            if (e && !e.destroyed) {
              const a = e.clickedIndex,
                i = e.clickedSlide;
              if (
                !(
                  (i && O(i).hasClass(l.params.thumbs.slideThumbActiveClass)) ||
                  null == a
                )
              ) {
                let t;
                if (
                  ((t = e.params.loop
                    ? parseInt(
                        O(e.clickedSlide).attr("data-swiper-slide-index"),
                        10
                      )
                    : a),
                  l.params.loop)
                ) {
                  let e = l.activeIndex;
                  l.slides.eq(e).hasClass(l.params.slideDuplicateClass) &&
                    (l.loopFix(),
                    (l._clientLeft = l.$wrapperEl[0].clientLeft),
                    (e = l.activeIndex));
                  const a = l.slides
                      .eq(e)
                      .prevAll(`[data-swiper-slide-index="${t}"]`)
                      .eq(0)
                      .index(),
                    i = l.slides
                      .eq(e)
                      .nextAll(`[data-swiper-slide-index="${t}"]`)
                      .eq(0)
                      .index();
                  t = void 0 === a || (void 0 !== i && i - e < e - a) ? i : a;
                }
                l.slideTo(t);
              }
            }
          }
          function n() {
            var e = l.params["thumbs"];
            if (i) return !1;
            i = !0;
            var t = l.constructor;
            return (
              e.swiper instanceof t
                ? ((l.thumbs.swiper = e.swiper),
                  Object.assign(l.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(l.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }))
                : d(e.swiper) &&
                  ((e = Object.assign({}, e.swiper)),
                  Object.assign(e, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  (l.thumbs.swiper = new t(e)),
                  (s = !0)),
              l.thumbs.swiper.$el.addClass(
                l.params.thumbs.thumbsContainerClass
              ),
              l.thumbs.swiper.on("tap", r),
              !0
            );
          }
          function o(i) {
            var s = l.thumbs.swiper;
            if (s && !s.destroyed) {
              const o =
                "auto" === s.params.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : s.params.slidesPerView;
              let t = 1;
              var a = l.params.thumbs.slideThumbActiveClass;
              if (
                (1 < l.params.slidesPerView &&
                  !l.params.centeredSlides &&
                  (t = l.params.slidesPerView),
                l.params.thumbs.multipleActiveThumbs || (t = 1),
                (t = Math.floor(t)),
                s.slides.removeClass(a),
                s.params.loop || (s.params.virtual && s.params.virtual.enabled))
              )
                for (let e = 0; e < t; e += 1)
                  s.$wrapperEl
                    .children(`[data-swiper-slide-index="${l.realIndex + e}"]`)
                    .addClass(a);
              else
                for (let e = 0; e < t; e += 1)
                  s.slides.eq(l.realIndex + e).addClass(a);
              var r = l.params.thumbs.autoScrollOffset,
                n = r && !s.params.loop;
              if (l.realIndex !== s.realIndex || n) {
                let e,
                  t,
                  a = s.activeIndex;
                if (s.params.loop) {
                  s.slides.eq(a).hasClass(s.params.slideDuplicateClass) &&
                    (s.loopFix(),
                    (s._clientLeft = s.$wrapperEl[0].clientLeft),
                    (a = s.activeIndex));
                  const i = s.slides
                      .eq(a)
                      .prevAll(`[data-swiper-slide-index="${l.realIndex}"]`)
                      .eq(0)
                      .index(),
                    o = s.slides
                      .eq(a)
                      .nextAll(`[data-swiper-slide-index="${l.realIndex}"]`)
                      .eq(0)
                      .index();
                  (e =
                    void 0 === i
                      ? o
                      : void 0 === o
                      ? i
                      : o - a == a - i
                      ? 1 < s.params.slidesPerGroup
                        ? o
                        : a
                      : o - a < a - i
                      ? o
                      : i),
                    (t = l.activeIndex > l.previousIndex ? "next" : "prev");
                } else
                  (e = l.realIndex),
                    (t = e > l.previousIndex ? "next" : "prev");
                n && (e += "next" === t ? r : -1 * r),
                  s.visibleSlidesIndexes &&
                    s.visibleSlidesIndexes.indexOf(e) < 0 &&
                    (s.params.centeredSlides
                      ? (e =
                          e > a
                            ? e - Math.floor(o / 2) + 1
                            : e + Math.floor(o / 2) - 1)
                      : e > a && s.params.slidesPerGroup,
                    s.slideTo(e, i ? 0 : void 0));
              }
            }
          }
          (l.thumbs = { swiper: null }),
            a("beforeInit", () => {
              var e = l.params["thumbs"];
              e && e.swiper && (n(), o(!0));
            }),
            a("slideChange update resize observerUpdate", () => {
              o();
            }),
            a("setTransition", (e, t) => {
              var a = l.thumbs.swiper;
              a && !a.destroyed && a.setTransition(t);
            }),
            a("beforeDestroy", () => {
              var e = l.thumbs.swiper;
              e && !e.destroyed && s && e.destroy();
            }),
            Object.assign(l.thumbs, { init: n, update: o });
        },
        function (e) {
          let { swiper: u, extendParams: t, emit: m, once: h } = e;
          t({
            freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: 0.02,
            },
          }),
            Object.assign(u, {
              freeMode: {
                onTouchStart: function () {
                  var e = u.getTranslate();
                  u.setTranslate(e),
                    u.setTransition(0),
                    (u.touchEventsData.velocities.length = 0),
                    u.freeMode.onTouchEnd({
                      currentPos: u.rtl ? u.translate : -u.translate,
                    });
                },
                onTouchMove: function () {
                  var { touchEventsData: e, touches: t } = u;
                  0 === e.velocities.length &&
                    e.velocities.push({
                      position: t[u.isHorizontal() ? "startX" : "startY"],
                      time: e.touchStartTime,
                    }),
                    e.velocities.push({
                      position: t[u.isHorizontal() ? "currentX" : "currentY"],
                      time: g(),
                    });
                },
                onTouchEnd: function (r) {
                  let n = r["currentPos"];
                  const {
                      params: o,
                      $wrapperEl: l,
                      rtlTranslate: d,
                      snapGrid: c,
                      touchEventsData: p,
                    } = u,
                    e = g() - p.touchStartTime;
                  if (n < -u.minTranslate()) u.slideTo(u.activeIndex);
                  else if (n > -u.maxTranslate())
                    u.slides.length < c.length
                      ? u.slideTo(c.length - 1)
                      : u.slideTo(u.slides.length - 1);
                  else {
                    if (o.freeMode.momentum) {
                      if (1 < p.velocities.length) {
                        const r = p.velocities.pop(),
                          n = p.velocities.pop(),
                          m = r.position - n.position,
                          h = r.time - n.time;
                        (u.velocity = m / h),
                          (u.velocity /= 2),
                          Math.abs(u.velocity) < o.freeMode.minimumVelocity &&
                            (u.velocity = 0),
                          (150 < h || 300 < g() - r.time) && (u.velocity = 0);
                      } else u.velocity = 0;
                      (u.velocity *= o.freeMode.momentumVelocityRatio),
                        (p.velocities.length = 0);
                      let e = 1e3 * o.freeMode.momentumRatio;
                      const n = u.velocity * e;
                      let a = u.translate + n;
                      d && (a = -a);
                      let t,
                        i = !1;
                      r =
                        20 *
                        Math.abs(u.velocity) *
                        o.freeMode.momentumBounceRatio;
                      let s;
                      if (a < u.maxTranslate())
                        o.freeMode.momentumBounce
                          ? (a + u.maxTranslate() < -r &&
                              (a = u.maxTranslate() - r),
                            (t = u.maxTranslate()),
                            (i = !0),
                            (p.allowMomentumBounce = !0))
                          : (a = u.maxTranslate()),
                          o.loop && o.centeredSlides && (s = !0);
                      else if (a > u.minTranslate())
                        o.freeMode.momentumBounce
                          ? (a - u.minTranslate() > r &&
                              (a = u.minTranslate() + r),
                            (t = u.minTranslate()),
                            (i = !0),
                            (p.allowMomentumBounce = !0))
                          : (a = u.minTranslate()),
                          o.loop && o.centeredSlides && (s = !0);
                      else if (o.freeMode.sticky) {
                        let t;
                        for (let e = 0; e < c.length; e += 1)
                          if (c[e] > -a) {
                            t = e;
                            break;
                          }
                        a = -(a =
                          Math.abs(c[t] - a) < Math.abs(c[t - 1] - a) ||
                          "next" === u.swipeDirection
                            ? c[t]
                            : c[t - 1]);
                      }
                      if (
                        (s &&
                          h("transitionEnd", () => {
                            u.loopFix();
                          }),
                        0 !== u.velocity)
                      ) {
                        if (
                          ((e = d
                            ? Math.abs((-a - u.translate) / u.velocity)
                            : Math.abs((a - u.translate) / u.velocity)),
                          o.freeMode.sticky)
                        ) {
                          const n = Math.abs((d ? -a : a) - u.translate),
                            m = u.slidesSizesGrid[u.activeIndex];
                          e =
                            n < m
                              ? o.speed
                              : n < 2 * m
                              ? 1.5 * o.speed
                              : 2.5 * o.speed;
                        }
                      } else if (o.freeMode.sticky)
                        return void u.slideToClosest();
                      o.freeMode.momentumBounce && i
                        ? (u.updateProgress(t),
                          u.setTransition(e),
                          u.setTranslate(a),
                          u.transitionStart(!0, u.swipeDirection),
                          (u.animating = !0),
                          l.transitionEnd(() => {
                            u &&
                              !u.destroyed &&
                              p.allowMomentumBounce &&
                              (m("momentumBounce"),
                              u.setTransition(o.speed),
                              setTimeout(() => {
                                u.setTranslate(t),
                                  l.transitionEnd(() => {
                                    u && !u.destroyed && u.transitionEnd();
                                  });
                              }, 0));
                          }))
                        : u.velocity
                        ? (m("_freeModeNoMomentumRelease"),
                          u.updateProgress(a),
                          u.setTransition(e),
                          u.setTranslate(a),
                          u.transitionStart(!0, u.swipeDirection),
                          u.animating ||
                            ((u.animating = !0),
                            l.transitionEnd(() => {
                              u && !u.destroyed && u.transitionEnd();
                            })))
                        : u.updateProgress(a),
                        u.updateActiveIndex(),
                        u.updateSlidesClasses();
                    } else {
                      if (o.freeMode.sticky) return void u.slideToClosest();
                      o.freeMode && m("_freeModeNoMomentumRelease");
                    }
                    (!o.freeMode.momentum || e >= o.longSwipesMs) &&
                      (u.updateProgress(),
                      u.updateActiveIndex(),
                      u.updateSlidesClasses());
                  }
                },
              },
            });
        },
        function (e) {
          let p,
            u,
            m,
            { swiper: h, extendParams: t } = e;
          t({ grid: { rows: 1, fill: "column" } }),
            (h.grid = {
              initSlides: (e) => {
                var t = h.params["slidesPerView"],
                  { rows: a, fill: i } = h.params.grid;
                (u = p / a),
                  (m = Math.floor(e / a)),
                  (p = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a),
                  "auto" !== t && "row" === i && (p = Math.max(p, t * a));
              },
              updateSlide: (e, t, a, i) => {
                var { slidesPerGroup: s, spaceBetween: r } = h.params,
                  { rows: n, fill: o } = h.params.grid;
                let l, d, c;
                if ("row" === o && 1 < s) {
                  const u = Math.floor(e / (s * n)),
                    m = e - n * s * u,
                    h =
                      0 === u ? s : Math.min(Math.ceil((a - u * n * s) / n), s);
                  (c = Math.floor(m / h)),
                    (l = (d = m - c * h + u * s) + (c * p) / n),
                    t.css({ "-webkit-order": l, order: l });
                } else
                  "column" === o
                    ? ((d = Math.floor(e / n)),
                      (c = e - d * n),
                      (d > m || (d === m && c === n - 1)) &&
                        (c += 1) >= n &&
                        ((c = 0), (d += 1)))
                    : ((c = Math.floor(e / u)), (d = e - c * u));
                t.css(i("margin-top"), 0 !== c ? r && r + "px" : "");
              },
              updateWrapperSize: (a, i, e) => {
                var {
                    spaceBetween: t,
                    centeredSlides: s,
                    roundLengths: r,
                  } = h.params,
                  n = h.params.grid["rows"];
                if (
                  ((h.virtualSize = (a + t) * p),
                  (h.virtualSize = Math.ceil(h.virtualSize / n) - t),
                  h.$wrapperEl.css({ [e("width")]: h.virtualSize + t + "px" }),
                  s)
                ) {
                  i.splice(0, i.length);
                  const a = [];
                  for (let t = 0; t < i.length; t += 1) {
                    let e = i[t];
                    r && (e = Math.floor(e)),
                      i[t] < h.virtualSize + i[0] && a.push(e);
                  }
                  i.push(...a);
                }
              },
            });
        },
        function (e) {
          e = e.swiper;
          Object.assign(e, {
            appendSlide: function (t) {
              var { $wrapperEl: a, params: e } = this;
              if (
                (e.loop && this.loopDestroy(),
                "object" == typeof t && "length" in t)
              )
                for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
              else a.append(t);
              e.loop && this.loopCreate(), e.observer || this.update();
            }.bind(e),
            prependSlide: function (t) {
              var e = this,
                { params: a, $wrapperEl: i, activeIndex: s } = e;
              a.loop && e.loopDestroy();
              let r = s + 1;
              if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && i.prepend(t[e]);
                r = s + t.length;
              } else i.prepend(t);
              a.loop && e.loopCreate(),
                a.observer || e.update(),
                e.slideTo(r, 0, !1);
            }.bind(e),
            addSlide: function (t, a) {
              var i = this,
                { $wrapperEl: s, params: r, activeIndex: n } = i;
              let o = n;
              if (
                (r.loop &&
                  ((o -= i.loopedSlides),
                  i.loopDestroy(),
                  (i.slides = s.children("." + r.slideClass))),
                (n = i.slides.length),
                t <= 0)
              )
                i.prependSlide(a);
              else if (n <= t) i.appendSlide(a);
              else {
                let e = o > t ? o + 1 : o;
                var l = [];
                for (let e = n - 1; e >= t; --e) {
                  const t = i.slides.eq(e);
                  t.remove(), l.unshift(t);
                }
                if ("object" == typeof a && "length" in a) {
                  for (let e = 0; e < a.length; e += 1) a[e] && s.append(a[e]);
                  e = o > t ? o + a.length : o;
                } else s.append(a);
                for (let e = 0; e < l.length; e += 1) s.append(l[e]);
                r.loop && i.loopCreate(),
                  r.observer || i.update(),
                  r.loop
                    ? i.slideTo(e + i.loopedSlides, 0, !1)
                    : i.slideTo(e, 0, !1);
              }
            }.bind(e),
            removeSlide: function (t) {
              var a = this,
                { params: e, $wrapperEl: i, activeIndex: s } = a;
              let r = s;
              e.loop &&
                ((r -= a.loopedSlides),
                a.loopDestroy(),
                (a.slides = i.children("." + e.slideClass)));
              let n,
                o = r;
              if ("object" == typeof t && "length" in t)
                for (let e = 0; e < t.length; e += 1)
                  (n = t[e]),
                    a.slides[n] && a.slides.eq(n).remove(),
                    n < o && --o;
              else
                (n = t), a.slides[n] && a.slides.eq(n).remove(), n < o && --o;
              (o = Math.max(o, 0)),
                e.loop && a.loopCreate(),
                e.observer || a.update(),
                e.loop
                  ? a.slideTo(o + a.loopedSlides, 0, !1)
                  : a.slideTo(o, 0, !1);
            }.bind(e),
            removeAllSlides: function () {
              var t = [];
              for (let e = 0; e < this.slides.length; e += 1) t.push(e);
              this.removeSlide(t);
            }.bind(e),
          });
        },
        function (e) {
          let { swiper: n, extendParams: t, on: a } = e;
          t({ fadeEffect: { crossFade: !1, transformEl: null } }),
            k({
              effect: "fade",
              swiper: n,
              on: a,
              setTranslate: () => {
                const i = n["slides"],
                  s = n.params.fadeEffect;
                for (let a = 0; a < i.length; a += 1) {
                  const i = n.slides.eq(a);
                  let e = -i[0].swiperSlideOffset,
                    t = (n.params.virtualTranslate || (e -= n.translate), 0);
                  n.isHorizontal() || ((t = e), (e = 0));
                  var r = n.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(i[0].progress), 0)
                    : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                  P(s, i)
                    .css({ opacity: r })
                    .transform(`translate3d(${e}px, ${t}px, 0px)`);
                }
              },
              setTransition: (e) => {
                var t = n.params.fadeEffect["transformEl"];
                (t ? n.slides.find(t) : n.slides).transition(e),
                  A({ swiper: n, duration: e, transformEl: t, allSlides: !0 });
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !n.params.cssMode,
              }),
            });
        },
        function (e) {
          let { swiper: f, extendParams: t, on: a } = e;
          t({
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          });
          const v = (e, t, a) => {
            let i = a
                ? e.find(".swiper-slide-shadow-left")
                : e.find(".swiper-slide-shadow-top"),
              s = a
                ? e.find(".swiper-slide-shadow-right")
                : e.find(".swiper-slide-shadow-bottom");
            0 === i.length &&
              ((i = O(
                `<div class="swiper-slide-shadow-${a ? "left" : "top"}"></div>`
              )),
              e.append(i)),
              0 === s.length &&
                ((s = O(
                  `<div class="swiper-slide-shadow-${
                    a ? "right" : "bottom"
                  }"></div>`
                )),
                e.append(s)),
              i.length && (i[0].style.opacity = Math.max(-t, 0)),
              s.length && (s[0].style.opacity = Math.max(t, 0));
          };
          k({
            effect: "cube",
            swiper: f,
            on: a,
            setTranslate: () => {
              const {
                  $el: e,
                  $wrapperEl: t,
                  slides: o,
                  width: a,
                  height: i,
                  rtlTranslate: l,
                  size: d,
                  browser: s,
                } = f,
                c = f.params.cubeEffect,
                p = f.isHorizontal(),
                u = f.virtual && f.params.virtual.enabled;
              let r,
                m = 0;
              c.shadow &&
                (p
                  ? (0 === (r = t.find(".swiper-cube-shadow")).length &&
                      ((r = O('<div class="swiper-cube-shadow"></div>')),
                      t.append(r)),
                    r.css({ height: a + "px" }))
                  : 0 === (r = e.find(".swiper-cube-shadow")).length &&
                    ((r = O('<div class="swiper-cube-shadow"></div>')),
                    e.append(r)));
              for (let n = 0; n < o.length; n += 1) {
                const f = o.eq(n);
                let e = n,
                  t =
                    90 *
                    (e = u
                      ? parseInt(f.attr("data-swiper-slide-index"), 10)
                      : e),
                  a = Math.floor(t / 360);
                l && ((t = -t), (a = Math.floor(-t / 360)));
                const O = Math.max(Math.min(f[0].progress, 1), -1);
                let i = 0,
                  s = 0,
                  r = 0;
                e % 4 == 0
                  ? ((i = 4 * -a * d), (r = 0))
                  : (e - 1) % 4 == 0
                  ? ((i = 0), (r = 4 * -a * d))
                  : (e - 2) % 4 == 0
                  ? ((i = d + 4 * a * d), (r = d))
                  : (e - 3) % 4 == 0 && ((i = -d), (r = 3 * d + 4 * d * a)),
                  l && (i = -i),
                  p || ((s = i), (i = 0));
                var h = `rotateX(${p ? 0 : -t}deg) rotateY(${
                  p ? t : 0
                }deg) translate3d(${i}px, ${s}px, ${r}px)`;
                O <= 1 &&
                  -1 < O &&
                  ((m = 90 * e + 90 * O), l) &&
                  (m = 90 * -e - 90 * O),
                  f.transform(h),
                  c.slideShadows && v(f, O, p);
              }
              if (
                (t.css({
                  "-webkit-transform-origin": `50% 50% -${d / 2}px`,
                  "transform-origin": `50% 50% -${d / 2}px`,
                }),
                c.shadow)
              )
                if (p)
                  r.transform(
                    `translate3d(0px, ${a / 2 + c.shadowOffset}px, ${
                      -a / 2
                    }px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`
                  );
                else {
                  const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                    f =
                      1.5 -
                      (Math.sin((2 * e * Math.PI) / 360) / 2 +
                        Math.cos((2 * e * Math.PI) / 360) / 2),
                    t = c.shadowScale,
                    o = c.shadowScale / f,
                    v = c.shadowOffset;
                  r.transform(
                    `scale3d(${t}, 1, ${o}) translate3d(0px, ${i / 2 + v}px, ${
                      -i / 2 / o
                    }px) rotateX(-90deg)`
                  );
                }
              var n = s.isSafari || s.isWebView ? -d / 2 : 0;
              t.transform(
                `translate3d(0px,0,${n}px) rotateX(${
                  f.isHorizontal() ? 0 : m
                }deg) rotateY(${f.isHorizontal() ? -m : 0}deg)`
              ),
                t[0].style.setProperty("--swiper-cube-translate-z", n + "px");
            },
            setTransition: (e) => {
              var { $el: t, slides: a } = f;
              a
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                f.params.cubeEffect.shadow &&
                  !f.isHorizontal() &&
                  t.find(".swiper-cube-shadow").transition(e);
            },
            recreateShadows: () => {
              const a = f.isHorizontal();
              f.slides.each((e) => {
                var t = Math.max(Math.min(e.progress, 1), -1);
                v(O(e), t, a);
              });
            },
            getEffectParams: () => f.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            }),
          });
        },
        function (e) {
          let { swiper: p, extendParams: t, on: a } = e;
          t({
            flipEffect: {
              slideShadows: !0,
              limitRotation: !0,
              transformEl: null,
            },
          });
          const u = (e, t, a) => {
            let i = p.isHorizontal()
                ? e.find(".swiper-slide-shadow-left")
                : e.find(".swiper-slide-shadow-top"),
              s = p.isHorizontal()
                ? e.find(".swiper-slide-shadow-right")
                : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = D(a, e, p.isHorizontal() ? "left" : "top")),
              0 === s.length &&
                (s = D(a, e, p.isHorizontal() ? "right" : "bottom")),
              i.length && (i[0].style.opacity = Math.max(-t, 0)),
              s.length && (s[0].style.opacity = Math.max(t, 0));
          };
          k({
            effect: "flip",
            swiper: p,
            on: a,
            setTranslate: () => {
              var { slides: n, rtlTranslate: o } = p,
                l = p.params.flipEffect;
              for (let r = 0; r < n.length; r += 1) {
                var d = n.eq(r);
                let e = d[0].progress;
                p.params.flipEffect.limitRotation &&
                  (e = Math.max(Math.min(d[0].progress, 1), -1));
                var c = d[0].swiperSlideOffset;
                let t = -180 * e,
                  a = 0,
                  i = p.params.cssMode ? -c - p.translate : -c,
                  s = 0;
                p.isHorizontal()
                  ? o && (t = -t)
                  : ((s = i), (i = 0), (a = -t), (t = 0)),
                  (d[0].style.zIndex = -Math.abs(Math.round(e)) + n.length),
                  l.slideShadows && u(d, e, l);
                c = `translate3d(${i}px, ${s}px, 0px) rotateX(${a}deg) rotateY(${t}deg)`;
                P(l, d).transform(c);
              }
            },
            setTransition: (e) => {
              var t = p.params.flipEffect["transformEl"];
              (t ? p.slides.find(t) : p.slides)
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                A({ swiper: p, duration: e, transformEl: t });
            },
            recreateShadows: () => {
              const i = p.params.flipEffect;
              p.slides.each((e) => {
                var t = O(e);
                let a = t[0].progress;
                p.params.flipEffect.limitRotation &&
                  (a = Math.max(Math.min(e.progress, 1), -1)),
                  u(t, a, i);
              });
            },
            getEffectParams: () => p.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !p.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: w, extendParams: t, on: a } = e;
          t({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
              transformEl: null,
            },
          }),
            k({
              effect: "coverflow",
              swiper: w,
              on: a,
              setTranslate: () => {
                const {
                    width: e,
                    height: l,
                    slides: d,
                    slidesSizesGrid: c,
                  } = w,
                  p = w.params.coverflowEffect,
                  u = w.isHorizontal(),
                  m = w.translate,
                  h = u ? e / 2 - m : l / 2 - m,
                  f = u ? p.rotate : -p.rotate,
                  v = p.depth;
                for (let o = 0, e = d.length; o < e; o += 1) {
                  const w = d.eq(o),
                    l = c[o],
                    m = (h - w[0].swiperSlideOffset - l / 2) / l,
                    b =
                      "function" == typeof p.modifier
                        ? p.modifier(m)
                        : m * p.modifier;
                  let e = u ? f * b : 0,
                    t = u ? 0 : f * b,
                    a = -v * Math.abs(b),
                    i = p.stretch,
                    s =
                      ("string" == typeof i &&
                        -1 !== i.indexOf("%") &&
                        (i = (parseFloat(p.stretch) / 100) * l),
                      u ? 0 : i * b),
                    r = u ? i * b : 0,
                    n = 1 - (1 - p.scale) * Math.abs(b);
                  Math.abs(r) < 0.001 && (r = 0),
                    Math.abs(s) < 0.001 && (s = 0),
                    Math.abs(a) < 0.001 && (a = 0),
                    Math.abs(e) < 0.001 && (e = 0),
                    Math.abs(t) < 0.001 && (t = 0),
                    Math.abs(n) < 0.001 && (n = 0);
                  var g = `translate3d(${r}px,${s}px,${a}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${n})`;
                  if (
                    (P(p, w).transform(g),
                    (w[0].style.zIndex = 1 - Math.abs(Math.round(b))),
                    p.slideShadows)
                  ) {
                    let e = u
                        ? w.find(".swiper-slide-shadow-left")
                        : w.find(".swiper-slide-shadow-top"),
                      t = u
                        ? w.find(".swiper-slide-shadow-right")
                        : w.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = D(p, w, u ? "left" : "top")),
                      0 === t.length && (t = D(p, w, u ? "right" : "bottom")),
                      e.length && (e[0].style.opacity = 0 < b ? b : 0),
                      t.length && (t[0].style.opacity = 0 < -b ? -b : 0);
                  }
                }
              },
              setTransition: (e) => {
                var t = w.params.coverflowEffect["transformEl"];
                (t ? w.slides.find(t) : w.slides)
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e);
              },
              perspective: () => !0,
              overwriteParams: () => ({ watchSlidesProgress: !0 }),
            });
        },
        function (e) {
          let { swiper: b, extendParams: t, on: a } = e;
          t({
            creativeEffect: {
              transformEl: null,
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
              next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
            },
          });
          k({
            effect: "creative",
            swiper: b,
            on: a,
            setTranslate: () => {
              const { slides: s, $wrapperEl: e, slidesSizesGrid: r } = b,
                n = b.params.creativeEffect,
                o = n["progressMultiplier"],
                l = b.params.centeredSlides;
              if (l) {
                const s = r[0] / 2 - b.params.slidesOffsetBefore || 0;
                e.transform(`translateX(calc(50% - ${s}px))`);
              }
              for (let i = 0; i < s.length; i += 1) {
                const r = s.eq(i),
                  m = r[0].progress,
                  h = Math.min(
                    Math.max(r[0].progress, -n.limitProgress),
                    n.limitProgress
                  );
                let e = h;
                l ||
                  (e = Math.min(
                    Math.max(r[0].originalProgress, -n.limitProgress),
                    n.limitProgress
                  ));
                const f = r[0].swiperSlideOffset,
                  v = [b.params.cssMode ? -f - b.translate : -f, 0, 0],
                  g = [0, 0, 0];
                let t = !1,
                  a =
                    (b.isHorizontal() || ((v[1] = v[0]), (v[0] = 0)),
                    {
                      translate: [0, 0, 0],
                      rotate: [0, 0, 0],
                      scale: 1,
                      opacity: 1,
                    });
                h < 0
                  ? ((a = n.next), (t = !0))
                  : 0 < h && ((a = n.prev), (t = !0)),
                  v.forEach((e, t) => {
                    v[t] = `calc(${e}px + (${
                      ((e = a.translate[t]),
                      "string" == typeof e ? e : e + "px")
                    } * ${Math.abs(h * o)}))`;
                  }),
                  g.forEach((e, t) => {
                    g[t] = a.rotate[t] * Math.abs(h * o);
                  }),
                  (r[0].style.zIndex = -Math.abs(Math.round(m)) + s.length);
                var d = v.join(", "),
                  c = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
                  p =
                    e < 0
                      ? `scale(${1 + (1 - a.scale) * e * o})`
                      : `scale(${1 - (1 - a.scale) * e * o})`,
                  u =
                    e < 0
                      ? 1 + (1 - a.opacity) * e * o
                      : 1 - (1 - a.opacity) * e * o,
                  d = `translate3d(${d}) ${c} ` + p;
                if ((t && a.shadow) || !t) {
                  let e = r.children(".swiper-slide-shadow");
                  if ((e = 0 === e.length && a.shadow ? D(n, r) : e).length) {
                    const b = n.shadowPerProgress
                      ? h * (1 / n.limitProgress)
                      : h;
                    e[0].style.opacity = Math.min(Math.max(Math.abs(b), 0), 1);
                  }
                }
                c = P(n, r);
                c.transform(d).css({ opacity: u }),
                  a.origin && c.css("transform-origin", a.origin);
              }
            },
            setTransition: (e) => {
              var t = b.params.creativeEffect["transformEl"];
              (t ? b.slides.find(t) : b.slides)
                .transition(e)
                .find(".swiper-slide-shadow")
                .transition(e),
                A({ swiper: b, duration: e, transformEl: t, allSlides: !0 });
            },
            perspective: () => b.params.creativeEffect.perspective,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !b.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: w, extendParams: t, on: a } = e;
          t({
            cardsEffect: {
              slideShadows: !0,
              transformEl: null,
              rotate: !0,
              perSlideRotate: 2,
              perSlideOffset: 8,
            },
          }),
            k({
              effect: "cards",
              swiper: w,
              on: a,
              setTranslate: () => {
                const { slides: o, activeIndex: l } = w,
                  d = w.params.cardsEffect,
                  { startTranslate: c, isTouched: p } = w.touchEventsData,
                  u = w.translate;
                for (let n = 0; n < o.length; n += 1) {
                  var m = o.eq(n),
                    h = m[0].progress,
                    f = Math.min(Math.max(h, -4), 4);
                  let e = m[0].swiperSlideOffset,
                    t =
                      (w.params.centeredSlides &&
                        !w.params.cssMode &&
                        w.$wrapperEl.transform(
                          `translateX(${w.minTranslate()}px)`
                        ),
                      w.params.centeredSlides &&
                        w.params.cssMode &&
                        (e -= o[0].swiperSlideOffset),
                      w.params.cssMode ? -e - w.translate : -e),
                    a = 0;
                  var v = -100 * Math.abs(f);
                  let i = 1,
                    s = -d.perSlideRotate * f,
                    r = d.perSlideOffset - 0.75 * Math.abs(f);
                  var g =
                      w.virtual && w.params.virtual.enabled
                        ? w.virtual.from + n
                        : n,
                    b =
                      (g === l || g === l - 1) &&
                      0 < f &&
                      f < 1 &&
                      (p || w.params.cssMode) &&
                      u < c,
                    g =
                      (g === l || g === l + 1) &&
                      f < 0 &&
                      -1 < f &&
                      (p || w.params.cssMode) &&
                      c < u;
                  if (b || g) {
                    const o = (1 - Math.abs((Math.abs(f) - 0.5) / 0.5)) ** 0.5;
                    (s += -28 * f * o),
                      (i += -0.5 * o),
                      (r += 96 * o),
                      (a = -25 * o * Math.abs(f) + "%");
                  }
                  if (
                    ((t =
                      f < 0
                        ? `calc(${t}px + (${r * Math.abs(f)}%))`
                        : 0 < f
                        ? `calc(${t}px + (-${r * Math.abs(f)}%))`
                        : t + "px"),
                    !w.isHorizontal())
                  ) {
                    const o = a;
                    (a = t), (t = o);
                  }
                  (b = f < 0 ? "" + (1 + (1 - i) * f) : "" + (1 - (1 - i) * f)),
                    (g = `
        translate3d(${t}, ${a}, ${v}px)
        rotateZ(${d.rotate ? s : 0}deg)
        scale(${b})
      `);
                  if (d.slideShadows) {
                    let e = m.find(".swiper-slide-shadow");
                    (e = 0 === e.length ? D(d, m) : e).length &&
                      (e[0].style.opacity = Math.min(
                        Math.max((Math.abs(f) - 0.5) / 0.5, 0),
                        1
                      ));
                  }
                  (m[0].style.zIndex = -Math.abs(Math.round(h)) + o.length),
                    P(d, m).transform(g);
                }
              },
              setTransition: (e) => {
                var t = w.params.cardsEffect["transformEl"];
                (t ? w.slides.find(t) : w.slides)
                  .transition(e)
                  .find(".swiper-slide-shadow")
                  .transition(e),
                  A({ swiper: w, duration: e, transformEl: t });
              },
              perspective: () => !0,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !w.params.cssMode,
              }),
            });
        },
      ]),
      T
    );
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var t,
      r,
      e = document.querySelector("link[rel=next]"),
      a = document.getElementById("pagination-wrap");
    function i(a, i) {
      var s, r;
      return function () {
        var e = this,
          t = arguments;
        r
          ? (clearTimeout(s),
            (s = setTimeout(function () {
              Date.now() - r >= i && (a.apply(e, t), (r = Date.now()));
            }, i - (Date.now() - r))))
          : (a.apply(e, t), (r = Date.now()));
      };
    }
    (r = document.getElementById("load-more")),
      null !== e && ((btnText = r.innerText), (t = e.getAttribute("href"))),
      void 0 === t
        ? null !== a && (r.style.display = "none")
        : r.addEventListener("click", function (e) {
            e.preventDefault(),
              r.classList.add("loading"),
              (r.disabled = !0),
              parseInt(nextPage) <= parseInt(totalPages) &&
                ((e = t.split(/page/)[0] + "page/" + nextPage + "/"),
                fetch(e)
                  .then(function (e) {
                    if (e.ok) return e.text();
                  })
                  .then(function (e) {
                    for (
                      var t = document.createElement("div"),
                        a =
                          ((t.innerHTML = e),
                          document.querySelector(".js-post-list-wrap")),
                        i = t.querySelectorAll(".js-post-card"),
                        s = 0;
                      s < i.length;
                      s++
                    )
                      a.appendChild(i.item(s)),
                        "undefined" != typeof msnry &&
                          (msnry.appended(i.item(s)), msnry.layout());
                    nextPage++,
                      r.classList.remove("loading"),
                      (r.disabled = !1),
                      nextPage > totalPages && (r.style.display = "none");
                  }));
          });
    var s = 1,
      e = document.body.getAttribute("data-nav"),
      n = document.querySelector(".site-header"),
      a =
        (null !== n &&
          ("sticky" === e
            ? window.addEventListener(
                "scroll",
                i(function () {
                  32 < window.pageYOffset
                    ? n.classList.add("small")
                    : n.classList.remove("small");
                }, 50)
              )
            : "sticky-hide" === e &&
              window.addEventListener(
                "scroll",
                i(function () {
                  var e = window.pageYOffset;
                  32 < e
                    ? n.classList.add("small")
                    : n.classList.remove("small"),
                    (s =
                      (e < s
                        ? (n.classList.add("show"), n.classList.remove("hide"))
                        : (n.classList.remove("show"), n.classList.add("hide")),
                      e)),
                    0 == e &&
                      (n.classList.remove("hide"),
                      n.classList.remove("show"),
                      n.classList.remove("sticky"));
                }, 50)
              )),
        document.querySelectorAll(".js-toggle-dark-light")),
      o = document.documentElement,
      e =
        (a &&
          a.forEach(function (e) {
            e.addEventListener("click", function () {
              var e = o.getAttribute("data-theme");
              null !== e && "dark" === e
                ? (o.setAttribute("data-theme", "light"),
                  localStorage.setItem("selected-theme", "light"))
                : (o.setAttribute("data-theme", "dark"),
                  localStorage.setItem("selected-theme", "dark"));
            });
          }),
        document.querySelector(".js-scroll-top")),
      a =
        (e &&
          e.addEventListener("click", function () {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }),
        Lightense(".kg-image-card img, .kg-gallery-image img", {
          time: 200,
          padding: 80,
          zIndex: 400000001,
        }),
        document.querySelectorAll("table"));
    0 < a.length &&
      a.forEach(function (e) {
        var t = document.createElement("div");
        t.classList.add("table-responsive"),
          e.parentNode.insertBefore(t, e),
          t.appendChild(e);
      }),
      reframe(
        'iframe:not([src*="soundcloud"]):not([src*="spotify"]):not(.no-resize)'
      );
    const l = document.getElementById("sort_alpha");
    if (l) {
      const c = document.querySelectorAll("[data-name]");
      let t = null;
      l.addEventListener("change", function () {
        var e = Array.from(c);
        (t = e.sort(function (e, t) {
          return 1 == l.checked
            ? e.dataset.name.toLowerCase() > t.dataset.name.toLowerCase()
              ? 1
              : -1
            : Number(e.dataset.index) > Number(t.dataset.index)
            ? 1
            : -1;
        })).forEach(function (e) {
          document.querySelector(".js-sortable-wrap").appendChild(e);
        });
      });
    }
    document.querySelectorAll(".form-notification").forEach(function (e) {
      e.querySelector(".notification-close").addEventListener(
        "click",
        function () {
          document
            .querySelectorAll("[data-members-form]")
            .forEach(function (e) {
              e.classList.remove("success"), e.classList.remove("error");
            });
        }
      );
    });
    var e = new ClipboardJS(".js-copy-link"),
      d = document.querySelector(".js-notification-copy-link"),
      a =
        (e.on("success", function (e) {
          d.classList.add("visible"),
            d
              .querySelector(".notification-close")
              .addEventListener("click", function () {
                d.classList.remove("visible"), e.clearSelection();
              });
        }),
        document.querySelector(".sidebar-sticky"));
    a &&
      1200 <= window.innerWidth &&
      new StickySidebar(".sidebar", {
        topSpacing: 40,
        bottomSpacing: 40,
        containerSelector: ".main-content",
        innerWrapperSelector: ".sidebar-wrap",
        minWidth: 1200,
      });
  });