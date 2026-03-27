## 🎬 Cheap Chain Channel — Seu clone da Netflix feito com IA! 🍿

<img src="catalogo/catalogo.html" alt="Capa do projeto">

**Olá, apaixonados por filmes e código!** 👋

Já imaginou construir uma interface idêntica à Netflix do zero? Com seleção de perfis, carrossel de filmes com hover animado e até preview em vídeo ao passar o mouse?

**Bem... você chegou ao lugar certo!** 🎥🍿

<div id="conteudo">

## 📋 Sobre

O **Cheap Chain Channel** é uma aplicação web que recria a experiência visual e interativa da Netflix. A missão do projeto é aplicar na prática os conceitos de HTML, CSS e JavaScript modernos — incluindo componentização com módulos ES6 — em um projeto que parece real e profissional.

**Confira mais sobre o projeto a seguir ⬇️**

---

<details><summary><h2>⚙️ Funcionamento</h2></summary>

### 🛠️ Como funciona?

1. **Seleção de perfil:** Ao abrir o app, é exibida uma tela estilo Netflix com os perfis cadastrados. Clique no seu perfil para entrar! 👤
2. **Catálogo dinâmico:** O catálogo é gerado dinamicamente via JavaScript, com categorias e cards de filmes criados a partir de um arquivo de dados (`data.js`). 🎞️
3. **Hover animado:** Ao passar o mouse sobre um card, ele se expande com animação suave, exibe um preview do trailer em YouTube e mostra informações como pontuação de relevância, classificação etária e duração. ✨
4. **Modo claro/escuro:** Na tela de perfis, um botão alterna entre tema dark e light, com preferência salva no `localStorage`. 🌙☀️

### ➕ E mais!

* **Componentização real:** Os cards e carrosseis são criados como componentes JavaScript separados, com imports/exports ES6, simulando uma arquitetura próxima à de frameworks modernos.
* **Responsividade:** Layout adaptado para desktop e dispositivos móveis.
* **Dados fáceis de editar:** Todo o conteúdo do catálogo está centralizado em `catalogo/js/data.js`, facilitando a customização.

</details>

---

<details><summary><h2>🌐 Como usar</h2></summary>

**🔗 Acesse o link:** Abra o arquivo `index.html` no navegador ou faça o deploy da pasta raiz em qualquer servidor estático (GitHub Pages, Vercel, Netlify etc.).

> **Dica:** por usar módulos ES6 (`type="module"`), o projeto precisa ser servido por um servidor HTTP — não abre corretamente pelo `file://` no navegador. Use a extensão **Live Server** no VS Code ou rode `npx serve .` na raiz do projeto.

</details>

---

<details><summary><h2>🏗️ Estrutura</h2></summary>

## 🛠 Tecnologias usadas:

* **🦴 HTML:** Estrutura semântica das páginas — tela de perfis e catálogo.
* **💄 CSS:** Estilização inspirada no Netflix, com variáveis CSS, animações de hover, transições suaves e responsividade.
* **🧠 JavaScript (ES6+):** Geração dinâmica de componentes (cards e carrosseis), lógica de interação, módulos separados por responsabilidade e integração com YouTube Embed API.
* **🤖 IA (Alura + Gemini):** Suporte de IA para acelerar o desenvolvimento e resolver desafios durante a imersão.

<div id="techs" align='center'>

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&labelColor=999999&logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&labelColor=999999&logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&labelColor=999999&logo=JavaScript&logoColor=white)
![Gemini Badge](https://img.shields.io/badge/google_gemini-8E75B2?style=for-the-badge&labelColor=999999&logo=googlegemini&logoColor=white)

</div>

## 📂 Estrutura do projeto

```
/
├── index.html               # Tela de seleção de perfis
├── script.js                # Lógica da tela de perfis (tema + geração de cards)
├── style.css                # Estilos da tela de perfis
├── js/
│   └── userProfiles.js      # Dados dos perfis cadastrados
├── assets/                  # Avatares dos perfis
└── catalogo/
    ├── catalogo.html        # Tela do catálogo (navbar + carrosseis)
    ├── catalogo.css         # Estilos do catálogo
    └── js/
        ├── main.js          # Entry point do catálogo
        ├── data.js          # Dados das categorias e filmes
        ├── utils.js         # Funções utilitárias (YouTube ID, badges etc.)
        └── components/
            ├── Card.js      # Componente de card de filme
            └── Carousel.js  # Componente de carrossel por categoria
```

## 🚀 Próximas implementações

- [ ] **Hero Banner:** Adicionar um banner de destaque no topo do catálogo com trailer em autoplay.
- [ ] **Modal expandido:** Ao clicar no botão "mais informações" do card, abrir um modal detalhado do título.
- [ ] **Busca:** Implementar campo de pesquisa funcional no catálogo.
- [ ] **Perfis dinâmicos:** Permitir criar, editar e remover perfis diretamente na interface.
- [ ] **Mais categorias:** Expandir o arquivo `data.js` com mais filmes e séries reais.
- [ ] **Persistência de lista:** Implementar a funcionalidade "Minha lista" com `localStorage`.

</details>

---

<details><summary><h2>🔨 Contribuição</h2></summary>

## 💪 Quer contribuir?

**🧭 Para melhorar o Cheap Chain Channel, siga estas etapas:**

1. **🔀 Clone o repositório:** Use o Git para baixar o código para o seu computador.
2. **👣 Explore o código:** Navegue pela estrutura de componentes para entender o funcionamento.
3. **🪛 Faça melhorias:** O projeto usa a MIT License — fique à vontade para implementar novas features e abrir um pull request!

## 🔬 Observações:

* **🎲 Dados:** Os filmes e categorias estão em `catalogo/js/data.js`. Adicione ou edite os itens para personalizar o catálogo.
* **👤 Perfis:** Os perfis estão em `js/userProfiles.js`. Altere nomes e imagens para criar seus próprios.
* **📑 Melhorias sugeridas:**
    * **🎬 Mais conteúdo:** Ampliar a base de dados com títulos reais e trailers do YouTube.
    * **🔍 Busca inteligente:** Integrar uma API de filmes como TMDB para busca e dados reais.
    * **🎨 Design:** Evoluir o visual com um hero banner e animações mais elaboradas.

**Sinta-se livre para contribuir!** 🙌 Se tiver dúvidas ou quiser colaborar, abra uma issue ou pull request.

</details>

---

<details><summary><h2>💻 Desenvolvimento</h2></summary>

## 🧑‍💻 Desenvolvido por:

**Wellington Morais | [Perfil no GitHub](https://github.com/wellingtonmnf)**

* **Deploy: 2026**
* **Última atualização: 2026**

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Desenvolvido para fins educacionais durante a Imersão Front-End com IA da Alura, sem fins comerciais.

## 📝 Notas

Este projeto foi criado durante a **Imersão Front-End com IA** realizada pela Alura em 2026. O objetivo foi construir um clone funcional da interface da Netflix aplicando HTML, CSS e JavaScript modernos com auxílio de ferramentas de IA.

Por conta de seu propósito educacional, o código JavaScript foi estruturado em módulos e amplamente comentado para facilitar o entendimento de quem quiser estudar a base de código.

Quaisquer dúvidas ou esclarecimentos, entre em contato pelo perfil do GitHub ou pelos meios expostos neste README.

</details>

---

</div>

<div id="mensagem" align="center">

## 🎬 Bora assistir... ops, bora codar! 🍿

## 1, 2, 3... YES!

</div>

**#netflix #clone #frontend #html #css #javascript #imersao #alura #ia #gemini #open-source**
