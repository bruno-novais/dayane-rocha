export type PublicoSlug = 'fisioterapeutas' | 'pacientes'
export type Formato = 'video' | 'documento' | 'kit'
export type QueixaSlug = 'dor-lombar' | 'fascite-plantar' | 'tendinite' | 'home-office'
export type Nivel = 'iniciante' | 'intermediario' | 'avancado'

export type Publico = {
  slug: PublicoSlug
  trilha: '01' | '02'
  rotuloCurto: string
  titulo: string
  chamada: string
  descricao: string
  imagem: { src: string; alt: string }
  pilares: string[]
}

export type Categoria = {
  slug: string
  publico: PublicoSlug
  ordem: string
  titulo: string
  resumo: string
  explicacao: string
  exemplos: string[]
  icone: string
  imagem: { src: string; alt: string }
}

export type Curso = {
  slug: string
  publico: PublicoSlug
  categoria: string
  titulo: string
  descricao: string
  formatos: Formato[]
  nivel?: Nivel
  queixa?: QueixaSlug
  hotmartUrl: string
  capa?: string
  status: 'ativo' | 'em-breve'
}

export const publicos: Publico[] = [
  {
    slug: 'fisioterapeutas',
    trilha: '01',
    rotuloCurto: 'Sou fisioterapeuta',
    titulo: 'Fisioterapeutas',
    chamada: 'O que você quer aprender?',
    descricao:
      'Segurança clínica para quem está começando e atualização para quem já atua, com foco em neurofuncional.',
    imagem: {
      src: '/images/trilhas/fisioterapeutas.jpg',
      alt: 'Fisioterapeuta preparando uma avaliação funcional em ambiente clínico.',
    },
    pilares: ['Raciocínio clínico', 'Avaliação', 'Recursos terapêuticos', 'Materiais de apoio'],
  },
  {
    slug: 'pacientes',
    trilha: '02',
    rotuloCurto: 'Sou paciente ou cuidador',
    titulo: 'Pacientes e cuidadores',
    chamada: 'O que você está buscando?',
    descricao:
      'Entenda sua dor e aprenda a se movimentar com segurança, em casa, com orientação de uma fisioterapeuta.',
    imagem: {
      src: '/images/trilhas/pacientes.jpg',
      alt: 'Pessoa praticando um movimento de mobilidade em casa com tranquilidade.',
    },
    pilares: ['Entender a dor', 'Movimento seguro', 'Autocuidado', 'Cuidado de quem cuida'],
  },
]

export const categorias: Categoria[] = [
  {
    slug: 'teorica-clinica',
    publico: 'fisioterapeutas',
    ordem: '01',
    titulo: 'Teórica e clínica',
    resumo: 'Anatomia funcional, biomecânica e condições neurológicas e musculoesqueléticas.',
    explicacao:
      'Aulas para construir a base do raciocínio clínico: como o corpo se move, o que muda nas condições neurológicas e musculoesqueléticas e como isso orienta a conduta.',
    exemplos: ['Anatomia funcional', 'Biomecânica', 'Condições neurológicas'],
    icone: 'brain',
    imagem: { src: '/images/categorias/teorica-clinica.jpg', alt: 'Estudo de anatomia funcional em material de fisioterapia.' },
  },
  {
    slug: 'equipamentos-recursos',
    publico: 'fisioterapeutas',
    ordem: '02',
    titulo: 'Equipamentos e recursos',
    resumo: 'Parâmetros e configurações de TENS, ultrassom, laser e outros recursos.',
    explicacao:
      'Passo a passo de como configurar cada aparelho e, principalmente, por que escolher cada parâmetro, com raciocínio clínico por trás.',
    exemplos: ['TENS', 'Ultrassom terapêutico', 'Laser'],
    icone: 'zap',
    imagem: { src: '/images/categorias/equipamentos-recursos.jpg', alt: 'Equipamento de fisioterapia preparado para uma sessão clínica.' },
  },
  {
    slug: 'aulas-praticas',
    publico: 'fisioterapeutas',
    ordem: '03',
    titulo: 'Aulas práticas',
    resumo: 'Demonstrações de testes funcionais e técnicas de avaliação.',
    explicacao:
      'Vídeos mostrando a execução real: posicionamento, comandos ao paciente e interpretação do que observar.',
    exemplos: ['Testes funcionais', 'Posicionamento', 'Técnicas de avaliação'],
    icone: 'hand',
    imagem: { src: '/images/categorias/aulas-praticas.jpg', alt: 'Demonstração de movimento durante uma avaliação fisioterapêutica.' },
  },
  {
    slug: 'materiais-profissionais',
    publico: 'fisioterapeutas',
    ordem: '04',
    titulo: 'Materiais profissionais',
    resumo: 'Fichas, checklists e modelos prontos para usar na prática.',
    explicacao:
      'Documentos prontos e editáveis: fichas de anamnese e avaliação, checklists e modelos de evolução e relatório para enviar a médicos e empresas.',
    exemplos: ['Fichas de anamnese', 'Checklists', 'Modelos de relatório'],
    icone: 'file-text',
    imagem: { src: '/images/categorias/materiais-profissionais.jpg', alt: 'Fichas e materiais profissionais organizados para consulta.' },
  },
  {
    slug: 'entenda-sua-dor',
    publico: 'pacientes',
    ordem: '01',
    titulo: 'Entenda sua dor',
    resumo: 'A região afetada explicada de forma visual e simples.',
    explicacao:
      'Anatomia sem complicação: como funciona a região, por que a dor aparece e quando é hora de interromper e procurar avaliação presencial.',
    exemplos: ['Dor lombar', 'Fascite plantar', 'Tendinite'],
    icone: 'search',
    imagem: { src: '/images/categorias/entenda-sua-dor.jpg', alt: 'Pessoa consultando uma ilustração educativa sobre dor e movimento.' },
  },
  {
    slug: 'movimento-e-mobilidade',
    publico: 'pacientes',
    ordem: '02',
    titulo: 'Movimento e mobilidade',
    resumo: 'Exercícios guiados para fazer em casa, por queixa ou objetivo.',
    explicacao:
      'Vídeos e guias ilustrados com protocolos para dor lombar, fascite plantar, tendinite e rotina de home office, com prevenção no dia a dia.',
    exemplos: ['Dor lombar', 'Fascite plantar', 'Tendinite', 'Home office'],
    icone: 'activity',
    imagem: { src: '/images/categorias/movimento-e-mobilidade.jpg', alt: 'Pessoa realizando um exercício de mobilidade com orientação.' },
  },
  {
    slug: 'cuidando-de-quem-voce-ama',
    publico: 'pacientes',
    ordem: '03',
    titulo: 'Cuidando de quem você ama',
    resumo: 'Mobilidade, respiração e autocuidado para quem cuida de um idoso.',
    explicacao:
      'Orientações práticas para cuidadores familiares: exercícios de mobilidade, exercícios respiratórios e cuidados com você mesmo durante a rotina.',
    exemplos: ['Mobilidade para idosos', 'Respiração', 'Autocuidado de cuidadores'],
    icone: 'heart-handshake',
    imagem: { src: '/images/categorias/cuidando-de-quem-voce-ama.jpg', alt: 'Pessoa cuidadora acompanhando um exercício de mobilidade em casa.' },
  },
]

const urlHotmart = 'https://pay.hotmart.com/SUBSTITUIR'

// SUBSTITUIR pelos cursos reais antes da publicação. Os links e descrições abaixo são exemplos editoriais.
export const cursos: Curso[] = [
  {
    slug: 'anatomia-funcional-neuro',
    publico: 'fisioterapeutas',
    categoria: 'teorica-clinica',
    titulo: 'Anatomia funcional aplicada à neuro',
    descricao: 'Uma leitura prática do movimento para sustentar suas decisões clínicas.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'raciocinio-clinico-neurofuncional',
    publico: 'fisioterapeutas',
    categoria: 'teorica-clinica',
    titulo: 'Raciocínio clínico em neurofuncional',
    descricao: 'Organize os achados da avaliação e transforme observação em conduta.',
    formatos: ['video', 'documento'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'tens-na-pratica',
    publico: 'fisioterapeutas',
    categoria: 'equipamentos-recursos',
    titulo: 'TENS na prática: parâmetros e raciocínio clínico',
    descricao: 'Entenda os ajustes do aparelho e escolha parâmetros com intenção clínica.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'ativo',
  },
  {
    slug: 'ultrassom-terapeutico',
    publico: 'fisioterapeutas',
    categoria: 'equipamentos-recursos',
    titulo: 'Ultrassom terapêutico: configuração passo a passo',
    descricao: 'Uma demonstração objetiva de configuração, parâmetros e aplicação.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'testes-funcionais-na-pratica',
    publico: 'fisioterapeutas',
    categoria: 'aulas-praticas',
    titulo: 'Testes funcionais: observar para avaliar',
    descricao: 'Veja como preparar, conduzir e interpretar testes funcionais.',
    formatos: ['video'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'transferencias-e-posicionamento',
    publico: 'fisioterapeutas',
    categoria: 'aulas-praticas',
    titulo: 'Transferências e posicionamento com segurança',
    descricao: 'Demonstrações de manejo e posicionamento em diferentes situações.',
    formatos: ['video'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'kit-fichas-anamnese-avaliacao',
    publico: 'fisioterapeutas',
    categoria: 'materiais-profissionais',
    titulo: 'Kit de fichas de anamnese e avaliação',
    descricao: 'Modelos editáveis para organizar as informações da sua prática clínica.',
    formatos: ['documento', 'kit'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'modelos-evolucao-relatorio',
    publico: 'fisioterapeutas',
    categoria: 'materiais-profissionais',
    titulo: 'Modelos de evolução e relatório fisioterapêutico',
    descricao: 'Estruture registros clínicos e comunicações profissionais com clareza.',
    formatos: ['documento'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'entenda-dor-lombar',
    publico: 'pacientes',
    categoria: 'entenda-sua-dor',
    titulo: 'Dor lombar: entenda o que seu corpo comunica',
    descricao: 'Uma explicação visual e acessível sobre a região lombar e a dor.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'entenda-fascite-plantar',
    publico: 'pacientes',
    categoria: 'entenda-sua-dor',
    titulo: 'Fascite plantar sem mistério',
    descricao: 'Conheça a estrutura do pé e os fatores que podem estar relacionados à dor.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'exercicios-dor-lombar-casa',
    publico: 'pacientes',
    categoria: 'movimento-e-mobilidade',
    titulo: 'Exercícios para dor lombar em casa',
    descricao: 'Movimentos guiados para explorar com atenção e respeitar seus limites.',
    formatos: ['video'],
    nivel: 'iniciante',
    queixa: 'dor-lombar',
    hotmartUrl: urlHotmart,
    status: 'ativo',
  },
  {
    slug: 'fascite-plantar-protocolo-casa',
    publico: 'pacientes',
    categoria: 'movimento-e-mobilidade',
    titulo: 'Fascite plantar: protocolo em casa',
    descricao: 'Uma sequência guiada de mobilidade para incluir na rotina com segurança.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    queixa: 'fascite-plantar',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'home-office-sem-dor',
    publico: 'pacientes',
    categoria: 'movimento-e-mobilidade',
    titulo: 'Home office sem dor: rotina de pausas',
    descricao: 'Ideias de movimento e pausas para variar a rotina de trabalho em casa.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    queixa: 'home-office',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'mobilidade-para-idosos-em-casa',
    publico: 'pacientes',
    categoria: 'cuidando-de-quem-voce-ama',
    titulo: 'Mobilidade para idosos em casa',
    descricao: 'Orientações para apoiar movimentos cotidianos com cuidado e presença.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'autocuidado-para-cuidadores',
    publico: 'pacientes',
    categoria: 'cuidando-de-quem-voce-ama',
    titulo: 'Autocuidado para quem cuida',
    descricao: 'Pequenas práticas de movimento e respiração para a rotina de cuidado.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
]

export function isHotmartUrlValida(url: string): boolean {
  if (!url.trim() || url.toUpperCase().includes('SUBSTITUIR')) return false

  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' && parsed.hostname === 'pay.hotmart.com'
  } catch {
    return false
  }
}

const cursosComLinkPendente = cursos.filter((curso) => !isHotmartUrlValida(curso.hotmartUrl))

if (process.env.NODE_ENV === 'development' && cursosComLinkPendente.length > 0) {
  console.warn(
    '[dayane-rocha] Cursos com link Hotmart pendente serão exibidos como “Em breve”: ',
    cursosComLinkPendente.map((curso) => curso.titulo),
  )
}

export function getPublico(slug: string): Publico | undefined {
  return publicos.find((publico) => publico.slug === slug)
}

export function getCategorias(publico: PublicoSlug): Categoria[] {
  return categorias.filter((categoria) => categoria.publico === publico)
}

export function getCategoria(publico: string, slug: string): Categoria | undefined {
  return categorias.find((categoria) => categoria.publico === publico && categoria.slug === slug)
}

export function getCursos(publico: string, categoria: string): Curso[] {
  return cursos
    .filter((curso) => curso.publico === publico && curso.categoria === categoria)
    .map((curso) => ({
      ...curso,
      status: curso.status === 'ativo' && !isHotmartUrlValida(curso.hotmartUrl) ? 'em-breve' : curso.status,
    }))
}
