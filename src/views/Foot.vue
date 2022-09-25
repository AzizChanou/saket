<template>
	<footer class="bg-black p-8 md:py-12 md:px-16 text-white w-full">
		<div class="flex flex-wrap pb-4 border-b mb-4">
			<div class="w-full lg:w-1/3 space-y-6 mb-4">
				<h2 class="text-xl font-thin">SATEK</h2>
				<p>Montez en puissance et en visibilité</p>
			</div>
			<div class="md:w-1/2 lg:w-1/3 md:pr-6">
				<h2 class="text-xl font-thin">INFORMATIONS COMPLÉMENTAIRES</h2>
				<ul class="divide-y">
					<li class="py-4">
						<router-link :to="{ name: 'About' }">A propos</router-link>
					</li>
					<li class="py-4">
						<router-link :to="{ name: 'Home' }">Partenaire</router-link>
					</li>
					<li class="py-4">
						<router-link :to="{ name: 'Contact' }">Contacts</router-link>
					</li>
					<li class="py-4">
						<router-link :to="{ name: 'Home' }">FAQs</router-link>
					</li>
				</ul>
			</div>
			<div class="md:w-1/2 lg:w-1/3">
				<h2 class="text-xl font-thin">SUIVEZ NOUS SUR LES RÉSEAUX SOCIAUX</h2>
				<ul class="ml-2">
					<li class="py-4">
						<a href="#" class="space-x-4">
							<font-awesome-icon
								:icon="['fab', 'facebook']"
								class="text-white"
							/>
							<span>Facebook</span></a
						>
					</li>
					<li class="py-4">
						<a href="#" class="space-x-4">
							<font-awesome-icon
								:icon="['fab', 'instagram']"
								class="text-white"
							/>
							<span>Instagram</span></a
						>
					</li>
					<li class="py-4">
						<a href="#" class="space-x-4">
							<font-awesome-icon
								:icon="['fab', 'twitter']"
								class="text-white"
							/>
							<span>Twitter</span></a
						>
					</li>
					<li class="py-4">
						<a href="#" class="space-x-4">
							<font-awesome-icon
								:icon="['fab', 'whatsapp']"
								class="text-white"
							/>
							<span>Whatsapp</span></a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="text-center">
			<a href="">Cotonou - Benin</a> | <a href="">Mentions Legales</a> |
			<a href="">SATEK</a> <br />
			©2022
		</div>
	</footer>
</template>

<script>
export default {
	name: "Foot",
};
</script>