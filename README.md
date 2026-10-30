# Timeless Heritage — Complete GitHub Pages Website

This is the complete, no-build static website for **Timeless Heritage — Where Journeys Become Stories**. It uses the approved espresso-brown, antique-gold and warm-ivory editorial design system across the homepage, collection, all itinerary pages and Heritage Walks.

## 1. Upload the repository

1. Download and extract the full site ZIP.
2. Open your new GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload the **contents** of the extracted `Timeless-Heritage-Final-Site` folder (not the outer folder and not the ZIP file).
5. Keep the folder structure exactly as shown below.
6. Commit the files to branch `main`.
7. Open **Settings → Pages → Deploy from a branch**, select `main` and `/(root)`, then Save.
8. After deployment, test the homepage, collection filters, several detail pages, Heritage Walks, menu on mobile, all enquiry links and images.

## 2. Repository structure

```text
Timeless-Heritage-Final-Site/
├── index.html
├── packages.html
├── heritage-walks.html
├── about.html
├── contact.html
├── booking-information.html
├── terms-and-conditions.html
├── cancellation-refund-policy.html
├── privacy-policy.html
├── 404.html
├── favicon.png
├── README.md
├── packages/
│   ├── gujarat-heritage.html
│   ├── odisha-heritage.html
│   ├── tungnath-chandrashila.html
│   ├── kedarnath-badrinath.html
│   ├── hampi-heritage.html
│   ├── varanasi.html
│   ├── varanasi-ayodhya-prayagraj.html
│   ├── aurangabad-heritage.html
│   ├── pancha-bhoota-temple-heritage.html
│   ├── gwalior-orchha-khajuraho-jain-heritage.html (title no longer says Jain)
│   ├── gangotri-harsil.html
│   ├── classic-cambodia.html
│   ├── jaipur-pushkar.html
│   ├── madurai-rameshwaram.html
│   ├── central-india-wonders.html
│   ├── southern-sojourn.html
│   ├── sri-lanka-ramayana-trail.html
│   ├── exotic-bhutan.html
│   └── royal-rajasthan.html
├── heritage-walks/
│   ├── old-pune-heritage-walk.html
│   ├── pune-journey-through-time.html
│   ├── temple-tour-pune.html
│   └── around-pune-architecture-heritage.html
└── assets/
    ├── css/style.css
    ├── js/config.js
    ├── js/packages.js
    ├── js/heritage-walks.js
    ├── js/main.js
    ├── js/package-page.js
    ├── icons/whatsapp.svg
    └── images/timeless-heritage-logo.png
```

**Inventory:** 19 journeys (the previous Gwalior/Orchha/Khajuraho package is removed; the former Jain-titled itinerary keeps its existing URL but the public title no longer says Jain) and 4 Heritage Walks. Destination photography is not bundled; empty image frames are intentional and display filenames to guide replacement. Add appropriately licensed photos to `assets/images/` with the matching names.

## 3. Where to edit site text and prices

### `assets/js/packages.js` — all 19 journeys

Each package is one object inside `window.TH_PACKAGES`. Edit that object to change the listing card and its detail page together. Find it by `"id"` or `"slug"` using GitHub's file search.

Common fields:

- `id`: internal unique ID. Avoid changing this unless you also update related IDs.
- `slug`: filename inside `packages/`; must match the HTML shell filename. Keep existing slugs unless you intentionally rename a page.
- `title`: displayed package name.
- `description`: short description used on the card and hero.
- `category`: category used by collection filters. Use `Heritage & Architecture`, `Spiritual & Temple Journeys`, `Himalayan Journeys`, `Cultural Experiences`, `Multi-Destination Tours`, or `International Journeys`. Do not recreate the removed `Ancient Civilisations & Archaeology` category; those packages belong under `Heritage & Architecture`.
- `durationNights` and `durationDays`: displayed as `N Nights / N Days` everywhere.
- `price`: numeric value in rupees (no comma or ₹ symbol). Use `0` for a price not supplied; the UI displays `₹0000*` until the confirmed price is entered.
- `start`: one departure city only, shown under `Ex – Departure`.
- `route`: full route shown beneath the metadata.
- `bookingNote`: optional highlighted note next to the hero CTA. Example: `Subject to 4 people`, `Minimum 4 adults required`, or `Only 12 seats · 05 December 2026`. Only publish a seat limit/date after confirming it. Leave it empty to hide the note.
- `highlights`: array of short items shown in the Journey Overview section.
- `itinerary`: array of day objects. Each has `title`, `description` and/or `paragraphs`, optional `label`, `places`, and `overnight`. Edit in source itinerary order. `overnight` is only shown when non-empty.
- `inclusions`, `exclusions`: editable arrays of bullet strings.
- `notes`: optional list for permits, group minimums, document requirements or source-specific conditions.
- `related`: exactly three package IDs preferred for related-journey cards. The renderer fills gaps automatically if an ID is missing.
- `image`: hero image filename under `assets/images/`. Day images follow `royal-rajasthan-day-01.jpg`, `royal-rajasthan-day-02.jpg`, etc., unless a day object defines its own `image`.
- `whatsappMessage`: full prefilled message specific to this package. Keep the package title in the message and revise wording as needed.

### `assets/js/heritage-walks.js` — all four Heritage Walks

Use the same fields as packages, plus:

- `pricingDetails`: list of exact vehicle / non-vehicle / group-size options displayed in the pricing-options section.
- The source does not give a fixed price for Old Pune Heritage Walk. Its price field is `0` until confirmed; do not publish an invented rate.
- Heritage Walk detail pages use the same hero, overview, numbered itinerary/stop timeline, inclusions/exclusions, related cards, CTA and FAQ design as package pages.

## 4. Price presentation standard

- Collection cards show **Price***, the rupee amount and **Per Person** only. Do not add GST, price notes, group conditions or tax details to cards.
- Package metadata shows `Duration` as `N Nights / N Days`, `Price*`, and `Ex – Departure` with a single place name.
- The `bookingNote` is the only optional highlighted hero message. It is separate from GST.
- GST belongs in the Exclusions list. The common exclusion `5% GST extra` is added to every journey and walk in this version.
- The common exclusion `Air/Train/Bus fare unless expressly listed under Inclusions` is used to avoid contradicting packages where a fare is explicitly included.
- The Varanasi–Ayodhya–Prayagraj note is `Subject to 4 people`. Bhutan and Royal Rajasthan show their source minimum group of 4 adults. For group departures, edit `bookingNote` with a confirmed date and capacity, e.g. `Only 12 seats · 05 December 2026`.

## 5. Inclusions and exclusions — editing rules

Update the relevant `inclusions` and `exclusions` arrays inside `assets/js/packages.js` or `assets/js/heritage-walks.js`. These are rendered as two styled panels on the package page.

- Keep source-listed inclusions such as transport, accommodation and meals intact.
- `5% GST extra` and the Air/Train/Bus fare caveat are currently included as standard exclusion bullets in all items.
- If a fare is explicitly included (for example, a flight ticket), leave it in `inclusions`; the fare exclusion is explicitly qualified as applying only where the fare is not listed under Inclusions.
- To change the standard wording across all journeys, use GitHub's editor search to find the exact line in `assets/js/packages.js` and update that line in every package record; then repeat in `assets/js/heritage-walks.js` if you want the same wording for walks. Avoid duplicates if a source already mentions a similar item.
- Do not claim a service or price is included unless it is approved and supported by the package.

## 6. Navigation, header, footer and visual styling

- `assets/css/style.css` controls colors, typography, card grids, hero layout, day-by-day timeline, image frames, accordions, footer, mobile layout and the premium espresso / gold / ivory system.
- `index.html`, `packages.html`, the legal pages and `heritage-walks.html` contain their static page structure and shared navigation.
- `assets/js/package-page.js` renders the repeated detail-page layout for both packages and Heritage Walks. It is intentionally shared so all detailed pages remain visually consistent.
- `assets/js/main.js` controls search, filtering, sorting, collection cards, menu, FAQs and general WhatsApp forms.
- To rename the Heritage Walks menu label or destination link, update the navigation in root HTML files and the shared header/footer strings in `assets/js/package-page.js`.
- Do not replace `assets/css/style.css` with a simplified stylesheet. All itinerary pages rely on its shared classes.

## 7. Logo, favicon and images

- The cropped official logo is stored at `assets/images/timeless-heritage-logo.png` and used in headers/footers.
- `favicon.png` is the small browser-tab icon. To replace it, upload a square PNG at the same path, or update favicon references in the HTML shell files.
- Add images to `assets/images/` using the filename in `image`. Existing empty image frames will remain usable when files are missing.
- Recommended landscape image size: 1400 × 1050 for hero images; 1000 × 750 for day images.

## 8. Configure WhatsApp, email and site URL

Edit `assets/js/config.js`:

- `whatsapp`: digits only including country code, no `+` or spaces. Current value: `919371131975`.
- `displayPhone`: visible phone number.
- `email`: replace the empty string with the approved public business email.
- `canonicalBase`: replace `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` with the final GitHub Pages URL, including its repository subpath and trailing slash.

Canonical links in HTML shells also have placeholders. Once the final repository name is confirmed, search the repository for `YOUR-USERNAME.github.io/YOUR-REPOSITORY` and replace it with the final base URL.

## 9. Publish checklist

- [ ] Repository root contains `index.html` (not a nested project folder).
- [ ] `packages/` has 19 pages; `heritage-walks/` has 4 detail pages.
- [ ] `assets/js/packages.js` has 19 records; the retired Gwalior/Orchha/Khajuraho page is not present.
- [ ] No category called `Ancient Civilisations & Archaeology` remains.
- [ ] Prices and departure cities are checked against current commercial decisions.
- [ ] Dates and seat limits are confirmed before entering in `bookingNote`.
- [ ] Inclusions/exclusions are reviewed; fare exceptions match the particular package.
- [ ] WhatsApp message opens the correct package-specific enquiry for every journey and walk.
- [ ] Phone, email, canonical base and favicon are correct.
- [ ] Desktop and mobile navigation, collection filters, related cards and 404 page work.

This is a static GitHub Pages site. No database, backend service or build process is required.
