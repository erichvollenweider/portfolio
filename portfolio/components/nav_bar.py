import reflex as rx
import portfolio.styles.styles as styles
import portfolio.styles.colors as colors
import portfolio.routes as rt

def navbar() -> rx.Component:
    return rx.hstack(
        rx.desktop_only(
            rx.link(
                rx.box(
                    rx.fragment(
                        rx.text("Erich", as_="span", font_weight="bold", color=colors.Color.PRIMARY.value),
                        rx.text("Vollenweider", as_="span", font_weight="bold", color=colors.Color.SECUNDARY.value),
                    ),
                    style=styles.navbar_title_style,
                    padding_x="10px"
                ),
                href=rt.Routes.INDEX.value
            )
        ),
        rx.mobile_and_tablet(
            rx.link(
                rx.box(
                    rx.fragment(
                        rx.text("Erich", as_="span", font_weight="bold", color=colors.Color.PRIMARY.value, size="3"),
                        rx.text("Vollenweider", as_="span", font_weight="bold", color=colors.Color.SECUNDARY.value, size="3"),
                    ),
                    padding_x="5px"
                ),
                href=rt.Routes.INDEX.value
            )
        ),
        
        rx.spacer(),
        
        # Botón Desktop
        rx.desktop_only(
            rx.link(
                rx.button(
                    "Contact Me",
                    variant="soft",
                    size="3",
                    color=colors.Color.PRIMARY.value,
                    cursor="pointer",
                    border_radius=styles.Size.SMALL.value,
                    border="1px solid",
                    border_color=colors.Color.PRIMARY.value,
                    style={
                        "_hover": {
                            "background_color": colors.Color.BACKGROUND.value,
                            "transform": "scale(1.05)"
                        }
                    }
                ),
                href="#contact-section",
                style={
                    "_hover": {
                        "text_decoration": "none"
                    }
                },
                padding_y="0.3em"
            )
        ),
        
        # Botón Mobile
        rx.mobile_and_tablet(
            rx.link(
                rx.button(
                    "Contact",
                    variant="soft",
                    size="1",
                    color=colors.Color.PRIMARY.value,
                    cursor="pointer",
                    border_radius=styles.Size.SMALL.value,
                    border="1px solid",
                    border_color=colors.Color.PRIMARY.value,
                    style={
                        "_hover": {
                            "background_color": colors.Color.BACKGROUND.value,
                            "transform": "scale(1.05)"
                        }
                    }
                ),
                href="#contact-section",
                style={
                    "_hover": {
                        "text_decoration": "none"
                    }
                },
                padding_y="0.3em"
            )
        ),
        
        position="sticky",
        bg=colors.Color.CONTENT.value,
        padding_x=styles.Size.DEFAULT.value,
        padding_y=styles.Size.SMALL.value,
        z_index=999,
        top="0",
        width="100%"
    )