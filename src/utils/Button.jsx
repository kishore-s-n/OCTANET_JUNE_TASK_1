/* eslint-disable react/prop-types */
function Button(props) {
  return (
    <div>
      <button
        className={`${
          props.transparent
            ? "bg-transparent border-white border"
            : "bg-gradient-to-r from-orange-700 to-red-800"
        } font-semibold py-2 px-3 rounded-lg text-base`}>
        {props.content}
      </button>
    </div>
  );
}
export default Button;
