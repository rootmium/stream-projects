<script>
	let emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	let { name } = $props();
	let emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
