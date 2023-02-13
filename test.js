function checkFlowersAvailable(flower, gardenArr) {
  if (gardenArr.indexOf(flower) >= 0) {
      console.log( `The ${flower} are available!`)
  } else {
      console.log( `The ${flower} are sold! You need to purchase more!`);
  }
}
checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])