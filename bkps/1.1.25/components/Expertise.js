import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Expertise' />
            <p>At Innovtechs, we excel in delivering tailored digital services designed to elevate your business. From creating captivating websites to strategic SEO and innovative app development, we cover all aspects of your digital transformation.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Link href={`${item.path}`}>
                <Card data={item} key={item.id} caption='learn more'/>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
