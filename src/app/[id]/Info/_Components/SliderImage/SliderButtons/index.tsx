const SliderButtonNext = ({ showImageNext }: { showImageNext: () => void }) => {
  return (
    <button
      onClick={showImageNext}
      className=" absolute left-0 top-0 bottom-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#F19E39"
      >
        <path d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z" />
      </svg>
    </button>
  );
};

const SliderButtonPrev = ({ showImagePrev }: { showImagePrev: () => void }) => {
  return (
    <button
      onClick={showImagePrev}
      className="right-0 absolute top-0 bottom-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#F19E39"
      >
        <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
      </svg>
    </button>
  );
};

export { SliderButtonNext, SliderButtonPrev };
