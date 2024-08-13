export default function page() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="header"
      >
        <h3>Header</h3>
      </div>
      <div style={{ width: "100%", display: "flex" }} className="body">
        <div
          style={{
            width: "30%",
            height: "800px",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="menu"
        >
          <h3>Menu</h3>
        </div>
        <div
          style={{
            width: "70%",
            height: "800px",
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="main"
        >
          <div
            style={{
              width: "98%",
              height: "650px",
              display: "flex",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>Main</h3>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "green",
          width: "1295px",
          height: "40px",
          position: "relative",
          left: "580px",
          bottom: "90px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="footer"
      >
        <h3>Footer</h3>
      </div>
    </div>
  );
}
