const Loading = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-center items-center space-x-2 h-full">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-green-500"
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
