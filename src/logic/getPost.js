const GET_POST = (id) => {
return fetch('http://192.168.99.100:8070/api/collections/get/RouterBlog?token=5a1c797f7636bee82420762dfcea23', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            //filter: {published:true},
            limit: 1,
            skip: id,
        })
    })
    .then(assets => assets.json())
    .then(assets => assets.entries[0]);
    
};
export default GET_POST;