# Aula 1 - Variáveis e Tipos Primitivos

## Variáveis

Espaços alocados na memória para guardar dados.

```
var nome_da_variavel = 5;
```

Acima, uma demosntação de uma declaração de variável. 

Em JavaScript, o símbolo de igual (=) é lido como "recebe". Para representar uma igualdade, usa-se dois símbolos de igual (==).

Para declarar cadeias de caracteres (strings), são utilizadas aspas duplas (""), aspas simples ('') ou crases (``):

```
var nome_da_variavel = "JavaScript"
var nome_da_variavel = 'JavaScript'
var nome_da_variavel = `JavaScript`
```

### Atenção!!!

- Maiúscuas e minúsculas **fazem** difreneça.
- Não é possível armazenar mais de um dado por variável.

## Identificadores

Os identificadores são nomes dados às variáveis. Existem algumas regras para que um identificador seja válido:

1. Podem começar com uma letra, chifrão ($) ou símbolo de sublinhado (_).
2. **Não** podem começar com números.
3. Pode-se usar, além de letras e números, símbolos especiais e acentos.
4. **Não** podem conter espaços.
5. **Não** podem ser palavras reservadas.


## Tipos primitivos de dados

Tipo    | Descrição            | Exemplos
--------|----------------------|------------------------
number  | Números              | 5,-12, 0, 0.23, -2.44
string  | Cadeia de caracteres | "JavaScript, '1234-5678'
boolean | Verdadeiro ou falso  | true, false

Para saber o tipo de um valor ou variável, usa-se o comando `typeof`

-----

## Bônus: comentários

São úteis quando há várias pessoas trabalhando em um projeto, para que todos consigam entender o código e o raciocínio usado. Também facilitam o entendimento caso seja um projeto antigo e que você já tenha esquecido.

```
// Isso é um comentário de uma única linha
```

```
/*
   Isso é um comentário 
   de várias linhas
*/
```


