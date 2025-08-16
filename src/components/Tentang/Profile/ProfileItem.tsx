interface IProfileItem {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface PropTypes {
  profileObj: IProfileItem
}

export default function ProfileItem(props: PropTypes) {
  const {profileObj} = props
  return (
      <div className="space-y-4  text-center flex flex-col items-center w-sm">
        <img src={profileObj.image} className="size-32 rounded-full object-cover" />
        <div>
          <h5 className="text-xl font-bold">{profileObj.name}</h5>
          <p className="text-lg mb-1">{profileObj.role}</p>

        </div>
      </div>
  );
}
