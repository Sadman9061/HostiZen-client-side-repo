const getMeals = async ({ pageParam = 0 }) => {

    // Fetch meals from the API based on the provided page offset and search term.
    const res = await fetch(`https://hostizen-server-side.vercel.app/mealsInfiniteScroll?limit=2&offset=${pageParam}`);
    const data = await res.json()
    return { ...data, prevOffset: pageParam };
  };
  export default getMeals