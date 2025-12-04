import React from 'react'
import projectImg from '../assets/logo/orang.png'

const ProjectShowcase = () => {
  const team = [
    { name: 'Budi Santoso', role: 'Frontend Developer' },
    { name: 'Lia Wulandari', role: 'UI/UX Designer' },
    { name: 'Rifqi Akbar', role: 'Backend Developer' },
  ]

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            Showcase Student Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
          </p>
        </div>

        <div className="bg-pink-50 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Creative Portfolio Platform</h3>
              <p className="text-gray-700 mb-4">
                Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Tim Pembuat :</h4>
                <div className="space-y-3">
                  {team.map((member, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
                        <span className="text-xs font-bold">
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-600">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
                <img src="/src/assets/logo/gridicons.png" alt="Live Demo" className="w-4 h-4 border-none outline-none" />
                Live Demo
              </button>
            </div>

            <div className="md:w-1/2">
              <img
                src={projectImg}
                alt="Creative Portfolio Platform"
                className="rounded-lg w-full h-auto shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase