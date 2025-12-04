import React from 'react'

const Schedule = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            Jadwal & Program Kegiatan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <i className="far fa-calendar-alt text-blue-600 mr-2"></i>
            <span className="font-bold text-blue-700">Setiap Sabtu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-2">
                <i className="far fa-clock text-blue-600 mr-2"></i>
                <span className="font-bold">Sesi Pagi</span>
              </div>
              <div className="text-blue-700 font-semibold mb-2">09.00 – 12.00 WIB</div>
              <div className="text-sm">Workshop, Career Talks, dan Extra Classes intensif</div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-2">
                <i className="far fa-clock text-blue-600 mr-2"></i>
                <span className="font-bold">Sesi Sore</span>
              </div>
              <div className="text-blue-700 font-semibold mb-2">16.00 – 19.00 WIB</div>
              <div className="text-sm">Project Work, Mentoring, dan Collaboration Session</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule