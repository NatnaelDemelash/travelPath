/* eslint-disable react/prop-types */
const Message = ({ message }) => {
  return (
    <p className="text-lg text-white font-light">
      <span role="img">👋</span> {message}
    </p>
  );
};

export default Message;
