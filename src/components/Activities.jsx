import React from 'react'

const activities = [
  {
    id: 'career',
    title: 'Career Talks',
    desc: 'Sesi sharing dari praktisi industri dan alumni sukses',
    icon: 'far fa-comment-dots',
    color: 'bg-yellow-200 text-yellow-700',
  },
  {
    id: 'extra',
    title: 'Extra Classes',
    desc: 'Kelas tambahan skill development dan workshop teknis',
    icon: 'fas fa-book-open',
    color: 'bg-green-200 text-green-700',
  },
  {
    id: 'project',
    title: 'Project Work',
    desc: 'Mengerjakan project nyata dengan bimbingan mentor',
    icon: 'fab fa-codepen',
    color: 'bg-blue-200 text-blue-700',
  },
  {
    id: 'mentoring',
    title: 'Mentoring',
    desc: 'Sesi konsultasi personal dengan mentor berpengalaman',
    icon: 'fas fa-users',
    color: 'bg-pink-200 text-pink-700',
  },
]

const Activities = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {activities.map((act) => (
            <div key={act.id} className={`${act.color} p-6 rounded-lg`}>
              <div className="text-2xl mb-3">
                <i className={`${act.icon}`}></i>
              </div>
              <h3 className="font-bold mb-2">{act.title}</h3>
              <p className="text-sm">{act.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities