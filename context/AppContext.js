import { createContext, useContext, useMemo, useReducer } from "react";
import { AppReducer, InitialState } from "./AppReducer";
const AppContext = createContext();
export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
export function useAppContext() {
  return useContext(AppContext);
}
