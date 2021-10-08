import Loader from 'react-loader-spinner';

export default function LoaderCircle() {
  return (
    <div className="Loader">
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
}
