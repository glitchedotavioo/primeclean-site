export default function PrimeCleanLandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-gray-800 font-sans">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-6 border-b bg-white/70 backdrop-blur">
        <h1 className="text-3xl font-bold text-[#3F6FF3]">
          PRIMEClean
        </h1>

        <nav className="flex gap-6 text-gray-600 font-medium">
          <a href="#servicos" className="hover:text-[#3F6FF3]">Serviços</a>
          <a href="#sobre" className="hover:text-[#3F6FF3]">Sobre</a>
          <a href="#contato" className="hover:text-[#3F6FF3]">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-20">
        <h2 className="text-5xl font-bold text-gray-900">
          Cuidado, Eficiência e Excelência
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A PRIMEClean oferece serviços profissionais de limpeza para ambientes corporativos,
          comerciais e residenciais com qualidade e confiança.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-[#3F6FF3] text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
            Solicitar Orçamento
          </button>

          <button className="border border-[#3F6FF3] text-[#3F6FF3] px-6 py-3 rounded-xl hover:bg-[#3F6FF3] hover:text-white transition">
            Conhecer Serviços
          </button>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-10 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#3F6FF3] mb-10">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {[
            {
              title: "Limpeza Corporativa",
              desc: "Ambientes organizados e higienizados diariamente.",
            },
            {
              title: "Pós-Obra",
              desc: "Limpeza completa após construções e reformas.",
            },
            {
              title: "Higienização Profunda",
              desc: "Sofás, carpetes e estofados com limpeza avançada.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-[#3F6FF3]">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-10 py-20 text-center bg-[#f7f9ff]">
        <h2 className="text-3xl font-bold text-[#3F6FF3]">
          Sobre a PRIMEClean
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Trabalhamos com foco em qualidade, responsabilidade e excelência em cada serviço prestado.
          Nosso objetivo é transformar ambientes com profissionalismo.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-10 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#3F6FF3]">
          Contato
        </h2>

        <div className="mt-10 max-w-xl mx-auto grid gap-4">
          <input
            placeholder="Seu nome"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#3F6FF3]"
          />

          <input
            placeholder="Seu e-mail"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#3F6FF3]"
          />

          <textarea
            placeholder="Mensagem"
            rows={4}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#3F6FF3]"
          />

          <button className="bg-[#3F6FF3] text-white py-3 rounded-xl hover:opacity-90 transition">
            Enviar
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 PRIMEClean — Cuidado, Eficiência e Excelência
      </footer>
    </div>
  )
}