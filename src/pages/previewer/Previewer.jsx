import { useDispatch, useSelector } from "react-redux";
// import { renderCustomMarkdown } from "../editor/Coder";
import { setText } from "../../components/markdownSlice";


export const Previewer = () => {
  const dispatch = useDispatch();
  const formattedText = useSelector((state) => state.markdown.formattedText);

  const handleChangeText = (event) => {
    dispatch(setText(event.target.value));
  };

  return (
    <div
      className="d-flex justify-content-center border border-dark mt-3 shadow-lg"
      style={{ backgroundColor: "#A9C5B2", height: "65vh", width: "70vw" }}
    >
      {/* Contenedor principal en columna */}
      <div className="d-flex flex-column w-100 h-100">
        {/* Barra superior */}
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
        <div className="px-2 py-2" onChange={handleChangeText}
          style={{ whiteSpace: "pre-wrap", fontSize: "16px", color: "#333" }}
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      </div>
    </div>
  );
};

export default Previewer;
