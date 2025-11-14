import Checkbox from "./Checkbox";
import { categoryTitle } from "../data/category";

function CategoryFilter({ selectedCategories, onChangeCategory }) {
  return (
    <div className="p-5 space-y-3 border border-gray-800 rounded-lg bg-gray-900">
      <h3 className="font-semibold text-lg text-white">Categories</h3>
      {categoryTitle.map((category, index) => (
        <Checkbox
          key={index}
          text={category}
          checked={selectedCategories.includes(category)}
          onChange={(e) => onChangeCategory(category, e.target.checked)}
          labelClassName="text-gray-300 hover:text-white"
          checkboxClassName="text-red-600 bg-gray-800 border-gray-700 focus:ring-red-500"
        />
      ))}
    </div>
  );
}

export default CategoryFilter;