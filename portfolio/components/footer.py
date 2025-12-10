import reflex as rx
import portfolio.styles.styles as styles
import portfolio.constants as cte
import portfolio.styles.colors as colors

def footer() -> rx.Component:
    return rx.hstack(
        rx.text("All rights reserved."),
        rx.text("Made with Reflex."),
        margin_bottom=styles.Size.DEFAULT.value,
        padding_bottom=styles.Size.DEFAULT.value,
        padding_x="5px",
        color=colors.TextColor.FOOTER.value
    )