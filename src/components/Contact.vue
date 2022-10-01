<template>
	<main id="contact" class="my-8 px-6 container max-w-6xl mx-auto gap-6">
		<div class="space-y-6 md:space-y-0 md:flex md:flex-wrap gap-6 w-full">
			<div
				class="
					bg-white
					space-y-6
					w-full
					text-justify
					shadow
					rounded
					p-10
					font-thin
				"
			>
				<h1 class="text-3xl">FORMULAIRE DE CONTACT</h1>
				<p>
					Envoyez-nous vos questions ou suggestions via ce formulaire. Essayez
					d'être aussi précis que possible sur les problèmes et remarques.
				</p>
				<form class="flex flex-wrap gap-8">
					<input
						type="text"
						placeholder="Nom &amp; Prenom"
						required
						class="
							rounded
							border
							outline-blue-600
							bg-slate-100
							p-4
							h-12
							w-full
							md:w-[calc(50%-1rem)]
						"
					/>
					<input
						type="email"
						placeholder="Email"
						required
						class="
							rounded
							border
							outline-blue-600
							p-4
							bg-slate-100
							h-12
							w-full
							md:w-[calc(50%-1rem)]
						"
					/>
					<textarea
						placeholder="Message"
						required
						rows="6"
						class="rounded border outline-blue-600 bg-slate-100 p-2 h-48 w-full"
					/>
					<div class="flex flex-row-reverse w-full gap-4">
						<input
							type="submit"
							value="Envoyer"
							class="rounded bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 hover:scale-125 duration-1000"
						/>
						<input
							type="reset"
							value="Renitialiser"
							class="
								border border-slate-500
								hover:border-blue-600 hover:text-blue-600
								rounded
								py-2
								px-4
							"
						/>
					</div>
					<div class="md:flex text-center space-x-4 m-auto">
						<span class="flex space-x-2 items-center"
							><font-awesome-icon
								:icon="['fas', 'location-dot']"
								class="text-blue-400"
							/>
							<p>Cotonou - Bénin</p>
						</span>
						<span class="flex space-x-2 items-center"
							><font-awesome-icon
								:icon="['fas', 'phone']"
								class="text-blue-400"
							/>
							<p>+229 66 48 51 60</p></span
						>
						<span class="flex space-x-2 items-center"
							><font-awesome-icon
								:icon="['fas', 'mobile-screen-button']"
								class="text-blue-400"
							/>
							<p>+229 69 45 78 94</p></span
						>
					</div>
				</form>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "Contact",
};
</script>