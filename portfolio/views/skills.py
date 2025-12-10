import reflex as rx
import portfolio.styles.styles as styles
import portfolio.styles.colors as colors
import portfolio.components.link_skill as ls

def skill_box(title: str, skills: list) -> rx.Component:
    # Componente reutilizable para cada caja de skills
    return rx.box(
        rx.vstack(
            rx.text(
                title,
                font_family=styles.Font.DEFAULT.value,
                font_weight=styles.FontWeight.MEDIUM.value,
                color=colors.Color.SECUNDARY.value,
                size="6"
            ),
            *skills,
            spacing="3",
            width="100%",
            align_items="left"
        ),
        width="100%",
        border_radius="15px",
        background_color="rgba(0, 0, 0, 0.3)",
        padding="15px"
    )

def skills() -> rx.Component:
    # Definir las skills
    programming_skills = [
        ls.link_skill("python.png", "Python"),
        ls.link_skill("java.png", "Java"),
        ls.link_skill("ruby.png", "Ruby"),
        ls.link_skill("haskell.png", "Haskell"),
        ls.link_skill("c.png", "C"),
        ls.link_skill("html.png", "HTML"),
        ls.link_skill("css.png", "CSS"),
        ls.link_skill("js.png", "JavaScript"),
    ]
    
    database_skills = [
        ls.link_skill("mysql.png", "MySQL"),
        ls.link_skill("postgre.png", "PostgreSQL"),
        ls.link_skill("sqlserver.png", "SQL Server"),
    ]
    
    tools_skills = [
        ls.link_skill("r.png", "R"),
        ls.link_skill("matlab.png", "Matlab"),
        ls.link_skill("pivotaltraker.png", "Pivotal Tracker"),
    ]
    
    return rx.box(
        # Vista Mobile y Tablet (una columna)
        rx.mobile_and_tablet(
            rx.vstack(
                skill_box("Programming", programming_skills),
                skill_box("Data Base", database_skills),
                skill_box("Tools", tools_skills),
                spacing="3",
                width="100%"
            )
        ),
        # Vista Desktop (dos columnas)
        rx.desktop_only(
            rx.hstack(
                skill_box("Programming", programming_skills),
                rx.vstack(
                    skill_box("Data Base", database_skills),
                    skill_box("Tools", tools_skills),
                    spacing="5",
                    width="100%"
                ),
                spacing="3",
                width="100%",
                align_items="start"
            )
        ),
        width="100%"
    )