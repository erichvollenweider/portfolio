FROM python:3.11-slim

# Instalar dependencias del sistema (unzip es necesario para reflex init)
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar requirements y instalar dependencias de Python
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el proyecto
COPY . .

# Inicializar Reflex (esto compila el frontend)
RUN reflex init

# Exponer el puerto que Railway espera
EXPOSE 8000

# Comando de inicio (AMBOS: frontend + backend)
CMD ["reflex", "run", "--env", "prod", "--backend-host", "0.0.0.0", "--backend-port", "8000", "--frontend-port", "8000"]