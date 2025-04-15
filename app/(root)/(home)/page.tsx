import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <MeetingTypeList />
    </section>
  );
};

export default Home;
