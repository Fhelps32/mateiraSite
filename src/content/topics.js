// Todo o conteúdo do site mora aqui.
// Para adicionar matéria nova: acrescente um objeto ao array `topics`.
//
// Blocos disponíveis (campo `t`):
//   p        { text }                      parágrafo        ($...$ = fórmula inline)
//   ul / ol  { items: [] }                 listas
//   formula  { tex, caption? }             fórmula em destaque (LaTeX)
//   callout  { kind, title, text }         kind: def | dica | prova | atencao
//   cards    { items: [{title, text}] }    grade de cartões
//   steps    { items: [{title, text}] }    passos numerados
//   table    { head: [], rows: [[]] }      tabela
//   figure   { name, caption? }            figura SVG (ver components/figures.jsx)
//   widget   { name }                      mini simulador (ver components/widgets.jsx)
//
// `quiz`: perguntas de autoteste ({ q, a }) mostradas no fim de cada tópico.

export const topics = [
  {
    id: 'visao-geral',
    title: 'Visão geral da disciplina',
    short: 'Visão geral',
    summary: 'O que será estudado e como você será avaliado.',
    blocks: [
      { t: 'p', text: 'A disciplina percorre quatro grandes áreas da Física:' },
      {
        t: 'cards',
        items: [
          { title: 'Mecânica clássica', text: 'Newton, fluidos e relatividade.' },
          { title: 'Elétrica e magnetismo', text: 'Cargas elétricas, ímãs e motores elétricos.' },
          { title: 'Termodinâmica', text: 'Máquinas térmicas.' },
          { title: 'Física moderna', text: 'O mundo microscópico e a física do século XX.' },
        ],
      },
      { t: 'p', text: '**Avaliações e projetos**' },
      {
        t: 'table',
        head: ['Avaliação', 'O que é'],
        rows: [
          ['AV-1', 'Projeto "ovo do 4º andar": o ovo deve chegar inteiro ao chão.'],
          ['AV-2', 'Projeto "carrinho gravitacional".'],
        ],
      },
      {
        t: 'ul',
        items: [
          'Os documentos dos projetos devem seguir um padrão próprio (formato definido pelo professor).',
          'Trabalho AV-1 (data anotada: 17/10): se o ovo quebrar, a nota varia conforme o resultado. A nota é dividida em 80% trabalho e 20% explicação/prova.',
          'AV-2: 80% da nota vem do trabalho.',
        ],
      },
      {
        t: 'callout',
        kind: 'atencao',
        title: 'Confira no caderno',
        text: 'Alguns trechos manuscritos (andar do ovo: 3º ou 4º; pontos exatos da nota) estão difíceis de ler. Confirme com o professor antes da entrega.',
      },
    ],
    quiz: [
      { q: 'Quais são as quatro áreas da disciplina?', a: 'Mecânica clássica, elétrica e magnetismo, termodinâmica e física moderna.' },
      { q: 'Qual é o projeto da AV-1? E o da AV-2?', a: 'AV-1: ovo lançado de um andar alto sem quebrar. AV-2: carrinho gravitacional.' },
    ],
  },

  {
    id: 'metodo-cientifico',
    title: 'Método científico',
    short: 'Método científico',
    summary: 'A física depende de método. Conheça as etapas e por que não são uma lei rígida.',
    blocks: [
      {
        t: 'callout',
        kind: 'def',
        title: 'Ideia central',
        text: 'A ciência depende de **método**. Em particular, a física usa o **método científico**.',
      },
      {
        t: 'steps',
        items: [
          { title: 'Observação', text: 'Notar um fenômeno na natureza.' },
          { title: 'Pergunta', text: 'Formular a dúvida que o fenômeno levanta.' },
          { title: 'Hipótese', text: 'Propor uma explicação que possa ser testada.' },
          { title: 'Experimento', text: 'Testar a hipótese de forma controlada e medir.' },
          { title: 'Conclusão', text: 'Confrontar resultados com a hipótese e concluir.' },
        ],
      },
      {
        t: 'callout',
        kind: 'prova',
        title: 'Cai em prova',
        text: 'O método tem etapas, **mas não é uma lei**. É um processo **cíclico**: o cientista pode pular etapas ou voltar ao começo a partir de qualquer uma.',
      },
      { t: 'p', text: '**Pergunta para refletir**' },
      {
        t: 'p',
        text: 'Se todo o conhecimento científico fosse destruído e só uma frase pudesse ser passada para a próxima geração, qual seria? A resposta anotada: a **hipótese atômica** (tudo é feito de átomos), ideia associada a Feynman.',
      },
    ],
    quiz: [
      { q: 'Cite as etapas do método científico.', a: 'Observação, pergunta, hipótese, experimento e conclusão.' },
      { q: 'O método científico é uma lei rígida?', a: 'Não. É um processo cíclico: pode-se pular etapas ou voltar ao início a partir de qualquer ponto.' },
    ],
  },

  {
    id: 'materia-pressao-densidade',
    title: 'Matéria, pressão e densidade',
    short: 'Pressão e densidade',
    summary: 'Átomos, moléculas e as duas grandezas básicas dos fluidos.',
    blocks: [
      {
        t: 'callout',
        kind: 'def',
        title: 'Átomos e moléculas',
        text: 'Elementos são formados por **átomos**; substâncias compostas são formadas por **moléculas**.',
      },
      { t: 'p', text: '**Pressão** é a força aplicada por unidade de área. Sua unidade no SI é o pascal (Pa).' },
      { t: 'formula', tex: 'P = \\dfrac{F}{A}', caption: 'P: pressão (Pa) · F: força (N) · A: área (m²)' },
      { t: 'p', text: '**Densidade** relaciona a massa de um corpo com o volume que ele ocupa. O símbolo é a letra grega $\\rho$ (rô).' },
      { t: 'formula', tex: 'd = \\rho = \\dfrac{m}{V}', caption: 'm: massa · V: volume' },
      {
        t: 'table',
        head: ['Material', 'Densidade'],
        rows: [
          ['Água', '1 g/cm³'],
          ['Ferro', '7,8 g/cm³'],
        ],
      },
      {
        t: 'callout',
        kind: 'dica',
        title: 'Intuição',
        text: 'Mesma força em área menor gera pressão maior (por isso uma faca afiada corta). O ferro é 7,8 vezes mais denso que a água: um cm³ de ferro tem 7,8 vezes mais massa.',
      },
    ],
    quiz: [
      { q: 'Escreva a fórmula da pressão.', a: '$P = F/A$ (força dividida pela área).' },
      { q: 'Qual a densidade da água e do ferro?', a: 'Água: 1 g/cm³. Ferro: 7,8 g/cm³.' },
      { q: 'Que letra grega representa a densidade?', a: '$\\rho$ (rô).' },
    ],
  },

  {
    id: 'modelos-equacoes',
    title: 'Modelos e grandes equações',
    short: 'Modelos e equações',
    summary: 'Modelo é aproximação. Segunda lei, E = mc² e as duas interações fundamentais vistas.',
    blocks: [
      {
        t: 'callout',
        kind: 'def',
        title: 'O que é um modelo?',
        text: 'Modelo é uma **representação aproximada** de algo. A física trabalha com modelos, não com a realidade completa.',
      },
      { t: 'p', text: '**Segunda lei de Newton (forma escalar)**' },
      { t: 'formula', tex: 'F = m \\cdot a' },
      { t: 'p', text: '**Equivalência entre massa e energia**' },
      { t: 'formula', tex: 'E = m\\,c^{2}', caption: 'E: energia · m: massa · c: velocidade da luz, cerca de 3·10⁸ m/s' },
      {
        t: 'callout',
        kind: 'atencao',
        title: 'Valor de c',
        text: 'No caderno aparece 3·10⁶ m/s, mas o valor correto da velocidade da luz é cerca de **3·10⁸ m/s**.',
      },
      { t: 'p', text: '**Interações**' },
      {
        t: 'cards',
        items: [
          { title: 'Mecânica (gravitacional)', text: 'Atração entre massas.' },
          { title: 'Eletromagnetismo', text: 'Força entre cargas elétricas.' },
        ],
      },
      { t: 'formula', tex: '|\\vec{F}| = G\\,\\dfrac{m_1\\, m_2}{r^{2}}', caption: 'Gravitação: G constante gravitacional · m₁, m₂ massas · r distância entre elas' },
      { t: 'formula', tex: '|\\vec{F}| = \\dfrac{1}{4\\pi\\varepsilon_0}\\,\\dfrac{q_1\\, q_2}{r^{2}}', caption: 'Eletromagnetismo (Coulomb): q₁, q₂ cargas · ε₀ permissividade do vácuo' },
      {
        t: 'callout',
        kind: 'prova',
        title: 'Repare no padrão',
        text: 'As duas forças têm a mesma estrutura: produto das "fontes" (massas ou cargas) dividido pelo quadrado da distância. A força cai com $1/r^2$.',
      },
      {
        t: 'callout',
        kind: 'dica',
        title: 'Matemática e física',
        text: 'A matemática é a linguagem usada pela física para descrever o universo.',
      },
    ],
    quiz: [
      { q: 'O que é um modelo?', a: 'Uma representação aproximada de algo.' },
      { q: 'O que significa cada símbolo em $E = mc^2$?', a: 'E é a energia, m é a massa e c é a velocidade da luz (cerca de $3\\cdot10^{8}$ m/s).' },
      { q: 'Como a força gravitacional muda se a distância dobra?', a: 'Cai para 1/4, pois a força é proporcional a $1/r^2$.' },
    ],
  },

  {
    id: 'leis-newton',
    title: 'Leis de Newton',
    short: 'Leis de Newton',
    summary: 'As três leis do movimento e o conceito de momento linear.',
    blocks: [
      { t: 'p', text: '**Momento linear** (quantidade de movimento):' },
      { t: 'formula', tex: '\\vec{p} = m\\,\\vec{v}', caption: 'massa vezes velocidade; é uma grandeza vetorial' },
      {
        t: 'cards',
        items: [
          {
            title: '1ª lei: Inércia',
            text: 'Todo corpo mantém seu estado de repouso ou de movimento uniforme em linha reta, a não ser que seja compelido a mudar esse estado por forças externas nele impressas.',
          },
          {
            title: '2ª lei: Força',
            text: 'A mudança no movimento é proporcional à força motora impressa e se faz na direção da linha reta segundo a qual a força é aplicada.',
          },
          {
            title: '3ª lei: Ação e reação',
            text: 'A toda ação opõe-se sempre uma reação igual: as ações mútuas de dois corpos, um sobre o outro, são sempre iguais e opostas.',
          },
        ],
      },
      {
        t: 'callout',
        kind: 'dica',
        title: 'Em uma frase cada',
        text: '1ª: sem força resultante, a velocidade não muda. 2ª: força causa variação de movimento ($F = m\\,a$). 3ª: forças sempre aparecem em pares, de mesmo módulo e sentidos opostos.',
      },
      {
        t: 'callout',
        kind: 'atencao',
        title: 'Pegadinha clássica',
        text: 'Ação e reação atuam em **corpos diferentes**, por isso não se anulam.',
      },
    ],
    quiz: [
      { q: 'Enuncie a 1ª lei de Newton com suas palavras.', a: 'Um corpo em repouso ou em movimento retilíneo uniforme assim permanece enquanto nenhuma força externa o fizer mudar.' },
      { q: 'Qual a relação entre força e mudança de movimento (2ª lei)?', a: 'São proporcionais, e a mudança ocorre na direção da força.' },
      { q: 'Por que ação e reação não se cancelam?', a: 'Porque atuam em corpos diferentes.' },
      { q: 'Como se define o momento linear?', a: '$\\vec{p} = m\\,\\vec{v}$.' },
    ],
  },

  {
    id: 'posicao-deslocamento',
    title: 'Posição, deslocamento e velocidade média',
    short: 'Deslocamento',
    summary: 'Eixo, origem, sentido, Δx e velocidade média em uma dimensão.',
    blocks: [
      { t: 'figure', name: 'axis', caption: 'Eixo x (em metros) com a origem no zero.' },
      {
        t: 'ul',
        items: [
          '**Origem**: o ponto zero do eixo, escolhido como referência.',
          'O sinal **+** ou **−** indica a **orientação** (o sentido) em um sistema unidimensional.',
          '**Vetor posição**: localiza o objeto a partir da origem e pode variar no tempo.',
        ],
      },
      {
        t: 'callout',
        kind: 'def',
        title: 'Sentido (físico)',
        text: 'É de onde o objeto parte para onde ele vai chegar.',
      },
      { t: 'p', text: '**Deslocamento** é a diferença entre a posição final e a inicial:' },
      { t: 'formula', tex: '\\Delta x = x_2 - x_1', caption: 'deslocamento é igual a Δx' },
      { t: 'p', text: '**Velocidade média** é o deslocamento dividido pelo intervalo de tempo:' },
      { t: 'formula', tex: 'V_m = \\dfrac{x_2 - x_1}{t_2 - t_1} = \\dfrac{\\Delta x}{\\Delta t}' },
      { t: 'p', text: '**Exemplo do caderno**: origem em Volta Redonda (VR), Rio de Janeiro (RJ) no lado positivo e São Paulo (SP) no lado negativo.' },
      { t: 'figure', name: 'route', caption: 'No exemplo, o sentido é de VR para RJ (sentido positivo).' },
      {
        t: 'callout',
        kind: 'prova',
        title: 'Cuidado com o sinal',
        text: 'Ir de VR para RJ dá $\\Delta x > 0$. Ir de VR para SP dá $\\Delta x < 0$. O sinal do deslocamento diz o sentido do movimento.',
      },
      { t: 'widget', name: 'displacement' },
    ],
    quiz: [
      { q: 'O que o sinal + ou − indica em um eixo?', a: 'A orientação (o sentido) em um sistema unidimensional.' },
      { q: 'Como se calcula o deslocamento?', a: '$\\Delta x = x_2 - x_1$ (posição final menos inicial).' },
      { q: 'Escreva a velocidade média.', a: '$V_m = (x_2 - x_1)/(t_2 - t_1)$.' },
      { q: 'Um objeto vai de $x_1 = 5$ m para $x_2 = 2$ m em 3 s. Qual $V_m$?', a: '$\\Delta x = -3$ m, logo $V_m = -3/3 = -1$ m/s (movimento no sentido negativo).' },
    ],
  },

  {
    id: 'vetores',
    title: 'Vetores',
    short: 'Vetores',
    summary: 'Definição, representações, versores î, ĵ, k̂ e soma de vetores.',
    blocks: [
      {
        t: 'callout',
        kind: 'def',
        title: 'O que é um vetor?',
        text: 'Vetor é um **ente matemático** definido por **3 propriedades**: **módulo**, **direção** e **sentido**.',
      },
      { t: 'p', text: '*Ente*: tudo aquilo que tem existência, seja real ou abstrato.' },
      { t: 'p', text: '**Um vetor pode ser escrito de 2 formas:**' },
      {
        t: 'cards',
        items: [
          { title: '1ª forma: com versores', text: '$\\vec{a} = a\\,\\hat{i} + b\\,\\hat{j} + c\\,\\hat{k}$' },
          { title: '2ª forma: em coordenadas', text: '$\\vec{a} = (a,\\, b,\\, c)$' },
        ],
      },
      { t: 'p', text: '**Versores** (vetores de módulo 1 que marcam os eixos):' },
      {
        t: 'table',
        head: ['Versor', 'Eixo'],
        rows: [
          ['$\\hat{i}$', 'eixo x'],
          ['$\\hat{j}$', 'eixo y'],
          ['$\\hat{k}$', 'eixo z'],
        ],
      },
      { t: 'figure', name: 'axes3d', caption: 'Os três versores no espaço.' },
      {
        t: 'callout',
        kind: 'def',
        title: 'Origem',
        text: 'O ponto de referência do sistema é chamado de **origem**, com coordenadas $(0,\\,0,\\,0)$.',
      },
      { t: 'p', text: '**Soma de vetores**' },
      {
        t: 'ul',
        items: [
          '**Regra do paralelogramo**: coloque $\\vec{a}$ e $\\vec{b}$ com a mesma origem; a soma $\\vec{a}+\\vec{b}$ é a diagonal do paralelogramo.',
          '**Regra do polígono** (vários vetores): ligue o fim de um ao início do próximo; $\\vec{a}+\\vec{b}+\\vec{c}$ vai do início do primeiro ao fim do último.',
          'Em componentes, soma-se eixo a eixo.',
        ],
      },
      { t: 'figure', name: 'vectorsum', caption: 'Soma de dois vetores pela regra do paralelogramo.' },
      { t: 'formula', tex: '\\begin{aligned}\\vec{a}+\\vec{b} = {}&(a_x + b_x)\\,\\hat{i} \\\\ &+ (a_y + b_y)\\,\\hat{j} \\\\ &+ (a_z + b_z)\\,\\hat{k}\\end{aligned}' },
      { t: 'widget', name: 'vectorsum' },
      {
        t: 'callout',
        kind: 'dica',
        title: 'Anotação extra (aula)',
        text: 'Lei dos nós de Kirchhoff (circuitos): soma das correntes que entram = soma das correntes que saem, $\\sum I_{entra} = \\sum I_{sai}$.',
      },
    ],
    quiz: [
      { q: 'Quais as 3 propriedades de um vetor?', a: 'Módulo, direção e sentido.' },
      { q: 'O que são î, ĵ e k̂?', a: 'Os versores dos eixos x, y e z, respectivamente.' },
      { q: 'Calcule $(2,\\,1,\\,0)+(1,\\,3,\\,4)$.', a: '$(3,\\,4,\\,4)$.' },
      { q: 'Quais são as coordenadas da origem?', a: '$(0,\\,0,\\,0)$.' },
    ],
  },
]
