<template>
	<div class="page">
    	<!-- design elements -->
		<div id="leftOrnament"></div>
		<div id="rightOrnament"></div>
		<div id="slideAnimation"></div>

    	<!-- content -->
		<main class="main">
			<h1 class="heading heading--big">Ukrainian culture</h1>
			<ul class="list list--no-type">
				<li class="listItem heading heading--small" v-for="tag of tags" :key="tag">
					{{tag}}
				</li>
			</ul>

			<br/>
			<div class="divider"></div>
			<br/>

			<ul class="list list--articles">
				<li class="listItem" v-for="article of articles" :key="article">
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
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data(){
		return{
			tags: ["Literature", "Ethno life", "Places"],
			articles: [
				{
					title: "Title",
					description: "Description about this article lorem ipsum dolor sit amet",
					author: "Herman Mossur",
					date: new Date().toLocaleDateString()
				},
				{
					title: "Title",
					description: "Description about this article lorem ipsum dolor sit amet",
					author: "Herman Mossur",
					date: new Date().toLocaleDateString()
				}
			]
		}
	},
}
</script>
<style lang="scss">
body{
    background-color: #ededec;
	background-image: url("~@/assets/heart.png");
    margin: 0;
    padding: 0;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
@keyframes leftOrnamentAnimation {
	0%{
		top: -110vh;
	}
	100%{
		top: -80vh;
	}
}
#leftOrnament{
    position: absolute;
    left: 5vw;
    top: 0;
    width: 180px;
	height: 110vh;
	top: -110vh;
    background-image: url("~@/assets/embroidery-ukrainian-national-ornament-vector-illustration_324757-1515.png");
    background-repeat: repeat-y;
    background-size: contain;
    z-index: 2;
	clip-path: polygon(0 0, 0 100%, 50% 91%, 100% 100%, 100% 0);
    animation: leftOrnamentAnimation 2s 3s ease-in-out forwards;
}
#rightOrnament{
    position: absolute;
    right: 5vw;
    top: 0;
    width: 100px;
    height: 110vh;
    background-image: url("~@/assets/Ukrainian-ornament-with-flowers-vector-illustration.svg");
    background-repeat: repeat-y;
    background-size: contain;
    z-index: 2;
}
@keyframes slideAnimation {
    from{
        width: 0;
    }
    to{
        width: 40vw;
    }
}
#slideAnimation{
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 100vh;
    backdrop-filter: invert(1);
    animation: slideAnimation 3s .5s ease-in-out forwards;
}

.heading{
    &--big{
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
    justify-content: flex-start;
    align-items: center;
	gap: 48px;
    &Item{
		position: relative;
        border-radius: 2px;
		cursor: pointer;
		&::after{
			content: "";
			position: absolute;
			bottom: -6px;
			left: 0;
			width: 20%;
			height: 2px;
			background: #000;
			transition: .5s;
		}
		&:hover{
			&::after{
				width: 120%;
				left: -5%;
			}
		}
		&.active{
			&::after{
				width: 120%;
				left: -5%;
			}
		}
    }
    &--no-type{
        list-style-type: none;
    }
}

.divider{
	margin: 24px auto;
	width: 45%;
	height: 20px;
	background: red;
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
	#rightOrnament{
		display: none;
	}
	#slideAnimation{
		animation: unset;
	}
	.main{
		position: relative;
		z-index: 2;
	}
}
</style>
