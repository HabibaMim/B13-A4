let currentTab= "all";
const tabActive =["bg-blue-500","text-white"];
const tabInactive =["bg-white"];

const allContainer = document.getElementById("all-section");
const interviewContainer = document.getElementById("interview-section");
const rejectedContainer = document.getElementById("rejected-section");

function switchTab(tab){
    const tabs=["all", "interview", "rejected"];
    
    for (const t of tabs){
    const tabName = document.getElementById("tab-"+t);

    if (t === tab){
        tabName.classList.remove(...tabInactive)
        tabName.classList.add(...tabActive)}

        else{
        tabName.classList.remove(...tabActive)
        tabName.classList.add(...tabInactive)
        
            }
    }
    const pages= [allContainer, interviewContainer, rejectedContainer]
    for(const section of pages){
        section.classList.add("hidden");
    }
    if(tab === "all"){
        allContainer.classList.remove("hidden");
    }

    else if (tab === "interview")
    {
         interviewContainer.classList.remove("hidden");
    }

    else{
         rejectedContainer.classList.remove("hidden");
    }

}

switchTab(currentTab);