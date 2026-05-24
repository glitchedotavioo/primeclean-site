export default function PrimeCleanLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-6 border-b">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PrimeClean"
            className="h-10 w-10 object-contain"
          />

          <h1 className="text-xl font-bold text-[#3F6FF3]">
            PRIMEClean
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#inicio" className="hover:text-[#3F6FF3]">Início</a>
          <a href="#sobre" className="hover:text-[#3F6FF3]">Sobre</a>
          <a href="#servicos" className="hover:text-[#3F6FF3]">Serviços</a>
          <a href="#contato" className="hover:text-[#3F6FF3]">Contato</a>
        </nav>

      </header>

      {/* HERO (LOGO GRANDE NO MEIO) */}
      <section id="inicio" className="text-center py-24 px-6">

        <img
          src="/logo.png"
          alt="PrimeClean Logo"
          className="mx-auto w-40 h-40 object-contain mb-8"
        />

        <h2 className="text-5xl font-bold text-[#3F6FF3]">
          PRIMEClean
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Cuidado, Eficiência e Excelência em limpeza profissional
        </p>

        <div className="mt-8">
          <a
            href="#contato"
            className="bg-[#3F6FF3] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Fale Conosco
          </a>
        </div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-10 py-20 bg-[#f7f9ff] text-center">

        <h2 className="text-3xl font-bold text-[#3F6FF3]">
          Sobre a PrimeClean
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          A PrimeClean é especializada em limpeza profissional, oferecendo
          soluções modernas, eficientes e seguras para ambientes corporativos,
          industriais e residenciais.
        </p>

      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-10 py-20 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#3F6FF3] mb-10">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Limpeza de Escritórios",
            "Higienização Profunda",
            "Limpeza Industrial",
            "Limpeza Pós Obra",
            "Limpeza Premium",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-800">{item}</p>
            </div>
          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="px-10 py-20 bg-[#f7f9ff]">

        <h2 className="text-3xl font-bold text-center text-[#3F6FF3]">
          Fale Conosco
        </h2>

        <div className="mt-10 max-w-xl mx-auto grid gap-4">

          <input
            placeholder="Seu nome"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-[#3F6FF3] outline-none"
          />

          <input
            placeholder="Seu email"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-[#3F6FF3] outline-none"
          />

          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-[#3F6FF3] outline-none"
          />

          <button className="bg-[#3F6FF3] text-white py-3 rounded-xl hover:opacity-90 transition">
            Enviar Mensagem
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        © 2026 PRIMEClean — Cuidado, Eficiência e Excelência
      </footer>

    </div>
  )
}