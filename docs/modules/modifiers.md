---
id: modifiers
title: Modifiers
sidebar_label: Modifiers
---

Utilities for different screen sizes and different scenarios (like hovering or focusing on an element).

## Responsive Design

All utility classes can be applied at different breakpoints to adjust how content is displayed on different screen sizes.

By default, Downforce has these breakpoints:
```css
@media (min-width:  576px) { /* Small       [sm] */ }

@media (min-width:  768px) { /* Medium      [md] */ }

@media (min-width:  992px) { /* Large       [lg] */ }

@media (min-width: 1200px) { /* Extra Large [xl] */ }
```

Any utility we want to apply for a screen smaller than 576px [sm], we'll use the default utility class for.

But if we want the utility to only take effect once the screen is big enough (like 768px [md]), we use the prefix for that breakpoint followed by a colon `:`.

```html
// For screen sizes 0px - 767px, show a black background.
// For screen sizes 768px - 991px, show a white background.
// For screen sizes 992px and higher, show a grey background.
<p class="bg-black md:bg-white lg:bg-grey-50">Hello world!</p>
```

This means that 0px is actually the very first breakpoint and 576px is the second breakpoint. All utilities with no prefix (like `bg-black`) affect all screen sizes, and utilities with prefixes (like `md:bg-white`) only take effect at the breakpoint and above.

This follows the Mobile First design practice, where we use unprefixed utilities to target mobile screens, and use prefixed utilities to override these settings for bigger screens.

### Customizing breakpoints

In `_settings.scss`, you can set your own custom breakpoints:

```scss
// Overwrite [sm] breakpoint and add new [laptop] breakpoint.
// Used as "sm:bg-white" and "laptop:bg-white" respectively.
$df-breakpoints: (
  sm: 640px,
  laptop: 1024px,
);
```

## Hover Selector

Similar to the responsive design modifiers, `hover` can also be used as a prefix to utilities so that they only take effect on hover.

```html
<p class="bg-black hover:bg-white">Hello world!</p>
```

Right now, Downforce only supports `hover`.

### Selector-Enabled Classes

The `hover` modifier is enabled for these attributes:

* background-color
* border-color
* box-shadow
* color
* font-weight
* text-decoration
