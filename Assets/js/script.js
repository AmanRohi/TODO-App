(()=>{
    function getFullNumber(x){
        if(x<10) return '0'+x;
        else return x;
    }
    function dateEventHanlder(){
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        const days = ['Sun','Mon','Tues','Wed','Thrus','Fri','Sat'];
        const dd = document.getElementById('dd');
        const mm = document.getElementById('mm');
        const yy = document.getElementById('yy');
        const day = document.getElementById('day');
        const hh = document.getElementById('hours');
        const min = document.getElementById('minutes');
        const today = new Date();
        dd.innerText = getFullNumber(today.getDate());
        mm.innerText = months[today.getMonth()];
        yy.innerText = today.getFullYear();
        day.innerText = days[today.getDay()];
        hh.innerText = getFullNumber(today.getHours());
        min.innerText = getFullNumber(today.getMinutes());
    }


    function handleOverlay(){
        const overlay = document.querySelector('.overlay-add-task');
        const outerAddBtn = document.querySelector('.footer-btn');
        const innerAddBtn = document.querySelector('.btn');
        const cross = document.querySelector('.cross');

        outerAddBtn.addEventListener('click',()=>{
            setTimeout(()=>{
                outerAddBtn.classList.add('inVisible');
            },450);
            overlay.classList.remove('hide');
        });
        
        innerAddBtn.addEventListener('click',()=>{
            outerAddBtn.classList.remove('inVisible');
            overlay.classList.add('hide');
        })
        
        cross.addEventListener('click',()=>{
            overlay.classList.add('hide');
            outerAddBtn.classList.remove('inVisible');

        })
    }

    function main(){
        const categorys = ['Work','Personal','School','Other'];
        const colors = ['#e67e22','#ff7675','#48dbfb','#f1c40f'];
        const classes = ['fa-briefcase','fa-play-circle','fa-graduation-cap','fa-tasks']
        const emptyInbox = document.querySelector('.empty-taskBox');
        const inbox = document.querySelectorAll('.task');
        if(inbox.length == 0) {
            emptyInbox.classList.remove('inVisible');
        } else {
            emptyInbox.classList.add('inVisible');
            inbox.forEach(elem=>{
                const category=elem.querySelector('.category');
                const fontAw = elem.querySelector('.bookmark i');
                let index = categorys.findIndex((cat)=> cat == category.innerText);
                category.style.backgroundColor=colors[index];
                fontAw.classList.add(classes[index]);
            })
        }
    }
    function render(){
        main();
        handleOverlay();
        setInterval(dateEventHanlder,1000);
    }
    dateEventHanlder();
    render();
})();