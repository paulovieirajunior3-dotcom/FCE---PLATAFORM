# PASSO A PASSO — PUBLICAR O FCE EXPLORER (GITHUB + VERCEL)

### Sem terminal, sem programação. Só cliques. ~15 minutos.

---

## Antes de começar

Você vai precisar baixar a pasta `fce-platform` para o seu computador (do painel de arquivos desta conversa) e ter em mãos um e-mail para criar as duas contas gratuitas (GitHub e Vercel), se ainda não tiver.

---

## PARTE 1 — Criar conta no GitHub (se você ainda não tem)

1. Acesse **github.com**
2. Clique em **Sign up** (canto superior direito)
3. Preencha e-mail, senha, nome de usuário
4. Confirme o e-mail que o GitHub enviar
5. Pronto — pule para a Parte 2

*Se você já tem conta no GitHub, pule direto para a Parte 2.*

---

## PARTE 2 — Criar o repositório

1. Depois de logado, clique no **+** no canto superior direito → **New repository**
2. Em **Repository name**, escreva: `fce-platform`
3. Deixe como **Public** (necessário para o plano gratuito da Vercel funcionar sem custo)
4. **Não marque** "Add a README file" (vamos subir os arquivos já prontos)
5. Clique em **Create repository**

Você vai cair numa página vazia com instruções técnicas — ignore, vamos usar o caminho mais simples abaixo.

---

## PARTE 3 — Subir os arquivos (sem terminal)

1. Nessa mesma página do repositório vazio, procure o link **"uploading an existing file"** (aparece no meio da página, em texto azul)
2. Vai abrir uma área de upload
3. No seu computador, abra a pasta `fce-platform` que você baixou
4. **Selecione tudo dentro dela** (não a pasta em si — o conteúdo: `index.html`, `GUIA_DEPLOY.md`, e as pastas `explorer/`, `base/`, `compiler/`, `graph/`, `api/`, `docs/`, `releases/`, `tests/`, etc.)
5. Arraste tudo para a área de upload do GitHub (ou clique em "choose your files" e selecione)
6. Espere o upload terminar — como tem bastante coisa (mais de 200 arquivos), pode levar alguns minutos
7. Role até o final da página, escreva algo como "Primeira versão da Base Oficial" na caixa de mensagem
8. Clique em **Commit changes**

**Se o GitHub reclamar de limite de arquivos por upload (às vezes acontece acima de ~100 arquivos de uma vez):** suba em duas etapas — primeiro a pasta `explorer/` sozinha (é só ela que precisa estar lá para o site funcionar), depois o resto (`base/`, `docs/`, etc.) num segundo upload, repetindo o passo "uploading an existing file".

**O mínimo indispensável para o site funcionar** é: `index.html` (raiz) e a pasta `explorer/` completa. Se quiser simplificar e for direto ao ponto, pode subir só isso agora e completar o resto depois.

---

## PARTE 4 — Criar conta na Vercel

1. Acesse **vercel.com**
2. Clique em **Sign Up**
3. Escolha **Continue with GitHub** (a opção mais simples — usa a conta que você acabou de criar)
4. Autorize a Vercel a acessar sua conta GitHub quando pedir

---

## PARTE 5 — Publicar (Deploy)

1. No painel da Vercel, clique em **Add New...** → **Project**
2. Vai aparecer uma lista dos seus repositórios do GitHub — procure **fce-platform** e clique em **Import**
3. Na tela de configuração:
   - **Framework Preset:** deixe em **Other**
   - **Build Command:** deixe em branco/vazio
   - **Output Directory:** deixe em branco (ou coloque um ponto `.` se pedir)
   - **Root Directory:** deixe como está (raiz)
4. Clique em **Deploy**
5. Espere cerca de 30-60 segundos

Quando terminar, a Vercel mostra confetes na tela e um botão com a URL — algo como `fce-platform-abc123.vercel.app`.

---

## PARTE 6 — Testar

1. Clique na URL gerada, ou copie e cole no navegador
2. Você deve ver a landing page ("Football Cognitive Engine")
3. Clique em **"Abrir o Explorer"**
4. Digite **"Falso 9"** na busca
5. Se aparecer o card com FUN-004, Finalidade Predominante, Mapa Cognitivo — está tudo funcionando

---

## Se algo der errado

**A landing carrega, mas o Explorer dá página em branco ou erro:** confirme que a pasta `explorer/` foi enviada completa, com os dois arquivos dentro (`index.html` e `dados_embutidos.js`). Se faltou o `dados_embutidos.js`, o Explorer carrega mas a busca não retorna nada.

**A Vercel não encontra nada para publicar:** confirme que o `index.html` está na **raiz** do repositório (não dentro de uma subpasta `fce-platform/fce-platform/`, que é um erro comum ao arrastar a pasta errada no upload).

**Quer atualizar algo depois:** volte no GitHub, entre no arquivo que quer mudar, clique no ícone de lápis (editar), salve — a Vercel republica automaticamente em menos de um minuto, sem precisar repetir os passos de configuração.

---

## Depois de publicado

Envie o link (`https://fce-platform-xxx.vercel.app/explorer/`) diretamente para os cinco participantes do FCE Validation Day, com a tarefa por escrito, exatamente como o protocolo já especifica — sem explicar a interface antes.
