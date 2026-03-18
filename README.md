# 🌐 Sistema de Registro de Presença - Frontend

Interface web para interação com o sistema de registro de presença.

## 📌 Sobre o Projeto

O frontend permite que o usuário (aluno) registre sua presença de forma simples e rápida, consumindo a API backend.

## 🎯 Funcionalidades

- Botão para registrar presença
- Feedback de sucesso ou erro
- Integração com API REST
- Interface simples e intuitiva

## 🖥️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## 🔗 Integração com Backend

A aplicação consome o endpoint:

```
POST /presenca/registrar
```

### Exemplo de requisição

```javascript
fetch('http://localhost:8080/presenca/registrar', {
  method: 'POST'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

## 📂 Estrutura do Projeto

```
/frontend

index.html
style.css
script.js
```

## 🎨 Interface

A interface foi projetada para ser:

- Simples
- Rápida
- Intuitiva

## ⚠️ Regras Importantes

- O botão de presença depende das regras do backend
- Caso esteja fora do horário permitido, será exibido erro
  

## 👥 Equipe

- Adhan Yudi Oda Fukumoto
- Beatriz Gorges Guesser
- Mauricio Batista Gabriel
- Muriel Demonti de Souza

## 🎯 Objetivo

Facilitar a interação do usuário com o sistema de presença de forma prática e eficiente.
