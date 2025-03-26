export const Coder = () => {
  return (
    <div
      className="d-flex justify-content-center border border-dark mt-3 shadow-lg"
      style={{ backgroundColor: "#A9C5B2", height: "30vh", width: "30vw" }}
    >
      <div
        className="d-flex border-bottom border-dark shadow-lg"
        style={{ backgroundColor: "#7FA38E", width: "100%", height: "35px" }}
      >
        <span className="d-flex align-items-center fs-6 ms-1">
          (<i className="iconoir-bonfire fs-6"></i>)
        </span>
        <p className="fs-4 px-1">
          <strong>Coder</strong>
        </p>
        <i className="iconoir-maximize fs-4"></i>
        <i className="iconoir-minus-circle fs-4"></i>
      </div>
    </div>
  );
};

export default Coder;
