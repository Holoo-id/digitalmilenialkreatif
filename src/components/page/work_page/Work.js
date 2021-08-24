import { useState } from 'react'
import CategoryList from './CategoryList'
import WorkGallery from './WorkGallery'
import WorkList from './WorkList'
function Work() {
  const [works, setWorks] = useState(WorkList)
  const allCategories = [...new Set(works.map((work) => work.category )), 'all']
  const [categoryItems, setCategoryItems] = useState(allCategories)
  const filterMenu = (category) => {
    if (category === 'all') {
      setWorks(WorkList)
      return
    }
    const update = WorkList.filter((work) => {
      return work.category === category
    })
    setWorks(update)
  }

  return(
    <div className="workPage">
      <img src="./images/custom_hr.png" className="customHr"/>
      <h2 className="pageTitle">work</h2>
      <CategoryList categories={ categoryItems } filterMenu={ filterMenu } />
      <WorkGallery works={ works } />
      {/* <WorkGallery works={ works.filter((work) => work.category === 'programming') } /> */}
    </div>
  )
}

export default Work