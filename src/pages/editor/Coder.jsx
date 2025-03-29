import { useDispatch } from "react-redux";
import { setText } from "../../components/markdownSlice";
import "../../index.css";

//Funciona para renderizar el texto en markdown
// export const renderCustomMarkdown = (inputText) => {
//   // retorna lo que haya en inputtext sí
//   return (
//     inputText
//       // separa el texto por saltos de línea
//       .split("\n")
//       // mapea cada línea y recibe la linea y un index
//       .map((line, index) => {
//         // si la línea empieza con "#" entonces retorna un h4 con el texto de la línea sin los primeros 5 caracteres
//         if (line.startsWith("# ")) {
//           return `<h1>${line.replace("# ", "")}</h1><hr class="border-line"/>`;
//         } else if (line.startsWith("## ")) {
//           return `<h2>${line.replace(
//             "## ",
//             ""
//           )}</h2><hr className="border-linet"/>`;
//         } else if (line.startsWith("### ")) {
//           return `<h3>${line.replace("### ", "")}</h3><hr />`;
//         } else if (line.startsWith("`") && line.endsWith("`")) {
//           return `<span style="background-color: #FFF; color: black; font-weight: bold">${line
//             .slice(1, -1)
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")}</span>`;
//         } else {
//           return `<p>${line}</p>`;
//         }
//       })
//       .join("")
//   );
// };

export const Coder = () => {
  const dispatch = useDispatch();

  const handleChangeText = (event) => {
    dispatch(setText(event.target.value));
    console.log(event.target.value);
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
