<h1 align="center">
    <img src="https://github.com/Johan-Palacios/testHypothesis/assets/77251405/84b56279-f9f7-4710-a302-52970eeff399" width="200" alt="Logo"/>
<br/>
    <img src="https://github.com/Johan-Palacios/testHypothesis/assets/77251405/19d1302a-5d41-4975-ba81-a74a3ee004a" height="30px" width="0px"/>
    Prueba de Hipótesis
    <img src="https://github.com/Johan-Palacios/testHypothesis/assets/77251405/19d1302a-5d41-4975-ba81-a74a3ee004a" height="20" width="0px"/>
</h1>
<hr>

<h4 align="center">
  <a href="#%EF%B8%8F-requisitos">Instalación </a>
  ·
  <a href="#-características">Características </a>
  ·
  <a href="#%EF%B8%8F-requisitos">Requisitos </a>
  ·
  <a href="#docs-%EF%B8%8F">Docs</a>
</h4>

<p align="center">
    <a href="https://github.com/Johan-Palacios/testHypothesis/stargazers"><img src="https://img.shields.io/github/stars/Johan-Palacios/testHypothesis?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/Johan-Palacios/testHypothesis/issues"><img src="https://img.shields.io/github/issues/Johan-Palacios/testHypothesis?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/Johan-Palacios/testHypothesis/contributors"><img src="https://img.shields.io/github/contributors/Johan-Palacios/testHypothesis?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

![Grabación-2024-06-17-235548](https://github.com/Johan-Palacios/testHypothesis/assets/77251405/8ff1cd36-b94b-4a93-98d2-246d0f8c1d27)

Una prueba de hipótesis es un método que determina si se debe aceptar o rechazar una afirmación sobre una población, basándose en la evidencia obtenida a partir de una muestra de datos. Prueba de Hipótesis Web App permite un cálculo de la misma de una forma sencilla y la generación de gráfico estadístico de acuerdo a los requerimientos del planteamiento.

<details>
<summary>
<h2>📷 Galería</h2>
</summary>
<img src="https://github.com/Johan-Palacios/testHypothesis/assets/77251405/40cac6e3-7ac8-4330-9f53-7f08bf0cbfeb"/>
<img src="https://github.com/Johan-Palacios/testHypothesis/assets/77251405/4f8ca099-ae7e-436f-beb2-5d6e9e0aa865"/>
<img src="https://github.com/Johan-Palacios/testHypothesis/assets/77251405/6d8d55dd-7cfc-4e80-8d38-426f5315dc4e"/>
</details>



## ✨ Características
- 🔥 Visualización gráfica dinámica de Distribuciones Estadísticas
- 🚀 Rápido Procesamiento
- 🧹 Planteamiento de afirmaciones con formularios dinámicos
- 📦 Incluye gran variedad de casos

## ⚡️ Requisitos

- WSL o Linux (Ubuntu 20.04.6 LTS)
- Git >= **2.25.1** (clonar repositorio)
- 🐋Docker >=**26.1.4** y Docker Compose >= **v2.27.1-desktop.1**
- un Editor de Código

## 📦Instalación

### Entorno de Desarrollo

Levantar Servidores 
- Nginx
- Node (Vite JS)
- Fast API (Uvicorn)

```bash
docker compose -f docker-compose-dev.yml up
```

#### Puertos de los Servidores
- Nginx (Usar este para desarrollo por el Reverse Proxy)
```bash
http://localhost:3000
```
- Vite (No usar este para desarrollo por el Reverse Proxy de Nginx)
```bash
http://localhost:5173
```

- FastAPI
```bash
http://localhost:8000
```

## Docs 🗒️

Documentación de la API con OpenAPI Swagger

```bash
http://localhost:8000
```
