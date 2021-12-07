export const makeHTML = (body: string) => {
  return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<style>
			body {
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				margin: 0;
				padding: 0;
			}
			nav,
			#content,
			footer {
				padding: 2em;
			}
			nav ul {
				margin: 0;
				padding: 0;
				display: flex;
				list-style-type: none;
			}
			nav ul li a {
				color: blue;
				text-decoration: none;
				margin-right: 8px;
			}
			section {
				min-height: 50vh;
			}
			footer {
				background: #ccc;
			}
		</style>
		${body}
		<script src="/static/bundle.js"></script>
	</body>
</html>`
}
