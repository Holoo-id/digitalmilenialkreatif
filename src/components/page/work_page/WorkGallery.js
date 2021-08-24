const WorkGallery = ({ works }) => {
  return(
    <div className="workGallery">
      {works.map((work) => (
        <div className="workWrap" key={work.id}>
          <figure className="workThumbnail">
            <img src="./images/bg-1.png"/>
          </figure>
          <p className="workTitle">{ work.name }</p>
        </div>
      ))}
    </div>
  )
}
export default WorkGallery