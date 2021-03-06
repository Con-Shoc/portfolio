function getText(t) {
    return t[textProp]
}
$(document).foundation();
var mainbottom = $("#main").offset().top + $("#main").height();

$(window).on("scroll", function() {
    var t = Math.round($(window).scrollTop());
    t > mainbottom ? $(".nav.fixed.contain-to-grid").addClass("past-main") : $(".nav.fixed.contain-to-grid").removeClass("past-main"), t > mainbottom ? $(".nav.icon-bar").addClass("past-main") : $(".nav.icon-bar").removeClass("past-main")
});

var textProp = void 0 !== document.documentElement.textContent ? "textContent" : "innerText";
docReady(function() {
    var t = new Isotope(".grid", {
            itemSelector: ".element-item",
            layoutMode: "fitRows"
        }),
        e = {
            numberGreaterThan50: function(t) {
                var e = getText(t.querySelector(".number"));
                return parseInt(e, 10) > 50
            },
            ium: function(t) {
                var e = getText(t.querySelector(".name"));
                return e.match(/ium$/)
            }
        },
        n = document.querySelector(".filter-group");
    eventie.bind(n, "click", function(n) {
        if (matchesSelector(n.target, "button")) {
            var a = n.target.getAttribute("data-filter");
            a = e[a] || a, t.arrange({
                filter: a
            })
        }
    })
}), $(".filter-group button").on("click", function() {
    $(this).siblings().removeClass("active"), $(this).addClass("active")
}), $("a[href^='http://']").attr("target", "_blank"), docReady(function() {
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = $(this.hash);
                if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html, body").animate({
                    scrollTop: t.offset().top
                }, 1e3), !1
            }
        })
    })
});
