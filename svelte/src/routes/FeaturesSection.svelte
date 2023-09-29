<script>
	import FeatureItem from './FeatureItem.svelte';
</script>

<section class="bg-gradient-to-b from-white to-pale-blue pb-[80px] md:pb-[86px] lg:pb-[140px]">
	<div
		class="mx-auto grid max-w-[343px] space-y-[40px] md:max-w-[689px] md:grid-cols-2 md:grid-rows-3 md:gap-x-[10px] md:gap-y-[56px] md:space-y-0 lg:max-w-[1110px] lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[30px] lg:gap-y-[80px]"
	>
		<h2
			class="rounded-[10px] bg-gradient-to-b from-persimmon to-magenta-pink px-[28px] py-[26px] text-[24px] font-extrabold leading-[32px] text-white md:px-[32px] md:py-[56px] lg:py-[64px] lg:text-[32px] lg:leading-[40px]"
		>
			Check out our most popular courses!
		</h2>
		<FeatureItem
			url="/images/icon-animation.svg"
			title="Animation"
			description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
		/>
		<FeatureItem
			url="/images/icon-design.svg"
			title="Design"
			description="Create beautiful, usable interfaces to help shape the future of how the web looks."
		/>
		<FeatureItem
			url="/images/icon-photography.svg"
			title="Photography"
			description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
		/>
		<FeatureItem
			url="/images/icon-crypto.svg"
			title="Crypto"
			description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
		/>
		<FeatureItem
			url="/images/icon-business.svg"
			title="Business"
			description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
		/>
	</div>
</section>
