import { Nav } from "./common/components";
import { HEADER_LINKS } from "./common/constants";
import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./features";

const App = () => (
  <main className="relative">
    <Nav menu={HEADER_LINKS}/>
    <section id="sectionHome" className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section id="sectionPopularProducts" className="padding">
      <PopularProducts />
    </section>
    <section id="sectionSuperQuality" className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-16">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section id="sectionContactUS" className="padding-x sm:py-32 py-16">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
