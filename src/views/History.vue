<template>
	<div class="history history--black">
		<div class="page">
			<!-- design elements -->
			<div id="leftOrnament"></div>
			<div id="rightOrnament"></div>

			<main class="main">
				<h1 class="heading heading--big">Ukrainian history</h1>

				<img class="divider divider__big" src="@/assets/divider.svg"/>

                <l-map ref="map" :v-model="zoom" :v-model:zoom="zoom" :center="[49.1,32.5]" style="height:50vh">
                    <l-tile-layer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        layer-type="base"
                        name="OpenStreetMap"
                    ></l-tile-layer>
                    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
                </l-map>
			</main>
		</div>
	</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson, LTileLayer, LControlLayers, } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LGeoJson,
        LTileLayer,
        LControlLayers
    },
	name: 'Home',
	data(){
		return{
            zoom: 12,
            geojson: {
                type: "FeatureCollection",
                features: [
                // ...
                ],
            },
            geojsonOptions: {
                // Options that don't rely on Leaflet methods.
            },
        }
	},
    async beforeMount() {
        // HERE is where to load Leaflet components!
        const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

        // And now the Leaflet circleMarker function can be used by the options:
        this.geojsonOptions.pointToLayer = (feature, latLng) =>
        circleMarker(latLng, { radius: 8 });
        this.mapIsReady = true;
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
		},
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

.history{
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
