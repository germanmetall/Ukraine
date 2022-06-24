<template>
	<div class="music music--black">
		<div class="page">
			<!-- design elements -->
			<div id="leftOrnament"></div>
			<div id="rightOrnament"></div>

			<main class="main">
				<h1 class="heading heading--big">Ukrainian music</h1>

				<img class="divider divider__big" src="@/assets/divider.svg"/>

                <div class="articles">

					<article class="modernMusic">
						<span class="article__heading">Modern music</span>
						<div class="modernMusic__imgs">
							<a title="Sun Shadow" href="https://youtu.be/d6BNzaV5kZc" target="_blank" class="modernMusic__imgContainer">
								<img class="modernMusic__img" src="@/assets/tinsontsia.jpg"/>
							</a>

							<a title="Kalush (Orchestra)" href="https://youtu.be/Z8Z51no1TD0" target="_blank"  class="modernMusic__imgContainer">
								<img class="modernMusic__img" src="@/assets/kalushO.jpg"/>
							</a>

							<a title="Antytila" href="https://youtu.be/adzOwkpyWDQ" target="_blank"  class="modernMusic__imgContainer">
								<img class="modernMusic__img" src="@/assets/antytila.jpg"/>
							</a>
						</div>

						<div class="modernMusic__text">
							We have a big variety of genres. Metal, Rap, Pop. The latest tendency - adding folk elements to music - also affects them. Not only by producing content in Ukrainian language, but also using our own old tales, stories, national themes. Alongside with a bunch of national instruments. The most popular are described below.
							<br/><br/>
							These bands above are my personal recomendations. You can see their most impressive videos by <span class="band-name">clicking on images above</span>. You will be redirected to YouTube.
							<br/>
							<br/>
							<span class="band-name" @mouseover="hoverBand(0)" @mouseout="unhoverBand(0)" @click="goToBand(0)">Sun Shadow (Тінь Сонця)</span> performs heavy-metal and folk-metal.
							<br/>
							<br/>
							<span class="band-name" @mouseover="hoverBand(1)" @mouseout="unhoverBand(1)" @click="goToBand(1)">Kalush (Калуш)</span> is a world-known (thanks to the Eurovision'22) Ukrainian rap-band. Has two projects: the original Kalush (more of a "straight" rap) and Kalush Orchestra, which focuses on hip hop blended with folk motifs and elements from Ukrainian traditional music.
							<br/>
							<br/>
							Fans of pop-music may also like <span class="band-name" @mouseover="hoverBand(2)" @click="goToBand(2)" @mouseout="unhoverBand(2)">Antytila (Антитіла)</span>. This band also combines ukrainian style width a pop-rock / indie-rock / alt-rock.
						</div>

						<div class="divider">						
							<img class="divider divider__small divider__small--left" src="@/assets/divider-small.svg"/>
							<img class="divider divider__small divider__small--right" src="@/assets/divider-small.svg"/>
						</div>
					</article>

                    <article class="article" v-for="(article, index) of articles" :key="article">
						<a :href="article.href" target="_blank" class="article__heading">{{article.heading}}</a>
                        <img class="article__img" :src="article.img"/>
                        <div class="article__info">
							<span class="article__text">{{article.text}}</span>
							<div class="media">
								<div class="media__instance" v-for="media of article.media" :key="media">
									<a class="media__link" :href="media.href" target="_blank">Link</a>
									<AudioPlayer :option="{
											src: media.src,
											title: media.titleEng+'\n\n'+media.title,
											coverImage: media.img
									}" />
								</div>
							</div>
						</div>

						<div class="divider">						
							<img v-if="index < articles.length - 1" class="divider divider__small divider__small--left" src="@/assets/divider-small.svg"/>
							<img v-if="index < articles.length - 1" class="divider divider__small divider__small--right" src="@/assets/divider-small.svg"/>
						</div>
                    </article>

                </div>
			</main>
		</div>
	</div>
</template>

<script>
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
export default {
	name: 'Home',
	components: {
		AudioPlayer
	},
	data(){
		return{
            articles: [
                {
					heading: "Bandura",
					href: "https://en.wikipedia.org/wiki/Bandura",
                    text: "- the most known Ukrainian musical instrument (alongside with kobza). Closely related with hapr, lyre. It is suggested that the instrument developed as a hybrid of gusli (psaltery) and kobza (lute). First mentioned in 1441. Was one of the most popular instrument among cossacs. Is regaining it's popularity from 1970s.\n\nModern musicians like to use bandura in folk-rock/metal, folk-pop. Can be performed either solo or combined with other instruments.\n\nBands: Тінь Сонця, Бандурбенд, HASPYD, Шпилясті кобзарі",
                    img: "https://static.ukrinform.com/photos/2018_10/1540217060-709.jpg",
					media: [
						{
							src: "./DykiHusi.mp3",
							img: "https://i.scdn.co/image/ab67616d0000b2730d58ecad6d7aa01039d2c501",
							title: "[Фрагмент]\nТінь Сонця - Дикі Гуси, 2014",
							titleEng: "[Fragment]\nSun Shadow - Wild Geese, 2014",
							href: "https://www.youtube.com/watch?v=u4tK1Y74njk"
						},
						{
							src: "./Oy-ziydy-ziydy-iasen-misiatsiu.mp3",
							img: "https://ukrmusic.online/wp-content/uploads/2020/11/Melodyia_Lenynhradskyy-zavod_ND-11466.webp",
							title: "[Фрагмент]\nФедір Жарко - Ой зійди, зійди, ясен місяцю, 1966",
							titleEng: "[Fragment]\nFedir Zharko - Oh come, come, bright moon, 1966",
							href: "https://ukrmusic.online/encyclopedia/zharko-fedir-avramovych/"
						}
					]
                },{
					heading: "Sopilka",
					href: "https://en.wikipedia.org/wiki/Sopilka",
                    text: "- one of the oldest Ukrainian instruments. In fact, it is more than an instrument - it's a family of varieties of flute. It is easy to master sopilka as if it was a recorder.\n\nBands: KOZAK SYSTEM, Гайдамаки, Воплі Відоплясова, Kalush, Go_A",
                    img: "./sopilka.jpg",
					media: [
						{
							src: "./sabre.mp3",
							img: "https://i.scdn.co/image/ab67616d0000b273fb6016fa60ace82d92b287f5",
							title: "[Фрагмент]\nKOZAK SYSTEM - Шабля, 2013",
							titleEng: "[Fragment]\nKOZAK SYSTEM - Sabre, 2013",
							href: "https://youtu.be/9vA9y5u6hcs"
						},
						{
							src: "./svit.mp3",
							img: "https://content1.rozetka.com.ua/goods/images/big/252802708.png",
							title: "[Фрагмент]\nВоплі Відоплясова - Світ, 2001",
							titleEng: "[Fragment]\nVopli Vidopliassova - World, 2001",
							href: "https://youtu.be/t9Z7LR5uBS0"
						}
					]
                },{
					heading: "Trembita",
					href: "https://en.wikipedia.org/wiki/Trembita",
                    text: "- very big Ukrainian instrument, mostly used in the Carpathians region. There are similar words in other languages: trumpet, trombetta. Closely related with aplhorn, trumpet. Is usually 3-8 meters in long.\n\nIt is rarely used on a regular basis in bands.",
                    img: "https://koruna.ua/wp-content/uploads/2019/02/DmMFIRcXcAEycwd.jpg",
					media: [
						{
							src: "./trembita1.mp3",
							img: "https://i.ytimg.com/vi/liDgLIgLfFY/maxresdefault.jpg",
							title: "[Фрагмент]\nОлександр Кварта - Трембіта, 2016",
							titleEng: "[Fragment]\nOlexandr Kvarta - Trembita, 2016",
							href: "https://youtu.be/hOPHphKuDRU"
						},
						{
							src: "./trembita2.mp3",
							img: "https://i.ytimg.com/vi/93k9pn8t8Qo/maxresdefault.jpg",
							title: "",
							titleEng: "[Fragment]\nKRECHET - Trembita, 2021",
							href: "https://youtu.be/93k9pn8t8Qo"
						}
					]
                }
            ]
        }
	},
	mounted(){
		// on scroll
		window.addEventListener("scroll", () => {
			let scrollPercentage = window.scrollY / document.body.scrollHeight;
			// 0% = -86px, 100% = 0px
			document.querySelector("#leftOrnament").style.top = `${-86 * (1 - scrollPercentage)}px`;
		});
	},
	methods:{
		hoverBand(index){
			document.querySelectorAll(".modernMusic__img")[index].classList.add("active");
		},
		unhoverBand(index){
			document.querySelectorAll(".modernMusic__img")[index].classList.remove("active");
		},
		goToBand(index){
			scrollTo({
				left: 0,
				top: +(document.querySelectorAll(".modernMusic__img")[index].offsetTop) - 100,
 				behavior: 'smooth'
			});
		}
	}
}
</script>
<style lang="scss" scoped>
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

.modernMusic{
    background: radial-gradient(#bbffd340, #00000000 80%);
	&__imgs{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	&__img{
		width: 300px;
		height: 200px;
		object-fit: cover;
		filter: grayscale(1);
		transition: .75s;
		cursor: pointer;
		transform-origin: 50% 50%;
		object-position: center top;
		transform: scale(1);
		&:hover, &.active{
			filter: grayscale(0);
			transform: scale(1.1);
		}
		&Container{
			max-width: 300px;
			overflow: hidden;
			clip-path: polygon(50px 0, 100% 0, calc(100% - 50px) 100%, 0 100%);
		}
	}
	&__text{
		padding: 24px 0;
        font-size: 20px;
		.band-name{
			color: lightcoral;
			cursor: default;
		}
	}
}

.articles{
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.article{
    width: 100%;
    background: radial-gradient(#bbffd340, #00000000 80%);
    height: max-content;
    min-height: 300px;
    &__img{
        width: 100%;
        max-width: 300px;
		clip-path: ellipse(30% 50% at 50% 50%);
		shape-outside: ellipse(30% 50% at 50% 50%);
        //clip-path: polygon(50px 0, 100% 0, calc(100% - 50px) 100%, 0 100%);
        //shape-outside: polygon(50px 0, 100% 0, calc(100% - 50px) 100%, 0 100%);
        margin-right: 36px;
		aspect-ratio: 1/1;
		object-fit: cover;
        float: left;
		left: 0;
		transition: .75s;
		object-position: 40% 50%;
		&:hover{
			clip-path: ellipse(50% 50% at 50% 50%);
			shape-outside: ellipse(50% 50% at 50% 50%);
			//clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
			//shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
    }
	&__info{
		text-align: start;
	}
	&__heading{
		display: block;
		font-size: 28px;
		text-align: center;
		margin: 0 0 16px 0;
		color: lightcoral;
	}
    &__text{
		height: 100%;
        font-size: 20px;
		white-space: pre-wrap;
    }
	.media{
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 24px;
		align-items: center;
		justify-content: space-evenly;
		padding: 24px;
		&__instance{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 12px;
		}
		&__link{
			font-size: 22px;
			color: skyblue;
		}
	}
}

.music{
	height: auto;
	&--white{}
	&--black{
		background-color: #000;
		color: #ededec;
		.heading{
			color: #EDDAD8;
		}
		#rightOrnament{
			background-image: url("~@/assets/image_2022-03-27_14-32-52.png");
		}
	}
}

@media (max-width: 800px) {
	@keyframes leftOrnamentAnimationMobile {
		0%{
			transform: rotateZ(-90deg) translateY(-150vw);
		}
		100%{
			transform: rotateZ(-90deg) translateY(-100px);
		}
	}
	#leftOrnament, #rightOrnament{
		display: none;
	}
	.main{
		position: relative;
		z-index: 2;
		padding: 12px;
	}
	.modernMusic{
		&__imgs{
			flex-direction: column;
			gap: 24px;
		}
		&__img{
			&Container{
				clip-path: unset;
				border-radius: 24px;
			}
		}
	}
	.article{
		max-width: 80vw;
		margin: 0 auto;
		&__heading{
			margin: 0 0 32px 0;
		}
		&__img{
			float: unset;
			clip-path: unset;
			border-radius: 48px;
			margin: 0 auto 24px auto;
			&:hover{
				clip-path: unset;
			}
		}
		&__info{
			text-align: center;
		}
		.media{
			max-width: 80vw;
			margin: 24px auto;
			flex-direction: column;
			padding: 0px;
		}
	}
}
</style>
