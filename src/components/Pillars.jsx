import React from 'react'
import ideationIcon from '../assets/logo/ideation.png'
import creationIcon from '../assets/logo/creation.png'
import collaborationIcon from '../assets/logo/collaboration.png'
import guidanceIcon from '../assets/logo/guidance.png'

const pillars = [
  {
    id: 'ideation',
    title: 'Ideation',
    desc: 'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.',
    icon: ideationIcon,
    color: 'bg-yellow-200',
    iconColor: 'text-yellow-700',
  },
  {
    id: 'creation',
    title: 'Creation',
    desc: 'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.',
    icon: creationIcon,
    color: 'bg-green-200',
    iconColor: 'text-green-700',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    desc: 'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.',
    icon: collaborationIcon,
    color: 'bg-blue-200',
    iconColor: 'text-blue-700',
  },
  {
    id: 'guidance',
    title: 'Guidance & Support',
    desc: 'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.',
    icon: guidanceIcon,
    color: 'bg-pink-200',
    iconColor: 'text-pink-700',
  },
]

const Pillars = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            Empat Pilar Ruang Ekspresi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`${pillar.color} p-6 rounded-lg text-center`}
            >
              <div className={`text-3xl mb-4 ${pillar.iconColor}`}>
                <img src={pillar.icon} alt={pillar.title} className="inline w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">{pillar.title}</h3>
              <p className="text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars