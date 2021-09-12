import {useState} from 'react'
import Footer from '../Footer'
import ToggleSidebar from '../ToggleSidebar'
function About() {
  const [divisions] = useState([
    {
      id: 0,
      name: 'PHOTO / VIDEO',
      image: './images/photo_video.png',
      description: 'Sed posuere turpis vel auctor aliquam. Cras consectetur felis quis neque rhoncus euismod et in nisl. Nulla mollis dolor eget eros commodo cursus. Etiam eu ornare arcu, venenatis congue lorem. Aliquam elementum ultricies mauris a pharetra. Vestibulum mollis ac ligula et pulvinar. Fusce mattis purus erat, rutrum rhoncus nisl faucibus id. Pellentesque maximus id ex a mattis. Aliquam tempor cursus odio, vel faucibus lorem auctor non. Morbi varius pulvinar neque a rutrum. Donec in ex interdum, posuere diam sit amet, congue sapien.'
    },
    {
      id: 1,
      name: 'GRAPHIC DESIGN',
      image: './images/creative.png',
      description: 'Duis fringilla lorem tortor, ac suscipit est malesuada feugiat. Vestibulum commodo fringilla arcu, ullamcorper consectetur purus pulvinar interdum. Donec lorem magna, varius non urna vel, tincidunt lobortis ex. Mauris dapibus non lacus sit amet elementum. Donec vitae sollicitudin sapien. Vestibulum semper finibus feugiat. Fusce sagittis sodales turpis, et lobortis sem finibus a. Aenean lobortis neque eget sem malesuada elementum. Proin nec fermentum risus, quis vehicula dolor. Duis rhoncus ante nulla, quis auctor lacus lobortis et.'
    },
    {
      id: 2,
      name: 'DMKADEMY',
      image: './images/academy_figure.png',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante nisi, suscipit sit amet tristique feugiat, mattis mollis odio. Vivamus lacinia ullamcorper facilisis. Nullam suscipit aliquet sagittis. Maecenas quis convallis nulla, ut aliquet tellus. Mauris sed urna at mauris euismod rutrum. Curabitur fringilla varius orci placerat finibus. Maecenas convallis hendrerit malesuada. Duis vestibulum ullamcorper molestie.'
    },
    {
      id: 3,
      name: 'PROPERTY',
      image: './images/property_figure.png',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante nisi, suscipit sit amet tristique feugiat, mattis mollis odio. Vivamus lacinia ullamcorper facilisis. Nullam suscipit aliquet sagittis. Maecenas quis convallis nulla, ut aliquet tellus. Mauris sed urna at mauris euismod rutrum. Curabitur fringilla varius orci placerat finibus. Maecenas convallis hendrerit malesuada. Duis vestibulum ullamcorper molestie.'
    },
    {
      id: 4,
      name: 'PROGRAMMING',
      image: './images/tech.png',
      description: 'Etiam velit neque, sagittis ut dolor eu, vulputate finibus odio. Sed ac lacus euismod tortor ultrices imperdiet ac vitae erat. Curabitur rutrum nulla ligula, a tincidunt nisi vulputate in. Vivamus fermentum libero ac enim malesuada commodo. Phasellus imperdiet pharetra justo, eu sollicitudin lorem mattis ac. Sed in tellus ac metus convallis efficitur cursus eget urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.'
    },
  ])

  return(
    <div>
      <figure className="pageBg">
        <img src="./images/bg-1.png" className="gambar"/>
      </figure>
      <div className="aboutPage">
        <div className="aboutUs">
          <img src="./images/custom_hr.png" className="customHr"/>
          <h4 className="judul" style={{
            marginTop: '57px'
          }}>Playful x Professional</h4>
          <div className="aboutDetail">
            <img src="./images/dmk_hitam.png" className="logoSmall" />
            <p className="aboutDescription">Aliquam sollicitudin augue ut ipsum dignissim mollis. Praesent non fringilla ex. Sed lorem enim, tempor eu urna nec, vestibulum venenatis ipsum. Integer urna nulla, dapibus vel interdum ut, aliquam quis nibh. Praesent in arcu non nibh egestas pharetra. Donec efficitur ut tortor non feugiat. Etiam facilisis tellus ac ligula fringilla porttitor. Donec eget vehicula purus, eget laoreet urna. Nulla consequat enim quis lorem facilisis commodo. Nam porttitor pharetra ipsum eu porttitor.</p>
          </div>
        </div>
        <div className="divisionList">
          {divisions.map((divisi) => (
            <div className="divisionWrap" key={ divisi.id }>
              <h4 className="judul">{ divisi.name }</h4>
              <div className="cardDivisi">
                <figure className="cardImage">
                  <img src={ divisi.image } />
                </figure>
                <p className="deskripsiDivisi">{ divisi.description }</p>
              </div>
            </div>
          ))}
        </div>
        <a href="" className="button purple">download our portofolio</a>
      </div>
      <Footer />
      <ToggleSidebar />
    </div>
  )
}
export default About