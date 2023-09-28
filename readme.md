# Passo a passo da API

1. Criar a pasta.

```
$ mkdir API_NODEJS_2BM
```

2. Acessar a pasta.

```
$ cd API_NODEJS_2BM
```

3. Criar um readme.md para documentação do seu trabalho.

```
$ touch readme.md
```

4. Iniciar o gerenciador de pacotes Node.

```
$ npm init -y
```

5. Acessar o VS Code

```
$ code .
```

6. Instalar os pacotes Node

```
$ npm i express nodemon dotenv
```

7. Criar o arquivo .gitignore

```
$ nano .gitignore
```
* Use para ignorar o arquivo node_modules

8. Criar a estrutura de arquivos e pastas

```
$ mkdir src
```

9. Criar arquivo dentro do src.

```
$ touch src/app.js
```

* Esse vai ser importante para a configuração da API.

```
$ touch src/server.js
```

* Esse é o arquivo responsável em receber as configurações da aplicação e rodar a API

10. Criar pastas dentro do src.

```
$ mkdir src/config
```

* Pasta para gerenciar a conexão com o banco de dados

```
$ mkdir src/controllers
```

* Pasta para gerenciar as requisições das rotas e conexão com banco de dados

```
$ mkdir src/routes
```

* Pasta para gerenciar as rotas da API

## Enviar a estrutura do projeto 

1 Inicializar o gerenciador de arquivos .git

```
$ git init
```

2 Informar seu nome e email.

```
$ git config --global user.name "FIRST_NAME"
```

```
$ git config --global user.email "EMAIL@EXAMPLE.COM"
```

3. Verificar arquivos que serão enviados ao gitHub

```
$ git status
```

4. Adicionar todos arquivos ao versionamento

```
$ git add .
```

5. Depois analise se realmente adicionou os arquivos.

```
$ git status
```

6. Salvar projeto e escrever comentário sobre o processo realizado

```
$ git commit -m 'estrutura do projeto'
```

### Só é preciso criar um repositorio no git hub para armazena-lo

7. De volta ao terminal, executar o comando para definir a branch main

```
$ git branch -M main
```

* Informar o repositório que queremos enviar os arquivos

8. Colar a URL do seu repositório copiada

```
$ git remote add origin https://github.com/GustavoHSpengler/Constru-o_de_API.git
```

9. Enviar os arquivos para o gitHub

```
$ git push -u origin main
```

### Atualize a pagína no gitHub e verifique se os arquivos foram enviados.

10. Com o projeto no servidor remoto podemos remover os arquivos na nossa máquina

```
$ cd ..
```