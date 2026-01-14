<svelte:head>
	<title>Design System - Talent Finder</title>
	<meta name="description" content="Talent Finder design system components and styles" />
</svelte:head>

<div class="min-h-screen bg-secondary-50">
	<!-- Header -->
	<header class="bg-white border-b border-secondary-200">
		<div class="container-app py-6">
			<nav class="flex items-center justify-between">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href="/" class="text-xl font-bold text-primary-700">Talent Finder</a>
				<span class="badge-primary">Design System</span>
			</nav>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container-app py-12">
		<div class="mb-12">
			<h1 class="text-4xl font-bold mb-4">Design System</h1>
			<p class="text-secondary-600 text-lg max-w-2xl">
				A collection of reusable components and styles for building consistent user interfaces.
			</p>
		</div>

		<!-- Colors -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Colors</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<!-- Primary -->
				<div class="card">
					<h3 class="text-lg font-semibold mb-4">Primary</h3>
					<div class="space-y-2">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-primary-100"></div>
							<span class="text-sm text-secondary-600">primary-100</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-primary-500"></div>
							<span class="text-sm text-secondary-600">primary-500</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-primary-700"></div>
							<span class="text-sm text-secondary-600">primary-700</span>
						</div>
					</div>
				</div>

				<!-- Secondary -->
				<div class="card">
					<h3 class="text-lg font-semibold mb-4">Secondary</h3>
					<div class="space-y-2">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-secondary-100 border border-secondary-200"></div>
							<span class="text-sm text-secondary-600">secondary-100</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-secondary-500"></div>
							<span class="text-sm text-secondary-600">secondary-500</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-secondary-900"></div>
							<span class="text-sm text-secondary-600">secondary-900</span>
						</div>
					</div>
				</div>

				<!-- Accent -->
				<div class="card">
					<h3 class="text-lg font-semibold mb-4">Accent</h3>
					<div class="space-y-2">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-accent-100"></div>
							<span class="text-sm text-secondary-600">accent-100</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-accent-500"></div>
							<span class="text-sm text-secondary-600">accent-500</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded bg-accent-700"></div>
							<span class="text-sm text-secondary-600">accent-700</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Buttons -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Buttons</h2>
			<div class="card">
				<h3 class="text-lg font-semibold mb-4">Variants</h3>
				<div class="flex flex-wrap gap-4 mb-6">
					<button class="btn-primary">Primary</button>
					<button class="btn-secondary">Secondary</button>
					<button class="btn-accent">Accent</button>
					<button class="btn-outline">Outline</button>
					<button class="btn-ghost">Ghost</button>
				</div>

				<h3 class="text-lg font-semibold mb-4">Sizes</h3>
				<div class="flex flex-wrap items-center gap-4">
					<button class="btn-primary btn-sm">Small</button>
					<button class="btn-primary">Default</button>
					<button class="btn-primary btn-lg">Large</button>
				</div>
			</div>
		</section>

		<!-- Badges -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Badges</h2>
			<div class="card">
				<div class="flex flex-wrap gap-3">
					<span class="badge-primary">Primary</span>
					<span class="badge-accent">Accent</span>
					<span class="badge-success">Success</span>
					<span class="badge-warning">Warning</span>
					<span class="badge-error">Error</span>
				</div>
			</div>
		</section>

		<!-- Form Elements -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Form Elements</h2>
			<div class="card">
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<label class="label" for="demo-input">Default Input</label>
						<input class="input" id="demo-input" type="text" placeholder="Enter text..." />
					</div>
					<div>
						<label class="label" for="demo-error">Error Input</label>
						<input
							class="input input-error"
							id="demo-error"
							type="text"
							placeholder="Invalid input"
						/>
					</div>
					<div>
						<label class="label" for="demo-disabled">Disabled Input</label>
						<input
							class="input opacity-50 cursor-not-allowed"
							id="demo-disabled"
							type="text"
							placeholder="Disabled"
							disabled
						/>
					</div>
					<div>
						<label class="label" for="demo-email">Email Input</label>
						<input class="input" id="demo-email" type="email" placeholder="you@example.com" />
					</div>
				</div>
			</div>
		</section>

		<!-- Cards -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Cards</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="card">
					<h3 class="text-lg font-semibold mb-2">Default Card</h3>
					<p class="text-secondary-600">Card with shadow and rounded corners.</p>
				</div>
				<div class="card-bordered">
					<h3 class="text-lg font-semibold mb-2">Bordered Card</h3>
					<p class="text-secondary-600">Card with border instead of shadow.</p>
				</div>
			</div>
		</section>

		<!-- Alerts -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Alerts</h2>
			<div class="space-y-4">
				<div class="alert-info">
					<strong>Info:</strong> This is an informational message.
				</div>
				<div class="alert-success">
					<strong>Success:</strong> Operation completed successfully!
				</div>
				<div class="alert-warning">
					<strong>Warning:</strong> Please review before proceeding.
				</div>
				<div class="alert-error">
					<strong>Error:</strong> An error occurred. Please try again.
				</div>
			</div>
		</section>

		<!-- Typography -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Typography</h2>
			<div class="card">
				<div class="space-y-4">
					<h1>Heading 1</h1>
					<h2>Heading 2</h2>
					<h3>Heading 3</h3>
					<h4>Heading 4</h4>
					<h5>Heading 5</h5>
					<h6>Heading 6</h6>
					<p class="text-secondary-600">
						This is a paragraph of text. It demonstrates the default body text styling with
						appropriate line height and color for readability.
					</p>
					<p class="text-sm text-secondary-500">Small text for captions and helper text.</p>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="bg-secondary-900 text-secondary-300 py-8">
		<div class="container-app text-center">
			<p>Talent Finder - Design System</p>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/" class="text-primary-400 hover:text-primary-300 mt-2 inline-block">
				Back to Home
			</a>
		</div>
	</footer>
</div>
