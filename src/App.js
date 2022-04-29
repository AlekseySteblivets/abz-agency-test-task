import "./App.scss";
import LayoutHeaderSection from "./components/LayoutHeaderSection";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import LayoutHeroSection from "./components/Hero/LayoutHeroSection";
import Hero from "./components/Hero/Hero";
import UserCards from "./components/UserCards";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <LayoutHeaderSection>
        <Container>
          <Navigation />
        </Container>
      </LayoutHeaderSection>
      <main>
        <LayoutHeroSection>
          <Container>
            <Hero />
          </Container>
        </LayoutHeroSection>
        <LayoutHeroSection>
          <Container>
            <UserCards />
          </Container>
        </LayoutHeroSection>
        <LayoutHeroSection>
          <Container>
            <Form />
          </Container>
        </LayoutHeroSection>
      </main>
    </div>
  );
}

export default App;
