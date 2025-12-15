import reflex as rx

from portfolio.pages.index import index
import portfolio.styles.styles as styles

app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    head_components=[
        rx.el.link(
            rel="icon", 
            href="ev.png",
            type_="image/png"
        ),
    ]
)
