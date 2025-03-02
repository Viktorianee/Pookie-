document.addEventListener("DOMContentLoaded", () => {
    const newsData = [
        {
            id: 1,
            title: "Україна отримала новий пакет допомоги",
            description: "ЄС схвалив фінансову допомогу...",
            image: "https://mil.in.ua/wp-content/uploads/2024/01/229928_ukraine-eu_gettyimages_new_960x380_0.webp",
            category: "політика"
        },
        {
            id: 2,
            title: "Нова перемога української збірної",
            description: "Збірна України здобула перемогу...",
            image: "https://shotam.info/wp-content/uploads/2024/06/pp.jpg",
            category: "спорт"
        },
        {
            id: 3,
            title: "В Україні стартував масштабний IT-форум",
            description: "У Києві відбувся один із найбільших IT-форумів, на якому представили нові технології штучного інтелекту та кібербезпеки.",
            image: "https://independentview.net/wp-content/uploads/2017/09/256880.jpg",
            category: "технології"
        }
    ];

    const newsContainer = document.getElementById("news-container");

    function renderNews(category = "all") {
        newsContainer.innerHTML = "";
        newsData
            .filter(news => category === "all" || news.category === category)
            .forEach(news => {
                const newsCard = document.createElement("div");
                newsCard.classList.add("news-card");
                newsCard.innerHTML = 
                    <img src="${news.image}" alt="Новина">
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                ;
                newsContainer.appendChild(newsCard);
            });
    }

    renderNews();

    document.querySelectorAll(".category").forEach(button => {
        button.addEventListener("click", () => {
            renderNews(button.dataset.category);
        });
    });
});
