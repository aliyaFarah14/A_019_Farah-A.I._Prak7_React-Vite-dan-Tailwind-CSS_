import React from 'react'
import heroBg from '../assets/logo/frame4.png'

const HeroSection = () => {
  const categories = [
    { name: 'Ideation', color: 'bg-yellow-200 text-yellow-800' },
    { name: 'Creation', color: 'bg-green-200 text-green-800' },
    { name: 'Collaboration', color: 'bg-blue-200 text-blue-800' },
    { name: 'Guidance & Support', color: 'bg-pink-200 text-pink-800' },
  ]

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-blue-700">RUANG EKSPRESI:</span> Wadah kreatif & Kompetitif Mahasiswa
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((cat) => (
              <span
                key={cat.name}
                className={`${cat.color} px-4 py-2 rounded-full text-sm font-medium`}
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={heroBg}
            alt="Students collaborating"
            className="rounded-lg w-full h-auto shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection