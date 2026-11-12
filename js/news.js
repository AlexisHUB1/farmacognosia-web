async function loadLatestNews() {

    const container = document.getElementById("latest-news");

    if (!container) return;

    try {
        const response = await fetch("data/news.json");

        if (!response.ok) {
            throw new Error("No se pudieron cargar las noticias");
        }

        const data = await response.json();

        const news = Array.isArray(data.news)
            ? data.news
            : [];

        const publishedNews = news
            .filter(item =>
                item.published === true &&
                item.title &&
                item.date
            )
            .sort((a, b) =>
                b.date.localeCompare(a.date)
            );

        container.replaceChildren();

        if (publishedNews.length === 0) {
            const message = document.createElement("p");
            message.textContent =
                "Próximamente compartiremos nuestras novedades.";

            container.appendChild(message);
            return;
        }

        const latest = publishedNews[0];

        const article = document.createElement("article");
        article.className = "latest-news-item";

        const image = document.createElement("img");
        image.src = latest.image || "";
        image.alt = latest.title;
        image.loading = "lazy";

        const content = document.createElement("div");
        content.className = "latest-news-content";

        const date = document.createElement("time");
        date.dateTime = latest.date;
        date.textContent = latest.date;

        const title = document.createElement("h3");
        title.textContent = latest.title;

        const summary = document.createElement("p");
        summary.textContent = latest.summary || "";

        const link = document.createElement("a");
        link.href = latest.url || "pages/novedades.html";
        link.textContent = "Leer más →";

        if (latest.image) {
            article.appendChild(image);
        }

        content.append(date, title, summary, link);
        article.appendChild(content);

        container.appendChild(article);

    } catch (error) {
        console.error("Error al cargar noticias:", error);

        container.textContent =
            "Las noticias no están disponibles por el momento.";
    }
}

loadLatestNews();
