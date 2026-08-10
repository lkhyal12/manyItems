// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    gender: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 50,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const navigate = useNavigate();
  const categories = ["Top Wear", "Bttom Wear"];

  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["xs", "s", "m", "l", "xl", "xxl"].map((el) =>
    el.toUpperCase(),
  );
  const matrials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linem",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "Chicstyle",
  ];
  const genders = ["Men", "Women"];

  // update filters
  function handleFilterChange(e) {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else newFilters[name] = newFilters[name].filter((el) => el !== value);
    } else newFilters[name] = value;

    setFilters(newFilters);
    updateUrlParams(newFilters);
  }

  // update the price range
  function handleUpdateRange(e) {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      minPrice: 0,
      maxPrice: Number(value),
    }));
  }

  // update the search params
  function updateUrlParams(newFilters) {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }

      setSearchParams(params);
      navigate(`?${params.toString()}`);
    });
  }
  useEffect(() => {
    const paramsObj = Object.fromEntries([...searchParams]);
    console.log(paramsObj);

    setFilters({
      category: paramsObj.category || "",
      gender: paramsObj.gender || "",
      color: paramsObj.color || "",
      size: paramsObj.size ? paramsObj.size.split(",") : [],
      brand: paramsObj.brand ? paramsObj.brand.split(",") : [],
      material: paramsObj.material ? paramsObj.material.split(",") : [],
      minPrice: paramsObj.minPrice || 0,
      maxPrice: paramsObj.maxPrice || 50,
    });
    setPriceRange([0, paramsObj.priceRange || 100]);
  }, [searchParams]);
  return (
    <div className="p-4">
      <h2 className="text-xl font-medium text-gray-800 mb-4">Filter</h2>
      {/* category filter */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Category</label>

        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />

            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* gender filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 mb-2 font-medium">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              checked={gender === filters.gender}
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300 border focus:ring-blue-400"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* color filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 mb-2 font-medium">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`size-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${color === filters.color ? "ring-2 ring-blue-500 " : ""} `}
              style={{ background: color.toLocaleLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* size filter */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              checked={filters.size.indexOf(size) > -1}
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300 border focus:ring"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* material filter */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Material</label>
        {matrials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              checked={filters.material.indexOf(material) > -1}
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300 border focus:ring"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* brand filter */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              checked={filters.brand.indexOf(brand) > -1}
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300 border focus:ring"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* price range filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          value={filters.maxPrice}
          onChange={handleUpdateRange}
          min={0}
          max={100}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />

        <div className="flex items-center justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
