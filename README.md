# FormsCovid

quasar create FormsCovid
    Project Name: formscovid
    Project Product Name: FormsCovid
    Project Description: Formulario web, que replica aplicativo usado para coletar dados de crianças e      adolescentes com intuito de estudar doenças mentais durante a pandemia.
    Author: Renan Jochem
    Pick your  favorite CSS  preprocessador: Sass with  indented syntax
    Pick a Quasar components & directives import strategy: Auto-import in-use Quasar components & directives
    Check the features needed for your project: Eslint, Vuex, Axios, IE11 Suport
    Pick an ESLint preset: Standard (https://github.com/standard/standard)
    Continue to install project dependencies after the project has been created? Yes, use NPM

quasar mode add pwa
    No arquivo *quasar.conf.js*, alterar configuração do objeto devServer, trocando o atributo https de false para true. ( O pwa exige https para funcionar)

Para rodar aplicação, usar o comando: quasar dev -m pwa
    Irá abrir um servidor na porta 8080.