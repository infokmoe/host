var setelan_defaults  = {
    feedsUri: [{
        name: "Posting JQuery",
        url: "//info-kmu.blogspot.com/",
        tag: "ABK"
    }],
    numPost: 4,
    summaryLength: 80,
    titleLength: "auto",
    thumbSize: 72,
    newTabLink: false,
    containerId: "list-recent-Post",
    listClass: "list-recent-Post",
    current: 0,
    onLoadFeed: function (a) {},
    onLoadComplete: function () {},
    loadFeed: function (c) {
        var d = document.getElementsByTagName("head")[0],
            a = document.getElementById(this.containerId),
            b = document.createElement("script");
        b.type = "text/javascript";
        b.src = this.feedsUri[c].url + "/feeds/posts/summary" + (this.feedsUri[c].tag ? "/-/" + this.feedsUri[c].tag : "") + "?alt=json-in-script&max-results=" + this.numPost + "&callback=listEntries";
        d.appendChild(b)
    }
};
for (var i in setelan_defaults ) {
    setelan_defaults [i] = (typeof (setelan_lanjutan[i]) !== undefined && typeof (setelan_lanjutan[i]) !== "undefined") ? setelan_lanjutan[i] : setelan_defaults [i]
}

function listEntries(q) {
    var p = q.feed.entry,
        c = setelan_defaults ,
        h = document.getElementById(c.containerId),
        a = document.createElement("div"),
        d = "<ul>",
        l = c.feedsUri.length,
        n, k, m, g;
    for (var f = 0; f < c.numPost; f++) {
        if (f == p.length) {
            break
        }
        n = (c.titleLength !== "auto") ? p[f].title.$t.substring(0, c.titleLength) + (c.titleLength < p[f].title.$t.length ? "&hellip;" : "") : p[f].title.$t;
        m = ("summary" in p[f]) ? p[f].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "";
        m = (c.summaryLength < m.length) ? m.substring(0, c.summaryLength) + "&hellip;" : m;
        g = ("media$thumbnail" in p[f]) ? '<img src="' + p[f].media$thumbnail.url.replace(/\/s72(\-c)?\//, "/s" + c.thumbSize + "-c/") + '" style="width:' + c.thumbSize + "px;height:" + c.thumbSize + 'px;">' : '<span class="fake-img" style="width:' + c.thumbSize + "px;height:" + c.thumbSize + 'px;"></span>';
        for (var e = 0, b = p[f].link.length; e < b; e++) {
            k = (p[f].link[e].rel == "alternate") ? p[f].link[e].href : "#"
        }
        d += '<li><div class="inner"' + (!c.autoHeight ? ' style="height:' + c.thumbSize + 'px;overflow:hidden;"' : "") + ">";
        d += g;
        d += '<div class="title"><a href="' + k + '"' + (c.newTabLink ? ' target="_blank"' : "") + ">" + n + "</a></div>";
        d += '<div class="summary">';
        d += "<span>" + m + "</span></div>";
        d += '<span style="display:block;clear:both;"></span></div></li>'
    }
    d += "</ul>";
    a.className = c.listClass;
    a.innerHTML = d;
    h.appendChild(a);
    c.onLoadFeed(c.current);
    if ((c.current + 1) < l) {
        c.loadFeed(c.current + 1)
    }
    if ((c.current + 1) == l) {
        c.onLoadComplete()
    }
    c.current++
}
setelan_defaults .loadFeed(0);
