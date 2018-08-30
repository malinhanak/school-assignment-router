const url = "http://192.168.99.100:8070/api/collections/get/RouterBlog?token=5a1c797f7636bee82420762dfcea23";

const GET_CAT = () => {
  let fetchbodu = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    }
  return fetch(url,  fetchbodu)
    .then(assets => assets.json())
    .then(assets => assets.entries);
  
  
};
export default GET_CAT;
