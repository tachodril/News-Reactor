const initState = {
  init: true,
  curTab: 0,
  isLoaded: [false, false, false, false, false, false, false, false],
  articles1: [],
  articles2: [],
  articles3: [],
  articles4: [],
  articles5: [],
  articles6: [],
  articles7: [],
  articles8: [],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CHANGE_TAB") {
    const newTab = action.newTab;
    return {
      ...state,
      curTab: newTab,
    };
  } else if (action.type === "FETCH_ARTICLES") {
    var curCat = action.cat;

    var flags = state.isLoaded;
    flags[curCat] = true;

    if (curCat === 0) {
      return {
        ...state,
        isLoaded: flags,
        articles1: action.articles,
      };
    } else if (curCat === 1) {
      return {
        ...state,
        isLoaded: flags,
        articles2: action.articles,
      };
    } else if (curCat === 2) {
      return {
        ...state,
        isLoaded: flags,
        articles3: action.articles,
      };
    } else if (curCat === 3) {
      return {
        ...state,
        isLoaded: flags,
        articles4: action.articles,
      };
    } else if (curCat === 4) {
      return {
        ...state,
        isLoaded: flags,
        articles5: action.articles,
      };
    } else if (curCat === 5) {
      return {
        ...state,
        isLoaded: flags,
        articles6: action.articles,
      };
    } else if (curCat === 6) {
      return {
        ...state,
        isLoaded: flags,
        articles7: action.articles,
      };
    } else if (curCat === 7) {
      return {
        ...state,
        isLoaded: flags,
        articles8: action.articles,
      };
    }
  }

  return state;
};

export default rootReducer;
