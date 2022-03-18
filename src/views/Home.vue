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
				<li class="listItem" v-for="tag of tags" :key="tag">
					{{tag}}
				</li>
			</ul>

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
			tags: ["Literature", "Ethno life", "Places"]
		}
	},
}
</script>
<style lang="scss">
body{
    background: #fff;
    margin: 0;
    padding: 0;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
#leftOrnament{
    position: absolute;
    left: 5vw;
    top: 0;
    width: 180px;
    height: 110vh;
    background-image: url("~@/assets/embroidery-ukrainian-national-ornament-vector-illustration_324757-1515.png");
    background-repeat: repeat-y;
    background-size: contain;
    z-index: 2;
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
    animation: slideAnimation 5s 1s ease-in-out forwards;
}

.heading{
    &--big{
        font-size: 4rem;
    }
    &--medium{}
    &--small{}
}
.list{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    &Item{
        margin: 0 12px;
        padding: 12px 16px;
        background: coral;
        border-radius: 2px;
    }
    &--no-type{
        list-style-type: none;
    }
}
</style>
