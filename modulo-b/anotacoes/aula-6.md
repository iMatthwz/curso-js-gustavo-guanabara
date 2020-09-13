# Aula 6 - Tratamento de Dados

## Conversão entre tipos:

### String para number:

```
var n = "13";

Number.parseInt(n);     //Converte para número inteiro
Number.parseFloat(n);   //Converte para número decimal
Number(n)               //Converte para um número inteiro ou decimal, dependendo do caso
```

### Number para string:

```
var n = 13;

String(n);
n.toString();
```

## Formatando strings:

### Concatenação:

```
var js = "JavaScript";

window.alert("Estou aprendendo " + js);
```

### Template strings:

```
var js = "JavaScript";

window.alert(`Estou aprendendo ${js}`);   //Origatório o uso da crase (``)
```

### Comando interessantes:

```
var js = "JavaScript";

js.length           //Informa o tamanho da string
js.toUpperCase();   //Deixa tudo em maiúsculo
js.toLowerCase();   //Deixa tudo em minúsculo
```

## Formatando numbers:

```
var n = 123.4;

n.toFixed();   //Define a quantidade de casas decimais
```