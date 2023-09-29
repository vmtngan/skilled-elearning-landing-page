<script lang="ts">
	export let url: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="relative rounded-[10px] bg-white px-[28px] pb-[32px] pt-[56px] shadow-[0_25px_50px] shadow-deep-blue/5 md:px-[32px] lg:pb-[40px] lg:pt-[64px]"
>
	<img class="absolute top-[-24px] w-[56px]" src={url} alt="icon" />
	<h3
		class="mb-[16px] text-[20px] font-extrabold leading-[25px] text-dark-blue lg:mb-[24px] lg:text-[24px] lg:leading-[30px]"
	>
		{title}
	</h3>
	<p
		class="mb-[24px] text-[16px] font-medium leading-[26px] text-dark-grayish-blue lg:mb-[52px] lg:text-[18px] lg:leading-[28px]"
	>
		{description}
	</p>
	<a class="text-[18px] font-bold leading-[28px] text-bright-pink" href="/">Get Started</a>
</div>
