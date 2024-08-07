import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const GifContext = createContext();
// eslint-disable-next-line react/prop-types
const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);

  const gif = new GiphyFetch(import.meta.VITE_GIPHY_KEY);

  return <GifContext.Provider value={{ gif ,gifs,setGifs,filter,setFilter,favorites}}>{children}</GifContext.Provider>;
};

export const GifState = () => {
  return useContext(GifContext);
};
export default GifProvider;
