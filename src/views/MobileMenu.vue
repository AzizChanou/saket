<template>
	<div
		class="
			hidden
			transition-all
			ease-out
			duration-500
			mobile-menu
			p-6
			bg-white
			top-0
			right-0
			text-black
			fixed
			h-full
			w-3/5
		"
	>
		<ul class="divide-y">
			<li class="right-0">
				<button class="pb-6 text-2xl right-0" @click="menuToggle">
					<font-awesome-icon :icon="['fas', 'xmark']" />
				</button>
			</li>
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
	</div>
</template>

<script>
export default {
	name: "MobileMenu",
	methods: {
		menuToggle() {
			const btn = document.querySelector("button.mobile-menu-button");
			const menu = document.querySelector(".mobile-menu");
			menu.classList.toggle("hidden");
		},
	},
};
</script>