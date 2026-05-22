import MemberCard from "@/components/aboutus/MemberCard";
import Sectionheader from "@/components/common/Sectionheader";
import { teamMembers } from "@/data/about/Team";

const Team = () => {
  return (
    <>
      <section className="team-about-page pb-90 pt-100">
        <div className="container">
          <Sectionheader
            title={"Professional & Experts"}
            heading={"Meet the Best Agents"}
          />

          <div className="row">
            {teamMembers.map((member, index) => (
              <MemberCard
                key={index}
                member_img={member?.image}
                member_name={member?.name}
                member_role={member?.role}
                socialLinks={member?.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;
