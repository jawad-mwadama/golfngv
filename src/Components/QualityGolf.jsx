import outdoorImg from "/images/front-view-fit-friends-playing-golf.jpg";
import BookNow from "../Utils/BookNowButton";

function QualityGolf() {
  return (
    <div className="p-3 sm:p-9">
      <div className="mx-auto flex-wrap justify-between pt-6 sm:flex sm:pt-9">
        <div className="max-w-lg pt-3">
          <h2 className="text-3xl font-semibold sm:text-6xl">
            Quality Course,
            <br />
            Confident Ball
          </h2>

          <p className="pt-4 text-sm">
            Whether you are a seasoned pro or starting out, our expert
            instructors are available to help you improve your game. We offer a
            variety of lessons and clinics, as well as state-of-the-art
            equipment to help you get the most out of your swing.
          </p>

          <p className="pt-6 text-sm">
            Our clubhouse is the perfect place to relax after a round of golf.
            Enjoy a refreshing beverage and delicious meal while taking in
            stunning views of the course.
          </p>

          <BookNow />
        </div>

        <img src={outdoorImg} alt="outdoor" className="h-[460px] rounded-3xl" />
      </div>
    </div>
  );
}

export default QualityGolf;
