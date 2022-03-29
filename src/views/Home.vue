<template>
	<div class="home home--black">
		<div class="page">
			<!-- design elements -->
			<div id="leftOrnament"></div>
			<div id="rightOrnament"></div>

			<main class="main">
				<h1 class="heading heading--big">Ukrainian culture</h1>

				<img class="divider" src="@/assets/divider.svg"/>

				<nav>
					<div class="list list--no-type">
						<div class="listItem heading heading--small" v-for="tag of getTags()" :key="tag" @click="applyFilter(tag)">
							{{tag}}
						</div>
					</div>
				</nav>
			</main>
		</div>

		<div class="page page--extend">
			<div class="list list--articles">
				<div class="listItem" v-for="article of filteredArticles" :key="article">
					<article class="article">
						<h1 class="article__title heading heading--medium">
							{{article.title}}
						</h1>
						<span class="article__description">
							{{article.description}}
						</span>
						<div class="article__info">
							<span class="article__author">
								{{article.author}}
							</span>
							<time class="article__date">
								{{article.date}}
							</time>
						</div>
					</article>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data(){
		return{
			articles: [
				{
					tags: ["Literature"],
					title: "Lit 1",
					description: "Description about this article lorem ipsum dolor sit amet",
					author: "Herman Mossur",
					date: new Date().toLocaleDateString()
				},{
					tags: ["Literature", "Ethno life"],
					title: "Lit & ethno 1",
					description: "Description about this article lorem ipsum dolor sit amet",
					author: "Herman Mossur",
					date: new Date().toLocaleDateString()
				},{
					tags: ["Places"],
					title: "Places 1",
					description: "Description about this article lorem ipsum dolor sit amet",
					author: "Herman Mossur",
					date: new Date().toLocaleDateString()
				},{
					tags: ["Literature", "Places"],
					title: "Lit & places 1",
					description: "Description about this article lorem ipsum dolor sit amet",
					author: "Herman Mossur",
					date: new Date().toLocaleDateString()
				},
			],
			filteredArticles: [],
			filters: [],
			isCollapsing: false
		}
	},
	mounted(){
		// on scroll
		window.addEventListener("scroll", () => {
			let scrollPercentage = (window.scrollY+window.innerHeight) / document.body.scrollHeight;
			// 0% = -86px, 100% = 0px
			document.querySelector("#leftOrnament").style.top = `${-86 * (1 - scrollPercentage)}px`;
		});
	},
	methods:{
		getTags(){
			let tags = [];
			this.articles.forEach(el => {
				el.tags.forEach(tag => {
					if(!tags.includes(tag)) tags.push(tag);
				})
			});
			return tags;
		},
		applyFilter(tag){
			if(this.isCollapsing) return;
			let toBeCollapsed = false;
			if(this.filters.includes(tag)){
				if(this.filters.length == 1) toBeCollapsed = true;
				else this.filters = this.filters.filter(el => el != tag);
			}
			else this.filters.push(tag);

			this.filteredArticles = this.articles.filter(article => article.tags.some(tag => this.filters.includes(tag)));

			if(toBeCollapsed) {
				document.querySelectorAll(".page")[0].classList.remove("hasFilters");
				document.querySelector(`.page--extend`).style.maxHeight = 0;
				this.isCollapsing = true;
				document.querySelector("#leftOrnament").style.top = "-86px";
				setTimeout(() => {
					this.filters = [];
					this.isCollapsing = false;
					document.querySelector(`.page--extend`).classList.remove("active");
				}, 750)
			}
			else {
				setTimeout(() => {
					document.querySelectorAll(".page")[0].classList.add("hasFilters");
					document.querySelector(`.page--extend`).style.maxHeight = `${document.querySelector(`.list--articles`).scrollHeight}px`;
					document.querySelector(`.page--extend`).classList.add("active");
					let scrollPercentage = (window.scrollY+window.innerHeight) / document.body.scrollHeight;
					document.querySelector("#leftOrnament").style.top = `${-86 * (1 - scrollPercentage)}px`;
				}, 50)
			}
			console.log(this.filters);
		},
	}
}
</script>
<style lang="scss">
body{
    background-color: #ededec;
	/*
	background-image: url("~@/assets/heart.png");
	*/
    margin: 0;
    padding: 0;
    overflow-x: hidden;
	overflow-y: scroll;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
#leftOrnament{
    position: fixed;
    left: 5vw;
    top: -86px;
    width: 125px;
	height: 250px;
    background-image: url("~@/assets/marker.svg");
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
	transition: .75s;
    animation: leftOrnamentAnimation 2s 3s ease-in-out forwards;
}
#rightOrnament{
    position: fixed;
    right: 10vw;
    top: 0;
    width: 100px;
    height: 110vh;
    background-image: url("~@/assets/image_2022-03-27_14-33-16.png");
    background-repeat: repeat-y;
    background-size: contain;
    z-index: 0;
}
.page{
	width: 100vw;
	height: 100vh;
	margin: 0 auto;
	max-width: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 750ms ease-in-out;
	&.hasFilters{
		height: 60vh;
	}
	&--extend{
		overflow: hidden;
		max-height: 0;
		transition: max-height 750ms ease-in-out;
		justify-content: flex-start;
		&.active{
			padding-bottom: 20vh;
		}
	}
}

@font-face {
	font-family: Kyiv;
	src: url("~@/assets/KyivTypeSans-Regular.otf");
}
@font-face {
	font-family: MAK;
	src: url("~@/assets/MAK.otf");
}

.main{
	position: relative;
	z-index: 1;
}

.heading{
	font-family: "Kyiv";
    &--big{
		font-family: "MAK";
        font-size: 4rem;
    }
    &--medium{
		font-size: 3rem;
	}
    &--small{
		font-size: 2rem;
	}
}
.list{
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: center;
    align-items: center;
	gap: 48px;
    &Item{
		position: relative;
		cursor: pointer;
    }
    &--no-type{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		.listItem{
			position: relative;
			padding: 11px 22px;
			background: #8B8080;
			border-radius: 24px;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			transition: .75s;
			cursor: pointer;
			&:hover{
				filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
			}
			&::before{
				position: absolute;
				content: "";
				top: -14px;
				left: calc(50% - 15px);
				margin: 0 auto;
				width: 30px;
				height: 30px;
				background-image: url("~@/assets/image-removebg-preview 1.png");
				background-repeat: no-repeat;
			}
		}
    }
	&--articles{
		flex-direction: row;
	}
}

.divider{
	margin: 24px auto;
}

@media (max-width: 800px) {
	.page{
		display: grid;
		grid-template-rows: 100px auto;
	}
	@keyframes leftOrnamentAnimationMobile {
		0%{
			transform: rotateZ(-90deg) translateY(-150vw);
		}
		100%{
			transform: rotateZ(-90deg) translateY(-100px);
		}
	}
	#leftOrnament{
		position: relative !important;
		z-index: 1;
		width: 100px;
		height: 100vw;
		clip-path: none;
		left: 0;
		top: 2vh;
		transform-origin: 100% 0;
		transform: rotateZ(-90deg) translateY(-150vw);
    	animation: leftOrnamentAnimationMobile 4s 1s ease-in-out forwards;
	}
	.main{
		position: relative;
		z-index: 2;
	}
}

.home{
	width: 100vw;
	height: auto;
	&--white{}
	&--black{
		background-color: #000;
		color: #ededec;
		.heading{
			color: #EDDAD8;
		}
		.list--no-type>.listItem{
			background-color: #E8DBDA;
			color: #000;
		}
		#rightOrnament{
			background-image: url("~@/assets/image_2022-03-27_14-32-52.png");
		}
	}
}
</style>
