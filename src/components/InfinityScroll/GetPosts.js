export const GetPosts = async (page, limit = 3, idUser) =>{
  const getDataOnPage = await (
    await fetch(`http://176.105.100.114:7000/api/post/user/${idUser}?limit=${limit}&page=${page}`).then(res => res.json()).then(res =>res.rows)
  );
  return getDataOnPage
};