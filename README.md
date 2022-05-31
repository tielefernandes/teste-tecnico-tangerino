# teste-tecnico-tangerino

passos à reproduzir para montagem de ambiente: 

1 - instalar o node, que eu utilizei a versão mais recente no exato momento ( 16.15.0 LTS )

2 - instalar o java, que no momento está 1.8.0_333

2 - criei o diretório tangerino/testes-automatizados-UI localmente 

3 - inicializar o projeto npm (criará o arquivo packge.json) onde ficarão armazenados todos os pacotes do projeto

	npm init -y
	
4 - criei o arquivo .gitignore com o conteúdo node_modules para não ser monitorado pelo git

5 - nessa etapa eu baixei os pacotes:

	* codeceptjs
	* selenium-standalone
	* webdriverio
	
	( npm install codeceptjs selenium-standalone webdriverio )

6 - inicializando o codeceptsjs

	npx codeceptjs init
	
7 - instalar o selenium 

	npx selenium-standalone install
	
8 - executar o selenium 

	npx selenium-standalone start
		
9 - deixei o selenium rodando em uma aba de terminal e abri um novo  

10 - para criar o arquivo de teste que eu desejo, utilizei o comando

	npx codeceptjs gt / npx codeceptjs generate:nomedoarquivodesejado

11 - para criar a page onde estão os métodos do teste e seguindo o padrão de page objects

	npx codecptj gpo
	
12 - para rodar o projeto use o comando: 

	npx codeceptjs run 

OBS: 
  - optei por armazenar os seletores/xpath em variáveis const para conseguir reproveitá-los caso necessário e para facilitar em eventuais futuras manutenções 

  - para a massa de dados ficar mais dinâmica, utilizei a lib faker para preenhcer os campos propostos do formulário de cadastro de usuário
  
     	npm install faker@5.5.3 --save-dev
     	(utilizei essa versão específica, pois é a que eu tenho certeza que não dá problema)
     
  - os comandos podem ser rodados no bash, mas eu utilizo preferencialmente no terminal do vscode



 



	
