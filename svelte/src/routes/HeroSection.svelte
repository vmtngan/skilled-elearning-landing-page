<script>
	import Button from './Button.svelte';
</script>

<section
	class="relative mx-auto mt-[38px] max-w-[343px] md:mb-[210px] md:mt-[99px] md:max-w-[689px] lg:mb-[250px] lg:mt-[172px] lg:max-w-[1110px]"
>
	<h1
		class="mb-[26px] text-[40px] font-extrabold leading-[50px] text-dark-blue md:max-w-[326px] lg:mb-[29px] lg:max-w-[457px] lg:text-[56px] lg:leading-[71px]"
	>
		Maximize skill, minimize budget
	</h1>
	<p
		class="mb-[24px] text-[16px] font-medium leading-[26px] text-dark-grayish-blue md:max-w-[398px] lg:mb-[40px] lg:max-w-[445px] lg:text-[18px] lg:leading-[28px]"
	>
		Our modern courses across a range of in-demand skills will give you the knowledge you need to
		live the life you want.
	</p>
	<Button variant="secondary">Get Started</Button>
	<img class="mt-[20px] w-[100%] md:hidden" src="/images/image-hero-mobile.png" alt="hero" />
	<img
		class="hidden md:absolute md:bottom-[-180px] md:right-[-50%] md:block lg:hidden"
		src="/images/image-hero-tablet.png"
		alt="hero"
	/>
	<img
		class="hidden lg:absolute lg:bottom-[-180px] lg:right-[-46%] lg:block"
		src="/images/image-hero-desktop.png"
		alt="hero"
	/>
</section>
