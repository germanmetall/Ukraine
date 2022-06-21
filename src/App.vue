<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: "Kyiv";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
	font-family: Kyiv;
	src: url("~@/assets/KyivTypeSans-Regular.otf");
}
@font-face {
	font-family: MAK;
	src: url("~@/assets/MAK.otf");
}

body{
  margin: 0;
  overflow-x: hidden;
}

.divider{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
	margin: 24px auto;
  &__small{
    &--left{}
    &--right{
      transform: rotateY(180deg);
    }
  }
}

.page{
	width: 100vw;
	min-height: 100vh;
	margin: 0 auto;
	max-width: 900px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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

.audio__player{
  &-title{
    white-space: pre-wrap;
    color: #E8DBDA !important;
    background: #000000b0;
    padding: 24px;
    border-radius: 12px;
  }
  &-play{
    cursor: pointer;
    >img{
      width: 144px !important;
      height: 144px !important;
      object-fit: cover;
    }
    &-icon{
      top: 48px !important;
      left: 48px !important;
    }
  }
}
</style>
