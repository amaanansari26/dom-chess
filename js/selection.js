const select={
	id:-1,
	noselect:function(){
		this.id=-1
		this.piece='none'
		this.pieceRace='none'
		blocks.forEach((ele)=>{
			ele.classList.remove('selected')
		})
	},
	whiteselect:function(blockid){
		this.noselect()
		blocks[parseInt(blockid,8)].classList.add('selected')
		this.pieceRace="w"
		this.piece=pnum(blocks[parseInt(blockid,8)].childNodes[0].attributes.ele.nodeValue)
	},
	blackselect:function(blockid){
		this.noselect()
		blocks[parseInt(blockid,8)].classList.add('selected')
		this.pieceRace="b"
		this.piece=pnum(blocks[parseInt(blockid,8)].childNodes[0].attributes.ele.nodeValue)

	},
	selected:function(blockid){
		this.noselect()
		if(blocks[parseInt(blockid,8)].childElementCount==1 && blocks[parseInt(blockid,8)].childNodes[0].attributes.ele.nodeValue[0]=="w" && chance=="white"){
			this.whiteselect(blockid)
		}
		else if((blocks[parseInt(blockid,8)].childElementCount==1) && blocks[parseInt(blockid,8)].childNodes[0].attributes.ele.nodeValue[0]=="b" && chance=="black"){
			this.blackselect(blockid)

		}
		else{
			return this.noselect()
		}
		// if(chance=='white'){
		// 	this.whiteselect(blockid)
		// }
		// else{
		// 	this.blackselect(blockid)
		// }
	},
	piece: "none",
	pieceRace:'none'

}


///////////Apply selection

blocks.forEach((block)=>{
	block.addEventListener("click",function(){
		select.selected(this.id)
		console.log(this.id)
	})
})
