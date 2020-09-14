# Aula 7 e 8 - Operadores

## Operadores Artméticos

Tipo             | Símbolo | Exemplo
-----------------|:-------:|-------------
Soma             | +       | 5 + 2 = 7
Subtração        | -       | 5 - 2 = 3
Multiplicação    | *       | 5 * 2 = 10
Divisão          | /       | 5 / 2 = 2,5
Resto da divisão | %       | 5 % 2 = 1
Potenciacão      | **      | 5 ** 2 = 25

### Precedência:

1. Parênteses
2. Potenciação
3. Divisão, divisão inteira e muntiplicação
4. Soma e subtração

## Operadores de Atribuição

### Atribuição simples:

```
var n = 5;
```

### Auto-atribuição:

```
var n = 5;

n += 2;    //O mesmo que n = n + 2 
n %= 3;    //O mesmo que n = n % 3
n **= 5;   //O mesmo que n = n ** 5
           //Segue-se a mesma lógica com os outros operadores aritméticos
```

### Incremento e Decremento:

```
var n = 5;

n++;   //Incremento (o mesmo que n = n + 1)
n--;   //Decremento (o mesmo que n = n - 1)
```

## Operadores Relacionais

Tipo              | Símbolo | Exemplo
------------------|:-------:|-----------------
Maior             | >       | 5 > 2: true
Menor             | <       | 7 < 4: false
Maior ou igual    | >=      | 8 >= 8: true
Menor ou igual    | <=      | 9 <= 7: false
Igual             | ==      | "5" == 5: true
Igual restrito    | ===     | "5" === 5: false
Desigual          | !=      | "5" != 5: false
Desigual restrito | !==     | "5" !== 5: true

O resultado de toda expressão relacional é um **valor booleano** (true/false).

### Precedência:

- Não há. São resolvidos na ordem em que aparecem na expressão.

## Operadore Lógicos

Tipo           | Símbolo |
---------------|:-------:|
Negação (não)  | !       |
Conjunção (e)  | &&      |
Disjunção (ou) | ||      |

### Precedência:

1. Negação (não)
2. Conjunção (e)
3. Disjunção (ou)

## Operador Tenário

### Sintaxe:

[teste lógico]**?**[resultado se verdadeiro]**:**[resultado se falso]

```
var media = 6;
var idade = 16;

media >= 7?"APROVADO":"REPROVADO";             //Vai retornar "REPROVADO"
idade < 18?"Menor de idade":"Maior de idade"   //Vai retornar "Menor de idade"
```

## Precedência dos Operadores

1. Aritméticos
2. Relacionais
3. Lógicos