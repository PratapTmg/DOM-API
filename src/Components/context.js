import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isloading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //Remove post
  const handleDeletePost = (post_ID) => {
    dispatch({
      type: "DELETEPOST",
      payload: post_ID,
    });
  };

  //search
  const serachPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  const getPrevPage = () => {
    dispatch({
      type: "PREVIOUS_PAGE",
    });
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <>
      <AppContext.Provider
        value={{
          ...state,
          handleDeletePost,
          serachPost,
          getNextPage,
          getPrevPage,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
