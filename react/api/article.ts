import * as transforms from "../utils/transforms";
import request from "../utils/request";

/**
 * Returns articles list from backend.
 *
 */
export const getAll = (): Promise<{
  articles: { title: string; id: string }[];
  statusCode: number;
}> =>
  new Promise((resolve, reject) => {
    request
      .get("/api/articles")
      .query({
        "fields[node--article]": "id",
      })
      // Tell superagent to consider any valid Drupal response as successful.
      // Later we can capture error codes if needed.
      .ok((resp: any) => resp.statusCode)
      .then((response: any) => {
        resolve({
          // eslint-disable-next-line max-len
          articles:
            response.statusCode === 200
              ? response.body.data.map((article: any) =>
                  transforms.article(article)
                )
              : [],
          statusCode: response.statusCode,
        });
      })
      .catch((error: any) => {
        // eslint-disable-next-line no-console
        console.error("Could not fetch the articles.", error);
        reject(error);
      });
  });
