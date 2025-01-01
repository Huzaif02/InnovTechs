import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products.' />
              <p className='desc-p'>
                At Innovtechs, we specialize in transforming innovative ideas into impactful digital solutions. As a full-service digital agency, we offer website and app development, software solutions, and digital marketing strategies tailored to empower businesses and enhance their online presence. Our expertise ensures that your business stays competitive in an ever-evolving digital world.
              </p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>3+</h1>
                  <h3>Years of industry expertise</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Successful projects delivered</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>15+</h1>
                  <h3>Testimonial in Portfolio</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Innovtechs Team' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Mission Image' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>
                At Innovtechs, our mission is to empower businesses with cutting-edge digital solutions that drive growth and maximize success. We aim to provide high-quality, customized websites, applications, and digital marketing services that help businesses thrive in the digital era.
              </p>
              <p className='misson-p'>
                By leveraging the latest technologies and a client-first approach, we ensure that every project reflects innovation, creativity, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
