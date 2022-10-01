<template>
	<div v-if="pageIsReady" class="max-w-screen-xl mx-auto">
		<NavBar />

		<Ban />

		<router-view></router-view>

		<Foot />
	</div>
	<div v-else>
		<Loading />
	</div>
</template>

<script>
import Ban from "./views/Ban.vue";
import MobileMenu from "./views/MobileMenu.vue";
import NavBar from "./views/NavBar.vue";
import Foot from "./views/Foot.vue";
import Loading from "./views/Loading.vue";

export default {
	name: "App",
	components: {
		MobileMenu,
		NavBar,
		Foot,
		Ban,
		Loading,
	},
	methods: {
		pageIsReady() {
			return document.readyState === "complete" ? true : false;
		},
	},
};
</script>