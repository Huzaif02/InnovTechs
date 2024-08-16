// import Head from "next/head"
// import React from "react"
// import Image from "next/image"
// import art from "../assets/images/art-top-cropp.jpg"

// const Webdevelopment = () => {
//   return (
//     <>
//       <Head>
//         <title>Web Development - Innovtechs</title>
//       </Head>

      
       
//       <section className='webdev-hero'>
//           <div className='container'>
//             <h1 className='hero-title'>READY TO CRAFT YOUR CUSTOM WEBSITE</h1>
//             <div className='sub-heading'>
//               <span>Partner with a top-rated custom website design company to create a fully optimized website, ready to drive engagement and conversions.</span>
//             </div>
//           </div>
//           <div className="hero-img-section">
//               <div className="hero-img">
                
//                 <Image
//                   src={art}
//                   alt="about-image"
//                   fill
//                   className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
//                 />
//               </div>
//           </div>
//       </section>
//     </>
//   )
// }

// export default Webdevelopment




import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import { useState } from "react"

const Webdevelopment = () => {
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: 'Custom Web Design',
      description: 'Leverage the expertise of our award-winning designers to build a fully custom website for your brand. Our web design deliverables include research, analysis, tailored UX/UI design, and SEO to drive traffic to your site.',
    },
    {
      title: 'Custom Website Redesign',
      description: 'Revamp your online presence with our custom website redesign services. We focus on enhancing user experience, visual appeal, and site functionality to align with your evolving brand goals.',
    },
    {
      title: 'Custom eCommerce Web Design',
      description: 'Our custom eCommerce designs are optimized to drive sales and improve customer experience. We build platforms that are easy to navigate, visually compelling, and conversion-focused.',
    },
    {
      title: 'Professional Web Design',
      description: 'Elevate your brand with our professional web design services. Our team creates aesthetically pleasing, highly functional websites that reflect your brand’s identity and engage your audience.',
    },
    {
      title: 'Custom End-To-End Development',
      description: 'From concept to launch, our end-to-end development services cover every aspect of building your digital presence. We ensure a seamless and efficient development process that meets your specific needs.',
    },
  ];

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Craft your business ideas into smart and customized Website' />
              <p className='desc-p'>Partner with a top-rated custom website design company to create a fully optimized website, ready to drive engagement and conversions.</p>
              <Link href="/contact">
                <button className='button-primary'>Request a Quote</button>
              </Link>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/webban.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Web Design Services ' />
              <br />
              <p className='misson-p'>
              <ul className='features-list'>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className='feature-item'
                  >
                    {feature.title}
                    {hoveredIndex === index && (
                      <div className='feature-description'>
                        {feature.description}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
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

export default Webdevelopment
