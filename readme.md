# Passo a passo da API, 2° parte

### Clone o seu antigo repositório no seu computador.
- Abrir o gitBash em um local do computador;
- Digitar o comando 'git clone' junto com a URL do seu repositório;

```
$ git clone https://github.com/GustavoHSpengler/Constru-o_de_API.git
```

### Acesse a pasta
- Digitar o comando 'cd' e o nome do seu repositório;
- cd (change directory): acessar outra pasta;
```
$ cd Constru-o_de_API
```

### Reinstalar os pacotes de aplicação 

```
$ npm i
```
- Este comando irá recriar a pasta node_modules no projeto;

### Criar arquivo .env na raiz do projeto
- Este arquivo é utilizada para armazenar as variáveis que serão reutilizadas na aplicação;
- Com o comando nano, podemos criar e editar um arquivo pelo terminal;
- Ctrl + o: Salvar o arquivo;
- Enter: Confirmar;
- Ctrl + x: Fechar o arquivo;

```
$ nano .env
```

### Acesse o VS Code

```
$ code .
```

### Digitar no arquivo .env

```
PORT = 3008
```
- Variável que contém a porta que o servidor estará rodando;
- Esta arquivo .env não enviamos pro gitHub, pois contém informações sensíveis do sistema;

### Adicionar arquivo .env no .gitignore

```
$ nano .gitignore
```

```
.env
```

### Criar arquivo de exemplo para para as variáveis necessárias da aplicação
- Como não enviamos o arquivo .env para o gitHub, precisamos criar o exemplo das variáveis necessárias da aplicação;
- Este arquivo conterá apenas as variáveis, sem os valores correspondentes;

```
$ nano .env.example
```

- Escreva "PORT =";

### Abrir o arquivo app.js e digitar o código
- Importar o pacote express (servidor);
```
const express = require('express');
```

- Importar o pacote dotenv, gerenciador de variáveis de ambiente;

```
const dotenv = require('dotenv').config();
```

- Instanciar o express na variável app;

```
const app = express();
```

- Setar a porta do servidor a partir do arquivo .env;
- O operador condicional '||' significa 'OU', caso não tenha a variável PORT, será utilizado o valor - 3333';

```
app.set('port', process.env.PORT || 3333); 
```

- Exportar as configurações na variável app;
```
module.exports = app;
```

### Abrir o arquivo server.js e digitar os códigos

- Importar o arquivo app;
```
const app = require('./app');
```

- Importar a porta do servidor;

```
const port = app.get('port');
```

- Testar API com a função listen;
- 1º parâmetro: passamos a porta do servidor;
- 2º parâmetro: arrow function para retornar um console informando a porta que está rodando o servidor;

```
app.listen(port, () => {
    console.log(`Running on port ${ port }!`);
});
```

## Depois de configurar os pacotes e o teste do servidor, vamos criar o comando para executar

### Substituir o comando 'test' pelo comando 'start' na linha 7

```
"start":"nodemon src/server.js"
```

### Rodar o comando no termial com gitBash

```
$ npm run start
```

### Atualizar projeto no gitHub

- Adicionar todos arquivos ao versionamento;

```
$ git add .
```

- Salvar projeto e escrever comentário sobre o processo realizado;

```
$ git commit -m 'configuração do projeto'
```

- Enviar os arquivos atualizados para o gitHub;

```
$ git push
```

### Atualize a página no gitHub e verifique se os arquivos foram atualizados

- Com o projeto no servidor remoto podemos remover os arquivos na nossa máquina;

```
$ cd ..
```

- Comando para acessar uma pasta anterior;
- Fechar o VSCode com o projeto aberto;

```
$ rm -rf projetoBackend
```

- rm (remove): comando utilizado para apagar arquivo
- r (recursive): apaga pastas e subpastas de forma recursiva
- f (force): não pergunta confirmações
- projetoBackend: nome da pasta que contem os arquivos da aplicação 