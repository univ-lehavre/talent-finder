<script lang="ts">
	import type { ColorPalette, GradientPalette } from '$lib/palettes';

	interface Props {
		palette: ColorPalette | GradientPalette;
		showHex?: boolean;
		compact?: boolean;
	}

	let { palette, showHex = false, compact = false }: Props = $props();

	const isGradient = (p: ColorPalette | GradientPalette): p is GradientPalette => {
		return 'css' in p;
	};

	const copyToClipboard = async (text: string): Promise<void> => {
		await navigator.clipboard.writeText(text);
	};
</script>

<div class="rounded-lg border border-secondary-200 bg-white overflow-hidden">
	<div class="p-3 border-b border-secondary-100">
		<div class="flex items-center justify-between">
			<h4 class="font-medium text-secondary-900">{palette.name}</h4>
			<span class="text-xs px-2 py-0.5 rounded-full bg-secondary-100 text-secondary-600 capitalize">
				{palette.type}
			</span>
		</div>
		{#if !compact}
			<p class="text-xs text-secondary-500 mt-1">{palette.description}</p>
		{/if}
	</div>

	{#if isGradient(palette)}
		<button
			type="button"
			class="w-full h-12 cursor-pointer hover:opacity-90 transition-opacity"
			style="background: {palette.css}"
			onclick={() => copyToClipboard(palette.css)}
			title="Click to copy CSS"
		></button>
		{#if showHex}
			<div class="p-2 bg-secondary-50 text-xs font-mono text-secondary-600 truncate">
				{palette.css}
			</div>
		{/if}
	{:else}
		<div class="flex {compact ? 'h-8' : 'h-10'}">
			{#each palette.colors as color (color)}
				<button
					type="button"
					class="flex-1 cursor-pointer hover:opacity-80 transition-opacity relative group"
					style="background-color: {color}"
					onclick={() => copyToClipboard(color)}
					title={color}
				>
					{#if showHex && !compact}
						<span
							class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono"
							style="color: {parseInt(color.slice(1), 16) > 0x888888 ? '#000' : '#fff'}"
						>
							{color}
						</span>
					{/if}
				</button>
			{/each}
		</div>
		{#if showHex && !compact}
			<div class="p-2 bg-secondary-50 flex gap-1 overflow-x-auto">
				{#each palette.colors as color (color)}
					<code class="text-xs text-secondary-600 whitespace-nowrap">{color}</code>
				{/each}
			</div>
		{/if}
	{/if}
</div>
