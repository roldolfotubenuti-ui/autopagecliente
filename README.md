# Página de Entrega - AutoWin Pro

Página idêntica ao design original, com visual 100% fiel e os dois botões completamente funcionais.

---

## 🚀 Como Executar

### Opção 1: Direto no Navegador (Mais Rápido)
Basta dar um duplo clique no arquivo [`index.html`](file:///e:/youtube/nova%20era/PAGE+BACKEND/pageclienteAUTO/index.html) para abrir imediatamente no seu navegador padrão.

### Opção 2: Servidor Local Python
Execute no terminal:
```bash
python server.py
```
O servidor iniciará em `http://localhost:3000/index.html` e abrirá a aba automaticamente no seu navegador.

---

## ⚡ Funcionalidades dos Botões

1. **Enviar Dados (`btn-dark` - Preto/Roxo Profundo `#200a2e`):**
   - Abre um modal moderno e responsivo com campos para **Nome**, **E-mail**, **WhatsApp** (com máscara automática), **Chave de Licença** e **Observações**.
   - Salva automaticamente as informações no `localStorage` do navegador.
   - Suporte opcional a **Webhook** (Discord, Telegram, Zapier, Make, n8n, API própria) configurável em [`config.js`](file:///e:/youtube/nova%20era/PAGE+BACKEND/pageclienteAUTO/config.js).
   - Tela de confirmação com checkmark, cópia rápida do resumo para a área de transferência e notificações toast flutuantes.

2. **Download do Arquivo (`btn-purple` - Roxo Vibrante `#811df9`):**
   - Dispara o download imediato do pacote [`downloads/AUTOWIN_ENTREGA_CLIENTE.zip`](file:///e:/youtube/nova%20era/PAGE+BACKEND/pageclienteAUTO/downloads/AUTOWIN_ENTREGA_CLIENTE.zip).
   - Efeito visual de carregamento no botão (`Baixando Arquivo...` -> `Download Iniciado! ✓`).
   - Notificação toast flutuante confirmando o início do download.

---

## 🎨 Fidelidade Visual

- **Cor de Fundo:** `#fefefe` (idêntica à imagem de referência).
- **Tipografia:** `Impact` com fallback para `Anton` e `Oswald` para os títulos (`PARABENS`, `FELA`, `AUTOMATIZE TUDO 100%`) e `Inter` para botões e modais.
- **Badge FELA:** Roxo `#811df9` com borda preta sólida de 5px e cantos arredondados.
- **Divisor Central:** Linha vertical sutil `#dfc9ea`.
- **Mascote:** Ilustração original tratada e recortada em alta definição com transparência nos cantos externos (`assets/mascot.png` e `@2x`).

