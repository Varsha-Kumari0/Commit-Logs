npm install
npm run dev

# Commit-Logs

## 📝 Project Overview

Commit-Logs is a full-stack blog platform that makes writing, sharing, and managing blogs easy for everyone. It features a modern UI, markdown-based content, user authentication, comments, likes, and more. The project is built with Next.js, React, Firebase, Redux, and Tailwind CSS.

<div align="center">
  <img alt="Demo" src="./Extra/demo.gif" />
</div>

---

## 🚀 Live Demo

<!-- Uncomment and add your deployed link below -->
<!-- [View Live](https://your-deployed-link.vercel.app/) -->

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes, Firebase (Authentication, Database)
- **State Management:** Redux
- **Content:** Markdown files
- **Deployment:** Vercel

---

## ✨ Features

- 🌙 Dark Mode support
- 📃 Write blogs in Markdown
- 🔒 User authentication (Firebase)
- 💬 Comments and Likes on blogs
- 📝 Easy to add new posts (just drop a markdown file)
- 🗂️ Table of Contents auto-generated from headings
- 🎨 Styled with Tailwind CSS
- 📤 Social sharing
- 🖼️ Blog-specific images and assets

---

## 📁 Folder Structure

```text
_content/         # Markdown files for each blog post
public/           # Static assets (images, icons, blog images)
Components/       # Reusable React components (UI, blog, comments, etc.)
pages/            # Next.js pages and API routes
Firebase/         # Firebase config and admin setup
Lib/              # Utility functions (auth, data, markdown headings)
Redux/Store/      # Redux store and user state
styles/           # Tailwind and global CSS
Extra/            # Demo images/gifs
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js
- Git

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Varsha-Kumari0/Commit-Logs.git
cd Commit-Logs
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✍️ Writing Your Own Blogs

1. Create a new markdown file in the `_content` folder (e.g., `BL-1011.md`).
2. Use the following format:

   ```markdown
   ---
   title: "Your Blog Title"
   date: "YYYY-MM-DD"
   tags: [tag1, tag2]
   ---

   # Heading 1
   Blog content here...
   ## Heading 2
   More content...
   ```
3. Add any images to `public/BL-1011/` and reference them in your markdown.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

- [Report Bug](https://github.com/Varsha-Kumari0/Commit-Logs/issues)
- [Request Feature](https://github.com/Varsha-Kumari0/Commit-Logs/issues)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

