const quizDB = [
    {
        question:"Q1.  HTML stands for -",
        a: "Hyper Text Markup Language",
        b: "Holistick Technical Method Library",
        c: "Hyper Tax Makes Line",
        d: "None of the above",
        ans:"ans1"
    },
    {
        question:"Q2. HTML is a subset of ______",
        a: "SGMD",
        b: "SGML",
        c: "SGMH",
        d: "None of the above",
        ans:"ans2"
    },
    {
        question:"Q3. Which component is used to compile, debug and execute the java programs?",
        a: "JRE", 
        b: "JIT",
        c: "JDK",
        d: "JVM",
        ans:"ans3"
    },
    {
        question:"Q4. Which of the following is not a java feature?",
        a: "Object-oriented",
        b: "Use of pointers",
        c: "Portable",
        d: "Dynamic and Extensible",
        ans:"ans2"
    },
    {
        question:"Q5. To create HTML page, you need ___?",
        a: "Web browser",
        b: "text editor",
        c: "Both [A] and [B]",
        d: "none of the mentioned",
        ans:"ans3"
    },

    ];

    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');

    const answers = document.querySelectorAll('.answer');

    const showScore = document.querySelector('#showScore');
     
    let questionCount = 0;
    let score = 0;

    const loadQuestion = () => {
        
        const questionList = quizDB[questionCount];

        question.innerText = questionList.question;

        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;

    }

    loadQuestion();

    const getCheckAnswer = () => {
        let answer ;

       answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       })
       return answer;
    };
    const deselectAll = () =>{
        answers.forEach((curAnsElem) => curAnsElem.checked = false);
    }

    submit.addEventListener('click',() =>{
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer == quizDB[questionCount].ans){
            score++;
        };
        questionCount++;
        

        deselectAll();

        if(questionCount < quizDB.length){
            loadQuestion();
        }
        else{
            showScore.innerHTML = `
                <h3>Score : ${score}/${quizDB.length} 🥇 </h3>
                <button class="btn" onclick="location.reload()">Play Again </button>
                `;

            showScore.classList.remove('scoreArea');
        }   
    });
    