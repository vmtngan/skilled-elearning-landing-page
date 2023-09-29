<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'gradient';
</script>

<button
	class={`${
		variant === 'primary'
			? 'z-10 bg-dark-blue hover:bg-chetwode-blue'
			: variant === 'secondary'
			? 'bg-gradient-to-b from-persimmon to-magenta-pink hover:opacity-50'
			: 'relative bg-gradient-to-b from-vibrant-blue to-magenta-pink'
	} rounded-[28px] px-[24px] py-[10px] text-[16px] font-bold leading-[28px] text-white lg:px-[32px] lg:py-[14px] lg:text-[18px]`}
>
	<span
		class={variant === 'gradient'
			? 'absolute inset-0 block h-full w-full rounded-[28px] bg-white opacity-0 hover:opacity-50'
			: 'hidden'}
	/>
	<slot />
</button>
