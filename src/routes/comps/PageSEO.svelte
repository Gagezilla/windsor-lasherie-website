<script>
    export let title = "null";
    export let content = "null"

    let fullTitle = title + " | Windsor Lasherie"
    let siteLink = "https://windsorlasherie.com"
    let imgLink = siteLink + "/img/home.webp"
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{fullTitle}</title>
    <meta name="title" content={fullTitle}>
    <meta name="description" content={content}>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content={siteLink}>
    <meta property="og:title" content={fullTitle}>
    <meta property="og:description" content={content}>
    <meta property="og:image" content={imgLink}>

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content={siteLink}>
    <meta property="twitter:title" content={fullTitle}>
    <meta property="twitter:description" content={content}>
    <meta property="twitter:image" content={imgLink}>
</svelte:head>