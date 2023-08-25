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

/**
 *  How to use this function:
 *
 *  // E.g., Update nav value
 *  import { updateSession } from "../../store/session";
 *  import { useSelector, useDispatch } from "react-redux";
 *  import { set } from "../../store/navSlice";
 *
 *  // Redux Store
 *  export default function ...(){
 *      // Redux Store
 *      const navValue = useSelector((state: any) => state.nav.count);
 *      const dispatch = useDispatch();
 *      ...
 *      
 *      let newValue = 1;
 *     // Update session store
 *      dispatch(set(newValue));
        updateSession("nav", newValue);
 *  }
 */
