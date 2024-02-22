import { Article } from "src/models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        const articles: Article[] = [];

        for (const obj of data) {
            const { title, description, author, imageUrl } = obj;
            const article = new Article(title, description, author, imageUrl);

            articles.push(article);
        }

        return articles;
    }
}