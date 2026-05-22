import Image from "next/image";
import Link from "next/link";

const MemberCard = ({ member_img, member_name, member_role, socialLinks }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="team-one__card mb-30">
          <div className="team-one__image">
            <Image src={member_img} alt={member_name} />
          </div>
          <div className="team-one__content">
            <div className="team-one__social">
              <Link
                href={socialLinks?.facebook}
                className="fab fa-facebook-square"
              ></Link>
              <Link
                href={socialLinks?.twitter}
                className="fab fa-twitter"
              ></Link>
              <Link
                href={socialLinks?.pinterest}
                className="fab fa-pinterest-p"
              ></Link>
              <Link
                href={socialLinks?.instagram}
                className="fab fa-instagram"
              ></Link>
            </div>
            <h3>{member_name}</h3>
            <span>{member_role}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
