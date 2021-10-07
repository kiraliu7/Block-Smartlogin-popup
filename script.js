// ==UserScript==
// @name         remove login geeksforgeeks
// @author       kiraliu7
// @match        *://www.geeksforgeeks.org/*
// @run-at           document-start
// @grant            none
// ==/UserScript==

var intervalid=setInterval(removeLogin, 200);
function removeLogin(){
    const elements = document.getElementsByClassName("login-modal-div");
    if(elements.length > 0){
        $('.modal-container').remove();
        $('.spinner-loading-overlay').remove();
        setTimeout(function(){
            $("body").css("position", "relative");
            $(document).on("keyup");
            $(document).on("keydown");
            $(document).on("click");
            geeksforgeeksSetup();
            window.onscroll = null;
            //practice promiss
            let practicePromise = new Promise(function(resolve, reject) {
                let msg="this message should be printed twice";
                console.log(msg);
                resolve(msg); // when successful
                reject("not the same but still twice");  // when error
            });
            practicePromise.then(
                  function(msg) {
                      console.log(msg);
                      console.log("done");},
                  function(msg) {
                      console.log(msg);
                      console.log("wrongly done");}
            )
        }, 500);
    }
};

function geeksforgeeksSetup(){
    jQuery(function() {
    var e = 0
      , t = !1;
    jQuery(window).scroll(function(i) {
        var r = jQuery(this).scrollTop();
        r > e && e >= 200 ? (t = !0,
        jQuery(".header-main__logo").addClass("shrink"),
        jQuery(".header-main__logo svg:last-child").attr("aria-hidden", !0),
        jQuery(".header-main__logo svg:first-child").removeClass("normal"),
        jQuery(".header-main__logo svg:first-child").addClass("ready")) : e < 200 && t && (jQuery(".header-main__logo").removeClass("shrink"),
        jQuery(".header-main__logo svg:first-child").removeClass("ready"),
        jQuery(".header-main__logo svg:first-child").addClass("normal"),
        jQuery(".header-main__logo svg:last-child").attr("aria-hidden", !1)),
        e = r
    }),
    jQuery("body").on("click", "\n       .header-main__list-item[data-expandable=true],\n       .header-sidebar__list-item[data-expandable=true],\n       .gfg-overlay,.header-main__profile,\n       .gcse-search__close,\n       .hide-search", function(e) {
        e.stopPropagation();
        let t = jQuery(this);
        if (t.hasClass("header-main__list-item")) {
            jQuery(".gfg-icon_ndot").removeClass("active"),
            jQuery(".nineDot-menu").attr("data-show", !1);
            let e = t.hasClass("selected");
            if (jQuery(".header-main__list .header-main__list-item[data-expandable=true]").each(function() {
                jQuery(this).attr("aria-expanded", !1).removeClass("selected"),
                jQuery(".mega-dropdown__list-item.selected").each(function() {
                    jQuery(this).removeClass("selected").attr("aria-expanded", !1)
                })
            }),
            e)
                return void t.attr("aria-expanded", !1).removeClass("selected");
            t.attr("aria-expanded", !0).addClass("selected")
        }
        if (t.hasClass("header-sidebar__list-item")) {
            let e = t.attr("aria-expanded");
            if (jQuery(".header-sidebar__list-item[data-expandable=true]").each(function() {
                jQuery(this).attr("aria-expanded", !1).removeClass("selected")
            }),
            "true" == e)
                return void t.attr("aria-expanded", !1).removeClass("selected");
            t.attr("aria-expanded", !0).addClass("selected")
        }
        t.hasClass("gfg-overlay") && jQuery(".hamburger-menu").click(),
        t.hasClass("header-main__profile") && (jQuery(".gfg-icon_ndot").removeClass("active"),
        jQuery(".nineDot-menu").attr("data-show", !1),
        t.toggleClass("selected")),
        t.hasClass("gcse-search__close") && (jQuery("#gcse-search-input").val(""),
        t.toggleClass("display-none")),
        t.hasClass("hide-search") && r(!0, ()=>{}
        )
    }),
    jQuery("body").on("click", ".mega-dropdown__list-item", function(e) {
        e.stopPropagation();
        let t = jQuery(this)
          , i = t.hasClass("selected");
        t.parent(".mega-dropdown").children().each(function(e) {
            jQuery(this).attr("aria-expanded", !1).removeClass("selected"),
            jQuery(this).find(".mega-dropdown").children("[data-expandable=true]").each(function(e) {
                jQuery(this).attr("aria-expanded", !1).removeClass("selected")
            })
        }),
        i ? t.attr("aria-expanded", !1).removeClass("selected") : t.attr("aria-expanded", !0).addClass("selected")
    }),
    jQuery("body").on("click", ".header-top__times,.hamburger-menu", function(e) {
        let t = jQuery(this);
        if (t.hasClass("header-top__times") && (localStorage.setItem("gfgRemoveTN", (new Date).getTime()),
        jQuery(".header-top__notification").hide(100)),
        t.hasClass("hamburger-menu")) {
            if (e.preventDefault(),
            jQuery(".header-sidebar__wrapper").toggleClass("open"),
            jQuery("#gfg-overlay").toggleClass("display-none"),
            jQuery(this).find(".gfg-burger-1.open").length > 0)
                return void jQuery(this).children().removeClass("open");
            jQuery(this).children().addClass("open"),
            r(!0, ()=>{}
            )
        }
    }),
    window.onclick = function(e) {
        "header-main__list-item" !== e.target && "mega-dropdown__list-item" !== e.target && jQuery(".header-main__list-item[aria-expanded=true]").each(function(e) {
            jQuery(this).attr("aria-expanded", !1).removeClass("selected")
        }),
        "header-main__profile" !== e.target && jQuery(".header-main__profile").removeClass("selected"),
        e.target && e.target.classList && -1 == [...e.target.classList].indexOf("gfg-icon_ndot") && (jQuery(".gfg-icon_ndot").removeClass("active"),
        jQuery(".nineDot-menu").attr("data-show", !1));
        var t = document.getElementById("displayModalBackdrop");
        e.target == t && w()
    }
    ,
    window.onresize = function() {
        window.innerWidth > 992 && r(!0, ()=>{}
        ),
        a()
    }
    ;
    (()=>{
        jQuery("#sidebar-list").html("");
        let e = []
          , t = "";
        const i = i=>{
            let r = jQuery(i).children("span").text()
              , a = []
              , s = !1
              , n = jQuery(i).children(".mega-dropdown").children("[data-child=true]");
            s = !!n.length,
            t += `\n                <li class="header-sidebar__list-item" data-expandable=${s} aria-expanded="false">\n                    <span>${r}\n                        <i class="gfg-icon gfg-icon_arrow-down"></i>\n                    </span>\n\n                    `,
            s && (t += '<ul class="mega-dropdown">'),
            n.each(function() {
                let e = jQuery(this)
                  , i = {}
                  , r = "";
                if ("true" === e.attr("data-expandable")) {
                    i.text = e.children("span").text(),
                    i.href = e.children("span").attr("data-href");
                    var s = e.find('ul[class="mega-dropdown"]').html();
                    r = `<span> ${i.text}<i class="gfg-icon gfg-icon_arrow-down"></i></span>`,
                    r += `<ul class="mega-dropdown">${s}</ul>`
                } else
                    i.text = e.children("a").text(),
                    i.href = e.children("a").attr("href"),
                    r = `<a href='${i.href || "#"}'>${i.text}</a>`;
                a.push(i),
                t += `<li class="mega-dropdown__list-item">\n                        ${r}\n                    </li>`
            }),
            t += s ? "</ul>" : "",
            t += "</li>",
            e.push({
                parent: r,
                childrens: a
            })
        }
        ;
        jQuery(".mega-dropdown__list-item[data-parent=true]").each(function(e) {
            i(jQuery(this))
        }),
        jQuery(".header-main__list .header-main__list-item[data-parent=true]").each(function(e) {
            i(jQuery(this))
        }),
        jQuery("#sidebar-list").append(t)
    }
    )(),
    jQuery("body").on("submit", "#gcse-form", function(e) {
        e.preventDefault(),
        r(!1, e=>{
            e && j()
        }
        )
    });
    const r = (e=!1,t)=>{
        let i = jQuery("#gcse-form")
          , r = i.children("button");
        return r.hasClass("not-expanded") && !e ? (jQuery(".googleTranslateToggle.gfg-icon_times").click(),
        jQuery("#gcse-form").attr("data-sm", !0),
        i.children("input").attr("aria-expanded", !0),
        r.removeClass("not-expanded"),
        r.css("display", "none"),
        t(!1)) : e ? (jQuery("#gcse-form").attr("data-sm", !1),
        r.removeAttr("style"),
        i.children("input").attr("aria-expanded", !1),
        r.addClass("not-expanded"),
        jQuery(".gcse-search__close").addClass("display-none"),
        t(null)) : t(!0)
    }
    ;
    jQuery(".gcse-search__icon-n,.header--search__input-icon").on("click", function(e) {
        e.preventDefault(),
        jQuery(this).addClass("hide-me"),
        jQuery(".gcse-search__close-n").toggleClass("show-me"),
        jQuery(".gsc-control-cse,.gcse_input-class").toggleClass("show-me"),
        jQuery(".googleTranslateToggle.gfg-icon_times").click()
    }),
    jQuery(".gcse-search__close-n").on("click", function(e) {
        e.preventDefault(),
        jQuery(".gcse-search__icon-n").removeClass("hide-me"),
        jQuery(".header--search__input-icon").removeClass("hide-me"),
        jQuery(".gcse-search__close-n").toggleClass("show-me"),
        jQuery(".gsc-control-cse,.gcse_input-class").toggleClass("show-me")
    }),
    jQuery("body").on("click", ".header-main__slider-arrow", function(e) {
        let t = document.getElementById("hslider")
          , {scrollLeft: i, children: r} = t;
        for (var a = 0, s = 0; s < r.length; s++)
            a += r[s].offsetWidth;
        let n = Math.min(a, i + 300);
        jQuery(this).hasClass("previous") && (n = Math.max(0, i - 300)),
        t.scrollTo({
            top: 0,
            left: n,
            behavior: "smooth",
            "-webkit-overflow-scrolling": "touch"
        })
    });
    const a = ()=>{
        try {
            let i = document.getElementById("hslider")
              , {children: r} = i;
            for (var e = 0, t = 0; t < r.length; t++)
                e += r[t].offsetWidth;
            window.innerWidth - 2 > e ? jQuery(".header-main__slider-arrow").addClass("hideIt") : jQuery(".header-main__slider-arrow").removeClass("hideIt")
        } catch (e) {}
    }
    ;
    a(),
    jQuery("body").on("click", ".gsc-modal-background-image, .gsc-results-close-btn", function(e) {
        jQuery("#header--search__input").val("")
    }),
    jQuery("#header--search__input").on("click", function() {
        jQuery("#header--search__input").focus()
    }),
    jQuery("#header--search__input").keyup(function() {
        var e = jQuery.Event("keyup");
        jQuery("#gsc-i-id1").val(jQuery(this).val()).focus().trigger(e)
    }),
    jQuery("body").keyup(function(e) {
        jQuery("#header--search__input").val(jQuery("#gsc-i-id1").val())
    }),
    jQuery(".gsc-search-button").keydown(function(e) {
        jQuery("#header--search__input").val(jQuery("#gsc-i-id1").val())
    }),
    jQuery(".header--search__trigger").click(function() {
        jQuery(".header--search").addClass("header--search__visible"),
        jQuery("#header--search__input").focus()
    });
    let s = {
        width: window.innerWidth
    };
    function n(e={
        flex: 2
    }) {
        let t = jQuery(".gfg--carousel_wrap-slide");
        jQuery(".gfg--carousel_wrap").attr("data-flex", e.flex),
        t.css({
            flexBasis: `${100 / e.flex}%`
        }),
        t.each(function(t, i) {
            jQuery(i).removeClass("initial active prev next"),
            t >= e.flex ? jQuery(i).addClass("next") : jQuery(i).addClass("initial")
        });
        let r = Math.ceil(t.length / e.flex)
          , a = ""
          , s = "";
        for (i = 0; i < r; i++)
            a += `<div class="page p ${0 === i ? "active" : ""}" data-page="${i + 1}">${i + 1}</div>`,
            s += `<div class="page p dots ${0 === i ? "active" : ""}" data-page="${i + 1}"></div>`;
        jQuery(".page-list .pages").html(a),
        jQuery(".carousel--dots").html(s)
    }
    function o() {
        if (window.innerWidth > 1024.1) {
            let e = jQuery(".gfg--carousel_wrap").attr("data-flex");
            s.flex = e,
            n({
                flex: e
            })
        }
        if (window.innerWidth < 1024 && (s.flex = 2,
        n({
            flex: 2
        })),
        window.innerWidth < 768) {
            let e = jQuery(".gfg--carousel_wrap").attr("data-tb-flex");
            s.flex = e || 1,
            n({
                flex: e || 1
            })
        }
        if (window.innerWidth < 400) {
            let e = jQuery(".gfg--carousel_wrap").attr("data-sm-flex");
            s.flex = e || 1,
            n({
                flex: e || 1
            })
        }
        jQuery(".page.p").on("click", function() {
            let e = jQuery(this).attr("data-page")
              , t = jQuery(`.page.p[data-page=${e}]`)
              , i = (e - 1) * s.flex
              , r = e * s.flex;
            jQuery(".gfg--carousel_wrap-slide").each(function(e, t) {
                e < i ? jQuery(t).addClass("prev").removeClass("initial active next") : e >= i && e < r ? jQuery(t).addClass("active").removeClass("initial prev next") : e >= r && jQuery(t).addClass("next").removeClass("initial active prev")
            }),
            jQuery(".page.p").removeClass("active"),
            jQuery(t).addClass("active")
        }),
        jQuery(".carousel__button--next").on("click", function() {
            let e = ".gfg--carousel_wrap-slide"
              , t = jQuery(e)
              , i = jQuery(`${e}.initial`)
              , r = jQuery(`${e}.active`)
              , a = jQuery(`${e}.next`);
            if (t.length > 1) {
                i.length ? i.addClass("prev").removeClass("initial") : r.addClass("prev").removeClass("active"),
                a.addClass("active").removeClass("next");
                let s = t.length - 1 > 1 * a.attr("data-slide") ? 1 * a.attr("data-slide") + 1 : 0;
                jQuery(`${e}[data-slide=${s}]`).addClass("next").removeClass("prev")
            }
        }),
        jQuery(".gfg--carousel-nav button").on("click", function() {
            let e = jQuery(this).parent().parent().children(".gfg--carousel_wrap")
              , t = Number(e.attr("data-flex"))
              , i = Math.ceil(e.children().length / t)
              , r = Number(e.attr("data-slide"))
              , a = jQuery(this).attr("data-action")
              , {si: s, ei: n, d: o} = {};
            "next" === a ? r + 1 <= i && (o = !((n = (s = r * t) + t) > i * Number(t))) : r <= i && (n = (s = (r - 2) * t) + t,
            o = s >= 0),
            o && (jQuery(this).parent().parent().children(".gfg--carousel_wrap").children().each((e,t)=>{
                e < s ? jQuery(t).removeClass("active prev next initial").addClass("prev") : e >= s && e < n ? jQuery(t).removeClass("active prev next initial").addClass("active") : jQuery(t).removeClass("active prev next initial").addClass("next")
            }
            ),
            e.attr("data-slide", r + ("next" === a ? 1 : -1))),
            0 == s ? jQuery(".gfg--carousel-nav button[data-action='prev']").addClass("hideIt") : jQuery(".gfg--carousel-nav button[data-action='prev']").removeClass("hideIt"),
            n >= i * Number(t) ? jQuery(".gfg--carousel-nav button[data-action='next']").addClass("hideIt") : jQuery(".gfg--carousel-nav button[data-action='next']").removeClass("hideIt")
        })
    }
    o(),
    window.onresize = function(e) {
        s.width != window.innerWidth && (s.width = window.innerWidth,
        o())
    }
    ,
    jQuery(document).on("click", ".vote-this", function(e) {
        if (loginData.isLoggedIn) {
            jQuery("#vote-wrap-error").remove();
            let e = jQuery(this)
              , t = 0
              , i = {
                type: t,
                iconClass: ".favoriteIcon",
                iconTextClass: ".favoriteLike",
                buttonHTML: "Like",
                buttonActiveHTML: "Liked",
                icon: "",
                iconActive: ""
            };
            if ("vote" == e.attr("data-type") && (i = {
                type: t = 1,
                iconClass: ".voteIcon",
                iconTextClass: ".postVoting",
                buttonHTML: "Vote",
                buttonActiveHTML: "Voted",
                icon: "",
                iconActive: "",
                tooltipHTML: `Voted for ${jQuery(this).attr("data-tag")}`
            }),
            e.children("i.gfg-icon.active").length >= 1 && 1 === t)
                return;
            e.css({
                pointerEvents: "none"
            }),
            jQuery.ajax({
                url: utilUrl + "gfg/upvoteArticle.php",
                method: "POST",
                data: {
                    post_id: post_id,
                    time: loginData.time,
                    csrf_token: loginData.csrf_token,
                    action_type: t
                },
                xhrFields: {
                    withCredentials: !0
                },
                success: function(r) {
                    var a = jQuery(".favoriteText").html().trim();
                    "success" == r.trim() && (jQuery(`${i.iconClass}`).hasClass("active") && 1 !== t ? (jQuery(`${i.iconClass}`).removeClass("active").html(i.icon),
                    jQuery(`${i.iconTextClass}`).html(i.buttonHTML),
                    0 !== i.type || isNaN(a) || jQuery(".favoriteText").html(parseInt(a) - 1)) : (jQuery(`${i.iconClass}`).addClass("active").html(i.iconActive),
                    jQuery(`${i.iconTextClass}`).html(i.buttonActiveHTML),
                    1 === t && e.children(".tooltiptext").html(i.tooltipHTML),
                    0 !== i.type || isNaN(a) ? 0 === i.type && jQuery(".favoriteText").html(1) : jQuery(".favoriteText").html(parseInt(a) + 1)))
                },
                error: function(e, t) {
                    0 === i.type && (upvoted ? jQuery(`${i.iconClass}`).removeClass("active").html(i.icon) : jQuery(`${i.iconClass}`).addClass("active").html(i.iconActive))
                },
                complete: function() {
                    e.css({
                        pointerEvents: "unset"
                    })
                }
            })
        } else
            $(".header-main__wrapper").find(".header-main__signup.login-modal-btn").length && $(".header-main__wrapper").find(".header-main__signup.login-modal-btn").click(),
            jQuery("#vote-wrap-error").remove(),
            jQuery(".vote-wrap").after('<div id="vote-wrap-error" class="non-logged-in-response">Please Login</div>')
    });
    const l = "bookmark-article"
      , u = "article-difficulty"
      , d = "article-slider"
      , c = "nineDot-menu"
      , m = "google_translate_element"
      , _ = "google_translate_mobile"
      , p = "toggleGFGTheme"
      , g = "gsapAnimationScroll"
      , h = "gcseCustomSearchAction";
    jQuery("body").on("click", "[data-gfg-action]", async function(e) {
        e.preventDefault();
        let t = jQuery(this).attr("data-gfg-action");
        if (t === d) {
            let e = 1 * jQuery("[data-article-slider]").attr("data-article-slider") == 1 ? 0 : 1;
            jQuery("[data-article-slider]").attr("data-article-slider", e)
        }
        if (t === l) {
            let e = jQuery(this).attr("data-bookmark-value");
            jQuery(this).toggleClass("no-event");
            try {
                const i = await q({
                    actionName: t,
                    payload: {
                        post_id: post_id,
                        op: "todo",
                        url: window.location.href,
                        time: loginData.time,
                        csrf_token: loginData.csrf_token,
                        type: 1
                    },
                    responseType: "html"
                });
                jQuery(this).toggleClass("no-event"),
                i && !i.error ? (jQuery(this).children(".gfg-icon").toggleClass("gfg-icon_bookmark gfg-icon_bookmark-filled"),
                jQuery(this).attr("data-bookmark-value", 1 * e ? 0 : 1)) : i.error && alert(error.renderMessage || "Some error occured. Please try again later.")
            } catch (e) {
                jQuery(this).toggleClass("no-event")
            }
        }
        if (t === u) {
            let e = jQuery(this);
            jQuery("button[data-rating]").css({
                pointerEvents: "none",
                opacity: .75
            }),
            jQuery(".gfg-process").html("Saving...");
            try {
                const i = await q({
                    actionName: t,
                    payload: {
                        post_id: post_id,
                        rating: jQuery(this).attr("data-rating"),
                        url: window.location.href,
                        time: loginData.time,
                        csrf_token: loginData.csrf_token
                    },
                    responseType: "html"
                });
                jQuery("button[data-rating]").css({
                    pointerEvents: "all",
                    opacity: 1
                }),
                i && !i.error ? (jQuery("button[data-rating]").removeClass("active"),
                e.addClass("active"),
                jQuery(".gfg-process").html("Your response has been recorded.")) : i.error && jQuery(".gfg-process").html(`${i.renderMessage}`)
            } catch (e) {
                jQuery("button[data-rating]").css({
                    pointerEvents: "all",
                    opacity: 1
                }),
                jQuery(".gfg-process").html(e.renderMessage || "Some error occured. Please try again later.")
            }
        }
        if (t === c) {
            let e = jQuery(`.${t}`).attr("data-show");
            jQuery(this).toggleClass("active"),
            jQuery(`.${t}`).attr("data-show", "true" != e)
        }
        if (t === m) {
            let e = jQuery(`#${t}`).attr("data-show");
            jQuery(`#${t}`).attr("data-show", "true" != e),
            jQuery(".googleTranslateToggle").toggleClass("gfg-icon_translate gfg-icon_times"),
            jQuery("#g_translater").attr("data-show", "true" != e),
            "false" == e && jQuery(".hide-search").click()
        }
        if (t === _) {
            let e = jQuery(`#${t}`).attr("data-show");
            jQuery(`#${t}`).attr("data-show", "true" != e),
            jQuery("#google_translate_element").attr("data-show", "true" != e),
            jQuery(".googleTranslateToggleMobile").toggleClass("gfg-icon_translate gfg-icon_times")
        }
        if (t === g) {
            var i = document.getElementById("geeky-ambassador").getBoundingClientRect().top - 100;
            window.scrollTo({
                top: i,
                behavior: "smooth"
            })
        }
        if (t === p) {
            setTheme(getThemeFromCookie() == gfgThemeList.DARK ? gfgThemeList.LIGHT : gfgThemeList.DARK)
        }
        t === h && j({
            page: jQuery(this).attr("data-page-id")
        })
    });
    const y = window.matchMedia("(prefers-color-scheme: Dark)");
    let f = getThemeFromCookie();
    y.matches && !f ? (setTheme(gfgThemeList.DARK),
    jQuery(".darkMode-wrap").attr("data-mode", "Switch to Light Mode")) : f == gfgThemeList.DARK && (jQuery(".dark-editor-button:eq(0)").click(),
    jQuery(".darkMode-wrap").attr("data-mode", "Switch to Light Mode"));
    const q = e=>new Promise((t,i)=>{
        if (loginData.isLoggedIn) {
            let r = v(e);
            jQuery.ajax({
                url: r.url,
                method: r.method,
                dataType: r.dataType,
                xhrFields: r.xhrFields,
                data: r.data,
                success: function(r) {
                    let a = r;
                    "html" != e.responseType && (a = JSON.parse(r)),
                    a ? "string" == typeof a && "Token verification failed, Please reload the page" == a.trim() ? (alert(a.trim()),
                    i({
                        error: !0,
                        renderMessage: a.trim()
                    })) : t(a) : i({
                        error: !0,
                        renderMessage: "Some error occured. Please try again later."
                    })
                },
                error: function() {
                    i({
                        error: !0,
                        renderMessage: "Some error occured. Please try again later."
                    })
                }
            })
        } else
            $(".header-main__wrapper").find(".header-main__signup.login-modal-btn").length && $(".header-main__wrapper").find(".header-main__signup.login-modal-btn").click(),
            i({
                error: !0,
                loggedIn: !1,
                renderMessage: "Please login to proceed"
            })
    }
    )
      , v = e=>{
        let t = {
            method: "POST",
            dataType: "html",
            xhrFields: {
                withCredentials: !0
            },
            data: e.payload
        };
        return e.actionName === l && (t.url = `${utilUrl}gfg/saveMarking.php`),
        e.actionName === u && (t.url = `${utilUrl}gfg/saveRatings.php`),
        t
    }
    ;
    try {
        if (window.innerWidth > 991) {
            const e = document.querySelector(".header-main__wrapper")
              , t = document.querySelector(".header-main__slider-sticky");
            let i = 0;
            window.addEventListener("scroll", ()=>{
                if (t) {
                    const r = window.pageYOffset;
                    if (r <= 0)
                        return void e.classList.remove("not-fixed");
                    r > i && !e.classList.contains("not-fixed") ? (e.classList.add("not-fixed"),
                    t.classList.remove("top-offset")) : r < i && e.classList.contains("not-fixed") && (e.classList.remove("not-fixed"),
                    t.classList.add("top-offset")),
                    i = r
                }
            }
            )
        }
    } catch (e) {}
    const j = (e={})=>{
        let t = jQuery.trim(jQuery("#gcse-form input").val())
          , i = jQuery.trim(jQuery("#displayModal .gcse-sort").val())
          , r = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png";
        if (t) {
            Q("", "google-search"),
            jQuery("#displayModal .modal-content").attr("data-type", "gcse"),
            jQuery("#displayModal .modal-overlay").attr("aria-hidden", !1);
            const a = (e,t)=>{
                let i = e.pagemap.cse_thumbnail && e.pagemap.cse_thumbnail.length ? e.pagemap.cse_thumbnail[0].src : e.pagemap.cse_image && e.pagemap.cse_image.length ? e.pagemap.cse_image[0].src : e.pagemap.metatags && e.pagemap.metatags.length && (e.pagemap.metatags[0]["og:image"] || e.pagemap.metatags[0].image) || r;
                return `<div class="gcse-item">\n                    <div class="gcse-title">\n                        <a href="${e.link}">${e.htmlTitle}</a>\n                    </div>\n                    <div>\n                        <a href="${e.link}">${e.htmlFormattedUrl}</a>\n                    </div>\n                    <div class="gcse-item-content">\n                        <a href="${e.link}">\n                            <img src="${i}"/>\n                        </a>  \n                        <div class="gcse-item-info">\n                            ${e.htmlSnippet}\n                        </div>\n                    </div>\n                </div>`
            }
            ;
            t = encodeURIComponent(t);
            let s = "premium"
              , n = e.page ? +e.page : 1;
            jQuery.ajax({
                type: "POST",
                url: `${apiUrl}post/api/googlesearch/`,
                data: {
                    page: n,
                    sort: i || "relevance",
                    type: s,
                    query: t
                },
                success: function(e) {
                    let t = JSON.parse(e);
                    if (t.response.error)
                        return b.setBody('<div class="gcse-results-wrapper">Some error occurred.</div>'),
                        void b.setErrorMessage(t.response.error.message);
                    if (200 === t.status) {
                        let e = ""
                          , r = [];
                        if (t.response.items && (r = t.response.items.map((e,t)=>a(e, t)),
                        t.response.searchInformation.totalResults > 10)) {
                            let i = Number(t.response.searchInformation.totalResults);
                            for (let t = 1; t <= Math.min(10, Math.ceil(i / 10)); t++)
                                e += `<a href="javascript:void(0)" style="${n === t ? "text-decoration: underline;" : ""}" data-gfg-action="${h}" data-page-id="${t}">${t}</a>`
                        }
                        b.setBody(`\n                            <div class="gcse-meta-wrapper">\n                                <div class="gcse-search-info">About ${t.response.searchInformation.formattedTotalResults} results (${t.response.searchInformation.formattedSearchTime} seconds)</div>\n                                <div class="gcse-sort-wrapper">\n                                <div class="gcse-sort-container">\n                                    <span class="gcse-sort-label">Sort By: </span>\n                                    <select id="gcse-sort-change" class="gcse-sort">\n                                        <option selected value="relevance">Relevance</option>\n                                        <option value="date">Date</option>\n                                    </select>\n                                </div>\n                                </div>\n                            </div>\n                            <hr class="gcse-divider">\n                            <div class="gcse-results-wrapper">\n                                ${r.join("") || "No Result Found."}\n                            </div>\n                            <div class="gcse-pagination">\n                                ${e}\n                            </div>\n                        `),
                        jQuery("#displayModal .gcse-sort").val(i || "relevance")
                    } else
                        b.setBody(""),
                        console.log("Some error occurred, ", t.message, t.status)
                },
                error: function() {
                    b.setBody("")
                },
                complete: function() {
                    Q("", "google-search"),
                    jQuery("#displayModal .modal-content").attr("data-type", "gcse"),
                    jQuery("#displayModal .modal-overlay").attr("aria-hidden", !0)
                }
            })
        }
    }
    ;
    jQuery("body").on("change", "#gcse-sort-change", ()=>j()),
    jQuery("body").on("click", "button[data-modal='displayModal']", ()=>w());
    const Q = (e,t,i="")=>{
        jQuery("#displayModal .modal-content").removeAttr("data-type"),
        jQuery("#displayModal .modal-overlay").attr("aria-hidden", !0),
        "feed" === t && (jQuery("#displayModal").show(),
        feedModal(i)),
        ["google-search", "paypal", "testimonial", "consent"].indexOf(t) > -1 && jQuery("#displayModal").show(),
        jQuery("#displayModalBackdrop").show()
    }
      , w = ()=>{
        b.setErrorMessage(""),
        b.setTitle(""),
        b.setBody(""),
        b.setFooter(""),
        jQuery("#displayModal").hide(),
        jQuery("#displayModalBackdrop").hide()
    }
      , b = {
        setTitle: e=>{
            jQuery("#displayModal #dmTitle").html(e)
        }
        ,
        setBody: e=>{
            jQuery("#displayModal #modal-dm-content").html(e)
        }
        ,
        setFooter: e=>{
            jQuery("#displayModal .modal-footer").html(e)
        }
        ,
        setErrorMessage: e=>{
            jQuery("#displayModal .error-message").html(e)
        }
        ,
        customizeCloseButton: e=>{
            jQuery("#displayModal .modal-header button").css({
                ...e
            })
        }
        ,
        customizeModalWidth: e=>{
            jQuery("#displayModal .modal-content").addClass(e)
        }
        ,
        customizeModal: e=>{
            jQuery("#displayModal").css({
                ...e
            })
        }
    }
});
}
