import React from 'react'
import { getAllCategories } from '../CategoryCard/category.actions';
import CatSwiper from './CatSwiper';

    export default async function HandleCatSwiper() {
  const categories = await getAllCategories();

  if (!categories) {
    return <p className="text-center text-red-500">No categories found</p>;
  }

  return <CatSwiper category={categories} />;

}
