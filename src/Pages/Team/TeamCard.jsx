import teamData from "../../data/teamdata";

const TeamCard = () => {
  return (
    <div className="flex flex-col items-center justify-cente px-4 max-w-[1240px] mx-auto pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto rounded-2xl object-cover pb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">
              {member.name}
            </h2>
            <p className="text-[--orange]">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
