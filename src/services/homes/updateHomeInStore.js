const { writeFile } = require('..');

const updateHomeInStore = async (path, homes, newHome) => {
  const { id } = newHome;

  const updatedHomes = homes.map(home => (home.id === id ? newHome : home));

  await writeFile(path, JSON.stringify(updatedHomes));
};

module.exports = updateHomeInStore;
