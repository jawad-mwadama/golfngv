import outdoorImg from "/images/man-having-game-golf-outdoors.jpg";

function QualityGolf() {
  return (
    <div className="p-3 sm:p-9">
      <div className="flex justify-between pt-6 sm:pt-9">
        <div>hello,hi</div>

        <div className="relative rounded-3xl bg-[url('/images/man-having-game-golf-outdoors.jpg')] bg-cover bg-center"></div>
        <img
          src={outdoorImg}
          alt="outdoor"
          className="h-auto w-64 rounded-md"
        />
      </div>
    </div>
  );
}

export default QualityGolf;
