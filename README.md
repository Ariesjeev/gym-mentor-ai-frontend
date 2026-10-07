<div align="center">

# 🌐 Gym Mentor AI — Landing Page

> Train smarter, move better. The marketing site for Gym Mentor AI, a real-time AI fitness coach.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 🔗 Live Demo

**[🚀 View the Site](https://ariesjeev-gym-mentor-ai-frontend.vercel.app/)** · **[Launch the App](https://gym-mentor-ai-jeevan-main.streamlit.app/)**

Main app repo: [gym-mentor-ai-Jeevan-main](https://github.com/Ariesjeev/gym-mentor-ai-Jeevan-main)

</div>

---

## 📖 Overview

This is the public landing page for **Gym Mentor AI**: a dark, motion-driven one-pager that explains what the app does — pose detection, rep counting, form feedback and voice coaching — and sends visitors straight into the live Streamlit app. It's a static HTML/CSS/JS site, deployed on Vercel.

## 🧩 Sections

- **Hero** — "Train smarter. Move better." with a live-session HUD preview (reps, set, phase, coach message) and a *Launch App* button
- **Core Features** — pose detection, rep & set tracking, form feedback, voice coaching, workout history, AI coach layer
- **Exercise Library** — one card per exercise (squats, push-ups, biceps curls, shoulder press, lunges) with its tracked angles
- **Under the Hood** — the pipeline from camera → MediaPipe → exercise logic → AI coach → voice
- **Live Demo** — embedded demo video and a link to the live app
- **Contact** — links to GitHub, LinkedIn, Twitter/X and email

## 🧰 Tech Stack

| Layer | Tools |
|---|---|
| Markup / styling | HTML5, CSS3 |
| Interactivity | Vanilla JavaScript |
| Hosting | Vercel |

## 📁 Project Structure

```
gym-mentor-ai-frontend/
├── index.html
├── style.css
├── script.js
├── images/      # exercise and UI screenshots (squat.png, pushup.png, etc.)
└── videos/      # demo video (gym-mentor-demo.mp4)
```

## 🚀 Run Locally

No build step — it's a static site.

```bash
git clone https://github.com/Ariesjeev/gym-mentor-ai-frontend.git
cd gym-mentor-ai-frontend
# then just open index.html in your browser,
# or serve it locally:
python -m http.server 5500
```

Visit `http://localhost:5500`.

## ☁️ Deployment

Hosted on **Vercel**; pushing to `main` redeploys the site automatically.

## 👤 Author

**Jeevan Bikash Sahoo** — Full Stack Developer & AI Engineer
[GitHub](https://github.com/Ariesjeev) · [LinkedIn](https://www.linkedin.com/in/jeevan02/) · [Twitter/X](https://x.com/jeevan_bikash)
