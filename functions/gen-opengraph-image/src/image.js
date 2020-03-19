/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import Textfit from "react-textfit";
import { render } from "react-dom";

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        backgroundImage: `linear-gradient(131deg, rgba(186, 186, 186, 0.01) 0%, rgba(186, 186, 186, 0.01) 16.667%,rgba(192, 192, 192, 0.01) 16.667%, rgba(192, 192, 192, 0.01) 33.334%,rgba(48, 48, 48, 0.01) 33.334%, rgba(48, 48, 48, 0.01) 50.001000000000005%,rgba(33, 33, 33, 0.01) 50.001%, rgba(33, 33, 33, 0.01) 66.668%,rgba(182, 182, 182, 0.01) 66.668%, rgba(182, 182, 182, 0.01) 83.33500000000001%,rgba(211, 211, 211, 0.01) 83.335%, rgba(211, 211, 211, 0.01) 100.002%),linear-gradient(148deg, rgba(48, 48, 48, 0.01) 0%, rgba(48, 48, 48, 0.01) 16.667%,rgba(178, 178, 178, 0.01) 16.667%, rgba(178, 178, 178, 0.01) 33.334%,rgba(192, 192, 192, 0.01) 33.334%, rgba(192, 192, 192, 0.01) 50.001000000000005%,rgba(237, 237, 237, 0.01) 50.001%, rgba(237, 237, 237, 0.01) 66.668%,rgba(194, 194, 194, 0.01) 66.668%, rgba(194, 194, 194, 0.01) 83.33500000000001%,rgba(227, 227, 227, 0.01) 83.335%, rgba(227, 227, 227, 0.01) 100.002%),linear-gradient(138deg, rgba(146, 146, 146, 0.03) 0%, rgba(146, 146, 146, 0.03) 25%,rgba(33, 33, 33, 0.03) 25%, rgba(33, 33, 33, 0.03) 50%,rgba(46, 46, 46, 0.03) 50%, rgba(46, 46, 46, 0.03) 75%,rgba(172, 172, 172, 0.03) 75%, rgba(172, 172, 172, 0.03) 100%),linear-gradient(38deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 16.667%,rgba(28, 28, 28, 0.03) 16.667%, rgba(28, 28, 28, 0.03) 33.334%,rgba(236, 236, 236, 0.03) 33.334%, rgba(236, 236, 236, 0.03) 50.001000000000005%,rgba(3, 3, 3, 0.03) 50.001%, rgba(3, 3, 3, 0.03) 66.668%,rgba(207, 207, 207, 0.03) 66.668%, rgba(207, 207, 207, 0.03) 83.33500000000001%,rgba(183, 183, 183, 0.03) 83.335%, rgba(183, 183, 183, 0.03) 100.002%),linear-gradient(145deg, rgba(20, 20, 20, 0.02) 0%, rgba(20, 20, 20, 0.02) 20%,rgba(4, 4, 4, 0.02) 20%, rgba(4, 4, 4, 0.02) 40%,rgba(194, 194, 194, 0.02) 40%, rgba(194, 194, 194, 0.02) 60%,rgba(34, 34, 34, 0.02) 60%, rgba(34, 34, 34, 0.02) 80%,rgba(71, 71, 71, 0.02) 80%, rgba(71, 71, 71, 0.02) 100%),linear-gradient(78deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 20%,rgba(95, 95, 95, 0.02) 20%, rgba(95, 95, 95, 0.02) 40%,rgba(71, 71, 71, 0.02) 40%, rgba(71, 71, 71, 0.02) 60%,rgba(7, 7, 7, 0.02) 60%, rgba(7, 7, 7, 0.02) 80%,rgba(130, 130, 130, 0.02) 80%, rgba(130, 130, 130, 0.02) 100%),linear-gradient(293deg, rgba(213, 213, 213, 0.03) 0%, rgba(213, 213, 213, 0.03) 20%,rgba(220, 220, 220, 0.03) 20%, rgba(220, 220, 220, 0.03) 40%,rgba(146, 146, 146, 0.03) 40%, rgba(146, 146, 146, 0.03) 60%,rgba(57, 57, 57, 0.03) 60%, rgba(57, 57, 57, 0.03) 80%,rgba(120, 120, 120, 0.03) 80%, rgba(120, 120, 120, 0.03) 100%),linear-gradient(90deg, rgb(225, 15, 180),rgb(78, 198, 243))`,
        position: "absolute",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "system-ui"
          }
        }}
      />
      <div
        css={{
          background: "#041016",
          margin: "40px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 15,
          padding: "8rem",
          boxShadow: `
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)`
        }}
      >
        <h1
          css={{
            color: "#E9F5FB",
            height: "100%",
            textAlign: "center"
          }}
        >
          <Textfit
            max={256}
            min={24}
            style={{
              minHeight: "80%",
              maxHeight: "80%",
              lineHeight: 1
            }}
          >
            {window.title}
          </Textfit>
        </h1>
        <div
          css={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 36,
            margin: "-5rem"
          }}
        >
          <ul
            css={{
              listStyleType: "none",
              display: "flex",
              "& li": {
                marginRight: ".5rem",
                "&:not(:last-child):after": {
                  content: "'•'",
                  marginLeft: ".5rem"
                }
              }
            }}
          >
            {window.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span>{window.author}</span>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("corgi"));
