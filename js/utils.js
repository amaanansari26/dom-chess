let chance='white'
//aray of blocks dom elements
let blocks=[]
for(let b=0;b<=7;b++){
	for(let c=0;c<=7;c++){
		blocks.push(document.getElementById(String(b)+String(c)))
	}
}
//Eqvelent calculation
function eqv(num){
	if(num>9){
		let snum=String(num)
		let x=Number(snum[0])
		let y=Number(snum[1])
		return Number(String(Math.abs(x-7))+String(Math.abs(y-7)))
	}
	else{
		x=0
		y=num
		return Number(String(Math.abs(x-7))+String(Math.abs(y-7)))
	}

}
//piece to number in array
function pnum(name){
	if(name[0]=="w"){
		return white.find((ele)=>ele.type==name).sno



	}
	else{
		return black.find((ele)=>ele.type==name).sno

	}
}
//block to piece info
function getBlockInfo(blockid){
	if(blocks[parseInt(blockid,8)].childElementCount==0){
		return "none"
	}
	else{
		let type=blocks[parseInt(blockid,8)].childNodes[0].attributes.ele.nodeValue
		let race=""
		if(type[0]=='w'){
			race="w"
		}
		else{
			race='b'
		}
		return {type, sno:pnum(type),race}
	}

}
//check if location is valid or not
function isValidLoc(x){
	if(x>-1&&x<8||(x>9&&x<18)||(x>19&&x<28)||(x>29&&x<38)||(x>39&&x<48)||(x>49&&x<58)||(x>59&&x<68)||(x>69&&x<78)){
		return true
	}
	else{
		return false
	}

}
function move(blockid1,blockid2){
	select.noselect()
	let b1=getBlockInfo(blockid1)
	let b2=getBlockInfo(blockid2)

	if(b1.race=='w'&&chance=="white"&&(b2=='none'||b2.race=="b")){

		let possible=white[b1.sno].getMoves()
		if(possible.find((ele)=>ele==blockid2)!==undefined){

			if(isCheck('w',white[4].pos)!==undefined){
				if(!virtualmove(blockid1,blockid2,"w")){
					if(b2.race=="b"){
						black[b2.sno].pos=-1
					}

					blocks[parseInt(blockid1,8)].innerHTML=''
					blocks[parseInt(blockid2,8)].innerHTML='<img src="'+white[b1.sno].url+'" ele="'+white[b1.sno].type+'">'

					white[b1.sno].pos=Number(blockid2)

				}
				else{
					chance='black'
				}
			}
			else{
				if(b2.race=="b"){
					black[b2.sno].pos=-1
				}

				blocks[parseInt(blockid1,8)].innerHTML=''
				blocks[parseInt(blockid2,8)].innerHTML='<img src="'+white[b1.sno].url+'" ele="'+white[b1.sno].type+'">'

				white[b1.sno].pos=Number(blockid2)
			}



		}

	}
	if(b1.race=='b'&&chance=="black"&&(b2=='none'||b2.race=="w")){
		let possible=black[b1.sno].getMoves()
		if(possible.find((ele)=>ele==blockid2)){
			if(isCheck('b',black[3].pos)!==undefined){

				if(!virtualmove(blockid1,blockid2,"b")){

					if(b2.race=="w"){
						white[b2.sno].pos=-1
					}
					blocks[parseInt(blockid1,8)].innerHTML=''
					blocks[parseInt(blockid2,8)].innerHTML='<img src="'+black[b1.sno].url+'" ele="'+black[b1.sno].type+'">'

					black[b1.sno].pos=Number(blockid2)
				}
				else{
					chance="white"
				}
			}
			else{
				if(b2.race=="w"){
					white[b2.sno].pos=-1
				}
				blocks[parseInt(blockid1,8)].innerHTML=''
				blocks[parseInt(blockid2,8)].innerHTML='<img src="'+black[b1.sno].url+'" ele="'+black[b1.sno].type+'">'

				black[b1.sno].pos=Number(blockid2)
			}

		}

	}
	if(chance=="white"){
		chance="black"
		select.check('b')
	}
	else{
		chance="white"
		select.check('w')
	}

	track()
	if(isCheckMate()){
		finished()
	}

}
function virtualmove(blockid1,blockid2,race){
//if check true else false
let b1=getBlockInfo(blockid1)
let b2=getBlockInfo(blockid2)
if(race=='w'){
	
	let bupblock=blocks[parseInt(blockid1,8)].innerHTML
	let bupblock2=blocks[parseInt(blockid2,8)].innerHTML
	let bupwhitepos=white[b1.sno].pos
	try{
		let bupblackpos=black[b2.sno].pos
	}
	catch(err){

	}
	
//move logic
if(b2.race=="b"){
	
	black[b2.sno].pos=-1
}

blocks[parseInt(blockid1,8)].innerHTML=''
blocks[parseInt(blockid2,8)].innerHTML='<img src="'+white[b1.sno].url+'" ele="'+white[b1.sno].type+'">'

white[b1.sno].pos=Number(blockid2)
///
let ans =isCheck('w',white[4].pos)!==undefined
//restore
if(b2.race=="b"){
	try{
		black[b2.sno].pos=bupblackpos
	}
	catch(err){

	}
	
}

blocks[parseInt(blockid1,8)].innerHTML=bupblock
blocks[parseInt(blockid2,8)].innerHTML=bupblock2

white[b1.sno].pos=bupwhitepos
return ans
}
else{
	let bupblock=blocks[parseInt(blockid1,8)].innerHTML
	let bupblock2=blocks[parseInt(blockid2,8)].innerHTML
	let bupblackpos=black[b1.sno].pos
	try{
		let bupwhitepos=white[b2.sno].pos
	}
	catch(err){

	}
	
	if(b2.race=="w"){
		
		white[b2.sno].pos=-1
	}
	blocks[parseInt(blockid1,8)].innerHTML=''
	blocks[parseInt(blockid2,8)].innerHTML='<img src="'+black[b1.sno].url+'" ele="'+black[b1.sno].type+'">'

	black[b1.sno].pos=Number(blockid2)
	///
	let ans =isCheck('b',black[3].pos)!==undefined
	//restore
	if(b2.race=="w"){
		try{
			white[b2.sno].pos=bupwhitepos
		}
		catch(err){

		}
	}

	blocks[parseInt(blockid1,8)].innerHTML=bupblock
	blocks[parseInt(blockid2,8)].innerHTML=bupblock2

	black[b1.sno].pos=bupblackpos
	return ans

}


}


function isCheck(race,loc){

	if(race=='w'){

		let a=[]
		black.forEach(function(ele){
			if(ele.type[1]=="p"){

				if(isValidLoc(ele.pos-9)){
					if(getBlockInfo(ele.pos-9)=="none"||getBlockInfo(ele.pos-9).type=="wk"){
						a.push(ele.pos-9)
					}

				}
				if(isValidLoc(ele.pos-11))
					if(getBlockInfo(ele.pos-11)=="none"||getBlockInfo(ele.pos-11).type=="wk"){
						a.push(ele.pos-11)
					}

				}
				else if(ele.type[1]=="k"){
					a=a.concat(ele.moves)
				}
				else{
					a=a.concat(ele.getMoves())
				}

			})

		return a.find((ele)=>ele==loc)

	}
	else{

		let a=[]

		white.forEach(function(ele){
			if(ele.type[1]=="p"){

				if(isValidLoc(ele.pos+9)){
					if(getBlockInfo(ele.pos+9)=="none"||getBlockInfo(ele.pos+9).type=="bk"){
						a.push(ele.pos+9)
					}

				}
				if(isValidLoc(ele.pos+11))
					if(getBlockInfo(ele.pos+11)=="none"||getBlockInfo(ele.pos+11).type=="bk"){
						a.push(ele.pos+11)
					}

				}
				else if(ele.type[1]=="k"){
					a=a.concat(ele.moves)
				}
				else{
					a=a.concat(ele.getMoves())
				}

			})


		return a.find((ele)=>ele==loc)

	}

}
function isCheckMate(){
	if(chance=='white'){
		if(isCheck("w",white[4].pos)!==undefined){
			let ans=[]
			white.forEach((ele)=>{
				let moves=ele.getMoves()
				while(moves.length!=0){
					
					ans.push(virtualmove(ele.pos,moves.pop()))
				}
			})
			return !ans.find((ele)=>!ele)
		}
		else{
			return false
		}
	}
	else if(chance=='black'){
		if(isCheck("b",white[3].pos)!==undefined){
			let ans=[]
			black.forEach((ele)=>{
				let moves=ele.getMoves()
				while(moves.length!=0){
					
					ans.push(virtualmove(ele.pos,moves.pop()))
				}
			})
			return !ans.find((ele)=>!ele)
		}
		else{
			return false
		}
	}

}

/////////////////////////////////////////////////////////Selection///////////////////////////////////////////////////////////////////////////
const select={
	id:-1,
	noselect:function(){
		this.id=-1
		this.piece='none'
		this.pieceRace='none'
		blocks.forEach((ele)=>{
			ele.classList.remove('selected')
			ele.classList.remove('possible')
			ele.classList.remove('indanger')
		})
	},
	whiteselect:function(blockid){
		this.noselect()
		blocks[parseInt(blockid,8)].classList.add('selected')
		this.id=blockid
		this.pieceRace="w"
		this.piece=pnum(blocks[parseInt(blockid,8)].childNodes[0].attributes.ele.nodeValue)
		this.predict()
	},
	blackselect:function(blockid){
		this.noselect()
		blocks[parseInt(blockid,8)].classList.add('selected')
		this.id=blockid
		this.pieceRace="b"
		this.piece=pnum(blocks[parseInt(blockid,8)].childNodes[0].attributes.ele.nodeValue)
		this.predict()

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

	},
	predict:function(){
		if(this.piece!="none"&&this.pieceRace=='w'){
			let sno=this.piece
			let positions=white[sno].getMoves()
			positions.forEach((ele)=>{
				if(getBlockInfo(ele)!="none"){
					blocks[parseInt(ele,8)].classList.add('indanger')
				}
				else{
					blocks[parseInt(ele,8)].classList.add('possible')
				}

			})

		}
		if(this.piece!="none"&&this.pieceRace=='b'){
			let sno=this.piece
			let positions=black[sno].getMoves()
			positions.forEach((ele)=>{
				if(getBlockInfo(ele)!="none"){
					blocks[parseInt(ele,8)].classList.add('indanger')
				}
				else{
					blocks[parseInt(ele,8)].classList.add('possible')
				}

			})

		}

	},
	check:function(race){
		if(race=='w'&&isCheck('w',white[4].pos)){
			blocks[parseInt(white[4].pos,8)].classList.add('check')
		}
		else if(race=='b'&&isCheck('b',black[3].pos)){
			blocks[parseInt(black[3].pos,8)].classList.add('check')
		}
		else{
			blocks.forEach((ele)=>{
				ele.classList.remove('check')
			})
		}
	},
	piece: "none",
	pieceRace:'none'

}




/////////////////////////////////////////////////////////Pieces objects array//////////////////////////////////////////////////////////////////////////
//haathi-h , ghoda-g, uooth-u, king-k, queen- q , padal - p
const black=[{
	url:'imgs/b/0.png',
	type:"bh1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(0),
	sno:0,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left
let pos=this.pos
pos--
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos--
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right
pos=this.pos
pos++
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos++
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+10
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos-10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-10
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}

},
{
	url:'imgs/b/1.png',
	type:"bg1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(1),
	sno:1,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+8)){
			next=getBlockInfo(pos+8)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+8)
			}
		}
		if(isValidLoc(pos-8)){
			next=getBlockInfo(pos-8)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-8)
			}
		}
		if(isValidLoc(pos+12)){
			next=getBlockInfo(pos+12)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+12)
			}
		}
		if(isValidLoc(pos-12)){
			next=getBlockInfo(pos-12)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-12)
			}
		}
		if(isValidLoc(pos+19)){
			next=getBlockInfo(pos+19)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+19)
			}
		}
		if(isValidLoc(pos-19)){
			next=getBlockInfo(pos-19)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-19)
			}
		}
		if(isValidLoc(pos+21)){
			next=getBlockInfo(pos+21)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+21)
			}
		}
		if(isValidLoc(pos-21)){
			next=getBlockInfo(pos-21)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-21)
			}
		}

	}

},
{
	url:'imgs/b/2.png',
	type:"bu1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(2),
	sno:2,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left down
let pos=this.pos
pos=pos-11
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-11
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right down
pos=this.pos
pos=pos-9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-9
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//left up
pos=this.pos
pos=pos+9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+9
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+11
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+11
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}
},
{
	url:'imgs/b/3.png',
	type:"bk",
	pos:-1,
	moves:[],
	getMoves:function(){
		this.movesCalc()
		let wpos = white[4].pos
		if(isValidLoc(wpos+1)){
			this.moves=this.moves.filter((ele)=>ele!=wpos+1)
		}
		if(isValidLoc(wpos-1)){
			this.moves=this.moves.filter((ele)=>ele!=wpos-1)
		}
		if(isValidLoc(wpos+10)){
			this.moves=this.moves.filter((ele)=>ele!=wpos+10)
			console.log(this.moves)
		}
		if(isValidLoc(wpos-10)){
			this.moves=this.moves.filter((ele)=>ele!=wpos-10)
		}
		if(isValidLoc(wpos-11)){
			this.moves=this.moves.filter((ele)=>ele!=wpos-11)
		}
		if(isValidLoc(wpos-9)){
			this.moves=this.moves.filter((ele)=>ele!=wpos-9)
		}
		if(isValidLoc(wpos+11)){
			this.moves=this.moves.filter((ele)=>ele!=wpos+11)
		}
		if(isValidLoc(wpos+9)){
			this.moves=this.moves.filter((ele)=>ele!=wpos+9)
		}
		return this.moves
	},
	inipos:eqv(3),
	sno:3,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos

		if(isValidLoc(pos-1)&&!isCheck("b",pos-1)&&getBlockInfo(pos-1).race!="b"){
			this.moves.push(pos-1)
		}
		if(isValidLoc(pos+1)&&!isCheck("b",pos+1)&&getBlockInfo(pos+1).race!="b"){
			this.moves.push(pos+1)
		}
		if(isValidLoc(pos-10)&&!isCheck("b",pos-10)&&getBlockInfo(pos-10).race!="b"){
			this.moves.push(pos-10)
		}
		if(isValidLoc(pos+10)&&!isCheck("b",pos+10)&&getBlockInfo(pos+10).race!="b"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&!isCheck("b",pos+9)&&getBlockInfo(pos+9).race!="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos-9)&&!isCheck("b",pos-9)&&getBlockInfo(pos-9).race!="b"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos+11)&&!isCheck("b",pos+11)&&getBlockInfo(pos+11).race!="b"){
			this.moves.push(pos+11)
		}
		if(isValidLoc(pos-11)&&!isCheck("b",pos-11)&&getBlockInfo(pos-11).race!="b"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/4.png',
	type:"bq",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(4),
	sno:4,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left
let pos=this.pos
pos--
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos--
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right
pos=this.pos
pos++
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos++
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//up

pos=this.pos
pos=pos+10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+10
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//down
pos=this.pos
pos=pos-10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-10
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//left down
pos=this.pos
pos=pos-11
next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-11
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right down
pos=this.pos
pos=pos-9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-9
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//left up
pos=this.pos
pos=pos+9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+9
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+11
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+11
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}

},
{
	url:'imgs/b/2.png',
	type:"bu2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(5),
	sno:5,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left down
let pos=this.pos
pos=pos-11
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-11
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right down
pos=this.pos
pos=pos-9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-9
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//left up
pos=this.pos
pos=pos+9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+9
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+11
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+11
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}
},
{
	url:'imgs/b/1.png',
	type:"bg2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(6),
	sno:6,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+8)){
			next=getBlockInfo(pos+8)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+8)
			}
		}
		if(isValidLoc(pos-8)){
			next=getBlockInfo(pos-8)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-8)
			}
		}
		if(isValidLoc(pos+12)){
			next=getBlockInfo(pos+12)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+12)
			}
		}
		if(isValidLoc(pos-12)){
			next=getBlockInfo(pos-12)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-12)
			}
		}
		if(isValidLoc(pos+19)){
			next=getBlockInfo(pos+19)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+19)
			}
		}
		if(isValidLoc(pos-19)){
			next=getBlockInfo(pos-19)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-19)
			}
		}
		if(isValidLoc(pos+21)){
			next=getBlockInfo(pos+21)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos+21)
			}
		}
		if(isValidLoc(pos-21)){
			next=getBlockInfo(pos-21)
			if(next=="none"||next.race=="w"){
				this.moves.push(pos-21)
			}
		}

	}
},
{
	url:'imgs/b/0.png',
	type:"bh2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(7),
	sno:7,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left
let pos=this.pos
pos--
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos--
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right
pos=this.pos
pos++
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos++
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+10
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos-10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-10
	}
	else if(next.race=="w"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}
},
{
	url:'imgs/b/5.png',
	type:"bp1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(10),
	sno:8,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/5.png',
	type:"bp2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(11),
	sno:9,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/5.png',
	type:"bp3",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(12),
	sno:10,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/5.png',
	type:"bp4",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(13),
	sno:11,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/5.png',
	type:"bp5",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(14),
	sno:12,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/5.png',
	type:"bp6",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(15),
	sno:13,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/5.png',
	type:"bp7",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(16),
	sno:14,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
},
{
	url:'imgs/b/5.png',
	type:"bp8",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:eqv(17),
	sno:15,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos-20)=='none'){
				this.moves.push(this.pos-20)
			}
		}
		if(isValidLoc(pos-9)&&getBlockInfo(pos-9).race=="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos-11)&&getBlockInfo(pos-11).race=="w"){
			this.moves.push(pos-11)
		}
	}
}]

const white=[{
	url:'imgs/w/0.png',
	type:"wh1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:0,
	sno:0,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left
let pos=this.pos
pos--
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos--
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right
pos=this.pos
pos++
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos++
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+10
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos-10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-10
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}

},
{
	url:'imgs/w/1.png',
	type:"wg1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:1,
	sno:1,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+8)){
			next=getBlockInfo(pos+8)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+8)
			}
		}
		if(isValidLoc(pos-8)){
			next=getBlockInfo(pos-8)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-8)
			}
		}
		if(isValidLoc(pos+12)){
			next=getBlockInfo(pos+12)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+12)
			}
		}
		if(isValidLoc(pos-12)){
			next=getBlockInfo(pos-12)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-12)
			}
		}
		if(isValidLoc(pos+19)){
			next=getBlockInfo(pos+19)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+19)
			}
		}
		if(isValidLoc(pos-19)){
			next=getBlockInfo(pos-19)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-19)
			}
		}
		if(isValidLoc(pos+21)){
			next=getBlockInfo(pos+21)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+21)
			}
		}
		if(isValidLoc(pos-21)){
			next=getBlockInfo(pos-21)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-21)
			}
		}

	}
},
{
	url:'imgs/w/2.png',
	type:"wu1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:2,
	sno:2,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left down
let pos=this.pos
pos=pos-11
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-11
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right down
pos=this.pos
pos=pos-9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-9
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//left up
pos=this.pos
pos=pos+9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+9
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+11
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+11
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}
},
{
	url:'imgs/w/3.png',
	type:"wq",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:3,
	sno:3,
	moves:[],
	leftmoves:function(){
//left
let pos=this.pos
pos--
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos--
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
},
rightmoves:function(){
//right
let pos=this.pos
pos++
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos++
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
},
upmoves:function(){
//right
//up

let pos=this.pos+10
while(isValidLoc(pos)){
	let next=getBlockInfo(pos)

	if(next=="none"){

		this.moves.push(pos)
		pos=pos+10
	}
	else if(next.race=="b"){

		this.moves.push(pos)
		break
	}
	else{

		break
	}
}
},
downmoves:function(){
//down
pos=this.pos
pos=pos-10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-10
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
},
leftdownmoves:function(){
//left down
pos=this.pos
pos=pos-11
next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-11
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

},
rightdownmoves:function(){
//right down
pos=this.pos
pos=pos-9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-9
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

},
leftupmoves:function(){
//left up
pos=this.pos
pos=pos+9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+9
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

},
rightupmoves:function(){
	pos=this.pos
	pos=pos+11
	while(isValidLoc(pos)){
		next=getBlockInfo(pos)
		if(next=="none"){
			this.moves.push(pos)
			pos=pos+11
		}
		else if(next.race=="b"){
			this.moves.push(pos)
			break
		}
		else{
			break
		}
	}

},

movesCalc:function(){
	this.moves=[]
	if(this.pos!=-1){
		this.leftmoves();
		this.rightmoves();
		this.upmoves();
		this.downmoves();
		this.leftdownmoves();
		this.rightdownmoves()
		this.leftupmoves();
		this.rightupmoves();	
	}
}
},
{
	url:'imgs/w/4.png',
	type:"wk",
	pos:-1,
	moves:[],
	getMoves:function(){
		this.movesCalc()
		let bpos = black[3].pos
		if(isValidLoc(bpos+1)){
			this.moves=this.moves.filter((ele)=>ele!=bpos+1)
		}
		if(isValidLoc(bpos-1)){
			this.moves=this.moves.filter((ele)=>ele!=bpos-1)
		}
		if(isValidLoc(bpos+10)){
			this.moves=this.moves.filter((ele)=>ele!=bpos+10)
		}
		if(isValidLoc(bpos-10)){
			this.moves=this.moves.filter((ele)=>ele!=bpos-10)
		}
		if(isValidLoc(bpos-11)){
			this.moves=this.moves.filter((ele)=>ele!=bpos-11)
		}
		if(isValidLoc(bpos+11)){
			this.moves=this.moves.filter((ele)=>ele!=bpos+11)
		}
		if(isValidLoc(bpos-9)){
			this.moves=this.moves.filter((ele)=>ele!=bpos-9)
		}
		if(isValidLoc(bpos+9)){
			this.moves=this.moves.filter((ele)=>ele!=bpos+9)
		}
		return this.moves
	},
	inipos:4,
	sno:4,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos

		if(isValidLoc(pos-1)&&!isCheck("w",pos-1)&&getBlockInfo(pos-1).race!="w"){
			this.moves.push(pos-1)
		}
		if(isValidLoc(pos+1)&&!isCheck("w",pos+1)&&getBlockInfo(pos+1).race!="w"){
			this.moves.push(pos+1)
		}
		if(isValidLoc(pos-10)&&!isCheck("w",pos-10)&&getBlockInfo(pos-10).race!="w"){
			this.moves.push(pos-10)
		}
		if(isValidLoc(pos+10)&&!isCheck("w",pos+10)&&getBlockInfo(pos+10).race!="w"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos-11)&&!isCheck("w",pos-11)&&getBlockInfo(pos-11).race!="w"){
			this.moves.push(pos-11)
		}
		if(isValidLoc(pos-9)&&!isCheck("w",pos-9)&&getBlockInfo(pos-9).race!="w"){
			this.moves.push(pos-9)
		}
		if(isValidLoc(pos+11)&&!isCheck("w",pos+11)&&getBlockInfo(pos+11).race!="w"){
			this.moves.push(pos+11)
		}
		if(isValidLoc(pos+9)&&!isCheck("w",pos+9)&&getBlockInfo(pos+9).race!="w"){
			this.moves.push(pos+9)
		}
	}
},
{
	url:'imgs/w/2.png',
	type:"wu2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:5,
	sno:5,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left down
let pos=this.pos
pos=pos-11
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-11
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right down
pos=this.pos
pos=pos-9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-9
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//left up
pos=this.pos
pos=pos+9
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+9
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+11
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+11
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}
},
{
	url:'imgs/w/1.png',
	type:"wg2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:6,
	sno:6,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+8)){
			next=getBlockInfo(pos+8)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+8)
			}
		}
		if(isValidLoc(pos-8)){
			next=getBlockInfo(pos-8)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-8)
			}
		}
		if(isValidLoc(pos+12)){
			next=getBlockInfo(pos+12)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+12)
			}
		}
		if(isValidLoc(pos-12)){
			next=getBlockInfo(pos-12)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-12)
			}
		}
		if(isValidLoc(pos+19)){
			next=getBlockInfo(pos+19)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+19)
			}
		}
		if(isValidLoc(pos-19)){
			next=getBlockInfo(pos-19)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-19)
			}
		}
		if(isValidLoc(pos+21)){
			next=getBlockInfo(pos+21)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos+21)
			}
		}
		if(isValidLoc(pos-21)){
			next=getBlockInfo(pos-21)
			if(next=="none"||next.race=="b"){
				this.moves.push(pos-21)
			}
		}

	}
},
{
	url:'imgs/w/0.png',
	type:"wh2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:7,
	sno:7,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		if(this.pos!=-1){

//left
let pos=this.pos
pos--
let next={}
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos--
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}
//right
pos=this.pos
pos++
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos++
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos+10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos+10
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

pos=this.pos
pos=pos-10
while(isValidLoc(pos)){
	next=getBlockInfo(pos)
	if(next=="none"){
		this.moves.push(pos)
		pos=pos-10
	}
	else if(next.race=="b"){
		this.moves.push(pos)
		break
	}
	else{
		break
	}
}

}
}
},
{
	url:'imgs/w/5.png',
	type:"wp1",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:10,
	sno:8,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp2",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:11,
	sno:9,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp3",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:12,
	sno:10,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp4",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:13,
	sno:11,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp5",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:14,
	sno:12,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp6",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:15,
	sno:13,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp7",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:16,
	sno:14,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp8",
	pos:-1,
	getMoves:function(){
		this.movesCalc()
		return this.moves
	},
	inipos:17,
	sno:15,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos+10)=="none"){
			this.moves.push(pos+10)
			if(this.pos==this.inipos&&getBlockInfo(this.pos+20)=='none'){
				this.moves.push(this.pos+20)
			}
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos+9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos+11).race=="b"){
			this.moves.push(pos+11)
		}
	}
}]


/////////////////////start///////////////////////////////////////////////

function start(){
	removeAll()
	white.forEach((ele)=>{
		blocks[parseInt(ele.inipos,8)].innerHTML='<img src="'+ele.url+'" ele="'+ele.type+'">'
		ele.pos=ele.inipos
	})
	black.forEach((ele)=>{
		blocks[parseInt(ele.inipos,8)].innerHTML='<img src="'+ele.url+'" ele="'+ele.type+'">'
		ele.pos=ele.inipos
	})
	track()
	chance="white"
}
function raceSelect(){

}
function gameFinished(){
	chance="none"
	console.log('game finished')
}
function removeAll(){
	blocks.forEach(function(ele){
		ele.innerHTML=""
	})
	white.forEach(function(ele){
		ele.pos=-1
	})
	black.forEach(function(ele){
		ele.pos=-1
	})

}


////game setup
function bpress(blockid){

	if(select.id==-1&&chance=="white"){
		let clickedblock=getBlockInfo(blockid)
		if(clickedblock!="none"&& clickedblock.race=="w"){
			select.selected(blockid)
		}
		else{
			select.noselect()
		}
	}
	else if(select.id==-1&&chance=="black"){
		let clickedblock=getBlockInfo(blockid)
		if(clickedblock!="none"&& clickedblock.race=="b"){
			select.selected(blockid)
		}
		else{
			select.noselect()
		}
	}
	else if(select.id!=-1&&chance=="white"){
		let clickedblock=getBlockInfo(blockid)
		let selectedblock=getBlockInfo(select.id)
		if(clickedblock.race=='w'){
			select.selected(blockid)
		}
		else if(white[selectedblock.sno].getMoves().find((ele)=>ele==blockid)!==undefined){
			move(select.id,blockid)

		}
		else{
			select.noselect()
		}
// let selectmoves=white[selectedblock.sno].getMoves()
// if(selectmoves.find((ele)=>ele==blockid)

}
else if(select.id!=-1&&chance=="black"){
	let clickedblock=getBlockInfo(blockid)
	let selectedblock=getBlockInfo(select.id)
	if(clickedblock.race=='b'){
		select.selected(blockid)
	}
	else if(black[selectedblock.sno].getMoves().find((ele)=>ele==blockid)!==undefined){
		move(select.id,blockid)

	}
	else{
		select.noselect()
	}
}

}


blocks.forEach((block)=>{
	block.addEventListener("click",function(){
		bpress(this.id)

	})
})

//board tracking
//blocks[0].childNodes[0].attributes.ele  blocks[0].childElementCount
let btrack=[]
function track(){
	btrack=[]
	blocks.forEach((block)=>{
		if(block.childElementCount==1){
			btrack.push(block.childNodes[0].attributes.ele.nodeValue)
		}
		else{
			btrack.push('none')
		}
	})

}
///////////////////////////////////
