# Comandos de terminal

Comandos de Angular CLI
Instalaciones de npm


## Creación de aplicaciones

### Creación del espacio de trabajo

```bash
ng new ab-geo --create-application false --strict
cd ab-geo
code .
```

### Configuración del editor

```bash
npm i -D prettier
npm i -D tslint-config-prettier
npm i -D tslint-plugin-prettier
npm i -D standard-version
npm i -D husky
npm i -D webpack-bundle-analyzer
```

### Creación de la aplicación

```bash
ng g application ab-geo-app --prefix ab-geo --style scss --routing
ng add @angular/material # add styling components
```

Vaciar `app.component.html`


## El módulo núcleo

```bash
ng g m core # Creación del módulo núcleo
```
 Mover dependencias browser del AppModule al CoreModule y eliminar CommonModule (viene con el browser)

 ### El componente layout

 ```bash
 ng g c core/layout/main-layout --export
 ```
### Importaciones en CoreModule

- MatToolbarModule,
- MatButtonModule,
- RouterModule,

### Importaciones en AppModule

- CoreModule

### Uso de MainLayoutComponent

```html
<ab-geo-main-layout></ab-geo-main-layout>
```

## Rutas funcionales

### Home y about

```bash
ng g m features/home --route home --module app.module.ts
ng g m features/about --route about --module app.module.ts
```

## Modulo compartido

```bash
ng g m shared
```

## Funcionalidad

### Home

Lista de puertos

### Port

Información de un puerto

#### Page Container

```bash
ng g m features/port --route port/:id --module app.module.ts
```

#### City and weather Info presenters

```bash
ng g c features/port/city

```