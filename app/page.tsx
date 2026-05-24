export default function PrimeCleanLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f1ff] via-[#eef6f3] to-[#fff7fd] text-[#2b2b2b] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            PRIMEClean
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Soluções Inteligentes em Limpeza e Higienização
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#servicos" className="hover:text-blue-600 transition">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-blue-600 transition">
            Sobre
          </a>
          <a href="#contato" className="hover:text-blue-600 transition">
            Contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-10 pt-6 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Vamos Transformar Seu Ambiente
          </h2>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
            A PRIMEClean oferece soluções premium em limpeza corporativa,
            comercial e higienização profissional com excelência, organização e
            confiança.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Solicitar Orçamento
            </button>

            <button className="px-7 py-4 rounded-2xl border border-[#d9d9f5] bg-white/60 backdrop-blur text-gray-700 font-semibold hover:bg-white transition">
              Conhecer Serviços
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="bg-white/70 backdrop-blur rounded-3xl p-5 shadow-sm border border-white/70">
              <h3 className="text-3xl font-bold text-blue-600">+500</h3>
              <p className="text-sm text-gray-500 mt-1">Ambientes atendidos</p>
            </div>

            <div className="bg-white/70 backdrop-blur rounded-3xl p-5 shadow-sm border border-white/70">
              <h3 className="text-3xl font-bold text-pink-500">98%</h3>
              <p className="text-sm text-gray-500 mt-1">Clientes satisfeitos</p>
            </div>

            <div className="bg-white/70 backdrop-blur rounded-3xl p-5 shadow-sm border border-white/70">
              <h3 className="text-3xl font-bold text-purple-500">24h</h3>
              <p className="text-sm text-gray-500 mt-1">Suporte rápido</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-pink-400/20 blur-3xl rounded-full" />

          <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
              alt="Atendimento PrimeClean"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="px-10 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Serviços Premium
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Soluções inteligentes para empresas, escritórios, condomínios e
            ambientes corporativos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Limpeza Corporativa',
              desc: 'Ambientes organizados e profissionais diariamente.',
              color: 'from-blue-500 to-indigo-500',
            },
            {
              title: 'Pós-Obra',
              desc: 'Finalização completa com alto padrão de qualidade.',
              color: 'from-pink-500 to-purple-500',
            },
            {
              title: 'Higienização Premium',
              desc: 'Sofás, cadeiras, carpetes e superfícies especiais.',
              color: 'from-purple-500 to-fuchsia-500',
            },
            {
              title: 'Limpeza Industrial',
              desc: 'Equipe preparada para operações de grande porte.',
              color: 'from-cyan-500 to-blue-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[30px] p-7 shadow-md hover:-translate-y-2 transition"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} mb-6`}
              />

              <h3 className="text-xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="px-10 py-20 grid lg:grid-cols-2 gap-14 items-center"
      >
        <div className="bg-white/60 backdrop-blur-xl rounded-[40px] p-10 border border-white/70 shadow-lg">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Excelência que você vê.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Nossa missão é transformar ambientes através de serviços de limpeza
            modernos, eficientes e organizados.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            Trabalhamos com processos profissionais, equipe qualificada e foco
            total na experiência do cliente.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
              <div className="bg-white rounded-2xl p-5 h-full">
                <h3 className="font-bold text-gray-800">Atendimento rápido</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Respostas ágeis e suporte personalizado.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 p-[1px]">
              <div className="bg-white rounded-2xl p-5 h-full">
                <h3 className="font-bold text-gray-800">Equipe profissional</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Padrão premium em cada serviço realizado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-blue-400/20 blur-3xl rounded-full" />

          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop"
            alt="Equipe PrimeClean"
            className="relative rounded-[40px] shadow-2xl border border-white/70"
          />
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="px-10 pb-20">
        <div className="bg-white/60 backdrop-blur-xl rounded-[40px] p-10 border border-white/70 shadow-lg grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Entre em Contato
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-lg">
              Agende uma visita e descubra como a PRIMEClean pode transformar a
              limpeza do seu ambiente corporativo.
            </p>

            <div className="mt-8 space-y-5 text-gray-700">
              <div>
                <p className="font-bold">Contato</p>
                <p>contato@primeclean.com.br</p>
              </div>

              <div>
                <p className="font-bold">Telefone</p>
                <p>(11) 9999-9999</p>
              </div>

              <div>
                <p className="font-bold">Atendimento</p>
                <p>Segunda a Sexta, 8h às 18h</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[35px] p-[1px] shadow-xl">
            <div className="bg-white rounded-[35px] p-8">
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="rounded-2xl border border-[#ececff] px-5 py-4 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="rounded-2xl border border-[#ececff] px-5 py-4 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                  placeholder="Descreva sua necessidade"
                  rows={5}
                  className="rounded-2xl border border-[#ececff] px-5 py-4 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button className="py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition">
                  Solicitar Atendimento
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 pb-10">
        <div className="bg-white/50 backdrop-blur-xl border border-white/70 rounded-3xl px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
          <div>
            <span className="font-bold text-gray-800">PRIMEClean</span> —
            Excelência que você vê, qualidade que você sente.
          </div>

          <div className="text-sm text-gray-500">
            © 2026 PRIMEClean. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
