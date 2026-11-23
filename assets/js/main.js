/* Builds the shared header/footer and fills each page from /content.
   You normally never need to edit this file — edit /content instead. */
(function () {
  var S = window.SITE || {};
  var P = window.PRODUCTS || [];
  var G = window.GIVING || { months: [] };
  var I = window.INSPIRATION || [];
  var page = document.body.getAttribute("data-page");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function money(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function paras(t) { return String(t || "").split(/\n\n+/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""); }
  function fill(sel, txt) { document.querySelectorAll(sel).forEach(function (el) { el.textContent = txt; }); }

  /* ---------- Monthly nonprofit ---------- */
  function monthKey(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0"); }
  function monthLabel(k) {
    var p = k.split("-");
    return new Date(+p[0], +p[1] - 1, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
  }
  var nowKey = monthKey(new Date());
  var months = G.months.slice().sort(function (a, b) { return a.month < b.month ? -1 : 1; });
  var current = months.filter(function (m) { return m.month === nowKey; })[0] ||
    months.filter(function (m) { return m.month <= nowKey; }).pop() || months[0];

  /* ---------- Header & footer ---------- */
  var links = [["index.html", "Collection", "home"], ["about.html", "About", "about"],
    ["inspiration.html", "Inspiration", "inspiration"], ["giving.html", "Giving", "giving"]];
  var header = document.createElement("div");
  header.innerHTML =
    (current ? '<div class="announce">This month, ' + esc(S.givingPercent) + '% of every order supports <a href="giving.html">' + esc(current.name) + "</a></div>" : "") +
    '<header class="site"><div class="wrap">' +
    '<a class="logo" href="index.html">' + esc(S.brandName) + "</a>" +
    '<button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>' +
    '<nav class="main" id="nav">' + links.map(function (l) {
      return '<a href="' + l[0] + '"' + ((page === l[2] || (page === "product" && l[2] === "home")) ? ' aria-current="page"' : "") + ">" + l[1] + "</a>";
    }).join("") + (S.etsyUrl ? '<a href="' + esc(S.etsyUrl) + '" target="_blank" rel="noopener">Etsy</a>' : "") + "</nav></div></header>";
  document.body.prepend(header);
  var btn = header.querySelector(".menu-btn"), nav = header.querySelector("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });

  var social = [["Etsy shop", S.etsyUrl], ["Instagram", S.instagramUrl], ["Pinterest", S.pinterestUrl]]
    .filter(function (s) { return s[1]; })
    .map(function (s) { return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + s[0] + "</a></li>"; }).join("");
  var footer = document.createElement("footer");
  footer.className = "site";
  footer.innerHTML = '<div class="wrap"><div class="cols">' +
    '<div><a class="logo" href="index.html">' + esc(S.brandName) + '</a><p class="muted" style="margin-top:1rem;max-width:360px">' + esc(S.tagline) + "</p></div>" +
    "<div><h4>Visit</h4><ul>" + links.map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + "</a></li>"; }).join("") + "</ul></div>" +
    "<div><h4>Connect</h4><ul>" + (S.email ? '<li><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a></li>" : "") + social + "</ul></div>" +
    '</div><p class="legal">© ' + new Date().getFullYear() + " " + esc(S.brandName) + " · " + esc(S.location) + " · Secure checkout by Stripe</p></div>";
  document.body.appendChild(footer);

  fill("[data-brand]", S.brandName);
  fill("[data-creator]", S.creatorName);
  fill("[data-percent]", S.givingPercent + "%");
  if (S.brandName) document.title = document.title.replace("{brand}", S.brandName);

  /* ---------- Product card ---------- */
  function card(p) {
    return '<a class="card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="ph"><img src="' + esc(p.images[0]) + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
      "<h3>" + esc(p.name) + "</h3>" +
      '<div class="meta"><span>' + esc(p.material) + "</span><span>" +
      (p.available ? money(p.price) : '<span class="tag">Made to order</span>') + "</span></div></a>";
  }

  function givingBlock() {
    if (!current) return "";
    var donate = G.stripeDonateLink || current.donateUrl;
    return '<div class="giving-card"><span class="eyebrow">Giving · ' + esc(monthLabel(current.month)) + "</span>" +
      (current.veteran ? '<span class="badge">Veteran nonprofit</span>' : "") +
      "<h2>" + esc(current.name) + '</h2><p class="muted">' + esc(current.why) + "</p>" +
      "<p>" + esc(S.givingPercent) + "% of every order this month is donated to " + esc(current.name) + ".</p>" +
      '<a class="btn" href="' + esc(donate) + '" target="_blank" rel="noopener">Donate directly</a></div>';
  }

  /* ---------- Pages ---------- */
  if (page === "home") {
    $("hero-title").textContent = S.heroHeadline;
    $("hero-text").textContent = S.heroText;
    $("hero-img").src = S.heroImage;
    $("hero-img").alt = S.brandName;
    var feat = P.filter(function (p) { return p.featured !== false; }).slice(0, 9);
    $("grid").innerHTML = feat.map(card).join("");
    $("giving").innerHTML = givingBlock();
    var q = window.DAILY_QUOTE;
    if (q) { $("quote").textContent = "“" + q.text + "”"; $("quote-by").textContent = "— " + q.author; }
    if (I[0]) { $("latest-note").innerHTML = "<h3>" + esc(I[0].title) + "</h3>" + paras(I[0].body); }
  }

  if (page === "product") {
    var id = new URLSearchParams(location.search).get("id");
    var p = P.filter(function (x) { return x.id === id; })[0];
    var el = $("product");
    if (!p) {
      el.innerHTML = '<div class="center" style="grid-column:1/-1;padding:80px 0"><h2>Piece not found</h2><a class="link" href="index.html">Back to the collection</a></div>';
      return;
    }
    document.title = p.name + " · " + S.brandName;
    $("crumb").textContent = p.name;
    var ready = p.available && p.stripeLink && p.stripeLink.indexOf("REPLACE_ME") === -1;
    el.innerHTML =
      '<div class="gallery"><div class="main-img"><img id="main-img" src="' + esc(p.images[0]) + '" alt="' + esc(p.name) + '"></div>' +
      (p.images.length > 1 ? '<div class="thumbs">' + p.images.map(function (src, i) {
        return '<button type="button" aria-pressed="' + (i === 0) + '" data-src="' + esc(src) + '" aria-label="View image ' + (i + 1) + '"><img src="' + esc(src) + '" alt=""></button>';
      }).join("") + "</div>" : "") + "</div>" +
      '<div class="details"><span class="eyebrow">Handmade · ' + esc(p.madeIn) + "</span>" +
      "<h1 style=\"font-size:clamp(2rem,4vw,3rem)\">" + esc(p.name) + "</h1>" +
      '<p class="price">' + (p.available ? money(p.price) : "Sold — can be made to order") + "</p>" +
      paras(p.description) +
      '<dl class="specs">' + [["Material", p.material], ["Size", p.size], ["Colors", p.colors], ["Care", p.care]]
        .filter(function (r) { return r[1]; })
        .map(function (r) { return "<div><dt>" + r[0] + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("") + "</dl>" +
      (p.available
        ? '<a class="btn block" href="' + esc(ready ? p.stripeLink : "#") + '"' + (ready ? "" : ' aria-disabled="true"') + ">" + (ready ? "Buy now — secure checkout" : "Checkout coming soon") + "</a>"
        : '<a class="btn block" href="mailto:' + esc(S.email) + "?subject=" + encodeURIComponent("Made-to-order request: " + p.name) + '">Request made to order</a>') +
      (S.etsyUrl ? '<p class="fine center"><a class="link" href="' + esc(S.etsyUrl) + '" target="_blank" rel="noopener">Also available on Etsy</a></p>' : "") +
      '<p class="fine">' + esc(S.shippingNote) + "<br>" + esc(S.returnsNote) + "</p>" +
      (current ? '<p class="fine">' + esc(S.givingPercent) + "% of this order supports " + esc(current.name) + ".</p>" : "") +
      "</div>";
    el.querySelectorAll(".thumbs button").forEach(function (b) {
      b.addEventListener("click", function () {
        $("main-img").src = b.getAttribute("data-src");
        el.querySelectorAll(".thumbs button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      });
    });
    var more = P.filter(function (x) { return x.id !== p.id && x.featured !== false; }).slice(0, 3);
    $("more").innerHTML = more.map(card).join("");
  }

  if (page === "inspiration") {
    $("notes").innerHTML = I.map(function (n) {
      var d = new Date(n.date + "T12:00:00");
      return '<article class="note"><time datetime="' + esc(n.date) + '">' +
        d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) +
        "</time><h2>" + esc(n.title) + "</h2>" + paras(n.body) + "</article>";
    }).join("");
  }

  if (page === "giving") {
    $("giving").innerHTML = givingBlock();
    $("calendar").innerHTML = months.map(function (m) {
      return '<div class="' + (m === current ? "current" : "") + '"><small>' + esc(monthLabel(m.month)) +
        (m.veteran ? " · Veteran" : "") + "</small><h3 style=\"margin-top:.4em\">" + esc(m.name) +
        '</h3><a class="link" href="' + esc(m.donateUrl) + '" target="_blank" rel="noopener">Learn more</a></div>';
    }).join("");
  }
})();
