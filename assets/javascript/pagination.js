let startHeight = document.getElementById("id-inicio").offsetTop - 200;

let heightWamI = document.getElementById("id-wami").offsetTop - 260;

let heightTraining = document.getElementById("id-training").offsetTop -260;

let heightSkills = document.getElementById("id-skills").offsetTop - 260;

let heightProjects = document.getElementById("id-projects").offsetTop - 200;

let heightContact = document.getElementById("id-contact").offsetTop - 400;

window.addEventListener("scroll", function(){

    const header = this.document.querySelector(".header");

    header.classList.toggle("new-header", this.window.scrollY > 100);
    
    const headButton = this.document.querySelector(".header-button");
    headButton.classList.toggle("new-header-button", this.window.scrollY > 300);


    if (this.window.scrollY < heightWamI){
        document.querySelector('.ini').classList.add("cor-link-cab");
        document.querySelector('.feature-ini').classList.add("feature-visi");
        
        document.querySelector('.wi').classList.remove("cor-link-cab");   
        document.querySelector('.feature-wi').classList.remove("feature-visi");  
                
        document.querySelector('.fm').classList.remove("cor-link-cab");  
        document.querySelector('.feature-form').classList.remove("feature-visi");
        
        document.querySelector('.s').classList.remove("cor-link-cab")   
        document.querySelector('.feature-skill').classList.remove("feature-visi");
        
        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.feature-proj').classList.remove("feature-visi"); 
        
        headButton.classList.remove("header-button-contact");
        document.querySelector('.feature-enter').classList.remove("feature-visi")
        headButton.classList.add("button-cab-hover");


        document.querySelector('.ini').classList.remove("hover-a");
        document.querySelector('.wi').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.s').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
        
    }
    
    if (this.window.scrollY > heightWamI && this.window.scrollY < heightTraining){
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.feature-ini').classList.remove("feature-visi");
        
        document.querySelector('.wi').classList.add("cor-link-cab")   
        document.querySelector('.feature-wi').classList.add("feature-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab")   
        document.querySelector('.feature-form').classList.remove("feature-visi");  

        document.querySelector('.s').classList.remove("cor-link-cab")   
        document.querySelector('.feature-skill').classList.remove("feature-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.feature-proj').classList.remove("feature-visi");

        headButton.classList.remove("header-button-contact");
        document.querySelector('.feature-enter').classList.remove("feature-visi")
        headButton.classList.add("button-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.wi').classList.remove("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.s').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
    }

    if (this.window.scrollY > heightTraining && this.window.scrollY < heightSkills){
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.feature-ini').classList.remove("feature-visi");
        
        document.querySelector('.wi').classList.remove("cor-link-cab"); 
        document.querySelector('.feature-wi').classList.remove("feature-visi");

        document.querySelector('.fm').classList.add("cor-link-cab");
        document.querySelector('.feature-form').classList.add("feature-visi");  

        document.querySelector('.s').classList.remove("cor-link-cab")   
        document.querySelector('.feature-skill').classList.remove("feature-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.feature-proj').classList.remove("feature-visi");

        headButton.classList.remove("header-button-contact");
        document.querySelector('.feature-enter').classList.remove("feature-visi")
        headButton.classList.add("button-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.wi').classList.add("hover-a");
        document.querySelector('.fm').classList.remove("hover-a");
        document.querySelector('.s').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
    }

    if (this.window.scrollY > heightSkills && this.window.scrollY < heightProjects) {
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.feature-ini').classList.remove("feature-visi");
        
        document.querySelector('.wi').classList.remove("cor-link-cab"); 
        document.querySelector('.feature-wi').classList.remove("feature-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab");
        document.querySelector('.feature-form').classList.remove("feature-visi");  

        document.querySelector('.s').classList.add("cor-link-cab")   
        document.querySelector('.feature-skill').classList.add("feature-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.feature-proj').classList.remove("feature-visi");

        headButton.classList.remove("header-button-contcto");
        document.querySelector('.feature-enter').classList.remove("feature-visi")
        headButton.classList.add("button-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.wi').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.s').classList.remove("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
    }

    if (this.window.scrollY > heightProjects && this.window.scrollY < heightContact) {
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.feature-ini').classList.remove("feature-visi");
        
        document.querySelector('.wi').classList.remove("cor-link-cab"); 
        document.querySelector('.feature-wi').classList.remove("feature-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab");
        document.querySelector('.feature-form').classList.remove("feature-visi");  

        document.querySelector('.s').classList.remove("cor-link-cab")   
        document.querySelector('.feature-skill').classList.remove("feature-visi");  

        document.querySelector('.proj').classList.add("cor-link-cab")   
        document.querySelector('.feature-proj').classList.add("feature-visi");

        headButton.classList.remove("header-button-contact");
        document.querySelector('.feature-enter').classList.remove("feature-visi")
        headButton.classList.add("button-cab-hover"); 

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.wi').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.s').classList.add("hover-a");
        document.querySelector('.proj').classList.remove("hover-a"); 
    }

    if (this.window.scrollY >= heightContact) {
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.feature-ini').classList.remove("feature-visi");
        
        document.querySelector('.wi').classList.remove("cor-link-cab"); 
        document.querySelector('.feature-wi').classList.remove("feature-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab");
        document.querySelector('.feature-form').classList.remove("feature-visi");  

        document.querySelector('.s').classList.remove("cor-link-cab")   
        document.querySelector('.feature-skill').classList.remove("feature-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.feature-proj').classList.remove("feature-visi");

        headButton.classList.add("header-button-contact");
        document.querySelector('.feature-enter').classList.add("feature-visi")
        
        headButton.classList.remove("button-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.wi').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.s').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
        
    }
       
        
});

