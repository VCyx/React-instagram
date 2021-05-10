export const GetPosts = async (page, limit = 2) =>{
  const getDataOnPage = await (
    await fetch(`http://176.105.100.114:7000/api/post/?limit=${limit}&page${page}`).then(res => res.json()).then(res =>res.rows)
  );
  return getDataOnPage
};
// `https://jsonplaceholder.typicode.com/albums/${page}/photos` - тест
// `http://176.105.100.114:7000/api/post/?limit=${limit}&page${page}`