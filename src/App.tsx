import React, { useState } from "react";
import "./App.css";
import { RouteComponent } from "./components/route";
import { JokeViewComponent } from "./pages/facts/joke-container";
import { NewsletterContainerComponent, NewsletterForm } from "./pages/newsletter/newsletter-container";

type Route = "jokes" | "newsletter";

function App() {
  const [activeRoute, setActiveRoute] = useState<Route>("jokes");
  const [subscribedUser, setSubscribedUser] = useState<string>('');

  function changeRoute(route: Route): void {
    setActiveRoute(route);
  }

  function subscriptionSubmitted(data: NewsletterForm): void {
    setSubscribedUser(`${data.firstname} ${data.lastname}`);
    changeRoute('jokes');
  }

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <RouteComponent
              name="Jokes"
              onClick={changeRoute.bind(null, "jokes")}
            ></RouteComponent>
          </li>
          <li>
            <RouteComponent
              name="Newsletter"
              onClick={changeRoute.bind(null, "newsletter")}
            ></RouteComponent>
          </li>
        </ul>
      </nav>
      {activeRoute === "jokes" && <JokeViewComponent subscriber={subscribedUser}></JokeViewComponent>}
      {activeRoute === "newsletter" && (
        <NewsletterContainerComponent submitFn={subscriptionSubmitted}></NewsletterContainerComponent>
      )}
    </React.Fragment>
  );
}

export default App;
