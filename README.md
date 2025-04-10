# 🧠 ModelForge

**ModelForge** is a visual, drag-and-drop interface to build and train deep learning models — no code, no fuss. Design neural networks like stacking Lego blocks and see them come to life with real-time training and visualization. Whether you're a beginner or a prototyping pro, ModelForge turns your ideas into working models faster than you can say "backpropagation."

![ModelForge Banner](./modelforge/public/modelForge.png)

---

## 🚀 Features

- ⚙️ **Sequential Model Builder** – Drag and drop layers to visually create a deep learning model.
- 🖼️ **Intuitive Interface** – React-powered canvas with draggable components and real-time model structure preview.
- 📊 **Live Training Feedback** – Watch your model train with live loss/accuracy curves.
- 🗃️ **Layer Customization** – Tweak hyperparameters and settings in a dedicated pane.
- 🧠 **Built-in Layer Library** – Dense, Conv2D, Dropout, Flatten, and more (with icons!).
- 🧵 **Session Memory** – Redis-based backend to store and manage model configs pre-training.
- 📦 **One-click Training** – Train your model via backend endpoints (Express.js + PyTorch/TensorFlow support planned).

---

## 🏗️ Tech Stack

| Frontend             | Backend           | Storage            | Extras                      |
|----------------------|-------------------|---------------------|-----------------------------|
| Next.js (TypeScript) | Express.js        | Redis               | Swiper.js, TailwindCSS      |
| Framer Motion        | REST API          | File System (optional) | TensorBoard (planned)    |

---

## 📦 Installation

### Prerequisites

- Node.js
- Redis
- Python (optional for training module)

### Clone and Setup

```bash
git clone https://github.com/yourusername/modelforge.git
cd modelforge

# Frontend
cd frontend
npm install
npm run dev
