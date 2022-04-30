import LayoutHeaderSection from "../LayoutHeaderSection";
import Container from "../Container";
import Navigation from "../Navigation";
import LayoutHeroSection from "../Hero/LayoutHeroSection";
import Hero from "../Hero/Hero";
import UserCards from "../UserCards";
import Form from "../Form";

const pageViews = [Hero, UserCards, Form];
console.log(pageViews);

export default function PreviewPage() {
  return (
    <>
      <LayoutHeaderSection>
        <Container>
          <Navigation />
        </Container>
      </LayoutHeaderSection>
      <main>
        {pageViews.map((View) => (
          <LayoutHeroSection key={View}>
            <Container>
              <View />
            </Container>
          </LayoutHeroSection>
        ))}
      </main>
    </>
  );
}
