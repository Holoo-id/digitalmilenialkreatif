const CategoryList = ({ categories, filterMenu }) => {
  return(
    <div className="galleryFilter">
      {categories.map((category, i) => (
        <button key={i} onClick={() => filterMenu(category)}>{ category }</button>
      ))}
    </div>
  )
}
export default CategoryList