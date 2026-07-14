// Dataset de Playbooks (PBK) do CAT-PBK-001, com conteúdo completo para os
// itens Publicados. Restrito aos vínculos com IDs reais da Base Oficial
// verificados em 14/07/2026. Gerado a partir do catálogo governado --
// não editar a mão sem atualizar o CAT-PBK-001 correspondente.
const FCE_PBKS = [
  {
    "id": "PBK-R-041",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer um(a) Volante Construtor",
    "status": "Publicado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-001"
    ],
    "objetivo": "Capacitar o observador a identificar em campo ou em vídeo um jogador atuando na função de Volante Construtor, distinguindo-o de um Volante Destruidor pela finalidade predominante de sua movimentação e de suas escolhas técnicas.",
    "usuario": "Treinador, analista de desempenho, departamento de scouting.",
    "problema": "A posição “Volante” costuma ser tratada como categoria homogênea, mascarando que jogadores na mesma posição cumprem finalidades táticas radicalmente diferentes — o Princípio Posição ≠ Função.",
    "objetos_desc": "OBJ — Saída de Bola · OBJ — Linha de Passe · OBJ — Círculo de Passe · FUN-001 — Volante Construtor",
    "funcoes": "Volante Construtor (FUN-001).",
    "jogadores": "JOG-001 Busquets · JOG-002 Pirlo · JOG-003 Rijkaard (evidência parcial).",
    "metodos": "Análise de mapa de passes (volume e direção); medição da taxa de participação na saída de bola; registro da posição média de recebimento.",
    "checklist": [
      "Observar se recua para receber entre os zagueiros",
      "Medir proporção de passes progressivos vs. de segurança",
      "Verificar se prioriza posse sobre disputa física",
      "Confirmar Finalidade Predominante: construção"
    ],
    "resultado_esperado": "O usuário consegue apontar, em vídeo, se o volante em campo cumpre função de Construtor, com base em evidência observável."
  },
  {
    "id": "PBK-R-042",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer um(a) Volante Destruidor",
    "status": "Publicado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-002"
    ],
    "objetivo": "Capacitar o observador a identificar um jogador atuando como Volante Destruidor, cuja finalidade predominante é a ruptura de processos ofensivos adversários.",
    "usuario": "Treinador, analista de desempenho, departamento de scouting.",
    "problema": "Mesmo problema de PBK-R-041, na direção inversa: sem critério operacional, o rótulo “volante” não distingue destruição de construção.",
    "objetos_desc": "OBJ — Cobertura Defensiva · OBJ — Marcação por Zona · OBJ — Pressão Orientada à Bola · FUN-002 — Volante Destruidor",
    "funcoes": "Volante Destruidor (FUN-002).",
    "jogadores": "JOG-004 Makélélé.",
    "metodos": "Contagem de interceptações e desarmes por 90 minutos; mapa de recuperação de bola por zona; distância média percorrida em cobertura.",
    "checklist": [
      "Observar posicionamento entre as linhas de defesa e meio-campo",
      "Medir proporção de ações defensivas vs. ofensivas",
      "Verificar se prioriza cobertura de espaço",
      "Confirmar Finalidade Predominante: destruição"
    ],
    "resultado_esperado": "O usuário identifica corretamente um Volante Destruidor em vídeo, com rigor equivalente ao de PBK-R-041."
  },
  {
    "id": "PBK-N-002",
    "bloco": "N",
    "verbo": "Neutralizar",
    "titulo": "Como neutralizar um(a) Volante Construtor",
    "status": "Publicado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-001"
    ],
    "objetivo": "Fornecer respostas táticas para impedir que o Volante Construtor rival exerça sua função de saída de bola e progressão.",
    "usuario": "Treinador e comissão técnica adversária.",
    "problema": "Equipes que enfrentam um Volante Construtor de alto nível permitem que ele dite o ritmo de saída de bola sem resposta estrutural planejada.",
    "objetos_desc": "OBJ — Pressão Orientada à Bola · OBJ — Marcação Individual · FUN-001 (alvo)",
    "funcoes": "Qualquer função ofensiva avançada pode ser recrutada para marcação orientada pontual.",
    "jogadores": "Não aplicável como evidência formal — ajuste tático genérico, aplicável contra qualquer JOG associado a FUN-001.",
    "metodos": "Marcação individual orientada (“sombra”); cobertura preventiva da linha de passe preferencial; pressão coordenada de dois jogadores.",
    "checklist": [
      "Identificar o Volante Construtor e sua zona preferencial",
      "Designar marcação sombra durante a saída de bola",
      "Cobrir as linhas de passe mais usadas",
      "Avaliar se a taxa de passes progressivos caiu"
    ],
    "resultado_esperado": "Redução mensurável na participação do Volante Construtor na progressão de bola do adversário."
  },
  {
    "id": "PBK-C-001",
    "bloco": "C",
    "verbo": "Construir",
    "titulo": "Como construir Saída de Bola",
    "status": "Publicado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-001"
    ],
    "objetivo": "Fornecer um roteiro para estruturar a fase de saída de bola do próprio time, apoiando-se na função de Volante Construtor já reconhecida.",
    "usuario": "Treinador, preparador tático.",
    "problema": "Equipes reconhecem que têm um Volante Construtor, mas não têm roteiro de como organizar o time ao redor dele para que a saída de bola funcione.",
    "objetos_desc": "OBJ — Saída de Bola · OBJ — Linha de Passe · OBJ — Círculo de Passe · FUN-001",
    "funcoes": "Volante Construtor · Zagueiro Construtor · Goleiro-Líbero.",
    "jogadores": "JOG-001 Busquets · JOG-002 Pirlo.",
    "metodos": "Estrutura triangular ou em losango de saída; abertura de amplitude dos zagueiros/laterais; apoio do goleiro como jogador extra.",
    "checklist": [
      "Definir a estrutura de saída: losango, triângulo ou linha de três",
      "Posicionar o Volante Construtor entre/próximo aos zagueiros",
      "Estabelecer amplitude para abrir linhas de passe",
      "Definir gatilho entre saída curta e longa",
      "Treinar quando abortar a construção curta"
    ],
    "resultado_esperado": "Alta de 10+ pontos percentuais na taxa de saídas concluídas sob pressão alta, em 5 partidas consecutivas."
  },
  {
    "id": "PBK-T-005",
    "bloco": "T",
    "verbo": "Treinar",
    "titulo": "Exercício para Saída de Bola em Losango",
    "status": "Publicado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-001"
    ],
    "objetivo": "Automatizar em treino o padrão posicional de saída de bola em losango, para execução segura sob pressão real.",
    "usuario": "Treinador; zagueiros, volante e goleiro.",
    "problema": "A estrutura é fácil de desenhar no quadro, mas difícil de executar sob pressão sem repetição específica.",
    "objetos_desc": "OBJ — Espaço Reduzido de Treino · FUN-001 (referência)",
    "funcoes": "Volante Construtor · Zagueiro Construtor · Goleiro-Líbero.",
    "jogadores": "Não aplicável — exercício genérico adaptável ao elenco.",
    "metodos": "Progressão em três fases: (1) estático sem pressão, (2) com 1 pressionador neutro, (3) jogo reduzido com pressão real.",
    "checklist": [
      "Montar losango com zagueiros, volante e goleiro",
      "Fase 1: circulação livre, sem oposição",
      "Fase 2: pressionador neutro forçando decisão rápida",
      "Fase 3: jogo reduzido, medir saídas concluídas",
      "Registrar saídas bem-sucedidas por sessão"
    ],
    "resultado_esperado": "Taxa de sucesso crescente ao longo do ciclo de treino, mesmo critério de PBK-C-001."
  },
  {
    "id": "PBK-R-002",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer Superioridade Numérica",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0010"
    ],
    "objetivo": "Capacitar o treinador ou analista a identificar, em vídeo, os momentos em que a equipe com bola tem mais jogadores do que o adversário numa zona específica.",
    "usuario": "Treinador, analista de desempenho, comissão técnica.",
    "problema": "A superioridade numérica costuma ser reconhecida de forma intuitiva, sem critério replicável.",
    "objetos_desc": "OBJ — Superioridade Numérica · OBJ — Corredor · OBJ — Linha de Pressão Adversária · FUN-004 (referência)",
    "funcoes": "Falso 9 (referência conceitual, não requisito de reconhecimento de jogador).",
    "jogadores": "Não aplicável — mesma limitação dos demais conceitos ligados a FUN-004.",
    "metodos": "Contagem posicional por zona; análise de vídeo quadro a quadro no momento do passe decisivo.",
    "checklist": [
      "Definir a zona de análise (terço e corredor)",
      "Contar jogadores de cada equipe na zona",
      "Verificar se é temporária ou estrutural",
      "Registrar o desfecho da jogada"
    ],
    "resultado_esperado": "Aponta em vídeo o momento exato em que a superioridade numérica se forma e se desfaz."
  },
  {
    "id": "PBK-N-016",
    "bloco": "N",
    "verbo": "Neutralizar",
    "titulo": "Como neutralizar Superioridade Numérica",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0010"
    ],
    "objetivo": "Fornecer respostas táticas para reequilibrar ou reverter uma situação de inferioridade numérica.",
    "usuario": "Treinador e comissão técnica, incluindo ajustes durante o jogo.",
    "problema": "Equipes que sofrem superioridade numérica recorrente concedem progressão contínua, sem repertório claro de resposta.",
    "objetos_desc": "OBJ — Superioridade Numérica · OBJ — Corredor · FUN-004 (referência)",
    "funcoes": "Volante Destruidor · Zagueiro de Cobertura.",
    "jogadores": "Não aplicável.",
    "metodos": "Basculação coletiva; permuta funcional temporária; pressão orientada para a zona de menor risco.",
    "checklist": [
      "Identificar a zona exata da superioridade",
      "Escolher basculação ou permuta funcional",
      "Comunicar o ajuste durante a partida",
      "Avaliar redução na taxa de progressão"
    ],
    "resultado_esperado": "Redução mensurável na taxa de progressões bem-sucedidas do adversário."
  },
  {
    "id": "PBK-C-004",
    "bloco": "C",
    "verbo": "Construir",
    "titulo": "Como construir Superioridade Numérica",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0010"
    ],
    "objetivo": "Fornecer um roteiro para criar deliberadamente situações de superioridade numérica em zonas-chave do campo.",
    "usuario": "Treinador, preparador tático.",
    "problema": "Equipes reconhecem superioridade quando aparece, mas raramente a criam de forma estruturada.",
    "objetos_desc": "OBJ — Superioridade Numérica · OBJ — Corredor · FUN-004 (referência)",
    "funcoes": "Falso 9 · Volante Construtor.",
    "jogadores": "Não aplicável.",
    "metodos": "Sobrecarga de lado (overload) deliberada; rotação posicional para atrair marcação; uso do goleiro/zagueiro como jogador extra.",
    "checklist": [
      "Identificar a zona-alvo para criar superioridade",
      "Usar rotação posicional para atrair marcadores",
      "Adicionar jogador extra para consolidar a vantagem",
      "Definir o gatilho de quando explorar"
    ],
    "resultado_esperado": "Aumento no número de situações de superioridade criadas deliberadamente por partida."
  },
  {
    "id": "PBK-T-006",
    "bloco": "T",
    "verbo": "Treinar",
    "titulo": "Exercício para Superioridade Numérica",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0010"
    ],
    "objetivo": "Desenvolver a leitura automática de quando e como explorar superioridade numérica, por meio de repetição em treino.",
    "usuario": "Treinador; jogadores.",
    "problema": "Jogadores reconhecem a superioridade numérica tarde demais durante o jogo.",
    "objetos_desc": "OBJ — Espaço Reduzido de Treino · FUN-004 (referência)",
    "funcoes": "Aplica-se a qualquer função de linha de construção.",
    "jogadores": "Não aplicável.",
    "metodos": "Rondo com superioridade fixa; progressão para jogo posicional com superioridade variável; coringas neutros.",
    "checklist": [
      "Definir espaço e número de jogadores",
      "Estabelecer regra de pontuação",
      "Progressão de intensidade",
      "Feedback individual pós-exercício"
    ],
    "resultado_esperado": "Aumento na velocidade de decisão, medido pelo número de passes até a progressão bem-sucedida."
  },
  {
    "id": "PBK-R-006",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer Espaço Explorável",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0028"
    ],
    "objetivo": "Capacitar o observador a identificar áreas do campo momentaneamente livres de marcação, exploráveis por um jogador ou passe.",
    "usuario": "Treinador, analista de desempenho.",
    "problema": "“Espaço” é citado de forma vaga no futebol, sem definição operacional.",
    "objetos_desc": "OBJ — Espaço Explorável · OBJ — Linha de Passe · FUN-004 (referência)",
    "funcoes": "Falso 9 (referência conceitual).",
    "jogadores": "Não aplicável.",
    "metodos": "Análise de densidade posicional; análise de movimento de linha de pressão.",
    "checklist": [
      "Mapear a posição de todos os jogadores adversários",
      "Identificar áreas de menor densidade de marcação",
      "Verificar se há jogador/linha de passe capaz de alcançar",
      "Registrar se o espaço foi explorado ou desperdiçado"
    ],
    "resultado_esperado": "Aponta em vídeo, antes do passe, qual espaço está aberto para exploração."
  },
  {
    "id": "PBK-R-007",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer Entrelinhas",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0055"
    ],
    "objetivo": "Capacitar o observador a identificar o espaço entre linhas e reconhecer quando um jogador o ocupa de forma útil.",
    "usuario": "Treinador, analista de desempenho.",
    "problema": "“Jogar entrelinhas” é expressão comum, raramente definida operacionalmente.",
    "objetos_desc": "OBJ — Entrelinhas · OBJ — Linha de Passe · FUN-004 (referência)",
    "funcoes": "Falso 9 · Meia de Ligação.",
    "jogadores": "Não aplicável.",
    "metodos": "Análise espacial do posicionamento médio; identificação de “bolsões” de espaço entre linhas.",
    "checklist": [
      "Identificar as duas linhas de referência",
      "Observar se um jogador se posiciona no espaço antes do passe",
      "Verificar se o recebimento gera vantagem real",
      "Registrar frequência de ocupação bem-sucedida"
    ],
    "resultado_esperado": "Aponta em vídeo os momentos de ocupação eficaz de entrelinhas."
  },
  {
    "id": "PBK-N-024",
    "bloco": "N",
    "verbo": "Neutralizar",
    "titulo": "Como neutralizar Entrelinhas",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0055"
    ],
    "objetivo": "Fornecer respostas táticas para fechar o espaço entre linhas, impedindo recepção com vantagem.",
    "usuario": "Treinador, comissão técnica.",
    "problema": "Recepções recorrentes entre linhas indicam problema estrutural de distância, não de marcação individual.",
    "objetos_desc": "OBJ — Entrelinhas · OBJ — Linha de Passe · FUN-004 (referência)",
    "funcoes": "Zagueiro de Cobertura · Volante Destruidor.",
    "jogadores": "Não aplicável.",
    "metodos": "Compactação vertical entre linhas; marcação orientada ao ocupante do espaço; basculação coordenada.",
    "checklist": [
      "Medir a distância média entre as linhas",
      "Reduzir a distância quando houver ocupante reconhecido",
      "Designar marcação orientada específica",
      "Avaliar se a frequência caiu após o ajuste"
    ],
    "resultado_esperado": "Redução mensurável na frequência de recepções eficazes na zona de entrelinhas."
  },
  {
    "id": "PBK-C-008",
    "bloco": "C",
    "verbo": "Construir",
    "titulo": "Como construir Entrelinhas",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0055"
    ],
    "objetivo": "Fornecer um roteiro para criar e ocupar sistematicamente o espaço entre linhas do adversário.",
    "usuario": "Treinador, preparador tático.",
    "problema": "Reconhecer entrelinhas não ensina como fazer a própria equipe ocupar esse espaço de forma consistente.",
    "objetos_desc": "OBJ — Entrelinhas · OBJ — Linha de Passe · FUN-004 (referência)",
    "funcoes": "Falso 9 · Meia de Ligação.",
    "jogadores": "Não aplicável.",
    "metodos": "Escalonamento de linhas para criar bolsões de espaço; movimentação de atração; timing de recebimento de costas para a marcação.",
    "checklist": [
      "Identificar os bolsões de espaço contra o bloco adversário",
      "Posicionar um jogador para ocupar no momento certo",
      "Treinar o timing de giro com mínimo de toques",
      "Coordenar linha de passe imediata após a recepção"
    ],
    "resultado_esperado": "Aumento no número de recepções eficazes na zona de entrelinhas por partida."
  },
  {
    "id": "PBK-T-002",
    "bloco": "T",
    "verbo": "Treinar",
    "titulo": "Exercício para Entrelinhas",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0055"
    ],
    "objetivo": "Automatizar em treino a ocupação de entrelinhas, para timing de recebimento sob pressão real.",
    "usuario": "Treinador; jogadores de meio-campo e ataque.",
    "problema": "A ocupação exige timing preciso, que só se desenvolve com repetição específica.",
    "objetos_desc": "OBJ — Espaço Reduzido de Treino · FUN-004 (referência)",
    "funcoes": "Falso 9 · Meia de Ligação.",
    "jogadores": "Não aplicável.",
    "metodos": "Progressão em três fases: recepção estática de costas, marcador passivo, jogo posicional reduzido com marcação real.",
    "checklist": [
      "Montar exercício de recepção de costas em espaço reduzido",
      "Fase 1: recepção e giro sem oposição",
      "Fase 2: marcador passivo",
      "Fase 3: jogo posicional reduzido, medir recepções",
      "Registrar taxa de giros bem-sucedidos"
    ],
    "resultado_esperado": "Taxa crescente de recepções e giros bem-sucedidos sob pressão."
  },
  {
    "id": "PBK-R-008",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer Terceiro Homem",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0005"
    ],
    "objetivo": "Capacitar o observador a identificar a jogada de terceiro homem — passe ao segundo jogador com intenção de alcançar um terceiro.",
    "usuario": "Treinador, analista de desempenho.",
    "problema": "O conceito é citado com frequência sem definição operacional clara.",
    "objetos_desc": "OBJ — Terceiro Homem · OBJ — Círculo de Passe · FUN-004 (referência)",
    "funcoes": "Aplica-se a qualquer função de construção, maior incidência com Falso 9.",
    "jogadores": "Não aplicável.",
    "metodos": "Análise sequencial de três passes consecutivos; identificação do padrão triangular no mapa de passes.",
    "checklist": [
      "Identificar sequência de três jogadores em até dois toques",
      "Verificar intenção de progressão imediata do segundo jogador",
      "Confirmar recepção em espaço vantajoso",
      "Registrar se rompeu uma linha de pressão"
    ],
    "resultado_esperado": "Identifica jogadas de terceiro homem, diferenciando de simples triangulação sem ruptura de linha."
  },
  {
    "id": "PBK-N-023",
    "bloco": "N",
    "verbo": "Neutralizar",
    "titulo": "Como neutralizar Terceiro Homem",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0005"
    ],
    "objetivo": "Fornecer respostas táticas para impedir que o adversário complete a jogada de terceiro homem.",
    "usuario": "Treinador, comissão técnica.",
    "problema": "O desarme reativo chega tarde — a neutralização precisa ser antecipatória.",
    "objetos_desc": "OBJ — Terceiro Homem · OBJ — Círculo de Passe · FUN-004 (referência)",
    "funcoes": "Volante Destruidor · Zagueiro de Cobertura.",
    "jogadores": "Não aplicável.",
    "metodos": "Cobertura preventiva da linha de passe ao segundo homem; encurtamento da distância entre linhas; comunicação verbal entre defensores.",
    "checklist": [
      "Identificar o padrão de triangulação recorrente",
      "Cobrir preventivamente a linha de passe ao segundo homem",
      "Reduzir a distância entre linha de meio-campo e defesa",
      "Treinar comunicação verbal para antecipar"
    ],
    "resultado_esperado": "Redução mensurável na taxa de jogadas de terceiro homem concluídas pelo adversário."
  },
  {
    "id": "PBK-C-009",
    "bloco": "C",
    "verbo": "Construir",
    "titulo": "Como construir Terceiro Homem",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0005"
    ],
    "objetivo": "Fornecer um roteiro para estruturar deliberadamente jogadas de terceiro homem como padrão coletivo.",
    "usuario": "Treinador, preparador tático.",
    "problema": "A jogada geralmente surge espontaneamente; equipes de alto nível a treinam como padrão repetível.",
    "objetos_desc": "OBJ — Terceiro Homem · OBJ — Círculo de Passe · FUN-004 (referência)",
    "funcoes": "Falso 9 · Meia de Ligação · Volante Construtor.",
    "jogadores": "Não aplicável.",
    "metodos": "Posicionamento triangular fixo entre três jogadores; timing de movimento do terceiro jogador; contato visual como gatilho.",
    "checklist": [
      "Definir os três papéis fixos: inicia, liga, recebe",
      "Treinar o timing de movimentação do terceiro jogador",
      "Estabelecer contato visual como gatilho",
      "Praticar a partir de diferentes zonas de origem"
    ],
    "resultado_esperado": "Aumento no número de jogadas de terceiro homem concluídas com sucesso por partida."
  },
  {
    "id": "PBK-T-001",
    "bloco": "T",
    "verbo": "Treinar",
    "titulo": "Exercício para Terceiro Homem",
    "status": "Publicado",
    "co": "CO-B",
    "objetos_reais": [
      "OBJ-0005"
    ],
    "objetivo": "Automatizar em treino o padrão triangular de terceiro homem, para execução sob pressão real.",
    "usuario": "Treinador; jogadores envolvidos na construção.",
    "problema": "Depende de timing entre três jogadores simultaneamente — mais difícil de automatizar que padrões de dois.",
    "objetos_desc": "OBJ — Espaço Reduzido de Treino · FUN-004 (referência)",
    "funcoes": "Falso 9 · Meia de Ligação · Volante Construtor.",
    "jogadores": "Não aplicável.",
    "metodos": "Progressão em três fases: walkthrough sem oposição, pressionador passivo, jogo posicional reduzido com marcação real.",
    "checklist": [
      "Montar exercício com três papéis fixos",
      "Fase 1: walkthrough sem oposição",
      "Fase 2: pressionador passivo sobre o segundo homem",
      "Fase 3: jogo posicional reduzido, medir conclusões",
      "Registrar taxa de jogadas concluídas"
    ],
    "resultado_esperado": "Taxa crescente de jogadas de terceiro homem concluídas sob pressão."
  },
  {
    "id": "PBK-R-043",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer um(a) Falso 9",
    "status": "Catalogado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-004"
    ],
    "objetivo": null,
    "usuario": null,
    "problema": null,
    "objetos_desc": null,
    "funcoes": null,
    "jogadores": null,
    "metodos": null,
    "checklist": null,
    "resultado_esperado": null
  },
  {
    "id": "PBK-N-001",
    "bloco": "N",
    "verbo": "Neutralizar",
    "titulo": "Como neutralizar um(a) Falso 9",
    "status": "Catalogado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-004"
    ],
    "objetivo": null,
    "usuario": null,
    "problema": null,
    "objetos_desc": null,
    "funcoes": null,
    "jogadores": null,
    "metodos": null,
    "checklist": null,
    "resultado_esperado": null
  },
  {
    "id": "PBK-R-053",
    "bloco": "R",
    "verbo": "Reconhecer",
    "titulo": "Como reconhecer um(a) Meia Armador",
    "status": "Catalogado",
    "co": "CO-A",
    "objetos_reais": [
      "FUN-007"
    ],
    "objetivo": null,
    "usuario": null,
    "problema": null,
    "objetos_desc": null,
    "funcoes": null,
    "jogadores": null,
    "metodos": null,
    "checklist": null,
    "resultado_esperado": null
  }
];
