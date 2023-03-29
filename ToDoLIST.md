# projeto
vamos fazer um aplicativo de lista nele vamos ter uma unica tela com a seguites coisas
* layout
- um header com o nome da lista V
- um text area para digitarmos a tarefa V
- um botão para a criação da tarefa V
- um "navegador" com a quantidade de tarefa criada e a quantidade de tarefa feitas. V
- uma area com duas opões
    1 caso não tenha nenhuma tarefa vamos mostrar um aviso de não tem tarefa V
    2 a partira da primeira tarefa vamos nessa area listar as tarefas a fazer com a possibilidade de marcar elas como feitas e tambem com uma lixeira para apagar.
* funcionalidade
- text area e butão de input que ira colocar em tela o componente da tarefa (adicionar ao array task)
- contador de tarefa provavelmente usando o length do array para saber quantas tarefas tem
- o campo das tasks que quando que vai mostrar os componente task e caso não tenha nenhum componente ira mostrar uma box com icone e texto
- o componente das task vao ser criados pelo botão e vao ter conter o texto que foi digitado na text area vamos usar o event target value. alem disso temos que adicionar o botão da lixeira a todos os componentes com a função de deletar e o botão de tarefacompleta com a função de adicionar um a contagem de tarefas competadas.
- quando a terefa for completa tambem o texto vai ter que se tornar barrado e o componene ficar opaco.
talvez de para usar esse propria contagem do react no botão de contagem deles para o nosso botão de tarefa realizada contar tambem
  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    porem isso daria errado caso a pessoa marcasse e desmarcasse. acho que é melhor criar um estado de tarefas realizadas e um estado de tarefas não realizadas. e usar a cotagem com o length.

## Execução
vamos começar fazendo o basicão podemos fazer logoo header no components 
