# 🧪 The Distillery
**Zaunite Alchemy for PDFs → Markdown**

![The Distillery](https://via.placeholder.com/800x400/1A1A1A/FF007F?text=THE+DISTILLERY)

A **subterranean lab** where rigid PDFs are violently transmuted into clean, machine-readable Markdown. Inspired by the chaotic energy of *Arcane* and Zaun, this tool is **mad science applied to data engineering**.

---

## 🔮 Features
- **Drag-and-drop PDFs** into the cauldron.
- **Watch the alchemy** as your files are distilled into pure Markdown.
- **Zaunite-themed UI**: Neon graffiti, bubbling liquids, and industrial pipes.
- **Local Pandoc**: High-quality conversions powered by Pandoc.

---

## 🎨 Design
### Color Palette
| Color          | Hex Code   | Usage                          |
|----------------|------------|--------------------------------|
| Manic Pink     | `#FF007F`  | Primary buttons, accents        |
| Zaunite Green  | `#39FF14`  | Active processing, progress    |
| Hextech Cyan   | `#00E5FF`  | Refined Markdown output        |
| Scorched Iron  | `#1A1A1A`  | Background, dark surfaces      |

### Typography
| Type          | Font                          | Usage                          |
|---------------|-------------------------------|--------------------------------|
| Headers       | [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) | Logo, titles               |
| Body          | [Inter](https://fonts.google.com/specimen/Inter) | General text               |
| Code/Terminal | [Fira Code](https://fonts.google.com/specimen/Fira+Code) | Markdown output          |

---

## 🛠️ Setup

### Frontend
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Deploy to [Cloudflare Pages](https://pages.cloudflare.com/).

### Backend
1. Install Pandoc:
   ```bash
   brew install pandoc  # macOS
   ```
2. Install Python dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Run the local server:
   ```bash
   cd backend
   python local_server.py
   ```
4. Expose it with ngrok:
   ```bash
   ngrok http 5000
   ```
5. Update the frontend’s `CONVERT_URL` in `src/App.tsx` to your ngrok URL:
   ```tsx
   const CONVERT_URL = "https://your-ngrok-url.ngrok.io/convert";
   ```

---

## 💡 Inspiration
Inspired by [PDFtoLLM](https://github.com/U-C4N/PDFtoLLM) and the chaotic aesthetic of *Arcane*.

---

## 📜 License
MIT