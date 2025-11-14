import { useState, useMemo, useCallback } from "react";

import CategoryFilter from "./components/CategoryFilter";
import Products from "./components/Products";
import RatingFilter from "./components/RatingFilter";
import Pricefilter from "./components/Pricefilter";
import SortingFilter from "./components/SortingFilter";
import FilterChips from "./components/FilterChips";

import { getVisibleProducts } from "./data/product-filters";
import { priceRange } from "./data/products";

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);
  const [sortOption, setSortOption] = useState("PriceLowToHigh");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  const onChangeRatingHandler = (rating) => {
    setSelectedRating((prevRating) => (prevRating === rating ? "" : rating));
  };
  
  const onChangeSortHandler = (option) => {
    setSortOption(option);
  };

  const filteredProducts = useMemo(() => {
    let products = getVisibleProducts(
      selectedCategories,
      selectedRating,
      initPriceRange
    );

    switch (sortOption) {
      case "PriceLowToHigh":
        products.sort((a, b) => a.price - b.price);
        break;
      case "PriceHightToLow":
        products.sort((a, b) => b.price - a.price);
        break;
      case "ratingHightToLow":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "ratingLowToHigh":
        products.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    return products;
  }, [selectedCategories, selectedRating, initPriceRange, sortOption]);

    const clearAllFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedRating("");
    setInitPriceRange(initPriceFilter);
    setSortOption("PriceLowToHigh");
  }, []);

  const handleClearFilter = useCallback((type, value) => {
    switch (type) {
      case 'category':
        setSelectedCategories(prev => prev.filter(c => c !== value));
        break;
      case 'rating':
        setSelectedRating("");
        break;
      case 'price':
        setInitPriceRange(initPriceFilter);
        break;
      case 'sort':
        setSortOption("PriceLowToHigh");
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-40 bg-black border-b border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-white">FastFood Shop</h1>
            
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-300">
              Showing <strong>{filteredProducts.length}</strong> products
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <SortingFilter click={onChangeSortHandler} />
          </div>
        </div>

        <FilterChips
          selectedCategories={selectedCategories}
          selectedRating={selectedRating}
          currentPriceRange={initPriceRange}
          sortOption={sortOption}
          handleClearFilter={handleClearFilter}
          clearAllFilters={clearAllFilters}
          priceRangeMax={priceRange.max}
        />

        <div className="flex gap-6">
          <div className={`hidden lg:block w-80 space-y-6`}>
            <CategoryFilter
              selectedCategories={selectedCategories}
              onChangeCategory={onChangeCategoryHandler}
            />

            <div className="p-5 border border-gray-800 rounded-lg bg-gray-900">
              <h3 className="font-semibold text-lg mb-3 text-white">Price Filter</h3>
              <Pricefilter
                init={initPriceRange}
                price={priceRange}
                setfun={setInitPriceRange}
              />
            </div>

            <RatingFilter
              onChangeRating={onChangeRatingHandler}
              selectedRating={selectedRating}
            />
          </div>

          {mobileFiltersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-75">
              <div className="fixed inset-y-0 right-0 w-80 bg-gray-900 overflow-y-auto">
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <CategoryFilter
                    selectedCategories={selectedCategories}
                    onChangeCategory={onChangeCategoryHandler}
                  />

                  <div className="p-5 border border-gray-800 rounded-lg bg-gray-800">
                    <h3 className="font-semibold text-lg mb-3 text-white">Price Filter</h3>
                    <Pricefilter
                      init={initPriceRange}
                      price={priceRange}
                      setfun={setInitPriceRange}
                    />
                  </div>

                  <RatingFilter
                    onChangeRating={onChangeRatingHandler}
                    selectedRating={selectedRating}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex-1">
              <Products products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;