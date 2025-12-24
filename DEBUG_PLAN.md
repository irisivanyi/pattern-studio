# Debug Plan: White Bars Appearing After Page Load

## Problem
White bars appear at top/bottom (safe areas) AFTER initial page load. Initially they're not visible, then quickly appear.

## Systematic Debugging Plan

### Phase 1: Isolate CSS Loading Issues
**Hypothesis**: Tailwind or custom CSS is applying styles after initial render

**Tests:**
1. **Remove Tailwind base styles temporarily**
   - Comment out `@tailwind base;` in `globals.css`
   - Check if white bars still appear
   - If fixed: Tailwind base is applying conflicting styles

2. **Test with inline styles only**
   - Move all background styles to inline styles in layout.tsx
   - Remove all CSS from globals.css except viewport meta
   - Check if issue persists

3. **Check CSS loading order**
   - Add `?disableOptimization` to CSS imports
   - Check Network tab for CSS load timing

### Phase 2: Isolate React Hydration Issues
**Hypothesis**: React hydration is changing styles after SSR

**Tests:**
1. **Remove client-side components temporarily**
   - Comment out `<BackgroundBlur />` component
   - Set background directly on `html` element via CSS
   - Check if white bars still appear

2. **Remove useEffect hooks**
   - The `BackgroundBlur` component uses `useEffect` for viewport detection
   - This runs AFTER initial render
   - Test: Hard-code mobile/desktop instead of detecting
   - Or: Use CSS media queries instead of JS

3. **Test with static background**
   - Remove random variant selection
   - Use fixed background image path
   - Check if timing changes

### Phase 3: Isolate Layout/HTML Issues
**Hypothesis**: HTML/Body classes or Next.js wrapper is causing issues

**Tests:**
1. **Remove conflicting classes**
   - Remove `overflow-x-clip overflow-y-auto` from `<html>` in layout.tsx
   - Remove `overflow-x-hidden overflow-y-auto` from `<body>` in layout.tsx
   - These might conflict with globals.css

2. **Test without Next.js wrapper**
   - Check if `#__next` div is causing issues
   - Try setting background on `#__next` instead of `html`

3. **Simplify html structure**
   - Remove all classes from html/body
   - Use only inline styles or CSS

### Phase 4: Isolate Safe Area Detection
**Hypothesis**: `env()` functions aren't working or are being applied late

**Tests:**
1. **Test with hardcoded safe area values**
   - Replace `env(safe-area-inset-top)` with `44px` (typical iPhone notch)
   - Replace `env(safe-area-inset-bottom)` with `34px` (typical home indicator)
   - Check if white bars still appear

2. **Check if viewport-fit=cover is working**
   - Verify meta tag is actually in rendered HTML
   - Test with explicit meta tag in layout.tsx instead of metadata

3. **Test background on html vs body**
   - Move background from component to `html` element directly
   - Use CSS background-image on html

### Phase 5: Isolate Image Loading
**Hypothesis**: Background image loading triggers reflow

**Tests:**
1. **Use CSS background instead of component**
   - Remove BackgroundBlur component
   - Set background-image directly in CSS
   - Check if timing changes

2. **Preload background images**
   - Add `<link rel="preload">` for background images
   - Check if this prevents the flash

## Quick Test Order (Start Here)

1. **Easiest first**: Remove conflicting overflow classes from layout.tsx
2. **Second**: Remove useEffect from BackgroundBlur (hard-code mobile detection)
3. **Third**: Move background to CSS instead of React component
4. **Fourth**: Test with hardcoded safe area values
5. **Fifth**: Remove Tailwind base styles

## What to Remove/Test First

### Test 1: Remove Conflicting Classes (Easiest)
Remove from `layout.tsx`:
- `className="overflow-x-clip overflow-y-auto"` from `<html>`
- `className="... overflow-x-hidden overflow-y-auto"` from `<body>`

These might be overriding globals.css styles.

### Test 2: Remove useEffect (Most Likely Culprit)
The `BackgroundBlur` component uses `useEffect` which runs AFTER initial render. This could be causing the flash.

**Quick fix**: Use CSS media queries instead of JS detection.

### Test 3: Simplify Background Component
Remove the component entirely and set background directly in CSS to test if React hydration is the issue.

