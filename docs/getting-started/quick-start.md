---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

## Basics

Downforce provides a lot of utility classes by default, including font manipulation, positioning, sizing and the like.

A utility class is used simply by adding it to an element's class.

```html
<div class="w-10 p-1 bg-red-900 color-red-50">
    A DIV element with a width of 2.5rem, a padding of 0.25em,
    a background color of a very light red, and a text color of
    a very dark red.
</div>
```

Want to use the utility class in a component using SCSS?

```scss
.my-component {
  // Add a margin of 0.25em and a padding of 0.25em
  @include apply(m-1 p-1);
}
```

## Modifiers

To change an element's property when certain conditions are met, we add modifiers to a class. Modifiers can be used by adding a prefix to the utility class we wish to invoke.

```html
<div class="w-full md:w-10 p-2 md:p-1 bg-red-900 color-red-50 hover:bg-blue-900 hover:color-blue-50">
    A DIV element with a width of 100% and a padding of 0.5em,
    a background color of a very light red, and a text color of
    a very dark red. When the screen size is at least 768px, the
    width becomes 2.5rem and the padding becomes 0.25em. When
    you hover over me, my colors become blue instead of red.
</div>
```
