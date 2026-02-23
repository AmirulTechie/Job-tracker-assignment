let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

let totalCount = document.getElementById('total-count');
let allFilterCardCount = document.getElementById('all-filter-card-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const allJobCards = document.getElementById('jobCardHolder');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const mainContainer = document.querySelector('main');
const allFilterSection = document.getElementById('all-filter');
const filteredSection = document.getElementById('filtered-section');

const emptyState = document.getElementById('empty-state');
function checkEmptyState() {
    if (currentStatus === 'all-filter-btn') {
        if (allJobCards.children.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
    } else if (currentStatus === 'interview-filter-btn') {
        if (interviewList.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
    } else if (currentStatus === 'rejected-filter-btn') {
        if (rejectedList.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
    }
}
checkEmptyState()
function totalCardCount(){
    totalCount.innerText = allJobCards.children.length; 
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
totalCardCount();
function updateJobCounter() {
    const totalJobs = allJobCards.children.length;

    if (currentStatus === 'all-filter-btn') {
        allFilterCardCount.innerText = `${totalJobs} jobs`;
    } else if (currentStatus === 'interview-filter-btn') {
        allFilterCardCount.innerText = `${interviewList.length} out of ${totalJobs} jobs`;
    } else if (currentStatus === 'rejected-filter-btn') {
        allFilterCardCount.innerText = `${rejectedList.length} out of ${totalJobs} jobs`;
    }
}
updateJobCounter();

function toggleStyle(id){ 
    allFilterBtn.classList.remove('bg-blue-600', 'text-white'); interviewFilterBtn.classList.remove('bg-blue-600', 'text-white'); rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white'); 
    const selectedBtn = document.getElementById(id); 
    selectedBtn.classList.add('bg-blue-600', 'text-white'); 
    currentStatus = id;

    if (id == 'interview-filter-btn') { 
        allFilterSection.classList.add('hidden'); 
        filteredSection.classList.remove('hidden');
        renderInterview();
     } else if (id == 'all-filter-btn') {
         allFilterSection.classList.remove('hidden'); 
         filteredSection.classList.add('hidden')
         checkEmptyState()
        } 
         else if (id == 'rejected-filter-btn'){
        allFilterSection.classList.add('hidden'); 
        filteredSection.classList.remove('hidden'); 
        renderRejected();
    }
        checkEmptyState()
        updateJobCounter();
         
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
        rejectedList = rejectedList.filter(item => item.jobHeading != jobCardInfo.jobHeading);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        } else if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        updateJobCounter();
        totalCardCount();
        checkEmptyState()
    } else if (event.target.classList.contains('btn-error')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobHeading = parentNode.querySelector('.jobHeading').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const desc = parentNode.querySelector('.desc').innerText;

        parentNode.querySelector('.state').innerText = 'REJECTED';

        const jobCardInfo = {
            jobHeading,
            jobTitle,
            jobType,
            state: 'REJECTED',
            desc,
        };

        const jobExist = rejectedList.find(item => item.jobHeading == jobCardInfo.jobHeading);
        if (!jobExist) {
            rejectedList.push(jobCardInfo);
        }

        interviewList = interviewList.filter(item => item.jobHeading != jobCardInfo.jobHeading);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        } else if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        updateJobCounter();
        totalCardCount();
        checkEmptyState()
    } else if (event.target.closest('.remove-btn')) {

        const removeBtn = event.target.closest('.remove-btn');
        const parentNode = removeBtn.parentNode.parentNode;

        const jobHeading = parentNode.querySelector('.jobHeading').innerText;

        interviewList = interviewList.filter(item => item.jobHeading != jobHeading);

        rejectedList = rejectedList.filter(item => item.jobHeading != jobHeading);

        if (allJobCards.contains(parentNode)) {
            parentNode.remove();
        }
        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
            checkEmptyState()
        } else if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
            checkEmptyState()
        }

        updateJobCounter();
        totalCardCount();
        checkEmptyState()
    }
});

function renderInterview(){
    filteredSection.innerHTML = ''

    for(let interview of interviewList){
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

        filteredSection.appendChild(div);
    }
}
function renderRejected(){
    filteredSection.innerHTML = ''

    for(let rejection of rejectedList){
        let div = document.createElement('div');
        div.className = "jobCard bg-white p-6 rounded-2xl flex justify-between"
        div.innerHTML = `
            <div>
                    <!-- part 1 -->
                <h2 id="" class="jobHeading text-[16px] font-bold">${rejection.jobHeading}</h2>
                <p id="" class="jobTitle mb-5 text-[#64748B] text-[12px]">${rejection.jobTitle}</p>
                    <!-- part 2 -->
                <p id="" class="jobType text-[#64748B] text-[12px] mb-2">${rejection.jobType}</p>
                <!-- part 3 -->
                 <p id="" class="state bg-[#EEF4FF] px-3 py-2 w-28 text-[12px] text-center">${rejection.state}</p>
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

        filteredSection.appendChild(div);
    }
}

