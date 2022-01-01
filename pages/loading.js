import { ThreeBounce } from "better-react-spinkit";

function Loading() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ThreeBounce color="#00C854" size={30} />
      </div>
    </main>
  );
}

export default Loading;
