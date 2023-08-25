export default function updateSession(itemId: string, newItem: any) {
    // Create session store if it doesn't exist
    if (!sessionStorage.getItem("store")) {
        sessionStorage.setItem("store", JSON.stringify({}));
    }

    // Add new item to session store if it doesn't exist
    const sessionStore = JSON.parse(sessionStorage.getItem("store") || "{}");
    if (!sessionStore[itemId]) {
        sessionStore[itemId] = newItem;
        sessionStorage.setItem("store", JSON.stringify(sessionStore));
    }

    // Update item in session store if it exists
    else {
        sessionStore[itemId] = newItem;
        sessionStorage.setItem("store", JSON.stringify(sessionStore));
    }
}
