import React, {
    Context,
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
//import NetInfo from "@react-native-community/netinfo";
//import { getCurrentUser } from "../libs/appwrite";
import {useWindowDimensions} from "react-native";

const GlobalContext: Context<any> = createContext('');
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: any) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isConnected, setIsConnected] = useState(true);
    const { fontScale, width, height } = useWindowDimensions();

    // Fetch the current user status when the app loads
    // useEffect(() => {
    //     getCurrentUser()
    //         .then((res) => {
    //             if (res) {
    //                 setIsLogged(true);
    //                 setUser(res);
    //             } else {
    //                 setIsLogged(false);
    //                 setUser(null);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, []);
    //
    // // Listen to network connectivity changes
    // useEffect(() => {
    //     const unsubscribe = NetInfo.addEventListener((state) => {
    //         setIsConnected(state.isConnected);
    //     });
    //     return () => unsubscribe();
    // }, []);

    return (
        <GlobalContext.Provider
            value={{
        isLogged,
            setIsLogged,
            user,
            setUser,
            loading,
            isConnected,  // Add the isConnected state to the context
            fontScale,   // Add fontScale to the context
            width,       // Optionally add width and height
            height,
    }}
>
    {children}
    </GlobalContext.Provider>
);
};

export default GlobalProvider;