const fill=document.querySelector('.fill')
const empties=document.querySelectorAll('.empty')
console.log('working')
//Fill Listeners

fill.addEventListener('dragstart', dragstart)
fill.addEventListener('dragend', dragend)


//fill drag fun
function dragstart(){
	this.className+= ' hold'
	setTimeout(()=>(this.className='invisible'),0);
}
function dragend(){
	this.className="fill"
}