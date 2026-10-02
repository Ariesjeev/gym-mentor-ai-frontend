# Gym Mentor AI Frontend

A responsive static frontend inspired by the supplied Real-time AI GYM Trainer reference.

## Files

- `index.html` — complete landing page markup
- `style.css` — responsive design, animations, mobile navigation
- `script.js` — mobile menu, scroll reveal, demo video handling
- `images/` — place project screenshots here if you later want to replace CSS visual cards
- `videos/` — place `gym-mentor-demo.mp4` here to enable the embedded demo

## Run locally

Option 1: open `index.html` directly in a browser.

Option 2: serve the folder with any static server:

```bash
python -m http.server 5500
```

Then open:

`http://localhost:5500`

## Main live-app button

The frontend currently points to:

https://gym-mentor-ai-jeevan-main.streamlit.app/

Change that URL in `index.html` when your deployed app URL changes.

## Design direction

The page keeps the reference's dark, editorial, technical aesthetic:
- black grid background
- amber + cyan AI accents
- Instrument Serif display headings
- square technical cards
- animated scan lines and live-state indicators
- responsive mobile menu
- mobile-first stacked layouts


## Exercise image assets

The `images/` folder now contains the five exercise references plus a generated AI form-analysis board. The exercise cards use the supplied Squats, Push-ups, Biceps Curls, Shoulder Press and Lunges images directly, with responsive overlays and exercise-specific metric tags.
# gym-mentor-ai-frontend
# gym-mentor-ai-frontend
