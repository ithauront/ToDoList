# o que é
* uma biblioteca javascript para criar interface de usuarios.
## fundamentos
quando se iniciou a web as paginas eram estaticas, não existia conteudo sendo carregado de forma assincrona ou dinamico. não tinha diferença entre o que um usuario autenticado via e os outrs viam. não tinha acesso a banco de dados. etc. quando começamos a utilizar padroes dinamicos começamos e ainda usamos o padrão SSR hoje estamos migrando para o SPA.
    PADROES DE RENDERIZACAO
* SSR (server side rendering)
    - o usuario requesita uma pagina o servidor recebe a requisição cria todo o html css js e devolve a as informaçoes para o browser carregar enquanto ele esta carregando a tela fica branca.
* SPA (single page aplication)
    - um conceito de como trabalhar com a parte visual da aplicação
    - o que muda com o spa? - o backend não controi mais a pagina. ele so vai retornar para o browser os dados do usuario que são necessarios para serem mostrados em tela por arquivo json e não em html css e js como era antes. isso quem faz é o NODE e ele manda isso para o frontend que é o REACT; ai o react transforma esse json em um html um css e um js e manda para o browser. dessa forma podemos ter varias aplicaçoes front end. uma para moble uma para pc etc, todas elas vao utilizar os dados do backend e vao criar interfaces nativas para cada tipo de usuario.
    - dessa forma temos ganhos em performance por conta do node ser assincrono e poder executar varias tarefas ao mesmo tempo. e tambem de manutentabilidade porque podemos ir mudando coisas em uma frontend sem alterar outras. 

    ## BUNDLERS E COMPILERS
    nem sempre os browser vao suportar a versao mais atualizada do javascript que nos estamos usando. por isso se desenvolceram ferramentas para converter nosso codigo em um java script mais moderno para versoes que o browser sabe ler
    * compiler é uma ferramenta que converte de um formato para outro. por exemplo o navegador não suporta o react e ele converte para uma forma de mais primitiva de js para o navegador entender.
    o compiler mais famoso é o babel.
    * bundler
    quando a gente escreve nossa aplicação em varios arquivos que vao se importando e quando somados montam a nossa aplicação. isso não é algo suportado nativamente pelos browsers, por isso usamos o bundler/
    ele pega todos os arquivos que são importados e converte para um unico arquivo.
    o bundler mais famoso é o webpack.
    ele suporta importar dos mais diversos formatos.
    de alguns tempos para ca os browsers estão comecando a suportar um pouco de importação de arquivo.
    para ver se o browser suporta podemos ir no can i use.com e pesquisar por ec modules e ver os javascript modules via script tag. como a maioria ja esta aceitando as imprtaçoes nos não precisamos mais usar o webpack o que deixa as coisas mais rapido.
    nos usamos para substituir o webpack as alternativas como o vite
    snowpack
    que sao bibliotecas que usam por padrão modulos nativos enão não é necessario o bundling. e o vite ja faz o processo de compiler automaticamente porque ele ja tem seu compiler
    o snowpack é muito parecido com o vite, mas o vite é mais usado.
    ## instalar o node
    para usar o vite precisamos ter o node instalado.
    é interessante ter um version menager tambem para poder mudar entre diferentes versoes do node para seus diferentes projetos com diferentes versoes.
    um dos versions menagers que podemos usar é o N pesquisamos com N node version menager. ai caimos em um projeto do github.
    para instalar ele usa o npm intall -g n
    criar a aplicação como vite, igual aprendemos na aula de react.


    ## PARA ACHAR O PROJETO NA PASTA QUE ESTAMOS TEM A PASTA 011
    # vite
    vantagens do vite é por exemplo o fast refresh. a cadaalteração ele ja da um f5 automatico la na nossa pagina.
    para rodar o vite lembrar que o comando é npm run dev
    vamos então dar uma limpada na estrutura que o vite traz. na pasta surce vamos apagar todos os .css e .svg
    depois de apagarmos temos que ir nas pag jsx e apagar as linhas que importam tudo que apagamos.
    e no app.jxs no return tem uma div html. vamos apagar tudo e escrever um H1 com nosso titulo
    no app vamos tirar tambem o use state
    como o vite carrega essas coisas
    temos um arquivo HTML chamado index. ele é sempre o primeiro arquivo html a ser carregado. e no body dele tem uma id root e tem um script type module. e ele ta pegando esse script do src main.jsx ai o html carrega as coisas. se a gente inspecionar o helloword com o devtools a gente ve que ela vem do id root do html importando o helloworld de outra pagina
    se a gente for no main a gente vai ver o import react, ele é o responsavel pelas funçoes core do react. que são compartilhadas por todas applicaçoes reacts.
    o react dom é a integração do react com a representação do react model com o nosso javascrip chamada de document object model
    ai o get element by id pega o root como react dom e faz dele o elemento raizde nosso html o react vai entao criar nosso html com base no java script todo dento dessa div que é o root
    la no main o react strict mode vai renderizar o que vem dentro da tag dele. no caso nossa pagina app, que vai ser um java renderizando um html 
    # componentes
    é o principal conceito do react
    é desacoplar um pedaco da nossa interface para que isso possa ser repetido em diversos lcais. 
    por exemplo imagina que fizemos um menu de navegação com botoes. queremos esse esse menu em todas as paginas. a gente vai criar um arquivo que vai ser so esse menu, que vai estar na pasta de componentes, e sempre que a gente quiser usar o menu de botoes a gente vai chamar ele importando para a pagina.
    uma das vantagens é que se torna mais facil de dar manutenção porque ele é menor.
    o componente é sempre uma função que retorna HTML o app por exemplo é um componente. ou seja é um arquivo javascript que vai renderizar algo em html. por isso todos os componentes vao ser arquivos .jsx
    vamos criar um exemplo de componente no arquivo post.jsx que esta dentro de src.
    o componente precisa ser exportado para que ele possa ser importado na pagina. existem varias formas de exportar, uma é * apos terminar a função escrever
    export default post
    * e na pagina que se quer importar fazemos
    import post from "./post";
    * e no html colocamos o post como se fosse uma tag html dentro do return <post/>
    * importante para as funçoes o export e o import é necessario usar letra maisucula no começo
    esse ja é o padrão que o vite usa no seu template.
    o interessante é que por exemplo nos podemos fazer multiplus <post/> so copiando e colando essa tag e ele vai trazer tudo que esta na pagina post porem o react não vai aceitar multiplos elementos no return a menos que eles estejam envoltos em uma div.
    como fica a pagina post ea app no default export
    * pagina post 
    function Post() {
    return <p>Post</p>
}
export default Post
    * pagina app
    import Post from "./post";
function App() {

  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
    

  )
}

export default App

named export
não vamos escrever o export default, vamos exportar logo do lado da função a pagina post vai ficar assim
export function Post() {
    return <p>Post</p>
}
e a pagina app vai ficar assim
import { Post } from "./post";
function App() {

  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
    

  )
}

export default App
* o import vai estar dentro de chaves e quando colocamos a chave e damos cntrl espaço a inteligencia artificial do vS code ja nos sugere o nome certo. se não é so colocar o nome da função da pagina que voce exportou.

default export vs named export
# vantagem do default
* voce pode dar um nome para o componente na importação e não na exportação 
a gente escreve
import *Post* from "./Post" 
entre asteriscos essenome é escolhido.
esse nome é independente do nome da exportação.
porem essa vantagem pode levar a erros quando copiamos e colamos e mudamos nome das coisas.
# vantagens do named
o nome importado tem que ser compativel com o nome da função então caso se mude o nome da função vaidar erro e nos vamos entender que temos que mudar o nome da importação.

vamos mudar a exportação do app para named.

## segundo conceito mais importante PROPRIEDADES
as propriedades são informaçoes que podemos passar para componentes.
ao usar um componente não necessariamente o mesmo componente vai ser identico a cada vez porque eles tem informçoes difrentes. um post por exemplo vai usar a estrutura do componente mas pode ser por exemplo duas fotos diferentes, ou de autores diferentes, etc.
então na tag do componente podemos passar atributos. e atributos no contexto de componente no react nos chamamos de propriedade.
ficaria por exemplo na chamada do post na pagina app
<post author="iuri reis" content="azejazbouifabmzoueahzmufbaekj" />
porem como na pagina post não temos especificado as propriedades author e content continua igual. mas podemos mudar isso la na pagina post.
ai no post vamos passar como parametro um unico argumento chamado props. e dentro dessas props vamos criar um objeto que vai ter as propriedades que queremos que sejam mutaveis ( vamos colocar elas em vazio.). nesse caso author e content.
ai podemos ir criando nosso post usando essas propriedades com o .
lembraddo que temos que colocar entre chaves por conta do html. então vai ficar assim
export function Post(props) {
    return ( // esse parenteses tem que ficar aqui na linha do return
        
         <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
         </div> 
    )
}
* agora podemos usar as propriedades para fazer posts diferentes reaproveitando os componentes

## figma
vamos criar uma conta no figma para poder duplicar o layout que iremos usar para o projeto. é um projeto de feed.
vamos fazer tudo dele.
## css
podemos estilizar nossas coisas com o css aqui em nosso projeto no vscode
la em src podemos criar um arquivo chamado styles.css
# importação css
no react nos não fazemos importaçoes de css no html. todas as importaçoes vao partir dos arquivos javascript então nos podemos abrir o app.jsx e la fazer a importação do styles.
dito isso é bom pensar no escopo
# escopo
no react é muito comum a gente cuidar de escopos atralados ao componente. 
ou seja se a gente fizer uma estilização dentro para o componente posts a gente não vai querer que essa estilização afeteoutros componentes. então vamos cuidar do escopo de cada componente e chamamos isso de scoped css.
para isso a gente pode usar uma feramenta que chamamos de
* css modules
o proprio vite ja traz suporte automatico para css modules*
para ter as coisas no escopo iremos organizar um pouco os componentes dentro de uma pasta chamada components. ai dentro da pasta components vamos ter um arquivo css para cada arquivo jsx e para esse arquivo estar unicamente atrelado ao header e não interferir em outros componentes vamos colocar a extensao nele NomeDoArquivo.module.css
quando trabalhamos com css module a gente tenta usar apenas classes. e não id ou outras coisas.
por existir a class no javascript nos não damos class para elementos no jsx. fazemos tudo igual mas escrevemos className. é igual, so muda o nome.
o vscode vai dara opção de importar as coisas de maneira automatica quando voce começar a escrever que vai usar por exemplo o header.
quando a gente importa a estilização na pagina que vai ser atrelada a ele temos que dar um import Nome from './endereço'
so que ela não vai ser lida. o modules vai criar uma hash com um nome codificado e esse nome codificado é o nome que temos que usar na className. e dentro de {}. mas para não ficar usamos o codigo nos podemos dizer quea className vai vir de umavariavel javascript que é styles.header. e isso dentro de chaves vai funcionar. o styles é de onde vai vir (o nome que demos ao importar) e o header é o nome que usamos a no css quando criamos a estilização dentro de uma classe.
o css modules cria essaclasse estranha com esse nome codificado justamente para impedir que se repita uma classe e se dé conflito. porque agora podemos criar uma classe header para outro momento e ela não sera confundade. impedindo interferencia de estilos
o css modules gera uma classe automatica cada vez que a gente importar algo.
# estilos globais
* estilização que nos queremos compartilhar com todos os elementos de tela.
vai ser um arquivo quevamos chamar de global.css
nesse caso não usamos o modules porque ele vai ser compartilhado para todos.
geralmente damos o geral * padding e margin 0 e o box sizing : borderbox o borderbox no boxsizing faz com que os elementos se espremam para caber dentro das margens da tela e não passarem dela.
no body vamos estabelecer a cor de fundo e cor da letra.
podemos criar variaveis no css para nossas cores. vamos fazer uma tag no inicio do arquivo 
:root{
    e aqui dentro vamos colocar as nossas cores
    --white: #fff;
    escrevemos as variaveis assim e se um dia a gente precisar trocar algo vai ficar muito mais facil.
    quando temos varios tons da mesma cor podemos usar numeros de 50 a 900 para classificar eles assil
    --gray-100: #e1e1e6
}
agora podemos no body aplicar as cores assim
 body {
    background: var(--gray-900) ;
 }
 usando a variavel escrevendo var(e dentro dos parenteses o nome que demos.)
 as variaveis criadas no global tambem vao funcionar nos components
 -webkit-font-smoothing: antialiased; isso aplica nos navegadoresbaseados no webkit para ter uma padronização das fontes mais afinadas.
 # fontes
 quando pegamos fontes externas do google. existem links que vem para copiar no html é muito importante que os links preconect sejam a primeira coisa a carregar na sua pagina. então tem que colocar eles la em cima, so abaixo do charset.
 quando estivermos utilizando css é sempre bom utilizarmos unidades de medida relativa. como o ren. isso aumenta a acessibilidade das aplicaçoes.
 ## CORPO DO PROJETO
 muitas vezes vamos separar o corpo do projeto entre o principal e a sidebar. e temos que fazer isso no nosso codigo.
 vamos começar com a sidebar
 # side bar
 vamos fazer um arquivo app.module.css assim teremos um modul de css para o app. assim no app podemos ter o import do global e tambem do app.module.css
 podemos instalar uma instensão chamada css modules que vai facilitar a conexão entre importaçoes.
 como achar os tamanhos no rem
 olhar os tamanhos em pixel no figma
 dividir por 16 vai dar o tamanho em rem. as vezes vai precisar somar varios tamanhos para saber o tamanho total e tudo mais.
 # box-sizing : initial 
 isso faz com que o que adicionamos como um border vai ocupar um espaço a mais e não expremer o elemento. ou seja a imagem tem 4px de largura e vc bota um border de 1px. sem o boxsizing initial a imagem vai passar a 3px e o total vai ser 4. com o boxsizing a imagem mantem os 4px e + 1 do border e fica o total de 5.
 # biblioteca de icones
 phosphor icons
 temos que instalar a bilbioteca com o npm install --save phosphor-react
 as vezes é bom usar uma biblioteca de imagens para não ficar carregando muita coisa e ficar pesada a aplicação.
 depois vamos la onde iremos usar os icones e damos um import {o icone que queremos} from phosphor react 
 ## vamos fazer o componente post
 abrimos no components um arquivo post e um arquivo post.module.css
 no app mudamos o endereço do post para ele achar o arquivo importando dentro do components
 olhando no figma percebemos que o post é dividido em tres partes, o cabeçalho, o conteudo e a parte de comentarios. assim a gente pode mosntar a estrutura de html dele, depois de css e por fim o funcionamento.
 para ser mais facil alinhar a foto do lado das informaçoes da pessoa vamos vazer uma div envolta da foto e das informaçoes e outra div so para as informaçoes. se não daria mais trabalho para alinhar. apos toda a div do author nos vamos botar a informação de tempo em que foi publicado. então fecha a div do author e abre a informação do tempo. para usar as inforaçoes do tempo usaremos a tag especial do html <time dateTime='2023-11-03 11:26:32'>Publicado ha 1h<time />
 # time 
 essa tag permite fazercalculos de tempo para que o tempo seja modular e se addeque ao tempo real. iremos passar o atributo a tag time chamado dateTime='aqui dentro podemos colocar a data de publicação real' (por ser react não usamos hifen e a segunda palavra vemem maisucula. isso muda nos atributos html nativos para quando eles sao usados no react) assim vai aparaecer o tempo exato para o leitor de acessibilidade, mas para a interface aparece apenas o aproximado. é legal tambem colocar um title com o horario exato de publicação. assim se o usuario passar o mouse por cima da tag ele vai saber o horario exato. todas essas coisas no JS vao ser substituidas por informaçoes mutaveis.
# estilizar os post
o post é espaçado um do otutro mas esse espaçamento so deve existir quando temos mais de um post uma tecnica para isso é usar o sinal de mais
.post + /post {
  e qaui damos a estilização para o caso de ter mais de um post, essa estilização so vai ser aplicada quando se existe mais de um post.
  isso aqui vai estilizar todo o post que antes dele tenha mais um post. a gente pode fazer isso de outras formas, coo o first child, lastchild e etc. mas esse jeito é simples e eficiente.
}
# como colocar espaço no fim de uma linha
 para colocar um espaço no html usando jsx temos que fazer assim
 {'    '} dentro de chaves fazemos uma string com espaço

 # uma forma de estilizar por tag
 temos que tomar cuidado ao estilizar por tag e não por classename. porque podemos ter varias tags iguais dentro da pagina. por isso usamos no caso do header essa sinal de maior
 .post > header 
 assim o css vai estilizar apenas a header que estiver no primeiro nivel dentro do post. então se a gente fizer uma header dentro de um article ele não vai pegar. so as que estao diretamente dentro do post.
 # como separar o author info em duas linhas
 tem duas formas, podemos fazer no .author um display flex e flex direction column. assim força a cada um ficar em uma linha
 ou estilizar o .authorInfo Strong{} e o authorInfo span{} e colocar display block em um deles ou nos dois.
 # sobreescrever o focus
 quando tamos tab o navegador vai selecionando items e dando o focus neles. isso da uma borda branca para cada elemento. para sobreescrever isso vamos diretament no arquivo global para fazertudo de uma unica vez com o boxshadow podemos colocar a cor que quisermos no focus.
 # visibility
 é possivel esconder elementos ate que esteja com focus. vamos dar visibility hidden no botão para ele so aparecer quando o usuario tiver digitado algo na text area.
 poremdessa forma o espaço continua ocupado, o box não vai diminuir de tamanho pq o botão sumiu.
 para resolver isso vamos fazer uma footer e colocar envolta do botão e colocar o hiden no footer. assim toda a div vai sumir e vai diminuir o tamanho dele. outra forma de resolver seria usar o display: none funciona mas não é bom para acessibilidade.
 # focus-within
 para o botão reaparecer na hora que estiver focado em alguma outra coisa vamos usar o focus whitin.
 o que o focus whitin faz é o seguinte o codigo por exemplo é esse
 .commentForm:focus-within footer {

}
aqui estamos dizendo que se houver um focus no commentForm nos aplicaremos a estilização no footer. 
essa estilização vai estar dentro dessas chaves.
o focus vai funcionar em qualquer elemento que estiver na comentForm e não so no textarea. por isso que com o focus no butão ele tambem vai ficar visivel.
# butoes
* todo botão que é apenas um icone é interessante coocar um title nele por conta da acessibilidade.
* no css para o butão ser apenas o icone a gente pode colocar um background transparent nele.
porem se dermos um tab ele vai selecionar com a uma borda um pouco maior.
isso acontece porque a altura de um botão não é definida pelo conteudo dele. a altura do botão é definda pelo lineheigh. dudas formas da altura ficar do tamanho do conteudo quando é icone é coocar um line heigth 0 ou um font size 0.  assim a borda fica colada no icone.
# ::before
no css podemos usar o ::before para adicionar algum elemento logo antes de algo que esta no html. como colocar um pontinho de separação antes do span como fizemos no comment.module.css
o befor funciona como se estivessemos criando um elemento dentro do span, que vai aparecer logo no inicio dele. e ai no before podemos colocar o que quisermos.

# MOMENTOS CHAVE PARA CRIAR UM COMPONENTE
1) quando algo repete muito em tela. por exemplo os posts
2) quando voce consegue tirar algo de um componente maior sem que aquee componente maior pare de funcionar.
quando um componente vai ser repetido porem precisa ter alteraçoes nos vamos colocar propriedades nele. ou seja dentro da tag nos vamos escrever algo e esse algo podera ser interpretado pela maquina. no caso do avatar vamos usar o hasBorder={true or false}
o nome das propriedades somos nos que escolhemos, e dentro das chaves o que enviamos. no caso de bolleanos tem que ter aschaves porque ele não existe no html,se nao o html vai interpretar ele como um texto. colocamos essa propriedade dentro da pagina que iremos usar, no caso o comment. e agora no componente avatar nos temos acesso a propriedade hasBorder usando o props.hasBorder.
agora vamos no avatar.modules.css e criamos o .avatarWithBorder{} agora no css vai ter duas opçoes o com a borda e o sel a borda.
agora usamos um ternario no component JSX avatar. se o avatar tiver a propriedade has border nos mostramos o withborder. se não mostramos o sem borda.
porem agora vamos ter que colocar a propriedade hasBorder em todos. com o react não precisamos escrever o true quando é true, porque isso ja é o default dele.
mas podemos faer ainda melhor. podemos colocar que o padrão de todos os avatares seja hasBorder={true} para não precisarmos passar essa propriedade a menos que ela seja falsa.
podemos fazer isso la no avatar na função antes do returno fazemos uma constante dizendo 
const hasBorder = props.hasBorder ! false 
isso quer dizer que se não for falsa ou seja se for true ou não enviada, significa que ele tem borda. então o has border ali no terciario vai entender e vai fucnionar. ficaria assim
export function Avatar (props) {
   const hasBorder = props.hasBorder != false;
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} />
          )
}

Mas podemos melhorar usando o conceito de desetruturação
a desestruturação é fazer uma ordem inversa das coisas
imagina que temos uma 
const user = {name: iuri};
uma cont usuario com um objeto de nome iuri. 
se quisermos pegar o nome dessa const podemos fazer uma desestruturação que funciona assim
const {name} = user;
aqui a const vai arrancar a propriedade nome do objeto que é o usuario.
podemos usar a desestruturação nas propriedades enao podemos colocar no lugar de props um objeto. e assim definir valor defalt para essas propriedades.assim ao invez de usar o props no argumento a gente usa apenas os elementos do props que queremos pegar e damos um default para eles se quisermos.
fica assim
export function Avatar ({hasBorder = true, src}) {
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} />
          )
}
a vantagem da desetruturação é poder usar default.

## responsividade
vamos fazer a aplicação aceitar os tamanhos de tela de forma que fique bom em um celular, ou em um monitor diferente, que ela responda as alteraçoes.
para isso vamos no css do app app.modules.css
e aplicamos uma regra: @media (max-width: 768px) {
    grid-template-columns: 1fr;
}
e dentro das chaves vamos escrever a nova tela. isso quer dizer que quando a imagem for menor do que 768 que é um tamanho meio basico para ja ter uma tela de pc. nos vamos aplicar regras diferentes; nesse caso a regra que damos é que vai ter uma so coluna. ai fica uma leitura melhor. aplicamos isso no wrapper pq é ele que engloba toda a tela com excessao do header.
uma vantagem de usar o rem em tudo é que quando o usuario muda o tamanho de algo fica responsivel e ai se a gente mudar algo no ambiente moble ele vai mudar tudo junto. então a gente muda so o fontssize e ele muda para tudo.
# a partir de agora vamos começar a dar os javascript
quais as coisas que sao modulares no nosso post
author {avatar_url:'', name: '', role:''} 
publishedAt: Date
content
então vamos criar um array de post com essas informaçoes la no app.
nos criamos um post estatico mas pensando um pouco em como seria se ele viesse de uma backend.
# iteração
então nos vamos usar as propriedades desse array nos lugares que devem ser usadas usando a variavel que criamos chamada posts.
vamos então percorrer os posts. uma das maneiras de fazer é usar o forEach e com ele percorrer a variavel post em cada post.
ficaria assim
{post.forEach => {
  < Post/>
}}
ou seja para cada post vamos usar uma função que vai mostrar o componente Post em tela.
porem isso não funciona porque o que o forEach faz?
# forEach
o metodo forEach percorre um array, porem ele não tem nenhum retorno. por isso ele não funciona.
então uma 
const algo = post.forEach(post => { return 1})
o algo aqui sempre vai ser void. porque ele declara mas o foreach não vai retornar nada dele.
então nesses casos temos outro metodo para usar
## map
o map é semelhante ao forEach ele tambem percorre um array, porem ele retorna algo dele.
então para iteração nos vamos usar sempre o map.
vai ficar assim
 {posts.map(posts => {
              return (
                <Post 
                
                />
                )
              }) 
              }
agora dentro do post vamos enviar as informaçoes do post, que pegamos la na const.
vai ficar assim
{posts.map(post => {
              return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}

              />              
              )
            
            }) 
              }
agora nos podemos ir na pagina do post e no export Post a gente pode colocar o props entre parenteses que ele ja vai pegar as propriedades. agora é so ir na pagina de post e fazer ele usar essas props (que vai ser a proxima aula.).
para que depois de publicar o comentario o que foi escrito suma da caixa de texto temos que escrever a dentro da função no fim que o target value é = "" uma string vazia. isso é um jeito de fazer e funciona. mas não é o melhor. isso porque não iremos usar a programação imperativa
programação imperativa é dizer ao software o que deve ser feito. damos exatamente o passo a passo do que deve ser feito. é o tipo de programação mais comum.
fazer isso é imperativo
no react nos usamos muito a declarativa. não quer dizer que a imperativa esta errada.
na programação declarativa nos declaramos qual o resultado nos esperamos, ao invez do resultado nos falamos quais as condiçoes para ter o resultado final.
por exemplo em uma receita de bolo ao invez de dizer ligue o forno a 180 graus, nos dizemos, o forno precisa estar a 180 graus.
quando a massa estiver pronta eu posso retirala do ponto. 
diferente daimperativa, que devemos dizer que colocamos a massa dentro de uma forma e dentro do forno.
enão nao vamos mais acessar o texto da text area pelo evento. vamos refazer o negocio todo do post.*
novs vamos criar um novo estado nexCommenttext. dentro do estado nos começamos armazenando o texto no mput nesse caso uma string vazia. agora na text area vamos dar um onChange para monitorar as mudanças dela.
## erros
ate o momento o jeito que fizemos nossa aplicação resultou em dois erros que não atrapalhou  aplicação de rodar. agora vamos entende-los e resolve-los. esses erros tem a ver com os childs que devem ter uma key propr unica.
os childs que estao em uma lista devem ter uma key prop. no caso a lista de post. o map faz essa lista. então no post vamos dar uma propriedade de key. e dar qual é a informação unica de cada um dos items da minha lista. nessse caso vamos usar o post.id que nos tinhamos criado la no array.
o segundo erro era da mesma natureza mas estava em post. e la tinha uma logica de if else. então temos que pegar o que vai aparecer, que no caso é o <p> e colocar o key nele e nos outros cque vao aparecer. colocar em ambos os resultados. não colocamos na ancora, apenas no primeiro elemento apos cada return. como nesse caso o contnt não tem id a proxima coisa que dificilmente ira se repetir é o conteudo da linha então usamos isso. fica asssim:
<div className={styles.content}>
               {content.map(line => {
                if (line.type == 'paragraph'){
                    return <p key={content.content}>{line.content}</p>
                } else if (line.type == 'link'){
                    return <p key={content.content}><a href="">{line.content}</a></p>
                }
               }
                )}
            </div>
em baixo no post tambem temos uma lista de comentarios e temos que dar uma key para eles tambem. toda lista tem que ter key.
no dev tools nos não vemos os componnentes do react, porque ele gera um html então é isso que nos vemos. para ver os componentes do react nos podemos instalar uma extenssão chamada react dev tools.
* porque a key é unica?
- existem 3 momentos em que um componente é renderizado novamente no react, ou seja a interface é recalculada.
1 sempre que alteramos algo que esta com set, ou seja mudamos o estado.
2 quando a propriedade altera, ou seja a propriedade de hora ou de autor mude, o post vai renderizar de novo
3 quando um componente pai renderiza novamente. então todos os filhos tambem vao renderizar novamente
* logo se vc alterar um pai que tenha diversas listas ele vai renderizar tudo de novo, o que vai tomar muito tempo. por isso a key. assim o react não vai renderizar tudo de novo, ele vai comparar as keys antigas com as novas e vai renderizar apenas as dos possiveis novos ou alterados. por isso que a key é unica. se ela pudesse se repetir ele poderia se atrapalhar.
* porque não devemos usar o indice do array?
imagina que a gente troca de posição o item 5 do array com o item 3 o react deveria renderizar de novo. porem voce mudou os items de posição mas o indice continua o mesmo veja:
cont post = [1,2,3,4]
isso no index fica assim
[0,1,2,3]
entao vomo os indices nao mudam de posiçao e o react vai ver coisa diferente em cada indice ele vai reconstruir tudo do zero, sem nercessidade porque ele poderia apenas trocar as coisas de lugar. por isso tambem que nqao é bom tambem usar numeros aleatorios. mesmo atualizando a lista,  da,dp f5 adicionando ou retirando coisas esse valor nunca pode mudar.


## fazer a feature de deletar comentario
temos ja o butão de delete. podemos colocar nele um evento de onClick nesse evento vamos chamar uùa função 
para conseguir deletar o comentario nos precisamos remover ele la da lista de estado de comentarios que esta no post. porem como as duas coisas estão em componentes diferentes não podemos chamar essa função setComment la na pagina do comment, precisamos criar uma relação entre os componentes.
MUITO IMPORTANTE 
a unica forma de comunicar um componente com o outro é atravez de suas propriedades.
la no post vamos criar uma nova função chamada deliteComment e ela vai recer qual comntario ela quer receber e o que vamos fazer, no caso deleta.
e nos podemos passar como propriedade uma função então la no comment do post vamos passar como propriedade a função deleteComment podemos dar o mesmo nome, porque estamos criando a propriedade. agora la no commentario podemos pegar no props do export, e colocar o deleteComment. e agora podems passar essa função dentro do handleDeleteComment e parametro dela podemos passar o id ou o que usamos para identificar o comen,tario que queremos exclir. 
qundo fazemos isso o que ele faz é juntar a primeira coisa com a segunda, no caso vai juntar a função de ecluir com o id que quer excluir e assim vai escluir esse comentario.
o componente que armazena o estado é o componente que precisa enviar as funçoes para os outros.
na real o que o componente filho faz é so avisar ao pai que ele tem que executar essa função. ai o pai vai executar a função que ele tem, alterando as informaçoes armazenadas no usestate dele.
é boa pratica ao enviar uma função que vai ser disparada apos interação com o usuadio como propriedade o ideal é começar o nome com on. entãp vai ficar onDeleteComment não muda o nome da função e sim da chamada da propriedade.
# agora deletar realmente o comentario.
na função deleteComment passamos como argumento o comments, ou o id ou o que identifica o comentario que iremos excluir, nesse casoestamos identificando pelo content. e dentro da função vamos usar o setComments para acessar o estado. e temos que passar qual o vamor que nos queremos que fique contido no array de comentarios apos a remoção do comentario. ou seja a função set comments não recebe um "adicionar comentario" ou "remover comentario" ela so atualiza a lista para um novo valor. dada a imutabilidade.
então nos precisamos criar uma nova lista sem o comentario que queremos tirar. vamos fazer uma const
const commentsWithoutDeleted e usar o filter. o filter vai percorrer a lista e se o que retornar true ele mantem na lista e o que retonar false ele remove da lista.
     function deleteComment(commentToDelete) {
            const commentsWithoutDeletedOne = comments.filter(comment => {
                return comments !== commentToDelete
            })
            essa consta ai então vai percorrer o comment e vai manter na lista todos que forem diferentes do commentToDelete que é o argumento que eu passei que é o comentario que eu auero deletar.
            e ela vai gerar uma nova lista que é o que iremos passar para o setComment é e essa lista que sera atualizada.
### formulario
da forma qie esta o formulario pode ser validade e enviar um comentario vazio. isso pode dar problema/. uma forma de contordanr isso é no text area colocar a propriedade required. ai se a gente tentar validar vazio ele vai pedir pra preencher.
mas podemos melhorar.
temos a propriedade onInvaid={}
ela faz o seguinte
ela é chamada sempre que o o html tenta efetuar algo que é invalido. como por exemplo dar um submit vazio. e nele podemos passar uma função 
dentro dessa função o 
event.target.setCustumValidity('')
vai nos permitir de passar a mensagem que queremos para o usuario de porque não foi validado.
porem se depois a gente nao setar de novo o coment pra o original ele vai ficar sempre ando erro.
então para funcionar vai ficar assim
  function handleNewCommentInvalid() {
        event.target.setCustumValidity('Esse campo é obrigatorio')
        
    }
    e  ,o handle new comment change que é oque o onchange do text area chama nos temos que voltar a validity para o nada então o handel comment change fica assim
      function handleNewCommentChange() {
        event.target.setCustumValidity('');
        setNewCommentText(event.target.value);
    }
    Alem disso podemos evitar que o usuario clique no botão de publicar caso o campo não esteja preenchido dessa forma:
    nos podemos ir no button e dar um disable={newCommenttext.length === 0} ou seja ele vai estar desabilitado qudnao o tamanho do texto digitado for igual a zero. porem isso so vai dar um desable. o hoover vai continuar mudando a cor quando aparece por cima. podemos mudar isso no css
    .commentForm button:disabled {
    opacity: 0.7;
}
coloco o disable e nesse caso do disable vai ficar com uma opacidade maior. indicando que não esta fucnionando.
e no hoover a gete pode botar para ele so funcionar caso não esteja disable assim
.commentForm > button:not(:disabled):hover {
    background: var(--green-300) ;
    
}
assim ele vai saber que so vai pra mudar se não estiver disable.
uma ultima melhoria:
tirar o disable do newcomment.lenghth === 0 do butão footer.
vamos antes do return e criamos uma variavel. e essa variavel que vai ser o conteudo do disable.
const isNewCommentEmpty = newCommentText === 0
colocar o isNexCommentEmpty la no disable ao invez da "equação"
isso é clean code.  deixar o codigo mais facil de manutenção e mais cimpreensivel.

## likees
vamos usar o useState setar como 0 
fazer uma função qu pega o state original e coloca mais 1 
chamar essa função no click. 
e no lugar do numero de likes a gente vai chamar o state.
e ta feito.

os eventos do react como onClick, onSubmit etc esperam uùma função como valor, e não a execução de uma função . se a gente colocar algo para executar, mesmo que seja um calculo de +1 ele vai rodar isso imediatamente quando carregar o programa. e ai vai dar erro. se a gente colocar a função mas não a execução dela ele vai executar quando clicarmos.
a outra forma de a gente escfrever tudo o processo dentro do onclick e não fora abrindo uma const seria abrir uma arrow function dentro do onclicl ai funcionaria.

# estado
quando usamos o estado a gente pode tentar querer qtualizar ele logo apos setar ele. no caso de por exemplo colocar varias vezes o mesmo codigo repetindo pra ele rodar varias vezes. isso não funciona porque a cada linha de codigo ele não vai pegar o valor atualizado mas sim o inicial. 
como resolver isso.
uma forma é armazenar o estado em uma variavel e assim a gente pode atualizar e ele vai mudar.
e se na proxima a gente chamar de noo a variavel colocando +1 elez vai atualizar de 2 em dois.
essa forma foi a que a gente usou nos likes.
a outra forma é ao invez de usar por exemplo o setCont mais um a gente passe uma arrow function.
(likeCont) => { return likeCount +1}
dentro da arrow function a gente acessa o valor ais recente do estado. usando isso como argumento.
e assim podemos  chamar essa função duas vezes e ela atualiza de dois em dois.
ensinamento:
sepre que voce for atualizar uma informação e essa info depende do valor que ela tinha anteriormente, ou seja depende dela mesmo, é sempre legal fazer atualização usando o padrão de funcçoes, ou por uma conts ou por uma arrow.

## typescript
typescript é um conjunto ferramental que serve para transformar a tipagem dinamica do java script em uma tipagem estativa. ou seja ao declararmos que um array é de string não podemos mais mudar ele para number. no javascript como a gente não declara o tipo do array; ele se faz pela inferencia das informações que estao dentro, se a gente mudar o tipo da informação mudamos tambem atipagem do array.
a tipoagem dinamica é boa por abrir portas , mas tambem pode leva a muitos erros
alem disso
o typescript ajuda muito o momento de desenvolver a aplicação porque ele traz inteligencia para o editor de codigo. ele te mostra logo onde esta tendo os erros.
typescript n,ao é mais opcional. ele é tao usado que agora é ecenssial.
# migrar o projeto para typescript
é possivel modificar nosso projeto para o typescript , mas tem muita configuração a fazer. 
é preferivel criar um novo projeto em typescript e copiar o que nosso projeto para ele.
vamos abrir o terminal e ir na pasta anterior a pasta do projeto e dar um npm create vite @latest
e criar um novo projeto com outtro nome
vamos selecionar react e react typescript.
entramos na pagina damos um npm install para instalar as dependencias.
ai abrimos dois vs code. um com o projeto react e outro com o typescript e vamos copiando e colando as coisas fazendo as alteraçoes necessarias.
Primeira coisa a se notar é que o typescript traz alguns arquivos novos na base dele que o outro projeto não trazia.
o tsconfige.json o tsconfig.node.json e na pasta src tem o vite-env.d.ts
vamos remover todos os arquivos da pasta src que não sao o vit-env.d.ts
abro os dois package.json e copio as dependencias diferentes do projeto antigo no novo.   cuidado com as virgulas no fim das linhas.
das dev.dependencies não precisa coiar nada.
* index.html
no index temos a parte de fontes. vamos copiar os dois links preconect e colamos no mesmo lugar que elas estao no antigo projeto. tambm o link pra importar a fonte e colamos antes do title da mesma forma que esta no antigo projeto.
* src
a ultima coisa que precisamos fazer é copiar os aruivos da pasta src na pasta src do typescript.
copiamos todos einclusive as pastas dos componentes e assetss. podemos agora inclusive fechar o projeto anterior. eu vou copiar tambem esse md react avançado para ser mais simples de continuar editando. então todas as coisas de typescript atualizadas a partir daqui vão estar la. assim como tudo que ja escrevi aqui até agora.
* renomear
vamos renomear todas as extençoes jsx para tsx. pq não é mais javascript e sim typescripit. vamos renomear  TODOS OS JSX
da para no terminal mudar tudo de uma vez. mas vamos fazer manualmente. no terminal acho que nos olhariamos tudo que tem *.tsx e dariamos um comando para mudar eles para *.jsx
.
o vscode começa a pontar logo uns erros. vamos arquivo por arquivo vendo os erros que estao acontecendo e vamos corrigindo.

so para informação eu tentei rodar ele agora e deu esse erro de await sinc

file:///mnt/c/users/queis/OneDrive/documentos/documentos%20pc%20acer/documents/testeVite/01-fundamentos-ts/node_modules/vite/bin/vite.js:7
    await import('source-map-support').then((r) => r.default.install())
    ^^^^^

SyntaxError: Unexpected reserved word
    at Loader.moduleStrategy (internal/modules/esm/translators.js:133:18)
    at async link (internal/modules/esm/module_job.js:42:21)

    vamos ver se revolse até o fim do projeto. mas acho que não tem nada a ver com as alteraçoes que iremos fazer nos arquivos e sim instalaç#ao de modulos.


# correção de erros 
* main
no main so tem o erro do cocument get element by id
o erro é que estamos importando um documento que pode não existir. o que não é o caso porque o root existe. e esse erro so se concretizaria se a gente removesse o root do index. o que não vamos fazer.
so colocarmos um ! depois do parenteses fechado do root diemos ao typescript que é pra confiar em nos que o elemento vai estar la. ai o erro desaparece.
* app tsx
não tem nennhum erro.
* css 
não vai dar erro porque eles não tem a ver com o typescript.
* vamos para os componentes
* post
- datefns
  ele diz que não consegue achar esse modulo. isso porque a gente copiou as linhas para as dependencias mas não demos npm instal. vamos dar esse npm instal agora. no terminal
  instalei e esse erro ja saiu.
  tambem o run dev ja começou a  funcionarr
- author publishedat, content no export funtion
   o erro é porque eles estao co o tipo any
    para resolver isso podemos fazer interfaces antes do esport funcion para dizer o tipo deles. porem não vai funcionar porque dentro de objetos não podemos definir a tipagem de cada tipagem do objeto. nos temos que falar qual o tipo do objeto inteiro. então não podemos definr o tipo para o author outro para o published e etc.
    e sim um tipo para todo o objeto da desestruturação.
    então vamos criar uma segunda interface chamada PostProps, porque são os props do post ou seja nossa desmaterliazação
    e nesse vamos dar o formato de cada um dos props quie iusamos e damos como formato a interface que criamos para cada um ou então definir um objeto para cada postprops.
    e agora vamos no fim do objeto e colocamos : postprops e o erro vai sumir. fica assim:
    interface Author {
    name: string;
    role: string;
    avatarURL: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content : string;
}

export function Post({ author, publishedAt, content }: PostProps)

- erros nas funçoes handle
  o event aparece nas funçoes, mas o typescript não reconhece o event.
  todas as funçoes que vem de event o html passa para elas como primeiro parametro o evento. então no typescript a gente pode deixar isso explicito e colocar o event nelas no primeiro parametro.
  mas o evento continua dando erro porque ele esta como any. 
  temos ver de onde é que esse evento é disparado. por exemplo do formulatio no caso de um onsubmit. ai colocamos la :FormEvent a gente clica na sugestão porque ai ele vai importar do react e vai parar de dar erro. uma forma de saver que tipo de event é é pesquisar o evento por exemplo onChange react typescript form event coloca isso no google que eles cao dizer que tipo de evento é.
  as vezes precisamos avisar para o typescript como o evento é disparado, talvez não pelo imput e sim por alteração e tudo mais, e para avisar isso vamos usar os generics do typescript que são parametros dele.
  então colocamos isso entre <> e dizemos onde o evento aconteceu <HTMLTextAreaElement>
  na funcção comenttodelete temos que dar qual é o tipo do negocio a deletar. é uma string

  - content
  ele diz que o map não é uma string. porque erramos la em cima e colocamos como string mas na verdade é um array. vamos voltar e corrigir para array.
  fazemos uma interfaze para o content. e damos as tipagens de tudo que vai ter la dentro. no caso do type como nos sabems que ou vai ser um paragraph ou vai ser um link nos podemos colocar so essas opçoes usando as aspas eseparando as opçoes possiveis com a barra reta |
  ai no content vamos passar que vai ser um Content[] colocamos o simbolo do aray do lado para sabermos que vai ser um array com varios objetos com o formato que demos na interface.
  com isso some o problema do map e do  .line, porque agora é possivel fazer isso em um array.

  * comments
  na pagina de coments tambem temos erros.
  é o mesmo erro do postprops temos que criar a interface para acertar isso. da mesma forma.
  mas tem uma tipagem de funcção para colocarmos a função na tipabem vamos usar isso (aqui colocamos o que ela recebe de parametro e o tipo dele) => e escrevermos o retorno dela. se não retornar nada colocamos void. igual uma arrow. e não escrever function fica assim:
  interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}
no nossz minha que ttrata do avatar estamos usando as propriedades aque tem no componente avatar. e la não tem um alt por isso o typescript não entende o que é o alt que escrevemos la da alternativa caso o link falhe.
vamos enão criar uma interface dentro do componenet avatar .para o avatar e passar as propriedades que vem la in,cluindo o alt e podemos ate passar na função o alt. colocamos o props no export e fica tudo certo. ai o comment e o avatar vão comunicar bem.
com isso acabam os erros no comment.tsX
porem essa alteraçao vai dar erro no post. pq la no post a gente nao declara as propriedades hasBorder e alt.4para não dar esse erro a gente pode tornar as propriedades hasBorder e alt como opicional colocando um ponto de interrogação apos ela la no interface do avatarProps. a interrogação fica antes do :
- sidebar
não tem mais nenhum erro
terminanmos de adaptar tudo.

+
# extensão de interfaces
é bom lembrar que uma tag como uma imagem por exemplo pode ter muito mais propriedade do que a alt src e hasBorder que a gente fez. e para permitir que outras propriedades sejam usadas a gente tem que permitir elas na nossa interface.
porem imagina o trabalhão que seria fazer isso para todas as propriedades de todas as tags que usamos interface.
para não fazer isso temos que entender o seguinte
quando temos um componente e o retorno dele é uma tag html como img ou button ou qualquer outra. e queremos permitir que os outros componentes que chamem esse componente possam alem de ter as propriedades que criamos eles possam ter tambem todas as outras propriedades ou atributos que uma img ou button pode ter por exemplo nos temos que usaor o que chamamos de extenção to typescfript.
quando nos importamos do react podemos importar por exemplo o atributo imHTMLAtributes. se a gente usar importar ela a gente pode clicar segurando cntrl no imgHTMLAtributes e ele abre uma nova pagina com uma interface com todas as propriedades ou atributos que uma imagem pode ter alem de estender uma outra prorpiedade chamada htmlatributes ou seja podemos usar tambem tudo que esta nessa.
então como usar isso
# uso da extenção
vamos importar os atributos html do img por exemplo.
ai no nosso avatarProps nos vamos escrever extends ImgHTMLAtributes. assim o nosso avatar props vai tambem pegar todos os atributos do imgHTML e por consequencia todos os do HTML que estao extendidos juntos. porem olhando la na pagina que abriu do img html vemos que tem um <t> ou seja ele espera que a gente passe um generic para dizer qual elemento vai usar isso. então temos que passar o HTMLimgElement agora podemos limpar as tags que a gente tinha colocado na nossa interface que ja existem na interface global no caso deixamos so a hasBorder. vai ficar assim:
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
Porem ainda tem um poblema.
na export function estamos usando os propos apenas que queremos e não todos. então se em outro componente fossemos usar um outro props a gente teria que ir la na export function e colocar uma nova coisa como por exemplo um title e tambem passar ele noas propriedades da imegem. e teriamo que repetir isso para todos as propriedades da imagem. então como fazer?
# restOperator
quando fazemos a desestruturação damos as propriedades que queremos passar ualgo como a hasBorder True e para pegar todas as outras propriedades usamos o rest oparator.
que é o ...props ele  vai nos dar todas as props que usarmos em algum momento, mesmo que a gente não declare elas na função export nem nos argumentos nem dentro delas.
ou seja, dentro do objeto props vao estar todas as propriedades que nos não declaramos que no caso é a hasBordes.
então podemos apagar a src e o alt, title etc la, tudo que não seja hasBorder e colocar {...props} assim estaremos declarando o objeto props usando o spread. o restOperator nome vem de tudo que resta que não foi declarado.

# erro extra
ainda ficou um erro la no app.tsx que foi o content dizendo que string não esta assing.
o que acontece é que o typescript esta reconhecndo os tipos como string, qualquer string e nos falamos que era so paragrafo ou link.
podemos otimizar isso de varias formas. mas talvew a melhor para adcionar inteligencia seja adicionar uma tipagem ao post parafalar exatamente como q gente quer que ele seja. podemos criar uma interface no post no app para isso.
nos podemos copiar la no post criar uma tipagem post com o conteudo da postprops na postpros a gente coloca apenas a post e usamos o post antes de todos os lugares que usamos a postppros e então podemos exportar a post para o app. e la no app vamos importar o post de dentro do componento post. porem ai da um erro porque o ome da interface é igual ao nome do componente. ai podemos solucionar iescrevento import type { Post } form './components/Post mas o nome continua ducplicado o que é ruim. então o melhor é renomear a interface para outra coisa como postType. e não precisamos criar duas importaçoes para o post. podemos colocar o post e o posttype from post. assim
import { Post, PostType } from "./components/post";
e agora dentro do array posts a gente diz que o formato dele precisa ser postType. com colchetes para ele ser um array assim:
const posts: PostType[] = [ inicio do array post

  . aparece outro erros como por exemplo o id. então vamos la na interface postType e autorizamos id number.agora o ultimo erro que ao invez de enviar no return o author id e etc vamos enviar o post inteiro assim post={post}. fica assim:
  <main>
             {posts.map(post => {
              return (
              <Post 
              key={post.id}
              post={post}

              />              
              )
            
            }) 
              }
assim sempre que adicionarmos novas informaçoes no componente post ele vai enviar tudo de uma vez, não precisamos alterar a cada vez o retonro com o envio de uma nova propriedade.

