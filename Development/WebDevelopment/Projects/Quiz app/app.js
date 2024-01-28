const questions = [
    {
        question: "q1",
        answers: [
            {
                text: "a1",
                isCorrect: false
            },
            {
                text: "a2",
                isCorrect: true
            },
            {
                text: "a3",
                isCorrect: false
            },
            {
                text: "a4",
                isCorrect: false
            }
        ]
    },
    {
        question: "q2",
        answers: [
            {
                text: "a1",
                isCorrect: false
            },
            {
                text: "a2",
                isCorrect: true
            },
            {
                text: "a3",
                isCorrect: false
            },
            {
                text: "a4",
                isCorrect: false
            }
        ]
    },
    {
        question: "q2",
        answers: [
            {
                text: "a1",
                isCorrect: false
            },
            {
                text: "a2",
                isCorrect: true
            },
            {
                text: "a3",
                isCorrect: false
            },
            {
                text: "a4",
                isCorrect: false
            }
        ]
    }
]  
const que=document.querySelector("#question");
// const answserbtn=document.querySelector(".btn");
const nextbtn=document.querySelector("#next-btn");
const ansdiv=document.querySelector("#answer-buttons");

let que_no=0;
let score=0;


function startquiz(){
    que_no=0;
    score=0;
    nextbtn.innerHTML="Next";
    showque();
}

function showque(){
    resetstate();
    let currque=questions[que_no];
    que.innerHTML=que_no+1 + '.' + currque.question;

    let currans=currque.answers;

    for(q of currans){
        let newbtn=document.createElement("button");
        newbtn.innerHTML=q.text;
        newbtn.classList.add("btn");
        ansdiv.appendChild(newbtn);

        if(q.isCorrect){
            newbtn.dataset.correct=q.isCorrect;
        }

        newbtn.addEventListener("click",selectAns);
    }
}

function resetstate(){
    nextbtn.style.display="none";
    while(ansdiv.firstChild){
        ansdiv.removeChild(ansdiv.firstChild);
    }
}

function selectAns(event){
    const selectedbtn=event.target;
    const isCorrect=selectedbtn.dataset.correct=="true";

    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");

    }

    let ansbntArray=ansdiv.children;

    for(ab of ansbntArray){
        if (ab.dataset.correct==="true") {
            ab.classList.add("correct");
        }
        ab.disabled="true";
    }

    nextbtn.style.display="block";

}

nextbtn.addEventListener("click",()=>{
    if(que_no<questions.length){
        que_no++;
        if (que_no<questions.length) {
            showque();
        }
        else{
            showscore();
        }

    }else{
        startquiz(); 
    }
})
function showscore(){
    resetstate();
    que.innerHTML=`You scored ${score} out of 3`;
    nextbtn.innerHTML="PlayAgin";
    nextbtn.style.display="block";
}
startquiz();