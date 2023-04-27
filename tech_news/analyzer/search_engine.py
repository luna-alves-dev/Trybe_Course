from tech_news.database import search_news
import datetime


# Requisito 7
def search_by_title(title):
    list = search_news({"title": {"$regex": title, "$options": "i"}})
    return [(news["title"], news["url"]) for news in list]


# Requisito 8
def search_by_date(date):
    try:
        new_date = datetime.date.fromisoformat(date).strftime("%d/%m/%Y")

    except ValueError:
        raise ValueError("Data inválida")

    news = search_news({"timestamp": new_date})

    formated_news = []
    for new in news:
        formated_news.append((new["title"], new["url"]))
    return formated_news


# Requisito 9
def search_by_category(category):
    new_news = search_news(
        {"category": {"$regex": category, "$options": "i"}}
    )
    return [(news["title"], news["url"]) for news in new_news]
