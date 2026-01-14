<script lang="ts">
	interface Props {
		label: string;
		value: string | number;
		variant?: 'default' | 'success' | 'danger';
		prefix?: string;
	}

	let { label, value, variant = 'default', prefix = '' }: Props = $props();

	const valueClass = $derived(
		variant === 'success'
			? 'text-green-600'
			: variant === 'danger'
				? 'text-red-600'
				: 'text-gray-900'
	);
</script>

<div class="bg-white rounded-lg shadow p-6">
	<div class="text-sm text-gray-500 uppercase tracking-wide">{label}</div>
	<div class="text-3xl font-bold {valueClass}">{prefix}{value}</div>
</div>
