import reflex as rx
import os

config = rx.Config(
    app_name="portfolio",
    # Quita el botón "Built with Reflex"
    show_built_with_reflex=False,
    # Configuración para producción
    backend_host="0.0.0.0",
    backend_port=8000,
    frontend_port=8000,
)