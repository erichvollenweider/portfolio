import reflex as rx
import portfolio.styles.styles as styles
import portfolio.components.link_project as lp
import portfolio.constants as cte

def project() -> rx.Component:
    return rx.vstack(
        lp.link_project(
            "f1q&l.jpg",
            cte.FUNO,
            "F1 Quiz & Learn",
            cte.DESC_FUNO
        ),
        lp.link_project(
            "cwai.jpeg",
            cte.CWAI,
            "Cooking With AI",
            cte.DESC_CWAI
        ),
        lp.link_project(
            "compilador.png",
            cte.COMP,
            "Compiler - TDS25",
            cte.DESC_COMP
        ),
        lp.link_project(
            "ConnectFourGame.png",
            cte.CFG,
            "Connect Four Game",
            cte.DESC_CFG
        ),
        lp.link_project(
            "lnasql.png",
            cte.TSQL,
            "Natural Language to SQL",
            cte.DESC_TSQL
        ),
        spacing= "6",
        width= "100%",
        align_items= "center"
    )