# dh-middlewares

<h1 align="center">DH IMPLEMENTANDO MIDDLEWARES </h1>

## Prática integradora - Middlewares
### Objetivo 
<div>
Como programadores, é importante que aprendamos a usar um middleware, pois ele nos
permite projetar aplicações de forma mais eficiente. Nesta oportunidade, vamos
desenvolver um middleware que nos permita acompanhar o acesso a diferentes rotas em
nosso projeto, tais como um log para identificar quais rotas foram acessadas. Além disso,
vamos ver como podemos codificar um middleware para restringir o acesso a uma
determinada URL
Bom trabalho!
</div>

<hr>

### Micro desafio - Passo 1 

- [X] Utilizando como base o seguinte projeto, vamos desenvolver um middleware para fazer o
login em qualquer rota no sistema. Portanto, dentro da aplicação devemos criar um
arquivo de texto chamado userLogs.txt. Este arquivo deve estar localizado em uma
pasta chamada logs e dentro dele devemos registrar o acesso a qualquer rota do
sistema. Cada registro deve ter este aspecto:
- O usuário acessou a rota: ______
- Para isso será necessário que tenhamos uma pasta denominada middlewares e, dentro
dela, um middleware chamado: userLogs.js.
- Este middleware será usado em toda a aplicação, portanto deveremos implementá- lo
corretamente. Também podemos criar as rotas que consideramos necessárias para testar
o middleware.
- Importante: o arquivo userLogs.txt deverá armazenar TODAS as rotas que o usuário
acessar. O que deverá ser visto assim:
- O usuário acessou a rota: /services
- O usuário acessou a rota: /services/design
- O usuário acessou a rota: /
- … e assim sucessivamente com todas as demais rotas.


<hr>

### Micro desafio - Passo 2 



- [ ] Implementar um middleware que nos permita autorizar o acesso de usuários
administradores à rota localhost:3000/admin, apenas aqueles que estão na lista de
usuários: Ada, Greta, Vim ou Tim.

Quer dizer que só permitiremos o acesso se o texto enviado na queryString como user
pertencer aos usuários autorizados. Por exemplo, se enviamos o seguinte:
- localhost:3000/admin?user=Ada
permitiremos o acesso e será enviada, como resposta, a seguinte mensagem:
- Olá Admin: Ada
Caso contrário, o texto da resposta será:
- Não tem os privilégios para acessar
Importante: ao criar a rota, ela deve responder a duas callbacks. A primeira será o
middleware e a segunda será o método que trata do caso de login bem sucedido. Por
exemplo:
router.get("/admin", middleware, método);


<hr>



### Conclusão 

<div>
Embora o uso de middlewares pareça complexo no início, ele simplifica e evita o
desenvolvimento de uma grande lógica de validação que teríamos de implementar se
não os utilizássemos.

</div>
Até a próxima!
 
