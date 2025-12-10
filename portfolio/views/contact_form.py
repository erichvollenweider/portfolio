import reflex as rx
import portfolio.components.title as tt
import portfolio.styles.styles as styles
import portfolio.styles.colors as colors


class ContactState(rx.State):
    name: str = ""
    email: str = ""
    message: str = ""
    is_loading: bool = False
    form_submitted: bool = False
    error_message: str = ""

    async def handle_submit(self, form_data: dict):
        # Maneja el envío del formulario
        self.is_loading = True
        self.error_message = ""
        
        # Obtener los datos del formulario
        self.name = form_data.get("name", "")
        self.email = form_data.get("email", "")
        self.message = form_data.get("message", "")
        
        # Validación básica
        if not self.name or not self.email or not self.message:
            self.error_message = "Por favor completa todos los campos"
            self.is_loading = False
            return
        
        try:
            # Enviar a Formspree
            import httpx
            async with httpx.AsyncClient(follow_redirects=True) as client:
                response = await client.post(
                    "https://formspree.io/f/xldqnqew",
                    data={
                        "name": self.name,
                        "email": self.email,
                        "message": self.message
                    },
                    headers={
                        "Accept": "application/json"
                    }
                )
                
                # Formspree acepta códigos 200, 201, 202, 303
                if response.status_code in [200, 201, 202, 303]:
                    self.form_submitted = True
                    # Limpiar el formulario
                    self.name = ""
                    self.email = ""
                    self.message = ""
                else:
                    # Si el código no es de éxito pero tampoco es un error crítico
                    # puede que igual se haya enviado
                    if 200 <= response.status_code < 400:
                        self.form_submitted = True
                        self.name = ""
                        self.email = ""
                        self.message = ""
                    else:
                        self.error_message = "Error al enviar el mensaje. Intenta nuevamente."
        
        except Exception as e:
            self.error_message = f"Error: {str(e)}"
        
        finally:
            self.is_loading = False

    def reset_form(self):
        # Resetea el estado del formulario
        self.form_submitted = False
        self.error_message = ""


def contact_form() -> rx.Component:
    return rx.box(
        tt.title("Contact Me"),
        rx.cond(
            ContactState.form_submitted,
            # Mensaje de éxito
            rx.vstack(
                rx.icon("check_check", size=50, color="green"),
                rx.heading("¡Message Sent!", size="6"),
                rx.text("Thank you for contacting me. I will respond soon."),
                rx.button(
                    "Send another message",
                    on_click=ContactState.reset_form,
                    height=styles.Size.XMEDIUM.value,
                    margin_top=styles.Size.SMALL.value,
                    display="flex",
                    justify_content="center",
                    align_items="center",
                    width="100%"
                ),
                spacing="4",
                align="center"
            ),
            # Formulario
            rx.form(
                rx.vstack(
                    rx.input(
                        name="name",
                        placeholder="Your name",
                        value=ContactState.name,
                        on_change=ContactState.set_name,
                        background_color=colors.Color.BACKGROUND.value,
                        height=styles.Size.XMEDIUM.value,
                        border_radius=styles.Size.DEFAULT.value,
                        width="100%",
                        required=True
                    ),
                    rx.input(
                        name="email",
                        placeholder="Your email",
                        type="email",
                        value=ContactState.email,
                        on_change=ContactState.set_email,
                        background_color=colors.Color.BACKGROUND.value,
                        height=styles.Size.XMEDIUM.value,
                        border_radius=styles.Size.DEFAULT.value,
                        width="100%",
                        required=True
                    ),
                    rx.text_area(
                        name="message",
                        placeholder="Your message",
                        value=ContactState.message,
                        on_change=ContactState.set_message,
                        background_color=colors.Color.BACKGROUND.value,
                        height=styles.Size.XLARGE.value,
                        border_radius=styles.Size.DEFAULT.value,
                        width="100%",
                        required=True
                    ),
                    rx.cond(
                        ContactState.error_message != "",
                        rx.text(
                            ContactState.error_message,
                            color="red",
                            size="2"
                        )
                    ),
                    rx.button(
                        rx.cond(
                            ContactState.is_loading,
                            rx.spinner(size="3"),
                            rx.text("Send Message")
                        ),
                        type="submit",
                        height=styles.Size.XMEDIUM.value,
                        width="100%",
                        disabled=ContactState.is_loading,
                        display="flex",
                        justify_content="center",
                        align_items="center"
                    ),
                    spacing="4",
                    width="100%"
                ),
                on_submit=ContactState.handle_submit,
                width="100%"
            )
        ),
        id="contact-section",
        scroll_margin_top="100px",
        margin="0 auto",
        width="100%"
    )