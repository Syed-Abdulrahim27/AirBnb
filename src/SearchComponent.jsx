export default function SearchComponent({ Title, children }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  };

  return (
    <div style={style}>
      <h4 style={{ marginBottom: "5px" }}>{Title}</h4>
      {children}
    </div>
  );
}
