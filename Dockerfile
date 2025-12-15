FROM python:3.11-slim

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar requirements y instalar dependencias de Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el proyecto
COPY . .

# Inicializar Reflex
RUN reflex init

# Exponer el puerto
EXPOSE 8000

# Comando de inicio
CMD ["reflex", "run", "--env", "prod", "--loglevel", "info"]