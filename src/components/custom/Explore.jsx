import Country from "./Country";

const Explore = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="mb-4">
          <h2 className="text-center mb-0 display-4 fw-bold">Explore Nearby</h2>
        </div>
        <div className="row g-4 g-md-5">
          <Country
            title="San Francisco"
            des="13 mins drive"
            imgUrl="/images/country-1.jpg"
          />
          <Country
            title="Los Angeles"
            des="25 mins drive"
            imgUrl="/images/country-2.jpg"
          />
          <Country
            title="Miami"
            des="45 mins drive"
            imgUrl="/images/country-3.jpg"
          />
          <Country
            title="Sanjosh"
            des="55 mins drive"
            imgUrl="/images/country-4.jpg"
          />
          <Country
            title="New York"
            des="1 hours drive"
            imgUrl="/images/country-5.jpg"
          />
          <Country
            title="North Justen"
            des="2 hours drive"
            imgUrl="/images/country-6.jpg"
          />
          <Country
            title="Rio"
            des="20 mins drive"
            imgUrl="/images/country-7.jpg"
          />
          <Country
            title="Las Vegas"
            des="3 hours drive"
            imgUrl="/images/country-8.jpg"
          />
          <Country
            title="Texas"
            des="55 mins drive"
            imgUrl="/images/country-9.jpg"
          />
          <Country
            title="Chicago"
            des="13 mins drive"
            imgUrl="/images/country-10.jpg"
          />
          <Country
            title="New Keagan"
            des="35 mins drive"
            imgUrl="/images/country-11.jpg"
          />
          <Country
            title="Oslo"
            des="1 hour 13 mins drive"
            imgUrl="/images/country-12.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Explore