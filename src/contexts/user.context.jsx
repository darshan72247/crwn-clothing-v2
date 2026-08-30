import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListnear , creatUserDocumentFromAuth} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const[currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    useEffect( () => {
        const unsubscirbe = onAuthStateChangedListnear( (user) => {
            if (user) {
                creatUserDocumentFromAuth(user);
            }
            
            setCurrentUser(user);
        });
        return unsubscirbe;
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}; 