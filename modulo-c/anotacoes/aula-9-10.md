# DOM (Document Object Model)

Conjunto de objetos do navegador que dão acesso aos componentes do website.

- Funciona somente no **navegador**.

## Árvore DOM

Estrutura da página.

- window
    - location
    - document
        - html
            - head
                - meta
                - title
            - body
                - h1
                - p
                - div
                    - p
    - history
    - ...

## Selecionando elementos DOM

### Por marca:

```
<h1>Exemplo</h1>

document.getElementsByTagName("h1")  //Seleciona todos os elementos "h1";
```

### Por ID:

```
<h1 id="titulo">Exemplo</h1>

document.getElementById("titulo");
```

### Por classe:

```
<p class="teste">Exemplo</p>

document.getElementsByClassName("teste");  //Seleciona todos os elementos com a classe "teste"
```

### Por nome:

```
<input name="form">

document.getElementsByName("form"); //Seleciona todos os elementos com o atributo name="form"
```

### Por meio da sintaxe do CSS:

```
<div>
    <p class="teste">Exemplo</p>
    <p class="teste">Outro exemplo</p>
    <p>Mais um exemplo</p>
</div>

document.querySelector("div p.teste");  //Seleciona o primeiro que encontrar
document.querySelectorAll("div p);      //Seleciona todos     
```

## Eventos DOM

### Eventos de mouse:

Evento    | Descrição
----------|---------------------------------------
Mouseenter| O mouse entra em um elemento
Mousemove | O mouse se move em um elemento
Mousedown | O mouse pressiona e segura um elemento
Mouseup   | O mouse solta um elemento pressionado
click     | O mouse clica em um elemento
Mouseout  | O mouse sai de um elemento