import reflex as rx
import portfolio.styles.styles as styles
import portfolio.components.link_icon as icon
import portfolio.constants as cte
import portfolio.styles.colors as color
import portfolio.components.link_button as lb



def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                #fallback="EV",
                name="Erich Vollenweider",
                src="profile3.png",
                size="7",
                color=color.TextColor.BODY.value,
                bg=color.Color.CONTENT.value,
                border_radius="100%",
                border="4px solid",
                border_color=color.Color.PRIMARY.value,
            ),

            rx.vstack(
                rx.heading(
                    "Erich Vollenweider",
                    size="8",
                    padding_top="4px"
                ),
                rx.text(
                    "Computer Analyst",
                    color=color.TextColor.BODY.value
                ),
                rx.hstack(
                    icon.link_icon(cte.GITHUB, "github"),
                    icon.link_icon(cte.LINKEDIN, "linkedin"),
                    icon.link_icon(cte.INSTA, "instagram"),
                    icon.link_icon(cte.FB, "facebook"),
                ),
                
                spacing="0",
                align_items="start"
            ),

            
            spacing="4",
        ),

        rx.vstack( 
            rx.text(
                f"""
                I am a Computer Analyst graduate and a student of the Bachelor's Degree in Computer Science. I have knowledge of English, and a strong
                orientation toward problem-solving, software development, and technology. I am interested in web development, AI, and object-oriented
                programming.
                """,
                color = color.TextColor.BODY.value
            ),
            spacing= "6"
        ),
        text_align="justify",
        align_items="start",
        spacing= "6"
    )