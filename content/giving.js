/* =====================================================================
   MONTHLY GIVING — the site shows the nonprofit for the current month
   automatically. Fill in each month ("2026-12" = December 2026).
   Always double-check each "donateUrl" on the charity's own website.
   Optional: "stripeDonateLink" = your own Stripe Payment Link (with
   "let customers choose what to pay") if you collect and pass on gifts.
   ===================================================================== */
window.GIVING = {
  stripeDonateLink: "",   // leave "" to send visitors straight to the charity

  months: [
    {
      month: "2026-11",
      name: "Fisher House Foundation",
      veteran: true,
      why: "Fisher House gives military and veterans' families a free place to stay near a loved one during hospital treatment.",
      donateUrl: "https://www.fisherhouse.org/"
    },
    {
      month: "2026-12",
      name: "Project Linus",
      veteran: false,
      why: "Volunteers knit, crochet and quilt handmade blankets for children in need — a cause close to every maker's heart.",
      donateUrl: "https://www.projectlinus.org/"
    },
    {
      month: "2027-01",
      name: "Operation Gratitude",
      veteran: true,
      why: "Care packages and handwritten letters for deployed troops, veterans, first responders and their families.",
      donateUrl: "https://www.operationgratitude.com/"
    },
    {
      month: "2027-02",
      name: "First Book",
      veteran: false,
      why: "New books for children in low-income communities — honoring thirty years spent in the classroom.",
      donateUrl: "https://firstbook.org/"
    },
    {
      month: "2027-03",
      name: "Hope For The Warriors",
      veteran: true,
      why: "Support for post-9/11 service members, veterans and military families as they heal and rebuild.",
      donateUrl: "https://www.hopeforthewarriors.org/"
    },
    {
      month: "2027-04",
      name: "Warm Up America! Foundation",
      veteran: false,
      why: "Knitted and crocheted blankets and garments delivered to people in need across the country.",
      donateUrl: "https://www.warmupamerica.org/"
    }
  ]
};
