import reflex as rx
import portfolio.utils as utils
import portfolio.styles.styles as styles
import portfolio.components.nav_bar as nb
import portfolio.components.footer as ft
import portfolio.views.header as hd
import portfolio.views.index_links as lk
import portfolio.views.project as pr
import portfolio.views.contact_form as cf


@rx.page(
    title= utils.index_title,
    description= utils.index_description,
    image= utils.image,
)


def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        nb.navbar(),
        rx.center(
            rx.vstack(
                hd.header(),
                lk.index_links(),
                cf.contact_form(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                spacing="4",
                margin_y=styles.Size.MEDIUM.value,
                padding_x="20px"
            ),
        ),
        rx.center(
            ft.footer()
        ),
    )
