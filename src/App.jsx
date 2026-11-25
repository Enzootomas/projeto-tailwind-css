import { useState } from "react";

const modulosEstudo = [
  {
    id: 1,
    categoria: "Cores e Contraste",
    titulo: "Sistema de Tokens de Cor",
    descricao:
      "Uso padronizado de escalas como bg-slate-900, bg-indigo-600 e text-emerald-400 para hierarquia visual clara.",
    destaque: "bg-indigo-600",
  },
  {
    id: 2,
    categoria: "Tipografia",
    titulo: "Escala Tipográfica Legível",
    descricao:
      "Classes utilitárias como text-4xl, font-extrabold, tracking-tight e leading-relaxed definem ritmo de leitura.",
    destaque: "text-3xl font-bold",
  },
  {
    id: 3,
    categoria: "Espaçamentos e Dimensões",
    titulo: "Ritmo Espacial Consistente",
    descricao:
      "Margens, paddings e limites de largura com p-6, px-4, py-3, max-w-6xl e min-h-screen evitam regras manuais repetitivas.",
    destaque: "p-6 max-w-6xl",
  },
  {
    id: 4,
    categoria: "Bordas e Posicionamento",
    titulo: "Camadas, Contornos e Fixação",
    descricao:
      "Combinação de rounded-2xl, border-slate-800, sticky, top-0, relative e absolute para cabeçalhos e selos.",
    destaque: "sticky top-0 z-50",
  },
  {
    id: 5,
    categoria: "Flexbox e CSS Grid",
    titulo: "Composição Unidimensional e Bidimensional",
    descricao:
      "Alinhamento com flex, items-center, justify-between e grades com grid, grid-cols-1, md:grid-cols-2 e lg:grid-cols-3.",
    destaque: "grid lg:grid-cols-3",
  },
  {
    id: 6,
    categoria: "Mobile First",
    titulo: "Responsividade Integrada",
    descricao:
      "Prefixos responsivos sm:, md: e lg: adaptam colunas, tamanhos de fonte e direção de layout sem media queries manuais.",
    destaque: "sm:px-6 md:flex-row",
  },
];

export default function App() {
  const [filtro, setFiltro] = useState("Todos");

  const categorias = [
    "Todos",
    "Cores e Contraste",
    "Tipografia",
    "Flexbox e CSS Grid",
    "Mobile First",
  ];

  const itensVisiveis =
    filtro === "Todos"
      ? modulosEstudo
      : modulosEstudo.filter((item) => item.categoria === filtro);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Cabeçalho fixo com posicionamento sticky */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center shadow-lg">
              TW
            </span>
            <span className="text-lg font-bold tracking-tight">
              Tailwind <span className="text-indigo-400">Studio</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#conceitos" className="hover:text-white transition-colors">
              Conceitos
            </a>
            <a href="#metricas" className="hover:text-white transition-colors">
              Métricas
            </a>
            <a href="#resumo" className="hover:text-white transition-colors">
              Utility-First
            </a>
          </nav>

          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            40+ Classes
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* Hero Responsivo com Posicionamento Relativo/Absoluto */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-medium">
            Aula 07 — Frameworks CSS
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-4">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Abordagem Utility-First com Tailwind CSS v4
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Interfaces responsivas construídas diretamente com classes utilitárias
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                Demonstração prática da Atividade 02 aplicando mais de 40 classes
                distintas do Tailwind CSS para cores, tipografia, espaçamentos,
                dimensões, bordas, posicionamento, flexbox, grid e responsividade.
              </p>
            </div>

            <div className="w-full md:w-64 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
              <span className="text-xs uppercase text-slate-400 font-semibold">
                Ideia Central
              </span>
              <p className="text-sm text-slate-200 font-medium">
                1 classe utilitária = 1 responsabilidade clara.
              </p>
              <code className="block text-xs bg-slate-900 text-indigo-300 p-3 rounded-xl border border-slate-800">
                p-6 bg-slate-900 rounded-2xl shadow-lg
              </code>
            </div>
          </div>
        </section>

        {/* Indicadores em Grid Responsivo */}
        <section id="metricas" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <span className="text-sm text-slate-400">Classes exigidas</span>
            <strong className="block text-3xl font-bold text-white mt-1">30+</strong>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <span className="text-sm text-slate-400">Classes aplicadas</span>
            <strong className="block text-3xl font-bold text-indigo-400 mt-1">45+</strong>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <span className="text-sm text-slate-400">Categorias cobertas</span>
            <strong className="block text-3xl font-bold text-emerald-400 mt-1">9 / 9</strong>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <span className="text-sm text-slate-400">Versão do Framework</span>
            <strong className="block text-3xl font-bold text-sky-400 mt-1">v4.1</strong>
          </div>
        </section>

        {/* Filtro interativo e Grade de Cartões */}
        <section id="conceitos" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Pilares aplicados na interface
              </h2>
              <p className="text-sm text-slate-400">
                Filtre os cartões para inspecionar como cada grupo de utilitários atua.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFiltro(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    filtro === cat
                      ? "bg-indigo-600 text-white ring-2 ring-indigo-400/50"
                      : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itensVisiveis.map((modulo) => (
              <article
                key={modulo.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between gap-4 hover:border-indigo-500/60 transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">
                    {modulo.categoria}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {modulo.titulo}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {modulo.descricao}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Exemplo:</span>
                  <code className="text-xs bg-slate-950 text-emerald-300 px-2.5 py-1 rounded-lg border border-slate-800">
                    {modulo.destaque}
                  </code>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Seção comparativa CSS Manual vs Utility-First */}
        <section
          id="resumo"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <div className="lg:col-span-2 space-y-2">
            <h2 className="text-xl font-bold text-white">
              Por que utilizar o modelo Utility-First?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Em vez de criar dezenas de seletores personalizados em arquivos CSS
              separados para cada botão ou cartão, combinamos utilitários atômicos
              diretamente na marcação do componente, mantendo consistência de
              espaçamento, paleta de cores e breakpoints Mobile First.
            </p>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors"
            >
              Consultar Documentação Oficial
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        Disciplina de Frameworks Front-end — SENAI | Prof. Me. Deivison S. Takatu
      </footer>
    </div>
  );
}
