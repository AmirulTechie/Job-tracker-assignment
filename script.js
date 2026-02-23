let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let allFilterCardCount = document.getElementById('all-filter-card-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const allJobCards = document.getElementById('jobCardHolder');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const mainContainer = document.querySelector('main');
const allFilterSection = document.getElementById('all-filer');
const interviewFilterSection = document.getElementById('interview-filtered-section');
const rejectedFilterSection = document.getElementById('rejected-filtered-section')


function totalCardCount(){
    totalCount.innerText = allJobCards.children.length; 
    allFilterCardCount.innerText = allJobCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
totalCardCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white');
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('bg-blue-600', 'text-white');

    if (id == 'interview-filter-btn'){
        allFilterSection.classList.add('hidden');
        interviewFilterSection.classList.remove('hidden');
    } else if (id == 'all-filter-btn'){
        allFilterSection.classList.remove('hidden');
        interviewFilterSection.classList.add('hidden');
    }
    
}


mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('btn-success')){
        const parentNode = event.target.parentNode.parentNode;
        const jobHeading = parentNode.querySelector('.jobHeading').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const desc = parentNode.querySelector('.desc').innerText;
        parentNode.querySelector('.state').innerText = 'INTERVIEWING';

        const jobCardInfo = {
            jobHeading,
            jobTitle,
            jobType,
            state:'INTERVIEWING',
            desc,
        }
        const jobExist = interviewList.find(item => item.jobHeading == jobCardInfo.jobHeading);
        if (!jobExist) {
            interviewList.push(jobCardInfo);
        }
        renderInterview();
        totalCardCount();
    }
})

function renderInterview(){
    interviewFilterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = "jobCard bg-white p-6 rounded-2xl flex justify-between"
        div.innerHTML = `
            <div>
                    <!-- part 1 -->
                <h2 id="" class="jobHeading text-[16px] font-bold">${interview.jobHeading}</h2>
                <p id="" class="jobTitle mb-5 text-[#64748B] text-[12px]">${interview.jobTitle}</p>
                    <!-- part 2 -->
                <p id="" class="jobType text-[#64748B] text-[12px] mb-2">${interview.jobType}</p>
                <!-- part 3 -->
                 <p id="" class="state bg-[#EEF4FF] px-3 py-2 w-28 text-[12px] text-center">${interview.state}</p>
                 <p class="text-[#323B49] text-[12px] mb-3.5 mt-3.5 desc">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                 <!-- Part 5 -->
                 <div class="buttons flex gap-3">
                    <button class="btn btn-outline btn-success btn-sm">INTERVIEW</button>
                    <button class="btn btn-outline btn-error btn-sm">REJECTED</button>
                 </div>
                </div>
                <!--Main part 2 -->
                <div>
                    <button class="btn btn-sm remove-btn"><i class="fa-solid fa-trash"></i></button>
                </div>
        `

        interviewFilterSection.appendChild(div);
    }
}

