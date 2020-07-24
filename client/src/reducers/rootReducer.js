const initState = {
  init: true,
  articles: [
    {
      author: "Tucker Reals",
      title:
        'How the coronavirus almost killed a healthy woman with "no normal symptoms" - CBS News',
      description:
        "Research shows the coronavirus may attack the brain more than often than we think, including in young patients who don't get typical symptoms.",
      url:
        "https://www.cbsnews.com/news/coronavirus-attacks-brain-neurological-symptoms-including-young-covid-patients-common-experts-say/",
      urlToImage:
        "https://cbsnews2.cbsistatic.com/hub/i/r/2020/07/22/fd91b2d6-4b79-431a-91a5-c7d2686eba2e/thumbnail/1200x630/08765ee0bb95609964d544fb99c46768/wrixon-hospital.jpg",
      publishedAt: "2020-07-23T14:08:00Z",
      content:
        "London — Rebecca Wrixon knew that working as a nanny for a pair of doctors could leave her exposed to the coronavirus, but as a healthy 44-year-old with young children, she didn't worry much about ca… [+10593 chars]",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
