!(function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ?
        (module.exports = e.document ?
            t(e, !0) :
            function(e) {
                if (e.document) return t(e);
                throw new Error("jQuery requires a window with a document");
            }) :
        t(e);
})("undefined" != typeof window ? window : this, function(w, H) {
    "use strict";

    function y(e) {
        return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
        );
    }

    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        M = Object.getPrototypeOf,
        a = t.slice,
        q = t.flat ?

        function(e) {
            return t.flat.call(e);
        } :
        function(e) {
            return t.concat.apply([], e);
        },
        R = t.push,
        B = t.indexOf,
        W = {},
        F = W.toString,
        z = W.hasOwnProperty,
        $ = z.toString,
        U = $.call(Object),
        m = {},
        x = w.document,
        X = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function V(e, t, n) {
        var i,
            o,
            r = (n = n || x).createElement("script");
        if (((r.text = e), t))
            for (i in X)
                (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r);
    }

    function p(e) {
        return null == e ?
            e + "" :
            "object" == typeof e || "function" == typeof e ?
            W[F.call(e)] || "object" :
            typeof e;
    }
    var e = "3.6.0",
        E = function(e, t) {
            return new E.fn.init(e, t);
        };

    function Y(e) {
        var t = !!e && "length" in e && e.length,
            n = p(e);
        return (!y(e) &&
            !g(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (E.fn = E.prototype = {
        jquery: e,
        constructor: E,
        length: 0,
        toArray: function() {
            return a.call(this);
        },
        get: function(e) {
            return null == e ?
                a.call(this) :
                e < 0 ?
                this[e + this.length] :
                this[e];
        },
        pushStack: function(e) {
            e = E.merge(this.constructor(), e);
            return (e.prevObject = this), e;
        },
        each: function(e) {
            return E.each(this, e);
        },
        map: function(n) {
            return this.pushStack(
                E.map(this, function(e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(
                E.grep(this, function(e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function() {
            return this.pushStack(
                E.grep(this, function(e, t) {
                    return t % 2;
                })
            );
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: R,
        sort: t.sort,
        splice: t.splice,
    }),
    (E.extend = E.fn.extend =
        function() {
            var e,
                t,
                n,
                i,
                o,
                r = arguments[0] || {},
                s = 1,
                a = arguments.length,
                l = !1;
            for (
                "boolean" == typeof r && ((l = r), (r = arguments[s] || {}), s++),
                "object" == typeof r || y(r) || (r = {}),
                s === a && ((r = this), s--); s < a; s++
            )
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = e[t]),
                        "__proto__" !== t &&
                        r !== n &&
                        (l && n && (E.isPlainObject(n) || (i = Array.isArray(n))) ?
                            ((o = r[t]),
                                (o =
                                    i && !Array.isArray(o) ?
                                    [] :
                                    i || E.isPlainObject(o) ?
                                    o :
                                    {}),
                                (i = !1),
                                (r[t] = E.extend(l, o, n))) :
                            void 0 !== n && (r[t] = n));
            return r;
        }),
    E.extend({
            expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
                return (!(!e || "[object Object]" !== F.call(e)) &&
                    (!(e = M(e)) ||
                        ("function" ==
                            typeof(e = z.call(e, "constructor") && e.constructor) &&
                            $.call(e) === U))
                );
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function(e, t, n) {
                V(e, { nonce: t && t.nonce }, n);
            },
            each: function(e, t) {
                var n,
                    i = 0;
                if (Y(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            makeArray: function(e, t) {
                t = t || [];
                return (
                    null != e &&
                    (Y(Object(e)) ?
                        E.merge(t, "string" == typeof e ? [e] : e) :
                        R.call(t, e)),
                    t
                );
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : B.call(t, e, n);
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return (e.length = o), e;
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                    !t(e[o], o) != s && i.push(e[o]);
                return i;
            },
            map: function(e, t, n) {
                var i,
                    o,
                    r = 0,
                    s = [];
                if (Y(e))
                    for (i = e.length; r < i; r++)
                        null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return q(s);
            },
            guid: 1,
            support: m,
        }),
        "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
        E.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function(e, t) {
                W["[object " + t + "]"] = t.toLowerCase();
            }
        );

    function i(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && E(e).is(n)) break;
                i.push(e);
            }
        return i;
    }

    function Q(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var e = (function(H) {
            function h(e, t) {
                return (
                    (e = "0x" + e.slice(1) - 65536),
                    t ||
                    (e < 0 ?
                        String.fromCharCode(65536 + e) :
                        String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
                );
            }

            function M(e, t) {
                return t ?
                    "\0" === e ?
                    "�" :
                    e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " " :
                    "\\" + e;
            }

            function q() {
                x();
            }
            var e,
                d,
                _,
                r,
                R,
                f,
                B,
                W,
                w,
                l,
                c,
                x,
                E,
                n,
                T,
                p,
                i,
                o,
                g,
                k = "sizzle" + +new Date(),
                u = H.document,
                C = 0,
                F = 0,
                z = N(),
                $ = N(),
                U = N(),
                m = N(),
                X = function(e, t) {
                    return e === t && (c = !0), 0;
                },
                V = {}.hasOwnProperty,
                t = [],
                Y = t.pop,
                Q = t.push,
                A = t.push,
                G = t.slice,
                y = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1;
                },
                K =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                s = "[\\x20\\t\\r\\n\\f]",
                a =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                s +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                J =
                "\\[" +
                s +
                "*(" +
                a +
                ")(?:" +
                s +
                "*([*^$|!~]?=)" +
                s +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                a +
                "))|)" +
                s +
                "*\\]",
                Z =
                ":(" +
                a +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                J +
                ")*)|.*)\\)|)",
                ee = new RegExp(s + "+", "g"),
                v = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$", "g"),
                te = new RegExp("^" + s + "*," + s + "*"),
                ne = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"),
                ie = new RegExp(s + "|>"),
                oe = new RegExp(Z),
                re = new RegExp("^" + a + "$"),
                b = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    TAG: new RegExp("^(" + a + "|[*])"),
                    ATTR: new RegExp("^" + J),
                    PSEUDO: new RegExp("^" + Z),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        s +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        s +
                        "*(?:([+-]|)" +
                        s +
                        "*(\\d+)|))" +
                        s +
                        "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                        s +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        s +
                        "*((?:-\\d)?\\d*)" +
                        s +
                        "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                se = /HTML$/i,
                ae = /^(?:input|select|textarea|button)$/i,
                le = /^h\d$/i,
                S = /^[^{]+\{\s*\[native \w/,
                ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ue = /[+~]/,
                L = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\([^\\r\\n\\f])",
                    "g"
                ),
                he = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                de = ye(
                    function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                    }, { dir: "parentNode", next: "legend" }
                );
            try {
                A.apply((t = G.call(u.childNodes)), u.childNodes),
                    t[u.childNodes.length].nodeType;
            } catch (e) {
                A = {
                    apply: t.length ?

                        function(e, t) {
                            Q.apply(e, G.call(t));
                        } :
                        function(e, t) {
                            for (var n = e.length, i = 0;
                                (e[n++] = t[i++]););
                            e.length = n - 1;
                        },
                };
            }

            function D(t, e, n, i) {
                var o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = e && e.ownerDocument,
                    h = e ? e.nodeType : 9;
                if (
                    ((n = n || []),
                        "string" != typeof t || !t || (1 !== h && 9 !== h && 11 !== h))
                )
                    return n;
                if (!i && (x(e), (e = e || E), T)) {
                    if (11 !== h && (a = ce.exec(t)))
                        if ((o = a[1])) {
                            if (9 === h) {
                                if (!(c = e.getElementById(o))) return n;
                                if (c.id === o) return n.push(c), n;
                            } else if (
                                u &&
                                (c = u.getElementById(o)) &&
                                g(e, c) &&
                                c.id === o
                            )
                                return n.push(c), n;
                        } else {
                            if (a[2]) return A.apply(n, e.getElementsByTagName(t)), n;
                            if (
                                (o = a[3]) &&
                                d.getElementsByClassName &&
                                e.getElementsByClassName
                            )
                                return A.apply(n, e.getElementsByClassName(o)), n;
                        }
                    if (
                        d.qsa &&
                        !m[t + " "] &&
                        (!p || !p.test(t)) &&
                        (1 !== h || "object" !== e.nodeName.toLowerCase())
                    ) {
                        if (((c = t), (u = e), 1 === h && (ie.test(t) || ne.test(t)))) {
                            for (
                                ((u = (ue.test(t) && me(e.parentNode)) || e) === e &&
                                    d.scope) ||
                                ((s = e.getAttribute("id")) ?
                                    (s = s.replace(he, M)) :
                                    e.setAttribute("id", (s = k))),
                                r = (l = f(t)).length; r--;

                            )
                                l[r] = (s ? "#" + s : ":scope") + " " + P(l[r]);
                            c = l.join(",");
                        }
                        try {
                            return A.apply(n, u.querySelectorAll(c)), n;
                        } catch (e) {
                            m(t, !0);
                        } finally {
                            s === k && e.removeAttribute("id");
                        }
                    }
                }
                return W(t.replace(v, "$1"), e, n, i);
            }

            function N() {
                var n = [];

                function i(e, t) {
                    return (
                        n.push(e + " ") > _.cacheLength && delete i[n.shift()],
                        (i[e + " "] = t)
                    );
                }
                return i;
            }

            function O(e) {
                return (e[k] = !0), e;
            }

            function j(e) {
                var t = E.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t;
            }

            function pe(e, t) {
                var n = t && e,
                    i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (;
                        (n = n.nextSibling);)
                        if (n === t) return -1;
                return e ? 1 : -1;
            }

            function ge(t) {
                return function(e) {
                    return "form" in e ?
                        e.parentNode && !1 === e.disabled ?
                        "label" in e ?
                        "label" in e.parentNode ?
                        e.parentNode.disabled === t :
                        e.disabled === t :
                        e.isDisabled === t || (e.isDisabled !== !t && de(e) === t) :
                        e.disabled === t :
                        "label" in e && e.disabled === t;
                };
            }

            function I(s) {
                return O(function(r) {
                    return (
                        (r = +r),
                        O(function(e, t) {
                            for (var n, i = s([], e.length, r), o = i.length; o--;)
                                e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
                        })
                    );
                });
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }
            for (e in ((d = D.support = {}),
                    (R = D.isXML =
                        function(e) {
                            var t = e && e.namespaceURI,
                                e = e && (e.ownerDocument || e).documentElement;
                            return !se.test(t || (e && e.nodeName) || "HTML");
                        }),
                    (x = D.setDocument =
                        function(e) {
                            var e = e ? e.ownerDocument || e : u;
                            return (
                                e != E &&
                                9 === e.nodeType &&
                                e.documentElement &&
                                ((n = (E = e).documentElement),
                                    (T = !R(E)),
                                    u != E &&
                                    (e = E.defaultView) &&
                                    e.top !== e &&
                                    (e.addEventListener ?
                                        e.addEventListener("unload", q, !1) :
                                        e.attachEvent && e.attachEvent("onunload", q)),
                                    (d.scope = j(function(e) {
                                        return (
                                            n.appendChild(e).appendChild(E.createElement("div")),
                                            void 0 !== e.querySelectorAll &&
                                            !e.querySelectorAll(":scope fieldset div").length
                                        );
                                    })),
                                    (d.attributes = j(function(e) {
                                        return (e.className = "i"), !e.getAttribute("className");
                                    })),
                                    (d.getElementsByTagName = j(function(e) {
                                        return (
                                            e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                                        );
                                    })),
                                    (d.getElementsByClassName = S.test(E.getElementsByClassName)),
                                    (d.getById = j(function(e) {
                                        return (
                                            (n.appendChild(e).id = k), !E.getElementsByName || !E.getElementsByName(k).length
                                        );
                                    })),
                                    d.getById ?
                                    ((_.filter.ID = function(e) {
                                            var t = e.replace(L, h);
                                            return function(e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (_.find.ID = function(e, t) {
                                            if (void 0 !== t.getElementById && T)
                                                return (t = t.getElementById(e)) ? [t] : [];
                                        })) :
                                    ((_.filter.ID = function(e) {
                                            var t = e.replace(L, h);
                                            return function(e) {
                                                e =
                                                    void 0 !== e.getAttributeNode &&
                                                    e.getAttributeNode("id");
                                                return e && e.value === t;
                                            };
                                        }),
                                        (_.find.ID = function(e, t) {
                                            if (void 0 !== t.getElementById && T) {
                                                var n,
                                                    i,
                                                    o,
                                                    r = t.getElementById(e);
                                                if (r) {
                                                    if ((n = r.getAttributeNode("id")) && n.value === e)
                                                        return [r];
                                                    for (o = t.getElementsByName(e), i = 0;
                                                        (r = o[i++]);)
                                                        if ((n = r.getAttributeNode("id")) && n.value === e)
                                                            return [r];
                                                }
                                                return [];
                                            }
                                        })),
                                    (_.find.TAG = d.getElementsByTagName ?

                                        function(e, t) {
                                            return void 0 !== t.getElementsByTagName ?
                                                t.getElementsByTagName(e) :
                                                d.qsa ?
                                                t.querySelectorAll(e) :
                                                void 0;
                                        } :
                                        function(e, t) {
                                            var n,
                                                i = [],
                                                o = 0,
                                                r = t.getElementsByTagName(e);
                                            if ("*" !== e) return r;
                                            for (;
                                                (n = r[o++]);) 1 === n.nodeType && i.push(n);
                                            return i;
                                        }),
                                    (_.find.CLASS =
                                        d.getElementsByClassName &&
                                        function(e, t) {
                                            if (void 0 !== t.getElementsByClassName && T)
                                                return t.getElementsByClassName(e);
                                        }),
                                    (i = []),
                                    (p = []),
                                    (d.qsa = S.test(E.querySelectorAll)) &&
                                    (j(function(e) {
                                            var t;
                                            (n.appendChild(e).innerHTML =
                                                "<a id='" +
                                                k +
                                                "'></a><select id='" +
                                                k +
                                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                            e.querySelectorAll("[msallowcapture^='']").length &&
                                                p.push("[*^$]=" + s + "*(?:''|\"\")"),
                                                e.querySelectorAll("[selected]").length ||
                                                p.push("\\[" + s + "*(?:value|" + K + ")"),
                                                e.querySelectorAll("[id~=" + k + "-]").length ||
                                                p.push("~="),
                                                (t = E.createElement("input")).setAttribute("name", ""),
                                                e.appendChild(t),
                                                e.querySelectorAll("[name='']").length ||
                                                p.push(
                                                    "\\[" + s + "*name" + s + "*=" + s + "*(?:''|\"\")"
                                                ),
                                                e.querySelectorAll(":checked").length || p.push(":checked"),
                                                e.querySelectorAll("a#" + k + "+*").length ||
                                                p.push(".#.+[+~]"),
                                                e.querySelectorAll("\\\f"),
                                                p.push("[\\r\\n\\f]");
                                        }),
                                        j(function(e) {
                                            e.innerHTML =
                                                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                            var t = E.createElement("input");
                                            t.setAttribute("type", "hidden"),
                                                e.appendChild(t).setAttribute("name", "D"),
                                                e.querySelectorAll("[name=d]").length &&
                                                p.push("name" + s + "*[*^$|!~]?="),
                                                2 !== e.querySelectorAll(":enabled").length &&
                                                p.push(":enabled", ":disabled"),
                                                (n.appendChild(e).disabled = !0),
                                                2 !== e.querySelectorAll(":disabled").length &&
                                                p.push(":enabled", ":disabled"),
                                                e.querySelectorAll("*,:x"),
                                                p.push(",.*:");
                                        })),
                                    (d.matchesSelector = S.test(
                                        (o =
                                            n.matches ||
                                            n.webkitMatchesSelector ||
                                            n.mozMatchesSelector ||
                                            n.oMatchesSelector ||
                                            n.msMatchesSelector)
                                    )) &&
                                    j(function(e) {
                                        (d.disconnectedMatch = o.call(e, "*")),
                                        o.call(e, "[s!='']:x"),
                                            i.push("!=", Z);
                                    }),
                                    (p = p.length && new RegExp(p.join("|"))),
                                    (i = i.length && new RegExp(i.join("|"))),
                                    (e = S.test(n.compareDocumentPosition)),
                                    (g =
                                        e || S.test(n.contains) ?

                                        function(e, t) {
                                            var n = 9 === e.nodeType ? e.documentElement : e,
                                                t = t && t.parentNode;
                                            return (
                                                e === t ||
                                                !(!t ||
                                                    1 !== t.nodeType ||
                                                    !(n.contains ?
                                                        n.contains(t) :
                                                        e.compareDocumentPosition &&
                                                        16 & e.compareDocumentPosition(t))
                                                )
                                            );
                                        } :
                                        function(e, t) {
                                            if (t)
                                                for (;
                                                    (t = t.parentNode);)
                                                    if (t === e) return !0;
                                            return !1;
                                        }),
                                    (X = e ?

                                        function(e, t) {
                                            if (e === t) return (c = !0), 0;
                                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                n ||
                                                (1 &
                                                    (n =
                                                        (e.ownerDocument || e) == (t.ownerDocument || t) ?
                                                        e.compareDocumentPosition(t) :
                                                        1) ||
                                                    (!d.sortDetached && t.compareDocumentPosition(e) === n) ?
                                                    e == E || (e.ownerDocument == u && g(u, e)) ?
                                                    -1 :
                                                    t == E || (t.ownerDocument == u && g(u, t)) ?
                                                    1 :
                                                    l ?
                                                    y(l, e) - y(l, t) :
                                                    0 :
                                                    4 & n ?
                                                    -1 :
                                                    1)
                                            );
                                        } :
                                        function(e, t) {
                                            if (e === t) return (c = !0), 0;
                                            var n,
                                                i = 0,
                                                o = e.parentNode,
                                                r = t.parentNode,
                                                s = [e],
                                                a = [t];
                                            if (!o || !r)
                                                return e == E ?
                                                    -1 :
                                                    t == E ?
                                                    1 :
                                                    o ?
                                                    -1 :
                                                    r ?
                                                    1 :
                                                    l ?
                                                    y(l, e) - y(l, t) :
                                                    0;
                                            if (o === r) return pe(e, t);
                                            for (n = e;
                                                (n = n.parentNode);) s.unshift(n);
                                            for (n = t;
                                                (n = n.parentNode);) a.unshift(n);
                                            for (; s[i] === a[i];) i++;
                                            return i ?
                                                pe(s[i], a[i]) :
                                                s[i] == u ?
                                                -1 :
                                                a[i] == u ?
                                                1 :
                                                0;
                                        })),
                                E
                            );
                        }),
                    (D.matches = function(e, t) {
                        return D(e, null, null, t);
                    }),
                    (D.matchesSelector = function(e, t) {
                        if (
                            (x(e),
                                d.matchesSelector &&
                                T &&
                                !m[t + " "] &&
                                (!i || !i.test(t)) &&
                                (!p || !p.test(t)))
                        )
                            try {
                                var n = o.call(e, t);
                                if (
                                    n ||
                                    d.disconnectedMatch ||
                                    (e.document && 11 !== e.document.nodeType)
                                )
                                    return n;
                            } catch (e) {
                                m(t, !0);
                            }
                        return 0 < D(t, E, null, [e]).length;
                    }),
                    (D.contains = function(e, t) {
                        return (e.ownerDocument || e) != E && x(e), g(e, t);
                    }),
                    (D.attr = function(e, t) {
                        (e.ownerDocument || e) != E && x(e);
                        var n = _.attrHandle[t.toLowerCase()],
                            n = n && V.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                        return void 0 !== n ?
                            n :
                            d.attributes || !T ?
                            e.getAttribute(t) :
                            (n = e.getAttributeNode(t)) && n.specified ?
                            n.value :
                            null;
                    }),
                    (D.escape = function(e) {
                        return (e + "").replace(he, M);
                    }),
                    (D.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }),
                    (D.uniqueSort = function(e) {
                        var t,
                            n = [],
                            i = 0,
                            o = 0;
                        if (
                            ((c = !d.detectDuplicates),
                                (l = !d.sortStable && e.slice(0)),
                                e.sort(X),
                                c)
                        ) {
                            for (;
                                (t = e[o++]);) t === e[o] && (i = n.push(o));
                            for (; i--;) e.splice(n[i], 1);
                        }
                        return (l = null), e;
                    }),
                    (r = D.getText =
                        function(e) {
                            var t,
                                n = "",
                                i = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                                } else if (3 === o || 4 === o) return e.nodeValue;
                            } else
                                for (;
                                    (t = e[i++]);) n += r(t);
                            return n;
                        }),
                    ((_ = D.selectors = {
                        cacheLength: 50,
                        createPseudo: O,
                        match: b,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return (
                                    (e[1] = e[1].replace(L, h)),
                                    (e[3] = (e[3] || e[4] || e[5] || "").replace(L, h)),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                                );
                            },
                            CHILD: function(e) {
                                return (
                                    (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3) ?
                                    (e[3] || D.error(e[0]),
                                        (e[4] = +(e[4] ?
                                            e[5] + (e[6] || 1) :
                                            2 * ("even" === e[3] || "odd" === e[3]))),
                                        (e[5] = +(e[7] + e[8] || "odd" === e[3]))) :
                                    e[3] && D.error(e[0]),
                                    e
                                );
                            },
                            PSEUDO: function(e) {
                                var t,
                                    n = !e[6] && e[2];
                                return b.CHILD.test(e[0]) ?
                                    null :
                                    (e[3] ?
                                        (e[2] = e[4] || e[5] || "") :
                                        n &&
                                        oe.test(n) &&
                                        (t = f(n, !0)) &&
                                        (t = n.indexOf(")", n.length - t) - n.length) &&
                                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                        e.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(L, h).toLowerCase();
                                return "*" === e ?

                                    function() {
                                        return !0;
                                    } :
                                    function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t;
                                    };
                            },
                            CLASS: function(e) {
                                var t = z[e + " "];
                                return (
                                    t ||
                                    ((t = new RegExp("(^|" + s + ")" + e + "(" + s + "|$)")) &&
                                        z(e, function(e) {
                                            return t.test(
                                                ("string" == typeof e.className && e.className) ||
                                                (void 0 !== e.getAttribute &&
                                                    e.getAttribute("class")) ||
                                                ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function(t, n, i) {
                                return function(e) {
                                    e = D.attr(e, t);
                                    return null == e ?
                                        "!=" === n :
                                        !n ||
                                        ((e += ""),
                                            "=" === n ?
                                            e === i :
                                            "!=" === n ?
                                            e !== i :
                                            "^=" === n ?
                                            i && 0 === e.indexOf(i) :
                                            "*=" === n ?
                                            i && -1 < e.indexOf(i) :
                                            "$=" === n ?
                                            i && e.slice(-i.length) === i :
                                            "~=" === n ?
                                            -1 < (" " + e.replace(ee, " ") + " ").indexOf(i) :
                                            "|=" === n &&
                                            (e === i || e.slice(0, i.length + 1) === i + "-"));
                                };
                            },
                            CHILD: function(p, e, t, g, m) {
                                var v = "nth" !== p.slice(0, 3),
                                    y = "last" !== p.slice(-4),
                                    b = "of-type" === e;
                                return 1 === g && 0 === m ?

                                    function(e) {
                                        return !!e.parentNode;
                                    } :
                                    function(e, t, n) {
                                        var i,
                                            o,
                                            r,
                                            s,
                                            a,
                                            l,
                                            c = v != y ? "nextSibling" : "previousSibling",
                                            u = e.parentNode,
                                            h = b && e.nodeName.toLowerCase(),
                                            d = !n && !b,
                                            f = !1;
                                        if (u) {
                                            if (v) {
                                                for (; c;) {
                                                    for (s = e;
                                                        (s = s[c]);)
                                                        if (
                                                            b ?
                                                            s.nodeName.toLowerCase() === h :
                                                            1 === s.nodeType
                                                        )
                                                            return !1;
                                                    l = c = "only" === p && !l && "nextSibling";
                                                }
                                                return !0;
                                            }
                                            if (((l = [y ? u.firstChild : u.lastChild]), y && d)) {
                                                for (
                                                    f =
                                                    (a =
                                                        (i =
                                                            (o =
                                                                (r = (s = u)[k] || (s[k] = {}))[s.uniqueID] ||
                                                                (r[s.uniqueID] = {}))[p] || [])[0] === C &&
                                                        i[1]) && i[2],
                                                    s = a && u.childNodes[a];
                                                    (s = (++a && s && s[c]) || (f = a = 0) || l.pop());

                                                )
                                                    if (1 === s.nodeType && ++f && s === e) {
                                                        o[p] = [C, a, f];
                                                        break;
                                                    }
                                            } else if (!1 ===
                                                (f = d ?
                                                    (a =
                                                        (i =
                                                            (o =
                                                                (r = (s = e)[k] || (s[k] = {}))[s.uniqueID] ||
                                                                (r[s.uniqueID] = {}))[p] || [])[0] === C &&
                                                        i[1]) :
                                                    f)
                                            )
                                                for (;
                                                    (s = (++a && s && s[c]) || (f = a = 0) || l.pop()) &&
                                                    ((b ?
                                                            s.nodeName.toLowerCase() !== h :
                                                            1 !== s.nodeType) ||
                                                        !++f ||
                                                        (d &&
                                                            ((o =
                                                                (r = s[k] || (s[k] = {}))[s.uniqueID] ||
                                                                (r[s.uniqueID] = {}))[p] = [C, f]),
                                                            s !== e));

                                                );
                                            return (f -= m) === g || (f % g == 0 && 0 <= f / g);
                                        }
                                    };
                            },
                            PSEUDO: function(e, r) {
                                var t,
                                    s =
                                    _.pseudos[e] ||
                                    _.setFilters[e.toLowerCase()] ||
                                    D.error("unsupported pseudo: " + e);
                                return s[k] ?
                                    s(r) :
                                    1 < s.length ?
                                    ((t = [e, e, "", r]),
                                        _.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                        O(function(e, t) {
                                            for (var n, i = s(e, r), o = i.length; o--;)
                                                e[(n = y(e, i[o]))] = !(t[n] = i[o]);
                                        }) :
                                        function(e) {
                                            return s(e, 0, t);
                                        }) :
                                    s;
                            },
                        },
                        pseudos: {
                            not: O(function(e) {
                                var i = [],
                                    o = [],
                                    a = B(e.replace(v, "$1"));
                                return a[k] ?
                                    O(function(e, t, n, i) {
                                        for (var o, r = a(e, null, i, []), s = e.length; s--;)
                                            (o = r[s]) && (e[s] = !(t[s] = o));
                                    }) :
                                    function(e, t, n) {
                                        return (
                                            (i[0] = e), a(i, null, n, o), (i[0] = null), !o.pop()
                                        );
                                    };
                            }),
                            has: O(function(t) {
                                return function(e) {
                                    return 0 < D(t, e).length;
                                };
                            }),
                            contains: O(function(t) {
                                return (
                                    (t = t.replace(L, h)),
                                    function(e) {
                                        return -1 < (e.textContent || r(e)).indexOf(t);
                                    }
                                );
                            }),
                            lang: O(function(n) {
                                return (
                                    re.test(n || "") || D.error("unsupported lang: " + n),
                                    (n = n.replace(L, h).toLowerCase()),
                                    function(e) {
                                        var t;
                                        do {
                                            if (
                                                (t = T ?
                                                    e.lang :
                                                    e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                            )
                                                return (
                                                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                                );
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function(e) {
                                var t = H.location && H.location.hash;
                                return t && t.slice(1) === e.id;
                            },
                            root: function(e) {
                                return e === n;
                            },
                            focus: function(e) {
                                return (
                                    e === E.activeElement &&
                                    (!E.hasFocus || E.hasFocus()) &&
                                    !!(e.type || e.href || ~e.tabIndex)
                                );
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return (
                                    ("input" === t && !!e.checked) ||
                                    ("option" === t && !!e.selected)
                                );
                            },
                            selected: function(e) {
                                return (
                                    e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                );
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function(e) {
                                return !_.pseudos.empty(e);
                            },
                            header: function(e) {
                                return le.test(e.nodeName);
                            },
                            input: function(e) {
                                return ae.test(e.nodeName);
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && "button" === e.type) || "button" === t;
                            },
                            text: function(e) {
                                return (
                                    "input" === e.nodeName.toLowerCase() &&
                                    "text" === e.type &&
                                    (null == (e = e.getAttribute("type")) ||
                                        "text" === e.toLowerCase())
                                );
                            },
                            first: I(function() {
                                return [0];
                            }),
                            last: I(function(e, t) {
                                return [t - 1];
                            }),
                            eq: I(function(e, t, n) {
                                return [n < 0 ? n + t : n];
                            }),
                            even: I(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            odd: I(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            lt: I(function(e, t, n) {
                                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                                return e;
                            }),
                            gt: I(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e;
                            }),
                        },
                    }).pseudos.nth = _.pseudos.eq), { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                _.pseudos[e] = (function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t;
                    };
                })(e);
            for (e in { submit: !0, reset: !0 })
                _.pseudos[e] = (function(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n;
                    };
                })(e);

            function ve() {}

            function P(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i;
            }

            function ye(s, e, t) {
                var a = e.dir,
                    l = e.next,
                    c = l || a,
                    u = t && "parentNode" === c,
                    h = F++;
                return e.first ?

                    function(e, t, n) {
                        for (;
                            (e = e[a]);)
                            if (1 === e.nodeType || u) return s(e, t, n);
                        return !1;
                    } :
                    function(e, t, n) {
                        var i,
                            o,
                            r = [C, h];
                        if (n) {
                            for (;
                                (e = e[a]);)
                                if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
                        } else
                            for (;
                                (e = e[a]);)
                                if (1 === e.nodeType || u)
                                    if (
                                        ((o =
                                                (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                                                (o[e.uniqueID] = {})),
                                            l && l === e.nodeName.toLowerCase())
                                    )
                                        e = e[a] || e;
                                    else {
                                        if ((i = o[c]) && i[0] === C && i[1] === h)
                                            return (r[2] = i[2]);
                                        if (((o[c] = r)[2] = s(e, t, n))) return !0;
                                    }
                        return !1;
                    };
            }

            function be(o) {
                return 1 < o.length ?

                    function(e, t, n) {
                        for (var i = o.length; i--;)
                            if (!o[i](e, t, n)) return !1;
                        return !0;
                    } :
                    o[0];
            }

            function _e(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                    !(r = e[a]) || (n && !n(r, i, o)) || (s.push(r), c && t.push(a));
                return s;
            }

            function we(f, p, g, m, v, e) {
                return (
                    m && !m[k] && (m = we(m)),
                    v && !v[k] && (v = we(v, e)),
                    O(function(e, t, n, i) {
                        var o,
                            r,
                            s,
                            a = [],
                            l = [],
                            c = t.length,
                            u =
                            e ||
                            (function(e, t, n) {
                                for (var i = 0, o = t.length; i < o; i++) D(e, t[i], n);
                                return n;
                            })(p || "*", n.nodeType ? [n] : n, []),
                            h = !f || (!e && p) ? u : _e(u, a, f, n, i),
                            d = g ? (v || (e ? f : c || m) ? [] : t) : h;
                        if ((g && g(h, d, n, i), m))
                            for (o = _e(d, l), m(o, [], n, i), r = o.length; r--;)
                                (s = o[r]) && (d[l[r]] = !(h[l[r]] = s));
                        if (e) {
                            if (v || f) {
                                if (v) {
                                    for (o = [], r = d.length; r--;)
                                        (s = d[r]) && o.push((h[r] = s));
                                    v(null, (d = []), o, i);
                                }
                                for (r = d.length; r--;)
                                    (s = d[r]) &&
                                    -1 < (o = v ? y(e, s) : a[r]) &&
                                    (e[o] = !(t[o] = s));
                            }
                        } else(d = _e(d === t ? d.splice(c, d.length) : d)), v ? v(null, t, d, i) : A.apply(t, d);
                    })
                );
            }

            function xe(m, v) {
                function e(e, t, n, i, o) {
                    var r,
                        s,
                        a,
                        l = 0,
                        c = "0",
                        u = e && [],
                        h = [],
                        d = w,
                        f = e || (b && _.find.TAG("*", o)),
                        p = (C += null == d ? 1 : Math.random() || 0.1),
                        g = f.length;
                    for (
                        o && (w = t == E || t || o); c !== g && null != (r = f[c]); c++
                    ) {
                        if (b && r) {
                            for (
                                s = 0, t || r.ownerDocument == E || (x(r), (n = !T));
                                (a = m[s++]);

                            )
                                if (a(r, t || E, n)) {
                                    i.push(r);
                                    break;
                                }
                            o && (C = p);
                        }
                        y && ((r = !a && r) && l--, e && u.push(r));
                    }
                    if (((l += c), y && c !== l)) {
                        for (s = 0;
                            (a = v[s++]);) a(u, h, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || h[c] || (h[c] = Y.call(i));
                            h = _e(h);
                        }
                        A.apply(i, h),
                            o && !e && 0 < h.length && 1 < l + v.length && D.uniqueSort(i);
                    }
                    return o && ((C = p), (w = d)), u;
                }
                var y = 0 < v.length,
                    b = 0 < m.length;
                return y ? O(e) : e;
            }
            return (
                (ve.prototype = _.filters = _.pseudos),
                (_.setFilters = new ve()),
                (f = D.tokenize =
                    function(e, t) {
                        var n,
                            i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c = $[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (s = e, a = [], l = _.preFilter; s;) {
                            for (r in ((n && !(i = te.exec(s))) ||
                                    (i && (s = s.slice(i[0].length) || s), a.push((o = []))),
                                    (n = !1),
                                    (i = ne.exec(s)) &&
                                    ((n = i.shift()),
                                        o.push({ value: n, type: i[0].replace(v, " ") }),
                                        (s = s.slice(n.length))),
                                    _.filter))
                                !(i = b[r].exec(s)) ||
                                (l[r] && !(i = l[r](i))) ||
                                ((n = i.shift()),
                                    o.push({ value: n, type: r, matches: i }),
                                    (s = s.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? s.length : s ? D.error(e) : $(e, a).slice(0);
                    }),
                (B = D.compile =
                    function(e, t) {
                        var n,
                            i = [],
                            o = [],
                            r = U[e + " "];
                        if (!r) {
                            for (n = (t = t || f(e)).length; n--;)
                                ((r = (function e(t) {
                                        for (
                                            var i,
                                                n,
                                                o,
                                                r = t.length,
                                                s = _.relative[t[0].type],
                                                a = s || _.relative[" "],
                                                l = s ? 1 : 0,
                                                c = ye(
                                                    function(e) {
                                                        return e === i;
                                                    },
                                                    a, !0
                                                ),
                                                u = ye(
                                                    function(e) {
                                                        return -1 < y(i, e);
                                                    },
                                                    a, !0
                                                ),
                                                h = [
                                                    function(e, t, n) {
                                                        return (
                                                            (e =
                                                                (!s && (n || t !== w)) ||
                                                                ((i = t).nodeType ? c : u)(e, t, n)),
                                                            (i = null),
                                                            e
                                                        );
                                                    },
                                                ]; l < r; l++
                                        )
                                            if ((n = _.relative[t[l].type])) h = [ye(be(h), n)];
                                            else {
                                                if (
                                                    (n = _.filter[t[l].type].apply(null, t[l].matches))[k]
                                                ) {
                                                    for (o = ++l; o < r && !_.relative[t[o].type]; o++);
                                                    return we(
                                                        1 < l && be(h),
                                                        1 < l &&
                                                        P(
                                                            t
                                                            .slice(0, l - 1)
                                                            .concat({
                                                                value: " " === t[l - 2].type ? "*" : "",
                                                            })
                                                        ).replace(v, "$1"),
                                                        n,
                                                        l < o && e(t.slice(l, o)),
                                                        o < r && e((t = t.slice(o))),
                                                        o < r && P(t)
                                                    );
                                                }
                                                h.push(n);
                                            }
                                        return be(h);
                                    })(t[n]))[k] ?
                                    i :
                                    o
                                ).push(r);
                            (r = U(e, xe(o, i))).selector = e;
                        }
                        return r;
                    }),
                (W = D.select =
                    function(e, t, n, i) {
                        var o,
                            r,
                            s,
                            a,
                            l,
                            c = "function" == typeof e && e,
                            u = !i && f((e = c.selector || e));
                        if (((n = n || []), 1 === u.length)) {
                            if (
                                2 < (r = u[0] = u[0].slice(0)).length &&
                                "ID" === (s = r[0]).type &&
                                9 === t.nodeType &&
                                T &&
                                _.relative[r[1].type]
                            ) {
                                if (!(t = (_.find.ID(s.matches[0].replace(L, h), t) || [])[0]))
                                    return n;
                                c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
                            }
                            for (
                                o = b.needsContext.test(e) ? 0 : r.length; o-- && ((s = r[o]), !_.relative[(a = s.type)]);

                            )
                                if (
                                    (l = _.find[a]) &&
                                    (i = l(
                                        s.matches[0].replace(L, h),
                                        (ue.test(r[0].type) && me(t.parentNode)) || t
                                    ))
                                ) {
                                    if ((r.splice(o, 1), (e = i.length && P(r)))) break;
                                    return A.apply(n, i), n;
                                }
                        }
                        return (
                            (c || B(e, u))(
                                i,
                                t, !T,
                                n, !t || (ue.test(e) && me(t.parentNode)) || t
                            ),
                            n
                        );
                    }),
                (d.sortStable = k.split("").sort(X).join("") === k),
                (d.detectDuplicates = !!c),
                x(),
                (d.sortDetached = j(function(e) {
                    return 1 & e.compareDocumentPosition(E.createElement("fieldset"));
                })),
                j(function(e) {
                    return (
                        (e.innerHTML = "<a href='#'></a>"),
                        "#" === e.firstChild.getAttribute("href")
                    );
                }) ||
                fe("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
                (d.attributes &&
                    j(function(e) {
                        return (
                            (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                            "" === e.firstChild.getAttribute("value")
                        );
                    })) ||
                fe("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
                j(function(e) {
                    return null == e.getAttribute("disabled");
                }) ||
                fe(K, function(e, t, n) {
                    if (!n)
                        return !0 === e[t] ?
                            t.toLowerCase() :
                            (n = e.getAttributeNode(t)) && n.specified ?
                            n.value :
                            null;
                }),
                D
            );
        })(w),
        G =
        ((E.find = e),
            (E.expr = e.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = e.uniqueSort),
            (E.text = e.getText),
            (E.isXMLDoc = e.isXML),
            (E.contains = e.contains),
            (E.escapeSelector = e.escape),
            E.expr.match.needsContext);

    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var K = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function J(e, n, i) {
        return y(n) ?
            E.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i;
            }) :
            n.nodeType ?
            E.grep(e, function(e) {
                return (e === n) !== i;
            }) :
            "string" != typeof n ?
            E.grep(e, function(e) {
                return -1 < B.call(n, e) !== i;
            }) :
            E.filter(n, e, i);
    }
    (E.filter = function(e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ?
            E.find.matchesSelector(i, e) ?
            [i] :
            [] :
            E.find.matches(
                e,
                E.grep(t, function(e) {
                    return 1 === e.nodeType;
                })
            )
        );
    }),
    E.fn.extend({
        find: function(e) {
            var t,
                n,
                i = this.length,
                o = this;
            if ("string" != typeof e)
                return this.pushStack(
                    E(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (E.contains(o[t], this)) return !0;
                    })
                );
            for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, o[t], n);
            return 1 < i ? E.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(J(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(J(this, e || [], !0));
        },
        is: function(e) {
            return !!J(this, "string" == typeof e && G.test(e) ? E(e) : e || [], !1)
                .length;
        },
    });
    var Z,
        ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        te =
        (((E.fn.init = function(e, t, n) {
                if (!e) return this;
                if (((n = n || Z), "string" != typeof e))
                    return e.nodeType ?
                        ((this[0] = e), (this.length = 1), this) :
                        y(e) ?
                        void 0 !== n.ready ?
                        n.ready(e) :
                        e(E) :
                        E.makeArray(e, this);
                if (!(i =
                        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ?
                        [null, e, null] :
                        ee.exec(e)) ||
                    (!i[1] && t)
                )
                    return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (i[1]) {
                    if (
                        ((t = t instanceof E ? t[0] : t),
                            E.merge(
                                this,
                                E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)
                            ),
                            K.test(i[1]) && E.isPlainObject(t))
                    )
                        for (var i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this;
                }
                return (
                    (n = x.getElementById(i[2])) && ((this[0] = n), (this.length = 1)),
                    this
                );
            }).prototype = E.fn),
            (Z = E(x)),
            /^(?:parents|prev(?:Until|All))/),
        ne = { children: !0, contents: !0, next: !0, prev: !0 };

    function ie(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e;
    }
    E.fn.extend({
            has: function(e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0;
                });
            },
            closest: function(e, t) {
                var n,
                    i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && E(e);
                if (!G.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (
                                n.nodeType < 11 &&
                                (s ?
                                    -1 < s.index(n) :
                                    1 === n.nodeType && E.find.matchesSelector(n, e))
                            ) {
                                r.push(n);
                                break;
                            }
                return this.pushStack(1 < r.length ? E.uniqueSort(r) : r);
            },
            index: function(e) {
                return e ?
                    "string" == typeof e ?
                    B.call(E(e), this[0]) :
                    B.call(this, e.jquery ? e[0] : e) :
                    this[0] && this[0].parentNode ?
                    this.first().prevAll().length :
                    -1;
            },
            add: function(e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        E.each({
                parent: function(e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function(e) {
                    return i(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return i(e, "parentNode", n);
                },
                next: function(e) {
                    return ie(e, "nextSibling");
                },
                prev: function(e) {
                    return ie(e, "previousSibling");
                },
                nextAll: function(e) {
                    return i(e, "nextSibling");
                },
                prevAll: function(e) {
                    return i(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return i(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return i(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return Q((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return Q(e.firstChild);
                },
                contents: function(e) {
                    return null != e.contentDocument && M(e.contentDocument) ?
                        e.contentDocument :
                        (l(e, "template") && (e = e.content || e),
                            E.merge([], e.childNodes));
                },
            },
            function(i, o) {
                E.fn[i] = function(e, t) {
                    var n = E.map(this, o, e);
                    return (
                        (t = "Until" !== i.slice(-5) ? e : t) &&
                        "string" == typeof t &&
                        (n = E.filter(t, n)),
                        1 < this.length &&
                        (ne[i] || E.uniqueSort(n), te.test(i) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var T = /[^\x20\t\r\n\f]+/g;

    function u(e) {
        return e;
    }

    function oe(e) {
        throw e;
    }

    function re(e, t, n, i) {
        var o;
        try {
            e && y((o = e.promise)) ?
                o.call(e).done(t).fail(n) :
                e && y((o = e.then)) ?
                o.call(e, t, n) :
                t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (E.Callbacks = function(i) {
        var e, n;
        i =
            "string" == typeof i ?
            ((e = i),
                (n = {}),
                E.each(e.match(T) || [], function(e, t) {
                    n[t] = !0;
                }),
                n) :
            E.extend({}, i);

        function o() {
            for (a = a || i.once, s = r = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length;)
                    !1 === l[u].apply(t[0], t[1]) &&
                    i.stopOnFalse &&
                    ((u = l.length), (t = !1));
            i.memory || (t = !1), (r = !1), a && (l = t ? [] : "");
        }
        var r,
            t,
            s,
            a,
            l = [],
            c = [],
            u = -1,
            h = {
                add: function() {
                    return (
                        l &&
                        (t && !r && ((u = l.length - 1), c.push(t)),
                            (function n(e) {
                                E.each(e, function(e, t) {
                                    y(t) ?
                                        (i.unique && h.has(t)) || l.push(t) :
                                        t && t.length && "string" !== p(t) && n(t);
                                });
                            })(arguments),
                            t && !r && o()),
                        this
                    );
                },
                remove: function() {
                    return (
                        E.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = E.inArray(t, l, n));)
                                l.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, l) : 0 < l.length;
                },
                empty: function() {
                    return (l = l && []), this;
                },
                disable: function() {
                    return (a = c = []), (l = t = ""), this;
                },
                disabled: function() {
                    return !l;
                },
                lock: function() {
                    return (a = c = []), t || r || (l = t = ""), this;
                },
                locked: function() {
                    return !!a;
                },
                fireWith: function(e, t) {
                    return (
                        a ||
                        ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            c.push(t),
                            r || o()),
                        this
                    );
                },
                fire: function() {
                    return h.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!s;
                },
            };
        return h;
    }),
    E.extend({
        Deferred: function(e) {
            var r = [
                    [
                        "notify",
                        "progress",
                        E.Callbacks("memory"),
                        E.Callbacks("memory"),
                        2,
                    ],
                    [
                        "resolve",
                        "done",
                        E.Callbacks("once memory"),
                        E.Callbacks("once memory"),
                        0,
                        "resolved",
                    ],
                    [
                        "reject",
                        "fail",
                        E.Callbacks("once memory"),
                        E.Callbacks("once memory"),
                        1,
                        "rejected",
                    ],
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o;
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this;
                    },
                    catch: function(e) {
                        return s.then(null, e);
                    },
                    pipe: function() {
                        var o = arguments;
                        return E.Deferred(function(i) {
                            E.each(r, function(e, t) {
                                    var n = y(o[t[4]]) && o[t[4]];
                                    a[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && y(e.promise) ?
                                            e
                                            .promise()
                                            .progress(i.notify)
                                            .done(i.resolve)
                                            .fail(i.reject) :
                                            i[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                (o = null);
                        }).promise();
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function c(o, r, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(n, i)) === r.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        (t =
                                            e &&
                                            ("object" == typeof e || "function" == typeof e) &&
                                            e.then),
                                        y(t) ?
                                            a ?
                                            t.call(e, c(l, r, u, a), c(l, r, oe, a)) :
                                            (l++,
                                                t.call(
                                                    e,
                                                    c(l, r, u, a),
                                                    c(l, r, oe, a),
                                                    c(l, r, u, r.notifyWith)
                                                )) :
                                            (s !== u && ((n = void 0), (i = [e])),
                                                (a || r.resolveWith)(n, i));
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ?
                                    e :
                                    function() {
                                        try {
                                            e();
                                        } catch (e) {
                                            E.Deferred.exceptionHook &&
                                                E.Deferred.exceptionHook(e, t.stackTrace),
                                                l <= o + 1 &&
                                                (s !== oe && ((n = void 0), (i = [e])),
                                                    r.rejectWith(n, i));
                                        }
                                    };
                                o
                                    ?
                                    t() :
                                    (E.Deferred.getStackHook &&
                                        (t.stackTrace = E.Deferred.getStackHook()),
                                        w.setTimeout(t));
                            };
                        }
                        return E.Deferred(function(e) {
                            r[0][3].add(c(0, e, y(i) ? i : u, e.notifyWith)),
                                r[1][3].add(c(0, e, y(t) ? t : u)),
                                r[2][3].add(c(0, e, y(n) ? n : oe));
                        }).promise();
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, s) : s;
                    },
                },
                a = {};
            return (
                E.each(r, function(e, t) {
                    var n = t[2],
                        i = t[5];
                    (s[t[1]] = n.add),
                    i &&
                        n.add(
                            function() {
                                o = i;
                            },
                            r[3 - e][2].disable,
                            r[3 - e][3].disable,
                            r[0][2].lock,
                            r[0][3].lock
                        ),
                        n.add(t[3].fire),
                        (a[t[0]] = function() {
                            return (
                                a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                            );
                        }),
                        (a[t[0] + "With"] = n.fireWith);
                }),
                s.promise(a),
                e && e.call(a, a),
                a
            );
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    (o[t] = this),
                    (r[t] = 1 < arguments.length ? a.call(arguments) : e),
                    --n || s.resolveWith(o, r);
                };
            }
            var n = arguments.length,
                i = n,
                o = Array(i),
                r = a.call(arguments),
                s = E.Deferred();
            if (
                n <= 1 &&
                (re(e, s.done(t(i)).resolve, s.reject, !n),
                    "pending" === s.state() || y(r[i] && r[i].then))
            )
                return s.then();
            for (; i--;) re(r[i], t(i), s.reject);
            return s.promise();
        },
    });
    var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        ae =
        ((E.Deferred.exceptionHook = function(e, t) {
                w.console &&
                    w.console.warn &&
                    e &&
                    se.test(e.name) &&
                    w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
            (E.readyException = function(e) {
                w.setTimeout(function() {
                    throw e;
                });
            }),
            E.Deferred());

    function le() {
        x.removeEventListener("DOMContentLoaded", le),
            w.removeEventListener("load", le),
            E.ready();
    }
    (E.fn.ready = function(e) {
        return (
            ae.then(e).catch(function(e) {
                E.readyException(e);
            }),
            this
        );
    }),
    E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) ||
                ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
                ae.resolveWith(x, [E]);
            },
        }),
        (E.ready.then = ae.then),
        "complete" === x.readyState ||
        ("loading" !== x.readyState && !x.documentElement.doScroll) ?
        w.setTimeout(E.ready) :
        (x.addEventListener("DOMContentLoaded", le),
            w.addEventListener("load", le));

    function h(e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === p(n))
            for (a in ((o = !0), n)) h(e, t, a, n[a], !0, r, s);
        else if (
            void 0 !== i &&
            ((o = !0),
                y(i) || (s = !0),
                (t = c ?
                    s ?
                    (t.call(e, i), null) :
                    ((c = t),
                        function(e, t, n) {
                            return c.call(E(e), n);
                        }) :
                    t))
        )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    }
    var ce = /^-ms-/,
        ue = /-([a-z])/g;

    function he(e, t) {
        return t.toUpperCase();
    }

    function b(e) {
        return e.replace(ce, "ms-").replace(ue, he);
    }

    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }

    function de() {
        this.expando = E.expando + de.uid++;
    }
    (de.uid = 1),
    (de.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return (
                t ||
                ((t = {}),
                    v(e) &&
                    (e.nodeType ?
                        (e[this.expando] = t) :
                        Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                        }))),
                t
            );
        },
        set: function(e, t, n) {
            var i,
                o = this.cache(e);
            if ("string" == typeof t) o[b(t)] = n;
            else
                for (i in t) o[b(i)] = t[i];
            return o;
        },
        get: function(e, t) {
            return void 0 === t ?
                this.cache(e) :
                e[this.expando] && e[this.expando][b(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ?
                this.get(e, t) :
                (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n,
                i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ?
                        t.map(b) :
                        (t = b(t)) in i ?
                        [t] :
                        t.match(T) || []).length;
                    for (; n--;) delete i[t[n]];
                }
                (void 0 !== t && !E.isEmptyObject(i)) ||
                (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !E.isEmptyObject(e);
        },
    });
    var _ = new de(),
        c = new de(),
        fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pe = /[A-Z]/g;

    function ge(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((i = "data-" + t.replace(pe, "-$&").toLowerCase()),
                    "string" == typeof(n = e.getAttribute(i)))
            ) {
                try {
                    n =
                        "true" === (o = n) ||
                        ("false" !== o &&
                            ("null" === o ?
                                null :
                                o === +o + "" ?
                                +o :
                                fe.test(o) ?
                                JSON.parse(o) :
                                o));
                } catch (e) {}
                c.set(e, t, n);
            } else n = void 0;
        return n;
    }
    E.extend({
            hasData: function(e) {
                return c.hasData(e) || _.hasData(e);
            },
            data: function(e, t, n) {
                return c.access(e, t, n);
            },
            removeData: function(e, t) {
                c.remove(e, t);
            },
            _data: function(e, t, n) {
                return _.access(e, t, n);
            },
            _removeData: function(e, t) {
                _.remove(e, t);
            },
        }),
        E.fn.extend({
            data: function(n, e) {
                var t,
                    i,
                    o,
                    r = this[0],
                    s = r && r.attributes;
                if (void 0 !== n)
                    return "object" == typeof n ?
                        this.each(function() {
                            c.set(this, n);
                        }) :
                        h(
                            this,
                            function(e) {
                                var t;
                                if (r && void 0 === e)
                                    return void 0 !== (t = c.get(r, n)) ||
                                        void 0 !== (t = ge(r, n)) ?
                                        t :
                                        void 0;
                                this.each(function() {
                                    c.set(this, n, e);
                                });
                            },
                            null,
                            e,
                            1 < arguments.length,
                            null, !0
                        );
                if (
                    this.length &&
                    ((o = c.get(r)), 1 === r.nodeType && !_.get(r, "hasDataAttrs"))
                ) {
                    for (t = s.length; t--;)
                        s[t] &&
                        0 === (i = s[t].name).indexOf("data-") &&
                        ((i = b(i.slice(5))), ge(r, i, o[i]));
                    _.set(r, "hasDataAttrs", !0);
                }
                return o;
            },
            removeData: function(e) {
                return this.each(function() {
                    c.remove(this, e);
                });
            },
        }),
        E.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return (
                        (i = _.get(e, (t = (t || "fx") + "queue"))),
                        n &&
                        (!i || Array.isArray(n) ?
                            (i = _.access(e, t, E.makeArray(n))) :
                            i.push(n)),
                        i || []
                    );
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = E._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete r.stop,
                        o.call(
                            e,
                            function() {
                                E.dequeue(e, t);
                            },
                            r
                        )), !i && r && r.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return (
                    _.get(e, n) ||
                    _.access(e, n, {
                        empty: E.Callbacks("once memory").add(function() {
                            _.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        E.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e ?
                    E.queue(this[0], t) :
                    void 0 === n ?
                    this :
                    this.each(function() {
                        var e = E.queue(this, t, n);
                        E._queueHooks(this, t),
                            "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
                    })
                );
            },
            dequeue: function(e) {
                return this.each(function() {
                    E.dequeue(this, e);
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
                function n() {
                    --o || r.resolveWith(s, [s]);
                }
                var i,
                    o = 1,
                    r = E.Deferred(),
                    s = this,
                    a = this.length;
                for (
                    "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--;

                )
                    (i = _.get(s[a], e + "queueHooks")) &&
                    i.empty &&
                    (o++, i.empty.add(n));
                return n(), r.promise(t);
            },
        });

    function me(e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && C(e) && "none" === E.css(e, "display"))
        );
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        d = ["Top", "Right", "Bottom", "Left"],
        k = x.documentElement,
        C = function(e) {
            return E.contains(e.ownerDocument, e);
        },
        ye = { composed: !0 };
    k.getRootNode &&
        (C = function(e) {
            return (
                E.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
            );
        });

    function be(e, t, n, i) {
        var o,
            r,
            s = 20,
            a = i ?

            function() {
                return i.cur();
            } :
            function() {
                return E.css(e, t, "");
            },
            l = a(),
            c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
            u =
            e.nodeType &&
            (E.cssNumber[t] || ("px" !== c && +l)) &&
            ve.exec(E.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3], u = +(l /= 2) || 1; s--;)
                E.style(e, t, u + c),
                (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
                (u /= r);
            E.style(e, t, (u *= 2) + c), (n = n || []);
        }
        return (
            n &&
            ((u = +u || +l || 0),
                (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = o))),
            o
        );
    }
    var _e = {};

    function A(e, t) {
        for (var n, i, o, r, s, a = [], l = 0, c = e.length; l < c; l++)
            (i = e[l]).style &&
            ((n = i.style.display),
                t ?
                ("none" === n &&
                    ((a[l] = _.get(i, "display") || null),
                        a[l] || (i.style.display = "")),
                    "" === i.style.display &&
                    me(i) &&
                    (a[l] =
                        ((s = r = void 0),
                            (r = (o = i).ownerDocument),
                            (o = o.nodeName),
                            (s = _e[o]) ||
                            ((r = r.body.appendChild(r.createElement(o))),
                                (s = E.css(r, "display")),
                                r.parentNode.removeChild(r),
                                (_e[o] = s = "none" === s ? "block" : s))))) :
                "none" !== n && ((a[l] = "none"), _.set(i, "display", n)));
        for (l = 0; l < c; l++) null != a[l] && (e[l].style.display = a[l]);
        return e;
    }
    E.fn.extend({
        show: function() {
            return A(this, !0);
        },
        hide: function() {
            return A(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ?
                e ?
                this.show() :
                this.hide() :
                this.each(function() {
                    me(this) ? E(this).show() : E(this).hide();
                });
        },
    });
    var we = /^(?:checkbox|radio)$/i,
        xe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ee = /^$|^module$|\/(?:java|ecma)script/i,
        S =
        ((O = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (s = x.createElement("input")).setAttribute("type", "radio"),
            s.setAttribute("checked", "checked"),
            s.setAttribute("name", "t"),
            O.appendChild(s),
            (m.checkClone = O.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (O.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!O.cloneNode(!0).lastChild.defaultValue),
            (O.innerHTML = "<option></option>"),
            (m.option = !!O.lastChild), {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            });

    function L(e, t) {
        var n =
            void 0 !== e.getElementsByTagName ?
            e.getElementsByTagName(t || "*") :
            void 0 !== e.querySelectorAll ?
            e.querySelectorAll(t || "*") :
            [];
        return void 0 === t || (t && l(e, t)) ? E.merge([e], n) : n;
    }

    function Te(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
    }
    (S.tbody = S.tfoot = S.colgroup = S.caption = S.thead),
    (S.th = S.td),
    m.option ||
        (S.optgroup = S.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ke = /<|&#?\w+;/;

    function Ce(e, t, n, i, o) {
        for (
            var r,
                s,
                a,
                l,
                c,
                u = t.createDocumentFragment(),
                h = [],
                d = 0,
                f = e.length; d < f; d++
        )
            if ((r = e[d]) || 0 === r)
                if ("object" === p(r)) E.merge(h, r.nodeType ? [r] : r);
                else if (ke.test(r)) {
            for (
                s = s || u.appendChild(t.createElement("div")),
                a = (xe.exec(r) || ["", ""])[1].toLowerCase(),
                a = S[a] || S._default,
                s.innerHTML = a[1] + E.htmlPrefilter(r) + a[2],
                c = a[0]; c--;

            )
                s = s.lastChild;
            E.merge(h, s.childNodes), ((s = u.firstChild).textContent = "");
        } else h.push(t.createTextNode(r));
        for (u.textContent = "", d = 0;
            (r = h[d++]);)
            if (i && -1 < E.inArray(r, i)) o && o.push(r);
            else if (((l = C(r)), (s = L(u.appendChild(r), "script")), l && Te(s), n))
            for (c = 0;
                (r = s[c++]);) Ee.test(r.type || "") && n.push(r);
        return u;
    }
    var Ae = /^([^.]*)(?:\.(.+)|)/;

    function n() {
        return !0;
    }

    function f() {
        return !1;
    }

    function Se(e, t) {
        return (
            (e ===
                (function() {
                    try {
                        return x.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }

    function Le(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
                Le(e, a, n, i, t[a], r);
            return e;
        }
        if (
            (null == i && null == o ?
                ((o = n), (i = n = void 0)) :
                null == o &&
                ("string" == typeof n ?
                    ((o = i), (i = void 0)) :
                    ((o = i), (i = n), (n = void 0))), !1 === o)
        )
            o = f;
        else if (!o) return e;
        return (
            1 === r &&
            ((s = o),
                ((o = function(e) {
                    return E().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = E.guid++))),
            e.each(function() {
                E.event.add(this, t, o, i, n);
            })
        );
    }

    function De(e, o, r) {
        r
            ?
            (_.set(e, o, !1),
                E.event.add(e, o, {
                    namespace: !1,
                    handler: function(e) {
                        var t,
                            n,
                            i = _.get(this, o);
                        if (1 & e.isTrigger && this[o]) {
                            if (i.length)
                                (E.event.special[o] || {}).delegateType && e.stopPropagation();
                            else if (
                                ((i = a.call(arguments)),
                                    _.set(this, o, i),
                                    (t = r(this, o)),
                                    this[o](),
                                    i !== (n = _.get(this, o)) || t ? _.set(this, o, !1) : (n = {}),
                                    i !== n)
                            )
                                return (
                                    e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                                );
                        } else
                            i.length &&
                            (_.set(this, o, {
                                    value: E.event.trigger(
                                        E.extend(i[0], E.Event.prototype),
                                        i.slice(1),
                                        this
                                    ),
                                }),
                                e.stopImmediatePropagation());
                    },
                })) :
            void 0 === _.get(e, o) && E.event.add(e, o, n);
    }
    (E.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p = _.get(t);
            if (v(t))
                for (
                    n.handler && ((n = (r = n).handler), (o = r.selector)),
                    o && E.find.matchesSelector(k, o),
                    n.guid || (n.guid = E.guid++),
                    (a = p.events) || (a = p.events = Object.create(null)),
                    (s = p.handle) ||
                    (s = p.handle =
                        function(e) {
                            return void 0 !== E && E.event.triggered !== e.type ?
                                E.event.dispatch.apply(t, arguments) :
                                void 0;
                        }),
                    l = (e = (e || "").match(T) || [""]).length; l--;

                )
                    (h = f = (d = Ae.exec(e[l]) || [])[1]),
                    (d = (d[2] || "").split(".").sort()),
                    h &&
                    ((c = E.event.special[h] || {}),
                        (h = (o ? c.delegateType : c.bindType) || h),
                        (c = E.event.special[h] || {}),
                        (f = E.extend({
                                type: h,
                                origType: f,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && E.expr.match.needsContext.test(o),
                                namespace: d.join("."),
                            },
                            r
                        )),
                        (u = a[h]) ||
                        (((u = a[h] = []).delegateCount = 0),
                            (c.setup && !1 !== c.setup.call(t, i, d, s)) ||
                            (t.addEventListener && t.addEventListener(h, s))),
                        c.add &&
                        (c.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)),
                        o ? u.splice(u.delegateCount++, 0, f) : u.push(f),
                        (E.event.global[h] = !0));
        },
        remove: function(e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                g,
                m = _.hasData(e) && _.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(T) || [""]).length; c--;)
                    if (
                        ((f = g = (a = Ae.exec(t[c]) || [])[1]),
                            (p = (a[2] || "").split(".").sort()),
                            f)
                    ) {
                        for (
                            h = E.event.special[f] || {},
                            d = l[(f = (i ? h.delegateType : h.bindType) || f)] || [],
                            a =
                            a[2] &&
                            new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = r = d.length; r--;

                        )
                            (u = d[r]),
                            (!o && g !== u.origType) ||
                            (n && n.guid !== u.guid) ||
                            (a && !a.test(u.namespace)) ||
                            (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                            (d.splice(r, 1),
                                u.selector && d.delegateCount--,
                                h.remove && h.remove.call(e, u));
                        s &&
                            !d.length &&
                            ((h.teardown && !1 !== h.teardown.call(e, p, m.handle)) ||
                                E.removeEvent(e, f, m.handle),
                                delete l[f]);
                    } else
                        for (f in l) E.event.remove(e, f + t[c], n, i, !0);
                E.isEmptyObject(l) && _.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t,
                n,
                i,
                o,
                r,
                s = new Array(arguments.length),
                a = E.event.fix(e),
                e = (_.get(this, "events") || Object.create(null))[a.type] || [],
                l = E.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (
                ((a.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, a))
            ) {
                for (
                    r = E.event.handlers.call(this, a, e), t = 0;
                    (i = r[t++]) && !a.isPropagationStopped();

                )
                    for (
                        a.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

                    )
                        (a.rnamespace &&
                            !1 !== o.namespace &&
                            !a.rnamespace.test(o.namespace)) ||
                        ((a.handleObj = o),
                            (a.data = o.data),
                            void 0 !==
                            (o = (
                                (E.event.special[o.origType] || {}).handle || o.handler
                            ).apply(i.elem, s)) &&
                            !1 === (a.result = o) &&
                            (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n,
                i,
                o,
                r,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[(o = (i = t[n]).selector + " ")] &&
                            (s[o] = i.needsContext ?
                                -1 < E(o, this).index(c) :
                                E.find(o, this, null, [c]).length),
                            s[o] && r.push(i);
                        r.length && a.push({ elem: c, handlers: r });
                    }
            return (
                (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
            );
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ?

                    function() {
                        if (this.originalEvent) return e(this.originalEvent);
                    } :
                    function() {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function(e) {
                    e = this || e;
                    return (
                        we.test(e.type) && e.click && l(e, "input") && De(e, "click", n), !1
                    );
                },
                trigger: function(e) {
                    e = this || e;
                    return (
                        we.test(e.type) && e.click && l(e, "input") && De(e, "click"), !0
                    );
                },
                _default: function(e) {
                    e = e.target;
                    return (
                        (we.test(e.type) &&
                            e.click &&
                            l(e, "input") &&
                            _.get(e, "click")) ||
                        l(e, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
    (E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ?
            ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue) ?
                    n :
                    f),
                (this.target =
                    e.target && 3 === e.target.nodeType ?
                    e.target.parentNode :
                    e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget)) :
            (this.type = e),
            t && E.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = n),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = n),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = n),
            e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
        },
    }),
    E.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            E.event.addProp
        ),
        E.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            E.event.special[e] = {
                setup: function() {
                    return De(this, e, Se), !1;
                },
                trigger: function() {
                    return De(this, e), !0;
                },
                _default: function() {
                    return !0;
                },
                delegateType: t,
            };
        }),
        E.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function(e, o) {
                E.event.special[e] = {
                    delegateType: o,
                    bindType: o,
                    handle: function(e) {
                        var t,
                            n = e.relatedTarget,
                            i = e.handleObj;
                        return (
                            (n && (n === this || E.contains(this, n))) ||
                            ((e.type = i.origType),
                                (t = i.handler.apply(this, arguments)),
                                (e.type = o)),
                            t
                        );
                    },
                };
            }
        ),
        E.fn.extend({
            on: function(e, t, n, i) {
                return Le(this, e, t, n, i);
            },
            one: function(e, t, n, i) {
                return Le(this, e, t, n, i, 1);
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        E(e.delegateTarget).off(
                            i.namespace ? i.origType + "." + i.namespace : i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)), !1 === n && (n = f),
                        this.each(function() {
                            E.event.remove(this, e, n, t);
                        })
                    );
                for (o in e) this.off(o, t, e[o]);
                return this;
            },
        });
    var Ne = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) {
        return (
            (l(e, "table") &&
                l(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
            e
        );
    }

    function Pe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }

    function He(e) {
        return (
            "true/" === (e.type || "").slice(0, 5) ?
            (e.type = e.type.slice(5)) :
            e.removeAttribute("type"),
            e
        );
    }

    function Me(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (r = _.get(e).events))
                for (o in (_.remove(t, "handle events"), r))
                    for (n = 0, i = r[o].length; n < i; n++) E.event.add(t, o, r[o][n]);
            c.hasData(e) && ((e = c.access(e)), (e = E.extend({}, e)), c.set(t, e));
        }
    }

    function D(n, i, o, r) {
        i = q(i);
        var e,
            t,
            s,
            a,
            l,
            c,
            u = 0,
            h = n.length,
            d = h - 1,
            f = i[0],
            p = y(f);
        if (p || (1 < h && "string" == typeof f && !m.checkClone && Oe.test(f)))
            return n.each(function(e) {
                var t = n.eq(e);
                p && (i[0] = f.call(this, e, t.html())), D(t, i, o, r);
            });
        if (
            h &&
            ((t = (e = Ce(i, n[0].ownerDocument, !1, n, r)).firstChild),
                1 === e.childNodes.length && (e = t),
                t || r)
        ) {
            for (a = (s = E.map(L(e, "script"), Pe)).length; u < h; u++)
                (l = e),
                u !== d &&
                ((l = E.clone(l, !0, !0)), a && E.merge(s, L(l, "script"))),
                o.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, E.map(s, He), u = 0; u < a; u++)
                    (l = s[u]),
                    Ee.test(l.type || "") &&
                    !_.access(l, "globalEval") &&
                    E.contains(c, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase() ?
                        E._evalUrl &&
                        !l.noModule &&
                        E._evalUrl(
                            l.src, { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                        ) :
                        V(l.textContent.replace(je, ""), l, c));
        }
        return n;
    }

    function qe(e, t, n) {
        for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || E.cleanData(L(i)),
            i.parentNode &&
            (n && C(i) && Te(L(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    E.extend({
            htmlPrefilter: function(e) {
                return e;
            },
            clone: function(e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = e.cloneNode(!0),
                    h = C(e);
                if (!(
                        m.noCloneChecked ||
                        (1 !== e.nodeType && 11 !== e.nodeType) ||
                        E.isXMLDoc(e)
                    ))
                    for (s = L(u), i = 0, o = (r = L(e)).length; i < o; i++)
                        (a = r[i]),
                        (l = s[i]),
                        (c = void 0),
                        "input" === (c = l.nodeName.toLowerCase()) && we.test(a.type) ?
                        (l.checked = a.checked) :
                        ("input" !== c && "textarea" !== c) ||
                        (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (r = r || L(e), s = s || L(u), i = 0, o = r.length; i < o; i++)
                            Me(r[i], s[i]);
                    else Me(e, u);
                return 0 < (s = L(u, "script")).length && Te(s, !h && L(e, "script")), u;
            },
            cleanData: function(e) {
                for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (v(n)) {
                        if ((t = n[_.expando])) {
                            if (t.events)
                                for (i in t.events)
                                    o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                            n[_.expando] = void 0;
                        }
                        n[c.expando] && (n[c.expando] = void 0);
                    }
            },
        }),
        E.fn.extend({
            detach: function(e) {
                return qe(this, e, !0);
            },
            remove: function(e) {
                return qe(this, e);
            },
            text: function(e) {
                return h(
                    this,
                    function(e) {
                        return void 0 === e ?
                            E.text(this) :
                            this.empty().each(function() {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function() {
                return D(this, arguments, function(e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                    Ie(this, e).appendChild(e);
                });
            },
            prepend: function() {
                return D(this, arguments, function(e) {
                    var t;
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                    (t = Ie(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (E.cleanData(L(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function(e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function() {
                        return E.clone(this, e, t);
                    })
                );
            },
            html: function(e) {
                return h(
                    this,
                    function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Ne.test(e) &&
                            !S[(xe.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                    (E.cleanData(L(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function() {
                var n = [];
                return D(
                    this,
                    arguments,
                    function(e) {
                        var t = this.parentNode;
                        E.inArray(this, n) < 0 &&
                            (E.cleanData(L(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        E.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function(e, s) {
                E.fn[e] = function(e) {
                    for (var t, n = [], i = E(e), o = i.length - 1, r = 0; r <= o; r++)
                        (t = r === o ? this : this.clone(!0)),
                        E(i[r])[s](t),
                        R.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );

    function Re(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : w).getComputedStyle(e);
    }

    function Be(e, t, n) {
        var i,
            o = {};
        for (i in t)(o[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((n = n.call(e)), t)) e.style[i] = o[i];
        return n;
    }
    var We,
        Fe,
        ze,
        $e,
        Ue,
        Xe,
        Ve,
        o,
        Ye = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Qe = new RegExp(d.join("|"), "i");

    function Ge() {
        var e;
        o &&
            ((Ve.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (o.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                k.appendChild(Ve).appendChild(o),
                (e = w.getComputedStyle(o)),
                (We = "1%" !== e.top),
                (Xe = 12 === Ke(e.marginLeft)),
                (o.style.right = "60%"),
                ($e = 36 === Ke(e.right)),
                (Fe = 36 === Ke(e.width)),
                (o.style.position = "absolute"),
                (ze = 12 === Ke(o.offsetWidth / 3)),
                k.removeChild(Ve),
                (o = null));
    }

    function Ke(e) {
        return Math.round(parseFloat(e));
    }

    function Je(e, t, n) {
        var i,
            o,
            r = e.style;
        return (
            (n = n || Re(e)) &&
            ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                C(e) ||
                (o = E.style(e, t)), !m.pixelBoxStyles() &&
                Ye.test(o) &&
                Qe.test(t) &&
                ((e = r.width),
                    (t = r.minWidth),
                    (i = r.maxWidth),
                    (r.minWidth = r.maxWidth = r.width = o),
                    (o = n.width),
                    (r.width = e),
                    (r.minWidth = t),
                    (r.maxWidth = i))),
            void 0 !== o ? o + "" : o
        );
    }

    function Ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    (Ve = x.createElement("div")),
    (o = x.createElement("div")).style &&
        ((o.style.backgroundClip = "content-box"),
            (o.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === o.style.backgroundClip),
            E.extend(m, {
                boxSizingReliable: function() {
                    return Ge(), Fe;
                },
                pixelBoxStyles: function() {
                    return Ge(), $e;
                },
                pixelPosition: function() {
                    return Ge(), We;
                },
                reliableMarginLeft: function() {
                    return Ge(), Xe;
                },
                scrollboxSize: function() {
                    return Ge(), ze;
                },
                reliableTrDimensions: function() {
                    var e, t, n;
                    return (
                        null == Ue &&
                        ((e = x.createElement("table")),
                            (t = x.createElement("tr")),
                            (n = x.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            k.appendChild(e).appendChild(t).appendChild(n),
                            (n = w.getComputedStyle(t)),
                            (Ue =
                                parseInt(n.height, 10) +
                                parseInt(n.borderTopWidth, 10) +
                                parseInt(n.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            k.removeChild(e)),
                        Ue
                    );
                },
            }));
    var et = ["Webkit", "Moz", "ms"],
        tt = x.createElement("div").style,
        nt = {};

    function it(e) {
        var t = E.cssProps[e] || nt[e];
        return (
            t ||
            (e in tt ?
                e :
                (nt[e] =
                    (function(e) {
                        for (
                            var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;

                        )
                            if ((e = et[n] + t) in tt) return e;
                    })(e) || e))
        );
    }
    var ot = /^(none|table(?!-c[ea]).+)/,
        rt = /^--/,
        st = { position: "absolute", visibility: "hidden", display: "block" },
        at = { letterSpacing: "0", fontWeight: "400" };

    function lt(e, t, n) {
        var i = ve.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function ct(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += E.css(e, n + d[s], !0, o)),
            i ?
            ("content" === n && (l -= E.css(e, "padding" + d[s], !0, o)),
                "margin" !== n && (l -= E.css(e, "border" + d[s] + "Width", !0, o))) :
            ((l += E.css(e, "padding" + d[s], !0, o)),
                "padding" !== n ?
                (l += E.css(e, "border" + d[s] + "Width", !0, o)) :
                (a += E.css(e, "border" + d[s] + "Width", !0, o)));
        return (!i &&
            0 <= r &&
            (l +=
                Math.max(
                    0,
                    Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5
                    )
                ) || 0),
            l
        );
    }

    function ut(e, t, n) {
        var i = Re(e),
            o =
            (!m.boxSizingReliable() || n) &&
            "border-box" === E.css(e, "boxSizing", !1, i),
            r = o,
            s = Je(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ye.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (
            ((!m.boxSizingReliable() && o) ||
                (!m.reliableTrDimensions() && l(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === E.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((o = "border-box" === E.css(e, "boxSizing", !1, i)),
                (r = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) +
            ct(e, t, n || (o ? "border" : "content"), r, i, s) +
            "px"
        );
    }

    function r(e, t, n, i, o) {
        return new r.prototype.init(e, t, n, i, o);
    }
    E.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) return "" === (t = Je(e, "opacity")) ? "1" : t;
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o,
                        r,
                        s,
                        a = b(t),
                        l = rt.test(t),
                        c = e.style;
                    if (
                        (l || (t = it(a)), (s = E.cssHooks[t] || E.cssHooks[a]), void 0 === n)
                    )
                        return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    "string" === (r = typeof n) &&
                    (o = ve.exec(n)) &&
                    o[1] &&
                        ((n = be(e, t, o)), (r = "number")),
                        null != n &&
                        n == n &&
                        ("number" !== r ||
                            l ||
                            (n += (o && o[3]) || (E.cssNumber[a] ? "" : "px")),
                            m.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (c[t] = "inherit"),
                            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                            (l ? c.setProperty(t, n) : (c[t] = n)));
                }
            },
            css: function(e, t, n, i) {
                var o,
                    r = b(t);
                return (
                    rt.test(t) || (t = it(r)),
                    "normal" ===
                    (o =
                        void 0 ===
                        (o =
                            (r = E.cssHooks[t] || E.cssHooks[r]) && "get" in r ?
                            r.get(e, !0, n) :
                            o) ?
                        Je(e, t, i) :
                        o) &&
                    t in at &&
                    (o = at[t]),
                    "" === n || n ?
                    ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) :
                    o
                );
            },
        }),
        E.each(["height", "width"], function(e, s) {
            E.cssHooks[s] = {
                get: function(e, t, n) {
                    if (t)
                        return !ot.test(E.css(e, "display")) ||
                            (e.getClientRects().length && e.getBoundingClientRect().width) ?
                            ut(e, s, n) :
                            Be(e, st, function() {
                                return ut(e, s, n);
                            });
                },
                set: function(e, t, n) {
                    var i = Re(e),
                        o = !m.scrollboxSize() && "absolute" === i.position,
                        r = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                        n = n ? ct(e, s, n, r, i) : 0;
                    return (
                        r &&
                        o &&
                        (n -= Math.ceil(
                            e["offset" + s[0].toUpperCase() + s.slice(1)] -
                            parseFloat(i[s]) -
                            ct(e, s, "border", !1, i) -
                            0.5
                        )),
                        n &&
                        (r = ve.exec(t)) &&
                        "px" !== (r[3] || "px") &&
                        ((e.style[s] = t), (t = E.css(e, s))),
                        lt(0, t, n)
                    );
                },
            };
        }),
        (E.cssHooks.marginLeft = Ze(m.reliableMarginLeft, function(e, t) {
            if (t)
                return (
                    (parseFloat(Je(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        Be(e, { marginLeft: 0 }, function() {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        E.each({ margin: "", padding: "", border: "Width" }, function(o, r) {
            (E.cssHooks[o + r] = {
                expand: function(e) {
                    for (
                        var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++
                    )
                        n[o + d[t] + r] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
            "margin" !== o && (E.cssHooks[o + r].set = lt);
        }),
        E.fn.extend({
            css: function(e, t) {
                return h(
                    this,
                    function(e, t, n) {
                        var i,
                            o,
                            r = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = Re(e), o = t.length; s < o; s++)
                                r[t[s]] = E.css(e, t[s], !1, i);
                            return r;
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((E.Tween = r).prototype = {
            constructor: r,
            init: function(e, t, n, i, o, r) {
                (this.elem = e),
                (this.prop = n),
                (this.easing = o || E.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = r || (E.cssNumber[n] ? "" : "px"));
            },
            cur: function() {
                var e = r.propHooks[this.prop];
                return (e && e.get ? e : r.propHooks._default).get(this);
            },
            run: function(e) {
                var t,
                    n = r.propHooks[this.prop];
                return (
                    this.options.duration ?
                    (this.pos = t =
                        E.easing[this.easing](
                            e,
                            this.options.duration * e,
                            0,
                            1,
                            this.options.duration
                        )) :
                    (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : r.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = r.prototype),
        ((r.propHooks = {
            _default: {
                get: function(e) {
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ?
                        e.elem[e.prop] :
                        (e = E.css(e.elem, e.prop, "")) && "auto" !== e ?
                        e :
                        0;
                },
                set: function(e) {
                    E.fx.step[e.prop] ?
                        E.fx.step[e.prop](e) :
                        1 !== e.elem.nodeType ||
                        (!E.cssHooks[e.prop] && null == e.elem.style[it(e.prop)]) ?
                        (e.elem[e.prop] = e.now) :
                        E.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = r.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (E.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (E.fx = r.prototype.init),
        (E.fx.step = {});
    var N,
        ht,
        s,
        O,
        dt = /^(?:toggle|show|hide)$/,
        ft = /queueHooks$/;

    function pt() {
        ht &&
            (!1 === x.hidden && w.requestAnimationFrame ?
                w.requestAnimationFrame(pt) :
                w.setTimeout(pt, E.fx.interval),
                E.fx.tick());
    }

    function gt() {
        return (
            w.setTimeout(function() {
                N = void 0;
            }),
            (N = Date.now())
        );
    }

    function mt(e, t) {
        var n,
            i = 0,
            o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = d[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }

    function vt(e, t, n) {
        for (
            var i,
                o = (j.tweeners[t] || []).concat(j.tweeners["*"]),
                r = 0,
                s = o.length; r < s; r++
        )
            if ((i = o[r].call(n, t, e))) return i;
    }

    function j(o, e, t) {
        var n,
            r,
            i,
            s,
            a,
            l,
            c,
            u = 0,
            h = j.prefilters.length,
            d = E.Deferred().always(function() {
                delete f.elem;
            }),
            f = function() {
                if (r) return !1;
                for (
                    var e = N || gt(),
                        e = Math.max(0, p.startTime + p.duration - e),
                        t = 1 - (e / p.duration || 0),
                        n = 0,
                        i = p.tweens.length; n < i; n++
                )
                    p.tweens[n].run(t);
                return (
                    d.notifyWith(o, [p, t, e]),
                    t < 1 && i ?
                    e :
                    (i || d.notifyWith(o, [p, 1, 0]), d.resolveWith(o, [p]), !1)
                );
            },
            p = d.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: N || gt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    t = E.Tween(
                        o,
                        p.opts,
                        e,
                        t,
                        p.opts.specialEasing[e] || p.opts.easing
                    );
                    return p.tweens.push(t), t;
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? p.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < n; t++) p.tweens[t].run(1);
                    return (
                        e ?
                        (d.notifyWith(o, [p, 1, 0]), d.resolveWith(o, [p, e])) :
                        d.rejectWith(o, [p, e]),
                        this
                    );
                },
            }),
            g = p.props,
            m = g,
            v = p.opts.specialEasing;
        for (i in m)
            if (
                ((a = v[(s = b(i))]),
                    (l = m[i]),
                    Array.isArray(l) && ((a = l[1]), (l = m[i] = l[0])),
                    i !== s && ((m[s] = l), delete m[i]),
                    (c = E.cssHooks[s]) && "expand" in c)
            )
                for (i in ((l = c.expand(l)), delete m[s], l))
                    i in m || ((m[i] = l[i]), (v[i] = a));
            else v[s] = a;
        for (; u < h; u++)
            if ((n = j.prefilters[u].call(p, o, g, p.opts)))
                return (
                    y(n.stop) &&
                    (E._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)),
                    n
                );
        return (
            E.map(g, vt, p),
            y(p.opts.start) && p.opts.start.call(o, p),
            p
            .progress(p.opts.progress)
            .done(p.opts.done, p.opts.complete)
            .fail(p.opts.fail)
            .always(p.opts.always),
            E.fx.timer(E.extend(f, { elem: o, anim: p, queue: p.opts.queue })),
            p
        );
    }
    (E.Animation = E.extend(j, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return be(n.elem, e, ve.exec(t), n), n;
                },
            ],
        },
        tweener: function(e, t) {
            for (
                var n, i = 0, o = (e = y(e) ? ((t = e), ["*"]) : e.match(T)).length; i < o; i++
            )
                (n = e[i]),
                (j.tweeners[n] = j.tweeners[n] || []),
                j.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = "width" in t || "height" in t,
                    h = this,
                    d = {},
                    f = e.style,
                    p = e.nodeType && me(e),
                    g = _.get(e, "fxshow");
                for (i in (n.queue ||
                        (null == (s = E._queueHooks(e, "fx")).unqueued &&
                            ((s.unqueued = 0),
                                (a = s.empty.fire),
                                (s.empty.fire = function() {
                                    s.unqueued || a();
                                })),
                            s.unqueued++,
                            h.always(function() {
                                h.always(function() {
                                    s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
                                });
                            })),
                        t))
                    if (((o = t[i]), dt.test(o))) {
                        if (
                            (delete t[i],
                                (r = r || "toggle" === o),
                                o === (p ? "hide" : "show"))
                        ) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            p = !0;
                        }
                        d[i] = (g && g[i]) || E.style(e, i);
                    }
                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                    for (i in (u &&
                            1 === e.nodeType &&
                            ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                                null == (c = g && g.display) && (c = _.get(e, "display")),
                                "none" === (u = E.css(e, "display")) &&
                                (c ?
                                    (u = c) :
                                    (A([e], !0),
                                        (c = e.style.display || c),
                                        (u = E.css(e, "display")),
                                        A([e]))),
                                ("inline" === u || ("inline-block" === u && null != c)) &&
                                "none" === E.css(e, "float") &&
                                (l ||
                                    (h.done(function() {
                                            f.display = c;
                                        }),
                                        null == c && ((u = f.display), (c = "none" === u ? "" : u))),
                                    (f.display = "inline-block"))),
                            n.overflow &&
                            ((f.overflow = "hidden"),
                                h.always(function() {
                                    (f.overflow = n.overflow[0]),
                                    (f.overflowX = n.overflow[1]),
                                    (f.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            d))
                        l ||
                        (g ?
                            "hidden" in g && (p = g.hidden) :
                            (g = _.access(e, "fxshow", { display: c })),
                            r && (g.hidden = !p),
                            p && A([e], !0),
                            h.done(function() {
                                for (i in (p || A([e]), _.remove(e, "fxshow"), d))
                                    E.style(e, i, d[i]);
                            })),
                        (l = vt(p ? g[i] : 0, i, h)),
                        i in g ||
                        ((g[i] = l.start), p && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function(e, t) {
            t ? j.prefilters.unshift(e) : j.prefilters.push(e);
        },
    })),
    (E.speed = function(e, t, n) {
        var i =
            e && "object" == typeof e ?
            E.extend({}, e) :
            {
                complete: n || (!n && t) || (y(e) && e),
                duration: e,
                easing: (n && t) || (t && !y(t) && t),
            };
        return (
            E.fx.off ?
            (i.duration = 0) :
            "number" != typeof i.duration &&
            (i.duration in E.fx.speeds ?
                (i.duration = E.fx.speeds[i.duration]) :
                (i.duration = E.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function() {
                y(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
            }),
            i
        );
    }),
    E.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(me)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
            },
            animate: function(t, e, n, i) {
                function o() {
                    var e = j(this, E.extend({}, t), s);
                    (r || _.get(this, "finish")) && e.stop(!0);
                }
                var r = E.isEmptyObject(t),
                    s = E.speed(e, n, i);
                return (
                    (o.finish = o),
                    r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                );
            },
            stop: function(o, e, r) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(r);
                }
                return (
                    "string" != typeof o && ((r = e), (e = o), (o = void 0)),
                    e && this.queue(o || "fx", []),
                    this.each(function() {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            n = E.timers,
                            i = _.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i) i[t] && i[t].stop && ft.test(t) && s(i[t]);
                        for (t = n.length; t--;)
                            n[t].elem !== this ||
                            (null != o && n[t].queue !== o) ||
                            (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
                        (!e && r) || E.dequeue(this, o);
                    })
                );
            },
            finish: function(s) {
                return (!1 !== s && (s = s || "fx"),
                    this.each(function() {
                        var e,
                            t = _.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            o = E.timers,
                            r = n ? n.length : 0;
                        for (
                            t.finish = !0,
                            E.queue(this, s, []),
                            i && i.stop && i.stop.call(this, !0),
                            e = o.length; e--;

                        )
                            o[e].elem === this &&
                            o[e].queue === s &&
                            (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < r; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        E.each(["toggle", "show", "hide"], function(e, i) {
            var o = E.fn[i];
            E.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ?
                    o.apply(this, arguments) :
                    this.animate(mt(i, !0), e, t, n);
            };
        }),
        E.each({
                slideDown: mt("show"),
                slideUp: mt("hide"),
                slideToggle: mt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function(e, i) {
                E.fn[e] = function(e, t, n) {
                    return this.animate(i, e, t, n);
                };
            }
        ),
        (E.timers = []),
        (E.fx.tick = function() {
            var e,
                t = 0,
                n = E.timers;
            for (N = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), (N = void 0);
        }),
        (E.fx.timer = function(e) {
            E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function() {
            ht || ((ht = !0), pt());
        }),
        (E.fx.stop = function() {
            ht = null;
        }),
        (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (E.fn.delay = function(i, e) {
            return (
                (i = (E.fx && E.fx.speeds[i]) || i),
                this.queue((e = e || "fx"), function(e, t) {
                    var n = w.setTimeout(e, i);
                    t.stop = function() {
                        w.clearTimeout(n);
                    };
                })
            );
        }),
        (s = x.createElement("input")),
        (O = x.createElement("select").appendChild(x.createElement("option"))),
        (s.type = "checkbox"),
        (m.checkOn = "" !== s.value),
        (m.optSelected = O.selected),
        ((s = x.createElement("input")).value = "t"),
        (s.type = "radio"),
        (m.radioValue = "t" === s.value);
    var yt,
        bt = E.expr.attrHandle,
        _t =
        (E.fn.extend({
                attr: function(e, t) {
                    return h(this, E.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        E.removeAttr(this, e);
                    });
                },
            }),
            E.extend({
                attr: function(e, t, n) {
                    var i,
                        o,
                        r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return void 0 === e.getAttribute ?
                            E.prop(e, t, n) :
                            ((1 === r && E.isXMLDoc(e)) ||
                                (o =
                                    E.attrHooks[t.toLowerCase()] ||
                                    (E.expr.match.bool.test(t) ? yt : void 0)),
                                void 0 !== n ?
                                null === n ?
                                void E.removeAttr(e, t) :
                                o && "set" in o && void 0 !== (i = o.set(e, n, t)) ?
                                i :
                                (e.setAttribute(t, n + ""), n) :
                                !(o && "get" in o && null !== (i = o.get(e, t))) &&
                                null == (i = E.find.attr(e, t)) ?
                                void 0 :
                                i);
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            var n;
                            if (!m.radioValue && "radio" === t && l(e, "input"))
                                return (
                                    (n = e.value),
                                    e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                );
                        },
                    },
                },
                removeAttr: function(e, t) {
                    var n,
                        i = 0,
                        o = t && t.match(T);
                    if (o && 1 === e.nodeType)
                        for (;
                            (n = o[i++]);) e.removeAttribute(n);
                },
            }),
            (yt = {
                set: function(e, t, n) {
                    return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
                },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var s = bt[t] || E.find.attr;
                bt[t] = function(e, t, n) {
                    var i,
                        o,
                        r = t.toLowerCase();
                    return (
                        n ||
                        ((o = bt[r]),
                            (bt[r] = i),
                            (i = null != s(e, t, n) ? r : null),
                            (bt[r] = o)),
                        i
                    );
                };
            }),
            /^(?:input|select|textarea|button)$/i),
        wt = /^(?:a|area)$/i;

    function I(e) {
        return (e.match(T) || []).join(" ");
    }

    function P(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }

    function xt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(T)) || [];
    }
    E.fn.extend({
            prop: function(e, t) {
                return h(this, E.prop, e, t, 1 < arguments.length);
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[E.propFix[e] || e];
                });
            },
        }),
        E.extend({
            prop: function(e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && E.isXMLDoc(e)) ||
                        ((t = E.propFix[t] || t), (o = E.propHooks[t])),
                        void 0 !== n ?
                        o && "set" in o && void 0 !== (i = o.set(e, n, t)) ?
                        i :
                        (e[t] = n) :
                        o && "get" in o && null !== (i = o.get(e, t)) ?
                        i :
                        e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ?
                            parseInt(t, 10) :
                            _t.test(e.nodeName) || (wt.test(e.nodeName) && e.href) ?
                            0 :
                            -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
        (E.propHooks.selected = {
            get: function(e) {
                e = e.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function(e) {
                e = e.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
        }),
        E.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function() {
                E.propFix[this.toLowerCase()] = this;
            }
        ),
        E.fn.extend({
            addClass: function(t) {
                var e,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = 0;
                if (y(t))
                    return this.each(function(e) {
                        E(this).addClass(t.call(this, e, P(this)));
                    });
                if ((e = xt(t)).length)
                    for (;
                        (n = this[a++]);)
                        if (((s = P(n)), (i = 1 === n.nodeType && " " + I(s) + " "))) {
                            for (r = 0;
                                (o = e[r++]);)
                                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s !== (s = I(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function(t) {
                var e,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = 0;
                if (y(t))
                    return this.each(function(e) {
                        E(this).removeClass(t.call(this, e, P(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = xt(t)).length)
                    for (;
                        (n = this[a++]);)
                        if (((s = P(n)), (i = 1 === n.nodeType && " " + I(s) + " "))) {
                            for (r = 0;
                                (o = e[r++]);)
                                for (; - 1 < i.indexOf(" " + o + " ");)
                                    i = i.replace(" " + o + " ", " ");
                            s !== (s = I(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function(o, t) {
                var r = typeof o,
                    s = "string" == r || Array.isArray(o);
                return "boolean" == typeof t && s ?
                    t ?
                    this.addClass(o) :
                    this.removeClass(o) :
                    y(o) ?
                    this.each(function(e) {
                        E(this).toggleClass(o.call(this, e, P(this), t), t);
                    }) :
                    this.each(function() {
                        var e, t, n, i;
                        if (s)
                            for (t = 0, n = E(this), i = xt(o);
                                (e = i[t++]);)
                                n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else
                            (void 0 !== o && "boolean" != r) ||
                            ((e = P(this)) && _.set(this, "__className__", e),
                                this.setAttribute &&
                                this.setAttribute(
                                    "class",
                                    (!e && !1 !== o && _.get(this, "__className__")) || ""
                                ));
                    });
            },
            hasClass: function(e) {
                for (var t, n = 0, i = " " + e + " ";
                    (t = this[n++]);)
                    if (1 === t.nodeType && -1 < (" " + I(P(t)) + " ").indexOf(i))
                        return !0;
                return !1;
            },
        });

    function Et(e) {
        e.stopPropagation();
    }
    var Tt = /\r/g,
        kt =
        (E.fn.extend({
                val: function(t) {
                    var n,
                        e,
                        i,
                        o = this[0];
                    return arguments.length ?
                        ((i = y(t)),
                            this.each(function(e) {
                                1 === this.nodeType &&
                                    (null == (e = i ? t.call(this, e, E(this).val()) : t) ?
                                        (e = "") :
                                        "number" == typeof e ?
                                        (e += "") :
                                        Array.isArray(e) &&
                                        (e = E.map(e, function(e) {
                                            return null == e ? "" : e + "";
                                        })),
                                        ((n =
                                                E.valHooks[this.type] ||
                                                E.valHooks[this.nodeName.toLowerCase()]) &&
                                            "set" in n &&
                                            void 0 !== n.set(this, e, "value")) ||
                                        (this.value = e));
                            })) :
                        o ?
                        (n =
                            E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) &&
                        "get" in n &&
                        void 0 !== (e = n.get(o, "value")) ?
                        e :
                        "string" == typeof(e = o.value) ?
                        e.replace(Tt, "") :
                        null == e ?
                        "" :
                        e :
                        void 0;
                },
            }),
            E.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = E.find.attr(e, "value");
                            return null != t ? t : I(E.text(e));
                        },
                    },
                    select: {
                        get: function(e) {
                            for (
                                var t,
                                    n = e.options,
                                    i = e.selectedIndex,
                                    o = "select-one" === e.type,
                                    r = o ? null : [],
                                    s = o ? i + 1 : n.length,
                                    a = i < 0 ? s : o ? i : 0; a < s; a++
                            )
                                if (
                                    ((t = n[a]).selected || a === i) &&
                                    !t.disabled &&
                                    (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))
                                ) {
                                    if (((t = E(t).val()), o)) return t;
                                    r.push(t);
                                }
                            return r;
                        },
                        set: function(e, t) {
                            for (
                                var n, i, o = e.options, r = E.makeArray(t), s = o.length; s--;

                            )
                                ((i = o[s]).selected = -1 < E.inArray(E.valHooks.option.get(i), r)) && (n = !0);
                            return n || (e.selectedIndex = -1), r;
                        },
                    },
                },
            }),
            E.each(["radio", "checkbox"], function() {
                (E.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t))
                            return (e.checked = -1 < E.inArray(E(e).val(), t));
                    },
                }),
                m.checkOn ||
                    (E.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
            }),
            (m.focusin = "onfocusin" in w),
            /^(?:focusinfocus|focusoutblur)$/),
        Ct =
        (E.extend(E.event, {
                trigger: function(e, t, n, i) {
                    var o,
                        r,
                        s,
                        a,
                        l,
                        c,
                        u,
                        h = [n || x],
                        d = z.call(e, "type") ? e.type : e,
                        f = z.call(e, "namespace") ? e.namespace.split(".") : [],
                        p = (u = r = n = n || x);
                    if (
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !kt.test(d + E.event.triggered) &&
                        (-1 < d.indexOf(".") &&
                            ((d = (f = d.split(".")).shift()), f.sort()),
                            (a = d.indexOf(":") < 0 && "on" + d),
                            ((e = e[E.expando] ?
                                    e :
                                    new E.Event(d, "object" == typeof e && e)).isTrigger = i ?
                                2 :
                                3),
                            (e.namespace = f.join(".")),
                            (e.rnamespace = e.namespace ?
                                new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                                null),
                            (e.result = void 0),
                            e.target || (e.target = n),
                            (t = null == t ? [e] : E.makeArray(t, [e])),
                            (c = E.event.special[d] || {}),
                            i || !c.trigger || !1 !== c.trigger.apply(n, t))
                    ) {
                        if (!i && !c.noBubble && !g(n)) {
                            for (
                                s = c.delegateType || d, kt.test(s + d) || (p = p.parentNode); p; p = p.parentNode
                            )
                                h.push(p), (r = p);
                            r === (n.ownerDocument || x) &&
                                h.push(r.defaultView || r.parentWindow || w);
                        }
                        for (o = 0;
                            (p = h[o++]) && !e.isPropagationStopped();)
                            (u = p),
                            (e.type = 1 < o ? s : c.bindType || d),
                            (l =
                                (_.get(p, "events") || Object.create(null))[e.type] &&
                                _.get(p, "handle")) && l.apply(p, t),
                            (l = a && p[a]) &&
                            l.apply &&
                            v(p) &&
                            ((e.result = l.apply(p, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = d),
                            i ||
                            e.isDefaultPrevented() ||
                            (c._default && !1 !== c._default.apply(h.pop(), t)) ||
                            !v(n) ||
                            (a &&
                                y(n[d]) &&
                                !g(n) &&
                                ((r = n[a]) && (n[a] = null),
                                    (E.event.triggered = d),
                                    e.isPropagationStopped() && u.addEventListener(d, Et),
                                    n[d](),
                                    e.isPropagationStopped() && u.removeEventListener(d, Et),
                                    (E.event.triggered = void 0),
                                    r && (n[a] = r))),
                            e.result
                        );
                    }
                },
                simulate: function(e, t, n) {
                    n = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
                    E.event.trigger(n, null, t);
                },
            }),
            E.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        E.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return E.event.trigger(e, t, n, !0);
                },
            }),
            m.focusin ||
            E.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
                function o(e) {
                    E.event.simulate(i, e.target, E.event.fix(e));
                }
                E.event.special[i] = {
                    setup: function() {
                        var e = this.ownerDocument || this.document || this,
                            t = _.access(e, i);
                        t || e.addEventListener(n, o, !0), _.access(e, i, (t || 0) + 1);
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this.document || this,
                            t = _.access(e, i) - 1;
                        t
                            ?
                            _.access(e, i, t) :
                            (e.removeEventListener(n, o, !0), _.remove(e, i));
                    },
                };
            }),
            w.location),
        At = { guid: Date.now() },
        St = /\?/,
        Lt =
        ((E.parseXML = function(e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new w.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {}
                return (
                    (n = t && t.getElementsByTagName("parsererror")[0]),
                    (t && !n) ||
                    E.error(
                        "Invalid XML: " +
                        (n ?
                            E.map(n.childNodes, function(e) {
                                return e.textContent;
                            }).join("\n") :
                            e)
                    ),
                    t
                );
            }),
            /\[\]$/),
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    (E.param = function(e, t) {
        function n(e, t) {
            (t = y(t) ? t() : t),
            (o[o.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
        }
        var i,
            o = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
            E.each(e, function() {
                n(this.name, this.value);
            });
        else
            for (i in e)
                !(function n(i, e, o, r) {
                    if (Array.isArray(e))
                        E.each(e, function(e, t) {
                            o || Lt.test(i) ?
                                r(i, t) :
                                n(
                                    i +
                                    "[" +
                                    ("object" == typeof t && null != t ? e : "") +
                                    "]",
                                    t,
                                    o,
                                    r
                                );
                        });
                    else if (o || "object" !== p(e)) r(i, e);
                    else
                        for (var t in e) n(i + "[" + t + "]", e[t], o, r);
                })(i, e[i], t, n);
        return o.join("&");
    }),
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this;
                })
                .filter(function() {
                    var e = this.type;
                    return (
                        this.name &&
                        !E(this).is(":disabled") &&
                        Ot.test(this.nodeName) &&
                        !Nt.test(e) &&
                        (this.checked || !we.test(e))
                    );
                })
                .map(function(e, t) {
                    var n = E(this).val();
                    return null == n ?
                        null :
                        Array.isArray(n) ?
                        E.map(n, function(e) {
                            return { name: t.name, value: e.replace(Dt, "\r\n") };
                        }) :
                        { name: t.name, value: n.replace(Dt, "\r\n") };
                })
                .get();
        },
    });
    var jt = /%20/g,
        It = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Rt = {},
        Bt = {},
        Wt = "*/".concat("*"),
        Ft = x.createElement("a");

    function zt(r) {
        return function(e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                o = e.toLowerCase().match(T) || [];
            if (y(t))
                for (;
                    (n = o[i++]);)
                    "+" === n[0] ?
                    ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t)) :
                    (r[n] = r[n] || []).push(t);
        };
    }

    function $t(t, i, o, r) {
        var s = {},
            a = t === Bt;

        function l(e) {
            var n;
            return (
                (s[e] = !0),
                E.each(t[e] || [], function(e, t) {
                    t = t(i, o, r);
                    return "string" != typeof t || a || s[t] ?
                        a ?
                        !(n = t) :
                        void 0 :
                        (i.dataTypes.unshift(t), l(t), !1);
                }),
                n
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }

    function Ut(e, t) {
        var n,
            i,
            o = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : (i = i || {}))[n] = t[n]);
        return i && E.extend(!0, e, i), e;
    }
    (Ft.href = Ct.href),
    E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Wt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function(e, t) {
                return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e);
            },
            ajaxPrefilter: zt(Rt),
            ajaxTransport: zt(Bt),
            ajax: function(e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var l,
                    c,
                    u,
                    n,
                    h,
                    d,
                    f,
                    i,
                    p = E.ajaxSetup({}, (t = t || {})),
                    g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? E(g) : E.event,
                    v = E.Deferred(),
                    y = E.Callbacks("once memory"),
                    b = p.statusCode || {},
                    o = {},
                    r = {},
                    s = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (d) {
                                if (!n)
                                    for (n = {};
                                        (t = Ht.exec(u));)
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return d ? u : null;
                        },
                        setRequestHeader: function(e, t) {
                            return (
                                null == d &&
                                ((e = r[e.toLowerCase()] = r[e.toLowerCase()] || e),
                                    (o[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function(e) {
                            return null == d && (p.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            if (e)
                                if (d) _.always(e[_.status]);
                                else
                                    for (var t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function(e) {
                            e = e || s;
                            return l && l.abort(e), a(0, e), this;
                        },
                    };
                if (
                    (v.promise(_),
                        (p.url = ((e || p.url || Ct.href) + "").replace(
                            qt,
                            Ct.protocol + "//"
                        )),
                        (p.type = t.method || t.type || p.method || p.type),
                        (p.dataTypes = (p.dataType || "*").toLowerCase().match(T) || [""]),
                        null == p.crossDomain)
                ) {
                    e = x.createElement("a");
                    try {
                        (e.href = p.url),
                        (e.href = e.href),
                        (p.crossDomain =
                            Ft.protocol + "//" + Ft.host != e.protocol + "//" + e.host);
                    } catch (e) {
                        p.crossDomain = !0;
                    }
                }
                if (
                    (p.data &&
                        p.processData &&
                        "string" != typeof p.data &&
                        (p.data = E.param(p.data, p.traditional)),
                        $t(Rt, p, t, _),
                        d)
                )
                    return _;
                for (i in ((f = E.event && p.global) &&
                        0 == E.active++ &&
                        E.event.trigger("ajaxStart"),
                        (p.type = p.type.toUpperCase()),
                        (p.hasContent = !Mt.test(p.type)),
                        (c = p.url.replace(It, "")),
                        p.hasContent ?
                        p.data &&
                        p.processData &&
                        0 ===
                        (p.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        (p.data = p.data.replace(jt, "+")) :
                        ((e = p.url.slice(c.length)),
                            p.data &&
                            (p.processData || "string" == typeof p.data) &&
                            ((c += (St.test(c) ? "&" : "?") + p.data), delete p.data), !1 === p.cache &&
                            ((c = c.replace(Pt, "$1")),
                                (e = (St.test(c) ? "&" : "?") + "_=" + At.guid++ + e)),
                            (p.url = c + e)),
                        p.ifModified &&
                        (E.lastModified[c] &&
                            _.setRequestHeader("If-Modified-Since", E.lastModified[c]),
                            E.etag[c] && _.setRequestHeader("If-None-Match", E.etag[c])),
                        ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) &&
                        _.setRequestHeader("Content-Type", p.contentType),
                        _.setRequestHeader(
                            "Accept",
                            p.dataTypes[0] && p.accepts[p.dataTypes[0]] ?
                            p.accepts[p.dataTypes[0]] +
                            ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") :
                            p.accepts["*"]
                        ),
                        p.headers))
                    _.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, _, p) || d))
                    return _.abort();
                if (
                    ((s = "abort"),
                        y.add(p.complete),
                        _.done(p.success),
                        _.fail(p.error),
                        (l = $t(Bt, p, t, _)))
                ) {
                    if (((_.readyState = 1), f && m.trigger("ajaxSend", [_, p]), d))
                        return _;
                    p.async &&
                        0 < p.timeout &&
                        (h = w.setTimeout(function() {
                            _.abort("timeout");
                        }, p.timeout));
                    try {
                        (d = !1), l.send(o, a);
                    } catch (e) {
                        if (d) throw e;
                        a(-1, e);
                    }
                } else a(-1, "No Transport");

                function a(e, t, n, i) {
                    var o,
                        r,
                        s,
                        a = t;
                    d ||
                        ((d = !0),
                            h && w.clearTimeout(h),
                            (l = void 0),
                            (u = i || ""),
                            (_.readyState = 0 < e ? 4 : 0),
                            (i = (200 <= e && e < 300) || 304 === e),
                            n &&
                            (s = (function(e, t, n) {
                                for (
                                    var i, o, r, s, a = e.contents, l = e.dataTypes;
                                    "*" === l[0];

                                )
                                    l.shift(),
                                    void 0 === i &&
                                    (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (o in a)
                                        if (a[o] && a[o].test(i)) {
                                            l.unshift(o);
                                            break;
                                        }
                                if (l[0] in n) r = l[0];
                                else {
                                    for (o in n) {
                                        if (!l[0] || e.converters[o + " " + l[0]]) {
                                            r = o;
                                            break;
                                        }
                                        s = s || o;
                                    }
                                    r = r || s;
                                }
                                if (r) return r !== l[0] && l.unshift(r), n[r];
                            })(p, _, n)), !i &&
                            -1 < E.inArray("script", p.dataTypes) &&
                            E.inArray("json", p.dataTypes) < 0 &&
                            (p.converters["text script"] = function() {}),
                            (s = (function(e, t, n, i) {
                                var o,
                                    r,
                                    s,
                                    a,
                                    l,
                                    c = {},
                                    u = e.dataTypes.slice();
                                if (u[1])
                                    for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                for (r = u.shift(); r;)
                                    if (
                                        (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                            (l = r),
                                            (r = u.shift()))
                                    )
                                        if ("*" === r) r = l;
                                        else if ("*" !== l && l !== r) {
                                    if (!(s = c[l + " " + r] || c["* " + r]))
                                        for (o in c)
                                            if (
                                                (a = o.split(" "))[1] === r &&
                                                (s = c[l + " " + a[0]] || c["* " + a[0]])
                                            ) {
                                                !0 === s ?
                                                    (s = c[o]) :
                                                    !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                                                break;
                                            }
                                    if (!0 !== s)
                                        if (s && e.throws) t = s(t);
                                        else
                                            try {
                                                t = s(t);
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ?
                                                        e :
                                                        "No conversion from " + l + " to " + r,
                                                };
                                            }
                                }
                                return { state: "success", data: t };
                            })(p, s, _, i)),
                            i ?
                            (p.ifModified &&
                                ((n = _.getResponseHeader("Last-Modified")) &&
                                    (E.lastModified[c] = n),
                                    (n = _.getResponseHeader("etag")) && (E.etag[c] = n)),
                                204 === e || "HEAD" === p.type ?
                                (a = "nocontent") :
                                304 === e ?
                                (a = "notmodified") :
                                ((a = s.state), (o = s.data), (i = !(r = s.error)))) :
                            ((r = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
                            (_.status = e),
                            (_.statusText = (t || a) + ""),
                            i ? v.resolveWith(g, [o, a, _]) : v.rejectWith(g, [_, a, r]),
                            _.statusCode(b),
                            (b = void 0),
                            f && m.trigger(i ? "ajaxSuccess" : "ajaxError", [_, p, i ? o : r]),
                            y.fireWith(g, [_, a]),
                            f &&
                            (m.trigger("ajaxComplete", [_, p]),
                                --E.active || E.event.trigger("ajaxStop")));
                }
                return _;
            },
            getJSON: function(e, t, n) {
                return E.get(e, t, n, "json");
            },
            getScript: function(e, t) {
                return E.get(e, void 0, t, "script");
            },
        }),
        E.each(["get", "post"], function(e, o) {
            E[o] = function(e, t, n, i) {
                return (
                    y(t) && ((i = i || n), (n = t), (t = void 0)),
                    E.ajax(
                        E.extend({ url: e, type: o, dataType: i, data: t, success: n },
                            E.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        E.ajaxPrefilter(function(e) {
            for (var t in e.headers)
                "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
        }),
        (E._evalUrl = function(e, t, n) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function() {} },
                dataFilter: function(e) {
                    E.globalEval(e, t, n);
                },
            });
        }),
        E.fn.extend({
            wrapAll: function(e) {
                return (
                    this[0] &&
                    (y(e) && (e = e.call(this[0])),
                        (e = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                        .map(function() {
                            for (var e = this; e.firstElementChild;)
                                e = e.firstElementChild;
                            return e;
                        })
                        .append(this)),
                    this
                );
            },
            wrapInner: function(n) {
                return y(n) ?
                    this.each(function(e) {
                        E(this).wrapInner(n.call(this, e));
                    }) :
                    this.each(function() {
                        var e = E(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n);
                    });
            },
            wrap: function(t) {
                var n = y(t);
                return this.each(function(e) {
                    E(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function(e) {
                return (
                    this.parent(e)
                    .not("body")
                    .each(function() {
                        E(this).replaceWith(this.childNodes);
                    }),
                    this
                );
            },
        }),
        (E.expr.pseudos.hidden = function(e) {
            return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (E.ajaxSettings.xhr = function() {
            try {
                return new w.XMLHttpRequest();
            } catch (e) {}
        });
    var Xt = { 0: 200, 1223: 204 },
        Vt = E.ajaxSettings.xhr(),
        Yt =
        ((m.cors = !!Vt && "withCredentials" in Vt),
            (m.ajax = Vt = !!Vt),
            E.ajaxTransport(function(o) {
                var r, s;
                if (m.cors || (Vt && !o.crossDomain))
                    return {
                        send: function(e, t) {
                            var n,
                                i = o.xhr();
                            if (
                                (i.open(o.type, o.url, o.async, o.username, o.password),
                                    o.xhrFields)
                            )
                                for (n in o.xhrFields) i[n] = o.xhrFields[n];
                            for (n in (o.mimeType &&
                                    i.overrideMimeType &&
                                    i.overrideMimeType(o.mimeType),
                                    o.crossDomain ||
                                    e["X-Requested-With"] ||
                                    (e["X-Requested-With"] = "XMLHttpRequest"),
                                    e))
                                i.setRequestHeader(n, e[n]);
                            (r = function(e) {
                                return function() {
                                    r &&
                                        ((r =
                                                s =
                                                i.onload =
                                                i.onerror =
                                                i.onabort =
                                                i.ontimeout =
                                                i.onreadystatechange =
                                                null),
                                            "abort" === e ?
                                            i.abort() :
                                            "error" === e ?
                                            "number" != typeof i.status ?
                                            t(0, "error") :
                                            t(i.status, i.statusText) :
                                            t(
                                                Xt[i.status] || i.status,
                                                i.statusText,
                                                "text" !== (i.responseType || "text") ||
                                                "string" != typeof i.responseText ?
                                                { binary: i.response } :
                                                { text: i.responseText },
                                                i.getAllResponseHeaders()
                                            ));
                                };
                            }),
                            (i.onload = r()),
                            (s = i.onerror = i.ontimeout = r("error")),
                            void 0 !== i.onabort ?
                                (i.onabort = s) :
                                (i.onreadystatechange = function() {
                                    4 === i.readyState &&
                                        w.setTimeout(function() {
                                            r && s();
                                        });
                                }),
                                (r = r("abort"));
                            try {
                                i.send((o.hasContent && o.data) || null);
                            } catch (e) {
                                if (r) throw e;
                            }
                        },
                        abort: function() {
                            r && r();
                        },
                    };
            }),
            E.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1);
            }),
            E.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function(e) {
                        return E.globalEval(e), e;
                    },
                },
            }),
            E.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            E.ajaxTransport("script", function(n) {
                var i, o;
                if (n.crossDomain || n.scriptAttrs)
                    return {
                        send: function(e, t) {
                            (i = E("<script>")
                                .attr(n.scriptAttrs || {})
                                .prop({ charset: n.scriptCharset, src: n.url })
                                .on(
                                    "load error",
                                    (o = function(e) {
                                        i.remove(),
                                            (o = null),
                                            e && t("error" === e.type ? 404 : 200, e.type);
                                    })
                                )),
                            x.head.appendChild(i[0]);
                        },
                        abort: function() {
                            o && o();
                        },
                    };
            }), []),
        Qt = /(=)\?(?=&|$)|\?\?/,
        Gt =
        (E.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Yt.pop() || E.expando + "_" + At.guid++;
                    return (this[e] = !0), e;
                },
            }),
            E.ajaxPrefilter("json jsonp", function(e, t, n) {
                var i,
                    o,
                    r,
                    s = !1 !== e.jsonp &&
                    (Qt.test(e.url) ?
                        "url" :
                        "string" == typeof e.data &&
                        0 ===
                        (e.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        Qt.test(e.data) &&
                        "data");
                if (s || "jsonp" === e.dataTypes[0])
                    return (
                        (i = e.jsonpCallback =
                            y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                        s ?
                        (e[s] = e[s].replace(Qt, "$1" + i)) :
                        !1 !== e.jsonp &&
                        (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                        (e.converters["script json"] = function() {
                            return r || E.error(i + " was not called"), r[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (o = w[i]),
                        (w[i] = function() {
                            r = arguments;
                        }),
                        n.always(function() {
                            void 0 === o ? E(w).removeProp(i) : (w[i] = o),
                                e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                                r && y(o) && o(r[0]),
                                (r = o = void 0);
                        }),
                        "script"
                    );
            }),
            (m.createHTMLDocument =
                (((e = x.implementation.createHTMLDocument("").body).innerHTML =
                        "<form></form><form></form>"),
                    2 === e.childNodes.length)),
            (E.parseHTML = function(e, t, n) {
                return "string" != typeof e ?
                    [] :
                    ("boolean" == typeof t && ((n = t), (t = !1)),
                        t ||
                        (m.createHTMLDocument ?
                            (((i = (t =
                                    x.implementation.createHTMLDocument("")).createElement(
                                    "base"
                                )).href = x.location.href),
                                t.head.appendChild(i)) :
                            (t = x)),
                        (i = !n && []),
                        (n = K.exec(e)) ?
                        [t.createElement(n[1])] :
                        ((n = Ce([e], t, i)),
                            i && i.length && E(i).remove(),
                            E.merge([], n.childNodes)));
                var i;
            }),
            (E.fn.load = function(e, t, n) {
                var i,
                    o,
                    r,
                    s = this,
                    a = e.indexOf(" ");
                return (-1 < a && ((i = I(e.slice(a))), (e = e.slice(0, a))),
                    y(t) ?
                    ((n = t), (t = void 0)) :
                    t && "object" == typeof t && (o = "POST"),
                    0 < s.length &&
                    E.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                    .done(function(e) {
                        (r = arguments),
                        s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
                    })
                    .always(
                        n &&
                        function(e, t) {
                            s.each(function() {
                                n.apply(this, r || [e.responseText, t, e]);
                            });
                        }
                    ),
                    this
                );
            }),
            (E.expr.pseudos.animated = function(t) {
                return E.grep(E.timers, function(e) {
                    return t === e.elem;
                }).length;
            }),
            (E.offset = {
                setOffset: function(e, t, n) {
                    var i,
                        o,
                        r,
                        s,
                        a = E.css(e, "position"),
                        l = E(e),
                        c = {};
                    "static" === a && (e.style.position = "relative"),
                        (r = l.offset()),
                        (i = E.css(e, "top")),
                        (s = E.css(e, "left")),
                        (a =
                            ("absolute" === a || "fixed" === a) &&
                            -1 < (i + s).indexOf("auto") ?
                            ((o = (a = l.position()).top), a.left) :
                            ((o = parseFloat(i) || 0), parseFloat(s) || 0)),
                        null != (t = y(t) ? t.call(e, n, E.extend({}, r)) : t).top &&
                        (c.top = t.top - r.top + o),
                        null != t.left && (c.left = t.left - r.left + a),
                        "using" in t ? t.using.call(e, c) : l.css(c);
                },
            }),
            E.fn.extend({
                offset: function(t) {
                    if (arguments.length)
                        return void 0 === t ?
                            this :
                            this.each(function(e) {
                                E.offset.setOffset(this, t, e);
                            });
                    var e,
                        n = this[0];
                    return n ?
                        n.getClientRects().length ?
                        ((e = n.getBoundingClientRect()),
                            (n = n.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) :
                        { top: 0, left: 0 } :
                        void 0;
                },
                position: function() {
                    if (this[0]) {
                        var e,
                            t,
                            n,
                            i = this[0],
                            o = { top: 0, left: 0 };
                        if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
                        else {
                            for (
                                t = this.offset(),
                                n = i.ownerDocument,
                                e = i.offsetParent || n.documentElement; e &&
                                (e === n.body || e === n.documentElement) &&
                                "static" === E.css(e, "position");

                            )
                                e = e.parentNode;
                            e &&
                                e !== i &&
                                1 === e.nodeType &&
                                (((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0)),
                                    (o.left += E.css(e, "borderLeftWidth", !0)));
                        }
                        return {
                            top: t.top - o.top - E.css(i, "marginTop", !0),
                            left: t.left - o.left - E.css(i, "marginLeft", !0),
                        };
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (
                            var e = this.offsetParent; e && "static" === E.css(e, "position");

                        )
                            e = e.offsetParent;
                        return e || k;
                    });
                },
            }),
            E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function(t, o) {
                    var r = "pageYOffset" === o;
                    E.fn[t] = function(e) {
                        return h(
                            this,
                            function(e, t, n) {
                                var i;
                                if (
                                    (g(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                                        void 0 === n)
                                )
                                    return i ? i[o] : e[t];
                                i
                                    ?
                                    i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) :
                                    (e[t] = n);
                            },
                            t,
                            e,
                            arguments.length
                        );
                    };
                }
            ),
            E.each(["top", "left"], function(e, n) {
                E.cssHooks[n] = Ze(m.pixelPosition, function(e, t) {
                    if (t)
                        return (t = Je(e, n)), Ye.test(t) ? E(e).position()[n] + "px" : t;
                });
            }),
            E.each({ Height: "height", Width: "width" }, function(s, a) {
                E.each({ padding: "inner" + s, content: a, "": "outer" + s },
                    function(i, r) {
                        E.fn[r] = function(e, t) {
                            var n = arguments.length && (i || "boolean" != typeof e),
                                o = i || (!0 === e || !0 === t ? "margin" : "border");
                            return h(
                                this,
                                function(e, t, n) {
                                    var i;
                                    return g(e) ?
                                        0 === r.indexOf("outer") ?
                                        e["inner" + s] :
                                        e.document.documentElement["client" + s] :
                                        9 === e.nodeType ?
                                        ((i = e.documentElement),
                                            Math.max(
                                                e.body["scroll" + s],
                                                i["scroll" + s],
                                                e.body["offset" + s],
                                                i["offset" + s],
                                                i["client" + s]
                                            )) :
                                        void 0 === n ?
                                        E.css(e, t, o) :
                                        E.style(e, t, n, o);
                                },
                                a,
                                n ? e : void 0,
                                n
                            );
                        };
                    }
                );
            }),
            E.each(
                [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                ],
                function(e, t) {
                    E.fn[t] = function(e) {
                        return this.on(t, e);
                    };
                }
            ),
            E.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i);
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ?
                        this.off(e, "**") :
                        this.off(t, e || "**", n);
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            E.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                ),
                function(e, n) {
                    E.fn[n] = function(e, t) {
                        return 0 < arguments.length ?
                            this.on(n, null, e, t) :
                            this.trigger(n);
                    };
                }
            ),
            /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
        Kt =
        ((E.proxy = function(e, t) {
                var n, i;
                if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), y(e)))
                    return (
                        (n = a.call(arguments, 2)),
                        ((i = function() {
                                return e.apply(t || this, n.concat(a.call(arguments)));
                            }).guid = e.guid =
                            e.guid || E.guid++),
                        i
                    );
            }),
            (E.holdReady = function(e) {
                e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = l),
            (E.isFunction = y),
            (E.isWindow = g),
            (E.camelCase = b),
            (E.type = p),
            (E.now = Date.now),
            (E.isNumeric = function(e) {
                var t = E.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            (E.trim = function(e) {
                return null == e ? "" : (e + "").replace(Gt, "");
            }),
            "function" == typeof define &&
            define.amd &&
            define("jquery", [], function() {
                return E;
            }),
            w.jQuery),
        Jt = w.$;
    return (
        (E.noConflict = function(e) {
            return w.$ === E && (w.$ = Jt), e && w.jQuery === E && (w.jQuery = Kt), E;
        }),
        void 0 === H && (w.jQuery = w.$ = E),
        E
    );
}),
(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define(t) :
        ((e =
                "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
            t());
})(this, function() {
    "use strict";
    const H = 1e3,
        M = "transitionend",
        q = (t) => {
            let n = t.getAttribute("data-bs-target");
            if (!n || "#" === n) {
                let e = t.getAttribute("href");
                if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
                e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]),
                    (n = e && "#" !== e ? e.trim() : null);
            }
            return n;
        },
        R = (e) => {
            e = q(e);
            return e && document.querySelector(e) ? e : null;
        },
        r = (e) => {
            e = q(e);
            return e ? document.querySelector(e) : null;
        },
        B = (e) => {
            e.dispatchEvent(new Event(M));
        },
        s = (e) =>
        !(!e || "object" != typeof e) &&
        void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
        i = (e) =>
        s(e) ?
        e.jquery ?
        e[0] :
        e :
        "string" == typeof e && 0 < e.length ?
        document.querySelector(e) :
        null,
        n = (i, o, r) => {
            Object.keys(r).forEach((e) => {
                var t = r[e],
                    n = o[e],
                    n =
                    n && s(n) ?
                    "element" :
                    null == (n = n) ?
                    "" + n :
                    {}.toString
                    .call(n)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
                if (!new RegExp(t).test(n))
                    throw new TypeError(
                        i.toUpperCase() +
                        `: Option "${e}" provided type "${n}" but expected type "${t}".`
                    );
            });
        },
        W = (e) =>
        !(!s(e) || 0 === e.getClientRects().length) &&
        "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        a = (e) =>
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        !!e.classList.contains("disabled") ||
        (void 0 !== e.disabled ?
            e.disabled :
            e.hasAttribute("disabled") &&
            "false" !== e.getAttribute("disabled")),
        F = (e) => {
            return document.documentElement.attachShadow ?
                "function" == typeof e.getRootNode ?
                (t = e.getRootNode()) instanceof ShadowRoot ?
                t :
                null :
                e instanceof ShadowRoot ?
                e :
                e.parentNode ?
                F(e.parentNode) :
                null :
                null;
            var t;
        },
        z = () => {},
        h = (e) => {
            e.offsetHeight;
        },
        $ = () => {
            var e = window["jQuery"];
            return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
        },
        U = [],
        o = () => "rtl" === document.documentElement.dir;
    var e = (i) => {
        var e;
        (e = () => {
            const e = $();
            if (e) {
                const t = i.NAME,
                    n = e.fn[t];
                (e.fn[t] = i.jQueryInterface),
                (e.fn[t].Constructor = i),
                (e.fn[t].noConflict = () => ((e.fn[t] = n), i.jQueryInterface));
            }
        }),
        "loading" === document.readyState ?
            (U.length ||
                document.addEventListener("DOMContentLoaded", () => {
                    U.forEach((e) => e());
                }),
                U.push(e)) :
            e();
    };
    const l = (e) => {
            "function" == typeof e && e();
        },
        X = (n, i, e = !0) => {
            if (e) {
                e =
                    ((e) => {
                        if (!e) return 0;
                        let { transitionDuration: t, transitionDelay: n } =
                        window.getComputedStyle(e);
                        var e = Number.parseFloat(t),
                            i = Number.parseFloat(n);
                        return e || i ?
                            ((t = t.split(",")[0]),
                                (n = n.split(",")[0]),
                                (Number.parseFloat(t) + Number.parseFloat(n)) * H) :
                            0;
                    })(i) + 5;
                let t = !1;
                const o = ({ target: e }) => {
                    e === i && ((t = !0), i.removeEventListener(M, o), l(n));
                };
                i.addEventListener(M, o),
                    setTimeout(() => {
                        t || B(i);
                    }, e);
            } else l(n);
        },
        V = (e, t, n, i) => {
            let o = e.indexOf(t);
            if (-1 === o) return e[!n && i ? e.length - 1 : 0];
            t = e.length;
            return (
                (o += n ? 1 : -1),
                i && (o = (o + t) % t),
                e[Math.max(0, Math.min(o, t - 1))]
            );
        },
        Y = /[^.]*(?=\..*)\.|.*/,
        Q = /\..*/,
        G = /::\d+$/,
        K = {};
    let J = 1;
    const Z = { mouseenter: "mouseover", mouseleave: "mouseout" },
        ee = /^(mouseenter|mouseleave)/i,
        te = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);

    function ne(e, t) {
        return (t && t + "::" + J++) || e.uidEvent || J++;
    }

    function ie(e) {
        var t = ne(e);
        return (e.uidEvent = t), (K[t] = K[t] || {}), K[t];
    }

    function oe(n, i, o = null) {
        var r = Object.keys(n);
        for (let e = 0, t = r.length; e < t; e++) {
            var s = n[r[e]];
            if (s.originalHandler === i && s.delegationSelector === o) return s;
        }
        return null;
    }

    function re(e, t, n) {
        var i = "string" == typeof t,
            n = i ? n : t;
        let o = le(e);
        t = te.has(o);
        return [i, n, (o = t ? o : e)];
    }

    function se(e, t, n, i, o) {
        if ("string" == typeof t && e) {
            n || ((n = i), (i = null)),
                ee.test(t) &&
                ((r = (t) =>
                        function(e) {
                            if (!e.relatedTarget ||
                                (e.relatedTarget !== e.delegateTarget &&
                                    !e.delegateTarget.contains(e.relatedTarget))
                            )
                                return t.call(this, e);
                        }),
                    i ? (i = r(i)) : (n = r(n)));
            var [r, s, a] = re(t, n, i);
            const f = ie(e),
                p = f[a] || (f[a] = {}),
                g = oe(p, s, r ? n : null);
            if (g) g.oneOff = g.oneOff && o;
            else {
                var l,
                    c,
                    u,
                    h,
                    d,
                    t = ne(s, t.replace(Y, ""));
                const m = r ?
                    ((u = e),
                        (h = n),
                        (d = i),
                        function n(i) {
                            var o = u.querySelectorAll(h);
                            for (let t = i["target"]; t && t !== this; t = t.parentNode)
                                for (let e = o.length; e--;)
                                    if (o[e] === t)
                                        return (
                                            (i.delegateTarget = t),
                                            n.oneOff && v.off(u, i.type, h, d),
                                            d.apply(t, [i])
                                        );
                            return null;
                        }) :
                    ((l = e),
                        (c = n),
                        function e(t) {
                            return (
                                (t.delegateTarget = l),
                                e.oneOff && v.off(l, t.type, c),
                                c.apply(l, [t])
                            );
                        });
                (m.delegationSelector = r ? n : null),
                (m.originalHandler = s),
                (m.oneOff = o),
                (m.uidEvent = t),
                (p[t] = m),
                e.addEventListener(a, m, r);
            }
        }
    }

    function ae(e, t, n, i, o) {
        i = oe(t[n], i, o);
        i && (e.removeEventListener(n, i, Boolean(o)), delete t[n][i.uidEvent]);
    }

    function le(e) {
        return (e = e.replace(Q, "")), Z[e] || e;
    }
    const v = {
            on(e, t, n, i) {
                se(e, t, n, i, !1);
            },
            one(e, t, n, i) {
                se(e, t, n, i, !0);
            },
            off(s, a, e, t) {
                if ("string" == typeof a && s) {
                    const [n, i, o] = re(a, e, t),
                        r = o !== a,
                        l = ie(s);
                    t = a.startsWith(".");
                    if (void 0 !== i)
                        return l && l[o] ? void ae(s, l, o, i, n ? e : null) : void 0;
                    t &&
                        Object.keys(l).forEach((e) => {
                            {
                                var t = s,
                                    n = l,
                                    i = e,
                                    o = a.slice(1);
                                const r = n[i] || {};
                                return void Object.keys(r).forEach((e) => {
                                    e.includes(o) &&
                                        ((e = r[e]),
                                            ae(t, n, i, e.originalHandler, e.delegationSelector));
                                });
                            }
                        });
                    const c = l[o] || {};
                    Object.keys(c).forEach((e) => {
                        var t = e.replace(G, "");
                        (r && !a.includes(t)) ||
                        ((t = c[e]),
                            ae(s, l, o, t.originalHandler, t.delegationSelector));
                    });
                }
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) return null;
                const i = $();
                var o = le(t),
                    r = t !== o,
                    s = te.has(o);
                let a,
                    l = !0,
                    c = !0,
                    u = !1,
                    h = null;
                return (
                    r &&
                    i &&
                    ((a = i.Event(t, n)),
                        i(e).trigger(a),
                        (l = !a.isPropagationStopped()),
                        (c = !a.isImmediatePropagationStopped()),
                        (u = a.isDefaultPrevented())),
                    s ?
                    (h = document.createEvent("HTMLEvents")).initEvent(o, l, !0) :
                    (h = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                    void 0 !== n &&
                    Object.keys(n).forEach((e) => {
                        Object.defineProperty(h, e, {
                            get() {
                                return n[e];
                            },
                        });
                    }),
                    u && h.preventDefault(),
                    c && e.dispatchEvent(h),
                    h.defaultPrevented && void 0 !== a && a.preventDefault(),
                    h
                );
            },
        },
        c = new Map(),
        ce = {
            set(e, t, n) {
                c.has(e) || c.set(e, new Map());
                const i = c.get(e);
                i.has(t) || 0 === i.size ?
                    i.set(t, n) :
                    console.error(
                        `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(i.keys())[0]
                }.`
                    );
            },
            get(e, t) {
                return (c.has(e) && c.get(e).get(t)) || null;
            },
            remove(e, t) {
                if (c.has(e)) {
                    const n = c.get(e);
                    n.delete(t), 0 === n.size && c.delete(e);
                }
            },
        };
    class t {
        constructor(e) {
            (e = i(e)) &&
            ((this._element = e),
                ce.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            ce.remove(this._element, this.constructor.DATA_KEY),
                v.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach((e) => {
                    this[e] = null;
                });
        }
        _queueCallback(e, t, n = !0) {
            X(e, t, n);
        }
        static getInstance(e) {
            return ce.get(i(e), this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
            return (
                this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
            );
        }
        static get VERSION() {
            return "5.1.3";
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        static get DATA_KEY() {
            return "bs." + this.NAME;
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY;
        }
    }
    var ue = (n, i = "hide") => {
        var e = "click.dismiss" + n.EVENT_KEY;
        const o = n.NAME;
        v.on(document, e, `[data-bs-dismiss="${o}"]`, function(e) {
            if (
                (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !a(this))
            ) {
                e = r(this) || this.closest("." + o);
                const t = n.getOrCreateInstance(e);
                t[i]();
            }
        });
    };
    class he extends t {
        static get NAME() {
            return "alert";
        }
        close() {
            var e;
            v.trigger(this._element, "close.bs.alert").defaultPrevented ||
                (this._element.classList.remove("show"),
                    (e = this._element.classList.contains("fade")),
                    this._queueCallback(() => this._destroyElement(), this._element, e));
        }
        _destroyElement() {
            this._element.remove(),
                v.trigger(this._element, "closed.bs.alert"),
                this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = he.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    ue(he, "close"), e(he);
    const de = '[data-bs-toggle="button"]';
    class fe extends t {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = fe.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }

    function pe(e) {
        return (
            "true" === e ||
            ("false" !== e &&
                (e === Number(e).toString() ?
                    Number(e) :
                    "" === e || "null" === e ?
                    null :
                    e))
        );
    }

    function ge(e) {
        return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
    }
    v.on(document, "click.bs.button.data-api", de, (e) => {
            e.preventDefault();
            e = e.target.closest(de);
            const t = fe.getOrCreateInstance(e);
            t.toggle();
        }),
        e(fe);
    const u = {
            setDataAttribute(e, t, n) {
                e.setAttribute("data-bs-" + ge(t), n);
            },
            removeDataAttribute(e, t) {
                e.removeAttribute("data-bs-" + ge(t));
            },
            getDataAttributes(n) {
                if (!n) return {};
                const i = {};
                return (
                    Object.keys(n.dataset)
                    .filter((e) => e.startsWith("bs"))
                    .forEach((e) => {
                        let t = e.replace(/^bs/, "");
                        (t = t.charAt(0).toLowerCase() + t.slice(1, t.length)),
                        (i[t] = pe(n.dataset[e]));
                    }),
                    i
                );
            },
            getDataAttribute(e, t) {
                return pe(e.getAttribute("data-bs-" + ge(t)));
            },
            offset(e) {
                e = e.getBoundingClientRect();
                return {
                    top: e.top + window.pageYOffset,
                    left: e.left + window.pageXOffset,
                };
            },
            position(e) {
                return { top: e.offsetTop, left: e.offsetLeft };
            },
        },
        d = {
            find(e, t = document.documentElement) {
                return [].concat(...Element.prototype.querySelectorAll.call(t, e));
            },
            findOne(e, t = document.documentElement) {
                return Element.prototype.querySelector.call(t, e);
            },
            children(e, t) {
                return [].concat(...e.children).filter((e) => e.matches(t));
            },
            parents(e, t) {
                const n = [];
                let i = e.parentNode;
                for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;)
                    i.matches(t) && n.push(i), (i = i.parentNode);
                return n;
            },
            prev(e, t) {
                let n = e.previousElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling;
                }
                return [];
            },
            next(e, t) {
                let n = e.nextElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.nextElementSibling;
                }
                return [];
            },
            focusableChildren(e) {
                var t = [
                        "a",
                        "button",
                        "input",
                        "textarea",
                        "select",
                        "details",
                        "[tabindex]",
                        '[contenteditable="true"]',
                    ]
                    .map((e) => e + ':not([tabindex^="-"])')
                    .join(", ");
                return this.find(t, e).filter((e) => !a(e) && W(e));
            },
        },
        me = "carousel";
    var ve = ".bs.carousel";
    const ye = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        be = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        f = "next",
        p = "prev",
        g = "left",
        _e = "right",
        we = { ArrowLeft: _e, ArrowRight: g },
        xe = "slid" + ve;
    const m = "active",
        Ee = ".active.carousel-item";
    class y extends t {
        constructor(e, t) {
            super(e),
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(t)),
                (this._indicatorsElement = d.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                (this._touchSupported =
                    "ontouchstart" in document.documentElement ||
                    0 < navigator.maxTouchPoints),
                (this._pointerEvent = Boolean(window.PointerEvent)),
                this._addEventListeners();
        }
        static get Default() {
            return ye;
        }
        static get NAME() {
            return me;
        }
        next() {
            this._slide(f);
        }
        nextWhenVisible() {
            !document.hidden && W(this._element) && this.next();
        }
        prev() {
            this._slide(p);
        }
        pause(e) {
            e || (this._isPaused = !0),
                d.findOne(
                    ".carousel-item-next, .carousel-item-prev",
                    this._element
                ) && (B(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
        }
        cycle(e) {
            e || (this._isPaused = !1),
                this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
                this._config &&
                this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                    (this._interval = setInterval(
                        (document.visibilityState ?
                            this.nextWhenVisible :
                            this.next
                        ).bind(this),
                        this._config.interval
                    )));
        }
        to(e) {
            this._activeElement = d.findOne(Ee, this._element);
            var t = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) v.one(this._element, xe, () => this.to(e));
                else {
                    if (t === e) return this.pause(), void this.cycle();
                    t = t < e ? f : p;
                    this._slide(t, this._items[e]);
                }
        }
        _getConfig(e) {
            return (
                (e = {
                    ...ye,
                    ...u.getDataAttributes(this._element),
                    ...("object" == typeof e ? e : {}),
                }),
                n(me, e, be),
                e
            );
        }
        _handleSwipe() {
            var e = Math.abs(this.touchDeltaX);
            e <= 40 ||
                ((e = e / this.touchDeltaX),
                    (this.touchDeltaX = 0),
                    e && this._slide(0 < e ? _e : g));
        }
        _addEventListeners() {
            this._config.keyboard &&
                v.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
                "hover" === this._config.pause &&
                (v.on(this._element, "mouseenter.bs.carousel", (e) =>
                        this.pause(e)
                    ),
                    v.on(this._element, "mouseleave.bs.carousel", (e) =>
                        this.cycle(e)
                    )),
                this._config.touch &&
                this._touchSupported &&
                this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t = (e) =>
                this._pointerEvent &&
                ("pen" === e.pointerType || "touch" === e.pointerType),
                n = (e) => {
                    t(e) ?
                        (this.touchStartX = e.clientX) :
                        this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
                },
                i = (e) => {
                    this.touchDeltaX =
                        e.touches && 1 < e.touches.length ?
                        0 :
                        e.touches[0].clientX - this.touchStartX;
                },
                o = (e) => {
                    t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause &&
                        (this.pause(),
                            this.touchTimeout && clearTimeout(this.touchTimeout),
                            (this.touchTimeout = setTimeout(
                                (e) => this.cycle(e),
                                500 + this._config.interval
                            )));
                };
            d.find(".carousel-item img", this._element).forEach((e) => {
                    v.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
                }),
                this._pointerEvent ?
                (v.on(this._element, "pointerdown.bs.carousel", (e) => n(e)),
                    v.on(this._element, "pointerup.bs.carousel", (e) => o(e)),
                    this._element.classList.add("pointer-event")) :
                (v.on(this._element, "touchstart.bs.carousel", (e) => n(e)),
                    v.on(this._element, "touchmove.bs.carousel", (e) => i(e)),
                    v.on(this._element, "touchend.bs.carousel", (e) => o(e)));
        }
        _keydown(e) {
            var t;
            /input|textarea/i.test(e.target.tagName) ||
                ((t = we[e.key]) && (e.preventDefault(), this._slide(t)));
        }
        _getItemIndex(e) {
            return (
                (this._items =
                    e && e.parentNode ? d.find(".carousel-item", e.parentNode) : []),
                this._items.indexOf(e)
            );
        }
        _getItemByOrder(e, t) {
            e = e === f;
            return V(this._items, t, e, this._config.wrap);
        }
        _triggerSlideEvent(e, t) {
            var n = this._getItemIndex(e),
                i = this._getItemIndex(d.findOne(Ee, this._element));
            return v.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n,
            });
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = d.findOne(".active", this._indicatorsElement),
                    n =
                    (e.classList.remove(m),
                        e.removeAttribute("aria-current"),
                        d.find("[data-bs-target]", this._indicatorsElement));
                for (let e = 0; e < n.length; e++)
                    if (
                        Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) ===
                        this._getItemIndex(t)
                    ) {
                        n[e].classList.add(m), n[e].setAttribute("aria-current", "true");
                        break;
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || d.findOne(Ee, this._element);
            var t;
            e &&
                ((t = Number.parseInt(e.getAttribute("data-bs-interval"), 10)) ?
                    ((this._config.defaultInterval =
                            this._config.defaultInterval || this._config.interval),
                        (this._config.interval = t)) :
                    (this._config.interval =
                        this._config.defaultInterval || this._config.interval));
        }
        _slide(e, t) {
            e = this._directionToOrder(e);
            const n = d.findOne(Ee, this._element),
                i = this._getItemIndex(n),
                o = t || this._getItemByOrder(e, n),
                r = this._getItemIndex(o);
            var t = Boolean(this._interval),
                s = e === f;
            const a = s ? "carousel-item-start" : "carousel-item-end",
                l = s ? "carousel-item-next" : "carousel-item-prev",
                c = this._orderToDirection(e);
            if (o && o.classList.contains(m)) this._isSliding = !1;
            else if (!this._isSliding) {
                s = this._triggerSlideEvent(o, c);
                if (!s.defaultPrevented && n && o) {
                    (this._isSliding = !0),
                    t && this.pause(),
                        this._setActiveIndicatorElement(o),
                        (this._activeElement = o);
                    const u = () => {
                        v.trigger(this._element, xe, {
                            relatedTarget: o,
                            direction: c,
                            from: i,
                            to: r,
                        });
                    };
                    this._element.classList.contains("slide") ?
                        (o.classList.add(l),
                            h(o),
                            n.classList.add(a),
                            o.classList.add(a),
                            this._queueCallback(
                                () => {
                                    o.classList.remove(a, l),
                                        o.classList.add(m),
                                        n.classList.remove(m, l, a),
                                        (this._isSliding = !1),
                                        setTimeout(u, 0);
                                },
                                n, !0
                            )) :
                        (n.classList.remove(m),
                            o.classList.add(m),
                            (this._isSliding = !1),
                            u()),
                        t && this.cycle();
                }
            }
        }
        _directionToOrder(e) {
            return [_e, g].includes(e) ?
                o() ?
                e === g ?
                p :
                f :
                e === g ?
                f :
                p :
                e;
        }
        _orderToDirection(e) {
            return [f, p].includes(e) ?
                o() ?
                e === p ?
                g :
                _e :
                e === p ?
                _e :
                g :
                e;
        }
        static carouselInterface(e, t) {
            const n = y.getOrCreateInstance(e, t);
            let i = n["_config"];
            "object" == typeof t && (i = {...i, ...t });
            e = "string" == typeof t ? t : i.slide;
            if ("number" == typeof t) n.to(t);
            else if ("string" == typeof e) {
                if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                n[e]();
            } else i.interval && i.ride && (n.pause(), n.cycle());
        }
        static jQueryInterface(e) {
            return this.each(function() {
                y.carouselInterface(this, e);
            });
        }
        static dataApiClickHandler(e) {
            const t = r(this);
            if (t && t.classList.contains("carousel")) {
                const i = {...u.getDataAttributes(t), ...u.getDataAttributes(this) };
                var n = this.getAttribute("data-bs-slide-to");
                n && (i.interval = !1),
                    y.carouselInterface(t, i),
                    n && y.getInstance(t).to(n),
                    e.preventDefault();
            }
        }
    }
    v.on(
            document,
            "click.bs.carousel.data-api",
            "[data-bs-slide], [data-bs-slide-to]",
            y.dataApiClickHandler
        ),
        v.on(window, "load.bs.carousel.data-api", () => {
            var n = d.find('[data-bs-ride="carousel"]');
            for (let e = 0, t = n.length; e < t; e++)
                y.carouselInterface(n[e], y.getInstance(n[e]));
        }),
        e(y);
    const Te = "collapse",
        ke = "bs.collapse";
    ke;
    const Ce = { toggle: !0, parent: null },
        Ae = { toggle: "boolean", parent: "(null|element)" };
    const Se = "show",
        Le = "collapse",
        De = "collapsing",
        Ne = "collapsed",
        Oe = `:scope .${Le} .` + Le,
        je = '[data-bs-toggle="collapse"]';
    class Ie extends t {
        constructor(e, t) {
            super(e),
                (this._isTransitioning = !1),
                (this._config = this._getConfig(t)),
                (this._triggerArray = []);
            var n = d.find(je);
            for (let e = 0, t = n.length; e < t; e++) {
                var i = n[e],
                    o = R(i),
                    r = d.find(o).filter((e) => e === this._element);
                null !== o &&
                    r.length &&
                    ((this._selector = o), this._triggerArray.push(i));
            }
            this._initializeChildren(),
                this._config.parent ||
                this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
                this._config.toggle && this.toggle();
        }
        static get Default() {
            return Ce;
        }
        static get NAME() {
            return Te;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (!this._isTransitioning && !this._isShown()) {
                let e = [],
                    t;
                if (this._config.parent) {
                    const o = d.find(Oe, this._config.parent);
                    e = d
                        .find(".collapse.show, .collapse.collapsing", this._config.parent)
                        .filter((e) => !o.includes(e));
                }
                const i = d.findOne(this._selector);
                if (e.length) {
                    var n = e.find((e) => i !== e);
                    if ((t = n ? Ie.getInstance(n) : null) && t._isTransitioning)
                        return;
                }
                n = v.trigger(this._element, "show.bs.collapse");
                if (!n.defaultPrevented) {
                    e.forEach((e) => {
                        i !== e && Ie.getOrCreateInstance(e, { toggle: !1 }).hide(),
                            t || ce.set(e, ke, null);
                    });
                    const r = this._getDimension();
                    this._element.classList.remove(Le),
                        this._element.classList.add(De),
                        (this._element.style[r] = 0),
                        this._addAriaAndCollapsedClass(this._triggerArray, !0),
                        (this._isTransitioning = !0);
                    n = "scroll" + (r[0].toUpperCase() + r.slice(1));
                    this._queueCallback(
                            () => {
                                (this._isTransitioning = !1),
                                this._element.classList.remove(De),
                                    this._element.classList.add(Le, Se),
                                    (this._element.style[r] = ""),
                                    v.trigger(this._element, "shown.bs.collapse");
                            },
                            this._element, !0
                        ),
                        (this._element.style[r] = this._element[n] + "px");
                }
            }
        }
        hide() {
            if (!this._isTransitioning && this._isShown()) {
                var e = v.trigger(this._element, "hide.bs.collapse");
                if (!e.defaultPrevented) {
                    var e = this._getDimension(),
                        t =
                        ((this._element.style[e] =
                                this._element.getBoundingClientRect()[e] + "px"),
                            h(this._element),
                            this._element.classList.add(De),
                            this._element.classList.remove(Le, Se),
                            this._triggerArray.length);
                    for (let e = 0; e < t; e++) {
                        var n = this._triggerArray[e],
                            i = r(n);
                        i && !this._isShown(i) && this._addAriaAndCollapsedClass([n], !1);
                    }
                    this._isTransitioning = !0;
                    (this._element.style[e] = ""),
                    this._queueCallback(
                        () => {
                            (this._isTransitioning = !1),
                            this._element.classList.remove(De),
                                this._element.classList.add(Le),
                                v.trigger(this._element, "hidden.bs.collapse");
                        },
                        this._element, !0
                    );
                }
            }
        }
        _isShown(e = this._element) {
            return e.classList.contains(Se);
        }
        _getConfig(e) {
            return (
                ((e = {...Ce, ...u.getDataAttributes(this._element), ...e }).toggle =
                    Boolean(e.toggle)),
                (e.parent = i(e.parent)),
                n(Te, e, Ae),
                e
            );
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ?
                "width" :
                "height";
        }
        _initializeChildren() {
            if (this._config.parent) {
                const t = d.find(Oe, this._config.parent);
                d.find(je, this._config.parent)
                    .filter((e) => !t.includes(e))
                    .forEach((e) => {
                        var t = r(e);
                        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
                    });
            }
        }
        _addAriaAndCollapsedClass(e, t) {
            e.length &&
                e.forEach((e) => {
                    t ? e.classList.remove(Ne) : e.classList.add(Ne),
                        e.setAttribute("aria-expanded", t);
                });
        }
        static jQueryInterface(n) {
            return this.each(function() {
                const e = {},
                    t =
                    ("string" == typeof n && /show|hide/.test(n) && (e.toggle = !1),
                        Ie.getOrCreateInstance(this, e));
                if ("string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError(`No method named "${n}"`);
                    t[n]();
                }
            });
        }
    }
    v.on(document, "click.bs.collapse.data-api", je, function(e) {
            ("A" === e.target.tagName ||
                (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
            e.preventDefault();
            e = R(this);
            const t = d.find(e);
            t.forEach((e) => {
                Ie.getOrCreateInstance(e, { toggle: !1 }).toggle();
            });
        }),
        e(Ie);
    var A = "top",
        S = "bottom",
        L = "right",
        D = "left",
        Pe = "auto",
        He = [A, S, L, D],
        N = "start",
        Me = "end",
        qe = "clippingParents",
        Re = "viewport",
        Be = "popper",
        We = "reference",
        Fe = He.reduce(function(e, t) {
            return e.concat([t + "-" + N, t + "-" + Me]);
        }, []),
        ze = [].concat(He, [Pe]).reduce(function(e, t) {
            return e.concat([t, t + "-" + N, t + "-" + Me]);
        }, []),
        ve = "beforeRead",
        $e = "afterRead",
        Ue = "beforeMain",
        Xe = "afterMain",
        Ve = "beforeWrite",
        Ye = "afterWrite",
        Qe = [ve, "read", $e, Ue, "main", Xe, Ve, "write", Ye];

    function b(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }

    function _(e) {
        return null == e ?
            window :
            "[object Window]" !== e.toString() ?
            ((t = e.ownerDocument) && t.defaultView) || window :
            e;
        var t;
    }

    function Ge(e) {
        return e instanceof _(e).Element || e instanceof Element;
    }

    function w(e) {
        return e instanceof _(e).HTMLElement || e instanceof HTMLElement;
    }

    function Ke(e) {
        if ("undefined" != typeof ShadowRoot)
            return e instanceof _(e).ShadowRoot || e instanceof ShadowRoot;
    }
    var x = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var o = e.state;
            Object.keys(o.elements).forEach(function(e) {
                var t = o.styles[e] || {},
                    n = o.attributes[e] || {},
                    i = o.elements[e];
                w(i) &&
                    b(i) &&
                    (Object.assign(i.style, t),
                        Object.keys(n).forEach(function(e) {
                            var t = n[e];
                            !1 === t ?
                                i.removeAttribute(e) :
                                i.setAttribute(e, !0 === t ? "" : t);
                        }));
            });
        },
        effect: function(e) {
            var i = e.state,
                o = {
                    popper: {
                        position: i.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                };
            return (
                Object.assign(i.elements.popper.style, o.popper),
                (i.styles = o),
                i.elements.arrow && Object.assign(i.elements.arrow.style, o.arrow),
                function() {
                    Object.keys(i.elements).forEach(function(e) {
                        var t = i.elements[e],
                            n = i.attributes[e] || {},
                            e = Object.keys(
                                (i.styles.hasOwnProperty(e) ? i.styles : o)[e]
                            ).reduce(function(e, t) {
                                return (e[t] = ""), e;
                            }, {});
                        w(t) &&
                            b(t) &&
                            (Object.assign(t.style, e),
                                Object.keys(n).forEach(function(e) {
                                    t.removeAttribute(e);
                                }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };

    function O(e) {
        return e.split("-")[0];
    }

    function Je(e) {
        e = e.getBoundingClientRect();
        return {
            width: +e.width,
            height: +e.height,
            top: +e.top,
            right: +e.right,
            bottom: +e.bottom,
            left: +e.left,
            x: +e.left,
            y: +e.top,
        };
    }

    function Ze(e) {
        var t = Je(e),
            n = e.offsetWidth,
            i = e.offsetHeight;
        return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - i) <= 1 && (i = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
        );
    }

    function et(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && Ke(n)) {
            var i = t;
            do {
                if (i && e.isSameNode(i)) return !0;
            } while ((i = i.parentNode || i.host));
        }
        return !1;
    }

    function E(e) {
        return _(e).getComputedStyle(e);
    }

    function T(e) {
        return (
            (Ge(e) ? e.ownerDocument : e.document) || window.document
        ).documentElement;
    }

    function tt(e) {
        return "html" === b(e) ?
            e :
            e.assignedSlot || e.parentNode || (Ke(e) ? e.host : null) || T(e);
    }

    function nt(e) {
        return w(e) && "fixed" !== E(e).position ? e.offsetParent : null;
    }

    function it(e) {
        for (
            var t, n = _(e), i = nt(e); i &&
            ((t = i), 0 <= ["table", "td", "th"].indexOf(b(t))) &&
            "static" === E(i).position;

        )
            i = nt(i);
        return (
            ((!i ||
                    ("html" !== b(i) &&
                        ("body" !== b(i) || "static" !== E(i).position))) &&
                (i ||
                    (function(e) {
                        var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
                            n = -1 !== navigator.userAgent.indexOf("Trident");
                        if (n && w(e) && "fixed" === E(e).position) return null;
                        for (
                            var i = tt(e); w(i) && ["html", "body"].indexOf(b(i)) < 0;

                        ) {
                            var o = E(i);
                            if (
                                "none" !== o.transform ||
                                "none" !== o.perspective ||
                                "paint" === o.contain ||
                                -1 !== ["transform", "perspective"].indexOf(o.willChange) ||
                                (t && "filter" === o.willChange) ||
                                (t && o.filter && "none" !== o.filter)
                            )
                                return i;
                            i = i.parentNode;
                        }
                        return null;
                    })(e))) ||
            n
        );
    }

    function ot(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
    }
    var k = Math.max,
        rt = Math.min,
        st = Math.round;

    function at(e, t, n) {
        return k(e, rt(t, n));
    }

    function lt() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
    }

    function ct(e) {
        return Object.assign({}, lt(), e);
    }

    function ut(n, e) {
        return e.reduce(function(e, t) {
            return (e[t] = n), e;
        }, {});
    }
    var C = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t,
                n,
                i,
                o,
                r = e.state,
                s = e.name,
                e = e.options,
                a = r.elements.arrow,
                l = r.modifiersData.popperOffsets,
                c = ot((u = O(r.placement))),
                u = 0 <= [D, L].indexOf(u) ? "height" : "width";
            a &&
                l &&
                ((e = e.padding),
                    (n = r),
                    (n = ct(
                        "number" !=
                        typeof(e =
                            "function" == typeof e ?
                            e(Object.assign({}, n.rects, { placement: n.placement })) :
                            e) ?
                        e :
                        ut(e, He)
                    )),
                    (e = Ze(a)),
                    (o = "y" === c ? A : D),
                    (i = "y" === c ? S : L),
                    (t =
                        r.rects.reference[u] +
                        r.rects.reference[c] -
                        l[c] -
                        r.rects.popper[u]),
                    (l = l[c] - r.rects.reference[c]),
                    (a = (a = it(a)) ?
                        "y" === c ?
                        a.clientHeight || 0 :
                        a.clientWidth || 0 :
                        0),
                    (o = n[o]),
                    (n = a - e[u] - n[i]),
                    (o = at(o, (i = a / 2 - e[u] / 2 + (t / 2 - l / 2)), n)),
                    (r.modifiersData[s] =
                        (((a = {})[c] = o), (a.centerOffset = o - i), a)));
        },
        effect: function(e) {
            var t = e.state;
            null !=
                (e =
                    void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) &&
                ("string" != typeof e || (e = t.elements.popper.querySelector(e))) &&
                et(t.elements.popper, e) &&
                (t.elements.arrow = e);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };

    function ht(e) {
        return e.split("-")[1];
    }
    var dt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };

    function ft(e) {
        var t,
            n,
            i,
            o = e.popper,
            r = e.popperRect,
            s = e.placement,
            a = e.variation,
            l = e.offsets,
            c = e.position,
            u = e.gpuAcceleration,
            h = e.adaptive,
            e = e.roundOffsets,
            d = !0 === e ?
            ((d = (f = l).x),
                (f = l.y),
                (p = window.devicePixelRatio || 1), { x: st(st(d * p) / p) || 0, y: st(st(f * p) / p) || 0 }) :
            "function" == typeof e ?
            e(l) :
            l,
            f = d.x,
            p = void 0 === f ? 0 : f,
            e = d.y,
            e = void 0 === e ? 0 : e,
            g = l.hasOwnProperty("x"),
            l = l.hasOwnProperty("y"),
            m = D,
            v = A,
            y = window,
            o =
            (h &&
                ((i = "clientHeight"),
                    (n = "clientWidth"),
                    (t = it(o)) === _(o) &&
                    "static" !== E((t = T(o))).position &&
                    "absolute" === c &&
                    ((i = "scrollHeight"), (n = "scrollWidth")),
                    (s !== A && ((s !== D && s !== L) || a !== Me)) ||
                    ((v = S), (e = (e - (t[i] - r.height)) * (u ? 1 : -1))),
                    (s !== D && ((s !== A && s !== S) || a !== Me)) ||
                    ((m = L), (p = (p - (t[n] - r.width)) * (u ? 1 : -1)))),
                Object.assign({ position: c }, h && dt));
        return u ?
            Object.assign({},
                o,
                (((i = {})[v] = l ? "0" : ""),
                    (i[m] = g ? "0" : ""),
                    (i.transform =
                        (y.devicePixelRatio || 1) <= 1 ?
                        "translate(" + p + "px, " + e + "px)" :
                        "translate3d(" + p + "px, " + e + "px, 0)"),
                    i)
            ) :
            Object.assign({},
                o,
                (((s = {})[v] = l ? e + "px" : ""),
                    (s[m] = g ? p + "px" : ""),
                    (s.transform = ""),
                    s)
            );
    }
    var pt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state,
                    e = e.options,
                    n = void 0 === (n = e.gpuAcceleration) || n,
                    i = void 0 === (i = e.adaptive) || i,
                    e = void 0 === (e = e.roundOffsets) || e,
                    n = {
                        placement: O(t.placement),
                        variation: ht(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: n,
                    };
                null != t.modifiersData.popperOffsets &&
                    (t.styles.popper = Object.assign({},
                        t.styles.popper,
                        ft(
                            Object.assign({}, n, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: i,
                                roundOffsets: e,
                            })
                        )
                    )),
                    null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign({},
                        t.styles.arrow,
                        ft(
                            Object.assign({}, n, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: e,
                            })
                        )
                    )),
                    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement,
                    }));
            },
            data: {},
        },
        gt = { passive: !0 };
    var mt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state,
                    n = e.instance,
                    i = (e = e.options).scroll,
                    o = void 0 === i || i,
                    r = void 0 === (i = e.resize) || i,
                    s = _(t.elements.popper),
                    a = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return (
                    o &&
                    a.forEach(function(e) {
                        e.addEventListener("scroll", n.update, gt);
                    }),
                    r && s.addEventListener("resize", n.update, gt),
                    function() {
                        o &&
                            a.forEach(function(e) {
                                e.removeEventListener("scroll", n.update, gt);
                            }),
                            r && s.removeEventListener("resize", n.update, gt);
                    }
                );
            },
            data: {},
        },
        vt = { left: "right", right: "left", bottom: "top", top: "bottom" };

    function yt(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return vt[e];
        });
    }
    var bt = { start: "end", end: "start" };

    function _t(e) {
        return e.replace(/start|end/g, function(e) {
            return bt[e];
        });
    }

    function wt(e) {
        e = _(e);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }

    function xt(e) {
        return Je(T(e)).left + wt(e).scrollLeft;
    }

    function Et(e) {
        var e = E(e),
            t = e.overflow,
            n = e.overflowX,
            e = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(t + e + n);
    }

    function Tt(e, t) {
        void 0 === t && (t = []);
        var n = (function e(t) {
                return 0 <= ["html", "body", "#document"].indexOf(b(t)) ?
                    t.ownerDocument.body :
                    w(t) && Et(t) ?
                    t :
                    e(tt(t));
            })(e),
            e = n === (null == (e = e.ownerDocument) ? void 0 : e.body),
            i = _(n),
            i = e ? [i].concat(i.visualViewport || [], Et(n) ? n : []) : n,
            n = t.concat(i);
        return e ? n : n.concat(Tt(tt(i)));
    }

    function kt(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
        });
    }

    function Ct(e, t) {
        return t === Re ?
            kt(
                ((i = _((n = e))),
                    (o = T(n)),
                    (i = i.visualViewport),
                    (r = o.clientWidth),
                    (o = o.clientHeight),
                    (a = s = 0),
                    i &&
                    ((r = i.width),
                        (o = i.height),
                        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                        ((s = i.offsetLeft), (a = i.offsetTop))), { width: r, height: o, x: s + xt(n), y: a })
            ) :
            w(t) ?
            (((r = Je((i = t))).top = r.top + i.clientTop),
                (r.left = r.left + i.clientLeft),
                (r.bottom = r.top + i.clientHeight),
                (r.right = r.left + i.clientWidth),
                (r.width = i.clientWidth),
                (r.height = i.clientHeight),
                (r.x = r.left),
                (r.y = r.top),
                r) :
            kt(
                ((o = T(e)),
                    (s = T(o)),
                    (n = wt(o)),
                    (a = null == (a = o.ownerDocument) ? void 0 : a.body),
                    (t = k(
                        s.scrollWidth,
                        s.clientWidth,
                        a ? a.scrollWidth : 0,
                        a ? a.clientWidth : 0
                    )),
                    (e = k(
                        s.scrollHeight,
                        s.clientHeight,
                        a ? a.scrollHeight : 0,
                        a ? a.clientHeight : 0
                    )),
                    (o = -n.scrollLeft + xt(o)),
                    (n = -n.scrollTop),
                    "rtl" === E(a || s).direction &&
                    (o += k(s.clientWidth, a ? a.clientWidth : 0) - t), { width: t, height: e, x: o, y: n })
            );
        var n, i, o, r, s, a;
    }

    function At(n, e, t) {
        var i,
            o =
            "clippingParents" === e ?
            ((r = Tt(tt((o = n)))),
                Ge(
                    (i =
                        0 <= ["absolute", "fixed"].indexOf(E(o).position) && w(o) ?
                        it(o) :
                        o)
                ) ?
                r.filter(function(e) {
                    return Ge(e) && et(e, i) && "body" !== b(e);
                }) :
                []) :
            [].concat(e),
            r = [].concat(o, [t]),
            e = r[0],
            t = r.reduce(function(e, t) {
                t = Ct(n, t);
                return (
                    (e.top = k(t.top, e.top)),
                    (e.right = rt(t.right, e.right)),
                    (e.bottom = rt(t.bottom, e.bottom)),
                    (e.left = k(t.left, e.left)),
                    e
                );
            }, Ct(n, e));
        return (
            (t.width = t.right - t.left),
            (t.height = t.bottom - t.top),
            (t.x = t.left),
            (t.y = t.top),
            t
        );
    }

    function St(e) {
        var t,
            n = e.reference,
            i = e.element,
            e = e.placement,
            o = e ? O(e) : null,
            e = e ? ht(e) : null,
            r = n.x + n.width / 2 - i.width / 2,
            s = n.y + n.height / 2 - i.height / 2;
        switch (o) {
            case A:
                t = { x: r, y: n.y - i.height };
                break;
            case S:
                t = { x: r, y: n.y + n.height };
                break;
            case L:
                t = { x: n.x + n.width, y: s };
                break;
            case D:
                t = { x: n.x - i.width, y: s };
                break;
            default:
                t = { x: n.x, y: n.y };
        }
        var a = o ? ot(o) : null;
        if (null != a) {
            var l = "y" === a ? "height" : "width";
            switch (e) {
                case N:
                    t[a] = t[a] - (n[l] / 2 - i[l] / 2);
                    break;
                case Me:
                    t[a] = t[a] + (n[l] / 2 - i[l] / 2);
            }
        }
        return t;
    }

    function Lt(e, t) {
        var i,
            t = (t = void 0 === t ? {} : t),
            n = t.placement,
            n = void 0 === n ? e.placement : n,
            o = t.boundary,
            o = void 0 === o ? qe : o,
            r = t.rootBoundary,
            r = void 0 === r ? Re : r,
            s = t.elementContext,
            s = void 0 === s ? Be : s,
            a = t.altBoundary,
            a = void 0 !== a && a,
            t = t.padding,
            t = void 0 === t ? 0 : t,
            t = ct("number" != typeof t ? t : ut(t, He)),
            l = e.rects.popper,
            a = e.elements[a ? (s === Be ? We : Be) : s],
            a = At(Ge(a) ? a : a.contextElement || T(e.elements.popper), o, r),
            o = Je(e.elements.reference),
            r = St({
                reference: o,
                element: l,
                strategy: "absolute",
                placement: n,
            }),
            l = kt(Object.assign({}, l, r)),
            r = s === Be ? l : o,
            c = {
                top: a.top - r.top + t.top,
                bottom: r.bottom - a.bottom + t.bottom,
                left: a.left - r.left + t.left,
                right: r.right - a.right + t.right,
            },
            l = e.modifiersData.offset;
        return (
            s === Be &&
            l &&
            ((i = l[n]),
                Object.keys(c).forEach(function(e) {
                    var t = 0 <= [L, S].indexOf(e) ? 1 : -1,
                        n = 0 <= [A, S].indexOf(e) ? "y" : "x";
                    c[e] += i[n] * t;
                })),
            c
        );
    }
    var Dt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var h = e.state,
                t = e.options,
                e = e.name;
            if (!h.modifiersData[e]._skip) {
                for (
                    var n = t.mainAxis,
                        i = void 0 === n || n,
                        n = t.altAxis,
                        o = void 0 === n || n,
                        n = t.fallbackPlacements,
                        d = t.padding,
                        f = t.boundary,
                        p = t.rootBoundary,
                        r = t.altBoundary,
                        s = t.flipVariations,
                        g = void 0 === s || s,
                        m = t.allowedAutoPlacements,
                        s = h.options.placement,
                        t = O(s),
                        n =
                        n ||
                        (t === s || !g ?
                            [yt(s)] :
                            (function(e) {
                                if (O(e) === Pe) return [];
                                var t = yt(e);
                                return [_t(e), t, _t(t)];
                            })(s)),
                        a = [s].concat(n).reduce(function(e, t) {
                            return e.concat(
                                O(t) === Pe ?
                                ((n = h),
                                    (i = (e = e =
                                        void 0 ===
                                        (e = {
                                            placement: t,
                                            boundary: f,
                                            rootBoundary: p,
                                            padding: d,
                                            flipVariations: g,
                                            allowedAutoPlacements: m,
                                        }) ?
                                        {} :
                                        e).placement),
                                    (o = e.boundary),
                                    (r = e.rootBoundary),
                                    (s = e.padding),
                                    (a = e.flipVariations),
                                    (l = void 0 === (e = e.allowedAutoPlacements) ? ze : e),
                                    (c = ht(i)),
                                    (e = c ?
                                        a ?
                                        Fe :
                                        Fe.filter(function(e) {
                                            return ht(e) === c;
                                        }) :
                                        He),
                                    (u = (i =
                                        0 ===
                                        (i = e.filter(function(e) {
                                            return 0 <= l.indexOf(e);
                                        })).length ?
                                        e :
                                        i).reduce(function(e, t) {
                                        return (
                                            (e[t] = Lt(n, {
                                                placement: t,
                                                boundary: o,
                                                rootBoundary: r,
                                                padding: s,
                                            })[O(t)]),
                                            e
                                        );
                                    }, {})),
                                    Object.keys(u).sort(function(e, t) {
                                        return u[e] - u[t];
                                    })) :
                                t
                            );
                            var n, i, o, r, s, a, l, c, u;
                        }, []),
                        l = h.rects.reference,
                        c = h.rects.popper,
                        u = new Map(),
                        v = !0,
                        y = a[0],
                        b = 0; b < a.length; b++
                ) {
                    var _ = a[b],
                        w = O(_),
                        x = ht(_) === N,
                        E = 0 <= [A, S].indexOf(w),
                        T = E ? "width" : "height",
                        k = Lt(h, {
                            placement: _,
                            boundary: f,
                            rootBoundary: p,
                            altBoundary: r,
                            padding: d,
                        }),
                        E = E ? (x ? L : D) : x ? S : A,
                        x = (l[T] > c[T] && (E = yt(E)), yt(E)),
                        T = [];
                    if (
                        (i && T.push(k[w] <= 0),
                            o && T.push(k[E] <= 0, k[x] <= 0),
                            T.every(function(e) {
                                return e;
                            }))
                    ) {
                        (y = _), (v = !1);
                        break;
                    }
                    u.set(_, T);
                }
                if (v)
                    for (var C = g ? 3 : 1; 0 < C; C--)
                        if (
                            "break" ===
                            (function(t) {
                                var e = a.find(function(e) {
                                    e = u.get(e);
                                    if (e)
                                        return e.slice(0, t).every(function(e) {
                                            return e;
                                        });
                                });
                                if (e) return (y = e), "break";
                            })(C)
                        )
                            break;
                h.placement !== y &&
                    ((h.modifiersData[e]._skip = !0),
                        (h.placement = y),
                        (h.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };

    function Nt(e, t, n) {
        return {
            top: e.top - t.height - (n = void 0 === n ? { x: 0, y: 0 } : n).y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
        };
    }

    function Ot(t) {
        return [A, L, S, D].some(function(e) {
            return 0 <= t[e];
        });
    }
    var jt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state,
                e = e.name,
                n = t.rects.reference,
                i = t.rects.popper,
                o = t.modifiersData.preventOverflow,
                r = Lt(t, { elementContext: "reference" }),
                s = Lt(t, { altBoundary: !0 }),
                r = Nt(r, n),
                n = Nt(s, i, o),
                s = Ot(r),
                i = Ot(n);
            (t.modifiersData[e] = {
                referenceClippingOffsets: r,
                popperEscapeOffsets: n,
                isReferenceHidden: s,
                hasPopperEscaped: i,
            }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": s,
                "data-popper-escaped": i,
            }));
        },
    };
    var It = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var s = e.state,
                t = e.options,
                e = e.name,
                a = void 0 === (t = t.offset) ? [0, 0] : t,
                t = ze.reduce(function(e, t) {
                    var n, i, o, r;
                    return (
                        (e[t] =
                            ((t = t),
                                (n = s.rects),
                                (i = a),
                                (o = O(t)),
                                (r = 0 <= [D, A].indexOf(o) ? -1 : 1),
                                (t =
                                    (n =
                                        "function" == typeof i ?
                                        i(Object.assign({}, n, { placement: t })) :
                                        i)[0] || 0),
                                (i = (n[1] || 0) * r),
                                0 <= [D, L].indexOf(o) ? { x: i, y: t } : { x: t, y: i })),
                        e
                    );
                }, {}),
                n = (i = t[s.placement]).x,
                i = i.y;
            null != s.modifiersData.popperOffsets &&
                ((s.modifiersData.popperOffsets.x += n),
                    (s.modifiersData.popperOffsets.y += i)),
                (s.modifiersData[e] = t);
        },
    };
    var Pt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state,
                e = e.name;
            t.modifiersData[e] = St({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
            });
        },
        data: {},
    };
    var Ht = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t,
                n,
                i,
                o,
                r,
                s,
                a,
                l,
                c,
                u = e.state,
                h = e.options,
                e = e.name,
                d = void 0 === (d = h.mainAxis) || d,
                f = void 0 !== (f = h.altAxis) && f,
                p = h.boundary,
                g = h.rootBoundary,
                m = h.altBoundary,
                v = h.padding,
                y = void 0 === (y = h.tether) || y,
                h = void 0 === (h = h.tetherOffset) ? 0 : h,
                p = Lt(u, {
                    boundary: p,
                    rootBoundary: g,
                    padding: v,
                    altBoundary: m,
                }),
                g = O(u.placement),
                m = !(v = ht(u.placement)),
                b = "x" === (g = ot(g)) ? "y" : "x",
                _ = u.modifiersData.popperOffsets,
                w = u.rects.reference,
                x = u.rects.popper,
                h =
                "function" == typeof h ?
                h(Object.assign({}, u.rects, { placement: u.placement })) :
                h,
                E = { x: 0, y: 0 };
            _ &&
                ((d || f) &&
                    ((r = "y" === g ? "height" : "width"),
                        (t = _[g]),
                        (n = _[g] + p[(c = "y" === g ? A : D)]),
                        (i = _[g] - p[(a = "y" === g ? S : L)]),
                        (s = y ? -x[r] / 2 : 0),
                        (o = (v === N ? w : x)[r]),
                        (v = v === N ? -x[r] : -w[r]),
                        (x = u.elements.arrow),
                        (x = y && x ? Ze(x) : { width: 0, height: 0 }),
                        (c = (l = u.modifiersData["arrow#persistent"] ?
                            u.modifiersData["arrow#persistent"].padding :
                            lt())[c]),
                        (l = l[a]),
                        (a = at(0, w[r], x[r])),
                        (x = m ? w[r] / 2 - s - a - c - h : o - a - c - h),
                        (o = m ? -w[r] / 2 + s + a + l + h : v + a + l + h),
                        (m = (c = u.elements.arrow && it(u.elements.arrow)) ?
                            "y" === g ?
                            c.clientTop || 0 :
                            c.clientLeft || 0 :
                            0),
                        (w = u.modifiersData.offset ?
                            u.modifiersData.offset[u.placement][g] :
                            0),
                        (r = _[g] + x - w - m),
                        (s = _[g] + o - w),
                        d &&
                        ((v = at(y ? rt(n, r) : n, t, y ? k(i, s) : i)),
                            (_[g] = v),
                            (E[g] = v - t)),
                        f &&
                        ((l = (a = _[b]) + p["x" === g ? A : D]),
                            (h = a - p["x" === g ? S : L]),
                            (c = at(y ? rt(l, r) : l, a, y ? k(h, s) : h)),
                            (_[b] = c),
                            (E[b] = c - a))),
                    (u.modifiersData[e] = E));
        },
        requiresIfExists: ["offset"],
    };

    function Mt(e, t, n) {
        void 0 === n && (n = !1);
        var i = w(t),
            o =
            (w(t) &&
                ((o = (r = t).getBoundingClientRect()).width,
                    r.offsetWidth,
                    o.height,
                    r.offsetHeight),
                T(t)),
            r = Je(e),
            e = { scrollLeft: 0, scrollTop: 0 },
            s = { x: 0, y: 0 };
        return (
            (!i && n) ||
            (("body" === b(t) && !Et(o)) ||
                (e =
                    (i = t) !== _(i) && w(i) ?
                    { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop } :
                    wt(i)),
                w(t) ?
                (((s = Je(t)).x += t.clientLeft), (s.y += t.clientTop)) :
                o && (s.x = xt(o))), {
                x: r.left + e.scrollLeft - s.x,
                y: r.top + e.scrollTop - s.y,
                width: r.width,
                height: r.height,
            }
        );
    }

    function qt(e) {
        var n = new Map(),
            i = new Set(),
            o = [];
        return (
            e.forEach(function(e) {
                n.set(e.name, e);
            }),
            e.forEach(function(e) {
                i.has(e.name) ||
                    !(function t(e) {
                        i.add(e.name), []
                            .concat(e.requires || [], e.requiresIfExists || [])
                            .forEach(function(e) {
                                i.has(e) || ((e = n.get(e)) && t(e));
                            }),
                            o.push(e);
                    })(e);
            }),
            o
        );
    }
    var Rt = { placement: "bottom", modifiers: [], strategy: "absolute" };

    function Bt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
        });
    }

    function Wt(e) {
        var e = (e = void 0 === e ? {} : e),
            t = e.defaultModifiers,
            h = void 0 === t ? [] : t,
            t = e.defaultOptions,
            d = void 0 === t ? Rt : t;
        return function(i, o, t) {
            void 0 === t && (t = d);
            var n,
                r,
                s = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Rt, d),
                    modifiersData: {},
                    elements: { reference: i, popper: o },
                    attributes: {},
                    styles: {},
                },
                a = [],
                l = !1,
                c = {
                    state: s,
                    setOptions: function(e) {
                        var n,
                            t,
                            e = "function" == typeof e ? e(s.options) : e,
                            e =
                            (u(),
                                (s.options = Object.assign({}, d, s.options, e)),
                                (s.scrollParents = {
                                    reference: Ge(i) ?
                                        Tt(i) :
                                        i.contextElement ?
                                        Tt(i.contextElement) :
                                        [],
                                    popper: Tt(o),
                                }),
                                (e = [].concat(h, s.options.modifiers)),
                                (t = e.reduce(function(e, t) {
                                    var n = e[t.name];
                                    return (
                                        (e[t.name] = n ?
                                            Object.assign({}, n, t, {
                                                options: Object.assign({}, n.options, t.options),
                                                data: Object.assign({}, n.data, t.data),
                                            }) :
                                            t),
                                        e
                                    );
                                }, {})),
                                (e = Object.keys(t).map(function(e) {
                                    return t[e];
                                })),
                                (n = qt(e)),
                                Qe.reduce(function(e, t) {
                                    return e.concat(
                                        n.filter(function(e) {
                                            return e.phase === t;
                                        })
                                    );
                                }, []));
                        return (
                            (s.orderedModifiers = e.filter(function(e) {
                                return e.enabled;
                            })),
                            s.orderedModifiers.forEach(function(e) {
                                var t = e.name,
                                    n = e.options,
                                    e = e.effect;
                                "function" == typeof e &&
                                    ((e = e({
                                            state: s,
                                            name: t,
                                            instance: c,
                                            options: void 0 === n ? {} : n,
                                        })),
                                        a.push(e || function() {}));
                            }),
                            c.update()
                        );
                    },
                    forceUpdate: function() {
                        if (!l) {
                            var e = s.elements,
                                t = e.reference,
                                e = e.popper;
                            if (Bt(t, e)) {
                                (s.rects = {
                                    reference: Mt(t, it(e), "fixed" === s.options.strategy),
                                    popper: Ze(e),
                                }),
                                (s.reset = !1),
                                (s.placement = s.options.placement),
                                s.orderedModifiers.forEach(function(e) {
                                    return (s.modifiersData[e.name] = Object.assign({},
                                        e.data
                                    ));
                                });
                                for (var n, i, o, r = 0; r < s.orderedModifiers.length; r++)
                                    !0 === s.reset ?
                                    ((s.reset = !1), (r = -1)) :
                                    ((n = (o = s.orderedModifiers[r]).fn),
                                        (i = o.options),
                                        (o = o.name),
                                        "function" == typeof n &&
                                        (s =
                                            n({
                                                state: s,
                                                options: void 0 === i ? {} : i,
                                                name: o,
                                                instance: c,
                                            }) || s));
                            }
                        }
                    },
                    update:
                        ((n = function() {
                                return new Promise(function(e) {
                                    c.forceUpdate(), e(s);
                                });
                            }),
                            function() {
                                return (r =
                                    r ||
                                    new Promise(function(e) {
                                        Promise.resolve().then(function() {
                                            (r = void 0), e(n());
                                        });
                                    }));
                            }),
                    destroy: function() {
                        u(), (l = !0);
                    },
                };
            return (
                Bt(i, o) &&
                c.setOptions(t).then(function(e) {
                    !l && t.onFirstUpdate && t.onFirstUpdate(e);
                }),
                c
            );

            function u() {
                a.forEach(function(e) {
                        return e();
                    }),
                    (a = []);
            }
        };
    }
    var Ft = Wt({ defaultModifiers: [mt, Pt, pt, x, It, Dt, Ht, C, jt] });
    const zt = Object.freeze({
            __proto__: null,
            popperGenerator: Wt,
            detectOverflow: Lt,
            createPopperBase: Wt(),
            createPopper: Ft,
            createPopperLite: Wt({ defaultModifiers: [mt, Pt, pt, x] }),
            top: A,
            bottom: S,
            right: L,
            left: D,
            auto: Pe,
            basePlacements: He,
            start: N,
            end: Me,
            clippingParents: qe,
            viewport: Re,
            popper: Be,
            reference: We,
            variationPlacements: Fe,
            placements: ze,
            beforeRead: ve,
            read: "read",
            afterRead: $e,
            beforeMain: Ue,
            main: "main",
            afterMain: Xe,
            beforeWrite: Ve,
            write: "write",
            afterWrite: Ye,
            modifierPhases: Qe,
            applyStyles: x,
            arrow: C,
            computeStyles: pt,
            eventListeners: mt,
            flip: Dt,
            hide: jt,
            offset: It,
            popperOffsets: Pt,
            preventOverflow: Ht,
        }),
        $t = "dropdown";
    (ve = ".bs.dropdown"), ($e = ".data-api");
    const Ut = "Escape",
        Xt = "ArrowUp",
        Vt = "ArrowDown",
        Yt = new RegExp(Xt + `|${Vt}|` + Ut);
    (Ue = "click" + ve + $e), (Xe = "keydown" + ve + $e);
    const Qt = "show",
        Gt = '[data-bs-toggle="dropdown"]',
        Kt = ".dropdown-menu",
        Jt = o() ? "top-end" : "top-start",
        Zt = o() ? "top-start" : "top-end",
        en = o() ? "bottom-end" : "bottom-start",
        tn = o() ? "bottom-start" : "bottom-end",
        nn = o() ? "left-start" : "right-start",
        on = o() ? "right-start" : "left-start",
        rn = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0,
        },
        sn = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)",
        };
    class j extends t {
        constructor(e, t) {
            super(e),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return rn;
        }
        static get DefaultType() {
            return sn;
        }
        static get NAME() {
            return $t;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (!a(this._element) && !this._isShown(this._menu)) {
                var e = { relatedTarget: this._element },
                    t = v.trigger(this._element, "show.bs.dropdown", e);
                if (!t.defaultPrevented) {
                    const n = j.getParentFromElement(this._element);
                    this._inNavbar ?
                        u.setDataAttribute(this._menu, "popper", "none") :
                        this._createPopper(n),
                        "ontouchstart" in document.documentElement &&
                        !n.closest(".navbar-nav") && []
                        .concat(...document.body.children)
                        .forEach((e) => v.on(e, "mouseover", z)),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        this._menu.classList.add(Qt),
                        this._element.classList.add(Qt),
                        v.trigger(this._element, "shown.bs.dropdown", e);
                }
            }
        }
        hide() {
            var e;
            !a(this._element) &&
                this._isShown(this._menu) &&
                ((e = { relatedTarget: this._element }), this._completeHide(e));
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _completeHide(e) {
            v.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
                ("ontouchstart" in document.documentElement && []
                    .concat(...document.body.children)
                    .forEach((e) => v.off(e, "mouseover", z)),
                    this._popper && this._popper.destroy(),
                    this._menu.classList.remove(Qt),
                    this._element.classList.remove(Qt),
                    this._element.setAttribute("aria-expanded", "false"),
                    u.removeDataAttribute(this._menu, "popper"),
                    v.trigger(this._element, "hidden.bs.dropdown", e));
        }
        _getConfig(e) {
            if (
                ((e = {
                        ...this.constructor.Default,
                        ...u.getDataAttributes(this._element),
                        ...e,
                    }),
                    n($t, e, this.constructor.DefaultType),
                    "object" != typeof e.reference ||
                    s(e.reference) ||
                    "function" == typeof e.reference.getBoundingClientRect)
            )
                return e;
            throw new TypeError(
                $t.toUpperCase() +
                ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
            );
        }
        _createPopper(e) {
            if (void 0 === zt)
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let t = this._element;
            "parent" === this._config.reference ?
                (t = e) :
                s(this._config.reference) ?
                (t = i(this._config.reference)) :
                "object" == typeof this._config.reference &&
                (t = this._config.reference);
            const n = this._getPopperConfig();
            e = n.modifiers.find(
                (e) => "applyStyles" === e.name && !1 === e.enabled
            );
            (this._popper = Ft(t, this._menu, n)),
            e && u.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(e = this._element) {
            return e.classList.contains(Qt);
        }
        _getMenuElement() {
            return d.next(this._element, Kt)[0];
        }
        _getPlacement() {
            const e = this._element.parentNode;
            if (e.classList.contains("dropend")) return nn;
            if (e.classList.contains("dropstart")) return on;
            var t =
                "end" ===
                getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? (t ? Zt : Jt) : t ? tn : en;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const t = this._config["offset"];
            return "string" == typeof t ?
                t.split(",").map((e) => Number.parseInt(e, 10)) :
                "function" == typeof t ?
                (e) => t(e, this._element) :
                t;
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                "static" === this._config.display &&
                (e.modifiers = [{ name: "applyStyles", enabled: !1 }]), {
                    ...e,
                    ...("function" == typeof this._config.popperConfig ?
                        this._config.popperConfig(e) :
                        this._config.popperConfig),
                }
            );
        }
        _selectMenuItem({ key: e, target: t }) {
            const n = d
                .find(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    this._menu
                )
                .filter(W);
            n.length && V(n, t, e === Vt, !n.includes(t)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = j.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(n) {
            if (!n || (2 !== n.button && ("keyup" !== n.type || "Tab" === n.key))) {
                var i = d.find(Gt);
                for (let e = 0, t = i.length; e < t; e++) {
                    const r = j.getInstance(i[e]);
                    if (r && !1 !== r._config.autoClose && r._isShown()) {
                        const s = { relatedTarget: r._element };
                        if (n) {
                            const a = n.composedPath();
                            var o = a.includes(r._menu);
                            if (
                                a.includes(r._element) ||
                                ("inside" === r._config.autoClose && !o) ||
                                ("outside" === r._config.autoClose && o)
                            )
                                continue;
                            if (
                                r._menu.contains(n.target) &&
                                (("keyup" === n.type && "Tab" === n.key) ||
                                    /input|select|option|textarea|form/i.test(n.target.tagName))
                            )
                                continue;
                            "click" === n.type && (s.clickEvent = n);
                        }
                        r._completeHide(s);
                    }
                }
            }
        }
        static getParentFromElement(e) {
            return r(e) || e.parentNode;
        }
        static dataApiKeydownHandler(e) {
            if (
                /input|textarea/i.test(e.target.tagName) ?
                !(
                    "Space" === e.key ||
                    (e.key !== Ut &&
                        ((e.key !== Vt && e.key !== Xt) || e.target.closest(Kt)))
                ) :
                Yt.test(e.key)
            ) {
                var t = this.classList.contains(Qt);
                if (
                    (t || e.key !== Ut) &&
                    (e.preventDefault(), e.stopPropagation(), !a(this))
                ) {
                    var n = this.matches(Gt) ? this : d.prev(this, Gt)[0];
                    const i = j.getOrCreateInstance(n);
                    if (e.key !== Ut)
                        return e.key === Xt || e.key === Vt ?
                            (t || i.show(), void i._selectMenuItem(e)) :
                            void((t && "Space" !== e.key) || j.clearMenus());
                    i.hide();
                }
            }
        }
    }
    v.on(document, Xe, Gt, j.dataApiKeydownHandler),
        v.on(document, Xe, Kt, j.dataApiKeydownHandler),
        v.on(document, Ue, j.clearMenus),
        v.on(document, "keyup.bs.dropdown.data-api", j.clearMenus),
        v.on(document, Ue, Gt, function(e) {
            e.preventDefault(), j.getOrCreateInstance(this).toggle();
        }),
        e(j);
    const an = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ln = ".sticky-top";
    class cn {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            var e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(
                    this._element,
                    "paddingRight",
                    (e) => e + t
                ),
                this._setElementAttributes(an, "paddingRight", (e) => e + t),
                this._setElementAttributes(ln, "marginRight", (e) => e - t);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(e, n, i) {
            const o = this.getWidth();
            this._applyManipulationCallback(e, (e) => {
                var t;
                (e !== this._element && window.innerWidth > e.clientWidth + o) ||
                (this._saveInitialAttribute(e, n),
                    (t = window.getComputedStyle(e)[n]),
                    (e.style[n] = i(Number.parseFloat(t)) + "px"));
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(an, "paddingRight"),
                this._resetElementAttributes(ln, "marginRight");
        }
        _saveInitialAttribute(e, t) {
            var n = e.style[t];
            n && u.setDataAttribute(e, t, n);
        }
        _resetElementAttributes(e, n) {
            this._applyManipulationCallback(e, (e) => {
                var t = u.getDataAttribute(e, n);
                void 0 === t ?
                    e.style.removeProperty(n) :
                    (u.removeDataAttribute(e, n), (e.style[n] = t));
            });
        }
        _applyManipulationCallback(e, t) {
            s(e) ? t(e) : d.find(e, this._element).forEach(t);
        }
        isOverflowing() {
            return 0 < this.getWidth();
        }
    }
    const un = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null,
        },
        hn = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)",
        },
        dn = "backdrop",
        fn = "mousedown.bs." + dn;
    class pn {
        constructor(e) {
            (this._config = this._getConfig(e)),
            (this._isAppended = !1),
            (this._element = null);
        }
        show(e) {
            this._config.isVisible ?
                (this._append(),
                    this._config.isAnimated && h(this._getElement()),
                    this._getElement().classList.add("show"),
                    this._emulateAnimation(() => {
                        l(e);
                    })) :
                l(e);
        }
        hide(e) {
            this._config.isVisible ?
                (this._getElement().classList.remove("show"),
                    this._emulateAnimation(() => {
                        this.dispose(), l(e);
                    })) :
                l(e);
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                this._config.isAnimated && e.classList.add("fade"),
                    (this._element = e);
            }
            return this._element;
        }
        _getConfig(e) {
            return (
                ((e = {...un, ...("object" == typeof e ? e : {}) }).rootElement = i(
                    e.rootElement
                )),
                n(dn, e, hn),
                e
            );
        }
        _append() {
            this._isAppended ||
                (this._config.rootElement.append(this._getElement()),
                    v.on(this._getElement(), fn, () => {
                        l(this._config.clickCallback);
                    }),
                    (this._isAppended = !0));
        }
        dispose() {
            this._isAppended &&
                (v.off(this._element, fn),
                    this._element.remove(),
                    (this._isAppended = !1));
        }
        _emulateAnimation(e) {
            X(e, this._getElement(), this._config.isAnimated);
        }
    }
    const gn = { trapElement: null, autofocus: !0 },
        mn = { trapElement: "element", autofocus: "boolean" };
    const vn = ".bs.focustrap",
        yn = (vn, vn, "backward");
    class bn {
        constructor(e) {
            (this._config = this._getConfig(e)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
        }
        activate() {
            const { trapElement: e, autofocus: t } = this._config;
            this._isActive ||
                (t && e.focus(),
                    v.off(document, vn),
                    v.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)),
                    v.on(document, "keydown.tab.bs.focustrap", (e) =>
                        this._handleKeydown(e)
                    ),
                    (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), v.off(document, vn));
        }
        _handleFocusin(e) {
            e = e.target;
            const t = this._config["trapElement"];
            if (e !== document && e !== t && !t.contains(e)) {
                const n = d.focusableChildren(t);
                (0 === n.length ?
                    t :
                    this._lastTabNavDirection === yn ?
                    n[n.length - 1] :
                    n[0]
                ).focus();
            }
        }
        _handleKeydown(e) {
            "Tab" === e.key &&
                (this._lastTabNavDirection = e.shiftKey ? yn : "forward");
        }
        _getConfig(e) {
            return (
                (e = {...gn, ...("object" == typeof e ? e : {}) }),
                n("focustrap", e, mn),
                e
            );
        }
    }
    const I = ".bs.modal";
    const _n = { backdrop: !0, keyboard: !0, focus: !0 },
        wn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
        },
        xn = (I, I, "hidden" + I),
        En = "show" + I,
        Tn = (I, "resize" + I),
        kn = "click.dismiss" + I,
        Cn = "keydown.dismiss" + I,
        An = (I, "mousedown.dismiss" + I);
    I;
    const Sn = "modal-open",
        Ln = "modal-static";
    class Dn extends t {
        constructor(e, t) {
            super(e),
                (this._config = this._getConfig(t)),
                (this._dialog = d.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new cn());
        }
        static get Default() {
            return _n;
        }
        static get NAME() {
            return "modal";
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
            this._isShown ||
                this._isTransitioning ||
                v.trigger(this._element, En, { relatedTarget: e }).defaultPrevented ||
                ((this._isShown = !0),
                    this._isAnimated() && (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add(Sn),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    v.on(this._dialog, An, () => {
                        v.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
                            e.target === this._element && (this._ignoreBackdropClick = !0);
                        });
                    }),
                    this._showBackdrop(() => this._showElement(e)));
        }
        hide() {
            var e;
            !this._isShown ||
                this._isTransitioning ||
                v.trigger(this._element, "hide.bs.modal").defaultPrevented ||
                ((this._isShown = !1),
                    (e = this._isAnimated()) && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    this._focustrap.deactivate(),
                    this._element.classList.remove("show"),
                    v.off(this._element, kn),
                    v.off(this._dialog, An),
                    this._queueCallback(() => this._hideModal(), this._element, e));
        }
        dispose() {
            [window, this._dialog].forEach((e) => v.off(e, I)),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new pn({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new bn({ trapElement: this._element });
        }
        _getConfig(e) {
            return (
                (e = {
                    ..._n,
                    ...u.getDataAttributes(this._element),
                    ...("object" == typeof e ? e : {}),
                }),
                n("modal", e, wn),
                e
            );
        }
        _showElement(e) {
            var t = this._isAnimated();
            const n = d.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0),
                n && (n.scrollTop = 0),
                t && h(this._element),
                this._element.classList.add("show");
            this._queueCallback(
                () => {
                    this._config.focus && this._focustrap.activate(),
                        (this._isTransitioning = !1),
                        v.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
                },
                this._dialog,
                t
            );
        }
        _setEscapeEvent() {
            this._isShown ?
                v.on(this._element, Cn, (e) => {
                    this._config.keyboard && "Escape" === e.key ?
                        (e.preventDefault(), this.hide()) :
                        this._config.keyboard ||
                        "Escape" !== e.key ||
                        this._triggerBackdropTransition();
                }) :
                v.off(this._element, Cn);
        }
        _setResizeEvent() {
            this._isShown ?
                v.on(window, Tn, () => this._adjustDialog()) :
                v.off(window, Tn);
        }
        _hideModal() {
            (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(Sn),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        v.trigger(this._element, xn);
                });
        }
        _showBackdrop(e) {
            v.on(this._element, kn, (e) => {
                    this._ignoreBackdropClick ?
                        (this._ignoreBackdropClick = !1) :
                        e.target === e.currentTarget &&
                        (!0 === this._config.backdrop ?
                            this.hide() :
                            "static" === this._config.backdrop &&
                            this._triggerBackdropTransition());
                }),
                this._backdrop.show(e);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            var e = v.trigger(this._element, "hidePrevented.bs.modal");
            if (!e.defaultPrevented) {
                const { classList: t, scrollHeight: n, style: i } = this._element,
                    o = n > document.documentElement.clientHeight;
                (!o && "hidden" === i.overflowY) ||
                t.contains(Ln) ||
                    (o || (i.overflowY = "hidden"),
                        t.add(Ln),
                        this._queueCallback(() => {
                            t.remove(Ln),
                                o ||
                                this._queueCallback(() => {
                                    i.overflowY = "";
                                }, this._dialog);
                        }, this._dialog),
                        this._element.focus());
            }
        }
        _adjustDialog() {
            var e =
                this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                n = 0 < t;
            ((!n && e && !o()) || (n && !e && o())) &&
            (this._element.style.paddingLeft = t + "px"),
            ((n && !e && !o()) || (!n && e && o())) &&
            (this._element.style.paddingRight = t + "px");
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, n) {
            return this.each(function() {
                const e = Dn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](n);
                }
            });
        }
    }
    v.on(
            document,
            "click.bs.modal.data-api",
            '[data-bs-toggle="modal"]',
            function(e) {
                const t = r(this);
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    v.one(t, En, (e) => {
                        e.defaultPrevented ||
                            v.one(t, xn, () => {
                                W(this) && this.focus();
                            });
                    });
                e = d.findOne(".modal.show");
                e && Dn.getInstance(e).hide();
                const n = Dn.getOrCreateInstance(t);
                n.toggle(this);
            }
        ),
        ue(Dn),
        e(Dn);
    const Nn = "offcanvas";
    Ve = ".bs.offcanvas";
    const On = { backdrop: !0, keyboard: !0, scroll: !1 },
        jn = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
        In = ".offcanvas.show",
        Pn = "hidden" + Ve;
    class P extends t {
        constructor(e, t) {
            super(e),
                (this._config = this._getConfig(t)),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get NAME() {
            return Nn;
        }
        static get Default() {
            return On;
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
            this._isShown ||
                v.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
                .defaultPrevented ||
                ((this._isShown = !0),
                    (this._element.style.visibility = "visible"),
                    this._backdrop.show(),
                    this._config.scroll || new cn().hide(),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add("show"),
                    this._queueCallback(
                        () => {
                            this._config.scroll || this._focustrap.activate(),
                                v.trigger(this._element, "shown.bs.offcanvas", {
                                    relatedTarget: e,
                                });
                        },
                        this._element, !0
                    ));
        }
        hide() {
            this._isShown &&
                !v.trigger(this._element, "hide.bs.offcanvas").defaultPrevented &&
                (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.remove("show"),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                (this._element.style.visibility = "hidden"),
                                this._config.scroll || new cn().reset(),
                                v.trigger(this._element, Pn);
                        },
                        this._element, !0
                    ));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _getConfig(e) {
            return (
                (e = {
                    ...On,
                    ...u.getDataAttributes(this._element),
                    ...("object" == typeof e ? e : {}),
                }),
                n(Nn, e, jn),
                e
            );
        }
        _initializeBackDrop() {
            return new pn({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide(),
            });
        }
        _initializeFocusTrap() {
            return new bn({ trapElement: this._element });
        }
        _addEventListeners() {
            v.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                this._config.keyboard && "Escape" === e.key && this.hide();
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = P.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    v.on(
            document,
            "click.bs.offcanvas.data-api",
            '[data-bs-toggle="offcanvas"]',
            function(e) {
                var t = r(this);
                if (
                    (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !a(this))
                ) {
                    v.one(t, Pn, () => {
                        W(this) && this.focus();
                    });
                    e = d.findOne(In);
                    e && e !== t && P.getInstance(e).hide();
                    const n = P.getOrCreateInstance(t);
                    n.toggle(this);
                }
            }
        ),
        v.on(window, "load.bs.offcanvas.data-api", () =>
            d.find(In).forEach((e) => P.getOrCreateInstance(e).show())
        ),
        ue(P),
        e(P);
    const Hn = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
    ]);
    const Mn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        qn =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    Ye = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
    };

    function Rn(e, n, t) {
        if (!e.length) return e;
        if (t && "function" == typeof t) return t(e);
        const i = new window.DOMParser(),
            o = i.parseFromString(e, "text/html");
        var r = [].concat(...o.body.querySelectorAll("*"));
        for (let e = 0, t = r.length; e < t; e++) {
            const a = r[e];
            var s = a.nodeName.toLowerCase();
            if (Object.keys(n).includes(s)) {
                const l = [].concat(...a.attributes),
                    c = [].concat(n["*"] || [], n[s] || []);
                l.forEach((e) => {
                    ((e, t) => {
                        var n = e.nodeName.toLowerCase();
                        if (t.includes(n))
                            return (!Hn.has(n) ||
                                Boolean(Mn.test(e.nodeValue) || qn.test(e.nodeValue))
                            );
                        const i = t.filter((e) => e instanceof RegExp);
                        for (let e = 0, t = i.length; e < t; e++)
                            if (i[e].test(n)) return !0;
                        return !1;
                    })(e, c) || a.removeAttribute(e.nodeName);
                });
            } else a.remove();
        }
        return o.body.innerHTML;
    }
    const Bn = "tooltip";
    x = ".bs.tooltip";
    const Wn = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Fn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
        },
        zn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: o() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: o() ? "right" : "left",
        },
        $n = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: Ye,
            popperConfig: null,
        },
        Un = {
            HIDE: "hide" + x,
            HIDDEN: "hidden" + x,
            SHOW: "show" + x,
            SHOWN: "shown" + x,
            INSERTED: "inserted" + x,
            CLICK: "click" + x,
            FOCUSIN: "focusin" + x,
            FOCUSOUT: "focusout" + x,
            MOUSEENTER: "mouseenter" + x,
            MOUSELEAVE: "mouseleave" + x,
        },
        Xn = "fade";
    const Vn = "show",
        Yn = "show",
        Qn = ".tooltip-inner",
        Gn = "hide.bs.modal",
        Kn = "hover",
        Jn = "focus";
    class Zn extends t {
        constructor(e, t) {
            if (void 0 === zt)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this.tip = null),
                this._setListeners();
        }
        static get Default() {
            return $n;
        }
        static get NAME() {
            return Bn;
        }
        static get Event() {
            return Un;
        }
        static get DefaultType() {
            return Fn;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(e) {
            if (this._isEnabled)
                if (e) {
                    const t = this._initializeOnDelegatedTarget(e);
                    (t._activeTrigger.click = !t._activeTrigger.click),
                    t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
                } else
                    this.getTipElement().classList.contains(Vn) ?
                    this._leave(null, this) :
                    this._enter(null, this);
        }
        dispose() {
            clearTimeout(this._timeout),
                v.off(this._element.closest(".modal"), Gn, this._hideModalHandler),
                this.tip && this.tip.remove(),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var e = v.trigger(this._element, this.constructor.Event.SHOW);
                const n = F(this._element);
                var t = (
                    null === n ? this._element.ownerDocument.documentElement : n
                ).contains(this._element);
                if (!e.defaultPrevented && t) {
                    "tooltip" === this.constructor.NAME &&
                        this.tip &&
                        this.getTitle() !== this.tip.querySelector(Qn).innerHTML &&
                        (this._disposePopper(), this.tip.remove(), (this.tip = null));
                    const i = this.getTipElement();
                    (e = ((e) => {
                        for (;
                            (e += Math.floor(1e6 * Math.random())),
                            document.getElementById(e);

                        );
                        return e;
                    })(this.constructor.NAME)),
                    (t =
                        (i.setAttribute("id", e),
                            this._element.setAttribute("aria-describedby", e),
                            this._config.animation && i.classList.add(Xn),
                            "function" == typeof this._config.placement ?
                            this._config.placement.call(this, i, this._element) :
                            this._config.placement)),
                    (e = this._getAttachment(t));
                    this._addAttachmentClass(e);
                    const o = this._config["container"],
                        r =
                        (ce.set(i, this.constructor.DATA_KEY, this),
                            this._element.ownerDocument.documentElement.contains(
                                this.tip
                            ) ||
                            (o.append(i),
                                v.trigger(this._element, this.constructor.Event.INSERTED)),
                            this._popper ?
                            this._popper.update() :
                            (this._popper = Ft(
                                this._element,
                                i,
                                this._getPopperConfig(e)
                            )),
                            i.classList.add(Vn),
                            this._resolvePossibleFunction(this._config.customClass));
                    r && i.classList.add(...r.split(" ")),
                        "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => {
                            v.on(e, "mouseover", z);
                        });
                    t = this.tip.classList.contains(Xn);
                    this._queueCallback(
                        () => {
                            var e = this._hoverState;
                            (this._hoverState = null),
                            v.trigger(this._element, this.constructor.Event.SHOWN),
                                "out" === e && this._leave(null, this);
                        },
                        this.tip,
                        t
                    );
                }
            }
        }
        hide() {
            if (this._popper) {
                const t = this.getTipElement();
                var e;
                v.trigger(this._element, this.constructor.Event.HIDE)
                    .defaultPrevented ||
                    (t.classList.remove(Vn),
                        "ontouchstart" in document.documentElement && []
                        .concat(...document.body.children)
                        .forEach((e) => v.off(e, "mouseover", z)),
                        (this._activeTrigger.click = !1),
                        (this._activeTrigger[Jn] = !1),
                        (this._activeTrigger[Kn] = !1),
                        (e = this.tip.classList.contains(Xn)),
                        this._queueCallback(
                            () => {
                                this._isWithActiveTrigger() ||
                                    (this._hoverState !== Yn && t.remove(),
                                        this._cleanTipClass(),
                                        this._element.removeAttribute("aria-describedby"),
                                        v.trigger(this._element, this.constructor.Event.HIDDEN),
                                        this._disposePopper());
                            },
                            this.tip,
                            e
                        ),
                        (this._hoverState = ""));
            }
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const e = document.createElement("div"),
                t = ((e.innerHTML = this._config.template), e.children[0]);
            return (
                this.setContent(t),
                t.classList.remove(Xn, Vn),
                (this.tip = t),
                this.tip
            );
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), Qn);
        }
        _sanitizeAndSetContent(e, t, n) {
            const i = d.findOne(n, e);
            !t && i ? i.remove() : this.setElementContent(i, t);
        }
        setElementContent(e, t) {
            if (null !== e)
                return s(t) ?
                    ((t = i(t)),
                        void(this._config.html ?
                            t.parentNode !== e && ((e.innerHTML = ""), e.append(t)) :
                            (e.textContent = t.textContent))) :
                    void(this._config.html ?
                        (this._config.sanitize &&
                            (t = Rn(
                                t,
                                this._config.allowList,
                                this._config.sanitizeFn
                            )),
                            (e.innerHTML = t)) :
                        (e.textContent = t));
        }
        getTitle() {
            var e =
                this._element.getAttribute("data-bs-original-title") ||
                this._config.title;
            return this._resolvePossibleFunction(e);
        }
        updateAttachment(e) {
            return "right" === e ? "end" : "left" === e ? "start" : e;
        }
        _initializeOnDelegatedTarget(e, t) {
            return (
                t ||
                this.constructor.getOrCreateInstance(
                    e.delegateTarget,
                    this._getDelegateConfig()
                )
            );
        }
        _getOffset() {
            const t = this._config["offset"];
            return "string" == typeof t ?
                t.split(",").map((e) => Number.parseInt(e, 10)) :
                "function" == typeof t ?
                (e) => t(e, this._element) :
                t;
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e;
        }
        _getPopperConfig(e) {
            e = {
                placement: e,
                modifiers: [{
                        name: "flip",
                        options: { fallbackPlacements: this._config.fallbackPlacements },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (e) => this._handlePopperPlacementChange(e),
                    },
                ],
                onFirstUpdate: (e) => {
                    e.options.placement !== e.placement &&
                        this._handlePopperPlacementChange(e);
                },
            };
            return {
                ...e,
                ...("function" == typeof this._config.popperConfig ?
                    this._config.popperConfig(e) :
                    this._config.popperConfig),
            };
        }
        _addAttachmentClass(e) {
            this.getTipElement().classList.add(
                this._getBasicClassPrefix() + "-" + this.updateAttachment(e)
            );
        }
        _getAttachment(e) {
            return zn[e.toUpperCase()];
        }
        _setListeners() {
            const e = this._config.trigger.split(" ");
            e.forEach((e) => {
                    var t;
                    "click" === e
                        ?
                        v.on(
                            this._element,
                            this.constructor.Event.CLICK,
                            this._config.selector,
                            (e) => this.toggle(e)
                        ) :
                        "manual" !== e &&
                        ((t =
                                e === Kn ?
                                this.constructor.Event.MOUSEENTER :
                                this.constructor.Event.FOCUSIN),
                            (e =
                                e === Kn ?
                                this.constructor.Event.MOUSELEAVE :
                                this.constructor.Event.FOCUSOUT),
                            v.on(this._element, t, this._config.selector, (e) =>
                                this._enter(e)
                            ),
                            v.on(this._element, e, this._config.selector, (e) =>
                                this._leave(e)
                            ));
                }),
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                v.on(this._element.closest(".modal"), Gn, this._hideModalHandler),
                this._config.selector ?
                (this._config = {
                    ...this._config,
                    trigger: "manual",
                    selector: "",
                }) :
                this._fixTitle();
        }
        _fixTitle() {
            var e = this._element.getAttribute("title"),
                t = typeof this._element.getAttribute("data-bs-original-title");
            (!e && "string" == t) ||
            (this._element.setAttribute("data-bs-original-title", e || ""), !e ||
                this._element.getAttribute("aria-label") ||
                this._element.textContent ||
                this._element.setAttribute("aria-label", e),
                this._element.setAttribute("title", ""));
        }
        _enter(e, t) {
            (t = this._initializeOnDelegatedTarget(e, t)),
            e && (t._activeTrigger["focusin" === e.type ? Jn : Kn] = !0),
                t.getTipElement().classList.contains(Vn) || t._hoverState === Yn ?
                (t._hoverState = Yn) :
                (clearTimeout(t._timeout),
                    (t._hoverState = Yn),
                    t._config.delay && t._config.delay.show ?
                    (t._timeout = setTimeout(() => {
                        t._hoverState === Yn && t.show();
                    }, t._config.delay.show)) :
                    t.show());
        }
        _leave(e, t) {
            (t = this._initializeOnDelegatedTarget(e, t)),
            e &&
                (t._activeTrigger["focusout" === e.type ? Jn : Kn] =
                    t._element.contains(e.relatedTarget)),
                t._isWithActiveTrigger() ||
                (clearTimeout(t._timeout),
                    (t._hoverState = "out"),
                    t._config.delay && t._config.delay.hide ?
                    (t._timeout = setTimeout(() => {
                        "out" === t._hoverState && t.hide();
                    }, t._config.delay.hide)) :
                    t.hide());
        }
        _isWithActiveTrigger() {
            for (const e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1;
        }
        _getConfig(e) {
            const t = u.getDataAttributes(this._element);
            return (
                Object.keys(t).forEach((e) => {
                    Wn.has(e) && delete t[e];
                }),
                ((e = {
                    ...this.constructor.Default,
                    ...t,
                    ...("object" == typeof e && e ? e : {}),
                }).container = !1 === e.container ? document.body : i(e.container)),
                "number" == typeof e.delay &&
                (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content && (e.content = e.content.toString()),
                n(Bn, e, this.constructor.DefaultType),
                e.sanitize &&
                (e.template = Rn(e.template, e.allowList, e.sanitizeFn)),
                e
            );
        }
        _getDelegateConfig() {
            const e = {};
            for (const t in this._config)
                this.constructor.Default[t] !== this._config[t] &&
                (e[t] = this._config[t]);
            return e;
        }
        _cleanTipClass() {
            const t = this.getTipElement();
            var e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g");
            const n = t.getAttribute("class").match(e);
            null !== n &&
                0 < n.length &&
                n.map((e) => e.trim()).forEach((e) => t.classList.remove(e));
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(e) {
            e = e.state;
            e &&
                ((this.tip = e.elements.popper),
                    this._cleanTipClass(),
                    this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Zn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    e(Zn);
    C = ".bs.popover";
    const ei = {
            ...Zn.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        ti = {...Zn.DefaultType, content: "(string|element|function)" },
        ni = {
            HIDE: "hide" + C,
            HIDDEN: "hidden" + C,
            SHOW: "show" + C,
            SHOWN: "shown" + C,
            INSERTED: "inserted" + C,
            CLICK: "click" + C,
            FOCUSIN: "focusin" + C,
            FOCUSOUT: "focusout" + C,
            MOUSEENTER: "mouseenter" + C,
            MOUSELEAVE: "mouseleave" + C,
        };
    class ii extends Zn {
        static get Default() {
            return ei;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return ni;
        }
        static get DefaultType() {
            return ti;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
                this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ii.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    e(ii);
    const oi = "scrollspy";
    const ri = ".bs.scrollspy";
    const si = { offset: 10, method: "auto", target: "" },
        ai = { offset: "number", method: "string", target: "(string|element)" };
    ri, ri;
    ri;
    const li = "dropdown-item",
        ci = "active",
        ui = ".nav-link",
        hi = ".list-group-item",
        di = ui + `, ${hi}, .` + li,
        fi = "position";
    class pi extends t {
        constructor(e, t) {
            super(e),
                (this._scrollElement =
                    "BODY" === this._element.tagName ? window : this._element),
                (this._config = this._getConfig(t)),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                v.on(this._scrollElement, "scroll.bs.scrollspy", () =>
                    this._process()
                ),
                this.refresh(),
                this._process();
        }
        static get Default() {
            return si;
        }
        static get NAME() {
            return oi;
        }
        refresh() {
            var e =
                this._scrollElement === this._scrollElement.window ? "offset" : fi;
            const i = "auto" === this._config.method ? e : this._config.method,
                o = i === fi ? this._getScrollTop() : 0,
                t =
                ((this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    d.find(di, this._config.target));
            t.map((e) => {
                    e = R(e);
                    const t = e ? d.findOne(e) : null;
                    if (t) {
                        var n = t.getBoundingClientRect();
                        if (n.width || n.height) return [u[i](t).top + o, e];
                    }
                    return null;
                })
                .filter((e) => e)
                .sort((e, t) => e[0] - t[0])
                .forEach((e) => {
                    this._offsets.push(e[0]), this._targets.push(e[1]);
                });
        }
        dispose() {
            v.off(this._scrollElement, ri), super.dispose();
        }
        _getConfig(e) {
            return (
                ((e = {
                    ...si,
                    ...u.getDataAttributes(this._element),
                    ...("object" == typeof e && e ? e : {}),
                }).target = i(e.target) || document.documentElement),
                n(oi, e, ai),
                e
            );
        }
        _getScrollTop() {
            return this._scrollElement === window ?
                this._scrollElement.pageYOffset :
                this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return (
                this._scrollElement.scrollHeight ||
                Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                )
            );
        }
        _getOffsetHeight() {
            return this._scrollElement === window ?
                window.innerHeight :
                this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t))
                return (
                    (e = this._targets[this._targets.length - 1]),
                    void(this._activeTarget !== e && this._activate(e))
                );
            if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                return (this._activeTarget = null), void this._clear();
            for (let e = this._offsets.length; e--;)
                this._activeTarget !== this._targets[e] &&
                t >= this._offsets[e] &&
                (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
                this._activate(this._targets[e]);
        }
        _activate(t) {
            (this._activeTarget = t), this._clear();
            const e = di
                .split(",")
                .map((e) => e + `[data-bs-target="${t}"],${e}[href="${t}"]`),
                n = d.findOne(e.join(","), this._config.target);
            n.classList.add(ci),
                n.classList.contains(li) ?
                d
                .findOne(".dropdown-toggle", n.closest(".dropdown"))
                .classList.add(ci) :
                d.parents(n, ".nav, .list-group").forEach((e) => {
                    d.prev(e, ui + ", " + hi).forEach((e) => e.classList.add(ci)),
                        d.prev(e, ".nav-item").forEach((e) => {
                            d.children(e, ui).forEach((e) => e.classList.add(ci));
                        });
                }),
                v.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t,
                });
        }
        _clear() {
            d.find(di, this._config.target)
                .filter((e) => e.classList.contains(ci))
                .forEach((e) => e.classList.remove(ci));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = pi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    v.on(window, "load.bs.scrollspy.data-api", () => {
            d.find('[data-bs-spy="scroll"]').forEach((e) => new pi(e));
        }),
        e(pi);
    const gi = "active",
        mi = ".active",
        vi = ":scope > li > .active";
    class yi extends t {
        static get NAME() {
            return "tab";
        }
        show() {
            if (!this._element.parentNode ||
                this._element.parentNode.nodeType !== Node.ELEMENT_NODE ||
                !this._element.classList.contains(gi)
            ) {
                let e;
                var t = r(this._element),
                    n = this._element.closest(".nav, .list-group"),
                    i =
                    (n &&
                        ((i = "UL" === n.nodeName || "OL" === n.nodeName ? vi : mi),
                            (e = (e = d.find(i, n))[e.length - 1])),
                        e ?
                        v.trigger(e, "hide.bs.tab", { relatedTarget: this._element }) :
                        null);
                v.trigger(this._element, "show.bs.tab", { relatedTarget: e })
                    .defaultPrevented ||
                    (null !== i && i.defaultPrevented) ||
                    (this._activate(this._element, n),
                        (i = () => {
                            v.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
                                v.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
                        }),
                        t ? this._activate(t, t.parentNode, i) : i());
            }
        }
        _activate(e, t, n) {
            const i = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ?
                d.children(t, mi) :
                d.find(vi, t)
            )[0];
            var t = n && i && i.classList.contains("fade"),
                o = () => this._transitionComplete(e, i, n);
            i && t ?
                (i.classList.remove("show"), this._queueCallback(o, e, !0)) :
                o();
        }
        _transitionComplete(e, t, n) {
            if (t) {
                t.classList.remove(gi);
                const o = d.findOne(":scope > .dropdown-menu .active", t.parentNode);
                o && o.classList.remove(gi),
                    "tab" === t.getAttribute("role") &&
                    t.setAttribute("aria-selected", !1);
            }
            e.classList.add(gi),
                "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !0),
                h(e),
                e.classList.contains("fade") && e.classList.add("show");
            let i = e.parentNode;
            (i = i && "LI" === i.nodeName ? i.parentNode : i) &&
            i.classList.contains("dropdown-menu") &&
                ((t = e.closest(".dropdown")) &&
                    d.find(".dropdown-toggle", t).forEach((e) => e.classList.add(gi)),
                    e.setAttribute("aria-expanded", !0)),
                n && n();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = yi.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    v.on(
            document,
            "click.bs.tab.data-api",
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            function(e) {
                if (
                    (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !a(this))
                ) {
                    const t = yi.getOrCreateInstance(this);
                    t.show();
                }
            }
        ),
        e(yi);
    const bi = "show",
        _i = "showing",
        wi = { animation: "boolean", autohide: "boolean", delay: "number" },
        xi = { animation: !0, autohide: !0, delay: 5e3 };
    class Ei extends t {
        constructor(e, t) {
            super(e),
                (this._config = this._getConfig(t)),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get DefaultType() {
            return wi;
        }
        static get Default() {
            return xi;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            v.trigger(this._element, "show.bs.toast").defaultPrevented ||
                (this._clearTimeout(),
                    this._config.animation && this._element.classList.add("fade"),
                    this._element.classList.remove("hide"),
                    h(this._element),
                    this._element.classList.add(bi),
                    this._element.classList.add(_i),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(_i),
                                v.trigger(this._element, "shown.bs.toast"),
                                this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    ));
        }
        hide() {
            this._element.classList.contains(bi) &&
                !v.trigger(this._element, "hide.bs.toast").defaultPrevented &&
                (this._element.classList.add(_i),
                    this._queueCallback(
                        () => {
                            this._element.classList.add("hide"),
                                this._element.classList.remove(_i),
                                this._element.classList.remove(bi),
                                v.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    ));
        }
        dispose() {
            this._clearTimeout(),
                this._element.classList.contains(bi) &&
                this._element.classList.remove(bi),
                super.dispose();
        }
        _getConfig(e) {
            return (
                (e = {
                    ...xi,
                    ...u.getDataAttributes(this._element),
                    ...("object" == typeof e && e ? e : {}),
                }),
                n("toast", e, this.constructor.DefaultType),
                e
            );
        }
        _maybeScheduleHide() {
            !this._config.autohide ||
                this._hasMouseInteraction ||
                this._hasKeyboardInteraction ||
                (this._timeout = setTimeout(() => {
                    this.hide();
                }, this._config.delay));
        }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t;
            }
            t
                ?
                this._clearTimeout() :
                ((e = e.relatedTarget),
                    this._element === e ||
                    this._element.contains(e) ||
                    this._maybeScheduleHide());
        }
        _setListeners() {
            v.on(this._element, "mouseover.bs.toast", (e) =>
                    this._onInteraction(e, !0)
                ),
                v.on(this._element, "mouseout.bs.toast", (e) =>
                    this._onInteraction(e, !1)
                ),
                v.on(this._element, "focusin.bs.toast", (e) =>
                    this._onInteraction(e, !0)
                ),
                v.on(this._element, "focusout.bs.toast", (e) =>
                    this._onInteraction(e, !1)
                );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ei.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return (
        ue(Ei),
        e(Ei), {
            Alert: he,
            Button: fe,
            Carousel: y,
            Collapse: Ie,
            Dropdown: j,
            Modal: Dn,
            Offcanvas: P,
            Popover: ii,
            ScrollSpy: pi,
            Tab: yi,
            Toast: Ei,
            Tooltip: Zn,
        }
    );
}),
(function(e) {
    "use strict";
    "object" == typeof exports
        ?
        (module.exports = e(window.jQuery)) :
        "function" == typeof define && define.amd ?
        define(["jquery"], e) :
        window.jQuery && !window.jQuery.fn.colorpicker && e(window.jQuery);
})(function(a) {
    "use strict";

    function i(e, t) {
        (this.value = { h: 0, s: 0, b: 0, a: 1 }),
        (this.origFormat = null),
        t && a.extend(this.colors, t),
            e &&
            (void 0 !== e.toLowerCase ?
                this.setColor((e += "")) :
                void 0 !== e.h && (this.value = e));
    }

    function r(e, t) {
        var n;
        (this.element = a(e).addClass("colorpicker-element")),
        (this.options = a.extend(!0, {}, o, this.element.data(), t)),
        (this.component = this.options.component),
        (this.component = !1 !== this.component && this.element.find(this.component)),
        this.component && 0 === this.component.length && (this.component = !1),
            (this.container = !0 === this.options.container ?
                this.element :
                this.options.container),
            (this.container = !1 !== this.container && a(this.container)),
            (this.input = this.element.is("input") ?
                this.element :
                !!this.options.input && this.element.find(this.options.input)),
            this.input && 0 === this.input.length && (this.input = !1),
            (this.color = new i(!1 !== this.options.color ? this.options.color : this.getValue(),
                this.options.colorSelectors
            )),
            (this.format = !1 !== this.options.format ?
                this.options.format :
                this.color.origFormat), !1 !== this.options.color &&
            (this.updateInput(this.color), this.updateData(this.color)),
            (this.picker = a(this.options.template)),
            this.options.customClass &&
            this.picker.addClass(this.options.customClass),
            this.options.inline ?
            this.picker.addClass("colorpicker-inline colorpicker-visible") :
            this.picker.addClass("colorpicker-hidden"),
            this.options.horizontal &&
            this.picker.addClass("colorpicker-horizontal"),
            ("rgba" !== this.format &&
                "hsla" !== this.format &&
                !1 !== this.options.format) ||
            this.picker.addClass("colorpicker-with-alpha"),
            "right" === this.options.align &&
            this.picker.addClass("colorpicker-right"), !0 === this.options.inline &&
            this.picker.addClass("colorpicker-no-arrow"),
            this.options.colorSelectors &&
            (a.each((n = this).options.colorSelectors, function(e, t) {
                    t = a("<i />").css("background-color", t).data("class", e);
                    t.click(function() {
                            n.setValue(a(this).css("background-color"));
                        }),
                        n.picker.find(".colorpicker-selectors").append(t);
                }),
                this.picker.find(".colorpicker-selectors").show()),
            this.picker.on(
                "mousedown.colorpicker touchstart.colorpicker",
                a.proxy(this.mousedown, this)
            ),
            this.picker.appendTo(this.container || a("body")), !1 !== this.input &&
            (this.input.on({ "keyup.colorpicker": a.proxy(this.keyup, this) }),
                this.input.on({ "change.colorpicker": a.proxy(this.change, this) }), !1 === this.component &&
                this.element.on({ "focus.colorpicker": a.proxy(this.show, this) }), !1 === this.options.inline &&
                this.element.on({
                    "focusout.colorpicker": a.proxy(this.hide, this),
                })), !1 !== this.component &&
            this.component.on({ "click.colorpicker": a.proxy(this.show, this) }), !1 === this.input &&
            !1 === this.component &&
            this.element.on({ "click.colorpicker": a.proxy(this.show, this) }), !1 !== this.input &&
            !1 !== this.component &&
            "color" === this.input.attr("type") &&
            this.input.on({
                "click.colorpicker": a.proxy(this.show, this),
                "focus.colorpicker": a.proxy(this.show, this),
            }),
            this.update(),
            a(
                a.proxy(function() {
                    this.element.trigger("create");
                }, this)
            );
    }
    var o = {
        horizontal: !(i.prototype = {
            constructor: i,
            colors: {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32",
                transparent: "transparent",
            },
            _sanitizeNumber: function(e) {
                return "number" == typeof e ?
                    e :
                    isNaN(e) || null === e || "" === e || void 0 === e ?
                    1 :
                    "" === e ?
                    0 :
                    void 0 !== e.toLowerCase ?
                    (e.match(/^\./) && (e = "0" + e),
                        Math.ceil(100 * parseFloat(e)) / 100) :
                    1;
            },
            isTransparent: function(e) {
                return (!!e &&
                    ("transparent" === (e = e.toLowerCase().trim()) ||
                        e.match(/#?00000000/) ||
                        e.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))
                );
            },
            rgbaIsTransparent: function(e) {
                return 0 === e.r && 0 === e.g && 0 === e.b && 0 === e.a;
            },
            setColor: function(e) {
                (e = e.toLowerCase().trim()) &&
                (this.isTransparent(e) ?
                    (this.value = { h: 0, s: 0, b: 0, a: 0 }) :
                    (this.value = this.stringToHSB(e) || {
                        h: 0,
                        s: 0,
                        b: 0,
                        a: 1,
                    }));
            },
            stringToHSB: function(i) {
                (i = i.toLowerCase()),
                void 0 !== this.colors[i] && ((i = this.colors[i]), (o = "alias"));
                var o,
                    r = this,
                    s = !1;
                return (
                    a.each(this.stringParsers, function(e, t) {
                        var n = t.re.exec(i),
                            n = n && t.parse.apply(r, [n]),
                            t = o || t.format || "rgba";
                        return (!n ||
                            ((s = t.match(/hsla?/) ?
                                    r.RGBtoHSB.apply(r, r.HSLtoRGB.apply(r, n)) :
                                    r.RGBtoHSB.apply(r, n)),
                                (r.origFormat = t), !1)
                        );
                    }),
                    s
                );
            },
            setHue: function(e) {
                this.value.h = 1 - e;
            },
            setSaturation: function(e) {
                this.value.s = e;
            },
            setBrightness: function(e) {
                this.value.b = 1 - e;
            },
            setAlpha: function(e) {
                this.value.a =
                    Math.round((parseInt(100 * (1 - e), 10) / 100) * 100) / 100;
            },
            toRGB: function(e, t, n, i) {
                var o, r, s;
                return (
                    e || ((e = this.value.h), (t = this.value.s), (n = this.value.b)),
                    (e = ((e *= 360) % 360) / 60),
                    (o = r = t = n - (n = n * t)),
                    (o += [n, (s = n * (1 - Math.abs((e % 2) - 1))), 0, 0, s, n][
                        (e = ~~e)
                    ]),
                    (r += [s, n, n, s, 0, 0][e]),
                    (t += [0, 0, s, n, n, s][e]), {
                        r: Math.round(255 * o),
                        g: Math.round(255 * r),
                        b: Math.round(255 * t),
                        a: i || this.value.a,
                    }
                );
            },
            toHex: function(e, t, n, i) {
                e = this.toRGB(e, t, n, i);
                return this.rgbaIsTransparent(e) ?
                    "transparent" :
                    "#" +
                    (
                        (1 << 24) |
                        (parseInt(e.r) << 16) |
                        (parseInt(e.g) << 8) |
                        parseInt(e.b)
                    )
                    .toString(16)
                    .substr(1);
            },
            toHSL: function(e, t, n, i) {
                (e = e || this.value.h),
                (t = t || this.value.s),
                (n = n || this.value.b),
                (i = i || this.value.a);
                var o = (2 - t) * n,
                    t = t * n;
                return (
                    (t /= 0 < o && o <= 1 ? o : 2 - o),
                    (o /= 2),
                    1 < t && (t = 1), {
                        h: isNaN(e) ? 0 : e,
                        s: isNaN(t) ? 0 : t,
                        l: isNaN(o) ? 0 : o,
                        a: isNaN(i) ? 0 : i,
                    }
                );
            },
            toAlias: function(e, t, n, i) {
                var o,
                    r = this.toHex(e, t, n, i);
                for (o in this.colors)
                    if (this.colors[o] === r) return o;
                return !1;
            },
            RGBtoHSB: function(e, t, n, i) {
                var o, r, s;
                return (
                    (e /= 255),
                    (t /= 255),
                    (n /= 255),
                    (o =
                        0 == (s = (r = Math.max(e, t, n)) - Math.min(e, t, n)) ?
                        0 :
                        s / r), {
                        h: this._sanitizeNumber(
                            ((((0 == s ?
                                            null :
                                            r === e ?
                                            (t - n) / s :
                                            r === t ?
                                            (n - e) / s + 2 :
                                            (e - t) / s + 4) +
                                        360) %
                                    6) *
                                60) /
                            360
                        ),
                        s: o,
                        b: r,
                        a: this._sanitizeNumber(i),
                    }
                );
            },
            HueToRGB: function(e, t, n) {
                return (
                    n < 0 ? (n += 1) : 1 < n && --n,
                    6 * n < 1 ?
                    e + (t - e) * n * 6 :
                    2 * n < 1 ?
                    t :
                    3 * n < 2 ?
                    e + (t - e) * (2 / 3 - n) * 6 :
                    e
                );
            },
            HSLtoRGB: function(e, t, n, i) {
                t < 0 && (t = 0);
                var t = 2 * n - (n = n <= 0.5 ? n * (1 + t) : n + t - n * t),
                    o = e,
                    r = e - 1 / 3;
                return [
                    Math.round(255 * this.HueToRGB(t, n, e + 1 / 3)),
                    Math.round(255 * this.HueToRGB(t, n, o)),
                    Math.round(255 * this.HueToRGB(t, n, r)),
                    this._sanitizeNumber(i),
                ];
            },
            toString: function(e) {
                var t = !1;
                switch ((e = e || "rgba")) {
                    case "rgb":
                        return (
                            (t = this.toRGB()),
                            this.rgbaIsTransparent(t) ?
                            "transparent" :
                            "rgb(" + t.r + "," + t.g + "," + t.b + ")"
                        );
                    case "rgba":
                        return (
                            "rgba(" +
                            (t = this.toRGB()).r +
                            "," +
                            t.g +
                            "," +
                            t.b +
                            "," +
                            t.a +
                            ")"
                        );
                    case "hsl":
                        return (
                            (t = this.toHSL()),
                            "hsl(" +
                            Math.round(360 * t.h) +
                            "," +
                            Math.round(100 * t.s) +
                            "%," +
                            Math.round(100 * t.l) +
                            "%)"
                        );
                    case "hsla":
                        return (
                            (t = this.toHSL()),
                            "hsla(" +
                            Math.round(360 * t.h) +
                            "," +
                            Math.round(100 * t.s) +
                            "%," +
                            Math.round(100 * t.l) +
                            "%," +
                            t.a +
                            ")"
                        );
                    case "hex":
                        return this.toHex();
                    case "alias":
                        return this.toAlias() || this.toHex();
                    default:
                        return t;
                }
            },
            stringParsers: [{
                    re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
                    format: "rgb",
                    parse: function(e) {
                        return [e[1], e[2], e[3], 1];
                    },
                },
                {
                    re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
                    format: "rgb",
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], 1];
                    },
                },
                {
                    re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                    format: "rgba",
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]];
                    },
                },
                {
                    re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                    format: "rgba",
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]];
                    },
                },
                {
                    re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
                    format: "hsl",
                    parse: function(e) {
                        return [e[1] / 360, e[2] / 100, e[3] / 100, e[4]];
                    },
                },
                {
                    re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                    format: "hsla",
                    parse: function(e) {
                        return [e[1] / 360, e[2] / 100, e[3] / 100, e[4]];
                    },
                },
                {
                    re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
                    format: "hex",
                    parse: function(e) {
                        return [
                            parseInt(e[1], 16),
                            parseInt(e[2], 16),
                            parseInt(e[3], 16),
                            1,
                        ];
                    },
                },
                {
                    re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
                    format: "hex",
                    parse: function(e) {
                        return [
                            parseInt(e[1] + e[1], 16),
                            parseInt(e[2] + e[2], 16),
                            parseInt(e[3] + e[3], 16),
                            1,
                        ];
                    },
                },
            ],
            colorNameToHex: function(e) {
                return (
                    void 0 !== this.colors[e.toLowerCase()] &&
                    this.colors[e.toLowerCase()]
                );
            },
        }),
        inline: !1,
        color: !1,
        format: !1,
        input: "input",
        container: !1,
        component: ".add-on, .input-group-addon",
        sliders: {
            saturation: {
                maxLeft: 100,
                maxTop: 100,
                callLeft: "setSaturation",
                callTop: "setBrightness",
            },
            hue: { maxLeft: 0, maxTop: 100, callLeft: !1, callTop: "setHue" },
            alpha: { maxLeft: 0, maxTop: 100, callLeft: !1, callTop: "setAlpha" },
        },
        slidersHorz: {
            saturation: {
                maxLeft: 100,
                maxTop: 100,
                callLeft: "setSaturation",
                callTop: "setBrightness",
            },
            hue: { maxLeft: 100, maxTop: 0, callLeft: "setHue", callTop: !1 },
            alpha: { maxLeft: 100, maxTop: 0, callLeft: "setAlpha", callTop: !1 },
        },
        template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
        align: "right",
        customClass: null,
        colorSelectors: null,
    };
    (r.Color = i),
    (r.prototype = {
        constructor: r,
        destroy: function() {
            this.picker.remove(),
                this.element.removeData("colorpicker", "color").off(".colorpicker"), !1 !== this.input && this.input.off(".colorpicker"), !1 !== this.component && this.component.off(".colorpicker"),
                this.element.removeClass("colorpicker-element"),
                this.element.trigger({ type: "destroy" });
        },
        reposition: function() {
            if (!1 !== this.options.inline || this.options.container) return !1;
            var e =
                this.container && this.container[0] !== document.body ?
                "position" :
                "offset",
                t = this.component || this.element,
                e = t[e]();
            "right" === this.options.align &&
                (e.left -= this.picker.outerWidth() - t.outerWidth()),
                this.picker.css({ top: e.top + t.outerHeight(), left: e.left });
        },
        show: function(e) {
            if (this.isDisabled()) return !1;
            this.picker
                .addClass("colorpicker-visible")
                .removeClass("colorpicker-hidden"),
                this.reposition(),
                a(window).on("resize.colorpicker", a.proxy(this.reposition, this)), !e ||
                (this.hasInput() && "color" !== this.input.attr("type")) ||
                (e.stopPropagation &&
                    e.preventDefault &&
                    (e.stopPropagation(), e.preventDefault())),
                (!this.component && this.input) ||
                !1 !== this.options.inline ||
                a(window.document).on({
                    "mousedown.colorpicker": a.proxy(this.hide, this),
                }),
                this.element.trigger({ type: "showPicker", color: this.color });
        },
        hide: function() {
            this.picker
                .addClass("colorpicker-hidden")
                .removeClass("colorpicker-visible"),
                a(window).off("resize.colorpicker", this.reposition),
                a(document).off({ "mousedown.colorpicker": this.hide }),
                this.update(),
                this.element.trigger({ type: "hidePicker", color: this.color });
        },
        updateData: function(e) {
            return (
                (e = e || this.color.toString(this.format)),
                this.element.data("color", e),
                e
            );
        },
        updateInput: function(e) {
            var t;
            return (
                (e = e || this.color.toString(this.format)), !1 !== this.input &&
                (this.options.colorSelectors &&
                    ((t = new i(e, this.options.colorSelectors).toAlias()),
                        void 0 !== this.options.colorSelectors[t] && (e = t)),
                    this.input.prop("value", e)),
                e
            );
        },
        updatePicker: function(e) {
            void 0 !== e && (this.color = new i(e, this.options.colorSelectors));
            var t = !1 === this.options.horizontal ?
                this.options.sliders :
                this.options.slidersHorz,
                n = this.picker.find("i");
            if (0 !== n.length)
                return (!1 === this.options.horizontal ?
                    ((t = this.options.sliders),
                        n
                        .eq(1)
                        .css("top", t.hue.maxTop * (1 - this.color.value.h))
                        .end()
                        .eq(2)
                        .css("top", t.alpha.maxTop * (1 - this.color.value.a))) :
                    ((t = this.options.slidersHorz),
                        n
                        .eq(1)
                        .css("left", t.hue.maxLeft * (1 - this.color.value.h))
                        .end()
                        .eq(2)
                        .css("left", t.alpha.maxLeft * (1 - this.color.value.a))),
                    n
                    .eq(0)
                    .css({
                        top: t.saturation.maxTop -
                            this.color.value.b * t.saturation.maxTop,
                        left: this.color.value.s * t.saturation.maxLeft,
                    }),
                    this.picker
                    .find(".colorpicker-saturation")
                    .css(
                        "backgroundColor",
                        this.color.toHex(this.color.value.h, 1, 1, 1)
                    ),
                    this.picker
                    .find(".colorpicker-alpha")
                    .css("backgroundColor", this.color.toHex()),
                    this.picker
                    .find(".colorpicker-color, .colorpicker-color div")
                    .css("backgroundColor", this.color.toString(this.format)),
                    e
                );
        },
        updateComponent: function(e) {
            var t;
            return (
                (e = e || this.color.toString(this.format)), !1 !== this.component &&
                (0 < (t = this.component.find("i").eq(0)).length ?
                    t :
                    this.component
                ).css({ backgroundColor: e }),
                e
            );
        },
        update: function(e) {
            var t;
            return (
                (!1 === this.getValue(!1) && !0 !== e) ||
                ((t = this.updateComponent()),
                    this.updateInput(t),
                    this.updateData(t),
                    this.updatePicker()),
                t
            );
        },
        setValue: function(e) {
            (this.color = new i(e, this.options.colorSelectors)),
            this.update(!0),
                this.element.trigger({
                    type: "changeColor",
                    color: this.color,
                    value: e,
                });
        },
        getValue: function(e) {
            var t;
            return (
                (e = void 0 === e ? "#000000" : e),
                (t =
                    void 0 !==
                    (t = this.hasInput() ?
                        this.input.val() :
                        this.element.data("color")) &&
                    "" !== t &&
                    null !== t ?
                    t :
                    e)
            );
        },
        hasInput: function() {
            return !1 !== this.input;
        },
        isDisabled: function() {
            return !!this.hasInput() && !0 === this.input.prop("disabled");
        },
        disable: function() {
            return (!!this.hasInput() &&
                (this.input.prop("disabled", !0),
                    this.element.trigger({
                        type: "disable",
                        color: this.color,
                        value: this.getValue(),
                    }), !0)
            );
        },
        enable: function() {
            return (!!this.hasInput() &&
                (this.input.prop("disabled", !1),
                    this.element.trigger({
                        type: "enable",
                        color: this.color,
                        value: this.getValue(),
                    }), !0)
            );
        },
        currentSlider: null,
        mousePointer: { left: 0, top: 0 },
        mousedown: function(e) {
            !e.pageX &&
                !e.pageY &&
                e.originalEvent &&
                e.originalEvent.touches &&
                ((e.pageX = e.originalEvent.touches[0].pageX),
                    (e.pageY = e.originalEvent.touches[0].pageY)),
                e.stopPropagation(),
                e.preventDefault();
            var t = a(e.target).closest("div"),
                n = this.options.horizontal ?
                this.options.slidersHorz :
                this.options.sliders;
            if (!t.is(".colorpicker")) {
                if (t.is(".colorpicker-saturation"))
                    this.currentSlider = a.extend({}, n.saturation);
                else if (t.is(".colorpicker-hue"))
                    this.currentSlider = a.extend({}, n.hue);
                else {
                    if (!t.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = a.extend({}, n.alpha);
                }
                n = t.offset();
                (this.currentSlider.guide = t.find("i")[0].style),
                (this.currentSlider.left = e.pageX - n.left),
                (this.currentSlider.top = e.pageY - n.top),
                (this.mousePointer = { left: e.pageX, top: e.pageY }),
                a(document)
                    .on({
                        "mousemove.colorpicker": a.proxy(this.mousemove, this),
                        "touchmove.colorpicker": a.proxy(this.mousemove, this),
                        "mouseup.colorpicker": a.proxy(this.mouseup, this),
                        "touchend.colorpicker": a.proxy(this.mouseup, this),
                    })
                    .trigger("mousemove");
            }
            return !1;
        },
        mousemove: function(e) {
            !e.pageX &&
                !e.pageY &&
                e.originalEvent &&
                e.originalEvent.touches &&
                ((e.pageX = e.originalEvent.touches[0].pageX),
                    (e.pageY = e.originalEvent.touches[0].pageY)),
                e.stopPropagation(),
                e.preventDefault();
            var t = Math.max(
                    0,
                    Math.min(
                        this.currentSlider.maxLeft,
                        this.currentSlider.left +
                        ((e.pageX || this.mousePointer.left) - this.mousePointer.left)
                    )
                ),
                e = Math.max(
                    0,
                    Math.min(
                        this.currentSlider.maxTop,
                        this.currentSlider.top +
                        ((e.pageY || this.mousePointer.top) - this.mousePointer.top)
                    )
                );
            return (
                (this.currentSlider.guide.left = t + "px"),
                (this.currentSlider.guide.top = e + "px"),
                this.currentSlider.callLeft &&
                this.color[this.currentSlider.callLeft].call(
                    this.color,
                    t / this.currentSlider.maxLeft
                ),
                this.currentSlider.callTop &&
                this.color[this.currentSlider.callTop].call(
                    this.color,
                    e / this.currentSlider.maxTop
                ),
                "setAlpha" === this.currentSlider.callTop &&
                !1 === this.options.format &&
                (1 !== this.color.value.a ?
                    ((this.format = "rgba"), (this.color.origFormat = "rgba")) :
                    ((this.format = "hex"), (this.color.origFormat = "hex"))),
                this.update(!0),
                this.element.trigger({ type: "changeColor", color: this.color }), !1
            );
        },
        mouseup: function(e) {
            return (
                e.stopPropagation(),
                e.preventDefault(),
                a(document).off({
                    "mousemove.colorpicker": this.mousemove,
                    "touchmove.colorpicker": this.mousemove,
                    "mouseup.colorpicker": this.mouseup,
                    "touchend.colorpicker": this.mouseup,
                }), !1
            );
        },
        change: function(e) {
            this.keyup(e);
        },
        keyup: function(e) {
            38 === e.keyCode ?
                (this.color.value.a < 1 &&
                    (this.color.value.a =
                        Math.round(100 * (this.color.value.a + 0.01)) / 100),
                    this.update(!0)) :
                40 === e.keyCode ?
                (0 < this.color.value.a &&
                    (this.color.value.a =
                        Math.round(100 * (this.color.value.a - 0.01)) / 100),
                    this.update(!0)) :
                ((this.color = new i(
                        this.input.val(),
                        this.options.colorSelectors
                    )),
                    this.color.origFormat &&
                    !1 === this.options.format &&
                    (this.format = this.color.origFormat), !1 !== this.getValue(!1) &&
                    (this.updateData(),
                        this.updateComponent(),
                        this.updatePicker())),
                this.element.trigger({
                    type: "changeColor",
                    color: this.color,
                    value: this.input.val(),
                });
        },
    }),
    (a.colorpicker = r),
    (a.fn.colorpicker = function(n) {
        var i = Array.prototype.slice.call(arguments, 1),
            e = 1 === this.length,
            o = null,
            t = this.each(function() {
                var e = a(this),
                    t = e.data("colorpicker");
                t ||
                    ((t = new r(this, "object" == typeof n ? n : {})),
                        e.data("colorpicker", t)),
                    (o =
                        "string" == typeof n ?
                        a.isFunction(t[n]) ?
                        t[n].apply(t, i) :
                        (i.length && (t[n] = i[0]), t[n]) :
                        e);
            });
        return e ? o : t;
    }),
    (a.fn.colorpicker.constructor = r);
});