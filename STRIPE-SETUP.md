# Stripe setup: Payment Links

The site uses **Stripe Payment Links**. Stripe hosts the secure checkout page, so no server or code is needed, and card details never touch this website.

## 1. Create your account
Sign up at stripe.com, then add your business and bank details to activate payments.

## 2. Create one Payment Link per product
1. Go to **Stripe Dashboard → Product catalog → + Add product**. Enter the name, a photo and the price.
2. Open the product and choose **Create payment link**.
3. Under **Options**, turn on:
   - **Collect customers' addresses → Shipping address** (limit it to the countries you ship to)
   - **Add shipping rates** (for example, "Standard, $8" or "Free over $150")
   - **Allow customers to adjust quantity** only if you have more than one
   - **Limit the number of payments** = how many you have in stock. This stops overselling one-of-a-kind pieces.
4. Under **After payment**, choose **Don't show confirmation page → Redirect** and paste:
   `https://<username>.github.io/<repository-name>/thank-you.html`
5. Click **Create link**, copy it (it looks like `https://buy.stripe.com/...`) and paste it as that product's `stripeLink` in `content/products.js`.

Until a real link is pasted in, that product's button shows **"Checkout coming soon"** and can't be clicked.

## 3. Optional: a donation link
To collect donations yourself and pass them on, create a Payment Link and choose **Customers choose what to pay**. Then paste it as `stripeDonateLink` in `content/giving.js`.

Otherwise, leave it empty (`""`). The **Donate directly** button then goes straight to each charity's own donation page, which keeps your accounting simple.

## 4. Taxes and receipts
- **Settings → Tax** turns on Stripe Tax to calculate sales tax automatically.
- **Settings → Customer emails** turns on automatic receipts.
