export default function generateHtmlCode() {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="index.css" rel="stylesheet">
    <script src="index.js" defer></script>    
    <title>Grille</title>
</head>
<body>
    <div class="grid-wrapper">
        <div id="grid" class="grid"></div>
    </div>
</body>
</html>`;
}
