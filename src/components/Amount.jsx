/* eslint-disable react/prop-types */

export default function Amount(props) {
  return (
    <div className="amount">
      <div className="amount-child">
        <h3>
          Tip Amount <br /> <span>/person</span>
        </h3>
        <div>
          <p className="value">${props.tipAmount.toFixed(2)}</p>
        </div>
      </div>

      <div className="amount-child">
        <h3>
          Total <br /> <span>/person</span>
        </h3>
        <div>
          <p className="value">${props.totalAmount.toFixed(2)}</p>
        </div>
      </div>
      {props.isSubmitted ? (
        <button onClick={props.handleRefresh}>REFRESH</button>
      ) : (
        <button type="submit">SUBMIT</button>
      )}
    </div>
  );
}
