import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Oops!</h1>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        Sorry, an unexpected error has occurred.
      </p>
      <p
        style={{
          fontStyle: "italic",
          color: "#555", // Couleur du texte en italique
        }}
      >
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
