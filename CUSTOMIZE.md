# Customization Checklist

## 1. Business identity

Replace:
- `YOUR BUSINESS` with the business name.
- `YB` with initials or replace the circular mark with an image logo.
- The tagline `Work you can count on.`
- The About paragraph.

## 2. Contact information

In both HTML files, replace:
- WhatsApp number
- Phone number
- Email
- City / state

## 3. Services

Edit the three service cards in `index.html`.

Then update the corresponding detail sections in `services.html`.

You can duplicate a `.service-detail` block if the business has more than three services.

## 4. Photos

The starter uses designed placeholders so it works without image files.

To use a real photo, replace:

```html
<div class="photo-placeholder">
  ...
</div>
```

with:

```html
<img class="business-photo" src="assets/your-photo.jpg" alt="Description">
```

Then add this to `styles.css`:

```css
.business-photo {
  width: 100%;
  height: 100%;
  min-height: 500px;
  object-fit: cover;
}
```

Put photos in the `assets/` folder.

## 5. Colors

At the top of `styles.css`, change the CSS variables:

```css
:root {
  --ink: #171717;
  --paper: #f4f1ea;
  --accent: #f2b94b;
  --panel: #20211e;
}
```

## 6. Optional next additions

Good additions for a small business:
- Google Maps embed
- Testimonials
- Google Reviews link
- Instagram link
- FAQ
- Contact form
- Spanish / English toggle
- Before-and-after gallery
