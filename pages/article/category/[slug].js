import { getBlogApi, getBlogCategoriesApi } from "../../../api";
import ArticleCategoryPage from "../../../components/article/category";
import { blogItemsGenerate } from "../../../helper";
import _ from "lodash";
function ArticleCategory(props) {
  return <ArticleCategoryPage {...props} />;
}
export const getServerSideProps = async (props) => {
  const slug = props.query.slug.replace(".html", "");
  const [blogCategory, blogCategories, blogPost] = await Promise.all([
    getBlogCategoriesApi({
      filters: {
        slug: {
          $eq: slug
        }
      }
    }),
    getBlogCategoriesApi(),
    getBlogApi({
      pagination: {
        limit: 8,
      },
      sort: "publish_date:DESC",
      filters: {
        categories: {
          slug: {
            $eq: slug
          }
        }
      }
    })
  ]);
  const lastArticle = blogItemsGenerate(blogPost);
  return {
    props: {
      blogCategoryData: blogCategory.data.data,
      blogCategoriesData: blogCategories.data.data,
      blogPostData: lastArticle,
      blogPostTotalData: _.get(blogPost, "data.meta.pagination.total", 0)

    },
  };
};

export default ArticleCategory;
