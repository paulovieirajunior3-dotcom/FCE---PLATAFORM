# GUIA DE DEPLOY — FCE EXPLORER

### O que já está pronto (feito nesta sessão) vs. o que exige uma conta/ação sua

---

## O que eu não posso fazer, declarado antes de qualquer instrução

Não posso comprar domínio, criar conta no GitHub/Vercel/Netlify, autenticar em nenhum serviço de terceiros, nem publicar algo que fique acessível por uma URL real. Essas ações exigem identidade, pagamento ou autenticação que só você controla. O que segue é o caminho mais curto entre o que já está pronto aqui e uma URL funcionando.

---

## O que já está pronto, agora, neste repositório

```
fce-platform/
├── index.html          ← landing page, pronta (feita nesta sessão)
└── explorer/
    ├── index.html       ← Explorer 0.2-beta, funcional, testado (7/7 no Test Suite)
    └── dados_embutidos.js  ← 101 Objetos + 802 relações, embutidos
```

Isso já é um site estático completo. Não precisa de build step, não precisa de npm install, não precisa de servidor — é HTML/JS puro que qualquer hospedagem estática serve como está.

## Passos que só você pode executar (10-15 minutos, sem escrever código)

1. Criar repositório no GitHub (se ainda não existir um para fce-platform) e subir a pasta fce-platform/ inteira como está — nenhum arquivo precisa ser alterado antes.
2. Criar conta na Vercel (ou Netlify) — login com a própria conta do GitHub, sem necessidade de cartão para o plano gratuito.
3. "Import Project" na Vercel, apontando para o repositório fce-platform. Nenhuma configuração de build é necessária — Vercel detecta site estático automaticamente. Se pedir, "Framework Preset" = "Other", "Build Command" = vazio, "Output Directory" = raiz (.).
4. Deploy. Em menos de um minuto, a Vercel gera uma URL do tipo fce-platform-xyz.vercel.app — já funcional, já pública.
5. Domínio próprio (opcional, faça depois de validar com os 5 usuários, não antes): comprar fce.ai ou similar num registrador (Registro.br, Namecheap, GoDaddy), depois apontar o DNS para a Vercel — a própria interface da Vercel gera as instruções exatas de CNAME/A record quando você adiciona o domínio ao projeto.

## O que eu recomendo, com base no que o Roadmap já disse sobre otimização prematura

Não compre domínio ainda. A URL genérica da Vercel (algo.vercel.app) já cumpre 100% da função para os cinco usuários do FCE Validation Day — eles só precisam de um link, não de uma marca. Comprar domínio antes de validar repete exatamente o padrão de "construir antes da necessidade real" que a Base já identificou como risco (Índice de Consulta, mencionado antes de existir gargalo real). Domínio institucional vira decisão de Segunda Geração de produto, depois da validação, não antes.

---

## Status

Repositório pronto para deploy — landing page e Explorer, ambos testados. Os cinco passos acima exigem ação sua (conta, autenticação), não código adicional. Recomendação explícita: validar com URL genérica gratuita antes de investir em domínio.
