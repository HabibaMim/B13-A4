let currentTab= "all";
const tabActive =["bg-blue-500","text-white"];
const tabInactive =["bg-white"];

const allContainer = document.getElementById("all-section");
const interviewContainer = document.getElementById("interview-section");
const rejectedContainer = document.getElementById("rejected-section");
const emptyState = document.getElementById("empty-state");
const availableStat = document.getElementById("totalcount1");

function switchTab(tab){
    const tabs=["all", "interview", "rejected"];
    currentTab=tab;
    
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

    emptyState.classList.add("hidden");

    if(tab === "all"){
        allContainer.classList.remove("hidden");

        if(allContainer.children.length < 1) {
        emptyState.classList.remove("hidden");
        }
    }

    else if (tab === "interview")
    {
         interviewContainer.classList.remove("hidden");

           if(interviewContainer.children.length < 1) {
        emptyState.classList.remove("hidden");}
    }

    else{
         rejectedContainer.classList.remove("hidden");

           if(rejectedContainer.children.length < 1) {
        emptyState.classList.remove("hidden");}
    }
updateStat();
}

//count update

const totalStat =document.getElementById("stat-total");
const interviewStat =document.getElementById("stat-interview");
const rejectedStat =document.getElementById("stat-rejected");


switchTab(currentTab);

document.getElementById("job-cards").addEventListener("click", function(event){
    const clickedElement= event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".statuses");
    const parent = card.parentNode;
    if(clickedElement.classList.contains("interviewbtn")){
      status.innerText = "Interviewed";
      interviewContainer.appendChild(card);
      
    }
     if(clickedElement.classList.contains("rejectedbtn")){
      status.innerText = "Rejected";
      rejectedContainer.appendChild(card);
    

      
    }   
     if(clickedElement.classList.contains("deletebtn")){
      parent.removeChild(card);
      
    }
    updateStat();
})

function updateStat (){

// totalStat.innerText=allContainer.children.length;
// interviewStat.innerText=interviewContainer.children.length;
// rejectedStat.innerText=rejectedContainer.children.length;

const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
};


totalStat.innerText = counts.all;
interviewStat.innerText = counts.interview;
rejectedStat.innerText = counts.rejected;

availableStat.innerText = counts[currentTab]

if(counts[currentTab] < 1){
    emptyState.classList.remove("hidden");

} else {
 emptyState.classList.add("hidden");

}

}

updateStat();