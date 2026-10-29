import { Button, Eyebrow } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <span className="error-code">404</span>
      <Eyebrow>A LITTLE OFF THE RADAR</Eyebrow>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>
        We couldn’t find that page. Your next opportunity might be closer to
        home.
      </p>
      <Button href="/">Back to the homepage</Button>
    </section>
  );
}
