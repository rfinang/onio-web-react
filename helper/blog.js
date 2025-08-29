import _ from "lodash";
const mapItem = (item) => {
  return {
    id: item.id,
    title: item.title,
    content: item.content,
    slug: item.slug,
    publish_date: item.publish_date,
    thumbnail: item.thumbnail,
    categories: item.categories,
    read_time: item.read_time,
    feature_image: item.feature_image,
  };
};

export const blogItemsGenerate = (data) => {
  let blogPost = [];
  const blogArr = _.get(data, "data.data", []);
  blogPost = blogArr.map(mapItem);
  return blogPost;
};

export const calculateReadTime = (content) => {
  const words_per_minute = 225;

  // Count the words in the content.
  let word_count = _.words(content).length;
  // How many minutes?
  let minutes = Math.floor(word_count / words_per_minute);

  if(minutes < 1){
    return 'Less than 1';
  }

  return minutes;
}
