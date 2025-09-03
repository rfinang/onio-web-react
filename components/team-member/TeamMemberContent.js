import { TeamContentStyles } from "../styles/team-member/Content";
import ImageComp from "../common/Image";
import { Button, Container } from "../ui";
function TeamMemberContent({ data, articleCount }) {
  const { name, job_title, bio, short_bio, social, avatar } = data;
  return (
    <TeamContentStyles>
      <div className="teamMember__content section--topPage bg-background">
        <Container>
          <div className="grid spacing--bottom--xs">
            <div className="col-12">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">Team Members</span>
              </h4>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-lg mb-4">
            <div className="lg:col-span-7 md:col-span-10 col-span-12 pb-1">
              <div className="mb-4 pb-1">
                <h1 className="h1 mb-0 js-animation--chars" data-screen-offset=".3">
                  {name}
                </h1>
                <p className="h5 mb-0 js-animation--fade" data-screen-offset=".4">
                  {job_title}
                </p>
              </div>
              {social && (
                <ul
                  className="teamMember__socials ul-reset js-animation--fade--none"
                  data-screen-offset=".5"
                >
                  {social.map((item) => {
                    const { id, title, url, icon } = item;
                    return (
                      <li key={id}>
                        <Button
                          as="a"
                          href={url}
                          target="_blank"
                          variant="ghost"
                          color="black"
                          title={title}
                        >
                          <img src={icon.url} className="svg" alt={title} />
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              )}
              <p className="desc--md mb-0 js-animation--fade" data-screen-offset=".5">
                {articleCount} Article Contributions
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="lg:col-span-5 md:col-span-6 col-span-12">
              <div className="staff">
                <div
                  className="staff__thumbnail image__object-fit font-0 js-animation--fade--none"
                  data-screen-offset=".5"
                >
                  <ImageComp image={avatar} />
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 md:col-start-8 js-animation--fade" data-screen-offset=".65" dangerouslySetInnerHTML={{ __html: bio }}></div>
          </div>
        </Container>
      </div>
    </TeamContentStyles>
  );
}

export default TeamMemberContent;
