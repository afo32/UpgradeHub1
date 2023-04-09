const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
  ];

  function toFilterStreamers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    return streamers.filter(streamer => streamer.name.toLowerCase().includes(searchTerm));
  }

  function toShowFilterStreamers() {
    const filteredStreamers = toFilterStreamers();
    console.log(filteredStreamers);
  }

  document.getElementById('filterButton').addEventListener('click', toShowFilterStreamers);