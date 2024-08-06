import { createContext } from "react";

const GifContext = createContext();
// eslint-disable-next-line react/prop-types
const GifProvider = ({ children }) => {
  return <GifContext.Provider>{children}</GifContext.Provider>;
};

export default GifProvider;
