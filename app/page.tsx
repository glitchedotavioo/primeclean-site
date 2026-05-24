
export default function PrimeCleanLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-6 border-b">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PRIMEClean"
            className="h-10 w-10 object-contain"
          />

          <h1 className="text-2xl font-bold text-[#3F6FF3]">
            PRIMEClean
          </h1>
        </div>

      </header>

      {/* HERO SIMPLES */}
      <section className="text-center py-20 px-6">

        <h2 className="text-4xl font-bold text-gray-900">
          Cuidado, Eficiência e Excelência
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Serviços profissionais de limpeza para ambientes corporativos e industriais.
        </p>

      </section>

      {/* SERVIÇOS */}
      <section className="px-10 pb-20">

        <h3 className="text-center text-2xl font-bold text-[#3F6FF3] mb-10">
          Serviços
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Limpeza de Escritórios",
            "Higienização Profunda",
            "Limpeza Industrial",
            "Limpeza Pós Obra",
            "Limpeza Premium",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-center hover:border-[#3F6FF3] transition"
            >
              <p className="font-semibold text-gray-800">
                {item}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        © 2026 PRIMEClean — Cuidado, Eficiência e Excelência
      </footer>

    </div>
  )
}