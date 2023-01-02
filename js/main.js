// const animItems = document.querySelectorAll('._anim-item');
// if (animItems.length > 0){
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll(){
//         for (let index=0; index < animItems; index++){
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//             if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('_active');
//             }
//             else{
//                 animItem.classList.remove('_active');
//             }
//         }
//     }
//     function offset(el){
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//             scrollTop = window.scrollY || document.documentElement.scrollTop;
//             return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
//     }
//     animOnScroll();
// }
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}