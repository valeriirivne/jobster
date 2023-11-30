const Loading = (props) => {
  const center = props.center;
  return <div className={center ? 'loading loading-center' : 'loading'}></div>;
};

export default Loading;
