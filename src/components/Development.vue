<template>
	<main id="Development" class="my-8 px-6 container max-w-6xl gap-6">
		<header class="text-center text-4xl my-3 font-thin">NOS PLANS</header>
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
				<a href="#"
					><header class="text-center my-4 divide-y">
						<h2 class="my-3 mt-6 text-xl hover:text-blue-400 duration-500">
							SITE WEB NON TRANSACTIONNEL
						</h2>
						<h2 class="my-3 mt-6 text-3xl bg-blue-400 rounded-full hover:bg-blue-600 duration-500 text-white font-semibold">
							699$
						</h2>
					</header></a
				>
				<ul class="border-b space-y-2 pb-2">
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Thème de base adaptatif à choisir</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>7 pages simples de services où produits</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Référencement pour les moteurs de recherches SEO</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Systeme de gestion du contenu wordpress</span>
					</li>
				</ul>
				<div class="space-x-2">
					<font-awesome-icon
						:icon="['fas', 'asterisk']"
						class="text-blue-400"
					/>
					<span
						>D'autres fonctionnalites sont disponibles pour un tarif
						additionnel</span
					>
				</div>
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
				<a href="#"
					><header class="text-center my-4 divide-y">
						<h2 class="my-3 mt-6 text-xl hover:text-blue-400 duration-500">
							SITE WEB TRANSACTIONNEL
						</h2>
						<h2 class="my-3 mt-6 text-3xl bg-blue-400 rounded-full hover:bg-blue-600 duration-500 text-white font-semibold">
							1899$
						</h2>
					</header></a
				>
				<ul class="border-b space-y-2 pb-2">
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Thème de base adaptatif à choisir</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>7 pages simples de services où produits</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Référencement pour les moteurs de recherches SEO</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Systeme de gestion du contenu wordpres</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Bilingue( Francais & Anglais )</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Paiement en ligne</span>
					</li>
				</ul>
				<div class="space-x-2">
					<font-awesome-icon
						:icon="['fas', 'asterisk']"
						class="text-blue-400"
					/>
					<span
						>D'autres fonctionnalites sont disponibles pour un tarif
						additionnel</span
					>
				</div>
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
				<a href="#"
					><header class="text-center my-4 divide-y">
						<h2 class="my-3 mt-6 text-xl hover:text-blue-500 duration-500">
							APPLICATION WEB
						</h2>
						<h2 class="my-3 mt-6 text-3xl bg-blue-400 rounded-full hover:bg-blue-600 duration-500 text-white font-semibold">
							-$
						</h2>
					</header></a
				>
				<ul class="border-b space-y-2 pb-2">
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Thème de base adaptatif à choisir</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Base de donnees MySQL PostgreSQL</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Référencement pour les moteurs de recherches SEO</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Framework PHP : Laravel, Symphonie</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Framework Javascript : VueJS, React</span>
					</li>
					<li class="space-x-2">
						<font-awesome-icon :icon="['fas', 'check']" class="text-blue-400" />
						<span>Migration de donnees</span>
					</li>
				</ul>
				<div class="space-x-2">
					<font-awesome-icon
						:icon="['fas', 'asterisk']"
						class="text-blue-400"
					/>
					<span
						>D'autres fonctionnalites sont disponibles pour un tarif
						additionnel</span
					>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "Development",
};
</script>