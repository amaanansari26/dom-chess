//haathi-h , ghoda-g, uooth-u, king-k, queen- q , padal - p
const black=[{
	url:'imgs/b/0.png',
	type:"bh1",
	pos:-1,
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
	inipos:26,
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
	inipos:eqv(22),
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
	inipos:eqv(3),
	sno:3
},
{
	url:'imgs/b/4.png',
	type:"bq",
	pos:-1,
	inipos:45,
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
	inipos:eqv(10),
	sno:8,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:eqv(11),
	sno:9,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:eqv(12),
	sno:10,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:eqv(13),
	sno:11,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:eqv(14),
	sno:12,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:eqv(15),
	sno:13,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:eqv(16),
	sno:14,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:eqv(17),
	sno:15,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos-10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos-10)
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
	inipos:3,
	sno:3,
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
			//up

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
	url:'imgs/w/4.png',
	type:"wk",
	pos:-1,
	inipos:4,
	sno:4
},
{
	url:'imgs/w/2.png',
	type:"wu2",
	pos:-1,
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
	inipos:20,
	sno:8,
	moves:[],
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp2",
	pos:-1,
	inipos:21,
	sno:9,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp3",
	pos:-1,
	inipos:22,
	sno:10,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp4",
	pos:-1,
	inipos:23,
	sno:11,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp5",
	pos:-1,
	inipos:24,
	sno:12,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp6",
	pos:-1,
	inipos:15,
	sno:13,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp7",
	pos:-1,
	inipos:16,
	sno:14,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
},
{
	url:'imgs/w/5.png',
	type:"wp8",
	pos:-1,
	inipos:17,
	sno:15,
	movesCalc:function(){
		this.moves=[]
		let pos=this.pos
		let next={}
		if(isValidLoc(pos+10)&&getBlockInfo(pos-10)=="none"){
			this.moves.push(pos+10)
		}
		if(isValidLoc(pos+9)&&getBlockInfo(pos-9).race=="b"){
			this.moves.push(pos+9)
		}
		if(isValidLoc(pos+11)&&getBlockInfo(pos-11).race=="b"){
			this.moves.push(pos+11)
		}
	}
}]

