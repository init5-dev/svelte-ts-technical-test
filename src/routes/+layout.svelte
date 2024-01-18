<nav>
	<ul>
    <li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/costs">Costs</a>
		</li>
    <li>
			<a href="/costs/new">New</a>
		</li>
    <li>
			<a href="/costs/upload">Upload</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	body {
		margin: 0;
		font-family: sans-serif;
	}

	nav {
		background-color: #f0f0f0;
		padding: 10px;
    margin-bottom: 25px;
	}

	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav li {
		display: inline-block;
		margin-right: 20px;
	}

  nav a {
		text-decoration: none;
		color: #000;
		padding: 5px 10px;
	}

	a {
		text-decoration: none;
		color: #000;
		padding: 5px 10px;
	}

  a:hover {
		color: #007bff;
	}

</style>
