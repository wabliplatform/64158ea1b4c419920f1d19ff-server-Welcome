/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Welcomeentity } = require('../models/Welcomeentity');

/**
* Creates the data
*
* welcomeentity Welcomeentity data to be created
* returns welcomeentity
* */
const createwelcomeentity = ({ welcomeentity }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Welcomeentity(welcomeentity).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* welcomeentityId String the Id parameter
* no response value expected for this operation
* */
const deletewelcomeentity = ({ welcomeentityId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Welcomeentity.findOneAndDelete({ _id:welcomeentityId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllwelcomeentity = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Welcomeentity.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamswelcomeentity = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Welcomeentity.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* welcomeentityId String the Id parameter
* returns welcomeentity
* */
const getwelcomeentity = ({ welcomeentityId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Welcomeentity.findById(welcomeentityId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* welcomeentityId String the Id parameter
* welcomeentity Welcomeentity data to be updated (optional)
* returns welcomeentity
* */
const updatewelcomeentity = ({ welcomeentityId, welcomeentity }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Welcomeentity.findOneAndUpdate({ _id:welcomeentityId },welcomeentity).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createwelcomeentity,
  deletewelcomeentity,
  getAllwelcomeentity,
  getByParamswelcomeentity,
  getwelcomeentity,
  updatewelcomeentity,
};
