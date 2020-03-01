const bowlingData = require('./bowling-data.json');
const _ = require('lodash');

const allBowlersResolver = () => {
  return _.map(bowlingData, (value, id) => ({ id, ...value }));
}

const addBowlerResolver = (_parent, args) => {
  const newBowler = {
    id: `${args.lastName}${args.firstName}`,
    Name: `${args.lastName}, ${args.firstName}`,
    AVG: args.average,
    GMS: 0,
    HCP: 220 - args.average
  };
  const { id, ...rest } = newBowler;
  bowlingData[newBowler.id] = { ...rest };

  return newBowler;
}

exports.allBowlersResolver = allBowlersResolver;
exports.addBowlerResolver = addBowlerResolver;
