import Header from "./Header";
import Main from "./Main";
import Side from "./Side";

export default function Container() {
  return (
    <section className="w-section-w min-h-section-h mx-auto my-section-my">
      <Header />
      <div className="flex gap-5 mt-5">
        <Main />
        <Side />
      </div>
    </section>
  );
}
