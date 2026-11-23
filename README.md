# The Stitch Atelier: Couture Crochet & Knitwear website

A simple, elegant shop website. It's hosted free on **GitHub Pages**, takes payments through **Stripe Payment Links**, and links to an **Etsy** shop. You don't need any coding tools. Every change is made by editing a text file and clicking **Commit** and **Push** in GitHub Desktop.

---

## Making changes with GitHub Desktop

1. Open **GitHub Desktop**, then choose **File → Clone repository** and pick this repository. You only do this once.
2. Click **Repository → Show in Explorer** to open the website folder.
3. Open a file in the `content` folder with Notepad (or VS Code) and change the words between the quote marks.
4. Back in GitHub Desktop, type a short summary like "Updated beret price", then click **Commit to main** and **Push origin**.
5. The live website updates in about a minute.

> **Preview before you push:** double-click `index.html` to open it in your browser.

### What to edit, and where

| I want to change… | Edit this file |
|---|---|
| Shop name, tagline, email, Etsy link, giving %, shipping/returns text, home-page headline | `content/site.js` |
| Products: names, prices, **material**, **size**, colors, care, photos, Stripe buy link | `content/products.js` |
| Uplifting notes and the home-page quote | `content/inspiration.js` |
| Monthly nonprofit calendar | `content/giving.js` |
| About page story | `about.html` (plain sentences between the tags) |
| Colors and fonts | the top 12 lines of `assets/css/style.css` |

**Rules that keep things working:** keep the quote marks `"…"`, keep the comma at the end of each line, and don't delete the `{` `}` brackets around a product. If the page goes blank after an edit, a quote or comma is probably missing. Use **History** in GitHub Desktop to see or undo the last change.

### Photos
- Put photos in `images/products/`. Use lowercase names with no spaces, like `beret-camel-1.jpg`.
- Portrait shape (**4:5**, for example 1600 × 2000 px) on a plain, light background, in daylight. Keep every product photographed the same way.
- Shrink each file to under 500 KB (try squoosh.app). Fast pages sell more.
- List the files in that product's `images: [ ... ]` line. The first one is the main photo.
- Replace `images/site/hero.svg` (the large home image) and `images/site/maker.svg` (the maker's portrait) the same way, then update the filenames.

### How many products to show
Keep the collection at **6 pieces** (no more than 9). Shoppers decide faster when they see a small, curated set. When a piece sells out, set `available: false`. It then shows "Made to order" with a request button. Rotate new pieces in by season.

---

## Turning on GitHub Pages (one time)
Go to the repository on github.com, then **Settings → Pages**. Under **Source**, choose **Deploy from a branch**, then set the branch to **main** and the folder to **/ (root)**, and click **Save**. Your site address will be `https://<username>.github.io/<repository-name>/`.

To use your own domain (like `thestitchatelier.com`), go to **Settings → Pages → Custom domain**.

---

## Stripe payments (no server needed)
See [STRIPE-SETUP.md](STRIPE-SETUP.md).

## Etsy shop
See [ETSY-SETUP.md](ETSY-SETUP.md).

## Before launch checklist
- [ ] `content/site.js`: real brand name, creator name, email, Etsy link
- [ ] Real product photos, prices, materials and sizes
- [ ] Every `stripeLink` replaced (the "Buy" button stays disabled until it is)
- [ ] Each nonprofit link in `content/giving.js` checked on the charity's own site
- [ ] Maker portrait and About story reviewed by the maker
- [ ] Add a privacy policy and terms (Stripe and Etsy both expect them). Shopify's free generators are a good start
- [ ] Check with a tax professional about sales tax. Stripe Tax can collect it automatically
