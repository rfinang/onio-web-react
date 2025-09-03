import { useEffect } from "react";
import { Typography } from "../ui";
import { EnvironmentalBenefitsStyles } from "../styles/home/EnvironmentalBenefits";

function EnvironmentalBenefits({ lowerBomData, customClass }) {
  if (!lowerBomData) return null;
  const { label, title, description, traditional_solutions_black, onio_zero_black } = lowerBomData;
  let { content } = lowerBomData;
  content = content.replaceAll("\n", "<br/>");

  useEffect(() => {
    let currentTab = 1;
    let intervalSolutions;
    let isStart = false;
    let tabsTimeout;
    const lowerBomTabContents = document.querySelectorAll(".ppEnvironmentalBenefits__tab-item");
    const lowerBomTabs = document.querySelectorAll(
      ".ppEnvironmentalBenefits__container .ppEnvironmentalBenefits__tab-list a"
    );
    const target = document.querySelector(".ppEnvironmentalBenefits__tabs");
    window.addEventListener("scroll", () => {
      if (isStart) return;
      if (!lowerBomTabs.length) return;
      const { top, bottom } = target.getBoundingClientRect();
      const disTop = top > 0;
      const disBottom = bottom - window.innerHeight / 3 < window.innerHeight;
      if (
        disBottom &&
        !document
          .querySelector(".ppEnvironmentalBenefits__tab-item#tab1")
          ?.classList.contains("show") &&
        !isStart
      ) {
        isStart = true;
        document.querySelector(".ppEnvironmentalBenefits__tab-item#tab1")?.classList.add("show");
      }

      if (disTop && disBottom) {
        isStart = true;
        intervalSolutions = setInterval(() => {
          document
            .querySelector(
              ".ppEnvironmentalBenefits__tab-list [data-target='#tab" + currentTab + "']"
            )
            ?.classList.remove("active");
          document
            .querySelector(".ppEnvironmentalBenefits__tab-item#tab" + currentTab)
            ?.classList.remove("show");
          currentTab = currentTab === 1 ? 2 : 1;
          document
            .querySelector(
              ".ppEnvironmentalBenefits__tab-list [data-target='#tab" + currentTab + "']"
            )
            ?.classList.add("active");
          document
            .querySelector(".ppEnvironmentalBenefits__tab-item#tab" + currentTab)
            ?.classList.add("show");
        }, 4000);
      }
    });
    lowerBomTabs.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        clearTimeout(tabsTimeout);
        clearInterval(intervalSolutions);
        lowerBomTabs.forEach((item) => item.classList.remove("active"));
        lowerBomTabContents.forEach((item) => item.classList.remove("show"));
        item.classList.add("active");
        var $target = item.dataset.target;
        tabsTimeout = setTimeout(() => {
          document
            .querySelector(".ppEnvironmentalBenefits__tab-item" + $target)
            ?.classList.add("show");
        }, 200);
      });
    });

    lowerBomTabs.forEach((item) => {
      item.addEventListener("click", () => {
        clearInterval(intervalSolutions);
      });
    });

    return () => {
      currentTab = 1;
      isStart = false;
      clearTimeout(tabsTimeout);
      clearInterval(intervalSolutions);
    };
  }, []);

  return (
    <EnvironmentalBenefitsStyles>
      <div className={`ppEnvironmentalBenefits none-radius ${customClass}`}>
        <div className="ppEnvironmentalBenefits__container container">
          <div className="row mb-ms-5 mb-4">
            <div className="col-12">
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                {label}
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-12">
              <Typography variant="h2" className="js-animation--chars">{title}</Typography>
              <span className="spacing--bottom--lg d-md-block d-none pb-md-3"></span>
              <span className="d-md-none d-block mb-3"></span>
            </div>
            <div
              className="col-md-6 col-12 pt-2 offset-md-1 js-animation--lines"
              data-offset=".15"
            >
              <Typography variant="body-xl">{description}</Typography>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-5">
              {/* <ul className="nav nav-tabs align-items-center" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    type="button"
                    role="tab"
                  >
                    Traditional solutions
                  </button>
                </li>
                <li>
                  <span className="d-none d-sm-block mx-1">VS</span>
                  <span className="d-block d-sm-none mx-1">/</span>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_2"
                    type="button"
                    role="tab"
                  >
                    ONiO.zero
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="solutions_tabs_content">
                <div
                  className="tab-pane fade show active"
                  id="tab_1"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="ppEnvironmentalBenefits__tabs-img">
                    <img src={traditional_solutions_black.url} alt="Traditional solutions" />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_2"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="ppEnvironmentalBenefits__tabs-img">
                    <img src={onio_zero_black.url} alt="ONiO.zero solutions" />
                  </div>
                </div>
              </div> */}
              <div className="ppEnvironmentalBenefits__tabs">
                <div className="ppEnvironmentalBenefits__tab-list js-animation--fade">
                  <a
                    className="active"
                    href="#"
                    data-target="#tab1"
                    title="Traditional solutions  VS  ONiO.zero"
                  >
                    Traditional solutions
                  </a>
                  <span className="d-none d-md-inline-block mx-1">VS</span>
                  <span className="d-inline-block d-md-none mx-1">/</span>
                  <a href="#" data-target="#tab2" title="ONiO.zero">
                    ONiO.zero
                  </a>
                </div>
                <div className="ppEnvironmentalBenefits__tab-content">
                  <div id="tab1" className="ppEnvironmentalBenefits__tab-item">
                    <div className="ppEnvironmentalBenefits__tabs-img">
                      <img src={traditional_solutions_black.url} alt="Traditional solutions" />
                    </div>
                  </div>
                  <div id="tab2" className="ppEnvironmentalBenefits__tab-item">
                    <div className="ppEnvironmentalBenefits__tabs-img">
                      <img src={onio_zero_black.url} alt="ONiO.zero solutions" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-12 offset-lg-2 offset-md-1 js-animation--fade"
              data-offset=".15"
            >
              <div className="ppEnvironmentalBenefits__desc">
                <Typography 
                  variant="body" 
                  dangerouslySetInnerHTML={{ __html: content }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </EnvironmentalBenefitsStyles>
  );
}

export default EnvironmentalBenefits;
