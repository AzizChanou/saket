<template>
	<header class="bg-white shadow w-full px-6 top-0 max-w-screen-xl mx-auto offset font-semibold sticky">
		<!-- NavBar -->
		<div class="flex justify-between py-2 h-12">
			<h3 class="">
				<router-link to="/">SATEK</router-link>
			</h3>

			<!-- Desktop View -->
			<ul class="hidden space-x-4 md:flex lg:space-x-8">
				<li class="hover:text-blue-600">
					<router-link :to="{ name: 'Home' }">Accueil</router-link>
				</li>
				<li class="hover:text-blue-600">
					<router-link :to="{ name: 'Development' }">Developpement</router-link>
				</li>
				<li class="hover:text-blue-600">
					<router-link :to="{ name: 'Home' }">Studio</router-link>
				</li>
				<li class="hover:text-blue-600">
					<router-link :to="{ name: 'Home' }">Design</router-link>
				</li>
				<li class="hover:text-blue-600">
					<router-link :to="{ name: 'Contact' }">Contacts</router-link>
				</li>
				<li class="hover:text-blue-600">
					<router-link :to="{ name: 'About' }">A propos</router-link>
				</li>
			</ul>

			<!-- Mobile Button -->
			<button
				class="flex md:hidden items-center space-x-2"
				@click="menuToggle"
			>
				<font-awesome-icon :icon="['fas', 'bars']" />
				<span>MENU</span>
			</button>
		</div>

		<!-- Mobile View -->
		<ul class="hidden mobile-menu md:hidden divide-y">
			<li class="py-4 hover:text-blue-600">
				<router-link :to="{ name: 'Home' }" @click="menuToggle"
					>Accueil</router-link
				>
			</li>
			<li class="py-4 hover:text-blue-600">
				<router-link :to="{ name: 'Development' }" @click="menuToggle"
					>Developpement</router-link
				>
			</li>
			<li class="py-4 hover:text-blue-600">
				<router-link :to="{ name: 'Home' }" @click="menuToggle"
					>Studio</router-link
				>
			</li>
			<li class="py-4 hover:text-blue-600">
				<router-link :to="{ name: 'Home' }" @click="menuToggle"
					>Design</router-link
				>
			</li>
			<li class="py-4 hover:text-blue-600">
				<router-link :to="{ name: 'Contact' }" @click="menuToggle"
					>Contacts</router-link
				>
			</li>
			<li class="py-4 hover:text-blue-600">
				<router-link :to="{ name: 'About' }" @click="menuToggle"
					>A propos</router-link
				>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
	name: "NavBar",
	methods: {
		menuToggle() {
			const menu = document.querySelector(".mobile-menu");
			menu.classList.toggle("hidden");
		},
	},
};
</script>