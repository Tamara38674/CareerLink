function initQuiz(){const form=document.getElementById('quizForm');if(!form)return;form.onsubmit=e=>{e.preventDefault();const interest=document.getElementById('interest').value;const skill=document.getElementById('skill').value;const paths={numbers:['Financial Analyst','FP&A Analyst','Budget Analyst'],people:['Recruiter','Customer Success Specialist','HR Generalist'],creative:['Marketing Specialist','Content Strategist','UX Designer'],technology:['Data Analyst','Business Analyst','QA Analyst']};const extras={analysis:'Your analytical strengths are especially useful for roles involving data and decisions.',communication:'Your communication skills can help you succeed in stakeholder-facing roles.',organization:'Your organizational strengths can support operations and project delivery.'};const r=document.getElementById('quizResult');r.textContent=`Potential career matches: ${paths[interest].join(', ')}. ${extras[skill]} These are exploratory suggestions, not live job openings or a formal assessment.`;r.classList.add('visible')};}

document.addEventListener('DOMContentLoaded', () => {
  initQuiz();

  const v = document.getElementById('heroVideo');

  if (v) {
    v.addEventListener('error', () => {
      v.style.display = 'none';
      document.getElementById('videoFallback').hidden = false;
    });

    v.addEventListener('loadeddata', () => {
      document.getElementById('videoFallback').hidden = true;
    });
  }
});
