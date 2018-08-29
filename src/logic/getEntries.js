const GET_ENTRIES = () => {
  return fetch('http://192.168.99.100:9090/api/collections/get/Blogg?token=711c494668772b84afd0724d5b2a08', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
  })
  .then(assets => assets.json())
  .then(assets => assets.entries);
};
export default GET_ENTRIES;
