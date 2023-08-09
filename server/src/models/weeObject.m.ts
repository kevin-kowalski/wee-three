import { Object } from '../types';
import WeeObject from './weeObjectSchema.m';

/**
 * Retrieves a single object based on its name, and returns it.
 */
export const getOne = async (id: string) => {
  try {
    // Find a WeeObject with a title that matches the provided name (case-insensitive)
    const weeObject = await WeeObject.findOne({
      _id: id
    });

    // If no object is found, throw an error
    if (!weeObject) throw new Error('No object found');

    // Return the retrieved object
    return weeObject;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Retrieves objects belonging to a specific category,
 * and returns them as an array
 */
export const getByCategory = async (categoryName: string) => {
  try {
    // Find WeeObjects with a category that matches the provided name (case-insensitive)
    const categoryObjects = await WeeObject.find({
      categories: { $regex: new RegExp(categoryName, 'i') }
    });

    // If no objects are found, throw an error
    if (!categoryObjects) throw new Error('No objects found');

    // Return the retrieved objects
    return categoryObjects;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Retrieves all objects, and returns them as an array
 */
export const getAll = async () => {
  try {
    // Find all WeeObjects
    const allObjects = await WeeObject.find({});

    // If no objects are found, throw an error
    if (!allObjects) throw new Error('No objects found');

    // Return all retrieved objects
    return allObjects;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Creates one object, and returns it
 */
export const postOne = async (object: Object) => {
  try {
    const response = await WeeObject.create(object);
    return response;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Finds one object by its title,
 * updates its categories array, and returns it
 */
export const findOneAndUpdateCategories = async (id: string, category: string) => {
  try {
    const modelData = await getOne(id);
    const filter = { _id: id };
    const update = { categories: [...modelData.categories, category] };
    const response = await WeeObject.findOneAndUpdate(filter, update);
    return response;
  } catch (err) {
    console.error(err);
  }
};