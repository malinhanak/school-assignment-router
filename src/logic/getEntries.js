const url = "http://192.168.99.100:8070/api/collections/get/RouterBlog?token=5a1c797f7636bee82420762dfcea23";


const GET_ENTRIES = (cat, page) => {
  let limit = 3;
  let skip = limit * page - limit;

  let fetchBody = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
  }

  if(cat){
    fetchBody.body = JSON.stringify({
      filter: {Category:cat},
      limit: limit,
      skip: skip,
      sort: {_created: 1},
  }) 
  } else {
    fetchBody.body = JSON.stringify({
      limit: limit,
      skip: skip,
      sort: {_created: 1},
  }) 
  }
    return fetch(url,  fetchBody)
      .then(assets => assets.json())
      .then(assets => assets);
    
    
};
export default GET_ENTRIES;
