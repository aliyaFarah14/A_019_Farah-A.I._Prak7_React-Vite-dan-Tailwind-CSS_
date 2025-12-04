import React from 'react'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Mahasiswa Sistem Informasi',
    quote:
      'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.',
  },
  {
    name: 'Lia Wulandari',
    role: 'Mahasiswa Desain Komunikasi Visual',
    quote:
      'Ruang Ekspresi membuka wawasan saya tentang bagaimana teknologi dan desain bisa berkolaborasi untuk menciptakan dampak nyata.',
  },
  {
    name: 'Rifqi Akbar',
    role: 'Mahasiswa Teknik Informatika',
    quote:
      'Mentorship-nya sangat personal dan relevan. Saya bisa langsung menerapkan ilmu di project nyata dalam waktu singkat.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-blue-600 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials