const url = "http://192.168.99.100:8070/api/collections/get/RouterBlog?token=5a1c797f7636bee82420762dfcea23";
console.log('hej')
const GET_ENTRIES = (cat) => {
  let fetchbodu = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
}
if(cat){
  fetchbodu.body = JSON.stringify({
    filter: {Category:cat},
    limit: 3,
}) 
} else {
  fetchbodu.body = JSON.stringify({
    limit: 3,
}) 
}
  return fetch(url,  fetchbodu)
    .then(assets => assets.json())
    .then(assets => assets.entries);
  
  
};
export default GET_ENTRIES;
