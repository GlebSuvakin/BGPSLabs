(this["webpackJsonpdeanery-ikbo-02-16-virachev"] = this["webpackJsonpdeanery-ikbo-02-16-virachev"] || []).push([
    [0], { 13: function(t, e, n) { t.exports = n(22) }, 18: function(t, e, n) {}, 19: function(t, e, n) { t.exports = n.p + "static/media/logo.5d5d9eef.svg" }, 20: function(t, e, n) {}, 22: function(t, e, n) { "use strict";
            n.r(e); var a = n(0),
                r = n.n(a),
                c = n(8),
                o = n.n(c),
                u = (n(18), n(2)),
                l = n(3),
                i = n(5),
                s = n(4),
                m = n(6),
                d = (n(19), n(20), n(21), n(23)),
                h = function(t) {
                    function e() { return Object(u.a)(this, e), Object(i.a)(this, Object(s.a)(e).apply(this, arguments)) } return Object(m.a)(e, t), Object(l.a)(e, [{ key: "render", value: function() { return r.a.createElement(d.a, { bordered: !0 }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "#"), r.a.createElement("th", null, "\u0424\u0418\u041e"), r.a.createElement("th", null, "\u041f\u0440\u0418\u0421"), r.a.createElement("th", null, "\u0421\u0418\u0418"))), r.a.createElement("tbody", null, this.props.students.map((function(t, e) { return r.a.createElement("tr", null, r.a.createElement("td", null, e + 1), r.a.createElement("td", null, t.name), r.a.createElement("td", null, t.markPrIS), r.a.createElement("td", null, t.markSII)) })))) } }]), e }(r.a.Component),
                f = { getStudents: function() { return fetch("/getStudents").then((function(t) { return t.json })) } },
                p = function(t) {
                    function e() { var t; return Object(u.a)(this, e), (t = Object(i.a)(this, Object(s.a)(e).call(this))).state = { activeGroup: 0, students: null }, t } return Object(m.a)(e, t), Object(l.a)(e, [{ key: "componentDidMount", value: function() { var t = this;
                            f.getStudents().then((function(e) { t.setState({ students: e }) })) } }, { key: "render", value: function() { var t = this; return r.a.createElement("div", { className: "App" }, this.state.students ? r.a.createElement(h, { students: this.state.students[this.state.activeGroup] }) : null, r.a.createElement("button", { onClick: function() { t.setState({ activeGroup: 0 }) } }, "\u0413\u0440\u0443\u043f\u043f\u0430 1"), r.a.createElement("button", { onClick: function() { t.setState({ activeGroup: 1 }) } }, "\u0413\u0440\u0443\u043f\u043f\u0430 2"), r.a.createElement("button", { onClick: function() { t.setState({ activeGroup: 2 }) } }, "\u0413\u0440\u0443\u043f\u043f\u0430 3")) } }]), e }(r.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(r.a.createElement(p, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(t) { t.unregister() })).catch((function(t) { console.error(t.message) })) } },
    [
        [13, 1, 2]
    ]
]);
//# sourceMappingURL=main.7b7454ab.chunk.js.map