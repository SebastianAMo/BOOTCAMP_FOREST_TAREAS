# Backend Project: Zorro scape

Ahora que ya sabes hacer y usar un API, vamos a construir una from scracth (Desde 0), ya sabes como hacer esto.

En la carpeta [zorro_scape](https://github.com/F-O-R-E-S-T/web-bootcamp-2023/tree/main/tasks/zorro_scape) encontrarás los build que Cristhian nos ha dejado, usa esos builds para que tu API tenga una interfaz
y envia datos compliendo la arquitectura que ya vimos. Como luego he de revisar esto, debes de hacerlo todo en un repositorio de GitHub o GitLab.

## Restricciones

- Debes de leer y actualizar un archivo de tipo json como especifica el [diagrama de componentes](https://github.com/F-O-R-E-S-T/web-bootcamp-2023/blob/main/tasks/zorro_scape/zorrospace-Components.drawio.png "Diagrama de componentes")

- Solo puede comunicarte con el build a traves de /idle/current

- No puedes responder directamente JSON, primero debes leer el estado del archivo

- Todos tus endpoint deben de ser funcionales y responder cuando menos un StatusCode

## Estructura del archivo

```Js
{
  "x":0,
  "y":0,
  "attacking":0,
  "jumping":false
}
```

## Especificación de los endpoints

### Movement

Este set de endpoints respectivamente cambian los valores de X y Y pra que le jugador se puede mover hacia arriba, derecha, izquierda y abajo

PUT: Move up

```text
http://localhost:3000/api/v1/movement/up
```

PUT: Move right

```text
http://localhost:3000/api/v1/movement/right
```

PUT: Move left

```text
http://localhost:3000/api/v1/movement/left
```

PUT: Move down

```text
http://localhost:3000/api/v1/movement/down
```

### Jump

Este set de endpoints respectivamente cambian los valores de X y Y para que el jugador se puede mover a manera de parabola, es decir; a manera de parabola

PUT: Jump right

```text
http://localhost:3000/api/v1/jump/right
```

PUT: Jump left

```text
http://localhost:3000/api/v1/jump/left
```

### Attack

Este set de endpoints se refiere a los ataques hacia la derecha e izquierda

PUT: Attack right

```text
http://localhost:3000/api/v1/attack/right
```

PUT: Attack left

```text
http://localhost:3000/api/v1/attack/left
```

### Idle

Estos endpoints son para el control del personaje, deben de cumplir con los estados propuestos para el diagrama de estados del assigment #10

GET: Get current

```text
http://localhost:3000/api/v1/idle/current
```

GET: Win

```text
http://localhost:3000/api/v1/idle/win
```

DELETE: Die

```text
http://localhost:3000/api/v1/idle/die
```

POST: Start

```text
http://localhost:3000/api/v1/idle/start
```

#### Opcional

POST: Reset

```text
http://localhost:3000/api/v1/idle/reset
```

---
