import { useState, useEffect } from "react";

import Loading from "../common/Loading";
import { Button, Typography } from "../ui";

import CardText from "./CardText";
import { generateSlug } from "./helper";
import { getSearchGeneralApi } from "../../api";

import ImageLazy from "../helper/image-lazy/image-lazy";

function GeneralSearchContent({ keyword, general }) {
  if (!general) return null;
  const { count } = general.data;
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [queryStart, setQueryStart] = useState(6);
  useEffect(() => {
    setItemList(general.data.items);
  }, [general]);
  const handleLoadmore = async () => {
    setIsLoading(true);
    const res = await getSearchGeneralApi({
      _limit: 6,
      _start: queryStart,
      k: keyword,
    });
    setQueryStart(queryStart + 6);
    setItemList([...itemList, ...res.data.data.items]);
    new ImageLazy();
    setIsLoading(false);
  };
  return (
    <div className="main-section">
      {isLoading && <Loading />}
      <div className="container">
        <Typography 
          variant="section-badge" 
          className="js-animation--fade"
          as="h3"
        >
          General
        </Typography>
        <div className="row">
          <div className="col-md-8">
            {itemList.length === 0 && (
              <Typography 
                variant="h5" 
                className="mb-0 js-animation--fade" 
                data-screen-offset=".15"
                as="p"
              >
                No matches found
              </Typography>
            )}
            <div className="block-content">
              {itemList && (
                <div className="block-main">
                  {itemList.map((item) => {
                    const { id, title, description, model_name, slug } = item;
                    const { cardSlug, cardBreadscumb } = generateSlug(title, slug, model_name);
                    return (
                      <div key={id} className="js-animation--fade" data-screen-offset=".15">
                        <CardText
                          description={description}
                          slug={cardSlug}
                          slugList={cardBreadscumb}
                        />
                      </div>
                    );
                  })}
                  {itemList.length < count && (
                    <div className="row justify-content-start search-page__loadmore">
                      <div className="col-md-auto col-12 js-animation--fade">
                        <Button
                          variant="secondary"
                          size="lg"
                          fullWidth={true}
                          className="js-btn-load js-link--btn"
                          onClick={handleLoadmore}
                          disabled={isLoading}
                        >
                          Load More
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSearchContent;
