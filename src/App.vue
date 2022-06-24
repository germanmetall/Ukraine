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

*{
  box-sizing: border-box;
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
	width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	margin: 48px auto;
  &__big{
    max-width: 606px;
  }
  &__small{
    width: 40%;
    max-width: 256px;
    margin: 0 auto;
    &--left{}
    &--right{
      transform: rotateY(180deg);
    }
  }
}

.page{
  width: 100%;
	min-height: 100vh;
	margin: 0 auto;
	max-width: 900px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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
  max-width: 80vw;
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
