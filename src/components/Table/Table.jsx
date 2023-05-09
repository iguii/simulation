import PropTypes from "prop-types";

import "./table.css";

const Table = ({ headers, bodyTable, information }) => {
  return (
    <div className="general-container">
      {bodyTable.map((matrix, index) => {
        return (
          <div className="table-container" key={index}>
            <h4>Simulación número: {index + 1}</h4>
            <h4>Información:</h4>

            {information.map((_, indexi) => (
              <span className="information--separator" key={indexi}>
                {information[index][indexi]}
              </span>
            ))}

            <table>
              <tbody>
                <tr>
                  {headers.map((item, index) => (
                    <th key={item + "-" + index}>{item}</th>
                  ))}
                </tr>
                {matrix.map((row, index) => (
                  <tr key={"row-" + index}>
                    {row.map((column, colIndex) => (
                      <td key={"column" + "-" + colIndex}>{column}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  bodyTable: PropTypes.array.isRequired,
  information: PropTypes.array.isRequired,
};

export default Table;
