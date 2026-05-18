'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const animacaoScroll = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 }
  }
  const [membroSelecionado, setMembroSelecionado] = useState(null)
  const [enviando, setEnviando] = useState(false)
  const [statusMensagem, setStatusMensagem] = useState(null)
  const enviarContato = async (e) => {
  e.preventDefault(); // Impede a página de recarregar
  setEnviando(true);

  // Pega os valores digitados
  const formData = {
    nome: e.target.nome.value,
    email: e.target.email.value,
    mensagem: e.target.mensagem.value,
  };

  try {
    // Manda pro nosso backend (route.js)
    const response = await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatusMensagem("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      e.target.reset(); // Limpa os campos
    } else {
      setStatusMensagem("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    }
    } catch (error) {
      setStatusMensagem("Erro na conexão. Tente novamente.");
    } finally {
      setEnviando(false);
    }
};



  return (
    <main className="overflow-hidden bg-[#e6eff5] bg-[url('/public/img/gb_hero_accent.png')] bg-fixed bg-cover bg-center">
      
      {/* BARRA DE NAVEGAÇÃO (NAVBAR FIXA) */}
      <header className="hidden md:block fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img src="/img/logo.png" alt="Logo Moldx" className="h-10 md:scale-125" />
          </a>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#servicos" className="text-slate-700 hover:text-sky-500 font-bold transition-colors">Serviços</a>
            <a href="#portfolio" className="text-slate-700 hover:text-sky-500 font-bold transition-colors">Portfólio</a>
            <a href="#equipe" className="text-slate-700 hover:text-sky-500 font-bold transition-colors">Equipe</a>
            <a href="#contato" className="text-slate-700 hover:text-sky-500 font-bold transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* SEÇÃO: HERO (Topo) */}
      <motion.section 
        id="hero"
        className="min-h-screen flex items-center pt-20" // pt-20 empurra o conteúdo para baixo da navbar
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-12 w-full flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* LADO ESQUERDO: Textos */}
            <div className="max-w-2xl flex-1 relative z-10">
                <h1 className="text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">Moldx</h1>
                <h2 className="text-3xl font-bold text-slate-600 mb-6">Forjamos o Futuro Digital</h2>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                  Uma dev house ágil e inovadora, composta por 5 especialistas apaixonados por transformar ideias em soluções de software impactantes.
                </p>
                <a href="#servicos" className="inline-block bg-linear-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300">
                  Conheça Nossos Serviços ↓
                </a>
            </div>

            {/* LADO DIREITO: Imagem Aquarela Tecnológica */}
            <div className="flex-1 flex justify-center md:justify-end relative pointer-events-none">
                <img 
                  src="/img/bg_hero_accent.png" 
                  alt="Aquarela Tech" 
                  className="w-full max-w-[700px] scale-125 md:scale-150 drop-shadow-2xl mix-blend-multiply opacity-90" 
                />
            </div>
        </div>
      </motion.section>

      {/* SEÇÃO: NOSSOS SERVIÇOS (Fundo transparente para o global aparecer) */}
      <motion.section {...animacaoScroll} id="servicos" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Conheça Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cartões com fundo semi-transparente (backdrop-blur) para ficarem premium sobre o fundo global */}
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(56,189,248,0.15)] hover:border-sky-400 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🖥️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Desenvolvimento Web, Mobile e Local</h3>
              <p className="text-slate-600 leading-relaxed">Desenvolvimento multiplataforma focado em resultados. Entregamos desde sistemas web e apps escaláveis até softwares locais desenhados sob medida para o seu negócio</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(56,189,248,0.15)] hover:border-sky-400 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🌐</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Criação de bots e Automatização</h3>
              <p className="text-slate-600 leading-relaxed">Robôs inteligentes e scripts personalizados para automatizar tarefas repetitivas, otimizando o seu tempo e reduzindo custos operacionais.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(56,189,248,0.15)] hover:border-sky-400 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Consultoria Tech</h3>
              <p className="text-slate-600 leading-relaxed">Aconselhamento estratégico para escalar sua arquitetura, segurança e infraestrutura.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(56,189,248,0.15)] hover:border-sky-400 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
              <p className="text-slate-600 leading-relaxed">Interfaces intuitivas e modernas focadas na melhor experiência e conversão do usuário.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO: PORTFÓLIO */}
      <motion.section {...animacaoScroll} id="portfolio" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Projetos em Destaque</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:shadow-sky-400/20 transition-all duration-300 border border-slate-200">
              <div className="h-56 bg-slate-400 flex items-center justify-center text-slate-800 font-bold border-b-4 border-sky-400">
                [ Mockup App de Serviços ]
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">App para Barbearias e Serviços</h3>
                <p className="text-sky-500 font-bold text-xs uppercase tracking-wider mb-4">UI/UX Design & Mobile Dev</p>
                <span className="text-slate-500 text-sm leading-relaxed">Plataforma centralizada para gestão de clientes, agendas e otimização do modelo de negócios.</span>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:shadow-sky-400/20 transition-all duration-300 border border-slate-200">
              <div className="h-56 bg-slate-400 flex items-center justify-center text-slate-800 font-bold border-b-4 border-sky-400">
                [ Mockup Game Mobile ]
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Desenvolvimento de Jogo Mobile</h3>
                <p className="text-sky-500 font-bold text-xs uppercase tracking-wider mb-4">Godot Engine & Monetização</p>
                <span className="text-slate-500 text-sm leading-relaxed">Criação de game mobile de alto desempenho, desde a versão alpha até a integração de ads.</span>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:shadow-sky-400/20 transition-all duration-300 border border-slate-200">
              <div className="h-56 bg-slate-400 flex items-center justify-center text-slate-800 font-bold border-b-4 border-sky-400">
                [ Mockup Diagrama/Dashboard ]
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Arquitetura Backend & APIs</h3>
                <p className="text-sky-500 font-bold text-xs uppercase tracking-wider mb-4">Sistemas Web & Banco de Dados</p>
                <span className="text-slate-500 text-sm leading-relaxed">Estruturação de diagramas de banco de dados e desenvolvimento de APIs robustas para sistemas complexos.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO: NOSSA EQUIPE */}
      <motion.section {...animacaoScroll} id="equipe" className="py-24 min-h-screen flex flex-col justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-12 w-full">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-20">Nossa Equipe de Especialistas</h2>
          
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { nome: 'Emanuel', cargo: 'Desenvolvedor', imagem: '/img/equipe/membro_manel.jpeg', descricao: 'Atualmente cursando bacharelado em sistemas de informação, tenho foco no desenvolvimento de jogos sérios e softwares ligados à educação, possuindo inclusive artigos, publicados em congressos.' },
              { nome: 'Felipe', cargo: 'Desenvolvedor', imagem: '/img/equipe/membro_felipe.jpeg', descricao: 'Em constante evolução no desenvolvimento de códigos de alta performance, busco unir a técnica à visão estratégica de mercado. Foco em utilizar a tecnologia como ferramenta fundamental para o apoio à decisão e geração de resultados nos negócios.' },
              { nome: 'Gabriel', cargo: 'Desenvolvedor', imagem: '/img/equipe/membro_gabriel.jpeg', descricao: 'Entusiasta de tecnologia e solucionador de problemas por natureza. Meu foco é unir código de alta performance a uma visão estratégica de negócios, garantindo que cada linha escrita gere valor real para os nossos clientes.' },
              { nome: 'Lucas', cargo: 'Desenvolvedor', imagem: '/img/equipe/membro_lucas.jpeg', descricao: 'Possuo interesse em todo o processo de construção de sistemas, sempre busco promover boas práticas nos projetos que estou envolvido, afim de entregar produtos eficientes.' },
              { nome: 'Vitor', cargo: 'Desenvolvedor', imagem: '/img/equipe/membro_vitor.jpeg', descricao: 'Sou um desenvolvedor focado em arquiteturas escaláveis de alta performance. Combina o domínio do ecossistema backend, com a experiência prática no desenvolvimento de jogos, unindo lógica apurada e criatividade na criação de projetos eficientes.' },
              { nome: 'Gabriel', cargo: 'Desenvolvedor', imagem: null },
            ].map((membro, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer" // cursor-pointer faz virar a "mãozinha" de clique
                onClick={() => setMembroSelecionado(membro)} // A MÁGICA DO CLIQUE AQUI!
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-sky-400 shadow-lg shadow-sky-400/20 group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  {membro.imagem ? (
                    <img src={membro.imagem} alt={membro.nome} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-5xl">👨‍💻</div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{membro.nome}</h4>
                <p className="text-sm font-medium text-slate-500">{membro.cargo}</p>
              </motion.div>
            ))}
          </div>
          {/* CAIXA DE DESCRIÇÃO (Aparece embaixo quando clica) */}
          {membroSelecionado && (
            <motion.div 
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-20 border-1 border-slate-800 bg-white/60 backdrop-blur-md rounded-xl p-10 max-w-4xl mx-auto text-center"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Sobre {membroSelecionado.nome}</h3>
              <p className="text-xl text-slate-700 font-medium">
                {membroSelecionado.descricao}
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* SEÇÃO: CONTATO */}
      <motion.section {...animacaoScroll} id="contato" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Pronto para Forjar o Seu Futuro Digital e Ter Seu App?</h2>
              <p className="text-lg text-slate-500 mb-10">Mande uma mensagem para a nossa equipe. Estamos prontos para transformar a sua ideia em código.</p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <span className="w-14 h-14 bg-white/80 backdrop-blur-sm shadow-sm text-2xl flex items-center justify-center rounded-full border border-sky-100">📍</span>
                  <div>
                    <strong className="text-slate-900 block text-lg">Localização</strong>
                    <p className="text-slate-500">Itapetinga, BA - Brasil</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="w-14 h-14 bg-white/80 backdrop-blur-sm shadow-sm text-2xl flex items-center justify-center rounded-full border border-sky-100">✉️</span>
                  <div>
                    <strong className="text-slate-900 block text-lg">E-mail</strong>
                    <p className="text-slate-500">moldxenterprise@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-200">
              <form onSubmit={enviarContato} className="flex flex-col gap-5">
                
                {/* Adicionado name="nome" */}
                <input name="nome" type="text" placeholder="Seu Nome ou Empresa" required className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition-all text-slate-700 bg-white" />
                
                {/* Adicionado name="email" */}
                <input name="email" type="email" placeholder="Seu e-mail" required className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition-all text-slate-700 bg-white" />
                
                {/* Adicionado name="mensagem" */}
                <textarea name="mensagem" rows="5" placeholder="Fale um pouco sobre o seu projeto..." required className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition-all text-slate-700 resize-none bg-white"></textarea>
                
                {/* Botão atualizado com feedback de carregamento */}
                <button 
                  type="submit" 
                  disabled={enviando}
                  className="w-full bg-linear-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                {/* Exibição da mensagem de sucesso ou erro do envio */}
                {statusMensagem && (
                  <p className={`text-center font-bold mt-2 ${statusMensagem.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                    {statusMensagem}
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </motion.section>

      {/* RODAPÉ CENTRALIZADO */}
      <motion.footer 
        className="py-14 bg-transparent relative z-10" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-12 flex flex-col items-center gap-5 border-t border-slate-300 pt-8">
          
          <img src="/img/logo.png" alt="Logo Moldx" className="h-12 scale-125" />
          
          <div className="flex gap-8">
            <a href="#servicos" className="text-slate-900 font-bold hover:text-sky-500 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-slate-900 font-bold hover:text-sky-500 transition-colors">Portfólio</a>
            <a href="#equipe" className="text-slate-900 font-bold hover:text-sky-500 transition-colors">Equipe</a>
            <a href="#contato" className="text-slate-900 font-bold hover:text-sky-500 transition-colors">Contato</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-900 hover:text-sky-500 hover:-translate-y-1 transition-all"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="#" className="text-slate-900 hover:text-sky-500 hover:-translate-y-1 transition-all"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          </div>

          <p className="text-slate-500 text-sm mt-2">&copy; 2026 Moldx. Todos os direitos reservados.</p>
        </div>
      </motion.footer>

    </main>
  ); 
} 