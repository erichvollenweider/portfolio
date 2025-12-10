import reflex as rx
import portfolio.views.skills as sk
import portfolio.components.title as tt
import portfolio.styles.styles as st
import portfolio.views.project as pr


def index_links() -> rx.Component:
    return rx.vstack(
        tt.title("Skills"),
        sk.skills(),
        tt.title("Projects"),
        pr.project(),
        width="100%"
    )