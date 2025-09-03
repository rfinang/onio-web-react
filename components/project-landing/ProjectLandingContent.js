import { useAppContext } from "../../context/AppContext";
import { Button, Container } from "../ui";
function ProjectLandingContent({ data }) {
  if (!data) return null;
  const { title, content, description, link } = data;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };
  return (
    <div className="projectLading__content pageHero--after bg-background">
      <Container>
        <h2
          className="h2 spacing--bottom--md pb-1 js-animation--chars"
          data-screen-offset=".8"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="grid md:grid-cols-12 gap-lg">
          <div className="md:col-span-6 col-span-12 mb-md-0 mb-3">
            <div
              className="desc--large spacing--bottom--xs js-animation--lines"
              data-screen-offset=".9"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="d-md-block d-none js-animation--fade" data-screen-offset=".9">
              <Button
                as="a"
                href={link.url}
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
                onClick={onClickGetStartedItem(link.url)}
                variant="link"
                color="black"
                hasArrow
              >
                {link.label}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-5 md:col-start-8 js-animation--fade" data-screen-offset="1.05" dangerouslySetInnerHTML={{ __html: content }} />

          <div className="d-md-none d-block mt-md-0 col-12 mt-5">
            <Button
              as="a"
              href={link.url}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              onClick={onClickGetStartedItem(link.url)}
              variant="link"
              color="black"
              hasArrow
            >
              {link.label}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectLandingContent;
