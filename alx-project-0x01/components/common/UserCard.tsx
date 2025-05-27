import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company
}) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-6 space-y-3 border border-gray-100">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-blue-600">@{username}</p>
      </div>
      
      <div className="space-y-1 text-sm text-gray-700">
        <p><span className="font-medium">Email:</span> {email}</p>
        <p><span className="font-medium">Phone:</span> {phone}</p>
        <p><span className="font-medium">Website:</span> {website}</p>
        <p><span className="font-medium">Address:</span> {address.street}, {address.city}</p>
      </div>

      <div className="pt-2 mt-2 border-t text-sm">
        <p className="font-semibold text-gray-800">{company.name}</p>
        <p className="text-gray-500 italic">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
