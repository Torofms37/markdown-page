import { useDispatch } from "react-redux";
import { setText } from "../../components/markdownSlice";
import "../../index.css";

export const Coder = () => {
  const dispatch = useDispatch();

  const handleChangeText = (event) => {
    dispatch(setText(event.target.value));
  };

  return (
    <div
      className="d-flex justify-content-center border border-dark mt-3 shadow-lg"
      style={{ backgroundColor: "#A9C5B2", height: "30vh", width: "70vw" }}
    >
      <div className="d-flex flex-column w-100 h-100">
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
        <textarea
          className="flex-grow-1 border-0 py-2 px-2"
          placeholder="Write some here..."
          onChange={handleChangeText}
          style={{
            backgroundColor: "transparent",
            color: "black",
            resize: "none",
            overflow: "auto",
            width: "100%",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Coder;
