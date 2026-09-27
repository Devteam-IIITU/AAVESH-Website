const roleStyles = {
  "content team": "border-blue-500 bg-blue-900",
  "design": "border-pink-500 bg-pink-900",
  "design team": "border-pink-500 bg-pink-900",
  "pr": "border-yellow-500 bg-yellow-900",
  "pr team": "border-yellow-500 bg-yellow-900",
  "social media & content": "border-blue-500 bg-blue-900",
  "social media & content team": "border-blue-500 bg-blue-900",
  "video editing": "border-purple-500 bg-purple-900",
  "video editing team": "border-purple-500 bg-purple-900",
  "volunteering": "border-green-500 bg-green-900",
  "volunteering team": "border-green-500 bg-green-900",
  default: "border-cyan-400 bg-slate-900/80 shadow-[0_0_12px_rgba(34,211,238,0.35)]",
};

import PropTypes from 'prop-types';

const TeamInfoCard = ({ name, rollNo, role,}) => {
  const key = (role || "").toLowerCase().trim() || "default";
  const borderClass = roleStyles[key] || roleStyles.default;

  return (
    <div className="relative mt-5 w-full max-w-xs transition-transform duration-300 ease-in-out hover:scale-110">
      {/* Role Label */}
      {role && (
        <div className={`absolute -top-5 -right-0 ${borderClass} text-white px-4 z-10`}>
          <h3 className="text-sm tracking-wider">{role}</h3>
        </div>
      )}
      {/* Card */}
      <div
        className={`flex flex-col h-[90px] border-2 ${borderClass} rounded-tl-3xl rounded-br-3xl p-3
        bg-[linear-gradient(to_right,#080808,#111,#1a1a1a,#222,#1a1a1a,#111,#080808)]`}
      >
        <div className="flex items-center pl-4">
          {/* <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white" /> */}
          <div>
            <h1 className="text-xl text-white">{name}</h1>
            <h4 className="text-xl pr-2">{rollNo}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamInfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  rollNo: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamInfoCard;
