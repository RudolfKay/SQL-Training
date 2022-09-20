import { APPS_CATEGORIES } from "../shopify-table-names";

export const selectCount = (table: string): string => {
  return `SELECT COUNT(*) AS c FROM ${table}`;
};

export const selectRowById = (id: number, table: string): string => {
  return `SELECT * FROM ${table} WHERE id = ${id}`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `SELECT * FROM categories WHERE title = '${title}'`;
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  return `SELECT apps.title AS app_title, categories.id AS category_id, categories.title AS category_title FROM apps_categories
    INNER JOIN apps ON apps.id = apps_categories.app_id
    INNER JOIN categories on categories.id = apps_categories.category_id
    WHERE apps_categories.app_id = ${appId}`;
};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  return `SELECT COUNT(DISTINCT ${columnName}) AS c FROM ${tableName}`;
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `SELECT * FROM reviews WHERE app_id = ${appId} AND author = '${author}'`;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  return `SELECT ${columnName} FROM ${tableName}`;
};

