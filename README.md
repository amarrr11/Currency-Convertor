

# **🌍 Currency Converter**  

A simple **currency converter** web application that allows users to convert between different currencies using **real-time exchange rates**.  

## **📌 Features**
✔ Fetches real-time exchange rates using an **API**  
✔ Supports **multiple currencies** with country flags  
✔ Automatically updates exchange rates on page load  
✔ User-friendly **UI with dropdown selection**  
✔ **Error handling** for invalid inputs  
✔ Built using **HTML, CSS, and JavaScript**  

---

## **🚀 Technologies Used**
- **HTML5** – Structure of the web page  
- **CSS3** – Styling and layout  
- **JavaScript (Vanilla JS)** – Handles currency conversion logic  
- **Fetch API** – Fetches live exchange rates  
- **External API** – [`currency-api`](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1) for real-time rates  

---

## **📷 Screenshots**
> *(Add screenshots of your project here)*  

---

## **💻 How to Run the Project**
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   ```
2. **Navigate to the project folder**  
   ```bash
   cd currency-converter
   ```
3. **Open `index.html` in your browser**  
   ```bash
   start index.html   # Windows
   open index.html    # Mac
   ```

---

## **⚙ How It Works**
1. Enter the amount in the **input field**.  
2. Select the **"From"** and **"To"** currency using the dropdowns.  
3. Click the **"Get Exchange Rate"** button.  
4. The converted amount is displayed instantly.  

---

## **🔗 API Used**
- **Base URL:**  
  ```
  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
  ```
- **Example API Call:**  
  ```
  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
  ```
- **Response Format:**
  ```json
  {
    "usd": {
      "eur": 0.92,
      "inr": 82.5,
      "gbp": 0.76
    }
  }
  ```

---

## **📂 Project Structure**
```
currency-converter/
│── index.html        # Main HTML file
│── style.css         # CSS for styling
│── app.js            # JavaScript (Handles currency conversion)
│── codes.js          # Additional functions (e.g., country list)
│── README.md         # Documentation (this file)
```

---

## **🛠 Future Enhancements**
✅ Add **historical exchange rates** 📈  
✅ Implement **live exchange rate updates** using WebSockets  
✅ Allow users to **save favorite currencies** for quick access  
✅ Support **dark mode** 🌙  

---
