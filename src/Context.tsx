import { useContext, createContext } from 'react';

const SliderContext = createContext({} as any);

export function useSlider() {
  return useContext(SliderContext);
}

export function ContextProvider({ children }: any) {
  const value: any = {};
  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
}
