<template>
	<main id="home" class="my-8 px-6 container max-w-6xl gap-6">
		<header class="text-center text-4xl my-3 font-thin">SATEK</header>
		<p class="my-10 text-justify">
			SATEK est une entreprise en développement au Bénin. Notre objectif est de
			fournir un service de qualité et de faciliter l’utilisation des
			technologies de l’information pour différents secteurs de la société
			<a href="#" class="text-blue-400 hover:text-blue-700 duration-500"
				>lire plus</a
			>
		</p>
		<div class="space-y-6 md:space-y-0 md:flex md:flex-wrap gap-6 w-full">
			<div
				class="
					bg-white
					md:w-[calc(50%-1rem)]
					lg:w-[calc(33.3333333333%-1rem)]
					text-justify
					shadow
					rounded
					p-10
					font-thin
				"
			>
				<router-link :to="{ name: 'Development' }"
					><header class="text-center my-4 hover:text-blue-600 duration-500">
						<font-awesome-icon
							:icon="['fas', 'code']"
							class="text-blue-400 text-6xl hover:text-blue-600 duration-500"
						/>
						<h2 class="my-3 mt-6 text-xl">DÉVELOPPEMENT</h2>
					</header></router-link
				>
				<p>
					Votre site web est la vitrine de votre entreprise sur internet et
					votre application web est votre outil de gestion qui vous aide à mieux
					la gérée. Pour vous faciliter la tâche, SATEK réalise des applications
					web et mobiles fonctionnant aussi bien sur tablette que sur smartphone
					et accompagne ses clients dans leur mise en œuvre (choix de
					l’opérateur, formation des utilisateurs et maintenance).
				</p>
			</div>
			<div
				class="
					bg-white
					md:w-[calc(50%-1rem)]
					lg:w-[calc(33.3333333333%-1rem)]
					text-justify
					shadow
					rounded
					p-10
					font-thin
				"
			>
				<router-link :to="{ name: 'Development' }"
					><header class="text-center my-4 hover:text-blue-600 duration-500">
						<font-awesome-icon
							:icon="['fas', 'chart-pie']"
							class="text-blue-400 text-6xl hover:text-blue-600 duration-500"
						/>
						<h2 class="my-3 mt-6 text-xl">DÉVELOPPEMENT</h2>
					</header></router-link
				>
				<p>
					SAKET met en place les outils qui améliorent votre visibilité locale
					sur la toile. En se concentrant sur ce qui impactera le plus votre
					croissance, nous concevons des stratégies marketing exceptionnelle qui
					génères plus de prospects, plus de ventes et plus de profits pour
					votre entreprise.
				</p>
			</div>
			<div
				class="
					bg-white
					md:w-[calc(50%-1rem)]
					lg:w-[calc(33.3333333333%-1rem)]
					text-justify
					shadow
					rounded
					p-10
					font-thin
				"
			>
				<router-link to="/Development">
					<header class="text-center my-4 hover:text-blue-600 duration-500">
						<font-awesome-icon
							:icon="['fas', 'video']"
							class="text-blue-400 text-6xl hover:text-blue-600 duration-500"
						/>
						<h2 class="my-3 mt-6 text-xl">STUDIO</h2>
					</header></router-link
				>
				<p>
					A l'heure du tout numérique, la production audiovisuelle s'impose
					comme LE média pour transmettre votre message de façon efficace et
					percutante. Notre savoir-faire en réalisation de films vidéo vous
					permet de transformer en images les idées de communication les plus
					audacieuses
				</p>
			</div>
			<div
				class="
					bg-white
					md:w-[calc(50%-1rem)]
					lg:w-[calc(33.3333333333%-1rem)]
					text-justify
					shadow
					rounded
					p-10
					font-thin
				"
			>
				<router-link to="/Development">
					<header class="text-center my-4 hover:text-blue-600 duration-500">
						<font-awesome-icon
							:icon="['fas', 'paintbrush']"
							class="text-blue-400 text-6xl hover:text-blue-600 duration-500"
						/>
						<h2 class="my-3 mt-6 text-xl">DESIGN</h2>
					</header></router-link
				>
				<p>
					SAKET prend en charge la création de tous vos éléments de
					communication : logos, chartes graphiques, rapports annuels,
					plaquettes commerciales, etc. Nous accompagnons régulièrement les
					startups dans la création de leur image de marque. Mais nous répondons
					également aux attentes des entreprises souhaitant faire évoluer leur
					charte graphique.
				</p>
			</div>
			<div
				class="
					bg-white
					md:w-[calc(50%-1rem)]
					lg:w-[calc(33.3333333333%-1rem)]
					text-justify
					shadow
					rounded
					p-10
					font-thin
				"
			>
				<router-link to="/Development">
					<header class="text-center my-4 hover:text-blue-600 duration-500">
						<font-awesome-icon
							:icon="['fas', 'cart-shopping']"
							class="text-blue-400 text-6xl hover:text-blue-600 duration-500"
						/>
						<h2 class="my-3 mt-6 text-xl">HORMON</h2>
					</header></router-link
				>
				<p>
					Hormon est une filiale de SAKET qui propose des produits vendus par
					des vendeurs en ligne et qui peuvent être disponibles aux enchères ou
					aux formats d’achat immédiat. Les principales catégories de Hormon
					sont l'électronique et les vêtements.
				</p>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "Home",
};
</script>