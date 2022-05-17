import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import LayoutSection from "../../views/LayoutSection";
import Hero from "../../components/Hero";
import UserCards from "../../components/UserCards";
import RegisterUserForm from "../../forms/RegisterUserForm";

const pageViews = [
  {
    component: Hero,
    idSection: "hero",
  },
  {
    component: UserCards,
    idSection: "userCards",
  },
  {
    component: RegisterUserForm,
    idSection: "registerUserForm",
  },
];

export default function PreviewPage() {
  return (
    <>
      <LayoutSection element="header">
        <Container>
          <Navigation />
        </Container>
      </LayoutSection>
      <main>
        {pageViews.map((view) => (
          <LayoutSection key={view.idSection} id={view.idSection}>
            <Container>
              <view.component />
            </Container>
          </LayoutSection>
        ))}
      </main>
    </>
  );
}
