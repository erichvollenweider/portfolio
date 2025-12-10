import reflex as rx
import portfolio.styles.styles as styles
import portfolio.styles.fonts as fonts
import portfolio.styles.colors as colors

def link_project(imagen: str, url: str, title: str, desc: str) -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.image(
                height="170px",
                width="200px",
                border_radius= styles.Size.DEFAULT.value,
                src=imagen
            ),
            rx.vstack(
                rx.text(
                    title,
                    font_family=fonts.Font.TITLE.value,
                    color=colors.Color.PRIMARY.value,
                    size="4"
                ),
                rx.text(
                    desc,
                    font_family=fonts.Font.DEFAULT.value,
                    color=colors.TextColor.BODY.value,
                    text_align="justify",
                    size="2"
                ),
                spacing="2",
            )
        ),
        href=url,
        is_external=True
    )