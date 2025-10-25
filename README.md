# 📝 To-Do Web Application

A clean, responsive **To-Do List** web app built with **HTML, CSS, and JavaScript**.  
Add, edit, complete, and delete tasks, all while setting optional **date & time**. Data is saved in your browser using **LocalStorage**.

---

### 🚀 Features
- **Task Management**:
  - Add new tasks with optional date & time
  - Edit existing tasks
  - Delete tasks
  - Mark tasks as completed
- **Persistent Storage** — tasks are saved in the browser even after refresh.
- **Responsive Design** — works seamlessly across desktop and mobile.
- **Clean Modern UI** with smooth transitions and hover effects.

---

### 🕹️ Controls
| Action | Description |
|--------|--------------|
| Input Field | Enter new task text |
| Date/Time Picker | Set due date and time (optional) |
| Add Button | Add task to list |
| ✔ Complete Button | Mark task as completed |
| ✏ Edit Button | Edit task text |
| 🗑 Delete Button | Remove task from list |

---

### 🧠 App Logic Summary
- Tasks are stored in an array of objects: `{ text, dateTime, completed }`.
- Adding a task pushes it to the array and renders it on screen.
- Edit, delete, or toggle complete updates the array and refreshes the display.
- LocalStorage ensures tasks persist across sessions.

---

### 🧩 Tech Stack
- **HTML5** — structure  
- **CSS3** — layout, responsiveness, and style  
- **Vanilla JavaScript (ES6)** — functionality and interactivity  
- **LocalStorage** — persistent browser storage  

---

### ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nidafazlinalband-eng.git

---
2. Navigate into the project folder:

bash 

cd SCT_WD_4
---
3. Open index.html in any modern browser:

bash
start index.html
---
📁 Folder Structure
bash 

SCT_WD_4/
│
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # App logic
└── README.md       # Project description
---
🧾 License

This project is open source and free to use.

---
👩‍💻 Author

Nida Fazli Nalband
🎓 B.E. Computer Science Engineering
💼 GitHub: NidaFazliNalband-eng

---
✅ Next Steps / Suggestions:

Add categories (Work, Personal, Urgent)

Include search and filter functionality

Implement drag-and-drop reordering

Add dark mode toggle

Deploy using GitHub Pages for live preview
---
Stay Organized & Enjoy! 💜




