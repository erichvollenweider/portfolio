import reflex as rx
import portfolio.styles.styles as styles
import portfolio.styles.fonts as fonts



def link_skill(imagen: str, name: str) -> rx.Component:
    return rx.hstack(
        rx.image(
            src=imagen,
            height=styles.Size.SMEDIUM.value,
            width=styles.Size.SMEDIUM.value
        ),
        rx.text(
            name,
            font_family=fonts.Font.DEFAULT.value,
            font_weight=fonts.FontWeight.MEDIUM.value,
            size="6"
        )
    )