import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import LayoutSection from "../../views/LayoutSection";
import Hero from "../../components/Hero";
import UserCards from "../../components/UserCards";
import RegisterUserForm from "../../forms/RegisterUserForm";

const pageViews = [Hero, UserCards, RegisterUserForm];

export default function PreviewPage() {
  return (
    <>
      <LayoutSection element="header">
        <Container>
          <Navigation />
        </Container>
      </LayoutSection>
      <main>
        {pageViews.map((View) => (
          <LayoutSection key={View}>
            <Container>
              <View />
            </Container>
          </LayoutSection>
        ))}
      </main>
    </>
  );
}
