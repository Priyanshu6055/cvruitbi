import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";

export default function AboutPage() {

  return (
    <>
      <BannerWrapper
        animation={animationData}
        heading="About Us"
        subtitle="Empowering Innovation and Entrepreneurship through a supportive incubation ecosystem."
      />

      <section className="container-global py-28 px-8 md:px-20 flex flex-col md:flex-row items-center gap-20">

        {/* Big Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/02.webp"
            alt="About CVRU iTBI"
            className="rounded-3xl object-cover w-full max-w-3xl h-[50vh] md:h-[47vh] shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700 space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            About CVRU iTBI
          </h2>

          <p className="leading-relaxed">
            CVRU iTBI is an initiative designed to foster the spirit of Innovation and Entrepreneurship (I&E) among students, innovators, and entrepreneurs. Our goal is to encourage and support innovative ideas and facilitate the creation of startups through incubation. By providing a nurturing environment, we enable individuals to take their innovative ideas or projects and, with the guidance and support from our academic and startup ecosystem, transform them into viable startups.
          </p>
          <p className="leading-relaxed">
            Our comprehensive support system includes mentoring from experienced professionals, access to modern facilities, and various resources that are essential for the growth and success of startups. CVRU iTBI aims to convert ideas into successful business ventures, creating a pipeline of innovative startups that contribute to economic development and job creation.
            The initiative also seeks to instill a culture of innovation and entrepreneurship within the Host Institution (HI) and its surrounding areas. By promoting entrepreneurial thinking and providing the necessary support to bring ideas to life, CVRU iTBI plays a crucial role in driving technological advancement and fostering an entrepreneurial mindset among the community.
          </p>
        </div>

      </section>

    </>
  );
}
