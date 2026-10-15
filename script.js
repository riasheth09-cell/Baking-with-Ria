/* ==========================================================================
   FEATURE 1: INTERACTIVE COOKIE COUNTER (Home Page)
   ========================================================================== */

let cookieCount = 0;

function grabCookie() {
    cookieCount++;
    const countElement = document.getElementById("count");
    
    if (countElement) {
        countElement.textContent = cookieCount;
    }

    // Interactive Alert pop-up when reaching milestones
    if (cookieCount === 1) {
        alert("🍪 Yum! You got your first cookie!");
    } else if (cookieCount === 10) {
        alert("🎉 Wow! You collected 10 cookies! You're a Master Baker!");
    }
}

/* ==========================================================================
   FEATURE 2: COLOR THEME SWITCHER (All Pages)
   ========================================================================== */

function changeTheme() {
    // Toggles the alternate high-contrast colorful theme class on the <body> tag
    document.body.classList.toggle("alternate-theme");

    // Optional alert or feedback message
    const button = document.getElementById("theme-btn");
    if (document.body.classList.contains("alternate-theme")) {
        if (button) button.textContent = "🎨 Switch Back to Berry Theme";
    } else {
        if (button) button.textContent = "🎨 Change Theme Color";
    }
}

/* ==========================================================================
   FEATURE 3: DYNAMIC RECIPE SERVING CALCULATOR (Cupcakes Page)
   ========================================================================== */

let currentServings = 12;

function adjustServings(change) {
    const servingElement = document.getElementById("serving-count");
    if (!servingElement) return;

    // Set minimum serving size to 6 cupcakes
    if (currentServings + change < 6) {
        alert("Minimum batch size is 6 cupcakes!");
        return;
    }

    currentServings += change;
    servingElement.textContent = currentServings + " Cupcakes";

    // Recalculate ingredient quantities dynamically
    const multiplier = currentServings / 12; // Base recipe is calculated for 12 cupcakes
    const quantitySpans = document.querySelectorAll(".qty");

    quantitySpans.forEach(span => {
        const baseValue = parseFloat(span.getAttribute("data-base"));
        if (!isNaN(baseValue)) {
            const newValue = (baseValue * multiplier).toFixed(2);
            // Clean up trailing zeros (e.g., 3.00 becomes 3)
            span.textContent = parseFloat(newValue);
        }
    });
}

/* ==========================================================================
   FEATURE 4: SHOW / HIDE SECRET TIP (Cookies Page)
   ========================================================================== */

function toggleSecretTip() {
    const secretTip = document.getElementById("secret-tip");
    const secretBtn = document.getElementById("secret-btn");

    if (!secretTip || !secretBtn) return;

    if (secretTip.style.display === "none" || secretTip.style.display === "") {
        secretTip.style.display = "block";
        secretBtn.textContent = "Hide Secret Tip";
    } else {
        secretTip.style.display = "none";
        secretBtn.textContent = "Reveal Secret Tip";
    }
}
