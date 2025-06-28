import ShortenLinkForm from "../components/ShortenLinkForm";

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>AffordMed URL Shortener</h1>
      <ShortenLinkForm />
    </div>
  );
}
