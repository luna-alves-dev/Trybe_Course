import requests
import time
from parsel import Selector
import re
from tech_news.database import create_news


# Requisito 1
def fetch(url):
    try:
        response = requests.get(
            url, headers={"user-agent": "Fake user-agent"}, timeout=3
        )
        time.sleep(1)

        if response.status_code == 200:
            return response.text
        else:
            return None
    except requests.Timeout:
        return None


# Requisito 2
def scrape_updates(html_content):
    selector = Selector(html_content)
    links = selector.css("h2.entry-title a::attr(href)").getall()

    return links


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(html_content)
    links = selector.css("div.nav-links a.next::attr(href)").get()

    if links:
        return links
    else:
        return None


# Requisito 4
def scrape_news(html_content):
    selector = Selector(text=html_content)

    url = selector.css("link[rel='canonical']::attr(href)").get()
    title_value = "h1.entry-title::text"
    title = selector.css(title_value).get()
    timestamp = selector.css(".meta-date::text").get()
    writer = selector.css(".author a::text").get()
    reading_time = selector.css("li.meta-reading-time::text").get()
    new_reading_time = reading_time.strip().split(" ")[0]
    summary_value = ".entry-content p"
    summary = selector.css(summary_value).get()
    category = selector.css(".meta-category .label::text").get()

    result = {
        "url": url,
        "title": title.strip('\xa0'),
        "timestamp": timestamp,
        "writer": writer,
        "reading_time": int(new_reading_time),
        "summary": re.sub('<.*?>', '', summary).strip(),
        "category": category,
         }
    return result


# Requisito 5
def get_tech_news(amount):
    content_page = fetch("https://blog.betrybe.com/")

    links = []

    while len(links) <= int(amount):
        links.extend(scrape_updates(content_page))
        next_link = scrape_next_page_link(content_page)
        content_page = fetch(next_link)

    result = []

    for link in links[: int(amount)]:
        content = fetch(link)
        data = scrape_news(content)

        result.append(data)

    create_news(result)

    return result
