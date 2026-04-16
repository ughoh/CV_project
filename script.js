function getBrowserName() {
    const userAgent = navigator.userAgent

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) return "Google Chrome"
    if (userAgent.includes("Firefox")) return "Mozilla Firefox"
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari"
    if (userAgent.includes("Edg")) return "Microsoft Edge"
    if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera"

    return "Unknown Browser"
}

function getOSName() {
    const platform = navigator.platform.toLowerCase()

    if (platform.includes("win")) return "Windows"
    if (platform.includes("mac")) return "macOS"
    if (platform.includes("linux")) return "Linux"
    if (platform.includes("iphone") || platform.includes("ipad")) return "iOS"
    if (platform.includes("android")) return "Android"

    return "Unknown OS"
}

function saveBrowserInfo() {
    const browserInfo = {
        browser: getBrowserName(),
        os: getOSName(),
        language: navigator.language,
        platform: navigator.platform,
        cookiesEnabled: navigator.cookieEnabled,
        screenWidth: screen.width,
        screenHeight: screen.height,
        userAgent: navigator.userAgent
    }

    localStorage.setItem("browserInfo", JSON.stringify(browserInfo))
}

function displayBrowserInfo() {
    const storageOutput = document.getElementById("storage-output")
    const browserInfo = JSON.parse(localStorage.getItem("browserInfo"))

    if (!browserInfo || !storageOutput) return

    storageOutput.innerHTML = `
        <p><strong>Browser:</strong> ${browserInfo.browser}</p>
        <p><strong>Operating System:</strong> ${browserInfo.os}</p>
        <p><strong>Language:</strong> ${browserInfo.language}</p>
        <p><strong>Platform:</strong> ${browserInfo.platform}</p>
        <p><strong>Cookies Enabled:</strong> ${browserInfo.cookiesEnabled ? "Yes" : "No"}</p>
        <p><strong>Screen Resolution:</strong> ${browserInfo.screenWidth} x ${browserInfo.screenHeight}</p>
        <p><strong>User Agent:</strong> ${browserInfo.userAgent}</p>
    `
}

async function loadComments() {
    const commentsContainer = document.getElementById("comments-container")

    if (!commentsContainer) return

    try {
        commentsContainer.innerHTML = "<p>Loading comments...</p>"

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/6/comments")
        const comments = await response.json()

        commentsContainer.innerHTML = ""

        comments.forEach(comment => {
            const commentCard = document.createElement("div")
            commentCard.classList.add("comment-card")

            commentCard.innerHTML = `
                <h3>${comment.name}</h3>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>
            `

            commentsContainer.appendChild(commentCard)
        })
    } catch (error) {
        commentsContainer.innerHTML = "<p>Failed to load comments.</p>"
        console.error("Error loading comments:", error)
    }
}

function setupModal() {
    const modal = document.getElementById("feedback-modal")
    const closeModal = document.getElementById("close-modal")

    if (!modal || !closeModal) return

    setTimeout(() => {
        modal.style.display = "flex"
    }, 60000)

    closeModal.addEventListener("click", () => {
        modal.style.display = "none"
    })

    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none"
        }
    })
}

function applyThemeByTime() {
    const hour = new Date().getHours()
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
        if (savedTheme === "light") {
            document.body.classList.add("light-theme")
        } else {
            document.body.classList.remove("light-theme")
        }
        return
    }

    if (hour >= 7 && hour < 21) {
        document.body.classList.add("light-theme")
    } else {
        document.body.classList.remove("light-theme")
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle")

    if (!themeToggle) return

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme")

        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light")
        } else {
            localStorage.setItem("theme", "dark")
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    saveBrowserInfo()
    displayBrowserInfo()
    loadComments()
    setupModal()
    applyThemeByTime()
    setupThemeToggle()
})