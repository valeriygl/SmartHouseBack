const getHomeById = (id, homes) => {
  const home = homes.find(home => home.id == id);
  return home;
};

module.exports = getHomeById;
