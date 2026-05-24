export default function PrimeCleanLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f7ff] text-gray-800 font-sans">

      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-6 bg-white border-b shadow-sm">
        
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PRIMEClean"
            className="h-10 w-10 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-[#3F6FF3]">
              PRIMEClean
            </h1>
            <p className="text-xs text-gray-500">
              Cuidado • Eficiência • Excelência
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#servicos" className="hover:text-[#3F6FF3]">Serviços</a>
          <a href="#sobre" className="hover:text-[#3F6FF3]">Sobre</a>
          <a href="#contato" className="hover:text-[#3F6FF3]">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-10 py-24 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Limpeza Profissional para
            <span className="text-[#3F6FF3]"> ambientes impecáveis</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            A PRIMEClean entrega serviços de limpeza com alto padrão,
            tecnologia e atenção aos detalhes para empresas e residências.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#3F6FF3] text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
              Solicitar Orçamento
            </button>

            <button className="border border-[#3F6FF3] text-[#3F6FF3] px-6 py-3 rounded-xl hover:bg-[#3F6FF3] hover:text-white transition">
              Nossos Serviços
            </button>
          </div>
        </div>

        {/* CARD HERO */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border">
          <img
            src="/logo.png"
            alt="PRIMEClean"
            className="h-24 mx-auto mb-6"
          />

          <div className="text-center">
            <h3 className="text-xl font-bold text-[#3F6FF3]">
              Atendimento Profissional
            </h3>
            <p className="text-gray-500 mt-2">
              Soluções completas em limpeza corporativa e residencial
            </p>
          </div>
        </div>

      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-10 py-20 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#3F6FF3] mb-12">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Limpeza de Escritórios",
              desc: "Ambientes organizados e higienizados diariamente.",
            },
            {
              title: "Higienização Profunda",
              desc: "Limpeza detalhada de estofados, pisos e superfícies.",
            },
            {
              title: "Limpeza Industrial",
              desc: "Operações de grande porte com equipe especializada.",
            },
            {
              title: "Limpeza Pós Obra",
              desc: "Remoção completa de resíduos de construção.",
            },
            {
              title: "Limpeza Premium",
              desc: "Serviço de alto padrão com atenção total aos detalhes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition bg-[#fafbff]"
            >
              <h3 className="text-lg font-bold text-[#3F6FF3]">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-10 py-20 bg-[#f5f7ff] text-center">

        <h2 className="text-3xl font-bold text-[#3F6FF3]">
          Sobre a PRIMEClean
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          Somos uma empresa especializada em limpeza profissional,
          oferecendo soluções modernas, eficientes e confiáveis para todos os ambientes.
        </p>

      </section>

      {/* CONTATO */}
      <section id="contato" className="px-10 py-20 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#3F6FF3]">
          Fale Conosco
        </h2>

        <div className="mt-10 max-w-xl mx-auto grid gap-4">

          <input
            placeholder="Nome"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-[#3F6FF3] outline-none"
          />

          <input
            placeholder="E-mail"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-[#3F6FF3] outline-none"
          />

          <textarea
            placeholder="Mensagem"
            rows={4}
            className="border p-3 rounded-xl focus:ring-2 focus:ring-[#3F6FF3] outline-none"
          />

          <button className="bg-[#3F6FF3] text-white py-3 rounded-xl hover:opacity-90 transition">
            Enviar Mensagem
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